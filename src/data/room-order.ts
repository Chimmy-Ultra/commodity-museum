/** Room slugs in display order within each wing */
export const roomOrder: Record<string, string[]> = {
  energy: [
    'wti-crude-oil',
    'brent-crude-oil',
    'henry-hub-natural-gas',
    'dutch-ttf-natural-gas',
    'rbob-gasoline',
    'ny-harbor-ulsd',
    'gas-oil',
  ],
  metals: [
    'gold',
    'silver',
    'copper',
    'platinum',
    'palladium',
  ],
  grains: [
    'corn',
    'soybeans',
    'soybean-oil',
    'soybean-meal',
    'chicago-srw-wheat',
    'kc-hrw-wheat',
    'oats',
    'rough-rice',
  ],
  livestock: [
    'live-cattle',
    'feeder-cattle',
    'lean-hogs',
    'pork-bellies',
  ],
  softs: [
    'coffee-arabica',
    'cocoa',
    'sugar-no11',
    'cotton-no2',
    'fcoj',
    'canola-rapeseed',
  ],
  historical: [
    'tulip-bulbs',
    'dojima-rice',
    'pepper-spices',
  ],
  index: [
    'sp-gsci',
    'bloomberg-commodity-index',
  ],
};
