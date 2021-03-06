// todo: split
import { Injectable } from '@angular/core';
/** Provides default values for Pagination and pager components */
var PaginationConfig = (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    return PaginationConfig;
}());
export { PaginationConfig };
PaginationConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PaginationConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=pagination.config.js.map