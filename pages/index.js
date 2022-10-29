import Head from 'next/head'
import Card from '../components/card'
import Image from 'next/image'
import Link from 'next/link'
import scott from '../public/scott.jpg'
import adelphiApp from '../public/adelphi-app-insta.png'
import au2goApp from '../public/au2go-insta.png'
import logo from '../public/logo.png'
import styles from '../styles/Home.module.css'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { useState } from 'react'
import Header from '../components/header'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={ darkMode ? 'dark' : '' }>
      <Head>
        <title>Scott Finkelstein | Technologist, Developer, Leader</title>
        <meta name="description" content="Scott Finkelstein | Technologist, Developer, Leader" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header darkMode={ darkMode } setDarkMode={ setDarkMode } />
      <main className='dark:bg-black'>
      <div className="primary-bar relative bg-gray-100 px-3 dark:bg-slate-600">
        <div id="image" className='hidden absolute rounded-full shadow-[5px_5px_5px_rgba(0,0,0,0.5)] w-60 h-60 overflow-hidden right-20 -top-10 md:block'>
          <Image src={ scott } layout="fill" objectFit='cover' alt="" />
        </div>
        <h1 className='font-monserrat text-6xl uppercase m-0'>
          <span className='text-logo_blue dark:text-logo_blue_dark'>Technologist</span><br />
          <span className='text-logo_green dark:text-logo_green_dark'>Developer</span><br />
          <span className='text-logo_orange dark:text-logo_orange_dark'>Leader</span>
        </h1>
        {/* <h2 className='text-xl text-center p-7 pl-0 md:text-left md:pr-96'>Experienced web and mobile developer with a passion for creating digital experiences that put people first.</h2> */}
      </div>
      <section className='mt-10 flex flex-col lg:flex-row'>
        <h2 className='font-monserrat text-2xl text-center p-3 lg:text-left dark:text-white'>Experienced web and mobile developer with a passion for creating digital experiences that put people first.</h2>
        <div className='text-center lg:mr-24'>
          <div className='flex justify-center gap-5 mb-5 text-5xl text-center dark:text-white'>
            <a href="https://instagram.com/scott.finkelstein" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
            <a href="https://twitter.com/sbf02" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/in/sbf0202/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
          </div>
          {/* <button className='bg-gray-300 font-monserrat font-medium text-black mx-auto px-7 py-3 rounded-lg text-center'>Resumé</button> */}
        </div>
      </section>
      <section className='p-3 dark:text-white'>
        <div className='flex items-center gap-2'>
          <IoPhonePortraitOutline className='text-3xl' />
          <h3 className='font-monserrat text-3xl my-5'>Mobile Apps</h3>
        </div>
        <div className='flex flex-col md:flex-row md:flex-wrap md:gap-7'>
          <Card image={ adelphiApp } content='The Adelphi App focuses on the resources that students use most and features a clean and easy-to-navigate design. Fully native implementation using Swift / Swift UI, pulling in data sources from a Django REST Framework instance.' appStoreUrl='https://apps.apple.com/app/apple-store/id1571934942' googlePlayUrl='https://play.google.com/store/apps/details?id=edu.adelphi.app' darkMode={ darkMode } />
          <Card image={ au2goApp } content='AU2GO is a native app accessible from iOS and Android smartphones, tablets, or other mobile devices, including the Apple Watch. It provides important information at the fingertips of Adelphi University students, alumni, faculty, staff and visitors.' appStoreUrl='https://apps.apple.com/us/app/au2go/id881440294' googlePlayUrl='https://play.google.com/store/apps/details?id=edu.adelphi.Adelphi' darkMode={ darkMode } />
        </div>
        {/* <div className='flex flex-col md:flex-row md:flex-wrap md:gap-7'>
          <div className='bg-white rounded-md mb-10 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-center basis-1/3 flex-1 dark:bg-slate-500 dark:text-white'>
            <Image src={ adelphiApp } alt='' className='rounded-t-md' />
            <p className='text-left p-3 font-monserrat'>The Adelphi App focuses on the resources that students use most and features a clean and easy-to-navigate design. Fully native implementation using Swift / Swift UI, pulling in data sources from a Django REST Framework instance.</p>
      
            <AppDownloadButtons darkMode={ darkMode } appStoreUrl='https://apps.apple.com/app/apple-store/id1571934942' googlePlayUrl='https://play.google.com/store/apps/details?id=edu.adelphi.app' />
          </div>

          <div className='bg-white rounded-md mb-10 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-center basis-1/3 flex-1 dark:bg-slate-500 dark:text-white'>
            <Image src={ au2goApp } alt='' className='rounded-t-md' />
            <p className='text-left p-3 font-monserrat'>AU2GO is a native app accessible from iOS and Android smartphones, tablets, or other mobile devices, including the Apple Watch. It provides important information at the fingertips of Adelphi University students, alumni, faculty, staff and visitors.</p>
            <AppDownloadButtons darkMode={ darkMode } appStoreUrl='https://apps.apple.com/us/app/au2go/id881440294' googlePlayUrl='https://play.google.com/store/apps/details?id=edu.adelphi.Adelphi' />
          </div>
        </div> */}
      </section>
      </main>
    </div>
  )
}
