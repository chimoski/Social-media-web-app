import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

const MyApp= ({ Component, pageProps }: AppProps)=> {

  const [isSSr, setIsSSr] = useState(true);
  useEffect(()=>{
    setIsSSr(false);
  });

  if(isSSr) return null

  return(
    <>
    <Navbar/>
    <div className='flex gap-6 md:gap-20'>
    <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
      <SideBar />
    </div>
    <div className='mt-4 flex flex-col gaap-10 overflow-auto h-[88vh] video flex-1'>
      <Component {...pageProps} />
    </div>
    </div>
     
    </>
     )
}

export default MyApp
