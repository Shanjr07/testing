(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-stock-customization-customization-module"],{

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

/***/ "./src/app/stock/customization/customization.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/stock/customization/customization.module.ts ***!
  \*************************************************************/
/*! exports provided: CustomizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizationModule", function() { return CustomizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/autocomplete/autocomplete.module */ "./src/app/autocomplete/autocomplete.module.ts");
/* harmony import */ var src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/report/daily-report/daily-report.module */ "./src/app/report/daily-report/daily-report.module.ts");
/* harmony import */ var src_app_stock_customization_customization_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/stock/customization/customization.routing */ "./src/app/stock/customization/customization.routing.ts");
/* harmony import */ var src_app_stock_customization_manual_stock_check_manual_stock_check_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/stock/customization/manual-stock-check/manual-stock-check.component */ "./src/app/stock/customization/manual-stock-check/manual-stock-check.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//for select option search starts




//for select option search ends



//import { DashboardModule } from "src/app/dashboards/dashboard.module";
var CustomizationModule = /** @class */ (function () {
    function CustomizationModule() {
    }
    CustomizationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_stock_customization_customization_routing__WEBPACK_IMPORTED_MODULE_9__["CustomizationRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_7__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_8__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"]],
            declarations: [
                src_app_stock_customization_manual_stock_check_manual_stock_check_component__WEBPACK_IMPORTED_MODULE_10__["ManualStockCheckComponent"],
            ]
        })
    ], CustomizationModule);
    return CustomizationModule;
}());



/***/ }),

/***/ "./src/app/stock/customization/customization.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/stock/customization/customization.routing.ts ***!
  \**************************************************************/
/*! exports provided: CustomizationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizationRoutes", function() { return CustomizationRoutes; });
/* harmony import */ var src_app_stock_customization_manual_stock_check_manual_stock_check_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/stock/customization/manual-stock-check/manual-stock-check.component */ "./src/app/stock/customization/manual-stock-check/manual-stock-check.component.ts");

var CustomizationRoutes = [
    {
        path: '',
        children: [
            {
                path: 'manualStockCheck',
                component: src_app_stock_customization_manual_stock_check_manual_stock_check_component__WEBPACK_IMPORTED_MODULE_0__["ManualStockCheckComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/stock/customization/manual-stock-check/manual-stock-check.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/stock/customization/manual-stock-check/manual-stock-check.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL2N1c3RvbWl6YXRpb24vbWFudWFsLXN0b2NrLWNoZWNrL21hbnVhbC1zdG9jay1jaGVjay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/stock/customization/manual-stock-check/manual-stock-check.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/stock/customization/manual-stock-check/manual-stock-check.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<h6 class=\"card-title text-white\">Manual Stock Check</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"customCss btn btn-secondary\"\n\t\t\t\t\t\t\talign='left' style=\"padding: 1px 4px;\" id=\"uncheckedLrsPrintBtn\"\n\t\t\t\t\t\t\t(click)=\"unCheckedLrsPrintMethod();\">UnChecked LRs</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"customCss btn btn-secondary\"\n\t\t\t\t\t\t\talign='left' style=\"padding: 1px 4px;\" id=\"checkedLrsPrintBtn\"\n\t\t\t\t\t\t\t(click)=\"checkedLrsPrintMethod();\">Checked LRs</button>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Entry Type</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"entryType\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"entryType\" #entryType\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"entryTypeMode(entryType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"manual\" selected>Manual</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"scan\">Scan</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>LR Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input #lrNumber type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"lrNumber\" name=\"lrNumber\" (keyup)=\"getLrDetails($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>To Pay</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"toPay\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" disabled>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Paid</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"paid\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" disabled>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" style='display: none;'>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Paid</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"viewId\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" style=\"margin-left: 50px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"okBtn\" (click)=\"okBtnMethod();\" disabled>Ok</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"clearAllMethod();\">Clear</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" align=\"right\">\n\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"lblLrCount\">{{textLrCount}}</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <hr> -->\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Manual Stock Check</h6>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"manualStockCheckId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsManualStockCheck\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerManualStockCheck\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Party Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let manualStockCheckData of manualStockCheckDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualStockCheckData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualStockCheckData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualStockCheckData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualStockCheckData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualStockCheckData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ manualStockCheckData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">Total : {{countOfLr}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{sumOfTotArt}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{sumOfTotToPay}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">{{sumOfTotPaid}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/stock/customization/manual-stock-check/manual-stock-check.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/stock/customization/manual-stock-check/manual-stock-check.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ManualStockCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualStockCheckComponent", function() { return ManualStockCheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
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











var ManualStockCheckComponent = /** @class */ (function () {
    function ManualStockCheckComponent(memoLessRpt, router, memoReport, masterReadService, modalService, lrReportService, datePipe) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.memoReport = memoReport;
        this.masterReadService = masterReadService;
        this.modalService = modalService;
        this.lrReportService = lrReportService;
        this.datePipe = datePipe;
        this.dtTriggerManualStockCheck = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.checkedLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.getLrInfoLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.checkLrNumberLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.detailsOfLrLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrInfoForTable = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.updateLrLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.newAttribute = {};
        this.textLrCount = '';
        this.lrCount = 0;
        this.lblLrCount = false;
        this.countOfLr = 0;
        this.sumOfTotToPay = 0;
        this.sumOfTotPaid = 0;
        this.sumOfTotArt = 0;
        this.unCheckedLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.isUncheckedLr = false;
        this.getCheckedLrDetails = function () {
            _this.showSpinnerForAction = true;
            _this.lrReportService.getStockCheckReport(_this.checkedLrDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#manualStockCheckId").DataTable().destroy();
                _this.manualStockCheckDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No checked LRs available!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.manualStockCheckDataList = response;
                    console.log(_this.manualStockCheckDataList);
                }
                _this.dtTriggerManualStockCheck.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the checked Lr Details", "info");
            }, function () { return console.log('done'); };
        };
        this.unCheckedLrsPrintDetails = function () {
            _this.showSpinnerForAction = true;
            _this.lrReportService.getStockCheckReport(_this.unCheckedLrDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                _this.isUncheckedLr = false;
                $("#manualStockCheckId").DataTable().destroy();
                _this.manualStockCheckDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No UnChecked LRs available!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.isUncheckedLr = true;
                    _this.manualStockCheckDataList = response;
                    console.log(_this.manualStockCheckDataList);
                }
                _this.dtTriggerManualStockCheck.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the unchecked Lr Details", "info");
            }, function () { return console.log('done'); };
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
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            this.gridReconfigure();
        }
    }
    ManualStockCheckComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    ManualStockCheckComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ManualStockCheckComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var mainStation = this.userDataDtoReturnSession.mainStation;
        var todayDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
        var dateformate = moment__WEBPACK_IMPORTED_MODULE_11__(todayDate).format('DD-MM-YYYY');
        this.dtOptionsManualStockCheck = {
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
                        if ($("#viewId").val() == 'unCheck') {
                            returnVal = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 25%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Date&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + dateformate + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='1'style='width:40%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:17px;'><u>Unchecked LRs</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:35%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:13px;'></strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:13px;'></strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:13px;'></span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        else {
                            returnVal = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 25%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Date&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + dateformate + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='1'style='width:40%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:17px;'><u>Checked LRs</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:35%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:13px;'></strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:13px;'></strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:13px;'></span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
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
                }
            ],
            //place holder in search/filter in datatable starts
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
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
                var totalArt = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totToPay = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totPaid = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html(totalArt);
                $(api.column(3).footer()).html(totToPay);
                $(api.column(4).footer()).html(totPaid);
                $(api.column(5).footer()).html();
            }
        };
    };
    ManualStockCheckComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerManualStockCheck.unsubscribe();
    };
    ManualStockCheckComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerManualStockCheck.next();
    };
    ManualStockCheckComponent.prototype.gridReconfigure = function () {
        this.checkedLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.checkedLrDto.mode = 'Check';
        this.checkedLrDto.destination = this.userDataDtoReturnSession.office;
        this.checkedLrDto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.checkedLrDto);
        $("#viewId").val('Check');
        this.getCheckedLrDetails();
    };
    ManualStockCheckComponent.prototype.entryTypeMode = function (entryType) {
        $("#lrNumber").val('');
        $("#toPay").val('');
        $("#paid").val('');
        $("#lrNumber").focus();
    };
    ManualStockCheckComponent.prototype.getLrDetails = function (e) {
        this.selectedType = $("#entryType").val();
        this.enteredLrNumber = $("#lrNumber").val();
        if (this.selectedType == 'manual') {
            if (e.keyCode == 13) {
                if (this.enteredLrNumber != null && this.enteredLrNumber != '') {
                    this.getLRStatusAndGetLRInfo();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "Please Enter Lr Number",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default.a.close();
                        window.setTimeout(function () {
                            $("#lrNumber").focus();
                        }, 100);
                        return false;
                    });
                }
            }
        }
        else if (this.selectedType == 'scan') {
            /* setTimeout(() => {
                   this.showforAutomatic();
               },
                   500 );*/
            if (e.keyCode == 13) {
                this.enteredLrNumber = $("#lrNumber").val();
                if (this.enteredLrNumber != null && this.enteredLrNumber != '') {
                    this.getLRStatusAndGetLRInfo();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "Please Scan Lr Number",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default.a.close();
                        window.setTimeout(function () {
                            $("#lrNumber").focus();
                        }, 100);
                        return false;
                    });
                }
            }
        }
    };
    /* showforAutomatic() {
           this.enteredLrNumber =$("#lrNumber").val();
            if ( this.enteredLrNumber != null && this.enteredLrNumber != '' ) {
                this.getLRStatusAndGetLRInfo();
            }else{
                swal({
                        title: "Warning",
                        text: "Please Scan Lr Number",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(() => {
                        swal.close();
                         window.setTimeout(function () {
                             $( "#lrNumber" ).focus();
                        }, 100);
                     return false;
                    });
            }
        
    }*/
    ManualStockCheckComponent.prototype.getLRStatusAndGetLRInfo = function () {
        this.enteredLrNumber = $("#lrNumber").val();
        this.getLrInfoLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.getLrInfoLrDto.lrNumber = this.enteredLrNumber;
        this.getLrInfoLrDto.stocksAt = this.userDataDtoReturnSession.office;
        this.getLrInfoLrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.getLRStatusAndGetLRDetails();
        console.log(this.getLrInfoLrDto);
    };
    ManualStockCheckComponent.prototype.getLRStatusAndGetLRDetails = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        $("#okBtn").prop("disabled", true);
        this.lrReportService.getLRStatus(this.getLrInfoLrDto).subscribe(function (response) {
            console.log(response);
            _this.showSpinnerForAction = false;
            if (response.length > 0) {
                _this.showSpinnerForAction = false;
                _this.checkLrNumberLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
                _this.responseOfCheckLRNumber = response;
                _this.checkLrNumberLRDto = _this.responseOfCheckLRNumber;
                console.log(_this.checkLrNumberLRDto);
                console.log(_this.checkLrNumberLRDto[0].lrNumber);
                if (_this.checkLrNumberLRDto[0].lrNumber != null && _this.checkLrNumberLRDto[0].lrNumber != '') {
                    if ((response.length != 0) && (_this.checkLrNumberLRDto[0].lrStockCheck == true)) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                            title: "Checked",
                            text: "This LR is already checked",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.clearMethod();
                        });
                    }
                    else if ((response.length != 0) && (_this.checkLrNumberLRDto[0].status == 'Deleted') && (_this.checkLrNumberLRDto[0].lrStockCheck == false)) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                            title: "Deleted",
                            text: "LR is deleted",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.clearMethod();
                        });
                    }
                    else if ((response.length != 0) && (_this.checkLrNumberLRDto[0].status == 'Delivered') && (_this.checkLrNumberLRDto[0].lrStockCheck == false)) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                            title: "Delivered",
                            text: "LR is already delivered",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.clearMethod();
                        });
                    }
                    else if ((response.length != 0) && (_this.checkLrNumberLRDto[0].status == 'InCP') && (_this.checkLrNumberLRDto[0].lrStockCheck == false)) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                            title: "InCP",
                            text: "LR is in check post",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.clearMethod();
                        });
                    }
                    else if ((response.length != 0) && (_this.checkLrNumberLRDto[0].status == 'Loading') && (_this.checkLrNumberLRDto[0].lrStockCheck == false)) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                            title: "Loading",
                            text: "LR is in loading",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.clearMethod();
                        });
                    }
                    else if ((response.length != 0) && (_this.checkLrNumberLRDto[0].status == 'Scheduled') && (_this.checkLrNumberLRDto[0].lrStockCheck == false)) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                            title: "Scheduled",
                            text: "LR is scheduled to transit ",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.clearMethod();
                        });
                    }
                    else if ((response.length != 0) && (_this.checkLrNumberLRDto[0].status == 'Transit') && (_this.checkLrNumberLRDto[0].lrStockCheck == false)) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                            title: "Transit",
                            text: "LR is in transit",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.clearMethod();
                        });
                    }
                    else {
                        _this.getDetailsLRInfoMethod();
                    }
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "This LR number does not exist",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.clearMethod();
                    });
                }
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Warning",
                    text: "This LR number does not exist",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    _this.clearMethod();
                });
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While Getting Lr Details", "info");
        }, function () { return console.log('done'); };
    };
    ;
    ManualStockCheckComponent.prototype.getDetailsLRInfoMethod = function () {
        this.enteredLrNumber = $("#lrNumber").val();
        this.detailsOfLrLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.detailsOfLrLrDto.mode = 'rpt';
        this.detailsOfLrLrDto.destination = this.userDataDtoReturnSession.office;
        this.detailsOfLrLrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.detailsOfLrLrDto.lrNumber = this.enteredLrNumber;
        console.log(this.detailsOfLrLrDto);
        this.getDetailsMethod();
    };
    ManualStockCheckComponent.prototype.getDetailsMethod = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.lrReportService.getStockCheckReport(this.detailsOfLrLrDto).subscribe(function (response) {
            console.log(response);
            _this.showSpinnerForAction = false;
            if (response.length == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Alert",
                    text: "LR not found",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    _this.clearMethod();
                });
            }
            else {
                _this.lrInfoForTable = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
                _this.responseOfCheckLrForTable = response;
                _this.lrInfoForTable = _this.responseOfCheckLrForTable;
                _this.selectedType = $("#entryType").val();
                $("#toPay").val(_this.lrInfoForTable[0].toPay);
                $("#paid").val(_this.lrInfoForTable[0].paid);
                if (_this.selectedType == 'scan') {
                    _this.updateMethod();
                }
                else {
                    $("#okBtn").prop("disabled", false);
                    $("#okBtn").focus();
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While Error in getting details for LR: ", "info");
        }, function () { return console.log('done'); };
    };
    ;
    ManualStockCheckComponent.prototype.clearMethod = function () {
        $("#lrNumber").val('');
        $("#toPay").val('');
        $("#paid").val('');
        window.setTimeout(function () {
            $("#lrNumber").focus();
        }, 100);
    };
    ManualStockCheckComponent.prototype.addInTable = function () {
        console.log('8');
        if (this.isUncheckedLr == true) {
            this.manualStockCheckDataList = [];
            this.isUncheckedLr = false;
        }
        this.newAttribute.lrNumber = this.lrInfoForTable[0].lrNumber;
        this.newAttribute.toPay = this.lrInfoForTable[0].toPay;
        this.newAttribute.paid = this.lrInfoForTable[0].paid;
        this.newAttribute.bookingDateStr = this.lrInfoForTable[0].bookingDateStr;
        this.newAttribute.totalArticles = this.lrInfoForTable[0].totalArticles;
        this.newAttribute.consigneeName = this.lrInfoForTable[0].consigneeName;
        $("#manualStockCheckId").DataTable().destroy();
        if (this.manualStockCheckDataList == null) {
            this.manualStockCheckDataList = [];
        }
        if (this.manualStockCheckDataList.length == 0) {
            this.manualStockCheckDataList.push(this.newAttribute);
        }
        else {
            this.manualStockCheckDataList.push(this.newAttribute);
        }
        this.dtTriggerManualStockCheck.next();
        // console.log( this.manualStockCheckDataList );
        this.countOfLr = +this.countOfLr + 1;
        this.sumOfTotArt = +this.sumOfTotArt + +this.newAttribute.totalArticles;
        this.sumOfTotToPay = +this.sumOfTotToPay + +this.newAttribute.toPay;
        this.sumOfTotPaid = +this.sumOfTotPaid + +this.newAttribute.paid;
        this.newAttribute = {};
    };
    ManualStockCheckComponent.prototype.okBtnMethod = function () {
        this.enteredLrNumber = $("#lrNumber").val();
        if (this.enteredLrNumber != null && this.enteredLrNumber != '') {
            this.updateMethod();
        }
        else {
        }
    };
    ManualStockCheckComponent.prototype.updateMethod = function () {
        this.enteredLrNumber = $("#lrNumber").val();
        this.updateLrLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.updateLrLrDto.userName = this.userDataDtoReturnSession.userId;
        this.updateLrLrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.updateLrLrDto.lrNumber = this.enteredLrNumber;
        console.log(this.updateLrLrDto);
        this.updateLrMethod();
    };
    ManualStockCheckComponent.prototype.updateLrMethod = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.lrReportService.updateStockCheck(this.updateLrLrDto).subscribe(function (response) {
            console.log(response);
            _this.showSpinnerForAction = false;
            if (response.status == 'Updated') {
                _this.lblLrCount = true;
                _this.lrCount = +_this.lrCount + +1;
                _this.textLrCount = " No.Of LRs: " + _this.lrCount;
                _this.clearMethod();
                _this.addInTable();
                console.log('6');
                $("#viewId").val('Check');
            }
            else {
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While Error in getting updating  LR: ", "info");
        }, function () { return console.log('done'); };
    };
    ;
    ManualStockCheckComponent.prototype.unCheckedLrsPrintMethod = function () {
        this.unCheckedLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.unCheckedLrDto.mode = 'unCheck';
        this.unCheckedLrDto.destination = this.userDataDtoReturnSession.office;
        this.unCheckedLrDto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.unCheckedLrDto);
        this.unCheckedLrsPrintDetails();
        $("#viewId").val('unCheck');
    };
    ManualStockCheckComponent.prototype.checkedLrsPrintMethod = function () {
        $("#viewId").val('Check');
        this.gridReconfigure();
    };
    ManualStockCheckComponent.prototype.clearAllMethod = function () {
        $("#viewId").val('Check');
        this.clearMethod();
        $("#manualStockCheckId").DataTable().destroy();
        this.manualStockCheckDataList = [];
        this.dtTriggerManualStockCheck.next();
        this.showSpinnerForAction = false;
        this.unCheckedLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.checkedLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.getLrInfoLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.enteredLrNumber = '';
        this.checkLrNumberLRDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.responseOfCheckLRNumber = '';
        this.detailsOfLrLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrInfoForTable = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.responseOfCheckLrForTable = '';
        this.selectedType = '';
        $("#okBtn").prop("disabled", true);
        this.countOfLr = 0;
        this.sumOfTotArt = 0;
        this.sumOfTotToPay = 0;
        this.sumOfTotPaid = 0;
        this.newAttribute = {};
        this.updateLrLrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lblLrCount = false;
        this.lrCount = 0;
        this.textLrCount = "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ManualStockCheckComponent.prototype, "dtElements", void 0);
    ManualStockCheckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manual-stock-check',
            template: __webpack_require__(/*! ./manual-stock-check.component.html */ "./src/app/stock/customization/manual-stock-check/manual-stock-check.component.html"),
            styles: [__webpack_require__(/*! ./manual-stock-check.component.css */ "./src/app/stock/customization/manual-stock-check/manual-stock-check.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_10__["MemoReport"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_12__["LrReportService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
    ], ManualStockCheckComponent);
    return ManualStockCheckComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-stock-customization-customization-module.js.map