'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowRight, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function CleanerDashboard() {
  const jobs = [
    {
      id: 'JOB-2026-001',
      customer_name: 'คุณวิภาดา (Villa Botanica)',
      phone: '081-992-XXXX',
      address: 'วิลล่า 12/4 ซอยตัวอย่าง 8 สมุทรปราการ',
      service_type: 'Deep Cleaning (บ้านเดี่ยว 2 ชั้น)',
      time: '09:00 - 14:00 น.',
      status: 'IN_PROGRESS' as const,
      progress: 60,
    },
    {
      id: 'JOB-2026-002',
      customer_name: 'คุณธนัท (The Base Condo)',
      phone: '089-441-XXXX',
      address: 'ห้อง 804 ชั้น 8 อาคาร B',
      service_type: 'Soft Cleaning (1 Bedroom)',
      time: '15:00 - 17:30 น.',
      status: 'ASSIGNED' as const,
      progress: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 pb-12">
      {/* Cleaner Top Bar */}
      <header className="bg-forest text-white px-4 py-4 sticky top-0 z-30 shadow-md">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary font-bold">
              C1
            </div>
            <div>
              <p className="font-semibold text-sm">แม่บ้าน: สมศรี มีสุข</p>
              <p className="text-xs text-stone-300">รหัสพนักงาน: #LMN-CLN-08</p>
            </div>
          </div>
          <Badge variant="gold">ออนไลน์</Badge>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-xl mx-auto px-4 pt-6 space-y-6">
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-stone-500 font-medium">ตารางงานวันนี้ (Today's Tasks)</p>
            <h2 className="text-xl font-bold text-forest mt-0.5">2 คิวงานที่ต้องปฏิบัติ</h2>
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
            2
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-sm space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold text-primary-dark">รหัสงาน: #{job.id}</span>
                  <h3 className="font-bold text-base text-stone-800 mt-0.5">{job.customer_name}</h3>
                </div>
                <Badge variant={job.status === 'IN_PROGRESS' ? 'blue' : 'gray'}>
                  {job.status === 'IN_PROGRESS' ? 'กำลังทำ' : 'รอดำเนินการ'}
                </Badge>
              </div>

              <div className="space-y-2 text-xs text-stone-600 bg-stone-50 p-3 rounded-xl">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>{job.time}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{job.address}</span>
                </p>
                <p className="text-stone-700 font-medium pt-1 border-t border-stone-200/50">
                  {job.service_type}
                </p>
              </div>

              {job.status === 'IN_PROGRESS' && (
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-stone-500">ความคืบหน้า Checklist</span>
                    <span className="text-primary-dark">{job.progress}%</span>
                  </div>
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${job.progress}%` }} />
                  </div>
                </div>
              )}

              <Link href={`/cleaner/job/${job.id}`} className="block">
                <Button
                  variant={job.status === 'IN_PROGRESS' ? 'primary' : 'secondary'}
                  size="md"
                  className="w-full"
                >
                  {job.status === 'IN_PROGRESS' ? 'ทำ Checklist ต่อ' : 'เริ่มงาน / ตรวจสอบพื้นที่'}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
