(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-stocks-for-tripsheet-page-stocks-for-tripsheet-page-module~src-app-trip-creation-tri~a3134502"],{

/***/ "./src/app/dataService/consignor-service.ts":
/*!**************************************************!*\
  !*** ./src/app/dataService/consignor-service.ts ***!
  \**************************************************/
/*! exports provided: ConsignorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignorService", function() { return ConsignorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsignorService = /** @class */ (function () {
    //private _url = "./assets/data/supplier-master.json";
    function ConsignorService(http) {
        this.http = http;
    }
    ConsignorService.prototype.getSupplierMasterData = function () {
        //return this.http.get<SupplierModel[]>(this._url);
        return this.http.get('./assets/data/supplier-master.json');
    };
    ConsignorService.prototype.getSummaryData = function () {
        //return this.http.get<SupplierModel[]>(this._url);
        return this.http.get('./assets/data/lr-dispatch-booking-report.json');
    };
    ConsignorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConsignorService);
    return ConsignorService;
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

/***/ "./src/app/dataService/stock-service.ts":
/*!**********************************************!*\
  !*** ./src/app/dataService/stock-service.ts ***!
  \**********************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
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



var StockService = /** @class */ (function () {
    function StockService(http) {
        this.http = http;
        //private _url = "./assets/data/supplier-master.json";
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webStockReport;
    }
    StockService.prototype.getSummaryData = function () {
        //return this.http.get<SupplierModel[]>(this._url);
        return this.http.get('./assets/data/lr-dispatch-booking-report.json');
    };
    StockService.prototype.getSupplierMasterData = function () {
        //return this.http.get<any[]>(this._url);
        return this.http.get('./assets/data/supplier-master.json');
    };
    StockService.prototype.getStocksSummaryData = function () {
        //return this.http.get<any[]>(this._url);
        return this.http.get('./assets/data/stocks-summary.json');
    };
    //Article Grouping //added at 20-02-2021
    StockService.prototype.getArticlesStocksSummary = function (lrDto) {
        return this.http.post(this._baseUrl + "/getArticlesStocksSummaryApi", lrDto);
    };
    StockService.prototype.getArticlesStocks = function (lrDto) {
        return this.http.post(this._baseUrl + "/getArticlesStocksApi", lrDto);
    };
    StockService.prototype.getDestStocksForInside = function (lrDto) {
        return this.http.post(this._baseUrl + "/getDestStocksForInsideApi", lrDto);
    };
    StockService.prototype.getDestStocks = function (lrDto) {
        return this.http.post(this._baseUrl + "/getDestStocksApi", lrDto);
    };
    StockService.prototype.getLRNewTrip = function (lrDtoForCheckDestination) {
        return this.http.post(this._baseUrl + "/getLRNewTripApi", lrDtoForCheckDestination);
    };
    StockService.prototype.addInvoiceDetails = function (invoiceDto) {
        return this.http.post(this._baseUrl + "/addInvoiceDetailsApi", invoiceDto);
    };
    StockService.prototype.getBookingInvoiceDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBookingInvoiceDetailsApi", lrDto);
    };
    StockService.prototype.getInvoiceDestinationSummary = function (lrDto) {
        return this.http.post(this._baseUrl + "/getInvoiceDestinationSummaryApi", lrDto);
    };
    StockService.prototype.checkInvoiceForMultiPtDeliv = function (hireSlipDtoMultiInvoicePopup) {
        return this.http.post(this._baseUrl + "/checkInvoiceForMultiPtDelivApi", hireSlipDtoMultiInvoicePopup);
    };
    StockService.prototype.getLRShortageDtls = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getLRShortageDtlsApi", hireSlipDto);
    };
    StockService.prototype.getLrsForNoEwayBillValidations = function (ewayBillLrForLRDto) {
        return this.http.post(this._baseUrl + "/getLrsForNoEwayBillValidationsApi", ewayBillLrForLRDto);
    };
    StockService.prototype.getTruckTypeFromTruckMaster = function (hireSlipDtoGoodsTypes) {
        return this.http.post(this._baseUrl + "/getTruckTypeFromTruckMasterApi", hireSlipDtoGoodsTypes);
    };
    StockService.prototype.chkHireslipStatus = function (chkStatusHireSlipDto) {
        return this.http.post(this._baseUrl + "/chkHireslipStatusApi", chkStatusHireSlipDto);
    };
    StockService.prototype.addHireSlipDetails = function (hireSlipDtoSaveHireslip) {
        return this.http.post(this._baseUrl + "/addHireSlipDetailsApi", hireSlipDtoSaveHireslip);
    };
    StockService.prototype.getRcLicInscDtls = function (truckDataDto) {
        return this.http.post(this._baseUrl + "/getRcLicInscDtlsApi", truckDataDto);
    };
    StockService.prototype.getPanInscDtls = function (truckDataDto) {
        return this.http.post(this._baseUrl + "/getPanInscDtlsApi", truckDataDto);
    };
    StockService.prototype.updateHireSlipStatus = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/updateHireSlipStatusApi", hireSlipDto);
    };
    StockService.prototype.getHireSlipDetails = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getHireSlipDetailsApi", hireSlipDto);
    };
    StockService.prototype.getGodownsDetails = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getGodownsDetailsApi", hireSlipDto);
    };
    StockService.prototype.setRcLicInscDtls = function (truckDataDto) {
        return this.http.post(this._baseUrl + "/setRcLicInscDtls", truckDataDto);
    };
    StockService.prototype.setLrHideInDummyInvoice = function (lrDto) {
        return this.http.post(this._baseUrl + "/setLrHideInDummyInvoiceApi", lrDto);
    };
    StockService.prototype.trackingIntgTripFT = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/trackingIntgTripFTApi", hireSlipDto);
    };
    StockService.prototype.trackingIntgTripFTUpdate = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/trackingIntgTripFTUpdateApi", hireSlipDto);
    };
    StockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StockService);
    return StockService;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-stocks-for-tripsheet-page-stocks-for-tripsheet-page-module~src-app-trip-creation-tri~a3134502.js.map