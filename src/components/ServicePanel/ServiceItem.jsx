import React, {PropTypes} from 'react'
import {Icon} from '../Icon'
import styles from './ServiceItem.css'

export const ServiceItem = (props) => (
    <div className={styles.item}>
        <div className={styles.icon}>
            <Icon name={props.icon}/>
        </div>
        <div className={styles.title}>{props.name}</div>
    </div>
)

ServiceItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    icon: PropTypes.string,
}

ServiceItem.defaultProps = {
    id: 0,
    name: '',
    icon: '',
}