import React, {PropTypes} from 'react'
import styles from './Header.css'

export const Header = (props) => (
    <div className={styles.root}>
        <a href='https://www.artelsk.ru'>
            <div className={styles.logo}/>
        </a>
    </div>
)
