(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-report-statement-reports-statement-reports-module"],{

/***/ "./src/app/dataService/dest-stmt-report.ts":
/*!*************************************************!*\
  !*** ./src/app/dataService/dest-stmt-report.ts ***!
  \*************************************************/
/*! exports provided: DestStmtReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestStmtReport", function() { return DestStmtReport; });
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



var DestStmtReport = /** @class */ (function () {
    function DestStmtReport(http) {
        this.http = http;
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webDestStmtRpt;
    }
    DestStmtReport.prototype.chkAgentAutority = function (fortNightStmtDto) {
        return this.http.post(this._baseUrl + "/chkAgentAutorityApi", fortNightStmtDto);
    };
    DestStmtReport.prototype.getDebitNoteReportDetails = function (fortNightStmtDto) {
        return this.http.post(this._baseUrl + "/getDebitNoteReportDetailsApi", fortNightStmtDto);
    };
    DestStmtReport.prototype.getAmtRecFromAgentDetails = function (fortNightStmtDto) {
        return this.http.post(this._baseUrl + "/getAmtRecFromAgentDetailsApi", fortNightStmtDto);
    };
    DestStmtReport.prototype.getStmtVerificationDetails = function (fortNightStmtDto) {
        return this.http.post(this._baseUrl + "/getStmtVerificationDetailsApi", fortNightStmtDto);
    };
    DestStmtReport.prototype.getStmtVerificationDetailsLrs = function (lrDto) {
        return this.http.post(this._baseUrl + "/getStmtVerificationDetailsLrsApi", lrDto);
    };
    DestStmtReport.prototype.getStatementReportDetails = function (fortNightStmtDto) {
        return this.http.post(this._baseUrl + "/getStatementReportDetailsApi", fortNightStmtDto);
    };
    DestStmtReport.prototype.getBookingServiceTax = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBookingServiceTaxApi", lrDto);
    };
    DestStmtReport = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DestStmtReport);
    return DestStmtReport;
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

/***/ "./src/app/dataService/report-service.ts":
/*!***********************************************!*\
  !*** ./src/app/dataService/report-service.ts ***!
  \***********************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
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



var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
        //for Local
        //        private _baseUrl = "http://localhost:8080/srd/report/v1";
        //for QA
        //    private _baseUrl = "http://54.210.51.40:8080/srd/report/v1";
        //for Live
        //        private _baseUrl = "http://3.222.201.242:8080/srd/report/v1";
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webReport;
    }
    ReportService.prototype.getPaidRpt = function (lrDto) {
        return this.http.post(this._baseUrl + "/getPaidReportDetails", lrDto);
    };
    ReportService.prototype.getLorryHireStmtService = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getLorryHireStmtDetails", hireSlipDto);
    };
    ReportService.prototype.getSummaryData = function () {
        //return this.http.get<SupplierModel[]>(this._url);
        return this.http.get('./assets/data/lr-dispatch-booking-report.json');
    };
    ReportService.prototype.getDailyBookingReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getdailybookingreportdetails", lrDto);
    };
    ReportService.prototype.getLRIssueReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getlrissuereportdetails", lrDto);
    };
    ReportService.prototype.getLoaderPerformanceService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLoaderPerformanceDetails", lrDto);
    };
    ReportService.prototype.getStaffDetailsService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getStaffDetails", lrDto);
    };
    ReportService.prototype.getBookingStationsService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBookingStationsDetails", lrDto);
    };
    ReportService.prototype.getLocalTripDetailsService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLocalTripDetails", lrDto);
    };
    ReportService.prototype.getTruckReportDetailsService = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getTruckReportDetails", hireSlipDto);
    };
    ReportService.prototype.getHireslipNumberRpt = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/gethireslipnumberreport", hireSlipDto);
    };
    ReportService.prototype.getHireslipSummaryWiseRpt = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/gethireslipsummarywiserpt", hireSlipDto);
    };
    ReportService.prototype.getCashmemoDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getcashmemodetails", lrDto);
    };
    ReportService.prototype.getDummyInvoiceDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getdummyinvoicedetails", lrDto);
    };
    ReportService.prototype.getLocalTripsDetailsForLrEnquiry = function (lrDto) {
        return this.http.post(this._baseUrl + "/getlocaltripsdetailsforlrenquiry", lrDto);
    };
    ReportService.prototype.getLRsShortage = function (lrDto) {
        return this.http.post(this._baseUrl + "/getlrsshortage", lrDto);
    };
    ReportService.prototype.getLrEnquiryDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getlrenquirydetails", lrDto);
    };
    ReportService.prototype.getLrEnquiryStatus = function (lrDto) {
        return this.http.post(this._baseUrl + "/getlrenquirystatus", lrDto);
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

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

/***/ "./src/app/dto/LR-dto.ts":
/*!*******************************!*\
  !*** ./src/app/dto/LR-dto.ts ***!
  \*******************************/
/*! exports provided: LRDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LRDto", function() { return LRDto; });
/* harmony import */ var _TruckData_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TruckData-dto */ "./src/app/dto/TruckData-dto.ts");

var LRDto = /** @class */ (function () {
    function LRDto() {
        this.truckDataDto = new _TruckData_dto__WEBPACK_IMPORTED_MODULE_0__["TruckDataDto"]();
    }
    return LRDto;
}());



/***/ }),

/***/ "./src/app/report/statement-reports/invoice-report/invoice-report.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/report/statement-reports/invoice-report/invoice-report.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9zdGF0ZW1lbnQtcmVwb3J0cy9pbnZvaWNlLXJlcG9ydC9pbnZvaWNlLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/statement-reports/invoice-report/invoice-report.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/report/statement-reports/invoice-report/invoice-report.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Invoice Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"sourceWise\">Source Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"destinationWise\">Destination Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mainInvoice\">Main Invoice</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"cityWise\">City Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"agentWise\">Agent Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"departFrom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDate\" ngbDatepicker #toDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewSource\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"mainSrc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">ALL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"andheri\">Binnymills</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestination\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewStationInvoice\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"station\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Station</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mainStation\">Main Station</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"subStation\">Sub Station</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewCity\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"city\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select City</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"nagpur\">Nagpur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewAgent\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"station\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Booking Agent</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Booking Agent</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"agra\">Agra</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bawana\">Bawana</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"budhpur\">Budhpur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble starts -->\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSourceWise\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerSourceWise\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Station</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Main Agent</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let sourceWiseData of sourceWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ sourceWiseData.station }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ sourceWiseData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ sourceWiseData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ sourceWiseData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ sourceWiseData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ sourceWiseData.mainAgent }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble ends -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable starts  -->\n\n<!-- \t\t\t\t\t\t\t<div [hidden]=\"destSubStationTable\"> -->\n<!-- \t\t\t\t\t\t\t\t<table datatable -->\n<!-- \t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\" -->\n<!-- \t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDestSubStation\" -->\n<!-- \t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDestSubStation\"> -->\n\n<!-- \t\t\t\t\t\t\t\t\t<thead> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<tr> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<th>Sub Station</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<th>Total Lrs</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<th>Articles</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<th>Paid</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<th>Loaded By</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</tr> -->\n<!-- \t\t\t\t\t\t\t\t\t</thead> -->\n<!-- \t\t\t\t\t\t\t\t\t<tbody> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let destSubStationData of destSubStationDataList \"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.subStation }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.totalLrs }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.articles }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.actualWeight }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.chargedWeight }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.toPay }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.paid }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.loadedBy }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t</tr> -->\n\n\n<!-- \t\t\t\t\t\t\t\t\t\t<tr *ngIf = \"supList.length==0\">\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</tr>--> \n\n<!-- \t\t\t\t\t\t\t\t\t</tbody> -->\n<!-- \t\t\t\t\t\t\t\t</table> -->\n<!-- \t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable starts  -->\n\n\t\t\t\t\t\t\t<div [hidden]=\"!invoiceMainStationTable\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsInvoiceMainStation\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerInvoiceMainStation\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Total Lrs</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Less Amount</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let invoiceMainStationData of invoiceMainStationDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.invoiceDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.lessAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\tthe third datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fourth datatable starts  -->\n\n\t\t\t\t\t\t\t<div [hidden]=\"!invoiceSubStationTable\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsInvoiceSubStation\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerInvoiceSubStation\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Total Lrs</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Less Amt</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let invoiceSubStationData of invoiceSubStationDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.invoiceDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.lessAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fourth datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fifth datatable starts  -->\n\n\t\t\t\t\t\t\t<div [hidden]=\"!cityWiseTable\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCityWise\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCityWise\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Station</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let cityWiseData of cityWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ cityWiseData.station }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ cityWiseData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ cityWiseData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ cityWiseData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ cityWiseData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ cityWiseData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fifth datatable ends  -->\n\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/statement-reports/invoice-report/invoice-report.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/report/statement-reports/invoice-report/invoice-report.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InvoiceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceReportComponent", function() { return InvoiceReportComponent; });
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


var InvoiceReportComponent = /** @class */ (function () {
    function InvoiceReportComponent(invoiceReport) {
        this.invoiceReport = invoiceReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.viewSource = true;
        this.viewDestination = false;
        this.viewStationInvoice = false;
        this.viewCity = false;
        this.viewAgent = false;
        this.dtTriggerSourceWise = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //dtTriggerDestinationWise: Subject<any> = new Subject();
        this.dtTriggerInvoiceMainStation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerInvoiceSubStation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerCityWise = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    InvoiceReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    InvoiceReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        //the first datatable starts
        this.dtOptionsSourceWise = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Station',
                    data: 'station'
                },
                {
                    title: 'Actual Weight',
                    data: 'actualWeight'
                },
                {
                    title: 'Charged Weight',
                    data: 'chargedWeight'
                }, {
                    title: 'To Pay',
                    data: 'toPay'
                }, {
                    title: 'Paid',
                    data: 'paid'
                }, {
                    title: 'Main Agent',
                    data: 'mainAgent'
                }
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
                //            {
                //                extend: 'excel',
                //                text: '<i class="fas fa-file-excel"> Excel</i>',
                //                titleAttr: 'Excel',
                //                exportOptions: {
                //                    columns: ':visible'
                //                }
                //            },
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
        },
            //the first datatable ends
            //            the second datatable starts 
            /*this.dtOptionsDestinationWise = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Sub Station',
                        data: 'subStation'
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
                        title: 'Actual Weight',
                        data: 'actualWeight'
                    },
                    {
                        title: 'Charged Weight',
                        data: 'chargedWeight'
                    },
                    {
                        title: 'To Pay',
                        data: 'toPay'
                    }, {
                        title: 'Paid',
                        data: 'paid'
                    }, {
                        title: 'Loaded By',
                        data: 'loadedBy'
                    }
                ],
                //columns is used to for export and others endss
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
            /*buttons: [
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
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            //scroll in datatable ends

        },*/
            //the second datatable ends
            //the third datatable starts            
            this.dtOptionsInvoiceMainStation = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Invoice Number',
                        data: 'invoiceNumber'
                    },
                    {
                        title: 'Total Lrs',
                        data: 'totalLrs'
                    },
                    {
                        title: 'Invoice Date',
                        data: 'invoiceDate'
                    },
                    {
                        title: 'Articles',
                        data: 'articles'
                    },
                    {
                        title: 'Actual Weight',
                        data: 'actualWeight'
                    },
                    {
                        title: 'Charged Weight',
                        data: 'chargedWeight'
                    }, {
                        title: 'To Pay',
                        data: 'toPay'
                    }, {
                        title: 'Paid',
                        data: 'paid'
                    }, {
                        title: 'F O V',
                        data: 'fov'
                    }, {
                        title: 'Less Amount',
                        data: 'lessAmount'
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
            },
            //the third datatable ends
            //the fourth datatable starts
            this.dtOptionsInvoiceSubStation = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Invoice Number',
                        data: 'invoiceNumber'
                    },
                    {
                        title: 'Total Lrs',
                        data: 'totalLrs'
                    },
                    {
                        title: 'Invoice Date',
                        data: 'invoiceDate'
                    },
                    {
                        title: 'Articles',
                        data: 'articles'
                    },
                    {
                        title: 'Actual Weight',
                        data: 'actualWeight'
                    },
                    {
                        title: 'Charged Weight',
                        data: 'chargedWeight'
                    }, {
                        title: 'To Pay',
                        data: 'toPay'
                    }, {
                        title: 'Paid',
                        data: 'paid'
                    }, {
                        title: 'Less Amt',
                        data: 'lessAmt'
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
                    }, {
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
            },
            //the fourth datatable ends
            //the fifth datatable starts 
            this.dtOptionsCityWise = {
                //};
                //columns is used to for export and others starts
                columns: [
                    {
                        title: 'Station',
                        data: 'station'
                    },
                    {
                        title: 'Actual Weight',
                        data: 'actualWeight'
                    },
                    {
                        title: 'Charged Weight',
                        data: 'chargedWeight'
                    }, {
                        title: 'To Pay',
                        data: 'toPay'
                    }, {
                        title: 'Paid',
                        data: 'paid'
                    }, {
                        title: 'F O V',
                        data: 'fov'
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
                    }, {
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
        //the fifth datatable ends
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //first service starts 
        this.getDataSourceWiseDataTable = this.invoiceReport.getSummaryData();
        this.onDestroyUnsubscribtionSourceWise = this.getDataSourceWiseDataTable.subscribe(function (data) {
            _this.sourceWiseDataList = data['data'];
            _this.dtTriggerSourceWise.next();
        });
        //first service ends
        //second service starts
        //    this.getDataDestinationWiseTable = this.invoiceReport.getSummaryData()
        //    this.onDestroyUnsubscribtionDestinationWise = this.getDataDestinationWiseTable.subscribe( data => {
        //        this.destinationWiseDataList = data['data'];
        //        this.dtTriggerDestinationWise.next();
        //    } );
        //second service ends
        //third service starts
        this.getDataInvoiceMainStation = this.invoiceReport.getSummaryData();
        this.onDestroyUnsubscribtionInvoiceMainStation = this.getDataInvoiceMainStation.subscribe(function (data) {
            _this.invoiceMainStationDataList = data['data'];
            _this.dtTriggerInvoiceMainStation.next();
        });
        //third service ends
        //fourth service starts
        this.getDataInvoiceSubStation = this.invoiceReport.getSummaryData();
        this.onDestroyUnsubscribtionInvoiceSubStation = this.getDataInvoiceSubStation.subscribe(function (data) {
            _this.invoiceSubStationDataList = data['data'];
            _this.dtTriggerInvoiceSubStation.next();
        });
        //fourth service ends
        //fifth service starts
        this.getDataServiceFrCityWiseTable = this.invoiceReport.getSummaryData();
        this.onDestroyUnsubscribtionCityWise = this.getDataServiceFrCityWiseTable.subscribe(function (data) {
            _this.cityWiseDataList = data['data'];
            _this.dtTriggerCityWise.next();
        });
        //fifth service ends
    };
    InvoiceReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerSourceWise.unsubscribe();
        //this.dtTriggerDestinationWise.unsubscribe();
        this.dtTriggerInvoiceMainStation.unsubscribe();
        this.dtTriggerInvoiceSubStation.unsubscribe();
        this.dtTriggerCityWise.unsubscribe();
        this.onDestroyUnsubscribtionSourceWise.unsubscribe();
        //this.onDestroyUnsubscribtionDestinationWise.unsubscribe();
        this.onDestroyUnsubscribtionInvoiceMainStation.unsubscribe();
        this.onDestroyUnsubscribtionInvoiceSubStation.unsubscribe();
        this.onDestroyUnsubscribtionCityWise.unsubscribe();
    };
    InvoiceReportComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'sourceWise') {
            this.viewSource = true;
            this.viewDestination = false;
            this.viewStationInvoice = false;
            this.viewCity = false;
            this.viewAgent = false;
        }
        else if (searchBy === 'destinationWise') {
            this.viewSource = false;
            this.viewDestination = true;
            this.viewStationInvoice = false;
            this.viewCity = false;
            this.viewAgent = false;
        }
        else if (searchBy === 'mainInvoice') {
            this.viewSource = false;
            this.viewDestination = true;
            this.viewStationInvoice = true;
            this.viewCity = false;
            this.viewAgent = false;
        }
        else if (searchBy === 'cityWise') {
            this.viewSource = false;
            this.viewDestination = false;
            this.viewStationInvoice = false;
            this.viewCity = true;
            this.viewAgent = false;
        }
        else if (searchBy === 'agentWise') {
            this.viewSource = false;
            this.viewDestination = true;
            this.viewStationInvoice = false;
            this.viewCity = false;
            this.viewAgent = true;
        }
        else {
            this.viewSource = false;
            this.viewDestination = false;
            this.viewStationInvoice = false;
            this.viewCity = false;
            this.viewAgent = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    InvoiceReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], InvoiceReportComponent.prototype, "dtElements", void 0);
    InvoiceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-report',
            template: __webpack_require__(/*! ./invoice-report.component.html */ "./src/app/report/statement-reports/invoice-report/invoice-report.component.html"),
            styles: [__webpack_require__(/*! ./invoice-report.component.css */ "./src/app/report/statement-reports/invoice-report/invoice-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], InvoiceReportComponent);
    return InvoiceReportComponent;
}());



/***/ }),

/***/ "./src/app/report/statement-reports/party-less-checked-and-unchecked-lr-details/party-less-checked-and-unchecked-lr-details.component.css":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/report/statement-reports/party-less-checked-and-unchecked-lr-details/party-less-checked-and-unchecked-lr-details.component.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0YXRlbWVudC1yZXBvcnRzL3BhcnR5LWxlc3MtY2hlY2tlZC1hbmQtdW5jaGVja2VkLWxyLWRldGFpbHMvcGFydHktbGVzcy1jaGVja2VkLWFuZC11bmNoZWNrZWQtbHItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3N0YXRlbWVudC1yZXBvcnRzL3BhcnR5LWxlc3MtY2hlY2tlZC1hbmQtdW5jaGVja2VkLWxyLWRldGFpbHMvcGFydHktbGVzcy1jaGVja2VkLWFuZC11bmNoZWNrZWQtbHItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xyXG5cdHRvcDogMjZweDtcclxuICAgIGxlZnQ6IDE4OHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/report/statement-reports/party-less-checked-and-unchecked-lr-details/party-less-checked-and-unchecked-lr-details.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/report/statement-reports/party-less-checked-and-unchecked-lr-details/party-less-checked-and-unchecked-lr-details.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n\t<style>\n\t\t.imb_patch {\n\t\t\ttext-align: center;\n\t\t\tbackground-color: orange;\n\t\t\tpadding: 2px;\n\t\t}\n\t</style>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Party Less Checked And\n\t\t\t\t\t\tUnchecked Lr Details Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destinationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestination($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">Statement Less Checked And Pending Lrs</h6> -->\n\t\t\t\t\t\t\t<table datatable class=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStatementLessCheckedAndPendingLr\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStatementLessCheckedAndPendingLr\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Statement No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Statement Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>From Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Less Lrs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Checked Lrs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Uncheck Lrs</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let statementLessCheckedAndPendingLrData of statementLessCheckedAndPendingLrDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementLessCheckedAndPendingLrData.statementNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementLessCheckedAndPendingLrData.statementDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementLessCheckedAndPendingLrData.fromPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementLessCheckedAndPendingLrData.toPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementLessCheckedAndPendingLrData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementLessCheckedAndPendingLrData.lessLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementLessCheckedAndPendingLrData.checkedLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementLessCheckedAndPendingLrData.uncheckLrs }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" style=\"padding-top:20px;\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">LR Details</h6> -->\n\t\t\t\t\t\t\t<table datatable class=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLrDetailsTable\" [dtTrigger]=\"dtTriggerLrDetailsTable\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Less</th>\n\t\t\t\t\t\t\t\t\t\t<th>Main Commodity</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let lrDetailsTableData of lrDetailsTableDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsTableData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsTableData.bookingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsTableData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsTableData.actualLess }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsTableData.mainCommodity }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsTableData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/statement-reports/party-less-checked-and-unchecked-lr-details/party-less-checked-and-unchecked-lr-details.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/report/statement-reports/party-less-checked-and-unchecked-lr-details/party-less-checked-and-unchecked-lr-details.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: PartyLessCheckedAndUncheckedLrDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyLessCheckedAndUncheckedLrDetailsComponent", function() { return PartyLessCheckedAndUncheckedLrDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
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
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
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










var PartyLessCheckedAndUncheckedLrDetailsComponent = /** @class */ (function () {
    function PartyLessCheckedAndUncheckedLrDetailsComponent(memoLessRpt, router, masterReadService, memoReport, modalService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerStatementLessCheckedAndPendingLr = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerLrDetailsTable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.address = null;
        this.lrDtoDestinationAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
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
            this.getDestinationDetails();
        }
    }
    PartyLessCheckedAndUncheckedLrDetailsComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    PartyLessCheckedAndUncheckedLrDetailsComponent.prototype.ngOnInit = function () {
        this.dtOptionsStatementLessCheckedAndPendingLr = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Statement No',
                    data: 'statementNo'
                },
                {
                    title: 'Statement Date',
                    data: 'statementDate'
                },
                {
                    title: 'From Period',
                    data: 'fromPeriod'
                },
                {
                    title: 'To Period',
                    data: 'toPeriod'
                },
                {
                    title: 'Total LRs',
                    data: 'totalLrs'
                },
                {
                    title: 'Less Lrs',
                    data: 'lessLrs'
                },
                {
                    title: 'Checked Lrs',
                    data: 'checkedLrs'
                }, {
                    title: 'Uncheck Lrs',
                    data: 'uncheckLrs'
                }
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            //dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            /* buttons: [
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
    
    
            ],*/
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
        this.dtOptionsLrDetailsTable = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'LR Number',
                    data: 'lrNumber'
                },
                {
                    title: 'Booking Date',
                    data: 'bookingDate'
                },
                {
                    title: 'Source',
                    data: 'source'
                },
                {
                    title: 'Actual Less',
                    data: 'actualLess'
                },
                {
                    title: 'Main Commodity',
                    data: 'mainCommodity'
                },
                {
                    title: 'Remarks',
                    data: 'remarks'
                }
            ],
            //columns is used to for export and others endss
            // the below code is for button export starts
            //dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            /* buttons: [
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
            ],*/
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
    PartyLessCheckedAndUncheckedLrDetailsComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerStatementLessCheckedAndPendingLr.next();
        this.dtTriggerLrDetailsTable.next();
    };
    PartyLessCheckedAndUncheckedLrDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    PartyLessCheckedAndUncheckedLrDetailsComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerStatementLessCheckedAndPendingLr.unsubscribe();
        this.dtTriggerLrDetailsTable.unsubscribe();
        //this.onDestroyUnsubscribtionStatementLessCheckedAndPendingLr.unsubscribe();
        //this.onDestroyUnsubscribtionLrDetailsTable.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    PartyLessCheckedAndUncheckedLrDetailsComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    PartyLessCheckedAndUncheckedLrDetailsComponent.prototype.clickListnerForDestination = function (e, fubi) {
        this.modelDestination = e.item;
        $("#destinationId").val(this.modelDestination.destination);
        // this.validateDestinationIdValue = this.modelDestination.destination;
    };
    PartyLessCheckedAndUncheckedLrDetailsComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    PartyLessCheckedAndUncheckedLrDetailsComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        //this.showSpinnerForAction = true;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.destinationTA = [];
                _this.destinationOptions = [];
                _this.destinationOptions = response;
                for (var i = 0; i < _this.destinationOptions.length; i++) {
                    _this.destinationTA.push(_this.destinationOptions[i]);
                }
                //this.showSpinnerForAction = false;
            }
            else {
                //this.showSpinnerForAction = false;
            }
        }), function (error) {
            //this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "While Getting destination details", "warning");
        },
            function () { return console.log('done'); };
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PartyLessCheckedAndUncheckedLrDetailsComponent.prototype, "dtElements", void 0);
    PartyLessCheckedAndUncheckedLrDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-party-less-checked-and-unchecked-lr-details',
            template: __webpack_require__(/*! ./party-less-checked-and-unchecked-lr-details.component.html */ "./src/app/report/statement-reports/party-less-checked-and-unchecked-lr-details/party-less-checked-and-unchecked-lr-details.component.html"),
            styles: [__webpack_require__(/*! ./party-less-checked-and-unchecked-lr-details.component.css */ "./src/app/report/statement-reports/party-less-checked-and-unchecked-lr-details/party-less-checked-and-unchecked-lr-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], PartyLessCheckedAndUncheckedLrDetailsComponent);
    return PartyLessCheckedAndUncheckedLrDetailsComponent;
}());



/***/ }),

/***/ "./src/app/report/statement-reports/statement-reports.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/report/statement-reports/statement-reports.module.ts ***!
  \**********************************************************************/
/*! exports provided: StatementReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementReportsModule", function() { return StatementReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_report_statement_reports_statement_reports_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/report/statement-reports/statement-reports.routing */ "./src/app/report/statement-reports/statement-reports.routing.ts");
/* harmony import */ var src_app_report_statement_reports_statement_rpt_statement_rpt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/report/statement-reports/statement-rpt/statement-rpt.component */ "./src/app/report/statement-reports/statement-rpt/statement-rpt.component.ts");
/* harmony import */ var src_app_report_statement_reports_party_less_checked_and_unchecked_lr_details_party_less_checked_and_unchecked_lr_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/report/statement-reports/party-less-checked-and-unchecked-lr-details/party-less-checked-and-unchecked-lr-details.component */ "./src/app/report/statement-reports/party-less-checked-and-unchecked-lr-details/party-less-checked-and-unchecked-lr-details.component.ts");
/* harmony import */ var src_app_report_statement_reports_invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/statement-reports/invoice-report/invoice-report.component */ "./src/app/report/statement-reports/invoice-report/invoice-report.component.ts");
/* harmony import */ var src_app_report_statement_reports_statement_rpt_lr_details_statement_rpt_lr_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/statement-reports/statement-rpt-lr-details/statement-rpt-lr-details.component */ "./src/app/report/statement-reports/statement-rpt-lr-details/statement-rpt-lr-details.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_report_statement_reports_statement_rpt_lr_details_print_statement_rpt_lr_details_print_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/statement-reports/statement-rpt-lr-details-print/statement-rpt-lr-details-print.component */ "./src/app/report/statement-reports/statement-rpt-lr-details-print/statement-rpt-lr-details-print.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 









var StatementReportsModule = /** @class */ (function () {
    function StatementReportsModule() {
    }
    StatementReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_statement_reports_statement_reports_routing__WEBPACK_IMPORTED_MODULE_7__["StatementReportsRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"]],
            declarations: [
                src_app_report_statement_reports_statement_rpt_statement_rpt_component__WEBPACK_IMPORTED_MODULE_8__["StatementRptComponent"],
                src_app_report_statement_reports_party_less_checked_and_unchecked_lr_details_party_less_checked_and_unchecked_lr_details_component__WEBPACK_IMPORTED_MODULE_9__["PartyLessCheckedAndUncheckedLrDetailsComponent"],
                src_app_report_statement_reports_invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_10__["InvoiceReportComponent"],
                src_app_report_statement_reports_statement_rpt_lr_details_statement_rpt_lr_details_component__WEBPACK_IMPORTED_MODULE_11__["StatementRptLrDetailsComponent"],
                src_app_report_statement_reports_statement_rpt_lr_details_print_statement_rpt_lr_details_print_component__WEBPACK_IMPORTED_MODULE_13__["StatementRptLrDetailsPrintComponent"]
            ]
        })
    ], StatementReportsModule);
    return StatementReportsModule;
}());



/***/ }),

/***/ "./src/app/report/statement-reports/statement-reports.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/report/statement-reports/statement-reports.routing.ts ***!
  \***********************************************************************/
/*! exports provided: StatementReportsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementReportsRoutes", function() { return StatementReportsRoutes; });
/* harmony import */ var src_app_report_statement_reports_statement_rpt_statement_rpt_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/report/statement-reports/statement-rpt/statement-rpt.component */ "./src/app/report/statement-reports/statement-rpt/statement-rpt.component.ts");
/* harmony import */ var src_app_report_statement_reports_party_less_checked_and_unchecked_lr_details_party_less_checked_and_unchecked_lr_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report/statement-reports/party-less-checked-and-unchecked-lr-details/party-less-checked-and-unchecked-lr-details.component */ "./src/app/report/statement-reports/party-less-checked-and-unchecked-lr-details/party-less-checked-and-unchecked-lr-details.component.ts");
/* harmony import */ var src_app_report_statement_reports_invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/report/statement-reports/invoice-report/invoice-report.component */ "./src/app/report/statement-reports/invoice-report/invoice-report.component.ts");



var StatementReportsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'statementRpt',
                component: src_app_report_statement_reports_statement_rpt_statement_rpt_component__WEBPACK_IMPORTED_MODULE_0__["StatementRptComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'partyLessCheckedAndUncheckedLrDetails',
                component: src_app_report_statement_reports_party_less_checked_and_unchecked_lr_details_party_less_checked_and_unchecked_lr_details_component__WEBPACK_IMPORTED_MODULE_1__["PartyLessCheckedAndUncheckedLrDetailsComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'invoiceReport',
                component: src_app_report_statement_reports_invoice_report_invoice_report_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/report/statement-reports/statement-rpt-lr-details-print/statement-rpt-lr-details-print.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/report/statement-reports/statement-rpt-lr-details-print/statement-rpt-lr-details-print.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\nfieldset.scheduler-border {\r\n    border: 1px groove #ddd !important;\r\n    padding: 0 1.4em 1.4em 1.4em !important;\r\n    margin: 0 0 1.5em 0 !important;\r\n    box-shadow:  0px 0px 0px 0px #000;\r\n}\r\n\r\nlegend.scheduler-border {\r\n        font-size: 1.2em !important;\r\n        font-weight: bold !important;\r\n        text-align: left !important;\r\n        width:auto;\r\n        padding:0 10px;\r\n        border-bottom:none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0YXRlbWVudC1yZXBvcnRzL3N0YXRlbWVudC1ycHQtbHItZGV0YWlscy1wcmludC9zdGF0ZW1lbnQtcnB0LWxyLWRldGFpbHMtcHJpbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLG1DQUFtQztJQUNuQyx3Q0FBd0M7SUFDeEMsK0JBQStCO0lBRXZCLGtDQUFrQztDQUM3Qzs7QUFFRDtRQUNRLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLFdBQVc7UUFDWCxlQUFlO1FBQ2YsbUJBQW1CO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3N0YXRlbWVudC1yZXBvcnRzL3N0YXRlbWVudC1ycHQtbHItZGV0YWlscy1wcmludC9zdGF0ZW1lbnQtcnB0LWxyLWRldGFpbHMtcHJpbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcclxuXHR0b3A6IDI2cHg7XHJcbiAgICBsZWZ0OiAxODhweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuZmllbGRzZXQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAxLjRlbSAxLjRlbSAxLjRlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAgMHB4IDBweCAwcHggMHB4ICMwMDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICAwcHggMHB4IDBweCAwcHggIzAwMDtcclxufVxyXG5cclxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDphdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/statement-reports/statement-rpt-lr-details-print/statement-rpt-lr-details-print.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/report/statement-reports/statement-rpt-lr-details-print/statement-rpt-lr-details-print.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page row system_responsive\" id=\"stmtReptLrDetailsprintIds\">\n\t<div class=\"col-md-12\">\n\t\t<!--first row starts-->\n\t\t<div class=\"row\" style=\"padding-top: 5px;\" height='30px'>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<h6>\n\t\t\t\t\tNo.32, Plain Street, Hospital Road, Tasker Town, Bangalore - 560 001\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<h6>\n\t\t\t\t\tTel.: (+91-80) 22865959 <br>\n\t\t\t\t\tFax.: (+91-80) 22865950 <br>\n\t\t\t\t\tEmail: bng@srdlogistics.com\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t</div>\n\t\t</div>\n\t\t<!--<br>-->\n\t\t<hr>\n\t\t<!--first row starts-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 5px;text-align: center'>\n\t\t\t\t\t\t\t\t<strong>Statement Report </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px;  padding-top: 2px;'>\n\t\t\t\t\t\t\t\t<span style='font-weight:bold;font-size:14px;'>Statement of Account : </span>\n\t\t\t\t\t\t\t\t<!--<strong>{{todayDate}}</strong>-->\n\t\t\t\t\t\t\t\t<span style='font-weight:bold;font-size:12px;'>{{destination}}</span>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; padding-top: 2px;'>\n\t\t\t\t\t\t\t\t<span style='font-weight:bold;font-size:14px;'>Period : </span>\n\t\t\t\t\t\t\t\t<span style='font-weight:bold;font-size:12px;'>{{fromPeriod}}-{{toPeriod}}</span>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--<div class=\"col-md-4\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Statement Report </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>-->\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; padding-top: 2px;text-align: right;'>\n\t\t\t\t\t\t\t\t<span style='font-weight:bold;font-size:14px;'>Statement No : </span>\n\t\t\t\t\t\t\t\t<span style='font-weight:bold;font-size:12px;'>{{stmtNo}}</span>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; padding-top: 2px;text-align: right;'>\n\t\t\t\t\t\t\t\t<span style='font-weight:bold;font-size:14px;'>Statement Date : </span>\n\t\t\t\t\t\t\t\t<!--<strong>{{date}}</strong>-->\n\t\t\t\t\t\t\t\t<span style='font-weight:bold;font-size:12px;'>{{stmtDateStr}}</span>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!--<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6 style='text-align: center;font-size: large;'>\n\t\t\t\t\t<strong><u>{{toStation}} Loading Sheet.</u></strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t</div>-->\n\n\t\t<!--Second  row starts-->\n\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1' style='table-layout: fixed;'>\n\t\t\t<tr>\n\t\t\t\t<td width='15%' align='center' style='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;border-left: 1px solid black;\n\t\t\t\t\tborder-top: 1px solid black;' valign='top' type='text'><span>From</span></td>\n\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;border-top: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><span> Invoice Nos</span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;border-top: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><span> Tot Wgt</span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;border-top: 1px solid black;'\n\t\t\t\t\tvalign='top' type='number'><span> Tot Amt</span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;border-top: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><span> Tot Paid</span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;border-top: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><span>Ser Tax</span></td>\n\t\t\t</tr>\n\t\t\t<!--<tr *ngFor=\"let listOfLrDtoData of listOfLrDtoDataTable\">-->\n\t\t\t<tr *ngFor=\"let summaryHashMap of summaryHashMap | keyvalue\">\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:12px;border-left: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text' id='lrDtoBookingDate'>\n\t\t\t\t\t<span> {{summaryHashMap.key}} </span></td>\n\t\t\t\t<!--<strong>{{listOfLrDtoData.bookingDateStr}}</strong></td>-->\n\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:12px;'\n\t\t\t\t\tvalign='top' type='number' id='lrDtoLrNo'>\n\t\t\t\t\t<span>{{summaryHashMap.value.invoiceNumber}}</span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:12px;'\n\t\t\t\t\tvalign='top' type='number' id='appAmountPrint'>\n\t\t\t\t\t<span>{{summaryHashMap.value.totalActWgt}} </span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:12px;'\n\t\t\t\t\tvalign='top' type='text' id='lrDtoTotArt'>\n\t\t\t\t\t<span>{{summaryHashMap.value.totalAmount}} </span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:12px;'\n\t\t\t\t\tvalign='top' type='text' id='lrDtoAgentName'>\n\t\t\t\t\t<span> {{summaryHashMap.value.totalPaid}} </span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:12px;'\n\t\t\t\t\tvalign='top' type='text' id='leDtoActWgt'>\n\t\t\t\t\t<span>{{summaryHashMap.value.serviceTax}} </span></td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;border-left: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><span>Total</span></td>\n\t\t\t\t<td width='25%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;'\n\t\t\t\t\tvalign='top' type='number'><span> LRs</span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;'\n\t\t\t\t\tvalign='top' type='number'><span></span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;'\n\t\t\t\t\tvalign='top' type='number'><span></span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;'\n\t\t\t\t\tvalign='top' type='text'><span> </span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000;border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;'\n\t\t\t\t\tvalign='top' type='text'><span></span></td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td width='100%' align='center' colspan='6'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;border-left: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><span>Amount Description</span></td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td align='center' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;border-left: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><span>Description</span></td>\n\t\t\t\t<td align='center' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;'\n\t\t\t\t\tvalign='top' type='number'><span>Credit </span></td>\n\t\t\t\t<td align='center' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;font-weight:bold;font-size:14px;'\n\t\t\t\t\tvalign='top' type='number'><span>Debit</span></td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td align='left' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none; word-wrap: break-word;font-weight:bold;font-size:14px;border-left: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><span style='margin-left: 10px;'><u>Addition:</u></span></td>\n\t\t\t\t<td align='right' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none; word-wrap: break-word;' valign='top'\n\t\t\t\t\ttype='number'></td>\n\t\t\t\t<td align='right' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none; word-wrap: break-word;' valign='top'\n\t\t\t\t\ttype='number'></td>\n\t\t\t</tr>\n\n\t\t\t<tr *ngFor=\"let additionData of additionDataDatailList\">\n\t\t\t\t<td align='left' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none; word-wrap: break-word;font-size:12px;font-weight:bold;border-left: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><span style='margin-left: 30px;'>{{additionData.description}}&nbsp;</span>\n\t\t\t\t</td>\n\t\t\t\t<td align='right' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none; word-wrap: break-word;font-size:12px;font-weight:bold;'\n\t\t\t\t\tvalign='top' type='number'><span\n\t\t\t\t\t\tstyle='margin-left: 30px;'>{{additionData.totalAmount}}&nbsp;</span></td>\n\t\t\t\t<td align='right' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none; word-wrap: break-word;' valign='top'\n\t\t\t\t\ttype='number'><strong></strong></td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td align='left' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none; word-wrap: break-word;font-weight:bold;font-size:14px;border-left: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><span style='margin-left: 10px;'><u>Deduction:</u></span></td>\n\t\t\t\t<td align='right' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none; word-wrap: break-word;' valign='top'\n\t\t\t\t\ttype='number'><strong> </strong></td>\n\t\t\t\t<td align='right' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none; word-wrap: break-word;' valign='top'\n\t\t\t\t\ttype='number'><strong> </strong></td>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let deductionData of deductionDataDetailList\">\n\t\t\t\t<td align='left' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none; word-wrap: break-word;font-size:12px;font-weight:bold;border-left: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><span style='margin-left: 30px;'>{{deductionData.description}}&nbsp;</span>\n\t\t\t\t</td>\n\t\t\t\t<td align='right' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none; word-wrap: break-word;font-size:12px;font-weight:bold;'\n\t\t\t\t\tvalign='top' type='number'></td>\n\t\t\t\t<td align='right' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: none; word-wrap: break-word;font-size:12px;font-weight:bold;'\n\t\t\t\t\tvalign='top' type='number'><span\n\t\t\t\t\t\tstyle='margin-left: 30px;'>{{deductionData.totalAmount}}&nbsp;</span></td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td align='left' colspan='2'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid black;; word-wrap: break-word;font-size:14px;font-weight:bold;border-left: 1px solid black;'\n\t\t\t\t\tvalign='top' type='text'><span style='margin-left: 30px;'>Total&nbsp;</span>\n\t\t\t\t</td>\n\t\t\t\t<td align='right'\n\t\t\t\t\tstyle='border-right:none; border-bottom: 1px solid black;; word-wrap: break-word;font-size:14px;font-weight:bold;'\n\t\t\t\t\tvalign='top' type='number'>\n\t\t\t\t\t<span>( A )&nbsp;</span>\n\t\t\t\t</td>\n\t\t\t\t<td align='right'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid black;; word-wrap: break-word;font-size:12px;font-weight:bold;'\n\t\t\t\t\tvalign='top' type='number'>\n\t\t\t\t\t<span>{{summaryAdditionTotAmt}}&nbsp;</span>\n\t\t\t\t</td>\n\t\t\t\t<td align='right'\n\t\t\t\t\tstyle='border-right: none; border-bottom: 1px solid black;; word-wrap: break-word;font-size:14px;font-weight:bold;'\n\t\t\t\t\tvalign='top' type='number'>\n\t\t\t\t\t<span>( B )&nbsp;</span>\n\t\t\t\t</td>\n\t\t\t\t<td align='right'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid black;; word-wrap: break-word;font-size:12px;font-weight:bold;'\n\t\t\t\t\tvalign='top' type='number'>\n\t\t\t\t\t<span>{{summaryDeductionTotAmt}}&nbsp;</span>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td align='left' colspan='2'\n\t\t\t\t\tstyle='border-right: none; border-bottom: none; word-wrap: break-word;font-size:14px;font-weight:bold;border-left: none'\n\t\t\t\t\tvalign='top' type='text'><span>Total Amount to be Received (A - B)&nbsp;</span>\n\t\t\t\t</td>\n\t\t\t\t<td align='right' colspan='2'\n\t\t\t\t\tstyle='border-right:none; border-bottom: 1px solid black; word-wrap: break-word;font-size:14px;font-weight:bold;'\n\t\t\t\t\tvalign='top' type='number'>\n\t\t\t\t\t<span>{{summaryAdditionTotAmt - summaryDeductionTotAmt}}&nbsp;</span>\n\t\t\t\t</td>\n\t\t\t\t<td align='right' colspan='2'\n\t\t\t\t\tstyle='border-right:none; border-bottom: none; word-wrap: break-word;font-size:14px;font-weight:bold;'\n\t\t\t\t\tvalign='top' type='number'>\n\t\t\t\t\t<span></span>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<br>\n\t\t\t<tr>\n\t\t\t\t<td align='left' colspan='2'\n\t\t\t\t\tstyle='border-right: none; border-bottom: none; word-wrap: break-word;font-size:14px;font-weight:bold;border-left: none'\n\t\t\t\t\tvalign='top' type='text'><span></span>\n\t\t\t\t</td>\n\t\t\t\t<td align='right' colspan='2'\n\t\t\t\t\tstyle='border-right:none; border-bottom: none; word-wrap: break-word;font-size:14px;font-weight:bold;'\n\t\t\t\t\tvalign='top' type='number'>\n\t\t\t\t\t<span></span>\n\t\t\t\t</td>\n\t\t\t\t<td align='right' colspan='2'\n\t\t\t\t\tstyle='border-right:none; border-bottom: none; word-wrap: break-word;font-size:14px;font-weight:bold;'\n\t\t\t\t\tvalign='top' type='number'>\n\t\t\t\t\t<span>For SRD Logistics Pvt.Ltd.&nbsp;&nbsp;</span>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\n\n\n\t\t<!--\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<h6 style='margin-left: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>HC-HANDLE WITH CARE, NW PRTY-NEW PARTY, COD </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Loading Clerk : </strong>\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t<u style='border-bottom: 1px solid black;padding-left: 200px;'>\n\t\t\t\t\t\t\t\t\t</u>\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t<h6 style='margin-right: 20px; font-size: 17px; padding-top: 30px;'>\n\t\t\t\t\t\t\t\t<strong>Incharge Sign : </strong>\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t<u style='border-bottom: 1px solid black;padding-left: 200px;'>\n\t\t\t\t\t\t\t\t\t</u>\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>-->\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/report/statement-reports/statement-rpt-lr-details-print/statement-rpt-lr-details-print.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/report/statement-reports/statement-rpt-lr-details-print/statement-rpt-lr-details-print.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: StatementRptLrDetailsPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementRptLrDetailsPrintComponent", function() { return StatementRptLrDetailsPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/dest-stmt-report */ "./src/app/dataService/dest-stmt-report.ts");
/* harmony import */ var src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dto/FortNightStmt-dto */ "./src/app/dto/FortNightStmt-dto.ts");
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









var StatementRptLrDetailsPrintComponent = /** @class */ (function () {
    /*invoiceNumber: any = null;
    source: any = null;
    destinationHashMap: any = null;
    branch: any = null;
    totWgt: any = 0;
    totAmt: any = 0;
    totPaid: any = 0;
    totSerTax: any = 0;
    totLr: any = 0;
    splitInvoiceNum: any;*/
    function StatementRptLrDetailsPrintComponent(memoLessRpt, router, masterReadService, memoReport, modalService, destStmtReport) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        this.destStmtReport = destStmtReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.isLoggedIn = true;
        this.address = null;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.destination = null;
        this.fromPeriod = null;
        this.toPeriod = null;
        this.stmtDateStr = null;
        this.stmtNo = null;
        this.summaryHashMap = new Map();
        this.fortNightStmtDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_11__["FortNightStmtDto"]();
        this.summaryAdditionTotAmt = 0;
        this.summaryDeductionTotAmt = 0;
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
            this.stmtRptLrForAdditionLrPrintLocalStorage = JSON.parse(localStorage.getItem('stmtRptLrDtlsAdditionPrintLocalStorage'));
            this.stmtRptLrForDeductionLrPrintLocalStorage = JSON.parse(localStorage.getItem('stmtRptLrDtlsDeductionPrintLocalStorage'));
            this.stmtRptLrForGeneralLrPrintLocalStorage = JSON.parse(localStorage.getItem('stmtRptLrDtlsGeneralPrintLocalStorage'));
            this.stmtRptLrDtlsPrintLocalStorage = JSON.parse(localStorage.getItem('stmtRptLrDtlsPrintLocalStorage'));
            console.log(this.stmtRptLrForAdditionLrPrintLocalStorage);
            console.log(this.stmtRptLrForDeductionLrPrintLocalStorage);
            console.log(this.stmtRptLrForGeneralLrPrintLocalStorage);
            console.log(this.stmtRptLrDtlsPrintLocalStorage);
            if (this.stmtRptLrForAdditionLrPrintLocalStorage != null) {
                this.additionDataDatailList = this.stmtRptLrForAdditionLrPrintLocalStorage;
                for (var i = 0; i < this.additionDataDatailList.length; i++) {
                    var totalAmout = this.additionDataDatailList[i].totalAmount == null ? 0 : this.additionDataDatailList[i].totalAmount;
                    this.summaryAdditionTotAmt = +this.summaryAdditionTotAmt + +totalAmout;
                }
            }
            if (this.stmtRptLrForDeductionLrPrintLocalStorage != null) {
                this.deductionDataDetailList = this.stmtRptLrForDeductionLrPrintLocalStorage;
                for (var i = 0; i < this.deductionDataDetailList.length; i++) {
                    var totalAmout = this.deductionDataDetailList[i].totalAmount == null ? 0 : this.deductionDataDetailList[i].totalAmount;
                    this.summaryDeductionTotAmt = +this.summaryDeductionTotAmt + +totalAmout;
                }
            }
            if (this.stmtRptLrForGeneralLrPrintLocalStorage != null) {
                this.destination = this.stmtRptLrForGeneralLrPrintLocalStorage.destination;
                this.stmtNo = this.stmtRptLrForGeneralLrPrintLocalStorage.stmtId;
                this.fromPeriod = moment__WEBPACK_IMPORTED_MODULE_8__(this.stmtRptLrForGeneralLrPrintLocalStorage.fromPeriod).format('DD-MM-YYYY');
                this.toPeriod = moment__WEBPACK_IMPORTED_MODULE_8__(this.stmtRptLrForGeneralLrPrintLocalStorage.toPeriod).format('DD-MM-YYYY');
                this.stmtDateStr = moment__WEBPACK_IMPORTED_MODULE_8__(this.stmtRptLrForGeneralLrPrintLocalStorage.stmtDate).format('DD-MM-YYYY');
            }
            if (this.stmtRptLrDtlsPrintLocalStorage != null) {
                this.getValues();
                //this.setHashMapValues();
            }
            // let printElement = document.getElementById('stmtReptLrDetailsprintIds').innerHTML;    
            //console.log(printElement);
            /* window.setTimeout( function() {
                 window.print();
               }, 1000 );
               window.onafterprint = function() {
                   window.close();
               }
               localStorage.clear();
               window.addEventListener( 'afterprint', ( event ) => {
                  //this.clearField();
               } );*/
        }
    }
    StatementRptLrDetailsPrintComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StatementRptLrDetailsPrintComponent.prototype.ngOnInit = function () {
    };
    /*setHashMapValues() {
        this.invoiceNumber = null;
        this.source = null;
        this.destinationHashMap = null;
        this.branch = null;
        this.totWgt = 0;
        this.totAmt = 0;
        this.totPaid = 0;
        this.totSerTax = 0;
        this.totLr = 0;
        for (let i = 0; i < this.stmtRptLrDtlsPrintLocalStorage.length; i++) {
            if (i == 0) {
                this.source = this.stmtRptLrDtlsPrintLocalStorage[i].source;
                this.destinationHashMap = this.stmtRptLrDtlsPrintLocalStorage[i].destination;
                this.invoiceNumber = this.stmtRptLrDtlsPrintLocalStorage[i].invoiceNumber;
                this.totWgt = this.stmtRptLrDtlsPrintLocalStorage[i].actualWeight;
                this.totAmt = this.stmtRptLrDtlsPrintLocalStorage[i].toPay;
                this.totPaid = this.stmtRptLrDtlsPrintLocalStorage[i].paid;
                this.totSerTax = this.stmtRptLrDtlsPrintLocalStorage[i].servicetax == null ? 0.0
                    : this.stmtRptLrDtlsPrintLocalStorage[i].servicetax;
                this.totLr = 1;
                this.branch = this.stmtRptLrDtlsPrintLocalStorage[i].branch;
            } else if (this.stmtRptLrDtlsPrintLocalStorage[i].branch == this.branch) {
                this.splitInvoiceNum = [];
                if (this.destinationHashMap != null &&
                    this.destinationHashMap == this.stmtRptLrDtlsPrintLocalStorage[i].destination) {
                    this.splitInvoiceNum = this.stmtRptLrDtlsPrintLocalStorage[i].invoiceNumber.split("/");
                    this.invoiceNumber = this.invoiceNumber + " , " + this.splitInvoiceNum[3];
                    console.log(this.splitInvoiceNum);
                    console.log(this.invoiceNumber);
                } else {
                    this.invoiceNumber = this.invoiceNumber + " , " + this.stmtRptLrDtlsPrintLocalStorage[i].invoiceNumber;
                    this.destinationHashMap = this.stmtRptLrDtlsPrintLocalStorage[i].destination;
                }
                this.totWgt = + this.stmtRptLrDtlsPrintLocalStorage[i].actualWeight;
                console.log(this.totWgt);
                console.log(this.stmtRptLrDtlsPrintLocalStorage[i].actualWeight);
                this.totAmt = + this.stmtRptLrDtlsPrintLocalStorage[i].toPay;
                this.totPaid = + this.stmtRptLrDtlsPrintLocalStorage[i].paid;
                this.totSerTax = + this.stmtRptLrDtlsPrintLocalStorage[i].servicetax == null ? 0.0
                    : this.stmtRptLrDtlsPrintLocalStorage[i].servicetax;
                this.totLr = +1;
            } else {
                this.fortNightStmtDto = new FortNightStmtDto();
                this.fortNightStmtDto = new FortNightStmtDto();
                this.fortNightStmtDto.totalActWgt = this.totWgt;
                this.fortNightStmtDto.totalAmount = this.totAmt;
                this.fortNightStmtDto.totalPaid = this.totPaid;
                this.fortNightStmtDto.serviceTax = this.totSerTax;
                this.fortNightStmtDto.totalLrs = this.totLr;
                this.fortNightStmtDto.invoiceNumber = this.invoiceNumber;
                this.summaryHashMap.set(this.branch, this.fortNightStmtDto);
            }
            if (i == (this.stmtRptLrDtlsPrintLocalStorage.length - 1)) {
                this.fortNightStmtDto = new FortNightStmtDto();
                this.fortNightStmtDto.totalActWgt = this.totWgt;
                this.fortNightStmtDto.totalAmount = this.totAmt;
                this.fortNightStmtDto.totalPaid = this.totPaid;
                this.fortNightStmtDto.serviceTax = this.totSerTax;
                this.fortNightStmtDto.totalLrs = this.totLr;
                this.fortNightStmtDto.invoiceNumber = this.invoiceNumber;
                this.summaryHashMap.set(this.branch, this.fortNightStmtDto);
            }
        }
    }*/
    StatementRptLrDetailsPrintComponent.prototype.getValues = function () {
        var invoiceNumber = null, source = null, destination = null, branch = null;
        var totWgt = 0.0, totAmt = 0.0, totPaid = 0.0, totSerTax = 0.0;
        var totLr = 0;
        for (var i = 0; i < this.stmtRptLrDtlsPrintLocalStorage.length; i++) {
            if (i == 0) {
                source = this.stmtRptLrDtlsPrintLocalStorage[i].source;
                destination = this.stmtRptLrDtlsPrintLocalStorage[i].toStation;
                invoiceNumber = this.stmtRptLrDtlsPrintLocalStorage[i].invoiceNumber;
                console.log("0");
                /* totWgt = this.stmtRptLrDtlsPrintLocalStorage[i].actualWeight;
                 totAmt = this.stmtRptLrDtlsPrintLocalStorage[i].toPay;
                 totPaid = this.stmtRptLrDtlsPrintLocalStorage[i].paid;
                 totSerTax = this.stmtRptLrDtlsPrintLocalStorage[i].servicetax == null ? 0.0
                     : this.stmtRptLrDtlsPrintLocalStorage[i].servicetax;
                 totLr = this.stmtRptLrDtlsPrintLocalStorage[i].toLrNo;*/
                branch = this.stmtRptLrDtlsPrintLocalStorage[i].branch;
            }
            else if (this.stmtRptLrDtlsPrintLocalStorage[i].branch == branch) {
                var splitInvoiceNum = null;
                if (destination != null
                    && destination == this.stmtRptLrDtlsPrintLocalStorage[i].toStation) {
                    splitInvoiceNum = this.stmtRptLrDtlsPrintLocalStorage[i].invoiceNumber.split("/");
                    invoiceNumber = invoiceNumber + " , " + splitInvoiceNum[3];
                    console.log(invoiceNumber + " , " + splitInvoiceNum[3]);
                }
                else {
                    invoiceNumber = invoiceNumber + " , "
                        + this.stmtRptLrDtlsPrintLocalStorage[i].invoiceNumber;
                    destination = this.stmtRptLrDtlsPrintLocalStorage[i].toStation;
                }
                /* totWgt += this.stmtRptLrDtlsPrintLocalStorage[i].actualWeight;
                 totAmt += this.stmtRptLrDtlsPrintLocalStorage[i].toPay;
                 totPaid += this.stmtRptLrDtlsPrintLocalStorage[i].paid;
                 totSerTax += this.stmtRptLrDtlsPrintLocalStorage[i].servicetax;
                 totLr += this.stmtRptLrDtlsPrintLocalStorage[i].toLrNo;*/
                console.log("1");
            }
            else {
                this.fortNightStmtDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_11__["FortNightStmtDto"]();
                /* this.fortNightStmtDto.totalActWgt = totWgt;
                 this.fortNightStmtDto.totalAmount = totAmt;
                 this.fortNightStmtDto.totalPaid = totPaid;
                 this.fortNightStmtDto.serviceTax = totSerTax;
                 this.fortNightStmtDto.totalLrs = totLr;*/
                this.fortNightStmtDto.invoiceNumber = invoiceNumber;
                this.summaryHashMap.set(branch, this.fortNightStmtDto);
                invoiceNumber = null;
                destination = null;
                source = this.stmtRptLrDtlsPrintLocalStorage[i].source;
                destination = this.stmtRptLrDtlsPrintLocalStorage[i].toStation;
                invoiceNumber = this.stmtRptLrDtlsPrintLocalStorage[i].invoiceNumber;
                /* totWgt = this.stmtRptLrDtlsPrintLocalStorage[i].actualWeight;
                 totAmt = this.stmtRptLrDtlsPrintLocalStorage[i].toPay;
                 totPaid = this.stmtRptLrDtlsPrintLocalStorage[i].paid;
                 totSerTax = this.stmtRptLrDtlsPrintLocalStorage[i].servicetax == null ? 0.0
                     : this.stmtRptLrDtlsPrintLocalStorage[i].servicetax;
                 totLr = this.stmtRptLrDtlsPrintLocalStorage[i].toLrNo;*/
                branch = this.stmtRptLrDtlsPrintLocalStorage[i].branch;
                console.log("2");
            }
            if (i == (this.stmtRptLrDtlsPrintLocalStorage.length - 1)) {
                this.fortNightStmtDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_11__["FortNightStmtDto"]();
                /*this.fortNightStmtDto.totalActWgt = totWgt;
                this.fortNightStmtDto.totalAmount = totAmt;
                this.fortNightStmtDto.totalPaid = totPaid;
                this.fortNightStmtDto.serviceTax = totSerTax;
                this.fortNightStmtDto.totalLrs = totLr;*/
                this.fortNightStmtDto.invoiceNumber = invoiceNumber;
                this.summaryHashMap.set(branch, this.fortNightStmtDto);
                console.log("3");
            }
            /* this.map.set("sss","sss");
             this.map.set("aaa","sss");
             this.map.set("sass","sss");
             this.map.set("xxx","sss");
             this.map.set("ss","sss");
             this.map.forEach((value: string, key: string) => {
               console.log(key, value);
             });*/
        }
        console.log(this.summaryHashMap);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StatementRptLrDetailsPrintComponent.prototype, "dtElements", void 0);
    StatementRptLrDetailsPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statement-rpt-lr-details-print',
            template: __webpack_require__(/*! ./statement-rpt-lr-details-print.component.html */ "./src/app/report/statement-reports/statement-rpt-lr-details-print/statement-rpt-lr-details-print.component.html"),
            styles: [__webpack_require__(/*! ./statement-rpt-lr-details-print.component.css */ "./src/app/report/statement-reports/statement-rpt-lr-details-print/statement-rpt-lr-details-print.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_7__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_10__["DestStmtReport"]])
    ], StatementRptLrDetailsPrintComponent);
    return StatementRptLrDetailsPrintComponent;
}());



/***/ }),

/***/ "./src/app/report/statement-reports/statement-rpt-lr-details/statement-rpt-lr-details.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/report/statement-reports/statement-rpt-lr-details/statement-rpt-lr-details.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\nfieldset.scheduler-border {\r\n    border: 1px groove #ddd !important;\r\n    padding: 0 1.4em 1.4em 1.4em !important;\r\n    margin: 0 0 1.5em 0 !important;\r\n    box-shadow:  0px 0px 0px 0px #000;\r\n}\r\n\r\nlegend.scheduler-border {\r\n        font-size: 1.2em !important;\r\n        font-weight: bold !important;\r\n        text-align: left !important;\r\n        width:auto;\r\n        padding:0 10px;\r\n        border-bottom:none;\r\n}\r\n\r\n/*@media print {\r\n\tbody * {\r\n\t\tvisibility: hidden;\r\n    }\r\n    \r\n\t#showStatementRptLrDetails, #showStatementRptLrDetails * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#printStmtRptLRDtlsId {\r\n\t\tposition: absolute;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n    }\r\n}*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0YXRlbWVudC1yZXBvcnRzL3N0YXRlbWVudC1ycHQtbHItZGV0YWlscy9zdGF0ZW1lbnQtcnB0LWxyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLG1DQUFtQztJQUNuQyx3Q0FBd0M7SUFDeEMsK0JBQStCO0lBRXZCLGtDQUFrQztDQUM3Qzs7QUFFRDtRQUNRLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLFdBQVc7UUFDWCxlQUFlO1FBQ2YsbUJBQW1CO0NBQzFCOztBQUVEOzs7Ozs7Ozs7Ozs7O0dBYUciLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvc3RhdGVtZW50LXJlcG9ydHMvc3RhdGVtZW50LXJwdC1sci1kZXRhaWxzL3N0YXRlbWVudC1ycHQtbHItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xyXG5cdHRvcDogMjZweDtcclxuICAgIGxlZnQ6IDE4OHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5maWVsZHNldC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICAwcHggMHB4IDBweCAwcHggIzAwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogIDBweCAwcHggMHB4IDBweCAjMDAwO1xyXG59XHJcblxyXG5sZWdlbmQuc2NoZWR1bGVyLWJvcmRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOmF1dG87XHJcbiAgICAgICAgcGFkZGluZzowIDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG59XHJcblxyXG4vKkBtZWRpYSBwcmludCB7XHJcblx0Ym9keSAqIHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIFxyXG5cdCNzaG93U3RhdGVtZW50UnB0THJEZXRhaWxzLCAjc2hvd1N0YXRlbWVudFJwdExyRGV0YWlscyAqIHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0I3ByaW50U3RtdFJwdExSRHRsc0lkIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcbiAgICB9XHJcbn0qLyJdfQ== */"

/***/ }),

/***/ "./src/app/report/statement-reports/statement-rpt-lr-details/statement-rpt-lr-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/report/statement-reports/statement-rpt-lr-details/statement-rpt-lr-details.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" id=\"showStatementRptLrDetails\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Statement Report LR Details For - {{validateStatementNo}} -\n\t\t\t\t\t\t{{validateDestination}}</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<!--<button style='float: right;' class=\"button dt-button\" id=\"printStmtRptLrBtnId\"\n\t\t\t\t\t\t\t\t(click)=\"clickListnerForPrintStmtRptLr()\">\n\t\t\t\t\t\t\t\t<i class=\"fas fa-print\"> &nbsp;Print</i></button>-->\n\t\t\t\t\t\t\t<table datatable id=\"statementRptLrDetailsTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStatementReportLrDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStatementReportLrDetails\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay Amt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid Amt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Service Tax</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]='!hideShowForPrint'>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]='!hideShowForPrint'>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]='!hideShowForPrint'>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let statementReportLrDetailsData of statementReportLrDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrDetailsData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrDetailsData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrDetailsData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrDetailsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrDetailsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrDetailsData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrDetailsData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrDetailsData.servicetax }}</td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]='!hideShowForPrint'>{{ statementReportLrDetailsData.destination }}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]='!hideShowForPrint'>\n\t\t\t\t\t\t\t\t\t\t\t{{ statementReportLrDetailsData.invoiceDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]='!hideShowForPrint'>\n\t\t\t\t\t\t\t\t\t\t\t{{ statementReportLrDetailsData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]='!hideShowForPrint'></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]='!hideShowForPrint'></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]='!hideShowForPrint'></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6><u>Addition:</u></h6>\n\t\t\t\t\t\t\t<table datatable id=\"statementRptAdditionTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStatementReportLrAdditionDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStatementReportLrAdditionDetails\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t<th>Credit</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let statementReportLrAdditionData of statementReportLrAdditionDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrAdditionData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrAdditionData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6><u>Deduction:</u></h6>\n\t\t\t\t\t\t\t<table datatable id=\"statementRptDeductionTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStatementReportLrDeductionDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStatementReportLrDeductionDetails\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t<th>Debit</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let statementReportLrDeductionData of statementReportLrDeductionDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrDeductionData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportLrDeductionData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"viewStatementRptLRDetlsPrint\" onafterprint=\"afterPrint()\" id=\"printStmtRptLRDtlsId\">\n\t\t<app-statement-rpt-lr-details-print></app-statement-rpt-lr-details-print>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/statement-reports/statement-rpt-lr-details/statement-rpt-lr-details.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/report/statement-reports/statement-rpt-lr-details/statement-rpt-lr-details.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: StatementRptLrDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementRptLrDetailsComponent", function() { return StatementRptLrDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/dest-stmt-report */ "./src/app/dataService/dest-stmt-report.ts");
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









var StatementRptLrDetailsComponent = /** @class */ (function () {
    function StatementRptLrDetailsComponent(memoLessRpt, router, masterReadService, memoReport, modalService, destStmtReport) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        this.destStmtReport = destStmtReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerStatementReportLrDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerStatementReportLrAdditionDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerStatementReportLrDeductionDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.address = null;
        this.additionValueLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.additionValueLRDtoList = [];
        this.deductionValueLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.deductionValueLRDtoList = [];
        this.validateStatementNo = null;
        this.validateDestination = null;
        this.showSpinnerForAction = false;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.viewStatementRptLRDetlsPrint = false;
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
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            this.stmtRptDetails_localStorage = JSON.parse(localStorage.getItem('popupStmtRptLrDetls'));
            this.stmtRptAdditionDetails_localStorage = JSON.parse(localStorage.getItem('popupStmtRptLrDetlsAddition'));
            this.stmtRptDeductionDetails_localStorage = JSON.parse(localStorage.getItem('popupStmtRptLrDetlsDeduction'));
            localStorage.clear();
            // console.log(this.stmtRptDetails_localStorage);
            //console.log(this.stmtRptAdditionDetails_localStorage.split("#"));
            if (this.stmtRptDetails_localStorage != null && this.stmtRptDetails_localStorage != undefined &&
                this.stmtRptDetails_localStorage != "") {
                this.validateStatementNo = this.stmtRptDetails_localStorage.stmtId;
                this.validateDestination = this.stmtRptDetails_localStorage.destination;
                this.setBookingServiceReport();
            }
        }
    }
    StatementRptLrDetailsComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StatementRptLrDetailsComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var stmtNoPrint = this.stmtRptDetails_localStorage.stmtId;
        var destinationPrint = this.stmtRptDetails_localStorage.destination;
        var fromPeriodPrint = this.stmtRptDetails_localStorage.fromPeriod;
        var toPeriodPrint = this.stmtRptDetails_localStorage.toPeriod;
        this.dtOptionsStatementReportLrDetails = {
            dom: 'Bfrtip',
            //place holder in search/filter in datatable starts
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print LR Details</i>',
                    titleAttr: 'Print LR Details',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    exportOptions: {
                        columns: [0, 9, 2, 4, 1, 10, 6, 7, 5, 11, 8]
                    },
                    messageTop: function () {
                        return "<br><table style='width: 100%;'>" +
                            "<tr>" +
                            "<td style='width: 22%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Statement No</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + stmtNoPrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Destination&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + destinationPrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_9__(fromPeriodPrint).format('DD-MM-YYYY') + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_9__(toPeriodPrint).format('DD-MM-YYYY') + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:24px;'><u>Statement Report LR Details</u></strong><br>" +
                            //"<strong style='font-size:15px;'><u>Booking Chargeable / Unchargeable Service Tax</u></strong>" +
                            "</td>" +
                            "<td rowspan='3' align='left' style='width:22%;'>" +
                            "</td>" +
                            "</tr>" +
                            "</table><br>";
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td align='left' style='width: 20%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                            "</td>" +
                            "<td align='left' style='width: 30%;'>" +
                            "</td>" +
                            "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                            companyAddressDetls +
                            "</td>" +
                            "</tr></table>";
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel LR Details</i>',
                    titleAttr: 'Excel LR Details',
                    footer: true,
                    title: function () {
                        return "Statement Report LR Details" +
                            "From Date : " + fromPeriodPrint + " -  " +
                            "To Date : " + toPeriodPrint + " - " +
                            "Destination : " + destinationPrint + "" +
                            "Statement No : " + stmtNoPrint + "";
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                }
            ],
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
            "paging": true,
            "info": true,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                // computing column Total of the complete result 
                var article = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var topay = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var servTax = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chdWgt = api.column(11).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(2).footer()).html(article);
                $(api.column(5).footer()).html(actWgt);
                $(api.column(6).footer()).html(topay);
                $(api.column(7).footer()).html(paid);
                $(api.column(8).footer()).html(servTax);
                $(api.column(11).footer()).html(chdWgt);
            }
        },
            this.dtOptionsStatementReportLrAdditionDetails = {
                dom: 'Bfrtip',
                //place holder in search/filter in datatable starts
                buttons: [],
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                //place holder in search/filter in datatable ends
                processing: true,
                "order": [[1, "desc"]],
                //scroll in datatable starts
                responsive: true,
                "scrollX": true,
                "scrollY": 150,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
                "bFilter": false,
                "footerCallback": function (row, data, start, end, display) {
                    var api = this.api(), data;
                    // converting to interger to find total
                    var intVal = function (i) {
                        return typeof i === 'string' ?
                            +i.replace(/[\$,]/g, '') * 1 :
                            typeof i === 'number' ?
                                i : 0;
                    };
                    // computing column Total of the complete result 
                    var creditAmt = api.column(1).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    // Update footer by showing the total with the reference of the column index 
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html(creditAmt);
                }
            },
            this.dtOptionsStatementReportLrDeductionDetails = {
                dom: 'Bfrtip',
                //place holder in search/filter in datatable starts
                buttons: [],
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                //place holder in search/filter in datatable ends
                processing: true,
                "order": [[1, "desc"]],
                //scroll in datatable starts
                responsive: true,
                "scrollX": true,
                "scrollY": 150,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
                "bFilter": false,
                "footerCallback": function (row, data, start, end, display) {
                    var api = this.api(), data;
                    // converting to interger to find total
                    var intVal = function (i) {
                        return typeof i === 'string' ?
                            +i.replace(/[\$,]/g, '') * 1 :
                            typeof i === 'number' ?
                                i : 0;
                    };
                    // computing column Total of the complete result 
                    var debitAmt = api.column(1).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    // Update footer by showing the total with the reference of the column index 
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html(debitAmt);
                }
            };
    };
    StatementRptLrDetailsComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerStatementReportLrDetails.next();
        this.dtTriggerStatementReportLrAdditionDetails.next();
        this.dtTriggerStatementReportLrDeductionDetails.next();
    };
    StatementRptLrDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    StatementRptLrDetailsComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerStatementReportLrDetails.unsubscribe();
        this.dtTriggerStatementReportLrAdditionDetails.unsubscribe();
        this.dtTriggerStatementReportLrDeductionDetails.unsubscribe();
        // this.onDestroyUnsubscribtionStatementReport.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    StatementRptLrDetailsComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    StatementRptLrDetailsComponent.prototype.setBookingServiceReport = function () {
        var _this = this;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDto.fortNightStmtNo = this.stmtRptDetails_localStorage.stmtId;
        this.lrDto.destination = this.stmtRptDetails_localStorage.destination;
        this.lrDto.fromDate = this.stmtRptDetails_localStorage.fromPeriod;
        this.lrDto.toDate = this.stmtRptDetails_localStorage.toPeriod;
        this.lrDto.reportMode = "BookService";
        this.lrDto.mode = "destination";
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.showSpinnerForAction = true;
        //console.log(this.lrDto);
        this.destStmtReport.getBookingServiceTax(this.lrDto).subscribe(function (response) {
            //console.log(response);
            _this.statementReportLrDetailsDataList = [];
            $("#statementRptLrDetailsTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.statementReportLrDetailsDataList = response;
                setTimeout(function () {
                    _this.dtTriggerStatementReportLrDetails.next();
                }, 3000);
                _this.showSpinnerForAction = false;
                _this.setStatementRptLrDetlsAddition();
                _this.setStatementRptLrDetlsDeduction();
            }
            else {
                setTimeout(function () {
                    _this.dtTriggerStatementReportLrDetails.next();
                }, 3000);
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Alert", "NO DATAS FOUND FOR THIS INFORMATION", "info");
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred  While Statement Report LR Details", "info");
        }, function () { return console.log('done'); };
    };
    StatementRptLrDetailsComponent.prototype.setStatementRptLrDetlsAddition = function () {
        var _this = this;
        this.additionValueLRDtoList = [];
        this.statementReportLrAdditionDataList = [];
        $("#statementRptAdditionTableId").DataTable().destroy();
        if (this.stmtRptAdditionDetails_localStorage.length > 0) {
            for (var i = 0; i < this.stmtRptAdditionDetails_localStorage.length; i++) {
                var additionValue = this.stmtRptAdditionDetails_localStorage[i];
                var additionValueSplit = additionValue.split("_");
                this.additionValueLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
                this.additionValueLRDto.description = additionValueSplit[0];
                this.additionValueLRDto.totalAmount = additionValueSplit[1];
                this.additionValueLRDtoList.push(this.additionValueLRDto);
                this.statementReportLrAdditionDataList.push(this.additionValueLRDto);
            }
            setTimeout(function () {
                _this.dtTriggerStatementReportLrAdditionDetails.next();
            }, 3000);
        }
        else {
            setTimeout(function () {
                _this.dtTriggerStatementReportLrAdditionDetails.next();
            }, 3000);
        }
    };
    StatementRptLrDetailsComponent.prototype.setStatementRptLrDetlsDeduction = function () {
        var _this = this;
        this.deductionValueLRDtoList = [];
        this.statementReportLrDeductionDataList = [];
        $("#statementRptDeductionTableId").DataTable().destroy();
        if (this.stmtRptDeductionDetails_localStorage.length > 0) {
            for (var i = 0; i < this.stmtRptDeductionDetails_localStorage.length; i++) {
                var deductionValue = this.stmtRptDeductionDetails_localStorage[i];
                var deductionValueSplit = deductionValue.split("_");
                this.deductionValueLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
                this.deductionValueLRDto.description = deductionValueSplit[0];
                this.deductionValueLRDto.totalAmount = deductionValueSplit[1];
                this.statementReportLrDeductionDataList.push(this.deductionValueLRDto);
            }
            setTimeout(function () {
                _this.dtTriggerStatementReportLrDeductionDetails.next();
            }, 3000);
        }
        else {
            setTimeout(function () {
                _this.dtTriggerStatementReportLrDeductionDetails.next();
            }, 3000);
        }
    };
    StatementRptLrDetailsComponent.prototype.clickListnerForPrintStmtRptLr = function () {
        var _this = this;
        localStorage.clear();
        localStorage.setItem('stmtRptLrDtlsAdditionPrintLocalStorage', JSON.stringify(this.statementReportLrAdditionDataList));
        localStorage.setItem('stmtRptLrDtlsDeductionPrintLocalStorage', JSON.stringify(this.statementReportLrDeductionDataList));
        localStorage.setItem('stmtRptLrDtlsGeneralPrintLocalStorage', JSON.stringify(this.stmtRptDetails_localStorage));
        localStorage.setItem('stmtRptLrDtlsPrintLocalStorage', JSON.stringify(this.statementReportLrDetailsDataList));
        this.viewStatementRptLRDetlsPrint = true;
        window.addEventListener('afterprint', function (onclick) {
            if (_this.viewStatementRptLRDetlsPrint) {
                _this.viewStatementRptLRDetlsPrint = false;
                //this.invoiceDto = new InvoiceDto();
                //this.listOfLrDto =  [];
                localStorage.clear();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StatementRptLrDetailsComponent.prototype, "dtElements", void 0);
    StatementRptLrDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statement-rpt-lr-details',
            template: __webpack_require__(/*! ./statement-rpt-lr-details.component.html */ "./src/app/report/statement-reports/statement-rpt-lr-details/statement-rpt-lr-details.component.html"),
            styles: [__webpack_require__(/*! ./statement-rpt-lr-details.component.css */ "./src/app/report/statement-reports/statement-rpt-lr-details/statement-rpt-lr-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_8__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_11__["DestStmtReport"]])
    ], StatementRptLrDetailsComponent);
    return StatementRptLrDetailsComponent;
}());



/***/ }),

/***/ "./src/app/report/statement-reports/statement-rpt/statement-rpt.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/report/statement-reports/statement-rpt/statement-rpt.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\n/* the below code we add to view the option in popup modal starts  for truck master*/\r\n\r\n::ng-deep .cdk-overlay-container {\r\n\t/* Do you changes here */\r\n\tposition: fixed;\r\n\tz-index: 9999;\r\n}\r\n\r\n::ng-deep .cdk-overlay-pane {\r\n\tz-index: 9999;\r\n}\r\n\r\n::ng-deep .myCustomModalClass\t.modal-dialog {\r\n\tmax-width: 100%;\r\n}\r\n\r\n/* the below code we add to view the option in popup modal ends truck master*/\r\n\r\n/*@media print {\r\n\tbody, html * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#showStatementReport, #showStatementReport * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n}\r\n}*/\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0YXRlbWVudC1yZXBvcnRzL3N0YXRlbWVudC1ycHQvc3RhdGVtZW50LXJwdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztBQUVELHFGQUFxRjs7QUFDckY7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFDRCw4RUFBOEU7O0FBRTlFOzs7Ozs7OztHQVFHIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3N0YXRlbWVudC1yZXBvcnRzL3N0YXRlbWVudC1ycHQvc3RhdGVtZW50LXJwdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xyXG5cdHRvcDogMjZweDtcclxuICAgIGxlZnQ6IDE4OHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIHN0YXJ0cyAgZm9yIHRydWNrIG1hc3RlciovXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuXHQvKiBEbyB5b3UgY2hhbmdlcyBoZXJlICovXHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZSB7XHJcblx0ei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5teUN1c3RvbU1vZGFsQ2xhc3NcdC5tb2RhbC1kaWFsb2cge1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxufVxyXG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIGVuZHMgdHJ1Y2sgbWFzdGVyKi9cclxuXHJcbi8qQG1lZGlhIHByaW50IHtcclxuXHRib2R5LCBodG1sICoge1xyXG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdH1cclxuXHQjc2hvd1N0YXRlbWVudFJlcG9ydCwgI3Nob3dTdGF0ZW1lbnRSZXBvcnQgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG59XHJcbn0qL1xyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/report/statement-reports/statement-rpt/statement-rpt.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/report/statement-reports/statement-rpt/statement-rpt.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n<body>\n\t<!-- Row -->\n\t<div class=\"row\" id=\"showStatementReport\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Statement Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"stmtNo\">Statement No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"datewise\">Date Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"stmtNo\">Stmt No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"datewise\">Datewise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!hideshowStmtNoField\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Statement No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"statementNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!hideshowDestinationDropDown\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destinationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestination($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!hideshowFromToDateField\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\" id=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fromDatesModal\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!hideshowFromToDateField\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\" [(ngModel)]=\"toDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateSearchBtn();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t(click)=\"clearBtn();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable id=\"statementRptTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStatementReport\" [dtTrigger]=\"dtTriggerStatementReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Statement No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Statement Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>From Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Invoice</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Receivable Amount</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let statementReportData of statementReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<!--<td>{{ statementReportData.statementNo }}</td>-->\n\t\t\t\t\t\t\t\t\t\t<td style=\"color:blue;cursor: pointer;text-decoration: underline;\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"statementReportPopUpBtnLink(statementReportPopUpTemplate,statementReportData)\">\n\t\t\t\t\t\t\t\t\t\t\t{{ statementReportData.stmtId }}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.stmtDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.fromPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.toPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.totalInvoice }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.totalActWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.totalPaid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.receivableAmt }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--POP UP START HERE-->\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<ng-template #statementReportPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewStatementReportPopUp\" onafterPopUp=\"afterPopUp()\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"popupStatementRpt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-statement-rpt-lr-details>\n\t\t\t\t\t\t\t\t\t\t\t\t</app-statement-rpt-lr-details>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<button style=\"float: right;\" type=\"button\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"cancelBtnId\" (click)=\"closeStatementReportPopUp()\">Close\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/statement-reports/statement-rpt/statement-rpt.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/report/statement-reports/statement-rpt/statement-rpt.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StatementRptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementRptComponent", function() { return StatementRptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/dest-stmt-report */ "./src/app/dataService/dest-stmt-report.ts");
/* harmony import */ var src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dto/FortNightStmt-dto */ "./src/app/dto/FortNightStmt-dto.ts");
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













var StatementRptComponent = /** @class */ (function () {
    function StatementRptComponent(memoLessRpt, router, masterReadService, memoReport, modalService, destStmtReport) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        this.destStmtReport = destStmtReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerStatementReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.address = null;
        this.destinationTATemp = [];
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            /* return merge(debouncedText$, inputFocus$).pipe(
                 map(term => (term === '' ? this.destinationTA
                     : this.destinationTA.filter(v => v.destination)).slice(0, 200))
             );*/
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.showSpinnerForAction = false;
        this.validateStatementNumber = null;
        this.hideshowDestinationDropDown = false;
        this.hideshowStmtNoField = false;
        this.hideshowFromToDateField = false;
        this.viewStatementReportPopUp = false;
        this.rightsForStatementReport = "Right For Statement Report DestView";
        this.destView = false;
        this.fortNightStmtDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_15__["FortNightStmtDto"]();
        this.searchByAuthorityFortNightDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_15__["FortNightStmtDto"]();
        this.lrDtoAdditionList = [];
        this.lrDtoAdditionList1 = [];
        this.lrDtoDeductionList = [];
        this.lrDtoAddition = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDeduction = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.additionValueSplit = [];
        this.deductionValueSpilt = [];
        this.searchForAuthorization = function () {
            _this.showSpinnerForAction = true;
            //console.log(this.searchByAuthorityFortNightDto);
            _this.destStmtReport.chkAgentAutority(_this.searchByAuthorityFortNightDto).subscribe(function (response) {
                if (response.status == 'notExist') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "No Result Found",
                        text: "No Result Found " + $("#statementNo").val(),
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.statementReportDataList = [];
                    $("#statementRptTableId").DataTable().destroy();
                    _this.dtTriggerStatementReport.next();
                    _this.showSpinnerForAction = false;
                }
                else if (response.status == 'unauthorized') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "UnAuthorized",
                        text: "U are not authorized to view this informations",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.statementReportDataList = [];
                    $("#statementRptTableId").DataTable().destroy();
                    _this.dtTriggerStatementReport.next();
                    _this.showSpinnerForAction = false;
                }
                else {
                    _this.setStatementReportDetailsReport();
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred  While Checking Authorization of Statement verfication Details", "info");
            }, function () { return console.log('done'); };
        };
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
            this.hideshowStmtNoField = true;
            //if(this.rightsForStatementReport == "Right For Statement Report DestView"){
            if (this.userDataDtoReturnSession.role != null &&
                this.userDataDtoReturnSession.role == "Super Administrator") {
                this.destView = true;
                //this.hideshowDestinationDropDown = true;
                //this.getDestinationDetails();
            }
            else {
                this.destView = false;
                //this.hideshowDestinationDropDown = false;
            }
            if (this.destView == true) {
                this.getDestinationDetails();
            } /*lse{
this.hideshowDestinationDropDown = false;
            }*/
        }
    }
    StatementRptComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StatementRptComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var booleanShowDestinationDropDown = this.destView;
        console.log(booleanShowDestinationDropDown);
        this.dtOptionsStatementReport = {
            dom: 'Bfrtip',
            //place holder in search/filter in datatable starts
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        if (booleanShowDestinationDropDown == true) {
                            if ($("#viewType").val() == "stmtNo") {
                                return "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 22%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Statement No</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + $("#statementNo").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:24px;'><u>Statement Report</u></strong><br>" +
                                    "</td>" +
                                    "<td rowspan='3' align='left' style='width:22%;'>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                            else if ($("#viewType").val() == "datewise") {
                                return "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 22%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Destination&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + $("#destinationId").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:24px;'><u>Statement Report</u></strong><br>" +
                                    "</td>" +
                                    "<td rowspan='3' align='left' style='width:22%;'>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                        }
                        else {
                            if ($("#viewType").val() == "stmtNo") {
                                return "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 22%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Statement No</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + $("#statementNo").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:24px;'><u>Statement Report</u></strong><br>" +
                                    "</td>" +
                                    "<td rowspan='3' align='left' style='width:22%;'>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                            else if ($("#viewType").val() == "datewise") {
                                return "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 22%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:24px;'><u>Statement Report</u></strong><br>" +
                                    "</td>" +
                                    "<td rowspan='3' align='left' style='width:22%;'>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                        }
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td align='left' style='width: 20%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
                            "</td>" +
                            "<td align='left' style='width: 30%;'>" +
                            "</td>" +
                            "<td style='word-wrap: break-word;width: 50%;text-align: right;'>" +
                            companyAddressDetls +
                            "</td>" +
                            "</tr></table>";
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return " Statement Report - ";
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                }
            ],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            //place holder in search/filter in datatable ends
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 320,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": true,
            "info": true,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                // computing column Total of the complete result 
                var totLrs = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totInvoice = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totWgt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPayAmt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paidAmt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var receivableAmt = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(4).footer()).html(totLrs);
                $(api.column(5).footer()).html(totInvoice);
                $(api.column(6).footer()).html(totWgt);
                $(api.column(7).footer()).html(toPayAmt);
                $(api.column(8).footer()).html(paidAmt);
                $(api.column(9).footer()).html(receivableAmt);
            }
        };
    };
    StatementRptComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerStatementReport.next();
    };
    StatementRptComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    StatementRptComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerStatementReport.unsubscribe();
        // this.onDestroyUnsubscribtionStatementReport.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    StatementRptComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    StatementRptComponent.prototype.clickListnerForDestination = function (e, fubi) {
        this.modelDestination = e.item;
        $("#destinationId").val(this.modelDestination.destination);
    };
    StatementRptComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    StatementRptComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            if (response.length > 0) {
                _this.destinationOptions = response;
                _this.destinationTA = [];
                for (var i = 0; i < _this.destinationOptions.length; i++) {
                    _this.destinationTA.push(_this.destinationOptions[i]);
                }
                _this.destinationTATemp = _this.destinationTA;
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "While Getting destination details", "warning");
        },
            function () { return console.log('done'); };
    };
    ;
    /* viewTypeMode(viewType: string) {
     
         console.log(viewType);
         if (viewType === 'stmtNo') {
             this.clearField();
             this.hideshowStmtNoField = true;
             this.hideshowFromToDateField = false;
             this.hideshowDestinationDropDown = false;
         } else if (viewType === 'datewise') {
             this.clearField();
             this.hideshowStmtNoField = false;
             this.hideshowFromToDateField = true;
             //if(this.rightsForStatementReport == "Right For Statement Report DestView"){
             if (this.userDataDtoReturnSession.role != null &&
                 this.userDataDtoReturnSession.role == "Super Administrator") {
                 this.hideshowDestinationDropDown = true;
                 this.destinationTA = this.destinationTATemp;
             } else {
                 this.hideshowDestinationDropDown = false;
             }
         }
     }*/
    StatementRptComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'stmtNo') {
            this.hideshowStmtNoField = true;
            this.hideshowFromToDateField = false;
            this.hideshowDestinationDropDown = false;
            $("#statementNo").val('');
            this.fromDatesModal = null;
            this.toDatesModal = null;
            this.modelDestination = null;
            this.statementReportDataList = [];
            $("#statementRptTableId").DataTable().destroy();
            this.dtTriggerStatementReport.next();
        }
        else if (viewType === 'datewise') {
            this.hideshowStmtNoField = false;
            this.hideshowFromToDateField = true;
            //if(this.rightsForStatementReport == "Right For Statement Report DestView"){
            if (this.destView == true) {
                this.hideshowDestinationDropDown = true;
                this.destinationTA = this.destinationTATemp;
            }
            else {
                this.hideshowDestinationDropDown = false;
            }
            this.fromDatesModal = null;
            this.toDatesModal = null;
            this.modelDestination = null;
            $("#statementNo").val('');
            this.statementReportDataList = [];
            $("#statementRptTableId").DataTable().destroy();
            this.dtTriggerStatementReport.next();
        }
    };
    StatementRptComponent.prototype.clearField = function () {
        this.fromDatesModal = null;
        this.toDatesModal = null;
        this.modelDestination = null;
        this.validateDestination = null;
        $("#fromDates").val('');
        $("#fromDates").val('');
        $("#toDates").val('');
        $("#statementNo").val('');
        this.validateFromDate = null;
        this.validateToDate = null;
        $("#viewType").val('stmtNo');
    };
    StatementRptComponent.prototype.clearBtn = function () {
        this.clearField();
        this.statementReportDataList = [];
        $("#statementRptTableId").DataTable().destroy();
        this.dtTriggerStatementReport.next();
        this.hideshowStmtNoField = true;
        this.hideshowFromToDateField = false;
        this.hideshowDestinationDropDown = false;
    };
    StatementRptComponent.prototype.validateSearchBtn = function () {
        if (this.destView == true) {
            if ($("#viewType").val() == "stmtNo") {
                if (($("#statementNo").val() == null) ||
                    ($("#statementNo").val() == undefined) || ($("#statementNo").val() == "")) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Mandatory Fields", "Please enter the statement no", "warning");
                    return false;
                }
                else {
                    this.setStatementReportDetailsReport();
                }
            }
            else if ($("#viewType").val() == "datewise") {
                if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                    ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
                    ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
                    ($("#destinationId").val() == null) || ($("#destinationId").val() == undefined) ||
                    ($("#destinationId").val() == "")) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Mandatory Fields", "Please select the mandatory fields", "warning");
                    return false;
                }
                else {
                    this.setStatementReportDetailsReport();
                }
            }
        }
        else if (this.destView == false) {
            if ($("#viewType").val() == "stmtNo") {
                if (($("#statementNo").val() == null) ||
                    ($("#statementNo").val() == undefined) || ($("#statementNo").val() == "")) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Mandatory Fields", "Please enter the statement no", "warning");
                    return false;
                }
                else {
                    this.checkForAuthority();
                }
            }
            else if ($("#viewType").val() == "datewise") {
                if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                    ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
                    ($("#toDates").val() == undefined) || ($("#toDates").val() == "")) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Mandatory Fields", "Please select the mandatory fields", "warning");
                    return false;
                }
                else {
                    this.setStatementReportDetailsReport();
                }
            }
        }
        /* if (this.hideshowDestinationDropDown == true) {
             if ($("#statementNo").val() == null || $("#statementNo").val() == undefined ||
                 $("#statementNo").val() == "") {
                 swal("Mandatory Fields", "Please enter the statement no or datewise", "warning");
                 return false;
             } else if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                 ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
                 ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
                 ($("#destinationId").val() == null) || ($("#destinationId").val() == undefined) ||
                 ($("#destinationId").val() == "")) {
                 swal("Mandatory Fields", "Please select the mandatory fields", "warning");
                 return false;
             } else {
                 this.setStatementReportDetailsReport();
             }
         } else {
             if ($("#statementNo").val() == null || $("#statementNo").val() == undefined ||
                 $("#statementNo").val() == "") {
                 swal("Mandatory Fields", "Please enter the statement no or datewise", "warning");
                 return false;
             } else if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                 ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
                 ($("#toDates").val() == undefined) || ($("#toDates").val() == "")) {
                 swal("Mandatory Fields", "Please enter the from date & to date", "warning");
                 return false;
             } else {
                 this.checkForAuthority();
             }
             
         }*/
    };
    StatementRptComponent.prototype.checkForAuthority = function () {
        this.validateStatementNumber = $("#statementNo").val();
        this.searchByAuthorityFortNightDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_15__["FortNightStmtDto"]();
        this.searchByAuthorityFortNightDto.stmtNo = this.validateStatementNumber;
        this.searchByAuthorityFortNightDto.branch = this.userDataDtoReturnSession.office;
        this.searchByAuthorityFortNightDto.status = 'StmtRpt';
        this.searchForAuthorization();
    };
    StatementRptComponent.prototype.getStatementReportDetailsData = function () {
        this.fortNightStmtDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_15__["FortNightStmtDto"]();
        if (($("#viewType").val() == "stmtNo") && ($("#statementNo").val() != null) &&
            ($("#statementNo").val() != undefined) && ($("#statementNo").val() != "")) {
            this.fortNightStmtDto.mode = "STMT";
        }
        else {
            this.fortNightStmtDto.mode = "Date";
        }
        this.validateStatementNumber = $("#statementNo").val();
        this.validateFromDate = $("#fromDates").val();
        this.validateToDate = $("#toDates").val();
        this.validateDestination = $("#destinationId").val();
        this.fortNightStmtDto.branch = this.userDataDtoReturnSession.office;
        this.fortNightStmtDto.status = "StmtRpt";
        this.fortNightStmtDto.stmtNo = this.validateStatementNumber;
        if (($("#fromDates").val() != null) && ($("#fromDates").val() != "") &&
            ($("#toDates").val() != null) && ($("#toDates").val() != "")) {
            this.fortNightStmtDto.fromDate = this.validateFromDate;
            this.fortNightStmtDto.toDate = this.validateToDate;
        }
        //if(this.rightsForStatementReport == "Right For Statement Report DestView"){
        /*if (this.userDataDtoReturnSession.role != null &&
            this.userDataDtoReturnSession.role == "Super Administrator") {*/
        if (this.hideshowDestinationDropDown == true) {
            this.fortNightStmtDto.destination = this.validateDestination;
        }
        else {
            this.fortNightStmtDto.destination = this.userDataDtoReturnSession.mainStation;
        }
        this.fortNightStmtDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    StatementRptComponent.prototype.setStatementReportDetailsReport = function () {
        var _this = this;
        this.getStatementReportDetailsData();
        this.showSpinnerForAction = true;
        this.destStmtReport.getStatementReportDetails(this.fortNightStmtDto).subscribe(function (response) {
            //console.log(response);
            _this.statementReportDataList = [];
            $("#statementRptTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.statementReportDataList = response;
                _this.dtTriggerStatementReport.next();
            }
            else {
                _this.dtTriggerStatementReport.next();
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "NO DATAS FOUND FOR THIS INFORMATION", "info");
            }
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred  While Statement Report Details", "info");
        }, function () { return console.log('done'); };
    };
    StatementRptComponent.prototype.getDismissReason = function (reason) {
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
    StatementRptComponent.prototype.statementReportPopUpBtnLink = function (statementReportPopUpTemplate, statementReportData) {
        var _this = this;
        this.modalRefferenceStatementRptPopUp = this.modalService.open(statementReportPopUpTemplate, { centered: true, windowClass: "myCustomModalClass" });
        this.modalRefferenceStatementRptPopUp.result.then(function (result) {
            _this.modalRefferenceStatementRptClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceStatementRptClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
        var additionValue = null, deductionValue = null;
        //var additionValueSplit = null, deductionValueSpilt = null;
        additionValue = statementReportData.multipleAdd;
        deductionValue = statementReportData.multipleDed;
        //console.log(additionValue);
        //console.log(deductionValue);
        this.additionValueSplit = additionValue.split("#");
        this.deductionValueSpilt = deductionValue.split("#");
        localStorage.clear();
        localStorage.setItem('popupStmtRptLrDetls', JSON.stringify(statementReportData));
        localStorage.setItem('popupStmtRptLrDetlsAddition', JSON.stringify(this.additionValueSplit));
        localStorage.setItem('popupStmtRptLrDetlsDeduction', JSON.stringify(this.deductionValueSpilt));
        this.viewStatementReportPopUp = true;
        window.addEventListener('afterPopUp', function (event) {
            _this.viewStatementReportPopUp = false;
        });
    };
    StatementRptComponent.prototype.closeStatementReportPopUp = function () {
        this.modalRefferenceStatementRptPopUp.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StatementRptComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('statementReportPopUpTemplate'),
        __metadata("design:type", Object)
    ], StatementRptComponent.prototype, "statementReportPopUpTemplate", void 0);
    StatementRptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statement-rpt',
            template: __webpack_require__(/*! ./statement-rpt.component.html */ "./src/app/report/statement-reports/statement-rpt/statement-rpt.component.html"),
            styles: [__webpack_require__(/*! ./statement-rpt.component.css */ "./src/app/report/statement-reports/statement-rpt/statement-rpt.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_14__["DestStmtReport"]])
    ], StatementRptComponent);
    return StatementRptComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-report-statement-reports-statement-reports-module.js.map