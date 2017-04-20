import { Injectable } from '@angular/core';
var CarouselConfig = (function () {
    function CarouselConfig() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
    }
    return CarouselConfig;
}());
export { CarouselConfig };
CarouselConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CarouselConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=carousel.config.js.map