import React, {PropTypes} from 'react'
import {Icon} from '../Icon'
import styles from './ContactItem.css'

export const ContactItem = (props) => (
    <div className={styles.item}>
        <div className={styles.icon}>
            <Icon name={`${props.name}.png`}/>
        </div>
        <div className={styles.title}>{props.value}</div>
    </div>
)

ContactItem.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
}

ContactItem.defaultProps = {
    name: '',
    value: '',
}