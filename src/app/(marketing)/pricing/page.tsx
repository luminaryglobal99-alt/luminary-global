'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Eye, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function PricingPage() {
  const [selectedPoster, setSelectedPoster] = useState<{ title: string; src: string } | null>(null);

  const softCleanTiers = [
    { size: 'บ้านขนาดเล็ก', area: '50 - 100 ตร.ว.', regular: 3000, promo: 2500, detail: 'ทำความสะอาดทั่วบ้าน, ห้องนอน, ห้องน้ำ, ห้องครัว, เช็ดฝุ่น เฟอร์นิเจอร์' },
    { size: 'บ้านขนาดกลาง', area: '101 - 200 ตร.ว.', regular: 5500, promo: 4500, detail: 'ทำความสะอาดทั่วบ้าน, ห้องนอน, ห้องน้ำ, ห้องครัว, เช็ดฝุ่น เฟอร์นิเจอร์' },
    { size: 'บ้านขนาดใหญ่', area: '201 - 300 ตร.ว.', regular: 9000, promo: 7500, detail: 'ทำความสะอาดทั่วบ้าน, ห้องนอน, ห้องน้ำ, ห้องครัว, เช็ดฝุ่น เฟอร์นิเจอร์' },
    { size: 'บ้านขนาดพิเศษ', area: 'มากกว่า 300 ตร.ว.', regular: 0, promo: 0, custom: 'เริ่มต้น 50 บาท/ตร.ว.', detail: 'บริการปรับตามความต้องการ, ทีมงานมืออาชีพ, อุปกรณ์ครบมาตรฐาน' },
  ];

  const officialPosters = [
    { title: 'โปรโมชั่นบริการทำความสะอาดบ้าน Soft Cleaning', src: '/promotions/soft-cleaning-pricing.jpg' },
    { title: 'รายละเอียดแพ็กเกจ Deep Cleaning เชิงลึก', src: '/promotions/deep-cleaning-pricing.jpg' },
    { title: 'รายละเอียดบริการ Big Cleaning ครั้งใหญ่', src: '/promotions/big-cleaning-pricing.jpg' },
  ];

  return (
    <div className="min-h-screen bg-pearl text-stone-900">
      {/* Header */}
      <div className="bg-forest text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Official Pricing Catalog</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-2">อัตราค่าบริการและโปรโมชั่นพิเศษ</h1>
          <p className="mt-3 text-stone-300 text-sm max-w-xl mx-auto">
            ราคาโปรโมชั่นทางการ บริการทำความสะอาดบ้าน พูลวิลล่า และสำนักงาน พร้อมเซ็ทน้ำยาเฉพาะทาง 7 ชนิด
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Soft Cleaning Promo Card Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> โปรโมชั่นบริการทำความสะอาดบ้าน (Soft Cleaning)
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">สะอาดครบ จบในครั้งเดียว (เริ่มต้น 50 บาท/ตร.ว.)</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softCleanTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:border-primary/60 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="bg-stone-50 p-3 rounded-2xl border border-stone-100">
                    <p className="font-serif font-bold text-stone-900 text-base">{tier.size}</p>
                    <p className="text-xs text-primary-dark font-semibold mt-0.5">{tier.area}</p>
                  </div>

                  <div className="pt-2">
                    {tier.custom ? (
                      <p className="text-xl font-serif font-bold text-forest">{tier.custom}</p>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-serif font-bold text-forest">฿{tier.promo.toLocaleString()}.-</span>
                        <span className="text-xs text-stone-400 line-through">ปกติ {tier.regular.toLocaleString()}.-</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {tier.detail}
                  </p>
                </div>

                <div className="pt-6">
                  <a href="https://line.me/R/ti/p/@muuhouse465" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button variant="primary" size="sm" className="w-full">
                      จองแพ็กเกจนี้ <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Poster Infographic Showcase */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 shadow-2xl border border-stone-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
              <Star className="w-3.5 h-3.5" /> Official Infographic Catalog
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary">ใบประกาศและโปสเตอร์ราคาอย่างเป็นทางการ</h3>
            <p className="text-xs text-stone-300">คลิกที่รูปภาพเพื่อเปิดดูใบราคาและขอบเขตงานฉบับเต็มความละเอียดสูง</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officialPosters.map((poster, index) => (
              <div
                key={index}
                onClick={() => setSelectedPoster(poster)}
                className="group cursor-pointer bg-stone-800 rounded-2xl overflow-hidden border border-stone-700 hover:border-primary transition-all shadow-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src={poster.src}
                    alt={poster.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="bg-black/70 backdrop-blur-sm p-3 rounded-full text-white">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="text-xs font-bold text-stone-200 group-hover:text-primary transition-colors">
                    {poster.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infographic Modal Popup */}
      {selectedPoster && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-stone-900 rounded-3xl border border-stone-700 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-stone-800 flex items-center justify-between">
              <h3 className="font-serif text-base font-bold text-primary">{selectedPoster.title}</h3>
              <button
                onClick={() => setSelectedPoster(null)}
                className="p-1.5 rounded-full hover:bg-stone-800 text-stone-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex justify-center bg-stone-950">
              <img
                src={selectedPoster.src}
                alt={selectedPoster.title}
                className="max-w-full h-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
