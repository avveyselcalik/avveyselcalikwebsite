import React, { useState } from 'react';
import { ArrowUp, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { firmContact, legalNoticeText } from '../data/firmData';
import { LegalNoticeModal } from './LegalNoticeModal';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'kvkk' | 'disclaimer' | null>(null);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#202326] text-[#E7E8E8] border-t border-[#35393E] pt-14 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#35393E]">
            {/* Brand Column (5 cols) */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div>
                <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-white block">
                  {firmContact.lawyerName}
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#E7E8E8]/75 block mt-1 font-semibold">
                  {firmContact.subTitle}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#E7E8E8]/70 leading-relaxed max-w-sm">
                Türkiye Barolar Birliği ve Mardin Barosu meslek kuralları çerçevesinde hukuki danışmanlık ve vekillik süreçlerinin özen ve gizlilikle yürütülmesi.
              </p>
              <div className="pt-1 text-xs text-[#E7E8E8]/80 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E7E8E8] shrink-0" />
                <span>{firmContact.fullAddress}</span>
              </div>
            </div>

            {/* Quick Links Column (3 cols) */}
            <div className="md:col-span-3 space-y-3.5 text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#FFFFFF] font-semibold block">
                Sayfa Bölümleri
              </span>
              <ul className="space-y-2 text-xs text-[#E7E8E8]/80">
                <li>
                  <a href="#anasayfa" className="hover:text-white transition-colors">
                    Ana Sayfa
                  </a>
                </li>
                <li>
                  <a href="#hakkimda" className="hover:text-white transition-colors">
                    Hakkımda &amp; Profil
                  </a>
                </li>
                <li>
                  <a href="#calisma-alanlari" className="hover:text-white transition-colors">
                    Hukuki Çalışma Alanları
                  </a>
                </li>
                <li>
                  <a href="#ofis-atmosferi" className="hover:text-white transition-colors">
                    Çalışma Ortamı ve Titizlik
                  </a>
                </li>
                <li>
                  <a href="#mesleki-yaklasim" className="hover:text-white transition-colors">
                    Mesleki Yaklaşım
                  </a>
                </li>
                <li>
                  <a href="#iletisim" className="hover:text-white transition-colors">
                    İletişim &amp; Adres
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Contact & Working Hours (4 cols) */}
            <div className="md:col-span-4 space-y-3.5 text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#FFFFFF] font-semibold block">
                Doğrudan İletişim
              </span>
              <div className="space-y-2.5 text-xs text-[#E7E8E8]/80">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#E7E8E8] shrink-0" />
                  <a href={`tel:${firmContact.phoneRaw}`} className="hover:text-white transition-colors font-medium">
                    {firmContact.phoneFormatted}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#E7E8E8] shrink-0" />
                  <a href={`mailto:${firmContact.email}`} className="hover:text-white transition-colors break-all">
                    {firmContact.email}
                  </a>
                </p>
                <p className="flex items-center gap-2 text-[#E7E8E8]/70">
                  <Clock className="w-3.5 h-3.5 text-[#E7E8E8] shrink-0" />
                  <span>{firmContact.workingDays}: {firmContact.workingHours}</span>
                </p>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs text-[#E7E8E8] hover:text-white bg-[#292C2F] hover:bg-[#35393E] rounded-full border border-[#35393E] transition-colors cursor-pointer"
                  aria-label="Sayfanın Başına Dön"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-white" />
                  <span>Sayfa Başına Dön</span>
                </button>
              </div>
            </div>
          </div>

          {/* Baro Disclaimer Note */}
          <div className="py-6 border-b border-[#35393E] text-left">
            <p className="text-[11px] leading-relaxed text-[#E7E8E8]/65 max-w-4xl">
              {legalNoticeText.baroNotice}
            </p>
          </div>

          {/* Bottom Copyright, Powered By & Legal Links */}
          <div className="pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-[#E7E8E8]/65">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-center lg:text-left">
              <p>
                © {currentYear} Av. Veysel Çalık — Hukuk ve Danışmanlık. Tüm hakları saklıdır.
              </p>
              <span className="hidden sm:inline text-[#35393E]" aria-hidden="true">•</span>
              <p className="text-[11px] text-[#E7E8E8]/60">
                Powered by{' '}
                <a
                  href="https://cicekanatechmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E7E8E8]/80 hover:text-white transition-colors font-medium underline-offset-4 hover:underline"
                >
                  Çiçekana Teknoloji &amp; Medya Hizmetleri
                </a>
              </p>
            </div>

            <div className="flex items-center gap-5 shrink-0">
              <button
                type="button"
                onClick={() => setModalType('disclaimer')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Yasal Bilgilendirme
              </button>
              <span className="text-[#35393E]" aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => setModalType('kvkk')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                KVKK Aydınlatma
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Dialog for Legal Notices */}
      <LegalNoticeModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || 'disclaimer'}
      />
    </>
  );
};
