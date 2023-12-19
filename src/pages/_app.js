
import "primereact/resources/themes/lara-light-indigo/theme.css";   
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import '@/styles/globals.css';
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Catamaran } from "@next/font/google";

const myCatamaran = Catamaran({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})



export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return <main className={myCatamaran.className}>
   <Component {...pageProps} />
    </main>
}





