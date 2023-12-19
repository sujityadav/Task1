import React, { useRef,useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Profile from "./profile";
import { Catamaran } from '@next/font/google';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { useLocation } from "react-router-dom";


const myCatamaran = Catamaran({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})

export default function Left({ ...pageProps }) {
  const menu = useRef(null);
  const [activate, setActivate] = useState("");
  const toggleActive = () => {
    setActivate(activate === "active" ? "" : "active");
 };
 //assigning location variable
 const location = useRouter();
 //destructuring pathname from location
 const { pathname } = location;
 //Javascript split method to get the name of the path in array
 const splitLocation = pathname.split("/");
 

  return (
    <div className={myCatamaran.className}>
          
    
    </div>
  )

}