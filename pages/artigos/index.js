import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Home.module.css'
import { getAllPosts } from '../../lib/content'
import Link from 'next/link'
import ItemList from '../../components/ItemList'

export default function Artigos({ title, allPosts }) {
  return (
    <>
      <Head>
        <title>Iván Barcia - Artigos</title>
        <meta name="description" content='Artigos de Iván Barcia' />
      </Head>

        <h1>{title}</h1>

        <ItemList items={allPosts} slug="/artigos/" />

    </>

  )
}


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'excerpt',
  ])

  return {
    props: {
      title: 'Artigos',
      allPosts
     },
  }
}
