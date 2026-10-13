import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest text-white pt-16 pb-12 border-t border-forest-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Official Brand Logo & Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="LUMINARY GLOBAL Logo"
                className="h-16 w-auto object-contain bg-white/90 p-2 rounded-xl shadow-md"
              />
            </Link>
            <p className="text-xs text-stone-300 leading-relaxed">
              ผู้นำบริการทำความสะอาดระดับพรีเมียม มาตรฐานโรงแรม 5 ดาว สำหรับบ้านหรู คอนโดมิเนียม และพูลวิลล่า พร้อมระบบตรวจสอบภาพถ่ายดิจิทัล 100%
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-primary text-sm tracking-wide">บริการของเรา</h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><Link href="/services" className="hover:text-primary transition-colors">Soft Cleaning (ประจำรอบ)</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Deep Cleaning (บิ๊กคลีนนิ่ง)</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Post-Renovation (หลังรีโนเวท)</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">น้ำยาเฉพาะทาง 7 ชนิด</Link></li>
            </ul>
          </div>

          {/* Col 3: Portals */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-primary text-sm tracking-wide">ระบบภายในองค์กร</h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><Link href="/cleaner/dashboard" className="hover:text-primary transition-colors">แอปแม่บ้านหน้างาน (Cleaner PWA)</Link></li>
              <li><Link href="/cleaner/profile" className="hover:text-primary transition-colors">บัตรพนักงาน & ใบรับรองน้ำยา</Link></li>
              <li><Link href="/admin/jobs" className="hover:text-primary transition-colors">ระบบจัดการคิวงาน (Admin Jobs)</Link></li>
              <li><Link href="/admin/staff" className="hover:text-primary transition-colors">ระบบจัดการพนักงาน (Staff CMS)</Link></li>
              <li><Link href="/admin/disputes" className="hover:text-primary transition-colors">ศูนย์ตรวจสอบข้อพิพาท (QA)</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-primary text-sm tracking-wide">ติดต่อประเมินราคา</h4>
            <div className="space-y-2 text-xs text-stone-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>โทร: 084-2479263</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-white font-bold text-[9px] flex items-center justify-center shrink-0">L</span>
                <span>Line OA: @muuhouse465</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>พื้นที่ให้บริการ: สมุทรปราการ</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© 2026 LUMINARY GLOBAL. All rights reserved.</p>
          <p className="flex items-center gap-1 text-primary font-medium">
            <ShieldCheck className="w-4 h-4" /> 5-Star Luxury Hospitality Standard
          </p>
        </div>
      </div>
    </footer>
  );
};
