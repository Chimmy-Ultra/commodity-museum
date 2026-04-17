import { getCollection } from 'astro:content';
import { roomOrder } from '@data/room-order';
import { wings, getWing } from '@data/wings';

export { wings, getWing };

export async function getAllRooms() {
  return await getCollection('rooms');
}

export async function getRoomsByWing(wingSlug: string) {
  const allRooms = await getCollection('rooms');
  const order = roomOrder[wingSlug] || [];
  const wingRooms = allRooms.filter((r) => r.data.wing === wingSlug);

  // Sort by defined order
  return wingRooms.sort((a, b) => {
    const aIdx = order.indexOf(a.data.slug);
    const bIdx = order.indexOf(b.data.slug);
    return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx);
  });
}

export function getAdjacentRooms(wingSlug: string, roomSlug: string) {
  const order = roomOrder[wingSlug] || [];
  const idx = order.indexOf(roomSlug);
  return {
    prev: idx > 0 ? order[idx - 1] : null,
    next: idx < order.length - 1 ? order[idx + 1] : null,
  };
}

export function getWingRoomCount(wingSlug: string): number {
  return (roomOrder[wingSlug] || []).length;
}

export function getTotalRoomCount(): number {
  return Object.values(roomOrder).reduce((sum, rooms) => sum + rooms.length, 0);
}
