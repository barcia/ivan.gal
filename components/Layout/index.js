// import styles from './styles.module.css'
import Head from 'next/head'
import Navbar from '../Navbar'
import styles from './styles.module.css'


export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <Navbar />
            <main>
                {children}
            </main>
            <footer className={styles.footer}>

            </footer>
        </div>

      )
}
