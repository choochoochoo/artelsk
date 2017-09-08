import React from 'react';
import {ServicePanel} from '../ServicePanel'
import {services} from "../../../data/services";
import styles from './App.css'

export const App = () => (
    <div className={`${styles.app}`}>
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
)