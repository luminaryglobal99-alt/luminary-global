'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Mail, ArrowRight, CheckCircle2, User, KeyRound } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/cleaner/dashboard`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'ไม่สามารถเข้าสู่ระบบด้วย Google ได้' });
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      setMessage({ type: 'success', text: 'เข้าสู่ระบบสำเร็จ กำลังนำท่านเข้าสู่ระบบ...' });
      setTimeout(() => {
        window.location.href = '/cleaner/dashboard';
      }, 1000);
    } catch (err: any) {
      setMessage({ type: 'error', text: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง (หรือยังไม่ได้เปิดใช้งานบัญชี)' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md bg-stone-800/90 border border-stone-700/80 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative z-10 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center space-x-3">
              <Image src="/logo.png" alt="Luminary Global Logo" width={48} height={48} className="w-12 h-12 object-contain" />
              <div className="text-left">
                <h1 className="text-xl font-bold tracking-wider text-white">LUMINARY</h1>
                <p className="text-[10px] text-primary tracking-[0.25em] font-semibold uppercase">GLOBAL LUXURY</p>
              </div>
            </div>
          </Link>
          <p className="text-xs text-stone-400 font-medium pt-1">
            ระบบเข้าสู่ระบบความปลอดภัยสูงสำหรับแม่บ้าน ลูกค้า และแอดมิน
          </p>
        </div>

        {message && (
          <div
            className={`p-3.5 rounded-2xl text-xs font-semibold flex items-center gap-2 ${
              message.type === 'success' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' : 'bg-rose-950/80 text-rose-300 border border-rose-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{message.text}</span>
          </div>
        )}

        {/* Google OAuth Login Button */}
        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full py-3.5 px-4 bg-white text-stone-900 font-semibold rounded-2xl hover:bg-stone-100 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-[0.99] disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>เข้าสู่ระบบด้วย Google Account</span>
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-stone-700 w-full" />
          <span className="bg-stone-800 px-3 text-[11px] text-stone-400 font-medium uppercase tracking-wider">
            หรือเข้าด้วยรหัสผ่าน
          </span>
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span>อีเมล (Email)</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@luminaryglobal.com"
              className="w-full bg-stone-900/80 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-primary" />
              <span>รหัสผ่าน (Password)</span>
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-stone-900/80 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <Button variant="primary" size="md" className="w-full" disabled={loading}>
            {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ (Sign In)'}
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </form>

        {/* Quick Portal Switcher */}
        <div className="pt-2 border-t border-stone-700/60 flex items-center justify-between text-xs text-stone-400">
          <Link href="/cleaner/dashboard" className="hover:text-primary transition-colors">
            👉 โหมดแม่บ้าน (Cleaner)
          </Link>
          <Link href="/admin/jobs" className="hover:text-primary transition-colors">
            👉 โหมดแอดมิน (Admin)
          </Link>
        </div>
      </div>
    </div>
  );
}
