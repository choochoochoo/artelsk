import React from 'react'
import styles from './Map.css'

export const Map = (props) => (
    <div className={styles.root}>
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9e3132485dd6cf69a9a3a7c44a60fa3f3f6f8b07180e5bf042d9dacab7403d87&amp;lang=ru_RU&amp;scroll=true&amp;source=constructor"
            width="320"
            height="240"
            frameBorder="0"
        >
        </iframe>
    </div>
)
