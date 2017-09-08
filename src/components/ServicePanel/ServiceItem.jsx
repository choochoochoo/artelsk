import React, {PropTypes} from 'react'
import {Icon} from '../Icon'

export const ServiceItem = (props) => (
    <div>
        <Icon name={props.icon}/>
        <div>{props.name}</div>
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