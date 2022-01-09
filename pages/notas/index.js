import { getAllNotes } from 'lib/content'
import ItemList from 'components/ItemList'
import Page from 'components/layouts/Page'

export default function Notas({ allNotes }) {

  return (
      <Page title="Notas">
        <ItemList items={allNotes}  slug="/notas/" />
      </Page>
  )
}


export async function getStaticProps() {
  const allNotes = getAllNotes([
    'title',
    'excerpt',
  ])

  return {
    props: { allNotes },
  }
}
