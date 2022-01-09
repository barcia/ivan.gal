import Link from "next/link";
import styles from './style.module.css'
import { navbar } from '../../lib/constants'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                {navbar.map((item) => (
                    <li key={item.href}><Link href={item.href} >{ item.name }</Link></li>
                ))}
            </ul>
        </nav>
    )
}
