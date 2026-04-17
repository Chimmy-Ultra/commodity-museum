export interface Wing {
  slug: string;
  name: string;
  nameEn: string;
  icon: string;
  accentColor: string;
  description: string;
}

export interface RoomMeta {
  slug: string;
  wing: string;
  name: string;
  nameEn: string;
  icon: string;
  tagline: string;
  roomNumber: number;
}
