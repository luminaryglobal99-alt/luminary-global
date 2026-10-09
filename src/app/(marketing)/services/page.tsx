import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Check, Sparkles, Droplets, Layers, Home, Building2, HardHat, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ServicesPage() {
  const cleaningAgents = [
    { id: 1, name: 'น้ำยาขจัดคราบไขมันและน้ำมัน (Degreaser)', surface: 'เตาอบ, ฮูดดูดควัน, ผนังครัว', note: 'สลายคราบเหนียวฝังลึก ไม่ทำลายผิวสแตนเลส' },
    { id: 2, name: 'น้ำยาล้างคราบตะกรันและหินปูน (Descaler)', surface: 'สุขภัณฑ์, ก๊อกน้ำ, ตู้อาบน้ำกระจก', note: 'สูตรกรดอ่อน ปลอดภัยต่อผิวเคลือบเซรามิก' },
    { id: 3, name: 'น้ำยาเช็ดกระจกและเคลือบเงา (Glass Polish)', surface: 'กระจกทุกประเภท, ราวระเบียงกระจก', note: 'ไร้รอยคราบน้ำ ป้องกันฝุ่นเกาะซ้ำ' },
    { id: 4, name: 'น้ำยาเคลือบและถนอมพื้นไม้แท้/ลามิเนต (Wood Care)', surface: 'พื้นไม้สัก, ปาร์เก้, ไม้เอ็นจิเนียร์', note: 'ค่า pH กลาง ไม่ทำให้ไม้บวมหรือซีดจาง' },
    { id: 5, name: 'น้ำยาทำความสะอาดหินธรรมชาติและหินอ่อน (Marble Care)', surface: 'หินอ่อน, แกรนิต, ทราเวอร์ทีน', note: 'สูตรไร้กรด 100% ป้องกันหินกัดกร่อน' },
    { id: 6, name: 'น้ำยาฆ่าเชื้อเกรดโรงพยาบาล (Hospital-Grade Disinfectant)', surface: 'จุดสัมผัสร่วม, ลูกบิด, สวิตช์ไฟ', note: 'ฆ่าเชื้อแบคทีเรียและไวรัส 99.9% ไร้กลิ่นฉุน' },
    { id: 7, name: 'น้ำยาขจัดคราบปูนและสีก่อสร้าง (Cement & Paint Remover)', surface: 'งานหลังรีโนเวท, กระเบื้องพอร์ซเลน', note: 'สูตรเฉพาะสลายละอองปูนและสีอย่างปลอดภัย' },
  ];

  return (
    <div className="min-h-screen bg-pearl text-stone-900">
      {/* Top Banner */}
      <div className="bg-forest text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Professional Services</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-2">บริการทำความสะอาดและมาตรฐานน้ำยา 7 ชนิด</h1>
          <p className="mt-4 text-stone-300 text-sm max-w-2xl">
            เราคัดสรรเทคนิคและน้ำยาเฉพาะทางเพื่อปกป้องทุกพื้นผิวในบ้าน วิลล่า และคอนโดมิเนียมของคุณ
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Details */}
        <div className="space-y-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest mb-3">1. Soft Cleaning</h3>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                การทำความสะอาดประจำรอบเพื่อสุขอนามัยที่สมบูรณ์แบบ เหมาะสำหรับบ้านพักอาศัยประจำ พูลวิลล่า และห้องเช่ารายวัน
              </p>
              <ul className="space-y-2.5 text-xs text-stone-700">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> ดูดฝุ่นและถูพื้นเก็บฝุ่นละเอียด</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> ล้างสุขภัณฑ์และฆ่าเชื้อห้องน้ำ</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> เช็ดคราบไขมันบนเคาน์เตอร์ครัว</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> จัดเก็บเตียงนอนและเปลี่ยนผ้าปู</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border-2 border-primary shadow-md relative">
              <div className="w-12 h-12 rounded-xl bg-forest text-primary flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest mb-3">2. Deep Cleaning</h3>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                การทำความสะอาดใหญ่แบบทุกตารางนิ้ว เหมาะสำหรับเตรียมเข้าอยู่ ย้ายออก หรือทำความสะอาดประจำรอบ 3-6 เดือน
              </p>
              <ul className="space-y-2.5 text-xs text-stone-700">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> ขัดลอกคราบตะกรันและคราบฝังแน่นร่องยาแนว</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> เช็ดรางเลื่อน ประตู หน้าต่าง มุ้งลวด</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> เช็ดภายในตู้ Built-in และลิ้นชัก</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> บันทึก Checklist Before/After ด้วยระบบ GPS</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest mb-3">3. Post-Renovation</h3>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                เคลียร์พื้นที่หลังงานช่างและตกแต่งภายใน กำจัดฝุ่นผงก่อสร้าง ละอองสี และคราบกาวอย่างมืออาชีพ
              </p>
              <ul className="space-y-2.5 text-xs text-stone-700">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> ลอกสติกเกอร์กระจกและคราบกาว</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> ขจัดคราบปูนและยาแนวกระเบื้อง</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> ดูดฝุ่นละอองขนาดเล็กบนฝ้าและช่องแอร์</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 7 Cleaning Agents Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Material Safety Standards</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest mt-1">
              น้ำยาทำความสะอาดเฉพาะทาง 7 ชนิด
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              แม่บ้านของเราได้รับการฝึกอบรมการเลือกใช้น้ำยาให้ถูกต้องตามวัสดุ เพื่อป้องกันการเกิดรอยด่างหรือความเสียหายต่อทรัพย์สินราคาแพง
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cleaningAgents.map((agent) => (
              <div key={agent.id} className="p-4 rounded-xl border border-stone-100 bg-stone-50/60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  #{agent.id}
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">{agent.name}</h4>
                  <p className="text-xs text-primary-dark font-medium mt-0.5">เหมาะสำหรับ: {agent.surface}</p>
                  <p className="text-xs text-stone-500 mt-1">{agent.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a href="https://line.me/R/ti/p/@muuhouse465" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg">
              นัดหมายประเมินหน้างานฟรี <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
