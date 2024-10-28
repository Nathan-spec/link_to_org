import Image from "next/image";
import { Roboto } from 'next/font/google'
import { Card, } from "@nextui-org/card";


const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})
export default function Home() {
  return (
    // Background div
    <div 
    className={`w-full h-screen flex items-center justify-center ${roboto.className}`} 
    style={{ backgroundColor: '#f0f0f0'}}
    >
      <div 
      className={`w-3/4  md:w-2/3 lg:w-1/2 p-8 bg-white rounded-lg shadow-lg`}>
      {/* Inner card component */}
      <h1 
      style={{fontSize: '28px', color: 'black', textAlign: 'center', }}> 
        Link Your Organization to your bank 
      </h1>
      <h2 
      style={{fontSize: '14px', color: 'black', textAlign: 'center', }}>
         Select The Option You Would prefer to use to link to your bank
      </h2>
      </div>
    </div>
  );
}
