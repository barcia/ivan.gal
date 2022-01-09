import Head from 'next/head'
import Layout from 'components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <title>{pageProps.title}</title>
        <meta name="description" content={pageProps.excerpt} />
        {/* // <link rel="icon" href="/favicon.ico" />

        // <meta property="og:title" content={pageProps.title} />
        // <meta property="og:description" content={pageProps.description} />
        // <meta property="og:image" content={`/open-graph/${pageProps.ogImage}`} />
        // <meta property="og:image:width" content={FacebookOpenGraph.width} />
        // <meta property="og:image:height" content={FacebookOpenGraph.height} /> */}
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
  </>
}

export default MyApp
