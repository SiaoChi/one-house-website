export const PAGE = {
  home: 'home',
};

export const REST_PATH = {
  test: 'todos/1',
  home: 'projects?page=1',
  category: 'projects?category=',
  all: 'projects',
};

export const CATEGORY_DESCRIPTION = {
  brand: {
    description:
      '我們提供品牌規劃服務，涵蓋品牌定位、標誌設計、給予適切評估及執行策略，幫助您建立一致且有影響力的品牌形象，提升市場競爭力。',
    list: ['品牌建立', '定位策略', '全方位識別設計', '視覺整合', '行銷規劃', '品牌再造'],
  },
  design: {
    description:
      '提供各式視覺設計服務，包含品牌標誌、宣傳素材、包裝和廣告設計，憑藉豐富經驗，運用設計和溝通幫助您創造引人注目的視覺效果，提升品牌形象。',
    list: ['品牌識別', 'LOGO商標', '主視覺', '產品包裝', '刊物', '印刷品', '網站', '廣告'],
  },
  '3D': {
    description:
      '憑藉專業攝影技術，承接各類項目，包括人文記錄、商業人像拍攝和產品攝影，根據您的需求打造客製化的拍攝方案，捕捉每個主題的獨特魅力和價值，呈現出色彩豐富且引人入勝的影像。',
    list: ['商業', '人文', '產品', '專業形象', '活動紀錄', '底片', '美食', '建築空間'],
  },
  photography: {
    description:
      '憑藉專業攝影技術，承接各類項目，包括人文記錄、商業人像拍攝和產品攝影，根據您的需求打造客製化的拍攝方案，捕捉每個主題的獨特魅力和價值，呈現出色彩豐富且引人入勝的影像。',
    list: ['商業', '人文', '產品', '專業形象', '活動紀錄', '底片', '美食', '建築空間'],
  },
  exhibition: {
    description:
      '提供一站式策展規劃服務，涵蓋從主題構思到場地提供與現場管理的每個環節，確保展覽有序進行，藉由多樣化的服務項目，為觀眾打造難忘的體驗，並展現品牌的獨特魅力。',
    list: [
      '主題策劃',
      '空間設計',
      '佈置與施工',
      '場地租借',
      '現場活動管理',
      '周邊產品',
      '宣傳與行銷',
    ],
  },
  video: {
    description:
      '我們專注於創新與靈活性，為品牌打造獨特的高質感影像作品，喚醒感官並展現品牌特色，根據各產業需求，提供創意行銷視角和影像風格，致力於為品牌提供最佳影像解決方案。',
    list: [
      '電視廣告',
      '企業形象影片',
      '活動紀錄',
      '創意短影音',
      '音樂錄影帶',
      'YOUTUBE',
      '教學影片',
    ],
  },
};

export const MENU_ITEMS = [
  {
    name: 'information',
    list: [
      { name: 'About', url: 'about' },
      { name: 'Contact', url: 'contact' },
      { name: 'Services', url: 'services' },
    ],
  },
  {
    name: 'project',
    list: [
      { name: 'Branding & Identity', url: '/brand', category: 'brand' },
      { name: 'Graphic Design', url: '/design', category: 'design' },
      {
        name: '3D Visualization & Animation',
        url: '/3D',
        category: '3D',
      },
      { name: 'Photography & Documentary', url: '/photography', category: 'photography' },
      { name: 'Video Production', url: '/video', category: 'video' },
      { name: 'Curate Exhibition', url: '/exhibition', category: 'exhibition' },
    ],
  },
] as const;

export const LINKS = {
  youtube: 'https://reurl.cc/aq3rbX',
  ig: 'https://reurl.cc/QRMdlb',
};
