import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface PricingItem {
  size: string;
  area: string;
  regular: number;
  promo: number;
  custom?: string;
}

interface PricingPackage {
  category: string;
  subtitle: string;
  isPopular?: boolean;
  items: PricingItem[];
}

export default function PricingPage() {
  const packages: PricingPackage[] = [
    {
      category: 'Soft Cleaning',
      subtitle: 'ทำความสะอาดประจำรอบ / พูลวิลล่า',
      items: [
        { size: 'Studio / 1 Bedroom', area: 'ไม่เกิน 35 ตร.ม.', regular: 890, promo: 690 },
        { size: '2 Bedroom / Condo', area: '36 - 60 ตร.ม.', regular: 1290, promo: 990 },
        { size: 'Townhome / Small House', area: '61 - 120 ตร.ม.', regular: 1890, promo: 1490 },
        { size: 'Single House / Villa', area: '121 - 200 ตร.ม.', regular: 2890, promo: 2290 },
      ],
    },
    {
      category: 'Deep Cleaning',
      subtitle: 'บิ๊กคลีนนิ่งทุกซอกมุม / ย้ายเข้า-ออก',
      isPopular: true,
      items: [
        { size: 'Condo M', area: '30 - 50 ตร.ม.', regular: 2900, promo: 2400 },
        { size: 'Condo L / Duplex', area: '51 - 80 ตร.ม.', regular: 4200, promo: 3500 },
        { size: 'Townhome 2-3 ชั้น', area: '100 - 150 ตร.ม.', regular: 6500, promo: 5500 },
        { size: 'Luxury Villa / Pool Villa', area: '180 - 250 ตร.ม.', regular: 9500, promo: 7900 },
      ],
    },
    {
      category: 'Post-Renovation Cleaning',
      subtitle: 'เคลียร์ฝุ่นก่อสร้าง / หลังตกแต่งเสร็จ',
      items: [
        { size: 'Residential Area', area: 'เริ่มต้น 50 ตร.ม.', regular: 4500, promo: 3800 },
        { size: 'Commercial / Office', area: '100 - 200 ตร.ม.', regular: 8500, promo: 7200 },
        { size: 'Full House & Estate', area: '250 ตร.ม. ขึ้นไป', regular: 0, promo: 0, custom: 'ประเมินหน้างานฟรี' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-pearl text-stone-900">
      {/* Header */}
      <div className="bg-forest text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Transparent Pricing</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-2">อัตราค่าบริการและแพ็กเกจราคา</h1>
          <p className="mt-3 text-stone-300 text-sm max-w-xl mx-auto">
            ราคามาตรฐาน อุปกรณ์และน้ำยาเกรดพรีเมียมรวมอยู่ในแพ็กเกจ ไม่มีค่าใช้จ่ายแอบแฝง
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 bg-white border transition-all ${
                pkg.isPopular
                  ? 'border-2 border-primary shadow-xl relative ring-4 ring-primary/10'
                  : 'border-stone-200 shadow-sm'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-stone-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  แพ็กเกจแนะนำ
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-forest">{pkg.category}</h3>
                <p className="text-xs text-stone-500 mt-1">{pkg.subtitle}</p>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.items.map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-stone-800 text-sm">{item.size}</p>
                      <p className="text-[11px] text-stone-500">{item.area}</p>
                    </div>
                    <div className="text-right">
                      {item.custom ? (
                        <span className="text-xs font-bold text-primary">{item.custom}</span>
                      ) : (
                        <>
                          <p className="text-base font-bold text-forest">฿{item.promo.toLocaleString()}</p>
                          <p className="text-[11px] text-stone-400 line-through">฿{item.regular.toLocaleString()}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://line.me/R/ti/p/@muuhouse465" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant={pkg.isPopular ? 'primary' : 'outline'} size="md" className="w-full">
                  จองแพ็กเกจนี้ <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 bg-white p-8 rounded-2xl border border-stone-200">
          <h4 className="font-serif text-lg font-bold text-forest mb-4">ทุกแพ็กเกจครอบคลุม:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-700">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span>อุปกรณ์และน้ำยาเฉพาะทาง 7 ชนิด</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span>ถ่ายรูปตรวจสอบ Before/After GPS</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span>ประกันความเสียหายทรัพย์สิน</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span>รายงานผลแบบเรียลไทม์ใน 24 ชม.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
