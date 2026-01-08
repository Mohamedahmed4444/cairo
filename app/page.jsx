import Link from "next/link"
import { newsArticles } from "@/lib/data"
import NewsCard from "./components/NewsCard"

export default function Home() {
  const latestNews = newsArticles.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">أهلاً بك في مركز أخبار القاهرة</h1>
          <p className="text-xl text-blue-100">مصدرك الموثوق للأخبار المحلية والأحداث والإعلانات</p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">أحدث الأخبار</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {latestNews.map((article) => (
              <NewsCard
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
                date={article.date}
                category={article.category}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/news"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              عرض كل الأخبار
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">اكتشف المزيد</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/news"
              className="bg-linear from-blue-50 to-blue-100 p-6 rounded-lg hover:shadow-lg transition border border-blue-200"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">📰 الأخبار</h3>
              <p className="text-gray-600">اقرأ جميع أحدث المقالات الإخبارية</p>
            </Link>
            <Link
              href="/events"
              className="bg-linear from-green-50 to-green-100 p-6 rounded-lg hover:shadow-lg transition border border-green-200"
            >
              <h3 className="text-xl font-bold mb-2 text-green-600">📅 الأحداث</h3>
              <p className="text-gray-600">اكتشف الأحداث القادمة والإعلانات</p>
            </Link>
            <Link
              href="/about"
              className="bg-linear from-purple-50 to-purple-100 p-6 rounded-lg hover:shadow-lg transition border border-purple-200"
            >
              <h3 className="text-xl font-bold mb-2 text-purple-600">ℹ️ عن القاهرة</h3>
              <p className="text-gray-600">تعرف على مدينتنا الجميلة</p>
            </Link>
            <Link
              href="/contact"
              className="bg-linear from-orange-50 to-orange-100 p-6 rounded-lg hover:shadow-lg transition border border-orange-200"
            >
              <h3 className="text-xl font-bold mb-2 text-orange-600">✉️ اتصل بنا</h3>
              <p className="text-gray-600">تواصل معنا</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
