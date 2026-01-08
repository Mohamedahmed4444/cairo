import NewsCard from "@/app/components/NewsCard"
import { newsArticles } from "@/lib/data"

export const metadata = {
  title: "الأخبار - مركز أخبار القاهرة",
  description: "اقرأ أحدث الأخبار من القاهرة",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">جميع المقالات الإخبارية</h1>
          <p className="text-xl text-blue-100">كن على اطلاع دائم بأحدث الأخبار من القاهرة</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
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
      </div>
    </div>
  )
}
