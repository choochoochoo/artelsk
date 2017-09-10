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
                Object.keys(props.contacts).map((item) => {
                    const value = props.contacts[item]
                    return <ContactItem
                        key={item}
                        name={item}
                        value={value}
                    />
                })
            }
        </div>
    </div>
)

Contacts.propTypes = {
    title: PropTypes.string,
    contacts: PropTypes.object,
}

Contacts.defaultProps = {
    title: '',
    contacts: {},
}