import React from 'react';
import { ShieldCheck, Scale, MessageSquare, Landmark } from 'lucide-react';
import { trustPillars } from '../data/firmData';

export const CorporateTrustBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <ShieldCheck className="w-5 h-5 text-[#202326]" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#202326]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#202326]" />;
      case 'Landmark':
      default:
        return <Landmark className="w-5 h-5 text-[#202326]" />;
    }
  };

  return (
    <section className="bg-[#FFFFFF] border-b border-[#E2E0D8] py-10 sm:py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-xl bg-[#F8F7F4] hover:bg-[#F2EFEB] border border-[#E2E0D8] transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] border border-[#E2E0D8] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-2xs">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="font-serif-display text-lg font-semibold text-[#202326] mb-1.5 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#666B70] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
