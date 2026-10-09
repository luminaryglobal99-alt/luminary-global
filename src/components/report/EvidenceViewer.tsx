'use client';

import React, { useState } from 'react';
import { Columns2, Sliders, MapPin, Clock, AlertTriangle, CheckCircle, ZoomIn } from 'lucide-react';
import { ChecklistItem } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';

interface EvidenceViewerProps {
  item: ChecklistItem;
}

export const EvidenceViewer: React.FC<EvidenceViewerProps> = ({ item }) => {
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const beforePhoto = item.before_photo_url || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80';
  const afterPhoto = item.after_photo_url || 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80';

  return (
    <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
      {/* Header Bar */}
      <div className="p-4 border-b border-stone-100 flex flex-wrap items-center justify-between gap-2 bg-stone-50/50">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary-dark">
              {item.zone_name}
            </span>
            <h4 className="font-semibold text-stone-800 text-sm md:text-base">{item.task_name}</h4>
          </div>
          {item.material_limitations && (
            <p className="text-xs text-amber-700 mt-1 flex items-center gap-1 font-medium">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              ข้อจำกัดวัสดุ: {item.material_limitations}
            </p>
          )}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-stone-200/70 p-1 rounded-lg text-xs">
          <button
            onClick={() => setViewMode('slider')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              viewMode === 'slider' ? 'bg-white shadow text-stone-900' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 inline mr-1" /> สไลด์เปรียบเทียบ
          </button>
          <button
            onClick={() => setViewMode('side-by-side')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              viewMode === 'side-by-side' ? 'bg-white shadow text-stone-900' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Columns2 className="w-3.5 h-3.5 inline mr-1" /> เทียบ 2 ฝั่ง
          </button>
        </div>
      </div>

      {/* Comparison Area */}
      <div className="p-4">
        {viewMode === 'slider' ? (
          <div className="relative w-full aspect-[16/10] max-h-[420px] rounded-lg overflow-hidden bg-stone-900 select-none">
            {/* After Image (Full background) */}
            <img
              src={afterPhoto}
              alt="After cleaning"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-emerald-700/85 text-white text-xs font-bold px-2.5 py-1 rounded shadow">
              [AFTER] หลังทำความสะอาด
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={beforePhoto}
                alt="Before cleaning"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '100%' }}
              />
              <div className="absolute top-3 left-3 bg-amber-700/85 text-white text-xs font-bold px-2.5 py-1 rounded shadow">
                [BEFORE] ก่อนทำความสะอาด
              </div>
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white border-2 border-primary text-stone-800 flex items-center justify-center shadow-lg text-xs font-bold">
                ↔
              </div>
            </div>

            {/* Hidden Range Input for Slider */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-10"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Before Card */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-stone-200 bg-stone-100">
              <img src={beforePhoto} alt="Before" className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-amber-700/85 text-white text-xs font-bold px-2 py-0.5 rounded">
                [BEFORE] ก่อนทำความสะอาด
              </div>
            </div>
            {/* After Card */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-stone-200 bg-stone-100">
              <img src={afterPhoto} alt="After" className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-emerald-700/85 text-white text-xs font-bold px-2 py-0.5 rounded">
                [AFTER] หลังทำความสะอาด
              </div>
            </div>
          </div>
        )}

        {/* Evidence Verification Metadata Footer */}
        <div className="mt-3 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between text-xs text-stone-500 gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-primary" /> {item.photo_metadata?.timestamp || '2026-10-09 11:30 น.'}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-primary" /> {item.photo_metadata?.gps || 'GPS: Lat 7.8804, Lng 98.3923'}
            </span>
          </div>
          <div className="flex items-center gap-1 text-emerald-600 font-medium">
            <CheckCircle className="w-3.5 h-3.5" /> ตรวจสอบลายน้ำ Canvas ดิจิทัลถูกต้อง
          </div>
        </div>
      </div>
    </div>
  );
};
