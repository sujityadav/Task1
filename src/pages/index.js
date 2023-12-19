import Image from "next/image";
import Link from "next/link";
import React, { useState,useRef } from "react";
import Head from "next/head";
import { Catamaran } from '@next/font/google';

const myCatamaran = Catamaran({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})
export default function index() {

  
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("")
  const [buttonText,setButtonText] = useState("Sign In");

 


  return (
    <>
      <Head>
        <title>Task</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
     
     
      <main className={myCatamaran.className}>
        <div className="xl:my-[4.431vw] my-[30px] min-h-screen px-[20px] xl:px-[3.819vw] xl:space-y-[3.472vw] space-y-[30px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[14px] xl:gap-[0.833vw] mb-[32px] xl:mb-[2.09vw]"> 
              <div className="mb-[20px] xl:mb-[1.389vw]" data-aos="fade-up" data-aos-duration="800">
                <div className="relative">
                    <Image  src={"/assets/images/fintech_img.png"} width={"450"} height={"262"} alt="fintechimg" className="xl:w-full w-full xl:h-[18.194vw] h-[262px]" />
                    <h6 className="absolute top-4 left-4 text-[#fff] xl:text-[0.972vw] text-[14px] font-normal">Fintech</h6>
                </div>

                <div className="mt-[15px] xl:mt-[0.972vw]">
                    <h3 className="text-[#fff] xl:text-[1.111vw] text-[16px] font-medium leading-tight">How to optimize your pages to get more traffic on mobile devices</h3>
                    
                </div>
                <div className="flex items-center mt-[12px] xl:mt-[0.872vw]">
                <Link href='' className=" text-[#fff] xl:text-[0.972vw] text-[14px] font-medium"> Read More <i className="pi pi-arrow-right xl:text-[0.803vw] text-[14px] ml-[10px]"></i> </Link>
                </div>
              </div>
              <div className="mb-[20px] xl:mb-[1.389vw]" data-aos="fade-up" data-aos-duration="900">
                <div className="relative">
                    <Image  src={"/assets/images/augmented_reality_img.png"} width={"450"} height={"262"} alt="augmented_reality" className="xl:w-full w-full xl:h-[18.194vw] h-[262px]" />
                    <h6 className="absolute top-4 left-4 text-[#fff] xl:text-[0.972vw] text-[14px] font-normal">Augmented Reality</h6>
                </div>

                <div className="mt-[15px] xl:mt-[0.972vw]">
                    <h3 className="text-[#fff] xl:text-[1.111vw] text-[16px] font-medium leading-tight">How to optimize your pages to get more traffic on mobile devices</h3>
                    
                </div>
                <div className="flex items-center mt-[12px] xl:mt-[0.872vw]">
                <Link href='' className=" text-[#fff] xl:text-[0.972vw] text-[14px] font-medium"> Read More <i className="pi pi-arrow-right xl:text-[0.803vw] text-[14px] ml-[10px]"></i> </Link>
                </div>
              </div>
              <div className="mb-[20px] xl:mb-[1.389vw]" data-aos="fade-up" data-aos-duration="1000">
                <div className="relative">
                    <Image  src={"/assets/images/artificial_intelligence_img.png"} width={"450"} height={"262"} alt="artificial_intelligence_img" className="xl:w-full w-full xl:h-[18.194vw] h-[262px]" />
                    <h6 className="absolute top-4 left-4 text-[#fff] xl:text-[0.972vw] text-[14px] font-normal">Artificial Intelligence</h6>
                </div>

                <div className="mt-[15px] xl:mt-[0.972vw]">
                    <h3 className="text-[#fff] xl:text-[1.111vw] text-[16px] font-medium leading-tight">How to optimize your pages to get more traffic on mobile devices</h3>
                    
                </div>
                <div className="flex items-center mt-[12px] xl:mt-[0.872vw]">
                <Link href='' className=" text-[#fff] xl:text-[0.972vw] text-[14px] font-medium"> Read More <i className="pi pi-arrow-right xl:text-[0.803vw] text-[14px] ml-[10px]"></i> </Link>
                </div>
              </div>

            </div>

            
              <div data-aos="fade-up" data-aos-duration="1200">
              <div className="relative">
                   

                    <Image src={"/assets/images/invocation_img.png"} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                    <h6 className="absolute top-8 xl:left-8 left-3 text-[#fff] xl:text-[0.972vw] text-[14px] font-normal">Invocation</h6>
                    <div className="absolute xl:bottom-8 bottom-2 xl:left-8 left-3 xl:w-[40.722vw] w-[200px]">
                    <h2 className=" text-[#fff] xl:text-[2.431vw] text-[18px] font-normal  leading-tight">How to optimize your pages to get more traffic on mobile devices</h2>

                    <div className="xl:mt-[2.083vw] mt-[20px]">
                       <Link href='' className=" text-[#fff] xl:text-[1.111vw] text-[12px] font-medium"> Read More <i className="pi pi-arrow-right xl:text-[0.803vw] text-[10px] ml-[10px]"></i> </Link>
                    </div>
                    </div>
                </div>
              </div>
            

        <div>

        </div>
            
          
        </div>
       
        </main>
       
    </>
  );
}