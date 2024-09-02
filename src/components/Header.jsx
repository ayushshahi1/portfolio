import Link from 'next/link'
import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='p-15 mx-auto flex justify-between items-center'>
      <Link href="/">
      <h1 className='text-4xl font-semibold'>Ayush Shahi</h1>
      </Link>

      
        <Nav />

        <Link href="/contact">
        <button className='px-3 py-2 rounded-[50px] text-[black] bg-[#00FF99]'>Hire me</button>
        </Link>
     
    </header>
  )
}

export default Header
