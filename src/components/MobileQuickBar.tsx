import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { firmContact } from '../data/firmData';

export const MobileQuickBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear smoothly after scrolling down past the top hero
      setIsVisible(window.scrollY > 220);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex justify-center pointer-events-none transition-all duration-300"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label="Mobil Hızlı İletişim Çubuğu"
    >
      <div className="pointer-events-auto bg-[#202326]/98 backdrop-blur-md border border-[#35393E] shadow-2xl shadow-[#202326]/30 rounded-full px-4 py-2 flex items-center gap-3">
        <a
          href={`tel:${firmContact.phoneRaw}`}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold tracking-wide text-white hover:text-[#E7E8E8] transition-colors rounded-full active:scale-95"
          aria-label="Av. Veysel Çalık'ı Telefonla Ara"
        >
          <Phone className="w-4 h-4 text-[#E7E8E8]" />
          <span>Ara</span>
        </a>

        <span className="w-[1px] h-4 bg-[#35393E]" aria-hidden="true" />

        <a
          href={firmContact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold tracking-wide text-white hover:text-[#E7E8E8] transition-colors rounded-full active:scale-95"
          aria-label="WhatsApp İle İletişime Geç"
        >
          <MessageCircle className="w-4 h-4 text-[#E7E8E8]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
