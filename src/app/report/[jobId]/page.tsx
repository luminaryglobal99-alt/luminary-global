'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { ShieldCheck, CheckCircle2, AlertCircle, Sparkles, ThumbsUp, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { ChecklistItem } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { EvidenceViewer } from '@/components/report/EvidenceViewer';

export default function CustomerReportPage() {
  const params = useParams();
  const jobId = (params?.jobId as string) || 'JOB-2026-001';

  const [reportStatus, setReportStatus] = useState<'PENDING' | 'APPROVED' | 'DISPUTED'>('PENDING');
  const [disputeNotes, setDisputeNotes] = useState<string>('');
  const [showDisputeModal, setShowDisputeModal] = useState<boolean>(false);

  const sampleItems: ChecklistItem[] = [
    {
      id: 'chk-1',
      job_id: jobId,
      zone_name: 'ห้องน้ำ (Master Bath)',
      task_name: 'ขัดล้างคราบตะกรันกระจกและยาแนวสุขภัณฑ์',
      is_in_package: true,
      is_completed: true,
      requires_photo: true,
      material_limitations: 'ก๊อกน้ำรมดำ ขัดด้วยน้ำยา Descaler เกรดพรีเมียม ไร้รอยขูดขีด',
      before_photo_url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      after_photo_url: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80',
      photo_metadata: {
        timestamp: '2026-10-09 11:15:22 น.',
        gps: 'Lat 7.880412, Lng 98.392341 (Villa Botanica)',
        operator: 'Cleaner 01 (สมศรี)',
      },
    },
    {
      id: 'chk-2',
      job_id: jobId,
      zone_name: 'ห้องครัว (Kitchen)',
      task_name: 'สลายคราบน้ำมันเตาอบและฮูดดูดควัน',
      is_in_package: true,
      is_completed: true,
      requires_photo: true,
      material_limitations: 'ท็อปหินอ่อนแท้ ใช้น้ำยา Marble Care เบอร์ 5 ไร้กรด 100%',
      before_photo_url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      after_photo_url: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80',
      photo_metadata: {
        timestamp: '2026-10-09 12:40:10 น.',
        gps: 'Lat 7.880412, Lng 98.392341 (Villa Botanica)',
        operator: 'Cleaner 01 (สมศรี)',
      },
    },
    {
      id: 'chk-3',
      job_id: jobId,
      zone_name: 'ระเบียงภายนอก (Balcony)',
      task_name: 'ขัดตะไคร่น้ำและเช็ดกระจกกันตก',
      is_in_package: false, // อยู่นอกแพ็กเกจ
      is_completed: false,
      requires_photo: false,
    },
  ];

  const handleApprove = () => {
    setReportStatus('APPROVED');
  };

  const handleDisputeSubmit = () => {
    setReportStatus('DISPUTED');
    setShowDisputeModal(false);
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 pb-20">
      {/* Top Brand Banner */}
      <header className="bg-forest text-white py-6 px-4 shadow-md">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary flex items-center justify-center text-primary font-serif font-bold text-xl">
              L
            </div>
            <div>
              <span className="font-serif font-bold text-lg tracking-wider text-white">LUMINARY GLOBAL</span>
              <p className="text-xs text-primary">รายงานผลการตรวจรับงาน (Cleaning Quality Passport)</p>
            </div>
          </div>
          <Badge variant={reportStatus === 'APPROVED' ? 'green' : reportStatus === 'DISPUTED' ? 'red' : 'gold'}>
            {reportStatus === 'APPROVED' ? '✓ ตรวจรับงานเรียบร้อย' : reportStatus === 'DISPUTED' ? 'อยู่ระหว่างตรวจสอบข้อพิพาท' : 'รอลูกค้าตรวจรับงาน'}
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 pt-6 space-y-6">
        {/* Job Overview Card */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-2 border-b border-stone-100 pb-4">
            <div>
              <span className="text-xs font-bold text-primary-dark uppercase">รหัสงาน: #{jobId}</span>
              <h2 className="text-xl font-serif font-bold text-forest mt-0.5">คุณวิภาดา (Villa Botanica)</h2>
            </div>
            <div className="text-right text-xs text-stone-500">
              <p className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-primary" /> 9 ต.ค. 2026</p>
              <p className="flex items-center gap-1 mt-0.5"><MapPin className="w-3.5 h-3.5 text-primary" /> ภูเก็ต</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-stone-50">
              <p className="text-stone-400">ประเภทบริการ</p>
              <p className="font-semibold text-stone-800 mt-0.5">Deep Cleaning</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50">
              <p className="text-stone-400">แม่บ้านผู้ดูแล</p>
              <p className="font-semibold text-stone-800 mt-0.5">สมศรี มีสุข (#08)</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 col-span-2 sm:col-span-1">
              <p className="text-stone-400">สถานะการตรวจ</p>
              <p className="font-semibold text-emerald-700 mt-0.5">สำเร็จครบทุกโซน</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs font-medium px-1">
          <span className="flex items-center gap-1.5 text-emerald-800">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" /> สีเขียว = ดำเนินการในแพ็กเกจ
          </span>
          <span className="flex items-center gap-1.5 text-stone-500">
            <span className="w-3 h-3 rounded-full bg-stone-300 inline-block" /> สีเทา = นอกเหนือแพ็กเกจ
          </span>
        </div>

        {/* Checklist & Evidence Viewers */}
        <div className="space-y-6">
          {sampleItems.map((item) => (
            <div key={item.id}>
              {item.is_in_package ? (
                <EvidenceViewer item={item} />
              ) : (
                <div className="bg-stone-50/80 rounded-xl border border-stone-200/60 p-4 opacity-60 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-stone-400">{item.zone_name}</span>
                    <p className="text-sm text-stone-500 font-medium">{item.task_name}</p>
                  </div>
                  <span className="text-xs bg-stone-200 text-stone-600 px-2.5 py-1 rounded font-medium">
                    นอกแพ็กเกจ
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Approval / Dispute Action Bar */}
        {reportStatus === 'PENDING' && (
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md space-y-4 text-center">
            <h3 className="font-serif text-lg font-bold text-forest">การตรวจรับงานและประเมินผล</h3>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              หากท่านตรวจสอบภาพหลักฐานเรียบร้อยแล้ว กรุณากดยอมรับงาน หรือกดแจ้งปัญหาหากมีจุดที่ต้องการให้แก้ไข
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button variant="outline" size="lg" onClick={() => setShowDisputeModal(true)} className="border-rose-300 text-rose-700 hover:bg-rose-50">
                <AlertCircle className="w-4 h-4 mr-2" /> แจ้งจุดที่ต้องแก้ไข (Dispute)
              </Button>
              <Button variant="success" size="lg" onClick={handleApprove}>
                <ThumbsUp className="w-4 h-4 mr-2" /> ยอมรับงานและเสร็จสิ้น (Approve)
              </Button>
            </div>
          </div>
        )}

        {reportStatus === 'APPROVED' && (
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-emerald-900">ท่านได้กดยอมรับงานเรียบร้อยแล้ว</h3>
            <p className="text-xs text-emerald-700">ขอขอบพระคุณที่ไว้วางใจให้ LUMINARY GLOBAL ดูแลพื้นที่ของท่าน</p>
          </div>
        )}
      </main>

      {/* Dispute Modal */}
      {showDisputeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-rose-800">แจ้งจุดที่ต้องแก้ไข (Dispute)</h3>
            <p className="text-xs text-stone-600">
              กรุณาระบุโซนหรือจุดที่ท่านพบปัญหา ทางทีมงาน Admin จะประสานงานให้แม่บ้านเข้าแก้ไขทันที
            </p>
            <textarea
              rows={4}
              value={disputeNotes}
              onChange={(e) => setDisputeNotes(e.target.value)}
              placeholder="ตัวอย่าง: กระจกตู้อาบน้ำยังมีคราบน้ำหลงเหลือเล็กน้อย..."
              className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowDisputeModal(false)}>
                ยกเลิก
              </Button>
              <Button variant="danger" size="sm" onClick={handleDisputeSubmit}>
                ส่งเรื่องแจ้งแก้ไข
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
