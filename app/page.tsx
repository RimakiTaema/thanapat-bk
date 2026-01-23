import Card from "./src/component/card";
import Link from "next/link"
import { Itim } from 'next/font/google'

const itim = Itim({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-itim',
})

// Tailwind Class Var
const card = "expand items-center w-96 flex-col bg-white shadow-xl"
const body = "flex flex-col p-8"
const titleCls = "pb-6 text-2xl font-bold text-gray-700"
const titleClsCenter = "pb-6 text-center items-center text-2xl font-bold text-gray-700"
const descCls = "text-lg text-gray-700"
const button = "bg-[#7e22ce] text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform"

export default function Home() {
  return (
    <div className="flex flex-col p-8">
        <div className="pb-6 text-center text-2xl font-semibold text-gray-800 text-shadow-blue-200">
          Thanapat-BK (rimaki.net)
        </div>
        <div className={`text-lg text-gray-800 text-center font-light ${itim.className}`}>
          Welcome to New rimaki.net
        </div>
        <br></br>
        <div className={`text-lg text-gray-800 text-center font-light ${itim.className}`}>
          This Website Is part of School Classes & Excercises
        </div>
        <br></br>
      </div>
  )
}