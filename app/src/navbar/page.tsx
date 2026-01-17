"use client"

import { useState } from "react"
import Link from "next/link"

export default function NavBar() {
    const [open, setOpen] = useState(false)

    const nav = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Exercises", href: "/exercises" },
    ]

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* LEFT: Brand */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-indigo-600 to-pink-600 flex items-center justify-center text-white font-bold">
                            a
                        </div>
                        <span className="font-bold text-gray-800 whitespace-nowrap">
                            RimakiProject (Thanapat2-BK)
                        </span>
                    </Link>

                    {/* RIGHT: Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {nav.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-indigo-600 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <Link
                            href="https://status.rimaki.net"
                            className="inline-block px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
                        >
                            Status
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            onClick={() => setOpen(!open)}
                            className="p-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <svg
                                className={`w-6 h-6 transition-transform ${
                                    open ? "rotate-90" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        open
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden overflow-hidden border-t bg-white transition-[max-height] duration-300 ${
                    open ? "max-h-screen" : "max-h-0"
                }`}
            >
                <div className="px-4 py-4 space-y-3">
                    {nav.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <Link
                        href="https://status.rimaki.net"
                        className="block px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                        Status
                    </Link>
                </div>
            </div>
        </header>
    )
}