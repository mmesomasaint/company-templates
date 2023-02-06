import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  BsPinterest,
  BsFacebook,
  BsInstagram,
  BsTelephone,
  BsTwitter,
  BsHeart,
  BsClock,
  BsLinkedin,
  BsEmojiSmile
} from 'react-icons/bs'
import { GiAbstract030, GiHamburgerMenu } from 'react-icons/gi'
import { RxCube } from 'react-icons/rx'
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri'
import { MdOutlineLocationOn, MdOutlineEmail } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'
import {BiLike} from 'react-icons/bi'
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
                alt='logo'
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
                <span className='text-base font-medium text-[#E3221E] leading-none'>
                  <Link href='/templates/foreign-laundry/about'>ABOUT</Link>
                </span>
                <span className='text-base font-medium text-gray-500 leading-none'>
                  <Link href='/templates/foreign-laundry/services'>
                    SERVICES
                  </Link>
                </span>
                <span className='text-base font-medium text-gray-500 leading-none'>
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
          <div className="h-fit md:h-[37rem] w-full bg-[url('/imgs/foreign-laundry/about-case.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='bg-[rgba(0,0,0,0.55)] h-full py-16 md:py-0'>
              <div className='flex flex-col gap-8 items-center justify-center h-full w-[60%] mx-auto'>
                <span className='text-xl font-light leading-none text-white'>
                  ABOUT US
                </span>
                <span className='text-4xl font-extrabold leading-none text-white text-center'>
                  We are Passionate about Laundry
                </span>
                <span className='text-sm font-normal leading-none text-white text-center'>
                  Nnec consequat maximus, tellus purus sagittis urna, vitae
                  tincidunt purus elit at lacus. Sed placerat tellus tempor orci
                  laoreet convallis
                </span>
              </div>
            </div>
          </div>
          <div className='w-[80%] mx-auto my-16'>
            <div className='text-center'>
              <h2 className='text-4xl font-bold leading-tight text-black capitalize w-full text-center mb-8'>
                We Specialize In
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 place-items-stretch'>
              <div className='border border-gray-400 p-5 flex justify-start items-start gap-5 group'>
                <RiNumber1 className='text-4xl text-[#E3221E] flex-shrink-0' />
                <div className=''>
                  <h3 className='text-2xl font-medium leading-tight text-black group-hover:text-[#E3221E] mb-3'>
                    Steam Iron Service
                  </h3>
                  <p className='text-base font-normal leading-tight text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempus dui nec euismod congue. Nulla id libero
                    dignissim, convallis odio id, scelerisque nisl. Curabitur
                    augue quam, fringilla quis dictum sed, sodales non eros.
                    Nulla venenatis in odio non fringilla. Fusce facilisis magna
                    at odio ultricies, non porta quam scelerisque.
                  </p>
                </div>
              </div>
              <div className='border border-gray-400 p-5 flex justify-start items-start gap-5 group'>
                <RiNumber2 className='text-4xl text-[#E3221E] flex-shrink-0' />
                <div className=''>
                  <h3 className='text-2xl font-medium leading-tight text-black group-hover:text-[#E3221E] mb-3'>
                    Dry Cleaning Service
                  </h3>
                  <p className='text-base font-normal leading-tight text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempus dui nec euismod congue. Nulla id libero
                    dignissim, convallis odio id, scelerisque nisl. Curabitur
                    augue quam, fringilla quis dictum sed, sodales non eros.
                    Nulla venenatis in odio non fringilla. Fusce facilisis magna
                    at odio ultricies, non porta quam scelerisque.
                  </p>
                </div>
              </div>
              <div className='border border-gray-400 p-5 flex justify-start items-start gap-5 group'>
                <RiNumber3 className='text-4xl text-[#E3221E] flex-shrink-0' />
                <div className=''>
                  <h3 className='text-2xl font-medium leading-tight text-black group-hover:text-[#E3221E] mb-3'>
                    Stain Removal
                  </h3>
                  <p className='text-base font-normal leading-tight text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempus dui nec euismod congue. Nulla id libero
                    dignissim, convallis odio id, scelerisque nisl. Curabitur
                    augue quam, fringilla quis dictum sed, sodales non eros.
                    Nulla venenatis in odio non fringilla. Fusce facilisis magna
                    at odio ultricies, non porta quam scelerisque.
                  </p>
                </div>
              </div>
              <div className='border border-gray-400 p-5 flex justify-start items-start gap-5 group'>
                <RiNumber4 className='text-4xl text-[#E3221E] flex-shrink-0' />
                <div className=''>
                  <h3 className='text-2xl font-medium leading-tight text-black group-hover:text-[#E3221E] mb-3'>
                    Curtains & Drapery
                  </h3>
                  <p className='text-base font-normal leading-tight text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempus dui nec euismod congue. Nulla id libero
                    dignissim, convallis odio id, scelerisque nisl. Curabitur
                    augue quam, fringilla quis dictum sed, sodales non eros.
                    Nulla venenatis in odio non fringilla. Fusce facilisis magna
                    at odio ultricies, non porta quam scelerisque.
                  </p>
                </div>
              </div>
              <div className='border border-gray-400 p-5 flex justify-start items-start gap-5 group'>
                <RxCube className='text-4xl text-[#E3221E] flex-shrink-0' />
                <div className=''>
                  <h3 className='text-2xl font-medium leading-tight text-black group-hover:text-[#E3221E] mb-3'>
                    Silk & Suede
                  </h3>
                  <p className='text-base font-normal leading-tight text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempus dui nec euismod congue. Nulla id libero
                    dignissim, convallis odio id, scelerisque nisl. Curabitur
                    augue quam, fringilla quis dictum sed, sodales non eros.
                    Nulla venenatis in odio non fringilla. Fusce facilisis magna
                    at odio ultricies, non porta quam scelerisque.
                  </p>
                </div>
              </div>
              <div className='border border-gray-400 p-5 flex justify-start items-start gap-5 group'>
                <GiAbstract030 className='text-4xl text-[#E3221E] flex-shrink-0' />
                <div className=''>
                  <h3 className='text-2xl font-medium leading-tight text-black group-hover:text-[#E3221E] mb-3'>
                    Commercial Laundry
                  </h3>
                  <p className='text-base font-normal leading-tight text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempus dui nec euismod congue. Nulla id libero
                    dignissim, convallis odio id, scelerisque nisl. Curabitur
                    augue quam, fringilla quis dictum sed, sodales non eros.
                    Nulla venenatis in odio non fringilla. Fusce facilisis magna
                    at odio ultricies, non porta quam scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[80%] mx-auto my-16'>
            <div className='text-center'>
              <h2 className='text-4xl font-bold leading-tight text-black capitalize w-full text-center mb-8'>
                Fun Facts
              </h2>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 place-items-stretch'>
              <div className='p-5 group flex flex-col justify-center items-center'>
                <BsEmojiSmile className='text-4xl text-gray-500 group-hover:scale-125 mb-3 flex-shrink-0' />
                <span className='text-5xl font-bold text-[#E3221E] block mb-2'>
                  1500
                </span>
                <span className='text-xl font-medium text-gray-500 text-center block'>
                  Happy Clients
                </span>
              </div>
              <div className='p-5 group flex flex-col justify-center items-center'>
                <BiLike className='text-4xl text-gray-500 group-hover:scale-125 mb-3 flex-shrink-0' />
                <span className='text-5xl font-bold text-[#E3221E] block mb-2'>
                  2000
                </span>
                <span className='text-xl font-medium text-gray-500 text-center block'>
                  People Like Us
                </span>
              </div>
              <div className='p-5 group flex flex-col justify-center items-center'>
                <BsClock className='text-4xl text-gray-500 group-hover:scale-125 mb-3 flex-shrink-0' />
                <span className='text-5xl font-bold text-[#E3221E] block mb-2'>
                  15
                </span>
                <span className='text-xl font-medium text-gray-500 text-center block'>
                  Year of Experience
                </span>
              </div>
              <div className='p-5 group flex flex-col justify-center items-center'>
                <BsHeart className='text-4xl text-gray-500 group-hover:scale-125 mb-3 flex-shrink-0' />
                <span className='text-5xl font-bold text-[#E3221E] block mb-2'>
                  800
                </span>
                <span className='text-xl font-medium text-gray-500 text-center block'>
                  Awesome Service
                </span>
              </div>
            </div>
          </div>
          <div className='w-[80%] mx-auto my-16'>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 place-items-stretch'>
              <div className='hidden xl:block'>
                <Image
                  src='/imgs/foreign-laundry/old-lady-wash.jpg'
                  width={500}
                  height={500}
                  alt='committed lady'
                />
              </div>
              <div className='p-3'>
                <div className=''>
                  <h2 className='text-4xl font-bold leading-tiht text-black capitalize w-full text-left mb-8'>
                    We are true to ourselves and commit to always perform at our
                    best
                  </h2>
                </div>
                <div className='flex xl:hidden justify-center items-center my-5'>
                  <Image
                    src='/imgs/foreign-laundry/old-lady-wash.jpg'
                    width={500}
                    height={500}
                    alt='committed lady'
                  />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempus dui nec euismod congue. Nulla id libero
                    dignissim, convallis odio id, scelerisque nisl. Curabitur
                    augue quam, fringilla quis dictum sed, sodales non eros.
                    Nulla venenatis
                  </p>
                </div>
                <div className='flex flex-col py-5 justify-center items-center gap-5'>
                  <div className='w-full'>
                    <div className='flex justify-between items-center'>
                      <span>Quality</span>
                      <span>60%</span>
                    </div>
                    <div className='flex justify-start items-center'>
                      <div className='flex-grow bg-[#E3221E] h-1' />
                      <div className='w-[40%] bg-gray-300 h-1' />
                    </div>
                  </div>
                  <div className='w-full'>
                    <div className='flex justify-between items-center'>
                      <span>Cleaning</span>
                      <span>80%</span>
                    </div>
                    <div className='flex justify-start items-center'>
                      <div className='flex-grow bg-[#E3221E] h-1' />
                      <div className='w-[20%] bg-gray-300 h-1' />
                    </div>
                  </div>
                  <div className='w-full'>
                    <div className='flex justify-between items-center'>
                      <span>Clothing</span>
                      <span>75%</span>
                    </div>
                    <div className='flex justify-start items-center'>
                      <div className='flex-grow bg-[#E3221E] h-1' />
                      <div className='w-[25%] bg-gray-300 h-1' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[80%] mx-auto my-16'>
            <div className='text-center'>
              <h2 className='text-4xl font-bold leading-tight text-black capitalize w-full text-center mb-8'>
                Meet Our People
              </h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 place-items-stretch'>
              <div>
                <Image
                  src='/imgs/foreign-laundry/ellie.jpg'
                  width={250}
                  height={250}
                  alt='ellie'
                />
                <div className='p-5 text-center'>
                  <span className='block text-3xl font-medium text-[#E3221E] mb-1 leading-tight'>
                    Ellie Brown
                  </span>
                  <span className='block text-lg font-medium text-gray-500'>
                    Operations Manager
                  </span>
                </div>
              </div>
              <div>
                <Image
                  src='/imgs/foreign-laundry/smith.jpg'
                  width={250}
                  height={250}
                  alt='smith'
                />
                <div className='p-5 text-center'>
                  <span className='block text-3xl font-medium text-[#E3221E] mb-1 leading-tight'>
                    Smith Ade
                  </span>
                  <span className='block text-lg font-medium text-gray-500'>
                    Service Manager
                  </span>
                </div>
              </div>
              <div>
                <Image
                  src='/imgs/foreign-laundry/aisha.jpg'
                  width={250}
                  height={250}
                  alt='aisha'
                />
                <div className='p-5 text-center'>
                  <span className='block text-3xl font-medium text-[#E3221E] mb-1 leading-tight'>
                    Abubakar Aisha
                  </span>
                  <span className='block text-lg font-medium text-gray-500'>
                    Wash Expert
                  </span>
                </div>
              </div>
              <div>
                <Image
                  src='/imgs/foreign-laundry/dread-jon.jpg'
                  width={250}
                  height={250}
                  alt='dread-jon'
                />
                <div className='p-5 text-center'>
                  <span className='block text-3xl font-medium text-[#E3221E] mb-2 leading-tight'>
                    Jonny King
                  </span>
                  <span className='block text-lg font-medium text-gray-500'>
                    Team Lead
                  </span>
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
