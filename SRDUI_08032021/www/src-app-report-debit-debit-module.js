(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-report-debit-debit-module"],{

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

/***/ "./src/app/report/debit/debit-note-report/debit-note-report.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/report/debit/debit-note-report/debit-note-report.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n  top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2RlYml0L2RlYml0LW5vdGUtcmVwb3J0L2RlYml0LW5vdGUtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0lBQ1AsVUFBVTtDQUNiLGtCQUFrQjtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvZGViaXQvZGViaXQtbm90ZS1yZXBvcnQvZGViaXQtbm90ZS1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvdyB7XHJcbiAgdG9wOjI2cHg7XHJcbiAgICBsZWZ0OjI1cHg7XHJcblx0bWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/report/debit/debit-note-report/debit-note-report.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/report/debit/debit-note-report/debit-note-report.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Debit Note Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"stmtNoWise\">Statement Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"dateWise\">Date Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showStmtWise\"class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Statement No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"statementNo\" name=\"statementNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestination\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destination\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showDateWise\"class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"id=\"fromDate\"[(ngModel)]=\"fromDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showDateWise\"class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"[(ngModel)]=\"toDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div  *ngIf=\"showDateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Debit Head</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"debitHead\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDebitHead\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDebitHead\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"debitHeadListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDeebitHead\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDeebitHead\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDebitHeadTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Debit\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewOtherDebit\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Sub Head</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"subHead\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDebitHeadOthers\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDebitHeadOthers\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDebitHeadOthers\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDebitHeadOthers\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDebitHeadOthersTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Sub Head\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\"(click)=\"searchMethod()\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"(click)=\"clearMethod()\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Debit Note Report {{setTheDestOnTable}}</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"debitNoteRptId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDebitNoteRpt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDebitNoteRpt\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Received Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Statement Number</th> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let debitNoteRptData of debitNoteRptDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteRptData.receivedDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteRptData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteRptData.debit }}</td>\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteRptData.stmtNo }}</td> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/debit/debit-note-report/debit-note-report.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/report/debit/debit-note-report/debit-note-report.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DebitNoteReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitNoteReportComponent", function() { return DebitNoteReportComponent; });
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
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dto/FortNightStmt-dto */ "./src/app/dto/FortNightStmt-dto.ts");
/* harmony import */ var src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/dest-stmt-report */ "./src/app/dataService/dest-stmt-report.ts");
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















var DebitNoteReportComponent = /** @class */ (function () {
    function DebitNoteReportComponent(router, masterReadService, datePipe, lrReportService, masterService, destStmtReport) {
        var _this = this;
        this.router = router;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        this.lrReportService = lrReportService;
        this.masterService = masterService;
        this.destStmtReport = destStmtReport;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.dtTriggerDebitNoteRpt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.viewDestination = false;
        this.destView = false;
        this.fortNightStmtDebitHeadDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__["FortNightStmtDto"]();
        this.fortNightStmtDebitHeadAllOptions = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__["FortNightStmtDto"]();
        this.debitHeadTA = [];
        this.focusDebitHeadTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchDebitHead = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDebitHeadTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.debitHeadTA
                : _this.debitHeadTA.filter(function (v) { return v.mainDebitHeads.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDeebitHead = function (x) { return x.mainDebitHeads; };
        this.fortNightStmtDebitHeadOthersDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__["FortNightStmtDto"]();
        this.debitHeadOthersTA = [];
        this.focusDebitHeadOthersTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchDebitHeadOthers = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDebitHeadOthersTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.debitHeadOthersTA
                : _this.debitHeadOthersTA.filter(function (v) { return v.subDebitHeads.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDebitHeadOthers = function (x) { return x.subDebitHeads; };
        this.showStmtWise = true;
        this.showDateWise = false;
        this.viewOtherDebit = false;
        this.searchByFortNightDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__["FortNightStmtDto"]();
        this.searchByAuthorityFortNightDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__["FortNightStmtDto"]();
        this.showDest = 'DebitNoteRpt DestView';
        this.getDebitNoteMasterList = function () {
            _this.getDebitNoteMasterListRead();
            _this.masterReadService.getDebitNoteMaster(_this.fortNightStmtDebitHeadDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response) {
                    if (response.length > 0) {
                        _this.debitHeadOptions = response;
                        _this.debitHeadTA = [];
                        _this.fortNightStmtDebitHeadAllOptions.mainDebitHeads = 'All';
                        _this.debitHeadTA.push(_this.fortNightStmtDebitHeadAllOptions);
                        for (var i = 0; i < _this.debitHeadOptions.length; i++) {
                            _this.debitHeadTA.push(_this.debitHeadOptions[i]);
                        }
                    }
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Debit  Head details", "info");
            }, function () { return console.log('done'); };
        };
        this.getDebitNoteMasterForOthersList = function () {
            _this.getDebitNoteMasterListForOthersRead();
            _this.masterReadService.getDebitNoteMaster(_this.fortNightStmtDebitHeadOthersDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response) {
                    if (response.length > 0) {
                        _this.debitHeadOthersOptions = response;
                        _this.debitHeadOthersTA = [];
                        for (var i = 0; i < _this.debitHeadOthersOptions.length; i++) {
                            _this.debitHeadOthersTA.push(_this.debitHeadOthersOptions[i]);
                        }
                        console.log(_this.debitHeadOthersTA);
                    }
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Sub  Head details", "info");
            }, function () { return console.log('done'); };
        };
        this.searchForAuthorization = function () {
            _this.destStmtReport.chkAgentAutority(_this.searchByAuthorityFortNightDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.status == 'notExist') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "No Result Found",
                        text: "No Result Found " + _this.enteredStatementNumber,
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    $("#debitNoteRptId").DataTable().destroy();
                    _this.debitNoteRptDataList = [];
                    _this.dtTriggerDebitNoteRpt.next();
                }
                else if (response.status == 'unauthorized') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "UnAuthorized",
                        text: "U are not authorized to view this informations",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    $("#debitNoteRptId").DataTable().destroy();
                    _this.debitNoteRptDataList = [];
                    _this.dtTriggerDebitNoteRpt.next();
                }
                else {
                    if ((_this.searchByAuthorityFortNightDto.reportMode == 'ALL') || (_this.searchByAuthorityFortNightDto.reportMode == 'specific')) {
                        _this.getDebitDetailsForListBox();
                    }
                    else if (_this.searchByAuthorityFortNightDto.reportMode == 'select') {
                        _this.getDebitDetails();
                    }
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred  While Checking Authorization of Debit head Details", "info");
            }, function () { return console.log('done'); };
        };
        this.getDebitDetailsForListBox = function () {
            _this.showSpinnerForAction = true;
            _this.setDescription = $("#debitHead").val();
            if (_this.viewOtherDebit == true) {
                _this.setDescription = $("#subHead").val();
            }
            if (_this.setDescription == null || _this.setDescription == '') {
                _this.setDescription = 'NA';
            }
            _this.searchByFortNightDto.description = _this.setDescription;
            console.log(_this.searchByFortNightDto);
            _this.destStmtReport.getDebitNoteReportDetails(_this.searchByFortNightDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#debitNoteRptId").DataTable().destroy();
                _this.debitNoteRptDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.debitNoteRptDataList = response;
                    console.log(_this.debitNoteRptDataList);
                }
                _this.dtTriggerDebitNoteRpt.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Debit Head details", "info");
            }, function () { return console.log('done'); };
        };
        this.getDebitDetails = function () {
            _this.showSpinnerForAction = true;
            _this.setDescription = $("#debitHead").val();
            if (_this.viewOtherDebit == true) {
                _this.setDescription = $("#subHead").val();
            }
            if (_this.setDescription == null || _this.setDescription == '') {
                _this.setDescription = 'NA';
            }
            _this.searchByFortNightDto.description = _this.setDescription;
            console.log(_this.searchByFortNightDto);
            _this.destStmtReport.getDebitNoteReportDetails(_this.searchByFortNightDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#debitNoteRptId").DataTable().destroy();
                _this.debitNoteRptDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.debitNoteRptDataList = response;
                    console.log(_this.debitNoteRptDataList);
                }
                _this.dtTriggerDebitNoteRpt.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the Debit Head details", "info");
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
            this.office = this.userDataDtoReturnSession.office == null ? '' : this.userDataDtoReturnSession.office;
            this.getDebitNoteMasterList();
            this.getDebitNoteMasterForOthersList();
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "DebitNoteRpt DestView") {
                        //New Rights not given
                        this.destView = true;
                    }
                }
            }
            /*if (this.showDest=='DebitNoteRpt DestView') {
                this.destView=true;
                }*/
            /* if ( this.userDataDtoReturnSession.role != null
                        && this.userDataDtoReturnSession.role =="Super Administrator") {
                    this.destView =true;
                }*/
            if (this.destView == true) {
                this.getDestinationDetails();
            }
            else {
                this.viewDestination = false;
            }
        }
    }
    DebitNoteReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    DebitNoteReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    DebitNoteReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    DebitNoteReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerDebitNoteRpt.next();
    };
    DebitNoteReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDebitNoteRpt.unsubscribe();
    };
    DebitNoteReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var mainStation = this.office;
        console.log(mainStation);
        var destVisible = false;
        if (this.destView == true) {
            destVisible = true;
        }
        else {
            destVisible = false;
        }
        this.dtOptionsDebitNoteRpt = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '13px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        var returnVal = null;
                        if (destVisible == true) {
                            if ($("#searchBy").val() == 'stmtNoWise') {
                                returnVal = "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 30%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Stmt No. &nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>" + $("#statementNo").val() + "</strong>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:40%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:25px;'><u>Debit Note Report</u></strong><br>" +
                                    "</td>" +
                                    "<td  align='left' style='width:30%;'>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                            else {
                                returnVal = "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 30%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:25px;'><u>Debit Note Report</u></strong><br>" +
                                    "</td>" +
                                    "<td align='left' style='width:40%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Destination</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + $("#destination").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Debit Head &nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                    "<span style='font-size:15px;'>" + $("#debitHead").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                        }
                        else {
                            if ($("#searchBy").val() == 'stmtNoWise') {
                                returnVal = "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 30%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Stmt No. &nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>" + $("#statementNo").val() + "</strong>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:40%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:25px;'><u>Debit Note Report</u></strong><br>" +
                                    "</td>" +
                                    "<td  align='left' style='width:30%;'>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                            else {
                                returnVal = "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 30%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:25px;'><u>Debit Note Report</u></strong><br>" +
                                    "</td>" +
                                    "<td align='left' style='width:40%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Destination</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + mainStation + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Debit Head &nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important;word-wrap:break-word;'>" +
                                    "<span style='font-size:15px;'>" + $("#debitHead").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                        }
                        return returnVal;
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
                        var returnSummaryExcel = null;
                        if (destVisible == true) {
                            if ($("#searchBy").val() == 'stmtNoWise') {
                                returnSummaryExcel = "Debit Note Report" +
                                    " Statement Number : " + $("#statementNo").val();
                            }
                            else {
                                returnSummaryExcel = "Debit Note Report" +
                                    " From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format('DD-MM-YYYY') + " Destination : " + $("#destination").val() + " Debit Head : " + $("#debitHead").val();
                            }
                        }
                        else {
                            if ($("#searchBy").val() == 'stmtNoWise') {
                                returnSummaryExcel = "Debit Note Report" +
                                    " Statement Number : " + $("#statementNo").val();
                            }
                            else {
                                returnSummaryExcel = "Debit Note Report" +
                                    " From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format('DD-MM-YYYY') + " Destination : " + mainStation + " Debit Head : " + $("#debitHead").val();
                            }
                        }
                        return returnSummaryExcel;
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                }
            ],
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": false,
            "scrollY": 300,
            "scrollCollapse": true,
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
                var debit = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html(debit);
                //$( api.column( 3 ).footer() ).html();
            }
        };
    };
    DebitNoteReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    DebitNoteReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    DebitNoteReportComponent.prototype.getDestinationDetails = function () {
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
    DebitNoteReportComponent.prototype.getDebitNoteMasterListRead = function () {
        this.fortNightStmtDebitHeadDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__["FortNightStmtDto"]();
        this.fortNightStmtDebitHeadDto.companyId = this.userDataDtoReturnSession.companyId;
        this.fortNightStmtDebitHeadDto.reportMode = "listBox";
    };
    DebitNoteReportComponent.prototype.debitHeadListener = function (e) {
        this.modelDebitHeadForGet = e.item;
        if (this.modelDebitHeadForGet.mainDebitHeads == "Others") {
            this.viewOtherDebit = true;
        }
        else {
            this.viewOtherDebit = false;
        }
    };
    DebitNoteReportComponent.prototype.getDebitNoteMasterListForOthersRead = function () {
        this.fortNightStmtDebitHeadOthersDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__["FortNightStmtDto"]();
        this.fortNightStmtDebitHeadOthersDto.companyId = this.userDataDtoReturnSession.companyId;
        this.fortNightStmtDebitHeadOthersDto.reportMode = "subHeads";
        this.fortNightStmtDebitHeadOthersDto.mainDebitHeads = "Others";
        console.log(this.fortNightStmtDebitHeadOthersDto);
    };
    DebitNoteReportComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'stmtNoWise') {
            this.showStmtWise = true;
            this.showDateWise = false;
            $("#fromDate").val('');
            $("#toDate").val('');
            $("#debitNoteRptId").DataTable().destroy();
            this.debitNoteRptDataList = [];
            this.dtTriggerDebitNoteRpt.next();
            $("#statementNo").val('');
            this.viewDestination = false;
            this.modelDestination = '';
            this.fromDateModel = null;
            this.toDateModel = null;
        }
        else if (searchBy === 'dateWise') {
            this.showStmtWise = false;
            this.showDateWise = true;
            $("#fromDate").val('');
            $("#toDate").val('');
            $("#debitNoteRptId").DataTable().destroy();
            this.debitNoteRptDataList = [];
            this.dtTriggerDebitNoteRpt.next();
            $("#statementNo").val('');
            if (this.destView == true) {
                this.viewDestination = true;
                $("#destination").val('');
            }
            else {
                this.viewDestination = false;
            }
            this.modelDestination = '';
            this.fromDateModel = null;
            this.toDateModel = null;
        }
        else {
            this.showStmtWise = false;
            this.showDateWise = false;
            $("#fromDate").val('');
            $("#toDate").val('');
            $("#debitNoteRptId").DataTable().destroy();
            this.debitNoteRptDataList = [];
            this.dtTriggerDebitNoteRpt.next();
            $("#statementNo").val('');
            if (this.destView == true) {
                this.viewDestination = true;
                $("#destination").val('');
            }
            else {
                this.viewDestination = false;
            }
            this.modelDestination = '';
            this.fromDateModel = null;
            this.toDateModel = null;
        }
    };
    DebitNoteReportComponent.prototype.searchMethod = function () {
        this.selectedSearchBy = $("#searchBy").val();
        this.enteredStatementNumber = $("#statementNo").val();
        this.selectedDebitHead = $("#debitHead").val();
        this.selectedSubHead = $("#subHead").val();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedDestination = $("#destination").val();
        this.searchByFortNightDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__["FortNightStmtDto"]();
        if (this.enteredStatementNumber != null && this.enteredStatementNumber != '') {
            this.searchByFortNightDto.mode = 'STMT';
        }
        else {
            this.searchByFortNightDto.mode = 'DEST';
        }
        if (this.destView == true) {
            this.setTheDestOnTable = " For " + this.selectedDestination;
        }
        else {
            this.setTheDestOnTable = " For " + this.userDataDtoReturnSession.office;
        }
        if (this.selectedDebitHead != null && this.selectedDebitHead != '' && this.selectedDebitHead == 'All') {
            this.searchByFortNightDto.reportMode = 'ALL';
        }
        else if (this.selectedDebitHead != null && this.selectedDebitHead != '' && this.selectedDebitHead != 'All') {
            this.searchByFortNightDto.reportMode = 'specific';
        }
        else {
            this.searchByFortNightDto.reportMode = 'select';
        }
        if (this.selectedDebitHead != null && this.selectedDebitHead != '' && this.selectedDebitHead == 'miscellaneous') {
            this.searchByFortNightDto.modeForMiscellaneous = 'miscellaneous';
        }
        else {
            this.searchByFortNightDto.modeForMiscellaneous = null;
        }
        if (this.selectedSearchBy == "stmtNoWise") {
            if (this.enteredStatementNumber == null || this.enteredStatementNumber == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Warning",
                    text: "Please Enter Statement Number!",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
            else {
                if (this.userDataDtoReturnSession.role != null
                    && this.userDataDtoReturnSession.role == "Super Administrator") {
                    this.searchByFortNightDto.stmtNo = this.enteredStatementNumber;
                    if ((this.searchByFortNightDto.reportMode == 'ALL') || (this.searchByFortNightDto.reportMode == 'specific')) {
                        this.getDebitDetailsForListBox();
                    }
                    else if (this.searchByFortNightDto.reportMode == 'select') {
                        this.getDebitDetails();
                    }
                }
                else {
                    this.searchByFortNightDto.stmtNo = this.enteredStatementNumber;
                    this.checkForAuthority();
                }
            }
            this.setTheDestOnTable = '';
        }
        else if (this.selectedSearchBy == "dateWise") {
            if (this.selectedFromDate == null || this.selectedFromDate == '' || this.selectedToDate == null || this.selectedToDate == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Mandatory Field",
                    text: "From Date , To Date Is Mandatory Fields",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
            else {
                if (this.userDataDtoReturnSession.role != null
                    && this.userDataDtoReturnSession.role == "Super Administrator") {
                    if (this.selectedDestination != null || this.selectedDestination != '') {
                        this.searchByFortNightDto.destination = this.selectedDestination;
                    }
                    else {
                        this.searchByFortNightDto.destination = this.userDataDtoReturnSession.office;
                    }
                }
                else {
                    this.searchByFortNightDto.destination = this.userDataDtoReturnSession.office;
                }
                this.searchByFortNightDto.fromDate = this.selectedFromDate;
                this.searchByFortNightDto.toDate = this.selectedToDate;
                if ((this.searchByFortNightDto.reportMode == 'ALL') || (this.searchByFortNightDto.reportMode == 'specific')) {
                    this.getDebitDetailsForListBox();
                }
                else if (this.searchByFortNightDto.reportMode == 'select') {
                    this.getDebitDetails();
                }
            }
        }
    };
    DebitNoteReportComponent.prototype.checkForAuthority = function () {
        this.enteredStatementNumber = $("#statementNo").val();
        this.selectedDebitHead = $("#debitHead").val();
        this.searchByAuthorityFortNightDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__["FortNightStmtDto"]();
        this.searchByAuthorityFortNightDto.stmtNo = this.enteredStatementNumber;
        this.searchByAuthorityFortNightDto.branch = this.userDataDtoReturnSession.office;
        this.searchByAuthorityFortNightDto.status = 'DebitRpt';
        if (this.selectedDebitHead != null && this.selectedDebitHead != '' && this.selectedDebitHead == 'All') {
            this.searchByAuthorityFortNightDto.reportMode = 'ALL';
        }
        else if (this.selectedDebitHead != null && this.selectedDebitHead != '' && this.selectedDebitHead != 'All') {
            this.searchByAuthorityFortNightDto.reportMode = 'specific';
        }
        else {
            this.searchByAuthorityFortNightDto.reportMode = 'select';
        }
        this.searchForAuthorization();
        console.log(this.searchByAuthorityFortNightDto);
    };
    DebitNoteReportComponent.prototype.clearMethod = function () {
        this.setDescription = 'NA';
        this.showStmtWise = true;
        $("#searchBy").val('stmtNoWise');
        this.showDateWise = false;
        $("#fromDate").val('');
        $("#toDate").val('');
        $("#debitNoteRptId").DataTable().destroy();
        this.debitNoteRptDataList = [];
        this.dtTriggerDebitNoteRpt.next();
        $("#statementNo").val('');
        this.viewDestination = false;
        this.modelDestination = '';
        this.fromDateModel = null;
        this.toDateModel = null;
        this.searchByAuthorityFortNightDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__["FortNightStmtDto"]();
        this.fortNightStmtDebitHeadDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__["FortNightStmtDto"]();
        this.searchByFortNightDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_14__["FortNightStmtDto"]();
        this.enteredStatementNumber = '';
        $("#statementNo").val('');
        this.selectedDebitHead = '';
        this.modelDebitHead = 'All';
        this.modelDebitHeadOthers = '';
        $("#debitHead").val('All');
        $("#subHead").val('');
        this.selectedSubHead =
            this.selectedFromDate = '';
        this.selectedToDate = '';
        this.selectedDestination = '';
        this.viewOtherDebit = false;
        this.setTheDestOnTable = '';
        $("#destination").val(this.office);
        this.modelDebitHeadForGet = '';
        this.showSpinnerForAction = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DebitNoteReportComponent.prototype, "dtElements", void 0);
    DebitNoteReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-debit-note-report',
            template: __webpack_require__(/*! ./debit-note-report.component.html */ "./src/app/report/debit/debit-note-report/debit-note-report.component.html"),
            styles: [__webpack_require__(/*! ./debit-note-report.component.css */ "./src/app/report/debit/debit-note-report/debit-note-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__["MasterReadService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_11__["LrReportService"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_13__["MasterService"], src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_15__["DestStmtReport"]])
    ], DebitNoteReportComponent);
    return DebitNoteReportComponent;
}());



/***/ }),

/***/ "./src/app/report/debit/debit.module.ts":
/*!**********************************************!*\
  !*** ./src/app/report/debit/debit.module.ts ***!
  \**********************************************/
/*! exports provided: DebitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitModule", function() { return DebitModule; });
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
/* harmony import */ var src_app_report_debit_debit_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/debit/debit.routing */ "./src/app/report/debit/debit.routing.ts");
/* harmony import */ var src_app_report_debit_summary_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/debit/summary/summary.component */ "./src/app/report/debit/summary/summary.component.ts");
/* harmony import */ var src_app_report_debit_debit_note_report_debit_note_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/debit/debit-note-report/debit-note-report.component */ "./src/app/report/debit/debit-note-report/debit-note-report.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends




var DebitModule = /** @class */ (function () {
    function DebitModule() {
    }
    DebitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_debit_debit_routing__WEBPACK_IMPORTED_MODULE_10__["DebitRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"]],
            declarations: [
                src_app_report_debit_summary_summary_component__WEBPACK_IMPORTED_MODULE_11__["SummaryComponent"],
                src_app_report_debit_debit_note_report_debit_note_report_component__WEBPACK_IMPORTED_MODULE_12__["DebitNoteReportComponent"]
            ]
        })
    ], DebitModule);
    return DebitModule;
}());



/***/ }),

/***/ "./src/app/report/debit/debit.routing.ts":
/*!***********************************************!*\
  !*** ./src/app/report/debit/debit.routing.ts ***!
  \***********************************************/
/*! exports provided: DebitRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitRoutes", function() { return DebitRoutes; });
/* harmony import */ var src_app_report_debit_summary_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/report/debit/summary/summary.component */ "./src/app/report/debit/summary/summary.component.ts");
/* harmony import */ var src_app_report_debit_debit_note_report_debit_note_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report/debit/debit-note-report/debit-note-report.component */ "./src/app/report/debit/debit-note-report/debit-note-report.component.ts");


var DebitRoutes = [
    {
        path: '',
        children: [
            {
                path: 'summary',
                component: src_app_report_debit_summary_summary_component__WEBPACK_IMPORTED_MODULE_0__["SummaryComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'debitNoteReport',
                component: src_app_report_debit_debit_note_report_debit_note_report_component__WEBPACK_IMPORTED_MODULE_1__["DebitNoteReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/report/debit/summary/summary.component.css":
/*!************************************************************!*\
  !*** ./src/app/report/debit/summary/summary.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9kZWJpdC9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/report/debit/summary/summary.component.html":
/*!*************************************************************!*\
  !*** ./src/app/report/debit/summary/summary.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Debit Note Summary Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteDestination=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationOptions | filter: controlMain.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestination.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Debit Note Summary\n\t\t\t\t\t\t\t\tReport</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDebitNoteSummaryReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDebitNoteSummaryReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Check Post Expenses</th>\n\t\t\t\t\t\t\t\t\t\t<th>Claims</th>\n\t\t\t\t\t\t\t\t\t\t<th>Delhi Party Less</th>\n\t\t\t\t\t\t\t\t\t\t<th>Door Delivery</th>\n\t\t\t\t\t\t\t\t\t\t<th>Load&UnLoad Hamali</th>\n\t\t\t\t\t\t\t\t\t\t<th>Mumbai Parties Less</th>\n\t\t\t\t\t\t\t\t\t\t<th>Sharing Of Rent</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tempo Freight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Others</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let debitNoteSummaryData of debitNoteSummaryReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteSummaryData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteSummaryData.checkPostExpenses }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteSummaryData.claims }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteSummaryData.delhiPartyLess }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteSummaryData.doorDelivery }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteSummaryData.loadUnloadHamali }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteSummaryData.mumbaiPartiesLess }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteSummaryData.sharingOfRent }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteSummaryData.tempoFreight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteSummaryData.others }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/debit/summary/summary.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/report/debit/summary/summary.component.ts ***!
  \***********************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
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
//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends

//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter starts

//for the select option with filter ends
var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(debitNoteSummaryReport) {
        this.debitNoteSummaryReport = debitNoteSummaryReport;
        this.loadingIndicator = true;
        this.controlMain = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.destinationOptions = [
            { id: 1, label: 'ALL' },
            { id: 2, label: 'Alleppey' },
            { id: 3, label: 'Alwaye' },
            { id: 4, label: 'Aurangabad' }
        ];
        this.dtTriggerDebitNoteSummaryReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SummaryComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsDebitNoteSummaryReport = {
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
        this.getDataFrmServiceFrTable = this.debitNoteSummaryReport.getSummaryData();
        this.onDestroyUnsubscribtionDebitNoteSummaryReport = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.debitNoteSummaryReportDataList = data['data'];
            _this.dtTriggerDebitNoteSummaryReport.next();
        });
    };
    SummaryComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDebitNoteSummaryReport.unsubscribe();
        this.onDestroyUnsubscribtionDebitNoteSummaryReport.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], SummaryComponent.prototype, "dtElements", void 0);
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/report/debit/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/report/debit/summary/summary.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-report-debit-debit-module.js.map