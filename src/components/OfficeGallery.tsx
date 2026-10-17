import React from 'react';
import { atmosphereItems, firmContact } from '../data/firmData';
import { MapPin, BookOpen, Users, FileCheck } from 'lucide-react';

export const OfficeGallery: React.FC = () => {
  return (
    <section
      id="ofis-atmosferi"
      className="py-16 md:py-24 bg-[#F8F7F4] border-b border-[#E2E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 text-left">
          <div className="mb-3.5 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#202326]" />
            <span className="font-semibold tracking-wider text-[#666B70] uppercase text-[11px]">
              ÇALIŞMA ORTAMI VE HUKUKİ TİTİZLİK
            </span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#202326] mb-4">
            Gerçek Bir Çalışma Atmosferi
          </h2>

          <p className="text-sm sm:text-base text-[#666B70] leading-relaxed font-normal">
            Hukuki araştırmaların, dosya hazırlıklarının ve müvekkil görüşmelerinin yürütüldüğü profesyonel çalışma ortamı ve Mardin yerel yargı çevresi.
          </p>
        </div>

        {/* Editorial Photo Composition (3 distinct frames with deliberate aspect ratios) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Consultation Room (Large, 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-[#FFFFFF] border border-[#E2E0D8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow text-left">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#E7E8E8] mb-4">
              <img
                src={atmosphereItems[0].image}
                alt={atmosphereItems[0].title}
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#202326]/85 backdrop-blur-xs text-[#FFFFFF] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                {atmosphereItems[0].category}
              </div>
            </div>
            <div className="px-2 pb-2">
              <h3 className="font-serif-display text-2xl font-bold text-[#202326] mb-1.5">
                {atmosphereItems[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#666B70] leading-relaxed">
                {atmosphereItems[0].desc}
              </p>
            </div>
          </div>

          {/* Cards 2 & 3: Legal Research & Mardin Local Context (5 cols stacked) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {/* Card 2: Legal Paperwork & Research */}
            <div className="rounded-2xl bg-[#FFFFFF] border border-[#E2E0D8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow text-left flex-1 flex flex-col justify-between">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#E7E8E8] mb-3">
                <img
                  src={atmosphereItems[1].image}
                  alt={atmosphereItems[1].title}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#202326]/85 backdrop-blur-xs text-[#FFFFFF] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {atmosphereItems[1].category}
                </div>
              </div>
              <div className="px-2 pb-1">
                <h3 className="font-serif-display text-xl font-bold text-[#202326] mb-1">
                  {atmosphereItems[1].title}
                </h3>
                <p className="text-xs text-[#666B70] leading-relaxed">
                  {atmosphereItems[1].desc}
                </p>
              </div>
            </div>

            {/* Card 3: Mardin Stone Architecture Context */}
            <div className="rounded-2xl bg-[#FFFFFF] border border-[#E2E0D8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow text-left flex-1 flex flex-col justify-between">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#E7E8E8] mb-3">
                <img
                  src={atmosphereItems[2].image}
                  alt={atmosphereItems[2].title}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#202326]/85 backdrop-blur-xs text-[#FFFFFF] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {atmosphereItems[2].category}
                </div>
              </div>
              <div className="px-2 pb-1">
                <h3 className="font-serif-display text-xl font-bold text-[#202326] mb-1">
                  {atmosphereItems[2].title}
                </h3>
                <p className="text-xs text-[#666B70] leading-relaxed">
                  {atmosphereItems[2].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom context highlight bar */}
        <div className="mt-10 p-5 rounded-2xl bg-[#202326] text-[#FFFFFF] text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-[#E7E8E8]/70 font-semibold block">
              MERKEZİ LOKASYON &amp; ADLİYE ERİŞİMİ
            </span>
            <p className="font-serif-display text-lg sm:text-xl text-white font-medium">
              13 Mart Mahallesi, Hürriyet Caddesi No: 20, Artuklu / Mardin
            </p>
          </div>
          <a
            href="#iletisim"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#FFFFFF] text-[#202326] hover:bg-[#E7E8E8] rounded-full transition-colors shrink-0"
          >
            <MapPin className="w-3.5 h-3.5 text-[#202326]" />
            <span>Yol Tarifi &amp; İletişim</span>
          </a>
        </div>
      </div>
    </section>
  );
};
