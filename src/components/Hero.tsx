import React from 'react';
import { ArrowUpRight, Phone, ShieldCheck, Scale, MapPin } from 'lucide-react';
import { heroContent, firmContact } from '../data/firmData';

export const Hero: React.FC = () => {
  return (
    <section
      id="anasayfa"
      className="relative pt-8 pb-14 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24 bg-[#F8F7F4] border-b border-[#E2E0D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Prestigious Editorial Typography (~50% width on desktop) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#E2E0D8] rounded-full text-xs text-[#202326] font-medium w-fit mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#202326]" aria-hidden="true" />
              <span className="tracking-wide uppercase text-[11px] font-semibold text-[#202326]">
                {firmContact.lawyerName}
              </span>
              <span className="text-[#666B70]">·</span>
              <span className="text-[#666B70] text-[11px] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#202326]" />
                {firmContact.district} / {firmContact.city}
              </span>
            </div>

            {/* Headline: Natural, deliberate serif typography */}
            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-tight text-[#202326] leading-[1.18] max-w-xl text-balance mb-6">
              {heroContent.headline}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#666B70] leading-relaxed max-w-lg mb-8 font-normal">
              {heroContent.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#202326] hover:bg-[#292C2F] active:scale-[0.98] transition-all rounded-full shadow-md hover:shadow-lg"
              >
                <Phone className="w-3.5 h-3.5 text-[#E7E8E8]" />
                <span>{heroContent.primaryCtaText}</span>
              </a>

              <a
                href="#calisma-alanlari"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#202326] bg-[#FFFFFF] hover:bg-[#F2EFEB] border border-[#E2E0D8] active:scale-[0.98] transition-all rounded-full shadow-2xs"
              >
                <span>{heroContent.secondaryCtaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#666B70]" />
              </a>
            </div>

            {/* Corporate Commitment Trust Badges */}
            <div className="mt-10 pt-6 border-t border-[#E2E0D8] flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#666B70]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#202326]" />
                <span className="font-medium text-[#292C2F]">Mesleki Sır &amp; Gizlilik</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-[#E2E0D8]">|</span>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#202326]" />
                <span>1136 Sayılı Avukatlık Kanunu</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-[#E2E0D8]">|</span>
              <span>Randevulu Danışmanlık</span>
            </div>
          </div>

          {/* Right Column: Real Corporate Law Office Photography */}
          <div className="lg:col-span-6 w-full">
            <div className="relative group">
              {/* Outer decorative card frame with high-end corporate feel */}
              <div className="relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E2E0D8] shadow-xl shadow-[#202326]/6 p-2 sm:p-2.5">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-[#E7E8E8]">
                  <img
                    src="/images/hero-office.jpg"
                    alt="Av. Veysel Çalık Hukuk Bürosu Çalışma Alanı"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle dark gradient overlay for text readability on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202326]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Corner architectural caption */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-2 pointer-events-none">
                    <span className="font-medium text-xs text-white/95 drop-shadow-xs">
                      Hukuk Bürosu Çalışma Alanı
                    </span>
                    <span className="font-serif-display italic text-xs text-white/90 drop-shadow-xs">
                      Artuklu / Mardin
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtle Floating Badge (Desktop) */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#FFFFFF] border border-[#E2E0D8] rounded-xl py-3 px-4 shadow-lg shadow-[#202326]/8 items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#202326] flex items-center justify-center text-white shrink-0">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <span className="font-serif-display text-sm font-semibold text-[#202326] block leading-tight">
                    Mardin Barosu Mensubu
                  </span>
                  <span className="text-[10px] text-[#666B70] tracking-wide uppercase font-medium">
                    Av. Veysel Çalık
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
