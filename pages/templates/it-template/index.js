import Head from "next/head";
import Styles from "../../../styles/it.module.css"
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BsTelephone, BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsPersonCircle} from 'react-icons/bs'

export default function Home() {
  return (
    <div className={Styles.bodyFont}>
      <Head>
        <title>IT Solve</title>
        <meta name='description' content='Provides various IT services and solutions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <div>
          <div className="bg-white p-3">
            <div><span>.IT</span><span>solve</span></div>
          </div>
          <div className="flex flex-col gap-0">
            <div className="py-2 flex justify-between items-center gap-6 bg-[#032973]">
              <div>
                <div>
                  <AiOutlineHome />
                  <span>Welcome to Our It Company</span>
                </div>
                <span>|</span>
                <div>
                  <AiOutlineMail />
                  <span>themail27@gmail.com</span>
                </div>
              </div>
              <div>
                <BsFacebook />
                <span>|</span>
                <BsTwitter />
                <span>|</span>
                <BsInstagram />
                <span>|</span>
                <BsPersonCircle />
                <span>|</span>
                <BsLinkedin />
                <span>|</span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-6">
              <div>
                <span>Home+</span>
                <span>Shop+</span>
                <span>Company+</span>
                <span>IT Solutions+</span>
                <span>Blog+</span>
                <span>Contact Us+</span>
              </div>
              <div>
                <span>+23498239800</span>
                <span className="py-4">Get A Quote</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </div>
  )
}