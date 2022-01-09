export default function Page({title, children }) {
    return (
        <>
            <h1>{title}</h1>
            <div>{children}</div>
        </>
    )
}
