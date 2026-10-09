import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-pearl text-stone-900">
      {/* Header */}
      <div className="bg-forest text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Get in Touch</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-2">ติดต่อประเมินหน้างานและจองคิวบริการ</h1>
          <p className="mt-3 text-stone-300 text-sm max-w-xl mx-auto">
            ทีมงานพร้อมให้คำปรึกษาและเข้าสำรวจหน้างานฟรี ไม่มีข้อผูกมัด
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-forest">ช่องทางการติดต่อ LUMINARY GLOBAL</h2>
              <p className="text-sm text-stone-600 mt-2">
                สามารถติดต่อเราได้ทุกวัน ตั้งแต่เวลา 08:00 - 18:00 น. ผ่านช่องทางที่สะดวกด้านล่าง
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:0842479263"
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center space-x-4 hover:border-primary transition-all block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-stone-400">โทรศัพท์สายด่วน</p>
                  <p className="text-lg font-bold text-stone-800">084-2479263</p>
                </div>
              </a>

              <a
                href="https://line.me/R/ti/p/@muuhouse465"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center space-x-4 hover:border-emerald-400 transition-all block"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-stone-400">Line Official Account</p>
                  <p className="text-lg font-bold text-stone-800">@muuhouse465</p>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-stone-400">พื้นที่ให้บริการ</p>
                  <p className="text-sm font-bold text-stone-800">ภูเก็ต (เมือง, กะทู้, ถลาง, ฉลอง, ป่าตอง, เชิงทะเล, ราไวย์)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold text-forest">ขอรับการประเมินราคาเบื้องต้น</h3>
            <form className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-stone-700 mb-1">ชื่อ - นามสกุล หรือชื่อวิลล่า</label>
                <input type="text" placeholder="เช่น คุณวิภาดา (Villa Botanica)" className="w-full p-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-primary focus:outline-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-stone-700 mb-1">เบอร์โทรศัพท์</label>
                  <input type="tel" placeholder="08x-xxx-xxxx" className="w-full p-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block font-medium text-stone-700 mb-1">Line ID</label>
                  <input type="text" placeholder="ระบุ Line ID" className="w-full p-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block font-medium text-stone-700 mb-1">ประเภทบริการที่สนใจ</label>
                <select className="w-full p-3 rounded-xl border border-stone-200 bg-stone-50 focus:ring-2 focus:ring-primary focus:outline-none">
                  <option>Deep Cleaning (บิ๊กคลีนนิ่ง)</option>
                  <option>Soft Cleaning (ทำความสะอาดประจำรอบ)</option>
                  <option>Post-Renovation (หลังงานตกแต่ง/ก่อสร้าง)</option>
                  <option>พูลวิลล่า / จัดการแม่บ้านระยะยาว</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-stone-700 mb-1">ขนาดพื้นที่โดยประมาณ (ตร.ม.) และหมายเหตุเพิ่มเติม</label>
                <textarea rows={3} placeholder="เช่น บ้านเดี่ยว 2 ชั้น ขนาด 180 ตร.ม. ต้องการทำความสะอาดก่อนย้ายเข้า..." className="w-full p-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-primary focus:outline-none" />
              </div>

              <Button variant="primary" size="lg" className="w-full shadow-lg">
                ส่งข้อมูลขอใบเสนอราคา <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
