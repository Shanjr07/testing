(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-report-truck-report-truck-report-module"],{

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

/***/ "./src/app/dataService/memo-report.ts":
/*!********************************************!*\
  !*** ./src/app/dataService/memo-report.ts ***!
  \********************************************/
/*! exports provided: MemoReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoReport", function() { return MemoReport; });
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



var MemoReport = /** @class */ (function () {
    function MemoReport(http) {
        this.http = http;
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webMemoReport;
    }
    MemoReport.prototype.getMemoLessDetailsReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getMemoLessDetailsRptApi", cashMemoDto);
    };
    MemoReport.prototype.getMemoLessDetailsForSourceWiseReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getMemoLessDetailsSourceWiseRptApi", cashMemoDto);
    };
    MemoReport.prototype.getMemoLessDescriptionDetailsReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getMemoLessDescriptionApi", cashMemoDto);
    };
    MemoReport.prototype.getChequeDetailsReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getChequeDetailsApi", cashMemoDto);
    };
    MemoReport.prototype.getOSCashmemoCollectionDeptReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getOSCashmemoCollectionDeptApi", cashMemoDto);
    };
    MemoReport.prototype.getCashMemoReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCashMemoReportApi", cashMemoDto);
    };
    MemoReport.prototype.getConsolidatedMemoReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getConsolidatedMemoReportApi", cashMemoDto);
    };
    MemoReport.prototype.getConsolidatedMemoReportSourceWise = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getConsolidatedMemoReportSourceWiseApi", cashMemoDto);
    };
    MemoReport.prototype.getConsolidatedMemoReportSourceMainWise = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getConsolidatedMemoReportMainSourceWiseApi", cashMemoDto);
    };
    MemoReport.prototype.getDestinationChequeDetailsReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getDestinationChequeDetailsReportApi", lrDto);
    };
    MemoReport.prototype.updateDestinationChqSentToBankDetailsReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateDestinationChqSentToBankDetailsApi", lrDto);
    };
    MemoReport.prototype.updateDestinationChequeDateDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "//updateDestinationChequeDateApi", lrDto);
    };
    MemoReport.prototype.getCashMemoHistoryDetailsReport = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/getCashMemoHistoryDetailsApi", rateMasterDto);
    };
    MemoReport.prototype.getLrdetailsForCashMemoRpt = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLrdetailsForCashMemoRptApi", lrDto);
    };
    MemoReport.prototype.getGCNotRecievedDetails = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getGCNotRecievedDetailsApi", cashMemoDto);
    };
    MemoReport.prototype.getCashMemoLetterHeadDtls = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/getCashMemoLetterHeadDtlsApi", rateMasterDto);
    };
    MemoReport.prototype.updateCashMemoLetterHead = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/updateCashMemoLetterHeadApi", rateMasterDto);
    };
    MemoReport.prototype.getPartyLessReport = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getPartyLessReportApi", cashMemoDto);
    };
    MemoReport.prototype.getMemoDiscountDetailsSourceWise = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getMemoDiscountDetailsSourceWiseApi", cashMemoDto);
    };
    MemoReport.prototype.getCommodityMismatchDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getCommodityMismatchDetailsApi", lrDto);
    };
    MemoReport.prototype.getDailyCollectionRptDetails = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getDailyCollectionRptDetailsApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionDetailsGCTaken = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsGCTakenApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionDetailsLeftToParty = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsLeftToPartyApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionDetailsLeftToPartyStmtSummary = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsLeftToPartyStmtSummaryApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionDetailsAmtCollected = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsAmtCollectedApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionDetailsLeftToPartyPendAckStmt = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsLeftToPartyPendAckStmtApi", cashMemoDto);
    };
    MemoReport.prototype.updateToPartyAckRec = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/updateToPartyAckRecApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionDetailsCollectionConsolidatedRpt = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsCollectionConsolidatedRptApi", cashMemoDto);
    };
    MemoReport.prototype.getCollectionManWiseOSDetailsSummary = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionManWiseOSDetailsSummaryApi", cashMemoDto);
    };
    MemoReport.prototype.blockCashMemo = function (lrDto) {
        return this.http.post(this._baseUrl + "/blockCashMemoApi", lrDto);
    };
    MemoReport.prototype.getManualCashMemoCheckFirst = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getManualCashMemoCheckFirstApi", cashMemoDto);
    };
    MemoReport.prototype.updateCashMemoCheck = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/updateCashMemoCheckApi", cashMemoDto);
    };
    MemoReport.prototype.updateCMMemoStockCheck = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/updateCMMemoStockCheckApi", cashMemoDto);
    };
    MemoReport.prototype.getManualCashMemoCheckPrintOut = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getManualCashMemoCheckPrintOutApi", cashMemoDto);
    };
    MemoReport.prototype.getSingleCashMemo = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getSingleCashMemoApi", cashMemoDto);
    };
    MemoReport.prototype.transferToGodownLrs = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/transferToGodownLrsApi", cashMemoDto);
    };
    MemoReport = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemoReport);
    return MemoReport;
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

/***/ "./src/app/dto/SupplierDetails-dto.ts":
/*!********************************************!*\
  !*** ./src/app/dto/SupplierDetails-dto.ts ***!
  \********************************************/
/*! exports provided: SupplierDetailsDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierDetailsDto", function() { return SupplierDetailsDto; });
var SupplierDetailsDto = /** @class */ (function () {
    function SupplierDetailsDto() {
    }
    return SupplierDetailsDto;
}());



/***/ }),

/***/ "./src/app/report/truck-report/halt-and-dispatched-details/halt-and-dispatched-details.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/report/truck-report/halt-and-dispatched-details/halt-and-dispatched-details.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3RydWNrLXJlcG9ydC9oYWx0LWFuZC1kaXNwYXRjaGVkLWRldGFpbHMvaGFsdC1hbmQtZGlzcGF0Y2hlZC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3RydWNrLXJlcG9ydC9oYWx0LWFuZC1kaXNwYXRjaGVkLWRldGFpbHMvaGFsdC1hbmQtZGlzcGF0Y2hlZC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/report/truck-report/halt-and-dispatched-details/halt-and-dispatched-details.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/report/truck-report/halt-and-dispatched-details/halt-and-dispatched-details.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Halt And Dispatched Details</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Date</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"date\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"dates\" ngbDatepicker #dates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"dates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"mainSrc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">ALL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"nagpur\">Nagpur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsHaltAndDispatchedDetails\" [dtTrigger]=\"dtTriggerHaltAndDispatchedDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Truck Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Broker Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Departure Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Loader Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let haltAndDispatchedDetailsData of haltAndDispatchedDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ haltAndDispatchedDetailsData.truckNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ haltAndDispatchedDetailsData.brokerName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ haltAndDispatchedDetailsData.departureDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ haltAndDispatchedDetailsData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ haltAndDispatchedDetailsData.loaderName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ haltAndDispatchedDetailsData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/truck-report/halt-and-dispatched-details/halt-and-dispatched-details.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/report/truck-report/halt-and-dispatched-details/halt-and-dispatched-details.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: HaltAndDispatchedDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaltAndDispatchedDetailsComponent", function() { return HaltAndDispatchedDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
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

//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


var HaltAndDispatchedDetailsComponent = /** @class */ (function () {
    function HaltAndDispatchedDetailsComponent(haltAndDispatchedDetailsRpt) {
        this.haltAndDispatchedDetailsRpt = haltAndDispatchedDetailsRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerHaltAndDispatchedDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    HaltAndDispatchedDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    HaltAndDispatchedDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsHaltAndDispatchedDetails = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Truck Number',
                    data: 'truckNumber'
                },
                {
                    title: 'Broker Name',
                    data: 'brokerName'
                },
                {
                    title: 'Departure Date',
                    data: 'departureDate'
                },
                {
                    title: 'Invoice Number',
                    data: 'invoiceNumber'
                },
                {
                    title: 'Loader Name',
                    data: 'loaderName'
                },
                {
                    title: 'Remarks',
                    data: 'remarks'
                }
            ],
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
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.gettingDataFrmServiceFrHaltAndDispatchedDetailsTable = this.haltAndDispatchedDetailsRpt.getSummaryData();
        this.onDestroyUnsubscribtionHaltAndDispatchedDetails = this.gettingDataFrmServiceFrHaltAndDispatchedDetailsTable.subscribe(function (data) {
            _this.haltAndDispatchedDetailsDataList = data['data'];
            _this.dtTriggerHaltAndDispatchedDetails.next();
        });
        //the below code is for the getting data through json ends
    };
    HaltAndDispatchedDetailsComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerHaltAndDispatchedDetails.unsubscribe();
        this.onDestroyUnsubscribtionHaltAndDispatchedDetails.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    HaltAndDispatchedDetailsComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HaltAndDispatchedDetailsComponent.prototype, "dtElements", void 0);
    HaltAndDispatchedDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-halt-and-dispatched-details',
            template: __webpack_require__(/*! ./halt-and-dispatched-details.component.html */ "./src/app/report/truck-report/halt-and-dispatched-details/halt-and-dispatched-details.component.html"),
            styles: [__webpack_require__(/*! ./halt-and-dispatched-details.component.css */ "./src/app/report/truck-report/halt-and-dispatched-details/halt-and-dispatched-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], HaltAndDispatchedDetailsComponent);
    return HaltAndDispatchedDetailsComponent;
}());



/***/ }),

/***/ "./src/app/report/truck-report/hire-details-by-destination/hire-details-by-destination.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/report/truck-report/hire-details-by-destination/hire-details-by-destination.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC90cnVjay1yZXBvcnQvaGlyZS1kZXRhaWxzLWJ5LWRlc3RpbmF0aW9uL2hpcmUtZGV0YWlscy1ieS1kZXN0aW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/truck-report/hire-details-by-destination/hire-details-by-destination.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/report/truck-report/hire-details-by-destination/hire-details-by-destination.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row system_responsive\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Hire Details By Deatination</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"month\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Month</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-calendar-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Month\" [formControl]=\"controlMonth\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteMonth\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteMonth=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(monthOptions | filter: controlMonth.value) as resultMonth\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultMonth\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultMonth.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"monthPart\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Month Part</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-calendar-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Month Part...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"firstHalf\">First Half</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"secondHalf\">Second Half</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" [formControl]=\"controlSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSource=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(sourceOptions | filter: controlSource.value) as resultSource\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSource\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSource.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Hire Details By\n\t\t\t\t\t\t\t\t\tDeatination</h6>\n\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsHireDetailsByDestination\"\n\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerHireDetailsByDestination\">\n\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Freight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Hire</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Gur Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Kan Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Chrg Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Frt/Kg</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Hire/Kg</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let hireDetailsByDestinationData of hireDetailsByDestinationDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireDetailsByDestinationData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireDetailsByDestinationData.freight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireDetailsByDestinationData.hire }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireDetailsByDestinationData.gurWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireDetailsByDestinationData.kanWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireDetailsByDestinationData.actWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireDetailsByDestinationData.chrgWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireDetailsByDestinationData.frtPerKg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireDetailsByDestinationData.hirePerKg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/truck-report/hire-details-by-destination/hire-details-by-destination.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/report/truck-report/hire-details-by-destination/hire-details-by-destination.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: HireDetailsByDestinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireDetailsByDestinationComponent", function() { return HireDetailsByDestinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
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

//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter starts

//for the select option with filter ends
var HireDetailsByDestinationComponent = /** @class */ (function () {
    function HireDetailsByDestinationComponent(hireDetailsByDestinationScreen) {
        this.hireDetailsByDestinationScreen = hireDetailsByDestinationScreen;
        this.loadingIndicator = true;
        this.controlMonth = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.monthOptions = [
            { id: 1, label: 'January' },
            { id: 2, label: 'February' },
            { id: 3, label: 'March' },
            { id: 4, label: 'April' },
            { id: 5, label: 'May' },
            { id: 6, label: 'June' },
            { id: 7, label: 'July' },
            { id: 8, label: 'August' },
            { id: 9, label: 'September' },
            { id: 10, label: 'October' },
            { id: 11, label: 'November' },
            { id: 12, label: 'December' }
        ];
        this.sourceOptions = [
            { id: 1, label: 'ALL' },
            { id: 2, label: 'Alleppey' },
            { id: 3, label: 'Alwaye' },
            { id: 4, label: 'Aurangabad' }
        ];
        this.dtTriggerHireDetailsByDestination = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    HireDetailsByDestinationComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    HireDetailsByDestinationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsHireDetailsByDestination = {
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
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.getDataFrmServiceFrHireDetailsByDestinationTable = this.hireDetailsByDestinationScreen.getSummaryData();
        this.onDestroyUnsubscribtionHireDetailsByDestination = this.getDataFrmServiceFrHireDetailsByDestinationTable.subscribe(function (data) {
            _this.hireDetailsByDestinationDataList = data['data'];
            _this.dtTriggerHireDetailsByDestination.next();
        });
    };
    HireDetailsByDestinationComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerHireDetailsByDestination.unsubscribe();
        this.onDestroyUnsubscribtionHireDetailsByDestination.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HireDetailsByDestinationComponent.prototype, "dtElements", void 0);
    HireDetailsByDestinationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hire-details-by-destination',
            template: __webpack_require__(/*! ./hire-details-by-destination.component.html */ "./src/app/report/truck-report/hire-details-by-destination/hire-details-by-destination.component.html"),
            styles: [__webpack_require__(/*! ./hire-details-by-destination.component.css */ "./src/app/report/truck-report/hire-details-by-destination/hire-details-by-destination.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], HireDetailsByDestinationComponent);
    return HireDetailsByDestinationComponent;
}());



/***/ }),

/***/ "./src/app/report/truck-report/non-availability-of-truck/non-availability-of-truck-report.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/report/truck-report/non-availability-of-truck/non-availability-of-truck-report.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n\tmargin-bottom: 10px;\n\tmargin-top: 10pX;\n}\n/* for custom css for autocomplete select option starts */\n.auto_selectOption {\n\tfont-size: 15px;\n\tpadding: 0px;\n\tborder: 2px solid #dadee2;\n\theight: 26px;\n\twidth: 100%;\n}\n/* for small mobile */\n@media ( max-width : 355px) {\n\t.auto_selectOption {\n\t\twidth: 50% !important;\n\t}\n}\n/* for medium mobile */\n@media ( max-width : 365px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n}\n/* for mobile */\n@media ( min-width : 370px) and (max-width: 766px) {\n\t.auto_selectOption {\n\t\twidth: 51%;\n\t}\n}\n/* for ipad */\n@media ( min-width : 767px) and (max-width: 990px) {\n\t.auto_selectOption {\n\t\twidth: 81%;\n\t}\n}\n/* for ipad pro */\n@media ( min-width : 991px) and (max-width: 1200px) {\n\t.auto_selectOption {\n\t\twidth: 46%;\n\t}\n}\n/* for desktop */\n@media ( min-width : 1201px) and (max-width: 1500px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n}\n/* for custom css for autocomplete select option ends */\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3RydWNrLXJlcG9ydC9ub24tYXZhaWxhYmlsaXR5LW9mLXRydWNrL25vbi1hdmFpbGFiaWxpdHktb2YtdHJ1Y2stcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCO0FBQ0QsMERBQTBEO0FBQzFEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLFlBQVk7Q0FDWjtBQUNELHNCQUFzQjtBQUN0QjtDQUNDO0VBQ0Msc0JBQXNCO0VBQ3RCO0NBQ0Q7QUFDRCx1QkFBdUI7QUFDdkI7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0QsZ0JBQWdCO0FBQ2hCO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUNELGNBQWM7QUFDZDtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFDRCxrQkFBa0I7QUFDbEI7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0QsaUJBQWlCO0FBQ2pCO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUNELHdEQUF3RDtBQUV4RDtDQUNDLFVBQVU7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC90cnVjay1yZXBvcnQvbm9uLWF2YWlsYWJpbGl0eS1vZi10cnVjay9ub24tYXZhaWxhYmlsaXR5LW9mLXRydWNrLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRtYXJnaW4tdG9wOiAxMHBYO1xufVxuLyogZm9yIGN1c3RvbSBjc3MgZm9yIGF1dG9jb21wbGV0ZSBzZWxlY3Qgb3B0aW9uIHN0YXJ0cyAqL1xuLmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRwYWRkaW5nOiAwcHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNkYWRlZTI7XG5cdGhlaWdodDogMjZweDtcblx0d2lkdGg6IDEwMCU7XG59XG4vKiBmb3Igc21hbGwgbW9iaWxlICovXG5AbWVkaWEgKCBtYXgtd2lkdGggOiAzNTVweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA1MCUgIWltcG9ydGFudDtcblx0fVxufVxuLyogZm9yIG1lZGl1bSBtb2JpbGUgKi9cbkBtZWRpYSAoIG1heC13aWR0aCA6IDM2NXB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDUwJTtcblx0fVxufVxuLyogZm9yIG1vYmlsZSAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogMzcwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA1MSU7XG5cdH1cbn1cbi8qIGZvciBpcGFkICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDgxJTtcblx0fVxufVxuLyogZm9yIGlwYWQgcHJvICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA0NiU7XG5cdH1cbn1cbi8qIGZvciBkZXNrdG9wICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiAxMjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNTAlO1xuXHR9XG59XG4vKiBmb3IgY3VzdG9tIGNzcyBmb3IgYXV0b2NvbXBsZXRlIHNlbGVjdCBvcHRpb24gZW5kcyAqL1xuXG46Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3d7XG5cdHRvcDogMjZweDtcbiAgICBsZWZ0OiAxODhweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/truck-report/non-availability-of-truck/non-availability-of-truck-report.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/report/truck-report/non-availability-of-truck/non-availability-of-truck-report.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n\t<style>\n\t\t@media (min-width : 167px) {\n\t\t\t.custom_Padding {\n\t\t\t\tpadding-left: 85px;\n\t\t\t}\n\t\t}\n\n\t\t@media (min-width : 767px) {\n\t\t\t.custom_Padding {\n\t\t\t\tpadding-left: 20px;\n\t\t\t}\n\t\t}\n\n\t\t@media (min-width : 1024px) {\n\t\t\t.custom_Padding {\n\t\t\t\tpadding-left: 45px;\n\t\t\t}\n\t\t}\n\n\t\t@media (min-width : 1200px) {\n\t\t\t.custom_Padding {\n\t\t\t\tpadding-left: 75px;\n\t\t\t}\n\t\t}\n\t</style>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Truck Non Availability\n\t\t\t\t\t\tDetails Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"lrWise\">LR Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"partyWise\">Party Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"tillDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Till Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"tillDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#tillDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"tillDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"agentNameId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"agentNameListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusAgentNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sourceId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForSource($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSource\" [ngbTypeahead]=\"searchSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destinationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestination($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<hr style=\"margin: 3px;\">\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByPartyWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"smsSendingType\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>SMS Sending Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\">-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"started\">Started</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"stopped\">Stopped</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByPartyWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"partyWiseDestinationDropDownId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForPartyWiseDestinationDropDown($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelPartyWiseDestinationDropDown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchPartyWiseDestinationDropDown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterPartyWiseDestinationDropDown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterPartyWiseDestinationDropDown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusPartyWiseDestinationDropDownTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByPartyWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source List</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"sourceListId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"sourceListId\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"All\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Punjab\">Punjab</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"UP\">UP</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Haryana\">Haryana</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom_Padding\" [hidden]=\"! partyWiselTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionPartyWise\" [dtTrigger]=\"dtTriggerPartyWise\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source List</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let partyWiseData of partyWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ partyWiseData.sourceList }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable class=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDataTable\" [dtTrigger]=\"dtTriggerDataTable\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR</th>\n\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t<th>Mobile</th>\n\t\t\t\t\t\t\t\t\t\t<th>Contact Person</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let dataTableData of dataTableDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ dataTableData.lr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dataTableData.art }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dataTableData.consignee }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dataTableData.mobile }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ dataTableData.contactPerson }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/truck-report/non-availability-of-truck/non-availability-of-truck-report.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/report/truck-report/non-availability-of-truck/non-availability-of-truck-report.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: NonAvailabilityOfTruckReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonAvailabilityOfTruckReportComponent", function() { return NonAvailabilityOfTruckReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
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
//for datepicker ends











var NonAvailabilityOfTruckReportComponent = /** @class */ (function () {
    function NonAvailabilityOfTruckReportComponent(godownStocksBookingRpt, router, memoReport, masterReadService, modalService, lrReport) {
        var _this = this;
        this.godownStocksBookingRpt = godownStocksBookingRpt;
        this.router = router;
        this.memoReport = memoReport;
        this.masterReadService = masterReadService;
        this.modalService = modalService;
        this.lrReport = lrReport;
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.agentOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Agra' },
            { id: 3, label: 'Bawana' },
        ];
        /* sourceOptions = [
          { id: 1, label: 'Delhi' },
          { id: 2, label: 'Mumbai' },
          { id: 3, label: 'Agra' },
      ];
    destinationOptions = [
           { id: 1, label: 'Bangalore' },
           { id: 2, label: 'Chennai' },
           { id: 3, label: 'Kerela' },
       ];*/
        this.smsSendingTypeOptions = [
            { id: 1, label: 'Started' },
            { id: 2, label: 'Stopped' }
        ];
        this.partyWiseDestinationOptions = [
            { id: 1, label: 'Bangalore' },
            { id: 2, label: 'Chennai' },
            { id: 3, label: 'Kerela' },
        ];
        //for datepicker ends
        this.loadingIndicator = true;
        this.searchByLrWise = true;
        this.searchByPartyWise = false;
        this.dtTriggerDataTable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtTriggerPartyWise = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isLoggedIn = true;
        this.lrDtoAgentNameAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoAgentName = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.agentNameTA = [];
        this.focusAgentNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchAgentName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusAgentNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (term) { return (term === '' ? _this.agentNameTA
                : _this.agentNameTA.filter(function (v) { return v.subStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterAgentName = function (x) { return x.subStations; };
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.lrDtoPartyWiseDestinationDropDown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.partyWiseDestinationDropDownTA = [];
        this.focusPartyWiseDestinationDropDownTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchPartyWiseDestinationDropDown = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusPartyWiseDestinationDropDownTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (term) { return (term === '' ? _this.partyWiseDestinationDropDownTA
                : _this.partyWiseDestinationDropDownTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterPartyWiseDestinationDropDown = function (x) { return x.destination; };
        this.lrDtoSourceSpecific = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoSourceSpecificList = [];
        this.lrDtoSource = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.sourceTA = [];
        this.focusSourceTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchSource = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (term) { return (term === '' ? _this.sourceTA
                : _this.sourceTA.filter(function (v) { return v.subStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSource = function (x) { return x.subStations; };
        this.superAdminView = false;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
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
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == "TruckNonAvlRpt DestView") {
                        this.superAdminView = true; // superadmin only 
                    }
                }
            }
        }
        this.getAgentNameDetails();
        this.getFromStationMethod();
        this.getDestinationDetails();
    }
    NonAvailabilityOfTruckReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    NonAvailabilityOfTruckReportComponent.prototype.ngOnInit = function () {
        this.dtOptionsDataTable = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'LR',
                    data: 'lr'
                },
                {
                    title: 'Art',
                    data: 'art'
                },
                {
                    title: 'Consignee',
                    data: 'consignee'
                },
                {
                    title: 'Mobile',
                    data: 'mobile'
                },
                {
                    title: 'Contact Person',
                    data: 'contactPerson'
                }
            ],
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
            "paging": false,
            "info": false,
        };
        this.dtOptionPartyWise = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Source List',
                    data: 'sourceList'
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
            //
            ],
            // the below code is for button export ends
            //place holder in search/filter in datatable starts
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            searching: false,
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
        };
    };
    NonAvailabilityOfTruckReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerDataTable.next();
        this.dtTriggerPartyWise.next();
    };
    NonAvailabilityOfTruckReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    NonAvailabilityOfTruckReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDataTable.unsubscribe();
        this.dtTriggerPartyWise.unsubscribe();
        //this.onDestroyUnsubscribtionDataTable.unsubscribe();
        //this.onDestroyUnsubscribtionPartyWise.unsubscribe();
    };
    //for second datatable with checkbox hide and show
    NonAvailabilityOfTruckReportComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'lrWise') {
            this.searchByLrWise = true;
            this.searchByPartyWise = false;
        }
        else if (searchBy === 'partyWise') {
            this.searchByLrWise = true;
            this.searchByPartyWise = true;
        }
        else {
            this.searchByLrWise = false;
            this.searchByPartyWise = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    NonAvailabilityOfTruckReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    NonAvailabilityOfTruckReportComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    NonAvailabilityOfTruckReportComponent.prototype.agentNameListener = function (e, fubi) {
        this.modelAgentName = e.item;
        $("#agentNameId").val(this.modelAgentName.subStations);
    };
    NonAvailabilityOfTruckReportComponent.prototype.clickListnerForSource = function (e, fubi) {
        this.modelSource = e.item;
        $("#sourceId").val(this.modelSource.destination);
    };
    NonAvailabilityOfTruckReportComponent.prototype.clickListnerForDestination = function (e, fubi) {
        this.modelDestination = e.item;
        $("#destinationId").val(this.modelDestination.destination);
    };
    NonAvailabilityOfTruckReportComponent.prototype.getAgentNameData = function () {
        this.lrDtoAgentName = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoAgentName.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoAgentName.reportMode = "InclMainStation";
        console.log(this.superAdminView);
        if (this.superAdminView == true) {
            this.lrDtoAgentName.mode = "Booking";
        }
        else {
            //if(this.rightsForRole !=null && this.rightsForRole == "rights for Booking Administrator"){
            if (this.userDataDtoReturnSession.role != null &&
                this.userDataDtoReturnSession.role == "Booking Administrator") {
                this.lrDtoAgentName.city = this.userDataDtoReturnSession.mainStation;
            }
            else {
                this.lrDtoAgentName.city = this.userDataDtoReturnSession.mainAdminStation;
            }
        }
    };
    NonAvailabilityOfTruckReportComponent.prototype.getAgentNameDetails = function () {
        var _this = this;
        this.getAgentNameData();
        //this.showSpinnerForAction = true;
        this.masterReadService.getSubBookingStationDetailsService(this.lrDtoAgentName).subscribe(function (response) {
            if (response.length > 0) {
                _this.agentNameTA = [];
                _this.agentNameOptions = [];
                _this.agentNameOptions = response;
                _this.lrDtoAgentNameAllOption.subStations = "All";
                _this.agentNameTA.push(_this.lrDtoAgentNameAllOption);
                for (var i = 0; i < _this.agentNameOptions.length; i++) {
                    _this.agentNameTA.push(_this.agentNameOptions[i]);
                }
                $("#agentNameId").val('All');
                //this.showSpinnerForAction = false;
            }
            else {
                _this.lrDtoAgentNameAllOption.subStations = "All";
                _this.agentNameTA.push(_this.lrDtoAgentNameAllOption);
                $("#agentNameId").val('All');
                // this.showSpinnerForAction = false;
            }
        }), function (error) {
            //this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While getting the Source Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    NonAvailabilityOfTruckReportComponent.prototype.getFromStationMethod = function () {
        var _this = this;
        if (this.userDataDtoReturnSession.role != null &&
            this.userDataDtoReturnSession.role == "Booking Administrator" &&
            this.userDataDtoReturnSession.stationList != "") {
            for (var i = 0; i < this.userDataDtoReturnSession.stationList.length; i++) {
                this.lrDtoSourceSpecific = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
                this.lrDtoSourceSpecific.subStations = this.userDataDtoReturnSession.stationList[i];
                this.lrDtoSourceSpecificList.push(this.lrDtoSourceSpecific);
            }
            for (var i = 0; i < this.lrDtoSourceSpecificList.length; i++) {
                this.sourceTA.push(this.lrDtoSourceSpecificList[i]);
            }
        }
        else {
            this.lrDtoSource = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
            this.lrDtoSource.companyId = this.userDataDtoReturnSession.companyId;
            this.lrDtoSource.reportMode = "InclMainStation";
            console.log(this.superAdminView);
            if (this.superAdminView == true) {
                this.lrDtoSource.mode = "Booking";
            }
            else {
                //if(this.rightsForRole !=null && this.rightsForRole == "rights for Booking Administrator"){
                if (this.userDataDtoReturnSession.role != null &&
                    this.userDataDtoReturnSession.role == "Booking Administrator") {
                    this.lrDtoSource.city = this.userDataDtoReturnSession.mainStation;
                }
                else {
                    this.lrDtoSource.city = this.userDataDtoReturnSession.mainAdminStation;
                }
            }
            this.masterReadService.getSubBookingStationDetailsService(this.lrDtoSource).subscribe(function (response) {
                if (response.length > 0) {
                    _this.sourceTA = [];
                    _this.sourceOptions = [];
                    _this.sourceOptions = response;
                    for (var i = 0; i < _this.sourceOptions.length; i++) {
                        _this.sourceTA.push(_this.sourceOptions[i]);
                    }
                    //this.showSpinnerForAction = false;
                }
                else {
                    _this.sourceTA = [];
                    _this.sourceOptions = [];
                    //this.showSpinnerForAction = false;
                }
            }), function (error) {
                //this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While getting the Source Details", "info");
            },
                function () { return console.log('done'); };
        }
    };
    NonAvailabilityOfTruckReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.mode = "desttrsp";
    };
    NonAvailabilityOfTruckReportComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        //this.showSpinnerForAction = true;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            if (response.length > 0) {
                _this.destinationTA = [];
                _this.destinationOptions = [];
                _this.destinationOptions = response;
                for (var i = 0; i < _this.destinationOptions.length; i++) {
                    _this.destinationTA.push(_this.destinationOptions[i]);
                }
                $("#destinationId").val('All');
                _this.partyWiseDestinationDropDownOptions = [];
                _this.partyWiseDestinationDropDownTA = [];
                _this.partyWiseDestinationDropDownOptions = response;
                for (var i = 0; i < _this.partyWiseDestinationDropDownOptions.length; i++) {
                    _this.partyWiseDestinationDropDownTA.push(_this.partyWiseDestinationDropDownOptions[i]);
                }
                //this.showSpinnerForAction = false;
            }
            else {
                //this.showSpinnerForAction = false;
            }
        }), function (error) {
            //this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Server Error", "While Getting destination details", "warning");
        },
            function () { return console.log('done'); };
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], NonAvailabilityOfTruckReportComponent.prototype, "dtElements", void 0);
    NonAvailabilityOfTruckReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-non-availability-of-truck-report',
            template: __webpack_require__(/*! ./non-availability-of-truck-report.component.html */ "./src/app/report/truck-report/non-availability-of-truck/non-availability-of-truck-report.component.html"),
            styles: [__webpack_require__(/*! ./non-availability-of-truck-report.component.css */ "./src/app/report/truck-report/non-availability-of-truck/non-availability-of-truck-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_12__["MemoReport"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__["MasterReadService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_14__["LrReportService"]])
    ], NonAvailabilityOfTruckReportComponent);
    return NonAvailabilityOfTruckReportComponent;
}());



/***/ }),

/***/ "./src/app/report/truck-report/performance-report/performance-report.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/report/truck-report/performance-report/performance-report.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3RydWNrLXJlcG9ydC9wZXJmb3JtYW5jZS1yZXBvcnQvcGVyZm9ybWFuY2UtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3RydWNrLXJlcG9ydC9wZXJmb3JtYW5jZS1yZXBvcnQvcGVyZm9ybWFuY2UtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/report/truck-report/performance-report/performance-report.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/report/truck-report/performance-report/performance-report.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Performance Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"hireslipNumber\">Hireslip\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNumber</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"destination\">Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"truckNumber\">Truck Number</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"supplierName\">Supplier Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByHireslipNo\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hireslip Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"hireslipNumberId\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByDestination\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"selectSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"selectSource\" #selectSource\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectSourceMode(selectSource.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mainSource\" selected>Main Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"individualSource\">Individual\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSource</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"departFrom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Depart From</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"departFroms\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#departFroms=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"departFroms.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Depart To</label> <input id=\"departTo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"departTos\" ngbDatepicker #departTos=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"departTos.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"selectSourceMain\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sourceStationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForSourcStation($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceStationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"selectSourceIndividual\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"individualSrc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"andheri\">Andheri</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"binnymillys\">Binnymills</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"budhpur\">Budhpur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestination\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByTruckNo\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"truckNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchBySupplierName\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"supplierName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Supplier Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Supplier Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">A C Traders</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">A P Transport</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">A S Road Carrier</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable class=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTruckPerf\" [dtTrigger]=\"dtTriggerTruckPerf\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Company Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Lorry Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Gur Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Kanta Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hireslip Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Departure Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Departure Time</th>\n\t\t\t\t\t\t\t\t\t\t<th>Arrival Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Arrival Time</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hours</th>\n\t\t\t\t\t\t\t\t\t\t<th>Enam</th>\n\t\t\t\t\t\t\t\t\t\t<th>Enam-H</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let truckPerfData of truckPerfDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.companyName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.lorryNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.gurWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.kantaWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.hireslipNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.departureDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.departureTime }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.arrivalDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.arrivalTime }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.hours }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.enam }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckPerfData.enamH }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/truck-report/performance-report/performance-report.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/report/truck-report/performance-report/performance-report.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PerformanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceReportComponent", function() { return PerformanceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
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











var PerformanceReportComponent = /** @class */ (function () {
    function PerformanceReportComponent(performanceRpt, memoLessRpt, router, masterReadService, memoReport, modalService) {
        var _this = this;
        this.performanceRpt = performanceRpt;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.searchByHireslipNo = true;
        this.searchByDestination = false;
        this.viewDate = false;
        this.viewSource = true;
        this.viewDestination = false;
        this.searchByTruckNo = false;
        this.searchBySupplierName = false;
        this.selectSourceMain = true;
        this.selectSourceIndividual = false;
        this.dtTriggerTruckPerf = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //for datatable ends
        this.isLoggedIn = true;
        this.address = null;
        this.showSpinnerForAction = false;
        this.agentDtoOptionSourceStationAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_12__["AgentDetailsDto"]();
        this.agentDtoSourceStation = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_12__["AgentDetailsDto"]();
        this.sourceStationTA = [];
        this.focusSourceStationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchSourceStation = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceStationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.sourceStationTA
                : _this.sourceStationTA.filter(function (v) { return v.mainBookStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSourceStation = function (x) { return x.mainBookStations; };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
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
            this.getSourceDetails();
        }
    }
    PerformanceReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    PerformanceReportComponent.prototype.ngOnInit = function () {
        this.dtOptionsTruckPerf = {
            dom: 'Bfrtip',
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
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 380,
            "scrollCollapse": true,
            "paging": true,
            "info": true,
        };
    };
    PerformanceReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerTruckPerf.next();
    };
    PerformanceReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    PerformanceReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerTruckPerf.unsubscribe();
        //this.onDestroyUnsubscribtionSmry.unsubscribe();
    };
    PerformanceReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    PerformanceReportComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'hireslipNumber') {
            this.searchByHireslipNo = true;
            this.searchByDestination = false;
            this.viewDate = false;
            this.viewSource = true;
            this.viewDestination = false;
            this.searchByTruckNo = false;
            this.searchBySupplierName = false;
            this.selectSourceMain = true;
            this.selectSourceIndividual = false;
        }
        else if (searchBy === 'destination') {
            this.searchByHireslipNo = false;
            this.searchByDestination = true;
            this.viewDate = true;
            this.viewSource = true;
            this.viewDestination = true;
            this.searchByTruckNo = false;
            this.searchBySupplierName = false;
            this.selectSourceMain = true;
            this.selectSourceIndividual = false;
        }
        else if (searchBy === 'truckNumber') {
            this.searchByHireslipNo = false;
            this.searchByDestination = false;
            this.viewDate = true;
            this.viewSource = false;
            this.viewDestination = false;
            this.searchByTruckNo = true;
            this.searchBySupplierName = false;
            this.selectSourceMain = false;
            this.selectSourceIndividual = false;
        }
        else if (searchBy === 'supplierName') {
            this.searchByHireslipNo = false;
            this.searchByDestination = false;
            this.viewDate = true;
            this.viewSource = false;
            this.viewDestination = true;
            this.searchByTruckNo = false;
            this.searchBySupplierName = true;
            this.selectSourceMain = false;
            this.selectSourceIndividual = false;
        }
        else {
            this.searchByHireslipNo = false;
            this.searchByDestination = false;
            this.viewDate = false;
            this.viewSource = false;
            this.viewDestination = false;
            this.searchByTruckNo = false;
            this.searchBySupplierName = false;
            this.selectSourceMain = false;
            this.selectSourceIndividual = false;
        }
    };
    PerformanceReportComponent.prototype.selectSourceMode = function (selectSource) {
        if (selectSource === 'mainSource') {
            this.selectSourceMain = true;
            this.selectSourceIndividual = false;
        }
        else if (selectSource === 'individualSource') {
            this.selectSourceMain = false;
            this.selectSourceIndividual = true;
        }
        else {
            this.selectSourceMain = false;
            this.selectSourceIndividual = false;
        }
    };
    PerformanceReportComponent.prototype.clickListnerForSourcStation = function (e, fubi) {
        this.modelSourceStation = e.item;
        $("#sourceStationId").val(this.modelSourceStation.mainBookStations);
    };
    PerformanceReportComponent.prototype.getSourceDataDetails = function () {
        this.agentDtoSourceStation = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_12__["AgentDetailsDto"]();
        this.agentDtoSourceStation.companyId = this.userDataDtoReturnSession.companyId;
    };
    PerformanceReportComponent.prototype.getSourceDetails = function () {
        var _this = this;
        this.getSourceDataDetails();
        this.showSpinnerForAction = true;
        this.masterReadService.getMainBookingStationsDetails(this.agentDtoSourceStation).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.sourceStationTA = [];
                _this.agentDtoOptionSourceStation = [];
                _this.agentDtoOptionSourceStation = response;
                _this.agentDtoOptionSourceStationAll.mainBookStations = "All";
                _this.sourceStationTA.push(_this.agentDtoOptionSourceStationAll);
                for (var i = 0; i < _this.agentDtoOptionSourceStation.length; i++) {
                    _this.sourceStationTA.push(_this.agentDtoOptionSourceStation[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.sourceStationTA = [];
                _this.agentDtoOptionSourceStation = [];
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Stock At Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PerformanceReportComponent.prototype, "dtElements", void 0);
    PerformanceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance-report',
            template: __webpack_require__(/*! ./performance-report.component.html */ "./src/app/report/truck-report/performance-report/performance-report.component.html"),
            styles: [__webpack_require__(/*! ./performance-report.component.css */ "./src/app/report/truck-report/performance-report/performance-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"], src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__["MemoReport"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], PerformanceReportComponent);
    return PerformanceReportComponent;
}());



/***/ }),

/***/ "./src/app/report/truck-report/truck-owner-declaration-report/truck-owner-declaration-report.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/report/truck-report/truck-owner-declaration-report/truck-owner-declaration-report.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3RydWNrLXJlcG9ydC90cnVjay1vd25lci1kZWNsYXJhdGlvbi1yZXBvcnQvdHJ1Y2stb3duZXItZGVjbGFyYXRpb24tcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3RydWNrLXJlcG9ydC90cnVjay1vd25lci1kZWNsYXJhdGlvbi1yZXBvcnQvdHJ1Y2stb3duZXItZGVjbGFyYXRpb24tcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/report/truck-report/truck-owner-declaration-report/truck-owner-declaration-report.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/report/truck-report/truck-owner-declaration-report/truck-owner-declaration-report.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Truck Owner Declaration Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"destination\">Source and Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"panNumber\">Pan Number</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"truckNumber\">Truck Number</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"supplierName\">Supplier Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByDestAndSrc\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"agra\">Agra</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByDestAndSrc\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByPanNo\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"panNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pan Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByTruckNo\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"truckNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchBySupplierName\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"supplierName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Supplier Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Supplier Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">A C Traders</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">A P Transport</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">A S Road Carrier</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"uploadBy\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Upload By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-upload\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"uploadByPanNumber\" selected>Pan Number</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"uploadByTruckNumber\">Truck Number</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTruckOwnerDeclarationRpt\" [dtTrigger]=\"dtTriggerTruckOwnerDeclarationRpt\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Pan No.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Payment Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hire Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Owner Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Truck No.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Supplier Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hire Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>TDS (Y/N)</th>\n\t\t\t\t\t\t\t\t\t\t<th>TDS Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>TDS Percent</th>\n\t\t\t\t\t\t\t\t\t\t<th>View Image</th>\n\t\t\t\t\t\t\t\t\t\t<th>Re-Upload Image</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remove Image</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let truckOwnerData of truckOwnerDeclarationRptDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.panNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.paymentDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.hireDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.ownerName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.truckNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.supplierName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.source }} }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.destination }} }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.hireAmount }} }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.tdsYesNo }} }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.tdsAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.tdsPercent }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.viewImage }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.reUploadImage }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ truckOwnerData.removeImage }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/truck-report/truck-owner-declaration-report/truck-owner-declaration-report.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/report/truck-report/truck-owner-declaration-report/truck-owner-declaration-report.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: TruckOwnerDeclarationReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckOwnerDeclarationReportComponent", function() { return TruckOwnerDeclarationReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
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

//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


var TruckOwnerDeclarationReportComponent = /** @class */ (function () {
    function TruckOwnerDeclarationReportComponent(truckOwnerDeclarationRpt) {
        this.truckOwnerDeclarationRpt = truckOwnerDeclarationRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.searchByDestAndSrc = true;
        this.searchByPanNo = false;
        this.searchByTruckNo = false;
        this.searchBySupplierName = false;
        this.dtTriggerTruckOwnerDeclarationRpt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    TruckOwnerDeclarationReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    TruckOwnerDeclarationReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsTruckOwnerDeclarationRpt = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Pan No.',
                    data: 'panNo'
                },
                {
                    title: 'Payment Date',
                    data: 'paymentDate'
                },
                {
                    title: 'Hire Date',
                    data: 'hireDate'
                },
                {
                    title: 'Owner Name',
                    data: 'ownerName'
                },
                {
                    title: 'Truck No.',
                    data: 'truckNo'
                },
                {
                    title: 'Supplier Name',
                    data: 'supplierName'
                }, {
                    title: 'Source',
                    data: 'source'
                }, {
                    title: 'Destination',
                    data: 'destination'
                }, {
                    title: 'Hire Amount',
                    data: 'hireAmount'
                }, {
                    title: 'TDS (Y/N)',
                    data: 'tdsYesNo'
                }, {
                    title: 'TDS Amount',
                    data: 'tdsAmount'
                }, {
                    title: 'TDS Percent',
                    data: 'tdsPercent'
                }, {
                    title: 'View Image',
                    data: 'viewImage'
                }, {
                    title: 'Re-Upload Image',
                    data: 'reUploadImage'
                }, {
                    title: 'Remove Image',
                    data: 'removeImage'
                }
            ],
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
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.gettingDataFrmServiceFrSmryTable = this.truckOwnerDeclarationRpt.getSummaryData();
        this.onDestroyUnsubscribtionSmry = this.gettingDataFrmServiceFrSmryTable.subscribe(function (data) {
            _this.truckOwnerDeclarationRptDataList = data['data'];
            _this.dtTriggerTruckOwnerDeclarationRpt.next();
        });
        //the below code is for the getting data through json ends
    };
    TruckOwnerDeclarationReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerTruckOwnerDeclarationRpt.unsubscribe();
        this.onDestroyUnsubscribtionSmry.unsubscribe();
    };
    TruckOwnerDeclarationReportComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'destination') {
            this.searchByDestAndSrc = true;
            this.searchByPanNo = false;
            this.searchByTruckNo = false;
            this.searchBySupplierName = false;
        }
        else if (viewType === 'panNumber') {
            this.searchByDestAndSrc = false;
            this.searchByPanNo = true;
            this.searchByTruckNo = false;
            this.searchBySupplierName = false;
        }
        else if (viewType === 'truckNumber') {
            this.searchByDestAndSrc = false;
            this.searchByPanNo = false;
            this.searchByTruckNo = true;
            this.searchBySupplierName = false;
        }
        else if (viewType === 'supplierName') {
            this.searchByDestAndSrc = false;
            this.searchByPanNo = false;
            this.searchByTruckNo = false;
            this.searchBySupplierName = true;
        }
        else {
            this.searchByDestAndSrc = false;
            this.searchByPanNo = false;
            this.searchByTruckNo = false;
            this.searchBySupplierName = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    TruckOwnerDeclarationReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TruckOwnerDeclarationReportComponent.prototype, "dtElements", void 0);
    TruckOwnerDeclarationReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truck-owner-declaration-report',
            template: __webpack_require__(/*! ./truck-owner-declaration-report.component.html */ "./src/app/report/truck-report/truck-owner-declaration-report/truck-owner-declaration-report.component.html"),
            styles: [__webpack_require__(/*! ./truck-owner-declaration-report.component.css */ "./src/app/report/truck-report/truck-owner-declaration-report/truck-owner-declaration-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], TruckOwnerDeclarationReportComponent);
    return TruckOwnerDeclarationReportComponent;
}());



/***/ }),

/***/ "./src/app/report/truck-report/truck-report.module.ts":
/*!************************************************************!*\
  !*** ./src/app/report/truck-report/truck-report.module.ts ***!
  \************************************************************/
/*! exports provided: TruckReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckReportModule", function() { return TruckReportModule; });
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
/* harmony import */ var src_app_report_truck_report_truck_report_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/truck-report/truck-report.routing */ "./src/app/report/truck-report/truck-report.routing.ts");
/* harmony import */ var src_app_report_truck_report_hire_details_by_destination_hire_details_by_destination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/truck-report/hire-details-by-destination/hire-details-by-destination.component */ "./src/app/report/truck-report/hire-details-by-destination/hire-details-by-destination.component.ts");
/* harmony import */ var src_app_report_truck_report_performance_report_performance_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/truck-report/performance-report/performance-report.component */ "./src/app/report/truck-report/performance-report/performance-report.component.ts");
/* harmony import */ var src_app_report_truck_report_truck_rpt_truck_rpt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/truck-report/truck-rpt/truck-rpt.component */ "./src/app/report/truck-report/truck-rpt/truck-rpt.component.ts");
/* harmony import */ var src_app_report_truck_report_truck_owner_declaration_report_truck_owner_declaration_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/report/truck-report/truck-owner-declaration-report/truck-owner-declaration-report.component */ "./src/app/report/truck-report/truck-owner-declaration-report/truck-owner-declaration-report.component.ts");
/* harmony import */ var src_app_report_truck_report_halt_and_dispatched_details_halt_and_dispatched_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/report/truck-report/halt-and-dispatched-details/halt-and-dispatched-details.component */ "./src/app/report/truck-report/halt-and-dispatched-details/halt-and-dispatched-details.component.ts");
/* harmony import */ var src_app_report_truck_report_non_availability_of_truck_non_availability_of_truck_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/report/truck-report/non-availability-of-truck/non-availability-of-truck-report.component */ "./src/app/report/truck-report/non-availability-of-truck/non-availability-of-truck-report.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends





$;



var TruckReportModule = /** @class */ (function () {
    function TruckReportModule() {
    }
    TruckReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_truck_report_truck_report_routing__WEBPACK_IMPORTED_MODULE_10__["TruckReportRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"]],
            declarations: [
                src_app_report_truck_report_hire_details_by_destination_hire_details_by_destination_component__WEBPACK_IMPORTED_MODULE_11__["HireDetailsByDestinationComponent"],
                src_app_report_truck_report_performance_report_performance_report_component__WEBPACK_IMPORTED_MODULE_12__["PerformanceReportComponent"],
                src_app_report_truck_report_truck_rpt_truck_rpt_component__WEBPACK_IMPORTED_MODULE_13__["TruckReportComponent"],
                src_app_report_truck_report_truck_owner_declaration_report_truck_owner_declaration_report_component__WEBPACK_IMPORTED_MODULE_14__["TruckOwnerDeclarationReportComponent"],
                src_app_report_truck_report_halt_and_dispatched_details_halt_and_dispatched_details_component__WEBPACK_IMPORTED_MODULE_15__["HaltAndDispatchedDetailsComponent"],
                src_app_report_truck_report_non_availability_of_truck_non_availability_of_truck_report_component__WEBPACK_IMPORTED_MODULE_16__["NonAvailabilityOfTruckReportComponent"],
            ]
        })
    ], TruckReportModule);
    return TruckReportModule;
}());



/***/ }),

/***/ "./src/app/report/truck-report/truck-report.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/report/truck-report/truck-report.routing.ts ***!
  \*************************************************************/
/*! exports provided: TruckReportRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckReportRoutes", function() { return TruckReportRoutes; });
/* harmony import */ var src_app_report_truck_report_hire_details_by_destination_hire_details_by_destination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/report/truck-report/hire-details-by-destination/hire-details-by-destination.component */ "./src/app/report/truck-report/hire-details-by-destination/hire-details-by-destination.component.ts");
/* harmony import */ var src_app_report_truck_report_performance_report_performance_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report/truck-report/performance-report/performance-report.component */ "./src/app/report/truck-report/performance-report/performance-report.component.ts");
/* harmony import */ var src_app_report_truck_report_truck_rpt_truck_rpt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/report/truck-report/truck-rpt/truck-rpt.component */ "./src/app/report/truck-report/truck-rpt/truck-rpt.component.ts");
/* harmony import */ var src_app_report_truck_report_truck_owner_declaration_report_truck_owner_declaration_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/report/truck-report/truck-owner-declaration-report/truck-owner-declaration-report.component */ "./src/app/report/truck-report/truck-owner-declaration-report/truck-owner-declaration-report.component.ts");
/* harmony import */ var src_app_report_truck_report_halt_and_dispatched_details_halt_and_dispatched_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/report/truck-report/halt-and-dispatched-details/halt-and-dispatched-details.component */ "./src/app/report/truck-report/halt-and-dispatched-details/halt-and-dispatched-details.component.ts");
/* harmony import */ var src_app_report_truck_report_non_availability_of_truck_non_availability_of_truck_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/report/truck-report/non-availability-of-truck/non-availability-of-truck-report.component */ "./src/app/report/truck-report/non-availability-of-truck/non-availability-of-truck-report.component.ts");




$;


var TruckReportRoutes = [
    {
        path: '',
        children: [
            {
                path: 'hireDetailsByDestinationReport',
                component: src_app_report_truck_report_hire_details_by_destination_hire_details_by_destination_component__WEBPACK_IMPORTED_MODULE_0__["HireDetailsByDestinationComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'performanceReport',
                component: src_app_report_truck_report_performance_report_performance_report_component__WEBPACK_IMPORTED_MODULE_1__["PerformanceReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'truckReport',
                component: src_app_report_truck_report_truck_rpt_truck_rpt_component__WEBPACK_IMPORTED_MODULE_2__["TruckReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'truckOwnerDeclarationReport',
                component: src_app_report_truck_report_truck_owner_declaration_report_truck_owner_declaration_report_component__WEBPACK_IMPORTED_MODULE_3__["TruckOwnerDeclarationReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'haltAndDispatchedDetails',
                component: src_app_report_truck_report_halt_and_dispatched_details_halt_and_dispatched_details_component__WEBPACK_IMPORTED_MODULE_4__["HaltAndDispatchedDetailsComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'nonAvailabilityOfTruckReport',
                component: src_app_report_truck_report_non_availability_of_truck_non_availability_of_truck_report_component__WEBPACK_IMPORTED_MODULE_5__["NonAvailabilityOfTruckReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/report/truck-report/truck-rpt/truck-rpt.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/report/truck-report/truck-rpt/truck-rpt.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3RydWNrLXJlcG9ydC90cnVjay1ycHQvdHJ1Y2stcnB0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3RydWNrLXJlcG9ydC90cnVjay1ycHQvdHJ1Y2stcnB0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/report/truck-report/truck-rpt/truck-rpt.component.html":
/*!************************************************************************!*\
  !*** ./src/app/report/truck-report/truck-rpt/truck-rpt.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Truck Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"Daily Truck Rpt Station Wise\">Daily\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTruck Report(Station Wise)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Daily Truck Rpt Detail Wise\">Daily\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTruck Report(Detail)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Lorry Hire Rpt Wise\">Lorry Hire\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReport</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Supplier Rpt Wise\">Supplier Report</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Truck Invoice Rpt Wise\">Truck\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInvoice Report</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" placeholder=\"dd-mm-yyyy\" name=\"fromDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"dd-mm-yyyy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDate\" ngbDatepicker #toDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Date</label> <input id=\"date\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"dd-mm-yyyy\" name=\"dates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#dates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"dates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"supplierName\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Supplier Name</label> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Supplier Name</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">A C Traders</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">A P Transport</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">A S Road Carrier</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</select> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewSupplier\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Supplier Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"supplierName\" placeholder=\"Select Supplier Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#supplierName [formControl]=\"controlSupplierName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSupplierName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSupplierName=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(supplierNameOptions | filterSupplierName: controlSupplierName.value) as resultSupplierName\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSupplierName\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.supplierName\"> {{\n\t\t\t\t\t\t\t\t\t\t\toption.supplierName }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultSupplierName.length\">No result</app-option> </ng-container> </ng-template>\n\t\t\t\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"station\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Station Name</label> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Station</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</select> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Station Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toStationName\" placeholder=\"Select To Station\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toStationName [formControl]=\"controlToStationName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteToStationName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteToStationName=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(toStationNameOptions | filterDest: controlToStationName.value) as resultToStationName\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultToStationName\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.destination\"> {{\n\t\t\t\t\t\t\t\t\t\t\toption.destination}} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultToStationName.length\">No result</app-option> </ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewSource\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"source\" placeholder=\"Select To Station\" #source\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlFromStationName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSource=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(fromStationNameOptions | filterDestinationFrmSrc: controlFromStationName.value) as resultSource\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.source\"> {{ option.source}} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSource.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"mainSrc\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Source</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">ALL</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"andheri\">Andheri</option> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"getDetailsOnSearchBtnMethod()\">Search</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble starts -->\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"truckRptStationWiseTable\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Truck Report Station Wise</h6>\n\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDailyTruckRptStationWise\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDailyTruckRptStationWise\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Station</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Departure Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Departure Time</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Supplier</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Guarantee Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Kanta Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Freight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Hire</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lorry Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck Length</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Loaded By</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let dailyTruckRptStationWise of dailyTruckRptStationWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.toStation }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.departuredate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.departureTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.suppliername }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.gurWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.kantaWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.actWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.chargedWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.totalAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.totalhire }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.truckType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.trkLgth }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.loadedby }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ dailyTruckRptStationWise.remarks }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble ends -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable starts  -->\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"truckRptDetailWiseTable\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Truck Report Detail Wise</h6>\n\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDailyTruckRptDetail\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDailyTruckRptDetail\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Departure Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Departure Time</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Station</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Supplier Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Guarantee Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Kanta Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Hire</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lorry Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Loaded By</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let truckRptDetail of truckRptDetailDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.departuredate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.departureTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.toStation }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.suppliername }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.gurWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.kantaWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.actWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.chargedWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.totalhire }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.truckType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.loadedby }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckRptDetail.remarks }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable ends  -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable starts  -->\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"lorryHireRptTable\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Lorry Hire Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLorryHireRpt\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLorryHireRpt\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Station</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Hire Slip No.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lorry No.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Supplier</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Guarantee Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Kanta Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Hire</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Advance</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Departure Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let lorryHireRpt of lorryHireRptDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireRpt.toStation }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireRpt.hireslipnumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireRpt.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireRpt.suppliername }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireRpt.gurWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireRpt.kantaWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireRpt.totalhire }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireRpt.advance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireRpt.departuredate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\tthe third datatable ends  -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fourth datatable starts  -->\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"supplierRptTable\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Supplier Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSupplierRpt\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerSupplierRpt\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Supplier Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Invoice No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lorry Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Guarantee Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Kanta Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Hire</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Advance</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let supplierRpt of supplierRptDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ supplierRpt.suppliername }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ supplierRpt.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ supplierRpt.hireslipnumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ supplierRpt.invoicedate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ supplierRpt.truckType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ supplierRpt.gurWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ supplierRpt.kantaWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ supplierRpt.totalhire }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ supplierRpt.advance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fourth datatable ends  -->\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fifth datatable starts  -->\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"truckInvoiceRptTable\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Truck Invoice Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTruckInvoiceRpt\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTruckInvoiceRpt\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Invoice No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Article</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Guarantee Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let truckInvoiceRpt of truckInvoiceRptDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckInvoiceRpt.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckInvoiceRpt.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckInvoiceRpt.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckInvoiceRpt.gurWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckInvoiceRpt.actWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckInvoiceRpt.chargedWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckInvoiceRpt.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckInvoiceRpt.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckInvoiceRpt.toStation }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ truckInvoiceRpt.invoicedate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fifth datatable ends  -->\n\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/truck-report/truck-rpt/truck-rpt.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/report/truck-report/truck-rpt/truck-rpt.component.ts ***!
  \**********************************************************************/
/*! exports provided: TruckReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckReportComponent", function() { return TruckReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_SupplierDetails_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/SupplierDetails-dto */ "./src/app/dto/SupplierDetails-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_10__);
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

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


//for the select option with filter starts

//for the select option with filter ends






var TruckReportComponent = /** @class */ (function () {
    function TruckReportComponent(reportService, router, masterReadService) {
        var _this = this;
        this.reportService = reportService;
        this.router = router;
        this.masterReadService = masterReadService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.searchDate = true;
        this.viewDate = false;
        this.truckRptStationWiseTable = true;
        this.truckRptDetailWiseTable = false;
        this.lorryHireRptTable = false;
        this.supplierRptTable = false;
        this.truckInvoiceRptTable = false;
        this.viewSupplier = false;
        this.userRole = "Truck Rpt Show Src All";
        this.isLoggedIn = true;
        this.supplierDetailsDto = new src_app_dto_SupplierDetails_dto__WEBPACK_IMPORTED_MODULE_6__["SupplierDetailsDto"]();
        this.supplierNameAll = new src_app_dto_SupplierDetails_dto__WEBPACK_IMPORTED_MODULE_6__["SupplierDetailsDto"]();
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.hireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.fromStationArray = [];
        this.lrDtoFromStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.lrDtoFromStationAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.lrDtoToStationAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        //for the select option with filter starts
        this.controlSupplierName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlToStationName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlFromStationName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.dtTriggerDailyTruckRptStationWise = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerDailyTruckRptDetail = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerLorryHireRpt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerSupplierRpt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerTruckInvoiceRpt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getSupplierDetailsList = function () {
            _this.getSupplierDetails();
            _this.masterReadService.getSuplierMaster(_this.supplierDetailsDto).subscribe(function (response) {
                if (response) {
                    _this.supplierDetailsList = response;
                    _this.supplierNameOptions = _this.supplierDetailsList;
                    _this.supplierNameAll.supplierName = "ALL";
                    _this.supplierNameOptions.push(_this.supplierNameAll);
                    //                    this.dtTriggerSupplierDetails.next();
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Error",
                text: "Server Error While Getting Supplier Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getDestinationDetails = function () {
            _this.getDestinationMethod();
            _this.masterReadService.getDestinationForLREntryService(_this.lrDto).subscribe(function (response) {
                if (response) {
                    _this.toStationDetailsList = response;
                    _this.toStationNameOptions = _this.toStationDetailsList;
                    _this.lrDtoToStationAll.destination = "ALL";
                    _this.toStationNameOptions.push(_this.lrDtoToStationAll);
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Error",
                text: "Server Error While Getting To Station Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getFromStationDetailsList = function () {
            _this.masterReadService.getFromStationService(_this.lrDtoFromStation).subscribe(function (response) {
                if (response) {
                    _this.fromStationDetailsList = response;
                    _this.fromStationNameOptions = _this.fromStationDetailsList;
                    _this.lrDtoFromStationAll.source = "ALL";
                    _this.fromStationNameOptions.push(_this.lrDtoFromStationAll);
                    //                    this.dtTriggerSupplierDetails.next();
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Error",
                text: "Server Error While Getting Source Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getDailyTruckRptStationWiseList = function () {
            _this.reportService.getTruckReportDetailsService(_this.hireSlipDto).subscribe(function (response) {
                if (response) {
                    _this.dailyTruckRptStationWiseDataList = response;
                    //                    console.log( this.dailyTruckRptStationWiseDataList[0] );
                    _this.dtTriggerDailyTruckRptStationWise.next();
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Error",
                text: "Server Error While Getting Truck Report Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getDailyTruckRptDetailWiseList = function () {
            _this.reportService.getTruckReportDetailsService(_this.hireSlipDto).subscribe(function (response) {
                if (response) {
                    _this.truckRptDetailDataList = response;
                    //                    console.log( this.truckRptDetailDataList[0] );
                    _this.dtTriggerDailyTruckRptDetail.next();
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Error",
                text: "Server Error While Getting Truck Report Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getTruckRptLorryHireWiseDetailsList = function () {
            _this.reportService.getTruckReportDetailsService(_this.hireSlipDto).subscribe(function (response) {
                if (response) {
                    _this.lorryHireRptDataList = response;
                    //                    console.log( this.lorryHireRptDataList[0] );
                    _this.dtTriggerLorryHireRpt.next();
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Error",
                text: "Server Error While Getting Truck Report Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getTruckRptSupplierWiseDetailsList = function () {
            _this.reportService.getTruckReportDetailsService(_this.hireSlipDto).subscribe(function (response) {
                if (response) {
                    _this.supplierRptDataList = response;
                    //                    console.log( this.supplierRptDataList[0] );
                    _this.dtTriggerSupplierRpt.next();
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Error",
                text: "Server Error While Getting Truck Report Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getTruckRptInvoiceWiseDetailsList = function () {
            _this.reportService.getTruckReportDetailsService(_this.hireSlipDto).subscribe(function (response) {
                if (response) {
                    _this.truckInvoiceRptDataList = response;
                    //                    console.log( this.truckInvoiceRptDataList[0] );
                    _this.dtTriggerTruckInvoiceRpt.next();
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                title: "Error",
                text: "Server Error While Getting Truck Report Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
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
            this.getSupplierDetailsList();
            this.getDestinationDetails();
            this.getFromStationsMethod();
            this.truckReportStationWiseTable();
            this.truckReportDetailWiseTable();
            this.truckReportLorryHireWiseTable();
            this.truckReportSupplierWiseTable();
            this.truckReportInvoiceWiseTable();
            if (this.userRole == "Truck Rpt Show Src All" || this.userRole == "Truck Rpt Show Src Specific") {
                //                || this.userRole == ""
                this.viewSource = true;
            }
        }
    }
    TruckReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    TruckReportComponent.prototype.truckReportStationWiseTable = function () {
        //the first datatable starts
        this.dtOptionsDailyTruckRptStationWise = {
            //};
            //columns is used to for export and others starts
            //        columns: [
            //            {
            //                title: 'Truck No',
            //                data: 'truckNo'
            //            },
            //            {
            //                title: 'Station',
            //                data: 'station'
            //            },
            //            {
            //                title: 'Departure Date',
            //                data: 'departureDate'
            //            },
            //            {
            //                title: 'Departure Time',
            //                data: 'departureTime'
            //            },
            //            {
            //                title: 'Supplier',
            //                data: 'supplier'
            //            },
            //            {
            //                title: 'Guarantee Weight',
            //                data: 'guaranteeWeight'
            //            }, {
            //                title: 'Kanta Weight',
            //                data: 'kantaWeight'
            //            }, {
            //                title: 'Actual Weight',
            //                data: 'actualWeight'
            //            }, {
            //                title: 'Charged Weight',
            //                data: 'chargedWeight'
            //            }, {
            //                title: 'Freight',
            //                data: 'freight'
            //            }, {
            //                title: 'Total Hire',
            //                data: 'totalHire'
            //            }, {
            //                title: 'Lorry Type',
            //                data: 'lorryType'
            //            }, {
            //                title: 'Truck Length',
            //                data: 'truckLength'
            //            }, {
            //                title: 'Loaded By',
            //                data: 'loadedBy'
            //            }, {
            //                title: 'Remarks',
            //                data: 'remarks'
            //            }
            //        ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
                //                                      {
                //                                          extend: 'excel',
                //                                          text:      '<i class="fas fa-file-excel"> Excel</i>',
                //                                          titleAttr: 'Excel',
                //                                          exportOptions: {
                //                                              columns: ':visible'
                //                                          }
                //                                      },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    title: this.changeDataTableTitileForPrint(),
                    //                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
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
            "scrollY": 300,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
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
                //            var total = api
                //                .column( 5 )
                //                .data()
                //                .reduce( function( a, b ) {
                //                    return intVal( a ) + intVal( b );
                //                }, 0 );
                // Total over this page
                var pageTotal = api
                    .column(5)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(5).footer()).html(pageTotal);
                var pageTotals = api
                    .column(6)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(6).footer()).html(pageTotals);
                // Total over this page
                var pageTotal = api
                    .column(7)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(7).footer()).html(pageTotal);
                var pageTotals = api
                    .column(8)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(8).footer()).html(pageTotals);
                // Total over this page
                var pageTotal = api
                    .column(9)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(9).footer()).html(pageTotal);
                var pageTotals = api
                    .column(10)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(10).footer()).html(pageTotals);
                //                count starts
                var columnData = api
                    .column(0)
                    .data();
                // Update footer
                $(api.column(0).footer()).html(columnData.count());
                //                counts ends
            }
            //end footerCallback         
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            //scroll in datatable ends                          
        };
        //the first datatable ends
    };
    TruckReportComponent.prototype.truckReportDetailWiseTable = function () {
        //            the second datatable starts 
        this.dtOptionsDailyTruckRptDetail = {
            //};
            //columns is used to for export and others starts
            //            columns: [
            //                {
            //                    title: 'Truck No',
            //                    data: 'truckNo'
            //                },
            //                {
            //                    title: 'Departure Date',
            //                    data: 'departureDate'
            //                },
            //                {
            //                    title: 'Departure Time',
            //                    data: 'departureTime'
            //                },
            //                {
            //                    title: 'To Station',
            //                    data: 'toStation'
            //                },
            //                {
            //                    title: 'Supplier Name',
            //                    data: 'supplierName'
            //                },
            //                {
            //                    title: 'Guarantee Wt',
            //                    data: 'guaranteeWt'
            //                }, {
            //                    title: 'Kanta Wt',
            //                    data: 'kantaWt'
            //                }, {
            //                    title: 'Actual Wt',
            //                    data: 'actualWt'
            //                }, {
            //                    title: 'Charged Wt',
            //                    data: 'chargedWt'
            //                }, {
            //                    title: 'To Pay',
            //                    data: 'toPay'
            //                }, {
            //                    title: 'Paid',
            //                    data: 'paid'
            //                }, {
            //                    title: 'Total Hire',
            //                    data: 'totalHire'
            //                }, {
            //                    title: 'Lorry Type',
            //                    data: 'lorryType'
            //                }, {
            //                    title: 'Loaded By',
            //                    data: 'loadedBy'
            //                }, {
            //                    title: 'Remarks',
            //                    data: 'remarks'
            //                }
            //            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
                //                                          {
                //                                              extend: 'excel',
                //                                              text:      '<i class="fas fa-file-excel"> Excel</i>',
                //                                              titleAttr: 'Excel',
                //                                              exportOptions: {
                //                                                  columns: ':visible'
                //                                              }
                //                                          },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    title: this.changeDataTableTitileForPrint(),
                    //                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
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
            "scrollY": 300,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            //scroll in datatable ends
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
                //            var total = api
                //                .column( 5 )
                //                .data()
                //                .reduce( function( a, b ) {
                //                    return intVal( a ) + intVal( b );
                //                }, 0 );
                // Total over this page
                var pageTotal = api
                    .column(5)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(5).footer()).html(pageTotal);
                var pageTotals = api
                    .column(6)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(6).footer()).html(pageTotals);
                // Total over this page
                var pageTotal = api
                    .column(7)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(7).footer()).html(pageTotal);
                var pageTotals = api
                    .column(8)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(8).footer()).html(pageTotals);
                // Total over this page
                var pageTotal = api
                    .column(9)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(9).footer()).html(pageTotal);
                var pageTotals = api
                    .column(10)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(10).footer()).html(pageTotals);
                var pageTotals = api
                    .column(11)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(11).footer()).html(pageTotals);
                //                count starts
                var columnData = api
                    .column(0)
                    .data();
                // Update footer
                $(api.column(0).footer()).html(columnData.count());
                //                counts ends
            }
            //end footerCallback     
        };
        //the second datatable ends
    };
    TruckReportComponent.prototype.truckReportLorryHireWiseTable = function () {
        //the third datatable starts            
        this.dtOptionsLorryHireRpt = {
            //};
            //columns is used to for export and others starts
            //            columns: [
            //                {
            //                    title: 'Station',
            //                    data: 'station'
            //                },
            //                {
            //                    title: 'Hire Slip No.',
            //                    data: 'hireSlipNo'
            //                },
            //                {
            //                    title: 'Lorry No.',
            //                    data: 'lorryNo'
            //                },
            //                {
            //                    title: 'Supplier',
            //                    data: 'supplier'
            //                },
            //                {
            //                    title: 'Guarantee Wt',
            //                    data: 'guaranteeWt'
            //                },
            //                {
            //                    title: 'Kanta Wt',
            //                    data: 'kantaWt'
            //                }, {
            //                    title: 'Total Hire',
            //                    data: 'totalHire'
            //                }, {
            //                    title: 'Advance',
            //                    data: 'advance'
            //                }, {
            //                    title: 'Departure Date',
            //                    data: 'departureDate'
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
                    title: this.changeDataTableTitileForPrint(),
                    //                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: this.changeDataTableTitileForExcel(),
                    messageTop: this.chnageDataTableMessageTopExcel(),
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
            "scrollY": 300,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            //scroll in datatable ends
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
                //            var total = api
                //                .column( 5 )
                //                .data()
                //                .reduce( function( a, b ) {
                //                    return intVal( a ) + intVal( b );
                //                }, 0 );
                var pageTotals = api
                    .column(4)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(4).footer()).html(pageTotals);
                // Total over this page
                var pageTotal = api
                    .column(5)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(5).footer()).html(pageTotal);
                var pageTotals = api
                    .column(6)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(6).footer()).html(pageTotals);
                // Total over this page
                var pageTotal = api
                    .column(7)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(7).footer()).html(pageTotal);
                //                count starts
                var columnData = api
                    .column(1)
                    .data();
                // Update footer
                $(api.column(1).footer()).html(columnData.count());
                //                counts ends
            }
            //end footerCallback  
        };
        //the third datatable ends
    };
    TruckReportComponent.prototype.truckReportSupplierWiseTable = function () {
        //the fourth datatable starts
        this.dtOptionsSupplierRpt = {
            //};
            //columns is used to for export and others starts
            //            columns: [
            //                {
            //                    title: 'Supplier Name',
            //                    data: 'supplierName'
            //                },
            //                {
            //                    title: 'Truck No',
            //                    data: 'truckNo'
            //                },
            //                {
            //                    title: 'Invoice No',
            //                    data: 'invoiceNo'
            //                },
            //                {
            //                    title: 'Invoice Date',
            //                    data: 'invoiceDate'
            //                },
            //                {
            //                    title: 'Lorry Type',
            //                    data: 'lorryType'
            //                },
            //                {
            //                    title: 'Guarantee Weight',
            //                    data: 'guaranteeWeight'
            //                }, {
            //                    title: 'Kanta Weight',
            //                    data: 'kantaWeight'
            //                }, {
            //                    title: 'Total Hire',
            //                    data: 'totalHire'
            //                }, {
            //                    title: 'Advance',
            //                    data: 'advance'
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
                    title: this.changeDataTableTitileForPrint(),
                    //                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: this.changeDataTableTitileForExcel(),
                    messageTop: this.chnageDataTableMessageTopExcel(),
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
            "scrollY": 300,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            //scroll in datatable ends
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
                //            var total = api
                //                .column( 5 )
                //                .data()
                //                .reduce( function( a, b ) {
                //                    return intVal( a ) + intVal( b );
                //                }, 0 );
                // Total over this page
                var pageTotal = api
                    .column(5)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(5).footer()).html(pageTotal);
                var pageTotals = api
                    .column(6)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(6).footer()).html(pageTotals);
                // Total over this page
                var pageTotal = api
                    .column(7)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(7).footer()).html(pageTotal);
                var pageTotals = api
                    .column(8)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(8).footer()).html(pageTotals);
                //                count starts
                var columnData = api
                    .column(1)
                    .data();
                // Update footer
                $(api.column(1).footer()).html(columnData.count());
                //                counts ends
            }
            //end footerCallback 
        };
        //the fourth datatable ends
    };
    TruckReportComponent.prototype.truckReportInvoiceWiseTable = function () {
        //the fifth datatable starts 
        this.dtOptionsTruckInvoiceRpt = {
            //};
            //columns is used to for export and others starts
            //            columns: [
            //                {
            //                    title: 'Truck No',
            //                    data: 'truckNo'
            //                },
            //                {
            //                    title: 'Invoice No',
            //                    data: 'invoiceNo'
            //                },
            //                {
            //                    title: 'Article',
            //                    data: 'article'
            //                },
            //                {
            //                    title: 'Guarantee Weight',
            //                    data: 'guaranteeWeight'
            //                }, {
            //                    title: 'Actual Weight',
            //                    data: 'actualWeight'
            //                }, {
            //                    title: 'Charged Weight',
            //                    data: 'chargedWeight'
            //                },
            //                {
            //                    title: 'To Pay',
            //                    data: 'toPay'
            //                },
            //                {
            //                    title: 'Paid',
            //                    data: 'paid'
            //                }, {
            //                    title: 'Destination',
            //                    data: 'destination'
            //                }, {
            //                    title: 'Invoice Date',
            //                    data: 'invoiceDate'
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
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: this.changeDataTableTitileForExcel(),
                    messageTop: this.chnageDataTableMessageTopExcel(),
                    exportOptions: {
                        columns: ':visible'
                    }
                }, {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    title: this.changeDataTableTitileForPrint(),
                    //                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
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
            "scrollY": 300,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            //scroll in datatable ends
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
                //            var total = api
                //                .column( 5 )
                //                .data()
                //                .reduce( function( a, b ) {
                //                    return intVal( a ) + intVal( b );
                //                }, 0 );
                // Total over this page
                var pageTotal = api
                    .column(2)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(2).footer()).html(pageTotal);
                var pageTotal = api
                    .column(3)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(3).footer()).html(pageTotal);
                var pageTotal = api
                    .column(4)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(4).footer()).html(pageTotal);
                var pageTotal = api
                    .column(5)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(5).footer()).html(pageTotal);
                var pageTotals = api
                    .column(6)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(6).footer()).html(pageTotals);
                // Total over this page
                var pageTotal = api
                    .column(7)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(7).footer()).html(pageTotal);
                //                count starts
                var columnData = api
                    .column(1)
                    .data();
                // Update footer
                $(api.column(1).footer()).html(columnData.count());
                //                counts ends
            }
            //end footerCallback 
        };
        //the fifth datatable ends
    };
    TruckReportComponent.prototype.ngOnInit = function () {
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //first service starts 
        //        this.getDataServiceFrTruckRptStationTable = this.reportService.getSummaryData()
        //        this.onDestroyUnsubscribtionStation = this.getDataServiceFrTruckRptStationTable.subscribe( data => {
        //            this.dailyTruckRptStationWiseDataList = data['data'];
        //            this.dtTriggerDailyTruckRptStationWise.next();
        //        } );
        //first service ends
        //second service starts
        //        this.getDataServiceFrTruckRptDetailTable = this.reportService.getSummaryData()
        //        this.onDestroyUnsubscribtionDetail = this.getDataServiceFrTruckRptDetailTable.subscribe( data => {
        //            this.truckRptDetailDataList = data['data'];
        //            this.dtTriggerDailyTruckRptDetail.next();
        //        } );
        //second service ends
        //third service starts
        //        this.getDataServiceFrLorryHireRptTable = this.reportService.getSummaryData()
        //        this.onDestroyUnsubscribtionTruckRpt = this.getDataServiceFrLorryHireRptTable.subscribe( data => {
        //            this.lorryHireRptDataList = data['data'];
        //            this.dtTriggerLorryHireRpt.next();
        //        } );
        //third service ends
        //fourth service starts
        //        this.getDataServiceFrSupplierRptTable = this.reportService.getSummaryData()
        //        this.onDestroyUnsubscribtionSupplier = this.getDataServiceFrSupplierRptTable.subscribe( data => {
        //            this.supplierRptDataList = data['data'];
        //            this.dtTriggerSupplierRpt.next();
        //        } );
        //fourth service ends
        //fifth service starts
        //        this.getDataServiceFrTruckInvoiceRptTable = this.reportService.getSummaryData()
        //        this.onDestroyUnsubscribtionTruckInvoice = this.getDataServiceFrTruckInvoiceRptTable.subscribe( data => {
        //            this.truckInvoiceRptDataList = data['data'];
        //            this.dtTriggerTruckInvoiceRpt.next();
        //        } );
        //fifth service ends
    };
    TruckReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDailyTruckRptStationWise.unsubscribe();
        this.dtTriggerDailyTruckRptDetail.unsubscribe();
        this.dtTriggerLorryHireRpt.unsubscribe();
        this.dtTriggerSupplierRpt.unsubscribe();
        this.dtTriggerTruckInvoiceRpt.unsubscribe();
        //        this.onDestroyUnsubscribtionStation.unsubscribe();
        //        this.onDestroyUnsubscribtionDetail.unsubscribe();
        //        this.onDestroyUnsubscribtionTruckRpt.unsubscribe();
        //        this.onDestroyUnsubscribtionSupplier.unsubscribe();
        //        this.onDestroyUnsubscribtionTruckInvoice.unsubscribe();
    };
    TruckReportComponent.prototype.getDateInfoForPrint = function () {
        this.selectedSearchBy = $("#searchBy").val();
        if (this.selectedSearchBy == 'Daily Truck Rpt Station Wise') {
            this.pageTitle = "Daily Truck Report";
        }
        else if (this.selectedSearchBy == 'Daily Truck Rpt Detail Wise') {
            this.pageTitle = "Daily Truck Report(Detail)";
        }
        else if (this.selectedSearchBy == 'Lorry Hire Rpt Wise') {
            this.pageTitle = "Lorry Hire Report";
        }
        else if (this.selectedSearchBy == 'Supplier Rpt Wise') {
            this.pageTitle = "Supplier Report";
        }
        else if (this.selectedSearchBy == 'Truck Invoice Rpt Wise') {
            this.pageTitle = "Truck Invoice Report";
        }
        if (this.selectedSearchBy == 'Daily Truck Rpt Station Wise' || this.selectedSearchBy == "Daily Truck Rpt Detail Wise") {
            this.dateNeedToAdd = '<h6 style="font-weight:bold;font-size:16px;">Date: <span style="font-weight:400;">' + this.selectedDate + '</span></h6>';
        }
        else if (this.selectedSearchBy == 'Lorry Hire Rpt Wise' || this.selectedSearchBy == 'Supplier Rpt Wise' || this.selectedSearchBy == 'Truck Invoice Rpt Wise') {
            this.dateNeedToAdd = '<h6 style="font-weight:bold;font-size:16px;">From Period: <span style="font-weight:400;">' + this.selectedFromDate + '</span></h6>'
                + '<h6 style="font-weight:bold;font-size:16px;">To Period: <span style="font-weight:400;">' + this.selectedToDate + '</span></h6>';
        }
        else {
            this.dateNeedToAdd = '<h6 style="font-size:16px;">No Date Found</h6>';
        }
        return this.dateNeedToAdd;
    };
    TruckReportComponent.prototype.changeDataTableTitileForPrint = function () {
        this.dateToAddInPrint = this.getDateInfoForPrint();
        return '<div class="row">'
            + '<div class="col-md-7">'
            + '<img src="assets/images/srdLogisticPrintLogo.png">'
            + '</div>'
            + '<div class="col-md-5">'
            + '<p style="font-size:16px;">' + this.userDataDtoReturnSession.addressId
            + '</p>'
            + '</div>'
            + '</div>'
            + '<div class="row"  style="text-align:right">'
            + '<div class="col-md-8">'
            + '<h5 style="border-bottom:1px solid;display:inline-block;"><span style="font-weight:bold">' + this.pageTitle + '</span></h5>'
            + '</div>'
            + '<div class="col-md-4">'
            + this.dateToAddInPrint
            + '</div>'
            + '</div>';
    };
    //    chnageDataTableMessageTop() {
    //        return '<span>'
    //            + '<div style="text-align:center;">'
    //            + '<h5 style="border-bottom:1px solid;display:inline-block;"><span style="font-weight:bold">' + this.pageTitle + '</span></h5>'
    //            + '<h6 style="font-weight:bold;">'
    //            + "Date: " + '<span style="font-weight:400;">' + this.todayDate + '</span>'
    //            + '</h6>'
    //            + '</div>'
    //            + '</span>';
    //
    //    }
    TruckReportComponent.prototype.changeDataTableTitileForExcel = function () {
        return "SRDlogo"
            + this.userDataDtoReturnSession.addressId;
    };
    TruckReportComponent.prototype.chnageDataTableMessageTopExcel = function () {
        return +this.pageTitle
            + this.selectedFromDate
            + "                 "
            + this.selectedToDate;
    };
    TruckReportComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'Daily Truck Rpt Station Wise') {
            this.searchDate = true;
            this.viewDate = false;
            this.viewSupplier = false;
            this.truckRptStationWiseTable = true;
            this.truckRptDetailWiseTable = false;
            this.lorryHireRptTable = false;
            this.supplierRptTable = false;
            this.truckInvoiceRptTable = false;
        }
        else if (searchBy === 'Daily Truck Rpt Detail Wise') {
            this.searchDate = true;
            this.viewDate = false;
            this.viewSupplier = false;
            this.truckRptStationWiseTable = false;
            this.truckRptDetailWiseTable = true;
            this.lorryHireRptTable = false;
            this.supplierRptTable = false;
            this.truckInvoiceRptTable = false;
        }
        else if (searchBy === 'Lorry Hire Rpt Wise') {
            this.searchDate = false;
            this.viewDate = true;
            this.viewSupplier = false;
            this.truckRptStationWiseTable = false;
            this.truckRptDetailWiseTable = false;
            this.lorryHireRptTable = true;
            this.supplierRptTable = false;
            this.truckInvoiceRptTable = false;
        }
        else if (searchBy === 'Supplier Rpt Wise') {
            this.searchDate = false;
            this.viewDate = true;
            this.viewSupplier = true;
            this.truckRptStationWiseTable = false;
            this.truckRptDetailWiseTable = false;
            this.lorryHireRptTable = false;
            this.supplierRptTable = true;
            this.truckInvoiceRptTable = false;
        }
        else if (searchBy === 'Truck Invoice Rpt Wise') {
            this.searchDate = false;
            this.viewDate = true;
            this.viewSupplier = false;
            this.truckRptStationWiseTable = false;
            this.truckRptDetailWiseTable = false;
            this.lorryHireRptTable = false;
            this.supplierRptTable = false;
            this.truckInvoiceRptTable = true;
        }
        else {
            this.searchDate = false;
            this.viewDate = false;
            this.viewSupplier = false;
            this.truckRptStationWiseTable = false;
            this.truckRptDetailWiseTable = false;
            this.lorryHireRptTable = false;
            this.supplierRptTable = false;
            this.truckInvoiceRptTable = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    TruckReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    TruckReportComponent.prototype.getSupplierDetails = function () {
        this.supplierDetailsDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    TruckReportComponent.prototype.getDestinationMethod = function () {
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDto.mode = "Other";
    };
    TruckReportComponent.prototype.getFromStationsMethod = function () {
        if (this.userRole == "Truck Rpt Show Src Specific"
            && this.userDataDtoReturnSession.stationList != null) {
            //            alert( "inside of IF" );
            //            console.log( this.userDataDtoReturnSession.stationList );
            this.fromStation = this.userDataDtoReturnSession.stationList;
            for (var i = 0; i < this.fromStation.length; i++) {
                this.fromStationArray.push(this.fromStation[i]);
            }
            //            this.fromStationNameOptions.list = this.fromStationArray;
            this.lrDtoFromStationAll.source = "ALL";
            this.fromStationNameOptions.push(this.lrDtoFromStationAll);
            //            console.log( "final we get>> " + this.fromStationNameOptions.list );
        }
        else {
            //            alert( "inside of ELSE" );
            this.lrDtoFromStation.mode = "notStmtInvRpt";
            this.lrDtoFromStation.companyId = this.userDataDtoReturnSession.companyId;
            this.getFromStationDetailsList();
        }
    };
    TruckReportComponent.prototype.getDetailsOnSearchBtnMethod = function () {
        this.selectedSearchBy = $("#searchBy").val();
        this.selectedToStations = $("#toStationName").val();
        this.selectedSource = $("#source").val();
        this.selectedDate = $("#date").val();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedSupplier = $("#supplierName").val();
        //        if ( this.userDataDtoReturnSession.stationList.length != 0 ) {
        //            this.hireSlipDto.stationList = this.userDataDtoReturnSession.stationList;
        //        }
        this.hireSlipDto.stationList = this.userDataDtoReturnSession.stationList;
        this.hireSlipDto.userRights = this.userRole;
        //Mode sets starts here
        if (this.selectedSearchBy == "Daily Truck Rpt Station Wise") {
            if (this.selectedToStations == "ALL") {
                this.hireSlipDto.mode = "station";
            }
            else if (this.selectedToStations != "ALL") {
                this.hireSlipDto.mode = "stationNotAll";
            }
        }
        else if (this.selectedSearchBy == "Daily Truck Rpt Detail Wise") {
            if (this.selectedToStations == "ALL") {
                this.hireSlipDto.mode = "detail";
            }
            else if (this.selectedToStations != "ALL") {
                this.hireSlipDto.mode = "detailNotAll";
            }
        }
        else if (this.selectedSearchBy == "Lorry Hire Rpt Wise") {
            if (this.selectedToStations == "ALL") {
                this.hireSlipDto.mode = "hire";
            }
            else if (this.selectedToStations != "ALL") {
                this.hireSlipDto.mode = "hireNotAll";
            }
        }
        else if (this.selectedSearchBy == "Supplier Rpt Wise") {
            if (this.selectedToStations == "ALL" && this.selectedSupplier == "ALL") {
                this.hireSlipDto.mode = "supBothAll";
            }
            else if (this.selectedToStations != "ALL" && this.selectedSupplier == "ALL") {
                this.hireSlipDto.mode = "supSupAll";
            }
            else if (this.selectedToStations == "ALL" && this.selectedSupplier != "ALL") {
                this.hireSlipDto.mode = "supDesAll";
            }
            else if (this.selectedToStations != "ALL" && this.selectedSupplier != "ALL") {
                this.hireSlipDto.mode = "supBothNotAll";
            }
        }
        else if (this.selectedSearchBy == "Truck Invoice Rpt Wise") {
            if (this.selectedToStations == "ALL") {
                this.hireSlipDto.mode = "invoice";
            }
            else if (this.selectedToStations != "ALL") {
                this.hireSlipDto.mode = "invoiceNotAll";
            }
        }
        //Mode sets ends here
        //data sets starts here
        if (this.hireSlipDto.mode == "station" || this.hireSlipDto.mode == "stationNotAll" || this.hireSlipDto.mode == "detail" || this.hireSlipDto.mode == "detailNotAll") {
            if (this.selectedDate == null) {
                sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                    title: "Alert",
                    text: "Date Field is Mandatory",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                this.hireSlipDto.date = this.selectedDate;
            }
            this.hireSlipDto.toStation = this.selectedToStations;
            this.hireSlipDto.fromStation = this.userDataDtoReturnSession.office;
        }
        else if (this.hireSlipDto.mode == "hire" || this.hireSlipDto.mode == "hireNotAll") {
            if (this.selectedFromDate == null || this.selectedToDate == null) {
                sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                    title: "Alert",
                    text: "From Date,To Date Are Mandatory Fields",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                this.hireSlipDto.fromDate = this.selectedFromDate;
                this.hireSlipDto.toDate = this.selectedToDate;
            }
            this.hireSlipDto.toStation = this.selectedToStations;
            this.hireSlipDto.fromStation = this.userDataDtoReturnSession.office;
        }
        else if (this.hireSlipDto.mode == "supBothAll" || this.hireSlipDto.mode == "supSupAll" || this.hireSlipDto.mode == "supDesAll" || this.hireSlipDto.mode == "supBothNotAll") {
            if (this.selectedFromDate == null || this.selectedToDate == null) {
                sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                    title: "Alert",
                    text: "From Date,To Date Are Mandatory Fields",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                this.hireSlipDto.fromDate = this.selectedFromDate;
                this.hireSlipDto.toDate = this.selectedToDate;
            }
            this.hireSlipDto.suppliername = this.selectedSupplier;
            this.hireSlipDto.toStation = this.selectedToStations;
            this.hireSlipDto.fromStation = this.userDataDtoReturnSession.office;
        }
        else if (this.hireSlipDto.mode == "invoice" || this.hireSlipDto.mode == "invoiceNotAll") {
            if (this.selectedFromDate == null || this.selectedToDate == null) {
                sweetalert__WEBPACK_IMPORTED_MODULE_10___default()({
                    title: "Alert",
                    text: "From Date,To Date Are Mandatory Fields",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                this.hireSlipDto.fromDate = this.selectedFromDate;
                this.hireSlipDto.toDate = this.selectedToDate;
            }
            this.hireSlipDto.toStation = this.selectedToStations;
            this.hireSlipDto.fromStation = this.userDataDtoReturnSession.office;
        }
        //data sets as per role starts here
        if (this.userRole == "Truck Rpt Show Src All" || this.userRole == "Truck Rpt Show Src Specific") {
            this.hireSlipDto.fromStation = this.selectedSource;
        }
        //data sets as per role ends here
        //data sets ends here
        //        service calling starts here
        if (this.hireSlipDto.mode == "station" || this.hireSlipDto.mode == "stationNotAll") {
            this.truckReportStationWiseTable();
            this.getDailyTruckRptStationWiseList();
        }
        else if (this.hireSlipDto.mode == "detail" || this.hireSlipDto.mode == "detailNotAll") {
            this.truckReportDetailWiseTable();
            this.getDailyTruckRptDetailWiseList();
        }
        else if (this.hireSlipDto.mode == "hire" || this.hireSlipDto.mode == "hireNotAll") {
            this.truckReportLorryHireWiseTable();
            this.getTruckRptLorryHireWiseDetailsList();
        }
        else if (this.hireSlipDto.mode == "supBothAll" || this.hireSlipDto.mode == "supSupAll" || this.hireSlipDto.mode == "supDesAll" || this.hireSlipDto.mode == "supBothNotAll") {
            this.truckReportSupplierWiseTable();
            this.getTruckRptSupplierWiseDetailsList();
        }
        else if (this.hireSlipDto.mode == "invoice" || this.hireSlipDto.mode == "invoiceNotAll") {
            this.truckReportInvoiceWiseTable();
            this.getTruckRptInvoiceWiseDetailsList();
        }
        //      service calling ends here
    };
    TruckReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    TruckReportComponent.prototype.clearAll = function () {
        this.controlSupplierName.reset();
        this.controlToStationName.reset();
        this.controlFromStationName.reset();
        $("#date").val('');
        $("#fromDate").val('');
        $("#toDate").val('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TruckReportComponent.prototype, "dtElements", void 0);
    TruckReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truck-report',
            template: __webpack_require__(/*! ./truck-rpt.component.html */ "./src/app/report/truck-report/truck-rpt/truck-rpt.component.html"),
            styles: [__webpack_require__(/*! ./truck-rpt.component.css */ "./src/app/report/truck-report/truck-rpt/truck-rpt.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"]])
    ], TruckReportComponent);
    return TruckReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-report-truck-report-truck-report-module.js.map