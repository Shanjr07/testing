(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-master-commodity-commodity-module"],{

/***/ "./src/app/dataService/consignee-service.ts":
/*!**************************************************!*\
  !*** ./src/app/dataService/consignee-service.ts ***!
  \**************************************************/
/*! exports provided: ConsigneeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeService", function() { return ConsigneeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsigneeService = /** @class */ (function () {
    function ConsigneeService(http) {
        this.http = http;
        //private _url = "./assets/data/supplier-master.json";
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webConsignee;
    }
    ConsigneeService.prototype.getSupplierMasterData = function () {
        //return this.http.get<SupplierModel[]>(this._url);
        return this.http.get('./assets/data/supplier-master.json');
    };
    ConsigneeService.prototype.getSummaryData = function () {
        //return this.http.get<SupplierModel[]>(this._url);
        return this.http.get('./assets/data/lr-dispatch-booking-report.json');
    };
    ConsigneeService.prototype.getPartyOSDetailsSummaryWise = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getPartyOSDetailsSummaryWiseApi", cashMemoDto);
    };
    ConsigneeService.prototype.getPartyOSDetailsWise = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getPartyOSDetailsWiseApi", cashMemoDto);
    };
    ConsigneeService.prototype.getPartyOSOverAllSummaryView = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getPartyOSOverAllSummaryViewApi", cashMemoDto);
    };
    ConsigneeService.prototype.getConsigneeOverallStatus = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/getConsigneeOverallStatusApi", partyMasterDto);
    };
    ConsigneeService.prototype.getPartyTransitLrDetail = function (invoiceDto) {
        return this.http.post(this._baseUrl + "/getPartyTransitLrDetailApi", invoiceDto);
    };
    ConsigneeService.prototype.getConsigneeRateHistDtlsRptPartyWise = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/getConsigneeRateHistDtlsRptPartyWiseApi", rateMasterDto);
    };
    ConsigneeService.prototype.getConsigneeRateHistDtlsRptCommodityWise = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/getConsigneeRateHistDtlsRptCommodityWiseApi", rateMasterDto);
    };
    ConsigneeService.prototype.getDiscontPartyRptDtls = function (lrDto) {
        return this.http.post(this._baseUrl + "/getDiscontPartyRptDtlsApi", lrDto);
    };
    ConsigneeService.prototype.getBusinessStartReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBusinessStartReportApi", lrDto);
    };
    ConsigneeService.prototype.getBusinessStartindividualReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBusinessStartindividualReportApi", lrDto);
    };
    ConsigneeService.prototype.getConsigneeRepeatDetails = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/getConsigneeRepeatDetailsApi", partyMasterDto);
    };
    ConsigneeService.prototype.getConsigneeConfirmedDetails = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/getConsigneeConfirmedDetailsApi", partyMasterDto);
    };
    ConsigneeService.prototype.consigneeConfirmed = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/consigneeConfirmedApi", partyMasterDto);
    };
    ConsigneeService.prototype.undoCgneeMerge = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/undoCgneeMergeApi", partyMasterDto);
    };
    ConsigneeService.prototype.consigneeMerge = function (partyMasterDto) {
        return this.http.post(this._baseUrl + "/consigneeMergeApi", partyMasterDto);
    };
    ConsigneeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConsigneeService);
    return ConsigneeService;
}());



/***/ }),

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

/***/ "./src/app/master/commodity/commodity-master/commodity-master.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/master/commodity/commodity-master/commodity-master.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below css is done for the verticle form starts here*/\n\nhr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/* the below css is done for the verticle form ends here */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NvbW1vZGl0eS9jb21tb2RpdHktbWFzdGVyL2NvbW1vZGl0eS1tYXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjs7QUFFRCwyREFBMkQiLCJmaWxlIjoic3JjL2FwcC9tYXN0ZXIvY29tbW9kaXR5L2NvbW1vZGl0eS1tYXN0ZXIvY29tbW9kaXR5LW1hc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGhlIGJlbG93IGNzcyBpcyBkb25lIGZvciB0aGUgdmVydGljbGUgZm9ybSBzdGFydHMgaGVyZSovXG5cbmhyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBwWDtcbn1cblxuLyogdGhlIGJlbG93IGNzcyBpcyBkb25lIGZvciB0aGUgdmVydGljbGUgZm9ybSBlbmRzIGhlcmUgKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/master/commodity/commodity-master/commodity-master.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/master/commodity/commodity-master/commodity-master.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Commodity Fieldset</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select #searchBy id=\"searchBy\" name=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.searchType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"seachBy(searchBy.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Type</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"AddNew\">Add New</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"All\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Completed\">Completed</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Partial\">Partial</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #commodity id=\"commodityName\" name=\"commodityName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.commodityName\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select #commodityType class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"commodityType\" name=\"commodityType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.selectedCommodityType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"commodityTypeMode(commodityType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mainCommodity\">Main Commodity</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"subCommodity\">Sub Commodity</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"commodityView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity List</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Heads\" id=\"commodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"commodityList\" [formControl]=\"controlCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autoCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.selectedCommodity\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autoCommodityList=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(commodityListOptions | filter: controlCommodityList.value) as resultCommodityList\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultCommodityList.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"multipleArticleSize\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"multipleArticleSize\">No. Multiple Article\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSize</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\tit showing error so commented -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"multipleArticleSize\" name=\"multipleArticleSize\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label wtfull\" -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"multipleArticleSize\" -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"rateMasterDto.isMultiArtSize\" -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\tng-true-value=\"true\" ng-false-value=\"false\">No. -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\tMultiple Article Size</label> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"saveBtnShow\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\" id=\"updateBtn\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateCommodityDetails()\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"saveBtnHide\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\" id=\"updateBtn\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateUpdateCommodityDetails()\">Update</button>\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"saveBtnHide\" type=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"removeBtn\" (click)=\"validateDeleteRow()\">Remove</button>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-9 vl \">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Commodity Master</h6>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"commodityMasterTable\" class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCommodityMaster\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCommodityMaster\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Main Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let commodityMasterData of commodityMasterDataList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMasterData.commodityName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMasterData.subCommodity }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"commodityMasterPartialTable\" class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCommodityMasterPartial\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCommodityMasterPartial\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let commodityMasterPartialData of commodityMasterPartialDataList \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelected(commodityMasterPartialData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityMasterPartialData.subCommodity }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/commodity/commodity-master/commodity-master.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/master/commodity/commodity-master/commodity-master.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CommodityMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommodityMasterComponent", function() { return CommodityMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/RateMaster-dto */ "./src/app/dto/RateMaster-dto.ts");
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

//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter starts







//for the select option with filter ends
var CommodityMasterComponent = /** @class */ (function () {
    function CommodityMasterComponent(debitNoteMasterScreen, http, router, masterService, masterReadService) {
        var _this = this;
        this.debitNoteMasterScreen = debitNoteMasterScreen;
        this.http = http;
        this.router = router;
        this.masterService = masterService;
        this.masterReadService = masterReadService;
        this.commodityView = false;
        this.loadingIndicator = true;
        this.controlCommodityList = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.isLoggedIn = true;
        this.rateMasterDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_9__["RateMasterDto"]();
        this.rateMasterDeleteDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_9__["RateMasterDto"]();
        this.rateMasterUpdateDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_9__["RateMasterDto"]();
        this.commodityMasterTable = true;
        this.saveBtnShow = true;
        this.saveBtnHide = false;
        this.commodityMasterPartialTable = false;
        this.commodityListOptions = [
            { id: 1, label: '14' },
            { id: 2, label: 'ds' },
            { id: 3, label: 'ww' },
        ];
        this.dtTriggerCommodityMaster = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerCommodityMasterPartial = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.saveUpdateCommodityDetails = function () {
            _this.saveCommodityDetails();
            _this.masterService.createCommodity(_this.rateMasterDto).
                subscribe(function (data) {
                _this.rateMasterDtoSaveRet = data;
                //                console.log( this.rateMasterDtoSaveRet.status );
                if (_this.rateMasterDtoSaveRet.status == "persisted") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Success",
                        text: "Commodity Details Saved Successfull",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Error",
                        text: "Error While Saving  Commodity Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Error",
                    text: "Server Error While Saving Commodity Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.getCommodityMasterDetailsList = function () {
            //        console.log( this.lrDto.companyId );
            _this.getCommodityListRead();
            _this.masterReadService.getCommodityDetails(_this.rateMasterDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.commodityData = response;
                    if (_this.rateMasterDto.searchType == "Partial") {
                        _this.commodityMasterPartialDataList = _this.commodityData;
                        _this.dtTriggerCommodityMasterPartial.next();
                        //                        console.log( this.commodityMasterPartialDataList[0] );
                        //                        console.log( "<<<Partial>>>" );
                    }
                    else if ((_this.rateMasterDto.searchType == "All") || (_this.rateMasterDto.searchType == "Completed")) {
                        _this.commodityMasterDataList = _this.commodityData;
                        _this.dtTriggerCommodityMaster.next();
                        //                        console.log( "<<<ALL_Completed>>>" );
                    }
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
                text: "Server Error While Getting Commodity Master Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.updateCommodityDetails = function () {
            _this.updateGetCommodityDetails();
            _this.masterService.updateCommodity(_this.rateMasterUpdateDto).
                subscribe(function (data) {
                _this.rateMasterDtoUpdateRet = data;
                //                console.log( this.rateMasterDtoSaveRet.status );
                if (_this.rateMasterDtoUpdateRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Success",
                        text: "Commodity Details Updated Successfull",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Error",
                        text: "Error While Updating  Commodity Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Error",
                    text: "Server Error While Updating Commodity Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        this.deleteCommodityDetails = function () {
            _this.getDeleteCommodityDetails();
            _this.masterService.deleteCommodity(_this.rateMasterDeleteDto).
                subscribe(function (data) {
                _this.rateMasterDtoDeleteRet = data;
                if (_this.rateMasterDtoDeleteRet.status == "success") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Success",
                        text: "Commodity Details Removed Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.clearAll();
                    //                    this.getCommodityMasterDetailsList();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Error",
                        text: "Error While Deleting Commodity Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Error",
                    text: "Server Error While Deleting Commodity Details",
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
        }
    }
    CommodityMasterComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    CommodityMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    CommodityMasterComponent.prototype.ngOnInit = function () {
    };
    CommodityMasterComponent.prototype.commodityMasterDatatable = function () {
        this.dtOptionsCommodityMaster = {
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
        //    this.gettingDataFrmServiceFrCommodityMasterTable = this.debitNoteMasterScreen.getSummaryData()
        //    this.onDestroyUnsubscribtionCommodityMaster = this.gettingDataFrmServiceFrCommodityMasterTable.subscribe( data => {
        //        this.commodityMasterDataList = data['data'];
        //        this.dtTriggerCommodityMaster.next();
        //    } );
        //the below code is for the getting data through json ends
    };
    CommodityMasterComponent.prototype.commodityMasterPartialDatatable = function () {
        this.dtOptionsCommodityMasterPartial = {
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
    };
    CommodityMasterComponent.prototype.commodityTypeMode = function (commodityType) {
        if (commodityType === 'mainCommodity') {
            this.commodityView = false;
        }
        else if (commodityType === 'subCommodity') {
            this.commodityView = true;
        }
        else {
            this.commodityView = false;
        }
    };
    CommodityMasterComponent.prototype.seachBy = function (seachBy) {
        //        if ( ( seachBy === 'All' ) || ( seachBy === 'Completed' ) ) {
        if (seachBy === 'All') {
            this.commodityMasterTable = true;
            this.commodityMasterPartialTable = false;
            //            alert( "In Side of All" );
            this.getCommodityMasterDetailsList();
            this.saveBtnShow = false;
            this.saveBtnHide = true;
        }
        else if (seachBy === 'Completed') {
            this.commodityMasterTable = true;
            this.commodityMasterPartialTable = false;
            //            alert( "In Side of Completed" );
            this.getCommodityMasterDetailsList();
            this.saveBtnShow = false;
            this.saveBtnHide = true;
        }
        else if (seachBy === 'Partial') {
            this.commodityMasterTable = false;
            this.commodityMasterPartialTable = true;
            //            alert( "In Side of Partial" );
            this.getCommodityMasterDetailsList();
            this.saveBtnShow = false;
            this.saveBtnHide = true;
        }
        else {
            this.commodityMasterTable = true;
            this.commodityMasterPartialTable = false;
            this.saveBtnShow = true;
            this.saveBtnHide = false;
        }
    };
    /// For Save///////////    
    CommodityMasterComponent.prototype.validateCommodityDetails = function () {
        this.saveUpdateCommodityDetails();
    };
    CommodityMasterComponent.prototype.saveCommodityDetails = function () {
        this.rateMasterDto.companyId = this.userDataDtoReturnSession.companyId;
        this.rateMasterDto.userName = this.userDataDtoReturnSession.userId;
        this.rateMasterDto.isMultiArtSize = this.rateMasterDto.isMultiArtSize;
        //        console.log(this.rateMasterDto.isMultiArtSize);
        if (this.rateMasterDto.searchType == "AddNew") {
            if (this.rateMasterDto.selectedCommodityType == "mainCommodity") {
                this.rateMasterDto.commodityType = "Main";
                this.rateMasterDto.commodityName = this.rateMasterDto.commodityName;
                this.rateMasterDto.subCommodity = this.rateMasterDto.commodityName;
            }
            else if (this.rateMasterDto.selectedCommodityType == "subCommodity") {
                this.rateMasterDto.commodityType = "Sub";
                this.rateMasterDto.subCommodity = this.rateMasterDto.commodityName;
                this.rateMasterDto.commodityName = this.rateMasterDto.selectedCommodity;
            }
            this.rateMasterDto.mode = "New";
            this.rateMasterDto.confirm = "Completed";
        }
    };
    CommodityMasterComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        this.mainCommodity = null;
        this.type = null;
        this.subCommodity = null;
        this.rateMasterDto.selectedCommodity = "";
        this.rateMasterDto.selectedCommodityType = "mainCommodity";
        this.commodityView = false;
    };
    CommodityMasterComponent.prototype.getCommodityListRead = function () {
        this.rateMasterDto.companyId = this.userDataDtoReturnSession.companyId;
        this.rateMasterDto.mode = this.rateMasterDto.searchType;
        this.rateMasterDto.status = "Working";
    };
    //to insert value of selected row in table to input field starts
    //    rowSelected( natureOfPackData ) {
    //        this.selectedName = natureOfPackData.packNature;
    //        this.packId = natureOfPackData.id;
    //        //        console.log( this.selectedName );
    //    }
    //to insert value of selected row in table to input field ends
    CommodityMasterComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerCommodityMaster.unsubscribe();
        this.dtTriggerCommodityMasterPartial.unsubscribe();
        //        this.onDestroyUnsubscribtionCommodityMaster.unsubscribe();
    };
    //to insert value of selected row in table to input field starts
    CommodityMasterComponent.prototype.rowSelected = function (commodityMasterPartialData) {
        this.rateMasterDto.commodityName = commodityMasterPartialData.subCommodity;
        this.mainCommodity = commodityMasterPartialData.commodityName;
        this.type = commodityMasterPartialData.commodityType;
        this.subCommodity = commodityMasterPartialData.subCommodity;
        //        console.log( 'this is ' + this.subCommodity );
        if (this.type == "Main") {
            this.rateMasterDto.selectedCommodityType = "mainCommodity";
            this.commodityView = false;
            this.rateMasterDto.selectedCommodity = "";
        }
        else {
            this.rateMasterDto.selectedCommodityType = "subCommodity";
            this.commodityView = true;
            this.rateMasterDto.selectedCommodity = commodityMasterPartialData.commodityName;
        }
        //        console.log( this.selectedName );
    };
    //to insert value of selected row in table to input field ends
    //////////For Update
    CommodityMasterComponent.prototype.validateUpdateCommodityDetails = function () {
        this.updateCommodityDetails();
    };
    CommodityMasterComponent.prototype.updateGetCommodityDetails = function () {
        this.rateMasterUpdateDto.companyId = this.userDataDtoReturnSession.companyId;
        this.rateMasterUpdateDto.userName = this.userDataDtoReturnSession.userId;
        this.rateMasterUpdateDto.isMultiArtSize = this.rateMasterDto.isMultiArtSize;
        if (this.rateMasterDto.selectedCommodityType == "mainCommodity") {
            this.rateMasterUpdateDto.commodityType = "Main";
            this.rateMasterUpdateDto.commodityName = this.rateMasterDto.commodityName;
            this.rateMasterUpdateDto.subCommodity = this.rateMasterDto.commodityName;
        }
        else if (this.rateMasterDto.selectedCommodityType == "subCommodity") {
            this.rateMasterUpdateDto.commodityType = "Sub";
            this.rateMasterUpdateDto.subCommodity = this.rateMasterDto.commodityName;
            this.rateMasterUpdateDto.commodityName = this.rateMasterDto.selectedCommodity;
        }
        this.rateMasterUpdateDto.selectedCommodity = this.mainCommodity;
        this.rateMasterUpdateDto.description = this.type;
        this.rateMasterUpdateDto.column1 = this.subCommodity;
        this.rateMasterUpdateDto.mode = "Update";
        this.rateMasterUpdateDto.confirm = "Completed";
    };
    /////////For Delete////////
    CommodityMasterComponent.prototype.validateDeleteRow = function () {
        this.deleteCommodityDetails();
    };
    CommodityMasterComponent.prototype.getDeleteCommodityDetails = function () {
        this.rateMasterDeleteDto.companyId = this.userDataDtoReturnSession.companyId;
        this.rateMasterDeleteDto.userName = this.userDataDtoReturnSession.userId;
        this.rateMasterDeleteDto.selectedCommodity = this.mainCommodity;
        this.rateMasterDeleteDto.description = this.type;
        this.rateMasterDeleteDto.column1 = this.subCommodity;
        this.rateMasterDeleteDto.mode = "Delete";
        //        console.log('This is delert'+ this.rateMasterDeleteDto.userName );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CommodityMasterComponent.prototype, "dtElements", void 0);
    CommodityMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commodity-master',
            template: __webpack_require__(/*! ./commodity-master.component.html */ "./src/app/master/commodity/commodity-master/commodity-master.component.html"),
            styles: [__webpack_require__(/*! ./commodity-master.component.css */ "./src/app/master/commodity/commodity-master/commodity-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"]])
    ], CommodityMasterComponent);
    return CommodityMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/commodity/commodity-merge/commodity-merge.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/master/commodity/commodity-merge/commodity-merge.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* to fix the height of a single row in drag and drop starts */\n.table-striped tbody tr:nth-of-type(odd) {\n\tbackground-color: rgba(0, 0, 0, .05);\n\theight: 24px;\n}\n.table-striped tbody tr:nth-of-type(even) {\n\theight: 24px;\n}\n/* to fix the height of a single row in drag and drop ends */\n\n                                    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2NvbW1vZGl0eS9jb21tb2RpdHktbWVyZ2UvY29tbW9kaXR5LW1lcmdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQStEO0FBQy9EO0NBQ0MscUNBQXFDO0NBQ3JDLGFBQWE7Q0FDYjtBQUVEO0NBQ0MsYUFBYTtDQUNiO0FBQ0QsNkRBQTZEIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL2NvbW1vZGl0eS9jb21tb2RpdHktbWVyZ2UvY29tbW9kaXR5LW1lcmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0byBmaXggdGhlIGhlaWdodCBvZiBhIHNpbmdsZSByb3cgaW4gZHJhZyBhbmQgZHJvcCBzdGFydHMgKi9cbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNSk7XG5cdGhlaWdodDogMjRweDtcbn1cblxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUoZXZlbikge1xuXHRoZWlnaHQ6IDI0cHg7XG59XG4vKiB0byBmaXggdGhlIGhlaWdodCBvZiBhIHNpbmdsZSByb3cgaW4gZHJhZyBhbmQgZHJvcCBlbmRzICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/master/commodity/commodity-merge/commodity-merge.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/master/commodity/commodity-merge/commodity-merge.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row system_responsive\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Commodity Merge</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-4 \">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"card-title\">New Commodity List</h6>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the first datatable starts  -->\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsRepeatedCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRepeatedCommodityList\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody style=\"height: 40vh;\" class='dragndrop'\n\t\t\t\t\t\t\t\t\t\t\t\t[dragula]='\"first-bag\"'>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let repeatedCommodityListData of repeatedCommodityListDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ repeatedCommodityListData.chequeNumber }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatable ends  -->\n\n\n\n\t\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the second datatable starts  -->\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"card-title\">Merge Commodity List</h6>\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionMergeCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerMergeCommodityList\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody style=\"height: 40vh;\" class='dragndrop'\n\t\t\t\t\t\t\t\t\t\t\t\t[dragula]='\"first-bag\"'>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let mergeCommodityListData of mergeCommodityListDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ mergeCommodityListData.chequeNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t the second datatable ends  -->\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commodity\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Commodity </label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"commodityName\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\tid=\"confirmBtn\">Confirm</button> -->\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"mergeBtn\">Merge</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable starts  -->\n\t\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"border-bottom: 1px solid orange;\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Confirmed Commodity List</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- (click)=\"openPopup(content)\" code to open popup -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark m-r-10\" id=\"undoBtn\">Undo</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionConfirmedCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConfirmedCommodityList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let confirmedCommodityListData of confirmedCommodityListDataList; let i = index\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"RowSelected(confirmedCommodityListData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ confirmedCommodityListData.chequeNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable ends  -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetailsTwo\">\n\t\t\t\t\t\t\t<ng-template #content let-yes=\"close\" let-no=\"close\"\n\t\t\t\t\t\t\t\tlet-d=\"dismiss\">\n\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"m-b-10\">Sure you want to UnConfirm the\n\t\t\t\t\t\t\t\t\t\t\tselected Commoditys?</h5>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<h5 class=\"m-b-10\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-exclamation-triangle\"></i> Please select -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tCommodity name to Undo -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</h5> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t(click)=\"ok('Yes click')\">Ok</button> -->\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"yes('Yes click')\">Yes</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"no('No click')\">No</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-template>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/master/commodity/commodity-merge/commodity-merge.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/master/commodity/commodity-merge/commodity-merge.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CommodityMergeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommodityMergeComponent", function() { return CommodityMergeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
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

//for the select option with filter ends


//for drag and drop ends
//for popup modal starts 

//for popup modal ends
var CommodityMergeComponent = /** @class */ (function () {
    function CommodityMergeComponent(consigneeMerge, 
    //for popup modal starts
    modalService
    //for popup modal ends                
    ) {
        this.consigneeMerge = consigneeMerge;
        this.modalService = modalService;
        //for the select option with filter starts
        this.controlDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlConsignorIndex = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.destinationOptions = [
            { id: 1, label: 'Agra' },
            { id: 2, label: 'Bangalore' },
            { id: 3, label: 'Chennai' },
            { id: 4, label: 'Delhi' },
            { id: 5, label: 'Erode' },
        ];
        this.consignorIndexOptions = [
            { id: 1, label: 'A' },
            { id: 2, label: 'B' },
            { id: 3, label: 'C' },
            { id: 4, label: 'D' },
            { id: 5, label: 'E' },
        ];
        //for popup modal ends
        //summaryTable:any;
        this.loadingIndicator = true;
        //
        this.dtTriggerRepeatedCommodityList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerMergeCommodityList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerConfirmedCommodityList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    CommodityMergeComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    CommodityMergeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //first datatable starts
        this.dtOptionsRepeatedCommodityList = {
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
            "scrollY": 240,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            pagingType: 'full_numbers',
            pageLength: 14,
        }, //first datatable ends
            //second datatable starts 
            this.dtOptionMergeCommodityList = {
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //                    {
                //                        extend: 'excel',
                //                        text: '<i class="fas fa-file-excel"> Excel</i>',
                //                        titleAttr: 'Excel',
                //                        exportOptions: {
                //                            columns: ':visible'
                //                        }
                //                    },
                //                    {
                //                        extend: 'print',
                //                        text: '<i class="fas fa-print"> Print</i>',
                //                        titleAttr: 'Print',
                //                    }
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
                "scrollY": 240,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            //second datatable ends
            //third datatable starts
            this.dtOptionConfirmedCommodityList = {
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //                    {
                //                        extend: 'excel',
                //                        text: '<i class="fas fa-file-excel"> Excel</i>',
                //                        titleAttr: 'Excel',
                //                        exportOptions: {
                //                            columns: ':visible'
                //                        }
                //                    },
                //                    {
                //                        extend: 'print',
                //                        text: '<i class="fas fa-print"> Print</i>',
                //                        titleAttr: 'Print',
                //                    }
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
                "scrollY": 240,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                pagingType: 'full_numbers',
                pageLength: 14,
            };
        //third datatable ends
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //first service starts 
        this.getDataFrmServiceFrRepeatedCommodityListTable = this.consigneeMerge.getSupplierMasterData();
        this.onDestroyUnsubscribtionRepeatedCommodityList = this.getDataFrmServiceFrRepeatedCommodityListTable.subscribe(function (data) {
            _this.repeatedCommodityListDataList = data['data'];
            _this.dtTriggerRepeatedCommodityList.next();
        });
        //first service ends
        //second service starts 
        this.getDataFrmServiceFrMergeCommodityListTable = this.consigneeMerge.getSummaryData();
        this.onDestroyUnsubscribtionMergeCommodityList = this.getDataFrmServiceFrMergeCommodityListTable.subscribe(function (data) {
            _this.mergeCommodityListDataList = data['data'];
            _this.dtTriggerMergeCommodityList.next();
        });
        //second service ends
        //third service starts  
        this.getDataFrmServiceFrConfirmedCommodityListTable = this.consigneeMerge.getSupplierMasterData();
        this.onDestroyUnsubscribtionConfirmedCommodityList = this.getDataFrmServiceFrConfirmedCommodityListTable.subscribe(function (data) {
            _this.confirmedCommodityListDataList = data['data'];
            _this.dtTriggerConfirmedCommodityList.next();
        });
        //third service ends
        //the below code is for the getting data through json ends
    };
    CommodityMergeComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerRepeatedCommodityList.unsubscribe();
        this.dtTriggerMergeCommodityList.unsubscribe();
        this.dtTriggerConfirmedCommodityList.unsubscribe();
        this.onDestroyUnsubscribtionRepeatedCommodityList.unsubscribe();
        this.onDestroyUnsubscribtionMergeCommodityList.unsubscribe();
        this.onDestroyUnsubscribtionConfirmedCommodityList.unsubscribe();
    };
    //for the select option with filter starts
    CommodityMergeComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    //to insert value of selected row in table to input field starts
    CommodityMergeComponent.prototype.RowSelected = function (confirmedCommodityListData) {
        this.selectedUser = confirmedCommodityListData;
        this.commodityName = this.selectedUser.chequeNumber;
        console.log(this.selectedUser);
    };
    //to insert value of selected row in table to input field ends
    //for popup modal starts 
    CommodityMergeComponent.prototype.openPopup = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (resultContent) {
            _this.closeResultContent = "Closed with: " + resultContent;
        }, function (reason) {
            _this.closeResultContent = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    CommodityMergeComponent.prototype.getDismissReason = function (reason) {
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
    ], CommodityMergeComponent.prototype, "dtElements", void 0);
    CommodityMergeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commodity-merge',
            template: __webpack_require__(/*! ./commodity-merge.component.html */ "./src/app/master/commodity/commodity-merge/commodity-merge.component.html"),
            styles: [__webpack_require__(/*! ./commodity-merge.component.css */ "./src/app/master/commodity/commodity-merge/commodity-merge.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_1__["ConsigneeService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
            //for popup modal ends                
        ])
    ], CommodityMergeComponent);
    return CommodityMergeComponent;
}());



/***/ }),

/***/ "./src/app/master/commodity/commodity.module.ts":
/*!******************************************************!*\
  !*** ./src/app/master/commodity/commodity.module.ts ***!
  \******************************************************/
/*! exports provided: CommodityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommodityModule", function() { return CommodityModule; });
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
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_master_commodity_commodity_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/master/commodity/commodity.routing */ "./src/app/master/commodity/commodity.routing.ts");
/* harmony import */ var src_app_master_commodity_commodity_master_commodity_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/master/commodity/commodity-master/commodity-master.component */ "./src/app/master/commodity/commodity-master/commodity-master.component.ts");
/* harmony import */ var src_app_master_commodity_tp_master_tp_master_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/master/commodity/tp-master/tp-master.component */ "./src/app/master/commodity/tp-master/tp-master.component.ts");
/* harmony import */ var src_app_master_commodity_commodity_merge_commodity_merge_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/master/commodity/commodity-merge/commodity-merge.component */ "./src/app/master/commodity/commodity-merge/commodity-merge.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { DatatableComponent } from '@swimlane/ngx-datatable';
//(DatatableComponent) table: DatatableComponent;
/*for old datatable*/ 


//for select option search starts




//for select option search ends
//for drag and drop starts

//for drag and drop ends




var CommodityModule = /** @class */ (function () {
    function CommodityModule() {
    }
    CommodityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_master_commodity_commodity_routing__WEBPACK_IMPORTED_MODULE_11__["CommodityRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_10__["DragulaModule"]],
            declarations: [
                src_app_master_commodity_commodity_master_commodity_master_component__WEBPACK_IMPORTED_MODULE_12__["CommodityMasterComponent"],
                src_app_master_commodity_tp_master_tp_master_component__WEBPACK_IMPORTED_MODULE_13__["TpMasterComponent"],
                src_app_master_commodity_commodity_merge_commodity_merge_component__WEBPACK_IMPORTED_MODULE_14__["CommodityMergeComponent"]
            ]
        })
    ], CommodityModule);
    return CommodityModule;
}());



/***/ }),

/***/ "./src/app/master/commodity/commodity.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/master/commodity/commodity.routing.ts ***!
  \*******************************************************/
/*! exports provided: CommodityRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommodityRoutes", function() { return CommodityRoutes; });
/* harmony import */ var src_app_master_commodity_commodity_master_commodity_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/master/commodity/commodity-master/commodity-master.component */ "./src/app/master/commodity/commodity-master/commodity-master.component.ts");
/* harmony import */ var src_app_master_commodity_tp_master_tp_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/master/commodity/tp-master/tp-master.component */ "./src/app/master/commodity/tp-master/tp-master.component.ts");
/* harmony import */ var src_app_master_commodity_commodity_merge_commodity_merge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/master/commodity/commodity-merge/commodity-merge.component */ "./src/app/master/commodity/commodity-merge/commodity-merge.component.ts");



var CommodityRoutes = [
    {
        path: '',
        children: [
            {
                path: 'commodityMaster',
                component: src_app_master_commodity_commodity_master_commodity_master_component__WEBPACK_IMPORTED_MODULE_0__["CommodityMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'tpMaster',
                component: src_app_master_commodity_tp_master_tp_master_component__WEBPACK_IMPORTED_MODULE_1__["TpMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'commodityMerge',
                component: src_app_master_commodity_commodity_merge_commodity_merge_component__WEBPACK_IMPORTED_MODULE_2__["CommodityMergeComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/master/commodity/tp-master/tp-master.component.css":
/*!********************************************************************!*\
  !*** ./src/app/master/commodity/tp-master/tp-master.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jb21tb2RpdHkvdHAtbWFzdGVyL3RwLW1hc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/master/commodity/tp-master/tp-master.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/master/commodity/tp-master/tp-master.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Commodity Details</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commodityName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box \"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commodityCode\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity Code</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"saveBtn\">Save</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTpMaster\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTpMaster\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity Code</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let tpMasterData of tpMasterDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tpMasterData.commodityName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ tpMasterData.commodityCode }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\"></div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/master/commodity/tp-master/tp-master.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/master/commodity/tp-master/tp-master.component.ts ***!
  \*******************************************************************/
/*! exports provided: TpMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TpMasterComponent", function() { return TpMasterComponent; });
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
var TpMasterComponent = /** @class */ (function () {
    //for the select option with filter ends
    function TpMasterComponent(/* for datatable starts */ tpMasterScreen /* for datatable endss */) {
        this.tpMasterScreen = tpMasterScreen;
        //for datatable ends
        this.loadingIndicator = true;
        this.dtTriggerTpMaster = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //for datatable ends
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.dlIssueStateOptions = [
            { id: 1, label: 'Assam' },
            { id: 2, label: 'Delhi' },
            { id: 3, label: 'Tamil Nadu' },
        ];
    }
    /* for datatable starts */
    TpMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    TpMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for datatable starts
        this.dtOptionsTpMaster = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Commodity Name',
                    data: 'commodityName'
                },
                {
                    title: 'Commodity Code',
                    data: 'commodityCode'
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
        //        this.supplierList.getAllData().subscribe(data => {
        //            this.lrDispatchBknRptList = data['data'];
        //            this.dtTriggerSummary.next();
        //            } );
        this.gettingDataFrmServiceFrTpMasterTable = this.tpMasterScreen.getSummaryData();
        this.onDestroyUnsubscribtionTpMaster = this.gettingDataFrmServiceFrTpMasterTable.subscribe(function (data) {
            _this.tpMasterDataList = data['data'];
            _this.dtTriggerTpMaster.next();
        });
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    TpMasterComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerTpMaster.unsubscribe();
        this.onDestroyUnsubscribtionTpMaster.unsubscribe();
        //for datatable ends
    };
    //for the select option with filter starts
    TpMasterComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    ], TpMasterComponent.prototype, "dtElements", void 0);
    TpMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tp-master',
            template: __webpack_require__(/*! ./tp-master.component.html */ "./src/app/master/commodity/tp-master/tp-master.component.html"),
            styles: [__webpack_require__(/*! ./tp-master.component.css */ "./src/app/master/commodity/tp-master/tp-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"] /* for datatable endss */])
    ], TpMasterComponent);
    return TpMasterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-master-commodity-commodity-module.js.map