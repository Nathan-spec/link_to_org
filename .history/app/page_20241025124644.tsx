import Image from "next/image";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin']
})
export default function Home() {
  return (
    <div className="bg-white w-72 h-48 flex items-center justify-center mx-auto rounded-lg shadow-md">
          Centered Content
    </div>
  );
}
