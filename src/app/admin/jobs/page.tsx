'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, AlertCircle, CheckCircle, Clock, User, Phone, MapPin, Eye, ArrowRight, Navigation, ExternalLink, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

// Haversine Distance Formula in Meters
function getDistanceInMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(R * c);
}

export default function AdminJobsPage() {
  const [selectedMapJob, setSelectedMapJob] = useState<any | null>(null);

  const [jobList, setJobList] = useState([
    {
      id: 'JOB-2026-001',
      customer: 'คุณวิภาดา (Villa Botanica)',
      phone: '081-992-XXXX',
      service: 'Deep Cleaning (บ้านเดี่ยว)',
      cleaner: 'สมศรี (#08)',
      status: 'IN_PROGRESS' as const,
      progress: 66,
      date: '9 ต.ค. 2026, 09:00 น.',
      customer_lat: 7.989211,
      customer_lng: 98.336123,
      customer_address: 'วิลล่า 12/4 ซอยป่าสัก 8 เชิงทะเล ภูเก็ต',
      cleaner_lat: 7.989230,
      cleaner_lng: 98.336140,
      cleaner_last_checkin: '09:05 น. (ผ่านกล้อง Watermark)',
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
      customer_lat: 7.880412,
      customer_lng: 98.392210,
      customer_address: 'ห้อง 804 ชั้น 8 อาคาร B เมืองภูเก็ต',
      cleaner_lat: 7.881200,
      cleaner_lng: 98.393000,
      cleaner_last_checkin: '14:52 น. (กำลังเดินทาง)',
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
      customer_lat: 7.994512,
      customer_lng: 98.301145,
      customer_address: 'พูลวิลล่า 45/2 ลากูนา ถ.ศรีสุนทร',
      cleaner_lat: 7.998900,
      cleaner_lng: 98.305000,
      cleaner_last_checkin: '10:02 น.',
    },
  ]);

  const updateCustomerPin = (id: string, lat: number, lng: number) => {
    setJobList((prev) =>
      prev.map((j) => (j.id === id ? { ...j, customer_lat: lat, customer_lng: lng } : j))
    );
    if (selectedMapJob && selectedMapJob.id === id) {
      setSelectedMapJob((prev: any) => ({ ...prev, customer_lat: lat, customer_lng: lng }));
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 pb-16">
      {/* Admin Nav */}
      <header className="bg-forest text-white px-6 py-4 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-serif font-bold text-lg text-primary">LUMINARY ADMIN</span>
            <span className="text-xs text-stone-300">| ศูนย์ควบคุมปักหมุด Google Maps & ตรวจสอบ GPS แม่บ้าน</span>
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
            <h1 className="font-serif text-2xl font-bold text-forest">คิวงาน & ระบบตรวจพิกัด GPS แม่บ้าน</h1>
            <p className="text-xs text-stone-500 mt-1">ปักหมุดพิกัดบ้านลูกค้าบน Google Maps เพื่อตรวจสอบว่าแม่บ้านปฏิบัติงานตรงจุดจริงหรือไม่</p>
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
                  <th className="p-4">ลูกค้า & ที่อยู่</th>
                  <th className="p-4">หมุดบ้านลูกค้า (Google Maps)</th>
                  <th className="p-4">แม่บ้าน & พิกัด GPS เช็กอิน</th>
                  <th className="p-4">ระยะห่าง (Distance Verification)</th>
                  <th className="p-4 text-right">การจัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {jobList.map((j) => {
                  const dist = getDistanceInMeters(j.customer_lat, j.customer_lng, j.cleaner_lat, j.cleaner_lng);
                  const isOnSite = dist <= 50;
                  const isNearby = dist > 50 && dist <= 200;

                  return (
                    <tr key={j.id} className="hover:bg-stone-50/70 transition-colors">
                      <td className="p-4 font-bold text-stone-900">
                        #{j.id}
                        <div className="mt-1">
                          <Badge variant={j.status === 'IN_PROGRESS' ? 'blue' : j.status === 'DISPUTED' ? 'red' : 'gray'}>
                            {j.status === 'IN_PROGRESS' ? 'กำลังทำ' : j.status === 'DISPUTED' ? 'ข้อพิพาท' : 'มอบหมาย'}
                          </Badge>
                        </div>
                      </td>

                      <td className="p-4">
                        <p className="font-semibold text-stone-800">{j.customer}</p>
                        <p className="text-[11px] text-stone-500 mt-0.5 truncate max-w-xs">{j.customer_address}</p>
                      </td>

                      <td className="p-4">
                        <div className="space-y-1">
                          <p className="text-[11px] font-mono text-stone-700">
                            Lat: {j.customer_lat.toFixed(6)}, Lng: {j.customer_lng.toFixed(6)}
                          </p>
                          <button
                            onClick={() => setSelectedMapJob(j)}
                            className="text-[11px] text-primary hover:underline font-semibold flex items-center gap-1"
                          >
                            <MapPin className="w-3.5 h-3.5" /> ปรับหมุดบ้านลูกค้าบนแผนที่
                          </button>
                        </div>
                      </td>

                      <td className="p-4">
                        <p className="font-semibold text-stone-800 flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-primary" /> {j.cleaner}
                        </p>
                        <p className="text-[10px] text-stone-500 mt-0.5">
                          GPS: {j.cleaner_lat.toFixed(6)}, {j.cleaner_lng.toFixed(6)}
                        </p>
                      </td>

                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            {isOnSite ? (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                                <CheckCircle2 className="w-3.5 h-3.5" /> ตรงจุดบ้านลูกค้า ({dist} ม.)
                              </span>
                            ) : isNearby ? (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300">
                                <Clock className="w-3.5 h-3.5" /> อยู่ใกล้เคียง ({dist} ม.)
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md border border-rose-300">
                                <AlertCircle className="w-3.5 h-3.5" /> นอกพื้นที่! ({dist} ม.)
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => setSelectedMapJob(j)}
                          className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold inline-flex items-center gap-1"
                        >
                          <Navigation className="w-3.5 h-3.5 text-primary" /> ดูพิกัดบน Map
                        </button>
                        <Link href={`/report/${j.id}`} target="_blank" className="inline-block">
                          <Button variant="outline" size="sm">
                            <Eye className="w-3.5 h-3.5 mr-1" /> รายงานสด
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Google Maps Pin & Distance Verification Modal */}
      {selectedMapJob && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-forest text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-bold text-base">ระบบปักหมุด Google Maps & ตรวจสอบพิกัดจริง</h3>
                  <p className="text-xs text-stone-300">งาน: #{selectedMapJob.id} - {selectedMapJob.customer}</p>
                </div>
              </div>
              <button onClick={() => setSelectedMapJob(null)} className="p-1 hover:bg-white/10 rounded-full text-stone-300">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1">
              {/* Distance Warning Banner */}
              {(() => {
                const dist = getDistanceInMeters(
                  selectedMapJob.customer_lat,
                  selectedMapJob.customer_lng,
                  selectedMapJob.cleaner_lat,
                  selectedMapJob.cleaner_lng
                );
                const isOnSite = dist <= 50;
                return (
                  <div className={`p-4 rounded-2xl border flex items-center justify-between ${isOnSite ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
                    <div className="flex items-center gap-3">
                      <ShieldCheck className={`w-6 h-6 shrink-0 ${isOnSite ? 'text-emerald-600' : 'text-amber-600'}`} />
                      <div className="text-xs">
                        <p className="font-bold">
                          ระยะห่างระหว่างหมุดบ้านลูกค้า กับ GPS แม่บ้าน: <span className="text-sm font-serif underline">{dist} เมตร</span>
                        </p>
                        <p className="mt-0.5 text-stone-600">
                          {isOnSite
                            ? '✓ แม่บ้านอยู่ในรัศมีบ้านลูกค้าตรงตำแหน่งจริง (ยืนยันความปลอดภัยสำเร็จ)'
                            : '⚠️ พิกัดแม่บ้านอยู่ห่างจากหมุดบ้านลูกค้า กรุณาตรวจสอบสิทธิ์พิกัด'}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&origin=${selectedMapJob.cleaner_lat},${selectedMapJob.cleaner_lng}&destination=${selectedMapJob.customer_lat},${selectedMapJob.customer_lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary" size="sm" className="whitespace-nowrap shadow-md">
                        เปิดใน Google Maps <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </a>
                  </div>
                );
              })()}

              {/* Coordinates Editor */}
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-3 text-xs">
                <h4 className="font-bold text-stone-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" /> ตั้งค่าหมุดบ้านลูกค้า (Customer House Location)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">ละติจูด (Latitude)</label>
                    <input
                      type="number"
                      step="any"
                      value={selectedMapJob.customer_lat}
                      onChange={(e) =>
                        updateCustomerPin(selectedMapJob.id, parseFloat(e.target.value) || 0, selectedMapJob.customer_lng)
                      }
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-stone-900 font-mono focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">ลองจิจูด (Longitude)</label>
                    <input
                      type="number"
                      step="any"
                      value={selectedMapJob.customer_lng}
                      onChange={(e) =>
                        updateCustomerPin(selectedMapJob.id, selectedMapJob.customer_lat, parseFloat(e.target.value) || 0)
                      }
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-stone-900 font-mono focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Embedded Interactive Google Maps View */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-stone-700 flex items-center justify-between">
                  <span>แผนที่จำลองตำแหน่งเรียลไทม์ (Google Maps Embed View)</span>
                  <span className="text-[11px] text-primary">🟢 หมุดลูกค้า | 🔵 GPS แม่บ้าน</span>
                </p>
                <div className="w-full h-80 rounded-2xl overflow-hidden border border-stone-300 shadow-inner bg-stone-200">
                  <iframe
                    title="Google Maps Location Verification"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    src={`https://maps.google.com/maps?q=${selectedMapJob.customer_lat},${selectedMapJob.customer_lng}&z=16&output=embed`}
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
              <Button variant="primary" onClick={() => setSelectedMapJob(null)}>
                บันทึกตำแหน่งหมุดเรียบร้อย
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
