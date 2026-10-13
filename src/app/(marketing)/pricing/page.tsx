import React from 'react';
import { ArrowRight, Droplets, Phone, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// ซ่อนโปสเตอร์ราคาเดิม (7659_0 / deep / big · ราคา ตร.ว.) 13 ต.ค. ตามพี่ไอโกะยืนยันหน่วย ตร.ม.
// ไฟล์รูปยังอยู่ใน public/promotions/ ห้ามลบ

const PHONE_DISPLAY = '084-2479263';
const PHONE_HREF = 'tel:0842479263';
const LINE_URL = 'https://line.me/R/ti/p/@muuhouse465';

// ราคายืนยันจากพี่ไอโกะ (COO Luminary) + พี่หยัด 2026-10-13 · หน่วย บาท/ตร.ม.
const services = [
  { name: 'Soft Cleaning', price: 50, note: 'ทำความสะอาดแบบเบา ๆ และสม่ำเสมอ' },
  { name: 'Deep Cleaning', price: 70, note: 'ทำความสะอาดลึกทุกซอกทุกมุม' },
  { name: 'Big Cleaning', price: 80, note: 'ขั้นต่ำ 50 ตร.ม.' },
  { name: 'หลังรีโนเวท (Post-Renovation)', price: 70, note: 'กำจัดฝุ่นผงก่อสร้าง ละอองสี และคราบกาว' },
];

// ตารางแพ็กเกจเหมาน้ำท่วม จากพี่ไอโกะ (LINE ~14:40) · พี่หยัด "ตามนั้น" 14:45 · ขนาดบ้านเป็น ตร.ว. ตามต้นฉบับ
const floodPackages = [
  { size: 'Size S', area: 'ไม่เกิน 30 ตร.ว.', price: '7,900 บาท' },
  { size: 'Size M', area: '31–50 ตร.ว.', price: '9,900 บาท' },
  { size: 'Size L', area: '51–70 ตร.ว.', price: '11,900 บาท' },
  { size: 'Size XL', area: '71–100 ตร.ว.', price: '14,900 บาท' },
  { size: 'Size XXL', area: '101–150 ตร.ว.', price: '18,900 บาท' },
  { size: 'Size VIP', area: 'มากกว่า 150 ตร.ว.', price: 'ประเมินราคาหน้างาน' },
];

const floodIncluded = [
  'ทำความสะอาดภายในบ้านชั้น 1',
  'ขัดพื้นภายนอกบ้านด้วยเครื่องขัดตามความเหมาะสม',
  'ขจัดคราบโคลนและสิ่งสกปรก',
  'เก็บและจัดเรียงสิ่งของ',
  'คัดแยกและทิ้งขยะตามเงื่อนไข',
  'เช็ดกระจก ขอบบัว มุม และซอกต่าง ๆ',
  'ทำความสะอาดจุดที่พบเชื้อรา',
  'บริการอบโอโซนตามความเหมาะสม',
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-pearl text-stone-900">
      {/* Header */}
      <div className="bg-forest text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Official Pricing Catalog</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-2">อัตราค่าบริการ</h1>
          <p className="mt-3 text-stone-300 text-sm max-w-xl mx-auto">
            ราคาต่อพื้นที่ใช้สอย (บาท/ตร.ม.) สำหรับบริการทำความสะอาดบ้าน พูลวิลล่า คอนโด และสำนักงาน
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* บริการราคาต่อ ตร.ม. */}
        <div>
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> ราคาบริการทำความสะอาด
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">สะอาดครบ จบในครั้งเดียว</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:border-primary/60 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <p className="font-serif font-bold text-stone-900 text-base">{s.name}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif font-bold text-forest">฿{s.price}</span>
                    <span className="text-xs text-stone-500">บาท/ตร.ม.</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">{s.note}</p>
                </div>
                <div className="pt-6">
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button variant="primary" size="sm" className="w-full">
                      สอบถามบริการนี้ <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ทำความสะอาดหลังน้ำท่วม · แพ็กเกจเหมา */}
        <div id="flood" className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-bold mb-2">
              <Droplets className="w-3.5 h-3.5 text-primary" /> บริการใหม่
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">ทำความสะอาดหลังน้ำท่วม</h2>
            <p className="text-sm text-stone-600 mt-2">ราคาเป็นแพ็กเกจแบบเหมาคอร์ส · สอบถามเพิ่มเติม {PHONE_DISPLAY}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {floodPackages.map((p) => (
              <div key={p.size} className="rounded-2xl border border-stone-200 bg-stone-50/60 p-5">
                <p className="font-serif font-bold text-forest text-lg">{p.size}</p>
                <p className="text-xs text-primary-dark font-semibold mt-0.5">ขนาดบ้าน {p.area}</p>
                <p className="mt-3 font-serif text-xl font-bold text-stone-900">{p.price}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-forest">ทุกแพ็กเกจรวม</h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {floodIncluded.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={PHONE_HREF}>
              <Button variant="primary" size="md">
                <Phone className="w-4 h-4 mr-2" /> โทร {PHONE_DISPLAY}
              </Button>
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">
                สอบถามทาง LINE <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
