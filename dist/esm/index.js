import { registerPlugin } from '@capacitor/core';
const ZToast = registerPlugin('ZToast', {
    web: () => import('./web').then((m) => new m.ZToastWeb()),
});
export * from './definitions';
export { ZToast };
//# sourceMappingURL=index.js.map