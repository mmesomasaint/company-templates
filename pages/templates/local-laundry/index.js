import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { RiShirtLine } from 'react-icons/ri'
import { GiDrippingStone, GiSewingMachine } from 'react-icons/gi'
import {
  MdOutlineIron,
  MdOutlineDeliveryDining,
  MdOutlineLocalLaundryService,
  MdOutlineDryCleaning,
} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
import { AiOutlineEnvironment, AiOutlinePushpin } from 'react-icons/ai'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Easy Dry</title>
        <meta name='description' content='First Stop for Laundry Services' />
        <link rel='icon' href='/imgs/local-laundry/icon.ico' />
      </Head>
      <header className='w-full relative'>
        <div className='max-w-[90rem] absolute top-0 left-0 right-0 mx-auto flex justify-between items-center gap-0 px-16 2xl:px-0'>
          <div>
            <Image
              src='/imgs/local-laundry/logo.png'
              width={150}
              height={170}
              alt='logo'
              className=''
            />
          </div>
          <div className='flex justify-between gap-12 items-center'>
            <nav className='flex justify-evenly items-start gap-6 my-8'>
              <span className='text-base font-medium leading-none text-[#D97941] scale-105 hover:scale-105 hover:text-[#D97941] w-fit'>
                <Link href='/templates/local-laundry/'>Home</Link>
                <span className='block border-t border-t-[#D97941] w-full h-0 my-1' />
              </span>
              <span className='text-base font-medium leading-none text-[#76A6A6] hover:scale-105 hover:text-[#D97941]'>
                <Link href='/templates/local-laundry/about'>About</Link>
              </span>
              <span className='text-base font-medium leading-none text-[#76A6A6] hover:scale-105 hover:text-[#D97941]'>
                <Link href='/templates/local-laundry/service'>Service</Link>
              </span>
              <span className='text-base font-medium leading-none text-[#76A6A6] hover:scale-105 hover:text-[#D97941]'>
                <Link href='/templates/local-laundry/career'>Career</Link>
              </span>
              <span className='text-base font-medium leading-none text-[#76A6A6] hover:scale-105 hover:text-[#D97941]'>
                <Link href='/templates/local-laundry/find-location'>
                  Find Location
                </Link>
              </span>
              <span className='text-base font-medium leading-none text-[#76A6A6] hover:scale-105 hover:text-[#D97941]'>
                <Link href='/templates/local-laundry/my-amount'>My Amount</Link>
              </span>
            </nav>
            <button className='py-3 px-5 bg-[#76A6A6] rounded-md'>
              <span className='flex justify-start items-center gap-4'>
              <BsTelephone className='text-base text-white' />
              <span className='text-base font-medium leading-none text-white flex justify-center items-center gap-1'>
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
          <div className="h-[55rem] w-full bg-[url('/imgs/local-laundry/showcase.jpg')] bg-no-repeat bg-cover bg-top">
            <div className='w-full h-full'>
              <div className='w-full mx-auto bg-transparent h-full pt-32 px-16 2xl:px-0 grid grid-cols-2 place-items-stretch'>
                <div className='flex flex-col justify-start items-center'>
                  <div className='w-fit mx-auto'>
                    <h1 className='w-[70%] capitalize text-6xl font-[900] mb-7 mt-1 text-center md:text-left text-black leading-tight'>
                      New York&apos;s First Choice in Dry Cleaning
                    </h1>
                  </div>
                  <div>
                    <p className='w-[90%] text-center md:text-left text-black text-sm font-medium full'>
                      We have the tendency to believe that smart looking
                      websites is the best impression, Ut facilisis justo eu
                      ullamcorper efficitur. Aenean id quam ex. Aenean eleifend
                      quam eget mi auctor, businesses including many in the
                      world&apos;s
                    </p>
                  </div>
                  <div className='my-7 w-full'>
                    <button className='text-sm font-medium px-2 py-2 sm:px-12 sm:py-3 text-white bg-[#D97941] hover:scale-105'>
                      Discus your project
                    </button>
                  </div>
                </div>
                <div className='flex justify-center items-start'>
                  <Image
                    src='/imgs/local-laundry/show-laundry-man.png'
                    width={350}
                    height={350}
                    alt='showcase image'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='h-[15rem] relative'>
            <div className='absolute h-fit -top-[12rem] left-0 right-0 mx-16 bg-white'>
              <div className='w-full h-full grid grid-cols-4 grid-rows-2 gap-6 place-items-stretch p-5'>
                <div className='text-center p-5'>
                  <div className='w-20 h-20 mx-auto bg-[#CEF2EF] rounded-full flex justify-center items-center'>
                    <MdOutlineDryCleaning className='text-[#76A6A6] text-4xl leading-none' />
                  </div>
                  <h2 className='block text-xl font-bold leading-none text-black mt-5 capitalize'>
                    Dry Cleaning
                  </h2>
                </div>
                <div className='text-center p-5'>
                  <div className='w-20 h-20 mx-auto bg-[#CEF2EF] rounded-full flex justify-center items-center'>
                    <GiDrippingStone className='text-[#76A6A6] text-4xl leading-none' />
                  </div>
                  <h2 className='block text-xl font-bold leading-none text-black mt-5 capitalize'>
                    Wet Cleaning
                  </h2>
                </div>
                <div className='text-center p-5'>
                  <div className='w-20 h-20 mx-auto bg-[#CEF2EF] rounded-full flex justify-center items-center'>
                    <MdOutlineLocalLaundryService className='text-[#76A6A6] text-4xl leading-none' />
                  </div>
                  <h2 className='block text-xl font-bold leading-none text-black mt-5 capitalize'>
                    Laundry
                  </h2>
                </div>
                <div className='text-center p-5'>
                  <div className='w-20 h-20 mx-auto bg-[#CEF2EF] rounded-full flex justify-center items-center'>
                    <MdOutlineIron className='text-[#76A6A6] text-4xl leading-none' />
                  </div>
                  <h2 className='block text-xl font-bold leading-none text-black mt-5 capitalize'>
                    Iron Clothes
                  </h2>
                </div>
                <div className='text-center p-5'>
                  <div className='w-20 h-20 mx-auto bg-[#CEF2EF] rounded-full flex justify-center items-center'>
                    <RiShirtLine className='text-[#76A6A6] text-4xl leading-none' />
                  </div>
                  <h2 className='block text-xl font-bold leading-none text-black mt-5 capitalize'>
                    Wash & Fold
                  </h2>
                </div>
                <div className='text-center p-5'>
                  <div className='w-20 h-20 mx-auto bg-[#CEF2EF] rounded-full flex justify-center items-center'>
                    <GiSewingMachine className='text-[#76A6A6] text-4xl leading-none' />
                  </div>
                  <h2 className='block text-xl font-bold leading-none text-black mt-5 capitalize'>
                    Cloth Sewing
                  </h2>
                </div>
                <div className='text-center p-5'>
                  <div className='w-20 h-20 mx-auto bg-[#CEF2EF] rounded-full flex justify-center items-center'>
                    <AiOutlineEnvironment className='text-[#76A6A6] text-4xl leading-none' />
                  </div>
                  <h2 className='block text-xl font-bold leading-none text-black mt-5 capitalize'>
                    Free Pickup
                  </h2>
                </div>
                <div className='text-center p-5'>
                  <div className='w-20 h-20 mx-auto bg-[#CEF2EF] rounded-full flex justify-center items-center'>
                    <MdOutlineDeliveryDining className='text-[#76A6A6] text-4xl leading-none' />
                  </div>
                  <h2 className='block text-xl font-bold leading-none text-black mt-5 capitalize'>
                    Free Delivery
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className='my-16 px-16 2xl:px-0'>
            <div className='grid grid-cols-2 gap-14 place-items-stretch'>
              <div className='bg-white grid grid-cols-2 gap-7'>
                <div>
                  <Image
                    src='/imgs/local-laundry/man-iron-shirt.jpg'
                    width={300}
                    height={500}
                    className='rounded-full h-[500px]'
                  />
                </div>
                <div className='mt-32'>
                  <Image
                    src='/imgs/local-laundry/pile-laundry.jpg'
                    width={300}
                    height={500}
                    className='rounded-full h-[500px]'
                  />
                </div>
              </div>
              <div>
                <div className='mb-16 w-fit mx-auto'>
                  <h2 className='text-black font-extrabold text-5xl leading-tight'>
                    Laundry is Easier with dependable cleaners
                  </h2>
                </div>
                <div className='flex flex-col gap-8 justify-center items-start px-4 mb-7'>
                  <div className='flex gap-3 justify-center items-start'>
                    <AiOutlinePushpin className='text-3xl text-[#D97941] flex-shrink-0' />
                    <p className='text-lg font-medium text-black'>
                      Lorem consectetur adipiscing elit fermentum fermentum leo
                    </p>
                  </div>
                  <div className='flex gap-3 justify-center items-start'>
                    <AiOutlinePushpin className='text-3xl text-[#D97941] flex-shrink-0' />
                    <p className='text-lg font-medium text-black'>
                      Lorem ipsum dolor adipiscing sit amet, consectetur
                    </p>
                  </div>
                  <div className='flex gap-3 justify-center items-start'>
                    <AiOutlinePushpin className='text-3xl text-[#D97941] flex-shrink-0' />
                    <p className='text-lg font-medium text-black'>
                      Nam bibendum tellus pulvinar fesit amet, consectetur
                      adipiscing elitLorem ipsum dolor{' '}
                    </p>
                  </div>
                  <div className='flex gap-3 justify-center items-start'>
                    <AiOutlinePushpin className='text-3xl text-[#D97941] flex-shrink-0' />
                    <p className='text-lg font-medium text-black'>
                      Aenean eleifend quam eget mi auctorectetur adiLorem ipsum
                      dolor sit amet, conspiscing elit
                    </p>
                  </div>
                  <div className='flex gap-3 justify-center items-start'>
                    <AiOutlinePushpin className='text-3xl text-[#D97941] flex-shrink-0' />
                    <p className='text-lg font-medium text-black'>
                      Nunc aliquet sapien quis libero ultricies portum dolor sit
                      amet, consLorem ipsectetur adipiscing elit
                    </p>
                  </div>
                </div>
                <div>
                  <button className='text-base font-medium leading-none text-white px-6 py-3 bg-[#76A6A6]'>
                    Call us now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[40rem] w-full bg-[url('/imgs/local-laundry/clothes-hang.jpg')] bg-no-repeat bg-cover bg-center">
            <div className=''>
              <div className='z-[10] text-white bg-white absolute top-[20%] left-[18%] w-[75%] p-8 shadow-2xl'>
                <div className='w-[80%] mb-7'>
                  <h1 className='text-black font-extrabold text-5xl leading-tight mb-6 capitalize'>
                    tincidunt tempus sapien Laundry Experience
                  </h1>
                  <p className='text-base font-medium text-black '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempus dui nec euismod congue. Nulla id libero
                    dignissim, convallis odio id, scelerisque nisl. Curabitur
                    augue quam, fringilla quis dictum sed, sodales non eros.
                    Nulla venenatis in odio non fringilla. Fusce facilisis magna
                    at odio ultricies, non porta quam scelerisque. Phasellus
                    feugiat odio eget quam mollis dapibus. Nam risus urna,
                    feugiat id augue et, efficitur finibus massa. Nullam nulla
                    libero, sollicitudin et leo at, ornare ultricies sapien
                  </p>
                </div>
                <div className='grid grid-cols-3 gap-6 items-end'>
                  <div className='col-span-2'>
                    <div className='grid grid-cols-2 gap-6 place-items-stretch'>
                      <div className='flex gap-3 justify-start items-start'>
                        <AiOutlinePushpin className='text-3xl text-[#D97941]' />
                        <p className='text-lg font-medium text-black'>
                          Lorem ipsum dolor
                        </p>
                      </div>
                      <div className='flex gap-3 justify-start items-start'>
                        <AiOutlinePushpin className='text-3xl text-[#D97941]' />
                        <p className='text-lg font-medium text-black'>
                          Nam bibendum tellus
                        </p>
                      </div>
                      <div className='flex gap-3 justify-start items-start'>
                        <AiOutlinePushpin className='text-3xl text-[#D97941]' />
                        <p className='text-lg font-medium text-black'>
                          Aenean eleifend quam
                        </p>
                      </div>
                      <div className='flex gap-3 justify-start items-start'>
                        <AiOutlinePushpin className='text-3xl text-[#D97941]' />
                        <p className='text-lg font-medium text-black'>
                          Nuis libero ultricies
                        </p>
                      </div>
                      <div className='flex gap-3 justify-start items-start'>
                        <AiOutlinePushpin className='text-3xl text-[#D97941]' />
                        <p className='text-lg font-medium text-black'>
                          Nunc aliquet sapien
                        </p>
                      </div>
                    </div>
                    <div className='my-7'>
                      <button className='text-base font-medium leading-none text-white px-6 py-3 bg-[#76A6A6]'>
                        Our Services
                      </button>
                    </div>
                  </div>
                  <div>
                    <Image
                      src='/imgs/local-laundry/bath-towel.png'
                      width={300}
                      height={300}
                      alt='washing machine'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[15rem] w-full bg-[url('/imgs/local-laundry/pattern.jpg')] bg-no-repeat bg-cover bg-center" />
          <div className='px-16 2xl:px-0 py-24'>
            <div className='grid grid-cols-2 gap-0 place-items-center items-center'>
              <div className='flex justify-start items-center'>
                <Image
                  src='/imgs/local-laundry/man-sparkle.png'
                  width={350}
                  height={350}
                  alt='man sparkle'
                />
              </div>
              <div className='mb-6'>
                <h1 className='text-black font-extrabold text-5xl leading-tight mb-6 capitalize'>
                  Get The VIP Treatment
                </h1>
                <p className='text-sm font-medium text-black leading-loose'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus tempus dui nec euismod congue. Nulla id libero
                  dignissim, convallis odio id, scelerisque nisl. Curabitur
                  augue quam, fringilla quis dictum sed, sodales non eros. Nulla
                  venenatis in odio non fringilla. Fusce facilisis magna at odio
                  ultricies, non porta quam scelerisque. Phasellus feugiat odio
                  eget quam mollis dapibus. Nam risus urna, feugiat id augue et,
                  efficitur finibus massa. Nullam nulla libero, sollicitudin et
                  leo at, ornare ultricies sapien. Maecenas luctus, orci nec
                  consequat maximus, tellus purus sagittis urna, vitae tincidunt
                  purus elit at lacus. Sed placerat tellus tempor orci laoreet
                  convallis. Sed vulputate lorem
                </p>
                <div className='my-7'>
                  <button className='text-base font-medium leading-none text-white px-6 py-3 bg-[#76A6A6]'>
                    Call For VIP Services
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full bg-[url('/imgs/local-laundry/delivery.jpg')] bg-no-repeat bg-cover bg-top">
            <div className='w-full py-16 px-16 2x:px-0 bg-transparent flex justify-start items-center'>
              <div className='bg-white p-10 w-[50%]'>
                <h1 className='text-black font-extrabold text-5xl leading-tight mb-6 capitalize'>
                  Free Pickup & Delivery
                </h1>
                <p className='text-sm font-medium text-black leading-loose'>
                  Curabitur augue quam, fringilla quis dictum sed, sodales non
                  eros. Nulla venenatis in odio non fringilla. Fusce facilisis
                  magna at odio ultricies, non porta quam scelerisque. Phasellus
                  feugiat odio eget quam mollis dapibus
                </p>
                <div className='w-[75%]'>
                  <form className='flex flex-col gap-4 my-6'>
                    <input
                      type='text'
                      name='firstname'
                      placeholder='First Name'
                      autoComplete='firstname'
                      className='p-2 text-base font-medium text-black placeholder:text-gray-500 w-full border-2 border-gray-300 focus:outline-none rounded-md '
                    />
                    <input
                      type='text'
                      name='lastname'
                      placeholder='Last Name'
                      autoComplete='lastname'
                      className='p-2 text-base font-medium text-black placeholder:text-gray-500 w-full border-2 border-gray-300 focus:outline-none rounded-md '
                    />
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      autoComplete='email'
                      className='p-2 text-base font-medium text-black placeholder:text-gray-500 w-full border-2 border-gray-300 focus:outline-none rounded-md '
                    />
                    <input
                      type='text'
                      name='location'
                      placeholder='Location'
                      autoComplete='location'
                      className='p-2 text-base font-medium text-black placeholder:text-gray-500 w-full border-2 border-gray-300 focus:outline-none rounded-md '
                    />
                  </form>
                  <button className='text-base font-medium leading-none text-white px-6 py-3 bg-[#76A6A6] my-6'>
                    Call For VIP Services
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-16 2xl:px-0 py-24'>
            <div className='grid grid-cols-2 gap-0 place-items-center items-center'>
              <div className='flex justify-start items-center'>
                <Image
                  src='/imgs/local-laundry/hiring.jpg'
                  width={350}
                  height={350}
                  alt='hiring'
                />
              </div>
              <div className='mb-6'>
                <h1 className='text-black font-extrabold text-5xl leading-tight mb-6 capitalize'>
                  We are Hiring
                </h1>
                <p className='text-sm font-medium text-black leading-loose'>
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
            <div className='max-w-[90rem] p-20 2xl:px-0 my-24'>
              <div className='w-[50%] mx-auto'>
                <h3 className='text-black font-bold text-4xl leading-tight mb-8 capitalize text-center'>
                  Get a 2 months free trial for new members
                </h3>
                <div className='flex justify-center items-center gap-10'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='flex-grow p-2 text-base font-medium text-gray-500 placeholder:text-gray-500 shadow-md focus:outline-none border-2 border-gray-300'
                  />
                  <button className='text-base font-medium leading-none text-white px-6 py-3 bg-[#D97941] shadow-md'>
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white w-full'>
            <div className='max-w-[90rem] px-16 2xl:px-0 mb-8'>
              <div className='grid grid-cols-3 gap-24'>
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
                <div className='col-span-2 grid grid-cols-3'>
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
            <div className='py-4 px-16 2xl:px-0 max-w-[90rem]'>
              <div className='w-full text-center'>
                <p className='text-base font-semibold text-gray-100'>
                  &copy;2023 Easydry Services
                  <span className='mx-4'> &middot; </span>All Rights Reserved
                  <span className='mx-4'> &middot; </span>Designed by mmesoma
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