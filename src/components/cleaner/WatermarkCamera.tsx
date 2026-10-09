'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Camera, RefreshCw, Check, X, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface WatermarkCameraProps {
  jobId: string;
  phase: 'BEFORE' | 'AFTER';
  taskName: string;
  onCapture: (photoUrl: string, metadata: { timestamp: string; gps: string; operator: string }) => void;
  onClose: () => void;
}

export const WatermarkCamera: React.FC<WatermarkCameraProps> = ({
  jobId,
  phase,
  taskName,
  onCapture,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [gpsLocation, setGpsLocation] = useState<string>('กำลังระบุพิกัด GPS...');
  const [timestampStr, setTimestampStr] = useState<string>('');
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // 1. ขอพิกัด GPS
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(6);
          const lng = pos.coords.longitude.toFixed(6);
          setGpsLocation(`Lat: ${lat}, Lng: ${lng}`);
        },
        () => {
          setGpsLocation('GPS: ไม่สามารถระบุได้ (Indoor)');
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      setGpsLocation('GPS: ไม่รองรับบนอุปกรณ์นี้');
    }
  }, []);

  // 2. เปิดกล้อง
  useEffect(() => {
    let currentStream: MediaStream | null = null;
    const startCamera = async () => {
      try {
        setErrorMsg(null);
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: facingMode }, width: { ideal: 1920 }, height: { ideal: 1080 } },
          audio: false,
        });
        currentStream = mediaStream;
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error('Camera access error:', err);
        setErrorMsg('ไม่สามารถเข้าถึงกล้องได้ กรุณาอนุญาตสิทธิ์การใช้งานกล้อง');
      }
    };

    startCamera();

    return () => {
      if (currentStream) {
        currentStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [facingMode]);

  // 3. กดถ่ายรูปและประทับลายน้ำลงบน Canvas
  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;
    canvas.width = width;
    canvas.height = height;

    // วาดภาพต้นฉบับ
    ctx.drawImage(video, 0, 0, width, height);

    // กำหนดเวลา
    const now = new Date();
    const formattedTime = now.toLocaleString('th-TH', {
      timeZone: 'Asia/Bangkok',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    setTimestampStr(formattedTime);

    // วาดแถบ Watermark ด้านล่าง
    const bannerHeight = Math.max(90, Math.floor(height * 0.12));
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)'; // Navy dark
    ctx.fillRect(0, height - bannerHeight, width, bannerHeight);

    // ขอบทองด้านบนแถบ
    ctx.fillStyle = '#D4AF37';
    ctx.fillRect(0, height - bannerHeight, width, 4);

    // ข้อความหัวข้อ
    const fontSizeTitle = Math.max(18, Math.floor(bannerHeight * 0.28));
    const fontSizeBody = Math.max(14, Math.floor(bannerHeight * 0.22));

    ctx.font = `bold ${fontSizeTitle}px sans-serif`;
    ctx.fillStyle = '#D4AF37'; // Champagne Gold
    ctx.fillText(`✨ LUMINARY GLOBAL | หลักฐานงาน [${phase}]`, 24, height - bannerHeight + fontSizeTitle + 12);

    // รายละเอียด Metadata
    ctx.font = `${fontSizeBody}px sans-serif`;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(`📋 ${taskName} (Job: #${jobId})`, 24, height - bannerHeight + fontSizeTitle + fontSizeBody + 20);
    ctx.fillText(`🕒 ${formattedTime} | 📍 ${gpsLocation}`, 24, height - 16);

    const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
    setCapturedImage(dataUrl);
  };

  const handleConfirm = () => {
    if (capturedImage) {
      onCapture(capturedImage, {
        timestamp: timestampStr,
        gps: gpsLocation,
        operator: 'Cleaner 01',
      });
    }
  };

  const handleRetake = () => {
    setCapturedImage(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-between p-4 text-white">
      {/* Header */}
      <div className="w-full flex items-center justify-between py-2 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span className="font-semibold text-sm">Watermark Evidence Camera</span>
          <span className={`text-xs px-2 py-0.5 rounded font-bold ${phase === 'BEFORE' ? 'bg-amber-600' : 'bg-emerald-600'}`}>
            {phase}
          </span>
        </div>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 text-stone-300">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Viewfinder / Preview */}
      <div className="relative w-full max-w-lg aspect-[3/4] bg-stone-900 rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl">
        {errorMsg ? (
          <div className="text-center p-6 text-rose-400">
            <p>{errorMsg}</p>
          </div>
        ) : !capturedImage ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            {/* Realtime Live Metadata HUD */}
            <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-xs space-y-1">
              <div className="text-primary font-bold flex items-center gap-1">
                <span>LUMINARY GLOBAL [{phase}]</span>
              </div>
              <div className="flex items-center gap-1 text-stone-300">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>Real-time GPS & Time Watermark Active</span>
              </div>
              <div className="flex items-center gap-1 text-stone-300 truncate">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="truncate">{gpsLocation}</span>
              </div>
            </div>
          </>
        ) : (
          <img src={capturedImage} alt="Captured preview" className="w-full h-full object-contain" />
        )}
        <canvas ref={canvasRef} className="hidden" />
      </div>

      {/* Bottom Controls */}
      <div className="w-full max-w-lg py-4 flex items-center justify-around">
        {!capturedImage ? (
          <>
            <button
              onClick={() => setFacingMode((prev) => (prev === 'environment' ? 'user' : 'environment'))}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              title="สลับกล้อง"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button
              onClick={takePhoto}
              className="w-18 h-18 bg-white p-1 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
              <div className="w-16 h-16 rounded-full border-4 border-primary bg-stone-100 flex items-center justify-center">
                <Camera className="w-8 h-8 text-stone-900" />
              </div>
            </button>
            <div className="w-11" /> {/* Spacer */}
          </>
        ) : (
          <div className="flex items-center gap-4 w-full px-4">
            <Button variant="outline" onClick={handleRetake} className="flex-1 text-white border-white/30 hover:bg-white/10">
              <RefreshCw className="w-4 h-4 mr-2" /> ถ่ายใหม่
            </Button>
            <Button variant="success" onClick={handleConfirm} className="flex-1">
              <Check className="w-4 h-4 mr-2" /> ยืนยันรูปภาพ
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
