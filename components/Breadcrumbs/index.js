import Link from 'next/link'

export default function Breadcrumbs({ items }) {

return (
    <nav>
        <ol>
            {items.map((item, index) => {
                return (
                    <li key={index}>
                        <Link href={item.title}>{item.title}</Link>
                    </li>
                )
            })}
        </ol>
    </nav>
)
}
