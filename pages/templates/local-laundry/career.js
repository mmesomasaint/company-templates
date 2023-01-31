import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsTelephone } from 'react-icons/bs'
import { useCallback, useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = useCallback(() => setIsOpen(open => !open), [])

  return (
    <div>
      <Head>
        <title>Easy Dry</title>
        <meta name='description' content='First Stop for Laundry Services' />
        <link rel='icon' href='/imgs/local-laundry/icon.ico' />
      </Head>
      <header className='w-full relative'>
        <div className='max-w-[90rem] absolute top-0 left-0 right-0 mx-auto flex justify-between items-center gap-0 px-8 xl:px-16 '>
          <div className='my-5'>
            <Image
              src='/imgs/local-laundry/logo.png'
              width={150}
              height={170}
              alt='logo'
              className='w-[100px] sm:[150px]'
            />
          </div>
          <div className='flex justify-between gap-6 lg:gap-12 items-center'>
            <div className='lg:hidden'>
              <GiHamburgerMenu className='text-2xl sm:text-3xl text-[#76A6A6]' onClick={handleOpen} />
            </div>
            <nav className={`${isOpen ? 'flex' : 'hidden'} w-full lg:w-auto flex-col lg:flex-row lg:flex justify-evenly items-start gap-6 absolute top-[100%] left-0 lg:static px-8 lg:px-0 py-8 lg:py-0 bg-white lg:bg-transparent`}>
              <span className='text-base font-medium leading-none text-[#76A6A6] hover:scale-105 hover:text-[#D97941] w-fit'>
                <Link href='/templates/local-laundry/'>Home</Link>
              </span>
              <span className='text-base font-medium leading-none text-[#76A6A6] hover:scale-105 hover:text-[#D97941]'>
                <Link href='/templates/local-laundry/about'>About</Link>
              </span>
              <span className='text-base font-medium leading-none text-[#76A6A6] hover:scale-105 hover:text-[#D97941]'>
                <Link href='/templates/local-laundry/service'>Service</Link>
              </span>
              <span className='text-base font-medium leading-none text-[#D97941] scale-105 hover:scale-105 hover:text-[#D97941]'>
                <Link href='/templates/local-laundry/career'>Career</Link>
                <span className='block border-t border-t-[#D97941] w-full h-0 my-1' />
              </span>
              <span className='text-base font-medium leading-none text-[#76A6A6] hover:scale-105 hover:text-[#D97941]'>
                <Link href='/templates/local-laundry/find-location'>
                  Find Location
                </Link>
              </span>
              <span className='text-base font-medium leading-none text-[#76A6A6] hover:scale-105 hover:text-[#D97941]'>
                <Link href='/templates/local-laundry/my-account'>My Account</Link>
              </span>
            </nav>
            <button className='p-0 w-7 h-7 flex justify-center items-center sm:block sm:w-auto sm:h-auto sm:py-3 sm:px-5 bg-[#76A6A6] rounded-md'>
              <span className='flex justify-start items-center gap-4'>
                <BsTelephone className='text-base text-white' />
                <span className='hidden text-base font-medium leading-none text-white lg:flex justify-center items-center gap-1'>
                  <p>+234</p>
                  <p>9134</p>
                  <p>293</p>
                  <p>293</p>
                </span>
              </span>
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className='max-w-[90rem] mx-auto'>
          <div className="h-fit md:h-[55rem] w-full bg-[url('/imgs/local-laundry/showcase.jpg')] bg-no-repeat bg-cover bg-top">
            <div className='w-full h-full'>
              <div className='w-full mx-auto bg-transparent h-full pt-24 sm:pt-32 pb-40 md:pb-0 px-8 xl:px-16 grid grid-cols-1 md:grid-cols-2 place-items-stretch gap-6 lg:gap-0'>
                <div className='flex flex-col justify-start items-center'>
                  <div className='w-fit mx-auto'>
                    <h1 className='w-full xl:w-[70%] capitalize text-4xl sm:text-6xl md:text-5xl lg:text-7xl font-[900] mb-7 mt-1 text-center md:text-left text-black leading-tight'>
                      Elegance is acheived through team work
                    </h1>
                  </div>
                  <div className='w-full'>
                    <p className='w-full md:w-[90%] text-center md:text-left text-black text-sm font-medium full'>
                      We have the tendency to believe that smart looking
                      websites is the best impression, Ut facilisis justo eu
                      ullamcorper efficitur. Aenean id quam ex. Aenean eleifend
                      quam eget mi auctor, businesses including many in the
                      world&apos;s
                    </p>
                  </div>
                  <div className='my-7 w-full text-center md:text-left'>
                    <button className='text-sm font-medium px-2 py-2 sm:px-12 sm:py-3 text-white bg-[#D97941] hover:scale-105'>
                      <span className='flex justify-start items-center gap-4'>
                        <BsTelephone className='text-base text-white' />
                        <span>Book appointment</span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className='flex justify-center items-start'>
                  <Image
                    src='/imgs/local-laundry/career-man.png'
                    width={350}
                    height={350}
                    alt='showcase image'
                    className='w-[300px] lg:w-[350px]'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='px-8 xl:px-16 py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 place-items-center items-center'>
              <div className='hidden md:flex justify-start items-center'>
                <Image
                  src='/imgs/local-laundry/hiring.jpg'
                  width={350}
                  height={350}
                  alt='hiring'
                  className='w-[300px] lg:w-[350px]'
                />
              </div>
              <div className='mb-6'>
                <h1 className='text-black font-extrabold text-5xl md:text-4xl lg:text-5xl text-center md:text-left leading-tight mb-6 capitalize'>
                  We are Hiring
                </h1>
              <div className='flex md:hidden justify-center items-center my-7'>
                <Image
                  src='/imgs/local-laundry/hiring.jpg'
                  width={350}
                  height={350}
                  alt='hiring'
                  className='w-[300px] lg:w-[350px]'
                />
              </div>
                <p className='text-xs md:text-sm font-medium text-black leading-loose'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus tempus dui nec euismod congue. Nulla id libero
                  dignissim, convallis odio id, scelerisque nisl. Curabitur
                  augue quam, fringilla quis dictum sed, sodales non eros. Nulla
                  venenatis in odio non fringilla. Fusce facilisis magna at odio
                  ultricies, non porta quam scelerisque. Phasellus feugiat odio
                  eget quam mollis dapibus.
                </p>
                <div className='my-7'>
                  <button className='text-base font-medium leading-none text-white px-6 py-3 bg-[#76A6A6]'>
                    Submit application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <div className='w-full bg-[#CCF5F5]'>
            <div className='max-w-[90rem] mx-auto px-8 py-20 sm:p-20 mt-12 mb-24'>
              <div className='w-full lg:w-[50%] mx-auto'>
                <h3 className='text-black font-bold text-4xl leading-tight mb-8 capitalize text-center'>
                  Get a 2 months free trial for new members
                </h3>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='w-full sm:w-auto flex-grow p-2 text-base font-medium text-gray-500 placeholder:text-gray-500 shadow-md focus:outline-none border-2 border-gray-300'
                  />
                  <button className='text-base font-medium leading-none text-white px-6 py-3 bg-[#D97941] shadow-md'>
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white w-full'>
            <div className='max-w-[90rem] mx-auto px-8 xl:px-16  mb-8'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-24'>
                <div>
                  <Image
                    src='/imgs/local-laundry/logo.png'
                    width={100}
                    height={100}
                    className='mb-2'
                  />
                  <p className='text-xs font-normal leading-tight my-3'>
                    Curabitur augue quam, fringilla quis dictum sed, sodales non
                    eros. Nulla venenatis in odio non fringilla. Fusce facilisis
                    magna at odio ultricies, non porta quam scelerisque.
                  </p>
                </div>
                <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-3 place-items-stretch gap-4'>
                  <div>
                    <h3 className='text-2xl font-semibold text-black leading-tight '>
                      Contact
                    </h3>
                    <div className='text-sm font-medium text-gray-500 leading-none capitalize flex flex-col gap-3 my-3'>
                      <p>Instagram</p>
                      <p>Facebook</p>
                      <p>LinkedIn</p>
                      <p>Whatsapp</p>
                      <p>twitter</p>
                    </div>
                  </div>
                  <div>
                    <h3 className='text-2xl font-semibold text-black leading-tight '>
                      Address
                    </h3>
                    <div className='text-sm font-medium text-gray-500 leading-none capitalize flex flex-col gap-3 my-3'>
                      <p>condimentum</p>
                      <p>scelerisque</p>
                      <p>Curabitur</p>
                      <p>sollicitudin</p>
                      <p>ittfermentumer</p>
                      <p>fermentum</p>
                    </div>
                  </div>
                  <div>
                    <h3 className='text-2xl font-semibold text-black leading-tight '>
                      Blog
                    </h3>
                    <div className='text-sm font-medium text-gray-500 leading-none capitalize flex flex-col gap-3 my-3'>
                      <p>fringilla</p>
                      <p>Maecenas</p>
                      <p>viverra</p>
                      <p>Vestibulum</p>
                      <p>tincidunt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#76A6A6] w-full h-fit'>
            <div className='py-4 px-8 xl:px-16  max-w-[90rem] mx-auto'>
              <div className='w-full text-center'>
                <p className='text-xs sm:text-sm md:text-base font-semibold text-gray-100'>
                  &copy;2023 Easydry Services
                  <span className='mx-2 sm:mx-4'> &middot; </span>All Rights Reserved
                  <span className='mx-2 sm:mx-4'> &middot; </span>Designed by mmesoma
                  saint
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
