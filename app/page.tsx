import NavBar from "@/app/src/navbar/page"
import Link from "next/link"
export default function Home() {
  return (
    <div>
      <div className="text-shadow-gray-100 text-2xl font-medium items-center">
        Thanapat2 BK
      </div>
      <div className="">
        Welcome to The New rimaki.net
      </div>
      <div>
        It's still under construct And Below Me is Source Code
      </div>
      <div>
        <Link href="https://github.com/RimakiTaema/thanapat-bk" className="text-amber-200 border border-amber-600 rounded-md">
        Source Code
        </Link>
      </div>
    </div>
  );
}
