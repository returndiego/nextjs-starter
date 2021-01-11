import Head from 'next/head'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Simple app</title>
      </Head>
      <Nav />
      <Main />
      <Footer />
    </Layout>
  )
}
