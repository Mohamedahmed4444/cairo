import { events } from "@/lib/data"
import { MdDateRange, MdLocationOn, MdAccessTime } from "react-icons/md"

export const metadata = {
  title: "الأحداث - مركز أخبار القاهرة",
  description: "الأحداث والإعلانات القادمة في القاهرة",
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">الأحداث القادمة</h1>
          <p className="text-xl text-green-100">لا تفوت الأحداث المثيرة التي تحدث في القاهرة</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-8 border-r-4 border-green-500"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{event.title}</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <MdDateRange size={24} className="text-green-600" />
                  <div>
                    <strong className="text-gray-700">التاريخ:</strong>
                    <span className="text-gray-600 me-2"> {event.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MdAccessTime size={24} className="text-green-600" />
                  <div>
                    <strong className="text-gray-700">الوقت:</strong>
                    <span className="text-gray-600 me-2"> {event.time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MdLocationOn size={24} className="text-green-600" />
                  <div>
                    <strong className="text-gray-700">الموقع:</strong>
                    <span className="text-gray-600 me-2"> {event.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
