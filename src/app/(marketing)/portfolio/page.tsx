import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function PortfolioPage() {
  const galleries = [
    {
      title: 'งาน Deep Cleaning พูลวิลล่าหรู',
      type: 'Luxury Pool Villa',
      before: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
      description: 'ขัดลอกคราบตะกรันรอบขอบสระและกระจกตู้อาบน้ำ พร้อมเคลือบเงาพื้นหินอ่อนไร้กรด',
    },
    {
      title: 'งาน Post-Renovation ห้องชุด Duplex',
      type: 'Condominium',
      before: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      description: 'กำจัดฝุ่นก่อสร้าง PM 2.5 ในช่องแอร์ ลอกสติกเกอร์กระจก และทำความสะอาดเฟอร์นิเจอร์ Built-in',
    },
    {
      title: 'งาน Soft Cleaning ประจำรอบบ้านพักตากอากาศ',
      type: 'Private Residence',
      before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80',
      description: 'ฆ่าเชื้อจุดสัมผัสร่วม ล้างสุขภัณฑ์ และจัดเตียงมาตรฐานโรงแรม 5 ดาว',
    },
  ];

  return (
    <div className="min-h-screen bg-pearl text-stone-900">
      {/* Hero Banner */}
      <div className="bg-forest text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Verified Portfolio</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-2">ผลงานความสะอาดระดับมาสเตอร์พีซ</h1>
          <p className="mt-3 text-stone-300 text-sm max-w-xl mx-auto">
            ชมภาพผลงานจริง ก่อนและหลังการดูแลด้วยมาตรฐาน LUMINARY GLOBAL
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {galleries.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-primary-dark uppercase">{item.type}</span>
                  <h3 className="font-serif text-2xl font-bold text-forest mt-0.5">{item.title}</h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-medium">
                  <ShieldCheck className="w-4 h-4" /> ตรวจสอบมาตรฐาน 100%
                </div>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-stone-200 bg-stone-900 shadow-inner">
                    <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-amber-700/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      [BEFORE] สภาพก่อนทำความสะอาด
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-primary bg-stone-900 shadow-md">
                    <img src={item.after} alt="After" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-emerald-700/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      [AFTER] ผลงานหลังทำความสะอาด
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 bg-stone-50 p-4 rounded-xl border border-stone-100">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
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
