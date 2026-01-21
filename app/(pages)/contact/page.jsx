
export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-blue-600 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
                    <p className="text-xl text-orange-100">نود سماع رأيك. أرسل لنا رسالة!</p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-800">تواصل معنا</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">البريد الإلكتروني</h3>
                                <p className="text-gray-600">info@caironewshub.com</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">الهاتف</h3>
                                <p className="text-gray-600">+20 100 000 0000</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">العنوان</h3>
                                <p className="text-gray-600">وسط البلد، القاهرة، مصر</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">ساعات العمل</h3>
                                <p className="text-gray-600">الاثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً</p>
                                <p className="text-gray-600">السبت: 10:00 صباحاً - 4:00 مساءً</p>
                                <p className="text-gray-600">الأحد: مغلق</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-800">أرسل رسالة</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    الاسم الكامل *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="اسمك"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300 text-black"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    عنوان البريد الإلكتروني *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="بريدك@البريد.com"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300 text-black"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    الرسالة *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="اكتب رسالتك هنا..."
                                    rows={6}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-orange-700 transition font-medium"
                            >
                                إرسال الرسالة
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
