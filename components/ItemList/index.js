import Date from 'components/Date'
import styles from './styles.module.css'
import Link from 'next/link'

export default function ItemList({ items, slug }) {
    return (
        <ul className={styles.itemlist}>
        {items.map((item) => (
            <li key={item.slug}>
                <Link href={slug + item.slug} >
                    <a>
                        <Date dateString={item.date} />
                        <span> - </span>
                        <span>{item.title}</span>
                    </a>
                </Link>
            </li>
        ))}
        </ul>
    )
  }
