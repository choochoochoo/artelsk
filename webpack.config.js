const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const localNodeModules = path.resolve(__dirname, 'node_modules') + path.sep

const getModule = (module) => {
    const pathModule = path.resolve(localNodeModules, module)
    if(fs.existsSync(pathModule)) {
        return path.resolve(localNodeModules, module)
    }
    return module
}

const { PluginList, getBabelOptions, } = require('./src/utils')

const babelOptions = getBabelOptions(false, getModule)

const {
    NODE_ENV = 'development',
} = process.env

const isDevelopment = NODE_ENV === 'development'

const entry  = isDevelopment ? [
        './src/index.jsx'
    ] : {
    bundleStaticPage: './src/staticPage.jsx'
}

var outputPath = __dirname + '/temp',
    outputPublicPath =  'http://localhost:3000/scripts/';

const output = isDevelopment ?
    {
        path: path.join(__dirname, 'src/'),
        filename: "js/bundle.js"
    } :
    {
    // Where to put build results when doing production builds:
    path: outputPath,

    // JS filename you're going to use in HTML
    filename: '[name].js',

    // Path you're going to use in HTML
    publicPath: outputPublicPath,

    libraryTarget: "commonjs2"

}

const cssLoader = isDevelopment ?

    {
        test: /\.css$/,
        use: [
            getModule('style-loader'),
            {
                loader: getModule('css-loader'),
                options: {
                    modules: true,
                    importLoaders: 1,
                    camelCase: true,
                    localIdentName: isDevelopment ? '[path][name]--[local]--[hash:base64:5]' : '[hash:base64:8]'
                }
            },
            {
                loader: getModule('postcss-loader'),
                options: {
                    plugins: [
                        require(getModule('postcss-import')),
                        require(getModule('postcss-for')),
                        require(getModule('postcss-simple-vars')),
                        require(getModule('postcss-custom-properties')),
                        require(getModule('postcss-nested')),
                        require(getModule('postcss-color-function')),
                        require(getModule('autoprefixer'))({
                            browsers: ['last 2 versions', 'ie >= 9']
                        })
                    ]
                }
            }
        ]
    }
    :
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                        localIdentName: '[hash:base64:8]',
                        minimize: true,
                    }
                },
            ]
        })
    }

module.exports = {
    entry: entry,
    target: isDevelopment ? 'web' : 'node',
    output: output,
    module: {
        rules: [
            {
                test: /\.config.css$/,
                use: [
                    getModule('babel-loader'),
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: getModule('babel-loader'),
                options: babelOptions
            },
            cssLoader,
            {
                test: /\.svg$/,
                loader: getModule('svg-inline-loader'),
                options: {
                    removeTags: true,
                    removingTags: [
                        'title',
                        'desc'
                    ],
                    removeSVGTagAttrs: false
                }
            },
            // Usage:
            // import imageSrc from './img/image.png'
            // <img src={imageSrc} />
            {
                test: /\.(?:jpg|png|gif)$/,
                loader: getModule('file-loader'),
                options: {
                    name: 'img/[hash:base64:5].[ext]'
                }
            },
        ]
    },
    plugins: (new PluginList())
        .add([
            new webpack.DefinePlugin({
                DEBUG: isDevelopment,
                'process.env.BROWSER': JSON.stringify(true),
                'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            }),
        ])
        .if(isDevelopment,
            [
                new webpack.SourceMapDevToolPlugin(),
                new webpack.NamedModulesPlugin()
            ]
        )
        .if(!isDevelopment,
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false,
                    dead_code: true // eslint-disable-line camelcase
                }
            })
        )
        .if(!isDevelopment,
            new ExtractTextPlugin('css/styles.css')
        )
        .list,
};