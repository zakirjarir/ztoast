import { registerPlugin } from '@capacitor/core';

import type { ZToastPlugin } from './definitions';

const ZToast = registerPlugin<ZToastPlugin>('ZToast', {
  web: () => import('./web').then((m) => new m.ZToastWeb()),
});

export * from './definitions';
export { ZToast };
