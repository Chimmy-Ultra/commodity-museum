import type { Wing } from '@lib/types';

export const wings: Wing[] = [
  {
    slug: 'energy',
    name: '能源館',
    nameEn: 'Energy Wing',
    icon: '🛢️',
    accentColor: '#c41e3a',
    description: '從西德州原油到荷蘭 TTF 天然氣，驅動世界運轉的能源期貨',
  },
  {
    slug: 'metals',
    name: '金屬館',
    nameEn: 'Metals Wing',
    icon: '🥇',
    accentColor: '#c9a96e',
    description: '黃金、白銀、銅——人類最古老的財富載體與工業命脈',
  },
  {
    slug: 'grains',
    name: '穀物館',
    nameEn: 'Grains Wing',
    icon: '🌾',
    accentColor: '#8b7355',
    description: '芝加哥期貨交易所的根基，餵養世界的穀物合約',
  },
  {
    slug: 'livestock',
    name: '畜產館',
    nameEn: 'Livestock Wing',
    icon: '🐄',
    accentColor: '#6b4423',
    description: '活牛、瘦豬，以及永遠留在交易員記憶中的豬腩期貨',
  },
  {
    slug: 'softs',
    name: '軟性商品館',
    nameEn: 'Softs Wing',
    icon: '☕',
    accentColor: '#2d5a27',
    description: '咖啡、可可、棉花——殖民貿易時代延續至今的熱帶商品',
  },
  {
    slug: 'historical',
    name: '歷史館',
    nameEn: 'Historical Wing',
    icon: '📜',
    accentColor: '#4a3728',
    description: '鬱金香狂熱、堂島米市場——期貨市場的史前時代',
  },
  {
    slug: 'index',
    name: '指數館',
    nameEn: 'Index Wing',
    icon: '📊',
    accentColor: '#2a4a6b',
    description: '追蹤一籃子商品的指數期貨，大宗商品的全景視野',
  },
];

export function getWing(slug: string): Wing | undefined {
  return wings.find((w) => w.slug === slug);
}
