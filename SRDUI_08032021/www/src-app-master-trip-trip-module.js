(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-master-trip-trip-module"],{

/***/ "./src/app/dto/HireSlip-dto.ts":
/*!*************************************!*\
  !*** ./src/app/dto/HireSlip-dto.ts ***!
  \*************************************/
/*! exports provided: HireSlipDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireSlipDto", function() { return HireSlipDto; });
var HireSlipDto = /** @class */ (function () {
    function HireSlipDto() {
        this.hashMap = new Map();
    }
    return HireSlipDto;
}());



/***/ }),

/***/ "./src/app/master/trip/time/time.component.css":
/*!*****************************************************!*\
  !*** ./src/app/master/trip/time/time.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\n\t-webkit-appearance: none;\n\tmargin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL3RyaXAvdGltZS90aW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIsVUFBVTtDQUNWIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL3RyaXAvdGltZS90aW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0bWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/master/trip/time/time.component.html":
/*!******************************************************!*\
  !*** ./src/app/master/trip/time/time.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Time</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-8 vl\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Trip Duration</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #source id=\"source\" name=\"source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.fromstation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSource=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(sourceOptions | filter: controlSource.value) as resultSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSource.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #destination id=\"destination\" name=\"destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.tostation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteDestination=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationOptions | filter: controlDestination.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestination.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Expected Time To Reach(Hrs)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, bufferTimeInHrs)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"expectedTimeToReach\" #expectedTimeToReach\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.durationInHours\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Buffer Time(In Hrs)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Hours\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"bufferTimeInHrs\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, bufferTimeInMins)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#bufferTimeInHrs [(ngModel)]=\"hireSlipDto.buffTimeInHr\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Minutes\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, timeToReach)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#bufferTimeInMins id=\"bufferTimeInMins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.buffTimeInMin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Time To Reach(Days)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-calendar-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" #timeToReach\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"timeToReach\" (keyup)=\"fieldFocus($event, fromTime)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.daysToReach\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-8 vl\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Time Setting</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"from\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">From Hrs</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"to\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">To Hrs</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"amount\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"fromTime\" name=\"fromTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" #fromTime\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, toTime)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.fromTime\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"toTime\" name=\"toTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" #toTime\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, rewardingAmt)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.toTime\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"rewardingAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"rewardingAmt\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" #rewardingAmt\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, addBtn)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hireSlipDto.rewardAmt\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\" style='display: none'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"hiddenIndex\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-color: orange; color: #fff; cursor: pointer;\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"input-group-text\"> <i title=\"Add\" #addBtn -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addInTable();\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-plus\"></i> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addRow( timeSettingEntryTableDataList );\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" type='button' id=\"addInTable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#addBtn class=\"btn btn-icon-only yellow\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addInTable();\"> <i class=\"fa fa-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"timeTable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTimeSettingEntryTable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTimeSettingEntryTable\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>From Time</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Time</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rewarding Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let timeSettingEntryTableData of timeSettingEntryTableDataList; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ timeSettingEntryTableData.fromTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ timeSettingEntryTableData.toTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ timeSettingEntryTableData.rewardAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableEditBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedEdit(timeSettingEntryTableData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Edit\" class=\"fas fa-pencil-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDelete(i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 95%;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"saveBtn\"\n\t\t\t\t\t\t\t\t#saveBtn (click)=\"validateTimeDetails()\">Save</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"removeBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateDeleteRow()\">Remove</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t(click)=\"getTimeList()\" id=\"clearBtn\">Get</button> -->\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-4 vl\"></div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/trip/time/time.component.ts":
/*!****************************************************!*\
  !*** ./src/app/master/trip/time/time.component.ts ***!
  \****************************************************/
/*! exports provided: TimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeComponent", function() { return TimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for service starts





//for service ends
//for the select option with filter starts

//for the select option with filter ends
//for datatable starts



//for datatable ends
var TimeComponent = /** @class */ (function () {
    function TimeComponent(masterReadService, http, router, masterService) {
        var _this = this;
        this.masterReadService = masterReadService;
        this.http = http;
        this.router = router;
        this.masterService = masterService;
        this.hireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_2__["HireSlipDto"]();
        this.hireSlipDtoDelete = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_2__["HireSlipDto"]();
        this.isLoggedIn = true;
        this.newAttribute = {};
        //    timeSettingEntryTableDataList: any;
        this.timeSettingEntryTableDataList = [];
        //for the select option with filter starts
        this.controlSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.controlDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.sourceOptions = [
            { id: 1, label: 'Delhi', },
            { id: 2, label: 'Mumbai', },
            { id: 3, label: 'Budhpur', },
        ];
        this.destinationOptions = [
            { id: 1, label: 'Chennai' },
            { id: 2, label: 'Bangalore' },
            { id: 3, label: 'Kerala' },
        ];
        this.dtTriggerTimeSettingEntryTable = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.getTimeList = function () {
            //        console.log( this.hireSlipDto.fromstation );
            _this.getUserDetailsForReadTime();
            _this.masterReadService.getTimeService(_this.hireSlipDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.timeDataList = response;
                    _this.hireSlipDto = _this.timeDataList;
                    _this.hireSlipDto.buffTimeInMin = _this.timeDataList.buffTimeInMin.toFixed();
                    //                    console.log(this.hireSlipDto.buffTimeInMin);
                    _this.timeSettingEntryTableDataList = _this.hireSlipDto.listTimeSettings;
                    //                  this.dtTriggerExpensesHeads.next();
                    //                  console.log( this.expensesHeadsDataList[0] );
                }
                //                else {
                //                    swal( {
                //                        title: "Warning",
                //                        text: "No records found for the selected city!",
                //                        icon: "warning",
                //                        closeOnClickOutside: false,
                //                        closeOnEsc: false,
                //                    } );
                //                }
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Error",
                text: "Server Error While Getting Time Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.saveUpdateTimeDetails = function () {
            _this.saveTimeDetails();
            _this.masterService.createTimeSettings(_this.hireSlipDto).
                subscribe(function (data) {
                _this.hireSlipDtoSaveRet = data;
                if (_this.hireSlipDtoSaveRet.status == "persisted") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Success",
                        text: "Time Settings Details Saved/Updated Successfull",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Error",
                        text: "Error While Saving Time Settings Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Error",
                    text: "Server Error While Saving Time Settings Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.deleteTimeDetails = function () {
            _this.getDeleteTimeDetails();
            _this.masterService.deleteTime(_this.hireSlipDtoDelete).
                subscribe(function (data) {
                _this.hireSlipDtoDeleteRet = data;
                if (_this.hireSlipDtoDeleteRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Success",
                        text: "Time Details Removed Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    //                    this.getTimeList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Error",
                        text: "Error While Deleting Time Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Error",
                    text: "Server Error While Deleting Time Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Session Expired",
                text: "Please relogin to access the application!",
                icon: "error",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.logInPage();
            });
            //            sweet alert ends
        }
        if (this.isLoggedIn) {
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.getTimeList();
            this.timeSettingDetailsTable();
        }
    }
    //for the select option with filter ends
    TimeComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    TimeComponent.prototype.ngOnInit = function () {
    };
    //  service starts
    TimeComponent.prototype.getUserDetailsForReadTime = function () {
        this.hireSlipDto.companyid = this.userDataDtoReturnSession.companyId;
        this.hireSlipDto.fromstation = "Andheri";
        this.hireSlipDto.tostation = "Bangalore";
    };
    //    service ends
    TimeComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    TimeComponent.prototype.serviceCall = function () {
        //        console.log( this.hireSlipDto.tostation );
        this.getTimeList();
    };
    TimeComponent.prototype.timeSettingDetailsTable = function () {
        //the first datatable starts
        this.dtOptionsTimeSettingEntryTable = {
            //};
            //columns is used to for export and others starts
            //            columns: [
            //                {
            //                    title: 'Party Name',
            //                    data: 'partyName'
            //                },
            //                {
            //                    title: 'TDS Certf.No.',
            //                    data: 'tdsCertificateNumber'
            //                },
            //                {
            //                    title: 'TDS Amount',
            //                    data: 'tdsAmount'
            //                },
            //                {
            //                    title: 'From Period',
            //                    data: 'fromPeriod'
            //                },
            //                {
            //                    title: 'To Period',
            //                    data: 'toPeriod'
            //                },
            //                {
            //                    title: 'Payment Mode',
            //                    data: 'paymentMode'
            //                },
            //                {
            //                    title: 'Bank Name',
            //                    data: 'bankName'
            //                },
            //                {
            //                    title: 'Chq No.',
            //                    data: 'chequeNumber'
            //                },
            //                {
            //                    title: 'Chq.Date',
            //                    data: 'chequeDate'
            //                },
            //                {
            //                    title: 'Ref.No',
            //                    data: 'referenceNumber'
            //                },
            //                {
            //                    title: 'Setlm.Date',
            //                    data: 'settlementDate'
            //                },
            //                {
            //                    title: 'Remarks',
            //                    data: 'remarks'
            //                },
            //                {
            //                    title: 'TDS Certf. Copy',
            //                    data: 'tdsCertificateCopy'
            //                }
            //            ],
            //columns is used to for export and others endss
            //place holder in search/filter in datatable starts
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            //place holder in search/filter in datatable ends
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 280,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": true,
            "info": true,
            pagingType: 'full_numbers',
            pageLength: 9,
        };
        //        this.getTdsEntryMasterDetailsList();
        //the first datatable ends
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //first service starts 
        //            this.getDataTimeSettingEntryTableDataTable = this.tdsDetailsEntryRpt.getSummaryData()
        //        this.onDestroyUnsubscribtionTimeSettingEntryTable = this.getDataTimeSettingEntryTableDataTable.subscribe( data => {
        //            this.TimeSettingEntryTableDataList = data['data'];
        //            this.dtTriggerTimeSettingEntryTable.next();
        //        } );
        //first service ends
    };
    TimeComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerTimeSettingEntryTable.unsubscribe();
        //        this.onDestroyUnsubscribtionTimeSettingEntryTable.unsubscribe();
    };
    TimeComponent.prototype.addInTable = function () {
        this.newAttribute.fromTime = $("#fromTime").val();
        this.newAttribute.toTime = $("#toTime").val();
        this.newAttribute.rewardAmt = $("#rewardingAmt").val();
        if (parseInt(this.newAttribute.toTime) > parseInt(this.newAttribute.fromTime) && (this.newAttribute.rewardAmt != '')) {
            if (this.editTableId != null) {
                this.timeSettingEntryTableDataList.splice(this.editTableId, 1);
            }
            if (this.timeSettingEntryTableDataList == null) {
                this.timeSettingEntryTableDataList = [];
            }
            if (this.timeSettingEntryTableDataList.length == 0) {
                this.timeSettingEntryTableDataList.push(this.newAttribute);
            }
            else {
                var array = this.timeSettingEntryTableDataList;
                this.timeSettingEntryTableDataList.push(this.newAttribute);
                //                                for ( let index in array ) {
                //                                  console.log( 'this is the Index ' + index );
                //                                   if( index.length ==0){
                //                                   }
                //                                    this.timeSettingEntryTableDataList.push( this.newAttribute );
                //                                }
            }
            //            if ( this.editTableId == null ) {
            //                this.timeSettingEntryTableDataList.push( this.newAttribute );
            //            } else {
            //                let array = this.timeSettingEntryTableDataList;
            //                for ( let index in array ) {
            //                    console.log( 'this is the Index ' + index );
            //                    this.timeSettingEntryTableDataList.push( this.newAttribute );
            //                }
            //
            //            }
            //        if(this.newAttribute.toTime>=)
            this.newAttribute = {};
            $("#fromTime").val('');
            $("#toTime").val('');
            $("#rewardingAmt").val('');
            $("#hiddenIndex").val('');
            this.editTableId = null;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Warning",
                text: "To  Time  must been greater then From Time",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    TimeComponent.prototype.rowSelectedEdit = function (timeSettingEntryTableData, index) {
        $("#fromTime").val(timeSettingEntryTableData.fromTime);
        $("#toTime").val(timeSettingEntryTableData.toTime);
        $("#rewardingAmt").val(timeSettingEntryTableData.rewardAmt);
        $("#hiddenIndex").val(index);
        this.editTableId = index;
        //        console.log( timeSettingEntryTableData.fromTime, index );
    };
    TimeComponent.prototype.rowSelectedDelete = function (index) {
        this.timeSettingEntryTableDataList.splice(index, 1);
        $("#fromTime").val('');
        $("#toTime").val('');
        $("#rewardingAmt").val('');
        $("#hiddenIndex").val('');
    };
    TimeComponent.prototype.validateTimeDetails = function () {
        this.saveUpdateTimeDetails();
    };
    TimeComponent.prototype.saveTimeDetails = function () {
        this.hireSlipDto.companyid = this.userDataDtoReturnSession.companyId;
        this.hireSlipDto.lastupdatedby = this.userDataDtoReturnSession.userId;
        this.hireSlipDto.branch = this.userDataDtoReturnSession.mainStation;
        this.hireSlipDto.listTimeSettings = this.timeSettingEntryTableDataList;
        //        console.log( this.hireSlipDto.listTimeSettings );
    };
    TimeComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        this.timeSettingEntryTableDataList = [];
        $("#source").val('');
        $("#destination").val('');
        this.hireSlipDto.fromstation = null;
        this.hireSlipDto.tostation = null;
    };
    TimeComponent.prototype.validateDeleteRow = function () {
        this.deleteTimeDetails();
    };
    TimeComponent.prototype.getDeleteTimeDetails = function () {
        this.hireSlipDtoDelete.companyid = this.userDataDtoReturnSession.companyId;
        this.hireSlipDtoDelete.lastupdatedby = this.userDataDtoReturnSession.userId;
        this.hireSlipDtoDelete.fromstation = this.hireSlipDto.fromstation;
        this.hireSlipDtoDelete.tostation = this.hireSlipDto.tostation;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TimeComponent.prototype, "dtElements", void 0);
    TimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time',
            template: __webpack_require__(/*! ./time.component.html */ "./src/app/master/trip/time/time.component.html"),
            styles: [__webpack_require__(/*! ./time.component.css */ "./src/app/master/trip/time/time.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_1__["MasterReadService"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_9__["MasterService"]])
    ], TimeComponent);
    return TimeComponent;
}());



/***/ }),

/***/ "./src/app/master/trip/trip.module.ts":
/*!********************************************!*\
  !*** ./src/app/master/trip/trip.module.ts ***!
  \********************************************/
/*! exports provided: TripModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripModule", function() { return TripModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/autocomplete/autocomplete.module */ "./src/app/autocomplete/autocomplete.module.ts");
/* harmony import */ var src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/report/daily-report/daily-report.module */ "./src/app/report/daily-report/daily-report.module.ts");
/* harmony import */ var src_app_master_trip_trip_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/master/trip/trip.routing */ "./src/app/master/trip/trip.routing.ts");
/* harmony import */ var src_app_master_trip_time_time_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/master/trip/time/time.component */ "./src/app/master/trip/time/time.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//for select option search starts




//for select option search ends


var TripModule = /** @class */ (function () {
    function TripModule() {
    }
    TripModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_master_trip_trip_routing__WEBPACK_IMPORTED_MODULE_9__["TripRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_7__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_8__["DailyReportModule"]],
            declarations: [
                src_app_master_trip_time_time_component__WEBPACK_IMPORTED_MODULE_10__["TimeComponent"]
            ]
        })
    ], TripModule);
    return TripModule;
}());



/***/ }),

/***/ "./src/app/master/trip/trip.routing.ts":
/*!*********************************************!*\
  !*** ./src/app/master/trip/trip.routing.ts ***!
  \*********************************************/
/*! exports provided: TripRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripRoutes", function() { return TripRoutes; });
/* harmony import */ var src_app_master_trip_time_time_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/master/trip/time/time.component */ "./src/app/master/trip/time/time.component.ts");

var TripRoutes = [
    {
        path: '',
        children: [
            {
                path: 'time',
                component: src_app_master_trip_time_time_component__WEBPACK_IMPORTED_MODULE_0__["TimeComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=src-app-master-trip-trip-module.js.map