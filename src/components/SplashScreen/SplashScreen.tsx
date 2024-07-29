import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export const SplashScreen = () => {
  const navigate = useNavigate();
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Memastikan bahwa splashRef tidak null
    if (splashRef.current) {
      // Memulai animasi dan navigasi setelah animasi selesai
      gsap.to(splashRef.current, {
        opacity: 0,
        duration: 3,
        delay: 2,
        ease: 'power2.inOut',
        onComplete: () => {
          setTimeout(() => {
            navigate('/'); // Navigasi ke halaman beranda
          });
        },
      });
    }
  }, [navigate]);

  return (
    <div ref={splashRef} className="flex flex-col items-center justify-center fixed inset-0 bg-black text-white text-4xl">
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl m-2">Hello</div>
        <div className="relative w-full">
          <div className="loading-bar"></div>
        </div>
      </div>
    </div>
  );
};
