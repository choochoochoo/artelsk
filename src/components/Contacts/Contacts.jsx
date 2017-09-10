import React, {PropTypes} from 'react'
import styles from './Contacts.css'
import {ContactItem} from './ContactItem.jsx'

export const Contacts = (props) => (
    <div>
        <div className={styles.title}>
            <h3>{props.title}</h3>
        </div>
        <div className={styles.items}>
            {
                props.contacts.map((item) => {
                    return <ContactItem
                        key={item.id}
                        link={item.link}
                        value={item.value}
                        icon={item.icon}
                        target={item.target}
                    />
                })
            }
        </div>
    </div>
)

Contacts.propTypes = {
    title: PropTypes.string,
    contacts: PropTypes.arrayOf(PropTypes.object),
}

Contacts.defaultProps = {
    title: '',
    contacts: [],
}