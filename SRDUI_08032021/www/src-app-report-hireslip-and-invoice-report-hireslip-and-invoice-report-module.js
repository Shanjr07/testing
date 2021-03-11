(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-report-hireslip-and-invoice-report-hireslip-and-invoice-report-module"],{

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

/***/ "./src/app/dataService/hireslip-service.ts":
/*!*************************************************!*\
  !*** ./src/app/dataService/hireslip-service.ts ***!
  \*************************************************/
/*! exports provided: HireslipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireslipService", function() { return HireslipService; });
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



var HireslipService = /** @class */ (function () {
    function HireslipService(http) {
        this.http = http;
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webHireslip;
    }
    HireslipService.prototype.getStocksInTakenReport = function (invoiceDto) {
        return this.http.post(this._baseUrl + "/getStocksInTakenReportApi", invoiceDto);
    };
    HireslipService.prototype.getUnloadingRptDtls = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getUnloadingRptDtlsApi", hireSlipDto);
    };
    HireslipService.prototype.getHireSlipsUnLoadRptDetails = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getHireSlipsUnLoadRptDetailsApi", hireSlipDto);
    };
    HireslipService.prototype.getInvoiceDetails = function (invoiceDto) {
        return this.http.post(this._baseUrl + "/getInvoiceDetailsApi", invoiceDto);
    };
    HireslipService.prototype.getLorryHireBalanceReport = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getLorryHireBalanceReportApi", hireSlipDto);
    };
    HireslipService.prototype.updateDriverRewardingHireBalance = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/updateDriverRewardingHireBalanceApi", hireSlipDto);
    };
    HireslipService.prototype.setHireSlipBalPrtVoucher = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/setHireSlipBalPrtVoucherApi", hireSlipDto);
    };
    HireslipService.prototype.getHireSlipDetailsForVoucher = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getHireSlipDetailsForVoucherApi", hireSlipDto);
    };
    HireslipService.prototype.updateHireBalance = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/updateHireBalanceApi", hireSlipDto);
    };
    HireslipService.prototype.getHireSlipDetailsForRewarding = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getHireSlipDetailsForRewardingApi", hireSlipDto);
    };
    HireslipService.prototype.getTimeDifference = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getTimeDifferenceApi", hireSlipDto);
    };
    /* updateDriverRewarding(hireSlipDto: Object): Observable<HireSlipDto> {
         return this.http.post<HireSlipDto>(`${this._baseUrl}/updateDriverRewardingApi`, hireSlipDto);
     }*/
    HireslipService.prototype.updateDriverRewarding = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/updateDriverRewardingApi", hireSlipDto);
    };
    HireslipService.prototype.scanCodeApi = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/scanCodeApi", hireSlipDto);
    };
    //TripSheetStock
    HireslipService.prototype.getArticlesStocksSummForDestination = function (lrDto) {
        return this.http.post(this._baseUrl + "/getArticlesStocksSummForDestinationApi", lrDto);
    };
    HireslipService.prototype.getArticlesStocksForDestination = function (lrDto) {
        return this.http.post(this._baseUrl + "/getArticlesStocksForDestinationApi", lrDto);
    };
    HireslipService.prototype.addTripSheetDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/addTripSheetDetailsApi", lrDto);
    };
    HireslipService.prototype.updateDestLocalTripSheetDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateDestLocalTripSheetDetailsApi", lrDto);
    };
    HireslipService.prototype.getLocalTripsLrsDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLocalTripsLrsDetailsApi", lrDto);
    };
    //StockGrouping @20-02-2021
    HireslipService.prototype.getUnclearedInvoives = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getUnclearedInvoivesApi", hireSlipDto);
    };
    // basha bh
    HireslipService.prototype.getHireSlipsBlkForUnLoadRpt = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getHireSlipsBlkForUnLoadRptApi", hireSlipDto);
    };
    HireslipService.prototype.updateShipmentStatus = function (invoiceDto) {
        return this.http.post(this._baseUrl + "/updateShipmentStatusApi", invoiceDto);
    };
    HireslipService.prototype.getHireSlipUnLoadRptDtls = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getHireSlipUnLoadRptDtlsApi", hireSlipDto);
    };
    HireslipService.prototype.getLRdtsUnloadRpt = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getLRdtsUnloadRptApi", hireSlipDto);
    };
    HireslipService.prototype.addHireSlipsUnLoadRptDetails = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/addHireSlipsUnLoadRptDetailsApi", hireSlipDto);
    };
    HireslipService.prototype.getSmsStatus = function (lrDto) {
        return this.http.post(this._baseUrl + "/getSmsStatusApi", lrDto);
    };
    HireslipService.prototype.getPartiesForSMS = function (lrDto) {
        return this.http.post(this._baseUrl + "/getPartiesForSMSApi", lrDto);
    };
    HireslipService.prototype.sendMultipltSMS = function (lrDto) {
        return this.http.post(this._baseUrl + "/sendMultipltSMSApi", lrDto);
    };
    HireslipService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HireslipService);
    return HireslipService;
}());



/***/ }),

/***/ "./src/app/dataService/invoice.ts":
/*!****************************************!*\
  !*** ./src/app/dataService/invoice.ts ***!
  \****************************************/
/*! exports provided: Invoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoice", function() { return Invoice; });
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



var Invoice = /** @class */ (function () {
    function Invoice(http) {
        this.http = http;
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webInvoice;
    }
    Invoice.prototype.getTripSheetDetails = function (tripSheetDto) {
        return this.http.post(this._baseUrl + "/getTripSheetDetailsApi", tripSheetDto);
    };
    Invoice.prototype.getPopUpTripSheetDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getPopUpTripSheetDetailsApi", lrDto);
    };
    //Invoice Details Report
    Invoice.prototype.getInvoiceDetailsInvoiceNo = function (lrDto) {
        return this.http.post(this._baseUrl + "/getInvoiceDetailsInvoiceNoApi", lrDto);
    };
    Invoice.prototype.getInvoiceDetailsDateWise = function (lrDto) {
        return this.http.post(this._baseUrl + "/getInvoiceDetailsDateWiseApi", lrDto);
    };
    Invoice.prototype.getInvoiceDetailsSourceWise = function (lrDto) {
        return this.http.post(this._baseUrl + "/getInvoiceDetailsSourceWiseApi", lrDto);
    };
    Invoice.prototype.getInvoiceDetailsDestinationWise = function (lrDto) {
        return this.http.post(this._baseUrl + "/getInvoiceDetailsDestinationWiseApi", lrDto);
    };
    Invoice.prototype.getInvoiceDetailsDestinationWiseSubStation = function (lrDto) {
        return this.http.post(this._baseUrl + "/getInvoiceDetailsDestinationWiseSubStationApi", lrDto);
    };
    Invoice.prototype.getInvoiceDetailsDateStation = function (lrDto) {
        return this.http.post(this._baseUrl + "/getInvoiceDetailsDateStationApi", lrDto);
    };
    Invoice.prototype.getInvoiceDestinationSummary = function (lrDto) {
        return this.http.post(this._baseUrl + "/getInvoiceDestinationSummaryApi", lrDto);
    };
    Invoice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Invoice);
    return Invoice;
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

/***/ "./src/app/dto/CashMemo-dto.ts":
/*!*************************************!*\
  !*** ./src/app/dto/CashMemo-dto.ts ***!
  \*************************************/
/*! exports provided: CashMemoDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashMemoDto", function() { return CashMemoDto; });
var CashMemoDto = /** @class */ (function () {
    function CashMemoDto() {
        this.cashMemoDtoForCustomPrintListColumnValues = [];
    }
    return CashMemoDto;
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

/***/ "./src/app/dto/Invoice-dto.ts":
/*!************************************!*\
  !*** ./src/app/dto/Invoice-dto.ts ***!
  \************************************/
/*! exports provided: InvoiceDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDto", function() { return InvoiceDto; });
/* harmony import */ var _TruckData_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TruckData-dto */ "./src/app/dto/TruckData-dto.ts");

var InvoiceDto = /** @class */ (function () {
    function InvoiceDto() {
        this.truckDataDto = new _TruckData_dto__WEBPACK_IMPORTED_MODULE_0__["TruckDataDto"]();
        // bash bh
    }
    return InvoiceDto;
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

/***/ "./src/app/dto/TripSheet-dto.ts":
/*!**************************************!*\
  !*** ./src/app/dto/TripSheet-dto.ts ***!
  \**************************************/
/*! exports provided: TripSheetDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripSheetDto", function() { return TripSheetDto; });
var TripSheetDto = /** @class */ (function () {
    function TripSheetDto() {
    }
    return TripSheetDto;
}());



/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/advance-payment/advance-payment.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/advance-payment/advance-payment.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9oaXJlc2xpcC1hbmQtaW52b2ljZS1yZXBvcnQvYWR2YW5jZS1wYXltZW50L2FkdmFuY2UtcGF5bWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/advance-payment/advance-payment.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/advance-payment/advance-payment.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Advance Payment</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viwBy\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected  value=\"supplierWise\">Supplier Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"destinationWise\">Destination Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected  value=\"hireslipDateWise\">HireSlip Date Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"paymentDateWise\">Payment Date Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Payment Method</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"paymentMethod\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected  value=\"all\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option  value=\"paid\">Paid</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"unPaid\">UnPaid</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"supplierName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Supplier Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Supplier Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">A C Traders</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">A P Transport</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">A S Road Carrier</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"mainSrc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">ALL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"nagpur\">Nagpur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAdvancePayment\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerAdvancePayment\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Hireslip/Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Supplier</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hireslip Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Truck Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Advance</th>\n\t\t\t\t\t\t\t\t\t\t<th>Balance</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Date Of Payment</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cash Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cheque Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>PDC Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Adv. Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Adv. Balance</th>\n\t\t\t\t\t\t\t\t\t\t<th>Owner</th>\n\t\t\t\t\t\t\t\t\t\t<th>Pan No</th>\n\t\t\t\t\t\t\t\t\t\t<th>TDS Deducted</th>\n\t\t\t\t\t\t\t\t\t\t<th>View Image</th>\n\t\t\t\t\t\t\t\t\t\t<th>Re-Upload Image</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remove Image</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let advancePaymentData of advancePaymentDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.hireslipOrInvoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.supplier }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.hireslipDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.truckNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.advance }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.balance }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.dateOfPayment }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.cashPaid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.chequePaid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.pdcPaid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.totalAdvPaid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.advBalance }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.owner }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.panNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.tdsDeducted }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.viewImage }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.reUploadImage }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ advancePaymentData.removeImage }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/advance-payment/advance-payment.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/advance-payment/advance-payment.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AdvancePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancePaymentComponent", function() { return AdvancePaymentComponent; });
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


var AdvancePaymentComponent = /** @class */ (function () {
    function AdvancePaymentComponent(advancePaymentRpt) {
        this.advancePaymentRpt = advancePaymentRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerAdvancePayment = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AdvancePaymentComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    AdvancePaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsAdvancePayment = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Hireslip/Invoice Number',
                    data: 'hireslipOrInvoiceNumber'
                },
                {
                    title: 'Supplier',
                    data: 'supplier'
                },
                {
                    title: 'Hireslip Date',
                    data: 'hireslipDate'
                },
                {
                    title: 'Truck Number',
                    data: 'truckNumber'
                },
                {
                    title: 'Advance',
                    data: 'advance'
                },
                {
                    title: 'Balance',
                    data: 'balance'
                }, {
                    title: 'Total Amount',
                    data: 'totalAmount'
                }, {
                    title: 'Date Of Payment',
                    data: 'dateOfPayment'
                }, {
                    title: 'Cash Paid',
                    data: 'cashPaid'
                },
                {
                    title: 'Cheque Paid',
                    data: 'chequePaid'
                },
                {
                    title: 'PDC Paid',
                    data: 'pdcPaid'
                },
                {
                    title: 'Total Adv Paid',
                    data: 'totalAdvPaid'
                },
                {
                    title: 'Adv. Balance',
                    data: 'advBalance'
                },
                {
                    title: 'Owner',
                    data: 'owner'
                }, {
                    title: 'Pan No',
                    data: 'panNo'
                }, {
                    title: 'TDS Deducted',
                    data: 'tdsDeducted'
                },
                {
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
                    text: '<i class="fas fa-print"> Confirm Payment</i>',
                    titleAttr: 'Confirm Payment',
                }, {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print Voucher</i>',
                    titleAttr: 'Print Voucher',
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
        this.getDataFrmServiceFrTable = this.advancePaymentRpt.getSummaryData();
        this.onDestroyUnsubscribtionAdvancePayment = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.advancePaymentDataList = data['data'];
            _this.dtTriggerAdvancePayment.next();
        });
        //the below code is for the getting data through json ends
    };
    AdvancePaymentComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerAdvancePayment.unsubscribe();
        this.onDestroyUnsubscribtionAdvancePayment.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    AdvancePaymentComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AdvancePaymentComponent.prototype, "dtElements", void 0);
    AdvancePaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advance-payment',
            template: __webpack_require__(/*! ./advance-payment.component.html */ "./src/app/report/hireslip-and-invoice-report/advance-payment/advance-payment.component.html"),
            styles: [__webpack_require__(/*! ./advance-payment.component.css */ "./src/app/report/hireslip-and-invoice-report/advance-payment/advance-payment.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], AdvancePaymentComponent);
    return AdvancePaymentComponent;
}());



/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-and-invoice-report.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-and-invoice-report.module.ts ***!
  \******************************************************************************************/
/*! exports provided: HireslipAndInvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireslipAndInvoiceModule", function() { return HireslipAndInvoiceModule; });
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
/* harmony import */ var src_app_report_hireslip_and_invoice_report_hireslip_and_invoice_report_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/hireslip-and-invoice-report.routing */ "./src/app/report/hireslip-and-invoice-report/hireslip-and-invoice-report.routing.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_hireslip_details_hireslip_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/hireslip-details/hireslip-details.component */ "./src/app/report/hireslip-and-invoice-report/hireslip-details/hireslip-details.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/invoice-details/invoice-details.component */ "./src/app/report/hireslip-and-invoice-report/invoice-details/invoice-details.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_advance_payment_advance_payment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/advance-payment/advance-payment.component */ "./src/app/report/hireslip-and-invoice-report/advance-payment/advance-payment.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_hireslip_unloading_report_hireslip_unloading_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/hireslip-unloading-report/hireslip-unloading-report.component */ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-report/hireslip-unloading-report.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_transhipment_trip_transhipment_trip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/transhipment-trip/transhipment-trip.component */ "./src/app/report/hireslip-and-invoice-report/transhipment-trip/transhipment-trip.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_hireslip_history_report_hireslip_history_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/hireslip-history-report/hireslip-history-report.component */ "./src/app/report/hireslip-and-invoice-report/hireslip-history-report/hireslip-history-report.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_local_trip_sheet_local_trip_sheet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/local-trip-sheet/local-trip-sheet.component */ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet/local-trip-sheet.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_local_trip_sheet_lr_details_local_trip_sheet_lr_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/local-trip-sheet-lr-details/local-trip-sheet-lr-details.component */ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet-lr-details/local-trip-sheet-lr-details.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_hireslip_unloading_sheet_details_report_hireslip_unloading_sheet_details_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/hireslip-unloading-sheet-details-report/hireslip-unloading-sheet-details-report.component */ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-sheet-details-report/hireslip-unloading-sheet-details-report.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_invoice_details_lr_summary_invoice_details_lr_summary_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/invoice-details-lr-summary/invoice-details-lr-summary.component */ "./src/app/report/hireslip-and-invoice-report/invoice-details-lr-summary/invoice-details-lr-summary.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_service_tax_report_service_tax_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/service-tax-report/service-tax-report.component */ "./src/app/report/hireslip-and-invoice-report/service-tax-report/service-tax-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends














var HireslipAndInvoiceModule = /** @class */ (function () {
    function HireslipAndInvoiceModule() {
    }
    HireslipAndInvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_hireslip_and_invoice_report_hireslip_and_invoice_report_routing__WEBPACK_IMPORTED_MODULE_10__["HireslipAndInvoiceRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_18__["MaterialModule"]],
            declarations: [
                src_app_report_hireslip_and_invoice_report_hireslip_details_hireslip_details_component__WEBPACK_IMPORTED_MODULE_11__["HireslipDetailsComponent"],
                src_app_report_hireslip_and_invoice_report_invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_12__["InvoiceDetailsComponent"],
                src_app_report_hireslip_and_invoice_report_advance_payment_advance_payment_component__WEBPACK_IMPORTED_MODULE_13__["AdvancePaymentComponent"],
                src_app_report_hireslip_and_invoice_report_hireslip_unloading_report_hireslip_unloading_report_component__WEBPACK_IMPORTED_MODULE_14__["HireslipUnloadingReportComponent"],
                src_app_report_hireslip_and_invoice_report_transhipment_trip_transhipment_trip_component__WEBPACK_IMPORTED_MODULE_15__["TranshipmentTripComponent"],
                src_app_report_hireslip_and_invoice_report_hireslip_history_report_hireslip_history_report_component__WEBPACK_IMPORTED_MODULE_16__["HireslipHistoryReportComponent"],
                src_app_report_hireslip_and_invoice_report_local_trip_sheet_local_trip_sheet_component__WEBPACK_IMPORTED_MODULE_17__["LocalTripSheetComponent"],
                src_app_report_hireslip_and_invoice_report_local_trip_sheet_lr_details_local_trip_sheet_lr_details_component__WEBPACK_IMPORTED_MODULE_19__["LocalTripSheetLrDetailsComponent"],
                src_app_report_hireslip_and_invoice_report_hireslip_unloading_sheet_details_report_hireslip_unloading_sheet_details_report_component__WEBPACK_IMPORTED_MODULE_20__["HireslipUnloadingSheetDetailsReportComponent"],
                src_app_report_hireslip_and_invoice_report_invoice_details_lr_summary_invoice_details_lr_summary_component__WEBPACK_IMPORTED_MODULE_21__["InvoiceDetailsLRSummaryComponent"],
                src_app_report_hireslip_and_invoice_report_service_tax_report_service_tax_report_component__WEBPACK_IMPORTED_MODULE_22__["ServiceTaxReportComponent"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
            ],
        })
    ], HireslipAndInvoiceModule);
    return HireslipAndInvoiceModule;
}());



/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-and-invoice-report.routing.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-and-invoice-report.routing.ts ***!
  \*******************************************************************************************/
/*! exports provided: HireslipAndInvoiceRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireslipAndInvoiceRoutes", function() { return HireslipAndInvoiceRoutes; });
/* harmony import */ var src_app_report_hireslip_and_invoice_report_hireslip_details_hireslip_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/hireslip-details/hireslip-details.component */ "./src/app/report/hireslip-and-invoice-report/hireslip-details/hireslip-details.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/invoice-details/invoice-details.component */ "./src/app/report/hireslip-and-invoice-report/invoice-details/invoice-details.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_advance_payment_advance_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/advance-payment/advance-payment.component */ "./src/app/report/hireslip-and-invoice-report/advance-payment/advance-payment.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_hireslip_unloading_report_hireslip_unloading_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/hireslip-unloading-report/hireslip-unloading-report.component */ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-report/hireslip-unloading-report.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_transhipment_trip_transhipment_trip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/transhipment-trip/transhipment-trip.component */ "./src/app/report/hireslip-and-invoice-report/transhipment-trip/transhipment-trip.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_hireslip_history_report_hireslip_history_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/hireslip-history-report/hireslip-history-report.component */ "./src/app/report/hireslip-and-invoice-report/hireslip-history-report/hireslip-history-report.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_local_trip_sheet_local_trip_sheet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/local-trip-sheet/local-trip-sheet.component */ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet/local-trip-sheet.component.ts");
/* harmony import */ var src_app_report_hireslip_and_invoice_report_service_tax_report_service_tax_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/report/hireslip-and-invoice-report/service-tax-report/service-tax-report.component */ "./src/app/report/hireslip-and-invoice-report/service-tax-report/service-tax-report.component.ts");








var HireslipAndInvoiceRoutes = [
    {
        path: '',
        children: [
            {
                path: 'hireslipDetails',
                component: src_app_report_hireslip_and_invoice_report_hireslip_details_hireslip_details_component__WEBPACK_IMPORTED_MODULE_0__["HireslipDetailsComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'invoiceDetails',
                component: src_app_report_hireslip_and_invoice_report_invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_1__["InvoiceDetailsComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'advancePayment',
                component: src_app_report_hireslip_and_invoice_report_advance_payment_advance_payment_component__WEBPACK_IMPORTED_MODULE_2__["AdvancePaymentComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'hireslipUnloadingReport',
                component: src_app_report_hireslip_and_invoice_report_hireslip_unloading_report_hireslip_unloading_report_component__WEBPACK_IMPORTED_MODULE_3__["HireslipUnloadingReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'transhipmentTrip',
                component: src_app_report_hireslip_and_invoice_report_transhipment_trip_transhipment_trip_component__WEBPACK_IMPORTED_MODULE_4__["TranshipmentTripComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'hireslipHistoryReport',
                component: src_app_report_hireslip_and_invoice_report_hireslip_history_report_hireslip_history_report_component__WEBPACK_IMPORTED_MODULE_5__["HireslipHistoryReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'localTripSheet',
                component: src_app_report_hireslip_and_invoice_report_local_trip_sheet_local_trip_sheet_component__WEBPACK_IMPORTED_MODULE_6__["LocalTripSheetComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'serviceTaxReport',
                component: src_app_report_hireslip_and_invoice_report_service_tax_report_service_tax_report_component__WEBPACK_IMPORTED_MODULE_7__["ServiceTaxReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-details/hireslip-details.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-details/hireslip-details.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9oaXJlc2xpcC1kZXRhaWxzL2hpcmVzbGlwLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvaGlyZXNsaXAtYW5kLWludm9pY2UtcmVwb3J0L2hpcmVzbGlwLWRldGFpbHMvaGlyZXNsaXAtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-details/hireslip-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-details/hireslip-details.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Hireslip Details</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"hireslipNumber\">Hireslip\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNumber</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"dateWise\">Date Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"summaryWise\">Summary Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByHireslipNo\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hireslip Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"hireslipNumber\" #hireslipNumber name=\"hireslipNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByDateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"sourceType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"sourceType\" #sourceType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"sourceTypeMode(sourceType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"individualSource\" selected>Individual\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSource</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mainSource\">Main Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchBySmryWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Summary Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=summaryType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"summaryType\" #summaryType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"summaryTypeMode(summaryType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mainInvoice\" selected>Main\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInvoice</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"dummyInvoice\">Dummy Invoice</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"viaReport\">Via Report</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" placeholder=\"dd-mm-yyyy\" name=\"fromDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toDate\" placeholder=\"dd-mm-yyyy\" name=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSrc\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"source\" #source\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSource=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(lrDtosFromStnOptionsGet | filterSourceForSumm: controlMainSource.value) as resultSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.source\"> {{ option.source }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\" *ngIf=\"!resultSource.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSrcSum\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sourceSum\" #sourceSum\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainSourceSum\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSourceSum\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSourceSum=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(lrDtosFromStnSumOptionsGet | filterSourceForSumm: controlMainSourceSum.value) as resultSourceSum\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSourceSum\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.source\"> {{ option.source }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultSourceSum.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showDest\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"destination\" #destination\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteDestination=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(lrDtosToStationOptionsGet | filterGodownName: controlMainDestination.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.godownName\"> {{\n\t\t\t\t\t\t\t\t\t\t\t\toption.godownName }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultDestination.length\"> No result</app-option> </ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showDestSum\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destinationSum\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#destinationSum placeholder=\"Select Destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMainDestinationSum\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDestinationSum\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteDestinationSum=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(lrDtosToStationSumOptionsGet | filterGodownName: controlMainDestinationSum.value) as resultDestinationSum\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestinationSum\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.godownName\"> {{\n\t\t\t\t\t\t\t\t\t\t\t\toption.godownName }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultDestinationSum.length\"> No\n\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"validateBtnSearch()\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<div *ngIf=\"showForNoAndDateWise\">\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the first datatable starts  -->\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsHireNdDateWise\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerHireNdDateWise\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Date</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Hire Slip No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Truck No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Driver Mobile No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Truck Owner</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Owner Pan No.</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Truck Type</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Supplier</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Supplier Pan No.</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Lr's</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Below 50k</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Above 50k</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Art.</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Guarantee Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Kanta Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Total Hire</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Advance</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Balance</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Truck Status</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let hireNdDataWise of hireNdDataWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.hireslipdate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.hireslipnumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.driverMobileNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.companyName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.tinNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.truckType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.suppliername }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.supplierpanno }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.totalLRs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.goodsValueBelow }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.goodsValueAbove }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.gurWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.kantaWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.actWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.chargedWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.totalhire }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.advance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.balance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.goodsValue }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.riskChgAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.toStation }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireNdDataWise.status }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<the second datatable starts  -->\n\t\t\t\t\t\t\t<div *ngIf=\"showForMainAndDummyWise\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionInvoice\" [dtTrigger]=\"dtTriggerInvoice\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Station</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Guarantee Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Kanta Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Main Agent</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Hire</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Advance</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Balance</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let smryInvoiceData of smryInvoiceDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryInvoiceData.toStation }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryInvoiceData.actWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryInvoiceData.chargedWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryInvoiceData.gurWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryInvoiceData.kantaWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryInvoiceData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryInvoiceData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryInvoiceData.riskChgAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryInvoiceData.branch }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryInvoiceData.totalhire }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryInvoiceData.advance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryInvoiceData.balance }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tfoot>\n\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t the second datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable starts  -->\n\t\t\t\t\t\t\t<div *ngIf=\"showForViaReportTable\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionViaReport\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerViaReport\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Station</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let smryViaReportData of smryViaReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryViaReportData.toStation }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryViaReportData.actWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryViaReportData.chargedWt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryViaReportData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryViaReportData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryViaReportData.riskChgAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tfoot>\n\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t</div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-details/hireslip-details.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-details/hireslip-details.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: HireslipDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireslipDetailsComponent", function() { return HireslipDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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

var my = new Date();
//for datepicker ends










var HireslipDetailsComponent = /** @class */ (function () {
    function HireslipDetailsComponent(hireslipDetailsRpt, 
    //          service starts
    http, 
    //            service ends
    router, reportService, masterReadService) {
        var _this = this;
        this.hireslipDetailsRpt = hireslipDetailsRpt;
        this.http = http;
        this.router = router;
        this.reportService = reportService;
        this.masterReadService = masterReadService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.searchByHireslipNo = true;
        this.searchByDateWise = false;
        this.viewDate = false;
        this.viewSource = true;
        this.viewDestination = false;
        this.searchBySmryWise = false;
        this.sourceTypeMain = false;
        this.sourceTypeIndividual = false;
        this.summaryWiseInvoiceTable = false;
        this.summaryWiseViaReportTable = false;
        this.comboBoxAllsum = true;
        this.DummyInvView = false;
        this.showDummyInvoice = 'HireSlip Rpt Show Dummy Invoice';
        this.showSrc = false;
        this.showDest = false;
        this.showSrcSum = false;
        this.showDestSum = false;
        this.showForNoAndDateWise = true;
        this.showForMainAndDummyWise = false;
        this.showForViaReportTable = false;
        this.showSrcDest = "Hireslip Rpt Super Admin";
        ///
        //     for Booking Manager is Hireslip Rpt Bkg Mgr 
        //     for Booking Office and Administrator is Hireslip Rpt Bkg Ofc Admin
        //     for Delivery Manager is Hireslip Rpt Dly Mgr
        //     for Collection Manager is Hireslip Rpt Coll Mgr
        //     for Delivery Office and Administrator is Hireslip Rpt Dly Ofc Admin
        //     for Barcode is Hireslip Rpt Barcode
        //     for Transshipment Manager is Hireslip Rpt Trnas Mgr
        //     for Booking Administrator is Hireslip Rpt Bkg Admin
        //     for Super Administrator is Hireslip Rpt Super Admin
        ///
        this.hireDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_10__["HireSlipDto"]();
        ///
        //    sourceAllList: any;
        //    destAllList: any;
        //    searchSrcList: any;
        //    searchDestList: any;
        this.sourceAllList = [];
        this.destAllList = [];
        this.searchSrcList = [];
        this.searchDestList = [];
        //for datepicker ends
        this.controlMainSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        this.controlMainSourceSum = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        this.controlMainDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        this.controlMainDestinationSum = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        this.controlAgentName = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        //    For From Station 
        this.lrDtoFromStn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.lrDtoFromStnAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.agentDto = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_9__["AgentDetailsDto"]();
        this.agentDtoAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_9__["AgentDetailsDto"]();
        //For From Station Summary
        this.lrDtoFromStnSum = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.lrDtoFromStnSumAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.agentDtoSum = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_9__["AgentDetailsDto"]();
        this.agentDtoAllSum = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_9__["AgentDetailsDto"]();
        //    For Source Spec 
        this.lrDtoSrcSpec = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.lrDtoSrcSpecAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        //    For Source All 
        this.lrDtoSrcAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.lrDtoSrcAllAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        // for To station
        this.lrDtoToStationAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.lrDtoToStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        // for To station Sum
        this.lrDtoToStationSumAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.lrDtoToStationSum = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        // for To station Sum Spec
        this.lrDtoToStationSumSpecAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.lrDtoToStationSumSpec = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        //    / Dest With Trans
        this.lrDtoDestWithTransAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.lrDtoDestWithTrans = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        // For Source Via
        this.agentDtoSrcVia = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_9__["AgentDetailsDto"]();
        this.agentDtoSrcViaAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_9__["AgentDetailsDto"]();
        this.dtTriggerHireNdDateWise = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerInvoice = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerViaReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoggedIn = true;
        this.gettingFromStationList = function () {
            _this.gettingFromStationDetails();
            _this.masterReadService.getFromStationService(_this.lrDtoFromStn).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No Source records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtosFromStnOptionsGet = response;
                    _this.lrDtoFromStnAll.source = "ALL";
                    _this.lrDtosFromStnOptionsGet.push(_this.lrDtoFromStnAll);
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getAgentList = function () {
            _this.masterReadService.getSourceListDetails(_this.agentDto).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.fromStationOptionGet.subStations = response;
                    //                    console.log( 'response1 :' + this.fromStationOptionGet );
                    _this.lrDtoFromStnAll.source = _this.fromStationOptionGet.subStations;
                    //                    console.log( 'response2 :' + this.lrDtoFromStnAll.source );
                    //                  for( let i=0; i< this.lrDtoFromStnAll.source.length; i++){
                    //                      this.lrDtosFromStnOptionsGet.push( this.lrDtoFromStnAll );
                    //                  }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.gettingFromStationListSum = function () {
            _this.gettingFromStationDetailsSum();
            _this.masterReadService.getFromStationService(_this.lrDtoFromStnSum).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No Source records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtosFromStnSumOptionsGet = response;
                    //                    console.log( this.lrDtosFromStnSumOptionsGet );
                    _this.lrDtoFromStnSumAll.source = "ALL";
                    _this.lrDtosFromStnSumOptionsGet.push(_this.lrDtoFromStnSumAll);
                    //                    this.srclist is pending 
                    //                    sourceAllList.add(dto.get(i).getSource());
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getAgentListSum = function () {
            _this.masterReadService.getSourceListDetails(_this.agentDtoSum).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.agentDetailsOptionsGetSum = response;
                    //                    console.log( this.agentDetailsOptionsGetSum );
                    _this.agentDtoAllSum.subStation = "ALL";
                    _this.agentDetailsOptionsGetSum.push(_this.agentDtoAllSum);
                    //                    ListSrc is Pending
                    //                    sourceAllList.add(agentDtos.get(i));
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getSourceSpecList = function () {
            _this.getSourceSpecDetails();
            _this.masterReadService.getFromStationService(_this.lrDtoSrcSpec).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No Source records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtosFromStnSumOptionsGet = response;
                    //                    console.log( this.lrDtosFromStnSumOptionsGet );
                    _this.lrDtoFromStnSumAll.source = "ALL";
                    _this.lrDtosFromStnSumOptionsGet.push(_this.lrDtoFromStnSumAll);
                    //                    ListSrc is Pending
                    //                  sourceAllList.add(agentDtos.get(i));
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getSourceAllList = function () {
            _this.getSourceAllDetails();
            _this.masterReadService.getFromStationService(_this.lrDtoSrcAll).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No Source records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtosFromStnSumOptionsGet = response;
                    //                    console.log( this.lrDtosFromStnSumOptionsGet );
                    _this.lrDtoFromStnSumAll.source = "ALL";
                    _this.lrDtosFromStnSumOptionsGet.push(_this.lrDtoFromStnSumAll);
                    //                    this.srclist is pending 
                    //                  sourceAllList.add(agentDtos.get(i));
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getSourceForVia = function () {
            _this.getSourceForViaDetails();
            _this.masterReadService.getMainBookingStationsDetails(_this.agentDtoSrcVia).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No Source records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    //                    ListSrc is Pending
                    //                  sourceAllList.add(agentDtos.get(i));
                    _this.agentDetailsSrcViaOptionsGet = response;
                    //                    console.log( this.agentDetailsSrcViaOptionsGet );
                    _this.lrDtosFromStnSumOptionsGet = [];
                    for (var i = 0; i < _this.agentDetailsSrcViaOptionsGet.length; i++) {
                        _this.lrDtoFromStnSumAll.source = _this.agentDetailsSrcViaOptionsGet[i].mainBookStations;
                        //                        this.lrDtoFromStnSumAll.source = "ALL " + i;
                        _this.lrDtosFromStnSumOptionsGet.push(_this.lrDtoFromStnSumAll);
                        //                        console.log( this.agentDetailsSrcViaOptionsGet[i].mainBookStations );
                        //                        console.log( this.lrDtoFromStnSumAll.source );
                    }
                    //                    console.log( 'mmm..' + this.lrDtosFromStnSumOptionsGet );
                    //                    console.log(this.lrDtosFromStnSumOptionsGet);
                    //                    this.lrDtoFromStnSumAll.source="ALL"
                    //                    this.lrDtosFromStnSumOptionsGet.push( this.lrDtoFromStnSumAll );
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getToStationDetailsList = function () {
            _this.getToStationDetails();
            _this.masterReadService.getDestinationListDetails(_this.lrDtoToStation).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No Destination records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtosToStationOptionsGet = response;
                    //                    console.log( this.lrDtosToStationOptionsGet );
                    _this.lrDtoToStationAll.godownName = "ALL";
                    _this.lrDtosToStationOptionsGet.push(_this.lrDtoToStationAll);
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getToStationDetailsListSum = function () {
            _this.getToStationDetailsSum();
            _this.masterReadService.getDestinationListDetails(_this.lrDtoToStationSum).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No Destination records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtosToStationSumOptionsGet = response;
                    //                    console.log( this.lrDtosToStationSumOptionsGet );
                    _this.lrDtoToStationSumAll.godownName = "ALL";
                    _this.lrDtosToStationSumOptionsGet.push(_this.lrDtoToStationSumAll);
                    //                    destAllList.add(dto.get(i).getGodownName());
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getToStationDetailsListSumSpec = function () {
            _this.getToStationDetailsSumSpec();
            _this.masterReadService.getDestinationListDetails(_this.lrDtoToStationSumSpec).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No Destination records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtosToStationSumOptionsGet = response;
                    //                    console.log( this.lrDtosToStationSumOptionsGet );
                    _this.lrDtoToStationSumAll.godownName = "ALL";
                    _this.lrDtosToStationSumOptionsGet.push(_this.lrDtoToStationSumAll);
                    //                    destAllList.add(dto.get(i).getGodownName());
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.gettingDestWithTrans = function () {
            _this.gettingDestWithTransDetails();
            _this.masterReadService.getDestinationListDetails(_this.lrDtoDestWithTrans).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No Destination records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrDtosToStationSumOptionsGet = response;
                    //                    console.log( this.lrDtosToStationSumOptionsGet );
                    _this.lrDtoToStationSumAll.godownName = "ALL";
                    _this.lrDtosToStationSumOptionsGet.push(_this.lrDtoToStationSumAll);
                    //                    destAllList.add(dto.get(i).getGodownName());
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getHireslipNumber = function () {
            _this.selectedHireslipNo = $("#hireslipNumber").val();
            _this.hireDto.hireslipnumber = _this.selectedHireslipNo;
            _this.getHireslipNumberList();
            _this.reportService.getHireslipNumberRpt(_this.hireDto).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.hireNdDataWiseDataList = response;
                    _this.dtTriggerHireNdDateWise.next();
                    //                        console.log( response );
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getSummaryWiseDetails = function () {
            _this.selectedSearchBySmryWise = $("#summaryType").val();
            if (_this.selectedSearchBySmryWise == 'mainInvoice' || _this.selectedSearchBySmryWise == 'dummyInvoice') {
                _this.getHireslipSummaryMainAndDummyList();
            }
            else {
                _this.getHireslipSummaryViaReportList();
            }
            _this.reportService.getHireslipSummaryWiseRpt(_this.hireDto).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                        title: "Warning",
                        text: "No records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    if (_this.selectedSearchBySmryWise == 'mainInvoice' || _this.selectedSearchBySmryWise == 'dummyInvoice') {
                        _this.smryInvoiceDataList = response;
                        _this.dtTriggerInvoice.next();
                    }
                    else {
                        _this.smryViaReportDataList = response;
                        _this.dtTriggerViaReport.next();
                    }
                    //                        console.log( response );
                }
            }),
                function (error) { return console.log(error.json()); },
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
            //          userdata get through from login starts
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.getSourceForVia();
            this.getHireslipNumberList();
            this.getHireslipSummaryMainAndDummyList();
            this.getHireslipSummaryViaReportList();
            if (this.showDummyInvoice == "HireSlip Rpt Show Dummy Invoice") {
                this.DummyInvView = true;
            }
        }
    }
    HireslipDetailsComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    HireslipDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    HireslipDetailsComponent.prototype.getHireslipNumberList = function () {
        this.dtOptionsHireNdDateWise = {
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
                    //                    title: this.changeDataTableTitileForPrint(),
                    //                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    //                    title: this.changeDataTableTitileForExcel(),
                    //                    messageTop: this.chnageDataTableMessageTopExcel(),
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
                //                count starts
                var columnData = api
                    .column(0)
                    .data();
                // Update footer
                $(api.column(0).footer()).html(columnData.count());
                var total = api
                    .column(1)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(1).footer()).html(total);
                var total = api
                    .column(9)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(9).footer()).html(total);
                var total = api
                    .column(10)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(10).footer()).html(total);
                var total = api
                    .column(11)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(11).footer()).html(total);
                var total = api
                    .column(12)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(12).footer()).html(total);
                var total = api
                    .column(13)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(13).footer()).html(total);
                var total = api
                    .column(14)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(14).footer()).html(total);
                var total = api
                    .column(15)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(15).footer()).html(total);
                var total = api
                    .column(16)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(16).footer()).html(total);
                var total = api
                    .column(17)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(17).footer()).html(total);
                var total = api
                    .column(18)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(18).footer()).html(total);
                var total = api
                    .column(19)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(19).footer()).html(total);
                var total = api
                    .column(20)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(20).footer()).html(total);
                var total = api
                    .column(21)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(21).footer()).html(total);
                var total = api
                    .column(22)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(22).footer()).html(total);
                var total = api
                    .column(23)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(23).footer()).html(total);
            }
        };
    };
    HireslipDetailsComponent.prototype.getHireslipSummaryMainAndDummyList = function () {
        this.dtOptionInvoice = {
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
                    //                    title: this.changeDataTableTitileForPrint(),
                    //                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    //                    title: this.changeDataTableTitileForExcel(),
                    //                    messageTop: this.chnageDataTableMessageTopExcel(),
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
                //                count starts
                var columnData = api
                    .column(0)
                    .data();
                // Update footer
                $(api.column(0).footer()).html(columnData.count());
                var total = api
                    .column(1)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(1).footer()).html(total);
                var total = api
                    .column(2)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(2).footer()).html(total);
                var total = api
                    .column(3)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(3).footer()).html(total);
                var total = api
                    .column(4)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(4).footer()).html(total);
                var total = api
                    .column(5)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(5).footer()).html(total);
                var total = api
                    .column(6)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(6).footer()).html(total);
                var total = api
                    .column(7)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(7).footer()).html(total);
                var total = api
                    .column(9)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(9).footer()).html(total);
                var total = api
                    .column(10)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(10).footer()).html(total);
                var total = api
                    .column(11)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(11).footer()).html(total);
            }
        };
    };
    HireslipDetailsComponent.prototype.getHireslipSummaryViaReportList = function () {
        this.dtOptionViaReport = {
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
                    //                    title: this.changeDataTableTitileForPrint(),
                    //                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    //                    title: this.changeDataTableTitileForExcel(),
                    //                    messageTop: this.chnageDataTableMessageTopExcel(),
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
                //                count starts
                var columnData = api
                    .column(0)
                    .data();
                // Update footer
                $(api.column(0).footer()).html(columnData.count());
                var total = api
                    .column(1)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(1).footer()).html(total);
                var total = api
                    .column(2)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(2).footer()).html(total);
                var total = api
                    .column(3)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(3).footer()).html(total);
                var total = api
                    .column(4)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(4).footer()).html(total);
                var total = api
                    .column(5)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(5).footer()).html(total);
            }
        };
    };
    HireslipDetailsComponent.prototype.ngOnInit = function () {
        //first datatable starts
        //        this.dtOptionsHireNdDateWise = {
        //
        //            dom: 'Bfrtip',
        //            /*buttons: [
        //                      'excel', 'print'
        //                  ],*/
        //            buttons: [
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
        //            ],
        //
        //            // the below code is for button export ends                          
        //
        //            //place holder in search/filter in datatable starts
        //            language: {
        //                search: "_INPUT_",
        //                searchPlaceholder: "Search..."
        //            },
        //            //place holder in search/filter in datatable ends
        //
        //            processing: true,
        //            //scroll in datatable starts
        //            responsive: true,
        //            "scrollX": true,
        //            "scrollY": 380,
        //            "scrollCollapse": true,
        //            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
        //            "paging": false,
        //            "info": false,
        //            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
        //            //scroll in datatable ends
        //
        //
        //        },//first datatable ends
        //second datatable starts 
        this.dtOptionInvoice = {
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
        },
            //second datatable ends
            //third datatable starts
            this.dtOptionViaReport = {
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
        //third datatable ends
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //first service starts 
        //third service ends
        //the below code is for the getting data through json ends
    };
    HireslipDetailsComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerHireNdDateWise.unsubscribe();
        this.dtTriggerInvoice.unsubscribe();
        this.dtTriggerViaReport.unsubscribe();
    };
    //input field hide and show starts
    HireslipDetailsComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'hireslipNumber') {
            this.searchByHireslipNo = true;
            this.viewDate = false;
            this.searchByDateWise = false;
            this.searchBySmryWise = false;
            this.showSrc = false;
            this.showDest = false;
            this.showSrcSum = false;
            this.showDestSum = false;
            this.showForNoAndDateWise = true;
            this.showForViaReportTable = false;
            this.showForMainAndDummyWise = false;
        }
        else if (searchBy === 'dateWise') {
            this.showForNoAndDateWise = true;
            this.showForViaReportTable = false;
            this.showForMainAndDummyWise = false;
            this.searchByDateWiseMethod();
        }
        else if (searchBy === 'summaryWise') {
            this.showForNoAndDateWise = false;
            this.showForViaReportTable = false;
            this.showForMainAndDummyWise = true;
            this.searchBySummaryWiseMethod();
        }
        else {
            this.searchByHireslipNo = false;
            this.searchByDateWise = false;
            this.viewDate = false;
            this.viewSource = false;
            this.viewDestination = false;
            this.searchBySmryWise = false;
            this.showForNoAndDateWise = false;
        }
    };
    //input field hide and show ends
    //particular input field hide and show starts
    HireslipDetailsComponent.prototype.sourceTypeMode = function (sourceType) {
        if (sourceType === 'mainSource') {
            this.searchByDateWiseMainSource();
        }
        else if (sourceType === 'individualSource') {
            this.searchByDateWiseIndividualSource();
        }
        else {
        }
    };
    //particular input field hide and show ends
    //summary type hide and show the datatable starts
    HireslipDetailsComponent.prototype.summaryTypeMode = function (summaryType) {
        if (summaryType === 'mainInvoice') {
            this.summaryWiseInvoiceTable = true;
            this.summaryWiseViaReportTable = false;
            this.searchBySummaryWiseMainInv();
        }
        else if (summaryType === 'dummyInvoice') {
            this.summaryWiseInvoiceTable = false;
            this.summaryWiseViaReportTable = false;
            this.searchBySummaryWiseDummyInv();
        }
        else if (summaryType === 'viaReport') {
            this.summaryWiseInvoiceTable = false;
            this.summaryWiseViaReportTable = true;
            this.searchBySummaryWiseViaReport();
        }
        else {
            this.summaryWiseInvoiceTable = false;
            this.summaryWiseViaReportTable = false;
        }
    };
    //summary type hide and show the datatable starts
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    HireslipDetailsComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker 
    //From Station here need to check the stationList
    HireslipDetailsComponent.prototype.gettingFromStation = function () {
        if ((this.showSrcDest == 'Hireslip Rpt Bkg Admin') && (this.userDataDtoReturnSession.stationList != null)) {
            this.getAgentListDetails();
        }
        else {
            this.gettingFromStationList();
        }
    };
    HireslipDetailsComponent.prototype.gettingFromStationDetails = function () {
        this.lrDtoFromStn.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoFromStn.mode = "notStmtInvRpt";
    };
    // get Agent List 
    HireslipDetailsComponent.prototype.getAgentListDetails = function () {
        this.agentDto.companyId = this.userDataDtoReturnSession.companyId;
        this.agentDto.column2 = "Working";
        this.agentDto.mode = "mainBranch";
        if (this.showSrcDest == 'Hireslip Rpt Bkg Admin') {
            this.agentDto.mainStation = this.userDataDtoReturnSession.mainStation;
        }
        else {
            this.agentDto.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        }
        this.getAgentList();
    };
    /////////////////////////////////////////////////
    //From Station Summary
    HireslipDetailsComponent.prototype.gettingFromStationSum = function () {
        if ((this.showSrcDest == 'Hireslip Rpt Bkg Admin') && (this.userDataDtoReturnSession.stationList != null)) {
            this.getAgentListDetailsSum();
        }
        else {
            this.gettingFromStationListSum();
        }
    };
    HireslipDetailsComponent.prototype.gettingFromStationDetailsSum = function () {
        this.lrDtoFromStnSum.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoFromStnSum.mode = "notStmtInvRpt";
    };
    // get Agent List Summary
    HireslipDetailsComponent.prototype.getAgentListDetailsSum = function () {
        this.agentDtoSum.companyId = this.userDataDtoReturnSession.companyId;
        this.agentDtoSum.column2 = "Working";
        this.agentDtoSum.mode = "mainBranch";
        if (this.showSrcDest == 'Hireslip Rpt Bkg Admin') {
            this.agentDtoSum.mainStation = this.userDataDtoReturnSession.mainStation;
        }
        else {
            this.agentDtoSum.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        }
        this.getAgentListSum();
    };
    ///get Source Spec 
    HireslipDetailsComponent.prototype.getSourceSpecDetails = function () {
        this.lrDtoSrcSpec.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoSrcSpec.mode = "notStmtInvRpt";
    };
    ///get Source All 
    HireslipDetailsComponent.prototype.getSourceAllDetails = function () {
        this.lrDtoSrcAll.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoSrcAll.mode = "trnsTripRptSRC";
    };
    /// get Source For Via Details
    HireslipDetailsComponent.prototype.getSourceForViaDetails = function () {
        this.agentDtoSrcVia.companyId = this.userDataDtoReturnSession.companyId;
    };
    //////////////
    /// Get To Stations
    HireslipDetailsComponent.prototype.getToStationDetails = function () {
        this.lrDtoToStation.companyId = this.userDataDtoReturnSession.companyId;
    };
    /// get To Station Sum
    HireslipDetailsComponent.prototype.getToStationDetailsSum = function () {
        this.lrDtoToStationSum.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoToStationSum.mode = "hireSlipRptSumWis";
    };
    /// get To Station Sum Spec
    HireslipDetailsComponent.prototype.getToStationDetailsSumSpec = function () {
        this.lrDtoToStationSumSpec.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoToStationSumSpec.mode = "hireSlipRptSumWisSpec";
    };
    /// get Dest With Trans Details
    HireslipDetailsComponent.prototype.gettingDestWithTransDetails = function () {
        this.lrDtoDestWithTrans.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestWithTrans.mode = "destAndTrans";
    };
    HireslipDetailsComponent.prototype.searchByDateWiseMethod = function () {
        this.searchByHireslipNo = false;
        this.searchBySmryWise = false;
        this.searchByDateWise = true;
        this.showSrc = true;
        this.showDest = true;
        this.viewDate = true;
        this.showSrcSum = false;
        this.showDestSum = false;
        if (this.showSrcDest == 'Hireslip Rpt Trnas Mgr' || this.showSrcDest == 'Hireslip Rpt Super Admin') {
            this.showSrc = true;
            this.showDest = true;
        }
        else if (this.showSrcDest == 'Hireslip Rpt Bkg Mgr' || this.showSrcDest == 'Hireslip Rpt Bkg Ofc Admin') {
            this.showSrc = false;
            this.showDest = true;
        }
        else if (this.showSrcDest == 'Hireslip Rpt Dly Mgr' || this.showSrcDest == 'Hireslip Rpt Coll Mgr' || this.showSrcDest == 'Hireslip Rpt Dly Ofc Admin' || this.showSrcDest == 'Hireslip Rpt Barcode') {
            this.showSrc = true;
            this.showDest = false;
        }
    };
    /// For Date Wise Main Source
    HireslipDetailsComponent.prototype.searchByDateWiseMainSource = function () {
        this.getSourceForVia();
        this.showSrc = false;
        this.showSrcSum = true;
    };
    /// For Date Wise Individual Source
    HireslipDetailsComponent.prototype.searchByDateWiseIndividualSource = function () {
        this.showSrc = true;
        this.showSrcSum = false;
    };
    /// For Summary Wise Method   
    HireslipDetailsComponent.prototype.searchBySummaryWiseMethod = function () {
        if (this.comboBoxAllsum) {
            this.getToStationDetailsListSum();
            this.gettingFromStationSum();
            this.comboBoxAllsum = false;
        }
        this.summaryView();
    };
    /// For Summary Wise Main Invoice   
    HireslipDetailsComponent.prototype.searchBySummaryWiseMainInv = function () {
        this.showForMainAndDummyWise = true;
        this.showForViaReportTable = false;
        this.showForNoAndDateWise = false;
        this.getSourceAllList();
        this.getToStationDetailsListSum();
        this.summaryView();
    };
    /// For Summary Wise Dummy Invoice  
    HireslipDetailsComponent.prototype.searchBySummaryWiseDummyInv = function () {
        this.showForMainAndDummyWise = true;
        this.showForViaReportTable = false;
        this.showForNoAndDateWise = false;
        this.getSourceSpecList();
        this.getToStationDetailsListSumSpec();
        this.summaryView();
    };
    /// For Summary Wise Via Report  
    HireslipDetailsComponent.prototype.searchBySummaryWiseViaReport = function () {
        this.showForViaReportTable = true;
        this.showForMainAndDummyWise = false;
        this.showForNoAndDateWise = false;
        this.getSourceForVia();
        this.gettingDestWithTrans();
        this.clearFields();
    };
    HireslipDetailsComponent.prototype.summaryView = function () {
        this.clearFields();
        this.searchByHireslipNo = false;
        this.searchByDateWise = false;
        this.viewDate = true;
        this.showSrc = false;
        this.showDest = false;
        this.showSrcSum = true;
        this.showDestSum = true;
        if (this.showSrcDest == 'Hireslip Rpt Trnas Mgr' || this.showSrcDest == 'Hireslip Rpt Super Admin') {
            this.showSrcSum = true;
            this.showDestSum = true;
        }
        else if (this.showSrcDest == 'Hireslip Rpt Bkg Mgr' || this.showSrcDest == 'Hireslip Rpt Bkg Ofc Admin') {
            this.showSrcSum = false;
            this.showDestSum = true;
        }
        else if (this.showSrcDest == 'Hireslip Rpt Dly Mgr' || this.showSrcDest == 'Hireslip Rpt Coll Mgr' || this.showSrcDest == 'Hireslip Rpt Dly Ofc Admin' || this.showSrcDest == 'Hireslip Rpt Barcode') {
            this.showSrcSum = true;
            this.showDestSum = false;
        }
        if (this.DummyInvView) {
            this.searchBySmryWise = true;
        }
    };
    HireslipDetailsComponent.prototype.clearFields = function () {
        $('input[type="text"],[type="number"]').val('');
        // Set Date As new Date 
        //        $( "#fromDate" ).val(new Date()  );
        //        $( "#toDate" ).val(new Date() );
        $("#fromDate").val('');
        $("#toDate").val('');
        $("#source").val('ALL');
        $("#sourceSum").val('ALL');
        $("#destination").val('ALL');
        $("#destinationSum").val('ALL');
        $("#hireslipNumber").val('ALL');
        this.hireNdDataWiseDataList = null;
        this.smryInvoiceDataList = null;
        this.smryViaReportDataList = null;
    };
    HireslipDetailsComponent.prototype.validateBtnSearch = function () {
        this.getHireslipReportDetails();
    };
    HireslipDetailsComponent.prototype.getHireslipReportDetails = function () {
        this.selectedSrc = $("#source").val();
        this.selectedDest = $("#destination").val();
        this.selectedSrcSum = $("#sourceSum").val();
        this.selectedDestSum = $("#destinationSum").val();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedHireslipNo = $("#hireslipNumber").val();
        this.selectedSearchBy = $("#searchBy").val();
        this.selectedSearchByDateWise = $("#sourceType").val();
        this.selectedSearchBySmryWise = $("#summaryType").val();
        this.selectedMainStation = this.userDataDtoReturnSession.mainStation;
        //        store.removeAll();
        this.hireDto.status = null;
        this.hireDto.companyid = this.userDataDtoReturnSession.companyId;
        if (this.selectedSearchBy == 'hireslipNumber') {
            if (this.selectedHireslipNo == null) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Warning",
                    text: "Please Enter the Hireslip number",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                this.getHireslipNumber();
            }
        }
        else if (this.selectedSearchBy == 'dateWise') {
            if (this.selectedFromDate == null || this.selectedToDate == null) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Warning",
                    text: "From Date And To Date Are Mandatory Fields",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                //                        DateTimeFormat dtf = DateTimeFormat
                //                                .getFormat("yyyy-MM-dd");
                this.hireDto.fromDate = this.selectedFromDate;
                this.hireDto.toDate = this.selectedToDate;
                this.hireDto.stationList = this.userDataDtoReturnSession.stationList;
                if (this.showSrcDest == 'Hireslip Rpt Bkg Mgr' || this.showSrcDest == 'Hireslip Rpt Bkg Ofc Admin') {
                    this.hireDto.role = "booking";
                }
                else if (this.showSrcDest == 'Hireslip Rpt Dly Mgr' || this.showSrcDest == 'Hireslip Rpt Coll Mgr' || this.showSrcDest == 'Hireslip Rpt Dly Ofc Admin' || this.showSrcDest == 'Hireslip Rpt Barcode') {
                    this.hireDto.role = "delivery";
                }
                else if (this.showSrcDest == 'Hireslip Rpt Trnas Mgr') {
                    this.hireDto.role = "superadmin";
                }
                else if (this.showSrcDest == 'Hireslip Rpt Bkg Admin') {
                    this.hireDto.role = "adminStation";
                }
                else {
                    this.hireDto.role = "superadmin";
                }
                if (this.showSrcDest == 'Hireslip Rpt Trnas Mgr' || this.showSrcDest == 'Hireslip Rpt Super Admin' || this.showSrcDest == 'Hireslip Rpt Bkg Admin') {
                    this.hireDto.fromStation = this.selectedSrc;
                    this.hireDto.toStation = this.selectedDest;
                    if (this.selectedFromDate != null
                        && this.selectedToDate != null
                        && (this.selectedSrc == "ALL") && this.selectedDest == "ALL") {
                        this.hireDto.mode = "all";
                    }
                    else if (this.selectedFromDate != null
                        && this.selectedToDate != null
                        && (this.selectedSrc != "ALL") && this.selectedDest != "ALL") {
                        this.hireDto.mode = "fromTo";
                    }
                    else if (this.selectedFromDate != null
                        && this.selectedToDate != null
                        && (this.selectedSrc == "ALL") && this.selectedDest != "ALL") {
                        this.hireDto.mode = "toOnly";
                    }
                    else if (this.selectedFromDate != null
                        && this.selectedToDate != null
                        && (this.selectedSrc != "ALL") && this.selectedDest == "ALL") {
                        this.hireDto.mode = "fromOnly";
                    }
                }
                else if (this.showSrcDest == 'Hireslip Rpt Bkg Mgr' || this.showSrcDest == 'Hireslip Rpt Bkg Ofc Admin') {
                    this.hireDto.fromStation = this.userDataDtoReturnSession.office;
                    this.hireDto.toStation = this.selectedDest;
                    if (this.selectedFromDate != null
                        && this.selectedToDate != null
                        && this.selectedDest == "ALL") {
                        this.hireDto.mode = "all";
                    }
                    else if (this.selectedFromDate != null
                        && this.selectedToDate != null
                        && this.selectedDest != "ALL") {
                        this.hireDto.mode = "dest";
                    }
                }
                else if (this.showSrcDest == 'Hireslip Rpt Dly Mgr' || this.showSrcDest == 'Hireslip Rpt Coll Mgr' || this.showSrcDest == 'Hireslip Rpt Dly Ofc Admin' || this.showSrcDest == 'Hireslip Rpt Barcode') {
                    if (this.selectedMainStation == "Chennai") {
                        this.hireDto.toStation = this.userDataDtoReturnSession.office;
                        this.hireDto.tostation = this.userDataDtoReturnSession.mainStation;
                    }
                    else {
                        this.hireDto.toStation = this.userDataDtoReturnSession.office;
                    }
                    this.hireDto.fromStation = this.selectedSrc;
                    if (this.selectedFromDate != null
                        && this.selectedToDate != null
                        && this.selectedSrc == "ALL") {
                        this.hireDto.mode = "all";
                    }
                    else if (this.selectedFromDate != null
                        && this.selectedToDate != null
                        && this.selectedSrc != "ALL") {
                        this.hireDto.mode = "source";
                    }
                }
                if (this.selectedSearchByDateWise == "mainSource") {
                    this.hireDto.fromStation = this.selectedSrcSum;
                    this.hireDto.mode = "MainSrc";
                }
                this.gridReconfigure();
            }
        }
        else if (this.selectedSearchBy == 'summaryWise') {
            if (this.selectedFromDate == null && this.selectedToDate == null) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Warning",
                    text: "From Date And To Date Are Mandatory Fields",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                //                searchSrcList = new ArrayList<String>();
                //                searchDestList = new ArrayList<String>();
                //                this.hireDto.fromDate = this.selectedFromDate;
                //                this.hireDto.toDate = this.selectedToDate;
                this.hireDto.fromDate = '2019-01-01';
                this.hireDto.toDate = '2019-06-01';
                //                this.hireDto.fromDateInDate = this.selectedFromDate;
                //                this.hireDto.toDateInDate = this.selectedToDate;
                if (this.showDestSum == true) {
                    if ((this.selectedDestSum != null) && (this.selectedDestSum != "") && (this.selectedDestSum == "ALL")) {
                        //                        ListOfDest is Pending 
                        //                        hireDto.setListOfDest( destAllList );
                        //                        this.hireDto.listOfDest= this.destAllList;
                    }
                    else {
                        //                        ListOfDest is Pending 
                        //                                                searchDestList.add( cbToSum.getRawValue() );
                        //                                                hireDto.setListOfDest( searchDestList );
                        //                        this.searchDestList = this.selectedDest;
                        this.searchDestList = ["Madurai"];
                        this.hireDto.listOfDest = this.searchDestList;
                    }
                }
                else {
                    //                    ListOfDest is Pending 
                    //                    searchDestList.add( SRDWeb.mainStation );
                    //                    hireDto.setListOfDest( searchDestList );
                    this.searchDestList = this.selectedMainStation;
                    this.searchDestList = ["Madurai"];
                    this.hireDto.listOfDest = this.searchDestList;
                }
                if (this.showSrcSum == true) {
                    if ((this.selectedSrcSum != null) && (this.selectedSrcSum != "") && (this.selectedSrcSum == "ALL")) {
                        //                        ListOfSrc is Pending 
                        //                        hireDto.setListOfSource( sourceAllList );
                        //                        this.hireDto.listOfSource= this.sourceAllList;
                    }
                    else {
                        //                        ListOfSrc is Pending 
                        //                        searchSrcList.add( cbFromSum.getRawValue() );
                        //                        hireDto.setListOfSource( searchSrcList );
                        this.searchSrcList = this.selectedSrcSum;
                        this.searchSrcList = ["Delhi"];
                        this.hireDto.listOfSource = this.searchSrcList;
                    }
                }
                else {
                    //                    ListOfSrc is Pending 
                    //                    searchSrcList.add( SRDWeb.mainStation );
                    //                    hireDto.setListOfSource( searchSrcList );
                    this.searchSrcList = this.selectedMainStation;
                    this.searchSrcList = ["Delhi"];
                    this.hireDto.listOfSource = this.searchSrcList;
                }
                if (this.DummyInvView == true && this.selectedSearchBySmryWise == 'dummyInvoice') {
                    this.hireDto.status = "Dummy";
                    //                    Pending
                    //                    summary.gridReconfigureSummary( hireDto );
                    this.gridReconfigureSummary();
                }
                else if (this.DummyInvView == true && this.selectedSearchBySmryWise == 'viaReport') {
                    this.hireDto.status = "Via";
                    //                    Pending
                    //                    summaryVia.gridReconfigureSummary( hireDto );
                    this.gridReconfigureSummary();
                }
                else {
                    //                    Pending
                    this.hireDto.status = null;
                    //                    summary.gridReconfigureSummary( hireDto );
                    this.gridReconfigureSummary();
                }
            }
        }
    };
    /// For DateWise
    HireslipDetailsComponent.prototype.gridReconfigure = function () {
        //Pending
        this.hireDto.goodsValueFOVLimit = (this.userDataDtoReturnSession.goodsValueLimitForTransId == null ? 0.0 : this.userDataDtoReturnSession.goodsValueLimitForTransId);
        //        this.getDateWiseDetails();
        this.getHireslipNumberList();
    };
    //    getDateWiseDetails = () => {
    //        this.reportService.getHireslipDateWiseRpt( this.hireDto ).subscribe(
    //            ( response ) => {
    //                if ( response.length == 0 ) {
    //                    swal( {
    //                        title: "Warning",
    //                        text: "No records found!",
    //                        icon: "warning",
    //                        closeOnClickOutside: false,
    //                        closeOnEsc: false,
    //                    } );
    //                } else {
    //                    this.getHireslipNumberList();
    //                    this.hireNdDataWiseDataList = response;
    //                    //                        console.log( response );
    //
    //                }
    //            } ),
    //            ( error ) => console.log( error.json() ),
    //            () => console.log( 'done' );
    //    };
    /// For  Summary Wise
    HireslipDetailsComponent.prototype.gridReconfigureSummary = function () {
        this.getSummaryWiseDetails();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HireslipDetailsComponent.prototype, "dtElements", void 0);
    HireslipDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hireslip-details',
            template: __webpack_require__(/*! ./hireslip-details.component.html */ "./src/app/report/hireslip-and-invoice-report/hireslip-details/hireslip-details.component.html"),
            styles: [__webpack_require__(/*! ./hireslip-details.component.css */ "./src/app/report/hireslip-and-invoice-report/hireslip-details/hireslip-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__["MasterReadService"]])
    ], HireslipDetailsComponent);
    return HireslipDetailsComponent;
}());



/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-history-report/hireslip-history-report.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-history-report/hireslip-history-report.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9oaXJlc2xpcC1hbmQtaW52b2ljZS1yZXBvcnQvaGlyZXNsaXAtaGlzdG9yeS1yZXBvcnQvaGlyZXNsaXAtaGlzdG9yeS1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-history-report/hireslip-history-report.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-history-report/hireslip-history-report.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Hireslip History Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"hireslipHistory\">Hireslip History</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"lrHistory\">LR History</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"hireslipNoWise\">Hireslip No Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"dateWise\">Date Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByHireslipNoWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hireslipNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hireslip No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByDateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByDateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsHireslipHistory\" [dtTrigger]=\"dtTriggerHireslipHistory\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Truck No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Depart Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Depart Time</th>\n\t\t\t\t\t\t\t\t\t\t<th>Driver</th>\n\t\t\t\t\t\t\t\t\t\t<th>Enter By</th>\n\t\t\t\t\t\t\t\t\t\t<th>Loaded By</th>\n\t\t\t\t\t\t\t\t\t\t<th>Sch Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Sch Time</th>\n\t\t\t\t\t\t\t\t\t\t<th>Supplier</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Hire</th>\n\t\t\t\t\t\t\t\t\t\t<th>Gur Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Kan Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Advance</th>\n\t\t\t\t\t\t\t\t\t\t<th>Balance</th>\n\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t<th>Reason</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let hireslipHistoryData of hireslipHistoryDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.truckNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.departDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.departTime }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.driver }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.enterBy }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.loadedBy }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.schDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.schTime }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.supplier }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.totHire }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.gurWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.kanWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.advance }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.balance }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.status }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipHistoryData.reason }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<div [hidden]=\"! lrHistoryTable\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionLrHistory\" [dtTrigger]=\"dtTriggerLrHistory\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Lr No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Updated By</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Updated On</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Reason</th>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let lrHistoryData of lrHistoryDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryData.lrNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryData.updatedBy }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryData.updatedOn }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryData.status }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryData.reason }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-history-report/hireslip-history-report.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-history-report/hireslip-history-report.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: HireslipHistoryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireslipHistoryReportComponent", function() { return HireslipHistoryReportComponent; });
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


var HireslipHistoryReportComponent = /** @class */ (function () {
    function HireslipHistoryReportComponent(hireslipHistoryRpt) {
        this.hireslipHistoryRpt = hireslipHistoryRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.viewTypeHireslipHistory = true;
        this.viewTypeLrHistory = false;
        this.searchByHireslipNoWise = true;
        this.searchByDateWise = false;
        this.dtTriggerHireslipHistory = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerLrHistory = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    HireslipHistoryReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    HireslipHistoryReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsHireslipHistory = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Truck No',
                    data: 'truckNo'
                },
                {
                    title: 'Depart Date',
                    data: 'departDate'
                },
                {
                    title: 'Depart Time',
                    data: 'departTime'
                },
                {
                    title: 'Driver',
                    data: 'driver'
                },
                {
                    title: 'Enter By',
                    data: 'enterBy'
                },
                {
                    title: 'Loaded By',
                    data: 'loadedBy'
                }, {
                    title: 'Sch Date',
                    data: 'schDate'
                }, {
                    title: 'Sch Time',
                    data: 'schTime'
                }, {
                    title: 'Supplier',
                    data: 'supplier'
                }, {
                    title: 'Tot Hire',
                    data: 'totHire'
                }, {
                    title: 'Gur Wt',
                    data: 'gurWt'
                }, {
                    title: 'Kan Wt',
                    data: 'kanWt'
                }, {
                    title: 'Advance',
                    data: 'advance'
                }, {
                    title: 'Balance',
                    data: 'balance'
                }, {
                    title: 'Status',
                    data: 'status'
                }, {
                    title: 'Reason',
                    data: 'reason'
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
        this.dtOptionLrHistory = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Lr No',
                    data: 'lrNo'
                },
                {
                    title: 'Updated By',
                    data: 'updatedBy'
                },
                {
                    title: 'Updated On',
                    data: 'updatedOn'
                },
                {
                    title: 'Status',
                    data: 'status'
                },
                {
                    title: 'Reason',
                    data: 'reason'
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
        this.getDataFrmServiceFrHireslipHistoryTable = this.hireslipHistoryRpt.getSummaryData();
        this.onDestroyUnsubscribtionHireslipHistory = this.getDataFrmServiceFrHireslipHistoryTable.subscribe(function (data) {
            _this.hireslipHistoryDataList = data['data'];
            _this.dtTriggerHireslipHistory.next();
        });
        this.getDataFrmServiceFrLrHistoryTable = this.hireslipHistoryRpt.getSummaryData();
        this.onDestroyUnsubscribtionLrHistory = this.getDataFrmServiceFrLrHistoryTable.subscribe(function (data) {
            _this.lrHistoryDataList = data['data'];
            _this.dtTriggerLrHistory.next();
        });
        //the below code is for the getting data through json ends
    };
    HireslipHistoryReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerHireslipHistory.unsubscribe();
        this.dtTriggerLrHistory.unsubscribe();
        this.onDestroyUnsubscribtionHireslipHistory.unsubscribe();
        this.onDestroyUnsubscribtionLrHistory.unsubscribe();
    };
    //input field Hide and Show
    HireslipHistoryReportComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'hireslipNoWise') {
            this.searchByHireslipNoWise = true;
            this.searchByDateWise = false;
        }
        else if (searchBy === 'dateWise') {
            this.searchByHireslipNoWise = false;
            this.searchByDateWise = true;
        }
        else {
            this.searchByHireslipNoWise = false;
            this.searchByDateWise = false;
        }
    };
    //dataTable Hide and Show the code is to add in HTML file  
    HireslipHistoryReportComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'hireslipHistory') {
            this.viewTypeHireslipHistory = true;
            this.viewTypeLrHistory = false;
        }
        else if (viewType === 'lrHistory') {
            this.viewTypeHireslipHistory = false;
            this.viewTypeLrHistory = true;
        }
        else {
            this.viewTypeHireslipHistory = false;
            this.viewTypeLrHistory = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    HireslipHistoryReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HireslipHistoryReportComponent.prototype, "dtElements", void 0);
    HireslipHistoryReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hireslip-history-report',
            template: __webpack_require__(/*! ./hireslip-history-report.component.html */ "./src/app/report/hireslip-and-invoice-report/hireslip-history-report/hireslip-history-report.component.html"),
            styles: [__webpack_require__(/*! ./hireslip-history-report.component.css */ "./src/app/report/hireslip-and-invoice-report/hireslip-history-report/hireslip-history-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], HireslipHistoryReportComponent);
    return HireslipHistoryReportComponent;
}());



/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-report/hireslip-unloading-report.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-unloading-report/hireslip-unloading-report.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\n  top:26px;\n    left:25px;\n\tmax-height: 150px;\n    overflow-y: auto;\n    position: absolute;\n}\n\n\n::ng-deep .mat-horizontal-stepper-header {\n\tpointer-events: none !important;\n}\n\n\n::ng-deep .mat-progress-bar-fill::after {\n    background-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9oaXJlc2xpcC11bmxvYWRpbmctcmVwb3J0L2hpcmVzbGlwLXVubG9hZGluZy1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7SUFDUCxVQUFVO0NBQ2Isa0JBQWtCO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7O0FBR0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7OztBQUVEO0lBQ0ksd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9oaXJlc2xpcC11bmxvYWRpbmctcmVwb3J0L2hpcmVzbGlwLXVubG9hZGluZy1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvdyB7XG4gIHRvcDoyNnB4O1xuICAgIGxlZnQ6MjVweDtcblx0bWF4LWhlaWdodDogMTUwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cblxuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-report/hireslip-unloading-report.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-unloading-report/hireslip-unloading-report.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Hireslip Unloading Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"hireslipNumberWise\">Hireslip\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNumber</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"destinationWise\">Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByHireslipNo\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hireslip Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"hireslipNumber\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByDestination\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" [(ngModel)]=\"fromDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByDestination\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"toDateModel\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByDestination\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destination\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"searchMethod();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"(click)=\"clearMethod();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Hireslip Unloading Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"hireslipUnloadingRptId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsHireslipUnloadingRpt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerHireslipUnloadingRpt\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Hireslip No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Hireslip Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Station</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gurantee Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Kanta Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let hireslipUnloadingRptData of hireslipUnloadingRptDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<a style=\"color:red;cursor: pointer;\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"unloadingSheetDetailsPopUpBtnLink(unloadingSheetDetailsPopUpTemplate,hireslipUnloadingRptData)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<u>{{ hireslipUnloadingRptData.hireslipnumber }}</u></a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipUnloadingRptData.hireSlipDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipUnloadingRptData.fromStation }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipUnloadingRptData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipUnloadingRptData.gurWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ hireslipUnloadingRptData.kantaWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t<ng-template #unloadingSheetDetailsPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<!--<div class=\"modal-header\">\n\t\t\t\t\t\t<h5>Memo Less Description :</h5>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>-->\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewUnloadingSheetDetailsPopUp\" onafterPopUp=\"afterPopUp()\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"popupUnloadingSheetDetailsRpt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-hireslip-unloading-sheet-details-report></app-hireslip-unloading-sheet-details-report>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<button style=\"float: right;\" type=\"button\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"cancelBtnId\" (click)=\"closeUnloadingSheetDetailsPopUp()\">Cancel\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-report/hireslip-unloading-report.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-unloading-report/hireslip-unloading-report.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: HireslipUnloadingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireslipUnloadingReportComponent", function() { return HireslipUnloadingReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
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


















var HireslipUnloadingReportComponent = /** @class */ (function () {
    function HireslipUnloadingReportComponent(router, masterReadService, datePipe, lrReportService, masterService, consigneeService, hireslipService, modalService) {
        var _this = this;
        this.router = router;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        this.lrReportService = lrReportService;
        this.masterService = masterService;
        this.consigneeService = consigneeService;
        this.hireslipService = hireslipService;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.searchByHireslipNo = true;
        this.searchByDestination = false;
        this.dtTriggerHireslipUnloadingRpt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.superAdminView = false;
        this.viewDestination = false;
        this.hireslipDtoSearchDetails = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_17__["HireSlipDto"]();
        this.viewUnloadingSheetDetailsPopUp = false;
        this.invoicedtoForSearchOtherDetails = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_16__["InvoiceDto"]();
        this.hireslipdtoGetDetailsForPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_16__["InvoiceDto"]();
        this.ShowDestForUnLoadRpt = "Show Dest In UnLoadRpt";
        this.searchMethodDetails = function () {
            _this.showSpinnerForAction = true;
            _this.hireslipService.getUnloadingRptDtls(_this.hireslipDtoSearchDetails).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#hireslipUnloadingRptId").DataTable().destroy();
                _this.hireslipUnloadingRptDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.hireslipUnloadingRptDataList = response;
                    console.log(_this.hireslipUnloadingRptDataList);
                }
                _this.dtTriggerHireslipUnloadingRpt.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the  Hireslip Unloading details", "info");
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
            this.office = this.userDataDtoReturnSession.office == null ? '' : this.userDataDtoReturnSession.office;
            ///Rights for show Show Source List
            //            if ( this.ShowDestForUnLoadRpt == "Show Dest In UnLoadRpt" ) {
            //                this.viewDestination = true;
            //this.superAdminView = true;
            //this.getDestinationDetails();         
            //} 
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "SuperAdminView UnLoadRpt") {
                        this.superAdminView = true;
                    }
                }
            }
            this.superAdminView = true;
            if (this.superAdminView == true) {
                this.viewDestination = true;
                this.getDestinationDetails();
            }
            else {
                this.viewDestination = false;
            }
        }
    }
    HireslipUnloadingReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    HireslipUnloadingReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    HireslipUnloadingReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    HireslipUnloadingReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var mainStation = this.userDataDtoReturnSession.mainStation;
        var destVisible = false;
        if (this.superAdminView == true) {
            destVisible = true;
        }
        else {
            destVisible = false;
        }
        this.dtOptionsHireslipUnloadingRpt = {
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
                            if ($("#searchBy").val() == 'hireslipNumberWise') {
                                returnVal = "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 30%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Hireslip No. &nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>" + $("#hireslipNumber").val() + "</strong>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:50%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:20px;'><u>Hireslip Unloading Details Report</u></strong><br>" +
                                    "</td>" +
                                    "<td  align='left' style='width:20%;'>" +
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
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_13__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_13__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:19px;'><u>Hireslip Unloading Details Report</u></strong><br>" +
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
                                    "<strong style='font-size:15px;'></strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'></strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                    "<span style='font-size:15px;'></span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                        }
                        else {
                            if ($("#searchBy").val() == 'hireslipNumberWise') {
                                returnVal = "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 30%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Hireslip No. &nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>" + $("#hireslipNumber").val() + "</strong>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:50%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:20px;'><u>Hireslip Unloading Details Report</u></strong><br>" +
                                    "</td>" +
                                    "<td  align='left' style='width:20%;'>" +
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
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_13__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_13__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:19px;'><u>Hireslip Unloading Details Report</u></strong><br>" +
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
                                    "<strong style='font-size:15px;'></strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'></strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                    "<span style='font-size:15px;'></span><br>" +
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
                            if ($("#searchBy").val() == 'hireslipNumberWise') {
                                returnSummaryExcel = "Hireslip Unloading Details Report" +
                                    " Hireslip Number : " + $("#hireslipNumber").val();
                            }
                            else {
                                returnSummaryExcel = "Hireslip Unloading Details Report" +
                                    " From Date : " + moment__WEBPACK_IMPORTED_MODULE_13__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_13__($("#toDate").val()).format('DD-MM-YYYY') + " Destination : " + $("#destination").val();
                            }
                        }
                        else {
                            if ($("#searchBy").val() == 'hireslipNumberWise') {
                                returnSummaryExcel = "Hireslip Unloading Details Report" +
                                    " Hireslip Number : " + $("#hireslipNumber").val();
                            }
                            else {
                                returnSummaryExcel = "Hireslip Unloading Details Report" +
                                    " From Date : " + moment__WEBPACK_IMPORTED_MODULE_13__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_13__($("#toDate").val()).format('DD-MM-YYYY') + " Destination : " + mainStation;
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
                var articles = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWgt = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chargedWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html();
                $(api.column(3).footer()).html(articles);
                $(api.column(4).footer()).html(actualWgt);
                $(api.column(5).footer()).html(chargedWgt);
            }
        };
    };
    HireslipUnloadingReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerHireslipUnloadingRpt.unsubscribe();
    };
    HireslipUnloadingReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerHireslipUnloadingRpt.next();
    };
    HireslipUnloadingReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "desttrsp";
    };
    HireslipUnloadingReportComponent.prototype.getDestinationDetails = function () {
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
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Destination Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    HireslipUnloadingReportComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'hireslipNumberWise') {
            this.searchByHireslipNo = true;
            this.searchByDestination = false;
            $("#fromDate").val('');
            $("#toDate").val('');
            $("#hireslipUnloadingRptId").DataTable().destroy();
            this.hireslipUnloadingRptDataList = [];
            this.dtTriggerHireslipUnloadingRpt.next();
            $("#hireslipNumber").val('');
            if (this.superAdminView == true) {
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
        else if (searchBy === 'destinationWise') {
            this.searchByHireslipNo = false;
            this.searchByDestination = true;
            $("#fromDate").val('');
            $("#toDate").val('');
            $("#hireslipUnloadingRptId").DataTable().destroy();
            this.hireslipUnloadingRptDataList = [];
            this.dtTriggerHireslipUnloadingRpt.next();
            $("#hireslipNumber").val('');
            if (this.superAdminView == true) {
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
            $("#fromDate").val('');
            $("#toDate").val('');
            this.searchByHireslipNo = false;
            this.searchByDestination = false;
            $("#hireslipUnloadingRptId").DataTable().destroy();
            this.hireslipUnloadingRptDataList = [];
            this.dtTriggerHireslipUnloadingRpt.next();
            $("#hireslipNumber").val('');
            if (this.superAdminView == true) {
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
    HireslipUnloadingReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    HireslipUnloadingReportComponent.prototype.searchMethod = function () {
        this.selectedSearchType = $("#searchBy").val();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedDestination = $("#destination").val();
        this.enteredHireslipNumber = $("#hireslipNumber").val();
        this.hireslipDtoSearchDetails = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_17__["HireSlipDto"]();
        if (this.selectedSearchType == 'hireslipNumberWise') {
            if (this.enteredHireslipNumber == null || this.enteredHireslipNumber == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Warning",
                    text: "Please Enter Hireslip Number",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
            else {
                if (this.superAdminView == true) {
                    this.hireslipDtoSearchDetails.mode = "HireSlipNo";
                }
                else {
                    this.hireslipDtoSearchDetails.mode = "HireSlipNoSpec";
                    this.hireslipDtoSearchDetails.toStation = this.userDataDtoReturnSession.mainStation;
                }
                this.hireslipDtoSearchDetails.hireslipnumber = this.enteredHireslipNumber;
            }
        }
        else if (this.selectedSearchType == 'destinationWise') {
            if (this.superAdminView == true) {
                if (this.selectedFromDate == null || this.selectedFromDate == '' || this.selectedToDate == null || this.selectedToDate == '' || this.selectedDestination == null || this.selectedDestination == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Mandatory Field",
                        text: "From Date , To Date , Destination Is Mandatory Fields",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    return false;
                }
                else {
                    this.hireslipDtoSearchDetails.mode = "DateWise";
                    this.hireslipDtoSearchDetails.toStation = this.selectedDestination;
                    this.hireslipDtoSearchDetails.fromDate = this.selectedFromDate;
                    this.hireslipDtoSearchDetails.toDate = this.selectedToDate;
                }
            }
            else {
                if (this.selectedFromDate == null || this.selectedFromDate == '' || this.selectedToDate == null || this.selectedToDate == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Mandatory Field",
                        text: "From Date , To Date Is Mandatory Fields",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    return false;
                }
                else {
                    this.hireslipDtoSearchDetails.mode = "DateWise";
                    this.hireslipDtoSearchDetails.toStation = this.userDataDtoReturnSession.mainStation;
                    this.hireslipDtoSearchDetails.fromDate = this.selectedFromDate;
                    this.hireslipDtoSearchDetails.toDate = this.selectedToDate;
                }
            }
        }
        console.log(this.hireslipDtoSearchDetails);
        this.searchMethodDetails();
    };
    HireslipUnloadingReportComponent.prototype.unloadingSheetDetailsPopUpBtnLink = function (unloadingSheetDetailsPopUpTemplate, hireslipUnloadingRptData) {
        var _this = this;
        this.invoicedtoForSearchOtherDetails = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_16__["InvoiceDto"]();
        this.invoicedtoForSearchOtherDetails.invoiceNumber = hireslipUnloadingRptData.hireslipnumber;
        this.hireslipService.getInvoiceDetails(this.invoicedtoForSearchOtherDetails).subscribe(function (response) {
            if (response) {
                _this.hireslipdtoRecDetails = response;
                console.log(_this.hireslipdtoRecDetails);
                _this.hireslipdtoGetDetailsForPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_16__["InvoiceDto"]();
                _this.hireslipdtoGetDetailsForPopup = _this.hireslipdtoRecDetails;
                _this.unloadingSheetDetailsPopUp = _this.modalService.open(unloadingSheetDetailsPopUpTemplate, { centered: true, size: 'lg', windowClass: "modalClassForPopUpTruckOwner" });
                _this.unloadingSheetDetailsPopUp.result.then(function (result) {
                    _this.unloadingSheetDetailsClosePopUp = "Closed with: " + result;
                }, function (reason) {
                    _this.unloadingSheetDetailsClosePopUp = "Dismissed " + _this.getDismissReason(reason);
                });
                localStorage.clear();
                localStorage.setItem('popupUnloadingSheetDetails', JSON.stringify(hireslipUnloadingRptData));
                localStorage.setItem('popupUnloadingSheetOtherPrintDetails', JSON.stringify(_this.hireslipdtoGetDetailsForPopup));
                _this.viewUnloadingSheetDetailsPopUp = true;
                window.addEventListener('afterPopUp', function (event) {
                    _this.viewUnloadingSheetDetailsPopUp = false;
                });
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("No Records", "No Records found for this search", "info");
            }
        }),
            function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Memo Less Description Details", "info");
            },
            function () { return console.log('done'); };
    };
    HireslipUnloadingReportComponent.prototype.closeUnloadingSheetDetailsPopUp = function () {
        this.unloadingSheetDetailsPopUp.close();
    };
    HireslipUnloadingReportComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HireslipUnloadingReportComponent.prototype.clearMethod = function () {
        this.selectedSearchType = '';
        this.searchByHireslipNo = true;
        this.searchByDestination = false;
        $("#searchBy").val('hireslipNumberWise');
        this.selectedFromDate = '';
        $("#fromDate").val('');
        this.selectedToDate = '';
        $("#toDate").val('');
        this.selectedDestination = '';
        this.enteredHireslipNumber = '';
        $("#hireslipUnloadingRptId").DataTable().destroy();
        this.hireslipUnloadingRptDataList = [];
        this.dtTriggerHireslipUnloadingRpt.next();
        $("#hireslipNumber").val('');
        if (this.superAdminView == true) {
            this.viewDestination = true;
            $("#destination").val('');
        }
        else {
            this.viewDestination = false;
        }
        this.modelDestination = '';
        this.fromDateModel = null;
        this.toDateModel = null;
        this.hireslipDtoSearchDetails = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_17__["HireSlipDto"]();
        this.invoicedtoForSearchOtherDetails = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_16__["InvoiceDto"]();
        this.hireslipdtoGetDetailsForPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_16__["InvoiceDto"]();
        localStorage.clear();
        this.showSpinnerForAction = false;
        this.hireslipdtoRecDetails = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HireslipUnloadingReportComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('unloadingSheetDetailsPopUpTemplate'),
        __metadata("design:type", Object)
    ], HireslipUnloadingReportComponent.prototype, "unloadingSheetDetailsPopUpTemplate", void 0);
    HireslipUnloadingReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hireslip-unloading-report',
            template: __webpack_require__(/*! ./hireslip-unloading-report.component.html */ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-report/hireslip-unloading-report.component.html"),
            styles: [__webpack_require__(/*! ./hireslip-unloading-report.component.css */ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-report/hireslip-unloading-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_12__["LrReportService"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_15__["MasterService"], src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_14__["ConsigneeService"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_18__["HireslipService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], HireslipUnloadingReportComponent);
    return HireslipUnloadingReportComponent;
}());



/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-sheet-details-report/hireslip-unloading-sheet-details-report.component.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-unloading-sheet-details-report/hireslip-unloading-sheet-details-report.component.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\n::ng-deep .mat-horizontal-stepper-header {\r\n\tpointer-events: none !important;\r\n}\r\n\r\n::ng-deep .mat-progress-bar-fill::after {\r\n    background-color: green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9oaXJlc2xpcC11bmxvYWRpbmctc2hlZXQtZGV0YWlscy1yZXBvcnQvaGlyZXNsaXAtdW5sb2FkaW5nLXNoZWV0LWRldGFpbHMtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7Q0FDQyxnQ0FBZ0M7Q0FDaEM7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvaGlyZXNsaXAtYW5kLWludm9pY2UtcmVwb3J0L2hpcmVzbGlwLXVubG9hZGluZy1zaGVldC1kZXRhaWxzLXJlcG9ydC9oaXJlc2xpcC11bmxvYWRpbmctc2hlZXQtZGV0YWlscy1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcclxuXHR0b3A6IDI2cHg7XHJcbiAgICBsZWZ0OiAxODhweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-sheet-details-report/hireslip-unloading-sheet-details-report.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-unloading-sheet-details-report/hireslip-unloading-sheet-details-report.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\r\n<head>\r\n\t<style>\r\n\t\t.imb_patch {\r\n\t\t\ttext-align: center;\r\n\t\t\tbackground-color: orange;\r\n\t\t\tpadding: 2px;\r\n\t\t}\r\n\t</style>\r\n</head>\r\n\r\n<body>\r\n\t<!-- Row -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\r\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\r\n\t\t\t\t\t<h6 class=\"card-title text-white\">Unloading Sheet Details Of {{hireslipNumberFromDto}}</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<!-- spinner start-->\r\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\r\n\t\t\t\t\t\t\t\t\t<br>\r\n\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\r\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin-bottom: 10px; font-size: 18px;\">\r\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- spinner end-->\r\n\t\t\t\t\t\t<div class=\"box-body\">\r\n\t\t\t\t\t\t\t<table datatable id=\"unloadingSheetDetailsId\"\r\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\r\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsUnloadingSheetDetails\"\r\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerUnloadingSheetDetails\">\r\n\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Actual Article</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Enter Article</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Remark</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Mention</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let unloadingSheetDetailsData of unloadingSheetDetailsDataList let i = index \">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingSheetDetailsData.lrNumber }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{ unloadingSheetDetailsData.article }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{ unloadingSheetDetailsData.remark }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{ unloadingSheetDetailsData.article }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{ unloadingSheetDetailsData.remark }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{ unloadingSheetDetailsData.article }}</td>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-sheet-details-report/hireslip-unloading-sheet-details-report.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/hireslip-unloading-sheet-details-report/hireslip-unloading-sheet-details-report.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: HireslipUnloadingSheetDetailsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireslipUnloadingSheetDetailsReportComponent", function() { return HireslipUnloadingSheetDetailsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
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





/*import { DragulaService, dragula } from "ng2-dragula";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from "@angular/common";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { MatDialog } from '@angular/material';*/



var HireslipUnloadingSheetDetailsReportComponent = /** @class */ (function () {
    function HireslipUnloadingSheetDetailsReportComponent(memoLessRpt, router, masterReadService, memoReport, modalService, hireslipService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        this.hireslipService = hireslipService;
        this.dtTriggerUnloadingSheetDetails = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.hireslipDtoSearchDetailsFromPopup = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_11__["HireSlipDto"]();
        this.hireslipDtoSearchDetails = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_11__["HireSlipDto"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.loadingIndicator = true;
        this.cashMemoDtoLocalStorage = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__["CashMemoDto"]();
        this.cashMemoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__["CashMemoDto"]();
        this.dtTriggerMemoLessDescriptionDetails = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.invoiceDtoForPrintFromPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_13__["InvoiceDto"]();
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
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
            this.dataForPopup = JSON.parse(localStorage.getItem('popupUnloadingSheetDetails'));
            this.dataForPopupOtherDetails = JSON.parse(localStorage.getItem('popupUnloadingSheetOtherPrintDetails'));
            localStorage.clear();
            if (this.dataForPopupOtherDetails != null) {
                this.invoiceDtoForPrintFromPopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_13__["InvoiceDto"]();
                this.invoiceDtoForPrintFromPopup = this.dataForPopupOtherDetails;
            }
            if (this.dataForPopup != null) {
                this.hireslipDtoSearchDetailsFromPopup = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_11__["HireSlipDto"]();
                this.hireslipDtoSearchDetailsFromPopup = this.dataForPopup;
                if (this.hireslipDtoSearchDetailsFromPopup != null) {
                    this.searchByUnlaodingSheetDetailsPopup();
                }
            }
            this.dataForPopup = '';
            this.dataForPopupOtherDetails = '';
            this.hireslipNumberFromDto = this.hireslipDtoSearchDetailsFromPopup.hireslipnumber;
            this.truckNumber = this.invoiceDtoForPrintFromPopup.vehicleNumber;
            this.supplierName = this.invoiceDtoForPrintFromPopup.supplierName;
            this.invoiceNumber = this.invoiceDtoForPrintFromPopup.hireSlipNumber;
            this.invoiceDate = this.invoiceDtoForPrintFromPopup.hireslipdate;
            this.driverName = this.invoiceDtoForPrintFromPopup.driverName;
            this.driverMobile = this.invoiceDtoForPrintFromPopup.mobileNum;
            this.date = this.invoiceDtoForPrintFromPopup.toDateInDate;
        }
    }
    HireslipUnloadingSheetDetailsReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    HireslipUnloadingSheetDetailsReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                //this.dtTriggerMemoLessDescriptionDetails.next();
            });
        });
    };
    HireslipUnloadingSheetDetailsReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var truckNumberPrt = this.truckNumber == null ? "NA" : this.truckNumber;
        var supplierNamePrt = this.supplierName == null ? "NA" : this.supplierName;
        var invoiceNumberPrt = this.invoiceNumber == null ? "NA" : this.invoiceNumber;
        var invoiceDatePrt = this.invoiceDate == null ? "NA" : this.invoiceDate;
        var driverNamePrt = this.driverName == null ? "NA" : this.driverName;
        var driverMobilePrt = this.driverMobile == null ? "NA" : this.driverMobile;
        var datePrt = this.date == null ? "NA" : this.date;
        this.dtOptionsUnloadingSheetDetails = {
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
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                            "<u>Unloading Report</u><br><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>Truck Number </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            "" + truckNumberPrt + "</td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>Supplier </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            " " + supplierNamePrt + " </td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>Invoice Number </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            " " + invoiceNumberPrt + " </td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>Invoice Date</strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            " " + moment__WEBPACK_IMPORTED_MODULE_10__(invoiceDatePrt).format('DD-MM-YYYY') + " </td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>Driver  </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            "" + driverNamePrt + " </td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>Mobile </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            " " + driverMobilePrt + " </td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>Dated  </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            "" + moment__WEBPACK_IMPORTED_MODULE_10__(datePrt).format('DD-MM-YYYY') + " </td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong> </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong></strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            " </td>" +
                            "</tr>" +
                            "</table>";
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;width: 50%;'><table style='table-layout: fixed;width: 100%;><tr>" +
                            "<td style='word-wrap: break-word;width: 100%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo' align='left'>" +
                            "</td></tr><tr>" +
                            "<td style='word-wrap: break-word;width: 100%;text-align:left;' align='left'>" +
                            companyAddressDetls +
                            "</td>" +
                            "</tr></table></td></tr></table>";
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        var returnSummaryExcel = null;
                        returnSummaryExcel = "Unloading Report";
                        return returnSummaryExcel;
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
            searching: false,
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 350,
            "scrollCollapse": true,
            "paging": false,
            "info": false,
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
                var actArticles = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var enteredArticles = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html(actArticles);
                $(api.column(2).footer()).html(enteredArticles);
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html();
                $(api.column(5).footer()).html();
            }
        };
    };
    HireslipUnloadingSheetDetailsReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerUnloadingSheetDetails.unsubscribe();
    };
    HireslipUnloadingSheetDetailsReportComponent.prototype.ngAfterViewInit = function () {
        //	this.dtTriggerUnloadingSheetDetails.next();
    };
    HireslipUnloadingSheetDetailsReportComponent.prototype.searchByUnlaodingSheetDetailsPopup = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.hireslipDtoSearchDetails = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_11__["HireSlipDto"]();
        this.hireslipDtoSearchDetails.hireslipnumber = this.hireslipDtoSearchDetailsFromPopup.hireslipnumber;
        this.hireslipService.getHireSlipsUnLoadRptDetails(this.hireslipDtoSearchDetails).subscribe(function (response) {
            _this.showSpinnerForAction = false;
            if (response) {
                //this.unloadingSheetDetailsDataList = response;
                $("#unloadingSheetDetailsId").DataTable().destroy();
                console.log(_this.unloadingSheetDetailsDataList);
                _this.dtTriggerUnloadingSheetDetails.next();
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("No Records", "No Records found for this search", "info");
            }
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Error", "Server Problem Occurred While getting the Hireslip Unloading Sheet  Details", "info");
            },
            function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HireslipUnloadingSheetDetailsReportComponent.prototype, "dtElements", void 0);
    HireslipUnloadingSheetDetailsReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hireslip-unloading-sheet-details-report',
            template: __webpack_require__(/*! ./hireslip-unloading-sheet-details-report.component.html */ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-sheet-details-report/hireslip-unloading-sheet-details-report.component.html"),
            styles: [__webpack_require__(/*! ./hireslip-unloading-sheet-details-report.component.css */ "./src/app/report/hireslip-and-invoice-report/hireslip-unloading-sheet-details-report/hireslip-unloading-sheet-details-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_9__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_12__["HireslipService"]])
    ], HireslipUnloadingSheetDetailsReportComponent);
    return HireslipUnloadingSheetDetailsReportComponent;
}());



/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/invoice-details-lr-summary/invoice-details-lr-summary.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/invoice-details-lr-summary/invoice-details-lr-summary.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9pbnZvaWNlLWRldGFpbHMtbHItc3VtbWFyeS9pbnZvaWNlLWRldGFpbHMtbHItc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjtBQUNEO0NBQ0MsVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9pbnZvaWNlLWRldGFpbHMtbHItc3VtbWFyeS9pbnZvaWNlLWRldGFpbHMtbHItc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xuXHR0b3A6IDI2cHg7XG4gICAgbGVmdDogMTg4cHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/invoice-details-lr-summary/invoice-details-lr-summary.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/invoice-details-lr-summary/invoice-details-lr-summary.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Invoice Details</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Truck No : {{validateTruckNumber}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div><br><br>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Invoice No : {{validateInvoiceNumber}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div><br><br>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>From : {{validateSource}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div><br><br>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>To : {{validateDestination}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div><br><br>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>From Date : {{validateFromDate }}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div><br><br>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>To Date : {{validateToDate}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div><br><br>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Group By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"groupBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"groupBy\" #groupBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"groupByMode(groupBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"destination\">Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"destinationSummary\">Destination Summary\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bookingDate\">Booking Date</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Gur Wt</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"gurWtId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"gurWtId\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautoComplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!hideAndShowInvoiceDetailsDestinationTable\">Destination Details\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!hideAndShowInvoiceDestinationSummaryTable\">Destination Summary\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!hideAndShowInvoiceDetailsBookingDateTable\">Particular\n\t\t\t\t\t\t\tBookingDate Details\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideAndShowInvoiceDetailsDestinationTable\">\n\t\t\t\t\t\t\t<table datatable id=\"invoiceDetailsDestinationTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsInvoiceDetailsDestination\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerInvoiceDetailsDestination\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>SubStation</th>\n\t\t\t\t\t\t\t\t\t\t<th>E-Way Bill Status</th>\n\t\t\t\t\t\t\t\t\t\t<th>E-Way Bill No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Article No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Main Invoice</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booked From</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t<th>Less Amt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Value of Goods</th>\n\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!hidePrint\">PvtMark</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!hidePrint\">Case</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!hidePrint\">GCase</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!hidePrint\">Cart</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!hidePrint\">GCart</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!hidePrint\">Bundle</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!hidePrint\">Roll</th>\n\t\t\t\t\t\t\t\t\t\t<!--<th>Note **</th>-->\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let invoiceDetailsData of invoiceDetailsDestinationDataList \">\n\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.subStations }}</td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.eWayBillNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.bookedFrom }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.riskCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.discountAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.goodsValue }}</td>\n\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\">{{ invoiceDetailsData.privateMarker }}</td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<!--<td>{{ invoiceDetailsData.loaderName }}</td>-->\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!hidePrint\"></td>\n\t\t\t\t\t\t\t\t\t\t<!--<td></td>-->\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideAndShowInvoiceDestinationSummaryTable\">\n\t\t\t\t\t\t\t<table datatable id=\"invoiceDestinationSummaryTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDestinationSummary\" [dtTrigger]=\"dtTriggerDestinationSummary\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Station</th>\n\t\t\t\t\t\t\t\t\t\t<th>LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Article</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t<th>Discount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let destSubStationData of invoiceDestinationSummaryDataList \">\n\t\t\t\t\t\t\t\t\t\t<td style=\"color:blue;cursor: pointer;text-decoration: underline;\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"invoiceDetailsLrRptHyperLinkBtn(destSubStationData)\">\n\t\t\t\t\t\t\t\t\t\t\t{{ destSubStationData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.riskCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.discountAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.goodsValue }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideAndShowInvoiceDetailsBookingDateTable\">\n\t\t\t\t\t\t\t<table datatable id=\"invoiceDetailsBookingDateTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsInvoiceDetailsBookingDate\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerInvoiceDetailsBookingDate\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Article</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t<th>Less Amt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let invoiceDetailsBookingDateData of invoiceDetailsBookingDateDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.riskCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsBookingDateData.discountAmount }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/invoice-details-lr-summary/invoice-details-lr-summary.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/invoice-details-lr-summary/invoice-details-lr-summary.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: InvoiceDetailsLRSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailsLRSummaryComponent", function() { return InvoiceDetailsLRSummaryComponent; });
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
/* harmony import */ var src_app_dataService_invoice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/invoice */ "./src/app/dataService/invoice.ts");
/* harmony import */ var src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/dest-stmt-report */ "./src/app/dataService/dest-stmt-report.ts");
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










var InvoiceDetailsLRSummaryComponent = /** @class */ (function () {
    function InvoiceDetailsLRSummaryComponent(invoiceDetailsRpt, memoLessRpt, router, masterReadService, memoReport, modalService, destStmtReport) {
        var _this = this;
        this.invoiceDetailsRpt = invoiceDetailsRpt;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        this.destStmtReport = destStmtReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerInvoiceDetailsDestination = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerDestinationSummary = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerInvoiceDetailsBookingDate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.address = null;
        this.showSpinnerForAction = false;
        this.hideAndShowInvoiceDetailsDestinationTable = false;
        this.hideAndShowInvoiceDestinationSummaryTable = false;
        this.hideAndShowInvoiceDetailsBookingDateTable = false;
        this.lrDtoFor_LocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoPopUpDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.validateTruckNumber = null;
        this.validateInvoiceNumber = null;
        this.validateSource = null;
        this.validateDestination = null;
        this.validateFromDate = null;
        this.validateToDate = null;
        this.validateLoaderName = null;
        this.validateGurWT = null;
        this.validateKantaWT = null;
        this.validateSuppName = null;
        this.validateGoodsType = null;
        this.validateInvoiceDate = null;
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
            this.hideAndShowInvoiceDetailsDestinationTable = true;
            this.lrDtoFor_LocalStorage = JSON.parse(localStorage.getItem('invoiceDetailsRptLrsDetailsPopUpTemplate'));
            localStorage.clear();
            //this.clearField();
            if (this.lrDtoFor_LocalStorage != null) {
                this.validateTruckNumber = this.lrDtoFor_LocalStorage.vehicleNumber;
                this.validateInvoiceNumber = this.lrDtoFor_LocalStorage.invoiceNumber;
                this.validateSource = this.lrDtoFor_LocalStorage.source;
                this.validateDestination = this.lrDtoFor_LocalStorage.destination;
                this.validateFromDate = this.lrDtoFor_LocalStorage.fromDate == null ? "" : moment__WEBPACK_IMPORTED_MODULE_9__(this.lrDtoFor_LocalStorage.fromDate).format("DD-MM-YYYY");
                this.validateToDate = this.lrDtoFor_LocalStorage.toDate == null ? "" : moment__WEBPACK_IMPORTED_MODULE_9__(this.lrDtoFor_LocalStorage.toDate).format("DD-MM-YYYY");
                this.validateLoaderName = this.lrDtoFor_LocalStorage.loaderName;
                this.validateInvoiceDate = this.lrDtoFor_LocalStorage.invoiceDateStr;
                this.setInvoiceDetailsOfDestinationLrs();
            }
        }
    }
    InvoiceDetailsLRSummaryComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    InvoiceDetailsLRSummaryComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    InvoiceDetailsLRSummaryComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var truckNoPrint = this.validateTruckNumber;
        var InvNoPrint = this.validateInvoiceNumber;
        var sourcePrint = this.validateSource;
        var destPrint = this.validateDestination;
        var loadedByPrint = this.validateLoaderName;
        var gurWt = this.validateGurWT;
        var inv_datePrint = this.validateInvoiceDate;
        this.dtOptionsInvoiceDetailsDestination = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return " Booking Invoice Report - ";
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                },
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
                        return "<br><table style='width: 100%;'>" +
                            "<tr>" +
                            "<td style='width: 22%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Truck No</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + truckNoPrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Invoice No</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + InvNoPrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:24px;'><u>Booking Invoice Report</u></strong><br>" +
                            "</td>" +
                            "<td  align='left' style='width:22%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Form</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + sourcePrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>To</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + destPrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
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
                    }, exportOptions: {
                        columns: [0, 1, 4, 6, 5, 11, 8, 12, 13, 14, 16, 17, 18]
                    },
                },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print Unloading Sheet</i>',
                    titleAttr: 'Print Unloading Sheet',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        return "<br><table style='width: 100%;'>" +
                            "<tr>" +
                            "<td style='width: 26%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='14%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Truck No</strong>" +
                            "</td>" +
                            "<td width='1%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='11%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + truckNoPrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='14%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Invoice No</strong>" +
                            "</td>" +
                            "<td width='1%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='11%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + InvNoPrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='14%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Invoice Date</strong>" +
                            "</td>" +
                            "<td width='1%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='11%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + inv_datePrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='3'style='width:48%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:24px;'><u>Unloading Report</u></strong><br>" +
                            "</td>" +
                            "<td  align='left' style='width:26%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='14%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Form</strong>" +
                            "</td>" +
                            "<td width='1%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='11%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + sourcePrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='14%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>To</strong>" +
                            "</td>" +
                            "<td width='1%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='11%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + destPrint + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='14%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Printed On</strong>" +
                            "</td>" +
                            "<td width='1%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='11%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_9__(new Date()).format("DD-MM-YYYY") + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
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
                    }, exportOptions: {
                        columns: [0, 4, 19, 8, 20, 21, 22, 23, 24, 25]
                    },
                }
            ],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 330,
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
                var totalLrs = api.column(0).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var articles = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPayAmt = api.column(12).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paidAmt = api.column(13).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var fovAmt = api.column(14).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var discAmt = api.column(15).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(16).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(17).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var goodsValueAmt = api.column(18).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                //$(api.column(3).footer()).html(totalLrs);
                $(api.column(4).footer()).html(articles);
                $(api.column(12).footer()).html(toPayAmt);
                $(api.column(13).footer()).html(paidAmt);
                $(api.column(14).footer()).html(fovAmt);
                $(api.column(15).footer()).html(discAmt.toFixed());
                $(api.column(16).footer()).html(actWgt);
                $(api.column(17).footer()).html(chgWgt);
                $(api.column(18).footer()).html(goodsValueAmt);
            }
        },
            this.dtOptionsDestinationSummary = {
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'excel',
                        text: '<i class="fas fa-file-excel"> Excel</i>',
                        titleAttr: 'Excel',
                        footer: true,
                        title: function () {
                            return " Particular BookingDate Details Report - ";
                        },
                        exportOptions: {
                            columns: ':visible'
                        }
                    },
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
                            return "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 22%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Truck No</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + truckNoPrint + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Invoice No</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + InvNoPrint + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:24px;'><u>Particular BookingDate Details Report</u></strong><br>" +
                                "</td>" +
                                "<td  align='left' style='width:22%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Form</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + sourcePrint + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>To</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + destPrint + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
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
                        },
                    }
                ],
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                processing: true,
                responsive: true,
                "scrollX": true,
                "scrollY": 330,
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
                    var totalLrs = api.column(1).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var articles = api.column(2).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var toPayAmt = api.column(3).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var paidAmt = api.column(4).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var fovAmt = api.column(5).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var discAmt = api.column(6).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actWgt = api.column(7).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var chgWgt = api.column(8).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var goodsValueAmt = api.column(9).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html(totalLrs);
                    $(api.column(2).footer()).html(articles);
                    $(api.column(3).footer()).html(toPayAmt);
                    $(api.column(4).footer()).html(paidAmt);
                    $(api.column(5).footer()).html(fovAmt);
                    $(api.column(6).footer()).html(discAmt.toFixed());
                    $(api.column(7).footer()).html(actWgt);
                    $(api.column(8).footer()).html(chgWgt);
                    $(api.column(9).footer()).html(goodsValueAmt);
                }
            },
            this.dtOptionsInvoiceDetailsBookingDate = {
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
                "scrollY": 330,
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
                    var totalLrs = api.column(1).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var articles = api.column(6).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actWgt = api.column(7).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var chgWgt = api.column(8).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var toPayAmt = api.column(9).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var paidAmt = api.column(10).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var fovAmt = api.column(11).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var discAmt = api.column(12).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html(totalLrs);
                    $(api.column(6).footer()).html(articles);
                    $(api.column(7).footer()).html(actWgt);
                    $(api.column(8).footer()).html(chgWgt);
                    $(api.column(9).footer()).html(toPayAmt);
                    $(api.column(10).footer()).html(paidAmt);
                    $(api.column(11).footer()).html(fovAmt);
                    $(api.column(12).footer()).html(discAmt.toFixed());
                }
            };
    };
    InvoiceDetailsLRSummaryComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerInvoiceDetailsDestination.next();
        this.dtTriggerDestinationSummary.next();
        this.dtTriggerInvoiceDetailsBookingDate.next();
    };
    InvoiceDetailsLRSummaryComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerInvoiceDetailsDestination.unsubscribe();
        this.dtTriggerDestinationSummary.unsubscribe();
        this.dtTriggerInvoiceDetailsBookingDate.unsubscribe();
    };
    InvoiceDetailsLRSummaryComponent.prototype.groupByMode = function (groupBy) {
        if (groupBy === 'destination') {
            this.hideAndShowInvoiceDetailsDestinationTable = true;
            this.hideAndShowInvoiceDestinationSummaryTable = false;
            this.hideAndShowInvoiceDetailsBookingDateTable = false;
            this.invoiceDetailsDestinationDataList = [];
            $("#invoiceDetailsDestinationTableId").DataTable().destroy();
            this.dtTriggerInvoiceDetailsDestination.next();
            this.invoiceDestinationSummaryDataList = [];
            $("#invoiceDestinationSummaryTableId").DataTable().destroy();
            this.invoiceDetailsBookingDateDataList = [];
            $("#invoiceDetailsBookingDateTableId").DataTable().destroy();
            //service calling
            this.setInvoiceDetailsOfDestinationLrs();
        }
        else if (groupBy === 'destinationSummary') {
            this.hideAndShowInvoiceDetailsDestinationTable = false;
            this.hideAndShowInvoiceDestinationSummaryTable = true;
            this.hideAndShowInvoiceDetailsBookingDateTable = false;
            this.invoiceDestinationSummaryDataList = [];
            $("#invoiceDestinationSummaryTableId").DataTable().destroy();
            this.dtTriggerDestinationSummary.next();
            this.invoiceDetailsDestinationDataList = [];
            $("#invoiceDetailsDestinationTableId").DataTable().destroy();
            this.invoiceDetailsBookingDateDataList = [];
            $("#invoiceDetailsBookingDateTableId").DataTable().destroy();
            //service calling
            this.setInvoiceDetailsOfDestinationSummaryLrs();
        }
        else if (groupBy === 'bookingDate') {
            this.hideAndShowInvoiceDetailsDestinationTable = false;
            this.hideAndShowInvoiceDestinationSummaryTable = false;
            this.hideAndShowInvoiceDetailsBookingDateTable = true;
            this.invoiceDetailsBookingDateDataList = [];
            $("#invoiceDetailsBookingDateTableId").DataTable().destroy();
            this.dtTriggerInvoiceDetailsBookingDate.next();
            this.invoiceDetailsDestinationDataList = [];
            $("#invoiceDetailsDestinationTableId").DataTable().destroy();
            this.invoiceDestinationSummaryDataList = [];
            $("#invoiceDestinationSummaryTableId").DataTable().destroy();
            //service calling
            this.setInvoiceDetailsOfBookingDate();
        }
    };
    InvoiceDetailsLRSummaryComponent.prototype.setInvoiceDetailsOfDestinationLrs = function () {
        var _this = this;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDto.invoiceNumber = this.lrDtoFor_LocalStorage.invoiceNumber;
        if (this.lrDtoFor_LocalStorage.mode != "mainInvoice") {
            this.lrDto.mode = "invRpt";
        }
        else {
            this.lrDto.mode = "";
        }
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.showSpinnerForAction = true;
        console.log(this.lrDto);
        this.destStmtReport.getStmtVerificationDetailsLrs(this.lrDto).subscribe(function (response) {
            console.log(response);
            $("#invoiceDetailsDestinationTableId").DataTable().destroy();
            _this.invoiceDetailsDestinationDataList = [];
            if (response.length > 0) {
                _this.invoiceDetailsDestinationDataList = response;
                //this.validateGurWT = 1000;
                _this.validateGurWT = response[0].guranteeWt;
                _this.validateKantaWT = response[0].kantaWeight;
                _this.validateSuppName = response[0].supplierName;
                _this.validateGoodsType = null;
                if (response[0].goodsType == "Select Type") {
                    _this.validateGoodsType = "NA";
                }
                else {
                    _this.validateGoodsType = response[0].goodsType;
                }
                $("#gurWtId").val(_this.validateGurWT);
                console.log(_this.validateGurWT);
                //this.dtTriggerStmtVerificationLrsSummaryReport.next();
                setTimeout(function () {
                    _this.dtTriggerInvoiceDetailsDestination.next();
                }, 3000);
            }
            else {
                //this.dtTriggerStmtVerificationLrsSummaryReport.next();
                setTimeout(function () {
                    _this.dtTriggerInvoiceDetailsDestination.next();
                }, 3000);
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Warning", "No  Details found !", "warning");
            }
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Invoice Destination LR's Details", "info");
        }, function () { return console.log('done'); };
    };
    InvoiceDetailsLRSummaryComponent.prototype.setInvoiceDetailsOfDestinationSummaryLrs = function () {
        var _this = this;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDto.invoiceNumber = this.lrDtoFor_LocalStorage.invoiceNumber;
        if (this.lrDtoFor_LocalStorage.mode != "mainInvoice") {
            this.lrDto.mode = "invRpt";
        }
        else {
            this.lrDto.mode = "";
        }
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.showSpinnerForAction = true;
        this.invoiceDetailsRpt.getInvoiceDestinationSummary(this.lrDto).subscribe(function (response) {
            console.log(response);
            $("#invoiceDestinationSummaryTableId").DataTable().destroy();
            _this.invoiceDestinationSummaryDataList = [];
            if (response.length > 0) {
                _this.invoiceDestinationSummaryDataList = response;
                setTimeout(function () {
                    _this.dtTriggerDestinationSummary.next();
                }, 3000);
            }
            else {
                setTimeout(function () {
                    _this.dtTriggerDestinationSummary.next();
                }, 3000);
            }
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Invoice Destination LR's Summary Details", "info");
        }, function () { return console.log('done'); };
    };
    InvoiceDetailsLRSummaryComponent.prototype.setInvoiceDetailsOfBookingDate = function () {
        var _this = this;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDto.invoiceNumber = this.lrDtoFor_LocalStorage.invoiceNumber;
        if (this.lrDtoFor_LocalStorage.mode != "mainInvoice") {
            this.lrDto.mode = "invRpt";
        }
        else {
            this.lrDto.mode = "";
        }
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.showSpinnerForAction = true;
        this.destStmtReport.getStmtVerificationDetailsLrs(this.lrDto).subscribe(function (response) {
            console.log(response);
            $("#invoiceDetailsBookingDateTableId").DataTable().destroy();
            _this.invoiceDetailsBookingDateDataList = [];
            if (response.length > 0) {
                _this.invoiceDetailsBookingDateDataList = response;
                setTimeout(function () {
                    _this.dtTriggerInvoiceDetailsBookingDate.next();
                }, 3000);
            }
            else {
                //this.dtTriggerStmtVerificationLrsSummaryReport.next();
                setTimeout(function () {
                    _this.dtTriggerInvoiceDetailsBookingDate.next();
                }, 3000);
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Warning", "No  Details found !", "warning");
            }
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Invoice Destination Booking Date LR's Details", "info");
        }, function () { return console.log('done'); };
    };
    InvoiceDetailsLRSummaryComponent.prototype.invoiceDetailsLrRptHyperLinkBtn = function (destSubStationData) {
        //console.log(destSubStationData);
        $("#groupBy").val('destination');
        this.hideAndShowInvoiceDetailsDestinationTable = true;
        this.hideAndShowInvoiceDestinationSummaryTable = false;
        this.hideAndShowInvoiceDetailsBookingDateTable = false;
        this.invoiceDetailsDestinationDataList = [];
        $("#invoiceDetailsDestinationTableId").DataTable().destroy();
        this.dtTriggerInvoiceDetailsDestination.next();
        $("#invoiceDestinationSummaryTableId").DataTable().destroy();
        this.invoiceDestinationSummaryDataList = [];
        this.lrDtoPopUpDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoPopUpDestination.invoiceNumber = destSubStationData.invoiceNumber;
        this.lrDtoPopUpDestination.deliveryPoints = destSubStationData.destination;
        if (this.lrDtoFor_LocalStorage.mode != "mainInvoice") {
            this.lrDtoPopUpDestination.mode = "invRptDest";
        }
        else {
            this.lrDtoPopUpDestination.mode = "";
        }
        this.lrDtoPopUpDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.setInvoiceDetailsOfSpecificDestinationLrs();
    };
    InvoiceDetailsLRSummaryComponent.prototype.setInvoiceDetailsOfSpecificDestinationLrs = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.destStmtReport.getStmtVerificationDetailsLrs(this.lrDtoPopUpDestination).subscribe(function (response) {
            console.log(response);
            $("#invoiceDetailsDestinationTableId").DataTable().destroy();
            _this.invoiceDetailsDestinationDataList = [];
            if (response.length > 0) {
                _this.invoiceDetailsDestinationDataList = response;
                setTimeout(function () {
                    _this.dtTriggerInvoiceDetailsDestination.next();
                }, 3000);
            }
            else {
                setTimeout(function () {
                    _this.dtTriggerInvoiceDetailsDestination.next();
                }, 3000);
            }
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Invoice Destination LR's Details", "info");
        }, function () { return console.log('done'); };
    };
    InvoiceDetailsLRSummaryComponent.prototype.clearField = function () {
        $("#truckNumberPopUpId").val('');
        $("#invoiceNumberId").val('');
        $("#fromStationPopUpId").val('');
        $("#toStationPopUpId").val('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], InvoiceDetailsLRSummaryComponent.prototype, "dtElements", void 0);
    InvoiceDetailsLRSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-details-lr-summary',
            template: __webpack_require__(/*! ./invoice-details-lr-summary.component.html */ "./src/app/report/hireslip-and-invoice-report/invoice-details-lr-summary/invoice-details-lr-summary.component.html"),
            styles: [__webpack_require__(/*! ./invoice-details-lr-summary.component.css */ "./src/app/report/hireslip-and-invoice-report/invoice-details-lr-summary/invoice-details-lr-summary.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_invoice__WEBPACK_IMPORTED_MODULE_11__["Invoice"],
            src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_8__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_12__["DestStmtReport"]])
    ], InvoiceDetailsLRSummaryComponent);
    return InvoiceDetailsLRSummaryComponent;
}());



/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/invoice-details/invoice-details.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/invoice-details/invoice-details.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n/* the below code we add to view the option in popup modal starts  for truck master*/\n::ng-deep .cdk-overlay-container {\n\t/* Do you changes here */\n\tposition: fixed;\n\tz-index: 9999;\n}\n::ng-deep .cdk-overlay-pane {\n\tz-index: 9999;\n}\n::ng-deep .myCustomModalClass\t.modal-dialog {\n\tmax-width: 100%;\n}\n/* the below code we add to view the option in popup modal ends truck master*/\n/* the below code we add to view the option in popup modal starts  for truck master*/\n::ng-deep .modalClassForPopUpTruckOwner\t.modal-dialog {\n\tmax-width: 100%;\n}\n/* the below code we add to view the option in popup modal ends truck master*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9pbnZvaWNlLWRldGFpbHMvaW52b2ljZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7Q0FDQyxVQUFVO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7QUFDRCxxRkFBcUY7QUFDckY7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZDtBQUVEO0NBQ0MsY0FBYztDQUNkO0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEI7QUFDRCw4RUFBOEU7QUFFOUUscUZBQXFGO0FBRXJGO0NBQ0MsZ0JBQWdCO0NBQ2hCO0FBQ0QsOEVBQThFIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9pbnZvaWNlLWRldGFpbHMvaW52b2ljZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG46Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3d7XG5cdHRvcDogMjZweDtcbiAgICBsZWZ0OiAxODhweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLyogdGhlIGJlbG93IGNvZGUgd2UgYWRkIHRvIHZpZXcgdGhlIG9wdGlvbiBpbiBwb3B1cCBtb2RhbCBzdGFydHMgIGZvciB0cnVjayBtYXN0ZXIqL1xuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuXHQvKiBEbyB5b3UgY2hhbmdlcyBoZXJlICovXG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogOTk5OTtcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcblx0ei1pbmRleDogOTk5OTtcbn1cblxuOjpuZy1kZWVwIC5teUN1c3RvbU1vZGFsQ2xhc3NcdC5tb2RhbC1kaWFsb2cge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG59XG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIGVuZHMgdHJ1Y2sgbWFzdGVyKi9cblxuLyogdGhlIGJlbG93IGNvZGUgd2UgYWRkIHRvIHZpZXcgdGhlIG9wdGlvbiBpbiBwb3B1cCBtb2RhbCBzdGFydHMgIGZvciB0cnVjayBtYXN0ZXIqL1xuXG46Om5nLWRlZXAgLm1vZGFsQ2xhc3NGb3JQb3BVcFRydWNrT3duZXJcdC5tb2RhbC1kaWFsb2cge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG59XG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIGVuZHMgdHJ1Y2sgbWFzdGVyKi8iXX0= */"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/invoice-details/invoice-details.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/invoice-details/invoice-details.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Invoice Details</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [hidden]=\"!hideAndShowInvoiceNoDropDown\" selected\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"invoiceNumber\">Invoice Number</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [hidden]=\"!hideAndShowDateWiseDropDown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"dateWise\">Date Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [hidden]=\"!hideAndShowSourceWiseDropDown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"sourceWise\">Source Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [hidden]=\"!hideAndShowDestinationWiseDropDown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"destinationWise\">Destination Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [hidden]=\"!hideAndShowDateAndStationDropDown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"dataAndStationWise\">Date And Station Wise\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [hidden]=\"!hideAndShowMainInvoiceDropDown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"mainInvoice\">Main Invoice</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [hidden]=\"!hideAndShowConsolidateInvoiceNoDropDown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"consolidatedInvoice\">Consolidated Invoice\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!hideAndShowInvoiceNoWithDestinationDropDown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"invNoWithDestination\">Invoice Number With\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDestination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option [hidden]=\"!hideAndShowMainBkgSrcWiseDropDown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"mainBkgSrcWise\">Main Booking Source Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!hideAndShowInvoiceNumberField\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"invoiceNumberId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"invoiceNumberId\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautoComplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!hideAndShowFromToDateField\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" id=\"fromDates\" name=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fromDatesModal\" autoComplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!hideAndShowFromToDateField\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDate=\"ngbDatepicker\" [(ngModel)]=\"toDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautoComplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!hideAndShowSourceField\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sourceId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSource\" [ngbTypeahead]=\"searchSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"sourceListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!--[hidden]=\"!hideAndShowSourceStationForOtherField\"\n\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!hideAndShowSourceStationField\"\n\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sourceBookingStationForOtherId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSourceBookingStationForOther\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchSourceBookingStationForOther\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSourceBookingStationForOther\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSourceBookingStationForOther\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceBookingStationForOtherTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sourceBookingStationId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" [(ngModel)]=\"modelSourceBookingStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchSourceBookingStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSourceBookingStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSourceBookingStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceBookingStationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!hideAndShowDestinationField\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destinationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestination($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!hideAndShowMainBkgSourceField\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"mainBookingSourceId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForMainBookingSource($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelMainBookingSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchMainBookingSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterMainBookingSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterMainBookingSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusMainBookingSourceTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!hideAndShowViaSourceField\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Via</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"viaSourceId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelViaSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchViaSourceStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"viaSourceStationListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterViaSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterViaSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusViaSourceStationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!hideAndShowMainAndSubStationField\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchStationWiseBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchStationWiseBy\" #searchStationWiseBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByStationWiseMode(searchStationWiseBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<option selected>Select Station</option>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mainStation\">MainStation Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"subStation\">SubStation Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!hideAndShowMainInvoiceOfStationSubStationField\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"searchMainInvoiceStationWiseBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#searchMainInvoiceStationWiseBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMainInvoiceStationWiseMode(searchMainInvoiceStationWiseBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<option selected>Select Station</option>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mainStation\">MainStation Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"subStation\">SubStation Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<!--<div *ngIf=\"viewStationInvoice\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"station\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Station</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mainStation\">MainStation Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"subStation\">SubStation Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" (click)=\"validateSearchBtn();\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" (click)=\"validateClearBtn();\"\n\t\t\t\t\t\t\t\tid=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideAndShowInvoiceDetailsTable\">\n\t\t\t\t\t\t\t<table datatable id=\"invoiceDetailsTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsInvoiceDetails\" [dtTrigger]=\"dtTriggerInvoiceDetails\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>L.Rs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Article</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Discount</th>\n\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t<th>Loaded By</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let invoiceDetailsData of invoiceDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<!--<td>{{ invoiceDetailsData.destination }}</td>-->\n\t\t\t\t\t\t\t\t\t\t<td style=\"color:blue;cursor: pointer;text-decoration: underline;\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"invoiceDetailsRptPopUpBtnLink(invoiceDetailsLrsSummaryPopUpTemplate,invoiceDetailsData)\">\n\t\t\t\t\t\t\t\t\t\t\t{{ invoiceDetailsData.invoiceNumber }}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.toStation }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.invoiceDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.discountAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.riskCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.loaderName }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideAndShowDestSubStationTable\">\n\t\t\t\t\t\t\t<table datatable id=\"invoiceDetailsDestSubStationTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDestSubStation\" [dtTrigger]=\"dtTriggerDestSubStation\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Stations</th>\n\t\t\t\t\t\t\t\t\t\t<th>LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Article</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Service Tax</th>\n\t\t\t\t\t\t\t\t\t\t<th>Loaded By</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let destSubStationData of destSubStationDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.toStation }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.serviceTax }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destSubStationData.loaderName }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideAndShowInvoiceMainStationTable\">\n\t\t\t\t\t\t\t<table datatable id=\"invoiceDetailsForMainStationTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsInvoiceMainStation\" [dtTrigger]=\"dtTriggerInvoiceMainStation\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Lrs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t<th>Less Amount</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let invoiceMainStationData of invoiceMainStationDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.invoiceDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceMainStationData.lessAmount }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideAndShowInvoiceSubStationTable\">\n\t\t\t\t\t\t\t<table datatable id=\"invoiceDetailsForMainInvoiceSubStationTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsInvoiceSubStation\" [dtTrigger]=\"dtTriggerInvoiceSubStation\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Lrs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Less Amt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let invoiceSubStationData of invoiceSubStationDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.invoiceDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceSubStationData.lessAmt }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideAndShowConsolidatedInvoiceTable\">\n\t\t\t\t\t\t\t<table datatable id=\"invoiceDetailsConsolidateTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsConsolidatedInvoice\" [dtTrigger]=\"dtTriggerConsolidatedInvoice\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Article</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t<th>Discount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Service Tax</th>\n\t\t\t\t\t\t\t\t\t\t<th>Loaded By</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let consolidatedInvoiceData of consolidatedInvoiceDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.invoiceDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.fov }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.lessAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.lessAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ consolidatedInvoiceData.loadedBy }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--</div>-->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!--POP UP START HERE-->\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<ng-template #invoiceDetailsLrsSummaryPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewInvoiceDetailsLrsSummaryRptPopUp\"\n\t\t\t\t\t\t\t\t\t\t\t\tonafterPopUp=\"afterPopUp()\" id=\"popupInvoiceDetailsLrsSummaryRpt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-invoice-details-lr-summary>\n\t\t\t\t\t\t\t\t\t\t\t\t</app-invoice-details-lr-summary>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<button type=\"button\" style='background: green;width: auto;color: white;float: right;'\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-outline-dark\" (click)=\"closeInvoiceDetailsRptPopUp()\">Close</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--<div class=\"modal-footer\">\n\t\t\t\t\t\t<div class=\"col-md-4\"></div>\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<button type=\"button\" style='background: green;width: 100%;color: white;'\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-dark\" (click)=\"closeStmtVerificationRptPopUp()\">Close</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\"></div>\n\t\t\t\t\t</div>-->\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/invoice-details/invoice-details.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/invoice-details/invoice-details.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: InvoiceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailsComponent", function() { return InvoiceDetailsComponent; });
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
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
/* harmony import */ var src_app_dataService_invoice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/invoice */ "./src/app/dataService/invoice.ts");
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













var InvoiceDetailsComponent = /** @class */ (function () {
    function InvoiceDetailsComponent(invoiceDetailsRpt, memoLessRpt, router, masterReadService, memoReport, modalService) {
        var _this = this;
        this.invoiceDetailsRpt = invoiceDetailsRpt;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.searchByInvoiceNumber = true;
        this.searchByDate = false;
        this.viewSource = false;
        this.viewDestination = false;
        this.viewStationDestination = false;
        this.viewStationInvoice = false;
        this.dtTriggerInvoiceDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerDestSubStation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerInvoiceMainStation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerInvoiceSubStation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerConsolidatedInvoice = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.address = null;
        this.lrDtoDestinationAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.agentDtoOptionSourceStationAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__["AgentDetailsDto"]();
        this.agentDtoSourceStation = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__["AgentDetailsDto"]();
        this.mainBookingSourceTA = [];
        this.focusMainBookingSourceTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchMainBookingSource = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusMainBookingSourceTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.mainBookingSourceTA
                : _this.mainBookingSourceTA.filter(function (v) { return v.mainBookStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterMainBookingSource = function (x) { return x.mainBookStations; };
        this.lrDtoSourceStationAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoSourceStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.sourceSubStationNameTA = [];
        this.focusSourceTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchSource = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.sourceSubStationNameTA
                : _this.sourceSubStationNameTA.filter(function (v) { return v.subStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSource = function (x) { return x.subStations; };
        this.lrDtoViaSourceStationAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoViaSourceStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.viaSourceStationNameTA = [];
        this.focusViaSourceStationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchViaSourceStation = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusViaSourceStationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.viaSourceStationNameTA
                : _this.viaSourceStationNameTA.filter(function (v) { return v.destination && v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterViaSource = function (x) { return x.destination; };
        this.rightsForSuperAdministrator = "Rights For Invoice Details Rpt Super Administrator";
        this.rightsForTransshipmentManager = "Rights For Invoice Details Rpt Transshipment Manager";
        this.rightsForBookingAdministrator = "Rights For Invoice Details Rpt Booking Administrator";
        this.rightsForBookingManager = "Rights For Invoice Details Rpt Booking Manager";
        this.rightsForBookingOffice = "Rights For Invoice Details Rpt Booking Office";
        this.rightsForAdministrator = "Rights For Invoice Details Rpt Administrator";
        this.rightsForDeliveryManager = "Rights For Invoice Details Rpt Delivery Manager";
        this.rightsForCollectionManager = "Rights For Invoice Details Rpt Collection Manager";
        this.rightsForDeliveryOfficer = "Rights For Invoice Details Rpt Delivery Office";
        this.rightsForBarcode = "Rights For Invoice Details Rpt Barcode";
        this.isShowResult = false;
        this.showSpinnerForAction = false;
        this.hideAndShowInvoiceNoDropDown = false;
        this.hideAndShowDateWiseDropDown = false;
        this.hideAndShowSourceWiseDropDown = false;
        this.hideAndShowDestinationWiseDropDown = false;
        this.hideAndShowDateAndStationDropDown = false;
        this.hideAndShowMainInvoiceDropDown = false;
        this.hideAndShowConsolidateInvoiceNoDropDown = false;
        this.hideAndShowInvoiceNoWithDestinationDropDown = false;
        this.hideAndShowMainBkgSrcWiseDropDown = false;
        this.hideAndShowInvoiceNumberField = false;
        this.hideAndShowFromToDateField = false;
        this.hideAndShowSourceField = false;
        this.hideAndShowDestinationField = false;
        this.hideAndShowMainBkgSourceField = false;
        this.hideAndShowMainAndSubStationField = false;
        this.hideAndShowMainInvoiceOfStationSubStationField = false;
        this.hideAndShowViaSourceField = false;
        //hideAndShowSourceStationForOtherField: boolean = false;
        //hideAndShowSourceStationField: boolean = false;
        //hideAndShowSourceField: boolean = false;
        this.hideAndShowInvoiceDetailsTable = false;
        this.hideAndShowDestSubStationTable = false;
        this.hideAndShowInvoiceMainStationTable = false;
        this.hideAndShowInvoiceSubStationTable = false;
        this.hideAndShowConsolidatedInvoiceTable = false;
        this.lrDtoForSearchData = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.validateInvoiceNumberIdValue = null;
        this.validateFromDateIdValue = null;
        this.validateToDateIdValue = null;
        this.validateSourceStationIdValue = null;
        this.validateMainSourceBkgStationIdValue = null;
        this.validateViaSourceStationIdValue = null;
        this.fromDatesModal = null;
        this.toDatesModal = null;
        this.validateDestinationStationIdValue = null;
        this.viewInvoiceDetailsLrsSummaryRptPopUp = false;
        this.lrDtoForLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.fromDateForLocalStorage = null;
        this.toDateForLocalStorage = null;
        this.searchByModeForLocalStorage = null;
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
            //here hide show logic
            this.hideAndShowInvoiceNoDropDown = true;
            this.hideAndShowDateWiseDropDown = true;
            this.hideAndShowInvoiceNumberField = true;
            this.hideAndShowInvoiceDetailsTable = true;
            /* if(this.rightsForSuperAdministrator == "Rights For Invoice Details Rpt Super Administrator"){
                 */
            if (this.userDataDtoReturnSession.role != null &&
                this.userDataDtoReturnSession.role == "Super Administrator") {
                this.hideAndShowConsolidateInvoiceNoDropDown = true;
            }
            else {
                this.hideAndShowConsolidateInvoiceNoDropDown = false;
            }
            /* if (this.rightsForTransshipmentManager == "Rights For Invoice Details Rpt Transshipment Manager" ||
                 this.rightsForSuperAdministrator == "Rights For Invoice Details Rpt Super Administrator" ||
                 this.rightsForBookingAdministrator == "Rights For Invoice Details Rpt Booking Administrator") {
             */
            if (this.userDataDtoReturnSession.role != null &&
                this.userDataDtoReturnSession.role == "Transshipment Manager" ||
                this.userDataDtoReturnSession.role == "Super Administrator" ||
                this.userDataDtoReturnSession.role == "Booking Administrator") {
                this.hideAndShowDateAndStationDropDown = true;
                this.hideAndShowSourceWiseDropDown = true;
                this.hideAndShowDestinationWiseDropDown = true;
                this.hideAndShowMainInvoiceDropDown = true;
            }
            else {
                this.hideAndShowDateAndStationDropDown = false;
                this.hideAndShowMainInvoiceDropDown = false;
            }
            /*if ((this.rightsForBookingManager == "Rights For Invoice Details Rpt Booking Manager") ||
                ((this.rightsForBookingOffice == "Rights For Invoice Details Rpt Booking Office") &&
                    (this.rightsForAdministrator == "Rights For Invoice Details Rpt Administrator"))) {
            */
            if ((this.userDataDtoReturnSession.role == "Booking Manager") ||
                ((this.userDataDtoReturnSession.officeType == "Booking Office") &&
                    (this.userDataDtoReturnSession.role == "Administrator"))) {
                this.hideAndShowDestinationWiseDropDown = true;
                this.hideAndShowSourceWiseDropDown = false;
            }
            /* else if ((this.rightsForDeliveryManager == "Rights For Invoice Details Rpt Delivery Manager") ||
                 (this.rightsForCollectionManager == "Rights For Invoice Details Rpt Collection Manager") ||
                 (this.rightsForDeliveryOfficer == "Rights For Invoice Details Rpt Delivery Office") &&
                 ((this.rightsForAdministrator == "Rights For Invoice Details Rpt Administrator") ||
                     (this.rightsForBarcode == "Rights For Invoice Details Rpt Barcode"))) {
                         */
            else if ((this.userDataDtoReturnSession.role == "Delivery Manager") ||
                (this.userDataDtoReturnSession.role == "Collection Manager") ||
                (this.userDataDtoReturnSession.officeType == "Delivery Office") &&
                    ((this.userDataDtoReturnSession.role == "Administrator") ||
                        (this.userDataDtoReturnSession.role == "Barcode"))) {
                this.hideAndShowDestinationWiseDropDown = false;
                this.hideAndShowSourceWiseDropDown = true;
            }
            /* if(this.rightsForBookingManager == "Rights For Invoice Details Rpt Booking Manager"){
                */
            if (this.userDataDtoReturnSession.role == "Booking Manager") {
                this.hideAndShowInvoiceNoWithDestinationDropDown = true;
            }
            else {
                this.hideAndShowInvoiceNoWithDestinationDropDown = false;
            }
            //this.getSourceStationDetails();
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Show Invoice Details Result") {
                        this.isShowResult = true;
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "MainBgkSrcWiseInvRpt") {
                        this.hideAndShowMainBkgSrcWiseDropDown = true;
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "MainInvRpt") {
                        this.hideAndShowMainInvoiceDropDown = true;
                    }
                }
                this.getFromStationMethod();
                this.getDestinationDetails();
                this.getMainBookingSourceDetails();
                this.getViaSourceStationDetails();
            }
        }
    }
    InvoiceDetailsComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    InvoiceDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    InvoiceDetailsComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsInvoiceDetails = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        if ($("#searchBy").val() == "invoiceNumber") {
                            return " Destination Invoice Report Summary - " +
                                "Invoice No : " + $("#invoiceNumberId").val() + "";
                        }
                        else if ($("#searchBy").val() == "dateWise") {
                            return " Destination Invoice Report Summary - " +
                                "Form Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format("DD-MM-YYYY") + " - " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format("DD-MM-YYYY") + "";
                        }
                        else if ($("#searchBy").val() == "sourceWise") {
                            return " Destination Invoice Report Summary - " +
                                "Form Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format("DD-MM-YYYY") + " - " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format("DD-MM-YYYY") + " - " +
                                "Source : " + $("#sourceId").val() + "";
                        }
                        else if ($("#searchBy").val() == "destinationWise") {
                            return " Destination Report Summary - " +
                                "Form Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format("DD-MM-YYYY") + " - " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format("DD-MM-YYYY") + " - " +
                                "Destination : " + $("#destinationId").val() + " - " +
                                "Station : " + $("#searchStationWiseBy").val() + "";
                        }
                        else if ($("#searchBy").val() == "dataAndStationWise") {
                            return " Destination Invoice Report Summary - " +
                                "Form Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format("DD-MM-YYYY") + " - " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format("DD-MM-YYYY") + " - " +
                                "Source : " + $("#sourceId").val() + " - " +
                                "Destination : " + $("#destinationId").val() + "";
                        }
                        else if ($("#searchBy").val() == "mainBkgSrcWise") {
                            return " Destination Invoice Report Summary - " +
                                "Form Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format("DD-MM-YYYY") + " - " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format("DD-MM-YYYY") + " - " +
                                "Source : " + $("#mainBookingSourceId").val() + " - " +
                                "Destination : " + $("#destinationId").val() + "";
                        }
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                },
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
                        if ($("#searchBy").val() == "invoiceNumber") {
                            return "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 22%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Invoice No</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#invoiceNumberId").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:24px;'><u>Destination Invoice Report Summary</u></strong><br>" +
                                "</td>" +
                                "<td rowspan='3' align='left' style='width:22%;'>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        else if ($("#searchBy").val() == "dateWise") {
                            return "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 22%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From Date</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format("DD-MM-YYYY") + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format("DD-MM-YYYY") + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:24px;'><u>Destination Invoice Report Summary</u></strong><br>" +
                                "</td>" +
                                "<td rowspan='3' align='left' style='width:22%;'>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        else if ($("#searchBy").val() == "sourceWise") {
                            return "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 22%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From Date</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format("DD-MM-YYYY") + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format("DD-MM-YYYY") + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Source&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#sourceId").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:24px;'><u>Destination Invoice Report Summary</u></strong><br>" +
                                "</td>" +
                                "<td rowspan='3' align='left' style='width:22%;'>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        else if ($("#searchBy").val() == "destinationWise") {
                            return "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 22%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From Date</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format("DD-MM-YYYY") + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format("DD-MM-YYYY") + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:24px;'><u>Destination Report Summary</u></strong><br>" +
                                "</td>" +
                                "<td  align='left' style='width:22%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Destination</strong>" +
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
                                "<strong style='font-size:15px;'>Station&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#searchStationWiseBy").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        else if ($("#searchBy").val() == "dataAndStationWise") {
                            return "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 22%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From Date</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format("DD-MM-YYYY") + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format("DD-MM-YYYY") + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:24px;'><u>Destination Invoice Report Summary</u></strong><br>" +
                                "</td>" +
                                "<td  align='left' style='width:22%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Source&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#sourceId").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Destination</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#destinationId").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        else if ($("#searchBy").val() == "mainBkgSrcWise") {
                            return "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 22%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From Date</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format("DD-MM-YYYY") + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format("DD-MM-YYYY") + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:24px;'><u>Destination Invoice Report Summary</u></strong><br>" +
                                "</td>" +
                                "<td  align='left' style='width:22%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Source&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#mainBookingSourceId").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Destination</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#destinationId").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
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
                    }, exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 9]
                    },
                }
            ],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 320,
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
                var totalLrs = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var articles = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPayAmt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paidAmt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var discAmt = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var fovAmt = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(2).footer()).html(totalLrs);
                $(api.column(4).footer()).html(articles);
                $(api.column(5).footer()).html(actWgt);
                $(api.column(6).footer()).html(chgWgt);
                $(api.column(7).footer()).html(toPayAmt);
                $(api.column(8).footer()).html(paidAmt);
                $(api.column(9).footer()).html(discAmt.toFixed());
                $(api.column(10).footer()).html(fovAmt);
            }
        },
            this.dtOptionsDestSubStation = {
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'excel',
                        text: '<i class="fas fa-file-excel"> Excel</i>',
                        titleAttr: 'Excel',
                        footer: true,
                        title: function () {
                            if ($("#searchBy").val() == "destinationWise") {
                                return " Destination Invoice Report Summary - " +
                                    "Form Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format("DD-MM-YYYY") + " - " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format("DD-MM-YYYY") + " - " +
                                    "Destination : " + $("#destinationId").val() + " - " +
                                    "Station : " + $("#searchStationWiseBy").val() + "";
                            }
                        },
                        exportOptions: {
                            columns: ':visible'
                        }
                    },
                    {
                        extend: 'print',
                        text: '<i class="fas fa-print"> Print</i>',
                        titleAttr: 'Print',
                        //pageSize: 'A4',
                        customize: function (win) {
                            $(win.document.body).css('font-size', '10pt');
                            $(win.document.body).find('th, td').
                                css('font-family', 'Arial, Helvetica, sans-serif')
                                .css('font-size', '12px').css('text-align', 'center');
                        },
                        footer: true,
                        messageTop: function () {
                            if ($("#searchBy").val() == "destinationWise") {
                                return "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 22%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>From Date</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format("DD-MM-YYYY") + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>To Date&nbsp;&nbsp;&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDate").val()).format("DD-MM-YYYY") + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:24px;'><u>Destination Invoice Report Summary</u></strong><br>" +
                                    "</td>" +
                                    "<td rowspan='3' align='left' style='width:22%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Destination&nbsp;</strong>" +
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
                                    "<strong style='font-size:15px;'>Station&nbsp;&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + $("#searchStationWiseBy").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
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
                        }, exportOptions: {
                            columns: [0, 1, 2, 3, 4, 5, 6]
                        },
                    }
                ],
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                processing: true,
                responsive: true,
                "scrollX": true,
                "scrollY": 320,
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
                    var totalLrs = api.column(1).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var articles = api.column(2).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actWgt = api.column(3).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var chgWgt = api.column(4).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var toPayAmt = api.column(5).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var paidAmt = api.column(6).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var serviceAmt = api.column(7).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html(totalLrs);
                    $(api.column(2).footer()).html(articles);
                    $(api.column(3).footer()).html(actWgt);
                    $(api.column(4).footer()).html(chgWgt);
                    $(api.column(5).footer()).html(toPayAmt);
                    $(api.column(6).footer()).html(paidAmt);
                    $(api.column(7).footer()).html(serviceAmt);
                }
            },
            this.dtOptionsInvoiceMainStation = {
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
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                processing: true,
                responsive: true,
                "scrollX": true,
                "scrollY": 380,
                "scrollCollapse": true,
                "paging": false,
                "info": false,
            },
            this.dtOptionsInvoiceSubStation = {
                dom: 'Bfrtip',
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
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                },
                processing: true,
                responsive: true,
                "scrollX": true,
                "scrollY": 380,
                "scrollCollapse": true,
                "paging": false,
                "info": false,
            },
            this.dtOptionsConsolidatedInvoice = {
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'excel',
                        text: '<i class="fas fa-file-excel"> Excel</i>',
                        titleAttr: 'Excel',
                        footer: true,
                        title: function () {
                            if ($("#searchBy").val() == "consolidatedInvoice") {
                                return " Destination Invoice Report Summary - " +
                                    "Invoice No : " + $("#invoiceNumberId").val() + "";
                            }
                        },
                        exportOptions: {
                            columns: ':visible'
                        }
                    },
                    {
                        extend: 'print',
                        text: '<i class="fas fa-print"> Print</i>',
                        titleAttr: 'Print',
                        //pageSize: 'A4',
                        customize: function (win) {
                            $(win.document.body).css('font-size', '10pt');
                            $(win.document.body).find('th, td').
                                css('font-family', 'Arial, Helvetica, sans-serif')
                                .css('font-size', '12px').css('text-align', 'center');
                        },
                        footer: true,
                        messageTop: function () {
                            if ($("#searchBy").val() == "consolidatedInvoice") {
                                return "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 22%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Invoice Number</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + $("#invoiceNumberId").val() + "</span><br>" +
                                    "</td>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:24px;'><u>Destination Invoice Report Summary</u></strong><br>" +
                                    "</td>" +
                                    "<td rowspan='3' align='left' style='width:22%;'>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
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
                        }, exportOptions: {
                            columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        },
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
                "paging": false,
                "info": false,
                "footerCallback": function (row, data, start, end, display) {
                    var api = this.api(), data;
                    // converting to interger to find total
                    var intVal = function (i) {
                        return typeof i === 'string' ?
                            +i.replace(/[\$,]/g, '') * 1 :
                            typeof i === 'number' ?
                                i : 0;
                    };
                    var totalLrs = api.column(2).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var articles = api.column(4).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actWgt = api.column(5).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var chgWgt = api.column(6).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var toPayAmt = api.column(7).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var paidAmt = api.column(8).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var fovAmt = api.column(9).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var discAmt = api.column(10).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var serviceAmt = api.column(11).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(2).footer()).html(totalLrs);
                    $(api.column(4).footer()).html(articles);
                    $(api.column(5).footer()).html(actWgt);
                    $(api.column(6).footer()).html(chgWgt);
                    $(api.column(7).footer()).html(toPayAmt);
                    $(api.column(8).footer()).html(paidAmt);
                    $(api.column(9).footer()).html(fovAmt);
                    $(api.column(10).footer()).html(discAmt);
                    $(api.column(11).footer()).html(serviceAmt);
                }
            };
    };
    InvoiceDetailsComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerInvoiceDetails.next();
        this.dtTriggerDestSubStation.next();
        this.dtTriggerInvoiceMainStation.next();
        this.dtTriggerInvoiceSubStation.next();
        this.dtTriggerConsolidatedInvoice.next();
    };
    InvoiceDetailsComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerInvoiceDetails.unsubscribe();
        this.dtTriggerDestSubStation.unsubscribe();
        this.dtTriggerInvoiceMainStation.unsubscribe();
        this.dtTriggerInvoiceSubStation.unsubscribe();
        this.dtTriggerConsolidatedInvoice.unsubscribe();
        //this.onDestroyUnsubscribtionInvoiceDetails.unsubscribe();
        //this.onDestroyUnsubscribtionDestSubStation.unsubscribe();
        //this.onDestroyUnsubscribtionInvoiceMainStation.unsubscribe();
        //this.onDestroyUnsubscribtionInvoiceSubStation.unsubscribe();
        //this.onDestroyUnsubscribtionConsolidatedInvoice.unsubscribe();
    };
    InvoiceDetailsComponent.prototype.searchByStationWiseMode = function (searchBy) {
        console.log(searchBy);
        if (searchBy === 'mainStation') {
            this.hideAndShowInvoiceDetailsTable = true;
            this.hideAndShowDestSubStationTable = false;
            this.hideAndShowInvoiceMainStationTable = false;
            this.hideAndShowInvoiceSubStationTable = false;
            this.hideAndShowConsolidatedInvoiceTable = false;
            this.invoiceDetailsDataList = [];
            $("#invoiceDetailsTableId").DataTable().destroy();
            this.dtTriggerInvoiceDetails.next();
        }
        else if (searchBy === 'subStation') {
            this.hideAndShowInvoiceDetailsTable = false;
            this.hideAndShowDestSubStationTable = true;
            this.hideAndShowInvoiceMainStationTable = false;
            this.hideAndShowInvoiceSubStationTable = false;
            this.hideAndShowConsolidatedInvoiceTable = false;
            this.destSubStationDataList = [];
            $("#invoiceDetailsDestSubStationTableId").DataTable().destroy();
            this.dtTriggerDestSubStation.next();
        }
    };
    InvoiceDetailsComponent.prototype.searchByMainInvoiceStationWiseMode = function (searchMainInvoiceStationWiseBy) {
        console.log(searchMainInvoiceStationWiseBy);
        if (searchMainInvoiceStationWiseBy === 'mainStation') {
            this.hideAndShowInvoiceDetailsTable = false;
            this.hideAndShowDestSubStationTable = false;
            this.hideAndShowInvoiceMainStationTable = true;
            this.hideAndShowInvoiceSubStationTable = false;
            this.hideAndShowConsolidatedInvoiceTable = false;
            $("#destinationId").val('All');
            this.hideAndShowViaSourceField = false;
            this.invoiceMainStationDataList = [];
            $("#invoiceDetailsForMainStationTableId").DataTable().destroy();
            this.dtTriggerInvoiceMainStation.next();
        }
        else if (searchMainInvoiceStationWiseBy === 'subStation') {
            this.hideAndShowInvoiceDetailsTable = false;
            this.hideAndShowDestSubStationTable = false;
            this.hideAndShowInvoiceMainStationTable = false;
            this.hideAndShowInvoiceSubStationTable = true;
            this.hideAndShowConsolidatedInvoiceTable = false;
            $("#destinationId").val('All');
            this.hideAndShowViaSourceField = false;
            this.invoiceSubStationDataList = [];
            $("#invoiceDetailsForMainInvoiceSubStationTableId").DataTable().destroy();
            this.dtTriggerInvoiceSubStation.next();
        }
    };
    InvoiceDetailsComponent.prototype.validateClearBtn = function () {
        $("#searchBy").val('invoiceNumber');
        //field hide show
        this.hideAndShowInvoiceNumberField = true;
        this.hideAndShowFromToDateField = false;
        this.hideAndShowSourceField = false;
        this.hideAndShowDestinationField = false;
        this.hideAndShowMainBkgSourceField = false;
        this.hideAndShowMainAndSubStationField = false;
        this.hideAndShowMainInvoiceOfStationSubStationField = false;
        this.hideAndShowViaSourceField = false;
        // table hide show
        this.hideAndShowInvoiceDetailsTable = true;
        this.hideAndShowDestSubStationTable = false;
        this.hideAndShowInvoiceMainStationTable = false;
        this.hideAndShowInvoiceSubStationTable = false;
        this.hideAndShowConsolidatedInvoiceTable = false;
        this.invoiceDetailsDataList = [];
        $("#invoiceDetailsTableId").DataTable().destroy();
        this.dtTriggerInvoiceDetails.next();
        this.clearInputField();
    };
    InvoiceDetailsComponent.prototype.clearInputField = function () {
        $("#invoiceNumberId").val('');
        $("#searchStationWiseBy").val('mainStation');
        this.modelDestination = null;
        this.modelSource = null;
        this.modelMainBookingSource = null;
        this.modelViaSourceStation = null;
        this.fromDatesModal = null;
        this.toDatesModal = null;
        this.validateInvoiceNumberIdValue = null;
        this.validateFromDateIdValue = null;
        this.validateToDateIdValue = null;
        this.validateSourceStationIdValue = null;
        this.validateMainSourceBkgStationIdValue = null;
        this.validateViaSourceStationIdValue = null;
    };
    InvoiceDetailsComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'invoiceNumber') {
            //field hide show
            this.hideAndShowInvoiceNumberField = true;
            this.hideAndShowFromToDateField = false;
            this.hideAndShowSourceField = false;
            this.hideAndShowDestinationField = false;
            this.hideAndShowMainBkgSourceField = false;
            this.hideAndShowMainAndSubStationField = false;
            this.hideAndShowMainInvoiceOfStationSubStationField = false;
            this.hideAndShowViaSourceField = false;
            // table hide show
            this.hideAndShowInvoiceDetailsTable = true;
            this.hideAndShowDestSubStationTable = false;
            this.hideAndShowInvoiceMainStationTable = false;
            this.hideAndShowInvoiceSubStationTable = false;
            this.hideAndShowConsolidatedInvoiceTable = false;
            this.invoiceDetailsDataList = [];
            $("#invoiceDetailsTableId").DataTable().destroy();
            this.dtTriggerInvoiceDetails.next();
            this.clearInputField();
            //$("#searchBy").val('invoiceNumber');
        }
        else if (searchBy === 'dateWise') {
            this.hideAndShowInvoiceNumberField = false;
            this.hideAndShowFromToDateField = true;
            this.hideAndShowSourceField = false;
            this.hideAndShowDestinationField = false;
            this.hideAndShowMainBkgSourceField = false;
            this.hideAndShowMainAndSubStationField = false;
            this.hideAndShowMainInvoiceOfStationSubStationField = false;
            this.hideAndShowViaSourceField = false;
            this.hideAndShowInvoiceDetailsTable = true;
            this.hideAndShowDestSubStationTable = false;
            this.hideAndShowInvoiceMainStationTable = false;
            this.hideAndShowInvoiceSubStationTable = false;
            this.hideAndShowConsolidatedInvoiceTable = false;
            this.invoiceDetailsDataList = [];
            $("#invoiceDetailsTableId").DataTable().destroy();
            this.dtTriggerInvoiceDetails.next();
            this.clearInputField();
            //$("#searchBy").val('dateWise');
        }
        else if (searchBy === 'sourceWise') {
            this.hideAndShowInvoiceNumberField = false;
            this.hideAndShowFromToDateField = true;
            this.hideAndShowSourceField = true;
            this.hideAndShowDestinationField = false;
            this.hideAndShowMainBkgSourceField = false;
            this.hideAndShowMainAndSubStationField = false;
            this.hideAndShowMainInvoiceOfStationSubStationField = false;
            this.hideAndShowViaSourceField = false;
            this.hideAndShowInvoiceDetailsTable = true;
            this.hideAndShowDestSubStationTable = false;
            this.hideAndShowInvoiceMainStationTable = false;
            this.hideAndShowInvoiceSubStationTable = false;
            this.hideAndShowConsolidatedInvoiceTable = false;
            this.invoiceDetailsDataList = [];
            $("#invoiceDetailsTableId").DataTable().destroy();
            this.dtTriggerInvoiceDetails.next();
            this.clearInputField();
        }
        else if (searchBy === 'destinationWise') {
            this.hideAndShowInvoiceNumberField = false;
            this.hideAndShowFromToDateField = true;
            this.hideAndShowSourceField = false;
            this.hideAndShowDestinationField = true;
            this.hideAndShowMainBkgSourceField = false;
            this.hideAndShowMainAndSubStationField = true;
            this.hideAndShowMainInvoiceOfStationSubStationField = false;
            this.hideAndShowViaSourceField = false;
            this.hideAndShowInvoiceDetailsTable = true;
            this.hideAndShowDestSubStationTable = false;
            this.hideAndShowInvoiceMainStationTable = false;
            this.hideAndShowInvoiceSubStationTable = false;
            this.hideAndShowConsolidatedInvoiceTable = false;
            this.invoiceDetailsDataList = [];
            $("#invoiceDetailsTableId").DataTable().destroy();
            this.dtTriggerInvoiceDetails.next();
            this.clearInputField();
            this.setDestinationDropDownValueBasedOnSelectionListner();
        }
        else if (searchBy === 'dataAndStationWise') {
            this.hideAndShowInvoiceNumberField = false;
            this.hideAndShowFromToDateField = true;
            this.hideAndShowSourceField = true;
            this.hideAndShowDestinationField = true;
            this.hideAndShowMainBkgSourceField = false;
            this.hideAndShowMainAndSubStationField = false;
            this.hideAndShowMainInvoiceOfStationSubStationField = false;
            this.hideAndShowViaSourceField = false;
            this.hideAndShowInvoiceDetailsTable = true;
            this.hideAndShowDestSubStationTable = false;
            this.hideAndShowInvoiceMainStationTable = false;
            this.hideAndShowInvoiceSubStationTable = false;
            this.hideAndShowConsolidatedInvoiceTable = false;
            this.invoiceDetailsDataList = [];
            $("#invoiceDetailsTableId").DataTable().destroy();
            this.dtTriggerInvoiceDetails.next();
            this.clearInputField();
            $("#destinationId").val('');
            this.destinationTA = [];
            this.destinationOptions = [];
            this.destinationOptions = this.destinationTempOptions;
            for (var i = 0; i < this.destinationOptions.length; i++) {
                this.destinationTA.push(this.destinationOptions[i]);
            }
        }
        else if (searchBy === 'mainInvoice') {
            this.hideAndShowInvoiceNumberField = false;
            this.hideAndShowFromToDateField = true;
            this.hideAndShowSourceField = false;
            this.hideAndShowDestinationField = true;
            this.hideAndShowMainBkgSourceField = false;
            this.hideAndShowMainAndSubStationField = false;
            this.hideAndShowMainInvoiceOfStationSubStationField = true;
            this.hideAndShowViaSourceField = false;
            this.hideAndShowInvoiceDetailsTable = false;
            this.hideAndShowDestSubStationTable = false;
            this.hideAndShowInvoiceMainStationTable = true;
            this.hideAndShowInvoiceSubStationTable = false;
            this.hideAndShowConsolidatedInvoiceTable = false;
            this.invoiceMainStationDataList = [];
            $("#invoiceDetailsForMainStationTableId").DataTable().destroy();
            this.dtTriggerInvoiceMainStation.next();
            this.clearInputField();
            this.setDestinationDropDownValueBasedOnSelectionListner();
        }
        else if (searchBy === 'consolidatedInvoice') {
            this.hideAndShowInvoiceNumberField = true;
            this.hideAndShowFromToDateField = false;
            this.hideAndShowSourceField = false;
            this.hideAndShowDestinationField = false;
            this.hideAndShowMainBkgSourceField = false;
            this.hideAndShowMainAndSubStationField = false;
            this.hideAndShowMainInvoiceOfStationSubStationField = false;
            this.hideAndShowViaSourceField = false;
            this.hideAndShowInvoiceDetailsTable = false;
            this.hideAndShowDestSubStationTable = false;
            this.hideAndShowInvoiceMainStationTable = false;
            this.hideAndShowInvoiceSubStationTable = false;
            this.hideAndShowConsolidatedInvoiceTable = true;
            this.consolidatedInvoiceDataList = [];
            $("#invoiceDetailsConsolidateTableId").DataTable().destroy();
            this.dtTriggerConsolidatedInvoice.next();
            this.clearInputField();
        }
        else if (searchBy === 'invNoWithDestination') {
            this.hideAndShowInvoiceNumberField = true;
            this.hideAndShowFromToDateField = false;
            this.hideAndShowSourceField = false;
            this.hideAndShowDestinationField = true;
            this.hideAndShowMainBkgSourceField = false;
            this.hideAndShowMainAndSubStationField = false;
            this.hideAndShowMainInvoiceOfStationSubStationField = false;
            this.hideAndShowViaSourceField = false;
            //differnet table cmg chck once
            //need to work
            this.clearInputField();
            this.setDestinationDropDownValueBasedOnSelectionListner();
        }
        else if (searchBy === 'mainBkgSrcWise') {
            this.hideAndShowInvoiceNumberField = false;
            this.hideAndShowFromToDateField = true;
            this.hideAndShowSourceField = false;
            this.hideAndShowDestinationField = true;
            this.hideAndShowMainBkgSourceField = true;
            this.hideAndShowMainAndSubStationField = false;
            this.hideAndShowMainInvoiceOfStationSubStationField = false;
            this.hideAndShowViaSourceField = false;
            this.hideAndShowInvoiceDetailsTable = true;
            this.hideAndShowDestSubStationTable = false;
            this.hideAndShowInvoiceMainStationTable = false;
            this.hideAndShowInvoiceSubStationTable = false;
            this.hideAndShowConsolidatedInvoiceTable = false;
            this.invoiceDetailsDataList = [];
            $("#invoiceDetailsTableId").DataTable().destroy();
            this.dtTriggerInvoiceDetails.next();
            this.clearInputField();
            this.setDestinationDropDownValueBasedOnSelectionListner();
        }
        /* else {
            this.searchByInvoiceNumber = false;
            this.searchByDate = false;
            this.viewSource = false;
            this.viewDestination = false;
            this.viewStationDestination = false;
            this.viewStationInvoice = false;
        }*/
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    InvoiceDetailsComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    InvoiceDetailsComponent.prototype.clickListnerForDestination = function (e, fubi) {
        this.modelDestination = e.item;
        $("#destinationId").val(this.modelDestination.destination);
        if ($("#destinationId").val() != "All" && $("#searchBy").val() == "mainInvoice" &&
            $("#searchMainInvoiceStationWiseBy").val() == "mainStation" ||
            $("#searchMainInvoiceStationWiseBy").val() == "subStation") {
            this.hideAndShowViaSourceField = true;
            $("#viaSourceId").val('All');
        }
        else {
            this.hideAndShowViaSourceField = false;
            this.modelViaSourceStation = null;
        }
    };
    InvoiceDetailsComponent.prototype.sourceListener = function (e, fubi) {
        this.modelSource = e.item;
        $("#sourceId").val(this.modelSource.subStations);
    };
    InvoiceDetailsComponent.prototype.clickListnerForMainBookingSource = function (e, fubi) {
        this.modelMainBookingSource = e.item;
        $("#mainBookingSourceId").val(this.modelMainBookingSource.mainBookStations);
    };
    InvoiceDetailsComponent.prototype.viaSourceStationListener = function (e, fubi) {
        this.modelViaSourceStation = e.item;
        $("#viaSourceId").val(this.modelViaSourceStation.destination);
    };
    InvoiceDetailsComponent.prototype.setDestinationDropDownValueBasedOnSelectionListner = function () {
        // $("#destinationId").val('');
        this.destinationTA = [];
        this.destinationOptions = [];
        this.destinationOptions = this.destinationTempOptions;
        this.lrDtoDestinationAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDestinationAllOption.destination = "All";
        this.destinationTA.push(this.lrDtoDestinationAllOption);
        for (var i = 0; i < this.destinationOptions.length; i++) {
            this.destinationTA.push(this.destinationOptions[i]);
        }
        $("#destinationId").val('All');
    };
    InvoiceDetailsComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.mode = "desttrsp";
    };
    InvoiceDetailsComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.getDestinationMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            if (response.length > 0) {
                _this.destinationTA = [];
                _this.destinationOptions = [];
                _this.destinationTempOptions = [];
                _this.destinationOptions = response;
                _this.destinationTempOptions = _this.destinationOptions;
                for (var i = 0; i < _this.destinationOptions.length; i++) {
                    _this.destinationTA.push(_this.destinationOptions[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.destinationTA = [];
                _this.destinationOptions = [];
                _this.destinationTempOptions = [];
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "While Getting destination details", "warning");
        },
            function () { return console.log('done'); };
    };
    ;
    InvoiceDetailsComponent.prototype.getMainBookingSourceDataDetails = function () {
        this.agentDtoSourceStation = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__["AgentDetailsDto"]();
        this.agentDtoSourceStation.companyId = this.userDataDtoReturnSession.companyId;
    };
    InvoiceDetailsComponent.prototype.getMainBookingSourceDetails = function () {
        var _this = this;
        this.getMainBookingSourceDataDetails();
        this.showSpinnerForAction = true;
        this.masterReadService.getMainBookingStationsDetails(this.agentDtoSourceStation).subscribe(function (response) {
            //console.log(response);
            if (response.length > 0) {
                _this.mainBookingSourceTA = [];
                _this.agentDtoOptionSourceStation = [];
                _this.agentDtoOptionSourceStation = response;
                _this.agentDtoOptionSourceStationAll.mainBookStations = "All";
                _this.mainBookingSourceTA.push(_this.agentDtoOptionSourceStationAll);
                for (var i = 0; i < _this.agentDtoOptionSourceStation.length; i++) {
                    _this.mainBookingSourceTA.push(_this.agentDtoOptionSourceStation[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Main Biiking Source Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    InvoiceDetailsComponent.prototype.getFromStationMethod = function () {
        //if (this.rightsForBookingAdministrator == "Rights For Invoice Details Rpt Booking Administrator") {
        if (this.userDataDtoReturnSession.role != null &&
            this.userDataDtoReturnSession.role == "Booking Administrator" &&
            this.userDataDtoReturnSession.stationList != "") {
            this.getAgentNamesMethod();
        }
        else {
            this.getSourceStationDetails();
        }
    };
    InvoiceDetailsComponent.prototype.getAgentNamesMethod = function () {
        var _this = this;
        this.lrDtoSourceStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoSourceStation.companyId = this.userDataDtoReturnSession.companyId;
        //if (this.rightsForBookingAdministrator == "Rights For Invoice Details Rpt Booking Administrator") {
        if (this.userDataDtoReturnSession.role != null &&
            this.userDataDtoReturnSession.role == "Booking Administrator") {
            this.lrDtoSourceStation.city = this.userDataDtoReturnSession.mainStation;
        }
        else {
            this.lrDtoSourceStation.city = this.userDataDtoReturnSession.mainAdminStation;
        }
        this.showSpinnerForAction = true;
        this.masterReadService.getSubBookingStationDetailsService(this.lrDtoSourceStation).subscribe(function (response) {
            console.log("Agent");
            console.log(response);
            if (response.length > 0) {
                _this.sourceSubStationNameTA = [];
                _this.sourceStationOptions = [];
                _this.sourceStationOptions = response;
                // this.lrDtoSourceStationAllOption.subStations = "All";
                //this.sourceSubStationNameTA.push(this.lrDtoSourceStationAllOption);
                for (var i = 0; i < _this.sourceStationOptions.length; i++) {
                    _this.sourceSubStationNameTA.push(_this.sourceStationOptions[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Source Details", "info");
        },
            function () { return console.log('done'); };
    };
    InvoiceDetailsComponent.prototype.getSourceStationMethod = function () {
        this.lrDtoSourceStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoSourceStation.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoSourceStation.mode = "All";
    };
    InvoiceDetailsComponent.prototype.getSourceStationDetails = function () {
        var _this = this;
        this.getSourceStationMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getSubBookingStationDetailsService(this.lrDtoSourceStation).subscribe(function (response) {
            console.log("Source");
            console.log(response);
            if (response.length > 0) {
                _this.sourceSubStationNameTA = [];
                _this.sourceStationOptions = [];
                _this.sourceStationOptions = response;
                //this.lrDtoSourceStationAllOption.subStations = "All";
                //this.sourceSubStationNameTA.push(this.lrDtoSourceStationAllOption);
                for (var i = 0; i < _this.sourceStationOptions.length; i++) {
                    _this.sourceSubStationNameTA.push(_this.sourceStationOptions[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Source Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    InvoiceDetailsComponent.prototype.getViaSourceStationMethod = function () {
        this.lrDtoViaSourceStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoViaSourceStation.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoViaSourceStation.mode = "logininfo";
    };
    InvoiceDetailsComponent.prototype.getViaSourceStationDetails = function () {
        var _this = this;
        this.getViaSourceStationMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoViaSourceStation).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.viaSourceStationNameTA = [];
                _this.viaSourceStationOptions = [];
                _this.viaSourceStationOptions = response;
                _this.lrDtoViaSourceStationAllOption.subStations = "All";
                _this.viaSourceStationNameTA.push(_this.lrDtoViaSourceStationAllOption);
                for (var i = 0; i < _this.viaSourceStationOptions.length; i++) {
                    _this.viaSourceStationNameTA.push(_this.viaSourceStationOptions[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Source Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    InvoiceDetailsComponent.prototype.validateSearchBtn = function () {
        this.lrDtoForSearchData = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoForSearchData.mode = null;
        this.lrDtoForSearchData.companyId = this.userDataDtoReturnSession.companyId;
        if ($("#searchBy").val() == "invoiceNumber") {
            if (($("#invoiceNumberId").val() == null) || ($("#invoiceNumberId").val() == undefined) ||
                ($("#invoiceNumberId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()(" Mandatory Field", "Invoice Number Is Mandatory Field", "warning");
                return false;
            }
            else {
                this.validateInvoiceNumberIdValue = $("#invoiceNumberId").val();
                this.lrDtoForSearchData.invoiceNumber = this.validateInvoiceNumberIdValue;
                //Not used this mode in service of invoice as per asrar bhaiya  
                /* if (this.userDataDtoReturnSession.mainStation == "Chennai") {
                     this.lrDtoForSearchData.mode = "Chennai";
                 }*/
                this.setInvoiceNumberDataDetailsForReport(this.lrDtoForSearchData);
            }
        }
        else if ($("#searchBy").val() == "dateWise") {
            if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                ($("#fromDates").val() == "") || ($("#toDate").val() == null) ||
                ($("#toDate").val() == undefined) || ($("#toDate").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()(" Mandatory Field", "From Date And To Date Are Mandatory Fields", "warning");
                return false;
            }
            else {
                /*else if (this.rightsForSuperAdministrator == "Rights For Invoice Details Rpt Super Administrator" ||
                this.rightsForTransshipmentManager == "Rights For Invoice Details Rpt Transshipment Manager" ||
                 this.isShowResult == true) { */
                if (this.userDataDtoReturnSession.role == "Super Administrator" ||
                    this.userDataDtoReturnSession.role == "Transshipment Manager" ||
                    this.isShowResult == true) {
                    this.lrDtoForSearchData.mode = "all";
                }
                /* else if ((this.rightsForBookingManager == "Rights For Invoice Details Rpt Booking Manager") ||
                     ((this.rightsForBookingOffice == "Rights For Invoice Details Rpt Booking Office") &&
                         (this.rightsForAdministrator == "Rights For Invoice Details Rpt Administrator"))) {
                 */
                else if ((this.userDataDtoReturnSession.role == "Booking Manager") ||
                    ((this.userDataDtoReturnSession.officeType == "Booking Office") &&
                        (this.userDataDtoReturnSession.role == "Administrator"))) {
                    this.lrDtoForSearchData.mode = "booking";
                    this.lrDtoForSearchData.officeType = this.userDataDtoReturnSession.office;
                    this.lrDtoForSearchData.fromStation = this.userDataDtoReturnSession.mainStation;
                }
                /*
                else if ((this.rightsForDeliveryManager == "Rights For Invoice Details Rpt Delivery Manager") ||
                    (this.rightsForCollectionManager == "Rights For Invoice Details Rpt Collection Manager") ||
                    ((this.rightsForDeliveryOfficer == "Rights For Invoice Details Rpt Delivery Office") &&
                        ((this.rightsForAdministrator == "Rights For Invoice Details Rpt Administrator") ||
                            (this.rightsForBarcode == "Rights For Invoice Details Rpt Barcode")))) {
               */
                else if ((this.userDataDtoReturnSession.role == "Delivery Manager") ||
                    (this.userDataDtoReturnSession.role == "Collection Manager") ||
                    ((this.userDataDtoReturnSession.officeType == "Delivery Office") &&
                        ((this.userDataDtoReturnSession.role == "Administrator") ||
                            (this.userDataDtoReturnSession.role == "Barcode")))) {
                    this.lrDtoForSearchData.mode = "delivery";
                    this.lrDtoForSearchData.officeType = this.userDataDtoReturnSession.mainStation;
                    this.lrDtoForSearchData.toStation = this.userDataDtoReturnSession.office;
                }
                //else if(this.rightsForBookingAdministrator == "Rights For Invoice Details Rpt Booking Administrator"){
                else if (this.userDataDtoReturnSession.role == "Booking Administrator") {
                    this.lrDtoForSearchData.mode = "adminStation";
                    this.lrDtoForSearchData.list = this.userDataDtoReturnSession.stationList;
                }
                if ($("#fromDates").val() != null && $("#toDate").val() != null) {
                    this.validateFromDateIdValue = $("#fromDates").val();
                    this.validateToDateIdValue = $("#toDate").val();
                    this.lrDtoForSearchData.fromDate = this.validateFromDateIdValue;
                    this.lrDtoForSearchData.toDate = this.validateToDateIdValue;
                }
                //Not used this mode in service of invoice as per asrar bhaiya  
                /* if (this.userDataDtoReturnSession.mainStation == "Chennai") {
                     this.lrDtoForSearchData.status = "Chennai";
                 }*/
                this.setDateWiseDataDetailsForReport(this.lrDtoForSearchData);
            }
        }
        else if ($("#searchBy").val() == "sourceWise") {
            if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                ($("#fromDates").val() == "") || ($("#toDate").val() == null) ||
                ($("#toDate").val() == undefined) || ($("#toDate").val() == "") ||
                ($("#sourceId").val() == null) || ($("#sourceId").val() == undefined) ||
                ($("#sourceId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()(" Mandatory Field", "From Date,To Date And Source Are Mandatory Fields", "warning");
                return false;
            }
            else {
                /*if (this.rightsForSuperAdministrator == "Rights For Invoice Details Rpt Super Administrator" ||
                    this.rightsForTransshipmentManager == "Rights For Invoice Details Rpt Transshipment Manager" ||
                    this.isShowResult == true) {
                */
                if (this.userDataDtoReturnSession.role == "Super Administrator" ||
                    this.userDataDtoReturnSession.role == "Transshipment Manager" ||
                    this.isShowResult == true) {
                    this.lrDtoForSearchData.mode = "all";
                }
                /* else if ((this.rightsForDeliveryManager == "Rights For Invoice Details Rpt Delivery Manager")
                     || (this.rightsForCollectionManager == "Rights For Invoice Details Rpt Collection Manager")
                     || ((this.rightsForDeliveryOfficer == "Rights For Invoice Details Rpt Delivery Office")
                         && ((this.rightsForAdministrator == "Rights For Invoice Details Rpt Administrator")
                             || (this.rightsForBarcode == "Rights For Invoice Details Rpt Barcode")))) {
                */
                else if ((this.userDataDtoReturnSession.role == "Delivery Manager")
                    || (this.userDataDtoReturnSession.role == "Collection Manager")
                    || ((this.userDataDtoReturnSession.officeType == "Delivery Office")
                        && ((this.userDataDtoReturnSession.role == "Administrator")
                            || (this.userDataDtoReturnSession.role == "Barcode")))) {
                    this.lrDtoForSearchData.mode = "delivery";
                    this.lrDtoForSearchData.destination = this.userDataDtoReturnSession.office;
                    this.lrDtoForSearchData.toStation = this.userDataDtoReturnSession.mainStation;
                }
                //else if (this.rightsForBookingAdministrator == "Rights For Invoice Details Rpt Booking Administrator") {
                else if (this.userDataDtoReturnSession.role == "Booking Administrator") {
                    this.lrDtoForSearchData.mode = "all";
                    this.lrDtoForSearchData.list = this.userDataDtoReturnSession.stationList;
                }
                if ($("#fromDates").val() != null && $("#toDate").val() != null) {
                    this.validateFromDateIdValue = $("#fromDates").val();
                    this.validateToDateIdValue = $("#toDate").val();
                    this.lrDtoForSearchData.fromDate = this.validateFromDateIdValue;
                    this.lrDtoForSearchData.toDate = this.validateToDateIdValue;
                }
                this.validateSourceStationIdValue = $("#sourceId").val();
                this.lrDtoForSearchData.source = this.validateSourceStationIdValue;
                //Not used this mode in service of invoice as per asrar bhaiya  
                /* if (this.userDataDtoReturnSession.mainStation == "Chennai") {
                     this.lrDtoForSearchData.status = "Chennai";
                 }*/
                this.setSourceStationWiseDataDetailsForReport(this.lrDtoForSearchData);
            }
        }
        else if ($("#searchBy").val() == "destinationWise") {
            /*if (this.rightsForSuperAdministrator == "Rights For Invoice Details Rpt Super Administrator" ||
                    this.rightsForTransshipmentManager == "Rights For Invoice Details Rpt Transshipment Manager") {
            */
            if (this.userDataDtoReturnSession.role == "Super Administrator" ||
                this.userDataDtoReturnSession.role == "Transshipment Manager") {
                this.lrDtoForSearchData.mode = "all";
            }
            /* else if ((this.rightsForBookingManager == "Rights For Invoice Details Rpt Booking Manager")
               || ((this.rightsForBookingOffice == "Rights For Invoice Details Rpt Booking Office")
                   && (this.rightsForAdministrator == "Rights For Invoice Details Rpt Administrator"))) {
               this.lrDtoForSearchData.mode = "booking";
            */
            else if ((this.userDataDtoReturnSession.role == "Booking Manager")
                || ((this.userDataDtoReturnSession.officeType == "Booking Office")
                    && (this.userDataDtoReturnSession.role == "Administrator"))) {
                this.lrDtoForSearchData.mode = "booking";
            }
            //else if (this.rightsForBookingAdministrator == "Rights For Invoice Details Rpt Booking Administrator") {
            else if (this.userDataDtoReturnSession.role == "Booking Administrator") {
                this.lrDtoForSearchData.mode = "adminStation";
                this.lrDtoForSearchData.list = this.userDataDtoReturnSession.stationList;
            }
            // validation
            if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                ($("#fromDates").val() == "") || ($("#toDate").val() == null) ||
                ($("#toDate").val() == undefined) || ($("#toDate").val() == "") ||
                ($("#destinationId").val() == null) || ($("#destinationId").val() == undefined) ||
                ($("#destinationId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()(" Mandatory Field", "From Date,To Date And Destination Are Mandatory Fields", "warning");
                return false;
            }
            else {
                this.validateFromDateIdValue = $("#fromDates").val();
                this.validateToDateIdValue = $("#toDate").val();
                this.lrDtoForSearchData.fromDate = this.validateFromDateIdValue;
                this.lrDtoForSearchData.toDate = this.validateToDateIdValue;
                //
                if ($("#searchStationWiseBy").val() == "mainStation") {
                    if ($("#destinationId").val() == "All") {
                        this.lrDtoForSearchData.destinationType = "allDest";
                    }
                    else if ($("#destinationId").val() != "All") {
                        this.validateDestinationStationIdValue = $("#destinationId").val();
                        this.lrDtoForSearchData.destinationType = "notAllDest";
                        this.lrDtoForSearchData.destination = this.validateDestinationStationIdValue;
                    }
                    this.lrDtoForSearchData.source = this.userDataDtoReturnSession.office;
                    this.lrDtoForSearchData.stationType = "mainStation";
                    this.setDestinationOfMainStationDataDetailsForReport(this.lrDtoForSearchData);
                }
                else if ($("#searchStationWiseBy").val() == "subStation") {
                    if ($("#destinationId").val() == "All") {
                        this.lrDtoForSearchData.destinationType = "allDest";
                    }
                    else if ($("#destinationId").val() != "All") {
                        this.validateDestinationStationIdValue = $("#destinationId").val();
                        this.lrDtoForSearchData.destinationType = "notAllDest";
                        this.lrDtoForSearchData.destination = this.validateDestinationStationIdValue;
                    }
                    this.lrDtoForSearchData.source = this.userDataDtoReturnSession.office;
                    this.lrDtoForSearchData.stationType = "notMainStation";
                    this.setDestinationOfSubStationDataDetailsForReport(this.lrDtoForSearchData);
                }
            }
        }
        else if ($("#searchBy").val() == "dataAndStationWise") {
            // validation
            if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                ($("#fromDates").val() == "") || ($("#toDate").val() == null) ||
                ($("#toDate").val() == undefined) || ($("#toDate").val() == "") ||
                ($("#sourceId").val() == null) || ($("#sourceId").val() == undefined) ||
                ($("#sourceId").val() == "") || ($("#destinationId").val() == null) ||
                ($("#destinationId").val() == undefined) || ($("#destinationId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()(" Mandatory Field", "From Date,To date,Source And Destination Are Mandatory Fields", "warning");
                return false;
            }
            else {
                this.validateFromDateIdValue = $("#fromDates").val();
                this.validateToDateIdValue = $("#toDate").val();
                this.validateSourceStationIdValue = $("#sourceId").val();
                this.validateDestinationStationIdValue = $("#destinationId").val();
                this.lrDtoForSearchData.fromDate = this.validateFromDateIdValue;
                this.lrDtoForSearchData.toDate = this.validateToDateIdValue;
                this.lrDtoForSearchData.source = this.validateSourceStationIdValue;
                this.lrDtoForSearchData.destination = this.validateDestinationStationIdValue;
                this.lrDtoForSearchData.mode = null;
                this.setDateWiseAndStationWiseDataDetailsForReport(this.lrDtoForSearchData);
            }
        }
        //Main Bkg SrcWise validation
        else if ($("#searchBy").val() == "mainBkgSrcWise") {
            if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                ($("#fromDates").val() == "") || ($("#toDate").val() == null) ||
                ($("#toDate").val() == undefined) || ($("#toDate").val() == "") ||
                ($("#mainBookingSourceId").val() == null) || ($("#mainBookingSourceId").val() == undefined) ||
                ($("#mainBookingSourceId").val() == "") || ($("#destinationId").val() == null) ||
                ($("#destinationId").val() == undefined) || ($("#destinationId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()(" Mandatory Field", "From Date,To date,Source And Destination Are Mandatory Fields", "warning");
                return false;
            }
            else {
                this.validateFromDateIdValue = $("#fromDates").val();
                this.validateToDateIdValue = $("#toDate").val();
                this.validateMainSourceBkgStationIdValue = $("#mainBookingSourceId").val();
                this.validateDestinationStationIdValue = $("#destinationId").val();
                this.lrDtoForSearchData.fromDate = this.validateFromDateIdValue;
                this.lrDtoForSearchData.toDate = this.validateToDateIdValue;
                this.lrDtoForSearchData.source = this.validateMainSourceBkgStationIdValue;
                this.lrDtoForSearchData.destination = this.validateDestinationStationIdValue;
                this.lrDtoForSearchData.mode = "mainBkgSrc";
                this.setDateWiseAndStationWiseDataDetailsForReport(this.lrDtoForSearchData);
                // console.log(this.lrDtoForSearchData);
            }
        }
        //Consolidate validation
        else if ($("#searchBy").val() == "consolidatedInvoice") {
            if (($("#invoiceNumberId").val() == null) || ($("#invoiceNumberId").val() == undefined) ||
                ($("#invoiceNumberId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()(" Mandatory Field", "Invoice Number Is Mandatory Field", "warning");
                return false;
            }
            else {
                this.validateInvoiceNumberIdValue = $("#invoiceNumberId").val();
                this.lrDtoForSearchData.invoiceNumber = this.validateInvoiceNumberIdValue;
                this.lrDtoForSearchData.fromStation = this.userDataDtoReturnSession.mainStation;
                this.lrDtoForSearchData.toStation = this.userDataDtoReturnSession.mainStation;
                //if(this.rightsForSuperAdministrator == "Super Administrator"){
                if (this.userDataDtoReturnSession.role == "Rights For Invoice Details Rpt Super Administrator") {
                    this.lrDtoForSearchData.reportMode = "SuperAdmin";
                }
                else {
                    this.lrDtoForSearchData.reportMode = "";
                }
                //Method Call HERE
            }
        }
        //Main Invoice validation
        else if ($("#searchBy").val() == "mainInvoice") {
            if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                ($("#fromDates").val() == "") || ($("#toDate").val() == null) ||
                ($("#toDate").val() == undefined) || ($("#toDate").val() == "") ||
                ($("#destinationId").val() == null) || ($("#destinationId").val() == undefined) ||
                ($("#destinationId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()(" Mandatory Field", "From Date,To Date And Destination Are Mandatory Fields", "warning");
                return false;
            }
            else {
                this.lrDtoForSearchData.adminReport = "invoice";
                this.validateFromDateIdValue = $("#fromDates").val();
                this.validateToDateIdValue = $("#toDate").val();
                this.validateDestinationStationIdValue = $("#destinationId").val();
                this.validateViaSourceStationIdValue = $("#viaSourceId").val();
                this.lrDtoForSearchData.fromDate = this.validateFromDateIdValue;
                this.lrDtoForSearchData.toDate = this.validateToDateIdValue;
                this.lrDtoForSearchData.destination = this.validateDestinationStationIdValue;
                if (this.validateDestinationStationIdValue != null &&
                    this.validateDestinationStationIdValue == "All") {
                    this.lrDtoForSearchData.mode = "mode2";
                }
                else {
                    this.lrDtoForSearchData.mode = "mode1";
                }
                this.lrDtoForSearchData.via = this.validateViaSourceStationIdValue;
                // if (this.rightsForBookingAdministrator == "Rights For Invoice Details Rpt Booking Administrator") {
                if (this.userDataDtoReturnSession.role == "Booking Administrator") {
                    this.lrDtoForSearchData.source = "bkgAdmin";
                    this.lrDtoForSearchData.list = this.userDataDtoReturnSession.stationList;
                }
                else {
                    this.lrDtoForSearchData.source = "supAdmin";
                }
                if ($("#searchMainInvoiceStationWiseBy").val() == "mainStation") {
                    this.lrDtoForSearchData.reportMode = "mainStation";
                    if (this.hideAndShowViaSourceField == true) {
                        //Method Call HERE
                    }
                    else {
                        //Method Call HERE
                    }
                }
                else if ($("#searchMainInvoiceStationWiseBy").val() == "subStation") {
                    this.lrDtoForSearchData.reportMode = "subStation";
                    if (this.hideAndShowViaSourceField == true) {
                        //Method Call HERE
                    }
                    else {
                        //Method Call HERE
                    }
                }
            }
        }
        //Invoice with Destination validation
        else if ($("#searchBy").val() == "invNoWithDestination") {
            if (($("#invoiceNumberId").val() == null) || ($("#invoiceNumberId").val() == undefined) ||
                ($("#invoiceNumberId").val() == "") || ($("#destinationId").val() == null) ||
                ($("#destinationId").val() == undefined) || ($("#destinationId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()(" Mandatory Field", "Invoice Number and destination are mandatory fieldss", "warning");
                return false;
            }
            else {
                this.validateInvoiceNumberIdValue = $("#invoiceNumberId").val();
                this.validateDestinationStationIdValue = $("#destinationId").val();
                this.lrDtoForSearchData.invoiceNumber = this.validateInvoiceNumberIdValue;
                this.lrDtoForSearchData.destination = this.validateDestinationStationIdValue;
                //Method Call HERE
            }
        }
    };
    /*
    rightsForSuperAdministrator = "Rights For Invoice Details Rpt Super Administrator";
    rightsForTransshipmentManager = "Rights For Invoice Details Rpt Transshipment Manager";
    rightsForBookingAdministrator = "Rights For Invoice Details Rpt Booking Administrator";
    rightsForBookingManager = "Rights For Invoice Details Rpt Booking Manager";
    rightsForBookingOffice = "Rights For Invoice Details Rpt Booking Office";
    rightsForAdministrator = "Rights For Invoice Details Rpt Administrator";
    rightsForDeliveryManager = "Rights For Invoice Details Rpt Delivery Manager";
    rightsForCollectionManager = "Rights For Invoice Details Rpt Collection Manager";
    rightsForDeliveryOfficer = "Rights For Invoice Details Rpt Delivery Office";
    rightsForBarcode = "Rights For Invoice Details Rpt Barcode";
    */
    //Invoice Number Search Flow 
    InvoiceDetailsComponent.prototype.setInvoiceNumberDataDetailsForReport = function (lrDtoForSearchData) {
        var _this = this;
        this.showSpinnerForAction = true;
        this.invoiceDetailsRpt.getInvoiceDetailsInvoiceNo(lrDtoForSearchData).subscribe(function (response) {
            console.log(response);
            _this.invoiceDetailsDataList = [];
            $("#invoiceDetailsTableId").DataTable().destroy();
            if (response.length == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "This Invoice number Does Not Exist", "warning");
            }
            else if (response[0].source != null &&
                response[0].source == _this.userDataDtoReturnSession.mainStation) {
                _this.invoiceDetailsDataList = response;
            }
            else if (response[0].destination != null &&
                (response[0].destination == _this.userDataDtoReturnSession.mainStation ||
                    response[0].destination == _this.userDataDtoReturnSession.office)) {
                _this.invoiceDetailsDataList = response;
            }
            else if ((response[0].source != null && response[0].destination != null) &&
                (response[0].source == _this.userDataDtoReturnSession.office ||
                    response[0].destination == _this.userDataDtoReturnSession.office)) {
                _this.invoiceDetailsDataList = response;
            }
            //else if (this.rightsForSuperAdministrator == "Rights For Invoice Details Rpt Super Administrator") {
            else if (_this.userDataDtoReturnSession.role == "Super Administrator") {
                _this.invoiceDetailsDataList = response;
            }
            // else if (this.rightsForBookingAdministrator == "Rights For Invoice Details Rpt Booking Administrator") {
            else if (_this.userDataDtoReturnSession.role == "Booking Administrator") {
                var isMatched = false;
                for (var i = 0; i < _this.userDataDtoReturnSession.stationList.length(); i++) {
                    if (response[0].source == _this.userDataDtoReturnSession.stationList[i]) {
                        isMatched = true;
                    }
                }
                if (isMatched == true) {
                    _this.invoiceDetailsDataList = response;
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "You Are Not Allowed To See This Invoice Number Details", "warning");
                    $("#invoiceNumberId").val('');
                }
            }
            else if (_this.isShowResult == true) {
                _this.invoiceDetailsDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "You Are Not Allowed To See This Invoice Number Details", "warning");
                $("#invoiceNumberId").val('');
            }
            _this.dtTriggerInvoiceDetails.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Ooops...Error In Getting Information For This Invoice Number", "info");
        },
            function () { return console.log('done'); };
    };
    InvoiceDetailsComponent.prototype.setDateWiseDataDetailsForReport = function (lrDtoForSearchData) {
        var _this = this;
        this.showSpinnerForAction = true;
        this.invoiceDetailsRpt.getInvoiceDetailsDateWise(lrDtoForSearchData).subscribe(function (response) {
            console.log(response);
            _this.invoiceDetailsDataList = [];
            $("#invoiceDetailsTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.invoiceDetailsDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "No Datas Found For This Information", "warning");
            }
            _this.dtTriggerInvoiceDetails.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Ooops...Error In Getting Information For This from date & to date report details", "info");
        },
            function () { return console.log('done'); };
    };
    InvoiceDetailsComponent.prototype.setSourceStationWiseDataDetailsForReport = function (lrDtoForSearchData) {
        var _this = this;
        this.showSpinnerForAction = true;
        this.invoiceDetailsRpt.getInvoiceDetailsSourceWise(lrDtoForSearchData).subscribe(function (response) {
            console.log(response);
            _this.invoiceDetailsDataList = [];
            $("#invoiceDetailsTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.invoiceDetailsDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "No Datas Found For This Information", "warning");
            }
            _this.dtTriggerInvoiceDetails.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Ooops...Error In Getting Information For This from date,to date & source report details", "info");
        },
            function () { return console.log('done'); };
    };
    InvoiceDetailsComponent.prototype.setDestinationOfMainStationDataDetailsForReport = function (lrDtoForSearchData) {
        var _this = this;
        this.showSpinnerForAction = true;
        this.invoiceDetailsRpt.getInvoiceDetailsDestinationWise(lrDtoForSearchData).subscribe(function (response) {
            console.log(response);
            _this.invoiceDetailsDataList = [];
            $("#invoiceDetailsTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.invoiceDetailsDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "No Datas Found For This Information", "warning");
            }
            _this.dtTriggerInvoiceDetails.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Ooops...Error In Getting Information For This from date,to date & destination report details", "info");
        },
            function () { return console.log('done'); };
    };
    InvoiceDetailsComponent.prototype.setDestinationOfSubStationDataDetailsForReport = function (lrDtoForSearchData) {
        var _this = this;
        this.showSpinnerForAction = true;
        this.invoiceDetailsRpt.getInvoiceDetailsDestinationWiseSubStation(lrDtoForSearchData).subscribe(function (response) {
            console.log(response);
            _this.destSubStationDataList = [];
            $("#invoiceDetailsDestSubStationTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.destSubStationDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "No Datas Found For This Information", "warning");
            }
            _this.dtTriggerDestSubStation.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Ooops...Error In Getting Information For This from date,to date & destination report details", "info");
        },
            function () { return console.log('done'); };
    };
    InvoiceDetailsComponent.prototype.setDateWiseAndStationWiseDataDetailsForReport = function (lrDtoForSearchData) {
        var _this = this;
        this.showSpinnerForAction = true;
        this.invoiceDetailsRpt.getInvoiceDetailsDateStation(lrDtoForSearchData).subscribe(function (response) {
            console.log(response);
            _this.invoiceDetailsDataList = [];
            $("#invoiceDetailsTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.invoiceDetailsDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "No Datas Found For This Information", "warning");
            }
            _this.dtTriggerInvoiceDetails.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Ooops...Error In Getting Information For This from date & to date report details", "info");
        },
            function () { return console.log('done'); };
    };
    InvoiceDetailsComponent.prototype.getDismissReason = function (reason) {
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
    InvoiceDetailsComponent.prototype.invoiceDetailsRptPopUpBtnLink = function (invoiceDetailsLrsSummaryPopUpTemplate, invoiceDetailsData) {
        var _this = this;
        this.modalRefferenceInvoiceDetailsPopUp = this.modalService.open(invoiceDetailsLrsSummaryPopUpTemplate, {
            centered: true,
            // size: "lg" });
            windowClass: "myCustomModalClass"
        });
        this.modalRefferenceInvoiceDetailsPopUp.result.then(function (result) {
            _this.modalRefferenceInvoiceDetailsClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceInvoiceDetailsClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
        this.lrDtoForLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.fromDateForLocalStorage = null;
        this.toDateForLocalStorage = null;
        this.searchByModeForLocalStorage = null;
        this.fromDateForLocalStorage = $("#fromDates").val();
        this.toDateForLocalStorage = $("#toDate").val();
        this.searchByModeForLocalStorage = $("#searchBy").val();
        this.lrDtoForLocalStorage.invoiceNumber = invoiceDetailsData.invoiceNumber;
        this.lrDtoForLocalStorage.fromDate = this.fromDateForLocalStorage;
        this.lrDtoForLocalStorage.toDate = this.toDateForLocalStorage;
        this.lrDtoForLocalStorage.mode = this.searchByModeForLocalStorage;
        this.lrDtoForLocalStorage.vehicleNumber = invoiceDetailsData.vehicleNumber;
        this.lrDtoForLocalStorage.source = invoiceDetailsData.source;
        this.lrDtoForLocalStorage.destination = invoiceDetailsData.destination;
        this.lrDtoForLocalStorage.loaderName = invoiceDetailsData.loaderName;
        this.lrDtoForLocalStorage.invoiceDateStr = invoiceDetailsData.invoiceDateStr;
        localStorage.clear();
        localStorage.setItem('invoiceDetailsRptLrsDetailsPopUpTemplate', JSON.stringify(this.lrDtoForLocalStorage));
        this.viewInvoiceDetailsLrsSummaryRptPopUp = true;
        window.addEventListener('afterPopUp', function (event) {
            _this.viewInvoiceDetailsLrsSummaryRptPopUp = false;
        });
    };
    InvoiceDetailsComponent.prototype.closeInvoiceDetailsRptPopUp = function () {
        this.modalRefferenceInvoiceDetailsPopUp.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], InvoiceDetailsComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('invoiceDetailsLrsSummaryPopUpTemplate'),
        __metadata("design:type", Object)
    ], InvoiceDetailsComponent.prototype, "invoiceDetailsLrsSummaryPopUpTemplate", void 0);
    InvoiceDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-details',
            template: __webpack_require__(/*! ./invoice-details.component.html */ "./src/app/report/hireslip-and-invoice-report/invoice-details/invoice-details.component.html"),
            styles: [__webpack_require__(/*! ./invoice-details.component.css */ "./src/app/report/hireslip-and-invoice-report/invoice-details/invoice-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_invoice__WEBPACK_IMPORTED_MODULE_15__["Invoice"],
            src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], InvoiceDetailsComponent);
    return InvoiceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet-lr-details/local-trip-sheet-lr-details.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/local-trip-sheet-lr-details/local-trip-sheet-lr-details.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\n/* the below code we add to view the option in popup modal starts  for truck master*/\r\n\r\n::ng-deep .cdk-overlay-container {\r\n\t/* Do you changes here */\r\n\tposition: fixed;\r\n\tz-index: 9999;\r\n}\r\n\r\n::ng-deep .cdk-overlay-pane {\r\n\tz-index: 9999;\r\n}\r\n\r\n::ng-deep .myCustomModalClass\t.modal-dialog {\r\n\tmax-width: auto;\r\n}\r\n\r\n/* the below code we add to view the option in popup modal ends truck master*/\r\n\r\n/* the below code we add to view the option in popup modal starts  for truck master*/\r\n\r\n::ng-deep .modalClassForPopUpLocalTripSheet\t.modal-dialog {\r\n\tmax-width: 100%;\r\n}\r\n\r\n/* the below code we add to view the option in popup modal ends truck master*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9sb2NhbC10cmlwLXNoZWV0LWxyLWRldGFpbHMvbG9jYWwtdHJpcC1zaGVldC1sci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQscUZBQXFGOztBQUNyRjtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkOztBQUVEO0NBQ0MsY0FBYztDQUNkOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUNELDhFQUE4RTs7QUFFOUUscUZBQXFGOztBQUVyRjtDQUNDLGdCQUFnQjtDQUNoQjs7QUFDRCw4RUFBOEUiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvaGlyZXNsaXAtYW5kLWludm9pY2UtcmVwb3J0L2xvY2FsLXRyaXAtc2hlZXQtbHItZGV0YWlscy9sb2NhbC10cmlwLXNoZWV0LWxyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcclxuXHR0b3A6IDI2cHg7XHJcbiAgICBsZWZ0OiAxODhweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLyogdGhlIGJlbG93IGNvZGUgd2UgYWRkIHRvIHZpZXcgdGhlIG9wdGlvbiBpbiBwb3B1cCBtb2RhbCBzdGFydHMgIGZvciB0cnVjayBtYXN0ZXIqL1xyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcblx0LyogRG8geW91IGNoYW5nZXMgaGVyZSAqL1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xyXG5cdHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubXlDdXN0b21Nb2RhbENsYXNzXHQubW9kYWwtZGlhbG9nIHtcclxuXHRtYXgtd2lkdGg6IGF1dG87XHJcbn1cclxuLyogdGhlIGJlbG93IGNvZGUgd2UgYWRkIHRvIHZpZXcgdGhlIG9wdGlvbiBpbiBwb3B1cCBtb2RhbCBlbmRzIHRydWNrIG1hc3RlciovXHJcblxyXG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIHN0YXJ0cyAgZm9yIHRydWNrIG1hc3RlciovXHJcblxyXG46Om5nLWRlZXAgLm1vZGFsQ2xhc3NGb3JQb3BVcExvY2FsVHJpcFNoZWV0XHQubW9kYWwtZGlhbG9nIHtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLyogdGhlIGJlbG93IGNvZGUgd2UgYWRkIHRvIHZpZXcgdGhlIG9wdGlvbiBpbiBwb3B1cCBtb2RhbCBlbmRzIHRydWNrIG1hc3RlciovIl19 */"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet-lr-details/local-trip-sheet-lr-details.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/local-trip-sheet-lr-details/local-trip-sheet-lr-details.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">DOOR DELIVERY - Trip Sheet Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\" >\n\t\t\t\t\t\t\t<table datatable id=\"localTripSheetLRPopUpTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTripSheetLRDetails\" [dtTrigger]=\"dtTriggerTripSheetLRDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR.NO</th>\n\t\t\t\t\t\t\t\t\t\t<th>MEMO NO</th>\n\t\t\t\t\t\t\t\t\t\t<th>SRC</th>\n\t\t\t\t\t\t\t\t\t\t<th>CONSIGNEE</th>\n\t\t\t\t\t\t\t\t\t\t<th>CONSIGNOR</th>\n\t\t\t\t\t\t\t\t\t\t<th>ART</th>\n\t\t\t\t\t\t\t\t\t\t<th>HAMALI GD</th>\n\t\t\t\t\t\t\t\t\t\t<th>HAMALI DD</th>\n\t\t\t\t\t\t\t\t\t\t<th>ACT.WGT</th>\n\t\t\t\t\t\t\t\t\t\t<th>CHG.WGT</th>\n\t\t\t\t\t\t\t\t\t\t<th>BKNG DATE</th>\n\t\t\t\t\t\t\t\t\t\t<th>LDNG DATE</th>\n\t\t\t\t\t\t\t\t\t\t<th>UNLDNG DATE</th>\n\t\t\t\t\t\t\t\t\t\t<th>DISP W.IN DAYS</th>\n\t\t\t\t\t\t\t\t\t\t<th>ARR W.IN DAYS</th>\n\t\t\t\t\t\t\t\t\t\t<th>DELV W.IN DAYS</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let localTripSheetLRRptData of localTripSheetLRRptDataList let i = index \">\n\t\t\t\t\t\t\t\t\t\t<td>{{localTripSheetLRRptData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetLRRptData.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{localTripSheetLRRptData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{localTripSheetLRRptData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{localTripSheetLRRptData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetLRRptData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{localTripSheetLRRptData.hamaliGD }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{localTripSheetLRRptData.hamaliDD }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetLRRptData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{localTripSheetLRRptData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetLRRptData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{localTripSheetLRRptData.loadingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetLRRptData.unloadingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{localTripSheetLRRptData.dispatchedwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetLRRptData.arrivalwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{localTripSheetLRRptData.deliveredwithin }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!--POP UP START HERE-->\n\t<!--<div class=\"col-md-12\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t<ng-template #localTripSheetPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t<h5>Memo Less Description :</h5>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"localTripSheetLRPopUpTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTripSheetLRDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerTripSheetLRDetails\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR.No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>CNSGNE NAME</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>CNSGNR NAME</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ART</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>HAMALI GD</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>AC. WT</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>CH. WT</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>BKNG DT</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LDNG DT</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>UNLDNG DT</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DISP W.IN</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ARR W.IN</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DELV W.IN</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let memoLessDescList of localTripSheetLRRptDataList let i = index \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{memoLessDescList.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"float: right;\" type=\"button\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"cancelBtnId\" >Cancel\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>-->\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet-lr-details/local-trip-sheet-lr-details.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/local-trip-sheet-lr-details/local-trip-sheet-lr-details.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: LocalTripSheetLrDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalTripSheetLrDetailsComponent", function() { return LocalTripSheetLrDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_TripSheet_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/TripSheet-dto */ "./src/app/dto/TripSheet-dto.ts");
/* harmony import */ var src_app_dataService_invoice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/invoice */ "./src/app/dataService/invoice.ts");
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

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends








var LocalTripSheetLrDetailsComponent = /** @class */ (function () {
    function LocalTripSheetLrDetailsComponent(localTripSheetRpt, router, masterReadService, invoice, modalService) {
        var _this = this;
        this.localTripSheetRpt = localTripSheetRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.invoice = invoice;
        this.modalService = modalService;
        this.dtTriggerTripSheetLRDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.tripSheetDtoLocalStorage = new src_app_dto_TripSheet_dto__WEBPACK_IMPORTED_MODULE_9__["TripSheetDto"]();
        this.lrDtoPopUp = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.vehicleName = null;
        this.vehicleNumber = null;
        this.driverName = null;
        this.tripDate = null;
        this.tripNumber = null;
        this.areaDelivery = null;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
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
            this.tripSheetDtoLocalStorage = JSON.parse(localStorage.getItem('popupLocalTripSheet'));
            localStorage.clear();
            this.getLocalTripSheetLRDetails(this.tripSheetDtoLocalStorage.id);
            console.log(this.tripSheetDtoLocalStorage);
            this.vehicleName = this.tripSheetDtoLocalStorage.transportName;
            this.vehicleNumber = this.tripSheetDtoLocalStorage.vehiclenumber;
            this.driverName = this.tripSheetDtoLocalStorage.drivername;
            this.tripDate = this.tripSheetDtoLocalStorage.tripDateStr;
            this.tripNumber = this.tripSheetDtoLocalStorage.tripNo;
            this.areaDelivery = this.tripSheetDtoLocalStorage.deliveryarea;
        }
    }
    LocalTripSheetLrDetailsComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    LocalTripSheetLrDetailsComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var vehicleNamePrint = this.vehicleName == null ? "NA" : this.vehicleName;
        var vehicleNumberPrint = this.vehicleNumber == null ? "NA" : this.vehicleNumber;
        var driverNamePrint = this.driverName == null ? "NA" : this.driverName;
        var tripDatePrint = this.tripDate == null ? "NA" : this.tripDate;
        var tripNumberPrint = this.tripNumber == null ? "NA" : this.tripNumber;
        var areaDeliveryPrint = this.areaDelivery == null ? "NA" : this.areaDelivery;
        this.dtOptionsTripSheetLRDetails = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Driver Copy</i>',
                    titleAttr: 'Driver Copy',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    exportOptions: {
                        columns: [0, 1, 3, 5, 6, 7, 8, 9, 12, 2, 14, 15]
                    },
                    messageTop: function () {
                        return "<br><table style='table-layout: fixed;width: 100%;'>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>AREA OF DELIVERY </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 15%;'>" +
                            "" + areaDeliveryPrint + "</td>" +
                            "<td style='word-wrap: break-word;width: 21%;'></td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>VEHICLE NAME</strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 15%;'>" +
                            " " + vehicleNamePrint + " </td>" +
                            "<td style='word-wrap: break-word;width: 21%;'></td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>TRIP DATE </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 15%;'>" +
                            " " + tripDatePrint + " </td>" +
                            "<td style='word-wrap: break-word;width: 21%;'></td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>VEHICLE NUMBER</strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 15%;'>" +
                            " " + vehicleNumberPrint + " </td>" +
                            "<td style='word-wrap: break-word;width: 21%;'></td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>TRIP NUMBER </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 15%;'>" +
                            "" + tripNumberPrint + " </td>" +
                            "<td style='word-wrap: break-word;width: 21%;'></td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>DRIVER NAME</strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 15%;'>" +
                            " " + driverNamePrint + " </td>" +
                            "<td style='word-wrap: break-word;width: 21%;'></td>" +
                            "</tr>" +
                            "</table>";
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
                        return "DOOR DELIVERY Trip Sheet Report ";
                    },
                }, {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Office Copy</i>',
                    titleAttr: 'Office Copy',
                    customize: function (win) {
                        $(win.document.body).css('font-size', '10pt');
                        $(win.document.body).find('th, td').
                            css('font-family', 'Arial, Helvetica, sans-serif')
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    exportOptions: {
                        columns: [0, 3, 5, 6, 7, 8, 9, 10, 11, 12, 2, 13, 14, 15]
                    },
                    messageTop: function () {
                        return "<br><table style='table-layout: fixed;width: 100%;'>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>AREA OF DELIVERY </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 15%;'>" +
                            "" + areaDeliveryPrint + "</td>" +
                            "<td style='word-wrap: break-word;width: 21%;'></td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>VEHICLE NAME</strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 15%;'>" +
                            " " + vehicleNamePrint + " </td>" +
                            "<td style='word-wrap: break-word;width: 21%;'></td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>TRIP DATE </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 15%;'>" +
                            " " + tripDatePrint + " </td>" +
                            "<td style='word-wrap: break-word;width: 21%;'></td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>VEHICLE NUMBER</strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 15%;'>" +
                            " " + vehicleNumberPrint + " </td>" +
                            "<td style='word-wrap: break-word;width: 21%;'></td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>TRIP NUMBER </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 15%;'>" +
                            "" + tripNumberPrint + " </td>" +
                            "<td style='word-wrap: break-word;width: 21%;'></td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>DRIVER NAME</strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 15%;'>" +
                            " " + driverNamePrint + " </td>" +
                            "<td style='word-wrap: break-word;width: 21%;'></td>" +
                            "</tr>" +
                            "</table>" +
                            "<br><table style='table-layout: fixed;width: 100%;'>" +
                            "<tr>" +
                            "<td align='center' style='word-wrap: break-word;width: 100%;'>" +
                            " <strong style='font-size:16px;'>**New Party</strong></td>" +
                            "</tr></table>";
                        /*return "<br><table style='table-layout: fixed;width: 100%;'>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>AREA OF DELIVERY </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            "" + areaDeliveryPrint + "</td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>VEHICLE NAME</strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            " " + vehicleNamePrint + " </td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>TRIP DATE </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            " " + tripDatePrint + " </td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>VEHICLE NUMBER</strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            " " + vehicleNumberPrint + " </td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>TRIP NUMBER </strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            "" + tripNumberPrint + " </td>" +
                            "<td style='word-wrap: break-word;width: 12%;'>" +
                            "<strong>DRIVER NAME</strong></td>" +
                            "<td style='word-wrap: break-word;width: 2%;'>" +
                            "<strong>:</strong></td>" +
                            "<td style='word-wrap: break-word;width: 36%;'>" +
                            " " + driverNamePrint + " </td>" +
                            "</tr>" +
                            "</table>" +
                            "<table style='table-layout: fixed;width: 100%;'>" +
                            "<tr>" +
                            "<td align='center' style='word-wrap: break-word;width: 100%;'>" +
                            " <strong style='font-size:16px;'>**New Party</strong></td>" +
                            "</tr></table>";*/
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
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return "DOOR DELIVERY Trip Sheet Report ";
                    }
                    /*exportOptions: {
                        columns: [0, 3, 5, 6, 7, 8, 9, 10, 11, 12, 2, 13, 14, 15]
                    }*/
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
                var article = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var hamaliGD = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var hamaliDD = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWgt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(5).footer()).html(article);
                $(api.column(6).footer()).html(hamaliGD);
                $(api.column(7).footer()).html(hamaliDD);
                $(api.column(8).footer()).html(actualWgt);
                $(api.column(9).footer()).html(chgWgt);
            }
        };
    };
    LocalTripSheetLrDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    LocalTripSheetLrDetailsComponent.prototype.ngAfterViewInit = function () {
        // this.dtTriggerTripSheetLRDetails.next();
    };
    LocalTripSheetLrDetailsComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerTripSheetLRDetails.unsubscribe();
        //this.onDestroyUnsubscribtionLocalTripSheetLRRpt.unsubscribe();
    };
    /*localTripSheetListner(localTripSheetPopUpTemplate, localTripSheetRptData) {
        this.modalRefferenceLocalTripSheetPopUp = this.modalService.open(localTripSheetPopUpTemplate,
            { centered: true, windowClass: "modalClassForPopUpLocalTripSheet" });
        this.modalRefferenceLocalTripSheetPopUp.result.then((result) => {
            this.modalRefferenceLocalTripSheetClosePopUp = `Closed with: ${result}`;
        }, reason => {
            this.modalRefferenceLocalTripSheetClosePopUp = `Dismissed ${this.getDismissReason(reason)}`;
        });
        console.log(localTripSheetRptData);
         if (localTripSheetRptData.id != null) {
             this.getLocalTripSheetLRDetails(localTripSheetRptData.id);
         }
}*/
    LocalTripSheetLrDetailsComponent.prototype.getLocalTripSheetLRDetails = function (gettingId) {
        var _this = this;
        this.lrDtoPopUp = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.lrDtoPopUp.id = gettingId;
        this.lrDtoPopUp.companyId = this.userDataDtoReturnSession.companyId;
        //console.log(this.lrDtoPopUp);
        this.showSpinnerForAction = true;
        this.invoice.getPopUpTripSheetDetails(this.lrDtoPopUp).subscribe(function (response) {
            console.log(response);
            _this.localTripSheetLRRptDataList = [];
            $("#localTripSheetLRPopUpTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.localTripSheetLRRptDataList = response;
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("No Data", "No Record Found for this search", "info");
            }
            _this.dtTriggerTripSheetLRDetails.next();
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Server Error", "Problem occur while getting local trip sheet of lr details", "error");
        },
            function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LocalTripSheetLrDetailsComponent.prototype, "dtElements", void 0);
    LocalTripSheetLrDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-local-trip-sheet-lr-details',
            template: __webpack_require__(/*! ./local-trip-sheet-lr-details.component.html */ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet-lr-details/local-trip-sheet-lr-details.component.html"),
            styles: [__webpack_require__(/*! ./local-trip-sheet-lr-details.component.css */ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet-lr-details/local-trip-sheet-lr-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__["MasterReadService"], src_app_dataService_invoice__WEBPACK_IMPORTED_MODULE_10__["Invoice"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], LocalTripSheetLrDetailsComponent);
    return LocalTripSheetLrDetailsComponent;
}());



/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet/local-trip-sheet.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/local-trip-sheet/local-trip-sheet.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\n/* the below code we add to view the option in popup modal starts  for truck master*/\r\n\r\n::ng-deep .cdk-overlay-container {\r\n\t/* Do you changes here */\r\n\tposition: fixed;\r\n\tz-index: 9999;\r\n}\r\n\r\n::ng-deep .cdk-overlay-pane {\r\n\tz-index: 9999;\r\n}\r\n\r\n::ng-deep .modalClassForPopUpLocalTripSheet\t.modal-dialog {\r\n\tmax-width: 90%;\r\n}\r\n\r\n/* the below code we add to view the option in popup modal ends truck master*/\r\n\r\n.pointer {cursor: pointer;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9sb2NhbC10cmlwLXNoZWV0L2xvY2FsLXRyaXAtc2hlZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFFRCxxRkFBcUY7O0FBQ3JGO0NBQ0MseUJBQXlCO0NBQ3pCLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBQ0QsOEVBQThFOztBQUM5RSxVQUFVLGdCQUFnQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9sb2NhbC10cmlwLXNoZWV0L2xvY2FsLXRyaXAtc2hlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcclxuXHR0b3A6IDI2cHg7XHJcbiAgICBsZWZ0OiAxODhweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLyogdGhlIGJlbG93IGNvZGUgd2UgYWRkIHRvIHZpZXcgdGhlIG9wdGlvbiBpbiBwb3B1cCBtb2RhbCBzdGFydHMgIGZvciB0cnVjayBtYXN0ZXIqL1xyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcblx0LyogRG8geW91IGNoYW5nZXMgaGVyZSAqL1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xyXG5cdHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWxDbGFzc0ZvclBvcFVwTG9jYWxUcmlwU2hlZXRcdC5tb2RhbC1kaWFsb2cge1xyXG5cdG1heC13aWR0aDogOTAlO1xyXG59XHJcbi8qIHRoZSBiZWxvdyBjb2RlIHdlIGFkZCB0byB2aWV3IHRoZSBvcHRpb24gaW4gcG9wdXAgbW9kYWwgZW5kcyB0cnVjayBtYXN0ZXIqL1xyXG4ucG9pbnRlciB7Y3Vyc29yOiBwb2ludGVyO30iXX0= */"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet/local-trip-sheet.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/local-trip-sheet/local-trip-sheet.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Local Trip Sheet Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"all\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"vehicleNumber\">Vehicle Number</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"area\">Area</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"party\">Party</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByVehicleNumber\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"vehicleNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Numeber</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #vehicleNumber id=\"vehicleNumberId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForVehicleNumber($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusVehicleNumberTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Vehicle Number... \" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByArea\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Area</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #areaName id=\"areaNameId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForAreaName($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelAreaName\" [ngbTypeahead]=\"searchAreaName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterAreaName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterAreaName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusAreaNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Area... \" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByParty\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Party</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #partyName id=\"consigneePartyNameId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForConsigneePartyName($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneePartyName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchConsigneePartyName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneePartyName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneePartyName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneePartyNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Party... \" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" id=\"fromDates\" name=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fromDatesModal\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\" [(ngModel)]=\"toDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateSearchBtn();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" (click)=\"clearBtn();\"\n\t\t\t\t\t\t\t\tid=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!localTripSheetRptTable\">\n\t\t\t\t\t\t\t<table datatable id=\"localTripSheetRptTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLocalTripSheetRpt\" [dtTrigger]=\"dtTriggerLocalTripSheetRpt\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Veh No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Trip Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Del Area</th>\n\t\t\t\t\t\t\t\t\t\t<th>LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Driver Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hamali</th>\n\t\t\t\t\t\t\t\t\t\t<th>Office</th>\n\t\t\t\t\t\t\t\t\t\t<th>Id</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hamalis Name</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let localTripSheetRptData of localTripSheetRptDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"localTripSheetListner\n\t\t\t\t\t\t\t\t\t\t\t(localTripSheetPopUpTemplate,localTripSheetRptData);\" class=\"pointer\">\n\t\t\t\t\t\t\t\t\t\t\t\t<u>{{ localTripSheetRptData.vehiclenumber }}</u></a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptData.tripDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptData.deliveryarea }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptData.totallrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptData.totalarticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptData.actWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptData.chgWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptData.drivername }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptData.totalamount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptData.ddAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptData.office }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptData.id }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"localTripSheetHamaliNameListner\n\t\t\t\t\t\t\t\t\t\t\t\t(localTripSheetHamalisNamePopUpTemplate,localTripSheetRptData);\" class=\"pointer\">\n\t\t\t\t\t\t\t\t\t\t\t\t<u>View</u></a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"! localTripSheetRptByPartyTable\">\n\t\t\t\t\t\t\t<table datatable id=\"localTripSheetRptByPartyTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionLocalTripSheetRptByParty\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLocalTripSheetRptByParty\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Trip Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Vehicle No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>L.R.NO</th>\n\t\t\t\t\t\t\t\t\t\t<th>CNSGR NAME</th>\n\t\t\t\t\t\t\t\t\t\t<th>ART</th>\n\t\t\t\t\t\t\t\t\t\t<th>HAM GD</th>\n\t\t\t\t\t\t\t\t\t\t<th>ACT WT</th>\n\t\t\t\t\t\t\t\t\t\t<th>CHG WT</th>\n\t\t\t\t\t\t\t\t\t\t<th>BKNG DT</th>\n\t\t\t\t\t\t\t\t\t\t<th>UNLDNG DT</th>\n\t\t\t\t\t\t\t\t\t\t<th>ARR</th>\n\t\t\t\t\t\t\t\t\t\t<th>DELV</th>\n\t\t\t\t\t\t\t\t\t\t<th>Driver Name</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let localTripSheetRptByPartyData of localTripSheetRptByPartyDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.tripDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"localTripSheetListner\n\t\t\t\t\t\t\t\t\t\t\t\t(localTripSheetPopUpTemplate,localTripSheetRptByPartyData);\" class=\"pointer\">\n\t\t\t\t\t\t\t\t\t\t\t\t<u>{{ localTripSheetRptByPartyData.vehiclenumber }}</u></a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.totalarticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.hamaliGD }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.actWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.chgWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.unloadingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.arrivalwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.deliveredwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ localTripSheetRptByPartyData.drivername }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!--POP UP START HERE-->\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<ng-template #localTripSheetPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<!--<div class=\"modal-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>-->\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewLocalTripSheetLrDetailsPopUp\" onafterPopUp=\"afterPopUp()\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"popupLocalTripSheet\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-local-trip-sheet-lr-details></app-local-trip-sheet-lr-details>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t<button style=\"float: center;\" type=\"button\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"closePopUpBtn();\" id=\"cancelBtnId\">Cancel\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<ng-template #localTripSheetHamalisNamePopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-card *ngFor=\"let hamali of labourHamaliNamesList\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{hamali.hamaliNames}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t\t\t\t\t\t\t</mat-card>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandled()\">Close</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet/local-trip-sheet.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/local-trip-sheet/local-trip-sheet.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: LocalTripSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalTripSheetComponent", function() { return LocalTripSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dto/TruckData-dto */ "./src/app/dto/TruckData-dto.ts");
/* harmony import */ var src_app_dto_TripSheet_dto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dto/TripSheet-dto */ "./src/app/dto/TripSheet-dto.ts");
/* harmony import */ var src_app_dataService_invoice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dataService/invoice */ "./src/app/dataService/invoice.ts");
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

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends














var LocalTripSheetComponent = /** @class */ (function () {
    function LocalTripSheetComponent(localTripSheetRpt, router, masterReadService, invoice, modalService) {
        var _this = this;
        this.localTripSheetRpt = localTripSheetRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.invoice = invoice;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.searchByVehicleNumber = false;
        this.searchByArea = false;
        this.searchByParty = false;
        this.dtTriggerLocalTripSheetRpt = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerLocalTripSheetRptByParty = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // dtOptionsTripSheetLRDetails: any;
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.lrDtoBranchArea = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
        this.lrDtoBranchAreaAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
        this.areaNameTA = [];
        this.focusAreaNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchAreaName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusAreaNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (term) { return (term === '' ? _this.areaNameTA
                : _this.areaNameTA.filter(function (v) { return v.godownName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterAreaName = function (x) { return x.godownName; };
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_8__["PartyMasterDto"]();
        this.consigneePartyNameTA = [];
        this.focusConsigneePartyNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchConsigneePartyName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneePartyNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (term) { return (term === '' ? _this.consigneePartyNameTA
                : _this.consigneePartyNameTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneePartyName = function (x) { return x.consigneeName; };
        this.truckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_14__["TruckDataDto"]();
        this.vehicleNumberTA = [];
        this.focusVehicleNumberTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchVehicleNumber = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusVehicleNumberTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (term) { return (term === '' ? _this.vehicleNumberTA
                : _this.vehicleNumberTA.filter(function (v) { return v.truckNumber.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterVehicleNumber = function (x) { return x.truckNumber; };
        this.fromDatesModal = null;
        this.toDatesModal = null;
        //lrDto: LRDto = new LRDto();
        this.tripDto = new src_app_dto_TripSheet_dto__WEBPACK_IMPORTED_MODULE_15__["TripSheetDto"]();
        this.lrDtoPopUp = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
        this.mode = null;
        this.localTripSheetRptByPartyTable = false;
        this.localTripSheetRptTable = false;
        this.validateAreaName = null;
        this.validateConsigneePartyName = null;
        this.validateConsigneePartyId = null;
        this.validateTruckNumber = null;
        this.validateTruckName = null;
        this.validateFromDate = null;
        this.validateToDate = null;
        this.viewLocalTripSheetLrDetailsPopUp = false;
        this.labourHamaliNamesDto = new src_app_dto_TripSheet_dto__WEBPACK_IMPORTED_MODULE_15__["TripSheetDto"]();
        this.getConsigneeDetails = function () {
            _this.showSpinnerForAction = true;
            _this.getConsigneeDetailsList();
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                if (response.length > 0) {
                    _this.consigneeNameOptions = response;
                    _this.consigneePartyNameTA = [];
                    for (var i = 0; i < _this.consigneeNameOptions.length; i++) {
                        _this.consigneePartyNameTA.push(_this.consigneeNameOptions[i]);
                    }
                    _this.showSpinnerForAction = false;
                }
                else {
                    _this.showSpinnerForAction = false;
                }
            }),
                function (error) {
                    _this.showSpinnerForAction = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Server Error", "Problem occur while getting party details", "error");
                },
                function () { return console.log('done'); };
        };
        this.getVehicleMasterList = function () {
            _this.showSpinnerForAction = true;
            _this.getVehicleDetailsForRead();
            _this.masterReadService.getVehicleSetupMaster(_this.truckDataDto).subscribe(function (response) {
                if (response.length > 0) {
                    _this.vehicleNumberTruckDtoOptions = response;
                    _this.vehicleNumberTA = [];
                    for (var i = 0; i < _this.vehicleNumberTruckDtoOptions.length; i++) {
                        _this.vehicleNumberTA.push(_this.vehicleNumberTruckDtoOptions[i]);
                    }
                    _this.showSpinnerForAction = false;
                }
                else {
                    _this.showSpinnerForAction = false;
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Server Error", "Problem occur while getting vehicle details", "error");
            },
                function () { return console.log('done'); };
        };
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
            this.getConsigneeDetails();
            this.getBranchAreaDetailsList();
            this.getVehicleMasterList();
            this.localTripSheetRptTable = true;
        }
    }
    LocalTripSheetComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    LocalTripSheetComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsLocalTripSheetRpt = {
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
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                            "<u>Local Trip Sheet Report</u><br><br>" +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + "" +
                            "</td>" +
                            "</tr></table><br>";
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
                    },
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    },
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return "Local Trip Sheet Report Report - " +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + "";
                    },
                    exportOptions: {
                        columns: ':visible'
                    },
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
            "scrollY": 310,
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
                var totalLrs = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totalArticle = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totalAmt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var hamaliAmt = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(3).footer()).html(totalLrs);
                $(api.column(4).footer()).html(totalArticle);
                $(api.column(5).footer()).html(actualWgt);
                $(api.column(6).footer()).html(chgWgt);
                $(api.column(8).footer()).html(totalAmt);
                $(api.column(9).footer()).html(hamaliAmt);
            },
        };
        this.dtOptionLocalTripSheetRptByParty = {
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
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                            "<u>Local Trip Sheet Report</u><br><br>" +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + "" +
                            "</td>" +
                            "</tr></table><br>";
                    },
                    title: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;width: 50%;'>" +
                            "<img src='assets/images/srdLogisticPrintLogo.png' alt='SRDLogo'>" +
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
                        return "Local Trip Sheet Report Report - " +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + "";
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
            "scrollY": 310,
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
                var article = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var hamaliGD = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWgt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(5).footer()).html(article);
                $(api.column(6).footer()).html(hamaliGD);
                $(api.column(7).footer()).html(actualWgt);
                $(api.column(8).footer()).html(chgWgt);
            },
        };
        /*this.dtOptionsTripSheetLRDetails = {
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
        }*/
    };
    LocalTripSheetComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    LocalTripSheetComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerLocalTripSheetRpt.next();
    };
    LocalTripSheetComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLocalTripSheetRpt.unsubscribe();
        this.dtTriggerLocalTripSheetRptByParty.unsubscribe();
        // this.dtTriggerTripSheetLRDetails.unsubscribe();
        //this.onDestroyUnsubscribtionLocalTripSheetRpt.unsubscribe();
        //this.onDestroyUnsubscribtionLocalTripSheetRptByParty.unsubscribe();
        //this.onDestroyUnsubscribtionLocalTripSheetLRRpt.unsubscribe();
    };
    //input field Hide and Show
    LocalTripSheetComponent.prototype.searchByMode = function (searchBy) {
        this.tripDto = new src_app_dto_TripSheet_dto__WEBPACK_IMPORTED_MODULE_15__["TripSheetDto"]();
        if (searchBy === 'all') {
            this.clearField();
            this.searchByVehicleNumber = false;
            this.searchByArea = false;
            this.searchByParty = false;
            this.localTripSheetRptTable = true;
            this.localTripSheetRptByPartyTable = false;
            this.localTripSheetRptDataList = [];
            $("#localTripSheetRptTableId").DataTable().destroy();
            this.dtTriggerLocalTripSheetRpt.next();
            this.tripDto.mode = "All";
            this.mode = this.tripDto.mode;
        }
        else if (searchBy === 'vehicleNumber') {
            this.clearField();
            this.searchByVehicleNumber = true;
            this.searchByArea = false;
            this.searchByParty = false;
            this.localTripSheetRptTable = true;
            this.localTripSheetRptByPartyTable = false;
            this.localTripSheetRptDataList = [];
            $("#localTripSheetRptTableId").DataTable().destroy();
            this.dtTriggerLocalTripSheetRpt.next();
            this.tripDto.mode = "vehicle";
            this.mode = this.tripDto.mode;
        }
        else if (searchBy === 'area') {
            this.clearField();
            this.searchByVehicleNumber = false;
            this.searchByArea = true;
            this.searchByParty = false;
            this.localTripSheetRptTable = true;
            this.localTripSheetRptByPartyTable = false;
            this.localTripSheetRptDataList = [];
            $("#localTripSheetRptTableId").DataTable().destroy();
            this.dtTriggerLocalTripSheetRpt.next();
            this.tripDto.mode = "area";
            this.mode = this.tripDto.mode;
        }
        else if (searchBy === 'party') {
            this.clearField();
            this.searchByVehicleNumber = false;
            this.searchByArea = false;
            this.searchByParty = true;
            this.localTripSheetRptTable = false;
            this.localTripSheetRptByPartyTable = true;
            this.localTripSheetRptByPartyDataList = [];
            $("#localTripSheetRptByPartyTableId").DataTable().destroy();
            this.dtTriggerLocalTripSheetRptByParty.next();
            this.tripDto.mode = "party";
            this.mode = this.tripDto.mode;
        }
        else {
            this.clearField();
            this.searchByVehicleNumber = false;
            this.searchByArea = false;
            this.searchByParty = false;
            this.tripDto.mode = "All";
            this.mode = this.tripDto.mode;
            this.localTripSheetRptTable = true;
            this.localTripSheetRptByPartyTable = false;
        }
    };
    LocalTripSheetComponent.prototype.clearBtn = function () {
        this.clearField();
        this.fromDatesModal = null;
        this.toDatesModal = null;
        $("#searchBy").val('all');
        this.searchByVehicleNumber = false;
        this.searchByArea = false;
        this.searchByParty = false;
        this.localTripSheetRptTable = true;
        this.localTripSheetRptByPartyTable = false;
        this.localTripSheetRptDataList = [];
        $("#localTripSheetRptTableId").DataTable().destroy();
        this.dtTriggerLocalTripSheetRpt.next();
        this.localTripSheetRptByPartyDataList = [];
        $("#localTripSheetRptByPartyTableId").DataTable().destroy();
        this.dtTriggerLocalTripSheetRptByParty.next();
        this.mode = "All";
    };
    LocalTripSheetComponent.prototype.clearField = function () {
        this.modelAreaName = null;
        this.modelConsigneePartyName = null;
        this.modelVehicleNumber = null;
        this.validateAreaName = null;
        this.validateConsigneePartyName = null;
        this.validateConsigneePartyId = null;
        this.validateTruckNumber = null;
        this.validateTruckName = null;
        this.validateFromDate = null;
        this.validateToDate = null;
        this.tripDto = new src_app_dto_TripSheet_dto__WEBPACK_IMPORTED_MODULE_15__["TripSheetDto"]();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    LocalTripSheetComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    LocalTripSheetComponent.prototype.clickListnerForAreaName = function (event) {
        this.modelAreaName = event.item;
        $("#areaNameId").val(this.modelAreaName.godownName);
        this.validateAreaName = this.modelAreaName.godownName;
    };
    LocalTripSheetComponent.prototype.clickListnerForConsigneePartyName = function (event) {
        this.modelConsigneePartyName = event.item;
        $("#consigneePartyNameId").val(this.modelConsigneePartyName.consigneeName);
        this.validateConsigneePartyName = this.modelConsigneePartyName.consigneeName;
        this.validateConsigneePartyId = this.modelConsigneePartyName.consigneeId;
    };
    LocalTripSheetComponent.prototype.clickListnerForVehicleNumber = function (event) {
        this.modelVehicleNumber = event.item;
        $("#vehicleNumberId").val(this.modelVehicleNumber.truckNumber);
        this.validateTruckNumber = this.modelVehicleNumber.truckNumber;
        this.validateTruckName = this.modelVehicleNumber.vehicleName;
    };
    LocalTripSheetComponent.prototype.getMethodForBranchArea = function () {
        this.lrDtoBranchArea = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_11__["LRDto"]();
        /* if(this.userDataDtoReturnSession.mainStation == "Chennai"){
          this.lrDtoBranchArea.mode = "Binnymills";
         }else{
          this.lrDtoBranchArea.mode = this.userDataDtoReturnSession.office;
         }*/
        this.lrDtoBranchArea.mode = this.userDataDtoReturnSession.office;
        this.lrDtoBranchArea.companyId = this.userDataDtoReturnSession.companyId;
    };
    LocalTripSheetComponent.prototype.getBranchAreaDetailsList = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getMethodForBranchArea();
        this.masterReadService.getBranchAreaDetailsService(this.lrDtoBranchArea).subscribe(function (response) {
            if (response.length > 0) {
                _this.areaOptions = response;
                _this.areaNameTA = [];
                for (var i = 0; i < _this.areaOptions.length; i++) {
                    _this.areaNameTA.push(_this.areaOptions[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                //swal("Server Error", "No record found of area details", "warning");
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Server Error", "Problem occur while getting Area Details", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    LocalTripSheetComponent.prototype.getConsigneeDetailsList = function () {
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_8__["PartyMasterDto"]();
        this.partyMasterDtoForconsignee.office = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.branch = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignee.mode = "specific";
    };
    LocalTripSheetComponent.prototype.getVehicleDetailsForRead = function () {
        this.truckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_14__["TruckDataDto"]();
        this.truckDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDto.office = this.userDataDtoReturnSession.mainStation;
        this.truckDataDto.isActive = true;
    };
    LocalTripSheetComponent.prototype.validateSearchBtn = function () {
        console.log($("#searchBy").val());
        if ($("#searchBy").val() != null && $("#searchBy").val() == "all") {
            if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
                ($("#toDates").val() == undefined) || ($("#toDates").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Fields", "From Date And ToDate are Mandatory Fields", "warning");
                return false;
            }
            else {
                this.setMode();
            }
        }
        else if ($("#searchBy").val() != null && $("#searchBy").val() == "vehicleNumber") {
            if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
                ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
                ($("#vehicleNumberId").val() == null) || ($("#vehicleNumberId").val() == undefined) ||
                ($("#vehicleNumberId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Fields", "From Date , To Date and Vehicle No are Mandatory Fields", "warning");
                return false;
            }
            else {
                this.setMode();
            }
        }
        else if ($("#searchBy").val() != null && $("#searchBy").val() == "area") {
            if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
                ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
                ($("#areaNameId").val() == null) || ($("#areaNameId").val() == undefined) ||
                ($("#areaNameId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Fields", "From Date , To Date and Area are Mandatory Fields", "warning");
                return false;
            }
            else {
                this.setMode();
            }
        }
        else if ($("#searchBy").val() != null && $("#searchBy").val() == "party") {
            if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
                ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
                ($("#consigneePartyNameId").val() == null) || ($("#consigneePartyNameId").val() == undefined) ||
                ($("#consigneePartyNameId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Fields", "From Date , To Date and Party are Mandatory Fields", "warning");
                return false;
            }
            else {
                this.setMode();
            }
        }
    };
    LocalTripSheetComponent.prototype.setMode = function () {
        if (this.mode != null && this.mode == "vehicle") {
            this.localTripSheetDetail();
        }
        else if (this.mode != null && this.mode == "area") {
            this.localTripSheetDetail();
        }
        else if (this.mode != null && this.mode == "party") {
            this.localTripSheetDetail();
        }
        else {
            this.tripDto.mode = "All";
            this.localTripSheetDetail();
        }
    };
    LocalTripSheetComponent.prototype.localTripSheetDetail = function () {
        var _this = this;
        this.validateFromDate = $("#fromDates").val();
        this.validateToDate = $("#toDates").val();
        this.tripDto.fromdate = this.validateFromDate;
        this.tripDto.todate = this.validateToDate;
        this.tripDto.fromDatePrint = this.validateFromDate;
        this.tripDto.toDatePrint = this.validateToDate;
        if ($("#vehicleNumberId").val() != null && $("#vehicleNumberId").val() != undefined &&
            $("#vehicleNumberId").val() != "") {
            this.tripDto.transportName = this.validateTruckName;
            this.tripDto.vehiclenumber = this.validateTruckNumber;
        }
        if ($("#areaNameId").val() != null && $("#areaNameId").val() != undefined &&
            $("#areaNameId").val() != "") {
            this.tripDto.area = this.validateAreaName;
        }
        if ($("#consigneePartyNameId").val() != null && $("#consigneePartyNameId").val() != undefined &&
            $("#consigneePartyNameId").val() != "") {
            this.tripDto.consigneeId = this.validateConsigneePartyId;
            this.tripDto.consigneeName = this.validateConsigneePartyName;
        }
        if ($("#searchBy").val() == "party") {
            this.tripDto.reportMode = "party";
        }
        else {
            this.tripDto.reportMode = "others";
        }
        this.tripDto.mainStation = this.userDataDtoReturnSession.mainStation;
        this.tripDto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.tripDto);
        this.showSpinnerForAction = true;
        this.invoice.getTripSheetDetails(this.tripDto).subscribe(function (response) {
            // console.log(response);
            if (response.length == 0) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("No Data", "No Record Found for this search", "info");
            }
            else {
                if ($("#searchBy").val() == "party") {
                    _this.localTripSheetRptByPartyDataList = [];
                    $("#localTripSheetRptByPartyTableId").DataTable().destroy();
                    _this.localTripSheetRptByPartyDataList = response;
                    _this.dtTriggerLocalTripSheetRptByParty.next();
                    _this.showSpinnerForAction = false;
                }
                else {
                    _this.localTripSheetRptDataList = [];
                    $("#localTripSheetRptTableId").DataTable().destroy();
                    _this.localTripSheetRptDataList = response;
                    _this.dtTriggerLocalTripSheetRpt.next();
                    _this.showSpinnerForAction = false;
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Server Error", "Problem occur while getting local trip sheet details", "error");
        },
            function () { return console.log('done'); };
    };
    LocalTripSheetComponent.prototype.getDismissReason = function (reason) {
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
    LocalTripSheetComponent.prototype.localTripSheetListner = function (localTripSheetPopUpTemplate, localTripSheetRptData) {
        var _this = this;
        this.modalRefferenceLocalTripSheetPopUp = this.modalService.open(localTripSheetPopUpTemplate, { centered: true, windowClass: "modalClassForPopUpLocalTripSheet" });
        this.modalRefferenceLocalTripSheetPopUp.result.then(function (result) {
            _this.modalRefferenceLocalTripSheetClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceLocalTripSheetClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
        // console.log(localTripSheetRptData);
        localStorage.clear();
        localStorage.setItem('popupLocalTripSheet', JSON.stringify(localTripSheetRptData));
        this.viewLocalTripSheetLrDetailsPopUp = true;
        window.addEventListener('afterPopUp', function (event) {
            _this.viewLocalTripSheetLrDetailsPopUp = false;
        });
    };
    LocalTripSheetComponent.prototype.closePopUpBtn = function () {
        this.modalRefferenceLocalTripSheetPopUp.close();
    };
    LocalTripSheetComponent.prototype.localTripSheetHamaliNameListner = function (localTripSheetHamalisNamePopUpTemplate, localTripSheetRptData) {
        var _this = this;
        this.modalRefferenceLocalTripSheetHamaliNamePopUp = this.modalService.open(localTripSheetHamalisNamePopUpTemplate, { centered: true, size: 'sm' });
        this.modalRefferenceLocalTripSheetHamaliNamePopUp.result.then(function (result) {
            _this.modalRefferenceLocalTripSheetHamaliNameClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceLocalTripSheetHamaliNameClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
        if (localTripSheetRptData.hamaliNames != null) {
            var hamaliNamesSplit = localTripSheetRptData.hamaliNames.split(",");
            this.labourHamaliNamesList = [];
            for (var i = 0; i < hamaliNamesSplit.length; i++) {
                this.labourHamaliNamesDto = new src_app_dto_TripSheet_dto__WEBPACK_IMPORTED_MODULE_15__["TripSheetDto"]();
                this.labourHamaliNamesDto.hamaliNames = hamaliNamesSplit[i];
                this.labourHamaliNamesList.push(this.labourHamaliNamesDto);
            }
            //console.log(this.labourHamaliNamesList);
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Empty Result", "No Hamalis Name Available To Show", "info");
        }
    };
    LocalTripSheetComponent.prototype.onCloseHandled = function () {
        this.modalRefferenceLocalTripSheetHamaliNamePopUp.close();
        this.labourHamaliNamesList = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LocalTripSheetComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('localTripSheetPopUpTemplate'),
        __metadata("design:type", Object)
    ], LocalTripSheetComponent.prototype, "localTripSheetPopUpTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('localTripSheetHamalisNamePopUpTemplate'),
        __metadata("design:type", Object)
    ], LocalTripSheetComponent.prototype, "localTripSheetHamalisNamePopUpTemplate", void 0);
    LocalTripSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-local-trip-sheet',
            template: __webpack_require__(/*! ./local-trip-sheet.component.html */ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet/local-trip-sheet.component.html"),
            styles: [__webpack_require__(/*! ./local-trip-sheet.component.css */ "./src/app/report/hireslip-and-invoice-report/local-trip-sheet/local-trip-sheet.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__["MasterReadService"], src_app_dataService_invoice__WEBPACK_IMPORTED_MODULE_16__["Invoice"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], LocalTripSheetComponent);
    return LocalTripSheetComponent;
}());



/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/service-tax-report/service-tax-report.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/service-tax-report/service-tax-report.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9zZXJ2aWNlLXRheC1yZXBvcnQvc2VydmljZS10YXgtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCOztBQUVEO0NBQ0MsVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L2hpcmVzbGlwLWFuZC1pbnZvaWNlLXJlcG9ydC9zZXJ2aWNlLXRheC1yZXBvcnQvc2VydmljZS10YXgtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcblx0dG9wOiAyNnB4O1xuICAgIGxlZnQ6IDE4OHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/service-tax-report/service-tax-report.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/service-tax-report/service-tax-report.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Service Tax Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"bookingServiceTaxReport\">Booking\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tService Tax Report</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"destinationServiceTaxReport\">Destination\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tService Tax Report</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"subStationDetailsReport\">SubStation\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails Report</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" id=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fromDatesModal\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\" [(ngModel)]=\"toDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destinationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestination($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination..\" />\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"consigneeDropDownListner($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateSearchBtn();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateClearBtn();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<h6 [hidden]=\"!hideshowBkgServiceTaxDefaultRptTable\">\n\t\t\t\t\t\t\tBooking Service Tax Report\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 [hidden]=\"!hideshowDestinationServiceTaxRptTable\">\n\t\t\t\t\t\t\tDestination Service Tax Report\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 [hidden]=\"!hideshowSubStationServiceTaxRptTable\">\n\t\t\t\t\t\t\tSubStation Details Report\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideshowBkgServiceTaxDefaultRptTable\">\n\t\t\t\t\t\t\t<table datatable id=\"bookingServiceTaxDefaultRptTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsBookingServiceTaxDefault\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerBookingServiceTaxDefault\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Distination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Art No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hamali Charge</th>\n\t\t\t\t\t\t\t\t\t\t<th>RC</th>\n\t\t\t\t\t\t\t\t\t\t<th>SC</th>\n\t\t\t\t\t\t\t\t\t\t<th>Gross Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Discount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Net Pay</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let bookingServiceTaxDefaultData of bookingServiceTaxDefaultDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.invoiceDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.hamali }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.receiptCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.serviceCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.discountAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bookingServiceTaxDefaultData.grandTotal }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideshowDestinationServiceTaxRptTable\">\n\t\t\t\t\t\t\t<table datatable id=\"destinationServiceTaxRptTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionDestinationServiceTax\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDestinationServiceTax\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay Amt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid Amt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let destinationServiceTaxData of destinationServiceTaxDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationServiceTaxData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationServiceTaxData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationServiceTaxData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationServiceTaxData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationServiceTaxData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationServiceTaxData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationServiceTaxData.invoiceDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationServiceTaxData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationServiceTaxData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationServiceTaxData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationServiceTaxData.paid }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideshowSubStationServiceTaxRptTable\">\n\t\t\t\t\t\t\t<table datatable id=\"subStationServiceTaxRptTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionSubStationServiceTax\" [dtTrigger]=\"dtTriggerSubStationServiceTax\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Station</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay Amt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid Amt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let subStationServiceTaxData of subStationServiceTaxDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ subStationServiceTaxData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ subStationServiceTaxData.deliveryPoints }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ subStationServiceTaxData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ subStationServiceTaxData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ subStationServiceTaxData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ subStationServiceTaxData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ subStationServiceTaxData.invoiceDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ subStationServiceTaxData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ subStationServiceTaxData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ subStationServiceTaxData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ subStationServiceTaxData.paid }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/service-tax-report/service-tax-report.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/service-tax-report/service-tax-report.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ServiceTaxReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTaxReportComponent", function() { return ServiceTaxReportComponent; });
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
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
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













var ServiceTaxReportComponent = /** @class */ (function () {
    function ServiceTaxReportComponent(memoLessRpt, router, masterReadService, memoReport, modalService, lrReportService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        this.lrReportService = lrReportService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.viewTypeSummary = true;
        this.viewTypeDetail = false;
        this.dtTriggerBookingServiceTaxDefault = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerDestinationServiceTax = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerSubStationServiceTax = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        //Datatable End 
        this.isLoggedIn = true;
        this.address = null;
        this.lrDtoDestinationAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_15__["PartyMasterDto"]();
        this.consigneeNamePartyDtoAllOption = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_15__["PartyMasterDto"]();
        this.consigneeNameTA = [];
        this.focusConsigneeNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.consigneeNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.consigneeNameTA
                : _this.consigneeNameTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeName = function (x) { return x.consigneeName; };
        this.showSpinnerForAction = false;
        this.hideshowBkgServiceTaxDefaultRptTable = false;
        this.hideshowDestinationServiceTaxRptTable = false;
        this.hideshowSubStationServiceTaxRptTable = false;
        this.toDatesModal = null;
        this.fromDatesModal = null;
        this.validateDestinationValue = null;
        this.validateConsigneeNameValue = null;
        this.validateConsigneeNameValueId = null;
        this.validateFromDateValue = null;
        this.valiateToDateValue = null;
        this.lrDtoForBookingServiceTax = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoForDestinationServiceTax = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoForSubStationServiceTax = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.getConsigneeDetails = function () {
            _this.getConsigneeDetailsList();
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Warning",
                        text: "No Consignee Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.consigneeNameOptions = [];
                    _this.consigneeNameTA = [];
                }
                else {
                    _this.consigneeNameOptions = [];
                    _this.consigneeNameTA = [];
                    _this.consigneeNameOptions = response;
                    _this.consigneeNamePartyDtoAllOption = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_15__["PartyMasterDto"]();
                    _this.consigneeNamePartyDtoAllOption.consigneeName = "All";
                    _this.consigneeNameTA.push(_this.consigneeNamePartyDtoAllOption);
                    for (var i = 0; i < _this.consigneeNameOptions.length; i++) {
                        _this.consigneeNameTA.push(_this.consigneeNameOptions[i]);
                    }
                    $("#consigneeName").val('All');
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the consignee details", "info");
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
            this.hideshowBkgServiceTaxDefaultRptTable = true;
            //this.getConsigneeDetails();
            this.getDestinationDetails();
        }
    }
    ServiceTaxReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    ServiceTaxReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsBookingServiceTaxDefault = {
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
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        return "<br><table style='width: 100%;'>" +
                            "<tr>" +
                            "<td style='width: 20%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                            "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Consignee</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + $("#consigneeName").val() + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Destination</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + $("#destinationId").val() + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='3'style='width:60%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:25px;'><u>Booking Chargeable / Unchargeable Service Tax</u></strong><br>" +
                            "</td>" +
                            "<td rowspan='3' align='left' style='width:20%;'>" +
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
                    },
                    exportOptions: {
                        columns: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return " Booking Chargeable / Unchargeable Service Tax -" +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + " - " +
                            "Consignee : " + $("#consigneeName").val() + " - " +
                            "Destination : " + $("#destinationId").val() + "";
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
                var article = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var hamaliChg = api.column(11).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var receiptChg = api.column(12).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var serviceChg = api.column(13).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var grossPay = api.column(14).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var disc = api.column(15).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var netPay = api.column(16).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(3).footer()).html(article);
                $(api.column(7).footer()).html(actWgt);
                $(api.column(8).footer()).html(chgWt);
                $(api.column(9).footer()).html(toPay);
                $(api.column(10).footer()).html(paid);
                $(api.column(11).footer()).html(hamaliChg);
                $(api.column(12).footer()).html(receiptChg);
                $(api.column(13).footer()).html(serviceChg);
                $(api.column(14).footer()).html(grossPay);
                $(api.column(15).footer()).html(disc.toFixed(2));
                $(api.column(16).footer()).html(netPay.toFixed(2));
            }
        }, this.dtOptionDestinationServiceTax = {
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
                            .css('font-size', '12px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        return "<br><table style='width: 100%;'>" +
                            "<tr>" +
                            "<td style='width: 20%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                            "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Consignee</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + $("#consigneeName").val() + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Destination</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + $("#destinationId").val() + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='3'style='width:60%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:25px;'><u>Destination Chargeable / Unchargeable Service Tax</u></strong><br>" +
                            "</td>" +
                            "<td rowspan='3' align='left' style='width:20%;'>" +
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
                    },
                    exportOptions: {
                        columns: [0, 1, 3, 4, 5, 6, 9, 10, 7, 8]
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return " Destination Chargeable / Unchargeable Service Tax -" +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + " - " +
                            "Consignee : " + $("#consigneeName").val() + " - " +
                            "Destination : " + $("#destinationId").val() + "";
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
            processing: true,
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
                var article = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(3).footer()).html(article);
                $(api.column(7).footer()).html(actWt);
                $(api.column(8).footer()).html(chgWt);
                $(api.column(9).footer()).html(toPay);
                $(api.column(10).footer()).html(paid);
            }
        },
            this.dtOptionSubStationServiceTax = {
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
                                .css('font-size', '12px').css('text-align', 'center');
                        },
                        footer: true,
                        messageTop: function () {
                            return "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 20%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From Date&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Consignee</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#consigneeName").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Destination</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#destinationId").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='3'style='width:60%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:25px;'><u>" + $("#destinationId").val() + " - SubStation Details Report</u></strong><br>" +
                                "</td>" +
                                "<td rowspan='3' align='left' style='width:20%;'>" +
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
                        },
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
                        }
                    },
                    {
                        extend: 'excel',
                        text: '<i class="fas fa-file-excel"> Excel</i>',
                        titleAttr: 'Excel',
                        footer: true,
                        title: function () {
                            return " " +
                                "" + $("#destinationId").val() + " - Substation Details Report" +
                                " - Consignee : " + $("#consigneeName").val() + " - " +
                                " From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + "";
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
                processing: true,
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
                    var article = api.column(3).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actWt = api.column(7).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var chgWt = api.column(8).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var toPay = api.column(9).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var paid = api.column(10).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    // Update footer by showing the total with the reference of the column index 
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(3).footer()).html(article);
                    $(api.column(7).footer()).html(actWt);
                    $(api.column(8).footer()).html(chgWt);
                    $(api.column(9).footer()).html(toPay);
                    $(api.column(10).footer()).html(paid);
                }
            };
    };
    ServiceTaxReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerBookingServiceTaxDefault.next();
        //this.dtTriggerDetail.next();
    };
    ServiceTaxReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerBookingServiceTaxDefault.unsubscribe();
        this.dtTriggerDestinationServiceTax.unsubscribe();
        this.dtTriggerSubStationServiceTax.unsubscribe();
    };
    ServiceTaxReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ServiceTaxReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    ServiceTaxReportComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'bookingServiceTaxReport') {
            this.hideshowBkgServiceTaxDefaultRptTable = true;
            this.hideshowDestinationServiceTaxRptTable = false;
            this.hideshowSubStationServiceTaxRptTable = false;
            this.bookingServiceTaxDefaultDataList = [];
            $("#bookingServiceTaxDefaultRptTableId").DataTable().destroy();
            this.dtTriggerBookingServiceTaxDefault.next();
            this.destinationServiceTaxDataList = [];
            $("#destinationServiceTaxRptTableId").DataTable().destroy();
            this.subStationServiceTaxDataList = [];
            $("#subStationServiceTaxRptTableId").DataTable().destroy();
        }
        else if (viewType === 'destinationServiceTaxReport') {
            this.hideshowBkgServiceTaxDefaultRptTable = false;
            this.hideshowDestinationServiceTaxRptTable = true;
            this.hideshowSubStationServiceTaxRptTable = false;
            this.destinationServiceTaxDataList = [];
            $("#destinationServiceTaxRptTableId").DataTable().destroy();
            this.dtTriggerDestinationServiceTax.next();
            this.bookingServiceTaxDefaultDataList = [];
            $("#bookingServiceTaxDefaultRptTableId").DataTable().destroy();
            this.subStationServiceTaxDataList = [];
            $("#subStationServiceTaxRptTableId").DataTable().destroy();
            this.clearFields();
        }
        else if (viewType === 'subStationDetailsReport') {
            this.hideshowBkgServiceTaxDefaultRptTable = false;
            this.hideshowDestinationServiceTaxRptTable = false;
            this.hideshowSubStationServiceTaxRptTable = true;
            this.subStationServiceTaxDataList = [];
            $("#subStationServiceTaxRptTableId").DataTable().destroy();
            this.dtTriggerSubStationServiceTax.next();
            this.bookingServiceTaxDefaultDataList = [];
            $("#bookingServiceTaxDefaultRptTableId").DataTable().destroy();
            this.destinationServiceTaxDataList = [];
            $("#destinationServiceTaxRptTableId").DataTable().destroy();
            this.clearFields();
        }
    };
    ServiceTaxReportComponent.prototype.clickListnerForDestination = function (e, fubi) {
        this.modelDestination = e.item;
        $("#destinationId").val(this.modelDestination.destination);
        this.validateConsigneeNameValueId = null;
        if ($("#destinationId").val() != null && $("#destinationId").val() != undefined &&
            $("#destinationId").val() != "") {
            this.getConsigneeDetails();
        }
    };
    ServiceTaxReportComponent.prototype.consigneeDropDownListner = function (event) {
        this.modelConsigneeName = event.item;
        $("#consigneeName").val(event.item.consigneeName);
        this.validateConsigneeNameValue = event.item.consigneeName;
        this.validateConsigneeNameValueId = event.item.consigneeId;
    };
    ServiceTaxReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    ServiceTaxReportComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            if (response.length > 0) {
                _this.destinationTA = [];
                _this.destinationOptions = [];
                _this.destinationOptions = response;
                //this.lrDtoDestinationAllOption.destination = "All";
                //this.destinationTA.push(this.lrDtoDestinationAllOption);
                for (var i = 0; i < _this.destinationOptions.length; i++) {
                    _this.destinationTA.push(_this.destinationOptions[i]);
                }
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
    ServiceTaxReportComponent.prototype.getConsigneeDetailsList = function () {
        this.consigneeNameOptions = [];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_15__["PartyMasterDto"]();
        this.partyMasterDtoForconsignee.branch = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.companyId = this.userDataDtoReturnSession.companyId;
        //this.partyMasterDtoForconsignee.office = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.mode = "specific";
        this.validateDestinationValue = $("#destinationId").val();
        if (this.validateDestinationValue != null && this.validateDestinationValue != undefined &&
            this.validateDestinationValue != "") {
            this.partyMasterDtoForconsignee.office = this.validateDestinationValue;
        }
        /*else {
            this.partyMasterDtoForconsignee.office = this.userDataDtoReturnSession.mainStation;
        }*/
    };
    ServiceTaxReportComponent.prototype.validateClearBtn = function () {
        $("#viewType").val('bookingServiceTaxReport');
        this.hideshowBkgServiceTaxDefaultRptTable = true;
        this.hideshowDestinationServiceTaxRptTable = false;
        this.hideshowSubStationServiceTaxRptTable = false;
        this.destinationServiceTaxDataList = [];
        $("#destinationServiceTaxRptTableId").DataTable().destroy();
        this.subStationServiceTaxDataList = [];
        $("#bookingServiceTaxDefaultDataList").DataTable().destroy();
        this.bookingServiceTaxDefaultDataList = [];
        $("#bookingServiceTaxDefaultRptTableId").DataTable().destroy();
        this.dtTriggerBookingServiceTaxDefault.next();
        this.clearFields();
    };
    ServiceTaxReportComponent.prototype.clearFields = function () {
        this.modelDestination = null;
        this.modelConsigneeName = null;
        this.consigneeNamePartyDtoAllOption = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_15__["PartyMasterDto"]();
        this.consigneeNameOptions = [];
        this.consigneeNameTA = [];
        this.validateConsigneeNameValue = null;
        this.validateConsigneeNameValueId = null;
        this.validateFromDateValue = null;
        this.valiateToDateValue = null;
        this.toDatesModal = null;
        this.fromDatesModal = null;
        this.validateDestinationValue = null;
        $("#consigneeName").val('');
    };
    ServiceTaxReportComponent.prototype.validateSearchBtn = function () {
        if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
            ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
            ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
            ($("#destinationId").val() == null) || ($("#destinationId").val() == undefined) ||
            ($("#destinationId").val() == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Mandatory Fields", "From Date,To Date and Destination Are mandatory fields", "warning");
            return false;
        }
        else {
            if ($("#viewType").val() == "bookingServiceTaxReport") {
                this.setBookingServiceTaxReportDetails();
            }
            else if ($("#viewType").val() == "destinationServiceTaxReport") {
                this.setDestinationServiceTaxReportDetails();
            }
            else if ($("#viewType").val() == "subStationDetailsReport") {
                this.setSubStationServiceTaxReportDetails();
            }
        }
    };
    ServiceTaxReportComponent.prototype.getBookingServiceTaxReportData = function () {
        this.lrDtoForBookingServiceTax = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.validateFromDateValue = $("#fromDates").val();
        this.valiateToDateValue = $("#toDates").val();
        this.validateDestinationValue = $("#destinationId").val();
        this.validateConsigneeNameValue = $("#consigneeName").val();
        this.lrDtoForBookingServiceTax.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoForBookingServiceTax.fromDate = this.validateFromDateValue;
        this.lrDtoForBookingServiceTax.toDate = this.valiateToDateValue;
        this.lrDtoForBookingServiceTax.destination = this.validateDestinationValue;
        this.lrDtoForBookingServiceTax.consigneeName = this.validateConsigneeNameValue;
        if ($("#consigneeName").val() == null || $("#consigneeName").val() == undefined ||
            $("#consigneeName").val() == "" || $("#consigneeName").val() == "All") {
            this.lrDtoForBookingServiceTax.consigneeId = 0;
        }
        else {
            this.lrDtoForBookingServiceTax.consigneeId = this.validateConsigneeNameValueId;
        }
    };
    ServiceTaxReportComponent.prototype.setBookingServiceTaxReportDetails = function () {
        var _this = this;
        this.getBookingServiceTaxReportData();
        this.showSpinnerForAction = true;
        this.lrReportService.getBookingServiceTaxBookingReport(this.lrDtoForBookingServiceTax).subscribe(function (response) {
            console.log(response);
            _this.bookingServiceTaxDefaultDataList = [];
            $("#bookingServiceTaxDefaultRptTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.bookingServiceTaxDefaultDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "No datas found for this information", "warning");
            }
            _this.dtTriggerBookingServiceTaxDefault.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Booking Service Tax details", "info");
        }, function () { return console.log('done'); };
    };
    ServiceTaxReportComponent.prototype.getDestinationServiceTaxReportData = function () {
        this.lrDtoForDestinationServiceTax = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.validateFromDateValue = $("#fromDates").val();
        this.valiateToDateValue = $("#toDates").val();
        this.validateDestinationValue = $("#destinationId").val();
        this.validateConsigneeNameValue = $("#consigneeName").val();
        this.lrDtoForDestinationServiceTax.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoForDestinationServiceTax.fromDate = this.validateFromDateValue;
        this.lrDtoForDestinationServiceTax.toDate = this.valiateToDateValue;
        this.lrDtoForDestinationServiceTax.destination = this.validateDestinationValue;
        this.lrDtoForDestinationServiceTax.consigneeName = this.validateConsigneeNameValue;
        if ($("#consigneeName").val() == null || $("#consigneeName").val() == undefined ||
            $("#consigneeName").val() == "" || $("#consigneeName").val() == "All") {
            this.lrDtoForDestinationServiceTax.consigneeId = 0;
        }
        else {
            this.lrDtoForDestinationServiceTax.consigneeId = this.validateConsigneeNameValueId;
        }
    };
    ServiceTaxReportComponent.prototype.setDestinationServiceTaxReportDetails = function () {
        var _this = this;
        this.getDestinationServiceTaxReportData();
        this.showSpinnerForAction = true;
        this.lrReportService.getBookingServiceTaxDestReport(this.lrDtoForDestinationServiceTax).subscribe(function (response) {
            console.log(response);
            _this.destinationServiceTaxDataList = [];
            $("#destinationServiceTaxRptTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.destinationServiceTaxDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "No datas found for this information", "warning");
            }
            _this.dtTriggerDestinationServiceTax.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Destination Service Tax details", "info");
        }, function () { return console.log('done'); };
    };
    ServiceTaxReportComponent.prototype.getSubStationServiceTaxReportData = function () {
        this.lrDtoForSubStationServiceTax = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.validateFromDateValue = $("#fromDates").val();
        this.valiateToDateValue = $("#toDates").val();
        this.validateDestinationValue = $("#destinationId").val();
        this.validateConsigneeNameValue = $("#consigneeName").val();
        this.lrDtoForSubStationServiceTax.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoForSubStationServiceTax.fromDate = this.validateFromDateValue;
        this.lrDtoForSubStationServiceTax.toDate = this.valiateToDateValue;
        this.lrDtoForSubStationServiceTax.destination = this.validateDestinationValue;
        this.lrDtoForSubStationServiceTax.consigneeName = this.validateConsigneeNameValue;
        if ($("#consigneeName").val() == null || $("#consigneeName").val() == undefined ||
            $("#consigneeName").val() == "" || $("#consigneeName").val() == "All") {
            this.lrDtoForSubStationServiceTax.consigneeId = 0;
        }
        else {
            this.lrDtoForSubStationServiceTax.consigneeId = this.validateConsigneeNameValueId;
        }
    };
    ServiceTaxReportComponent.prototype.setSubStationServiceTaxReportDetails = function () {
        var _this = this;
        this.getSubStationServiceTaxReportData();
        this.showSpinnerForAction = true;
        this.lrReportService.getBookingServiceTaxSubstationReport(this.lrDtoForSubStationServiceTax).subscribe(function (response) {
            console.log(response);
            _this.subStationServiceTaxDataList = [];
            $("#subStationServiceTaxRptTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.subStationServiceTaxDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "No datas found for this information", "warning");
            }
            _this.dtTriggerSubStationServiceTax.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the SubStation Service Tax details", "info");
        }, function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ServiceTaxReportComponent.prototype, "dtElements", void 0);
    ServiceTaxReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-tax-report',
            template: __webpack_require__(/*! ./service-tax-report.component.html */ "./src/app/report/hireslip-and-invoice-report/service-tax-report/service-tax-report.component.html"),
            styles: [__webpack_require__(/*! ./service-tax-report.component.css */ "./src/app/report/hireslip-and-invoice-report/service-tax-report/service-tax-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_14__["LrReportService"]])
    ], ServiceTaxReportComponent);
    return ServiceTaxReportComponent;
}());



/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/transhipment-trip/transhipment-trip.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/transhipment-trip/transhipment-trip.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9oaXJlc2xpcC1hbmQtaW52b2ljZS1yZXBvcnQvdHJhbnNoaXBtZW50LXRyaXAvdHJhbnNoaXBtZW50LXRyaXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/transhipment-trip/transhipment-trip.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/transhipment-trip/transhipment-trip.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Hireslip Unloading Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromPeriod\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Period</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromPeriods\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromPeriods=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromPeriods.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Period</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toPeriod\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toPeriods\" ngbDatepicker #toPeriods=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toPeriods.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"mainSrc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">ALL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"nagpur\">Nagpur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsTranshipmentTripRpt\" [dtTrigger]=\"dtTriggerTranshipmentTripRpt\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Unloading Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Loading Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Dispatch With-In</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let transhipmentTripRptData of transhipmentTripRptDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ transhipmentTripRptData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ transhipmentTripRptData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ transhipmentTripRptData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ transhipmentTripRptData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ transhipmentTripRptData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ transhipmentTripRptData.actWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ transhipmentTripRptData.chgWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ transhipmentTripRptData.bookingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ transhipmentTripRptData.unloadingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ transhipmentTripRptData.loadingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ transhipmentTripRptData.dispatchWithIn }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/hireslip-and-invoice-report/transhipment-trip/transhipment-trip.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/report/hireslip-and-invoice-report/transhipment-trip/transhipment-trip.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TranshipmentTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranshipmentTripComponent", function() { return TranshipmentTripComponent; });
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


var TranshipmentTripComponent = /** @class */ (function () {
    function TranshipmentTripComponent(transhipmentTripRpt) {
        this.transhipmentTripRpt = transhipmentTripRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerTranshipmentTripRpt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    TranshipmentTripComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    TranshipmentTripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsTranshipmentTripRpt = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'LR Number',
                    data: 'lrNumber'
                },
                {
                    title: 'Source',
                    data: 'source'
                },
                {
                    title: 'Destination',
                    data: 'destination'
                },
                {
                    title: 'Consignee Name',
                    data: 'consigneeName'
                }, {
                    title: 'Articles',
                    data: 'articles'
                },
                {
                    title: 'Act Wgt',
                    data: 'actWgt'
                },
                {
                    title: 'Chg Wgt',
                    data: 'chgWgt'
                },
                {
                    title: 'Booking Date',
                    data: 'bookingDate'
                }, {
                    title: 'Unloading Date',
                    data: 'unloadingDate'
                },
                {
                    title: 'Loadiing Date',
                    data: 'laodingDate'
                },
                {
                    title: 'Dispatch With-In',
                    data: 'dispatchWithIn'
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
        this.getDataFrmServiceFrTranshipmentTripRptTable = this.transhipmentTripRpt.getSummaryData();
        this.onDestroyUnsubscribtionTranshipmentTripRpt = this.getDataFrmServiceFrTranshipmentTripRptTable.subscribe(function (data) {
            _this.transhipmentTripRptDataList = data['data'];
            _this.dtTriggerTranshipmentTripRpt.next();
        });
        //the below code is for the getting data through json ends
    };
    TranshipmentTripComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerTranshipmentTripRpt.unsubscribe();
        this.onDestroyUnsubscribtionTranshipmentTripRpt.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    TranshipmentTripComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TranshipmentTripComponent.prototype, "dtElements", void 0);
    TranshipmentTripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transhipment-trip',
            template: __webpack_require__(/*! ./transhipment-trip.component.html */ "./src/app/report/hireslip-and-invoice-report/transhipment-trip/transhipment-trip.component.html"),
            styles: [__webpack_require__(/*! ./transhipment-trip.component.css */ "./src/app/report/hireslip-and-invoice-report/transhipment-trip/transhipment-trip.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], TranshipmentTripComponent);
    return TranshipmentTripComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-report-hireslip-and-invoice-report-hireslip-and-invoice-report-module.js.map