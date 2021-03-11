(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-lr-enquiry-enquiry-module"],{

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

/***/ "./src/app/dataService/lr-report-service.ts":
/*!**************************************************!*\
  !*** ./src/app/dataService/lr-report-service.ts ***!
  \**************************************************/
/*! exports provided: LrReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrReportService", function() { return LrReportService; });
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



var LrReportService = /** @class */ (function () {
    function LrReportService(http) {
        this.http = http;
        //for Local
        //        private _baseUrl = "http://localhost:8080/srd/report/v1";
        //for QA
        //    private _baseUrl = "http://54.210.51.40:8080/srd/report/v1";
        //for Live
        //        private _baseUrl = "http://3.222.201.242:8080/srd/report/v1";
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webLrReport;
    }
    LrReportService.prototype.getLrDetailsForMultiplePrt = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLrDetailsForMultiplePrtApi", lrDto);
    };
    LrReportService.prototype.getLRsShortExtraDtlsReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLRsShortExtraDtlsRptApi", lrDto);
    };
    LrReportService.prototype.getLrHistoryRptDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLrHistoryRptDetailsApi", lrDto);
    };
    LrReportService.prototype.getBkgLrDisPatchRptService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBkgLrDisPatchRptServiceApi", lrDto);
    };
    //GodownStockBkgRpt
    LrReportService.prototype.getGodownStocksRptBookingSummary = function (lrDto) {
        return this.http.post(this._baseUrl + "/getGodownStocksRptBookingSummaryApi", lrDto);
    };
    LrReportService.prototype.getGodownStocksRptBookingDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getGodownStocksRptBookingDetailsApi", lrDto);
    };
    LrReportService.prototype.getLrDetailsLCandBCSummary = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLrDetailsLCandBCSummaryApi", lrDto);
    };
    LrReportService.prototype.getLrDetailsLCandBCDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLrDetailsLCandBCDetailsApi", lrDto);
    };
    LrReportService.prototype.getOSStocksSummary = function (lrDto) {
        return this.http.post(this._baseUrl + "/getOSStocksSummaryApi", lrDto);
    };
    LrReportService.prototype.getOSStocksDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getOSStocksDetailsApi", lrDto);
    };
    LrReportService.prototype.getOsStocksPartyDetailsReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getOsStocksPartyDetailsReportApi", lrDto);
    };
    LrReportService.prototype.getPendingStocksDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getPendingStocksDetailsApi", lrDto);
    };
    LrReportService.prototype.getStorageStockRpt = function (lrDto) {
        return this.http.post(this._baseUrl + "/getStorageStockRptApi", lrDto);
    };
    //Booking Agent Dispatch Performance Rpt Start
    LrReportService.prototype.getBookingAgentDispatchPeformanceSummaryRpt = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBookingAgentDispatchPeformanceSummaryApi", lrDto);
    };
    LrReportService.prototype.getBookingAgentDispatchPeformanceDetailsRpt = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBookingAgentDispatchPeformanceDetailsApi", lrDto);
    };
    //Booking Agent Dispatch Performance Rpt End
    //Service Tax Rpt Start
    LrReportService.prototype.getBookingServiceTaxBookingReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBookingServiceTaxBookingApi", lrDto);
    };
    LrReportService.prototype.getBookingServiceTaxDestReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBookingServiceTaxDestApi", lrDto);
    };
    LrReportService.prototype.getBookingServiceTaxSubstationReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBookingServiceTaxSubstationApi", lrDto);
    };
    //Service Tax Rpt End
    LrReportService.prototype.getLRStatus = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLRStatusApi", lrDto);
    };
    LrReportService.prototype.getStockCheckReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getStockCheckReportApi", lrDto);
    };
    LrReportService.prototype.updateStockCheck = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateStockCheckApi", lrDto);
    };
    LrReportService.prototype.getLROfSpecificStation = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLROfSpecificStationApi", lrDto);
    };
    LrReportService.prototype.godownTransfer = function (lrDto) {
        return this.http.post(this._baseUrl + "/godownTransferApi", lrDto);
    };
    //Stock to cp
    LrReportService.prototype.getCPStockReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getCPStocksApi", lrDto);
    };
    LrReportService.prototype.updateCPStocks = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateCPStocksApi", lrDto);
    };
    LrReportService.prototype.addStocksToCp = function (lrDto) {
        return this.http.post(this._baseUrl + "/addStocksToCPApi", lrDto);
    };
    LrReportService.prototype.getLREnquiryAdvanceDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLREnquiryAdvanceDetailsApi", lrDto);
    };
    LrReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LrReportService);
    return LrReportService;
}());



/***/ }),

/***/ "./src/app/dto/PartyMaster-dto.ts":
/*!****************************************!*\
  !*** ./src/app/dto/PartyMaster-dto.ts ***!
  \****************************************/
/*! exports provided: PartyMasterDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyMasterDto", function() { return PartyMasterDto; });
var PartyMasterDto = /** @class */ (function () {
    function PartyMasterDto() {
    }
    return PartyMasterDto;
}());



/***/ }),

/***/ "./src/app/lr/enquiry/consignee-details/consignee-details.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/lr/enquiry/consignee-details/consignee-details.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* for custom css for autocomplete select option starts */ \n.auto_selectOption {\n\tfont-size: 15px;\n\tpadding: 0px;\n\tborder: 2px solid #dadee2;\n\theight: 26px;\n\twidth: 100%;\n} \n/* for small mobile */ \n@media ( max-width : 355px) {\n\t.auto_selectOption {\n\t\twidth: 50% !important;\n\t}\n} \n/* for medium mobile */ \n@media ( max-width : 365px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n} \n/* for mobile */ \n@media ( min-width : 370px) and (max-width: 766px) {\n\t.auto_selectOption {\n\t\twidth: 51%;\n\t}\n} \n/* for ipad */ \n@media ( min-width : 767px) and (max-width: 990px) {\n\t.auto_selectOption {\n\t\twidth: 81%;\n\t}\n} \n/* for ipad pro */ \n@media ( min-width : 991px) and (max-width: 1200px) {\n\t.auto_selectOption {\n\t\twidth: 46%;\n\t}\n} \n/* for desktop */ \n@media ( min-width : 1201px) and (max-width: 1500px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n} \n/* for custom css for autocomplete select option ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHIvZW5xdWlyeS9jb25zaWduZWUtZGV0YWlscy9jb25zaWduZWUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBEQUEwRDtBQUMxRDtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixZQUFZO0NBQ1o7QUFDRCxzQkFBc0I7QUFDdEI7Q0FDQztFQUNDLHNCQUFzQjtFQUN0QjtDQUNEO0FBQ0QsdUJBQXVCO0FBQ3ZCO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUNELGdCQUFnQjtBQUNoQjtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFDRCxjQUFjO0FBQ2Q7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0Qsa0JBQWtCO0FBQ2xCO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUNELGlCQUFpQjtBQUNqQjtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFDRCx3REFBd0QiLCJmaWxlIjoic3JjL2FwcC9sci9lbnF1aXJ5L2NvbnNpZ25lZS1kZXRhaWxzL2NvbnNpZ25lZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmb3IgY3VzdG9tIGNzcyBmb3IgYXV0b2NvbXBsZXRlIHNlbGVjdCBvcHRpb24gc3RhcnRzICovIFxuLmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRwYWRkaW5nOiAwcHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNkYWRlZTI7XG5cdGhlaWdodDogMjZweDtcblx0d2lkdGg6IDEwMCU7XG59XG4vKiBmb3Igc21hbGwgbW9iaWxlICovXG5AbWVkaWEgKCBtYXgtd2lkdGggOiAzNTVweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA1MCUgIWltcG9ydGFudDtcblx0fVxufVxuLyogZm9yIG1lZGl1bSBtb2JpbGUgKi9cbkBtZWRpYSAoIG1heC13aWR0aCA6IDM2NXB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDUwJTtcblx0fVxufVxuLyogZm9yIG1vYmlsZSAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogMzcwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA1MSU7XG5cdH1cbn1cbi8qIGZvciBpcGFkICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDgxJTtcblx0fVxufVxuLyogZm9yIGlwYWQgcHJvICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA0NiU7XG5cdH1cbn1cbi8qIGZvciBkZXNrdG9wICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiAxMjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNTAlO1xuXHR9XG59XG4vKiBmb3IgY3VzdG9tIGNzcyBmb3IgYXV0b2NvbXBsZXRlIHNlbGVjdCBvcHRpb24gZW5kcyAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/lr/enquiry/consignee-details/consignee-details.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/lr/enquiry/consignee-details/consignee-details.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Consignee Details</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Consignee Details Enquiry</h6>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts  -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationOptions | filter: control.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestination.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchType\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"consigneeName\">Consignee\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tName</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mobileNo\">Mobile No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"partyName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Party Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Party\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(partyOptions | filter: control.value) as resultParty\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultParty\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultParty.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Consignee Details</h6>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"mobileNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Mobile No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"officeNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Office No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone-square\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-envelope\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble starts -->\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsGodownStockSmryDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerGodownStockSmryDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Lrs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>To-Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wght</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wght</th>\n\t\t\t\t\t\t\t\t\t\t<th>Stock At</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let godownStockSmryDetailsData of godownStockSmryDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ godownStockSmryDetailsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ godownStockSmryDetailsData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ godownStockSmryDetailsData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ godownStockSmryDetailsData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ godownStockSmryDetailsData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ godownStockSmryDetailsData.actWght }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ godownStockSmryDetailsData.chgWght }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ godownStockSmryDetailsData.stocksAt }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble ends -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable starts  -->\n\n\t\t\t\t\t\t\t<div class=\"p-t-10\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsConsigneeOsDetails\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConsigneeOsDetails\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Total Memo</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Total Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Total Article</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Area</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Collection Man</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let consigneeOsDetailsData of consigneeOsDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeOsDetailsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeOsDetailsData.totalMemo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeOsDetailsData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeOsDetailsData.totalArticle }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeOsDetailsData.area }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeOsDetailsData.collectionMan }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable starts  -->\n\n\t\t\t\t\t\t\t<div class=\"p-t-10\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsConsigneeRateDetails\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerConsigneeRateDetails\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Deliv Type</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Src.Ham</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Des.Ham</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Receipt Chg</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Service Chg</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>GC Chg</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Per Unit</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let consigneeRateDetailsData of consigneeRateDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateDetailsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateDetailsData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateDetailsData.delivType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateDetailsData.unit }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateDetailsData.srcHam }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateDetailsData.desHam }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateDetailsData.rate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateDetailsData.receiptChg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateDetailsData.serviceChg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateDetailsData.gcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ consigneeRateDetailsData.perUnit }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\tthe third datatable ends  -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/lr/enquiry/consignee-details/consignee-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/lr/enquiry/consignee-details/consignee-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConsigneeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneeDetailsComponent", function() { return ConsigneeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
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
//for the select option with filter starts

//for the select option with filter ends
//from the particular global folder starts

//from the particular global folder ends


var ConsigneeDetailsComponent = /** @class */ (function () {
    function ConsigneeDetailsComponent(consigneeDetailsRpt) {
        this.consigneeDetailsRpt = consigneeDetailsRpt;
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.partyOptions = [
            { id: 1, label: 'AR Tiles' },
            { id: 2, label: 'GK Enterprises' },
            { id: 3, label: 'GQ Associates' },
        ];
        this.destinationOptions = [
            { id: 1, label: 'Bangalore' },
            { id: 2, label: 'Calicut' },
            { id: 3, label: 'Delhi' },
        ];
        //for the select option with filter ends
        //summaryTable:any;
        this.loadingIndicator = true;
        this.dtTriggerGodownStockSmryDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerConsigneeOsDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerConsigneeRateDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ConsigneeDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ConsigneeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //the first datatable starts
        this.dtOptionsGodownStockSmryDetails = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Consignee Name',
                    data: 'consigneeName'
                },
                {
                    title: 'Total Lrs',
                    data: 'totalLrs'
                },
                {
                    title: 'Articles',
                    data: 'articles'
                },
                {
                    title: 'To-Pay',
                    data: 'toPay'
                },
                {
                    title: 'Paid',
                    data: 'paid'
                },
                {
                    title: 'Act Wght',
                    data: 'actWght'
                },
                {
                    title: 'Chg Wght',
                    data: 'chgWght'
                },
                {
                    title: 'Stocks At',
                    data: 'stocksAt'
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
            //                    text: '<i class="fas fa-print"> Print Consignee Wise</i>',
            //                    titleAttr: 'Print Consignee Wise',
            //
            //                },
            //                {
            //                    extend: 'print',
            //                    text: '<i class="fas fa-print"> Print All</i>',
            //                    titleAttr: 'Print All',
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
            "scrollY": 180,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        },
            //the first datatable ends
            //            the second datatable starts 
            this.dtOptionsConsigneeOsDetails = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Consignee Name',
                        data: 'consigneeName'
                    },
                    {
                        title: 'Total Memo',
                        data: 'totalMemo'
                    },
                    {
                        title: 'Total Amount',
                        data: 'totalAmount'
                    },
                    {
                        title: 'Total Article',
                        data: 'totalArticle'
                    },
                    {
                        title: 'Area',
                        data: 'area'
                    },
                    {
                        title: 'Collection Man',
                        data: 'collectionMan'
                    }
                ],
                //columns is used to for export and others endss
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //                    {
                //                        extend: 'print',
                //                        text: '<i class="fas fa-print"> Print</i>',
                //                        titleAttr: 'Print',
                //
                //                    },
                //                    {
                //                        extend: 'excel',
                //                        text: '<i class="fas fa-file-excel"> Excel</i>',
                //                        titleAttr: 'Excel',
                //                        exportOptions: {
                //                            columns: ':visible'
                //                        }
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
                "scrollY": 180,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            //the second datatable ends
            //the third datatable starts            
            this.dtOptionsConsigneeRateDetails = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Consignee Name',
                        data: 'consigneeName'
                    },
                    {
                        title: 'Source',
                        data: 'source'
                    },
                    {
                        title: 'Deliv Type',
                        data: 'delivType'
                    },
                    {
                        title: 'Unit',
                        data: 'unit'
                    },
                    {
                        title: 'Src.Ham',
                        data: 'srcHam'
                    },
                    {
                        title: 'Des.Ham',
                        data: 'desHam'
                    },
                    {
                        title: 'Rate',
                        data: 'rate'
                    },
                    {
                        title: 'Receipt Chg',
                        data: 'receiptChg'
                    },
                    {
                        title: 'Service Chg',
                        data: 'serviceChg'
                    },
                    {
                        title: 'GC Chg',
                        data: 'gcChg'
                    },
                    {
                        title: 'Per Unit',
                        data: 'perUnit'
                    }
                ],
                //columns is used to for export and others endss
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //                    {
                //                        extend: 'print',
                //                        text: '<i class="fas fa-print"> Print</i>',
                //                        titleAttr: 'Print',
                //                    },
                //                    {
                //                        extend: 'excel',
                //                        text: '<i class="fas fa-file-excel"> Excel</i>',
                //                        titleAttr: 'Excel',
                //                        exportOptions: {
                //                            columns: ':visible'
                //                        }
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
                "scrollY": 180,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
            },
            //the third datatable ends
            //the below code is for the getting data through json starts
            //            this.supplierList.getAllData().subscribe(data => {
            //                this.lrDispatchBknRptList = data['data'];
            //                this.dtTriggerSummary.next();
            //                } );
            //first service starts 
            this.getDataGodownStockSmryDetailsTable = this.consigneeDetailsRpt.getSummaryData();
        this.onDestroyUnsubscribtionGodownStockSmryDetails = this.getDataGodownStockSmryDetailsTable.subscribe(function (data) {
            _this.godownStockSmryDetailsDataList = data['data'];
            _this.dtTriggerGodownStockSmryDetails.next();
        });
        //first service ends
        //second service starts
        this.getDataConsigneeOsDetailsTable = this.consigneeDetailsRpt.getSummaryData();
        this.onDestroyUnsubscribtionConsigneeOsDetails = this.getDataConsigneeOsDetailsTable.subscribe(function (data) {
            _this.consigneeOsDetailsDataList = data['data'];
            _this.dtTriggerConsigneeOsDetails.next();
        });
        //second service ends
        //third service starts
        this.getDataConsigneeRateDetails = this.consigneeDetailsRpt.getSummaryData();
        this.onDestroyUnsubscribtionConsigneeRateDetails = this.getDataConsigneeRateDetails.subscribe(function (data) {
            _this.consigneeRateDetailsDataList = data['data'];
            _this.dtTriggerConsigneeRateDetails.next();
        });
        //third service ends
    };
    ConsigneeDetailsComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerGodownStockSmryDetails.unsubscribe();
        this.dtTriggerConsigneeOsDetails.unsubscribe();
        this.dtTriggerConsigneeRateDetails.unsubscribe();
        this.onDestroyUnsubscribtionGodownStockSmryDetails.unsubscribe();
        this.onDestroyUnsubscribtionConsigneeOsDetails.unsubscribe();
        this.onDestroyUnsubscribtionConsigneeRateDetails.unsubscribe();
    };
    //for the select option with filter starts
    ConsigneeDetailsComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    ], ConsigneeDetailsComponent.prototype, "dtElements", void 0);
    ConsigneeDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consignee-details',
            template: __webpack_require__(/*! ./consignee-details.component.html */ "./src/app/lr/enquiry/consignee-details/consignee-details.component.html"),
            styles: [__webpack_require__(/*! ./consignee-details.component.css */ "./src/app/lr/enquiry/consignee-details/consignee-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"]])
    ], ConsigneeDetailsComponent);
    return ConsigneeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/lr/enquiry/enquiry.module.ts":
/*!**********************************************!*\
  !*** ./src/app/lr/enquiry/enquiry.module.ts ***!
  \**********************************************/
/*! exports provided: EnquiryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryModule", function() { return EnquiryModule; });
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
/* harmony import */ var src_app_lr_enquiry_enquiry_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/lr/enquiry/enquiry.routing */ "./src/app/lr/enquiry/enquiry.routing.ts");
/* harmony import */ var src_app_lr_enquiry_lr_enquiry_form_lr_enquiry_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/lr/enquiry/lr-enquiry-form/lr-enquiry-form.component */ "./src/app/lr/enquiry/lr-enquiry-form/lr-enquiry-form.component.ts");
/* harmony import */ var src_app_lr_enquiry_lr_advance_lr_advance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/lr/enquiry/lr-advance/lr-advance.component */ "./src/app/lr/enquiry/lr-advance/lr-advance.component.ts");
/* harmony import */ var src_app_lr_enquiry_consignee_details_consignee_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/lr/enquiry/consignee-details/consignee-details.component */ "./src/app/lr/enquiry/consignee-details/consignee-details.component.ts");
/* harmony import */ var src_app_lr_enquiry_lr_delivery_status_lr_delivery_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/lr/enquiry/lr-delivery-status/lr-delivery-status.component */ "./src/app/lr/enquiry/lr-delivery-status/lr-delivery-status.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends






var EnquiryModule = /** @class */ (function () {
    function EnquiryModule() {
    }
    EnquiryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_lr_enquiry_enquiry_routing__WEBPACK_IMPORTED_MODULE_10__["EnquiryRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"]],
            declarations: [
                src_app_lr_enquiry_lr_enquiry_form_lr_enquiry_form_component__WEBPACK_IMPORTED_MODULE_11__["LrEnquiryFormComponent"],
                src_app_lr_enquiry_lr_advance_lr_advance_component__WEBPACK_IMPORTED_MODULE_12__["LrAdvanceComponent"],
                src_app_lr_enquiry_consignee_details_consignee_details_component__WEBPACK_IMPORTED_MODULE_13__["ConsigneeDetailsComponent"],
                src_app_lr_enquiry_lr_delivery_status_lr_delivery_status_component__WEBPACK_IMPORTED_MODULE_14__["LrDeliveryStatusComponent"],
            ]
        })
    ], EnquiryModule);
    return EnquiryModule;
}());



/***/ }),

/***/ "./src/app/lr/enquiry/enquiry.routing.ts":
/*!***********************************************!*\
  !*** ./src/app/lr/enquiry/enquiry.routing.ts ***!
  \***********************************************/
/*! exports provided: EnquiryRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryRoutes", function() { return EnquiryRoutes; });
/* harmony import */ var src_app_lr_enquiry_lr_enquiry_form_lr_enquiry_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lr/enquiry/lr-enquiry-form/lr-enquiry-form.component */ "./src/app/lr/enquiry/lr-enquiry-form/lr-enquiry-form.component.ts");
/* harmony import */ var src_app_lr_enquiry_lr_advance_lr_advance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lr/enquiry/lr-advance/lr-advance.component */ "./src/app/lr/enquiry/lr-advance/lr-advance.component.ts");
/* harmony import */ var src_app_lr_enquiry_consignee_details_consignee_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lr/enquiry/consignee-details/consignee-details.component */ "./src/app/lr/enquiry/consignee-details/consignee-details.component.ts");
/* harmony import */ var src_app_lr_enquiry_lr_delivery_status_lr_delivery_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lr/enquiry/lr-delivery-status/lr-delivery-status.component */ "./src/app/lr/enquiry/lr-delivery-status/lr-delivery-status.component.ts");




var EnquiryRoutes = [
    {
        path: '',
        children: [
            {
                path: 'lrEnquiry',
                component: src_app_lr_enquiry_lr_enquiry_form_lr_enquiry_form_component__WEBPACK_IMPORTED_MODULE_0__["LrEnquiryFormComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'lrAdvance',
                component: src_app_lr_enquiry_lr_advance_lr_advance_component__WEBPACK_IMPORTED_MODULE_1__["LrAdvanceComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'consigneeDetails',
                component: src_app_lr_enquiry_consignee_details_consignee_details_component__WEBPACK_IMPORTED_MODULE_2__["ConsigneeDetailsComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'lrDeliveryStatus',
                component: src_app_lr_enquiry_lr_delivery_status_lr_delivery_status_component__WEBPACK_IMPORTED_MODULE_3__["LrDeliveryStatusComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/lr/enquiry/lr-advance/lr-advance.component.css":
/*!****************************************************************!*\
  !*** ./src/app/lr/enquiry/lr-advance/lr-advance.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n    top:26px;\r\n      left:25px;\r\n      max-height: 150px;\r\n      overflow-y: auto;\r\n      position: absolute;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHIvZW5xdWlyeS9sci1hZHZhbmNlL2xyLWFkdmFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7TUFDUCxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixtQkFBbUI7R0FDdEIiLCJmaWxlIjoic3JjL2FwcC9sci9lbnF1aXJ5L2xyLWFkdmFuY2UvbHItYWR2YW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93IHtcclxuICAgIHRvcDoyNnB4O1xyXG4gICAgICBsZWZ0OjI1cHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/lr/enquiry/lr-advance/lr-advance.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/lr/enquiry/lr-advance/lr-advance.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">LR Enquiry Advance</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destination\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"consigneeDestListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Station\" />\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"partyName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\" name=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsignee($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input id=\"fromDate\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 100%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t(click)=\"searchMethod()\">Search</button>\n\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearMethod()\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 vl\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">LR Details</h6>\n\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t<table datatable id=\"lrAdvTable\"\n\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLrAdvance\"\n\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLrAdvance\">\n\t\t\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>LR No.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Agent Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Goods Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Act.Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg.Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Amt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Entry Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Dep.Dt Frm 1st Pt.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Arr.Dt Frm 1st Pt.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Dep.Dt Frm 2nd Pt.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Arr.Dt Frm 2nd Pt.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Dep.Dt Frm 3rd Pt.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Arr.Dt Frm 3rd Pt.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Delivery Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Tot No.Of Days</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let lrAdvanceData of lrAdvanceDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.consignorName}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.totalArticles}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.goodsType}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.status}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.goodsValue }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.riskCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.cashStxAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.bookingDateStr}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.enteredDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.departuredateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.arrivalDateStr}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.depDateFrmTrnspDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.arrDateAtTrnspDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.depDateFrmTrnspDate2Str }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.arrDateAtTrnspDate2Str }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.deliveryDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrAdvanceData.diffDays }}</td>\n\t\t\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/lr/enquiry/lr-advance/lr-advance.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/lr/enquiry/lr-advance/lr-advance.component.ts ***!
  \***************************************************************/
/*! exports provided: LrAdvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrAdvanceComponent", function() { return LrAdvanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var my = new Date();














var LrAdvanceComponent = /** @class */ (function () {
    function LrAdvanceComponent(router, masterReadService, datePipe, lrReportService, masterService, consigneeService) {
        var _this = this;
        this.router = router;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        this.lrReportService = lrReportService;
        this.masterService = masterService;
        this.consigneeService = consigneeService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.isLoggedIn = true;
        this.searchConsigneeDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.isDestView = false;
        this.showDest = false;
        this.dtTriggerLrAdvance = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.consigneeNameTATemp = [];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.consigneeNamePartyDtoAllOption = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.consigneeNameTA = [];
        this.focusConsigneeNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.consigneeNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.consigneeNameTA
                : _this.consigneeNameTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeName = function (x) { return x.consigneeName; };
        this.lrdto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"];
        this.getConsigneeDetails = function (destShow) {
            _this.getConsigneeDetailsList(destShow);
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Warning",
                        text: "No Consignee Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.consigneeNameOptions = [];
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                }
                else {
                    _this.consigneeNameOptions = response;
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                    for (var i = 0; i < _this.consigneeNameOptions.length; i++) {
                        _this.consigneeNameTA.push(_this.consigneeNameOptions[i]);
                    }
                    _this.consigneeNameTATemp = _this.consigneeNameTA;
                    console.log(_this.consigneeNameTA);
                    if (destShow) {
                        $("#consigneeName").focus();
                    }
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the consignee details", "info");
            }, function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
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
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            this.getDestinationDetails();
            this.getConsigneeDetails(false);
        }
    }
    LrAdvanceComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    LrAdvanceComponent.prototype.ngOnInit = function () {
        this.dtOptionsLrAdvance = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
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
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            //scroll in datatable ends
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                var totalarticles = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWgt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chargedWgt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var goodsval = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var FOV = api.column(11).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(4).footer()).html(totalarticles);
                $(api.column(7).footer()).html(actualWgt);
                $(api.column(8).footer()).html(chargedWgt);
                $(api.column(9).footer()).html(toPay);
                $(api.column(10).footer()).html(goodsval);
                $(api.column(11).footer()).html(FOV);
            }
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
    };
    LrAdvanceComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLrAdvance.unsubscribe();
    };
    LrAdvanceComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerLrAdvance.next();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    LrAdvanceComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    LrAdvanceComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    LrAdvanceComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    LrAdvanceComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.getDestinationMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            _this.showSpinnerForAction = false;
            if (response) {
                //this.stationOptions = response;
                if (response.length > 0) {
                    _this.destinationOptions = response;
                    _this.destinationTA = [];
                    for (var i = 0; i < _this.destinationOptions.length; i++) {
                        _this.destinationTA.push(_this.destinationOptions[i]);
                    }
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Destination Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    LrAdvanceComponent.prototype.getConsigneeDetailsList = function (destShow) {
        this.consigneeNameOptions = [];
        this.showSpinnerForAction = true;
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.selectedDestination = this.modelDestinationFotGet;
        if (destShow) {
            this.partyMasterDtoForconsignee.office = this.selectedDestination.destination;
            console.log(this.selectedDestination);
        }
        else {
            this.partyMasterDtoForconsignee.office = this.userDataDtoReturnSession.mainStation;
        }
        this.partyMasterDtoForconsignee.branch = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignee.mode = "specific";
        console.log(this.partyMasterDtoForconsignee);
    };
    LrAdvanceComponent.prototype.consigneeDestListener = function (e) {
        this.modelDestinationFotGet = e.item;
        this.selectedDestination = this.modelDestinationFotGet.destinationId;
        this.getConsigneeDetails(true);
    };
    LrAdvanceComponent.prototype.rowSelectedConsignee = function (e) {
        this.modelConsigneeNameId = e.item;
        this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
        console.log(this.selectedConsigneeId);
        console.log(this.modelConsigneeNameId);
    };
    LrAdvanceComponent.prototype.searchMethod = function () {
        //this.showSpinnerForAction = true;
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedDestination = $("#destination").val();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        console.log(this.selectedConsigneeName);
        console.log(this.selectedDestination);
        console.log(this.selectedFromDate);
        console.log(this.selectedToDate);
        this.searchConsigneeDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        if ((this.selectedConsigneeName == null) || (this.selectedConsigneeName == undefined) ||
            (this.selectedConsigneeName == '') || (this.selectedDestination == null) ||
            (this.selectedDestination == undefined) || (this.selectedDestination == '')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Mandatory Fields", "Please select the mandatory field", "warning");
            return false;
        }
        else {
            this.lrAdvanceDataListDetail();
        }
    };
    LrAdvanceComponent.prototype.lrAdvanceData = function () {
        this.lrdto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedDestination = $("#destination").val();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        if ((this.selectedFromDate != null && this.selectedFromDate != '') &&
            (this.selectedFromDate != null && this.selectedFromDate != '')) {
            this.lrdto.fromDate = this.selectedFromDate;
            this.lrdto.toDate = this.selectedToDate;
        }
        this.lrdto.destination = this.selectedDestination;
        this.lrdto.consigneeId = this.selectedConsigneeId;
        this.lrdto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.lrdto);
    };
    LrAdvanceComponent.prototype.lrAdvanceDataListDetail = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.lrAdvanceData();
        this.lrReportService.getLREnquiryAdvanceDetails(this.lrdto).subscribe(function (response) {
            $("#lrAdvTable").DataTable().destroy();
            _this.lrAdvanceDataList = [];
            if (response.length > 0) {
                console.log(response);
                _this.lrAdvanceDataList = response;
                _this.showSpinnerForAction = false;
            }
            else {
                _this.lrAdvanceDataList = [];
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("No Records", "No Records found for this search", "info");
            }
            _this.dtTriggerLrAdvance.next();
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Lr Enquiry Advance Details", "info");
        }, function () { return console.log('done'); };
    };
    LrAdvanceComponent.prototype.clearMethod = function () {
        $("#lrAdvTable").DataTable().destroy();
        this.lrAdvanceDataList = [];
        this.dtTriggerLrAdvance.next();
        $("#consigneeName").val('');
        $("#consignorName").val('');
        $("#fromDate").val('');
        $("#toDate").val('');
        $("#consignorGSTNumber").val('');
        $("#consigneeGSTNumber").val('');
        this.fromDateModel = null;
        this.toDateModel = null;
        $("#destination").val('');
        $("#source").val('');
        $("#consignorIndex").val('');
        $("#viewBy").val('sourceView');
        this.selectedConsigneeName = '';
        this.selectedFromDate = '';
        this.selectedToDate = '';
        this.modelConsigneeNameId = '';
        this.modelDestinationFotGet = '';
        if (this.isDestView) {
            this.showDest = true;
            this.consigneeNameTA = [];
        }
        else {
            this.consigneeNameTA = this.consigneeNameTATemp;
            $("#consigneeName").val('All');
        }
        if (this.isSourceView) {
            this.showSource = true;
        }
        if (this.isSourceBkgView) {
            this.showSource = true;
        }
        this.showSpinnerForAction = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LrAdvanceComponent.prototype, "dtElements", void 0);
    LrAdvanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lr-advance',
            template: __webpack_require__(/*! ./lr-advance.component.html */ "./src/app/lr/enquiry/lr-advance/lr-advance.component.html"),
            styles: [__webpack_require__(/*! ./lr-advance.component.css */ "./src/app/lr/enquiry/lr-advance/lr-advance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__["MasterReadService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_12__["LrReportService"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_14__["MasterService"], src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_13__["ConsigneeService"]])
    ], LrAdvanceComponent);
    return LrAdvanceComponent;
}());



/***/ }),

/***/ "./src/app/lr/enquiry/lr-delivery-status/lr-delivery-status.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/lr/enquiry/lr-delivery-status/lr-delivery-status.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below code we add to view the option in popup modal starts  */\n::ng-deep .cdk-overlay-container {\n\t/* Do you changes here */\n\tposition: fixed;\n\tz-index: 9999;\n}\n::ng-deep .cdk-overlay-pane {\n\tz-index: 9999;\n}\n/* the below code we add to view the option in popup modal ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHIvZW5xdWlyeS9sci1kZWxpdmVyeS1zdGF0dXMvbHItZGVsaXZlcnktc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFO0FBQ3JFO0NBQ0MseUJBQXlCO0NBQ3pCLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2Q7QUFFRDtDQUNDLGNBQWM7Q0FDZDtBQUNELGtFQUFrRSIsImZpbGUiOiJzcmMvYXBwL2xyL2VucXVpcnkvbHItZGVsaXZlcnktc3RhdHVzL2xyLWRlbGl2ZXJ5LXN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGhlIGJlbG93IGNvZGUgd2UgYWRkIHRvIHZpZXcgdGhlIG9wdGlvbiBpbiBwb3B1cCBtb2RhbCBzdGFydHMgICovXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG5cdC8qIERvIHlvdSBjaGFuZ2VzIGhlcmUgKi9cblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiA5OTk5O1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xuXHR6LWluZGV4OiA5OTk5O1xufVxuLyogdGhlIGJlbG93IGNvZGUgd2UgYWRkIHRvIHZpZXcgdGhlIG9wdGlvbiBpbiBwb3B1cCBtb2RhbCBlbmRzICovIl19 */"

/***/ }),

/***/ "./src/app/lr/enquiry/lr-delivery-status/lr-delivery-status.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/lr/enquiry/lr-delivery-status/lr-delivery-status.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t<ng-template #content let-a=\"close\" let-b=\"close\" let-c=\"close\"\n\t\t\t\tlet-d=\"dismiss\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">LR Delivery</h6>\n\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Mode:</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"marksAs\"\n\t\t\t\t\t\t\t\t\t\t\tname=\"markAs\" #markAs (change)=\"markAsMode(markAs.value)\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"delivered\">Delivered</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"unDelivered\">UnDelivered</option>\n\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Delivery Date:</label> <input id=\"deliveryDate\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\tname=\"deliveryDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t#deliveryDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"deliveryDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"unDeliveredView\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"reasonForReturn\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Reason For Return:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\" Select Reason\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(reasonForReturnOptions | filter: control.value) as resultReasonForReturn\">\n\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultReasonForReturn\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultReasonForReturn.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe below is hidded till now we have not found the hide and show in autocomplete -->\n\t\t\t\t\t\t\t<div [hidden]=\"!newReason\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"newReason\">\n\t\t\t\t\t\t\t\t\t\t<label>New Reason :</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"lrNumber\">\n\t\t\t\t\t\t\t\t\t\t<label>LR Number :</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"a('Delivered click')\" disabled>Delivered</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"b('Undelivered click')\" disabled>UnDelivered</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"c('Cancel click')\">Cancel</button>\n\t\t\t</div>\n\t\t\t</ng-template>\n\n\t\t\t<a style=\"cursor: pointer; color: blue; font-weight: bolder;\"\n\t\t\t\t(click)=\"open2(content)\">Click Here</a>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/lr/enquiry/lr-delivery-status/lr-delivery-status.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/lr/enquiry/lr-delivery-status/lr-delivery-status.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LrDeliveryStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrDeliveryStatusComponent", function() { return LrDeliveryStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for datepicker ends 
//for popup modal starts 

//for popup modal endss 
//for the select option with filter starts

//for the select option with filter ends
//for datepicker starts
var my = new Date();
var LrDeliveryStatusComponent = /** @class */ (function () {
    function LrDeliveryStatusComponent(modalService) {
        this.modalService = modalService;
        this.unDeliveredView = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.reasonForReturnOptions = [
            { id: 1, label: 'ADD NEW' },
            { id: 2, label: 'Door Locked' },
            { id: 3, label: 'Vehicle Repair' },
            { id: 3, label: 'over load' }
        ];
    }
    //for popup modal starts 
    LrDeliveryStatusComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrDeliveryStatusComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    //for popup modal ends 
    //for the select option with filter starts
    LrDeliveryStatusComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    LrDeliveryStatusComponent.prototype.ngOnInit = function () {
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    LrDeliveryStatusComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    // the below is for show and hide
    LrDeliveryStatusComponent.prototype.markAsMode = function (markAs) {
        if (markAs === 'delivered') {
            this.unDeliveredView = false;
        }
        else if (markAs === 'unDelivered') {
            this.unDeliveredView = true;
        }
    };
    LrDeliveryStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lr-delivery-status',
            template: __webpack_require__(/*! ./lr-delivery-status.component.html */ "./src/app/lr/enquiry/lr-delivery-status/lr-delivery-status.component.html"),
            styles: [__webpack_require__(/*! ./lr-delivery-status.component.css */ "./src/app/lr/enquiry/lr-delivery-status/lr-delivery-status.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], LrDeliveryStatusComponent);
    return LrDeliveryStatusComponent;
}());



/***/ }),

/***/ "./src/app/lr/enquiry/lr-enquiry-form/lr-enquiry-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/lr/enquiry/lr-enquiry-form/lr-enquiry-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below css is done for the verticle form starts here*/\n\nhr {\n  margin-bottom: 5px;\n  margin-top: 0pX;\n}\n\n.card-body {\n  padding: 5px 10px 0px 10px;\n}\n\n.wtforlrnumber {\n  width: 45%;\n}\n\n.btn{\n  padding:0px 10px 0px 10px;\n}\n\n/* the below css is done for the verticle form ends here */\n\n/* .cust_hl{ */\n\n/* \twidth: 30px; */\n\n/*   background-image: linear-gradient(to right, #f44336, #f44336); */\n\n/*   background-position: 5px calc(100% - 5px); */\n\n/*   background-size: calc(100% - 10px) 2px; */\n\n/*   background-repeat: no-repeat; */\n\n/*   background-color: #fcfcfc; */\n\n/*   padding: 10px; */\n\n/* } */\n\n.cust_hl{\n\tborder: none;\n    background-color: white;\n    border-bottom: 1px solid;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHIvZW5xdWlyeS9sci1lbnF1aXJ5LWZvcm0vbHItZW5xdWlyeS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNERBQTREOztBQUU1RDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQsMkRBQTJEOztBQUUzRCxlQUFlOztBQUNmLG1CQUFtQjs7QUFDbkIsc0VBQXNFOztBQUN0RSxrREFBa0Q7O0FBQ2xELCtDQUErQzs7QUFDL0MscUNBQXFDOztBQUNyQyxrQ0FBa0M7O0FBQ2xDLHNCQUFzQjs7QUFDdEIsT0FBTzs7QUFFUDtDQUNDLGFBQWE7SUFDVix3QkFBd0I7SUFDeEIseUJBQXlCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvbHIvZW5xdWlyeS9sci1lbnF1aXJ5LWZvcm0vbHItZW5xdWlyeS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0aGUgYmVsb3cgY3NzIGlzIGRvbmUgZm9yIHRoZSB2ZXJ0aWNsZSBmb3JtIHN0YXJ0cyBoZXJlKi9cblxuaHIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDBwWDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDBweCAxMHB4O1xufVxuXG4ud3Rmb3Jscm51bWJlciB7XG4gIHdpZHRoOiA0NSU7XG59XG4uYnRue1xuICBwYWRkaW5nOjBweCAxMHB4IDBweCAxMHB4O1xufVxuXG4vKiB0aGUgYmVsb3cgY3NzIGlzIGRvbmUgZm9yIHRoZSB2ZXJ0aWNsZSBmb3JtIGVuZHMgaGVyZSAqL1xuXG4vKiAuY3VzdF9obHsgKi9cbi8qIFx0d2lkdGg6IDMwcHg7ICovXG4vKiAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y0NDMzNiwgI2Y0NDMzNik7ICovXG4vKiAgIGJhY2tncm91bmQtcG9zaXRpb246IDVweCBjYWxjKDEwMCUgLSA1cHgpOyAqL1xuLyogICBiYWNrZ3JvdW5kLXNpemU6IGNhbGMoMTAwJSAtIDEwcHgpIDJweDsgKi9cbi8qICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgKi9cbi8qICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYzsgKi9cbi8qICAgcGFkZGluZzogMTBweDsgKi9cbi8qIH0gKi9cblxuLmN1c3RfaGx7XG5cdGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/lr/enquiry/lr-enquiry-form/lr-enquiry-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/lr/enquiry/lr-enquiry-form/lr-enquiry-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">LR Enquiry Form</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row \">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"icon-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"lrNumberWise\">Lr Number</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"eWayBillWise\">E-Way Bill</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"icon-speech\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"lrAndEwayNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getLrEnquiry($event)\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"validateBtnSearch();\">Search</button>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"clearBtn\" (click)=\"validateClear()\">Clear</button>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"advSearchBtn\">Adv Search</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"!viewReasonLbl\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<b>{{showStatus}}</b>\n\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"viewReasonLbl\" class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<b>{{showStatus}}</b>\n\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"viewReasonLbl\" class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<b>{{showReasonLbl}}</b>\n\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div *ngIf=\"showMemoBlocklabel\" class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<h6 style=\"color: green; padding-left: 10px;\">\n\t\t\t\t\t\t\t\t<b>{{showMemoBlock}}</b>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"showDestMemoStatusLbl\" class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<h6 style=\"color: green; padding-left: 10px;\">\n\t\t\t\t\t\t\t\t<b>{{showDestMemoStatus}}</b>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div *ngIf=\"showAdvanceSearchLbl\" class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<a style=\"cursor: pointer; color: blue; padding-left: 10px;\"><u>\n\t\t\t\t\t\t\t\t\tAdvance Search</u></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"lblUpdateCnge\" class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<a style=\"cursor: pointer; color: blue; padding-left: 10px;\"><u>Update\n\t\t\t\t\t\t\t\t\tConsignee</u></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"lblPrint\" class=\"col-sm-12 col-md-1\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<a style=\"cursor: pointer; color: blue; padding-left: 10px;\"><u>\n\t\t\t\t\t\t\t\t\tLR Print</u></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"lblNewConsignee\" class=\"col-sm-12 col-md-1\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<a style=\"cursor: pointer; color: blue;\"><u>New Party</u></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"lblConsigneeBusinessDetails\" class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<a style=\"cursor: pointer; color: blue; padding-left: 10px;\"><u>\n\t\t\t\t\t\t\t\t\tConsignee Business Details</u></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngIf=\"lblCashmemoBlock\" class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t<ng-template #content11 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Cashmemo\n\t\t\t\t\t\t\t\t\tBlock Reason</h6>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Reason</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"memoBlockedReason\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.codPaymentChqNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Blocked Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"memoBlockedDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.codPaymentChqNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;float:right;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<a style=\"cursor: pointer; color: blue; padding-left: 10px;\"\n\t\t\t\t\t\t\t\t(click)=\"open11(content11)\"><u>Cashmemo Generation is\n\t\t\t\t\t\t\t\t\tBlocked</u></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<div class=\"row \" style=\"margin-bottom: 0px;\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t<label>Challan No</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"icon-speech\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"challanNo\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"challanNo\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"icon-speech\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"agentName\" name=\"agentName\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails3\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #content8 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Invoice\n\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label style=\"color: blue; font-size: 16px\"><u><b>Invoice\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</b> </u></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"icon-speech\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"invoiceNo\" name=\"invoiceNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.invoiceNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"vehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"vehicleNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.vehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Company Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"companyName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.vehiCompName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"vehicleCompanyAddress\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.vehiCompAddress\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"vehicleCompCity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.vehiCompCity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pincode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"pinCode\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.vehiCompPincode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"vehicleCompContactNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.vehiCompContactNum\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"driverName\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.driverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Con. No.</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"driverContactNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.driverContactNum\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Broker Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"brokerName\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.brokerName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Generated By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"invoiceGeneratedBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.invoiceGeneratedBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loader Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"loaderName\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.loaderName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label style=\"color: blue; font-size: 16px\"><u><b>Dates\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInfo</b> </u></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"departureDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"departureDate\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.departuredate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"departureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.departureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Schedule Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"scheduledDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"scheduledDate\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.scheduleddate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Schedule Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"scheduleTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.scheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=arrivalDate name=\"arrivalDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.arrivalDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"arrivalTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.arrivalTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float:right;margin-top:10pc;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<a style=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open8(content8)\"><u>{{showInvoiceNumber}}</u></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group \"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Number</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-truck\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"vehicleNumber\" name=\"vehicleNumber\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group \"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Company Name</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-home\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"companyName\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group \"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Address</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"vehicleCompanyAddress\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group \"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>City</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"vehicleCompCity\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Pincode</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"pinCode\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Contact Number</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-phone\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"vehicleCompContactNumber\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-user\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"driverName\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Driver Con. No.</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-phone\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"driverContactNumber\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Broker Name</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-user\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"brokerName\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Generated By</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" #generatedBy id=\"generatedBy\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"generatedBy\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Labour Contractor</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"labourContractor\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"showBankLr\" class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Bank LR</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"bankLr\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Entered Date</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=enteredDate name=\"enteredDate\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Entered Date</label> <input class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tid=\"enteredDate\" placeholder=\"dd-mm-yyyy\" name=\"enteredDate\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #enteredDate=\"ngbDatepicker\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t(click)=\"enteredDate.toggle()\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Booking Date</label> <input class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tid=\"bookingDate\" placeholder=\"dd-mm-yyyy\" name=\"bookingDate\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #bookingDate=\"ngbDatepicker\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t(click)=\"bookingDate.toggle()\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t<label>Booking Date</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"bookingDate\" name=\"bookingDate\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>LR Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"lrNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t<label>No.Of Articles</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-clone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"noOfArticles\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"shortExtra\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Short/Extra </label> <a *ngIf=\"showShortExtra\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getShortExtraTable()\"><u> View Details</u></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-clone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"source\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Consignor GST</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"consignorGstNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Consignor Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"consignorName\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer; font-weight: bold; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"showConsignorDetails()\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"destination\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Sub Station</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"subStation\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Consignee GST</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"consigneeGstNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"consigneeName\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer; font-weight: bold; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"showConsigneeDetails()\">\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Area</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"consigneeArea\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Self LR</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"selfLr\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Private Marker</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-paint-brush\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"privateMarker\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Pack Nature</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck-loading\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"packNature\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Goods Value</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"goodsValue\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Goods Type</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-clone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"goodsType\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>H.W. Care</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"handleWithCare\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>COD</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"cod\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t\t\t\t<label>COD Payment</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #content10 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">COD\n\t\t\t\t\t\t\t\t\t\t\t\t\tPayment Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Payment Mode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"codPaymentMode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.codPaymentMode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bank Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"codPaymentBankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.codPaymentBankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cheque Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"codPaymentChqNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.codPaymentChqNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cheque Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"codPaymentChqDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.codPaymentChqDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Reference Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"codPaymentRefNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.codPaymentRefNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;float:right;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"showCODLbl\" style=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open10(content10)\"><u> View Details</u></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Order Goods</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"orderGoods\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>C.C.Attach</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"cCAttach\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Actual Weight</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"actualWeight\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Charged Weight</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"chargedWeight\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>To Pay</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"toPay\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Paid</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"paid\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"freightAmount\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Freight Amt</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<a class=\"form-control\"></a> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Freight Amt</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Freight\n\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Base Freight</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"frtAmtBaseFreight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoFreight.baseFreight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hamali</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"frtAmtHamali\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoFreight.hamaliLR\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>GC Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"frtAmtGCCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoFreight.gcCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>LC Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"frtAmtLCCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoFreight.lcChg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>BC Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"frtAmtBCCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoFreight.bcChg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>F O V</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" #frtAmtFOV\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"frtAmtFOV\" name=\"frtAmtFOV\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoFreight.riskCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>A.O.C</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"frtAmtAOC\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoFreight.aoc\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Insurance Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"frtAmtInsuranceCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoFreight.insurance\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Others</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"frtAmtOthers\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoFreight.others\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>DD </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"frtAmtDD\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoFreight.DoorDelivAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Total Amount </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"frtAmtTotalAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoFreight.totalAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float:right;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"showFreight\" style=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open2(content2)\"><u> View Details</u></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"articleSize\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Articles Size</label> <a *ngIf=\"showArticleSize\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getArticleSizeTable()\"><u> View Details</u></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"showRemark\" class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t<label>Remark</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"icon-speech\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"remark\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Bill Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"billNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Bill Date</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"billDate\" name=\"billDate\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n<!-- \t\t\t\t\t\t\t\t<div *ngIf=\"showForESugam\" class=\"col-sm-12 col-md-3\"> -->\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<label>E-Sugam No</label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-file-alt\"></i> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"eSugamNo\" class=\"form-control\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t<div *ngIf=\"showForEdeclaration\" class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>E-Declaration Transaction ID</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"eDeclarationTransID\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>E-Way Bill No</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"eWayBillNo\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"showForEdeclaration\" class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>E-Declaration Commodity</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"eDeclarationCommodity\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"showForEdeclaration\" class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>E-Declaration By</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"eDeclarationBy\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Delivery Mode</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"deliveryMode\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Entered By (Godown)</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"enteredByGodown\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Dp. Date</label> <input class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tid=\"departureDate\" placeholder=\"dd-mm-yyyy\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tname=\"departureDate\" ngbDatepicker -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t#departureDate=\"ngbDatepicker\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t(click)=\"departureDate.toggle()\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Dp. Date</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"departureDate\" name=\"departureDate\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Dp. Time</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"departureTime\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Sch. Date</label> <input class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"scheduledDate\" placeholder=\"dd-mm-yyyy\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"scheduledDate\" ngbDatepicker -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#scheduledDate=\"ngbDatepicker\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"scheduledDate.toggle()\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Sch. Date</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"scheduledDate\" name=\"scheduledDate\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Sch. Time</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"scheduleTime\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Arr. Date</label> <input class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"arrivalDate\" placeholder=\"dd-mm-yyyy\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"arrivalDate\" ngbDatepicker -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#arrivalDate=\"ngbDatepicker\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"arrivalDate.toggle()\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group \"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Arr. Date</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=arrivalDate name=\"arrivalDate\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Arr. Time</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"arrivalTime\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>AOC</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"aoc\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Godown Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"godownName\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div *ngIf=\"showDummyInvoice\" class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails2\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Dummy Invoice 1</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #content4 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Dummy\n\t\t\t\t\t\t\t\t\t\t\t\t\tInvoice Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label style=\"color: blue; font-size: 16px\"><u><b>Dummy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInvoice Info</b> </u></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Number </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInvInvoiceNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyInvoice\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInvVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyVehicleNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Company Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInvCompanyName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyCompanyName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"dumInvAddress\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyAddress\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"dumInvCity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyCity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pincode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"dumInvPincode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyPincode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Number </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInvContactNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyContactNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"dumInvDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Contact Number </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInvDriverContNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyDrivContNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Broker Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"dumInvBrokerName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyBrokerName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Generated By </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInvGeneratedBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyGeneratedBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label style=\"color: blue; font-size: 16px\"><u><b>Dummy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInvoice Date</b> </u></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInvDepartureDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyDepDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInvDepartureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyDepTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Schedule Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInvScheduleDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummySchDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Schedule Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInvScheduleTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummySchTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInvArrivalDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyArrDAte\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInvArrivalTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoiceRetDto.dummyArrTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float:right;margin-top:8pc;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<a style=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open4(content4)\"><u>{{viewDummyInvoice}}</u></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"showDummyInvoice2\" class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails2\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Dummy Invoice 2</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #content7 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Dummy\n\t\t\t\t\t\t\t\t\t\t\t\t\tInvoice 2 Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label style=\"color: blue; font-size: 16px\"><u><b>Dummy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInvoice 2 Info</b> </u></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Number </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2InvoiceNumber\" [(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyinvoice2\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2VehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyVehicleNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Company Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2CompanyName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyCompanyName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"dumInv2Address\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyAddress\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"dumInv2City\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyCity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pincode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"dumInv2Pincode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyPincode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Number </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2ContactNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyContactNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2DriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Contact Number </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2DriverContNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyDrivContNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Broker Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2BrokerName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyBrokerName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Generated By </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2GeneratedBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyGeneratedBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label style=\"color: blue; font-size: 16px\"><u><b>Dummy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInvoice Date</b> </u></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2DepartureDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyDepDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2DepartureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyDepTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Schedule Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2ScheduleDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummySchDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Schedule Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2ScheduleTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummySchTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2ArrivalDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyArrDAte\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dumInv2ArrivalTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoForDummyInvoice2RetDto.dummyArrTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float:right;margin-top:8pc;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<a style=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open7(content7)\"><u>{{viewDummyInvoice2}}</u></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"dummyInvoice2\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label> D. Invoice 2 </label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"desMemoNumber\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<label>Desc. Memo</label> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails9\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Source Memo</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #content9 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Billing\n\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"srcMemoMemoNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.srcMemo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"srcMemoMemoDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.srcMemoDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Created By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"srcMemoCreatedBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.userName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Total LR Amt.</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"srcMemoTotalLRAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.bkgLrTotalAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hamali</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"srcMemoHamali\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.srcHamali\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Service Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"srcMemoServiceChg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.bkgServiceCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Receipt Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"srcMemoReceiptChg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.bkgReceiptCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Dest Hamali</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"srcMemoDestHamali\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.destHamali\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Discount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"srcMemoDiscount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.bkgMemoDisountAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Sub Total</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"srcMemoSubTotal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.bkgMemoSubTotal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Service Tax</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"srcMemoServiceTax\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.bkgMemoServiceTax\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Service Tax Amt.</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"srcMemoServiceTaxAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.bkgMemoServTaxAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Grand Total</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"srcMemoGrandTotal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.bkgMemoGrandTotal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float:right;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"lblSrcMemo\" style=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open9(content9)\"><u> {{showSrcCashMemo}}</u></a>\n\t\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"lblSrcMemoNo\">NA</h6>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails3\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Destination Memo</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #content3 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Billing\n\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label style=\"color: blue; font-size: 16px\"><u><b>Billing\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</b> </u></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Number </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoMemoNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.desMemo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Delivery Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoDeliveryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.deliveryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Local Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoLocalCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.localCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hamali D.D</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"destMemoHamaliDD\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.hamaliDD\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hamali G.D</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"destMemoGD\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.hamaliGD\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showUnloadingChg\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Unloading Chg</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"destMemoUnldgChg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.unLdgChg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Receipt Charges</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoReceiptCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.receiptCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Service Charges</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoServiceCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.serviceCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Demurrage</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoDemurrage\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.demurage\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Discount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"destMemoDiscount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.discountAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Sub Total</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"destMemoSubTotal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.subTotal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Service Tax </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoServiceTax\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.servicetax\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Service Tax Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoServiceTaxAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.servTaxAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Grand Total</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoGrandTotal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.grandTotal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Tripsheet Hamali</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoTripsheetHamali\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.tripsheetHamali\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label style=\"color: blue; font-size: 16px\"><u><b>Memo\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInfo</b> </u></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"destMemoMemoDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.cashMemoTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"destMemoMemoAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.cashStxAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Generated By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoGeneratedBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.memoGeneratedBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Delivery Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoDeliveryDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrEnquiryRet.deliveryDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label style=\"color: blue; font-size: 16px\"><u><b>Collection\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInfo</b> </u></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Collection Man At Memo Generation</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoColManAtMemoGen\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.cmAtMemoGeneration\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Cash Memo Assigned To</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoCashMemoAssignedTo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.column2\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Payment Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoPaymentType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.paymentMode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Collection Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"destMemoColDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.collectionDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Payment Mode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoPaymentMode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.cashmemoType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showRecDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Received Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoReceivedDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.dateInDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Less Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoMemoLessAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.memoLessAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\" [readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memo Less Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destMemoMemoLessType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoDestMemo.memoLessType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;float:right;margin-top:1pc;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"lblDestCashMemo\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open3(content3)\"><u>{{showDestCashMemo}}</u></a>\n\t\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"lblDestCashMemoNo\">NA</h6>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails5\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Local Trip</label>\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #content5 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Local\n\t\t\t\t\t\t\t\t\t\t\t\t\tTrip Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" #localTripVehicleNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"localTripVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"localTripVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoSetLocal.vehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Area</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"localTripArea\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoSetLocal.deliveryarea\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"localTripDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoSetLocal.driverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Trip Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"localTripTripDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"lrDtoSetLocal.tripDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Trip Status</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{showTripStatus}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label></label> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button align=\"center\" type=\"submit\" -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" (click)=\"getLocaltrip()\">Action</button> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px;float:right;\" type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"lblLocalTripDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open5(content5)\"><u> View Details</u></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/lr/enquiry/lr-enquiry-form/lr-enquiry-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/lr/enquiry/lr-enquiry-form/lr-enquiry-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: LrEnquiryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrEnquiryFormComponent", function() { return LrEnquiryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_lr_enquiry_short_extra_lr_enquiry_popup_short_extra_lr_enquiry_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/lr/enquiry/short-extra-lr-enquiry-popup/short-extra-lr-enquiry-popup.component */ "./src/app/lr/enquiry/short-extra-lr-enquiry-popup/short-extra-lr-enquiry-popup.component.ts");
/* harmony import */ var src_app_lr_enquiry_multiple_article_size_popup_multiple_article_size_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/lr/enquiry/multiple-article-size-popup/multiple-article-size-popup.component */ "./src/app/lr/enquiry/multiple-article-size-popup/multiple-article-size-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var my = new Date();





//for popup modal starts 

//import { OnDestroy } from '@angular/core';





var LrEnquiryFormComponent = /** @class */ (function () {
    function LrEnquiryFormComponent(http, router, reportService, modalService, datePipe, dialog, route, masterReadService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.reportService = reportService;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.route = route;
        this.masterReadService = masterReadService;
        this.isLoggedIn = true;
        this.lrDtoForMemo = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.lrDtoForDummyInvoice = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.lrDtoForDummyInvoice2 = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.lrDtoLocalTrips = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.lrDtoLrEnquiry = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.lrEnquiryRet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.showBankLr = false;
        this.viewReasonLbl = false;
        this.showRemark = false;
        this.showMemoBlocklabel = false;
        this.showMemoBlock = "Cash Memo Generation is Blocked";
        this.isReadOnly = false;
        this.lrDtoSetLocal = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.lrDtoFreight = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.showAdvanceSearchLbl = true;
        this.lblUpdateCnge = false;
        this.lblPrint = false;
        this.lblNewConsignee = false;
        this.lblConsigneeBusinessDetails = false;
        this.lblCashmemoBlock = false;
        this.showShortExtra = false;
        this.showFreight = false;
        this.showArticleSize = false;
        this.localTripId = 0;
        this.lblLocalTripDetails = false;
        this.showCODLbl = false;
        this.lrDtoForMemoRetDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.lblDestCashMemo = false;
        this.lrDtoDestMemo = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.showUnloadingChg = false;
        this.viewUnloadingChg = "Show Unloading Charge for Memo In Lr Enquiry";
        this.lblSrcMemo = false;
        this.lblSrcMemoNo = false;
        this.lblDestCashMemoNo = false;
        this.showRecDate = false;
        this.localTripAction = false;
        //For Dummy invoice 
        this.showDummyInvoice = false;
        this.showDummyInvoice2 = false;
        this.showLrPrintLbl = "";
        this.showLrPrint = false;
        this.showConsigneeBusLbl = "";
        this.showConsigneeBus = false;
        this.lrDtoForDummyInvoiceRetDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.lrDtoForDummyInvoice2RetDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.showDestMemoStatusLbl = false;
        this.lrDtoGetStatus = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.availabel = false;
        this.showForEdeclaration = false;
        this.getDummyInvoiceDetailsForLrEnquiry = function () {
            _this.reportService.getDummyInvoiceDetails(_this.lrDtoForDummyInvoice).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No records found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtoForDummyInvoiceRet = response;
                    _this.lrDtoForDummyInvoiceRetDto = _this.lrDtoForDummyInvoiceRet;
                    _this.setDummyInvoiceFields();
                }
            }), function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getDummyInvoice2DetailsForLrEnquiry = function () {
            _this.reportService.getDummyInvoiceDetails(_this.lrDtoForDummyInvoice2).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No records found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtoForDummyInvoice2Ret = response;
                    _this.lrDtoForDummyInvoice2RetDto = _this.lrDtoForDummyInvoice2Ret;
                    _this.setDummyInvoice2Fields();
                }
            }), function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getLocalTripsDetailsForLrEnquiry = function () {
            _this.getLocalTripsDetailsInfo();
            _this.reportService.getLocalTripsDetailsForLrEnquiry(_this.lrDtoLocalTrips).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No records found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtoLocalTripsRet = response;
                }
            }), function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getLrEnquiryDetails = function () {
            _this.getLrEnquiryDetailsInfo();
            _this.reportService.getLrEnquiryDetails(_this.lrDtoLrEnquiry).subscribe(function (response) {
                _this.lrEnquiryRetAny = response;
                _this.lrEnquiryRet = _this.lrEnquiryRetAny;
                console.log(_this.lrEnquiryRet);
                if (_this.selectedSearchWise == "lrNumberWise") {
                    if (_this.lrEnquiryRet.lrNumber == null) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                            title: "Warning",
                            text: "No records found for this LR Number :" + _this.selectedSearchNumber,
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        _this.lrEnquiryRet = null;
                    }
                    else {
                        _this.checkMemoIsBlocked();
                    }
                }
                else if (_this.selectedSearchWise == "eWayBillWise") {
                    if (_this.lrEnquiryRet.eWayBillNo == null) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                            title: "Warning",
                            text: "No records found for this E-Way Bill Number :" + _this.selectedSearchNumber,
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                    else {
                        _this.checkMemoIsBlocked();
                    }
                }
            }), function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getCashmemoDetailsForLrEnquiry = function () {
            _this.getCashmemoDetailsInfo();
            _this.reportService.getCashmemoDetails(_this.lrDtoForMemo).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtoForMemoRet = response;
                    _this.lrDtoForMemoRetDto = _this.lrDtoForMemoRet;
                    _this.setDestBillingDetailsFields();
                    //                    console.log( this.lrDtoForMemoRetDto );
                    /// Pending of Status
                }
            }), function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getLrEnquiryStatusDetails = function () {
            _this.getLrEnquiryStatusInfo();
            _this.reportService.getLrEnquiryStatus(_this.lrDtoGetStatus).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No Status found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtoGetStatusRet = response;
                    _this.showStatus = _this.lrDtoGetStatusRet.status;
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
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
            //for modal starts
            this.routeQueryParams$ = route.queryParams.subscribe(function (params) {
                if (params['dialog']) {
                    _this.shortExtraDialog();
                }
            });
            this.routeQueryParams$ = route.queryParams.subscribe(function (params) {
                if (params['dialog']) {
                    _this.multipelArticleSizeDialog();
                }
            });
            //for modal ends
            ///Unloading Charge for chennai
            if (this.viewUnloadingChg == "Show Unloading Charge for Memo In Lr Enquiry") {
                this.showUnloadingChg = true;
            }
            else {
                this.showUnloadingChg = false;
            }
            if (this.showLrPrintLbl = "Show LR Copy In LR Enquiry") {
                this.lblPrint = true;
            }
            if (this.showConsigneeBusLbl = "Show Consignee Business view In Lr Enquiry") {
                this.lblConsigneeBusinessDetails = true;
            }
        }
    }
    LrEnquiryFormComponent.prototype.ngOnInit = function () {
    };
    LrEnquiryFormComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    LrEnquiryFormComponent.prototype.open2 = function (content2) {
        var _this = this;
        this.modalService.open(content2, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEnquiryFormComponent.prototype.open3 = function (content3) {
        var _this = this;
        this.modalService.open(content3, { centered: true, size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEnquiryFormComponent.prototype.open4 = function (content4) {
        var _this = this;
        this.getDummyInvoiceDetailsInfo();
        this.modalService.open(content4, { centered: true, size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEnquiryFormComponent.prototype.open5 = function (content5) {
        var _this = this;
        this.localTripFields();
        this.modalService.open(content5, { centered: true, size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEnquiryFormComponent.prototype.open7 = function (content7) {
        var _this = this;
        this.getDummyInvoice2DetailsInfo();
        this.modalService.open(content7, { centered: true, size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEnquiryFormComponent.prototype.open8 = function (content8) {
        var _this = this;
        this.modalService.open(content8, { centered: true, size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEnquiryFormComponent.prototype.open9 = function (content9) {
        var _this = this;
        this.modalService.open(content9, { centered: true, size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEnquiryFormComponent.prototype.open10 = function (content10) {
        var _this = this;
        this.modalService.open(content10, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEnquiryFormComponent.prototype.open11 = function (content11) {
        var _this = this;
        this.modalService.open(content11, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEnquiryFormComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    LrEnquiryFormComponent.prototype.getShortExtraTable = function () {
        this.enteredLrNumber = $("#lrNumber").val();
        this.shortExtraDialog();
    };
    //for modal starts
    LrEnquiryFormComponent.prototype.shortExtraDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_lr_enquiry_short_extra_lr_enquiry_popup_short_extra_lr_enquiry_popup_component__WEBPACK_IMPORTED_MODULE_10__["ShortExtraLrEnquiryPopupComponent"], {
            data: { listOfDataToPass: this.enteredLrNumber }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.router.navigate(['.'], { relativeTo: _this.route });
        });
    };
    LrEnquiryFormComponent.prototype.getArticleSizeTable = function () {
        this.listOfMultipleArticles = this.lrEnquiryRet.listOfmultipleArt;
        if (this.lrEnquiryRet.listOfmultipleArt == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                title: "Warning",
                text: "No Multiple Article Size for this Lr",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.multipelArticleSizeDialog();
        }
    };
    //for modal starts
    LrEnquiryFormComponent.prototype.multipelArticleSizeDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_lr_enquiry_multiple_article_size_popup_multiple_article_size_popup_component__WEBPACK_IMPORTED_MODULE_11__["MultipleArticleSizePopupComponent"], {
            data: { listOfDataToPass: this.listOfMultipleArticles }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.router.navigate(['.'], { relativeTo: _this.route });
        });
    };
    //for modal ends
    //For Dummy invoice Details 
    LrEnquiryFormComponent.prototype.getDummyInvoiceDetailsInfo = function () {
        this.lrDtoForDummyInvoice.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoForDummyInvoice.invoiceNumber = this.viewDummyInvoice;
        if (this.viewDummyInvoice != null) {
            this.getDummyInvoiceDetailsForLrEnquiry();
        }
    };
    // For Dummy invoice 2 details
    LrEnquiryFormComponent.prototype.getDummyInvoice2DetailsInfo = function () {
        this.lrDtoForDummyInvoice2.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoForDummyInvoice2.invoiceNumber = this.viewDummyInvoice2;
        if (this.viewDummyInvoice2 != null) {
            this.getDummyInvoice2DetailsForLrEnquiry();
        }
    };
    //For Local Trip Details for Action Btn is Pending 
    LrEnquiryFormComponent.prototype.getLocalTripsDetailsInfo = function () {
        this.lrDtoLocalTrips.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoLocalTrips.tripId = this.localTripId;
        this.lrDtoLocalTrips.status = "Pending";
        this.lrDtoLocalTrips.godownName = this.userDataDtoReturnSession.office;
    };
    LrEnquiryFormComponent.prototype.validateBtnSearch = function () {
        this.clearInputFields();
        this.getLrEnquiryDetails();
    };
    LrEnquiryFormComponent.prototype.getLrEnquiryDetailsInfo = function () {
        this.lrDtoLrEnquiry.companyId = this.userDataDtoReturnSession.companyId;
        this.selectedSearchWise = $("#searchBy").val();
        this.selectedSearchNumber = $("#lrAndEwayNumber").val();
        if (this.selectedSearchWise == 'lrNumberWise') {
            this.lrDtoLrEnquiry.lrNumber = this.selectedSearchNumber;
            this.lrDtoLrEnquiry.mode = "LR";
        }
        else if (this.selectedSearchWise == 'eWayBillWise') {
            this.lrDtoLrEnquiry.eWayBillNo = this.selectedSearchNumber;
            this.lrDtoLrEnquiry.mode = "EWay";
        }
    };
    //    check the cashmemo is Blocked
    ///the Below pop up part is Pending
    LrEnquiryFormComponent.prototype.checkMemoIsBlocked = function () {
        if (this.lrEnquiryRet.cashMemoBlocked == true) {
            this.getLrEnquiryStatusDetails();
            this.setLRValues();
            this.lblUpdateCnge = true;
        }
        else {
            this.getLrEnquiryStatusDetails();
            this.setLRValues();
        }
    };
    LrEnquiryFormComponent.prototype.setLRValues = function () {
        this.isReadOnly = true;
        // in invoicedetails link arrival date is not showing
        this.setStatusOfLr();
        ///For Bkg memo
        if (this.lrEnquiryRet.srcMemo != null && this.lrEnquiryRet.paid != 0) {
            this.lblSrcMemo = true;
            this.lblSrcMemoNo = false;
        }
        else {
            this.lblSrcMemo = false;
            this.lblSrcMemoNo = true;
        }
        this.showSrcCashMemo = this.lrEnquiryRet.srcMemo;
        //        console.log( 'this Bkg memo :' + this.showSrcCashMemo );
        //For Dest Memo
        if (this.lrEnquiryRet.desMemo != null) {
            this.lblDestCashMemo = true;
            this.lblDestCashMemoNo = false;
        }
        else {
            this.lblDestCashMemo = false;
            this.lblDestCashMemoNo = true;
        }
        this.showDestCashMemo = this.lrEnquiryRet.desMemo;
        //        console.log( this.showDestCashMemo );
        if (this.showDestCashMemo != null) {
            this.getCashmemoDetailsForLrEnquiry();
        }
        ///For Cashmemo block
        if (this.lrEnquiryRet.blocked == true) {
            this.showMemoBlocklabel = true;
            console.log('a' + this.showMemoBlock);
        }
        else {
            this.showMemoBlocklabel = false;
        }
        console.log();
        /// For new Consignee 
        if (this.lrEnquiryRet.isNewConsignee != null && this.lrEnquiryRet.isNewConsignee == true) {
            this.lblNewConsignee = true;
        }
        else {
            this.lblNewConsignee = false;
        }
        ///for Dummy Invoice 1 and 2
        if (this.lrEnquiryRet.dummyInvoice != null && this.lrEnquiryRet.dummyinvoice2 != null) {
            this.showDummyInvoice = true;
            this.showDummyInvoice2 = true;
            this.viewDummyInvoice = this.lrEnquiryRet.dummyInvoice;
            this.viewDummyInvoice2 = this.lrEnquiryRet.dummyinvoice2;
        }
        else if (this.lrEnquiryRet.dummyInvoice != null
            && this.lrEnquiryRet.dummyinvoice2 == null) {
            this.showDummyInvoice = true;
            this.showDummyInvoice2 = false;
            this.viewDummyInvoice = this.lrEnquiryRet.dummyInvoice;
        }
        $("#challanNo").val(this.lrEnquiryRet.challanNo);
        $("#agentName").val(this.lrEnquiryRet.agentId);
        $("#invoiceNo").val(this.lrEnquiryRet.invoiceNumber);
        this.showInvoiceNumber = this.lrEnquiryRet.invoiceNumber;
        // Lr generated By value was not getting from generatedby dto so i used lrGeneratedBy dto
        $("#generatedBy").val(this.lrEnquiryRet.lrGeneratedBy);
        //        $( "#loaderName" ).val( this.lrEnquiryRet.loaderName );
        $("#labourContractor").val(this.lrEnquiryRet.unloaderHead);
        $("#lrNumber").val(this.lrEnquiryRet.lrNumber);
        $("#noOfArticles").val(this.lrEnquiryRet.totalArticles);
        $("#source").val(this.lrEnquiryRet.source);
        $("#consignorGstNumber").val(this.lrEnquiryRet.gstNoConsignor);
        $("#consignorName").val(this.lrEnquiryRet.consignorName);
        $("#destination").val(this.lrEnquiryRet.destination);
        $("#subStation").val(this.lrEnquiryRet.subStations);
        $("#consigneeGstNumber").val(this.lrEnquiryRet.gstNoConsignee);
        //        this.showConsignee= this.lrEnquiryRet.consigneeName+'</u>';
        $("#consigneeName").val(this.lrEnquiryRet.consigneeName);
        $("#consigneeArea").val(this.lrEnquiryRet.deliveryarea);
        $("#privateMarker").val(this.lrEnquiryRet.privateMarker);
        $("#packNature").val(this.lrEnquiryRet.packNature);
        this.selectedEnteredDate = this.lrEnquiryRet.enteredDate;
        $("#enteredDate").val(this.selectedEnteredDate);
        this.selectedBookingDate = this.lrEnquiryRet.bookingDate;
        $("#bookingDate").val(this.selectedBookingDate);
        $("#godownName").val(this.lrEnquiryRet.godownName);
        $("#remark").val(this.lrEnquiryRet.remarks);
        if (this.lrEnquiryRet.selfLr == true) {
            $("#selfLr").val('Yes');
        }
        else {
            $("#selfLr").val('No');
        }
        ////for Cod Payment 
        this.txtPaymentModeCodLrPayment = (this.lrEnquiryRet.codPaymentMode == null ? "NA" : this.lrEnquiryRet.codPaymentMode);
        this.lrEnquiryRet.codPaymentMode = this.txtPaymentModeCodLrPayment;
        this.txtBankNameCodLrPayment = (this.lrEnquiryRet.codPaymentBankName == null ? "NA" : this.lrEnquiryRet.codPaymentBankName);
        this.lrEnquiryRet.codPaymentBankName = this.txtBankNameCodLrPayment;
        this.txtCheqNumberCodLrPayment = (this.lrEnquiryRet.codPaymentChqNo == null ? "NA" : this.lrEnquiryRet.codPaymentChqNo);
        this.lrEnquiryRet.codPaymentChqNo = this.txtCheqNumberCodLrPayment;
        this.dfCheqDateCodLrPayment = this.lrEnquiryRet.codPaymentChqDate;
        this.lrEnquiryRet.codPaymentChqDate = this.dfCheqDateCodLrPayment;
        this.txtRefNoCodLrPayment = (this.lrEnquiryRet.codPaymentRefNo == null ? "NA"
            : this.lrEnquiryRet.codPaymentRefNo);
        this.lrEnquiryRet.codPaymentRefNo = this.txtRefNoCodLrPayment;
        if (this.lrEnquiryRet.codPaymentMode == null
            || this.lrEnquiryRet.codPaymentMode == "NA") {
            this.showCODLbl = false;
        }
        else {
            this.showCODLbl = true;
        }
        //        Pending 
        //        TripDeliveryConfirmation is pending ,AOc,UnloadingChrg for chennai,// cod lr payment details is pending 
        //        $( "#dumInvInvoiceNumber" ).val( this.lrEnquiryRet.source );
        //        $( "#dumInvVehicleNumber" ).val( this.lrEnquiryRet.source );
        //        $( "#dumInvCompanyName" ).val( this.lrEnquiryRet.source );
        //        $( "#dumInvAddress" ).val( this.lrEnquiryRet.source );
        //        $( "#dumInvCity" ).val( this.lrEnquiryRet.source );
        //        $( "#dumInvPincode" ).val( this.lrEnquiryRet.source );
        //        $( "#dumInvContactNumber" ).val( this.lrEnquiryRet.source );
        //        $( "#dumInvDriverName" ).val( this.lrEnquiryRet.source );
        //        if (lrDto.getCodPaymentMode() == null
        //                || lrDto.getCodPaymentMode().equalsIgnoreCase("NA")) {
        //            lblCodLrPaymentDetail.setVisible(false);
        //        } else {
        //            lblCodLrPaymentDetail.setVisible(true);
        //        }
        ////////////////////////////
        $("#goodsValue").val(this.lrEnquiryRet.goodsValue);
        if (this.lrEnquiryRet.column1 == null) {
            $("#goodsType").val(this.lrEnquiryRet.column2);
        }
        else {
            $("#goodsType").val(this.lrEnquiryRet.column1);
        }
        //Handle With Care
        if (this.lrEnquiryRet.isHandWithCare != null && (this.lrEnquiryRet.isHandWithCare == true)) {
            $("#handleWithCare").val('Yes');
        }
        else if (this.lrEnquiryRet.isHandWithCare != null && (this.lrEnquiryRet.isHandWithCare == false)) {
            $("#handleWithCare").val('No');
        }
        //Cod
        if (this.lrEnquiryRet.isCod != null && (this.lrEnquiryRet.isCod == true)) {
            $("#cod").val('Yes');
        }
        else if (this.lrEnquiryRet.isCod != null && (this.lrEnquiryRet.isCod == false)) {
            $("#cod").val('No');
        }
        ///Order goods
        if (this.lrEnquiryRet.isOrderGoods != null && (this.lrEnquiryRet.isOrderGoods == true)) {
            $("#orderGoods").val('Yes');
        }
        else if (this.lrEnquiryRet.isOrderGoods != null && (this.lrEnquiryRet.isOrderGoods == false)) {
            $("#orderGoods").val('No');
        }
        ///cCAttach
        if (this.lrEnquiryRet.ccAttach != null && (this.lrEnquiryRet.ccAttach == true)) {
            $("#cCAttach").val('Yes');
        }
        else if (this.lrEnquiryRet.ccAttach != null && (this.lrEnquiryRet.ccAttach == false)) {
            $("#cCAttach").val('No');
        }
        if (this.lrEnquiryRet.actualWeight != null) {
            $("#actualWeight").val(this.lrEnquiryRet.actualWeight);
        }
        if (this.lrEnquiryRet.chargedWeight != null) {
            $("#chargedWeight").val(this.lrEnquiryRet.chargedWeight);
        }
        $("#toPay").val(this.lrEnquiryRet.toPay);
        $("#paid").val(this.lrEnquiryRet.paid);
        $("#billNumber").val(this.lrEnquiryRet.billNumber);
        this.billDateRet = this.lrEnquiryRet.billDate;
        $("#billDate").val(this.billDateRet);
        ///"E-Declaration Transaction ID,txteDeclarationBy, input field is pending 
        $("#eSugamNo").val(this.lrEnquiryRet.eSugamNo);
        $("#eWayBillNo").val(this.lrEnquiryRet.eWayBillNo);
        ////For kerela is pending 
        if (this.availabel) {
            this.showForEdeclaration = true;
            //            this.showForESugam = false;
        }
        else {
            this.showForEdeclaration = false;
            //            this.showForESugam = true;
        }
        $("#eDeclarationTransID").val(this.lrEnquiryRet.eSugamNo);
        $("#eDeclarationCommodity").val(this.lrEnquiryRet.eDeclarationCommodity);
        $("#eDeclarationBy").val(this.lrEnquiryRet.eDeclarationBy);
        if (this.lrEnquiryRet.srcMemoDate != null) {
            this.getSrcMemoDate = this.lrEnquiryRet.srcMemoDate;
            this.lrEnquiryRet.srcMemoDate = this.getSrcMemoDate;
        }
        else {
            this.getSrcMemoDate = "";
            this.lrEnquiryRet.srcMemoDate = this.getSrcMemoDate;
        }
        if (this.lrEnquiryRet.godownEntry == null) {
            $("#enteredByGodown").val('--------');
        }
        else {
            $("#enteredByGodown").val(this.lrEnquiryRet.godownEntry);
        }
        if (this.lrEnquiryRet.isBankLr == "1") {
            this.showBankLr = true;
            $("#bankLr").val(this.lrEnquiryRet.bankName);
        }
        else if (this.lrEnquiryRet.isBankLr == "0") {
            this.showBankLr = false;
        }
        if (this.lrEnquiryRet.tripId > 1) {
            this.lblLocalTripDetails = true;
        }
        else {
            this.lblLocalTripDetails = false;
        }
        if (this.lrEnquiryRet.cashStxAmount != null) {
            this.lrDtoDestMemo.cashStxAmount = this.lrEnquiryRet.cashStxAmount;
        }
        //For Local Trip
        this.txtLTVehicleNumber = (this.lrEnquiryRet.vehicleNofromTripSheet == null ? "NA"
            : this.lrEnquiryRet.vehicleNofromTripSheet);
        this.txtLTArea = (this.lrEnquiryRet.localBkgDeliveryArea == null ? "NA"
            : this.lrEnquiryRet.localBkgDeliveryArea);
        this.txtLTDriver = (this.lrEnquiryRet.dummyDriverName == null ? "NA" : this.lrEnquiryRet.dummyDriverName);
        this.dfLTTripDate = (this.lrEnquiryRet.tripDate);
        this.localTripId = this.lrEnquiryRet.tripId;
        this.localTripArea = (this.lrEnquiryRet.localBkgDeliveryArea == null ? "NA" : this.lrEnquiryRet.localBkgDeliveryArea);
        ///AOC
        if (this.lrEnquiryRet.withOut == true) {
            $("#aoc").val('Yes');
        }
        else {
            $("#aoc").val('No');
        }
        //// Freight Details 
        this.lrDtoFreight.baseFreight = this.lrEnquiryRet.baseFreight;
        this.lrDtoFreight.hamaliLR = this.lrEnquiryRet.hamaliLR;
        this.lrDtoFreight.gcCharge = this.lrEnquiryRet.gcCharge;
        this.lrDtoFreight.lcChg = this.lrEnquiryRet.lcChg;
        this.lrDtoFreight.bcChg = this.lrEnquiryRet.bcChg;
        this.lrDtoFreight.riskCharge = this.lrEnquiryRet.riskCharge;
        this.lrDtoFreight.aoc = this.lrEnquiryRet.aoc;
        this.lrDtoFreight.insurance = this.lrEnquiryRet.insurance;
        this.lrDtoFreight.others = this.lrEnquiryRet.others;
        this.getFrtAmtOthers = (this.lrEnquiryRet.DoorDelivAmt == null ? 0.0
            : this.lrEnquiryRet.DoorDelivAmt);
        this.lrDtoFreight.DoorDelivAmt = this.getFrtAmtOthers;
        this.lrDtoFreight.totalAmount = this.lrEnquiryRet.totalAmount;
        //        for Blocked Cashemo 
        if (this.lrEnquiryRet.memoBlocked == true) {
            this.lblCashmemoBlock = true;
            this.lrEnquiryRet.memoBlockReason = this.lrEnquiryRet.memoBlockReason;
            this.cashMemoBlockDate = (this.lrEnquiryRet.memoBlockDate == null ? "NA" : this.lrEnquiryRet.memoBlockDate);
            this.lrEnquiryRet.memoBlockDate = this.cashMemoBlockDate;
        }
        else {
            this.lblCashmemoBlock = false;
            this.lrEnquiryRet.memoBlockReason = "";
            this.cashMemoBlockDate = "";
            this.lrEnquiryRet.memoBlockDate = this.cashMemoBlockDate;
        }
    };
    LrEnquiryFormComponent.prototype.localTripFields = function () {
        this.lrDtoSetLocal.localTripNumber = this.txtLTVehicleNumber;
        this.lrDtoSetLocal.vehicleNumber = this.txtLTVehicleNumber;
        this.lrDtoSetLocal.deliveryarea = this.txtLTArea;
        this.lrDtoSetLocal.driverName = this.txtLTDriver;
        this.lrDtoSetLocal.tripDate = this.dfLTTripDate;
        /// need to add local trip Id and to chekc the local trip info 
        if (this.lrEnquiryRet.localTripStatus != null
            && this.lrEnquiryRet.localTripStatus == "Pending") {
            this.showTripStatus = "In Transit";
            this.localTripAction = true;
        }
        else if (this.lrEnquiryRet.localTripStatus != null
            && this.lrEnquiryRet.localTripStatus == "Completed") {
            this.showTripStatus = "Trip Completed";
            this.localTripAction = false;
        }
    };
    LrEnquiryFormComponent.prototype.setDummyInvoiceFields = function () {
        // setting the dept,arri,sec date
        this.lrDtoForDummyInvoiceRetDto.dummyInvoice = this.viewDummyInvoice;
        //        this.dummyInvoiceDepDate=this.lrDtoForDummyInvoiceRetDto.dummyDepDate;
        //        this.lrDtoForDummyInvoiceRetDto.dummyDepDate= this.dummyInvoiceDepDate;
        //        this.dummyInvoiceSchDate=this.lrDtoForDummyInvoiceRetDto.dummySchDate;
        //        this.lrDtoForDummyInvoiceRetDto.dummySchDate= this.dummyInvoiceSchDate;
        //        this.dummyInvoiceArrDate=this.lrDtoForDummyInvoiceRetDto.dummyArrDAte;
        //        this.lrDtoForDummyInvoiceRetDto.dummyArrDAte= this.dummyInvoiceArrDate;
    };
    LrEnquiryFormComponent.prototype.setDummyInvoice2Fields = function () {
        this.lrDtoForDummyInvoice2RetDto.dummyinvoice2 = this.viewDummyInvoice2;
        //        $( "#dumInv2InvoiceNumber" ).val( this.viewDummyInvoice2 );
        ////        this.dummyInvoice2DepDate=this.lrDtoForDummyInvoice2RetDto.dummyDepDate;
        //        this.lrDtoForDummyInvoice2RetDto.dummyDepDate= this.lrDtoForDummyInvoice2RetDto.dummyDepDate;
        //        
        ////        this.dummyInvoice2SchDate=this.lrDtoForDummyInvoice2RetDto.dummySchDate;
        //        this.lrDtoForDummyInvoice2RetDto.dummySchDate=this.lrDtoForDummyInvoice2RetDto.dummySchDate;
        //        
        ////        this.dummyInvoice2ArrDate=this.lrDtoForDummyInvoice2RetDto.dummyArrDAte;
        //        this.lrDtoForDummyInvoice2RetDto.dummyArrDAte= this.lrDtoForDummyInvoice2RetDto.dummyArrDAte;
    };
    LrEnquiryFormComponent.prototype.getCashmemoDetailsInfo = function () {
        this.lrDtoForMemo.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoForMemo.cashMemoNumber = this.showDestCashMemo;
    };
    LrEnquiryFormComponent.prototype.setDestBillingDetailsFields = function () {
        //unLdgChg pending  value of  is pending 
        //        console.log( 'a' );
        //        console.log( this.lrDtoForMemoRetDto.desMemo );
        //        console.log( this.lrDtoForMemoRetDto.demurage );
        //        console.log( this.lrDtoForMemoRetDto.paymentMode );
        //        console.log( this.lrDtoForMemoRetDto.memoLessType );
        //        console.log( 'coll' + this.lrDtoForMemoRetDto.collectionDate );
        this.lrDtoDestMemo.desMemo = this.lrDtoForMemoRetDto.desMemo;
        this.lrDtoDestMemo.deliveryType = this.lrDtoForMemoRetDto.deliveryType;
        this.lrDtoDestMemo.localCharge = this.lrDtoForMemoRetDto.localCharge;
        this.lrDtoDestMemo.hamaliDD = this.lrDtoForMemoRetDto.hamaliDD;
        this.lrDtoDestMemo.hamaliGD = this.lrDtoForMemoRetDto.hamaliGD;
        this.lrDtoDestMemo.receiptCharge = this.lrDtoForMemoRetDto.receiptCharge;
        this.lrDtoDestMemo.serviceCharge = this.lrDtoForMemoRetDto.serviceCharge;
        this.lrDtoDestMemo.discountAmount = this.lrDtoForMemoRetDto.discountAmount;
        this.lrDtoDestMemo.subTotal = this.lrDtoForMemoRetDto.subTotal;
        this.lrDtoDestMemo.servicetax = this.lrDtoForMemoRetDto.servicetax;
        this.lrDtoDestMemo.servTaxAmt = this.lrDtoForMemoRetDto.servTaxAmt;
        this.lrDtoDestMemo.grandTotal = this.lrDtoForMemoRetDto.grandTotal;
        this.lrDtoDestMemo.tripsheetHamali = this.lrDtoForMemoRetDto.tripsheetHamali;
        this.lrDtoDestMemo.unLdgChg = this.lrDtoForMemoRetDto.unLdgChg;
        this.lrDtoDestMemo.demurage = this.lrDtoForMemoRetDto.demurage;
        this.lrDtoDestMemo.memoGeneratedBy = this.lrDtoForMemoRetDto.memoGeneratedBy;
        this.txMemoDate = (this.lrDtoForMemoRetDto.cashMemoTime == null ? "NA"
            : this.lrDtoForMemoRetDto.cashMemoTime);
        this.lrDtoDestMemo.cashMemoTime = this.txMemoDate;
        if (this.lrDtoForMemoRetDto.dateInDate != null
            || (this.lrDtoForMemoRetDto.withLetterHead != null && this.lrDtoForMemoRetDto.withLetterHead == true)) {
            this.lrDtoDestMemo.dateInDate = this.lrDtoForMemoRetDto.dateInDate;
            this.showRecDate = true;
        }
        this.selectedCollectionDate = this.lrDtoForMemoRetDto.collectionDate;
        this.lrDtoDestMemo.collectionDate = this.selectedCollectionDate;
        this.lrDtoDestMemo.cmAtMemoGeneration = (this.lrDtoForMemoRetDto.cmAtMemoGeneration == null ? this.lrDtoForMemoRetDto.column2 : this.lrDtoForMemoRetDto.cmAtMemoGeneration);
        this.lrDtoDestMemo.column2 = this.lrDtoForMemoRetDto.column2;
        this.lrDtoDestMemo.paymentMode = this.lrDtoForMemoRetDto.paymentMode;
        this.lrDtoDestMemo.cashmemoType = this.lrDtoForMemoRetDto.cashmemoType;
        this.lrDtoDestMemo.memoLessAmt = (this.lrDtoForMemoRetDto.memoLessAmt == null ? 0 : this.lrDtoForMemoRetDto.memoLessAmt);
        this.lrDtoDestMemo.memoLessType = (this.lrDtoForMemoRetDto.memoLessType == null ? "" : this.lrDtoForMemoRetDto.memoLessType);
        if (this.lrDtoForMemoRetDto.deliveryType != null
            && this.lrDtoForMemoRetDto.deliveryType == "GD") {
            $("#deliveryMode").val("Godown Delivery");
        }
        else if (this.lrDtoForMemoRetDto.deliveryType != null
            && this.lrDtoForMemoRetDto.deliveryType == "DD") {
            $("#deliveryMode").val("Door Delivery");
        }
        else {
            $("#deliveryMode").val("-------");
        }
        this.showDestMemoStatusLbl = true;
        if (this.lrDtoForMemoRetDto.status == null) {
            this.showDestMemoStatus = "Cash Memo Status - -------- ";
        }
        else if (this.lrDtoForMemoRetDto.status != null
            && (this.lrDtoForMemoRetDto.status ==
                "clear") || (this.lrDtoForMemoRetDto.status == "CompleTed")) {
            this.showDestMemoStatus = "Cash Memo Status - Cleared";
        }
        else if (this.lrDtoForMemoRetDto.column1 ==
            "Assigned") {
            this.showDestMemoStatus = "Cash Memo Status - Assigned to " + this.lrDtoForMemoRetDto.collectionMan;
        }
        else if ((this.lrDtoForMemoRetDto.column1 ==
            "Pending")
            && (this.lrDtoForMemoRetDto.status
                == "billing")) {
            this.showDestMemoStatus = "Cash Memo Status - In Billing";
        }
        else if ((this.lrDtoForMemoRetDto.column1 ==
            "Pending")
            && (this.lrDtoForMemoRetDto.status ==
                "collection")) {
            this.showDestMemoStatus = "Cash Memo Status - In SRD Collection Stock";
        }
        else if ((this.lrDtoForMemoRetDto.column1 ==
            "Pending")
            && (this.lrDtoForMemoRetDto.status ==
                "cmstock")) {
            this.showDestMemoStatus = "Cash Memo Status - In Collection Man Stock - " + this.lrDtoForMemoRetDto.collectionMan;
        }
        else if (this.lrDtoForMemoRetDto.status ==
            "missing") {
            this.showDestMemoStatus = "Cash Memo Status - Missing";
        }
        else if (this.lrDtoForMemoRetDto.status ==
            "To Party") {
            this.showDestMemoStatus = "Cash Memo Status - Left To Party - " + this.lrDtoForMemoRetDto.consigneeName;
        }
        else if ((this.lrDtoForMemoRetDto.status ==
            "transfer")
            || (this.lrDtoForMemoRetDto.status ==
                "transferToGodown")) {
            this.showDestMemoStatus = "Cash Memo Status - Transferred To Collection";
        }
        else {
            this.showDestMemoStatus = "Cash Memo Status - NA";
        }
    };
    //FromStation
    LrEnquiryFormComponent.prototype.getLrEnquiryStatusInfo = function () {
        this.lrDtoGetStatus = this.lrEnquiryRet;
    };
    LrEnquiryFormComponent.prototype.setStatusOfLr = function () {
        this.showShortExtra = true;
        this.showFreight = true;
        this.showArticleSize = true;
        if (this.lrEnquiryRet.reason != null
            && this.lrEnquiryRet.reason != "") {
            this.showReasonLbl = "Due To " + this.lrEnquiryRet.reason;
        }
        if (this.lrEnquiryRet.status == "InCP") {
            this.viewReasonLbl = false;
        }
        else if (this.lrEnquiryRet.status == "Pending"
            || this.lrEnquiryRet.status == "localPending") {
            this.viewReasonLbl = false;
        }
        else if (this.lrEnquiryRet.status == "Transit") {
            this.viewReasonLbl = false;
        }
        else if (this.lrEnquiryRet.status == "Compound") {
            this.viewReasonLbl = false;
        }
        else if (this.lrEnquiryRet.status == "Delivered") {
            this.viewReasonLbl = false;
        }
        else if (this.lrEnquiryRet.status == "Scheduled") {
            this.viewReasonLbl = false;
        }
        else if (this.lrEnquiryRet.status == "CMWT") {
            this.lrEnquiryRet.status;
            this.viewReasonLbl = false;
        }
        else if (this.lrEnquiryRet.status == "CMNT") {
            this.viewReasonLbl = false;
        }
        else if (this.lrEnquiryRet.status == "UnDelivered") {
            this.viewReasonLbl = true;
        }
        else if (this.lrEnquiryRet.status == "LRisSalesTax") {
            this.viewReasonLbl = false;
        }
        else if (this.lrEnquiryRet.status == "Blocked") {
            this.showRemark = true;
            this.viewReasonLbl = false;
        }
        else if (this.lrEnquiryRet.status == "ST") {
            this.viewReasonLbl = false;
        }
        else if (this.lrEnquiryRet.status == "localTransit") {
            this.viewReasonLbl = false;
        }
        else if (this.lrEnquiryRet.status == "Deleted") {
            this.viewReasonLbl = false;
        }
        else {
            this.viewReasonLbl = false;
        }
    };
    LrEnquiryFormComponent.prototype.validateClear = function () {
        $('input[type="text"],[type="number"]').val('');
        $("#searchBy").val('lrNumberWise');
        $("#lrAndEwayNumber").val('');
        this.clearInputFields();
    };
    LrEnquiryFormComponent.prototype.clearInputFields = function () {
        this.showShortExtra = false;
        this.showFreight = false;
        this.showArticleSize = false;
        this.isReadOnly = false;
        //        this.lrDtoForDummyInvoiceRetDto = null;
        //        this.lrDtoForDummyInvoice2RetDto = null;
        this.lrDtoForDummyInvoiceRetDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.lrDtoForDummyInvoice2RetDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_2__["LRDto"]();
        this.lrEnquiryRet = null;
        this.lrDtoLocalTripsRet = null;
        this.lrDtoForMemoRetDto = null;
        this.showStatus = null;
        this.lrDtoGetStatusRet = null;
        this.showInvoiceNumber = null;
        this.viewDummyInvoice = null;
        this.viewDummyInvoice2 = null;
        this.showDummyInvoice = false;
        this.showDummyInvoice2 = false;
        this.lblSrcMemo = false;
        this.lblSrcMemoNo = true;
        this.showSrcCashMemo = null;
        this.lblDestCashMemo = false;
        this.lblDestCashMemoNo = true;
        this.showDestCashMemo = null;
        this.lblLocalTripDetails = false;
        this.showBankLr = false;
        this.showCODLbl = false;
        this.localTripId = 0;
        ///Labels;
        this.showMemoBlocklabel = false;
        //        this.showMemoBlock = null;
        this.showDestMemoStatusLbl = false;
        this.showDestMemoStatus = null;
        this.viewReasonLbl = false;
        this.showReasonLbl = null;
        this.showRemark = false;
        //        this.showForESugam = true;
        this.showForEdeclaration = false;
        this.showRecDate = false;
        //for invoice
        $("#invoiceNo").val('');
        $("#vehicleNumber").val('');
        $("#companyName").val('');
        $("#vehicleCompanyAddress").val('');
        $("#vehicleCompCity").val('');
        $("#pinCode").val('');
        $("#vehicleCompContactNumber").val('');
        $("#driverName").val('');
        $("#driverContactNumber").val('');
        $("#brokerName").val('');
        $("#invoiceGeneratedBy").val('');
        $("#loaderName").val('');
        $("#departureDate").val('');
        $("#departureTime").val('');
        $("#scheduledDate").val('');
        $("#scheduleTime").val('');
        $("#arrivalDate").val('');
        $("#arrivalTime").val('');
        //        for dumy
        $("#dumInvInvoiceNumber").val('');
        $("#dumInvVehicleNumber").val('');
        $("#dumInvCompanyName").val('');
        $("#dumInvAddress").val('');
        $("#dumInvCity").val('');
        $("#dumInvPincode").val('');
        $("#dumInvContactNumber").val('');
        $("#dumInvDriverName").val('');
        $("#dumInvDriverContNumber").val('');
        $("#dumInvBrokerName").val('');
        $("#dumInvGeneratedBy").val('');
        $("#dumInvDepartureDate").val('');
        $("#dumInvDepartureTime").val('');
        $("#dumInvScheduleDate").val('');
        $("#dumInvScheduleTime").val('');
        $("#dumInvArrivalDate").val('');
        $("#dumInvArrivalTime").val('');
        ///For Dummy 2
        $("#dumInv2InvoiceNumber").val('');
        $("#dumInv2VehicleNumber").val('');
        $("#dumInv2CompanyName").val('');
        $("#dumInv2Address").val('');
        $("#dumInv2City").val('');
        $("#dumInv2Pincode").val('');
        $("#dumInv2ContactNumber").val('');
        $("#dumInv2DriverName").val('');
        $("#dumInv2DriverContNumber").val('');
        $("#dumInv2BrokerName").val('');
        $("#dumInv2GeneratedBy").val('');
        $("#dumInv2DepartureDate").val('');
        $("#dumInv2DepartureTime").val('');
        $("#dumInv2ScheduleDate").val('');
        $("#dumInv2ScheduleTime").val('');
        $("#dumInv2ArrivalDate").val('');
        $("#dumInv2ArrivalTime").val('');
        ////For Src Memo
        $("#srcMemoMemoNumber").val('');
        $("#srcMemoMemoDate").val('');
        $("#srcMemoCreatedBy").val('');
        $("#srcMemoTotalLRAmt").val('');
        $("#srcMemoHamali").val('');
        $("#srcMemoServiceChg").val('');
        $("#srcMemoReceiptChg").val('');
        $("#srcMemoDestHamali").val('');
        $("#srcMemoDiscount").val('');
        $("#srcMemoSubTotal").val('');
        $("#srcMemoServiceTax").val('');
        $("#srcMemoServiceTaxAmt").val('');
        $("#srcMemoGrandTotal").val('');
        //For Dest memo
        $("#destMemoMemoNumber").val('');
        $("#destMemoDeliveryType").val('');
        $("#destMemoLocalCharge").val('');
        $("#destMemoHamaliDD").val('');
        $("#destMemoGD").val('');
        $("#destMemoUnldgChg").val('');
        $("#destMemoReceiptCharge").val('');
        $("#destMemoServiceCharge").val('');
        $("#destMemoDemurrage").val('');
        $("#destMemoDiscount").val('');
        $("#destMemoSubTotal").val('');
        $("#destMemoServiceTax").val('');
        $("#destMemoServiceTaxAmt").val('');
        $("#destMemoGrandTotal").val('');
        $("#destMemoTripsheetHamali").val('');
        $("#destMemoMemoDate").val('');
        $("#destMemoMemoAmt").val('');
        $("#destMemoGeneratedBy").val('');
        $("#destMemoDeliveryDate").val('');
        $("#destMemoColManAtMemoGen").val('');
        $("#destMemoCashMemoAssignedTo").val('');
        $("#destMemoPaymentType").val('');
        $("#destMemoColDate").val('');
        $("#destMemoPaymentMode").val('');
        $("#destMemoReceivedDate").val('');
        $("#destMemoMemoLessAmt").val('');
        $("#destMemoMemoLessType").val('');
        ///for Local trip
        $("#localTripVehicleNumber").val('');
        $("#localTripArea").val('');
        $("#localTripDriverName").val('');
        $("#localTripTripDate").val('');
        this.showTripStatus = null;
        //For Freight Amt remark and esugam 
        $("#frtAmtBaseFreight").val('');
        $("#frtAmtHamali").val('');
        $("#frtAmtGCCharge").val('');
        $("#frtAmtLCCharge").val('');
        $("#frtAmtBCCharge").val('');
        $("#frtAmtFOV").val('');
        $("#frtAmtAOC").val('');
        $("#frtAmtInsuranceCharge").val('');
        $("#frtAmtOthers").val('');
        $("#frtAmtDD").val('');
        $("#frtAmtTotalAmt").val('');
        $("#remark").val('');
        $("#remark").val('');
        $("#eSugamNo").val('');
        $("#eDeclarationTransID").val('');
        $("#eWayBillNo").val('');
        $("#eDeclarationCommodity").val('');
        $("#eDeclarationBy").val('');
        //Memo Block Reason
        $("#memoBlockedReason").val('');
        $("#memoBlockedDate").val('');
        ///Cod Payment
        $("#codPaymentMode").val('');
        $("#codPaymentBankName").val('');
        $("#codPaymentChqNo").val('');
        $("#codPaymentChqDate").val('');
        $("#codPaymentRefNo").val('');
        $("#memoBlockedDate").val('');
        this.txtPaymentModeCodLrPayment = null;
        this.txtBankNameCodLrPayment = null;
        this.txtCheqNumberCodLrPayment = null;
        this.dfCheqDateCodLrPayment = null;
        this.txtRefNoCodLrPayment = null;
        this.selectedEnteredDate = null;
        this.selectedBookingDate = null;
        this.billDateRet = null;
        this.getSrcMemoDate = null;
        this.txtLTVehicleNumber = null;
        this.txtLTArea = null;
        this.txtLTDriver = null;
        this.dfLTTripDate = null;
        this.localTripArea = null;
        this.getFrtAmtOthers = null;
        this.cashMemoBlockDate = null;
        this.txMemoDate = null;
        this.selectedCollectionDate = null;
    };
    LrEnquiryFormComponent.prototype.getLrEnquiry = function (e) {
        if (e.keyCode == 13) {
            this.selectedSearchNumber = $("#lrAndEwayNumber").val();
            if (this.selectedSearchNumber != null) {
                this.clearInputFields();
                this.getLrEnquiryDetails();
            }
        }
    };
    LrEnquiryFormComponent.prototype.showConsignorDetails = function () {
        alert('a');
    };
    LrEnquiryFormComponent.prototype.showConsigneeDetails = function () {
        alert('b');
    };
    LrEnquiryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lr-enquiry-form',
            template: __webpack_require__(/*! ./lr-enquiry-form.component.html */ "./src/app/lr/enquiry/lr-enquiry-form/lr-enquiry-form.component.html"),
            styles: [__webpack_require__(/*! ./lr-enquiry-form.component.css */ "./src/app/lr/enquiry/lr-enquiry-form/lr-enquiry-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__["MasterReadService"]])
    ], LrEnquiryFormComponent);
    return LrEnquiryFormComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-lr-enquiry-enquiry-module.js.map