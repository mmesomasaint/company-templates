import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { BsTwitter, BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'
import { MdDarkMode } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import Styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = useCallback(() => setIsOpen((open) => !open), [])
  const handleDarkMode = useCallback(() => setDarkMode((dark) => !dark), [])

  return (
    <div className={darkMode && 'dark'}>
      <Head>
        <title>Company Templates</title>
        <meta name='description' content='Templates for company websites' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='bg-[#ffffff] dark:bg-[#023047]'>
        <div className='relative flex justify-between items-center max-w-[90rem] mx-auto p-4'>
          <div>
            <span className={Styles.headFont}>
              <h1 className='leading-none text-lg md:text-2xl font-medium border-2 p-1 md:p-3 border-[#023047] dark:border-white text-[#023047] dark:text-white'>
                Company Templates
              </h1>
            </span>
          </div>
          <div className='flex gap-10 justify-between items-center'>
            <div
              className={`${
                isOpen ? 'flex absolute top-[100%] left-0' : 'hidden'
              } md:static md:flex flex-col md:flex-row pb-5 md:pb-0 px-5 md:px-0 gap-x-1 gap-y-8 md:gap-x-8 items-start justify-evenly md:items-center w-full bg-white dark:bg-[#023047] md:bg-transparent`}
            >
              <a
                href='#home'
                className='text-lg font-medium text-[#023047] dark:text-white capitalize'
              >
                Home
              </a>
              <a
                href='#templates'
                className='text-lg font-medium text-[#023047] dark:text-white capitalize'
              >
                Templates
              </a>
              <a
                href='#about'
                className='text-lg font-medium text-[#023047] dark:text-white capitalize'
              >
                About
              </a>
              <a
                href='#contact'
                className='text-lg font-medium text-[#023047] dark:text-white capitalize'
              >
                Contact
              </a>
            </div>

            <div className='flex justify-evenly items-center gap-5'>
              <RxHamburgerMenu
                className='md:hidden text-[#023047] dark:text-white text-2xl'
                onClick={handleIsOpen}
              />
              <BsGithub className='text-[#023047] dark:text-white text-2xl' />
              <MdDarkMode
                className={`text-[#023047] dark:text-white text-2xl`}
                onClick={handleDarkMode}
              />
            </div>
          </div>
        </div>
      </header>

      <div className='flex flex-col min-h-screen justify-start w-full'>
        <main id='home' className='flex-grow h-full w-full bg-[#ffffff] dark:bg-[#023047]'>
          <div className=' max-w-[90rem] mx-auto'>
            <div className="h-[20rem] w-full bg-[url('/imgs/bg-home.jpg')] bg-no-repeat bg-cover bg-center md:bg-right">
              <div className='bg-gradient-to-t from-[#ffffff] dark:from-[#023047] via-[rgba(255,255,255,0.75)] dark:via-[rgba(2,48,71,0.75)] w-full h-full'>
                <div className='w-[80%] lg:w-[50%] mx-auto bg-transparent h-full flex justify-center items-center'>
                  <h1 className='w-full text-5xl font-bold text-[#023047] dark:text-white text-center leading-tight'>
                    <span className={Styles.headFont}>
                      Corporate Aesthetic Templates
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div
              id='templates'
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4 place-items-center py-16 px-4'
            >
              <div
                className='relative'
                onClick={() => router.push('/templates/local-laundry')}
              >
                <div className='w-full absolute z-10 flex top-0 left-0 right-0 justify-end items-center p-3'>
                  <BiLinkExternal className='text-3xl text-[#023047]' />
                </div>
                <Image
                  src='/imgs/temp1.webp'
                  width={300}
                  height={200}
                  alt='template 1'
                />
                <Link
                  href='/templates/local-laundry'
                  className='w-full text-xl font-medium text-center text-[#023047] dark:text-white capitalize mt-1 hover:underline'
                >
                  Local Laundry Template
                </Link>
              </div>
              <div
                className='relative'
                onClick={() => router.push('/templates/it-template')}
              >
                <div className='w-full absolute z-10 flex top-0 left-0 right-0 justify-end items-center p-3'>
                  <BiLinkExternal className='text-3xl text-[#023047]' />
                </div>
                <Image
                  src='/imgs/temp2.webp'
                  width={300}
                  height={200}
                  alt='template 2'
                />
                <Link
                  href='/templates/it-template'
                  className='w-full text-xl font-medium text-center text-[#023047] dark:text-white capitalize mt-1 hover:underline'
                >
                  IT Template
                </Link>
              </div>
              <div
                className='relative'
                onClick={() => router.push('/templates/foreign-laundry')}
              >
                <div className='w-full absolute z-10 flex top-0 left-0 right-0 justify-end items-center p-3'>
                  <BiLinkExternal className='text-3xl text-[#023047]' />
                </div>
                <Image
                  src='/imgs/temp3.jpg'
                  width={300}
                  height={200}
                  alt='template 3'
                />
                <Link
                  href='/templates/foreign-laundry'
                  className='w-full text-xl font-medium text-center text-[#023047] dark:text-white capitalize mt-1 hover:underline'
                >
                  Foreign Laundry Template
                </Link>
              </div>
            </div>
          </div>
        </main>

        <footer className='bg-gray-400 dark:bg-[#023047] w-full'>
          <div className='bg-[rgba(0,0,0,0.75)] dark:bg-[rgba(0,0,0,0.45)] w-full pb-5'>
            <div id='contact' className='mb-3 w-fit mx-auto py-4'>
              <div className='flex gap-10'>
                <BsTwitter className='text-2xl text-slate-300' />
                <BsLinkedin className='text-2xl text-slate-300' />
                <BsWhatsapp className='text-2xl text-slate-300' />
                <BsGithub className='text-2xl text-slate-300' />
              </div>
            </div>
            <div
              id='about'
              className='w-fit mx-auto border-t-2 border-t-slate-300 h-full'
            >
              <p className='block text-base leading-none font-normal text-gray-400'>
                created by
              </p>
              <span className={Styles.headFont}>
                <p className='block text-2xl leading-none font-medium text-white'>
                  mmesoma saint
                </p>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
