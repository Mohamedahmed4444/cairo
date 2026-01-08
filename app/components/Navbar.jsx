import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    مركز أخبار القاهرة
                </Link>
                <ul className="flex gap-6 list-none">
                    <li>
                        <Link href="/" className="hover:text-blue-100 transition">
                            الرئيسية
                        </Link>
                    </li>
                    <li>
                        <Link href="/news" className="hover:text-blue-100 transition">
                            الأخبار
                        </Link>
                    </li>
                    <li>
                        <Link href="/events" className="hover:text-blue-100 transition">
                            الأحداث
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-blue-100 transition">
                            عن القاهرة
                        </Link>
                    </li>
                    <li>
                        <Link href="/team" className="hover:text-blue-100 transition">
                            الفريق
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-blue-100 transition">
                            اتصل بنا
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
