import Image from "next/image";
import { Roboto } from 'next/font/google'

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
      <div className={`w-96  bg-white rounded-lg shadow-lg`}>
      {/* Inner card component */}
      <h1 style={{fontSize: '16px', color: 'black', textAlign: 'center', }}> 
        Link Your Organization to your bank 
      </h1>
      >
      </div>
    </div>
  );
}
