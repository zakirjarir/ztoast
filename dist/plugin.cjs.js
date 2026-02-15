'use strict';

var core = require('@capacitor/core');

const ZToast = core.registerPlugin('ZToast', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.ZToastWeb()),
});

class ZToastWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ZToastWeb: ZToastWeb
});

exports.ZToast = ZToast;
//# sourceMappingURL=plugin.cjs.js.map
