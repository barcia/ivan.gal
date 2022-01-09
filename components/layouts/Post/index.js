import Date from 'components/Date'
import Head from 'next/head'
import styles from './styles.module.css'
import { useState, useEffect } from 'react';



export default function Post({ title, date, readingTime, content }) {

    useEffect(() => {
        import("../../../web-components/sketchfab-embed")
        import("../../../web-components/youtube-embed.js")
    });

    return (
        <>
        <h1 className={styles.title}>{title}</h1>
        {readingTime && <div>Tempo de lectura: {readingTime} min.</div>}
        <div className={styles.date}> <Date dateString={date} /> </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
        </>
    )


}
