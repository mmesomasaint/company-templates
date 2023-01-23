import { useState, useCallback } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Styles from '../../../styles/it.module.css'
import {
  AiFillCloud,
  AiFillStar,
  AiOutlineBell,
  AiOutlineClose,
  AiOutlineDatabase,
  AiOutlineFileSearch,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
} from 'react-icons/ai'
import {
  BsTelephone,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsPersonCircle,
  BsCheckLg,
  BsAwardFill,
  BsShieldCheck,
  BsCodeSlash,
  BsArrowRightCircle,
} from 'react-icons/bs'
import {
  MdDeveloperMode,
  MdOutlineAccessTime,
  MdOutlineLocationOn,
} from 'react-icons/md'
import { ImHappy2 } from 'react-icons/im'
import Link from 'next/link'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => setIsOpen((open) => !open), [])

  return (
    <div className={Styles.bodyFont}>
      <Head>
        <title>IT Solve</title>
        <meta
          name='description'
          content='Provides various IT services and solutions'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='w-full relative'>
        <div className='max-w-[90rem] absolute top-0 left-0 right-0 mx-auto flex gap-0'>
          <div className='bg-white p-3 flex justify-center items-center gap-0'>
            <div className='text-2xl lg:text-4xl font-normal leading-none w-fit'>
              <span className='bg-gradient-to-br from-[#074DD9] to-[#021842] text-transparent inline-block bg-clip-text'>
                .IT
              </span>
              <span className='text-[#021842]'>solve</span>
            </div>
          </div>
          <div className='flex flex-col items-end sm:items-stretch gap-0 flex-grow'>
            <div className='w-full backdrop-blur-md flex sm:hidden justify-end items-center'>
              <div
                className={`${
                  isOpen ? 'bg-red-500' : 'bg-[#074DD9]'
                } flex justify-center items-center w-12 h-12`}
                onClick={toggleOpen}
              >
                {isOpen ? (
                  <AiOutlineClose className='text-white text-2xl' />
                ) : (
                  <AiOutlineMenu className='text-white text-2xl' />
                )}
              </div>
            </div>
            <div className='hidden sm:flex justify-between items-center gap-3 lg:gap-6 bg-[#021842] pl-3'>
              <div className='flex justify-evenly items-center gap-2 lg:gap-5'>
                <div className='flex gap-2 items-center justify-evenly'>
                  <AiOutlineHome className='text-red-500 text-sm' />
                  <span className='text-[0.6rem] lg:text-xs text-white font-light'>
                    Welcome to Our It Company
                  </span>
                </div>
                <span>|</span>
                <div className='flex gap-2 items-center justify-evenly'>
                  <AiOutlineMail className='text-red-500 text-sm' />
                  <span className='text-[0.6rem] lg:text-xs text-white font-light'>
                    themail27@gmail.com
                  </span>
                </div>
              </div>
              <div className='flex gap-2 lg:gap-3 items-center justify-evenly'>
                <BsFacebook className='text-white text-xs lg:text-sm' />
                <span>|</span>
                <BsTwitter className='text-white text-xs lg:text-sm' />
                <span>|</span>
                <BsInstagram className='text-white text-xs lg:text-sm' />
                <span>|</span>
                <BsPersonCircle className='text-white text-xs lg:text-sm' />
                <span>|</span>
                <BsLinkedin className='text-white text-xs lg:text-sm' />
                <span>|</span>
              </div>
            </div>
            <div
              className={`${
                isOpen ? 'flex' : 'hidden'
              } absolute sm:static top-[100%] left-0 right-0 sm:flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-3 lg:gap-6 p-4 sm:p-0 backdrop-blur-md`}
            >
              <div className='flex flex-col sm:flex-row gap-3 lg:gap-6 items-start sm:items-center justify-evenly px-0 sm:px-3 w-full sm:w-auto'>
                <span className='text-sm sm:text-xs lg:text-sm font-medium leading-none text-white hover:scale-105 hover:text-red-500 cursor-pointer'>
                  <Link href='/templates/it-template'>Home+</Link>
                </span>
                <span className='text-sm sm:text-xs lg:text-sm font-medium leading-none text-white hover:scale-105 hover:text-red-500 cursor-pointer'>
                  <Link href='/templates/it-template/shop'>Shop+</Link>
                </span>
                <span className='text-sm sm:text-xs lg:text-sm font-medium leading-none text-white hover:scale-105 hover:text-red-500 cursor-pointer'>
                  <Link href='/templates/it-template/company'>Company+</Link>
                </span>
                <span className='text-sm sm:text-xs lg:text-sm font-medium leading-none text-red-500 underline hover:scale-105 hover:text-red-500 cursor-pointer'>
                  <Link href='/templates/it-template/it-solutions'>
                    IT Solutions+
                  </Link>
                </span>
                <span className='text-sm sm:text-xs lg:text-sm font-medium leading-none text-white hover:scale-105 hover:text-red-500 cursor-pointer'>
                  <Link href='/templates/it-template/blog'>Blog+</Link>
                </span>
                <span className='text-sm sm:text-xs lg:text-sm font-medium leading-none text-white hover:scale-105 hover:text-red-500 cursor-pointer'>
                  <Link href='/templates/it-template/contact-us'>
                    Contact Us+
                  </Link>
                </span>
              </div>
              <div className='flex gap-3 sm:gap-6 items-center justify-evenly w-full sm:w-auto'>
                <div className='flex sm:hidden md:flex gap-2 items-center justify-evenly'>
                  <BsTelephone className='text-red-500 text-sm' />
                  <span className='text-sm sm:text-xs lg:text-sm font-medium leading-none text-white'>
                    +23498239800
                  </span>
                </div>
                <span className='p-2 bg-[#074DD9] text-white text-sm lg:text-base font-medium'>
                  Get A Quote
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='max-w-[90rem] mx-auto'>
          <div className="h-[37rem] w-full bg-[url('/imgs/server-engineer.jpg')] bg-no-repeat bg-cover bg-center md:bg-right">
            <div className='bg-[rgba(13,16,38,0.75)] w-full h-full'>
              <div className='w-[90%] sm:w-[80%] xl:w-[70%] mx-auto bg-transparent h-full pt-20 flex flex-col justify-center items-center md:items-start'>
                <div>
                  <p className='capitalize text-white text-lg text-semibold'>
                    Our Services
                  </p>
                </div>
                <div>
                  <h1 className='capitalize text-5xl font-[900] w-[90%] sm:w-[80%] md:w-[70%] mx-auto md:mx-0 mb-4 mt-1 text-center md:text-left text-white leading-none'>
                    We Take Pride In{' '}
                    <span className='text-red-500'>Efficient</span> Client
                    Satisfaction
                  </h1>
                </div>
                <div>
                  <p className='text-center md:text-left text-white text-sm font-light w-[90%] sm:w-[80%] md:w-[70%] mx-auto md:mx-0'>
                    We have the tendency to believe that smart looking websites
                    is the best impression, businesses including many in the
                    world&apos;s
                  </p>
                </div>
                <div className='flex gap-3 justify-start items-center my-5'>
                  <button className='text-sm font-medium px-2 py-2 sm:px-5 sm:py-3 text-white bg-[#074DD9] hover:scale-105'>
                    Discus your project
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white grid grid-cols-1 sm:grid-cols-5 gap-10 place-items-stretch w-[90%] sm:w-[80%] xl:w-[70%] mx-auto my-16 sm:my-24'>
            <div className='col-span-3'>
              <div>
                <div className='flex justify-start items-center gap-3 w-fit'>
                  <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center mb-1 mx-auto'>
                    <BsShieldCheck className='text-white text-lg' />
                  </div>
                  <div>
                    <h3 className='text-black text-2xl lg:text-3xl font-bold leading-none mb-3 capitalize'>
                      Cyber Security
                    </h3>
                    <div className='flex gap-3 justify-start items-center'>
                      <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                      <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='block mt-5 mb-0 sm:hidden'>
                <Image
                  src='/imgs/cyber-security.jpg'
                  width={800}
                  height={800}
                  alt='Cyber Security'
                />
              </div>
              <div>
                <div className='mt-8 mb-5 sm:mt-4 sm:mb-3 lg:mt-8 lg:mb-5'>
                  <p className='text-sm sm:text-[0.7rem] lg:text-sm font-medium leading-tight'>
                    Curabitur eget quam sapien. In non lobortis urna. Aenean
                    ultrices viverra erat vel posuere. Donec congue viverra
                    tortor eget pellentesque. Duis vel mi quis massa posuere
                    rhoncus eget accumsan tellus
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-x-1 lg:gap-x-3 lg:gap-y-2 gap-y-4 place-items-start mb-8 sm:mb-4 lg:mb-8'>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Award Winning
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      24/7 Support
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Professional Staff
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Fair Prices
                    </p>
                  </div>
                </div>
                <div>
                  <button className='px-4 lg:px-7 py-2 lg:py-3 text-white bg-[#074DD9] text-sm lg:text-base font-semibold'>
                    Need this service
                  </button>
                </div>
              </div>
            </div>
            <div className='hidden sm:block col-span-2'>
              <Image
                src='/imgs/cyber-security.jpg'
                width={800}
                height={800}
                alt='Cyber Security'
              />
            </div>
          </div>
          <div className='bg-white grid grid-cols-1 sm:grid-cols-5 gap-10 place-items-stretch w-[90%] sm:w-[80%] xl:w-[70%] mx-auto my-16 sm:my-24'>
            <div className='col-span-3'>
              <div>
                <div className='flex justify-start items-center gap-3 w-fit'>
                  <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center mb-1 mx-auto'>
                    <AiOutlineDatabase className='text-white text-lg' />
                  </div>
                  <div>
                    <h3 className='text-black text-2xl lg:text-3xl font-bold leading-none mb-3 capitalize'>
                      Data Analysis
                    </h3>
                    <div className='flex gap-3 justify-start items-center'>
                      <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                      <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='block mt-5 mb-0 sm:hidden'>
                <Image
                  src='/imgs/data-analysis.jpg'
                  width={800}
                  height={800}
                  alt='Data Analysis'
                />
              </div>
              <div>
                <div className='mt-8 mb-5 sm:mt-4 sm:mb-3 lg:mt-8 lg:mb-5'>
                  <p className='text-sm sm:text-[0.7rem] lg:text-sm font-medium leading-tight'>
                    Pellentesque viverra erat vel posueren non lobortis urna.
                    Aenean ultrices eget quam sapien. Iviverra erat vel posuere.
                    Donec congue viverra tortor eget pellentesque. Duis vel mi
                    quis massa posuere rhoncus eget accumsan tellus
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-x-1 lg:gap-x-3 lg:gap-y-2 gap-y-4 place-items-start mb-8 sm:mb-4 lg:mb-8'>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Award Winning
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      24/7 Support
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Professional Staff
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Fair Prices
                    </p>
                  </div>
                </div>
                <div>
                  <button className='px-4 lg:px-7 py-2 lg:py-3 text-white bg-[#074DD9] text-sm lg:text-base font-semibold'>
                    Need this service
                  </button>
                </div>
              </div>
            </div>
            <div className='hidden sm:block col-span-2'>
              <Image
                src='/imgs/data-analysis.jpg'
                width={800}
                height={800}
                alt='Data Analysis'
              />
            </div>
          </div>
          <div className='bg-white grid grid-cols-1 sm:grid-cols-5 gap-10 place-items-stretch w-[90%] sm:w-[80%] xl:w-[70%] mx-auto my-16 sm:my-24'>
            <div className='col-span-3'>
              <div>
                <div className='flex justify-start items-center gap-3 w-fit'>
                  <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center mb-1 mx-auto'>
                    <BsCodeSlash className='text-white text-lg' />
                  </div>
                  <div>
                    <h3 className='text-black text-2xl lg:text-3xl font-bold leading-none mb-3 capitalize'>
                      Web Development
                    </h3>
                    <div className='flex gap-3 justify-start items-center'>
                      <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                      <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='block mt-5 mb-0 sm:hidden'>
                <Image
                  src='/imgs/web-dev.jpg'
                  width={800}
                  height={800}
                  alt='Web Development'
                />
              </div>
              <div>
                <div className='mt-8 mb-5 sm:mt-4 sm:mb-3 lg:mt-8 lg:mb-5'>
                  <p className='text-sm sm:text-[0.7rem] lg:text-sm font-medium leading-tight'>
                    Rhoncus in non lobortis curabitur eget quam sapien urna.
                    Aenean ultrices viverra erat vel posuere. Donec congue
                    viverra tortor eget pellentesque. Duis vel mi quis massa
                    posuere eget accumsan tellus
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-x-1 lg:gap-x-3 lg:gap-y-2 gap-y-4 place-items-start mb-8 sm:mb-4 lg:mb-8'>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Award Winning
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      24/7 Support
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Professional Staff
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Fair Prices
                    </p>
                  </div>
                </div>
                <div>
                  <button className='px-4 lg:px-7 py-2 lg:py-3 text-white bg-[#074DD9] text-sm lg:text-base font-semibold'>
                    Need this service
                  </button>
                </div>
              </div>
            </div>
            <div className='hidden sm:block col-span-2'>
              <Image
                src='/imgs/web-dev.jpg'
                width={800}
                height={800}
                alt='Web Development'
              />
            </div>
          </div>
          <div className='bg-white grid grid-cols-1 sm:grid-cols-5 gap-10 place-items-stretch w-[90%] sm:w-[80%] xl:w-[70%] mx-auto my-16 sm:my-24'>
            <div className='col-span-3'>
              <div>
                <div className='flex justify-start items-center gap-3 w-fit'>
                  <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center mb-1 mx-auto'>
                    <MdDeveloperMode className='text-white text-lg' />
                  </div>
                  <div>
                    <h3 className='text-black text-2xl lg:text-3xl font-bold leading-none mb-3 capitalize'>
                      App Development
                    </h3>
                    <div className='flex gap-3 justify-start items-center'>
                      <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                      <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='block mt-5 mb-0 sm:hidden'>
                <Image
                  src='/imgs/app-dev.jpg'
                  width={800}
                  height={800}
                  alt='App Development'
                />
              </div>
              <div>
                <div className='mt-8 mb-5 sm:mt-4 sm:mb-3 lg:mt-8 lg:mb-5'>
                  <p className='text-sm sm:text-[0.7rem] lg:text-sm font-medium leading-tight'>
                    Quam sapien in non lobortis urna. Aenean ultrices viverra
                    erat vel posuere. Donec congue viverra tortor Curabitur eget
                    eget pellentesque. Duis vel mi quis massa posuere rhoncus
                    eget accumsan tellus
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-x-1 lg:gap-x-3 lg:gap-y-2 gap-y-4 place-items-start mb-8 sm:mb-4 lg:mb-8'>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Award Winning
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      24/7 Support
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Professional Staff
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Fair Prices
                    </p>
                  </div>
                </div>
                <div>
                  <button className='px-4 lg:px-7 py-2 lg:py-3 text-white bg-[#074DD9] text-sm lg:text-base font-semibold'>
                    Need this service
                  </button>
                </div>
              </div>
            </div>
            <div className='hidden sm:block col-span-2'>
              <Image
                src='/imgs/app-dev.jpg'
                width={800}
                height={800}
                alt='App Development'
              />
            </div>
          </div>
          <div className='bg-white grid grid-cols-1 sm:grid-cols-5 gap-10 place-items-stretch w-[90%] sm:w-[80%] xl:w-[70%] mx-auto my-16 sm:my-24'>
            <div className='col-span-3'>
              <div>
                <div className='flex justify-start items-center gap-3 w-fit'>
                  <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center mb-1 mx-auto'>
                    <AiOutlineFileSearch className='text-white text-lg' />
                  </div>
                  <div>
                    <h3 className='text-black text-2xl lg:text-3xl font-bold leading-none mb-3 capitalize'>
                      SEO Optimization
                    </h3>
                    <div className='flex gap-3 justify-start items-center'>
                      <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                      <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='block mt-5 mb-0 sm:hidden'>
                <Image
                  src='/imgs/seo.jpg'
                  width={800}
                  height={800}
                  alt='SEO Optimization'
                />
              </div>
              <div>
                <div className='mt-8 mb-5 sm:mt-4 sm:mb-3 lg:mt-8 lg:mb-5'>
                  <p className='text-sm sm:text-[0.7rem] lg:text-sm font-medium leading-tight'>
                    Sapien non lobortis urna. Curabitur eget quam Aenean
                    ultrices viverra erat vel posuere. Donec congue viverra
                    tortor eget pellentesque. Duis vel mi quis massa posuere
                    rhoncus eget accumsan tellus
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-x-1 lg:gap-x-3 lg:gap-y-2 gap-y-4 place-items-start mb-8 sm:mb-4 lg:mb-8'>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Award Winning
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      24/7 Support
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Professional Staff
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Fair Prices
                    </p>
                  </div>
                </div>
                <div>
                  <button className='px-4 lg:px-7 py-2 lg:py-3 text-white bg-[#074DD9] text-sm lg:text-base font-semibold'>
                    Need this service
                  </button>
                </div>
              </div>
            </div>
            <div className='hidden sm:block col-span-2'>
              <Image
                src='/imgs/seo.jpg'
                width={800}
                height={800}
                alt='SEO Optimization'
              />
            </div>
          </div>
          <div className='w-[90%] sm:w-[80%] xl:w-[70%] mx-auto my-24 sm:my-32'>
            <div className='text-center mb-8'>
              <p className='text-[#074DD9] text-sm lg:text-base font-semibold leading-none mb-1 uppercase'>
                PROMO PLAN
              </p>
              <h3 className='w-full sm:w-[70%] xl:w-[50%] mx-auto text-black text-3xl lg:text-4xl font-bold leading-none mb-2 capitalize'>
                We Are Offering Competitive Prices For Our Clients
              </h3>
              <div className='flex gap-3 justify-center items-center'>
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-0 place-items-center lg:place-items-stretch'>
              <div className='p-10 bg-[rgba(7,77,217,0.15)] shadow-xl'>
                <div className='mb-14'>
                  <h4 className='text-[#074DD9] text-xl font-bold leading-none mb-1 capitalize'>
                    Basic Plan
                  </h4>
                  <p className='text-black text-base font-medium leading-none mb-1'>
                    Donec congue viverra vel
                  </p>
                </div>
                <div>
                  <div className='flex justify-start items-end gap-0 w-full mb-7'>
                    <div className='flex justify-start items-start gap-0 h-full'>
                      <span className='text-xl font-[900] leading-none text-black'>
                        $
                      </span>
                      <span className='text-4xl font-[900] leading-[0.75] text-black'>
                        49.00
                      </span>
                    </div>
                    <span className='text-lg font-semibold leading-none text-black'>
                      /month
                    </span>
                  </div>
                  <div className='flex flex-col gap-6 mb-7'>
                    <div className='flex justify-between w-full items-center gap-6'>
                      <p className='text-base font-semibold leading-none text-black'>
                        eget quam sapien
                      </p>
                      <BsCheckLg className='text-[#074DD9] text-base' />
                    </div>
                    <div className='flex justify-between w-full items-center gap-6'>
                      <p className='text-base font-semibold leading-none text-black'>
                        Donec congue viverra
                      </p>
                      <BsCheckLg className='text-[#074DD9] text-base' />
                    </div>
                    <div className='flex justify-between w-full items-center gap-6'>
                      <p className='text-base font-semibold leading-none text-black'>
                        Aenean ultrices eget
                      </p>
                      <AiOutlineClose className='text-gray-800 text-lg' />
                    </div>
                    <div className='flex justify-between w-full items-center gap-6'>
                      <p className='text-base font-semibold leading-none text-black'>
                        Duis vel mi quis massa
                      </p>
                      <AiOutlineClose className='text-gray-800 text-lg' />
                    </div>
                  </div>
                  <div>
                    <button className='text-sm font-medium px-5 py-2 text-white bg-[#074DD9] hover:scale-105'>
                      Start Plan
                    </button>
                  </div>
                </div>
              </div>
              <div className='p-10 bg-white shadow-2xl scale-105'>
                <div className='mb-14'>
                  <h4 className='text-[#074DD9] text-xl font-bold leading-none mb-1 capitalize'>
                    Standard Plan
                  </h4>
                  <p className='text-black text-base font-medium leading-none mb-1'>
                    Lobortis congue viverra vel
                  </p>
                </div>
                <div>
                  <div className='flex justify-start items-end gap-0 w-full mb-7'>
                    <div className='flex justify-start items-start gap-0 h-full'>
                      <span className='text-xl font-[900] leading-none text-black'>
                        $
                      </span>
                      <span className='text-4xl font-[900] leading-[0.75] text-black'>
                        99.00
                      </span>
                    </div>
                    <span className='text-lg font-semibold leading-none text-black'>
                      /month
                    </span>
                  </div>
                  <div className='flex flex-col gap-6 mb-7'>
                    <div className='flex justify-between w-full items-center gap-6'>
                      <p className='text-base font-semibold leading-none text-black'>
                        eget quam sapien
                      </p>
                      <BsCheckLg className='text-[#074DD9] text-base' />
                    </div>
                    <div className='flex justify-between w-full items-center gap-6'>
                      <p className='text-base font-semibold leading-none text-black'>
                        Donec congue viverra
                      </p>
                      <BsCheckLg className='text-[#074DD9] text-base' />
                    </div>
                    <div className='flex justify-between w-full items-center gap-6'>
                      <p className='text-base font-semibold leading-none text-black'>
                        Aenean ultrices eget
                      </p>
                      <BsCheckLg className='text-[#074DD9] text-base' />
                    </div>
                    <div className='flex justify-between w-full items-center gap-6'>
                      <p className='text-base font-semibold leading-none text-black'>
                        Duis vel mi quis massa
                      </p>
                      <AiOutlineClose className='text-gray-800 text-lg' />
                    </div>
                  </div>
                  <div>
                    <button className='text-sm font-medium px-5 py-2 text-white bg-[#074DD9] hover:scale-105'>
                      Start Plan
                    </button>
                  </div>
                </div>
              </div>
              <div className='p-10 bg-[rgba(7,77,217,0.15)] shadow-xl'>
                <div className='mb-14'>
                  <h4 className='text-[#074DD9] text-xl font-bold leading-none mb-1 capitalize'>
                    Advanced Plan
                  </h4>
                  <p className='text-black text-base font-medium leading-none mb-1'>
                    Viverra congue viverra vel
                  </p>
                </div>
                <div>
                  <div className='flex justify-start items-end gap-0 w-full mb-7'>
                    <div className='flex justify-start items-start gap-0 h-full'>
                      <span className='text-xl font-[900] leading-none text-black'>
                        $
                      </span>
                      <span className='text-4xl font-[900] leading-[0.75] text-black'>
                        149.00
                      </span>
                    </div>
                    <span className='text-lg font-semibold leading-none text-black'>
                      /month
                    </span>
                  </div>
                  <div className='flex flex-col gap-6 mb-7'>
                    <div className='flex justify-between w-full items-center gap-6'>
                      <p className='text-base font-semibold leading-none text-black'>
                        eget quam sapien
                      </p>
                      <BsCheckLg className='text-[#074DD9] text-base' />
                    </div>
                    <div className='flex justify-between w-full items-center gap-6'>
                      <p className='text-base font-semibold leading-none text-black'>
                        Donec congue viverra
                      </p>
                      <BsCheckLg className='text-[#074DD9] text-base' />
                    </div>
                    <div className='flex justify-between w-full items-center gap-6'>
                      <p className='text-base font-semibold leading-none text-black'>
                        Aenean ultrices eget
                      </p>
                      <BsCheckLg className='text-[#074DD9] text-base' />
                    </div>
                    <div className='flex justify-between w-full items-center gap-6'>
                      <p className='text-base font-semibold leading-none text-black'>
                        Duis vel mi quis massa
                      </p>
                      <BsCheckLg className='text-[#074DD9] text-base' />
                    </div>
                  </div>
                  <div>
                    <button className='text-sm font-medium px-5 py-2 text-white bg-[#074DD9] hover:scale-105'>
                      Start Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[90%] sm:w-[80%] xl:w-[70%] mx-auto my-24 sm:my-32'>
            <div className='text-center mb-8'>
              <p className='text-[#074DD9] text-sm lg:text-base font-semibold leading-none mb-1 uppercase'>
                TESTIMONIALS
              </p>
              <h3 className='w-full sm:w-[70%] xl:w-[50%] mx-auto text-black text-3xl lg:text-4xl font-bold leading-none mb-2 capitalize'>
                What Our Clients Say About Our Digital Services
              </h3>
              <div className='flex gap-3 justify-center items-center'>
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
              </div>
            </div>
          </div>
          <div className='bg-white grid grid-cols-1 sm:grid-cols-5 gap-10 place-items-stretch w-[90%] sm:w-[80%] xl:w-[70%] mx-auto my-24 sm:my-32'>
            <div className='col-span-3'>
              <div className='mb-10 sm:mb-5 lg:mb-10'>
                <p className='text-[#074DD9] text-sm lg:text-base font-semibold leading-none mb-1 uppercase'>
                  REQUEST A QUOTE
                </p>
                <h3 className='text-black text-3xl lg:text-4xl font-bold leading-none mb-2 capitalize'>
                  Need a Free Quote? Please Feel Free to Contact Us
                </h3>
                <div className='flex gap-3 justify-start items-center'>
                  <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                  <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-x-3 gap-y-4 place-items-start mb-4 lg:mb-8'>
                <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                  <MdOutlineAccessTime className='text-[#074DD9] text-sm lg:text-base' />
                  <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                    Apply within 24hrs
                  </p>
                </div>
                <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                  <BsTelephone className='text-[#074DD9] text-sm lg:text-base' />
                  <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                    24/7 Telephone Support
                  </p>
                </div>
              </div>
              <div className='block sm:hidden my-6'>
                <form className='bg-[#074DD9] p-3 lg:p-10 flex flex-col gap-2 lg:gap-4 justify-evenly'>
                  <input
                    type='text'
                    placeholder='First Name'
                    className='w-full text-sm lg:text-base font-medium p-2'
                  />
                  <input
                    type='text'
                    placeholder='Last Name'
                    className='w-full text-sm lg:text-base font-medium p-2'
                  />
                  <input
                    type='text'
                    placeholder='Email Address'
                    className='w-full text-sm lg:text-base font-medium p-2'
                  />
                  <textarea
                    type='text'
                    placeholder='Message'
                    rows={3}
                    className='w-full text-sm lg:text-base font-medium p-2'
                  />
                  <button className='bg-[#021842] text-sm lg:text-base font-medium w-full py-2 text-white'>
                    Request a Quote
                  </button>
                </form>
              </div>
              <div>
                <div className='mt-8 mb-5 sm:mb-3 lg:mt-8 lg:mb-5'>
                  <p className='text-sm sm:text-[0.7rem] lg:text-sm font-medium leading-tight'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce vehicula magna sit amet dictum dapibus. Curabitur eget
                    quam sapien. In non lobortis urna. Aenean ultrices viverra
                    erat vel posuere. Donec congue viverra tortor eget
                    pellentesque. Duis vel mi quis massa posuere rhoncus eget
                    accumsan tellus
                  </p>
                </div>
                <div className='flex gap-2 justify-start items-center mb-7'>
                  <div className='w-9 h-9 lg:w-12 lg:h-12 bg-[#074DD9] flex justify-center items-center'>
                    <BsTelephone className='text-white text-sm lg:text-lg' />
                  </div>
                  <div>
                    <span className='block text-sm lg:text-base font-semibold leading-none lowercase mb-2'>
                      Call to ask any question
                    </span>
                    <span className='block text-[#074DD9] text-sm lg:text-lg font-bold leading-none lower tracking-wide'>
                      +234884245245
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden sm:block col-span-2'>
              <form className='bg-[#074DD9] p-3 lg:p-10 flex flex-col gap-2 lg:gap-4 justify-evenly'>
                <input
                  type='text'
                  placeholder='First Name'
                  className='w-full text-sm lg:text-base font-medium p-2'
                />
                <input
                  type='text'
                  placeholder='Last Name'
                  className='w-full text-sm lg:text-base font-medium p-2'
                />
                <input
                  type='text'
                  placeholder='Email Address'
                  className='w-full text-sm lg:text-base font-medium p-2'
                />
                <textarea
                  type='text'
                  placeholder='Message'
                  rows={3}
                  className='w-full text-sm lg:text-base font-medium p-2'
                />
                <button className='bg-[#021842] text-sm lg:text-base font-medium w-full py-2 text-white'>
                  Request a Quote
                </button>
              </form>
            </div>
          </div>
          <div className='bg-white grid grid-cols-1 sm:grid-cols-5 gap-10 place-items-stretch w-[90%] sm:w-[80%] xl:w-[70%] mx-auto my-24 sm:my-32'>
            <div className='col-span-3'>
              <div>
                <p className='text-[#074DD9] text-sm lg:text-base font-semibold leading-none mb-1 uppercase'>
                  ABOUT US
                </p>
                <h3 className='text-black text-3xl lg:text-4xl font-bold leading-none mb-2 capitalize'>
                  The Best IT Solution With 10 Years of Experience
                </h3>
                <div className='flex gap-3 justify-start items-center'>
                  <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                  <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                </div>
              </div>
              <div className='block my-10 sm:hidden'>
                <Image
                  src='/imgs/board.jpg'
                  width={800}
                  height={800}
                  alt='Board'
                />
              </div>
              <div>
                <div className='mt-8 mb-5 sm:mt-4 sm:mb-3 lg:mt-8 lg:mb-5'>
                  <p className='text-sm sm:text-[0.7rem] lg:text-sm font-medium leading-tight'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce vehicula magna sit amet dictum dapibus. Curabitur eget
                    quam sapien. In non lobortis urna. Aenean ultrices viverra
                    erat vel posuere. Donec congue viverra tortor eget
                    pellentesque. Duis vel mi quis massa posuere rhoncus eget
                    accumsan tellus
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-x-1 lg:gap-x-3 lg:gap-y-2 gap-y-4 place-items-start mb-8 sm:mb-4 lg:mb-8'>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Award Winning
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      24/7 Support
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Professional Staff
                    </p>
                  </div>
                  <div className='flex gap-2 lg:gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-sm lg:text-base' />
                    <p className='text-sm lg:text-lg font-semibold leading-none capitalize'>
                      Fair Prices
                    </p>
                  </div>
                </div>
                <div className='flex gap-2 justify-start items-center mb-7 sm:mb-3 lg:mb-7'>
                  <div className='w-9 h-9 lg:w-12 lg:h-12 bg-[#074DD9] flex justify-center items-center'>
                    <BsTelephone className='text-white text-sm lg:text-lg' />
                  </div>
                  <div>
                    <span className='block text-sm lg:text-base font-semibold leading-none lowercase mb-2'>
                      Call to ask any question
                    </span>
                    <span className='block text-[#074DD9] text-base lg:text-lg font-bold leading-none lower tracking-wide'>
                      +234884245245
                    </span>
                  </div>
                </div>
                <div>
                  <button className='px-4 lg:px-7 py-2 lg:py-3 text-white bg-[#074DD9] text-sm lg:text-base font-semibold'>
                    Present an Idea
                  </button>
                </div>
              </div>
            </div>
            <div className='hidden sm:block col-span-2'>
              <Image
                src='/imgs/board.jpg'
                width={800}
                height={800}
                alt='Board'
              />
            </div>
          </div>
          <div className='w-[90%] sm:w-[80%] xl:w-[70%] mx-auto my-24 sm:my-32'>
            <div className='text-center mb-8'>
              <p className='text-[#074DD9] text-sm lg:text-base font-semibold leading-none mb-1 uppercase'>
                WHY CHOOSE US
              </p>
              <h3 className='w-full sm:w-[70%] xl:w-[50%] mx-auto text-black text-3xl lg:text-4xl font-bold leading-none mb-2 capitalize'>
                We Are Here to Grow Your Business Exponentially
              </h3>
              <div className='flex gap-3 justify-center items-center'>
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 place-items-stretch gap-10'>
              <div>
                <div className='w-9 h-9 lg:w-12 lg:h-12 bg-[#074DD9] flex justify-center items-center mb-1'>
                  <AiFillCloud className='text-white text-sm lg:text-lg' />
                </div>
                <div>
                  <p className='text-lg font-semibold text-black mb-3'>
                    Best in Industry
                  </p>
                  <p className='text-sm lg:text-base font-medium leading-tight'>
                    Curabitur eget quam sapien. In non lobortis urna. Aenean
                    ultrices viverra erat vel posuere. Donec congue viverra
                    tortor eget pellentesque. Duis vel mi quis massa posuere
                    rhoncus eget accumsan tellus
                  </p>
                </div>
              </div>
              <div className='order-first md:order-none'>
                <Image
                  src='/imgs/meeting.jpg'
                  width={900}
                  height={900}
                  alt='meeting'
                />
              </div>
              <div>
                <div className='w-9 h-9 lg:w-12 lg:h-12 bg-[#074DD9] flex justify-center items-center mb-1'>
                  <AiFillStar className='text-white text-sm lg:text-lg' />
                </div>
                <div>
                  <p className='text-lg font-semibold text-black mb-3'>
                    Professional Staff
                  </p>
                  <p className='text-sm lg:text-base font-medium leading-tight'>
                    Curabitur eget quam sapien. In non lobortis urna. Aenean
                    ultrices viverra erat vel posuere. Donec congue viverra
                    tortor eget pellentesque. Duis vel mi quis massa posuere
                    rhoncus eget accumsan tellus
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[90%] sm:w-[80%] xl:w-[70%] mx-auto my-24 sm:my-32'>
            <div className='text-center mb-8'>
              <p className='text-[#074DD9] text-sm lg:text-base font-semibold leading-none mb-1 uppercase'>
                TEAM MEMBERS
              </p>
              <h3 className='w-full sm:w-[70%] xl:w-[50%] mx-auto text-black text-3xl lg:text-4xl font-bold leading-none mb-2 capitalize'>
                Professional Staffs Ready to Help Your Business
              </h3>
              <div className='flex gap-3 justify-center items-center'>
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-7 place-items-stretch'>
              <div className=''>
                <div className=''>
                  <Image
                    src='/imgs/team-lead.jpg'
                    width={1000}
                    height={1000}
                    alt='team member'
                  />
                </div>
                <div className='text-center p-3 bg-[rgba(7,77,217,0.15)]'>
                  <h5 className='text-2xl sm:text-base lg:text-xl font-semibold leading-none text-[#074DD9] capitalize'>
                    Sofia Ade
                  </h5>
                  <p className='text-base sm:text-xs lg:text-base font-medium leading-tight'>
                    Team Lead
                  </p>
                </div>
              </div>
              <div className=''>
                <div className=''>
                  <Image
                    src='/imgs/project-manager.jpg'
                    width={1000}
                    height={1000}
                    alt='team member'
                  />
                </div>
                <div className='text-center p-3 bg-[rgba(7,77,217,0.15)]'>
                  <h5 className='text-2xl sm:text-base lg:text-xl font-semibold leading-none text-[#074DD9] capitalize'>
                    Catherin Brown
                  </h5>
                  <p className='text-base sm:text-xs lg:text-base font-medium leading-tight'>
                    Project Manager
                  </p>
                </div>
              </div>
              <div className=''>
                <div className=''>
                  <Image
                    src='/imgs/software-engr.jpg'
                    width={1000}
                    height={1000}
                    alt='team member'
                  />
                </div>
                <div className='text-center p-3 bg-[rgba(7,77,217,0.15)]'>
                  <h5 className='text-2xl sm:text-base lg:text-xl font-semibold leading-none text-[#074DD9] capitalize'>
                    Georgia Miller
                  </h5>
                  <p className='text-base sm:text-xs lg:text-base font-medium leading-tight'>
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[90%] sm:w-[80%] xl:w-[70%] mx-auto my-24 sm:my-32'>
            <div className='text-center mb-8'>
              <p className='text-[#074DD9] text-sm lg:text-base font-semibold leading-none mb-1 uppercase'>
                LATEST BLOG
              </p>
              <h3 className='w-full sm:w-[70%] xl:w-[50%] mx-auto text-black text-3xl lg:text-4xl font-bold leading-none mb-2 capitalize'>
                Read The Latest Articles from Our Blog Post
              </h3>
              <div className='flex gap-3 justify-center items-center'>
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch'>
              <div className='relative flex flex-col'>
                <div className='bg-[#074DD9] absolute left-0 top-[10%]'>
                  <p className='text-base font-bold leading-none text-white py-1 px-3'>
                    TECH MEETING
                  </p>
                </div>
                <div>
                  <Image
                    src='/imgs/business-meeting.jpg'
                    width={1000}
                    height={1000}
                    alt='blog thumbnail'
                  />
                </div>
                <div className='flex flex-grow flex-col gap-4 p-5 bg-[rgba(7,77,217,0.15)]'>
                  <div className='flex gap-6 flex-start items-center'>
                    <div className='flex gap-2 flex-start items-center'>
                      <AiOutlineBell className='text-[#074DD9] text-sm' />
                      <p className='text-xs font-normal text-black'>
                        2 days ago
                      </p>
                    </div>
                    <div className='flex gap-2 flex-start items-center'>
                      <BsPersonCircle className='text-[#074DD9] text-sm' />
                      <p className='text-xs font-normal text-black'>
                        Dennis Akpan
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className='text-xl font-extrabold leading-none text-black'>
                      How to build a website
                    </h4>
                  </div>
                  <div>
                    <p className='text-xs font-normal text-black'>
                      Fusce quis venenatis mauris. Donec auctor laoreet diam,
                      vel euismod arcu blandit viverra
                    </p>
                  </div>
                  <div className='flex justify-start items-center gap-3'>
                    <p className='text-base font-medium text-[#074DD9]'>
                      READ MORE
                    </p>
                    <BsArrowRightCircle className='text-[#074DD9] text-lg' />
                  </div>
                </div>
              </div>
              <div className='relative flex flex-col'>
                <div className='bg-[#074DD9] absolute left-0 top-[10%]'>
                  <p className='text-base font-bold leading-none text-white py-1 px-3'>
                    TECH MEETING
                  </p>
                </div>
                <div>
                  <Image
                    src='/imgs/two-meeting.jpg'
                    width={1000}
                    height={1000}
                    alt='blog thumbnail'
                  />
                </div>
                <div className='flex flex-grow flex-col gap-4 p-5 bg-[rgba(7,77,217,0.15)]'>
                  <div className='flex gap-6 flex-start items-center'>
                    <div className='flex gap-2 flex-start items-center'>
                      <AiOutlineBell className='text-[#074DD9] text-sm' />
                      <p className='text-xs font-normal text-black'>
                        4 days ago
                      </p>
                    </div>
                    <div className='flex gap-2 flex-start items-center'>
                      <BsPersonCircle className='text-[#074DD9] text-sm' />
                      <p className='text-xs font-normal text-black'>
                        Dennis Akpan
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className='text-xl font-extrabold leading-none text-black'>
                      How to build a server
                    </h4>
                  </div>
                  <div>
                    <p className='text-xs font-normal text-black'>
                      Euismod arcu blandit viverra. Donec auctor laoreet diam,
                      vel fusce quis venenatis mauris.
                    </p>
                  </div>
                  <div className='flex justify-start items-center gap-3'>
                    <p className='text-base font-medium text-[#074DD9]'>
                      READ MORE
                    </p>
                    <BsArrowRightCircle className='text-[#074DD9] text-lg' />
                  </div>
                </div>
              </div>
              <div className='relative flex flex-col'>
                <div className='bg-[#074DD9] absolute left-0 top-[10%]'>
                  <p className='text-base font-bold leading-none text-white py-1 px-3'>
                    IT TRAINING
                  </p>
                </div>
                <div>
                  <Image
                    src='/imgs/mini-meeting.jpg'
                    width={1000}
                    height={1000}
                    alt='blog thumbnail'
                  />
                </div>
                <div className='flex flex-grow flex-col gap-4 p-5 bg-[rgba(7,77,217,0.15)]'>
                  <div className='flex gap-6 flex-start items-center'>
                    <div className='flex gap-2 flex-start items-center'>
                      <AiOutlineBell className='text-[#074DD9] text-sm' />
                      <p className='text-xs font-normal text-black'>
                        7 days ago
                      </p>
                    </div>
                    <div className='flex gap-2 flex-start items-center'>
                      <BsPersonCircle className='text-[#074DD9] text-sm' />
                      <p className='text-xs font-normal text-black'>
                        Peter Ade
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className='text-xl font-extrabold leading-none text-black'>
                      How to deploy a website
                    </h4>
                  </div>
                  <div>
                    <p className='text-xs font-normal text-black'>
                      Donec auctor laoreet diam. Fusce quis venenatis mauris vel
                      euismod arcu blandit
                    </p>
                  </div>
                  <div className='flex justify-start items-center gap-3'>
                    <p className='text-base font-medium text-[#074DD9]'>
                      READ MORE
                    </p>
                    <BsArrowRightCircle className='text-[#074DD9] text-lg' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='relative z-[10] bg-[#021842] h-fit'>
        <div className='max-w-[90rem] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-0 gap-y-5 lg:gap-5 place-items-stretch w-[90%] sm:w-[80%] xl:w-[70%] mx-auto pb-10 lg:pb-0 h-full'>
            <div className='z-[30] col-span-4 bg-[#074DD9] flex flex-col gap-5 px-10 lg:px-2 xl:px-5 pt-16 pb-14 w-fit h-full'>
              <div className='text-4xl font-normal leading-none w-fit mx-auto lg:ml-0'>
                <span className='bg-gradient-to-br from-[#021842] to-white text-transparent inline-block bg-clip-text'>
                  .IT
                </span>
                <span className='text-white'>solve</span>
              </div>
              <div>
                <p className='text-white text-center text-xs font-normal'>
                  Vivamus porttitor vitae est eu volutpat. Proin id diam ac
                  justo tempus iaculis at vel enim. In id placerat ante. Aenean
                  quis odio enim. Sed pretium elit non nunc egestasnec interdum
                  ipsum convallis. Nam lacinia arcu non justo volutpat, at
                  rhoncus
                </p>
              </div>
              <div className='w-full flex justify-start items-center gap-0'>
                <input
                  type='email'
                  placeholder='Email'
                  className='w-[70%] flex-grow p-2 text-sm xl:text-base font-normal leading-none focus:outline-none'
                />
                <button className='px-2 py-2 text-white text-base xl:text-xl font-medium leading-none bg-[#021842]'>
                  Sign up
                </button>
              </div>
            </div>
            <div className='col-span-8 w-full grid grid-cols-1 sm:grid-cols-3 gap-10 py-10'>
              <div>
                <div>
                  <h3 className='text-white text-xl font-extrabold leading-none mb-2 capitalize'>
                    Get in Touch
                  </h3>
                  <div className='flex gap-3 justify-start items-center'>
                    <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                    <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                  </div>
                </div>
                <div className='flex flex-col gap-3 my-3'>
                  <div className='flex gap-2 items-start justify-start'>
                    <MdOutlineLocationOn className='text-[#074DD9] text-xs' />
                    <p className='capitalize text-xs font-normal text-gray-400'>
                      23 Ajaniva olu avenue, Enugu
                    </p>
                  </div>
                  <div className='flex gap-2 items-start justify-start'>
                    <AiOutlineMail className='text-[#074DD9] text-xs' />
                    <p className='text-xs font-normal text-gray-400'>
                      themail27@gmail.com
                    </p>
                  </div>
                  <div className='flex gap-2 items-start justify-start'>
                    <BsTelephone className='text-[#074DD9] text-xs' />
                    <p className='capitalize text-xs font-normal text-gray-400'>
                      +23490443490
                    </p>
                  </div>
                </div>
                <div className='flex gap-5'>
                  <div className='flex justify-center items-center bg-[#074DD9] w-7 h-7'>
                    <BsFacebook className='text-white text-sm' />
                  </div>
                  <div className='flex justify-center items-center bg-[#074DD9] w-7 h-7'>
                    <BsInstagram className='text-white text-sm' />
                  </div>
                  <div className='flex justify-center items-center bg-[#074DD9] w-7 h-7'>
                    <BsTwitter className='text-white text-sm' />
                  </div>
                  <div className='flex justify-center items-center bg-[#074DD9] w-7 h-7'>
                    <BsLinkedin className='text-white text-sm' />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h3 className='text-white text-xl font-extrabold leading-none mb-2 capitalize'>
                    Quick Links
                  </h3>
                  <div className='flex gap-3 justify-start items-center'>
                    <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                    <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                  </div>
                </div>
                <div className='flex flex-col gap-3 my-3'>
                  <p className='capitalize text-xs font-normal text-gray-400'>
                    SEO Rules
                  </p>
                  <p className='capitalize text-xs font-normal text-gray-400'>
                    IT Standard
                  </p>
                  <p className='capitalize text-xs font-normal text-gray-400'>
                    Career
                  </p>
                  <p className='capitalize text-xs font-normal text-gray-400'>
                    Frontend learn
                  </p>
                  <p className='capitalize text-xs font-normal text-gray-400'>
                    Ethical Hacking
                  </p>
                  <p className='capitalize text-xs font-normal text-gray-400'>
                    Server Security
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h3 className='text-white text-xl font-extrabold leading-none mb-2 capitalize'>
                    Popular Links
                  </h3>
                  <div className='flex gap-3 justify-start items-center'>
                    <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                    <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                  </div>
                </div>
                <div className='flex flex-col gap-3 my-3'>
                  <p className='capitalize text-xs font-normal text-gray-400'>
                    SEO Rules
                  </p>
                  <p className='capitalize text-xs font-normal text-gray-400'>
                    IT Standard
                  </p>
                  <p className='capitalize text-xs font-normal text-gray-400'>
                    Career
                  </p>
                  <p className='capitalize text-xs font-normal text-gray-400'>
                    Frontend learn
                  </p>
                  <p className='capitalize text-xs font-normal text-gray-400'>
                    Ethical Hacking
                  </p>
                  <p className='capitalize text-xs font-normal text-gray-400'>
                    Server Security
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 left-0 z-[20] w-full bg-[#0D1026]'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-5 place-items-stretch w-[90%] sm:w-[80%] xl:w-[70%] mx-auto h-full'>
              <div className='lg:col-start-5 lg:col-span-8'>
                <span className='w-full text-center block py-4'>
                  <p className='text-xs sm:text-sm font-medium text-gray-400'>
                    &copy;2023 ITsolve services{' '}
                    <span className='mx-1 sm:mx-4 text-WHITE'>&middot;</span>{' '}
                    All Rights Reserved{' '}
                    <span className='mx-1 sm:mx-4 text-WHITE'>&middot;</span>{' '}
                    Designed by mmesoma saint
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
