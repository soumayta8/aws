import Link from 'next/link';
import Typed from "react-typed";
import SlidePost from "./slidepost";
import Accordion from "./accordion";
import Charts from './charts';
import Result from './result';
import Live from "./live.js";
import Head from 'next/head'
import {Helmet} from "react-helmet";
import Zone from "./zone";
// import Notification from "./notification";
import dynamic from 'next/dynamic';
const Notification=dynamic(()=>import('./notification'),{
  ssr: false,
})
export default function Home() {
  return (
    <>
       <Head lang = "en">
  
                <meta charSet="utf-8" />
                <title>Dpboss | Satta Matka | Kalyan Market Result Site |</title>
       <meta name="description" content="Kalyan matka get - satta matka dpboss all market fastest matka result get fix matka number on kalyan matka site"></meta>
       <meta name="keywords" content="satta ratan, kalyan matka, matka ratan, sattamatka, satta matta matka, kalyan satta, satta matka kalyan, satta matta, sata matka, sattamataka143, matka result, satka matka, satta matka result, satta batta, kalyan matka result"/>
       <link rel="canonical" href="https://kalyanmatka.site"/>
       <meta name="google" content="notranslate"/>
       <meta name="google-site-verification" content="liTFtCXWaQpqiHqow3KSnI-19QPhOb81RWjiOBo1-YE"/>
       <meta content="yes" name="apple-mobile-web-app-capable"/>
       <meta content="yes" name="apple-touch-fullscreen"/>
       <meta name="Robots" content="index, follow"/>
       <meta name="author" content="ratan khatri"/>
       <meta name="copyright" content="kalyanmatka site"/>
       <meta property="og:type" content="website"/>
       <meta property="og:title" content="Satta Matka"/>
       <meta property="og:description" content="SattaMatka"/>
       <meta property="og:url" content="https://kalyanmatka.site"/>
       <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png"/>
       <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png"/>
       <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png"/>
       <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png"/>
       <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png"/>
       <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png"/>
       <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png"/>
       <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png"/>
       <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png"/>
       <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png"/>
       <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
       <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png"/>
       <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
       <link rel="manifest" href="favicon/manifest.json"/>  
      </Head>
<div className='content-wrap'>
  <div className="text-center py-3 text-family">
  <span className='text-color1'>|</span>  <Link href={'https://sattamatka.rocks/'}><a className='text-color2 font-semibold mr-2'>Sattamatka</a></Link>
   <span className='text-color1'>| </span>  <Link href={'https://sattamatka.rocks/'}><a className='text-color2 font-semibold mr-2'>Dpboss</a></Link>
   <span className='text-color1'>|</span>  <Link href={'https://sattamatka.rocks/'}><a className='text-color2 font-semibold mr-2'>Sattamatkà</a></Link>
   <span className='text-color1'>|</span>  <Link href={'https://sattamatka.rocks/'}><a className='text-color2 font-semibold mr-2'>Kalyan Matka</a></Link>
   <span className='text-color1'>|</span>  <Link href={'https://sattamatka.rocks/'}><a className='text-color2 font-semibold mr-2'>Milan Bazar </a></Link>
   <span className='text-color1'>|</span>  <Link href={'https://sattamatka.rocks/'}><a className='text-color2 font-semibold mr-2'>SattamaMain Bazar</a></Link>

</div>
</div>



<div className='px-3 relative'>
<span className='bedage'>New</span>
  <div className="text-center py-3 text-family1 live-update">
<Typed
      strings={[
            "Live Update",
            "Sabse Tezz",
          ]}
          typeSpeed={150}
          backSpeed={30}
          loop
        /></div></div>
        <Live/>
      
      <Result/>
 
<SlidePost/>
<Zone/>
<Charts/>
<Notification/>
 <Accordion/>
    </>
    
  );
}