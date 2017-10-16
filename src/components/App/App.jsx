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
        <h1 className={styles.headerTitle}>
            Мы предоставляем качественые экспресс услуги ремонта телефонов и ноутбуков, изготовления ключей, печати, проката а так же услуги
            <a
                href="https://www.vladimirkosolapov.com/"
                target="_blank"
                className={styles.link}
            >
                &nbsp;фотографа&nbsp;
            </a>
            в Красной Поляне и Розе Хутор.
        </h1>
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