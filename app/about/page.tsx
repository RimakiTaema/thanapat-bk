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
            <div className="shadow-amber-50 font-bold text-2xl">
                Credits
            </div>
            <div className="shadow-amber-100 font-medium">
                Sources
            </div>
            {ImgSource.map((item) => (
                    <div
                        key={item.resname}
                        className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col"
                    >
                        <h5 className="mb-2 text-xl font-semibold text-gray-900">
                            {item.resname}
                        </h5>

                        <p className="text-gray-600 mb-6 flex-1">
                            ----
                        </p>

                        <Link
                            href={item.href}
                            className="inline-flex items-center justify-center self-start rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
                        >
                            Read More
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 12H5m14 0-4 4m4-4-4-4"
                                />
                            </svg>
                        </Link>
                    </div>
                ))}
        </div>
    )
}