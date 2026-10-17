import React, { useState } from 'react';
import {
  Shield,
  Users,
  Briefcase,
  Scale,
  Laptop,
  Building2,
  FileText,
  Compass,
  ArrowRight,
  Info,
} from 'lucide-react';
import { practiceAreas, PracticeArea } from '../data/firmData';
import { PracticeAreaDetailModal } from './PracticeAreaDetailModal';

export const PracticeAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  const getAreaIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-[#202326]";
    switch (iconName) {
      case 'Shield':
        return <Shield className={iconClass} />;
      case 'Users':
        return <Users className={iconClass} />;
      case 'Briefcase':
        return <Briefcase className={iconClass} />;
      case 'Scale':
        return <Scale className={iconClass} />;
      case 'Laptop':
        return <Laptop className={iconClass} />;
      case 'Building2':
        return <Building2 className={iconClass} />;
      case 'FileText':
        return <FileText className={iconClass} />;
      case 'Compass':
      default:
        return <Compass className={iconClass} />;
    }
  };

  return (
    <section
      id="calisma-alanlari"
      className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#E2E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 text-left">
          <div className="mb-3.5 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#202326]" />
            <span className="font-semibold tracking-wider text-[#666B70] uppercase text-[11px]">
              FAALİYET VE UZMANLIK ALANLARI
            </span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#202326] mb-4">
            Çalışma Alanları
          </h2>

          <p className="text-sm sm:text-base text-[#666B70] leading-relaxed font-normal">
            Hukuki meseleler, ilgili mevzuat ve her somut olayın kendi koşulları çerçevesinde değerlendirilir.
          </p>
        </div>

        {/* Featured Visual Header Card: Reduces monotony & brings authentic photo context */}
        <div className="mb-10 rounded-2xl bg-[#F8F7F4] border border-[#E2E0D8] p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-left space-y-4">
              <span className="inline-block px-3 py-1 bg-[#FFFFFF] border border-[#E2E0D8] rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#202326]">
                Hukuki Danışmanlık ve Temsil
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#202326] leading-snug">
                Dava ve Uyuşmazlık Çözümlerinde Kapsamlı Değerlendirme
              </h3>
              <p className="text-xs sm:text-sm text-[#666B70] leading-relaxed max-w-xl">
                Büromuz, ceza soruşturmalarından aile hukukuna, işçi-işveren ihtilaflarından ticari ve fikri mülkiyet uyuşmazlıklarına kadar müvekkillerine mevzuat ve yargı içtihatları doğrultusunda rehberlik etmektedir.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#202326] font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#202326]" />
                  Önleyici Hukuki İnceleme
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#202326]" />
                  Dava ve Kanun Yolları Takibi
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#202326]" />
                  Müzakere ve Sözleşme Denetimi
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#E7E8E8] border border-[#E2E0D8] shadow-md">
                <img
                  src="/images/consultation-room.jpg"
                  alt="Hukuki Danışmanlık ve Görüşme Masası"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202326]/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[11px] text-white font-medium drop-shadow-xs">
                  Danışmanlık ve Temsil Süreçleri · Artuklu / Mardin
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Practice Areas Grid: Clean, substantial 2 or 4-column corporate layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              onClick={() => setSelectedArea(area)}
              className="group p-6 rounded-2xl bg-[#F8F7F4] hover:bg-[#FFFFFF] border border-[#E2E0D8] hover:border-[#202326]/30 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between text-left"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedArea(area);
                }
              }}
              aria-label={`${area.title} kapsam detaylarını görüntüle`}
            >
              <div>
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif-display text-sm font-bold text-[#666B70] group-hover:text-[#202326] transition-colors">
                    {area.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#E2E0D8] group-hover:border-[#202326]/30 flex items-center justify-center transition-colors shadow-2xs">
                    {getAreaIcon(area.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-xl font-bold text-[#202326] group-hover:text-[#292C2F] mb-2.5 transition-colors leading-snug">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#666B70] leading-relaxed mb-4">
                  {area.shortDesc}
                </p>

                {/* Scope Points Highlights */}
                <ul className="space-y-1.5 pt-2 border-t border-[#E2E0D8]/70 text-[11px] text-[#666B70]">
                  {area.scopePoints.slice(0, 2).map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5 line-clamp-1">
                      <span className="w-1 h-1 rounded-full bg-[#666B70] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Trigger Link */}
              <div className="mt-6 pt-3 flex items-center justify-between text-xs font-semibold text-[#202326] border-t border-[#E2E0D8]/60 group-hover:border-[#202326]/20">
                <span>Kapsam Detayları</span>
                <ArrowRight className="w-4 h-4 text-[#202326] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Ethical / Legal notice banner */}
        <div className="mt-12 p-4 rounded-xl bg-[#F8F7F4] border border-[#E2E0D8] flex items-start sm:items-center gap-3 text-xs text-[#666B70] text-left">
          <Info className="w-4 h-4 text-[#202326] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            Her hukuki uyuşmazlık somut delil durumu ve güncel içtihatlar ışığında değerlendirilir. 1136 sayılı Avukatlık Kanunu gereğince hiçbir hukuki meselenin sonucu hakkında önceden garanti verilmez.
          </p>
        </div>
      </div>

      {/* Practice Area Detail Modal */}
      <PracticeAreaDetailModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
      />
    </section>
  );
};
