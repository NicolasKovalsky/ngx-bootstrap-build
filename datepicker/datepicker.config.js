import { Injectable } from '@angular/core';
var DatepickerConfig = (function () {
    function DatepickerConfig() {
        this.datepickerMode = 'day';
        this.startingDay = 0;
        this.yearRange = 20;
        this.minMode = 'day';
        this.maxMode = 'year';
        this.showWeeks = true;
        this.formatDay = 'DD';
        this.formatMonth = 'MMMM';
        this.formatYear = 'YYYY';
        this.formatDayHeader = 'dd';
        this.formatDayTitle = 'MMMM YYYY';
        this.formatMonthTitle = 'YYYY';
        this.onlyCurrentMonth = false;
        this.monthColLimit = 3;
        this.yearColLimit = 5;
        this.shortcutPropagation = false;
    }
    return DatepickerConfig;
}());
export { DatepickerConfig };
DatepickerConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DatepickerConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=datepicker.config.js.map