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
} from 'react-icons/bs'
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
                alt='logo'
              />
            </div>
            <div className='flex lg:hidden justify-evenly items-center gap-8'>
              {isOpen ?
              <CgClose className='text-2xl text-[#E3221E]' onClick={handleOpen} /> :
              <GiHamburgerMenu className='text-2xl text-gray-500' onClick={handleOpen} />}
              <div className='w-16 h-16 flex justify-center items-center bg-[#E3221E]'>
                <BsTelephone className='text-2xl text-white' />
              </div>
            </div>
            <div className={`${isOpen ? 'flex' : 'hidden'} absolute z-30 top-[100%] left-0 right-0 lg:static bg-white lg:flex flex-col lg:flex-row justify-evenly items-start lg:items-center gap-10 pl-[20%] lg:pl-0 py-10 lg:py-0`}>
              <div className='flex flex-col lg:flex-row justify-evenly items-start lg:items-center gap-10'>
                <span className='text-base font-medium text-[#E3221E] leading-none'>
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
          <div className="h-fit md:h-[37rem] w-full bg-[url('/imgs/foreign-laundry/showcase.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='bg-[rgba(0,0,0,0.55)] h-full py-16 md:py-0'>
              <div className='flex flex-col gap-8 items-center justify-center h-full w-[60%] mx-auto'>
                <span className='text-xl font-light leading-none text-white'>
                  WASHING
                </span>
                <span className='text-4xl font-extrabold leading-none text-white text-center'>
                  WE ARE THE BEST LAUNDRY SERVICES
                </span>
                <span className='text-sm font-normal leading-none text-white text-center'>
                  Nullam nulla libero, sollicitudin et leo at, ornare ultricies
                  sapien. Maecenas luctus, orci nec consequat maximus, tellus
                  purus sagittis urna, vitae tincidunt purus elit at lacus. Sed
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
          <div className='w-[80%] mx-auto my-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-stretch'>
              <div className='hidden md:block'>
                <Image
                  src='/imgs/foreign-laundry/wash-girl.jpg'
                  width={400}
                  height={400}
                  alt='wash girl'
                />
              </div>
              <div className='md:col-span-2'>
                <div className='w-full h-full'>
                  <h2 className='text-4xl font-bold leading-tight mb-6 text-black'>
                    We are Passionate about Laundry
                  </h2>
                  <div className='block md:hidden my-6'>
                    <Image
                      src='/imgs/foreign-laundry/wash-girl.jpg'
                      width={400}
                      height={400}
                      alt='wash girl'
                    />
                  </div>
                  <span className='text-sm font-normal leading-normal text-black'>
                    <p className='block my-5'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus tempus dui nec euismod congue. Nulla id libero
                      dignissim, convallis odio id, scelerisque nisl. Curabitur
                      augue quam, fringilla quis dictum sed, sodales non eros.
                      Nulla venenatis in odio non fringilla. Fusce facilisis
                      magna at odio ultricies, non porta quam scelerisque.
                      Phasellus feugiat odio eget quam mollis dapibus. Nam risus
                      urna, feugiat id augue et, efficitur finibus massa. Nullam
                      nulla libero, sollicitudin et leo at, ornare ultricies
                      sapien. Maecenas luctus, orci nec consequat maximus,
                      tellus purus sagittis urna, vitae tincidunt purus elit at
                      lacus. Sed placerat tellus tempor orci laoreet convallis.
                      Sed vulputate lorem vitae placerat pretium. Ut condimentum
                      massa sit amet accumsan sollicitudin. In eleifend justo
                      tellus, tincidunt tempus sapien luctus vitae. Quisque et
                      commodo eros. Praesent cursus faucibus nulla.
                    </p>
                    <p className='block my-5'>
                      Pellentesque fermentum fermentum leo, vel tempor lorem.
                      Nam bibendum tellus pulvinar felis vulputate scelerisque.
                      Quisque in nulla arcu. Vestibulum vel ex nec tortor
                      volutpat imperdiet. Vestibulum varius rutrum odio, quis
                      varius urna pharetra efficitur. Suspendisse potenti. Donec
                      consectetur
                    </p>
                  </span>
                  <div className='mt-10'>
                    <button className='text-[#E3221E] border border-[#E3221E] px-4 py-2 text-sm font-semibold uppercase'>
                      ABOUT US
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[80%] mx-auto my-16'>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-items-stretch gap-3'>
              <div className='p-5 group hover:bg-[#E3221E] border flex flex-col gap-5'>
                <TbLetterW className='text-5xl text-[#E3221E] group-hover:text-white' />
                <h2 className='text-3xl font-medium leading-tight text-black group-hover:text-white'>
                  Wash & Fold Laundry Service
                </h2>
                <span className='text-base font-normal text-black group-hover:text-white leading-normal'>
                  The Star of our laundry cleaning service is the wet cleaning.
                  A wet cleanse water and mild detergent instead of harmful
                  chemicals
                </span>
              </div>
              <div className='p-5 group bg-[#E3221E] border flex flex-col gap-5'>
                <RiLeafFill className='text-5xl text-white' />
                <h2 className='text-3xl font-medium leading-tight text-white'>
                  Commercial Laundry Service
                </h2>
                <span className='text-base font-normal text-white leading-normal'>
                  The wet washers we use can be customized according to the type
                  of fabric and the instructions on the care label. Since wet
                  cleaning is natural, it leaves clothes feeling soft, fresh and
                  renewed
                </span>
              </div>
              <div className='p-5 group hover:bg-[#E3221E] border flex flex-col gap-5'>
                <RxCube className='text-5xl text-[#E3221E] group-hover:text-white' />
                <h2 className='text-3xl font-medium leading-tight text-black group-hover:text-white'>
                  Eco-Friendly Dry Cleaning
                </h2>
                <span className='text-base font-normal text-black group-hover:text-white leading-normal'>
                  Our dry cleaning machinery uses 30% less water and 50% less
                  energy compared to other dry cleaning machineries
                </span>
              </div>
              <div className='p-5 group hover:bg-[#E3221E] border flex flex-col gap-5'>
                <GiAbstract030 className='text-5xl text-[#E3221E] group-hover:text-white' />
                <h2 className='text-3xl font-medium leading-tight text-black group-hover:text-white'>
                  Self Service & Laundromat
                </h2>
                <span className='text-base font-normal text-black group-hover:text-white leading-normal'>
                  The fabric detergent is made of a biodegradable base and do
                  not contain petroleum driven chemicals(also called PERC)
                </span>
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
          <div className='w-[80%] mx-auto my-16'>
            <h2 className='text-4xl font-bold uppercase'>WHY CHOOSE US</h2>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-16 place-items-stretch mt-8'>
              <div>
                <iframe
                  width='533'
                  height='350'
                  src='https://www.youtube.com/embed/OjOpAsWf9wA'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  title='Embedded youtube'
                  className='w-full sm:w-[533px] h-[200px] sm:h-[350px]'
                />
              </div>
              <div className='flex flex-col gap-6 items-center'>
                <div className='flex gap-5 justify-start items-start'>
                  <BsHeart className='text-4xl text-[#E3221E] flex-shrink-0' />
                  <div>
                    <h2 className='text-3xl font-medium text-black leading-none capitalize mb-3'>
                      100% Happiness Guaranteed
                    </h2>
                    <p className='text-base font-normal text-black leading-normal'>
                      The very first thing we do is sort our garments according
                      to care labels. Then we start the dry cleaning process.
                    </p>
                  </div>
                </div>
                <div className='flex gap-5 justify-start items-start'>
                  <BsClock className='text-4xl text-[#E3221E] flex-shrink-0' />
                  <div>
                    <h2 className='text-3xl font-medium text-black leading-none capitalize mb-3'>
                      Fast & High Quality
                    </h2>
                    <p className='text-base font-normal text-black leading-normal'>
                      We ensure that each garment is treated using the right
                      combination of chemicals, water temperature, drum
                      rotations, spin circles and stain removal chemicals
                    </p>
                  </div>
                </div>
                <div className='flex gap-5 justify-start items-start'>
                  <FaBath className='text-4xl text-[#E3221E] flex-shrink-0' />
                  <div>
                    <h2 className='text-3xl font-medium text-black leading-none capitalize mb-3'>
                      Cleaner & Greener
                    </h2>
                    <p className='text-base font-normal text-black leading-normal'>
                      Our automatic washers allow for an incredibly us atomized
                      cleaning service. We read every dry clean care label on
                      every garment and depending on the instructions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-300 py-16'>
            <div className='w-[80%] mx-auto'>
              <h2 className='text-4xl font-bold uppercase text-center'>
                Laundry Service Package
              </h2>
              <div className='grid grid-cols-1 xl:grid-cols-3 place-items-stretch gap-10 mt-14'>
                <div className='flex xl:block justify-center items-center'>
                  <div className='p-4 sm:p-8 bg-white shadow-xl'>
                    <div>
                      <div className='flex items-end'>
                        <div className='text-black flex justify-start items-start'>
                          <span className='text-base font-normal leading-none'>
                            $
                          </span>
                          <span className='text-4xl font-bold leading-none'>
                            12
                          </span>
                        </div>
                        <span className='text-base'>/month</span>
                      </div>
                      <div className='mt-6 text-[#E3221E] text-2xl font-bold leading-none'>
                        Basic Plan
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 py-3'>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulo fermentum Listdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nu placerat pretiumlorr Listdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulorr List ringilla quisdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulorr Listdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulorr List venenatis do siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulorr Listdo accumsan siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>scelerisque Listdolorr siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>tincidunt lorr Listdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>consectetur siet</p>
                      </div>
                    </div>
                    <div className='my-4'>
                      <button className='text-base font-bold px-4 py-2 text-[#E3221E] border border-[#E3221E]'>
                        CHOOSE PLAN
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex xl:block justify-center items-center'>
                  <div className='p-4 sm:p-8 bg-white shadow-2xl border-t-[3px] border-t-[#E3221E] scale-105'>
                    <div>
                      <div className='flex items-end'>
                        <div className='text-black flex justify-start items-start'>
                          <span className='text-base font-normal leading-none'>
                            $
                          </span>
                          <span className='text-4xl font-bold leading-none'>
                            29
                          </span>
                        </div>
                        <span className='text-base'>/month</span>
                      </div>
                      <div className='mt-6 text-[#E3221E] text-2xl font-bold leading-none'>
                        Regular Plan
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 py-3'>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulo fermentum Listdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nu placerat pretiumlorr Listdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulorr List ringilla quisdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulorr Listdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulorr List venenatis do siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulorr Listdo accumsan siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>scelerisque Listdolorr siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>tincidunt lorr Listdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>consectetur siet</p>
                      </div>
                    </div>
                    <div className='my-4'>
                      <button className='text-base font-bold px-4 py-2 text-white bg-[#E3221E]'>
                        CHOOSE PLAN
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex xl:block justify-center items-center'>
                  <div className='p-4 sm:p-8 bg-white shadow-xl'>
                    <div>
                      <div className='flex items-end'>
                        <div className='text-black flex justify-start items-start'>
                          <span className='text-base font-normal leading-none'>
                            $
                          </span>
                          <span className='text-4xl font-bold leading-none'>
                            39
                          </span>
                        </div>
                        <span className='text-base'>/month</span>
                      </div>
                      <div className='mt-6 text-[#E3221E] text-2xl font-bold leading-none'>
                        Premium Plan
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 py-3'>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulo fermentum Listdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nu placerat pretiumlorr Listdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulorr List ringilla quisdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulorr Listdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulorr List venenatis do siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>Nulorr Listdo accumsan siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>scelerisque Listdolorr siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>tincidunt lorr Listdo siet</p>
                      </div>
                      <div className='flex justify-start items-start'>
                        <BsDot className='text-xl text-black flex-shrink-0' />
                        <p>consectetur siet</p>
                      </div>
                    </div>
                    <div className='my-4'>
                      <button className='text-base font-bold px-4 py-2 text-[#E3221E] border border-[#E3221E]'>
                        CHOOSE PLAN
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-fit lg:h-[24rem] w-full bg-[url('/imgs/foreign-laundry/woman-pink-bed.jpg')] bg-no-repeat bg-cover bg-top bg-fixed">
            <div className='bg-[rgba(0,0,0,0.75)] h-full'>
              <div className='w-[80%] mx-auto py-14'>
                <h2 className='text-4xl font-bold text-center text-white capitalize'>
                  Customer Words
                </h2>
                <div className='flex flex-col sm:flex-row justify-start items-start gap-10 mt-24 text-center sm:text-left'>
                  <Image
                    src='/imgs/foreign-laundry/isabella-face.jpg'
                    width={160}
                    height={160}
                    alt='profile face'
                    className='border-[3px] border-white rounded-full w-[80px] sm:w-[160px] mx-auto'
                  />
                  <div className='relative'>
                    <span className={Styles.quoteFont}>&quot;</span>
                    <span className='text-sm leading-tight text-gray-400'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus tempus dui nec euismod congue. Nulla id libero
                      dignissim, convallis odio id, scelerisque nisl. Curabitur
                      augue quam, fringilla quis dictum sed, sodales non eros.
                      Nulla venenatis in odio non fringilla. Fusce facilisis
                      magna at odio ultricies, non porta quam scelerisque.
                      Phasellus feugiat odio eget quam mollis dapibus. Nam risus
                      urna, feugiat id augue et, efficitur finibus massa. Nullam
                      nulla libero, sollicitudin et leo at
                    </span>
                    <span className='block mt-4'>
                      <p className='block text-[#E3221E] text-sm leading-none mb-1'>
                        Isabella Mira
                      </p>
                      <p className='block text-gray-400 leading-none text-xs font-light'>
                        Personel Manager
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white py-16'>
            <div className='w-[80%] mx-auto'>
              <h2 className='text-4xl font-bold capitalize text-center'>
                Newsletter Signup
              </h2>
              <p className='text-center text-black font-normal leading-none mt-3'>
                If you want to receive our all weekly updates about new offers
                and discount, signup below.
              </p>
              <div className='flex justify-center items-center w-full lg:w-[80%] xl:w-[60%] mx-auto mt-14'>
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  autoComplete='email'
                  className='focus:outline-none border border-gray-500 p-2 sm:p-4 flex-grow'
                />
                <button className='text-base font-bold px-4 py-2 sm:px-8 sm:py-4 text-white bg-[#E3221E] border border-[#E3221E]'>
                  SUBSCRIBE
                </button>
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
