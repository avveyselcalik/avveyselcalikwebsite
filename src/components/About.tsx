import React from 'react';
import { ShieldCheck, Scale, Users, MapPin, Building, Award } from 'lucide-react';
import { aboutContent, firmContact } from '../data/firmData';

export const About: React.FC = () => {
  return (
    <section
      id="hakkimda"
      className="py-16 md:py-24 bg-[#F8F7F4] border-b border-[#E2E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Authentic Legal Library Photography (5 cols on desktop) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E2E0D8] shadow-xl shadow-[#202326]/6 p-2 sm:p-2.5">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#E7E8E8]">
                  <img
                    src="/images/about-library.jpg"
                    alt="Av. Veysel Çalık Hukuk Kütüphanesi ve Mevzuat Çalışmaları"
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202326]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-2 pointer-events-none">
                    <span className="font-medium text-xs text-white/95 drop-shadow-xs">
                      Hukuk Mevzuatı &amp; İnceleme Kütüphanesi
                    </span>
                    <span className="font-serif-display italic text-xs text-white/90 drop-shadow-xs">
                      Artuklu / Mardin
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Location & Baro Card */}
              <div className="mt-4 p-4 rounded-xl bg-[#FFFFFF] border border-[#E2E0D8] flex items-center justify-between text-xs text-[#666B70] shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F7F4] border border-[#E2E0D8] flex items-center justify-center text-[#202326] shrink-0">
                    <Award className="w-4 h-4 text-[#202326]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#202326] block">Mardin Barosu</span>
                    <span className="text-[11px] text-[#666B70]">Resmi Levha Kayıtlı Avukat</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-[#202326] block">Artuklu / Mardin</span>
                  <span className="text-[11px] text-[#666B70]">Yerel Yargı Çevresi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Rich Editorial Stance & Principles (7 cols on desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center text-left">
            <div className="mb-3.5 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#202326]" />
              <span className="font-semibold tracking-wider text-[#666B70] uppercase text-[11px]">
                {aboutContent.kicker}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#202326] leading-[1.22] mb-6 text-balance">
              {aboutContent.title}
            </h2>

            {/* Paragraphs with natural editorial pacing */}
            <div className="space-y-4 text-sm sm:text-base text-[#666B70] leading-relaxed font-normal">
              {aboutContent.paragraphs.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 3 Structured Commitment Cards */}
            <div className="mt-8 pt-6 border-t border-[#E2E0D8] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2E0D8] text-left shadow-2xs">
                <div className="w-8 h-8 rounded-md bg-[#F8F7F4] border border-[#E2E0D8] flex items-center justify-center text-[#202326] mb-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#202326]" />
                </div>
                <span className="font-serif-display text-sm text-[#202326] font-semibold block mb-1">
                  Gizlilik Esası
                </span>
                <span className="text-xs text-[#666B70] leading-relaxed block">
                  Müvekkil mahremiyeti ve mesleki sırrın tam korunması
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2E0D8] text-left shadow-2xs">
                <div className="w-8 h-8 rounded-md bg-[#F8F7F4] border border-[#E2E0D8] flex items-center justify-center text-[#202326] mb-2.5">
                  <Scale className="w-4 h-4 text-[#202326]" />
                </div>
                <span className="font-serif-display text-sm text-[#202326] font-semibold block mb-1">
                  Objektif Analiz
                </span>
                <span className="text-xs text-[#666B70] leading-relaxed block">
                  Mevzuat ve delil temelli gerçekçi hukuki inceleme
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2E0D8] text-left shadow-2xs">
                <div className="w-8 h-8 rounded-md bg-[#F8F7F4] border border-[#E2E0D8] flex items-center justify-center text-[#202326] mb-2.5">
                  <Users className="w-4 h-4 text-[#202326]" />
                </div>
                <span className="font-serif-display text-sm text-[#202326] font-semibold block mb-1">
                  Doğrudan İletişim
                </span>
                <span className="text-xs text-[#666B70] leading-relaxed block">
                  Dosya seyri hakkında şeffaf ve düzenli bilgi aktarımı
                </span>
              </div>
            </div>

            {/* Practical Contact Line */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#666B70]">
              <span className="flex items-center gap-1.5 font-medium text-[#202326]">
                <MapPin className="w-3.5 h-3.5 text-[#202326]" />
                {firmContact.fullAddress}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
