/** Building exterior doors lock overnight. Hours are local (Mountain) time. */
export const BUILDING = {
  lockHour: 22, // 10:00 PM
  unlockHour: 6, // 6:00 AM
  lockLabel: '10:00 PM',
  unlockLabel: '6:00 AM',
  keyLocation: 'on the hook at the entrance of the condo',
};

export function doorsLockedNow(now = new Date()): boolean {
  const h = now.getHours();
  return h >= BUILDING.lockHour || h < BUILDING.unlockHour;
}
