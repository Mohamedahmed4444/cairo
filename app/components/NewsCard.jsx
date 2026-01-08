import Link from "next/link"
import { MdArrowForward } from "react-icons/md"

export default function NewsCard({ id, title, description, date, category }) {
    return (
        <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-200">
            <div className="flex justify-between items-start mb-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium">{category}</span>
                <span className="text-gray-500 text-sm">{date}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
            <Link href={`/news/${id}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                اقرأ المزيد <MdArrowForward size={18} />
            </Link>
        </article>
    )
}
