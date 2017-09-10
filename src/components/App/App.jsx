import React from 'react';
import {ServicePanel} from '../ServicePanel'
import {Contacts} from '../Contacts'
import {Header} from '../Header'
import {Map} from '../Map'
import {services} from "../../../data/services";
import {contacts} from "../../../data/contacts";
import styles from './App.css'

export const App = () => (
    <div className={styles.app}>
        <Header/>
        <div className={styles.content}>
            <Contacts
                title='Контакты'
                contacts={contacts}
            />
            <Map/>
            <h3 className={styles.title}>Наши услуги</h3>
            {
                services.map((item) => {
                    return <ServicePanel
                        key={item.id}
                        title={item.title}
                        services={item.services}
                    />
                })
            }
        </div>
    </div>
)