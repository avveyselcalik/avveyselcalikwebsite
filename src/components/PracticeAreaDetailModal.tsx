import React, { useEffect } from 'react';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import { PracticeArea, firmContact } from '../data/firmData';

interface PracticeAreaDetailModalProps {
  area: PracticeArea | null;
  onClose: () => void;
}

export const PracticeAreaDetailModal: React.FC<PracticeAreaDetailModalProps> = ({
  area,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (area) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [area, onClose]);

  if (!area) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202326]/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#E2E0D8] shadow-2xl rounded-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#E2E0D8] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8F7F4] border border-[#E2E0D8] flex items-center justify-center text-[#202326]">
              <ShieldCheck className="w-5 h-5 text-[#202326]" />
            </div>
            <div>
              <span className="text-[10px] tracking-widest text-[#666B70] uppercase font-semibold">
                HUKUKİ KAPSAM &amp; ALAN {area.number}
              </span>
              <h3 id="modal-title" className="font-serif-display text-2xl font-bold text-[#202326] mt-0.5">
                {area.title}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#666B70] hover:text-[#202326] hover:bg-[#F8F7F4] rounded-lg transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6">
          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-[#666B70] font-semibold mb-2">
              Çalışma Niteliği &amp; Kapsamı
            </h4>
            <p className="text-sm sm:text-base text-[#202326] leading-relaxed">
              {area.shortDesc}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-[#666B70] font-semibold mb-3">
              Başlıca İnceleme ve Süreç Başlıkları
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#292C2F]">
              {area.scopePoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#202326] mt-2 shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Reminder Note */}
          <div className="p-4 bg-[#F8F7F4] border border-[#E2E0D8] rounded-xl text-xs text-[#666B70] leading-relaxed">
            <p>
              Her hukuki meselenin somut koşulları, delil durumu ve ilgili mevzuat hükümleri farklılık arz eder. Bu bilgiler genel bilgilendirme amacıyla sunulmuş olup bağlayıcı bir dava sonucu garantisi içermez.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#E2E0D8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#666B70]">
            Av. Veysel Çalık · {firmContact.district}, {firmContact.city}
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#666B70] hover:text-[#202326] transition-colors"
            >
              Kapat
            </button>
            <a
              href="#iletisim"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#202326] text-white hover:bg-[#292C2F] transition-colors rounded-full shadow-xs"
            >
              <span>İletişime Geçin</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E7E8E8]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
