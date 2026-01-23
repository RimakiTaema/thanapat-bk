import React from "react";

const footernav = [
    {name: "About", href: "/about"},
    {name: "Source Code", href: "https://github.com/RimakiTaema/thanapat-bk"},
]

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-indigo-700 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>
                    &copy; {currentYear} RimakiTaema (Thanapat Srisupasiriwong) MIT Licenced
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    {footernav.map ((item) => (
                        <a href={item.href}>{item.name}</a>
                    ))} 
                </div>
            </div>
        </footer>
    )
}