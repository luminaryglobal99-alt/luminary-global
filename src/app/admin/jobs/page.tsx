'use client';

import React from 'react';
import Link from 'next/link';
import { Briefcase, AlertCircle, CheckCircle, Clock, User, Phone, MapPin, Eye, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function AdminJobsPage() {
  const jobList = [
    {
      id: 'JOB-2026-001',
      customer: 'คุณวิภาดา (Villa Botanica)',
      phone: '081-992-XXXX',
      service: 'Deep Cleaning (บ้านเดี่ยว)',
      cleaner: 'สมศรี (#08)',
      status: 'IN_PROGRESS' as const,
      progress: 66,
      date: '9 ต.ค. 2026, 09:00 น.',
    },
    {
      id: 'JOB-2026-002',
      customer: 'คุณธนัท (The Base Condo)',
      phone: '089-441-XXXX',
      service: 'Soft Cleaning (1 Bedroom)',
      cleaner: 'สมศรี (#08)',
      status: 'ASSIGNED' as const,
      progress: 0,
      date: '9 ต.ค. 2026, 15:00 น.',
    },
    {
      id: 'JOB-2026-003',
      customer: 'คุณกิตติศักดิ์ (Laguna Villa)',
      phone: '086-123-XXXX',
      service: 'Post-Renovation Cleaning',
      cleaner: 'พรทิพย์ (#03)',
      status: 'DISPUTED' as const,
      progress: 100,
      date: '8 ต.ค. 2026, 10:00 น.',
    },
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 pb-16">
      {/* Admin Nav */}
      <header className="bg-forest text-white px-6 py-4 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-serif font-bold text-lg text-primary">LUMINARY ADMIN</span>
            <span className="text-xs text-stone-300">| จัดการคิวงาน & ควบคุมคุณภาพ (QA)</span>
          </div>
          <div className="flex items-center space-x-4 text-xs font-medium">
            <Link href="/admin/jobs" className="text-primary font-bold">คิวงานทั้งหมด</Link>
            <Link href="/admin/disputes" className="text-stone-300 hover:text-white">ข้อพิพาท & QA</Link>
            <Link href="/" className="text-stone-300 hover:text-white">หน้าเว็บหลัก</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl font-bold text-forest">คิวงานทั้งหมด (Job Queue)</h1>
            <p className="text-xs text-stone-500 mt-1">ติดตามสถานะงานแม่บ้านและตรวจสอบผลงานแบบเรียลไทม์</p>
          </div>
          <div className="flex gap-2">
            <Link href="/admin/disputes">
              <Button variant="outline" size="sm" className="border-rose-300 text-rose-700 bg-rose-50/50">
                <AlertCircle className="w-4 h-4 mr-1.5" /> ตรวจสอบข้อพิพาท (1 รายการ)
              </Button>
            </Link>
          </div>
        </div>

        {/* Jobs Table */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-stone-600">
              <thead className="bg-stone-50 text-stone-700 font-semibold border-b border-stone-200 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">รหัสงาน</th>
                  <th className="p-4">ลูกค้า</th>
                  <th className="p-4">บริการ</th>
                  <th className="p-4">แม่บ้านผู้รับผิดชอบ</th>
                  <th className="p-4">กำหนดการ</th>
                  <th className="p-4">สถานะ & Progress</th>
                  <th className="p-4 text-right">การจัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {jobList.map((j) => (
                  <tr key={j.id} className="hover:bg-stone-50/70 transition-colors">
                    <td className="p-4 font-bold text-stone-900">#{j.id}</td>
                    <td className="p-4">
                      <p className="font-semibold text-stone-800">{j.customer}</p>
                      <p className="text-[11px] text-stone-400">{j.phone}</p>
                    </td>
                    <td className="p-4 text-stone-700 font-medium">{j.service}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-primary" /> {j.cleaner}
                      </span>
                    </td>
                    <td className="p-4 text-stone-500">{j.date}</td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <Badge
                          variant={
                            j.status === 'IN_PROGRESS'
                              ? 'blue'
                              : j.status === 'DISPUTED'
                              ? 'red'
                              : 'gray'
                          }
                        >
                          {j.status === 'IN_PROGRESS'
                            ? 'กำลังทำ'
                            : j.status === 'DISPUTED'
                            ? 'พบข้อพิพาท'
                            : 'มอบหมายแล้ว'}
                        </Badge>
                        <p className="text-[10px] text-stone-400 font-medium">{j.progress}% เสร็จสิ้น</p>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <Link href={`/report/${j.id}`} target="_blank">
                        <Button variant="outline" size="sm">
                          <Eye className="w-3.5 h-3.5 mr-1" /> ดูรายงานสด
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
