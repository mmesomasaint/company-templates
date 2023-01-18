import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { BsTwitter, BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import Styles from '../styles/Home.module.css'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = useCallback(() => setIsOpen((open) => !open), [])
  const handleDarkMode = useCallback(
    () => setDarkMode((dark) => !dark),
    []
  )

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
                href='#Home'
                className='text-lg font-medium text-[#023047] dark:text-white capitalize'
              >
                Home
              </a>
              <a
                href='#Templates'
                className='text-lg font-medium text-[#023047] dark:text-white capitalize'
              >
                Templates
              </a>
              <a
                href='#About'
                className='text-lg font-medium text-[#023047] dark:text-white capitalize'
              >
                About
              </a>
              <a
                href='#Contact'
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

      <main className='bg-[#ffffff] dark:bg-[#023047]'>
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

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center py-16 px-4'>
            <div>
              <Image
                src='/imgs/temp1.webp'
                width={300}
                height={200}
                alt='template 1'
              />
              <a href='/' className='w-full text-xl font-medium text-center text-[#023047] dark:text-white capitalize mt-1'>Local Laundry Template</a>
            </div>
            <div>
              <Image
                src='/imgs/temp2.webp'
                width={300}
                height={200}
                alt='template 2'
              />
              <a href='/templates/it-template' className='w-full text-xl font-medium text-center text-[#023047] dark:text-white capitalize mt-1'>IT Template</a>
            </div>
            <div>
              <Image
                src='/imgs/temp3.jpg'
                width={300}
                height={200}
                alt='template 3'
              />
              <a href='/' className='w-full text-xl font-medium text-center text-[#023047] dark:text-white capitalize mt-1'>Foreign Laundry Template</a>
            </div>
          </div>
        </div>
      </main>

      <footer className='bg-gray-400 dark:bg-[#023047] w-full h-full'>
        <div className='bg-[rgba(0,0,0,0.75)] dark:bg-[rgba(0,0,0,0.45)] w-full h-full'>
          <div className='mb-3 w-fit mx-auto h-fit py-4'>
            <div className='flex gap-10'>
              <BsTwitter className='text-2xl text-slate-300' />
              <BsLinkedin className='text-2xl text-slate-300' />
              <BsWhatsapp className='text-2xl text-slate-300' />
              <BsGithub className='text-2xl text-slate-300' />
            </div>
          </div>
          <div className='w-fit mx-auto border-t-2 border-t-slate-300 pb-3 pt-1 h-full'>
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
  )
}
