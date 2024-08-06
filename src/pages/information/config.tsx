import { LINKS } from '@/settings/config';

export const InformationData = {
  cht: [
    '意家始於設計與攝影，我們深入整合創意思維與策略分析，透過視覺傳達品牌理念，提升品牌辨識度和曝光率。此外，我們同時提供廣泛的行銷服務，包括廣告、影像和社群經營等多方領域，以滿足客戶多元化的需求，打造出更具影響力的品牌形象。',
  ],
  eng: [
    'One House Originating from design and photography, we delve deep into integrating creative thinking with strategic analysis. Through visual communication, we aim to convey brand concepts, thus enhancing brand recognition and exposure. Furthermore, we offer extensive marketing services beyond this scope, including advertising, imagery, and social media management, catering to diverse client needs and crafting a more impactful brand image.',
  ],
  contact: [
    'For more details and proposals, please refer to',
    <a href='mailto:info@one-house.com'>info@one-house.com</a>,
    <a href={LINKS.ig} target='_blank'>
      Instagram
    </a>,
    <a href={LINKS.youtube} target='_blank'>
      Youtube
    </a>,
  ],
};
