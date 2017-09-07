import React from 'react';
import {ServicePanel} from '../ServicePanel'
import {services} from "../../../data/services";

export const App = () => (
    <div>
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