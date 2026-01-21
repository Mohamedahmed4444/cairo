import { Cairo } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const cairo = Cairo({ subsets: ["arabic"] })

export const metadata = {
  title: "مركز أخبار القاهرة",
  description: "مصدرك الموثوق للأخبار المحلية والأحداث والإعلانات في القاهرة",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
