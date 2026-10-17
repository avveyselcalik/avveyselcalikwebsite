import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Menu, X } from 'lucide-react';
import { firmContact } from '../data/firmData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Utility Bar (Desktop & Tablet) - Corporate Pre-Header */}
      <div className="hidden lg:block bg-[#202326] text-[#E7E8E8] text-[11px] font-normal border-b border-[#35393E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-[#E7E8E8]/85">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E7E8E8]/70" />
              <span>{firmContact.district} / {firmContact.city}</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-[#666B70]" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E7E8E8]/70" />
              <span>{firmContact.appointmentText}</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-[#666B70]" aria-hidden="true" />
            <span className="text-[#E7E8E8]/70">1136 Sayılı Kanun Kapsamında Bilgilendirme</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${firmContact.phoneRaw}`}
              className="flex items-center gap-1.5 text-[#FFFFFF] hover:text-[#E7E8E8] font-medium transition-colors"
              aria-label={`Telefon: ${firmContact.phoneFormatted}`}
            >
              <Phone className="w-3 h-3 text-[#E7E8E8]/80" />
              <span>{firmContact.phoneFormatted}</span>
            </a>
            <span className="w-[1px] h-3 bg-[#35393E]" aria-hidden="true" />
            <a
              href={`mailto:${firmContact.email}`}
              className="flex items-center gap-1.5 text-[#E7E8E8]/85 hover:text-white transition-colors"
              aria-label={`E-posta: ${firmContact.email}`}
            >
              <Mail className="w-3 h-3 text-[#E7E8E8]/80" />
              <span>{firmContact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FFFFFF]/98 backdrop-blur-md shadow-sm border-b border-[#E2E0D8]'
            : 'bg-[#F8F7F4] border-b border-[#E2E0D8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22 gap-6">
            {/* Typographic Brand Wordmark */}
            <a
              href="#anasayfa"
              className="group flex flex-col text-left focus-visible:outline-hidden py-1"
              aria-label="Av. Veysel Çalık Hukuk ve Danışmanlık Ana Sayfa"
            >
              <span className="font-serif-display text-2xl sm:text-[1.75rem] font-bold tracking-tight text-[#202326] group-hover:text-[#292C2F] transition-colors leading-tight">
                AV. VEYSEL ÇALIK
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#666B70] group-hover:text-[#202326] transition-colors font-medium -mt-0.5">
                HUKUK VE DANIŞMANLIK
              </span>
            </a>

            {/* Navigation Links (Desktop) */}
            <nav
              className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-semibold tracking-wide uppercase text-[#292C2F]"
              aria-label="Ana Gezinti Menüsü"
            >
              <a
                href="#anasayfa"
                className="hover:text-[#202326] transition-colors relative py-1 text-[#202326] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#202326] after:opacity-0 hover:after:opacity-100 after:transition-opacity"
              >
                Ana Sayfa
              </a>
              <a
                href="#hakkimda"
                className="hover:text-[#202326] transition-colors relative py-1 text-[#666B70] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#202326] after:opacity-0 hover:after:opacity-100 after:transition-opacity"
              >
                Hakkımda
              </a>
              <a
                href="#calisma-alanlari"
                className="hover:text-[#202326] transition-colors relative py-1 text-[#666B70] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#202326] after:opacity-0 hover:after:opacity-100 after:transition-opacity"
              >
                Çalışma Alanları
              </a>
              <a
                href="#ofis-atmosferi"
                className="hover:text-[#202326] transition-colors relative py-1 text-[#666B70] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#202326] after:opacity-0 hover:after:opacity-100 after:transition-opacity"
              >
                Çalışma Ortamı
              </a>
              <a
                href="#mesleki-yaklasim"
                className="hover:text-[#202326] transition-colors relative py-1 text-[#666B70] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#202326] after:opacity-0 hover:after:opacity-100 after:transition-opacity"
              >
                Mesleki Yaklaşım
              </a>
              <a
                href="#iletisim"
                className="hover:text-[#202326] transition-colors relative py-1 text-[#666B70] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#202326] after:opacity-0 hover:after:opacity-100 after:transition-opacity"
              >
                İletişim
              </a>
            </nav>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#iletisim"
                className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FFFFFF] bg-[#202326] hover:bg-[#292C2F] active:scale-[0.98] transition-all rounded-full shadow-xs"
              >
                <span>İletişime Geçin</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 text-[#202326] hover:text-[#292C2F] hover:bg-[#E7E8E8]/60 rounded-lg transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFFFF] border-b border-[#E2E0D8] px-5 pt-3 pb-6 shadow-xl animate-in fade-in duration-150">
            <nav className="flex flex-col space-y-2" aria-label="Mobil Gezinti">
              <a
                href="#anasayfa"
                onClick={closeMobileMenu}
                className="text-sm font-semibold text-[#202326] py-2.5 border-b border-[#E2E0D8]"
              >
                Ana Sayfa
              </a>
              <a
                href="#hakkimda"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[#292C2F] py-2.5 border-b border-[#E2E0D8]"
              >
                Hakkımda
              </a>
              <a
                href="#calisma-alanlari"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[#292C2F] py-2.5 border-b border-[#E2E0D8]"
              >
                Çalışma Alanları
              </a>
              <a
                href="#ofis-atmosferi"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[#292C2F] py-2.5 border-b border-[#E2E0D8]"
              >
                Çalışma Ortamı &amp; Titizlik
              </a>
              <a
                href="#mesleki-yaklasim"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[#292C2F] py-2.5 border-b border-[#E2E0D8]"
              >
                Mesleki Yaklaşım
              </a>
              <a
                href="#iletisim"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-[#202326] py-2.5"
              >
                İletişim &amp; Adres
              </a>

              {/* Direct Touch Actions in Drawer */}
              <div className="pt-4 flex flex-col gap-2.5">
                <a
                  href={`tel:${firmContact.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider bg-[#202326] text-white rounded-full shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#E7E8E8]" />
                  <span>Hemen Ara: {firmContact.phoneFormatted}</span>
                </a>
                <a
                  href={firmContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider bg-[#292C2F] text-white rounded-full shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#E7E8E8]" />
                  <span>WhatsApp ile İletişim</span>
                </a>
              </div>

              {/* Address info in Drawer */}
              <div className="pt-3 text-xs text-[#666B70] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#202326] shrink-0" />
                <span>{firmContact.fullAddress}</span>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
