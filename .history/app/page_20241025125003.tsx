import Image from "next/image";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})
export default function Home() {
  return (
    <div className={`bg-white w-50 h- flex items-center justify-center mx-auto rounded-lg shadow-md ${roboto.className}`}>
          Centered Content
    </div>
  );
}
