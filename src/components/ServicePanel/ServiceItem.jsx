import React, { PropTypes } from 'react'

export const ServiceItem = (props) => (
    <div>
        <div>{props.icon}</div>
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