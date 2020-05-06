

export default () => {
    if (process.server) {
        return;
    }

    const detect = () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true;

    if (detect()) {
        return;
    }

    return new Promise((resolve, reject) => {
        require.ensure([
            "core-js/es7/object"
        ], function (require) {
            const polyfill = require("core-js/es7/object");

            const install = (smoothscroll) => smoothscroll.polyfill();

            install(polyfill);

            resolve();
        });
    });
}