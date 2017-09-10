import React, {PropTypes} from 'react'
import {Icon} from '../Icon'
import styles from './ContactItem.css'

export const ContactItem = (props) => (
    <div className={styles.item}>
        <a
            href={props.link}
            target={props.target}
            className={styles.link}
        >
            <div className={styles.icon}>
                <Icon name={props.icon}/>
            </div>
            <div className={styles.title}>
                {props.value}
            </div>
        </a>
    </div>
)

ContactItem.propTypes = {
    link: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.string,
    target: PropTypes.string,
}

ContactItem.defaultProps = {
    link: '',
    value: '',
    icon: '',
    target: '',
}