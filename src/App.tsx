import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Article, About, Gallery, Content } from './pages';
import { SplashScreen, Layout } from './components/index';
import SocialMedia from './pages/Social Media/SocialMedia';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showMain, setShowMain] = useState(false); // State baru untuk mengontrol tampilan halaman utama

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Set showMain ke true setelah loading selesai
      setTimeout(() => {
        setShowMain(true);
      }, 0); // Tambahkan delay tambahan jika diperlukan
    }
  }, [loading]);

  return (
    <Router>
      {loading ? (
        <SplashScreen />
      ) : (
        showMain && (
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/article" element={<Article />} />
              <Route path="/about" element={<About />} />
              <Route path="/content/:contentId" element={<Content />} /> {/* Rute dinamis */}
              <Route path="/socialmedia" element={<SocialMedia />} />
            </Routes>
          </Layout>
        )
      )}
    </Router>
  );
};

export default App;
