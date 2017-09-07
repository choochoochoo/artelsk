import React, {PropTypes} from 'react'
import {ServiceItem} from './ServiceItem.jsx'
import styles from './ServicePanel.css'

export const ServicePanel = (props) => (
    <div className={styles.root}>
        <div>
            {props.title}
        </div>
        <div>
            {
                props.services.map((item) => {
                    return <ServiceItem
                        key={item.id}
                        name={item.name}
                        icon={item.icon}
                    />
                })
            }
        </div>
    </div>
)

ServicePanel.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    services: PropTypes.arrayOf(PropTypes.object)
}

ServicePanel.defaultProps = {
    id: 0,
    title: '',
    services: [],
}