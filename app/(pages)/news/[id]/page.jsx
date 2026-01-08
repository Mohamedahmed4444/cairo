import Link from "next/link"
import { MdArrowBack } from "react-icons/md"
import { newsArticles } from "@/lib/data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id.toString(),
  }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const article = newsArticles.find((a) => a.id === Number.parseInt(id))

  if (!article) {
    return {
      title: "Article Not Found - Cairo News Hub",
    }
  }

  return {
    title: `${article.title} - Cairo News Hub`,
    description: article.description,
  }
}

export default async function ArticlePage({ params }) {
  const { id } = await params
  const article = newsArticles.find((a) => a.id === Number.parseInt(id))

  if (!article) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/news" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
          <MdArrowBack size={20} />
          العودة للأخبار
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex gap-4 items-center mb-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium">{article.category}</span>
            <span className="text-gray-500 text-sm">{article.date}</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-800">{article.title}</h1>
          <p className="text-gray-600 text-lg mb-8">بقلم {article.author}</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            {article.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link href="/news" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              <MdArrowBack size={20} />
              العودة للأخبار
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
