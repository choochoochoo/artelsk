import React from 'react'
import styles from './Header.css'

export const Header = () => {
    const imageRrc = require(`./logo/logo.png`)

    const iconStyle = {
        backgroundImage: `url(${imageRrc})`,
    }

    return (
        <div className={styles.root}>
            <a href='https://www.artelsk.ru'>
                <div
                    style={iconStyle}
                    className={styles.logo}
                />
            </a>
        </div>
    )
}