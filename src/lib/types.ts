export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon_name: string;
  is_active: boolean;
  sort_order: number;
}

export interface Package {
  id: string;
  category: 'Soft Cleaning' | 'Deep Cleaning' | 'Post-Renovation';
  category_title: string;
  size_label: string;
  size_range: string;
  promo_price: number;
  regular_price: number;
  price_display: string;
}

export type JobStatus = 'PENDING' | 'ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED' | 'DISPUTED' | 'APPROVED';

export interface Job {
  id: string;
  job_code: string;
  customer_name: string;
  customer_phone: string;
  customer_address: string;
  service_type: string;
  package_title: string;
  cleaner_id?: string;
  cleaner_name?: string;
  status: JobStatus;
  scheduled_at: string;
  completed_at?: string;
  notes?: string;
}

export interface ChecklistItem {
  id: string;
  job_id: string;
  zone_name: string; // 'ห้องนอน', 'ห้องน้ำ', 'ห้องครัว', 'ห้องนั่งเล่น', 'ระเบียง'
  task_name: string;
  is_in_package: boolean;
  is_completed: boolean;
  material_limitations?: string; // เช่น "พื้นหินอ่อน ห้ามใช้น้ำยาเบอร์ 4"
  requires_photo: boolean;
  before_photo_url?: string;
  after_photo_url?: string;
  photo_metadata?: {
    timestamp: string;
    gps: string;
    operator: string;
  };
}

export type StaffStatus = 'AVAILABLE' | 'ON_JOB' | 'ON_LEAVE' | 'SUSPENDED';

export interface Staff {
  id: string;
  staff_code: string; // e.g. 'LMN-CLN-08'
  full_name: string;
  nickname: string;
  phone: string;
  avatar_url?: string;
  role: 'CLEANER' | 'TEAM_LEAD' | 'SUPERVISOR';
  skills: string[]; // e.g. ['Deep Clean', 'Pool Villa', 'Marble Polish', 'Post-Renovation']
  certified_chemicals: number[]; // e.g. [1, 2, 3, 4, 5, 6, 7]
  rating: number; // e.g. 4.9
  total_jobs_completed: number;
  status: StaffStatus;
  current_job_id?: string;
  joined_date: string;
  daily_earnings?: number;
  monthly_earnings?: number;
}
