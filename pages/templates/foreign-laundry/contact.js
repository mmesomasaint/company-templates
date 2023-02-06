import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  BsPinterest,
  BsFacebook,
  BsInstagram,
  BsTelephone,
  BsTwitter,
  BsLinkedin,
} from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineLocationOn, MdOutlineEmail } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'
import { useCallback, useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = useCallback(() => setIsOpen((open) => !open), [])

  return (
    <div>
      <Head>
        <title>Washing</title>
        <meta name='description' content='Wash every material to cleanest' />
        <link rel='icon' href='/imgs/foreign-laundry/favicon.ico' />
      </Head>
      <header>
        <div className='relative bg-white max-w-[90rem] mx-auto'>
          <div className='w-[80%] mx-auto flex justify-between items-center gap-6'>
            <div>
              <Image
                src='/imgs/foreign-laundry/logo.png'
                width={130}
                height={50}
              />
            </div>
            <div className='flex lg:hidden justify-evenly items-center gap-8'>
              {isOpen ? (
                <CgClose
                  className='text-2xl text-[#E3221E]'
                  onClick={handleOpen}
                />
              ) : (
                <GiHamburgerMenu
                  className='text-2xl text-gray-500'
                  onClick={handleOpen}
                />
              )}
              <div className='w-16 h-16 flex justify-center items-center bg-[#E3221E]'>
                <BsTelephone className='text-2xl text-white' />
              </div>
            </div>
            <div
              className={`${
                isOpen ? 'flex' : 'hidden'
              } absolute z-30 top-[100%] left-0 right-0 lg:static bg-white lg:flex flex-col lg:flex-row justify-evenly items-start lg:items-center gap-10 pl-[20%] lg:pl-0 py-10 lg:py-0`}
            >
              <div className='flex flex-col lg:flex-row justify-evenly items-start lg:items-center gap-10'>
                <span className='text-base font-medium text-gray-500 leading-none'>
                  <Link href='/templates/foreign-laundry'>HOME</Link>
                </span>
                <span className='text-base font-medium text-gray-500 leading-none'>
                  <Link href='/templates/foreign-laundry/about'>ABOUT</Link>
                </span>
                <span className='text-base font-medium text-gray-500 leading-none'>
                  <Link href='/templates/foreign-laundry/services'>
                    SERVICES
                  </Link>
                </span>
                <span className='text-base font-medium text-gray-500 leading-none'>
                  <Link href='/templates/foreign-laundry/pages'>PAGES</Link>
                </span>
                <span className='text-base font-medium text-[#E3221E] leading-none'>
                  <Link href='/templates/foreign-laundry/contact'>CONTACT</Link>
                </span>
              </div>
              <div className='flex justify-evenly items-center gap-6'>
                <BsFacebook className='text-lg text-black' />
                <BsTwitter className='text-lg text-black' />
                <BsInstagram className='text-lg text-black' />
              </div>
              <div className='hidden lg:flex justify-center items-center gap-2 bg-[#E3221E] px-3 py-6'>
                <BsTelephone className='text-lg text-white' />
                <span className='hidden xl:inline text-base font-medium text-white leading-none'>
                  +234-9034-323-339
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='max-w-[90rem] mx-auto'>
          <div className="h-fit md:h-[37rem] w-full bg-[url('/imgs/foreign-laundry/wash-sit-girl.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='bg-[rgba(0,0,0,0.55)] h-full py-16 md:py-0'>
              <div className='flex flex-col gap-8 items-center justify-center h-full w-[60%] mx-auto'>
                <span className='text-xl font-light leading-none text-white'>
                  ACTIVE 24/7
                </span>
                <span className='text-4xl font-extrabold leading-none text-white text-center'>
                  CLIENT SATISFACTION IS OUR PRIORITY
                </span>
                <span className='text-sm font-normal leading-none text-white text-center'>
                  Sed placerat tellus tempor orci laoreet Maecenas luctus, orci
                  nec consequat maximus, tellus purus sagittis urna, vitae
                  tincidunt purus elit at lacus. convallis
                </span>
                <div>
                  <button className='text-white bg-[#E3221E] px-4 py-2'>
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white py-16'>
            <div className='w-[80%] mx-auto'>
              <h2 className='text-4xl font-bold uppercase text-center'>
                Contact Us
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-5 place-items-stretch gap-10 mt-14'>
                <div className='md:col-span-2'>
                  <div className='mt-5 flex flex-col gap-10'>
                    <div>
                      <div className='flex justify-start items-start gap-3'>
                        <div className='flex justify-start itmes-start gap-4'>
                          <MdOutlineLocationOn className='text-lg text-gray-300 flex-shrink-0' />
                          <div>
                            <span className='block text-xl font-medium leading-tight text-gray-900'>
                              Address:
                            </span>
                            <span className='block text-xl font-normal leading-tight text-gray-900'>
                              No 57 New Olearns Catholic Cathedral, First Floor
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-start items-start gap-3'>
                        <div className='flex justify-start itmes-start gap-4'>
                          <BsTelephone className='text-lg text-gray-300 flex-shrink-0' />
                          <div>
                            <span className='block text-xl font-medium leading-tight text-gray-900'>
                              Call us:
                            </span>
                            <span className='block text-xl font-normal leading-tight text-gray-900'>
                              +2349023343327
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-start items-start gap-3'>
                        <div className='flex justify-start itmes-start gap-4'>
                          <MdOutlineEmail className='text-lg text-gray-300 flex-shrink-0' />
                          <div>
                            <span className='block text-xl font-medium leading-tight text-gray-900'>
                              Have any questions?
                            </span>
                            <span className='block text-xl font-normal leading-tight text-gray-900'>
                              info@example.com
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='md:col-span-3'>
                  <form>
                    <div className='flex flex-col sm:flex-row justify-items-stretch gap-5 sm:gap-8 items-center mb-5'>
                      <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        autoComplete='name'
                        className='w-full p-3 text-xl font-normal focus:outline-none border border-gray-500'
                      />
                      <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        autoComplete='email'
                        className='w-full p-3 text-xl font-normal focus:outline-none border border-gray-500'
                      />
                    </div>
                    <input
                      type='text'
                      name='subject'
                      placeholder='Subject'
                      autoComplete='subject'
                      className='w-full p-3 text-xl font-normal focus:outline-none border border-gray-500 mb-5'
                    />
                    <textarea
                      rows={4}
                      placeholder='Message'
                      className='w-full p-3 text-xl font-normal focus:outline-none border border-gray-500 mb-5'
                    />
                    <div className='w-full text-right'>
                      <button className='text-white bg-[#E3221E] py-4 px-8 text-sm font-medium uppercase'>
                        SEND MESSAGE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className='max-w-[90rem] mx-auto'>
          <div className="h-fit lg:h-[24rem] w-full bg-[url('/imgs/foreign-laundry/washing-machine-rack.jpg')] bg-no-repeat bg-cover bg-top bg-fixed">
            <div className='bg-[rgba(0,0,0,0.75)] h-full'>
              <div className='w-[80%] mx-auto pt-14'>
                <div className='grid grid-cols-1 sm:grid-cols-5 gap-20'>
                  <div className='col-span-2'>
                    <div className='w-fit'>
                      <h3 className='text-lg font-semibold leading-none text-white uppercase'>
                        ABOUT
                      </h3>
                      <div className='mt-3 border-b border-b-gray-400' />
                    </div>
                    <p className='mt-5 text-lg font-normal text-gray-300 leading-tight'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus tempus dui nec euismod congue. Nulla id libero
                      dignissim, convallis odio id, scelerisque nisl. Curabitur
                      augue quam, fringilla quis dictum sed, sodales non eros.
                      Nulla venenatis in odio non fringilla. Fusce facilisis
                      magna
                    </p>
                  </div>
                  <div className='col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-5'>
                    <div>
                      <div className='w-fit'>
                        <h3 className='text-lg font-semibold leading-none text-white uppercase'>
                          QUICK LINKS
                        </h3>
                        <div className='mt-3 border-b border-b-gray-400' />
                      </div>
                      <div className='flex flex-col gap-5 mt-5'>
                        <span className='text-lg font-normal text-gray-300 leading-tight hover:underline hover:text-white'>
                          <Link href='/templates/foreign-laundry'>Home</Link>
                        </span>
                        <span className='text-lg font-normal text-gray-300 leading-tight hover:underline hover:text-white'>
                          <Link href='/templates/foreign-laundry/about'>
                            About
                          </Link>
                        </span>
                        <span className='text-lg font-normal text-gray-300 leading-tight hover:underline hover:text-white'>
                          <Link href='/templates/foreign-laundry'>
                            Services
                          </Link>
                        </span>
                        <span className='text-lg font-normal text-gray-300 leading-tight hover:underline hover:text-white'>
                          <Link href='/templates/foreign-laundry'>Contact</Link>
                        </span>
                        <span className='text-lg font-normal text-gray-300 leading-tight hover:underline hover:text-white'>
                          <Link href='/templates/foreign-laundry'>Career</Link>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className='w-fit'>
                        <h3 className='text-lg font-semibold leading-none text-white uppercase'>
                          CONTACT
                        </h3>
                        <div className='mt-3 border-b border-b-gray-400' />
                      </div>
                      <div className='mt-5 flex flex-col gap-5'>
                        <div>
                          <div className='flex justify-start items-start gap-3'>
                            <MdOutlineEmail className='text-lg text-gray-300 flex-shrink-0' />
                            <span className='text-lg font-normal leading-tight text-gray-300'>
                              info@example.com
                            </span>
                          </div>
                          <div className='mt-3 border-b border-b-gray-400' />
                        </div>
                        <div>
                          <div className='flex justify-start items-start gap-3'>
                            <BsTelephone className='text-lg text-gray-300 flex-shrink-0' />
                            <span className='text-lg font-normal leading-tight text-gray-300'>
                              +2349023343327
                            </span>
                          </div>
                          <div className='mt-3 border-b border-b-gray-400' />
                        </div>
                        <div>
                          <div className='flex justify-start items-start gap-3'>
                            <MdOutlineLocationOn className='text-lg text-gray-300 flex-shrink-0' />
                            <span className='text-lg font-normal leading-tight text-gray-300'>
                              No 57 New Olearns Catholic Cathedral, First Floor
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-20 sm:mt-10 pb-4 flex flex-col lg:flex-row justify-between items-center gap-4'>
                  <div className='flex justify-evenly gap-3'>
                    <BsFacebook className='text-lg text-gray-300' />
                    <BsLinkedin className='text-lg text-gray-300' />
                    <BsTwitter className='text-lg text-gray-300' />
                    <BsPinterest className='text-lg text-gray-300' />
                  </div>
                  <div className='text-center'>
                    <span className='text-lg text-gray-300'>
                      &copy;2023 Washing, All Rights Reserved{' '}
                      <span className='mx-2'>&middot;</span> Designed by mmesoma
                      saint
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
