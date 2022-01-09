const weekDays = ['domingo', 'luns', 'martes', 'mércores', 'xoves', 'venres', 'sábado'];
const weekDaysAlt = ['domingo', 'segunda feira', 'terceira feira', 'cuarta feira', 'quinta feira', 'sexta feira', 'sábado'];
const months = ['xaneiro', 'febreiro', 'marzo', 'abril', 'maio', 'xuño', 'xullo', 'agosto', 'setembro', 'outubro', 'novembro', 'decembro'];

export default function Dates({ dateString }) {
    const date = new Date(JSON.parse(dateString))

    const formatedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

    return (
            <time dateTime={date.toISOString()}>{formatedDate}</time>
      )
}
