import Head from 'next/head'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Underfy</h1>

      <main className='flex'>
        <Sidebar />
        <Center />

      </main>
       
       <div>{/*Player*/}</div> 

    </div>
  )
}
