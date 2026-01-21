import Card from "./src/component/card";
import Link from "next/link"
// Tailwind Class Var
const card = "flex w-96 flex-col bg-white shadow-xl"
const body = "flex flex-col p-8"
const titleCls = "pb-6 text-2xl font-bold text-gray-700"
const titleClsCenter = "pb-6 items-center text-2xl font-bold text-gray-700"
const descCls = "text-lg text-gray-700"
const button = "bg-[#7e22ce] text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform"

export default function Home() {
  return (
    <div className={card}>
      <div className={body}>
        <div className={titleClsCenter}>
          Thanapat-BK (rimaki.net)
        </div>
        <div className={descCls}>
          Welcome to New rimaki.net
        </div>
        <br></br>
        <div className={descCls}>
          This Website Is part of School Classes & Excercises
        </div>
        <br></br>
        <div className={descCls}>
          Under me Is Button For Source Code (Click That To View Github Repo Of Sources I Done)
        </div>
        <br></br>
          <Link href="https://github.com/RimakiTaema/thanapat-bk" className={button}>
          <center>View Source</center>
          </Link>
      </div>
    </div>
  )
}