import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Navbar } from '../Navbar/Navbar';
import '../../styles/index.css'; // Pastikan path CSS sesuai dengan struktur proyek

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, { opacity: 0, x: 100, y: 0 }, { opacity: 1, x: 0, y: 0, duration: 2, ease: 'power4.out' });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <main ref={contentRef}>{children}</main>
    </>
  );
};

export default Layout;
