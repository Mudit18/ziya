import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white flex w-full h-screen items-stretch justify-center">
      <Head>
        <title>Ziya Life</title>
        <meta name="description" content="Ziya Life | Spreading Smiles | Elderly Care" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="bg-white w-full">
        <div id='ziya' className='flex flex-col md:flex-row h-screen w-full justify-center items-center'>
          <div className='flex flex-col h-screen w-full md:w-1/2 justify-center items-center'>
            <Image
              unoptimized
              className='rounded-lg shadow-lg'
              src={'/logo.png'}
              width={100}
              height={200}
            />
            <div className='text-lg mt-10 pb-2 pl-5 pr-5 pt-2 bg-black text-white font-extralight'>SPREADING SMILES</div>
            <div className='text-5xl pt-6 pb-5 pl-10 pr-10 font-extralight border border-black text-black'>ZIYA LIFE</div>
            <Link href="#about">
              <button className='mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>Know More</button>
            </Link>
          </div>
          <div className='flex bg-black w-full md:w-1/2 h-screen relative'>
            <Image
              unoptimized
              fill
              src={'/landing.png'}
              alt="Elderly Care"
            />
          </div>
        </div>
        <div id='about' className='bg-white border-y border-black flex flex-row h-screen w-full justify-center items-center'>
          <div className='flex flex-col h-screen w-full justify-center items-center'>
            <div className='text-lg md:text-5xl pt-2 pb-2 md:pt-6 md:pb-5 pl-10 pr-10 font-extralight border border-black text-black'>ABOUT US</div>
            <div className='text-center text-xl pt-10 pb-5 pl-5 pr-5 w-full md:w-1/2 font-extralight text-black'><b>Ziya Life</b> is dedicated to enhancing the quality of life for elderly by providing a comprehensive and user-friendly tech community app that addresses the challenges of idle hours and isolation through a range of services, including a wellness hub, curated content, engaging events, curated travel, e-commerce experiences, support services, and real-life meetups.</div>
            <Link href="#services">
              <button className='mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>How do we do this?</button>
            </Link>
          </div>
        </div>
        <div id='services' className='bg-white md:pt-5 md:pb-5 md:pr-20 flex flex-col md:flex-row h-screen w-full justify-center items-center'>
          <div className='bg-white md:ml-10 w-full md:w-1/2 md:h-screen flex flex-col items-center justify-center'>
            <div className='text-md md:text-4xl pt-3 pb-2 pl-10 pr-10 font-extralight border border-black text-black'>OUR SERVICES</div>
            <Link href="#contact">
              <button className='mt-5 hidden md:block md:mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>Contact Us</button>
            </Link>
          </div>
          <div className='flex pl-3 pr-3 mt-10 md:mt-0 md:pl-0 md:pr-0 flex-col md:h-screen w-full md:w-3/4 justify-center items-center'>
            <div className='flex flex-row w-full justify-center items-center'>
              <div className='flex flex-col w-1/2 pr-1 md:pr-10 justify-center items-end'>
                <Image
                  unoptimized
                  className='rounded-lg shadow-lg'
                  src={'/yoga.png'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='flex flex-col pl-5 md:pl-10 w-1/2 justify-center items-start'>
                <div className='text-lg md:text-3xl pt-6 pb-1 md:font-extralight text-black'>WELLNESS HUB</div>
                <div className='text-md mt-2 pb-2 md:pt-2 font-extralight text-black'>Expert-curated yoga and meditation sessions, alongside doctor-led health information sessions.</div>
              </div>
            </div>
            <div className='flex flex-row mt-5 w-full justify-center items-center'>
              <div className='flex flex-col w-1/2 pr-1 md:pr-10 justify-center items-end'>
                <Image
                  unoptimized
                  className='rounded-lg shadow-lg'
                  src={'/mobile.png'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='flex flex-col pl-5 md:pl-10 w-1/2 justify-center items-start'>
                <div className='text-lg md:text-3xl pt-6 pb-1 md:font-extralight text-black'>USER-FRIENDLY APP</div>
                <div className='text-md mt-2 pb-2 md:pt-2 font-extralight text-black'>Easy-to-use mobile app to improve your lifestyle including features like Medication Reminder.</div>
              </div>
            </div>
            <div className='flex flex-row mt-5 w-full justify-center items-center'>
              <div className='flex flex-col w-1/2 pr-1 md:pr-10 justify-center items-end'>
                <Image
                  unoptimized
                  className='rounded-lg shadow-lg'
                  src={'/elderly.png'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='flex flex-col pl-5 md:pl-10 w-1/2 justify-center items-start'>
                <div className='text-lg md:text-3xl pt-6 pb-1 md:font-extralight text-black'>CURATED SERVICES</div>
                <div className='text-md mt-2 pb-2 md:pt-2 font-extralight text-black'>Movies, news and entertainment, alongside travel, live-screenings, games and much more!</div>
              </div>
            </div>
            <Link href="#contact">
              <button className='md:hidden mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>Contact Us</button>
            </Link>
          </div>
        </div>
        <div id='contact' className='flex flex-col bg-white border-y border-black h-screen w-full justify-center items-center'>
          <div className='bg-white text-lg md:text-4xl pt-2 md:pt-6 pb-2 md:pb-5 pl-10 pr-10 font-extralight border border-black text-black'>CONTACT US</div>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+919881927789">
            <div className='flex justify-center w-64 mt-10 pt-3 pb-3 pl-2 pr-2 shadow-xl bg-black text-white rounded-lg'>
              <Image
                unoptimized
                className='rounded-lg shadow-lg mr-2'
                src={'/whatsapp.webp'}
                width={25}
                height={25}
              />
              <span>WhatsApp</span>
            </div>
          </a>
          <div className='bg-white text-lg md:text-4xl mt-20 pt-2 md:pt-6 pb-2 md:pb-5 pl-10 pr-10 font-extralight border border-black text-black'>JOIN OUR COMMUNITY</div>
          <div className='flex flex-row justify-center items-center mt-10 gap-5 w-128 mt-10'> 
            <a target="_blank" rel="noopener noreferrer" href="https://chat.whatsapp.com/FkyklO9Urlk8O67Ioa2mcq">
              <Image
                unoptimized
                className='rounded-lg mr-5'
                src={'/whatsapp.webp'}
                width={50}
                height={50}
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ziya.life">
              <Image
                unoptimized
                className='mr-5'
                src={'/facebook.webp'}
                width={50}
                height={50}
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_ziya.life/">
              <Image
                unoptimized
                className='bg-white mr-5'
                src={'/instagram.png'}
                width={40}
                height={40}
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@ziya_life">
              <div className='bg-white'>
                <Image
                  unoptimized
                  src={'/youtube.png'}
                  width={50}
                  height={50}
                />
              </div>
            </a>
          </div>
        </div>
        <div className='bg-white flex justify-center items-center text-sm pt-3 pb-3 font-extralight text-black'>Copyright © 2024 Ziya Life - All Rights Reserved.</div>
      </main>
    </div>
  );
}