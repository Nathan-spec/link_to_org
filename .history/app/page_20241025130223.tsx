import Image from "next/image";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})
export default function Home() {
  return (
    // Backgro
    <div 
    className={`w-full h-screen flex items-center justify-center ${roboto.className}`} 
    style={{ backgroundColor: '#f0f0f0'}}
    >
          
    </div>
  );
}
