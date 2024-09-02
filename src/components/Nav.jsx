"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'


const Links = [
  {
    name : "home",
    path : "/",
  },
  {
    name : "resume",
    path : "/resume",
  },
  {
    name : "work",
    path : "/work",
  },
  {
    name : "contact",
    path : "/contact",
  },
]
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex gap-8'>
      {Links.map((link,index) => {
        return( 
        <Link
         href={link.path}
        key={index} 
        className={`${
          link.path === pathname && "text-[#00FF99]  border-b-2 border-[#00FF99]"
          } capitalize font-medium hover:text-[#00FF99] transition-all`}>
        {link.name}
        </Link>)
      })}
    </nav>
  )
}

export default Nav
