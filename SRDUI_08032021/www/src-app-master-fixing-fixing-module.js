(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-master-fixing-fixing-module"],{

/***/ "./src/app/dto/FortNightStmt-dto.ts":
/*!******************************************!*\
  !*** ./src/app/dto/FortNightStmt-dto.ts ***!
  \******************************************/
/*! exports provided: FortNightStmtDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FortNightStmtDto", function() { return FortNightStmtDto; });
var FortNightStmtDto = /** @class */ (function () {
    function FortNightStmtDto() {
    }
    return FortNightStmtDto;
}());



/***/ }),

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

/***/ "./src/app/master/fixing/bank/bank.component.css":
/*!*******************************************************!*\
  !*** ./src/app/master/fixing/bank/bank.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media ( min-width :768px) {\n\t.pd_1_at_largeView {\n\t\tpadding: 1px;\n\t}\n\t.cardbody_pd {\n\t\tpadding: 5px 0px;\n\t}\n}\n\n@media ( min-width : 768px) {\n\ttable.dataTable {\n\t\theight: auto !important;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2ZpeGluZy9iYW5rL2JhbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDO0VBQ0MsYUFBYTtFQUNiO0NBQ0Q7RUFDQyxpQkFBaUI7RUFDakI7Q0FDRDs7QUFFRDtDQUNDO0VBQ0Msd0JBQXdCO0VBQ3hCO0NBQ0QiLCJmaWxlIjoic3JjL2FwcC9tYXN0ZXIvZml4aW5nL2JhbmsvYmFuay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhICggbWluLXdpZHRoIDo3NjhweCkge1xuXHQucGRfMV9hdF9sYXJnZVZpZXcge1xuXHRcdHBhZGRpbmc6IDFweDtcblx0fVxuXHQuY2FyZGJvZHlfcGQge1xuXHRcdHBhZGRpbmc6IDVweCAwcHg7XG5cdH1cbn1cblxuQG1lZGlhICggbWluLXdpZHRoIDogNzY4cHgpIHtcblx0dGFibGUuZGF0YVRhYmxlIHtcblx0XHRoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/master/fixing/bank/bank.component.html":
/*!********************************************************!*\
  !*** ./src/app/master/fixing/bank/bank.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Bank Details</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label> Bank Name </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-university\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #bankName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, balanceInCash)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.bankName\" id=\"bankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"bankName\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Balance (In Cash)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #balanceInCash type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.paymentAmt\" id=\"balanceInCash\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<hr style=\"width: 80%;\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Cheque Details</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <label>Cheque Details</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.chqType\" id=\"chequeDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"\">Select Cheque Type...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cheque\">Cheque</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Provision Cheque\">Provision Cheque</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"chequeNo\" #chequeNo\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, chequeAmt)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.chqNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter Cheque No Here....\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"chequeAmt\" #chequeAmt\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, addBtnCheck)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.chqAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter Amt here..\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 pd_1_at_largeView\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"display: none;\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #hiddenIndexCheck type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"hiddenIndexCheck\" name=\"hiddenIndexCheck\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" type='button' id=\"addInTableCheck\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#addBtnCheck class=\"btn btn-icon-only yellow\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addInTableCheck();\"> <i class=\"fa fa-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtnCheck\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDeleteCheck()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"cc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 2px;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\" id=\"ccBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Cheque Clearance\" (click)=\"checkClearenceValidate()\">CC</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsChequeDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerChequeDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cheque Number</th> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chq No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let chequeDetailsData of chequeDetailsDataList;let i = index\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"chqRowSelected( chequeDetailsData,i );\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ chequeDetailsData.chqType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ chequeDetailsData.chqNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ chequeDetailsData.chqAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title\">PDC Details</h6>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label>Cheque Details</label> -->\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.pdcType\" id=\"pdcType\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"\">Select Type...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"BDG\">BDG</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"BNG\">BNG</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"MDU\">MDU</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"Enter Cheque No Here....\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"pdcChequeNo\" #pdcChequeNo (keyup)=\"fieldFocus($event, pdcAmount)\" [(ngModel)]=\"userDataDto.pdcChequeNo\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"pdcAmount\" #pdcAmount\n\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, addBtnPdc)\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.pdcAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter Amt here..\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 pd_1_at_largeView\"\n\t\t\t\t\t\t\t\t\tstyle=\"display: none;\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input #hiddenIndexPdc type=\"number\" id=\"hiddenIndexPdc\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"hiddenIndexPdc\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" type='button' id=\"addInTablePdc\"\n\t\t\t\t\t\t\t\t\t\t\t\t#addBtnPdc class=\"btn btn-icon-only yellow\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addInTablePdc();\"> <i class=\"fa fa-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2 pd_1_at_largeView\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtnPdc\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDeletePdc()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsPDCDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerPDCDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chq No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let pdcDetailsData of pdcDetailsDataList; let j = index\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"pdcRowSelected( pdcDetailsData,j );\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pdcDetailsData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pdcDetailsData.billNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pdcDetailsData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"saveBtn\"\n\t\t\t\t\t\t\t(click)=\"validateBankDetails()\">Save</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"clearBtn\"\n\t\t\t\t\t\t\t(click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 vl \">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class='row p-t-10'>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Bank Master</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t<button style=\"padding: 2px;\" type=\"submit\" class=\"btn m-r-10\"\n\t\t\t\t\t\t\t\t\tid=\"bankMasterRemoveBtn\" (click)=\"validateDeleteRow()\">Remove</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsBankMaster\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerBankMaster\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Bank Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Amount(In Cash)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cheque Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>total Balance</th>\n\t\t\t\t\t\t\t\t\t\t<th>Provisional Cheque Amount</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let bankMasterData of bankMasterDataList\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelected( bankMasterData );\">\n\t\t\t\t\t\t\t\t\t\t<td>{{ bankMasterData.bankName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bankMasterData.paymentAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bankMasterData.chqAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bankMasterData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bankMasterData.proviAmt }}</td>\n\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/master/fixing/bank/bank.component.ts":
/*!******************************************************!*\
  !*** ./src/app/master/fixing/bank/bank.component.ts ***!
  \******************************************************/
/*! exports provided: BankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankComponent", function() { return BankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//for the select option with filter ends

//import { MasterDto } from 'src/app/dto/master-dto';







var BankComponent = /** @class */ (function () {
    function BankComponent(masterService, http, modalService, masterReadService, router) {
        var _this = this;
        this.masterService = masterService;
        this.http = http;
        this.modalService = modalService;
        this.masterReadService = masterReadService;
        this.router = router;
        //    onDestroyUnsubscribtionBankMaster: Subscription;
        //    gettingDataFrmServiceFrChequeDetailsTable: any;
        this.chequeDetailsDataList = [];
        //    onDestroyUnsubscribtionPDCDetails: Subscription;
        this.loadingIndicator = true;
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.userDataDtoDelete = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_8__["UserDataDto"]();
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.isLoggedIn = true;
        this.indexIdForCheck = null;
        this.indexIdForPdc = null;
        this.dtTriggerBankMaster = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.dtTriggerChequeDetails = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.dtTriggerPDCDetails = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.selectedBankId = 0;
        this.getBankDetailsList = function () {
            //        console.log( this.userDataDto.office + ',' + this.userDataDto.status );
            _this.getDetailsForBankMasterRead();
            _this.masterReadService.getBankMasterDetails(_this.userDataDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.bankMasterDataList = response;
                    _this.dtTriggerBankMaster.next();
                    //                    console.log( this.bankMasterDataList[0] );
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Error",
                text: "Server Error While Getting Bank Master Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getBankPdcDetailsList = function () {
            _this.getBankPdcDetailsRead();
            _this.masterReadService.getBankMasterPdcDetails(_this.lrDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.pdcDetailsDataList = response;
                    _this.dtTriggerPDCDetails.next();
                    //                    console.log( this.pdcDetailsDataList[0] );
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Error",
                text: "Server Error While Getting Bank Master PDC Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.saveUpdateBankDetails = function () {
            _this.saveBankDetails();
            _this.masterService.createBankMaster(_this.userDataDto).
                subscribe(function (data) {
                _this.userDataDtoSaveRet = data;
                if (_this.userDataDtoSaveRet.status == "persisted") {
                    //                    swal( {
                    //                        title: "Success",
                    //                        text: "Bank Master Details Saved/Updated Successfull",
                    //                        icon: "success",
                    //                        closeOnClickOutside: false,
                    //                        closeOnEsc: false,
                    //                    } );
                    //                    this.clearAll();
                    _this.saveUpdateBankPdcDetails();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Error",
                        text: "Error While Saving Bank Master Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Error",
                    text: "Server Error While Saving Bank Master Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.saveUpdateBankPdcDetails = function () {
            _this.saveBankPdcDetails();
            _this.masterService.createBankMasterPdcDetails(_this.lrDto).
                subscribe(function (data) {
                _this.lrDtoSaveRet = data;
                if (_this.lrDtoSaveRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Success",
                        text: "Bank Master Details Saved/Updated Successfull",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Error",
                        text: "Error While Saving Bank Master  PDC Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Error",
                    text: "Server Error While Saving Bank Master PDC  Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.chequeClearenceDetails = function () {
            _this.getChequeClearenceDetails();
            _this.masterService.chequeClearenceDetails(_this.userDataDto).
                subscribe(function (data) {
                _this.lrDtoSaveRet = data;
                if (_this.lrDtoSaveRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Success",
                        text: "Cheque Clearence Details Updated Successfull",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (_this.lrDtoSaveRet.status == "norecord") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "No record Found",
                        text: "Error While Updating Cheque Clearence Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Error",
                        text: "Error While Updating Cheque Clearence Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Error",
                    text: "Server Error While Updating Cheque Clearence Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.deleteBankMasterDetails = function () {
            _this.getDeleteBankMasterDetails();
            _this.masterService.deleteBankMaster(_this.userDataDtoDelete).
                subscribe(function (data) {
                _this.userDataDtoDeleteRet = data;
                if (_this.userDataDtoDeleteRet.status == "updated") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Success",
                        text: "Bank  Details Removed Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    //                    this.getBankDetailsList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Error",
                        text: "Error While Deleting Bank Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Error",
                    text: "Server Error While Deleting Bank Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
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
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.getBankDetailsList();
            this.bankMasterRead();
            this.chequeDetailsTable();
            this.pdcDetailsTable();
            this.getBankPdcDetailsList();
        }
    }
    BankComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    BankComponent.prototype.ngOnInit = function () {
        //            this.gettingDataFrmServiceFrBankMasterTable = this.bankMasterScreen.getSummaryData()
        //        this.onDestroyUnsubscribtionBankMaster = this.gettingDataFrmServiceFrBankMasterTable.subscribe( data => {
        //            this.bankMasterDataList = data['data'];
        //            this.dtTriggerBankMaster.next();
        //        } );
        //        this.gettingDataFrmServiceFrChequeDetailsTable = this.bankMasterScreen.getSummaryData()
        //        this.onDestroyUnsubscribtionChequeDetails = this.gettingDataFrmServiceFrChequeDetailsTable.subscribe( data => {
        //            this.chequeDetailsDataList = data['data'];
        //            this.dtTriggerChequeDetails.next();
        //        } );
        //        this.gettingDataFrmServiceFrPDCDetailsTable = this.bankMasterScreen.getSummaryData()
        //        this.onDestroyUnsubscribtionPDCDetails = this.gettingDataFrmServiceFrPDCDetailsTable.subscribe( data => {
        //            this.pdcDetailsDataList = data['data'];
        //            this.dtTriggerPDCDetails.next();
        //        } );
        //the below code is for the getting data through json ends
    };
    BankComponent.prototype.bankMasterRead = function () {
        this.dtOptionsBankMaster = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [],
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
            "scrollY": 270,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
            //            pagingType: 'full_numbers',
            //            pageLength: 9,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            //scroll in datatable ends
            //            columnDefs: [
            //                { width: '100%', targets: 0 },
            //                { width: '50%', targets: 1 },
            //                { width: '50%', targets: 2 },
            //                { width: '50%', targets: 3 },
            //                { width: '50%', targets: 4 }
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
                // Total over all pages
                var total = api
                    .column(1)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Total over this page
                var pageTotal = api
                    .column(1, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(1).footer()).html(pageTotal);
                var pageTotals = api
                    .column(2, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(2).footer()).html(pageTotals);
                var pageTotals = api
                    .column(3, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(3).footer()).html(pageTotals);
                var pageTotals = api
                    .column(4, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(4).footer()).html(pageTotals);
                //                count starts
                var columnData = api
                    .column(0)
                    .data();
                // Update footer
                $(api.column(0).footer()).html(columnData.count());
                //                counts ends
            }
        };
    };
    BankComponent.prototype.chequeDetailsTable = function () {
        this.dtOptionsChequeDetails = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [],
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
            "scrollY": 150,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
    };
    BankComponent.prototype.pdcDetailsTable = function () {
        this.dtOptionsPDCDetails = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [],
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
            "scrollY": 100,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
    };
    BankComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerBankMaster.unsubscribe();
        this.dtTriggerChequeDetails.unsubscribe();
        this.dtTriggerPDCDetails.unsubscribe();
        //        this.onDestroyUnsubscribtionBankMaster.unsubscribe();
        //        this.onDestroyUnsubscribtionChequeDetails.unsubscribe();
        //        this.onDestroyUnsubscribtionPDCDetails.unsubscribe();
    };
    //  service starts
    BankComponent.prototype.getDetailsForBankMasterRead = function () {
        this.userDataDto.office = this.userDataDtoReturnSession.mainStation;
        this.userDataDto.status = "Working";
    };
    //to insert value of selected row in bank master table to input field starts
    BankComponent.prototype.rowSelected = function (bankMasterData) {
        this.userDataDto.bankName = bankMasterData.bankName;
        this.userDataDto.paymentAmt = bankMasterData.paymentAmt;
        this.userDataDto.chequeStr = bankMasterData.chequeStr;
        this.userDataDto.pdcStr = bankMasterData.pdcStr;
        this.userDataDto.proviStr = bankMasterData.proviStr;
        this.selectedBankId = bankMasterData.bankId;
        //        console.log('On Select :'+this.selectedBankId);
        this.chequeDetailsDataList = [];
        if (this.userDataDto.chequeStr != null && this.userDataDto.chequeStr != "NA") {
            var array = this.userDataDto.chequeStr.split("#");
            //            console.log( array );
            //            for ( let i = 1; i < 100; i++ ) {
            //                console.log( i );
            //            }
            //            for ( let i = 0; i < this.chqStr.length; i++ ) {
            for (var item in array) {
                //                console.log( this.chqStr ); // prints elements: 10, 20, 30, 40
                //                console.log( index[1] ); // prints indexes: 0, 1, 2, 3
                this.undersCodeSplit = array[item].split("_");
                //                console.log( this.undersCodeSplit );
                var newAttributeCheque = {};
                newAttributeCheque.chqType = "Cheque";
                newAttributeCheque.chqNumber = this.undersCodeSplit[0];
                newAttributeCheque.chqAmt = this.undersCodeSplit[1];
                //                console.log( "1st>> " + newAttributeCheque.chqType + "," + newAttributeCheque.chqNumber + "," + newAttributeCheque.chqAmt );
                this.chequeDetailsDataList.push(newAttributeCheque);
            }
            //            var array = this.chequeHashSplit;
            //                                    console.log( this.emails + ',' + this.userDataDto.allEmailId );
            //            for ( int i = 0; i < this.chequeHashSplit.length; i++) {
            //                        for ( var item in array ) {
            //                console.log( array[item] );
            //                this.undersCodeSplit = array[item].split( "_" );
            //                console.log( this.undersCodeSplit );
            //                maintenances.add(new Maintenance("Cheque", chqSplit[0], Double
            //                        .valueOf(chqSplit[1])));
            //            }
            //                        console.log( this.allEmails );
        }
        if (this.userDataDto.pdcStr != null && this.userDataDto.pdcStr != "NA") {
            var array = this.userDataDto.pdcStr.split("#");
            //            console.log( array );
            //            for ( let i = 0; i < this.pdcStr.length; i++ ) {
            for (var item in array) {
                this.undersCodeSplit = array[item].split("_");
                var newAttributePdc = {};
                newAttributePdc.chqType = "PDC";
                newAttributePdc.chqNumber = this.undersCodeSplit[0];
                newAttributePdc.chqAmt = this.undersCodeSplit[1];
                //                console.log( "2nd>> " + newAttributePdc.chqType + "," + newAttributePdc.chqNumber + "," + newAttributePdc.chqAmt );
                this.chequeDetailsDataList.push(newAttributePdc);
            }
        }
        if (this.userDataDto.proviStr != null && this.userDataDto.proviStr != "NA") {
            var array = this.userDataDto.proviStr.split("#");
            //            console.log( array );
            //            for ( let i = 0; i < this.pdcStr.length; i++ ) {
            for (var item in array) {
                this.undersCodeSplit = array[item].split("_");
                var newAttributeProvisonChq = {};
                newAttributeProvisonChq.chqType = "Provision Cheque";
                newAttributeProvisonChq.chqNumber = this.undersCodeSplit[0];
                newAttributeProvisonChq.chqAmt = this.undersCodeSplit[1];
                //                this.newAttributeCheque.
                //                console.log( "3rd>> " + newAttributeProvisonChq.chqType + "," + newAttributeProvisonChq.chqNumber + "," + newAttributeProvisonChq.chqAmt );
                this.chequeDetailsDataList.push(newAttributeProvisonChq);
            }
        }
        //to insert value of selected row in table to input field ends
        this.dtTriggerChequeDetails.next();
        //        this.newAttributeCheque = {}
    };
    //to insert value of selected row in bank master table to input field ends
    BankComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    BankComponent.prototype.getBankPdcDetailsRead = function () {
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    BankComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    //to insert value of selected row in pdc table to input field starts
    //to insert value of selected row in pdc table to input field ends  
    BankComponent.prototype.validateBankDetails = function () {
        this.saveUpdateBankDetails();
    };
    BankComponent.prototype.saveBankDetails = function () {
        this.userDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDto.createdBy = this.userDataDtoReturnSession.userId;
        this.userDataDto.office = this.userDataDtoReturnSession.mainStation;
        this.userDataDto.listChqDetails = this.chequeDetailsDataList;
        this.userDataDto.bankId = this.selectedBankId;
    };
    BankComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        $("#bankName").val('');
        $("#paymentAmt").val('');
        this.selectedBankId = 0;
        this.chequeDetailsDataList = [];
    };
    BankComponent.prototype.addInTableCheck = function () {
        var newAttributeSaveCheck = {};
        newAttributeSaveCheck.chqType = $("#chequeDetails").val();
        newAttributeSaveCheck.chqNumber = $("#chequeNo").val();
        newAttributeSaveCheck.chqAmt = $("#chequeAmt").val();
        if ((newAttributeSaveCheck.chqType != '') && (newAttributeSaveCheck.chqType != null) && (newAttributeSaveCheck.chqNumber != '') && (newAttributeSaveCheck.chqNumber != null) && (newAttributeSaveCheck.chqAmt != '') && (newAttributeSaveCheck.chqAmt != null)) {
            if (this.indexIdForCheck != null) {
                this.chequeDetailsDataList.splice(this.indexIdForCheck, 1);
            }
            if (this.chequeDetailsDataList == null) {
                this.chequeDetailsDataList = [];
            }
            if (this.chequeDetailsDataList.length == 0) {
                this.chequeDetailsDataList.push(newAttributeSaveCheck);
            }
            else {
                var array = this.chequeDetailsDataList;
                this.chequeDetailsDataList.push(newAttributeSaveCheck);
            }
            newAttributeSaveCheck = {};
            $("#chequeDetails").val('');
            $("#chequeNo").val('');
            $("#chequeAmt").val('');
            $("#hiddenIndexCheck").val('');
            this.indexIdForCheck = null;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Warning",
                text: "Please Enter the Mandatory Fields",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    BankComponent.prototype.rowSelectedDeleteCheck = function () {
        this.indexIdForCheck = $("#hiddenIndexCheck").val();
        this.chequeDetailsDataList.splice(this.indexIdForCheck, 1);
        $("#chequeDetails").val('');
        $("#chequeNo").val('');
        $("#chequeAmt").val('');
        $("#hiddenIndexCheck").val('');
        this.indexIdForCheck = null;
    };
    BankComponent.prototype.chqRowSelected = function (chequeDetailsData, index) {
        $("#chequeDetails").val(chequeDetailsData.chqType);
        //        this.userDataDto.chqType = chequeDetailsData.chqType;
        this.userDataDto.chqNumber = chequeDetailsData.chqNumber;
        this.userDataDto.chqAmt = chequeDetailsData.chqAmt;
        $("#hiddenIndexCheck").val(index);
        this.indexIdForCheck = index;
        //to insert value of selected row in table to input field ends
    };
    BankComponent.prototype.addInTablePdc = function () {
        var newAttributeSavePdc = {};
        newAttributeSavePdc.source = $("#pdcType").val();
        newAttributeSavePdc.billNumber = $("#pdcChequeNo").val();
        newAttributeSavePdc.paid = $("#pdcAmount").val();
        if ((newAttributeSavePdc.source != '') && (newAttributeSavePdc.source != null) && (newAttributeSavePdc.billNumber != '') && (newAttributeSavePdc.billNumber != null) && (newAttributeSavePdc.paid != '') && (newAttributeSavePdc.paid != null)) {
            if (this.indexIdForPdc != null) {
                this.pdcDetailsDataList.splice(this.indexIdForPdc, 1);
            }
            if (this.pdcDetailsDataList == null) {
                this.pdcDetailsDataList = [];
            }
            if (this.chequeDetailsDataList.length == 0) {
                this.pdcDetailsDataList.push(newAttributeSavePdc);
            }
            else {
                var array = this.chequeDetailsDataList;
                this.pdcDetailsDataList.push(newAttributeSavePdc);
            }
            newAttributeSavePdc = {};
            $("#pdcType").val('');
            $("#pdcChequeNo").val('');
            $("#pdcAmount").val('');
            $("#hiddenIndexPdc").val('');
            this.indexIdForPdc = null;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Warning",
                text: "Please Enter the Mandatory Fields1",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    BankComponent.prototype.rowSelectedDeletePdc = function () {
        this.indexIdForPdc = $("#hiddenIndexPdc").val();
        this.pdcDetailsDataList.splice(this.indexIdForPdc, 1);
        $("#pdcType").val('');
        $("#pdcChequeNo").val('');
        $("#pdcAmount").val('');
        $("#hiddenIndexPdc").val('');
        this.indexIdForPdc = null;
    };
    BankComponent.prototype.pdcRowSelected = function (pdcDetailsData, index) {
        $("#pdcType").val(pdcDetailsData.source);
        //        this.userDataDto.pdcType = pdcDetailsData.source;
        this.userDataDto.pdcChequeNo = pdcDetailsData.billNumber;
        this.userDataDto.pdcAmount = pdcDetailsData.paid;
        $("#hiddenIndexPdc").val(index);
        this.indexIdForPdc = index;
        //to insert value of selected row in table to input field ends
    };
    BankComponent.prototype.saveBankPdcDetails = function () {
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDto.userName = this.userDataDtoReturnSession.userId;
        this.lrDto.listPdcDetails = this.pdcDetailsDataList;
    };
    BankComponent.prototype.checkClearenceValidate = function () {
        var newAttributeCC = {};
        newAttributeCC.chqType = $("#chequeDetails").val();
        //        console.log(newAttributeCC.chqType);
        if (newAttributeCC.chqType != null && newAttributeCC.chqType != '') {
            this.clearAllCheck();
            this.chequeClearenceDetails();
            newAttributeCC = {};
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Warning",
                text: "Please select the check Type",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    BankComponent.prototype.getChequeClearenceDetails = function () {
        var newAttributeForCC = {};
        newAttributeForCC.chqType = $("#chequeDetails").val();
        newAttributeForCC.chqAmt = $("#chequeAmt").val();
        //        console.log(newAttributeForCC.chqAmt );
        this.userDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDto.createdBy = this.userDataDtoReturnSession.userId;
        this.userDataDto.office = this.userDataDtoReturnSession.mainStation;
        this.userDataDto.listChqDetails = this.chequeDetailsDataList;
        this.userDataDto.bankId = this.selectedBankId;
        this.userDataDto.amount = newAttributeForCC.chqAmt;
        this.userDataDto.type = newAttributeForCC.chqType;
        newAttributeForCC = {};
        $("#chequeDetails").val('');
        $("#chequeNo").val('');
        $("#chequeAmt").val('');
        $("#hiddenIndexCheck").val('');
        this.indexIdForCheck = null;
    };
    BankComponent.prototype.clearAllCheck = function () {
        this.indexIdForCheck = $("#hiddenIndexCheck").val();
        this.chequeDetailsDataList.splice(this.indexIdForCheck, 1);
    };
    BankComponent.prototype.validateDeleteRow = function () {
        this.deleteBankMasterDetails();
    };
    BankComponent.prototype.getDeleteBankMasterDetails = function () {
        this.userDataDtoDelete.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDtoDelete.userId = this.userDataDtoReturnSession.userId;
        this.userDataDtoDelete.bankId = this.selectedBankId;
        //        console.log('On Delete :'+this.userDataDtoDelete.bankId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], BankComponent.prototype, "dtElements", void 0);
    BankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bank',
            template: __webpack_require__(/*! ./bank.component.html */ "./src/app/master/fixing/bank/bank.component.html"),
            styles: [__webpack_require__(/*! ./bank.component.css */ "./src/app/master/fixing/bank/bank.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], BankComponent);
    return BankComponent;
}());



/***/ }),

/***/ "./src/app/master/fixing/collection/collection.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/master/fixing/collection/collection.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9maXhpbmcvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/master/fixing/collection/collection.component.html":
/*!********************************************************************!*\
  !*** ./src/app/master/fixing/collection/collection.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Collection Man Details</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Collection Name </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"collectionName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.collectioMan\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"2\" id=\"address\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"address\" [(ngModel)]=\"userDataDto.address\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"city\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.city\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"contactNumber\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"userDataDto.contactNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"saveBtn\">Save</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCollectionMan\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCollectionMan\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Contact Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>City</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let collectionManData of collectionManDataList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelected(collectionManData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ collectionManData.collectioMan }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ collectionManData.collManContct }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ collectionManData.address }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ collectionManData.city }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><button style=\"padding: 1px 4px;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark m-r-10\" id=\"deleteBtn\">Delete</button></td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/fixing/collection/collection.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/master/fixing/collection/collection.component.ts ***!
  \******************************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/UserData-dto */ "./src/app/dto/UserData-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
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



//for the select option with filter ends




var CollectionComponent = /** @class */ (function () {
    //for datatable ends
    function CollectionComponent(masterReadService, http, modalService, router) {
        var _this = this;
        this.masterReadService = masterReadService;
        this.http = http;
        this.modalService = modalService;
        this.router = router;
        this.userDataDto = new src_app_dto_UserData_dto__WEBPACK_IMPORTED_MODULE_6__["UserDataDto"]();
        this.isLoggedIn = true;
        //    onDestroyUnsubscribtionCollectionMan: Subscription;
        //for datatable ends
        this.loadingIndicator = true;
        this.dtTriggerCollectionMan = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.getCollectionManDetailsList = function () {
            //        console.log( this.userDataDto.branchId + ',' + this.userDataDto.companyId + "," + this.userDataDto.status );
            _this.getDetailsForCollectionMasterRead();
            _this.masterReadService.getCollectionManMasterDetails(_this.userDataDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.collectionManDataList = response;
                    _this.dtTriggerCollectionMan.next();
                    //                    console.log( this.collectionManDataList[0] );
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Error",
                text: "Server Error While Getting Collection Man Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
            this.getCollectionManDetailsList();
            this.collectionManTable();
        }
    }
    /* for datatable starts */
    CollectionComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    CollectionComponent.prototype.ngOnInit = function () {
    };
    CollectionComponent.prototype.collectionManTable = function () {
        //for datatable starts
        this.dtOptionsCollectionMan = {
            //};
            //            //columns is used to for export and others starts
            //            columns: [
            //                {
            //                    title: 'Collection Man',
            //                    data: 'collectionMan'
            //                },
            //                {
            //                    title: 'Contact Number',
            //                    data: 'contactNumber'
            //                },
            //                {
            //                    title: 'Address',
            //                    data: 'address'
            //                },
            //                {
            //                    title: 'City',
            //                    data: 'city'
            //                },
            //                //                {
            //                //                    title: 'Action',
            //                //                    data: ''
            //                //                }
            //            ],
            //
            //
            //            //columns is used to for export and others endss
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
            "paging": true,
            "info": true,
            pagingType: 'full_numbers',
            pageLength: 9,
        };
        //the below code is for the getting data through json starts
        //        this.supplierList.getAllData().subscribe(data => {
        //            this.lrDispatchBknRptList = data['data'];
        //            this.dtTriggerSummary.next();
        //            } );
        //        this.gettingDataFrmServiceFrCollectionManTable = this.collectionManScreen.getSummaryData()
        ////        this.onDestroyUnsubscribtionCollectionMan = this.gettingDataFrmServiceFrCollectionManTable.subscribe( data => {
        //            this.collectionManDataList = data['data'];
        //            this.dtTriggerCollectionMan.next();
        //        } );
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    CollectionComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerCollectionMan.unsubscribe();
        //        this.onDestroyUnsubscribtionCollectionMan.unsubscribe();
        //for datatable ends
    };
    CollectionComponent.prototype.getDetailsForCollectionMasterRead = function () {
        this.userDataDto.branchId = this.userDataDtoReturnSession.mainStation;
        this.userDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.userDataDto.status = "D";
    };
    //    getCollectionManDetailsList = () => {
    //
    //        let apiUrlCollectionManDetails = `http://localhost:8080/srd/master/v1/collectionManDetails`;
    //        this.http.get( apiUrlCollectionManDetails, {
    //            params: {
    //                masterDto: this.getCollectionManDetailsList(),
    //                city: 'Chennai',
    //            },
    //        } ).subscribe(
    //            ( response ) => {
    //                if ( response.json().length == 0 ) {
    //                    alert( 'No records found for the selected city!' );
    //                } else {
    //                    this.collectionManDataList = response.json();
    //                    this.dtTriggerCollectionMan.next();
    //                }
    //            } ),
    //            ( error ) => console.log( error.json() ),
    //            () => console.log( 'done' );
    //
    //    };
    CollectionComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    //to insert value of selected row in table to input field starts
    CollectionComponent.prototype.rowSelected = function (collectionManData) {
        this.userDataDto.collectioMan = collectionManData.collectioMan;
        this.userDataDto.address = collectionManData.address;
        this.userDataDto.city = collectionManData.city;
        this.userDataDto.contactNo = collectionManData.collManContct;
        console.log(this.userDataDto.collectioMan + "," + this.userDataDto.address + "," + this.userDataDto.city + "," + this.userDataDto.contactNo);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])
    ], CollectionComponent.prototype, "dtElements", void 0);
    CollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-collection',
            template: __webpack_require__(/*! ./collection.component.html */ "./src/app/master/fixing/collection/collection.component.html"),
            styles: [__webpack_require__(/*! ./collection.component.css */ "./src/app/master/fixing/collection/collection.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_2__["MasterReadService"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/master/fixing/debit-note-master/debit-note-master.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/master/fixing/debit-note-master/debit-note-master.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9maXhpbmcvZGViaXQtbm90ZS1tYXN0ZXIvZGViaXQtbm90ZS1tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/fixing/debit-note-master/debit-note-master.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/master/fixing/debit-note-master/debit-note-master.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Debit Note Master</h6>\n\t\t\t</div>\n\t\t\t<form>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<label>Main Heads</label> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"mainHeads\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"mainHeads\" #mainHeads -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"mainHeadMethod(mainHeads.value)\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"addNew\">Add New</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"checkpostExp\">Checkpost Expenses</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"claims\">Claims</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhiOffice\">Delhi Office</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"others\">others</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</select> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Main Heads</label> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Heads\" [formControl]=\"controlMain\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteMain\" id=\"mainHead\" name=\"mainHead\" (change)=\"mainHeads(headType.value)\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteMain=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(mainHeadsOptions | filter: controlMain.value) as resultDebitNote\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDebitNote\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDebitNote.length\">No -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Main Heads</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select #mainHead class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"mainHead\" name=\"mainHead\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"mainHeads(mainHead.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fortNightStmtDto.mainHeadList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Add New\">Add New</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Add Less\">Add Less</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Others\">Others</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div *ngIf=\"newMainHead\" class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"newMainHeadView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>New Main Heads</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"newMainHeads\" name=\"newMainHeads\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fortNightStmtDto.mainHeadNew\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"subHeadView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Sub Heads</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"subHeads\" name=\"subHeads\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fortNightStmtDto.subDebitNew\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"saveBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateDebitNoteDetails()\">Save</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-5 vl \">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDebitNoteMaster\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDebitNoteMaster\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Main Heads</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Sub Heads</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let debitNoteMasterData of debitNoteMasterDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteMasterData.mainDebitHeads }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteMasterData.subDebitHeads }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\"></div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/fixing/debit-note-master/debit-note-master.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/master/fixing/debit-note-master/debit-note-master.component.ts ***!
  \********************************************************************************/
/*! exports provided: DebitNoteMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitNoteMasterComponent", function() { return DebitNoteMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_dto_master_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/master-dto */ "./src/app/dto/master-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/FortNightStmt-dto */ "./src/app/dto/FortNightStmt-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//from the particular global folder ends


//for the select option with filter starts

//for the select option with filter ends
//service starts


//we used any keyword so comment
//import { ConsigneedetailsModel } from 'src/app/models/Consigneedetails-model';
//import { PartyMasterDto } from "src/app/dto/PartyMaster-dto";

//import { PartyModel } from "src/app/models/party-model";





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'my-auth-token'
    })
};
//service ends
var DebitNoteMasterComponent = /** @class */ (function () {
    function DebitNoteMasterComponent(masterReadService, http, router, masterService) {
        var _this = this;
        this.masterReadService = masterReadService;
        this.http = http;
        this.router = router;
        this.masterService = masterService;
        //service starts      
        //    partyModel: PartyModel = new PartyModel();
        this.baseUrl = '/api/v1/createconsignee';
        this.masterDto = new src_app_dto_master_dto__WEBPACK_IMPORTED_MODULE_6__["MasterDto"]();
        this.fortNightStmtDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_10__["FortNightStmtDto"]();
        //    onDestroyUnsubscribtionDebitNoteMaster: Subscription;
        this.loadingIndicator = true;
        this.controlMain = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.newMainHeadView = false;
        this.subHeadView = false;
        this.isLoggedIn = true;
        this.selectedMainHeadsList = null;
        this.mainHeadsNew = null;
        this.subHeads = null;
        this.mainHeadsOptions = [
            { id: 1, label: 'Add New' },
            { id: 2, label: 'Add Less' },
            { id: 3, label: 'Claims' },
            { id: 4, label: 'Delhi Office' },
            { id: 5, label: 'others' }
        ];
        this.dtTriggerDebitNoteMaster = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getDebitNoteMasterList = function () {
            _this.getDebitNoteMasterListRead();
            _this.masterReadService.getDebitNoteMaster(_this.fortNightStmtDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.debitNoteMasterDataList = response;
                    _this.dtTriggerDebitNoteMaster.next();
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Error",
                text: "Server Error While Getting Debit Note Master Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.saveUpdateDebitNoteDetails = function () {
            _this.saveDebitNoteDetails();
            _this.masterService.createDebitNote(_this.fortNightStmtDto).
                subscribe(function (data) {
                _this.fortNightStmtDtoSaveRet = data;
                //                console.log( this.fortNightStmtDtoSaveRet.status );
                if (_this.fortNightStmtDtoSaveRet.status == "persisted") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Success",
                        text: "Debit Note Details Saved/Updated Successfull",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                }
                else if (_this.fortNightStmtDtoSaveRet.status == "data found") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Warning",
                        text: "Duplicate  Debit Note Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Error",
                        text: "Error While Saving  Debit Note Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Error",
                    text: "Server Error While Saving Debit Note Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
            this.getDebitNoteMasterList();
        }
    }
    DebitNoteMasterComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    DebitNoteMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    DebitNoteMasterComponent.prototype.ngOnInit = function () {
        this.dtOptionsDebitNoteMaster = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [],
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
        //        this.gettingDataFrmServiceFrDebitNoteMasterTable = this.debitNoteMasterScreen.getSummaryData()
        //        this.onDestroyUnsubscribtionDebitNoteMaster = this.gettingDataFrmServiceFrDebitNoteMasterTable.subscribe( data => {
        //            this.debitNoteMasterDataList = data['data'];
        //            this.dtTriggerDebitNoteMaster.next();
        //        } );
        //the below code is for the getting data through json ends
    };
    DebitNoteMasterComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDebitNoteMaster.unsubscribe();
        //        this.onDestroyUnsubscribtionDebitNoteMaster.unsubscribe();
    };
    //  service starts
    //  service starts
    DebitNoteMasterComponent.prototype.getDebitNoteMasterListRead = function () {
        this.fortNightStmtDto.companyId = this.userDataDtoReturnSession.companyId;
        this.fortNightStmtDto.reportMode = "gridDtls";
    };
    //    service ends
    //to insert value of selected row in table to input field starts
    //    rowSelected( natureOfPackData ) {
    //        this.selectedName = natureOfPackData.packNature;
    //        this.packId = natureOfPackData.id;
    //        console.log( this.selectedName );
    //    }
    //to insert value of selected row in table to input field ends
    //    service ends
    DebitNoteMasterComponent.prototype.mainHeads = function (mainHead) {
        if (mainHead == 'Add New') {
            this.newMainHeadView = true;
            this.subHeadView = false;
            this.fortNightStmtDto.mainHeadNew = null;
            this.fortNightStmtDto.subDebitNew = null;
        }
        else if (mainHead == 'Others') {
            this.newMainHeadView = false;
            this.subHeadView = true;
            this.fortNightStmtDto.mainHeadNew = null;
            this.fortNightStmtDto.subDebitNew = null;
        }
        else {
            this.newMainHeadView = false;
            this.subHeadView = false;
            this.fortNightStmtDto.mainHeadNew = null;
            this.fortNightStmtDto.subDebitNew = null;
        }
    };
    DebitNoteMasterComponent.prototype.validateDebitNoteDetails = function () {
        this.saveUpdateDebitNoteDetails();
    };
    DebitNoteMasterComponent.prototype.saveDebitNoteDetails = function () {
        this.fortNightStmtDto.companyId = this.userDataDtoReturnSession.companyId;
        this.fortNightStmtDto.userId = this.userDataDtoReturnSession.userId;
        this.selectedMainHeadsList = this.fortNightStmtDto.mainHeadList;
        this.mainHeadsNew = null;
        this.subHeads = null;
        if (this.newMainHeadView) {
            this.mainHeadsNew = this.fortNightStmtDto.mainHeadNew;
        }
        if (this.subHeadView) {
            this.subHeads = this.fortNightStmtDto.subDebitNew;
        }
        if (this.selectedMainHeadsList != null && this.selectedMainHeadsList == "Add New") {
            if (this.mainHeadsNew != null) {
                this.fortNightStmtDto.mainDebitHeads = this.mainHeadsNew;
                this.fortNightStmtDto.subDebitHeads = this.mainHeadsNew;
            }
            else {
                alert("New Main Heads Is Mandatory Field");
            }
        }
        else if (this.selectedMainHeadsList != null
            && this.selectedMainHeadsList == "Others") {
            if (this.subHeads != null) {
                this.fortNightStmtDto.mainDebitHeads = this.selectedMainHeadsList;
                this.fortNightStmtDto.subDebitHeads = this.subHeads;
            }
            else {
                alert("Sub Heads Is Mandatory Field");
            }
        }
        else if (this.selectedMainHeadsList == null
            || this.selectedMainHeadsList == "") {
            alert("Main Heads Is Mandatory Field");
        }
    };
    DebitNoteMasterComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        this.mainHeadsNew = null;
        this.subHeads = null;
        this.newMainHeadView = false;
        this.subHeadView = false;
        this.fortNightStmtDto.mainHeadNew = null;
        this.fortNightStmtDto.subDebitNew = null;
        $("#mainHead").val('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DebitNoteMasterComponent.prototype, "dtElements", void 0);
    DebitNoteMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-debit-note-master',
            template: __webpack_require__(/*! ./debit-note-master.component.html */ "./src/app/master/fixing/debit-note-master/debit-note-master.component.html"),
            styles: [__webpack_require__(/*! ./debit-note-master.component.css */ "./src/app/master/fixing/debit-note-master/debit-note-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__["MasterReadService"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_9__["MasterService"]])
    ], DebitNoteMasterComponent);
    return DebitNoteMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/fixing/expenses-heads/expenses-heads.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/master/fixing/expenses-heads/expenses-heads.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9maXhpbmcvZXhwZW5zZXMtaGVhZHMvZXhwZW5zZXMtaGVhZHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/fixing/expenses-heads/expenses-heads.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/master/fixing/expenses-heads/expenses-heads.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Expenses Heads</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Other Expenses</h6>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Expenses Heads</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #expensesHeads (keyup)=\"fieldFocus($event, balance)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"expensesHeads\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"expensesHeads\" [(ngModel)]=\"hireSlipDto.expensesHead\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"balance\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Balance</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #balance (keyup)=\"fieldFocus($event, saveBtn)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"balance\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"balance\" [(ngModel)]=\"hireSlipDto.balance\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t<button #saveBtn type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"saveBtn\" (click)=\"validateExpensesHeadDetails()\">Save</button>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"clearBtn\" (click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Paid Report 1</h6> -->\n\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsExpensesHeads\"\n\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerExpensesHeads\">\n\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>OS Balance</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let expensesHeadsData of expensesHeadsDataList \"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelected(expensesHeadsData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ expensesHeadsData.expensesHead }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ expensesHeadsData.balance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/fixing/expenses-heads/expenses-heads.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/master/fixing/expenses-heads/expenses-heads.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExpensesHeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesHeadsComponent", function() { return ExpensesHeadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//from the particular global folder starts

//from the particular global folder ends







var ExpensesHeadsComponent = /** @class */ (function () {
    function ExpensesHeadsComponent(masterReadService, http, router, masterService) {
        var _this = this;
        this.masterReadService = masterReadService;
        this.http = http;
        this.router = router;
        this.masterService = masterService;
        //    onDestroyUnsubscribtionExpensesHeads: Subscription;
        this.hireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_4__["HireSlipDto"]();
        this.isLoggedIn = true;
        this.supAdmView = false;
        this.loadingIndicator = true;
        this.dtTriggerExpensesHeads = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getExpensesHeadsList = function () {
            //        console.log( this.hireSlipDto.companyid );
            _this.getUserDetailsForReadExpensesHeads();
            _this.masterReadService.getExpensesHeadsService(_this.hireSlipDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.expensesHeadsDataList = response;
                    _this.dtTriggerExpensesHeads.next();
                    //                    console.log( this.expensesHeadsDataList[0] );
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Error",
                text: "Server Error While Getting Expenses Heads Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.saveUpdateExpensesHeadDetails = function () {
            _this.saveExpensesHeadDetails();
            _this.masterService.createExpensesHead(_this.hireSlipDto).
                subscribe(function (data) {
                _this.hireSlipDtoSaveRet = data;
                //                console.log( this.hireSlipDtoSaveRet.status );
                if (_this.hireSlipDtoSaveRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Success",
                        text: "Expenses Head Details Saved/Updated Successfull",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Error",
                        text: "Error While Saving Expenses Head Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Error",
                    text: "Server Error While Saving Expenses Head Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
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
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.expensesHeadsDatatable();
            this.getExpensesHeadsList();
        }
    }
    ExpensesHeadsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ExpensesHeadsComponent.prototype.ngOnInit = function () {
    };
    ExpensesHeadsComponent.prototype.expensesHeadsDatatable = function () {
        this.dtOptionsExpensesHeads = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
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
            "scrollY": 380,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
        //the below code is for the getting data through json starts
        //            this.getDataExpensesHeadsFrTable = this.expensesHeadsScreen.getSummaryData()
        //            this.onDestroyUnsubscribtionExpensesHeads = this.getDataExpensesHeadsFrTable.subscribe( data => {
        //                this.expensesHeadsDataList = data['data'];
        //                this.dtTriggerExpensesHeads.next();
        //            } );
    };
    ExpensesHeadsComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerExpensesHeads.unsubscribe();
        //        this.onDestroyUnsubscribtionExpensesHeads.unsubscribe();
    };
    //  service starts
    ExpensesHeadsComponent.prototype.getUserDetailsForReadExpensesHeads = function () {
        this.hireSlipDto.companyid = this.userDataDtoReturnSession.companyId;
        if (this.supAdmView == false) {
            this.hireSlipDto.mode = "Spec";
            if (this.userDataDtoReturnSession.role == "Booking Administrator") {
                this.hireSlipDto.branch = this.userDataDtoReturnSession.mainStation;
            }
            else {
                this.hireSlipDto.branch = this.userDataDtoReturnSession.mainAdminStation;
            }
        }
    };
    //    service ends
    //to insert value of selected row in table to input field starts
    ExpensesHeadsComponent.prototype.rowSelected = function (expensesHeadsData) {
        this.hireSlipDto.expensesHead = expensesHeadsData.expensesHead;
        this.hireSlipDto.balance = expensesHeadsData.balance;
    };
    //to insert value of selected row in table to input field ends
    ExpensesHeadsComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    ExpensesHeadsComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    ExpensesHeadsComponent.prototype.validateExpensesHeadDetails = function () {
        this.saveUpdateExpensesHeadDetails();
    };
    ExpensesHeadsComponent.prototype.saveExpensesHeadDetails = function () {
        this.hireSlipDto.companyid = this.userDataDtoReturnSession.companyId;
        this.hireSlipDto.lastupdatedby = this.userDataDtoReturnSession.userId;
        this.hireSlipDto.branch = this.userDataDtoReturnSession.mainStation;
    };
    ExpensesHeadsComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ExpensesHeadsComponent.prototype, "dtElements", void 0);
    ExpensesHeadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expenses-heads',
            template: __webpack_require__(/*! ./expenses-heads.component.html */ "./src/app/master/fixing/expenses-heads/expenses-heads.component.html"),
            styles: [__webpack_require__(/*! ./expenses-heads.component.css */ "./src/app/master/fixing/expenses-heads/expenses-heads.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_1__["MasterReadService"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"]])
    ], ExpensesHeadsComponent);
    return ExpensesHeadsComponent;
}());



/***/ }),

/***/ "./src/app/master/fixing/fixing.module.ts":
/*!************************************************!*\
  !*** ./src/app/master/fixing/fixing.module.ts ***!
  \************************************************/
/*! exports provided: FixingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixingModule", function() { return FixingModule; });
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
/* harmony import */ var src_app_master_fixing_fixing_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/master/fixing/fixing.routing */ "./src/app/master/fixing/fixing.routing.ts");
/* harmony import */ var src_app_master_fixing_bank_bank_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/master/fixing/bank/bank.component */ "./src/app/master/fixing/bank/bank.component.ts");
/* harmony import */ var src_app_master_fixing_collection_collection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/master/fixing/collection/collection.component */ "./src/app/master/fixing/collection/collection.component.ts");
/* harmony import */ var src_app_master_fixing_debit_note_master_debit_note_master_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/master/fixing/debit-note-master/debit-note-master.component */ "./src/app/master/fixing/debit-note-master/debit-note-master.component.ts");
/* harmony import */ var src_app_master_fixing_expenses_heads_expenses_heads_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/master/fixing/expenses-heads/expenses-heads.component */ "./src/app/master/fixing/expenses-heads/expenses-heads.component.ts");
/* harmony import */ var src_app_master_fixing_tds_details_entry_tds_details_entry_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/master/fixing/tds-details-entry/tds-details-entry.component */ "./src/app/master/fixing/tds-details-entry/tds-details-entry.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends






var FixingModule = /** @class */ (function () {
    function FixingModule() {
    }
    FixingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_master_fixing_fixing_routing__WEBPACK_IMPORTED_MODULE_10__["FixingRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"]],
            declarations: [
                src_app_master_fixing_bank_bank_component__WEBPACK_IMPORTED_MODULE_11__["BankComponent"],
                src_app_master_fixing_collection_collection_component__WEBPACK_IMPORTED_MODULE_12__["CollectionComponent"],
                src_app_master_fixing_debit_note_master_debit_note_master_component__WEBPACK_IMPORTED_MODULE_13__["DebitNoteMasterComponent"],
                src_app_master_fixing_expenses_heads_expenses_heads_component__WEBPACK_IMPORTED_MODULE_14__["ExpensesHeadsComponent"],
                src_app_master_fixing_tds_details_entry_tds_details_entry_component__WEBPACK_IMPORTED_MODULE_15__["TdsDetailsEntryComponent"]
            ]
        })
    ], FixingModule);
    return FixingModule;
}());



/***/ }),

/***/ "./src/app/master/fixing/fixing.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/master/fixing/fixing.routing.ts ***!
  \*************************************************/
/*! exports provided: FixingRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixingRoutes", function() { return FixingRoutes; });
/* harmony import */ var src_app_master_fixing_bank_bank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/master/fixing/bank/bank.component */ "./src/app/master/fixing/bank/bank.component.ts");
/* harmony import */ var src_app_master_fixing_collection_collection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/master/fixing/collection/collection.component */ "./src/app/master/fixing/collection/collection.component.ts");
/* harmony import */ var src_app_master_fixing_debit_note_master_debit_note_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/master/fixing/debit-note-master/debit-note-master.component */ "./src/app/master/fixing/debit-note-master/debit-note-master.component.ts");
/* harmony import */ var src_app_master_fixing_expenses_heads_expenses_heads_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/master/fixing/expenses-heads/expenses-heads.component */ "./src/app/master/fixing/expenses-heads/expenses-heads.component.ts");
/* harmony import */ var src_app_master_fixing_tds_details_entry_tds_details_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/master/fixing/tds-details-entry/tds-details-entry.component */ "./src/app/master/fixing/tds-details-entry/tds-details-entry.component.ts");





var FixingRoutes = [
    {
        path: '',
        children: [
            {
                path: 'bankMaster',
                component: src_app_master_fixing_bank_bank_component__WEBPACK_IMPORTED_MODULE_0__["BankComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'collectionMan',
                component: src_app_master_fixing_collection_collection_component__WEBPACK_IMPORTED_MODULE_1__["CollectionComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'debitNoteMaster',
                component: src_app_master_fixing_debit_note_master_debit_note_master_component__WEBPACK_IMPORTED_MODULE_2__["DebitNoteMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'expensesHeads',
                component: src_app_master_fixing_expenses_heads_expenses_heads_component__WEBPACK_IMPORTED_MODULE_3__["ExpensesHeadsComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'tdsDetailsEntry',
                component: src_app_master_fixing_tds_details_entry_tds_details_entry_component__WEBPACK_IMPORTED_MODULE_4__["TdsDetailsEntryComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/master/fixing/tds-details-entry/tds-details-entry.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/master/fixing/tds-details-entry/tds-details-entry.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9maXhpbmcvdGRzLWRldGFpbHMtZW50cnkvdGRzLWRldGFpbHMtZW50cnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/fixing/tds-details-entry/tds-details-entry.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/master/fixing/tds-details-entry/tds-details-entry.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n<style>\n\n/* for ipad and ipad pro */\n@media ( min-width : 768px) and (max-width: 1200px) {\n\t.col-md-3, .cusWidthIpadndIpadpro {\n\t\tflex: 0 0 50% !important;\n\t\tmax-width: 100% !important;\n\t}\n}\n</style>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">TDS Details Component</h6>\n\t\t\t\t</div>\n\t\t\t\t<form>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"padding: 0px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"certificateNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Certificate Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>TDS Less Discount Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"tdsLessDiscountType\" name=\"tdsLessDiscountType\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"tdsLessDiscountedInCashmemo\">TDS\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLess Discounted In Cashmemo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"tdsLessNotDiscountedInCashmemo\">TDS\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLess Not Discounted In Cashmemo</option>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"partyName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Party Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Party\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(partyOptions | filter: control.value) as resultParty\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultParty\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultParty.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"tdsAmountInputField\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>TDS Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"padding: 10px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4 cusWidthIpadndIpadpro\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"tdsFilePeriod\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>TDS File Period</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4 cusWidthIpadndIpadpro\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"From Date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"fromDate\" ngbDatepicker #fromDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4 cusWidthIpadndIpadpro\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"toDate\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"To Date\" name=\"toDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 cusWidthIpadndIpadpro\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 0px;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn_custom btn-success\" id=\"tdsAmountBtn\">TDS\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tAmount</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Settlement Date</label> <input id=\"settlementDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"settlementDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#settlementDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"settlementDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Textarea</h4> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<form class=\"m-t-20\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"></textarea> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</form> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"remarks\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wt80\">Remarks</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"saveBtn\">Save</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable starts  -->\n\t\t\t\t\t<div class=\"col-md-8 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Trip Details</h6> -->\n\t\t\t\t\t\t\t<div class=\"row\" style=\"padding: 10px;\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"searchFromDate\">\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchFromDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t#searchFromDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"searchFromDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<input id=\"searchToDate\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"searchToDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t#searchToDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"searchToDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"searchBtn\"(click)=\"getTdsEntryMasterDetailsList()\">Search</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"tdsDocPending\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \" for=\"tdsDocPending\">TDS\n\t\t\t\t\t\t\t\t\t\t\t\tDoc Pending</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble starts -->\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTdsDetailsEntryTable\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTdsDetailsEntryTable\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Party Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>TDS Certf.No.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>TDS Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>From Period</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Period</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Payment Mode</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Bank Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chq No.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chq.Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Ref.No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Setlm.Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>TDS Certf. Copy</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let tdsDetailsEntryTableData of tdsDetailsEntryTableDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.tdsCertfNo\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.settlementAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.fromdate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.todate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.settlementMode }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.bankName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.chequeNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.chequeDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.refNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.settlementDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tdsDetailsEntryTableData.imgURLTDS }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/master/fixing/tds-details-entry/tds-details-entry.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/master/fixing/tds-details-entry/tds-details-entry.component.ts ***!
  \********************************************************************************/
/*! exports provided: TdsDetailsEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdsDetailsEntryComponent", function() { return TdsDetailsEntryComponent; });
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//from the particular global folder starts

//from the particular global folder ends
//for the select option with filter starts
//for the select option with filter ends
//for datepicker starts
//for datepicker ends
//for datepicker starts
var my = new Date();
//for datatable starts


//from the particular global folder ends
//for datatable ends
//for the select option with filter starts



//from the particular global folder starts
//from the particular global folder ends
//for the select option with filter starts
//for the select option with filter ends

var TdsDetailsEntryComponent = /** @class */ (function () {
    function TdsDetailsEntryComponent(tdsDetailsEntryRpt, http, modalService) {
        var _this = this;
        this.tdsDetailsEntryRpt = tdsDetailsEntryRpt;
        this.http = http;
        this.modalService = modalService;
        //for datepicker ends
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.partyOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'K.G. Associates' },
            { id: 3, label: 'KK Enterprises' },
            { id: 4, label: 'KC Enterprises' }
        ];
        this.dtTriggerTdsDetailsEntryTable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getTdsEntryMasterDetailsList = function () {
            var apiUrlConsignorDetails = "http://localhost:8080/srd/master/v1/tdsEntryDetails";
            _this.http.get(apiUrlConsignorDetails, {
                params: {
                    masterDto: _this.getUserValuesForTdsEntryMasterList(),
                    city: 'Chennai',
                },
            }).subscribe(function (response) {
                if (response.json().length == 0) {
                    alert('No records found for the selected city!');
                }
                else {
                    _this.tdsDetailsEntryTableDataList = response;
                    _this.dtTriggerTdsDetailsEntryTable.next();
                    console.log(_this.tdsDetailsEntryTableDataList);
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
    }
    TdsDetailsEntryComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    TdsDetailsEntryComponent.prototype.ngOnInit = function () {
        //the first datatable starts
        this.dtOptionsTdsDetailsEntryTable = {
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
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
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
            "scrollY": 380,
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
        //            this.getDataTdsDetailsEntryTableDataTable = this.tdsDetailsEntryRpt.getSummaryData()
        //        this.onDestroyUnsubscribtionTdsDetailsEntryTable = this.getDataTdsDetailsEntryTableDataTable.subscribe( data => {
        //            this.tdsDetailsEntryTableDataList = data['data'];
        //            this.dtTriggerTdsDetailsEntryTable.next();
        //        } );
        //first service ends
    };
    TdsDetailsEntryComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerTdsDetailsEntryTable.unsubscribe();
        //        this.onDestroyUnsubscribtionTdsDetailsEntryTable.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    TdsDetailsEntryComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    TdsDetailsEntryComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    TdsDetailsEntryComponent.prototype.getUserValuesForTdsEntryMasterList = function () {
        var masterDto = {
            'city': 'Chennai',
            'gstNumber': '33AABPA9230H2Z8'
        };
        return masterDto;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"])
    ], TdsDetailsEntryComponent.prototype, "dtElements", void 0);
    TdsDetailsEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-tds-details-entry',
            template: __webpack_require__(/*! ./tds-details-entry.component.html */ "./src/app/master/fixing/tds-details-entry/tds-details-entry.component.html"),
            styles: [__webpack_require__(/*! ./tds-details-entry.component.css */ "./src/app/master/fixing/tds-details-entry/tds-details-entry.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_0__["ReportService"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], TdsDetailsEntryComponent);
    return TdsDetailsEntryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-master-fixing-fixing-module.js.map