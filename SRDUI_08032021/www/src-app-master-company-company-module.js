(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-master-company-company-module"],{

/***/ "./src/app/dto/RateMaster-dto.ts":
/*!***************************************!*\
  !*** ./src/app/dto/RateMaster-dto.ts ***!
  \***************************************/
/*! exports provided: RateMasterDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateMasterDto", function() { return RateMasterDto; });
var RateMasterDto = /** @class */ (function () {
    function RateMasterDto() {
    }
    return RateMasterDto;
}());



/***/ }),

/***/ "./src/app/master/company/common-charges/common-charges.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/master/company/common-charges/common-charges.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jb21wYW55L2NvbW1vbi1jaGFyZ2VzL2NvbW1vbi1jaGFyZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/master/company/common-charges/common-charges.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/master/company/common-charges/common-charges.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Charges Details</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Service Tax(%)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #serviceTax\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, serviceTaxAmountLimit)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"serviceTax\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"serviceTax\" [(ngModel)]=\"rateMasterDto.serviceTax\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Serviice Tax Amount Limit(Rs)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #serviceTaxAmountLimit\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, tds)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"serviceTaxAmountLimit\" name=\"serviceTaxAmountLimit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.serviceTaxAmt\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>TDS(%)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #tds (keyup)=\"fieldFocus($event, waitingHours)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"tds\" name=\"tds\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.tdsChg\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Waiting Hours(Use For Driver Rewarding)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#waitingHours (keyup)=\"fieldFocus($event, maxActualWeight)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"waitingHours\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"waitingHours\" [(ngModel)]=\"rateMasterDto.waitingHrs\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Max Actual Weight</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #maxActualWeight\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, maxChargedWeight)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"maxActualWeight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"maxActualWeight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.maxActWgt\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Max Charged Weight</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #maxChargedWeight\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, rateChgWgt)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"maxChargedWeight\" name=\"maxChargedWeight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.maxChgWgt\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Rate/ChgWgt</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #rateChgWgt (keyup)=\"fieldFocus($event, ddMinimumAmountOnLrEntry)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"rateChgWgt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"rateChgWgt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.ratePerChgWgt\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<label>Rate/ChgWgt</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<input #ratePerChgWgt -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, ddMinimumAmountOnLrEntry)\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" name=\"rateChgWgt\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"rateChgWgt\" [(ngModel)]=\"rateMasterDto.ratePerChgWgt\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>DD Minimum Amount On LR Entry</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #ddMinimumAmountOnLrEntry\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, ddMinimumPercOnLrEntryOnChgWgt)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"ddMinimumAmountOnLrEntry\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"ddMinimumAmountOnLrEntry\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.ddMinAmtOnLr\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>DD Minimum Perc On LR Entry(On Chg Wgt)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #ddMinimumPercOnLrEntryOnChgWgt\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, ddFlowInLrEntry)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"ddMinimumPercOnLrEntryOnChgWgt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"ddMinimumPercOnLrEntryOnChgWgt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.ddMinPercOnLr\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>DD Flow in LR Entry</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select #ddFlowInLrEntry class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"ddFlowInLrEntry\" name=\"ddFlowInLrEntry\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.isDDFlowApplicableOnLr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"true\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"false\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"saveBtn\" (click)=\"validateCommonCharges()\">Save</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t<!-- <div class=\"row\">\n            <!-- column\n            <div class=\"col-md-12\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <form class=\"w-50 m-b-10\">\n                    <input type='text' class=\"form-control\" placeholder='Type to filter the name column...' (keyup)='updateFilter($event)' />\n                  </form>\n                  <div class=\"card-header bg-info\" style=\"background-color:#ffbd46!important;padding:5px;\">\n                    <h6 class=\"card-title text-white\"> LR Details</h6>\n                  </div>\n                  <ngx-datatable #tables class='material striped' [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"25\" [footerHeight]=\"25\"\n                    [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='rows'>\n                  </ngx-datatable>\n\n                </div>\n              </div>\n            </div>\n          </div> -->\n\n\t\t\t\t\t<!-- <div class=\"col-md-6\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h3 class=\"card-title\">Datepicker in a popup</h3>\n                <h6 class=\"card-subtitle\">This is datepicker with popup</h6>\n                <form class=\"form-inline\">\n                  <div class=\"form-group\">\n                    <div class=\"input-group\">\n                      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d>\n                      <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-secondary no-shadow\" (click)=\"d.toggle()\" type=\"button\">\n                          <i class=\"fa fa-calendar\"></i>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n\n                <!-- <hr/>\n                <pre>Model: {{ model2 | json }}</pre> \n              </div>\n            </div>\n          </div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/company/common-charges/common-charges.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/master/company/common-charges/common-charges.component.ts ***!
  \***************************************************************************/
/*! exports provided: CommonChargesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonChargesComponent", function() { return CommonChargesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dto/RateMaster-dto */ "./src/app/dto/RateMaster-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommonChargesComponent = /** @class */ (function () {
    function CommonChargesComponent(masterReadService, router, masterService, http) {
        var _this = this;
        this.masterReadService = masterReadService;
        this.router = router;
        this.masterService = masterService;
        this.http = http;
        this.rateMasterDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_3__["RateMasterDto"]();
        this.isLoggedIn = true;
        this.commonChargesId = 0;
        this.getCommonChargeDetailsList = function () {
            _this.getDetailsForCommonChgMasterRead();
            _this.masterReadService.getCommonChargesMasterDetails(_this.rateMasterDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.bankMasterDataList = response;
                    _this.rateMasterDto = _this.bankMasterDataList;
                    _this.commonChargesId = _this.rateMasterDto.id;
                    //                    console.log( this.rateMasterDto.isDDFlowApplicableOnLr );
                    //                    console.log( this.rateMasterDto.ddMinAmtOnLr );
                    //                    console.log( this.rateMasterDto.ddMinPercOnLr );
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
                title: "Error",
                text: "Server Error While Getting Common Charges Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.saveUpdateCommonChargesDetails = function () {
            _this.saveCommonChargesDetails();
            _this.masterService.createCommonCharges(_this.rateMasterDto).
                subscribe(function (data) {
                _this.rateMasterDtoSaveRet = data;
                //                console.log( this.rateMasterDtoSaveRet.status );
                if (_this.rateMasterDtoSaveRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
                        title: "Success",
                        text: "Common Charges Details Saved/Updated Successfull",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    //                    this.getCommonChargeDetailsList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
                        title: "Error",
                        text: "Error While Saving Common Charges Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
                    title: "Error",
                    text: "Server Error While Saving Common Charges Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
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
            this.getCommonChargeDetailsList();
        }
    }
    CommonChargesComponent.prototype.ngOnInit = function () {
    };
    //  service starts
    CommonChargesComponent.prototype.getDetailsForCommonChgMasterRead = function () {
        this.rateMasterDto.city = this.userDataDtoReturnSession.mainStation;
        this.rateMasterDto.status = "InUse";
        this.rateMasterDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    CommonChargesComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    CommonChargesComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    CommonChargesComponent.prototype.validateCommonCharges = function () {
        this.saveUpdateCommonChargesDetails();
    };
    CommonChargesComponent.prototype.saveCommonChargesDetails = function () {
        this.rateMasterDto.companyId = this.userDataDtoReturnSession.companyId;
        this.rateMasterDto.id = this.commonChargesId;
        this.rateMasterDto.userName = this.userDataDtoReturnSession.userId;
    };
    CommonChargesComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        $("#ddFlowInLrEntry").val('');
        this.commonChargesId = 0;
    };
    CommonChargesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-common-charges',
            template: __webpack_require__(/*! ./common-charges.component.html */ "./src/app/master/company/common-charges/common-charges.component.html"),
            styles: [__webpack_require__(/*! ./common-charges.component.css */ "./src/app/master/company/common-charges/common-charges.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_2__["MasterReadService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_5__["MasterService"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"]])
    ], CommonChargesComponent);
    return CommonChargesComponent;
}());



/***/ }),

/***/ "./src/app/master/company/company.module.ts":
/*!**************************************************!*\
  !*** ./src/app/master/company/company.module.ts ***!
  \**************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/autocomplete/autocomplete.module */ "./src/app/autocomplete/autocomplete.module.ts");
/* harmony import */ var src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/report/daily-report/daily-report.module */ "./src/app/report/daily-report/daily-report.module.ts");
/* harmony import */ var src_app_master_company_company_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/master/company/company.routing */ "./src/app/master/company/company.routing.ts");
/* harmony import */ var src_app_master_company_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/master/company/edit-company/edit-company.component */ "./src/app/master/company/edit-company/edit-company.component.ts");
/* harmony import */ var src_app_master_company_common_charges_common_charges_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/master/company/common-charges/common-charges.component */ "./src/app/master/company/common-charges/common-charges.component.ts");
/* harmony import */ var src_app_master_company_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/master/company/user-creation/user-creation.component */ "./src/app/master/company/user-creation/user-creation.component.ts");
/* harmony import */ var src_app_master_company_expenses_details_entry_expenses_details_entry_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/master/company/expenses-details-entry/expenses-details-entry.component */ "./src/app/master/company/expenses-details-entry/expenses-details-entry.component.ts");
/* harmony import */ var src_app_master_company_staff_master_staff_master_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/master/company/staff-master/staff-master.component */ "./src/app/master/company/staff-master/staff-master.component.ts");
/* harmony import */ var src_app_master_company_consignments_claim_settlement_entry_consignments_claim_settlement_entry_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/master/company/consignments-claim-settlement-entry/consignments-claim-settlement-entry.component */ "./src/app/master/company/consignments-claim-settlement-entry/consignments-claim-settlement-entry.component.ts");
/* harmony import */ var src_app_master_company_user_features_customization_user_features_customization_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/master/company/user-features-customization/user-features-customization.component */ "./src/app/master/company/user-features-customization/user-features-customization.component.ts");
/* harmony import */ var src_app_master_company_source_charges_setup_source_charges_setup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/master/company/source-charges-setup/source-charges-setup.component */ "./src/app/master/company/source-charges-setup/source-charges-setup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends









var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_master_company_company_routing__WEBPACK_IMPORTED_MODULE_10__["CompanyRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"]],
            declarations: [src_app_master_company_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_11__["EditCompanyComponent"], src_app_master_company_common_charges_common_charges_component__WEBPACK_IMPORTED_MODULE_12__["CommonChargesComponent"], src_app_master_company_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_13__["UserCreationComponent"], src_app_master_company_expenses_details_entry_expenses_details_entry_component__WEBPACK_IMPORTED_MODULE_14__["ExpensesDetailsEntryComponent"], src_app_master_company_staff_master_staff_master_component__WEBPACK_IMPORTED_MODULE_15__["StaffMasterComponent"], src_app_master_company_consignments_claim_settlement_entry_consignments_claim_settlement_entry_component__WEBPACK_IMPORTED_MODULE_16__["ConsignmentsClaimSettlementEntryComponent"], src_app_master_company_user_features_customization_user_features_customization_component__WEBPACK_IMPORTED_MODULE_17__["UserFeaturesCustomizationComponent"], src_app_master_company_source_charges_setup_source_charges_setup_component__WEBPACK_IMPORTED_MODULE_18__["SourceChargesSetupComponent"]]
        })
    ], CompanyModule);
    return CompanyModule;
}());



/***/ }),

/***/ "./src/app/master/company/company.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/master/company/company.routing.ts ***!
  \***************************************************/
/*! exports provided: CompanyRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutes", function() { return CompanyRoutes; });
/* harmony import */ var src_app_master_company_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/master/company/edit-company/edit-company.component */ "./src/app/master/company/edit-company/edit-company.component.ts");
/* harmony import */ var src_app_master_company_common_charges_common_charges_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/master/company/common-charges/common-charges.component */ "./src/app/master/company/common-charges/common-charges.component.ts");
/* harmony import */ var src_app_master_company_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/master/company/user-creation/user-creation.component */ "./src/app/master/company/user-creation/user-creation.component.ts");
/* harmony import */ var src_app_master_company_expenses_details_entry_expenses_details_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/master/company/expenses-details-entry/expenses-details-entry.component */ "./src/app/master/company/expenses-details-entry/expenses-details-entry.component.ts");
/* harmony import */ var src_app_master_company_staff_master_staff_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/master/company/staff-master/staff-master.component */ "./src/app/master/company/staff-master/staff-master.component.ts");
/* harmony import */ var src_app_master_company_consignments_claim_settlement_entry_consignments_claim_settlement_entry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/master/company/consignments-claim-settlement-entry/consignments-claim-settlement-entry.component */ "./src/app/master/company/consignments-claim-settlement-entry/consignments-claim-settlement-entry.component.ts");
/* harmony import */ var src_app_master_company_user_features_customization_user_features_customization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/master/company/user-features-customization/user-features-customization.component */ "./src/app/master/company/user-features-customization/user-features-customization.component.ts");
/* harmony import */ var src_app_master_company_source_charges_setup_source_charges_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/master/company/source-charges-setup/source-charges-setup.component */ "./src/app/master/company/source-charges-setup/source-charges-setup.component.ts");








var CompanyRoutes = [
    {
        path: '',
        children: [
            {
                path: 'editCompany',
                component: src_app_master_company_edit_company_edit_company_component__WEBPACK_IMPORTED_MODULE_0__["EditCompanyComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'commonCharges',
                component: src_app_master_company_common_charges_common_charges_component__WEBPACK_IMPORTED_MODULE_1__["CommonChargesComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'userCreation',
                component: src_app_master_company_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_2__["UserCreationComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'expensesDetailsEntry',
                component: src_app_master_company_expenses_details_entry_expenses_details_entry_component__WEBPACK_IMPORTED_MODULE_3__["ExpensesDetailsEntryComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'staffMaster',
                component: src_app_master_company_staff_master_staff_master_component__WEBPACK_IMPORTED_MODULE_4__["StaffMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'consignmentsClaimSettlementEntry',
                component: src_app_master_company_consignments_claim_settlement_entry_consignments_claim_settlement_entry_component__WEBPACK_IMPORTED_MODULE_5__["ConsignmentsClaimSettlementEntryComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'userFeaturesCustomization',
                component: src_app_master_company_user_features_customization_user_features_customization_component__WEBPACK_IMPORTED_MODULE_6__["UserFeaturesCustomizationComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'sourceChargesSetup',
                component: src_app_master_company_source_charges_setup_source_charges_setup_component__WEBPACK_IMPORTED_MODULE_7__["SourceChargesSetupComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/master/company/consignments-claim-settlement-entry/consignments-claim-settlement-entry.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/master/company/consignments-claim-settlement-entry/consignments-claim-settlement-entry.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jb21wYW55L2NvbnNpZ25tZW50cy1jbGFpbS1zZXR0bGVtZW50LWVudHJ5L2NvbnNpZ25tZW50cy1jbGFpbS1zZXR0bGVtZW50LWVudHJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/master/company/consignments-claim-settlement-entry/consignments-claim-settlement-entry.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/master/company/consignments-claim-settlement-entry/consignments-claim-settlement-entry.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Consignments Claim\n\t\t\t\t\t\tSettlement Entry</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Entry Type</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>LR Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #lrNumber type=\"text\" id=\"lrNumber\" name=\"lrNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDto.lrNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #destination type=\"text\" id=\"destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDto.destination\" name=\"destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\treadonly>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>No. Of Articles</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #totalArticles type=\"text\" id=\"totalArticles\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDto.totalArticles\" name=\"totalArticles\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\treadonly>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Goods Value</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-pound-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #goodsValue type=\"text\" id=\"goodsValue\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDto.goodsValue\" name=\"goodsValue\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\treadonly>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Settlement Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"settlementDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #settlementDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"settlementDate\" [(ngModel)]=\"lrDto.settlementDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"settlementDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Payment Mode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"paymentMode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"paymentMode\" #paymentMode\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"paymentModeMethod(paymentMode.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDto.settlementMode\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cash\" selected>Cash</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cheque\">Cheque</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #amount type=\"number\" id=\"amount\" name=\"amount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDto.settlementAmt\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"cheque\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"chequeDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cheque Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"chequeDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#chequeDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDto.chequeDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"chequeDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"cheque\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cheque No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"chequeNumber\" name=\"chequeNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDto.chequeNumber\" #chequeNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, bankName)\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"cheque\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bank Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-university\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"bankName\" name=\"bankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDto.bankName\" #bankName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, remark)\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Remark</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"remark\" name=\"remark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\trows=\"3\" [(ngModel)]=\"lrDto.remarks\" #remark></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: center; padding: 10px\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"doneBtn\" (click)=\"validateConsignmentClaim()\">Done</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"clearBtn\" (click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\tdsfsdkfmasdlkfnmasdlf -->\n\n\t\t\t\t\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDto.source\" placeholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"control\" [appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(sourceOptions | filter: control.value) as resultSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSource.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"formDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"fromDates\" ngbDatepicker #fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"toDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getConsignmentsClaimsSettlementEntryList()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\" id=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t style=\"border-bottom: 1px solid orange;\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Consignment Claim Settlement\n\t\t\t\t\t\t\t\t\t\t\t\t\tEntry Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsConsignmentsClaimSettlementEntry\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConsignmentsClaimSettlementEntry\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gst Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Settlement Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Payment Mode</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cheque Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cheque No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Bank Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Claim Docs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let consignmentsEntryData of consignmentsClaimSettlementEntryDataList \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\" rowSelected( consignmentsEntryData )\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consignmentsEntryData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consignmentsEntryData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consignmentsEntryData.gstNoConsignee }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consignmentsEntryData.settlementDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consignmentsEntryData.settlementMode }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consignmentsEntryData.settlementAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consignmentsEntryData.chequeDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consignmentsEntryData.chequeNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consignmentsEntryData.bankName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ consignmentsEntryData.imgURLTDS }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/master/company/consignments-claim-settlement-entry/consignments-claim-settlement-entry.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/master/company/consignments-claim-settlement-entry/consignments-claim-settlement-entry.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ConsignmentsClaimSettlementEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignmentsClaimSettlementEntryComponent", function() { return ConsignmentsClaimSettlementEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends
//for the select option with filter starts


//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends






var ConsignmentsClaimSettlementEntryComponent = /** @class */ (function () {
    function ConsignmentsClaimSettlementEntryComponent(/* for datatable starts */ masterService, /* for datatable endss */ 
    //  service starts
    http, masterReadService, router
    //            service ends
    ) {
        var _this = this;
        this.masterService = masterService;
        this.http = http;
        this.masterReadService = masterReadService;
        this.router = router;
        //    onDestroyUnsubscribtionConsignmentsClaimSettlementEntry: Subscription;
        //for input field hide and show starts
        this.cheque = false;
        this.isLoggedIn = true;
        //for datepicker ends
        this.loadingIndicator = true;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_3__["LRDto"]();
        this.consignmentId = 0;
        //for datepicker ends
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.sourceOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Delhi' },
            { id: 3, label: 'Gujarat' },
            { id: 4, label: 'Mimbai' }
        ];
        this.dtTriggerConsignmentsClaimSettlementEntry = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.saveUpdateConsignmentClaimDetails = function () {
            _this.saveEditConsignmentClaim();
            _this.masterService.createConsignmentClaim(_this.lrDto).
                subscribe(function (data) {
                _this.lrDtoSaveRet = data;
                //                console.log( this.lrDtoSaveRet.status );
                if (_this.lrDtoSaveRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Success",
                        text: "Consignment Claim Settlement Details Saved/Updated Successfull",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Error",
                        text: "Error While Saving Consignment Claim Settlement Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Error",
                    text: "Server Error While Saving Consignment Claim Settlement Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.getConsignmentsClaimsSettlementEntryList = function () {
            //        console.log( this.lrDto.companyId );
            _this.getConsignmentsClaimsSettlementEntryListRead();
            _this.masterReadService.getConsignmentsClaimsSettlementEntry(_this.lrDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.consignmentsClaimSettlementEntryDataList = response;
                    //                    console.log('from get ' +this.consignmentsClaimSettlementEntryDataList);
                    _this.dtTriggerConsignmentsClaimSettlementEntry.next();
                    //                    console.log( this.consignmentsClaimSettlementEntryDataList[0] );
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Error",
                text: "Server Error While Getting Nature Of Pack Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //            sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
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
            //          userdata get through from login starts
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
        }
    }
    ConsignmentsClaimSettlementEntryComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    ConsignmentsClaimSettlementEntryComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ConsignmentsClaimSettlementEntryComponent.prototype.ngOnInit = function () {
    };
    ConsignmentsClaimSettlementEntryComponent.prototype.consignmentsCliamSettlementEntryDataTable = function () {
        this.dtOptionsConsignmentsClaimSettlementEntry = {
            //};
            // the below code is for button export starts
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    exportOptions: {
                        columns: ':visible'
                    }
                }
            ],
            // the below code is for button export ends
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
            "scrollY": 200,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //        this.gettingDataFrmServiceFrConsignmentsClaimSettlementEntryTable = this.consignmentsClaimSettlementEntryScreen.getSummaryData()
        ////        this.onDestroyUnsubscribtionConsignmentsClaimSettlementEntry = this.gettingDataFrmServiceFrConsignmentsClaimSettlementEntryTable.subscribe( data => {
        //            this.consignmentsClaimSettlementEntryDataList = data['data'];
        //            this.dtTriggerConsignmentsClaimSettlementEntry.next();
        //        } );
        //the below code is for the getting data through json ends
    };
    ConsignmentsClaimSettlementEntryComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerConsignmentsClaimSettlementEntry.unsubscribe();
        //        this.onDestroyUnsubscribtionConsignmentsClaimSettlementEntry.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    ConsignmentsClaimSettlementEntryComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for input field hide and show starts
    ConsignmentsClaimSettlementEntryComponent.prototype.paymentModeMethod = function (paymentMode) {
        if (paymentMode === 'Cheque') {
            this.cheque = true;
        }
        else {
            this.cheque = false;
        }
    };
    //for input field hide and show starts
    ConsignmentsClaimSettlementEntryComponent.prototype.validateConsignmentClaim = function () {
        this.saveUpdateConsignmentClaimDetails();
    };
    ConsignmentsClaimSettlementEntryComponent.prototype.saveEditConsignmentClaim = function () {
        this.lrDto.id = this.consignmentId;
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDto.userName = this.userDataDtoReturnSession.userId;
        if (this.lrDto.settlementAmt == null) {
            this.lrDto.settlementAmt == 0.0;
        }
        this.lrDto.settlementDate = null;
        this.lrDto.chequeDate = null;
        //        var fromDate = $( "#settlementDate" ).val();
        //        console.log( fromDate );
    };
    ConsignmentsClaimSettlementEntryComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        this.consignmentId = 0;
        $("#paymentMode").val('');
        $("#remark").val('');
        $("#bankName").val('');
        $("#chequeNumber").val('');
        this.cheque = false;
    };
    ConsignmentsClaimSettlementEntryComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    //to insert value of selected row in table to input field starts
    ConsignmentsClaimSettlementEntryComponent.prototype.rowSelected = function (consignmentsEntryData) {
        //        console.log('from click ' +consignmentsEntryData.lrNumber);
        this.lrDto.lrNumber = consignmentsEntryData.lrNumber;
        this.lrDto.destination = consignmentsEntryData.destination;
        this.lrDto.totalArticles = consignmentsEntryData.totalArticles;
        this.lrDto.goodsValue = consignmentsEntryData.goodsValue;
        this.lrDto.settlementMode = consignmentsEntryData.settlementMode;
        this.lrDto.settlementDate = consignmentsEntryData.settlementDate;
        this.lrDto.settlementAmt = consignmentsEntryData.settlementAmt;
        this.lrDto.remarks = consignmentsEntryData.remarks;
        this.consignmentId = consignmentsEntryData.id;
        //        console.log('from click ' + this.lrDto.lrNumber, this.lrDto.destination);
        if (this.lrDto.settlementMode != null && this.lrDto.settlementMode == "Cheque") {
            $("#bankName").val('');
            $("#chequeNumber").val('');
            this.lrDto.chequeDate = consignmentsEntryData.chequeDate;
            this.lrDto.chequeNumber = consignmentsEntryData.chequeNumber;
            this.lrDto.bankName = consignmentsEntryData.bankName;
            this.cheque = true;
        }
        else {
            this.lrDto.chequeDate = null;
            this.lrDto.chequeNumber = "";
            this.lrDto.bankName = "";
            this.cheque = false;
            $("#bankName").val('');
            $("#chequeNumber").val('');
        }
        //        console.log( this.selectedName );
    };
    //to insert value of selected row in table to input field ends
    ConsignmentsClaimSettlementEntryComponent.prototype.getConsignmentsClaimsSettlementEntryListRead = function () {
        this.lrDto.fromdate;
        this.lrDto.todate;
        this.lrDto.destination = this.userDataDtoReturnSession.mainStation;
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDto.mode = "destination";
        this.lrDto.source;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ConsignmentsClaimSettlementEntryComponent.prototype, "dtElements", void 0);
    ConsignmentsClaimSettlementEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignments-claim-settlement-entry',
            template: __webpack_require__(/*! ./consignments-claim-settlement-entry.component.html */ "./src/app/master/company/consignments-claim-settlement-entry/consignments-claim-settlement-entry.component.html"),
            styles: [__webpack_require__(/*! ./consignments-claim-settlement-entry.component.css */ "./src/app/master/company/consignments-claim-settlement-entry/consignments-claim-settlement-entry.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_8__["Http"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__["MasterReadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
            //            service ends
        ])
    ], ConsignmentsClaimSettlementEntryComponent);
    return ConsignmentsClaimSettlementEntryComponent;
}());



/***/ }),

/***/ "./src/app/master/company/edit-company/edit-company.component.css":
/*!************************************************************************!*\
  !*** ./src/app/master/company/edit-company/edit-company.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable {\r\n\theight: 220px;\r\n}\r\n\r\n::ng-deep ngb-typeahead-window {\r\n\t  top:26px;\r\n\t  left:25px;\r\n\t  max-height: 200px;\r\n\t  overflow-y: auto;\r\n\t  position: absolute;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NvbXBhbnkvZWRpdC1jb21wYW55L2VkaXQtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsY0FBYztDQUNkOztBQUVEO0dBQ0csU0FBUztHQUNULFVBQVU7R0FDVixrQkFBa0I7R0FDbEIsaUJBQWlCO0dBQ2pCLG1CQUFtQjtHQUNuQiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jb21wYW55L2VkaXQtY29tcGFueS9lZGl0LWNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLmRhdGFUYWJsZSB7XHJcblx0aGVpZ2h0OiAyMjBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93IHtcclxuXHQgIHRvcDoyNnB4O1xyXG5cdCAgbGVmdDoyNXB4O1xyXG5cdCAgbWF4LWhlaWdodDogMjAwcHg7XHJcblx0ICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cdCAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/master/company/edit-company/edit-company.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/master/company/edit-company/edit-company.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Edit Company</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3 p-t-5\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Address Setup</h6>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea #address class=\"form-control\" rows=\"2\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"address\" name=\"address\" name=\"address\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.addressEditCompany\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Pincode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #pincode (keyup)=\"fieldFocus($event, teleNum)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"pincode\" name=\"pincode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.pinCode\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Telephone Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #teleNum (keyup)=\"fieldFocus($event, city)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"teleNum\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"teleNum\" [(ngModel)]=\"userDataDto.phoneEditCompany\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #city (keyup)=\"fieldFocus($event, faxNum)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" id=\"city\" name=\"city\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.city\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Fax Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #faxNum (keyup)=\"fieldFocus($event, emailId)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"faxNum\" name=\"faxNum\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.faxNo\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Email-Id</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #emailId (keyup)=\"fieldFocus($event, password)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"emailId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"emailId\" [(ngModel)]=\"userDataDto.cmpEmailId\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-lock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #password (keyup)=\"fieldFocus($event, cheatCode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"password\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"password\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"password\" [(ngModel)]=\"userDataDto.cmpEmailPassword\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #cheatCode\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, receiptCharges)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"cheatCode\" name=\"cheatCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.cheatCode\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 vl p-t-5\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Charges Setup</h6>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Receipt Charges</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #receiptCharges\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, serviceCharges)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"receiptCharges\" name=\"receiptCharges\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.rcChg\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Service Charges</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #serviceCharges\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, destHamaliPerArt)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"serviceCharges\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"serviceCharges\" [(ngModel)]=\"userDataDto.scChg\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Dest.Hamali Per Art.(only for bkg memo)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #destHamaliPerArt\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, srdPerc)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Use Only For Booking Memo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"destHamaliPerArt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"destHamaliPerArt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.destHamaliPerArt\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" *ngIf=\"hideShowSRDPercInputField\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>SRD Percentage</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #srdPerc (keyup)=\"fieldFocus($event, hamaliPerc)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"srdPerc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"srdPerc\" [(ngModel)]=\"userDataDto.srdPercentage\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"*ngIf=\"hideShowHamaliPercInputField\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Hamali Percentage</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #hamaliPerc\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, unloadingChg)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"hamaliPerc\" name=\"hamaliPerc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.hamaliPercentage\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Unloading Charge(Door Delivery) </label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #unloadingChg (keyup)=\"fieldFocus($event, unit)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"unloadingChg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"unloadingChg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.unloadingHamaliChg\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Unit(Door Delivery)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select #unit class=\"custom-select col-12\" id=\"unit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"unit\" [(ngModel)]=\"userDataDto.unit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select.....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Article\">Article</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Actual Weight\">Actual Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Charged Weight\">Charged Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Unloading Charge(Godown Delivery) </label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #unloadingChg (keyup)=\"fieldFocus($event, unit)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"unloadingChgGodownDelivery\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"unloadingChgGodownDelivery\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.unloadingHamaliChgGD\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Unit(Godown Delivery)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select #unit class=\"custom-select col-12\" \n\t\t\t\t\t\t\t\t\t\t\t\t  id=\"unitGodownDelivery\"name=\"unitGodownDelivery\" \n\t\t\t\t\t\t\t\t\t\t\t\t   [(ngModel)]=\"userDataDto.unitGD\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select.....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Article\">Article</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Actual Weight\">Actual Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Charged Weight\">Charged Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-md-3 vl p-t-5\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">SMS & E-mail Configuration</h6>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Remainder SMS Duration</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #incentiveDays\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, inRemindSms)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"incentiveDays\" name=\"incentiveDays\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.smsDuration\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Remainder SMS</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select #inRemindSms class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inRemindSms\" name=\"inRemindSms\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.inRemindSms\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"true\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"false\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Stocks SMS</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select #inStockSms class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inStockSms\" name=\"inStockSms\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.inStockSms\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"true\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"false\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Pending Stock SMS</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select #deliveryPendingStockSms\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\" id=\"deliveryPendingStockSms\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"deliveryPendingStockSms\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.deliveryPendingStockSms\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"true\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option [ngValue]=\"false\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<!--Here Start New Change-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #selectedEmail type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"selectedEmail\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"selectedEmail\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.selectedEmail\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\" style=\"display:none;\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input  #hiddenIndex type=\"number\" id=\"hiddenIndex\" name =\"hiddenIndex\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" type='button' id=\"addInTable\" #addBtn\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\"class=\"btn btn-icon-only yellow\" (click)=\"addInTable();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus\"  title=\"Add\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;  background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDelete()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"editCompanyDatatableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsEditCompany\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerEditCompany\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Email Id</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let editCompanyData of allEmails; let i = index\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedEdit(editCompanyData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ editCompanyData }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- Here End a new change-->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 vl p-t-5\">\n\t\t\t\t\t\t\t\t<!--Here Start New Added-->\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Other Charge Setup - Door Delivery</h6>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-7\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input  id=\"otherChargeArea\" type=\"text\"class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForOtherChargeArea($event)\"  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelOtherChargeArea\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchOtherChargeArea\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t    [resultFormatter]=\"formatterOtherChargeArea\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterOtherChargeArea\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusOtherChargeAreaTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select the Area\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select #basedOn class=\"custom-select col-12\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  id=\"basedOnId\"name=\"basedOnId\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Based On\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select.....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Article\">Article</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Lumpsum\">Lumpsum</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #otherChgAmt type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"otherChargeAmountId\" name=\"otherChargeAmountId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\" style=\"display:none;\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input  #hiddenIndexOtherCharges type=\"number\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"hiddenIndexOtherChgId\" name =\"hiddenIndexOtherChgId\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" type='button' id=\"addInTableOtherChargeBtnId\" #addBtn\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;\"class=\"btn btn-icon-only yellow\" (click)=\"addInTableOtherCharge();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus\"  title=\"Add\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;  background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedOtherChargeOnDelete()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"otherChargeDatatableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsOtherChargeDatatable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerOtherChargeDatatable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Area</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Based On</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charges</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let editOtherChargeData of gridTosetOtherChargeList; let i = index\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedOtherChargeDataOnEdit(editOtherChargeData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ editOtherChargeData.areaOfDelivery }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ editOtherChargeData.ratePerUnit }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ editOtherChargeData.chqAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t\t\t<!-- Here End a new added-->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\" style=\"text-align: end;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"saveBtn\" (click)=\"validateEditCompanyDetails()\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #selectedEmail type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"selectedEmail\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"selectedEmail\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.selectedEmail\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"display:none;\" >\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<input  #hiddenIndex type=\"number\" id=\"hiddenIndex\" name =\"hiddenIndex\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" type='button' id=\"addInTable\" #addBtn\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-icon-only yellow\" (click)=\"addInTable();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDelete()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" style=\"item-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"editCompanyDatatableId\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsEditCompany\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerEditCompany\">\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Email Id</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let editCompanyData of allEmails; let i = index\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedEdit(editCompanyData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ editCompanyData }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--<div class=\"row\">\n\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\tid=\"saveBtn\" (click)=\"validateEditCompanyDetails()\">Save</button>\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t\t(click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>-->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/master/company/edit-company/edit-company.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/master/company/edit-company/edit-company.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyComponent", function() { return EditCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for datatable starts


//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends
//for datatable ends
//service starts


//import { PartyModel } from "src/app/models/party-model";
//service ends
//sweet alert starts

//sweet alert ends







var EditCompanyComponent = /** @class */ (function () {
    function EditCompanyComponent(/* for datatable starts */ masterReadService, /* for datatable endss */ 
    //  service starts
    http, router, masterService) {
        var _this = this;
        this.masterReadService = masterReadService;
        this.http = http;
        this.router = router;
        this.masterService = masterService;
        //for datatable starts
        //    gettingDataFrmServiceFrEditCompanyTable: any;
        //  userdata get through from login starts
        this.isLoggedIn = true;
        this.newAttribute = {};
        this.editEmailId = null;
        //    onDestroyUnsubscribtionEditCompany: Subscription;
        //for datatable ends
        //service starts      
        //    partyModel: PartyModel = new PartyModel();
        this.baseUrl = '/api/v1/createconsignee';
        //    masterDto: MasterDto = new MasterDto();
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_5__["UserDataDto"]();
        //    perUnit: string;
        //    consigneeDetailsModel: ConsigneedetailsModel = new ConsigneedetailsModel();
        //    service ends
        this.loadingIndicator = true;
        this.dtTriggerEditCompany = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dtTriggerOtherChargeDatatable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.editCompanyId = 0;
        //for datatable ends
        this.controlOtherChargeArea = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.otherChargeAreaTA = [];
        this.focusOtherChargeAreaTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchOtherChargeArea = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusOtherChargeAreaTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (term) { return (term === '' ? _this.otherChargeAreaTA
                : _this.otherChargeAreaTA.filter(function (v) { return v.destination; })).slice(0, 200); }));
        };
        this.formatterOtherChargeArea = function (x) { return x.destination; };
        this.gridTosetOtherChargeList = [];
        this.newAttributeTosetOtherCharges = {};
        this.editOtherChargesId = null;
        this.lrDtosOtherChargesReturnType = [];
        this.lrDtosOtherCharge = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.hideShowSRDPercInputField = true;
        this.hideShowHamaliPercInputField = true;
        this.rightsForMainStation = "rights to show Srd Perc and Hamali Perc only for chennai";
        this.getEditCompanyList = function () {
            _this.getEditCompanyDetails();
            _this.masterReadService.getEditCompany(_this.userDataDto).subscribe(function (response) {
                if (response) {
                    _this.userDataDtoGet = response;
                    $("#editCompanyDatatableId").DataTable().destroy();
                    _this.dtTriggerEditCompany.next();
                    _this.userDataDto = _this.userDataDtoGet;
                    _this.editCompanyId = _this.userDataDtoGet.id;
                    if (_this.userDataDto.allEmailId != null && _this.userDataDto.allEmailId != "NA") {
                        _this.emails = _this.userDataDto.allEmailId;
                        _this.allEmails = _this.emails.split('#');
                    }
                    //Other Charge set here
                    $("#otherChargeDatatableId").DataTable().destroy();
                    for (var i = 0; i < _this.userDataDtoGet.lrDtos.length; i++) {
                        _this.gridTosetOtherChargeList.push(_this.userDataDtoGet.lrDtos[i]);
                    }
                    _this.dtTriggerOtherChargeDatatable.next();
                }
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Error",
                text: "Server Error While Getting Edit Company Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
            //        console.log( this.userDataDto.mainStation );
        };
        this.saveUpdateEditCompanyDetails = function () {
            console.log(_this.userDataDto);
            _this.saveEditCompanyDetails();
            _this.masterService.createEditCompany(_this.userDataDto).
                subscribe(function (data) {
                _this.userDataDtoSaveRet = data;
                //                console.log( this.userDataDtoSaveRet.status );
                if (_this.userDataDtoSaveRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Success",
                        text: "Edit Company Details Saved/Updated Successfull",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    //this.clearAll();
                    // this.getEditCompanyList();
                    //this.editCompanyDatatable();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Error",
                        text: "Error While Saving Edit Company Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Error",
                    text: "Server Error While Saving Edit Company Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.getBranchAreaDetailsList = function () {
            _this.getBranchAreaDetails();
            _this.masterReadService.getBranchAreas(_this.lrDto).subscribe(function (response) {
                console.log(response);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "No Truck Capacity records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.controlOtherChargeArea.reset();
                    _this.otherChargeAreaOptions = [];
                    _this.otherChargeAreaTA = [];
                }
                else {
                    _this.controlOtherChargeArea.reset();
                    _this.otherChargeAreaOptions = response;
                    _this.otherChargeAreaTA = [];
                    for (var i = 0; i < _this.otherChargeAreaOptions.length; i++) {
                        _this.otherChargeAreaTA.push(_this.otherChargeAreaOptions[i]);
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //            sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
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
            //          userdata get through from login starts
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.getEditCompanyList();
            this.editCompanyDatatable();
            this.getBranchAreaDetailsList();
            //if(this.rightsForMainStation == "rights to show Srd Perc and Hamali Perc only for chennai"){
            if (this.userDataDtoReturnSession.mainStation == "Chennai") {
                this.hideShowSRDPercInputField = true;
                this.hideShowHamaliPercInputField = true;
            }
            else {
                this.hideShowSRDPercInputField = false;
                this.hideShowHamaliPercInputField = false;
            }
        }
    }
    /* for datatable starts */
    EditCompanyComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement, index) {
            // dtElement.dtInstance.then(( dtInstance: DataTables.Api ) => {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                //dtInstance.destroy();
            });
        });
    };
    EditCompanyComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerOtherChargeDatatable.next();
    };
    /* for datatable ends */
    EditCompanyComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    EditCompanyComponent.prototype.ngOnInit = function () {
    };
    EditCompanyComponent.prototype.editCompanyDatatable = function () {
        this.dtOptionsEditCompany = {
            columns: [
                {
                    title: 'Email Id',
                    data: 'emailId'
                }
            ],
            dom: 'Bfrtip',
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 150,
            "scrollCollapse": true,
            "paging": false,
            "info": false,
        },
            this.dtOptionsOtherChargeDatatable = {
                dom: 'Bfrtip',
                buttons: [],
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                processing: true,
                responsive: true,
                "scrollX": true,
                "scrollY": 200,
                "scrollCollapse": true,
                "paging": false,
                "info": false,
            };
    };
    EditCompanyComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerEditCompany.unsubscribe();
        this.dtTriggerOtherChargeDatatable.unsubscribe();
        // this.onDestroyUnsubscribtionEditCompany.unsubscribe();
    };
    //  service starts
    EditCompanyComponent.prototype.getEditCompanyDetails = function () {
        this.userDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDto.mainStation = this.userDataDtoReturnSession.mainStation;
        this.userDataDto.city = this.userDataDtoReturnSession.mainStation;
    };
    //to insert value of selected row in table to input field starts
    EditCompanyComponent.prototype.rowSelected = function (editCompanyData) {
        this.userDataDto.selectedEmail = editCompanyData;
        //        this.userDataDto.id = this.editCompanyId;
        //        console.log( this.userDataDto.selectedEmail );
    };
    //to insert value of selected row in table to input field ends
    //    redirect to other page starts
    EditCompanyComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    //  redirect to other page ends
    //    service ends
    EditCompanyComponent.prototype.validateEditCompanyDetails = function () {
        this.saveUpdateEditCompanyDetails();
    };
    EditCompanyComponent.prototype.saveEditCompanyDetails = function () {
        if (this.editCompanyId == null) {
            this.userDataDto.id = 0;
        }
        else {
            this.userDataDto.id = this.editCompanyId;
        }
        this.userDataDto.mainStation = this.userDataDtoReturnSession.mainStation;
        this.userDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDto.userName = this.userDataDtoReturnSession.userId;
        this.userDataDto.listOfEmails = this.allEmails;
        this.userDataDto.lrDtos = this.getOtherChgValues();
        //        this.emailIdNew =null;
        //        for ( int i = 0; i < storeEmail.getCount(); i++) {
        //            emailIdNew = emailIdNew + "#"
        //                + storeEmail.getModels().get( i ).getConsigneeName();
        //        }
        //
        //        this.userDataDto.allEmailId = this.emailIdNew;
    };
    EditCompanyComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        $("#unit").val('');
        $("#address").val('');
        $("#unitGodownDelivery").val('');
        this.editCompanyId = 0;
        this.allEmails = null;
        $("#basedOnId").val('');
        this.gridTosetOtherChargeList = null;
        //if(this.rightsForMainStation == "rights to show Srd Perc and Hamali Perc only for chennai"){
        if (this.userDataDtoReturnSession.mainStation == "Chennai") {
            this.hideShowSRDPercInputField = true;
            this.hideShowHamaliPercInputField = true;
        }
        else {
            this.hideShowSRDPercInputField = false;
            this.hideShowHamaliPercInputField = false;
        }
    };
    EditCompanyComponent.prototype.addInTable = function () {
        var _this = this;
        this.newAttribute.emailId = null;
        this.newAttribute.emailId = $("#selectedEmail").val();
        if (this.newAttribute.emailId != '') {
            if (this.editEmailId != null) {
                this.allEmails.splice(this.editEmailId, 1);
            }
            if (this.allEmails == null) {
                this.allEmails = [];
            }
            /* if ( this.allEmails.length == 0 ) {
                 $("#editCompanyDatatableId").DataTable().destroy();
                 this.allEmails.push( this.newAttribute.emailId );
                 this.dtTriggerEditCompany.next();
             } else {
                 console.log("Cond - 4");
                 console.log(this.allEmails);
                 $("#editCompanyDatatableId").DataTable().destroy();
                 this.allEmails.push(this.newAttribute.emailId);
                 console.log(this.allEmails);
                 this.dtTriggerEditCompany.next();
                 console.log(this.allEmails);
                 console.log($("#editCompanyDatatableId").DataTable().length);
             }*/
            this.allEmails.push(this.newAttribute.emailId);
            this.dtElements.forEach(function (dtElement, index) {
                dtElement.dtInstance.then(function (dtInstance) {
                    console.log("The DataTable " + index + " instance ID is: " + dtInstance.table().node().id);
                    if (dtInstance.table().node().id == "editCompanyDatatableId") {
                        dtInstance.destroy();
                        _this.dtTriggerEditCompany.next();
                    }
                });
            });
            this.newAttribute = {};
            $("#selectedEmail").val('');
            $("#hiddenIndex").val('');
            this.editEmailId = null;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Warning",
                text: "Please Enter the Email Id",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    EditCompanyComponent.prototype.rowSelectedEdit = function (editCompanyData, index) {
        $("#selectedEmail").val(editCompanyData);
        $("#hiddenIndex").val(index);
        this.editEmailId = index;
    };
    EditCompanyComponent.prototype.rowSelectedDelete = function () {
        this.editEmailId = $("#hiddenIndex").val();
        this.allEmails.splice(this.editEmailId, 1);
        $("#selectedEmail").val('');
        $("#hiddenIndex").val('');
        this.editEmailId = null;
        console.log("delete Status:", +this.allEmails);
    };
    EditCompanyComponent.prototype.getBranchAreaDetails = function () {
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.lrDto.branch = this.userDataDtoReturnSession.office;
        // this.lrDto.mode = this.userDataDtoReturnSession.mainStation;
        this.lrDto.mode = "ALL";
        this.lrDto.mainstation = this.userDataDtoReturnSession.mainStation;
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    EditCompanyComponent.prototype.clickListnerForOtherChargeArea = function (e, fubi) {
        this.modelOtherChargeArea = e.item;
        $("#otherChargeArea").val(this.modelOtherChargeArea.destination);
    };
    EditCompanyComponent.prototype.focusOtherChargeAreaTA = function (e) {
        if (e.keyCode == 13) {
            //$( "#loaderStaffName" ).focus();
        }
    };
    EditCompanyComponent.prototype.addInTableOtherCharge = function () {
        if (($("#otherChargeArea").val() == null) || ($("#otherChargeArea").val() == undefined) ||
            ($("#otherChargeArea").val() == "") || ($("#basedOnId").val() == null) ||
            ($("#basedOnId").val() == undefined) || ($("#basedOnId").val() == "") ||
            ($("#otherChargeAmountId").val() == null) || ($("#otherChargeAmountId").val() == undefined) ||
            ($("#otherChargeAmountId").val() == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Not Allowed", "Please enter all the details to proceed", "warning");
            return false;
        }
        else {
            this.addRowOtherChg();
        }
    };
    EditCompanyComponent.prototype.addRowOtherChg = function () {
        var _this = this;
        this.newAttributeTosetOtherCharges.areaOfDelivery = $("#otherChargeArea").val();
        this.newAttributeTosetOtherCharges.ratePerUnit = $("#basedOnId").val();
        this.newAttributeTosetOtherCharges.chqAmt = $("#otherChargeAmountId").val();
        if (this.editOtherChargesId != null) {
            this.gridTosetOtherChargeList.splice(this.editOtherChargesId, 1);
        }
        if (this.gridTosetOtherChargeList == null) {
            this.gridTosetOtherChargeList = [];
        }
        if (this.gridTosetOtherChargeList.length == 0) {
            $("#otherChargeDatatableId").DataTable().destroy();
            this.gridTosetOtherChargeList.push(this.newAttributeTosetOtherCharges);
            this.dtTriggerOtherChargeDatatable.next();
        }
        else {
            //console.log(this.newAttributeTosetOtherCharges);
            //console.log(this.gridTosetOtherChargeList);
            var result = this.gridTosetOtherChargeList.filter(function (otherChargeData) {
                return otherChargeData.areaOfDelivery === _this.newAttributeTosetOtherCharges.areaOfDelivery;
            });
            //console.log( result );
            if (result.length > 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Duplicate Entry", "The entered Area is already available," +
                    "please select different area or edit it!", "warning");
            }
            else {
                $("#otherChargeDatatableId").DataTable().destroy();
                this.gridTosetOtherChargeList.push(this.newAttributeTosetOtherCharges);
                this.dtTriggerOtherChargeDatatable.next();
            }
        }
        this.newAttributeTosetOtherCharges = {};
        $("#otherChargeArea").val('');
        $("#basedOnId").val('');
        $("#otherChargeAmountId").val('');
        $("#hiddenIndexOtherChgId").val('');
        this.editOtherChargesId = null;
    };
    EditCompanyComponent.prototype.rowSelectedOtherChargeDataOnEdit = function (editOtherChargeData, index) {
        console.log(editOtherChargeData);
        $("#otherChargeArea").val(editOtherChargeData.areaOfDelivery);
        $("#basedOnId").val(editOtherChargeData.ratePerUnit);
        $("#otherChargeAmountId").val(editOtherChargeData.chqAmt);
        this.editOtherChargesId = index;
    };
    EditCompanyComponent.prototype.getOtherChgValues = function () {
        this.lrDtosOtherChargesReturnType = [];
        for (var i = 0; i < this.gridTosetOtherChargeList.length; i++) {
            this.lrDtosOtherCharge = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
            this.lrDtosOtherCharge.areaOfDelivery = this.gridTosetOtherChargeList[i].areaOfDelivery;
            this.lrDtosOtherCharge.ratePerUnit = this.gridTosetOtherChargeList[i].ratePerUnit;
            this.lrDtosOtherCharge.chqAmt = this.gridTosetOtherChargeList[i].chqAmt;
            this.lrDtosOtherCharge.deliveryType = "DD";
            this.lrDtosOtherChargesReturnType.push(this.lrDtosOtherCharge);
        }
        return this.lrDtosOtherChargesReturnType;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], EditCompanyComponent.prototype, "dtElements", void 0);
    EditCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-company',
            template: __webpack_require__(/*! ./edit-company.component.html */ "./src/app/master/company/edit-company/edit-company.component.html"),
            styles: [__webpack_require__(/*! ./edit-company.component.css */ "./src/app/master/company/edit-company/edit-company.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_3__["MasterReadService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"]])
    ], EditCompanyComponent);
    return EditCompanyComponent;
}());



/***/ }),

/***/ "./src/app/master/company/expenses-details-entry/expenses-details-entry.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/master/company/expenses-details-entry/expenses-details-entry.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n\twidth: 100%;\n\tmargin: 3px;\n}\n\n@media ( max-width : 767px) {\n\t.lineBottom_custom {\n\t\tmargin-bottom: 10px;\n\t\tborder-bottom: 1px solid #cebd9f;\n\t}\n}\n\n@media ( min-width : 768px) {\n\t.lineBottom_custom {\n\t\tborder-right: 1px solid #cebd9f;\n\t\theight: auto;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NvbXBhbnkvZXhwZW5zZXMtZGV0YWlscy1lbnRyeS9leHBlbnNlcy1kZXRhaWxzLWVudHJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaOztBQUVEO0NBQ0M7RUFDQyxvQkFBb0I7RUFDcEIsaUNBQWlDO0VBQ2pDO0NBQ0Q7O0FBRUQ7Q0FDQztFQUNDLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2I7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jb21wYW55L2V4cGVuc2VzLWRldGFpbHMtZW50cnkvZXhwZW5zZXMtZGV0YWlscy1lbnRyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiAzcHg7XG59XG5cbkBtZWRpYSAoIG1heC13aWR0aCA6IDc2N3B4KSB7XG5cdC5saW5lQm90dG9tX2N1c3RvbSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlYmQ5Zjtcblx0fVxufVxuXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjhweCkge1xuXHQubGluZUJvdHRvbV9jdXN0b20ge1xuXHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWJkOWY7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG59Il19 */"

/***/ }),

/***/ "./src/app/master/company/expenses-details-entry/expenses-details-entry.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/master/company/expenses-details-entry/expenses-details-entry.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Expenses Details Entry</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3 lineBottom_custom\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"dateWise\">Date Wise</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"partyWise\">Party Wise</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"areaWise\">Area Wise</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"collectionManWise\">Collection Man -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWise</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</select> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"padding: 10px;\" class=\"card-title\">Bill\n\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"billNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bill Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"billDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bill Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"billDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#billDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"billDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"vendorName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Vendor\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(vendorOptions | filter: control.value) as resultVendor\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultVendor\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultVendor.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"padding: 10px;\" class=\"card-title\">Item\n\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts  -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"itemName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Item Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Item\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(itemOptions | filter: control.value) as resultItem\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultItem\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultItem.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"quantity\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Quantity</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe third autocomplete starts  -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"unit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Unit</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Unit\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(unitOptions | filter: control.value) as resultUnit\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultUnit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultUnit.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe third autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"rate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Rate</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"amount\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center; padding: 10px\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"nextItemBtn\">Next Item</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body p-b-10\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsExpensesDetailsEntry\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerExpensesDetailsEntry\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Particulars</th>\n\t\t\t\t\t\t\t\t\t\t<th>Quantity</th>\n\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\n\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let expensesDetailsEntryData of expensesDetailsEntryDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ expensesDetailsEntryData.particulars }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ expensesDetailsEntryData.quantity }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ expensesDetailsEntryData.unit }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ expensesDetailsEntryData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ expensesDetailsEntryData.amount }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\" style=\"padding: 10px;\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style=\"padding: 5px;\" class=\"card-title\">Total</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"grandTotal\">\n\t\t\t\t\t\t\t\t\t\t<label>Grand Total</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\tid=\"finishBillhBtn\">Finish Bill</button>\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/master/company/expenses-details-entry/expenses-details-entry.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/master/company/expenses-details-entry/expenses-details-entry.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ExpensesDetailsEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesDetailsEntryComponent", function() { return ExpensesDetailsEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends
//for the select option with filter starts

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


var ExpensesDetailsEntryComponent = /** @class */ (function () {
    function ExpensesDetailsEntryComponent(expensesDetailsEntrys) {
        this.expensesDetailsEntrys = expensesDetailsEntrys;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.vendorOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'K.G. Associates' },
            { id: 3, label: 'KK Enterprises' },
            { id: 4, label: 'KC Enterprises' }
        ];
        this.itemOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'DD' },
            { id: 3, label: 'Local' },
            { id: 4, label: 'Long DD' }
        ];
        this.unitOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Aamer' },
            { id: 3, label: 'Afzal' },
            { id: 3, label: 'Arif' }
        ];
        this.dtTriggerExpensesDetailsEntry = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ExpensesDetailsEntryComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ExpensesDetailsEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsExpensesDetailsEntry = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Particulars',
                    data: 'particulars'
                },
                {
                    title: 'Quantity',
                    data: 'quantity'
                },
                {
                    title: 'Unit',
                    data: 'unit'
                },
                {
                    title: 'Rate',
                    data: 'rate'
                },
                {
                    title: 'Amount',
                    data: 'amount'
                }
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
            //                {
            //                    extend: 'print',
            //                    text: '<i class="fas fa-print"> Print</i>',
            //                    titleAttr: 'Print',
            //
            //                },
            //                {
            //                    extend: 'excel',
            //                    text: '<i class="fas fa-file-excel"> Excel</i>',
            //                    titleAttr: 'Excel',
            //                    exportOptions: {
            //                        columns: ':visible'
            //                    }
            //                }
            ],
            // the below code is for button export ends
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
            "scrollY": 380,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.gettingDataFrmServiceFrExpensesDetailsEntryTable = this.expensesDetailsEntrys.getSummaryData();
        this.onDestroyUnsubscribtionExpensesDetailsEntry = this.gettingDataFrmServiceFrExpensesDetailsEntryTable.subscribe(function (data) {
            _this.expensesDetailsEntryDataList = data['data'];
            _this.dtTriggerExpensesDetailsEntry.next();
        });
        //the below code is for the getting data through json ends
    };
    ExpensesDetailsEntryComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerExpensesDetailsEntry.unsubscribe();
        this.onDestroyUnsubscribtionExpensesDetailsEntry.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    ExpensesDetailsEntryComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    ExpensesDetailsEntryComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ExpensesDetailsEntryComponent.prototype, "dtElements", void 0);
    ExpensesDetailsEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expenses-details-entry',
            template: __webpack_require__(/*! ./expenses-details-entry.component.html */ "./src/app/master/company/expenses-details-entry/expenses-details-entry.component.html"),
            styles: [__webpack_require__(/*! ./expenses-details-entry.component.css */ "./src/app/master/company/expenses-details-entry/expenses-details-entry.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], ExpensesDetailsEntryComponent);
    return ExpensesDetailsEntryComponent;
}());



/***/ }),

/***/ "./src/app/master/company/source-charges-setup/source-charges-setup.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/master/company/source-charges-setup/source-charges-setup.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dataTables_scrollFootInner {\n\tpadding-right: 0px !important;\n}\n\ntfoot {\n\tbackground: #5f0a5fa6;\n\tcolor: white;\n\tfont-weight: bolder;\n\tfont-size: 15px;\n\tpadding: 0px;\n\tmargin: 0px;\n}\n\ntable.dataTable tfoot th, table.dataTable tfoot td {\n\tpadding: 5px 10px;\n\tborder-bottom: 1px solid #111111;\n\tfont-size: 12.5px;\n\twhite-space: nowrap;\n}\n\ntable.dataTable tfoot td {\n\ttext-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NvbXBhbnkvc291cmNlLWNoYXJnZXMtc2V0dXAvc291cmNlLWNoYXJnZXMtc2V0dXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDhCQUE4QjtDQUM5Qjs7QUFFRDtDQUNDLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsWUFBWTtDQUNaOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLGlDQUFpQztDQUNqQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL2NvbXBhbnkvc291cmNlLWNoYXJnZXMtc2V0dXAvc291cmNlLWNoYXJnZXMtc2V0dXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuZGF0YVRhYmxlc19zY3JvbGxGb290SW5uZXIge1xuXHRwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxudGZvb3Qge1xuXHRiYWNrZ3JvdW5kOiAjNWYwYTVmYTY7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRwYWRkaW5nOiAwcHg7XG5cdG1hcmdpbjogMHB4O1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGZvb3QgdGgsIHRhYmxlLmRhdGFUYWJsZSB0Zm9vdCB0ZCB7XG5cdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzExMTExMTtcblx0Zm9udC1zaXplOiAxMi41cHg7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0Zm9vdCB0ZCB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/master/company/source-charges-setup/source-charges-setup.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/master/company/source-charges-setup/source-charges-setup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Source Charges Setup</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(sourceOptions | filter: control.value) as resultSource\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSource.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hamaliSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source Hamali</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"gcCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>G.C Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"saveBtn\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"resetBtn\">Reset</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-5 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Charges Details</h6>\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSourceChargesSetup\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerSourceChargesSetup\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Station</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source Hamali</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>GC Charge</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let sourceChargesSetupData of sourceChargesSetupDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ sourceChargesSetupData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ sourceChargesSetupData.position }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ sourceChargesSetupData.position }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/master/company/source-charges-setup/source-charges-setup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/master/company/source-charges-setup/source-charges-setup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SourceChargesSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceChargesSetupComponent", function() { return SourceChargesSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for datatable starts


//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends
//for datatable ends
//for the select option with filter starts

//for the select option with filter ends
var SourceChargesSetupComponent = /** @class */ (function () {
    //for the select option with filter ends
    function SourceChargesSetupComponent(/* for datatable starts */ sourceChargesSetupScreen /* for datatable endss */) {
        this.sourceChargesSetupScreen = sourceChargesSetupScreen;
        //for datatable ends
        this.loadingIndicator = true;
        this.dtTriggerSourceChargesSetup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //for datatable ends
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.sourceOptions = [
            { id: 1, label: 'Delhi' },
            { id: 2, label: 'Gujarat' },
            { id: 3, label: 'Mumbai' },
        ];
    }
    /* for datatable starts */
    SourceChargesSetupComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    SourceChargesSetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for datatable starts
        this.dtOptionsSourceChargesSetup = {
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
            //                {
            //                    extend: 'excel',
            //                    text: '<i class="fas fa-file-excel"> Excel</i>',
            //                    titleAttr: 'Excel',
            //                    exportOptions: {
            //                        columns: ':visible'
            //                    }
            //                },
            //                {
            //                    extend: 'print',
            //                    text: '<i class="fas fa-print"> Print</i>',
            //                    titleAttr: 'Print',
            //
            //                }
            ],
            // the below code is for button export ends
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
            "scrollY": 340,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            //scroll in datatable ends
            //            columnDefs: [
            //                { width: 10, targets: 0 },
            //                { width: 10, targets: 1 },
            //                { width: 10, targets: 2 },
            //            ],
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // Remove the formatting to get integer data for summation
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                //                count starts
                var columnData = api
                    .column(0)
                    .data();
                //                var theColumnTotal = columnData
                //                    .reduce( function( a, b ) {
                //                        if ( isNaN( a ) ) {
                //                            return '';
                //                        } else {
                //                            a = parseFloat( a );
                //                        }
                //                        if ( isNaN( b ) ) {
                //                            return '';
                //                        } else {
                //                            b = parseFloat( b );
                //                        }
                //                        return ( a + b ).toFixed( 2 );
                //                    }, 0 );
                // Update footer
                $(api.column(0).footer()).html('Total : ' + columnData.count());
                //                counts ends
            }
        };
        //the below code is for the getting data through json starts
        //        this.supplierList.getAllData().subscribe(data => {
        //            this.lrDispatchBknRptList = data['data'];
        //            this.dtTriggerSummary.next();
        //            } );
        this.gettingDataFrmServiceFrSourceChargesSetupTable = this.sourceChargesSetupScreen.getSummaryData();
        this.onDestroyUnsubscribtionSourceChargesSetup = this.gettingDataFrmServiceFrSourceChargesSetupTable.subscribe(function (data) {
            _this.sourceChargesSetupDataList = data['data'];
            _this.dtTriggerSourceChargesSetup.next();
        });
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    SourceChargesSetupComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerSourceChargesSetup.unsubscribe();
        this.onDestroyUnsubscribtionSourceChargesSetup.unsubscribe();
        //for datatable ends
    };
    //for the select option with filter starts
    SourceChargesSetupComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], SourceChargesSetupComponent.prototype, "dtElements", void 0);
    SourceChargesSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-source-charges-setup',
            template: __webpack_require__(/*! ./source-charges-setup.component.html */ "./src/app/master/company/source-charges-setup/source-charges-setup.component.html"),
            styles: [__webpack_require__(/*! ./source-charges-setup.component.css */ "./src/app/master/company/source-charges-setup/source-charges-setup.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"] /* for datatable endss */])
    ], SourceChargesSetupComponent);
    return SourceChargesSetupComponent;
}());



/***/ }),

/***/ "./src/app/master/company/staff-master/staff-master.component.css":
/*!************************************************************************!*\
  !*** ./src/app/master/company/staff-master/staff-master.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jb21wYW55L3N0YWZmLW1hc3Rlci9zdGFmZi1tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/company/staff-master/staff-master.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/master/company/staff-master/staff-master.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Staff Master</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"staffName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Staff Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"saveBtn\">Save</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStaffMaster\"\n\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStaffMaster\">\n\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Staff Name</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let staffMasterData of staffMasterDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ staffMasterData.staffName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/company/staff-master/staff-master.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/master/company/staff-master/staff-master.component.ts ***!
  \***********************************************************************/
/*! exports provided: StaffMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffMasterComponent", function() { return StaffMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for datatable starts
//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends


// for datatable ends
var StaffMasterComponent = /** @class */ (function () {
    //for datatable ends
    function StaffMasterComponent(/* for datatable starts */ staffMaster /* for datatable endss */) {
        this.staffMaster = staffMaster;
        //for datatable ends
        this.loadingIndicator = true;
        this.dtTriggerStaffMaster = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /* for datatable starts */
    StaffMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    StaffMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for datatable starts
        this.dtOptionsStaffMaster = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Staff Name',
                    data: 'staffName'
                }
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
            //                {
            //                    extend: 'excel',
            //                    text: '<i class="fas fa-file-excel"> Excel</i>',
            //                    titleAttr: 'Excel',
            //                    exportOptions: {
            //                        columns: ':visible'
            //                    }
            //                },
            //                {
            //                    extend: 'print',
            //                    text: '<i class="fas fa-print"> Print</i>',
            //                    titleAttr: 'Print',
            //
            //                }
            ],
            // the below code is for button export ends
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
            "scrollY": 380,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
        //the below code is for the getting data through json starts
        //          this.supplierList.getAllData().subscribe(data => {
        //              this.lrDispatchBknRptList = data['data'];
        //              this.dtTriggerSummary.next();
        //              } );
        this.gettingDataFrmServiceFrStaffMasterTable = this.staffMaster.getSummaryData();
        this.onDestroyUnsubscribtionStaffMaster = this.gettingDataFrmServiceFrStaffMasterTable.subscribe(function (data) {
            _this.staffMasterDataList = data['data'];
            _this.dtTriggerStaffMaster.next();
        });
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    StaffMasterComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerStaffMaster.unsubscribe();
        this.onDestroyUnsubscribtionStaffMaster.unsubscribe();
        //for datatable ends
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StaffMasterComponent.prototype, "dtElements", void 0);
    StaffMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-master',
            template: __webpack_require__(/*! ./staff-master.component.html */ "./src/app/master/company/staff-master/staff-master.component.html"),
            styles: [__webpack_require__(/*! ./staff-master.component.css */ "./src/app/master/company/staff-master/staff-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"] /* for datatable endss */])
    ], StaffMasterComponent);
    return StaffMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/company/user-creation/user-creation.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/master/company/user-creation/user-creation.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below css is done for the verticle form starts here*/\nhr {\n\tmargin-bottom: 10px;\n\tmargin-top: 10pX;\n}\n/* the below css is done for the verticle form ends here */\n/* for custom css for autocomplete select option starts */\n.auto_selectOption {\n\tfont-size: 15px;\n\tpadding: 0px;\n\tborder: 2px solid #dadee2;\n\theight: 26px;\n\twidth: 100%;\n}\n/* for small mobile */\n@media ( max-width : 355px) {\n\t.auto_selectOption {\n\t\twidth: 49% !important;\n\t}\n}\n/* for medium mobile */\n@media ( max-width : 365px) {\n\t.auto_selectOption {\n\t\twidth: 51%;\n\t}\n}\n/* for mobile */\n@media ( min-width : 370px) and (max-width: 766px) {\n\t.auto_selectOption {\n\t\twidth: 51%;\n\t}\n}\n/* for ipad */\n@media ( min-width : 767px) and (max-width: 990px) {\n\t.auto_selectOption {\n\t\twidth: 81%;\n\t}\n}\n/* for ipad pro */\n@media ( min-width : 991px) and (max-width: 1200px) {\n\t.auto_selectOption {\n\t\twidth: 47%;\n\t}\n}\n/* for desktop */\n@media ( min-width : 1201px) and (max-width: 1500px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n}\n/* for custom css for autocomplete select option ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NvbXBhbnkvdXNlci1jcmVhdGlvbi91c2VyLWNyZWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNERBQTREO0FBQzVEO0NBQ0Msb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQjtBQUVELDJEQUEyRDtBQUMzRCwwREFBMEQ7QUFDMUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IsWUFBWTtDQUNaO0FBQ0Qsc0JBQXNCO0FBQ3RCO0NBQ0M7RUFDQyxzQkFBc0I7RUFDdEI7Q0FDRDtBQUNELHVCQUF1QjtBQUN2QjtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFDRCxnQkFBZ0I7QUFDaEI7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0QsY0FBYztBQUNkO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUNELGtCQUFrQjtBQUNsQjtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFDRCxpQkFBaUI7QUFDakI7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBRUQsd0RBQXdEIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL2NvbXBhbnkvdXNlci1jcmVhdGlvbi91c2VyLWNyZWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0aGUgYmVsb3cgY3NzIGlzIGRvbmUgZm9yIHRoZSB2ZXJ0aWNsZSBmb3JtIHN0YXJ0cyBoZXJlKi9cbmhyIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0bWFyZ2luLXRvcDogMTBwWDtcbn1cblxuLyogdGhlIGJlbG93IGNzcyBpcyBkb25lIGZvciB0aGUgdmVydGljbGUgZm9ybSBlbmRzIGhlcmUgKi9cbi8qIGZvciBjdXN0b20gY3NzIGZvciBhdXRvY29tcGxldGUgc2VsZWN0IG9wdGlvbiBzdGFydHMgKi9cbi5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0cGFkZGluZzogMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjZGFkZWUyO1xuXHRoZWlnaHQ6IDI2cHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuLyogZm9yIHNtYWxsIG1vYmlsZSAqL1xuQG1lZGlhICggbWF4LXdpZHRoIDogMzU1cHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNDklICFpbXBvcnRhbnQ7XG5cdH1cbn1cbi8qIGZvciBtZWRpdW0gbW9iaWxlICovXG5AbWVkaWEgKCBtYXgtd2lkdGggOiAzNjVweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA1MSU7XG5cdH1cbn1cbi8qIGZvciBtb2JpbGUgKi9cbkBtZWRpYSAoIG1pbi13aWR0aCA6IDM3MHB4KSBhbmQgKG1heC13aWR0aDogNzY2cHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNTElO1xuXHR9XG59XG4vKiBmb3IgaXBhZCAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA4MSU7XG5cdH1cbn1cbi8qIGZvciBpcGFkIHBybyAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogOTkxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNDclO1xuXHR9XG59XG4vKiBmb3IgZGVza3RvcCAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogMTIwMXB4KSBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDUwJTtcblx0fVxufVxuXG4vKiBmb3IgY3VzdG9tIGNzcyBmb3IgYXV0b2NvbXBsZXRlIHNlbGVjdCBvcHRpb24gZW5kcyAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/master/company/user-creation/user-creation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/master/company/user-creation/user-creation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">User Creation</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row  system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Branch*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #branch id=\"branch\" name=\"branch\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Branch\" [formControl]=\"controloffice\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteoffice\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.office\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\tDUE TO REINITIALIZE ERROR AND ON CHANGE SOME ERROR CAME\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"branchChanged()\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteoffice=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(branchOptions | filter: controloffice.value) as resultBranch\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultBranch\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultBranch.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">User Details*</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Name*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #name (keyup)=\"fieldFocus($event, contactNumber)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" id=\"name\" name=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.userName\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Number*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #contactNumber (keyup)=\"fieldFocus($event, emailId)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"contactNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"contactNumber\" [(ngModel)]=\"userDataDto.contactNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Email Id*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #emailId (keyup)=\"fieldFocus($event, loginId)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"emailId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"emailId\" [(ngModel)]=\"userDataDto.eMailAddress\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Login Details</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>User Id*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #loginId (keyup)=\"fieldFocus($event, role)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"loginId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"loginId\" [(ngModel)]=\"userDataDto.name\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Role*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user-circle\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select #role id=\"role\" name=\"role\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.role\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Role...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Administrator\">Administrator</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Barcode\">Barcode</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Collection Manager\">Collection\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tManager</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Delivery Manager\">Delivery Manager</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Login Time Setup</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Set Login Time*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select #setLoginTime class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"setLoginTime\" name=\"setLoginTime\" #setLoginTime\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"setLoginTimeMode(setLoginTime.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.timeLogin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"false\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"true\">Yes</option>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"setLoginTimeFromTime\" class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Time*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #fromTime id=\"fromTime\" name=\"fromTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select From Time\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlFromTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteFromTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.fromTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteFromTime=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(fromTimeOptions | filter: controlFromTime.value) as resultFromTime\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultFromTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultFromTime.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"setLoginTimeToTime\" class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Time*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #toTime id=\"toTime\" name=\"toTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select To Time\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlToTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteToTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.toTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteToTime=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(toTimeOptions | filter: controlToTime.value) as resultToTime\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultToTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultToTime.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"addBtn\"\n\t\t\t\t\t\t\t(click)=\"validateUserDetails()\">Add/Update</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"deleteBtn\" (click)=\"validateDeleteRow()\">Delete</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t(click)=\"clearAll();\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsUserCreation\"\n\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerUserCreation\">\n\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Contact Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Email Id</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>User Id</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Role</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let userCreationData of userCreationDataList\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelected( userCreationData );\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ userCreationData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ userCreationData.mobileNum }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ userCreationData.emailId }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ userCreationData.userName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ userCreationData.role }}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/company/user-creation/user-creation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/master/company/user-creation/user-creation.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreationComponent", function() { return UserCreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for datatable starts


//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends
//for datatable ends
//for the select option with filter starts







//for the select option with filter ends
var UserCreationComponent = /** @class */ (function () {
    //for the select option with filter ends
    function UserCreationComponent(masterService, http, router, masterReadService) {
        var _this = this;
        this.masterService = masterService;
        this.http = http;
        this.router = router;
        this.masterReadService = masterReadService;
        this.isLoggedIn = true;
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_6__["UserDataDto"]();
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.isUploaded = false;
        this.setLoginTimeFromTime = false;
        this.setLoginTimeToTime = false;
        this.saveoredit = "Save";
        this.userDataDeleteDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_6__["UserDataDto"]();
        //    onDestroyUnsubscribtionUserCreation: Subscription;
        //for datatable ends
        this.loadingIndicator = true;
        this.dtTriggerUserCreation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //for datatable ends
        //for the select option with filter starts
        this.controloffice = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlFromTime = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlToTime = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.branchOptions = [
            { id: 1, label: 'Bangalore', value: 'Bangalore' },
            { id: 2, label: 'Bawana', value: 'Bawana' },
            { id: 3, label: 'Mumbai', value: 'Mumbai' },
        ];
        this.fromTimeOptions = [
            { id: 1, label: '12:00 AM' },
            { id: 2, label: '12:15 AM' },
            { id: 3, label: '12:30 Am' },
        ];
        this.toTimeOptions = [
            { id: 1, label: '12:00 AM' },
            { id: 2, label: '12:15 AM' },
            { id: 3, label: '12:30 Am' },
        ];
        this.saveUpdateUserDetails = function () {
            _this.getUserDetailsForSave();
            _this.masterService.createUser(_this.userDataDto).
                subscribe(function (data) {
                _this.userDataDtoSaveRet = data;
                //                console.log( this.userDataDtoSaveRet.status );
                if (_this.userDataDtoSaveRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Success",
                        text: "User Details Saved/Updated Successfull",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    //                    this.getSupplierDetailsList();
                }
                else if (_this.userDataDtoSaveRet.status == "exist") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Duplicate entry",
                        text: "User Id Already Exist",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Error",
                        text: "Error While Saving User Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Error",
                    text: "Server Error While Saving User Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.getUserCreationDetails = function () {
            _this.getUserDetailsForRead();
            _this.masterReadService.getUserDetails(_this.lrDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.userCreationDataList = response;
                    _this.dtTriggerUserCreation.next();
                    //                    console.log( this.userCreationDataList[0] );
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Error",
                text: "Server Error While Getting User Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.deleteUserDetails = function () {
            _this.getDeleteUserDetails();
            _this.masterService.deleteUser(_this.userDataDeleteDto).
                subscribe(function (data) {
                _this.userDataDeleteDtoRet = data;
                if (_this.userDataDeleteDtoRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Success",
                        text: "User Details Deleted Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    //                    this.getUserCreationDetails();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Error",
                        text: "Error While Deleting User Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Error",
                    text: "Server Error While Deleting User Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Session Expired",
                text: "Please relogin to access the application!",
                icon: "error",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.logInPage();
            });
        }
        if (this.isLoggedIn) {
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.userDataDto.office = this.userDataDtoReturnSession.office;
            this.getUserCreationDetails();
        }
    }
    UserCreationComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    UserCreationComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    /* for datatable starts */
    UserCreationComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    UserCreationComponent.prototype.ngOnInit = function () {
        //for datatable starts
        this.dtOptionsUserCreation = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Name',
                    data: 'name'
                },
                {
                    title: 'Contact Number',
                    data: 'contactNumber'
                },
                {
                    title: 'Email Id',
                    data: 'emailId'
                },
                {
                    title: 'User Id',
                    data: 'userId'
                },
                {
                    title: 'Role',
                    data: 'role'
                },
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
            //                {
            //                    extend: 'excel',
            //                    text: '<i class="fas fa-file-excel"> Excel</i>',
            //                    titleAttr: 'Excel',
            //                    exportOptions: {
            //                        columns: ':visible'
            //                    }
            //                },
            //                {
            //                    extend: 'print',
            //                    text: '<i class="fas fa-print"> Print</i>',
            //                    titleAttr: 'Print',
            //
            //                }
            ],
            // the below code is for button export ends
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
            "scrollY": 380,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
        //the below code is for the getting data through json starts
        //        this.supplierList.getAllData().subscribe(data => {
        //            this.lrDispatchBknRptList = data['data'];
        //            this.dtTriggerSummary.next();
        //            } );
        //        this.gettingDataFrmServiceFrUserCreationTable = this.userCreationScreen.getSummaryData()
        //        this.onDestroyUnsubscribtionUserCreation = this.gettingDataFrmServiceFrUserCreationTable.subscribe( data => {
        //            this.userCreationDataList = data['data'];
        //            this.dtTriggerUserCreation.next();
        //        } );
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    UserCreationComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerUserCreation.unsubscribe();
        //        this.onDestroyUnsubscribtionUserCreation.unsubscribe();
        //for datatable ends
    };
    UserCreationComponent.prototype.setLoginTimeMode = function (searchBy) {
        if (searchBy === 'true') {
            this.setLoginTimeFromTime = true;
            this.setLoginTimeToTime = true;
        }
        else if (searchBy === 'false') {
            this.setLoginTimeFromTime = false;
            this.setLoginTimeToTime = false;
        }
        else {
            this.setLoginTimeFromTime = false;
            this.setLoginTimeToTime = false;
        }
    };
    //for the select option with filter ends
    UserCreationComponent.prototype.validateUserDetails = function () {
        this.saveUpdateUserDetails();
    };
    UserCreationComponent.prototype.getUserDetailsForSave = function () {
        this.userDataDto.companyId = this.userDataDtoReturnSession.companyId;
        //        this.userDataDto.userName = this.userDataDtoReturnSession.userName;
        this.userDataDto.userPasswd = this.userDataDto.name;
        this.userDataDto.updatedBy = this.userDataDtoReturnSession.userId;
        //        console.log(this.userDataDtoReturnSession.userId);
        this.userDataDto.saveOrEdit = this.saveoredit;
        if (this.userDataDtoReturnSession.role == "Super Administrator") {
            this.userDataDto.office = this.userDataDto.office;
        }
        else {
            this.userDataDto.office = this.userDataDtoReturnSession.office;
        }
        //        console.log('helo :' +this.userDataDto.timeLogin);
        if (this.userDataDto.timeLogin != true) {
            this.userDataDto.fromTime = null;
            this.userDataDto.toTime = null;
        }
        else {
        }
    };
    UserCreationComponent.prototype.getUserDetailsForRead = function () {
        if (this.userDataDtoReturnSession.role == "Super Administrator") {
            this.lrDto.destination = this.userDataDto.office;
        }
        else {
            this.lrDto.destination = this.userDataDtoReturnSession.office;
        }
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        //        this.lrDto.user =this.userDataDtoReturnSession.userId;
    };
    UserCreationComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        $("#branch").val('');
        $("#role").val('Select Role...');
        $("#toTime").val('');
        $("#fromTime").val('');
        $("#setLoginTime").val('');
        this.setLoginTimeFromTime = false;
        this.setLoginTimeToTime = false;
        this.userDataDto.name = null;
        this.saveoredit = "Save";
    };
    //to insert value of selected row in table to input field starts
    UserCreationComponent.prototype.rowSelected = function (userCreationData) {
        this.userDataDto.userName = userCreationData.name;
        this.userDataDto.contactNo = userCreationData.mobileNum;
        this.userDataDto.eMailAddress = userCreationData.emailId;
        this.userDataDto.name = userCreationData.userName;
        this.userDataDto.role = userCreationData.role;
        this.userDataDto.office = this.userDataDtoReturnSession.office;
        this.userDataDto.timeLogin = userCreationData.timeLogin;
        if (this.userDataDto.timeLogin == true) {
            this.setLoginTimeFromTime = true;
            this.setLoginTimeToTime = true;
            this.userDataDto.fromTime = userCreationData.fromTime;
            this.userDataDto.toTime = userCreationData.toTime;
        }
        else {
            this.setLoginTimeFromTime = false;
            this.setLoginTimeToTime = false;
            this.userDataDto.fromTime = '';
            this.userDataDto.toTime = '';
        }
        //        this.userDataDto.role = userCreationData.timeLogin;
        this.saveoredit = "Edit";
        //        
    };
    //to insert value of selected row in table to input field ends
    UserCreationComponent.prototype.ngAfterViewInit = function () { };
    UserCreationComponent.prototype.branchChanged = function () {
        this.getUserCreationDetails();
    };
    UserCreationComponent.prototype.validateDeleteRow = function () {
        this.deleteUserDetails();
    };
    UserCreationComponent.prototype.getDeleteUserDetails = function () {
        this.userDataDeleteDto.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDeleteDto.userName = this.userDataDto.name;
        this.userDataDeleteDto.userId = this.userDataDtoReturnSession.userId;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], UserCreationComponent.prototype, "dtElements", void 0);
    UserCreationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-creation',
            template: __webpack_require__(/*! ./user-creation.component.html */ "./src/app/master/company/user-creation/user-creation.component.html"),
            styles: [__webpack_require__(/*! ./user-creation.component.css */ "./src/app/master/company/user-creation/user-creation.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"], _angular_http__WEBPACK_IMPORTED_MODULE_8__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"]])
    ], UserCreationComponent);
    return UserCreationComponent;
}());



/***/ }),

/***/ "./src/app/master/company/user-features-customization/user-features-customization.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/master/company/user-features-customization/user-features-customization.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-select {\n\tpadding: 1px;\n\tfont-size: 13px;\n\theight: auto;\n}\n/* for popup starts */\n.hyperLink_td {\n\tcolor: blue;\n\tcursor: pointer;\n\tfont-size: 15px;\n}\n.hyperLink_td:hover {\n\tcolor: blue;\n\tfont-weight: bolder;\n\tcursor: pointer;\n\tfont-size: 15px;\n}\n/* for popup ends */\n.modal-body {\n\tposition: relative;\n\tflex: 1 1 auto;\n\tmax-height: 50vh;\n\toverflow-y: scroll;\n\tfont-size: 15px;\n\twhite-space: nowrap;\n\tline-height: 10px;\n}\nlabel {\n\twidth: 28%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NvbXBhbnkvdXNlci1mZWF0dXJlcy1jdXN0b21pemF0aW9uL3VzZXItZmVhdHVyZXMtY3VzdG9taXphdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2I7QUFDRCxzQkFBc0I7QUFDdEI7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQjtBQUVEO0NBQ0MsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCO0FBQ0Qsb0JBQW9CO0FBQ3BCO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCO0FBRUQ7Q0FDQyxXQUFXO0NBQ1giLCJmaWxlIjoic3JjL2FwcC9tYXN0ZXIvY29tcGFueS91c2VyLWZlYXR1cmVzLWN1c3RvbWl6YXRpb24vdXNlci1mZWF0dXJlcy1jdXN0b21pemF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXNlbGVjdCB7XG5cdHBhZGRpbmc6IDFweDtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRoZWlnaHQ6IGF1dG87XG59XG4vKiBmb3IgcG9wdXAgc3RhcnRzICovXG4uaHlwZXJMaW5rX3RkIHtcblx0Y29sb3I6IGJsdWU7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Zm9udC1zaXplOiAxNXB4O1xufVxuXG4uaHlwZXJMaW5rX3RkOmhvdmVyIHtcblx0Y29sb3I6IGJsdWU7XG5cdGZvbnQtd2VpZ2h0OiBib2xkZXI7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Zm9udC1zaXplOiAxNXB4O1xufVxuLyogZm9yIHBvcHVwIGVuZHMgKi9cbi5tb2RhbC1ib2R5IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRmbGV4OiAxIDEgYXV0bztcblx0bWF4LWhlaWdodDogNTB2aDtcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXHRmb250LXNpemU6IDE1cHg7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG5sYWJlbCB7XG5cdHdpZHRoOiAyOCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/master/company/user-features-customization/user-features-customization.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/master/company/user-features-customization/user-features-customization.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">User Features Customization</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<h6 style=\"padding: 10px;\" class=\"card-title\">Item Details</h6> -->\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts  -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"station\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Station\" [formControl]=\"controlStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteStation\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteStation=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(stationOptions | filter: controlStation.value) as resultStation\">\n\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultStation\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultStation.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"stationType\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Station Type</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts  -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"userId\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>User Id</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select User Id\" [formControl]=\"controlUserId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteUserId\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteUserId=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(userIdOptions | filter: controlUserId.value) as resultUserId\">\n\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultUserId\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultUserId.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"userRole\">\n\t\t\t\t\t\t\t\t\t\t\t<label>User Role</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"mdi mdi-tie\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<div class=\"row\" style=\"border-top: 1px solid grey;\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body p-b-10\">\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsUserFeaturesCustomization\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerUserFeaturesCustomization\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<th><input type=\"checkbox\" class=\"editor-active\"></th> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Module</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Sub Module</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Screens</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rights</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Special Rights</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let userFeaturesCustomizationData of userFeaturesCustomizationDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"checkbox\"></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ userFeaturesCustomizationData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ userFeaturesCustomizationData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ userFeaturesCustomizationData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"FA\">Full Access</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"RA\">Readonly</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"CR\">Create</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"UP\">Update</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"DL\">Delete</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"CU\">Create & Update</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"CD\">Create & Delete</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"UD\">Update & Delete</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td (click)=\"openSpecialRights(contentSpecialRights)\"><u\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"hyperLink_td\">Click Me</u></td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\" style=\"border-top: 1px solid grey;\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"updateBtn\">Update</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t<ng-template #contentSpecialRights let-a=\"close\" let-b=\"close\"\n\t\t\t\t\t\t\t\t\tlet-d=\"dismiss\">\n\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Selected\n\t\t\t\t\t\t\t\t\t\tPage Name And Its Special Rights</h6>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body p-b-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsScreenSpecialRights\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerScreenSpecialRights\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<th><input type=\"checkbox\" class=\"editor-active\"></th> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Special Right</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let screenSpecialRightsData of screenSpecialRightsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<td><input type=\"checkbox\"></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ screenSpecialRightsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-success\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"a('Ok click')\">Save</button>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"b('Close click')\">Close</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/master/company/user-features-customization/user-features-customization.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/master/company/user-features-customization/user-features-customization.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: UserFeaturesCustomizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFeaturesCustomizationComponent", function() { return UserFeaturesCustomizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends
//for the select option with filter starts

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


//for popup modal starts 

//for popup modal ends
var UserFeaturesCustomizationComponent = /** @class */ (function () {
    function UserFeaturesCustomizationComponent(userFeaturesCustomizationScreen, 
    //for popup modal starts
    modalService
    //for popup modal ends        
    ) {
        this.userFeaturesCustomizationScreen = userFeaturesCustomizationScreen;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        //for the select option with filter starts
        this.controlStation = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlUserId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.stationOptions = [
            { id: 1, label: 'Bangalore' },
            { id: 2, label: 'Chennai' },
            { id: 3, label: 'Delhi' },
            { id: 4, label: 'Mumbai' }
        ];
        this.userIdOptions = [
            { id: 1, label: 'Abc' },
            { id: 2, label: 'Bcd' },
            { id: 3, label: 'Cde' },
            { id: 3, label: 'Def' }
        ];
        this.dtTriggerUserFeaturesCustomization = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerScreenSpecialRights = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    UserFeaturesCustomizationComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    UserFeaturesCustomizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsUserFeaturesCustomization = {
            //};
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
            //                {
            //                    extend: 'print',
            //                    text: '<i class="fas fa-print"> Print</i>',
            //                    titleAttr: 'Print',
            //
            //                },
            //                {
            //                    extend: 'excel',
            //                    text: '<i class="fas fa-file-excel"> Excel</i>',
            //                    titleAttr: 'Excel',
            //                    exportOptions: {
            //                        columns: ':visible'
            //                    }
            //                }
            ],
            // the below code is for button export ends
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
            "paging": false,
            "info": false,
            //            "select": true,
            //                },
            columnDefs: [
                {
                    orderable: false,
                    className: 'select-checkbox',
                    targets: 0
                },
                { width: 20, targets: 0 },
                { width: 200, targets: 1 },
                { width: 200, targets: 2 },
                { width: 400, targets: 3 },
                { width: 100, targets: 4 }
            ],
            select: {
                style: 'multi',
                selector: 'td:first-child'
            },
            order: [[1, 'asc']]
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            //scroll in datatable ends
        },
            this.dtOptionsScreenSpecialRights = {
                //};
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //                {
                //                    extend: 'print',
                //                    text: '<i class="fas fa-print"> Print</i>',
                //                    titleAttr: 'Print',
                //
                //                },
                //                {
                //                    extend: 'excel',
                //                    text: '<i class="fas fa-file-excel"> Excel</i>',
                //                    titleAttr: 'Excel',
                //                    exportOptions: {
                //                        columns: ':visible'
                //                    }
                //                }
                ],
                // the below code is for button export ends
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
                "paging": false,
                "info": false,
                //            "select": true,
                //                },
                columnDefs: [
                    {
                        orderable: false,
                        //                        className: 'select-checkbox',
                        targets: 0,
                        'checkboxes': {
                            'selectRow': true
                        }
                    },
                    { width: 20, targets: 0 },
                    { width: 20, targets: 1 }
                ],
                select: {
                    style: 'multi',
                    selector: 'td:first-child'
                },
                order: [[1, 'asc']]
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                //scroll in datatable ends
            };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.gettingDataFrmServiceFrUserFeaturesCustomizationTable = this.userFeaturesCustomizationScreen.getSupplierMasterData();
        this.onDestroyUnsubscribtionUserFeaturesCustomization = this.gettingDataFrmServiceFrUserFeaturesCustomizationTable.subscribe(function (data) {
            _this.userFeaturesCustomizationDataList = data['data'];
            _this.dtTriggerUserFeaturesCustomization.next();
        });
        setTimeout(function () {
            _this.aMethodToTest();
        }, 0);
        //the below code is for the getting data through json ends
    };
    UserFeaturesCustomizationComponent.prototype.aMethodToTest = function () {
        var _this = this;
        this.gettingDataFrmServiceFrScreenSpecialRightsTable = this.userFeaturesCustomizationScreen.getSupplierMasterData();
        this.onDestroyUnsubscribtionScreenSpecialRightsCheck = this.gettingDataFrmServiceFrScreenSpecialRightsTable.subscribe(function (data) {
            _this.screenSpecialRightsDataList = data['data'];
            _this.dtTriggerScreenSpecialRights.next();
        });
    };
    UserFeaturesCustomizationComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerUserFeaturesCustomization.unsubscribe();
        this.dtTriggerScreenSpecialRights.unsubscribe();
        this.onDestroyUnsubscribtionUserFeaturesCustomization.unsubscribe();
        this.onDestroyUnsubscribtionScreenSpecialRightsCheck.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    UserFeaturesCustomizationComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    UserFeaturesCustomizationComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    //for the select option with filter ends
    //for popup modal starts 
    UserFeaturesCustomizationComponent.prototype.openSpecialRights = function (contentSpecialRights) {
        var _this = this;
        this.modalService.open(contentSpecialRights, { centered: true, }).result.then(function (resultSpecialRights) {
            _this.closeResultSpecialRights = "Closed with: " + resultSpecialRights;
        }, function (reason) {
            _this.closeResultSpecialRights = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UserFeaturesCustomizationComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], UserFeaturesCustomizationComponent.prototype, "dtElements", void 0);
    UserFeaturesCustomizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-features-customization',
            template: __webpack_require__(/*! ./user-features-customization.component.html */ "./src/app/master/company/user-features-customization/user-features-customization.component.html"),
            styles: [__webpack_require__(/*! ./user-features-customization.component.css */ "./src/app/master/company/user-features-customization/user-features-customization.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
            //for popup modal ends        
        ])
    ], UserFeaturesCustomizationComponent);
    return UserFeaturesCustomizationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-master-company-company-module.js.map