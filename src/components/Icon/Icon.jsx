import React, {PropTypes} from 'react'
import styles from './Icon.css'

export const Icon = (props) => {
    const imageRrc = require(`./icons/${props.name ? props.name : 'dart.png' }`)

    const iconStyle = {
        backgroundImage: `url(${imageRrc})`,
    }

    return (
        <div
            style={iconStyle}
            className={styles.icon}
        />
    )
}

Icon.propTypes = {
    name: PropTypes.string,
}

Icon.defaultProps = {
    name: '',
}
