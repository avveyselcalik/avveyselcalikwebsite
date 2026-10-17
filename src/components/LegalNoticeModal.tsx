import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { legalNoticeText, firmContact } from '../data/firmData';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'kvkk' | 'disclaimer';
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202326]/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-notice-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#E2E0D8] shadow-2xl rounded-2xl p-6 sm:p-8 text-left max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-[#E2E0D8] pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8F7F4] border border-[#E2E0D8] flex items-center justify-center text-[#202326]">
              <ShieldCheck className="w-5 h-5 text-[#202326]" />
            </div>
            <div>
              <span className="text-[10px] tracking-widest text-[#666B70] uppercase font-semibold">
                {type === 'kvkk' ? 'Kişisel Verilerin Korunması' : 'Yasal Bilgilendirme'}
              </span>
              <h3 id="legal-notice-title" className="font-serif-display text-2xl font-bold text-[#202326]">
                {type === 'kvkk' ? 'KVKK Aydınlatma Metni' : 'Meslek Kuralları & Yasal Uyarı'}
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

        <div className="space-y-4 text-xs sm:text-sm text-[#292C2F] leading-relaxed">
          {type === 'disclaimer' ? (
            <>
              <p className="font-semibold text-[#202326]">
                1136 Sayılı Avukatlık Kanunu ve Reklam Yasağı Yönetmeliği Uyarınca Bilgilendirme:
              </p>
              <p>{legalNoticeText.baroNotice}</p>
              <p>{legalNoticeText.advertisementNotice}</p>
              <p>{legalNoticeText.confidentialityNotice}</p>
              <div className="p-4 bg-[#F8F7F4] border border-[#E2E0D8] rounded-xl text-xs text-[#666B70]">
                <p>
                  Ofisimiz Türkiye Barolar Birliği ve Mardin Barosu meslek kurallarına, bağımsız savunma ve sır saklama ilkelerine tam bağlılıkla faaliyet göstermektedir.
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="font-semibold text-[#202326]">
                6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) Kapsamında Bilgilendirme:
              </p>
              <p>
                Av. Veysel Çalık Hukuk Bürosu olarak, müvekkillerimiz ve ziyaretçilerimizle kurulan iletişimler çerçevesinde paylaşılan kişisel verilerin gizliliğine ve güvenliğine azami özen gösterilmektedir.
              </p>
              <p>
                İnternet sitemiz üzerinden herhangi bir form, çerez tabanlı pazarlama takip sistemi veya ticari reklam verisi toplanmamaktadır. Telefon, e-posta veya doğrudan yazışmalar aracılığıyla paylaşılan veriler, yalnızca hukuki danışmanlık taleplerinin değerlendirilmesi ve 1136 sayılı Avukatlık Kanunu'nun gerektirdiği mesleki yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.
              </p>
              <p>
                Avukatlık mesleğinin gerektirdiği sır saklama yükümlülüğü uyarınca, elde edilen hiçbir bilgi yasal zorunluluklar haricinde üçüncü şahıs veya kurumlarla paylaşılmaz.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#E2E0D8] flex items-center justify-between">
          <span className="text-xs text-[#666B70]">
            {firmContact.lawyerName} · {firmContact.district}, {firmContact.city}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#202326] text-white hover:bg-[#292C2F] rounded-full transition-colors shadow-xs"
          >
            Anladım
          </button>
        </div>
      </div>
    </div>
  );
};
