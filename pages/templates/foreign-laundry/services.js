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
  BsDot,
  BsLinkedin,
  BsHourglassSplit,
  BsCurrencyDollar,
  BsHandbagFill,
} from 'react-icons/bs'
import { CiDeliveryTruck } from 'react-icons/ci'
import { TbLetterW } from 'react-icons/tb'
import { GiAbstract030, GiHamburgerMenu } from 'react-icons/gi'
import { RxCube } from 'react-icons/rx'
import { FaBath } from 'react-icons/fa'
import {
  RiLeafFill,
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
} from 'react-icons/ri'
import { MdOutlineLocationOn, MdOutlineEmail } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'
import Styles from '../../../styles/foreign-laundry.module.css'
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
                <span className='text-base font-medium text-[#E3221E] leading-none'>
                  <Link href='/templates/foreign-laundry/services'>
                    SERVICES
                  </Link>
                </span>
                <span className='text-base font-medium text-gray-500 leading-none'>
                  <Link href='/templates/foreign-laundry/pages'>PAGES</Link>
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
          <div className="h-fit md:h-[37rem] w-full bg-[url('/imgs/foreign-laundry/iron-basket.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='bg-[rgba(0,0,0,0.55)] h-full py-16 md:py-0'>
              <div className='flex flex-col gap-8 items-center justify-center h-full w-[60%] mx-auto'>
                <span className='text-xl font-light leading-none text-white'>
                  WHAT WE DO
                </span>
                <span className='text-4xl font-extrabold leading-none text-white text-center'>
                  WE HAVE OVER 2000 CLIENTS WITH GOOD REVIEW
                </span>
                <span className='text-sm font-normal leading-none text-white text-center'>
                  Maecenas luctus, orci nec consequat maximus, tellus purus
                  sagittis urna, vitae tincidunt purus elit at lacus. Sed
                  placerat tellus tempor orci laoreet convallis
                </span>
                <div>
                  <button className='text-white bg-[#E3221E] px-4 py-2'>
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='my-16'>
            <div className='w-[80%] mx-auto py-8'>
              <h2 className='text-4xl font-bold leading-tight text-black capitalize w-full text-center mb-8'>
                Our Services
              </h2>
              <div className='grid grid-cols-1 xl:grid-cols-5 gap-14'>
                <div className='xl:col-span-2'>
                  <h2 className='text-4xl text-black font-medium leading-tight mb-8 text-center xl:text-left'>
                    We have 15+ years of experience gives you better results.
                  </h2>
                  <p className='text-center xl:text-left text-base font-normal text-gray-500 leading-tight'>
                    Lorem ipsum dolor sit amet, init sed adipisci ngelit. In a
                    et euismod faucibus quam, a sodales er osplacerat vitae. Sed
                    pretium fermentum luctus.Cras sodales nisl vitae dolor
                    facilisis dapibus.
                  </p>
                  <div className='text-center xl:text-left'>
                    <button className='px-5 py-3 text-white bg-[#E3221E] my-8'>
                      Know More
                    </button>
                  </div>
                </div>
                <div className='xl:col-span-3 grid grid-cols-2 gap-2'>
                  <div className='p-2'>
                    <div className='flex justify-start items-start gap-2 mb-4 cursor-pointer'>
                      <RxCube className='text-2xl text-[#E3221E]' />
                      <h3 className='text-2xl text-black hover:text-[#E3221E] font-normal leading-tight'>
                        Persionalized Experience
                      </h3>
                    </div>
                    <p className='text-base font-normal text-gray-500 leading-tight'>
                      Lorem ipsum dolor sit amet, init sed adipisci ngelit. In
                      euismod faucibus.
                    </p>
                  </div>
                  <div className='p-2'>
                    <div className='flex justify-start items-start gap-2 mb-4 cursor-pointer'>
                      <BsCurrencyDollar className='text-2xl text-[#E3221E]' />
                      <h3 className='text-2xl text-black hover:text-[#E3221E] font-normal leading-tight'>
                        Affordable Pricing
                      </h3>
                    </div>
                    <p className='text-base font-normal text-gray-500 leading-tight'>
                      Lorem ipsum dolor sit amet, init sed adipisci ngelit. In
                      euismod faucibus.
                    </p>
                  </div>
                  <div className='p-2'>
                    <div className='flex justify-start items-start gap-2 mb-4 cursor-pointer'>
                      <BsHourglassSplit className='text-2xl text-[#E3221E]' />
                      <h3 className='text-2xl text-black hover:text-[#E3221E] font-normal leading-tight'>
                        Convinience
                      </h3>
                    </div>
                    <p className='text-base font-normal text-gray-500 leading-tight'>
                      Lorem ipsum dolor sit amet, init sed adipisci ngelit. In
                      euismod faucibus.
                    </p>
                  </div>
                  <div className='p-2'>
                    <div className='flex justify-start items-start gap-2 mb-4 cursor-pointer'>
                      <RxCube className='text-2xl text-[#E3221E]' />
                      <h3 className='text-2xl text-black hover:text-[#E3221E] font-normal leading-tight'>
                        Quality
                      </h3>
                    </div>
                    <p className='text-base font-normal text-gray-500 leading-tight'>
                      Lorem ipsum dolor sit amet, init sed adipisci ngelit. In
                      euismod faucibus.
                    </p>
                  </div>
                  <div className='p-2'>
                    <div className='flex justify-start items-start gap-2 mb-4 cursor-pointer'>
                      <CiDeliveryTruck className='text-2xl text-[#E3221E]' />
                      <h3 className='text-2xl text-black hover:text-[#E3221E] font-normal leading-tight'>
                        Express Delivery
                      </h3>
                    </div>
                    <p className='text-base font-normal text-gray-500 leading-tight'>
                      Lorem ipsum dolor sit amet, init sed adipisci ngelit. In
                      euismod faucibus.
                    </p>
                  </div>
                  <div className='p-2'>
                    <div className='flex justify-start items-start gap-2 mb-4 cursor-pointer'>
                      <BsHandbagFill className='text-2xl text-[#E3221E]' />
                      <h3 className='text-2xl text-black hover:text-[#E3221E] font-normal leading-tight'>
                        Instant Order Update
                      </h3>
                    </div>
                    <p className='text-base font-normal text-gray-500 leading-tight'>
                      Lorem ipsum dolor sit amet, init sed adipisci ngelit. In
                      euismod faucibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='my-16'>
            <div className="h-fit lg:h-[24rem] w-full bg-[url('/imgs/foreign-laundry/clothes-hanging.jpg')] bg-no-repeat bg-cover bg-center">
              <div className='bg-[rgba(0,0,0,0.75)] h-full'>
                <div className='w-[80%] mx-auto py-8 text-center '>
                  <h2 className='text-4xl font-bold leading-tight text-white capitalize w-full text-center mb-8'>
                    How it works
                  </h2>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-stretch gap-16 lg:gap-5'>
                    <div>
                      <span className='flex justify-center items-center w-12 h-12 rounded-full bg-[#E3221E] mx-auto mb-4'>
                        <RiNumber1 className='text-white text-2xl' />
                      </span>
                      <p className='font-normal text-white text-4xl leading-tight'>
                        Bag up all your dirty clothes
                      </p>
                    </div>
                    <div>
                      <span className='flex justify-center items-center w-12 h-12 rounded-full bg-[#E3221E] mx-auto mb-4'>
                        <RiNumber2 className='text-white text-2xl' />
                      </span>
                      <p className='font-normal text-white text-4xl leading-tight'>
                        We pick up your clothes
                      </p>
                    </div>
                    <div>
                      <span className='flex justify-center items-center w-12 h-12 rounded-full bg-[#E3221E] mx-auto mb-4'>
                        <RiNumber3 className='text-white text-2xl' />
                      </span>
                      <p className='font-normal text-white text-4xl leading-tight'>
                        We clean your clothes
                      </p>
                    </div>
                    <div>
                      <span className='flex justify-center items-center w-12 h-12 rounded-full bg-[#E3221E] mx-auto mb-4'>
                        <RiNumber4 className='text-white text-2xl' />
                      </span>
                      <p className='font-normal text-white text-4xl leading-tight'>
                        We deliver clean, folded clothes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='my-16'>
            <div className='w-[80%] mx-auto py-8'>
              <h2 className='text-4xl font-bold leading-tight text-black capitalize w-full text-center mb-8'>
                Featured Services
              </h2>
              <div className='grid grid-cols-2 xl:grid-cols-4 gap-5'>
                <div className='flex flex-col gap-8'>
                  <div className='flex justify-start items-start gap-3'>
                    <div className='w-fit h-fit rounded-full border-2 border-[#E3221E] flex-shrink-0'>
                      <Image
                        src='/imgs/foreign-laundry/wash-girl.jpg'
                        width={50}
                        height={50}
                        className='rounded-full w-[70px] h-[70px]'
                      />
                    </div>
                    <div>
                      <h3 className='text-lg text-black hover:text-[#E3221E] font-bold leading-tight mb-3'>
                        COIN LAUNDRY
                      </h3>
                      <p className='text-sm font-normal text-gray-500 leading-tight'>
                        Lorem ipsum dolor sit amet,Ea sed illum facere aperiam
                        sequi optio consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                  <div className='flex justify-start items-start gap-3'>
                    <div className='w-fit h-fit rounded-full border-2 border-[#E3221E] flex-shrink-0'>
                      <Image
                        src='/imgs/foreign-laundry/showcase.jpg'
                        width={50}
                        height={50}
                        className='rounded-full w-[70px] h-[70px]'
                      />
                    </div>
                    <div>
                      <h3 className='text-lg text-black hover:text-[#E3221E] font-bold leading-tight mb-3'>
                        RESIDENTIAL LAUNDRY
                      </h3>
                      <p className='text-sm font-normal text-gray-500 leading-tight'>
                        Lorem ipsum dolor sit amet,Ea sed illum facere aperiam
                        sequi optio consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                  <div className='flex justify-start items-start gap-3'>
                    <div className='w-fit h-fit rounded-full border-2 border-[#E3221E] flex-shrink-0'>
                      <Image
                        src='/imgs/foreign-laundry/woman-pink-bed.jpg'
                        width={50}
                        height={50}
                        className='rounded-full w-[70px] h-[70px]'
                      />
                    </div>
                    <div>
                      <h3 className='text-lg text-black hover:text-[#E3221E] font-bold leading-tight mb-3'>
                        BUSINESS LAUNDRY
                      </h3>
                      <p className='text-sm font-normal text-gray-500 leading-tight'>
                        Lorem ipsum dolor sit amet,Ea sed illum facere aperiam
                        sequi optio consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='order-first xl:order-none col-span-2'>
                  <Image
                    src='/imgs/foreign-laundry/iron-basket.jpg'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='flex flex-col gap-8'>
                  <div className='flex justify-start items-start gap-3'>
                    <div className='w-fit h-fit rounded-full border-2 border-[#E3221E] flex-shrink-0'>
                      <Image
                        src='/imgs/foreign-laundry/wash-girl.jpg'
                        width={50}
                        height={50}
                        className='rounded-full w-[70px] h-[70px]'
                      />
                    </div>
                    <div>
                      <h3 className='text-lg text-black hover:text-[#E3221E] font-bold leading-tight mb-3'>
                        COIN LAUNDRY
                      </h3>
                      <p className='text-sm font-normal text-gray-500 leading-tight'>
                        Lorem ipsum dolor sit amet,Ea sed illum facere aperiam
                        sequi optio consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                  <div className='flex justify-start items-start gap-3'>
                    <div className='w-fit h-fit rounded-full border-2 border-[#E3221E] flex-shrink-0'>
                      <Image
                        src='/imgs/foreign-laundry/woman-pink-bed.jpg'
                        width={50}
                        height={50}
                        className='rounded-full w-[70px] h-[70px]'
                      />
                    </div>
                    <div>
                      <h3 className='text-lg text-black hover:text-[#E3221E] font-bold leading-tight mb-3'>
                        BUSINESS LAUNDRY
                      </h3>
                      <p className='text-sm font-normal text-gray-500 leading-tight'>
                        Lorem ipsum dolor sit amet,Ea sed illum facere aperiam
                        sequi optio consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                  <div className='flex justify-start items-start gap-3'>
                    <div className='w-fit h-fit rounded-full border-2 border-[#E3221E] flex-shrink-0'>
                      <Image
                        src='/imgs/foreign-laundry/showcase.jpg'
                        width={50}
                        height={50}
                        className='rounded-full w-[70px] h-[70px]'
                      />
                    </div>
                    <div>
                      <h3 className='text-lg text-black hover:text-[#E3221E] font-bold leading-tight mb-3'>
                        RESIDENTIAL LAUNDRY
                      </h3>
                      <p className='text-sm font-normal text-gray-500 leading-tight'>
                        Lorem ipsum dolor sit amet,Ea sed illum facere aperiam
                        sequi optio consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='my-16'>
            <div className='w-[80%] mx-auto py-8'>
              <h2 className='text-4xl font-bold leading-tight text-black capitalize w-full text-center mb-8'>
                Dry Cleaning & Laundry Services
              </h2>
              <div className='grid grid-cols-3 gap-10'>
                <div className='flex flex-col items-start justify-center'>
                  <Image
                    src='/imgs/foreign-laundry/dirty-clothes.jpg'
                    width={1000}
                    height={1000}
                    className='mb-4'
                  />
                  <p className='text-lg font-light leading-tight mb-2 text-[#E3221E]'>
                    WASHING
                  </p>
                  <h2 className='text-2xl font-medium leading-tight mb-2 text-black hover:text-[#E3221E]'>Dry Clean (per item)</h2>
                  <p className='text-sm font-normal text-gray-500 leading-tight my-2'>
                    Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi
                    optio consectetur adipisicing elit.
                  </p>
                </div>
                <div className='flex flex-col items-start justify-center'>
                  <Image
                    src='/imgs/foreign-laundry/dirty-clothes.jpg'
                    width={1000}
                    height={1000}
                    className='mb-4'
                  />
                  <p className='text-lg font-light leading-tight mb-2 text-[#E3221E]'>
                    WASHING
                  </p>
                  <h2 className='text-2xl font-medium leading-tight mb-2 text-black hover:text-[#E3221E]'>Wash, Dry & Fold</h2>
                  <p className='text-sm font-normal text-gray-500 leading-tight my-2'>
                    Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi
                    optio consectetur adipisicing elit.
                  </p>
                </div>
                <div className='flex flex-col items-start justify-center'>
                  <Image
                    src='/imgs/foreign-laundry/dirty-clothes.jpg'
                    width={1000}
                    height={1000}
                    className='mb-4'
                  />
                  <p className='text-lg font-light leading-tight mb-2 text-[#E3221E]'>
                    WASHING
                  </p>
                  <h2 className='text-2xl font-medium leading-tight mb-2 text-black hover:text-[#E3221E]'>Ironing (per item)</h2>
                  <p className='text-sm font-normal text-gray-500 leading-tight my-2'>
                    Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi
                    optio consectetur adipisicing elit.
                  </p>
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
