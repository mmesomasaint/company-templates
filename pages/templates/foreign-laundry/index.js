import Head from 'next/head'
import Link from 'next/link'
import { BsFacebook, BsInstagram, BsTelephone, BsTwitter } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Washing</title>
        <meta name='description' content='Wash every material to cleanest' />
        <link rel='icon' href='/imgs/foreign-laundry/favicon.ico' />
      </Head>
      <header>
        <div className='bg-white'>
          <div className='w-[80%] mx-auto flex justify-between items-center gap-6'>
            <div>LOGO</div>
            <div className='flex justify-evenly items-center gap-10'>
              <div className='flex justify-evenly items-center gap-10'>
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
              <div className='flex justify-center items-center gap-2 bg-[#E3221E] px-3 py-6'>
                <BsTelephone className='text-lg text-white' />
                <span className='text-base font-medium text-white leading-none'>
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
            <div className='bg-[rgba(0,0,0,0.55)] h-full'>
              
            <div className='flex flex-col gap-8 items-center justify-center h-full w-[60%] mx-auto'>
              <span className='text-xl font-light leading-none text-white'>WASHING</span>
              <span className='text-4xl font-extrabold leading-none text-white text-center'>WE ARE THE BEST LAUNDRY SERVICES</span>
              <span className='text-sm font-normal leading-none text-white text-center'>Nullam nulla libero, sollicitudin et leo at, ornare ultricies sapien. Maecenas luctus, orci nec consequat maximus, tellus purus sagittis urna, vitae tincidunt purus elit at lacus. Sed placerat tellus tempor orci laoreet convallis</span>
              <div>
                <button className='text-white bg-[#E3221E] px-4 py-2'>READ MORE</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
