import { Injectable } from '@angular/core';
var ProgressbarConfig = (function () {
    function ProgressbarConfig() {
        /** if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4) */
        this.animate = true;
        /** maximum total value of progress element */
        this.max = 100;
    }
    return ProgressbarConfig;
}());
export { ProgressbarConfig };
ProgressbarConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ProgressbarConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=progressbar.config.js.map