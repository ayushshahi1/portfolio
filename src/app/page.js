import React from 'react'
import {FiDownload} from "react-icons/fi"
import Socials from '../components/Socials'
import Photo from '../components/Photo'
import Stats from '../components/Stats'

const Home = () => {
  return (
    <section className='h-full mt-20'>
      <div className='container ms-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between'>
          <div className='text-center order-2 xl:order-none'>
            <span className='text-xl'>Frontend Developer</span>
            <h1 className='h1'>Hello I'm <br /> <span className='text-[#00FF99]'>Ayush Shahi</span></h1>
            <p className='max-w-[500px] mb-9 text-white/80'>I am eager to create, learn and grow in the world of frontend development.</p>
            <div className='flex flex-col items-center gap-8'>
              <a href="/assets/ayush-cv.pdf" download="Resume">

              <button
              size="lg"
              className='uppercase flex items-center gap-2 px-3 py-2 rounded-[50px] text-[#00FF99] border border-[#00FF99]'>
                <span>Download cv</span>
                <FiDownload className='text-xl' />
              </button>
                </a>
              <div className='mb-8'>
                <Socials />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
