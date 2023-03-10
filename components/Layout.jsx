import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <div className="container m-auto w-auto">
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Navbar />
          {children}
    </div>
  )
}

export default Layout