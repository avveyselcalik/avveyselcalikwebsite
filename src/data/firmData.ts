/**
 * Av. Veysel Çalık — Hukuk ve Danışmanlık
 * Merkezi Veri ve İçerik Yapılandırması
 * 
 * Tüm iletişim detayları, çalışma alanları ve kurumsal metinler
 * tek bir noktadan yönetilmektedir.
 */

export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  scopePoints: string[];
  iconName: string;
}

export interface FirmContact {
  lawyerName: string;
  barTitle: string;
  subTitle: string;
  city: string;
  district: string;
  fullAddress: string;
  phoneRaw: string;
  phoneFormatted: string;
  email: string;
  whatsappUrl: string;
  mapsUrl: string;
  workingHours: string;
  workingDays: string;
  appointmentText: string;
}

export interface Principle {
  number: string;
  title: string;
  desc: string;
}

export const firmContact: FirmContact = {
  lawyerName: 'Av. Veysel Çalık',
  barTitle: 'Avukat',
  subTitle: 'Hukuk ve Danışmanlık',
  city: 'Mardin',
  district: 'Artuklu',
  fullAddress: '13 Mart Mahallesi, Hürriyet Caddesi, Konak Apartmanı No: 20, Artuklu / Mardin',
  phoneRaw: '+905442614797',
  phoneFormatted: '+90 544 261 47 97',
  email: 'av.veyselcalik@gmail.com',
  whatsappUrl: 'https://wa.me/905442614797',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=13+Mart+Mahallesi+H%C3%BCrriyet+Caddesi+Konak+Apartman%C4%B1+No+20+Artuklu+Mardin',
  workingHours: '09:00 — 18:00',
  workingDays: 'Pazartesi — Cuma',
  appointmentText: 'Randevu için iletişime geçin',
};

export const heroContent = {
  kicker: 'HUKUK VE DANIŞMANLIK',
  headline: 'Hukuki süreçlerde güven, özen ve kararlılık.',
  description:
    'Hukuki meselelerin değerlendirilmesi ve çözüm süreçlerinin yürütülmesinde, her somut olayın kendi koşulları çerçevesinde dikkatli ve profesyonel bir yaklaşım.',
  primaryCtaText: 'İletişime Geçin',
  secondaryCtaText: 'Çalışma Alanlarını İnceleyin',
};

export const aboutContent = {
  kicker: 'AVUKAT VEYSEL ÇALIK · MARDİN BAROSU',
  title: 'Hukuki meselelerinize özenli bir yaklaşım.',
  paragraphs: [
    'Hukuki süreçlerin sağlıklı ve güvenilir biçimde yürütülmesi; her somut olayın dikkatle değerlendirilmesini, yürürlükteki mevzuatın ve yargı içtihatlarının titizlikle incelenmesini ve dosyanın koşullarına uygun bir hukuki yol haritası geliştirilmesini gerektirir.',
    'Avukatlık faaliyetlerimizde 1136 sayılı Avukatlık Kanunu hükümleri, mesleki sorumluluk, bağımsız savunma ve tam gizlilik esastır. Bireysel ve kurumsal müvekkillerimizle kurulan iletişimde şeffaflık temel alınır.',
  ],
  commitments: [
    { label: 'Gizlilik İlkesi', text: 'Avukatlık Kanunu m.36 uyarınca müvekkil sırrının ve bilgi güvenliğinin tam korunması' },
    { label: 'Objektif Değerlendirme', text: 'Somut delil analizi, güncel mevzuat ve gerçekçi hukuki değerlendirme' },
    { label: 'Doğrudan İletişim', text: 'Süreç boyunca şeffaf, anlaşılır ve düzenli bilgi aktarımı' },
  ],
};

export const practiceAreas: PracticeArea[] = [
  {
    id: 'ceza-hukuku',
    number: '01',
    title: 'Ceza Hukuku',
    shortDesc: 'Soruşturma ve kovuşturma evrelerinde usul ve esas hukuku çerçevesinde adil yargılanma hakkının gözetilmesi.',
    scopePoints: [
      'Hazırlık soruşturması ve ifade alma aşamalarında hukuki temsil',
      'Asliye Ceza ve Ağır Ceza mahkemelerinde savunma hazırlığı',
      'Kanun yolları (istinaf ve temyiz) başvurularının takibi',
      'Mağdur ve müşteki vekilliği süreçleri',
    ],
    iconName: 'Shield',
  },
  {
    id: 'aile-ve-bosanma-hukuku',
    number: '02',
    title: 'Aile ve Boşanma Hukuku',
    shortDesc: 'Evlilik birliğinin sonlanması, mal rejiminin tasfiyesi, velayet ve nafaka uyuşmazlıklarında hukuki süreçlerin yönetimi.',
    scopePoints: [
      'Anlaşmalı ve çekişmeli boşanma davaları',
      'Maddi ve manevi tazminat talepleri',
      'Velayet, nafaka ve kişisel ilişki tesisi işlemleri',
      'Edinilmiş mallara katılma ve mal rejimi tasfiyesi',
    ],
    iconName: 'Users',
  },
  {
    id: 'is-hukuku',
    number: '03',
    title: 'İş Hukuku',
    shortDesc: 'İşçi ve işveren arasındaki çalışma ilişkisinden kaynaklanan alacak, tazminat ve işe iade uyuşmazlıklarının çözümü.',
    scopePoints: [
      'Kıdem ve ihbar tazminatı, fazla mesai ve ücret alacakları',
      'İşe iade davaları ve arabuluculuk süreçleri',
      'Hizmet tespiti ve iş kazası tazminat talepleri',
      'İş sözleşmelerinin ve çalışma şartlarının hukuki denetimi',
    ],
    iconName: 'Briefcase',
  },
  {
    id: 'tuketici-hukuku',
    number: '04',
    title: 'Tüketici Hukuku',
    shortDesc: 'Ayıplı mal ve hizmetler, tüketici sözleşmeleri ve Tüketici Hakem Heyeti ile mahkemeler nezdindeki hak arama süreçleri.',
    scopePoints: [
      'Ayıplı taşınır ve taşınmaz mallara ilişkin uyuşmazlıklar',
      'Abonelik ve mesafeli satış sözleşmesi ihtilafları',
      'Tüketici Hakem Heyetleri nezdinde başvuru ve itirazlar',
      'Tüketici Mahkemelerinde dava takibi',
    ],
    iconName: 'Scale',
  },
  {
    id: 'bilisim-hukuku',
    number: '05',
    title: 'Bilişim Hukuku',
    shortDesc: 'Dijital mecralardaki hak ihlalleri, internet ortamında kişilik haklarının korunması ve bilişim suçları kapsamındaki uyuşmazlıklar.',
    scopePoints: [
      'İnternet yoluyla işlenen suçlar ve kişilik hakları ihlalleri',
      'Erişimin engellenmesi ve içeriğin çıkarılması başvuruları',
      'Elektronik ticaret ve dijital platform hukuku',
      'Kişisel verilerin dijital ortamda korunması',
    ],
    iconName: 'Laptop',
  },
  {
    id: 'kat-mulkiyeti-hukuku',
    number: '06',
    title: 'Kat Mülkiyeti Hukuku',
    shortDesc: 'Toplu yapı ve site yönetimleri, anagayrimenkulün kullanımı, ortak gider paylaşımları ve komşuluk hukuku uyuşmazlıkları.',
    scopePoints: [
      'Ortak gider (aidat) ve avans alacaklarının takibi',
      'Kat Malikleri Kurulu kararlarının iptali davaları',
      'Yönetim planı hazırlanması ve uyuşmazlıkların giderilmesi',
      'Müdahalenin men\'i ve projeye aykırılıkların giderilmesi',
    ],
    iconName: 'Building2',
  },
  {
    id: 'fikri-mulkiyet-hukuku',
    number: '07',
    title: 'Fikri Mülkiyet Hukuku',
    shortDesc: 'Marka, tasarım, telif ve patent haklarının korunması, tescil ihtilafları ve haksız rekabetin önlenmesi süreçleri.',
    scopePoints: [
      'Marka ve tasarım ihlallerine karşı hukuki koruma',
      'Fikir ve sanat eserleri kanunundan doğan hakların savunulması',
      'Haksız rekabetin tespiti ve önlenmesi davaları',
      'Lisans ve devir sözleşmelerinin düzenlenmesi',
    ],
    iconName: 'FileText',
  },
  {
    id: 'hukuki-danismanlik',
    number: '08',
    title: 'Hukuki Danışmanlık',
    shortDesc: 'Bireysel ve kurumsal nitelikteki hukuki meselelerde önleyici hukuk anlayışıyla sözleşme incelemesi ve görüş sunumu.',
    scopePoints: [
      'Sözleşme taslaklarının hazırlanması ve risk analizi',
      'Uyuşmazlık öncesi önleyici hukuki değerlendirme',
      'İhtarname ve resmi yazışmaların hazırlanması',
      'Mevzuat değişikliklerine ilişkin bilgilendirme',
    ],
    iconName: 'Compass',
  },
];

export const principles: Principle[] = [
  {
    number: '01',
    title: 'Özenli Değerlendirme',
    desc: 'Hukuki meselenin koşullarını ve ilgili mevzuatı dikkate alan bir inceleme.',
  },
  {
    number: '02',
    title: 'Açık İletişim',
    desc: 'Sürecin kapsamı ve izlenecek hukuki yollar hakkında anlaşılır iletişim.',
  },
  {
    number: '03',
    title: 'Mesleki Sorumluluk',
    desc: 'Gizlilik, etik ilkeler ve mesleki yükümlülükler doğrultusunda çalışma.',
  },
];

export const legalNoticeText = {
  baroNotice:
    'Bu internet sitesinde yer alan tüm bilgi, veri ve içerikler Türkiye Barolar Birliği\'nin Meslek Kuralları ve Avukatlık Kanunu ile Reklam Yasağı Yönetmeliği hükümlerine uygun olarak, yalnızca bilgilendirme amacıyla hazırlanmıştır.',
  advertisementNotice:
    'Sitede yer alan hiçbir ifade hukuki mütalaa, danışmanlık veya dava takibi taahhüdü niteliği taşımamaktadır. Ziyaretçilerin buradaki genel bilgilere dayanarak hareket etmeleri tavsiye edilmez.',
  confidentialityNotice:
    'Hukuk büromuzla kurulan tüm iletişimlerde müvekkil-avukat ilişkisine özgü mesleki sır saklama yükümlülüğü ve 1136 sayılı Avukatlık Kanunu\'nun amir hükümleri titizlikle uygulanır.',
};

export interface TrustPillar {
  icon: string;
  title: string;
  desc: string;
}

export const trustPillars: TrustPillar[] = [
  {
    icon: 'Shield',
    title: 'Müvekkil Gizliliği',
    desc: 'Avukatlık Kanunu m.36 gereğince tüm bilgi, belge ve görüşmeler tam mesleki sır saklama kapsamında korunur.',
  },
  {
    icon: 'Scale',
    title: 'Özenli Değerlendirme',
    desc: 'Her hukuki uyuşmazlık somut delil durumu, ilgili kanun maddeleri ve Yargıtay içtihatları çerçevesinde titizlikle incelenir.',
  },
  {
    icon: 'MessageSquare',
    title: 'Şeffaf Bilgilendirme',
    desc: 'Hukuki riskler, muhtemel kanun yolları ve süreç takvimi hakkında müvekkile açık ve düzenli bilgi aktarımı sağlanır.',
  },
  {
    icon: 'Landmark',
    title: 'Yetki & Temsil',
    desc: 'Mardin Barosu mensubu olarak Artuklu ve çevre adliyeler başta olmak üzere tüm yetkili yargı mercilerinde vekillik hizmeti.',
  },
];

export interface AtmosphereItem {
  id: string;
  image: string;
  title: string;
  category: string;
  desc: string;
}

export const atmosphereItems: AtmosphereItem[] = [
  {
    id: 'consultation',
    image: '/images/consultation-room.jpg',
    title: 'Müvekkil Görüşme ve Danışma Alanı',
    category: 'GÖRÜŞME & VEKİLLİK',
    desc: 'Yüz yüze ve online hukuki danışmanlık toplantılarının yürütüldüğü, müvekkil mahremiyetini önceleyen profesyonel ortam.',
  },
  {
    id: 'research',
    image: '/images/legal-documents.jpg',
    title: 'Mevzuat İncelemesi & Dosya Hazırlığı',
    category: 'HUKUKİ ÇALIŞMA',
    desc: 'Dava dilekçeleri, ihtarname taslakları ve delil tahlillerinin yürürlükteki mevzuat hükümleriyle derinlemesine incelenmesi.',
  },
  {
    id: 'mardin-context',
    image: '/images/mardin-heritage.jpg',
    title: 'Artuklu / Mardin Yerel Yargı Çevresi',
    category: 'BÖLGESEL YETKİ',
    desc: 'Mardin Adliyesi ve bölge yargı mercileri nezdindeki dava takipleri ile yerel uyuşmazlıklara doğrudan ve hızlı erişim.',
  },
];

