'use client';

import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Clock, MapPin, CheckCircle, ShieldAlert, ArrowLeft, Check, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function AdminDisputesPage() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 pb-16">
      {/* Header */}
      <header className="bg-forest text-white px-6 py-4 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-serif font-bold text-lg text-primary">LUMINARY QA & DISPUTES</span>
            <span className="text-xs text-stone-300">| ศูนย์เปรียบเทียบหลักฐานดิจิทัล</span>
          </div>
          <Link href="/admin/jobs" className="text-xs text-primary font-medium hover:underline flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" /> กลับไปคิวงาน
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 space-y-6">
        <div>
          <h1 className="font-serif text-2xl font-bold text-rose-900 flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-rose-600" /> รายการข้อพิพาทที่รอดำเนินการ (Dispute Resolution)
          </h1>
          <p className="text-xs text-stone-600 mt-1">
            เปรียบเทียบภาพถ่าย Before/After ที่ฝัง Timestamp และ GPS Canvas เพื่อตัดสินและแก้ไขปัญหาหน้างาน
          </p>
        </div>

        {/* Dispute Case Card */}
        <div className="bg-white rounded-2xl border border-rose-200 p-6 shadow-sm space-y-6">
          {/* Dispute Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-stone-100">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="red">รอดำเนินการ</Badge>
                <span className="text-xs font-bold text-stone-500">Case ID: #DIS-2026-04</span>
              </div>
              <h2 className="text-lg font-bold text-stone-800 mt-1">
                คุณกิตติศักดิ์ (Laguna Villa) - Job #JOB-2026-003
              </h2>
              <p className="text-xs text-stone-500">แม่บ้าน: พรทิพย์ (#03) | งาน Post-Renovation Cleaning</p>
            </div>
            <div className="text-right">
              <a href="tel:086123XXXX">
                <Button variant="outline" size="sm">
                  <Phone className="w-3.5 h-3.5 mr-1" /> โทรหาลูกค้า
                </Button>
              </a>
            </div>
          </div>

          {/* Customer Claim vs Cleaner Note */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 text-xs">
              <p className="font-bold text-rose-900 mb-1">คำร้องเรียนจากลูกค้า:</p>
              <p className="text-rose-800 leading-relaxed">
                "พบรอยคราบด่างบนพื้นหินอ่อนบริเวณทางเข้าห้องรับแขก คิดว่าแม่บ้านใช้น้ำยาที่มีฤทธิ์เป็นกรดขัดพื้น"
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs">
              <p className="font-bold text-amber-900 mb-1">บันทึกข้อจำกัดวัสดุจากแม่บ้าน (ก่อนเริ่มงาน):</p>
              <p className="text-amber-800 leading-relaxed">
                "แม่บ้านได้บันทึกไว้ว่ารอยคราบด่างนี้เกิดจากน้ำยาช่างสีที่หกไว้ก่อนหน้านี้ และได้ใช้น้ำยา Marble Care ไร้กรดเท่านั้น"
              </p>
            </div>
          </div>

          {/* Evidence Comparison Images */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-stone-800">
              หลักฐานภาพถ่ายที่มีลายน้ำ (Watermark Metadata Verified)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Before Evidence */}
              <div className="space-y-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-200 bg-stone-900">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                    alt="Before evidence"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-black/80 p-2 text-[10px] text-white">
                    <p className="text-primary font-bold">LUMINARY GLOBAL [BEFORE]</p>
                    <p>🕒 8 ต.ค. 2026, 10:05 น. | 📍 Lat 7.9912, Lng 98.3014 (Laguna)</p>
                  </div>
                </div>
                <p className="text-xs text-stone-500 italic text-center">
                  * ภาพถ่ายตอน 10:05 น. แสดงให้เห็นรอยด่างเดิมตั้งแต่ก่อนเริ่มงาน
                </p>
              </div>

              {/* After Evidence */}
              <div className="space-y-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-200 bg-stone-900">
                  <img
                    src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
                    alt="After evidence"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-black/80 p-2 text-[10px] text-white">
                    <p className="text-primary font-bold">LUMINARY GLOBAL [AFTER]</p>
                    <p>🕒 8 ต.ค. 2026, 14:30 น. | 📍 Lat 7.9912, Lng 98.3014 (Laguna)</p>
                  </div>
                </div>
                <p className="text-xs text-stone-500 italic text-center">
                  * ภาพถ่ายหลังจบงานทำความสะอาดเรียบร้อย
                </p>
              </div>
            </div>
          </div>

          {/* Admin Action Buttons */}
          <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-end gap-3">
            <Button variant="outline" size="md">
              ส่งทีมช่างขัดเงาหินอ่อนดูแลพิเศษ
            </Button>
            <Button variant="success" size="md">
              <Check className="w-4 h-4 mr-1.5" /> ชี้แจงหลักฐานก่อนเริ่มงาน & ปิดข้อพิพาท
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
