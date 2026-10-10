import React from 'react';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Clock, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function MarketingLandingPage() {
  return (
    <div className="min-h-screen bg-pearl text-stone-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 bg-gradient-to-b from-stone-100 via-pearl to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary-dark text-xs font-semibold mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>มาตรฐานความสะอาดระดับโรงแรม 5 ดาว</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-tight tracking-tight">
                ยกระดับพื้นที่ของคุณ สู่ความสะอาดสมบูรณ์แบบ
              </h1>
              <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed">
                บริการทำความสะอาดระดับพรีเมียม Soft Clean, Deep Clean และโปรแกรมพิเศษหลังรีโนเวท 
                ด้วยทีมงานมืออาชีพ ระบบตรวจสอบ Checklist โปร่งใส และน้ำยาเฉพาะทาง 7 ชนิด ถนอมทุกพื้นผิว
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="https://line.me/R/ti/p/@muuhouse465" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg" className="shadow-xl">
                    แอดไลน์จองคิวงาน <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="tel:0842479263">
                  <Button variant="outline" size="lg">
                    <Phone className="w-4 h-4 mr-2" /> โทร 084-2479263
                  </Button>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-stone-200/80">
                <div>
                  <p className="text-2xl font-serif font-bold text-primary">7 ชนิด</p>
                  <p className="text-xs text-stone-500 mt-0.5">น้ำยาเฉพาะทางถนอมพื้นผิว</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-forest">100%</p>
                  <p className="text-xs text-stone-500 mt-0.5">ภาพถ่าย Before/After GPS</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-primary">5-Star</p>
                  <p className="text-xs text-stone-500 mt-0.5">มาตรฐานโรงแรม & พูลวิลล่า</p>
                </div>
              </div>
            </div>

            {/* Right Official Emblem Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-6 rounded-3xl bg-white shadow-2xl border border-stone-200/80 max-w-sm w-full text-center">
                <img
                  src="/logo.png"
                  alt="LUMINARY GLOBAL Official Logo"
                  className="w-full h-auto object-contain mx-auto drop-shadow-md"
                />
                <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500">
                  <p className="font-bold text-forest">LUMINARY GLOBAL BRANDING</p>
                  <p className="text-[11px] mt-0.5">บริการทำความสะอาดครบวงจร ระดับองค์กร</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-forest">บริการระดับพรีเมียมของเรา</h2>
            <p className="mt-3 text-stone-600 text-sm">คัดสรรโปรแกรมทำความสะอาดที่ตอบโจทย์อสังหาริมทรัพย์ทุกรูปแบบ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl border border-stone-200 bg-stone-50/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-6">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-forest mb-3">Soft Cleaning</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                ทำความสะอาดประจำรอบ ดูดฝุ่น ถูพื้น เช็ดคราบไขมันในครัว ล้างสุขภัณฑ์ เปลี่ยนผ้าปูที่นอน เหมาะสำหรับอยู่อาศัยต่อเนื่องและพูลวิลล่า
              </p>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> เก็บขยะและทำความสะอาดทุกโซน</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> ฆ่าเชื้อจุดสัมผัสร่วม</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl border-2 border-primary bg-stone-900 text-white relative shadow-xl">
              <div className="absolute top-4 right-4 bg-primary text-forest-dark font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                ยอดนิยม
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary text-stone-900 flex items-center justify-center font-bold text-xl mb-6">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Deep Cleaning</h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                บิ๊กคลีนนิ่งเจาะลึกทุกซอกมุม ขัดลอกคราบฝังแน่นในร่องกระเบื้อง กระจก รางเลื่อน ประตูหน้าต่าง เหมาะสำหรับการย้ายเข้า-ออก
              </p>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> ใช้น้ำยาเฉพาะทางแยกตามพื้นผิว</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> บันทึก Checklist Before/After ครบทุกห้อง</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl border border-stone-200 bg-stone-50/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-forest text-white flex items-center justify-center font-bold text-xl mb-6">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-forest mb-3">Post-Renovation Cleaning</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                เก็บกวาดฝุ่นก่อสร้าง คราบปูน ยาแนว คราบสีกระเด็น และเศษวัสดุตกแต่ง ด้วยเครื่องดูดฝุ่นอุตสาหกรรมและเทคนิคถนอมวัสดุใหม่
              </p>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> ลอกสติกเกอร์และฟิล์มกระจก</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> เคลียร์ฝุ่นละเอียด PM 2.5 ในทุกมุม</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
