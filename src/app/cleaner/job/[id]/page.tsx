'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Check, Camera, AlertTriangle, ArrowLeft, Send, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { ChecklistItem } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { WatermarkCamera } from '@/components/cleaner/WatermarkCamera';

export default function CleanerJobChecklistPage() {
  const params = useParams();
  const jobId = (params?.id as string) || 'JOB-2026-001';

  const [activeCameraItem, setActiveCameraItem] = useState<{ item: ChecklistItem; phase: 'BEFORE' | 'AFTER' } | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const [items, setItems] = useState<ChecklistItem[]>([
    {
      id: 'chk-1',
      job_id: jobId,
      zone_name: 'ห้องน้ำ (Master Bath)',
      task_name: 'ขัดล้างคราบตะกรันกระจกและยาแนวสุขภัณฑ์',
      is_in_package: true,
      is_completed: false,
      requires_photo: true,
      material_limitations: 'ก๊อกน้ำรมดำ ห้ามใช้สก๊อตไบร์ทขัด',
    },
    {
      id: 'chk-2',
      job_id: jobId,
      zone_name: 'ห้องครัว (Kitchen)',
      task_name: 'สลายคราบน้ำมันเตาอบและฮูดดูดควัน',
      is_in_package: true,
      is_completed: false,
      requires_photo: true,
      material_limitations: 'ท็อปเคาน์เตอร์หินอ่อนแท้ ใช้น้ำยาเบอร์ 5 ไร้กรดเท่านั้น',
    },
    {
      id: 'chk-3',
      job_id: jobId,
      zone_name: 'ห้องนอน (Bedroom)',
      task_name: 'ดูดฝุ่นใต้เตียง เช็ดร่องบัว และเคลือบพื้นไม้',
      is_in_package: true,
      is_completed: false,
      requires_photo: true,
      material_limitations: 'พื้นปาร์เก้ไม้สัก ระวังอย่าให้น้ำขัง',
    },
    {
      id: 'chk-4',
      job_id: jobId,
      zone_name: 'ระเบียง (Balcony)',
      task_name: 'ขัดตะไคร่น้ำและเช็ดกระจกกันตก',
      is_in_package: false, // นอกแพ็กเกจ
      is_completed: false,
      requires_photo: false,
    },
  ]);

  const toggleComplete = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, is_completed: !it.is_completed } : it))
    );
  };

  const handlePhotoCaptured = (photoUrl: string, metadata: { timestamp: string; gps: string; operator: string }) => {
    if (!activeCameraItem) return;

    setItems((prev) =>
      prev.map((it) => {
        if (it.id === activeCameraItem.item.id) {
          return {
            ...it,
            [activeCameraItem.phase === 'BEFORE' ? 'before_photo_url' : 'after_photo_url']: photoUrl,
            photo_metadata: metadata,
            is_completed: activeCameraItem.phase === 'AFTER' ? true : it.is_completed,
          };
        }
        return it;
      })
    );

    setActiveCameraItem(null);
    setSuccessToast(`บันทึกรูปภาพ [${activeCameraItem.phase}] พร้อมลายน้ำสำเร็จ`);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const completedCount = items.filter((i) => i.is_completed && i.is_in_package).length;
  const packageTotal = items.filter((i) => i.is_in_package).length;
  const progressPercent = Math.round((completedCount / packageTotal) * 100);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 pb-24">
      {/* Top Header */}
      <header className="bg-forest text-white px-4 py-4 sticky top-0 z-30 shadow-md flex items-center justify-between">
        <Link href="/cleaner/dashboard" className="flex items-center text-xs text-stone-300 hover:text-white">
          <ArrowLeft className="w-4 h-4 mr-1" /> ตารางงาน
        </Link>
        <div className="text-center">
          <p className="font-bold text-sm text-primary">Job: #{jobId}</p>
          <p className="text-[11px] text-stone-300">Villa Botanica (Deep Clean)</p>
        </div>
        <Badge variant="gold">{progressPercent}%</Badge>
      </header>

      {/* Main Form */}
      <main className="max-w-xl mx-auto px-4 pt-5 space-y-4">
        {successToast && (
          <div className="bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> {successToast}
          </div>
        )}

        {/* Material Warning Banner */}
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900">
            <p className="font-bold">คำเตือนข้อจำกัดวัสดุหน้างาน</p>
            <p className="mt-0.5 text-amber-800">
              บ้านนี้มีพื้นหินอ่อนแท้และก๊อกน้ำรมดำ กรุณาใช้น้ำยาเบอร์ 5 และหลีกเลี่ยงการใช้กรดรุนแรงทุกชนิด
            </p>
          </div>
        </div>

        {/* Checklist List */}
        <div className="space-y-3">
          <h2 className="font-bold text-sm text-stone-700">รายการงานในแพ็กเกจ (Checklist)</h2>
          {items.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl border p-4 transition-all shadow-sm ${
                item.is_completed
                  ? 'border-emerald-300 bg-emerald-50/20'
                  : item.is_in_package
                  ? 'border-stone-200'
                  : 'border-stone-200 opacity-60 bg-stone-50'
              }`}
            >
              {/* Item Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleComplete(item.id)}
                    className={`w-6 h-6 rounded-lg flex items-center justify-center mt-0.5 transition-colors ${
                      item.is_completed
                        ? 'bg-emerald-600 text-white'
                        : 'border-2 border-stone-300 hover:border-primary'
                    }`}
                  >
                    {item.is_completed && <Check className="w-4 h-4 stroke-[3]" />}
                  </button>
                  <div>
                    <span className="text-[11px] font-bold text-primary-dark uppercase">
                      {item.zone_name}
                    </span>
                    <h3 className={`text-sm font-semibold ${item.is_completed ? 'line-through text-stone-500' : 'text-stone-900'}`}>
                      {item.task_name}
                    </h3>
                  </div>
                </div>

                {!item.is_in_package && (
                  <span className="text-[10px] bg-stone-200 text-stone-600 px-2 py-0.5 rounded font-medium">
                    นอกแพ็กเกจ
                  </span>
                )}
              </div>

              {/* Material limitation note if present */}
              {item.material_limitations && (
                <div className="mt-2.5 ml-9 text-xs text-amber-700 bg-amber-50/80 px-2.5 py-1.5 rounded-lg border border-amber-200/50 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                  <span>{item.material_limitations}</span>
                </div>
              )}

              {/* Camera Trigger Buttons (Before / After) */}
              {item.requires_photo && (
                <div className="mt-3 ml-9 flex flex-wrap gap-2 pt-2 border-t border-stone-100">
                  <button
                    onClick={() => setActiveCameraItem({ item, phase: 'BEFORE' })}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-colors ${
                      item.before_photo_url
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    {item.before_photo_url ? '✓ ถ่าย Before แล้ว' : '+ ถ่ายรูป Before (GPS)'}
                  </button>

                  <button
                    onClick={() => setActiveCameraItem({ item, phase: 'AFTER' })}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-colors ${
                      item.after_photo_url
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    {item.after_photo_url ? '✓ ถ่าย After แล้ว' : '+ ถ่ายรูป After (GPS)'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Link href={`/report/${jobId}`}>
            <Button
              variant="primary"
              size="lg"
              className="w-full shadow-lg"
              disabled={progressPercent < 100}
            >
              <Send className="w-4 h-4 mr-2" />
              {progressPercent === 100 ? 'สรุปและส่งงานให้ลูกค้าตรวจ' : `ทำ Checklist ให้ครบ (${completedCount}/${packageTotal})`}
            </Button>
          </Link>
        </div>
      </main>

      {/* Watermark Camera Modal Component */}
      {activeCameraItem && (
        <WatermarkCamera
          jobId={jobId}
          phase={activeCameraItem.phase}
          taskName={activeCameraItem.item.task_name}
          onCapture={handlePhotoCaptured}
          onClose={() => setActiveCameraItem(null)}
        />
      )}
    </div>
  );
}
