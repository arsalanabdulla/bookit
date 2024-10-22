import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center h-[80vh] bg-slate-100 drop-shadow-lg">
      <h1 className='text-gray-900 text-2xl sm:text-5xl font-bold mb-12 leading-loose'><span className='bg-gray-900 text-white py-4 pl-4 pr-8 rounded-tr-[50px]'>Bookit</span> for book Room & Places</h1>
      <Link href='/rooms' className='text-lg sm:text-xl font-semibold hover:bg-blue-900 py-5 px-8 rounded-full bg-blue-950 text-white'>Explore Room & Places</Link>
    </div>
    </>
  )
}

export default Home