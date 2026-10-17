import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
  Copy,
  Check,
  Clock,
  Shield,
  Navigation,
} from 'lucide-react';
import { firmContact } from '../data/firmData';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section
      id="iletisim"
      className="py-16 md:py-24 bg-[#F8F7F4] border-b border-[#E2E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Dark Charcoal Corporate Card */}
        <div className="bg-[#202326] text-[#FFFFFF] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-[#202326]/15 border border-[#35393E]">
          {/* Subtle Ambient Light Texture */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#666B70]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Header */}
          <div className="max-w-2xl mb-12 text-left relative z-10">
            <div className="mb-3.5 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E7E8E8]" />
              <span className="font-semibold tracking-wider text-[#E7E8E8]/75 uppercase text-[11px]">
                DOĞRUDAN İLETİŞİM KANALLARI
              </span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFFFF] mb-4">
              İletişim
            </h2>

            <p className="text-sm sm:text-base text-[#E7E8E8]/80 leading-relaxed font-normal">
              Hukuki konular hakkında iletişim kurmak için aşağıdaki kanalları kullanabilirsiniz.
            </p>
          </div>

          {/* 3-Column Corporate Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 border-t border-[#35393E] pt-10 text-left relative z-10">
            {/* Column 1: Telefon & WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#292C2F] border border-[#35393E] space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#202326] border border-[#35393E] flex items-center justify-center text-[#FFFFFF]">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-[#E7E8E8]/90 font-semibold">
                      Telefon &amp; WhatsApp
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(firmContact.phoneRaw, 'phone')}
                    className="p-1.5 text-[#E7E8E8]/60 hover:text-white transition-colors"
                    title="Numarayı Kopyala"
                    aria-label="Telefon numarasını panoya kopyala"
                  >
                    {copiedType === 'phone' ? (
                      <span className="flex items-center gap-1 text-[#E7E8E8] text-[11px]">
                        <Check className="w-3.5 h-3.5" /> Kopyalandı
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <p className="font-serif-display text-2xl text-white font-bold mb-2">
                  <a
                    href={`tel:${firmContact.phoneRaw}`}
                    className="hover:text-[#E7E8E8] transition-colors"
                  >
                    {firmContact.phoneFormatted}
                  </a>
                </p>

                <p className="text-xs text-[#E7E8E8]/70 leading-relaxed">
                  Mesai saatleri içerisinde doğrudan arayabilir veya WhatsApp üzerinden hukuki bilgi talebinde bulunabilirsiniz.
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-2.5">
                <a
                  href={`tel:${firmContact.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#FFFFFF] text-[#202326] hover:bg-[#E7E8E8] rounded-full transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Ara</span>
                </a>

                <a
                  href={firmContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#202326] border border-[#35393E] text-[#FFFFFF] hover:bg-[#35393E] rounded-full transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Column 2: E-Posta */}
            <div className="p-6 rounded-2xl bg-[#292C2F] border border-[#35393E] space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#202326] border border-[#35393E] flex items-center justify-center text-[#FFFFFF]">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-[#E7E8E8]/90 font-semibold">
                      Resmi E-Posta
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(firmContact.email, 'email')}
                    className="p-1.5 text-[#E7E8E8]/60 hover:text-white transition-colors"
                    title="E-postayı Kopyala"
                    aria-label="E-posta adresini panoya kopyala"
                  >
                    {copiedType === 'email' ? (
                      <span className="flex items-center gap-1 text-[#E7E8E8] text-[11px]">
                        <Check className="w-3.5 h-3.5" /> Kopyalandı
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <p className="font-serif-display text-xl text-white font-bold mb-2 break-all">
                  <a
                    href={`mailto:${firmContact.email}`}
                    className="hover:text-[#E7E8E8] transition-colors"
                  >
                    {firmContact.email}
                  </a>
                </p>

                <p className="text-xs text-[#E7E8E8]/70 leading-relaxed">
                  Dava evrakları, tebligatlar ve hukuki mütalaa talepleri için resmi e-posta adresimiz üzerinden yazışma sağlayabilirsiniz.
                </p>
              </div>

              <div className="pt-3">
                <a
                  href={`mailto:${firmContact.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#202326] border border-[#35393E] text-[#FFFFFF] hover:bg-[#35393E] rounded-full transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E7E8E8]" />
                  <span>E-posta Gönder</span>
                </a>
              </div>
            </div>

            {/* Column 3: Ofis Adresi & Çalışma Saatleri */}
            <div className="p-6 rounded-2xl bg-[#292C2F] border border-[#35393E] space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#202326] border border-[#35393E] flex items-center justify-center text-[#FFFFFF]">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-[#E7E8E8]/90 font-semibold">
                      Ofis &amp; Çalışma Saatleri
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(firmContact.fullAddress, 'address')}
                    className="p-1.5 text-[#E7E8E8]/60 hover:text-white transition-colors"
                    title="Adresi Kopyala"
                    aria-label="Adresi panoya kopyala"
                  >
                    {copiedType === 'address' ? (
                      <span className="flex items-center gap-1 text-[#E7E8E8] text-[11px]">
                        <Check className="w-3.5 h-3.5" /> Kopyalandı
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <p className="text-sm text-white font-medium mb-2 leading-relaxed">
                  {firmContact.fullAddress}
                </p>

                <p className="text-xs text-[#E7E8E8]/70 leading-relaxed flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E7E8E8]/80 shrink-0" />
                  <span>{firmContact.workingDays}, {firmContact.workingHours}</span>
                </p>
              </div>

              <div className="pt-3">
                <a
                  href={firmContact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#202326] border border-[#35393E] text-[#FFFFFF] hover:bg-[#35393E] rounded-full transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E7E8E8]" />
                  <span>Haritada Yol Tarifi Al</span>
                  <ExternalLink className="w-3 h-3 text-[#E7E8E8]/80" />
                </a>
              </div>
            </div>
          </div>

          {/* Location & Appointment Notice Footer */}
          <div className="mt-8 pt-6 border-t border-[#35393E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#E7E8E8]/70 text-left relative z-10">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#E7E8E8]" />
              <span>Görüşmeler müvekkil mahremiyeti ve dosya hazırlığı gereği randevu teyidi ile yapılmaktadır.</span>
            </div>
            <span className="font-semibold text-white">Artuklu / Mardin</span>
          </div>
        </div>
      </div>
    </section>
  );
};
