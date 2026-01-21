import { aboutCairo } from "@/lib/data"

export const metadata = {
    title: "عن القاهرة - مركز أخبار القاهرة",
    description: "تعرف على القاهرة، مصر",
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-blue-600 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">{aboutCairo.name}</h1>
                    <p className="text-xl text-blue-100 mt-2">{aboutCairo.governorate}</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                {/* Quick Facts */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">معلومات سريعة</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <strong className="block text-gray-700 mb-2">عدد السكان</strong>
                            <p className="text-2xl font-bold text-blue-600">{aboutCairo.population}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <strong className="block text-gray-700 mb-2">المساحة</strong>
                            <p className="text-2xl font-bold text-blue-600">{aboutCairo.area}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <strong className="block text-gray-700 mb-2">تأسيسها</strong>
                            <p className="text-2xl font-bold text-blue-600">{aboutCairo.established}</p>
                        </div>
                    </div>
                </section>

                {/* History */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">التاريخ</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        {aboutCairo.history.split("\n\n").map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </section>

                {/* Attractions */}
                <section>
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">المعالم السياحية الشهيرة</h2>
                    <ul className="space-y-3">
                        {aboutCairo.attractions.map((attraction, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700">
                                <span className="text-blue-600 font-bold text-xl">▸</span>
                                <span>{attraction}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    )
}
