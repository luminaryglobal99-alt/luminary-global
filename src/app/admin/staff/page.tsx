'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  UserCheck,
  UserX,
  Clock,
  Star,
  ShieldCheck,
  Phone,
  Plus,
  Search,
  Filter,
  ArrowLeft,
  Award,
  Sparkles,
  MapPin,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { Staff } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function AdminStaffPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const staffList: Staff[] = [
    {
      id: 'st-01',
      staff_code: 'LMN-CLN-08',
      full_name: 'สมศรี มีสุข',
      nickname: 'สมศรี',
      phone: '084-112-9988',
      avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      role: 'TEAM_LEAD',
      skills: ['Deep Clean', 'Pool Villa', 'Marble Polish', 'Post-Renovation'],
      certified_chemicals: [1, 2, 3, 4, 5, 6, 7],
      rating: 4.95,
      total_jobs_completed: 142,
      status: 'ON_JOB',
      current_job_id: 'JOB-2026-001',
      joined_date: '15 ม.ค. 2024',
      daily_earnings: 1250,
      monthly_earnings: 32500,
    },
    {
      id: 'st-02',
      staff_code: 'LMN-CLN-03',
      full_name: 'พรทิพย์ สุวรรณโชติ',
      nickname: 'ทิพย์',
      phone: '089-332-1100',
      avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      role: 'CLEANER',
      skills: ['Deep Clean', 'Post-Renovation', 'Floor Buffing'],
      certified_chemicals: [1, 2, 3, 4, 6, 7],
      rating: 4.88,
      total_jobs_completed: 98,
      status: 'AVAILABLE',
      joined_date: '02 มิ.ย. 2024',
      daily_earnings: 0,
      monthly_earnings: 28400,
    },
    {
      id: 'st-03',
      staff_code: 'LMN-CLN-12',
      full_name: 'กมลวรรณ บุญเรือง',
      nickname: 'วรรณ',
      phone: '081-554-7722',
      avatar_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      role: 'CLEANER',
      skills: ['Soft Clean', 'Condo Turnover', 'Glass Polish'],
      certified_chemicals: [1, 2, 3, 4, 6],
      rating: 4.92,
      total_jobs_completed: 76,
      status: 'AVAILABLE',
      joined_date: '10 พ.ย. 2024',
      daily_earnings: 0,
      monthly_earnings: 24600,
    },
    {
      id: 'st-04',
      staff_code: 'LMN-CLN-15',
      full_name: 'นภาพร วงศ์ษา',
      nickname: 'นภา',
      phone: '090-887-3344',
      avatar_url: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80',
      role: 'CLEANER',
      skills: ['Soft Clean', 'Pool Villa'],
      certified_chemicals: [1, 2, 3],
      rating: 4.75,
      total_jobs_completed: 34,
      status: 'ON_LEAVE',
      joined_date: '01 ม.ค. 2025',
      daily_earnings: 0,
      monthly_earnings: 16200,
    },
  ];

  const filteredStaff = staffList.filter((s) => {
    const matchSearch =
      s.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.staff_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.skills.some((sk) => sk.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchStatus = statusFilter === 'ALL' || s.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const availableCount = staffList.filter((s) => s.status === 'AVAILABLE').length;
  const onJobCount = staffList.filter((s) => s.status === 'ON_JOB').length;
  const onLeaveCount = staffList.filter((s) => s.status === 'ON_LEAVE').length;

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 pb-16">
      {/* Admin Nav */}
      <header className="bg-forest text-white px-6 py-4 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-serif font-bold text-lg text-primary">LUMINARY ADMIN</span>
            <span className="text-xs text-stone-300">| ระบบจัดการพนักงาน & แม่บ้านมืออาชีพ</span>
          </div>
          <div className="flex items-center space-x-4 text-xs font-medium">
            <Link href="/admin/jobs" className="text-stone-300 hover:text-white">คิวงานทั้งหมด</Link>
            <Link href="/admin/staff" className="text-primary font-bold">จัดการพนักงาน</Link>
            <Link href="/admin/disputes" className="text-stone-300 hover:text-white">ข้อพิพาท & QA</Link>
            <Link href="/" className="text-stone-300 hover:text-white">หน้าเว็บหลัก</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-8 space-y-6">
        {/* Title & Quick Stats */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl font-bold text-forest flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" /> รายชื่อและสถานะพนักงาน (Staff & Cleaners)
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              ตรวจสอบความพร้อม ประวัติการรับงาน ทักษะเฉพาะทาง และใบรับรองน้ำยา 7 ชนิด
            </p>
          </div>
          <Button variant="primary" size="sm" onClick={() => setShowAddModal(true)}>
            <Plus className="w-4 h-4 mr-1.5" /> เพิ่มพนักงานใหม่
          </Button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-stone-400">พนักงานทั้งหมด</p>
              <p className="text-xl font-bold text-forest mt-0.5">{staffList.length} คน</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-stone-400">พร้อมรับงานทันที</p>
              <p className="text-xl font-bold text-emerald-700 mt-0.5">{availableCount} คน</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-stone-400">กำลังทำงานหน้างาน</p>
              <p className="text-xl font-bold text-sky-700 mt-0.5">{onJobCount} คน</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-stone-400">ลางาน / พักร้อน</p>
              <p className="text-xl font-bold text-stone-500 mt-0.5">{onLeaveCount} คน</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-500 flex items-center justify-center">
              <UserX className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ค้นหาชื่อ, รหัสพนักงาน, เบอร์โทร หรือทักษะ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-stone-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-xs p-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="ALL">สถานะทั้งหมด</option>
              <option value="AVAILABLE">พร้อมรับงาน (Available)</option>
              <option value="ON_JOB">กำลังทำงาน (On Job)</option>
              <option value="ON_LEAVE">ลางาน (On Leave)</option>
            </select>
          </div>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((staff) => (
            <div
              key={staff.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-sm space-y-4 hover:border-primary/40 transition-all"
            >
              {/* Profile Card Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={staff.avatar_url}
                    alt={staff.full_name}
                    className="w-12 h-12 rounded-xl object-cover border border-stone-200 shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-sm text-stone-900">{staff.full_name}</h3>
                      <span className="text-xs text-stone-500 font-medium">({staff.nickname})</span>
                    </div>
                    <p className="text-[11px] text-primary-dark font-mono font-semibold">{staff.staff_code}</p>
                  </div>
                </div>

                <Badge
                  variant={
                    staff.status === 'AVAILABLE'
                      ? 'green'
                      : staff.status === 'ON_JOB'
                      ? 'blue'
                      : 'gray'
                  }
                >
                  {staff.status === 'AVAILABLE'
                    ? 'พร้อมรับงาน'
                    : staff.status === 'ON_JOB'
                    ? 'กำลังปฏิบัติงาน'
                    : 'ลางาน'}
                </Badge>
              </div>

              {/* Stats & Rating */}
              <div className="grid grid-cols-2 gap-2 bg-stone-50 p-2.5 rounded-xl text-center text-xs">
                <div className="border-r border-stone-200/60">
                  <div className="flex items-center justify-center gap-1 text-amber-600 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{staff.rating}</span>
                  </div>
                  <p className="text-[10px] text-stone-400 mt-0.5">คะแนนรีวิว</p>
                </div>
                <div>
                  <p className="font-bold text-stone-800">{staff.total_jobs_completed} งาน</p>
                  <p className="text-[10px] text-stone-400 mt-0.5">งานที่สำเร็จ</p>
                </div>
              </div>

              {/* Skills & Certification */}
              <div className="space-y-2">
                <p className="text-[11px] font-semibold text-stone-600">ทักษะความเชี่ยวชาญ:</p>
                <div className="flex flex-wrap gap-1.5">
                  {staff.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Chemical Certifications */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 text-[11px] flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-primary" /> รับรองน้ำยา:
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <span
                      key={num}
                      title={`น้ำยาชนิดที่ ${num}`}
                      className={`w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center ${
                        staff.certified_chemicals.includes(num)
                          ? 'bg-primary text-forest-dark'
                          : 'bg-stone-200 text-stone-400'
                      }`}
                    >
                      {num}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact & Assignment Actions */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                <a href={`tel:${staff.phone}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    <Phone className="w-3.5 h-3.5 mr-1" /> {staff.phone}
                  </Button>
                </a>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setSelectedStaff(staff)}
                  className="text-xs"
                >
                  ดูโปรไฟล์
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Staff Detail Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl animate-in fade-in">
            <div className="flex items-start justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedStaff.avatar_url}
                  alt={selectedStaff.full_name}
                  className="w-14 h-14 rounded-2xl object-cover border border-primary/30"
                />
                <div>
                  <h3 className="font-serif font-bold text-lg text-forest">{selectedStaff.full_name}</h3>
                  <p className="text-xs text-primary-dark font-mono font-semibold">{selectedStaff.staff_code} | {selectedStaff.role}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStaff(null)}
                className="text-stone-400 hover:text-stone-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            {/* Detailed Stats */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 bg-stone-50 rounded-xl">
                <p className="text-stone-400">เข้าทำงานเมื่อ</p>
                <p className="font-semibold text-stone-800 mt-0.5">{selectedStaff.joined_date}</p>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl">
                <p className="text-stone-400">รายได้สะสมเดือนนี้</p>
                <p className="font-semibold text-emerald-700 mt-0.5">฿{selectedStaff.monthly_earnings?.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl">
                <p className="text-stone-400">คะแนนรีวิวเฉลี่ย</p>
                <p className="font-semibold text-amber-700 mt-0.5">⭐ {selectedStaff.rating}</p>
              </div>
            </div>

            {/* Chemical Training List */}
            <div className="space-y-2">
              <h4 className="font-bold text-xs text-stone-700">หลักสูตรน้ำยาทำความสะอาด 7 ชนิดที่ผ่านการรับรอง:</h4>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-600">
                <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> #1 Degreaser สลายไขมัน</p>
                <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> #2 Descaler ล้างตะกรัน</p>
                <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> #3 Glass Polish เคลือบกระจก</p>
                <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> #4 Wood Care ถนอมพื้นไม้</p>
                <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> #5 Marble Care หินอ่อนไร้กรด</p>
                <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> #6 Disinfectant ฆ่าเชื้อ 99.9%</p>
                <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> #7 Post-Reno ขจัดคราบปูน/สี</p>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-stone-100">
              <Button variant="outline" size="sm" onClick={() => setSelectedStaff(null)}>
                ปิดหน้าต่าง
              </Button>
              <Button variant="secondary" size="sm">
                มอบหมายงานด่วน (Assign Job)
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add Staff Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-forest">ลงทะเบียนพนักงานใหม่ (New Staff)</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-medium text-stone-700">ชื่อ - นามสกุล</label>
                <input type="text" placeholder="ระบุชื่อจริง นามสกุล" className="w-full mt-1 p-2.5 rounded-xl border border-stone-200" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-medium text-stone-700">ชื่อเล่น</label>
                  <input type="text" placeholder="ชื่อเล่น" className="w-full mt-1 p-2.5 rounded-xl border border-stone-200" />
                </div>
                <div>
                  <label className="font-medium text-stone-700">เบอร์โทรศัพท์</label>
                  <input type="tel" placeholder="08x-xxx-xxxx" className="w-full mt-1 p-2.5 rounded-xl border border-stone-200" />
                </div>
              </div>
              <div>
                <label className="font-medium text-stone-700">ตำแหน่งงาน</label>
                <select className="w-full mt-1 p-2.5 rounded-xl border border-stone-200 bg-stone-50">
                  <option value="CLEANER">แม่บ้านประจำทีม (Cleaner)</option>
                  <option value="TEAM_LEAD">หัวหน้าชุดปฏิบัติงาน (Team Lead)</option>
                  <option value="SUPERVISOR">ผู้ตรวจงานคุณภาพ (Supervisor)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-stone-100">
              <Button variant="outline" size="sm" onClick={() => setShowAddModal(false)}>
                ยกเลิก
              </Button>
              <Button variant="primary" size="sm" onClick={() => setShowAddModal(false)}>
                บันทึกข้อมูลพนักงาน
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
