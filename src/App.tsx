import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CorporateTrustBar } from './components/CorporateTrustBar';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { OfficeGallery } from './components/OfficeGallery';
import { Principles } from './components/Principles';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#202326] flex flex-col font-sans-body selection:bg-[#202326] selection:text-white">
      {/* 1. Üst Kurumsal Menü ve İletişim Çubuğu */}
      <Header />

      {/* Ana Kurumsal İçerik Akışı */}
      <main className="flex-1">
        {/* 2. Hero / Fotoğraf Destekli Kurumsal Açılış */}
        <Hero />

        {/* 3. Kurumsal Güven ve Mesleki İlkeler Barı */}
        <CorporateTrustBar />

        {/* 4. Hakkımda & Kurumsal Profil */}
        <About />

        {/* 5. Hukuki Çalışma Alanları */}
        <PracticeAreas />

        {/* 6. Fotoğraflı Çalışma Atmosferi & Yerel Bağlam */}
        <OfficeGallery />

        {/* 7. Mesleki Yaklaşım ve Disiplin */}
        <Principles />

        {/* 8. Doğrudan İletişim & Harita (Formsuz) */}
        <ContactSection />
      </main>

      {/* 9. Kurumsal Footer */}
      <Footer />

      {/* 10. Mobil Sabit Hızlı İletişim Kapsülü (Ara & WhatsApp) */}
      <MobileQuickBar />
    </div>
  );
}
