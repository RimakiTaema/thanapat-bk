"use client"
import { isHTTPMethod } from "next/dist/server/web/http";
import React from "react";
import Link from "next/link";
export default function AboutPage() {
    const ImgSource = [
        {resname: "Fuji Image", author: "Unknown", href: "#"}
    ]
    const TextSource = [
        {resname: "Test", author: "Unknown"}
    ]
    return (
        <div>
            <div className="shadow-amber-50 text-center font-bold text-4xl">
                About
            </div>
            <br />
            <div className="items-center text-center content-center">
                Developer (ผู้จัดทำ)
                <div>
                    <img className="mx-auto items-center content-center object-center size-48" src="https://avatars.githubusercontent.com/u/146542478" alt="DevProfile" />
                </div>
                <div className="text-2xl fonts-bold">
                    Thanapat Srisupasiriwong
                </div>
                <div className="fonts-medium text-shadow-amber-100">
                    นาย ธนพัฒน์ ศรีศุภศิริวงศ์
                </div>
            </div>
            <div className="">
                
            </div>
            <br />
            <div className="shadow-amber-100 text-center text-2xl font-medium">
                Sources (แหล่งที่มา)
            </div>
            
        </div>
    )
}