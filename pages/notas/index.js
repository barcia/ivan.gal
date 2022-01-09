import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Date from '../../components/Date'
import styles from '../../styles/Home.module.css'
import { getAllNotes } from '../../lib/content'
import Link from 'next/link'
import ItemList from '../../components/ItemList'
import Page from '../../components/layouts/Page'

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
