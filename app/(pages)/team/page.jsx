"use client"

import { teamMembers } from "@/lib/data"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">فريق التطوير</h1>
          <p className="text-xl text-gray-600">يتشرف فريقنا بتطوير موقع مركز أخبار القاهرة</p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Card Header with Color */}
              <div className="h-32 bg-linear-to-r from-blue-500 to-blue-600"></div>

              {/* Card Content */}
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-blue-700 mb-1">{member.arName}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.enName}</p>

                {/* Student Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-600 font-semibold">رقم الطالب:</span>
                    <span className="text-blue-600 font-mono">{member.studentId}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">المجموعة:</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {member.group}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="bg-blue-50 border-r-4 border-blue-600 p-8 rounded-lg text-right">
          <h3 className="text-2xl font-bold text-blue-700 mb-2">شكراً لك!</h3>
          <p className="text-gray-700 text-lg">
            نشكر كل أعضاء الفريق على جهودهم المتميزة في تطوير هذا الموقع. معاً، قمنا ببناء منصة إعلامية حديثة وفعالة تخدم
            مدينة القاهرة.
          </p>
        </div>
      </div>
    </main>
  )
}
