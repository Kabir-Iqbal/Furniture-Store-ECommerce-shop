import React from 'react'
import Link from 'next/link'
import Header from '../components/header'

function Page() {
  return (
    <div>
    <Header bgColor="bg-white"/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl md:text-8xl font-bold">404</h1>
      <p className="text-2xl md:text-3xl mt-4">Page not found</p>
      <Link href={"/"} className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go back home</Link>
    </div>
    </div>
  )
}

export default Page