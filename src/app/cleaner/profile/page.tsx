'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  User,
  Award,
  Star,
  CheckCircle2,
  DollarSign,
  Calendar,
  Phone,
  ShieldCheck,
  ArrowLeft,
  Briefcase,
  Layers,
  Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function CleanerProfilePage() {
  const [isAvailable, setIsAvailable] = useState(true);

  const cleanerData = {
    staff_code: 'LMN-CLN-08',
    full_name: 'สมศรี มีสุข',
    nickname: 'สมศรี',
    role: 'หัวหน้าชุดปฏิบัติงาน (Team Lead)',
    phone: '084-112-9988',
    avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    rating: 4.95,
    total_jobs: 142,
    today_earnings: 1250,
    monthly_earnings: 32500,
    skills: ['Deep Clean', 'Pool Villa', 'Marble Polish', 'Post-Renovation'],
    certifications: [
      { id: 1, name: 'Degreaser สลายคราบไขมันในครัว' },
      { id: 2, name: 'Descaler ล้างคราบตะกรันและหินปูน' },
      { id: 3, name: 'Glass Polish เคลือบกระจกไร้คราบ' },
      { id: 4, name: 'Wood Care เคลือบถนอมพื้นไม้แท้' },
      { id: 5, name: 'Marble Care ดูแลหินอ่อนไร้กรด 100%' },
      { id: 6, name: 'Hospital-Grade Disinfectant ฆ่าเชื้อ' },
      { id: 7, name: 'Post-Renovation สลายคราบปูนและสี' },
    ],
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 pb-20">
      {/* Top Header */}
      <header className="bg-forest text-white px-4 py-4 sticky top-0 z-30 shadow-md flex items-center justify-between">
        <Link href="/cleaner/dashboard" className="flex items-center text-xs text-stone-300 hover:text-white">
          <ArrowLeft className="w-4 h-4 mr-1" /> ตารางงาน
        </Link>
        <h1 className="font-serif font-bold text-sm text-primary">บัตรพนักงาน & ข้อมูลส่วนตัว</h1>
        <div className="w-12" /> {/* Spacer */}
      </header>

      <main className="max-w-xl mx-auto px-4 pt-6 space-y-6">
        {/* Digital Staff Card */}
        <div className="bg-gradient-to-br from-forest to-stone-900 text-white rounded-3xl p-6 shadow-xl border-2 border-primary/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={cleanerData.avatar_url}
                alt={cleanerData.full_name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-primary shadow-md"
              />
              <div>
                <span className="text-[10px] tracking-widest text-primary font-bold uppercase block">
                  LUMINARY GLOBAL CERTIFIED
                </span>
                <h2 className="text-xl font-bold text-white mt-0.5">{cleanerData.full_name}</h2>
                <p className="text-xs text-stone-300">({cleanerData.nickname}) | {cleanerData.role}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
            <div>
              <p className="text-stone-400 text-[10px]">รหัสพนักงาน</p>
              <p className="font-mono font-bold text-primary text-sm">{cleanerData.staff_code}</p>
            </div>
            <div className="text-right">
              <p className="text-stone-400 text-[10px]">สถานะการทำงาน</p>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> พร้อมรับงาน
              </span>
            </div>
          </div>
        </div>

        {/* Earnings & Stats Summary */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-stone-400">รายได้วันนี้</span>
              <DollarSign className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-bold text-forest">฿{cleanerData.today_earnings.toLocaleString()}</p>
            <p className="text-[10px] text-stone-400">จาก 2 คิวงานที่สำเร็จ</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-stone-400">รายได้สะสมเดือนนี้</span>
              <Award className="w-4 h-4 text-primary" />
            </div>
            <p className="text-2xl font-bold text-primary-dark">฿{cleanerData.monthly_earnings.toLocaleString()}</p>
            <p className="text-[10px] text-stone-400">รวมค่าคอมมิชชันและทิป</p>
          </div>
        </div>

        {/* Performance & Reviews */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg">
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-stone-800 text-base">{cleanerData.rating} ดาว (คะแนนเต็ม 5.0)</h3>
              <p className="text-xs text-stone-500">ผลงานผ่านการตรวจรับรวม {cleanerData.total_jobs} งาน</p>
            </div>
          </div>
          <Badge variant="green">ระดับ Gold</Badge>
        </div>

        {/* 7 Chemical Certifications */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-stone-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" /> ใบรับรองมาตรฐานน้ำยา 7 ชนิด
            </h3>
            <span className="text-[10px] bg-primary/10 text-primary-dark font-bold px-2 py-0.5 rounded">
              ผ่านการอบรม 100%
            </span>
          </div>

          <div className="space-y-2.5">
            {cleanerData.certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-2.5 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary-dark font-bold text-[10px] flex items-center justify-center shrink-0">
                    #{cert.id}
                  </span>
                  <span className="text-stone-700 font-medium">{cert.name}</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
