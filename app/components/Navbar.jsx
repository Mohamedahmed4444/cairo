"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        
        <Link href="/" className="text-2xl font-bold">
          مركز أخبار القاهرة
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden w-10 h-10 bg-blue-800 rounded-lg flex flex-col justify-center items-center gap-1"
        >
          <span className="w-5 h-0.5 bg-white rounded"></span>
          <span className="w-5 h-0.5 bg-white rounded"></span>
          <span className="w-5 h-0.5 bg-white rounded"></span>
        </button>

        <ul
          className={`
            absolute sm:static top-16 left-0 w-full sm:w-auto
            bg-blue-600 sm:bg-transparent
            flex flex-col sm:flex-row gap-4 sm:gap-6
            items-center
            transition-all duration-300
            ${open ? "flex" : "hidden"} sm:flex
          `}
        >
          <li><Link href="/">الرئيسية</Link></li>
          <li><Link href="/news">الأخبار</Link></li>
          <li><Link href="/events">الأحداث</Link></li>
          <li><Link href="/about">عن القاهرة</Link></li>
          <li><Link href="/team">الفريق</Link></li>
          <li><Link href="/contact">اتصل بنا</Link></li>
        </ul>
      </div>
    </nav>
  )
}
