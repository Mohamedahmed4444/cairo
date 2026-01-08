export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">حول مركز أخبار القاهرة</h3>
            <p className="text-gray-400">مصدرك للأخبار المحلية والأحداث والإعلانات في القاهرة.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">الروابط السريعة</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-white transition">
                  الأخبار
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-white transition">
                  الأحداث
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">معلومات الاتصال</h3>
            <p className="text-gray-400">البريد الإلكتروني: info@caironewshub.com</p>
            <p className="text-gray-400">الهاتف: +20 100 000 0000</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 مركز أخبار القاهرة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
