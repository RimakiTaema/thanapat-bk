import Link from "next/link"
import React from "react"

// Yea I hate Tailwindcss for define class independently :(

const card =
  "bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col"

const cardTitle =
  "mb-2 text-xl font-semibold text-gray-900"

const cardDesc =
  "text-gray-600 mb-6 flex-1"

const button =
  "inline-flex items-center justify-center self-start rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"


export default function ExercisePage() {
    const exc = [
        { name: "EX1 (3.1)", desc: "Unknown", href: "/ex/ex1" },
        { name: "EX2 & 3 (3.3)", desc: "<p> Tag And <center> Tag", href: "/ex/ex3" },
        { name: "EX4 & 5 (3.5)", desc: "<pre> Tag", href: "/ex/ex5" },
        { name: "EX6 (3.6)", desc: "<hr> Tag", href: "/ex/ex6" },
        { name: "EX7 (3.7)", desc: "<b>, <i>, <u> Tags", href: "/ex/ex7" },
        { name: "EX8 (3.8)", desc: "Exercise 4 (Book Of Basic HTML)", href: "/ex/ex8" },
        { name: "EX9 (3.9)", desc: "<img> Tag", href: "/ex/ex9" },
        { name: "EX10 (4.0)", desc: "<table>, <th>, <td> Tags", href: "/ex/ex10" },
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">All Exercises</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {exc.map((item) => (
                    <div
                        key={item.name}
                        className={card}
                    >
                        <h5 className="mb-2 text-xl font-semibold text-gray-900">
                            {item.name}
                        </h5>

                        <p className={cardTitle}>
                            {item.desc}
                        </p>

                        <Link
                            href={item.href}
                            className={cardDesc}
                        >
                            Look In It
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
        </div>
    )
}