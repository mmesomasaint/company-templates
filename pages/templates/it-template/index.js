import Head from 'next/head'
import Image from 'next/image'
import Styles from '../../../styles/it.module.css'
import {
  AiFillCloud,
  AiFillStar,
  AiOutlineClose,
  AiOutlineDatabase,
  AiOutlineFileSearch,
  AiOutlineHome,
  AiOutlineMail,
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
} from 'react-icons/bs'
import { MdDeveloperMode, MdOutlineAccessTime } from 'react-icons/md'
import { ImHappy2 } from 'react-icons/im'

export default function Home() {
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
      <header>
        <div className='absolute top-0 left-0 flex gap-0 w-full'>
          <div className='bg-white p-3 flex justify-center items-center gap-0'>
            <div className='text-4xl font-normal leading-none w-fit'>
              <span className='bg-gradient-to-br from-[#074DD9] to-[#021842] text-transparent inline-block bg-clip-text'>
                .IT
              </span>
              <span className='text-[#021842]'>solve</span>
            </div>
          </div>
          <div className='flex flex-col gap-0 flex-grow'>
            <div className='flex justify-between items-center gap-6 bg-[#021842] pl-3'>
              <div className='flex justify-evenly items-center gap-5'>
                <div className='flex gap-2 items-center justify-evenly'>
                  <AiOutlineHome className='text-red-500 text-sm' />
                  <span className='text-xs text-white font-light'>
                    Welcome to Our It Company
                  </span>
                </div>
                <span>|</span>
                <div className='flex gap-2 items-center justify-evenly'>
                  <AiOutlineMail className='text-red-500 text-sm' />
                  <span className='text-xs text-white font-light'>
                    themail27@gmail.com
                  </span>
                </div>
              </div>
              <div className='flex gap-3 items-center justify-evenly'>
                <BsFacebook className='text-white text-sm' />
                <span>|</span>
                <BsTwitter className='text-white text-sm' />
                <span>|</span>
                <BsInstagram className='text-white text-sm' />
                <span>|</span>
                <BsPersonCircle className='text-white text-sm' />
                <span>|</span>
                <BsLinkedin className='text-white text-sm' />
                <span>|</span>
              </div>
            </div>
            <div className='flex justify-between items-center gap-6 backdrop-blur-md'>
              <div className='flex gap-6 items-center justify-evenly px-3'>
                <span className='text-sm font-medium leading-none text-white hover:scale-105 cursor-pointer'>
                  Home+
                </span>
                <span className='text-sm font-medium leading-none text-white hover:scale-105 cursor-pointer'>
                  Shop+
                </span>
                <span className='text-sm font-medium leading-none text-white hover:scale-105 cursor-pointer'>
                  Company+
                </span>
                <span className='text-sm font-medium leading-none text-white hover:scale-105 cursor-pointer'>
                  IT Solutions+
                </span>
                <span className='text-sm font-medium leading-none text-white hover:scale-105 cursor-pointer'>
                  Blog+
                </span>
                <span className='text-sm font-medium leading-none text-white hover:scale-105 cursor-pointer'>
                  Contact Us+
                </span>
              </div>
              <div className='flex gap-6 items-center justify-evenly'>
                <div className='flex gap-2 items-center justify-evenly'>
                  <BsTelephone className='text-red-500 text-sm' />
                  <span className='text-sm font-medium leading-none text-white'>
                    +23498239800
                  </span>
                </div>
                <span className='p-2 bg-[#074DD9] text-white text-base font-medium'>
                  Get A Quote
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='max-w-[90rem] mx-auto'>
          <div className="h-[37rem] w-full bg-[url('/imgs/it-server.jpg')] bg-no-repeat bg-cover bg-center md:bg-right">
            <div className='bg-[rgba(13,16,38,0.75)] w-full h-full'>
              <div className='w-[80%] lg:w-[50%] ml-40 bg-transparent h-full pt-20 flex flex-col justify-center items-start'>
                <div>
                  <p className='capitalize text-white text-lg text-semibold'>
                    Total solution here
                  </p>
                </div>
                <div>
                  <h1 className='capitalize text-5xl font-[900] w-[70%] mb-4 mt-1 text-white leading-none'>
                    Best <span className='text-red-500'>IT Solution</span>{' '}
                    Company
                  </h1>
                </div>
                <div>
                  <p className='text-white text-sm font-light w-[70%]'>
                    We have the tendency to believe that smart looking websites
                    is the best impression, businesses including many in the
                    world's
                  </p>
                </div>
                <div className='flex gap-3 justify-start items-center my-5'>
                  <button className='text-sm font-medium px-5 py-3 text-white bg-[#074DD9] hover:scale-105'>
                    Discus your project
                  </button>
                  <button className='text-sm font-medium px-5 py-3 bg-white text-[#074DD9] hover:scale-105'>
                    Our services
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='z-10 relative -top-12 w-[70%] mx-auto grid grid-cols-3 gap-0 place-items-stretch'>
            <div className='bg-[#074DD9] px-10 py-4'>
              <div className='grid grid-cols-3 gap-1 place-items-center w-fit mx-auto'>
                <div className='w-12 h-12 bg-white flex justify-center items-center'>
                  <ImHappy2 className='text-[#074DD9]' />
                </div>
                <div className='col-span-2'>
                  <div>
                    <p className='text-base font-normal text-white capitalize'>
                      Happy Clients
                    </p>
                  </div>
                  <div>
                    <p className='text-4xl font-bold text-white tracking-widest'>
                      12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white px-10 py-4'>
              <div className='grid grid-cols-3 gap-1 place-items-center w-fit mx-auto'>
                <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center'>
                  <BsCheckLg className='text-white' />
                </div>
                <div className='col-span-2'>
                  <div>
                    <p className='text-base font-normal text-[#074DD9] capitalize'>
                      Properly Done
                    </p>
                  </div>
                  <div>
                    <p className='text-4xl font-bold text-black tracking-widest'>
                      12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[#074DD9] px-10 py-4'>
              <div className='grid grid-cols-3 gap-1 place-items-center w-fit mx-auto'>
                <div className='w-12 h-12 bg-white flex justify-center items-center'>
                  <BsAwardFill className='text-[#074DD9]' />
                </div>
                <div className='col-span-2'>
                  <div>
                    <p className='text-base font-normal text-white capitalize'>
                      Win Awards
                    </p>
                  </div>
                  <div>
                    <p className='text-4xl font-bold text-white tracking-widest'>
                      12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white grid grid-cols-5 gap-10 place-items-stretch w-[70%] mx-auto my-24'>
            <div className='col-span-3'>
              <div>
                <p className='text-[#074DD9] text-base font-semibold leading-none mb-1 uppercase'>
                  ABOUT US
                </p>
                <h3 className='text-black text-4xl font-bold leading-none mb-2 capitalize'>
                  The Best IT Solution With 10 Years of Experience
                </h3>
                <div className='flex gap-3 justify-start items-center'>
                  <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                  <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                </div>
              </div>
              <div>
                <div className='mt-8 mb-5'>
                  <p className='text-sm font-medium leading-tight'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce vehicula magna sit amet dictum dapibus. Curabitur eget
                    quam sapien. In non lobortis urna. Aenean ultrices viverra
                    erat vel posuere. Donec congue viverra tortor eget
                    pellentesque. Duis vel mi quis massa posuere rhoncus eget
                    accumsan tellus
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-x-3 gap-y-4 place-items-start mb-8'>
                  <div className='flex gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-base' />
                    <p className='text-lg font-semibold leading-none capitalize'>
                      Award Winning
                    </p>
                  </div>
                  <div className='flex gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-base' />
                    <p className='text-lg font-semibold leading-none capitalize'>
                      24/7 Support
                    </p>
                  </div>
                  <div className='flex gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-base' />
                    <p className='text-lg font-semibold leading-none capitalize'>
                      Professional Staff
                    </p>
                  </div>
                  <div className='flex gap-4 justify-start items-center'>
                    <BsCheckLg className='text-[#074DD9] text-base' />
                    <p className='text-lg font-semibold leading-none capitalize'>
                      Fair Prices
                    </p>
                  </div>
                </div>
                <div className='flex gap-2 justify-start items-center mb-7'>
                  <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center'>
                    <BsTelephone className='text-white text-lg' />
                  </div>
                  <div>
                    <span className='block text-base font-semibold leading-none lowercase mb-2'>
                      Call to ask any question
                    </span>
                    <span className='block text-[#074DD9] text-lg font-bold leading-none lower tracking-wide'>
                      +234884245245
                    </span>
                  </div>
                </div>
                <div>
                  <button className='px-7 py-3 text-white bg-[#074DD9] text-base font-semibold'>
                    Present an Idea
                  </button>
                </div>
              </div>
            </div>
            <div className='col-span-2'>
              <Image
                src='/imgs/board.jpg'
                width={800}
                height={800}
                alt='Board'
              />
            </div>
          </div>
          <div className='w-[70%] mx-auto my-24'>
            <div className='text-center mb-8'>
              <p className='text-[#074DD9] text-base font-semibold leading-none mb-1 uppercase'>
                WHY CHOOSE US
              </p>
              <h3 className='w-[50%] mx-auto text-black text-4xl font-bold leading-none mb-2 capitalize'>
                We Are Here to Grow Your Business Exponentially
              </h3>
              <div className='flex gap-3 justify-center items-center'>
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
              </div>
            </div>
            <div className='grid grid-cols-3 place-items-stretch gap-10'>
              <div>
                <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center mb-1'>
                  <AiFillCloud className='text-white text-lg' />
                </div>
                <div>
                  <p className='text-lg font-semibold text-black mb-3'>
                    Best in Industry
                  </p>
                  <p>
                    Curabitur eget quam sapien. In non lobortis urna. Aenean
                    ultrices viverra erat vel posuere. Donec congue viverra
                    tortor eget pellentesque. Duis vel mi quis massa posuere
                    rhoncus eget accumsan tellus
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src='/imgs/meeting.jpg'
                  width={900}
                  height={900}
                  alt='meeting'
                />
              </div>
              <div>
                <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center mb-1'>
                  <AiFillStar className='text-white text-lg' />
                </div>
                <div>
                  <p className='text-lg font-semibold text-black mb-3'>
                    Professional Staff
                  </p>
                  <p>
                    Curabitur eget quam sapien. In non lobortis urna. Aenean
                    ultrices viverra erat vel posuere. Donec congue viverra
                    tortor eget pellentesque. Duis vel mi quis massa posuere
                    rhoncus eget accumsan tellus
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[70%] mx-auto my-24'>
            <div className='text-center mb-8'>
              <p className='text-[#074DD9] text-base font-semibold leading-none mb-1 uppercase'>
                OUR SERVICES
              </p>
              <h3 className='w-[50%] mx-auto text-black text-4xl font-bold leading-none mb-2 capitalize'>
                We Pride of Our Efficiency and Effectiveness When Working With
                Clients
              </h3>
              <div className='flex gap-3 justify-center items-center'>
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
              </div>
            </div>
            <div className='grid grid-cols-3 place-items-stretch gap-10'>
              <div className='text-center bg-[rgba(7,77,217,0.15)] p-5'>
                <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center mb-1 mx-auto'>
                  <BsShieldCheck className='text-white text-lg' />
                </div>
                <div>
                  <p className='text-lg font-semibold text-black mb-3 capitalize'>
                    Cyber Security
                  </p>
                  <p className='text-sm font-medium text-black'>
                    Curabitur eget quam sapien. In non lobortis urna. Aenean
                    ultrices viverra erat vel posuere. Donec congue viverra
                    tortor eget pellentesque. Duis vel mi quis massa posuere
                    rhoncus eget accumsan tellus
                  </p>
                </div>
              </div>
              <div className='text-center bg-[rgba(7,77,217,0.15)] p-5'>
                <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center mb-1 mx-auto'>
                  <AiOutlineDatabase className='text-white text-lg' />
                </div>
                <div>
                  <p className='text-lg font-semibold text-black mb-3 capitalize'>
                    Data Analysis
                  </p>
                  <p className='text-sm font-medium text-black'>
                    Pellentesque viverra erat vel posueren non lobortis urna.
                    Aenean ultrices eget quam sapien. Iviverra erat vel posuere.
                    Donec congue viverra tortor eget pellentesque. Duis vel mi
                    quis massa posuere rhoncus eget accumsan tellus
                  </p>
                </div>
              </div>
              <div className='text-center bg-[rgba(7,77,217,0.15)] p-5'>
                <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center mb-1 mx-auto'>
                  <BsCodeSlash className='text-white text-lg' />
                </div>
                <div>
                  <p className='text-lg font-semibold text-black mb-3 capitalize'>
                    Web Development
                  </p>
                  <p className='text-sm font-medium text-black'>
                    Rhoncus in non lobortis curabitur eget quam sapien urna.
                    Aenean ultrices viverra erat vel posuere. Donec congue
                    viverra tortor eget pellentesque. Duis vel mi quis massa
                    posuere eget accumsan tellus
                  </p>
                </div>
              </div>
              <div className='text-center bg-[rgba(7,77,217,0.15)] p-5'>
                <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center mb-1 mx-auto'>
                  <MdDeveloperMode className='text-white text-lg' />
                </div>
                <div>
                  <p className='text-lg font-semibold text-black mb-3 capitalize'>
                    App Development
                  </p>
                  <p className='text-sm font-medium text-black'>
                    Quam sapien in non lobortis urna. Aenean ultrices viverra
                    erat vel posuere. Donec congue viverra tortor Curabitur eget
                    eget pellentesque. Duis vel mi quis massa posuere rhoncus
                    eget accumsan tellus
                  </p>
                </div>
              </div>
              <div className='text-center bg-[rgba(7,77,217,0.15)] p-5'>
                <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center mb-1 mx-auto'>
                  <AiOutlineFileSearch className='text-white text-lg' />
                </div>
                <div>
                  <p className='text-lg font-semibold text-black mb-3 capitalize'>
                    SEO Optimization
                  </p>
                  <p className='text-sm font-medium text-black'>
                    Sapien non lobortis urna. Curabitur eget quam Aenean
                    ultrices viverra erat vel posuere. Donec congue viverra
                    tortor eget pellentesque. Duis vel mi quis massa posuere
                    rhoncus eget accumsan tellus
                  </p>
                </div>
              </div>
              <div className='text-center bg-[rgba(7,77,217,0.85)] p-10'>
                <div>
                  <p className='text-lg font-semibold text-white mb-3 capitalize'>
                    Call Us For Quote
                  </p>
                  <p className='text-sm font-light text-white mb-3'>
                    Donec congue viverra, Curabitur eget quam sapien. In non
                    lobortis urna. Aenean ultrices viverra erat vel posuere.
                    tortor eget pellentesque
                  </p>
                  <p className='text-lg font-semibold text-white mb-3 capitalize'>
                    <div className='flex justify-center gap-2 items-center'>
                      <span>+234</span>
                      <span>900</span>
                      <span>834</span>
                      <span>8343</span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[70%] mx-auto my-24'>
            <div className='text-center mb-8'>
              <p className='text-[#074DD9] text-base font-semibold leading-none mb-1 uppercase'>
                PROMO PLAN
              </p>
              <h3 className='w-[50%] mx-auto text-black text-4xl font-bold leading-none mb-2 capitalize'>
                We Are Offering Competitive Prices For Our Clients
              </h3>
              <div className='flex gap-3 justify-center items-center'>
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
              </div>
            </div>
            <div className='grid grid-cols-3 gap-0 place-items-stretch'>
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
          <div className='bg-white grid grid-cols-5 gap-10 place-items-stretch w-[70%] mx-auto my-24'>
            <div className='col-span-3'>
              <div className='mb-10'>
                <p className='text-[#074DD9] text-base font-semibold leading-none mb-1 uppercase'>
                  REQUEST A QUOTE
                </p>
                <h3 className='text-black text-4xl font-bold leading-none mb-2 capitalize'>
                  Need a Free Quote? Please Feel Free to Contact Us
                </h3>
                <div className='flex gap-3 justify-start items-center'>
                  <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                  <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-x-3 gap-y-4 place-items-start mb-8'>
                <div className='flex gap-4 justify-start items-center'>
                  <MdOutlineAccessTime className='text-[#074DD9] text-base' />
                  <p className='text-lg font-semibold leading-none capitalize'>
                    Apply within 24hrs
                  </p>
                </div>
                <div className='flex gap-4 justify-start items-center'>
                  <BsTelephone className='text-[#074DD9] text-base' />
                  <p className='text-lg font-semibold leading-none capitalize'>
                    24/7 Telephone Support
                  </p>
                </div>
              </div>
              <div>
                <div className='mt-8 mb-5'>
                  <p className='text-sm font-medium leading-tight'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce vehicula magna sit amet dictum dapibus. Curabitur eget
                    quam sapien. In non lobortis urna. Aenean ultrices viverra
                    erat vel posuere. Donec congue viverra tortor eget
                    pellentesque. Duis vel mi quis massa posuere rhoncus eget
                    accumsan tellus
                  </p>
                </div>
                <div className='flex gap-2 justify-start items-center mb-7'>
                  <div className='w-12 h-12 bg-[#074DD9] flex justify-center items-center'>
                    <BsTelephone className='text-white text-lg' />
                  </div>
                  <div>
                    <span className='block text-base font-semibold leading-none lowercase mb-2'>
                      Call to ask any question
                    </span>
                    <span className='block text-[#074DD9] text-lg font-bold leading-none lower tracking-wide'>
                      +234884245245
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-2'>
              <form className='bg-[#074DD9] p-10 flex flex-col gap-4 justify-evenly'>
                <input
                  type='text'
                  placeholder='First Name'
                  className='w-full text-base font-medium p-2'
                />
                <input
                  type='text'
                  placeholder='Last Name'
                  className='w-full text-base font-medium p-2'
                />
                <input
                  type='text'
                  placeholder='Email Address'
                  className='w-full text-base font-medium p-2'
                />
                <textarea
                  type='text'
                  placeholder='Message'
                  rows={3}
                  className='w-full text-base font-medium p-2'
                />
                <button className='bg-[#021842] text-base font-medium w-full py-2 text-white'>
                  Request a Quote
                </button>
              </form>
            </div>
          </div>
          <div className='w-[70%] mx-auto my-24'>
            <div className='text-center mb-8'>
              <p className='text-[#074DD9] text-base font-semibold leading-none mb-1 uppercase'>
                TESTIMONIALS
              </p>
              <h3 className='w-[50%] mx-auto text-black text-4xl font-bold leading-none mb-2 capitalize'>
                What Our Clients Say About Our Digital Services
              </h3>
              <div className='flex gap-3 justify-center items-center'>
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
              </div>
            </div>
          </div>
          <div className='w-[70%] mx-auto my-24'>
            <div className='text-center mb-8'>
              <p className='text-[#074DD9] text-base font-semibold leading-none mb-1 uppercase'>
                TEAM MEMBERS
              </p>
              <h3 className='w-[50%] mx-auto text-black text-4xl font-bold leading-none mb-2 capitalize'>
                Professional Staffs Ready to Help Your Business
              </h3>
              <div className='flex gap-3 justify-center items-center'>
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
              </div>
            </div>
            <div className='grid grid-cols-3 gap-7 place-items-stretch'>
              <div className=''>
                <div className=''>
                  <Image src='/imgs/team-lead.jpg' width={400} height={300} alt='team member' />
                </div>
                <div className='text-center p-3 bg-[rgba(7,77,217,0.15)]'>
                  <h5 className='text-xl font-semibold leading-none text-[#074DD9] capitalize'>Sofia Ade</h5>
                  <p className='text-base font-medium leading-tight'>Team Lead</p>
                </div>
              </div>
              <div className=''>
                <div className=''>
                  <Image src='/imgs/project-manager.jpg' width={400} height={300} alt='team member' />
                </div>
                <div className='text-center p-3 bg-[rgba(7,77,217,0.15)]'>
                  <h5 className='text-xl font-semibold leading-none text-[#074DD9] capitalize'>Catherin Brown</h5>
                  <p className='text-base font-medium leading-tight'>Project Manager</p>
                </div>
              </div>
              <div className=''>
                <div className=''>
                  <Image src='/imgs/software-engr.jpg' width={400} height={300} alt='team member' />
                </div>
                <div className='text-center p-3 bg-[rgba(7,77,217,0.15)]'>
                  <h5 className='text-xl font-semibold leading-none text-[#074DD9]'>Georgia Miller</h5>
                  <p className='text-base font-medium leading-tight'>Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[70%] mx-auto my-24'>
            <div className='text-center mb-8'>
              <p className='text-[#074DD9] text-base font-semibold leading-none mb-1 uppercase'>
                LATEST BLOG
              </p>
              <h3 className='w-[50%] mx-auto text-black text-4xl font-bold leading-none mb-2 capitalize'>
                Read The Latest Articles from Our Blog Post
              </h3>
              <div className='flex gap-3 justify-center items-center'>
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
                <div className='w-10 h-0 border-t-2 border-t-[#074DD9]' />
              </div>
            </div>
            
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}