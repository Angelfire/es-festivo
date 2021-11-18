import Head from 'next/head'

function Meta({ description, title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}

export default Meta
