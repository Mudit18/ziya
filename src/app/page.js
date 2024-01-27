import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100 flex w-full h-screen items-stretch justify-center">
      <Head>
        <title>Ziya Life</title>
        <meta name="description" content="Ziya Life | Spreading Smiles | Elderly Care" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="bg-white w-full">
        <div id='ziya' className='flex flex-row h-screen w-full justify-center items-center'>
          <div className='flex flex-col h-screen w-1/2 justify-center items-center'>
            <Image
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
          <div className='flex bg-black w-1/2 h-screen relative'>
            <Image
              fill
              src={'/landing.png'}
              alt="Elderly Care"
            />
          </div>
        </div>
        <div id='about' className='bg-white border-y border-black flex flex-row h-screen w-full justify-center items-center'>
          <div className='flex flex-col h-screen w-full justify-center items-center'>
            <div className='text-5xl pt-6 pb-5 pl-10 pr-10 font-extralight border border-black text-black'>ABOUT US</div>
            <div className='text-center text-xl pt-10 pb-5 w-1/2 font-extralight text-black'><b>Ziya Life</b> is dedicated to enhancing the quality of life for elderly by providing a comprehensive and user-friendly tech community app that addresses the challenges of idle hours and isolation through a range of services, including a wellness hub, curated content, engaging events, curated travel, e-commerce experiences, support services, and real-life meetups.</div>
            <Link href="#services">
              <button className='mt-10 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>How do we do this?</button>
            </Link>
          </div>
        </div>
        <div id='services' className='bg-white pt-5 pb-5 pr-20 flex flex-row h-screen w-full justify-center items-center'>
          <div className='bg-white ml-10 w-1/2 h-screen flex flex-col items-center justify-center'>
            <div className='flex-grow flex flex-col items-center justify-center'>
              <div className='text-4xl pt-3 pb-2 pl-10 pr-10 font-extralight border border-black text-black'>OUR SERVICES</div>
            </div>
            <Link href="#contact">
              <button className='mb-20 pt-2 pb-2 pl-10 pr-10 shadow-xl bg-black text-white rounded-lg'>Contact Us</button>
            </Link>
          </div>
          <div className='flex flex-col h-screen w-3/4 justify-start items-start'>
            <div className='flex mt-10 flex-row w-full justify-center items-center'>
              <div className='flex flex-col w-1/2 pr-10 justify-center items-end'>
                <Image
                  className='rounded-lg shadow-lg'
                  src={'/yoga.png'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='flex flex-col pl-10 w-1/2 justify-center items-start'>
                <div className='text-3xl pt-6 pb-1 font-extralight text-black'>WELLNESS HUB</div>
                <div className='text-lg mt-2 pb-2 pt-2 font-extralight text-black'>Expert-curated yoga and meditation sessions, alongside doctor-led health information sessions.</div>
              </div>
            </div>
            <div className='flex flex-row mt-5 w-full justify-center items-center'>
              <div className='flex flex-col w-1/2 pr-10 justify-center items-end'>
                <Image
                  className='rounded-lg shadow-lg'
                  src={'/mobile.png'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='flex flex-col pl-10 w-1/2 justify-center items-start'>
                <div className='text-3xl pt-6 pb-1 font-extralight text-black'>USER-FRIENDLY APP</div>
                <div className='text-lg mt-2 pb-2 pt-2 font-extralight text-black'>Easy-to-use mobile app to improve your lifestyle including features like Medication Reminder.</div>
              </div>
            </div>
            <div className='flex flex-row mt-5 w-full justify-center items-center'>
              <div className='flex flex-col w-1/2 pr-10 justify-center items-end'>
                <Image
                  className='rounded-lg shadow-lg'
                  src={'/elderly.png'}
                  width={200}
                  height={200}
                />
              </div>
              <div className='flex flex-col pl-10 w-1/2 justify-center items-start'>
                <div className='text-3xl pt-6 pb-1 font-extralight text-black'>CURATED SERVICES</div>
                <div className='text-lg mt-2 pb-2 pt-2 font-extralight text-black'>Movies, news and entertainment, alongside travel, live-screenings, games and much more!</div>
              </div>
            </div>
          </div>
        </div>
        <div id='contact' className='flex flex-col bg-white border-y border-black h-screen w-full justify-center items-center'>
          <div className='bg-white text-4xl pt-6 pb-5 pl-10 pr-10 font-extralight border border-black text-black'>CONTACT US</div>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+919881927789">
            <div className='flex justify-center w-64 mt-10 pt-2 pb-2 pl-2 pr-2 shadow-xl bg-black text-white rounded-lg'>
              <Image
                className='rounded-lg shadow-lg mr-2'
                src={'/whatsapp.webp'}
                width={25}
                height={25}
              />
              <span>WhatsApp</span>
            </div>
          </a>
          <div className='bg-white text-4xl mt-20 pt-6 pb-5 pl-10 pr-10 font-extralight border border-black text-black'>JOIN OUR COMMUNITY</div>
          <div className='flex flex-row justify-center items-center mt-10 gap-5 w-128 mt-10'> 
            <a target="_blank" rel="noopener noreferrer" href="https://chat.whatsapp.com/FkyklO9Urlk8O67Ioa2mcq">
              <Image
                className='rounded-lg mr-5'
                src={'/whatsapp.webp'}
                width={50}
                height={50}
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ziya.life">
              <Image
                className='mr-5'
                src={'/facebook.webp'}
                width={50}
                height={50}
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_ziya.life/">
              <Image
                className='bg-white mr-5'
                src={'/instagram.png'}
                width={40}
                height={40}
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@ziya_life">
              <div className='bg-white'>
                <Image
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