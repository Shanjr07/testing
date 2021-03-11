(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-report-stocks-report-stocks-report-module"],{

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

/***/ "./src/app/dataService/stock-report.ts":
/*!*********************************************!*\
  !*** ./src/app/dataService/stock-report.ts ***!
  \*********************************************/
/*! exports provided: StockReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockReport", function() { return StockReport; });
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



var StockReport = /** @class */ (function () {
    function StockReport(http) {
        this.http = http;
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webStockReport;
    }
    StockReport.prototype.getUnloadingReportNotDetain = function (invoiceDto) {
        return this.http.post(this._baseUrl + "/getUnloadingReportNotDetainApi", invoiceDto);
    };
    StockReport.prototype.getUnloadingReportDetain = function (invoiceDto) {
        return this.http.post(this._baseUrl + "/getUnloadingReportDetainApi", invoiceDto);
    };
    StockReport.prototype.getUnloadingReportLrDetailsDetainReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getUnloadingReportLrDetailsDetainApi", lrDto);
    };
    StockReport.prototype.getUnloadingReportLrDetailsNotDetainReport = function (lrDto) {
        return this.http.post(this._baseUrl + "/getUnloadingReportLrDetailsNotDetainApi", lrDto);
    };
    StockReport = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StockReport);
    return StockReport;
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

/***/ "./src/app/report/stocks-report/booking-agent-dispatch-performance-report/booking-agent-dispatch-performance-report.component.css":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/booking-agent-dispatch-performance-report/booking-agent-dispatch-performance-report.component.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0b2Nrcy1yZXBvcnQvYm9va2luZy1hZ2VudC1kaXNwYXRjaC1wZXJmb3JtYW5jZS1yZXBvcnQvYm9va2luZy1hZ2VudC1kaXNwYXRjaC1wZXJmb3JtYW5jZS1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7O0FBRUQ7Q0FDQyxVQUFVO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvc3RvY2tzLXJlcG9ydC9ib29raW5nLWFnZW50LWRpc3BhdGNoLXBlcmZvcm1hbmNlLXJlcG9ydC9ib29raW5nLWFnZW50LWRpc3BhdGNoLXBlcmZvcm1hbmNlLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuXG46Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3d7XG5cdHRvcDogMjZweDtcbiAgICBsZWZ0OiAxODhweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/stocks-report/booking-agent-dispatch-performance-report/booking-agent-dispatch-performance-report.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/booking-agent-dispatch-performance-report/booking-agent-dispatch-performance-report.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Booking Agent Dispatch Performance Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"summary\">Summary</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"detail\">Detail</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" id=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fromDatesModal\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\" [(ngModel)]=\"toDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!hideshowDropDownSourceField\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sourceId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSource\" [ngbTypeahead]=\"searchSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"sourceListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destinationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestination($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination..\" />\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateSearchBtn();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateClearBtn();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<h6 [hidden]=\"!hideshowBookingAgentDispatchPerformanceSummaryRptTable\">\n\t\t\t\t\t\t\tBooking Agent Dispatch Performance - Summary\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 [hidden]=\"!hideshowBookingAgentDispatchPerformanceDetailsRptTable\">\n\t\t\t\t\t\t\tBooking Agent Dispatch Performance - Details\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideshowBookingAgentDispatchPerformanceSummaryRptTable\">\n\t\t\t\t\t\t\t<table datatable id=\"bookingAgentDispatchPerformanceSummaryRptTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSummary\" [dtTrigger]=\"dtTriggerSummary\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Agent</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let smryData of summaryDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideshowBookingAgentDispatchPerformanceDetailsRptTable\">\n\t\t\t\t\t\t\t<table datatable id=\"bookingAgentDispatchPerformanceDetailsRptTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\" [dtOptions]=\"dtOptionDetail\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDetail\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Agent Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Entry-Bkg)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Entry Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Bill Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Bkg-Bill)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Entry-Bill)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Collection Centre</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\n\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Commodity Name</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let detailData of detailDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.dispatchedwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.enteredDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.billDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.diffBkgBillDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.diffEntryBillDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.totalArticles }}</td>\n\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.commodityName }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/stocks-report/booking-agent-dispatch-performance-report/booking-agent-dispatch-performance-report.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/booking-agent-dispatch-performance-report/booking-agent-dispatch-performance-report.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: BookingAgentDispatchPerformanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingAgentDispatchPerformanceReportComponent", function() { return BookingAgentDispatchPerformanceReportComponent; });
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












var BookingAgentDispatchPerformanceReportComponent = /** @class */ (function () {
    function BookingAgentDispatchPerformanceReportComponent(memoLessRpt, router, masterReadService, memoReport, modalService, lrReportService) {
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
        this.dtTriggerSummary = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerDetail = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
        this.showSpinnerForAction = false;
        this.hideshowBookingAgentDispatchPerformanceSummaryRptTable = false;
        this.hideshowBookingAgentDispatchPerformanceDetailsRptTable = false;
        this.hideshowDropDownSourceField = false;
        this.sourceView = false;
        this.destination = false;
        this.mode = null;
        this.toDatesModal = null;
        this.fromDatesModal = null;
        this.validateSourceSubStationValue = null;
        this.validateDestinationValue = null;
        this.validateFromDateValue = null;
        this.valiateToDateValue = null;
        this.lrDtoForBkgAgentDispatchRptSummary = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoForBkgAgentDispatchRptDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.rightsForBookingAdministrator = "Rights For BkgAgentDispPerfRpt For BookingAdministrator Source";
        this.rightsForSuperAdministrator = "Rights For BkgAgentDispPerfRpt For SuperAdministrator Source";
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
            this.hideshowBookingAgentDispatchPerformanceSummaryRptTable = true;
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == "Source BkgGodStks") {
                        this.hideshowDropDownSourceField = true;
                        this.sourceView = true;
                        this.mode = "All";
                    }
                }
            }
            this.getDestinationDetails();
            if (this.sourceView == true) {
                this.getSourceStationDetails();
            }
        }
    }
    BookingAgentDispatchPerformanceReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var booleanSourceView = this.sourceView;
        this.dtOptionsSummary = {
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
                        if (booleanSourceView == true) {
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
                                "<strong style='font-size:15px;'>Source</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#sourceId").val() + "</span><br>" +
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
                                "<strong style='font-size:25px;'><u>Booking Agent Dispatch Performance Summary</u></strong><br>" +
                                "</td>" +
                                "<td rowspan='3' align='left' style='width:20%;'>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        else {
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
                                "<strong style='font-size:25px;'><u>Booking Agent Dispatch Performance Summary</u></strong><br>" +
                                "</td>" +
                                "<td rowspan='3' align='left' style='width:20%;'>" +
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
                    },
                    exportOptions: {
                        columns: [0, 2, 1, 3, 4, 5]
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        if (booleanSourceView == true) {
                            return " Booking Agent Dispatch Performance Summary Report -" +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + " - " +
                                "Source : " + $("#sourceId").val() + " - " +
                                "Destination : " + $("#destinationId").val() + "";
                        }
                        else {
                            return "Booking Agent Dispatch Performance Summary Report -" +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + " - " +
                                "Destination : " + $("#destinationId").val() + "";
                        }
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
                var totalLrs = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var article = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(2).footer()).html(totalLrs);
                $(api.column(3).footer()).html(article);
                $(api.column(4).footer()).html(actWgt);
                $(api.column(5).footer()).html(chgWt);
            }
        }, this.dtOptionDetail = {
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
                        if (booleanSourceView == true) {
                            return "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 20%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From Date</strong>" +
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
                                "<strong style='font-size:15px;'>Source</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#sourceId").val() + "</span><br>" +
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
                                "<strong style='font-size:25px;'><u>Booking Agent Dispatch Performance - Details</u></strong><br>" +
                                "</td>" +
                                "<td rowspan='3' align='left' style='width:20%;'>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        else {
                            return "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 20%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From Date</strong>" +
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
                                "<strong style='font-size:25px;'><u>Booking Agent Dispatch Performance - Details</u></strong><br>" +
                                "</td>" +
                                "<td rowspan='3' align='left' style='width:20%;'>" +
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
                    },
                    exportOptions: {
                        columns: [0, 1, 3, 4, 5, 2, 6, 8, 9, 10, 11, 12, 13, 14, 15]
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        if (booleanSourceView == true) {
                            return "Booking Agent Dispatch Performance Details Report- " +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + " - " +
                                "Source : " + $("#sourceId").val() + " - " +
                                "Destination : " + $("#destinationId").val() + "";
                        }
                        else {
                            return "Booking Agent Dispatch Performance Details Report - " +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_12__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date" + moment__WEBPACK_IMPORTED_MODULE_12__($("#toDates").val()).format('DD-MM-YYYY') + " - " +
                                "Destination : " + $("#destinationId").val() + "";
                        }
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
                var totalLrs = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var article = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWt = api.column(11).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWt = api.column(12).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html(totalLrs);
                $(api.column(10).footer()).html(article);
                $(api.column(11).footer()).html(actWt);
                $(api.column(12).footer()).html(chgWt);
            }
        };
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerSummary.next();
        //this.dtTriggerDetail.next();
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerSummary.unsubscribe();
        this.dtTriggerDetail.unsubscribe();
        // this.onDestroyUnsubscribtionSmry.unsubscribe();
        //this.onDestroyUnsubscribtionDetail.unsubscribe();
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'summary') {
            this.hideshowBookingAgentDispatchPerformanceSummaryRptTable = true;
            this.hideshowBookingAgentDispatchPerformanceDetailsRptTable = false;
            $("#bookingAgentDispatchPerformanceDetailsRptTableId").DataTable().destroy();
            this.detailDataList = [];
            $("#bookingAgentDispatchPerformanceSummaryRptTableId").DataTable().destroy();
            this.summaryDataList = [];
            this.dtTriggerSummary.next();
            this.modelSource = null;
            this.modelDestination = null;
            $("#destinationId").val('All');
            this.toDatesModal = null;
            this.fromDatesModal = null;
            this.validateSourceSubStationValue = null;
            this.validateDestinationValue = null;
            this.validateFromDateValue = null;
            this.valiateToDateValue = null;
        }
        else if (viewType === 'detail') {
            this.hideshowBookingAgentDispatchPerformanceSummaryRptTable = false;
            this.hideshowBookingAgentDispatchPerformanceDetailsRptTable = true;
            $("#bookingAgentDispatchPerformanceSummaryRptTableId").DataTable().destroy();
            this.summaryDataList = [];
            $("#bookingAgentDispatchPerformanceDetailsRptTableId").DataTable().destroy();
            this.detailDataList = [];
            this.dtTriggerDetail.next();
            this.modelSource = null;
            this.modelDestination = null;
            $("#destinationId").val('All');
            this.toDatesModal = null;
            this.fromDatesModal = null;
            this.validateSourceSubStationValue = null;
            this.validateDestinationValue = null;
            this.validateFromDateValue = null;
            this.valiateToDateValue = null;
        }
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.sourceListener = function (e, fubi) {
        this.modelSource = e.item;
        $("#sourceId").val(this.modelSource.subStations);
        //this.validateSourceSubStationValue = this.modelSource.subStations;
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.clickListnerForDestination = function (e, fubi) {
        this.modelDestination = e.item;
        $("#destinationId").val(this.modelDestination.destination);
        // this.validateDestinationIdValue = this.modelDestination.destination;
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            if (response.length > 0) {
                _this.destinationTA = [];
                _this.destinationOptions = [];
                _this.destinationOptions = response;
                _this.lrDtoDestinationAllOption.destination = "All";
                _this.destinationTA.push(_this.lrDtoDestinationAllOption);
                for (var i = 0; i < _this.destinationOptions.length; i++) {
                    _this.destinationTA.push(_this.destinationOptions[i]);
                }
                $("#destinationId").val('All');
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
    BookingAgentDispatchPerformanceReportComponent.prototype.getSourceStationMethod = function () {
        this.lrDtoSourceStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoSourceStation.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoSourceStation.reportMode = "InclMainStation";
        /* if (this.rightsForSuperAdministrator != null &&
             this.rightsForSuperAdministrator == "Rights For BkgAgentDispPerfRpt For SuperAdministrator Source") {
        */
        if (this.userDataDtoReturnSession.role != null &&
            this.userDataDtoReturnSession.role == "Super Administrator") {
            this.lrDtoSourceStation.mode = "Booking";
        }
        else {
            /*if(this.rightsForBookingAdministrator !=null &&
            this.rightsForBookingAdministrator == "Rights For BkgAgentDispPerfRpt For BookingAdministrator Source"){
            */
            if (this.userDataDtoReturnSession.role != null &&
                this.userDataDtoReturnSession.role == "Booking Administrator") {
                this.lrDtoSourceStation.city = this.userDataDtoReturnSession.mainStation;
            }
            else {
                this.lrDtoSourceStation.city = this.userDataDtoReturnSession.mainAdminStation;
            }
        }
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.getSourceStationDetails = function () {
        var _this = this;
        this.getSourceStationMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getSubBookingStationDetailsService(this.lrDtoSourceStation).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.sourceSubStationNameTA = [];
                _this.sourceStationOptions = [];
                _this.sourceStationOptions = response;
                for (var i = 0; i < _this.sourceStationOptions.length; i++) {
                    _this.sourceSubStationNameTA.push(_this.sourceStationOptions[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.sourceSubStationNameTA = [];
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Source Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    BookingAgentDispatchPerformanceReportComponent.prototype.clearField = function () {
        this.hideshowBookingAgentDispatchPerformanceSummaryRptTable = true;
        this.hideshowBookingAgentDispatchPerformanceDetailsRptTable = false;
        this.detailDataList = [];
        $("#bookingAgentDispatchPerformanceDetailsRptTableId").DataTable().destroy();
        this.summaryDataList = [];
        $("#bookingAgentDispatchPerformanceSummaryRptTableId").DataTable().destroy();
        this.dtTriggerSummary.next();
        this.toDatesModal = null;
        this.fromDatesModal = null;
        this.validateSourceSubStationValue = null;
        this.validateDestinationValue = null;
        this.validateFromDateValue = null;
        this.valiateToDateValue = null;
        this.modelSource = null;
        this.modelDestination = null;
        $("#destinationId").val('All');
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.validateClearBtn = function () {
        $("#viewType").val('summary');
        this.clearField();
        $("#destinationId").val('All');
    };
    /* validateSearchBtn() {
         if (this.sourceView == true) {
             if ($("#viewType").val() == "summary") {
                 if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                     ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
                     ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
                     ($("#sourceId").val() == null) || ($("#sourceId").val() == undefined) ||
                     ($("#sourceId").val() == "") || ($("#destinationId").val() == null) ||
                     ($("#destinationId").val() == undefined) || ($("#destinationId").val() == "")) {
                     swal("Mandatory Field", "From Date,To Date,Source & Destination is Mandatory Field", "warning");
                     return false;
                 } else {
                     this.setBookingAgentDispatchPerformanceRptSummaryList();
                 }
             } else if ($("#viewType").val() == "detail") {
                 if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                     ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
                     ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
                     ($("#sourceId").val() == null) || ($("#sourceId").val() == undefined) ||
                     ($("#sourceId").val() == "") || ($("#destinationId").val() == null) ||
                     ($("#destinationId").val() == undefined) || ($("#destinationId").val() == "")) {
                     swal("Mandatory Field", "From Date,To Date,Source & Destination is Mandatory Field", "warning");
                     return false;
                 } else {
 
                 }
             }
         } else {
             if ($("#viewType").val() == "summary") {
                 if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                     ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
                     ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
                     ($("#destinationId").val() == null) || ($("#destinationId").val() == undefined) ||
                     ($("#destinationId").val() == "")) {
                     swal("Mandatory Field", "From Date,To Date & Destination is Mandatory Field", "warning");
                     return false;
                 } else {
                     this.setBookingAgentDispatchPerformanceRptSummaryList();
                 }
             } else if ($("#viewType").val() == "detail") {
                 if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
                     ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
                     ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
                     ($("#destinationId").val() == null) || ($("#destinationId").val() == undefined) ||
                     ($("#destinationId").val() == "")) {
                     swal("Mandatory Field", "From Date,To Date & Destination is Mandatory Field", "warning");
                     return false;
                 } else {
 
                 }
             }
         }
     }*/
    BookingAgentDispatchPerformanceReportComponent.prototype.validateSearchBtn = function () {
        if (this.sourceView == true) {
            this.validateSearchForSourceDestinationWiseMethod();
        }
        else {
            this.validateSearchForDestinationWiseMethod();
        }
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.validateSearchForSourceDestinationWiseMethod = function () {
        if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
            ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
            ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
            ($("#sourceId").val() == null) || ($("#sourceId").val() == undefined) ||
            ($("#sourceId").val() == "") || ($("#destinationId").val() == null) ||
            ($("#destinationId").val() == undefined) || ($("#destinationId").val() == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Mandatory Field", "From Date,To Date,Source & Destination is Mandatory Field", "warning");
            return false;
        }
        else {
            this.searchMethod();
        }
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.validateSearchForDestinationWiseMethod = function () {
        if (($("#fromDates").val() == null) || ($("#fromDates").val() == undefined) ||
            ($("#fromDates").val() == "") || ($("#toDates").val() == null) ||
            ($("#toDates").val() == undefined) || ($("#toDates").val() == "") ||
            ($("#destinationId").val() == null) || ($("#destinationId").val() == undefined) ||
            ($("#destinationId").val() == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Mandatory Field", "From Date,To Date & Destination is Mandatory Field", "warning");
            return false;
        }
        else {
            this.searchMethod();
        }
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.searchMethod = function () {
        if ($("#viewType").val() == "summary") {
            this.setBookingAgentDispatchPerformanceRptSummaryList();
        }
        else {
            this.setBookingAgentDispatchPerformanceRptDetailsList();
        }
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.getBookingAgentDispatchPerformanceRptSummaryData = function () {
        this.lrDtoForBkgAgentDispatchRptSummary = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoForBkgAgentDispatchRptSummary.companyId = this.userDataDtoReturnSession.companyId;
        this.validateFromDateValue = $("#fromDates").val();
        this.valiateToDateValue = $("#toDates").val();
        this.validateDestinationValue = $("#destinationId").val();
        this.lrDtoForBkgAgentDispatchRptSummary.fromDate = this.validateFromDateValue;
        this.lrDtoForBkgAgentDispatchRptSummary.toDate = this.valiateToDateValue;
        this.lrDtoForBkgAgentDispatchRptSummary.toStation = this.validateDestinationValue;
        if (this.sourceView == true) {
            this.validateSourceSubStationValue = $("#sourceId").val();
            this.lrDtoForBkgAgentDispatchRptSummary.fromStation = this.validateSourceSubStationValue;
        }
        else {
            this.lrDtoForBkgAgentDispatchRptSummary.fromStation = this.userDataDtoReturnSession.office;
        }
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.setBookingAgentDispatchPerformanceRptSummaryList = function () {
        var _this = this;
        this.getBookingAgentDispatchPerformanceRptSummaryData();
        this.showSpinnerForAction = true;
        this.lrReportService.getBookingAgentDispatchPeformanceSummaryRpt(this.lrDtoForBkgAgentDispatchRptSummary).subscribe(function (response) {
            console.log(response);
            _this.summaryDataList = [];
            $("#bookingAgentDispatchPerformanceSummaryRptTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.summaryDataList = response;
                _this.showSpinnerForAction = false;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("No Data", "No Records found for this search", "info");
                _this.showSpinnerForAction = false;
            }
            _this.dtTriggerSummary.next();
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Booking Agent Dispatch Performance Rpt Summary", "error");
        },
            function () { return console.log('done'); };
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.getBookingAgentDispatchPerformanceRptDetailsData = function () {
        this.lrDtoForBkgAgentDispatchRptDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoForBkgAgentDispatchRptDetails.companyId = this.userDataDtoReturnSession.companyId;
        this.validateFromDateValue = $("#fromDates").val();
        this.valiateToDateValue = $("#toDates").val();
        this.validateDestinationValue = $("#destinationId").val();
        this.lrDtoForBkgAgentDispatchRptDetails.fromDate = this.validateFromDateValue;
        this.lrDtoForBkgAgentDispatchRptDetails.toDate = this.valiateToDateValue;
        this.lrDtoForBkgAgentDispatchRptDetails.toStation = this.validateDestinationValue;
        if (this.sourceView == true) {
            this.validateSourceSubStationValue = $("#sourceId").val();
            this.lrDtoForBkgAgentDispatchRptDetails.fromStation = this.validateSourceSubStationValue;
        }
        else {
            this.lrDtoForBkgAgentDispatchRptDetails.fromStation = this.userDataDtoReturnSession.office;
        }
    };
    BookingAgentDispatchPerformanceReportComponent.prototype.setBookingAgentDispatchPerformanceRptDetailsList = function () {
        var _this = this;
        this.getBookingAgentDispatchPerformanceRptDetailsData();
        this.showSpinnerForAction = true;
        this.lrReportService.getBookingAgentDispatchPeformanceDetailsRpt(this.lrDtoForBkgAgentDispatchRptDetails).subscribe(function (response) {
            console.log(response);
            _this.detailDataList = [];
            $("#bookingAgentDispatchPerformanceDetailsRptTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.detailDataList = response;
                _this.showSpinnerForAction = false;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("No Data", "No Records found for this search", "info");
                _this.showSpinnerForAction = false;
            }
            _this.dtTriggerDetail.next();
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Booking Agent Dispatch Performance Rpt Details", "error");
        },
            function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], BookingAgentDispatchPerformanceReportComponent.prototype, "dtElements", void 0);
    BookingAgentDispatchPerformanceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-agent-dispatch-performance-report',
            template: __webpack_require__(/*! ./booking-agent-dispatch-performance-report.component.html */ "./src/app/report/stocks-report/booking-agent-dispatch-performance-report/booking-agent-dispatch-performance-report.component.html"),
            styles: [__webpack_require__(/*! ./booking-agent-dispatch-performance-report.component.css */ "./src/app/report/stocks-report/booking-agent-dispatch-performance-report/booking-agent-dispatch-performance-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_14__["LrReportService"]])
    ], BookingAgentDispatchPerformanceReportComponent);
    return BookingAgentDispatchPerformanceReportComponent;
}());



/***/ }),

/***/ "./src/app/report/stocks-report/commodity-report/commodity-report.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/report/stocks-report/commodity-report/commodity-report.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0b2Nrcy1yZXBvcnQvY29tbW9kaXR5LXJlcG9ydC9jb21tb2RpdHktcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCOztBQUVEO0NBQ0MsVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3N0b2Nrcy1yZXBvcnQvY29tbW9kaXR5LXJlcG9ydC9jb21tb2RpdHktcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcblx0dG9wOiAyNnB4O1xuICAgIGxlZnQ6IDE4OHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/report/stocks-report/commodity-report/commodity-report.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/report/stocks-report/commodity-report/commodity-report.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Commodity Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Report Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"reportType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"newReport\">New</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"oldReport\">Old</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"summary\">Summary</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"detail\">Detail</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" id=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fromDatesModal\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\" [(ngModel)]=\"toDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!hideshowDropDownSourceField\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sourceId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSource\" [ngbTypeahead]=\"searchSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"sourceListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!hideshowDropDownDestinationField\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destinationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestination($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination..\" />\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity List</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #CommodityList id=\"commodityListId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForCommodityList($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterCommodityList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusCommodityListTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" placeholder=\"Select Commodity..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateSearchBtn();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateClearBtn();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideshowCommoditySummaryRptTable\">\n\t\t\t\t\t\t\t<table datatable id=\"commoditySummaryRptTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSummary\" [dtTrigger]=\"dtTriggerSummary\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Item</th>\n\t\t\t\t\t\t\t\t\t\t<th>Lrs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Perc on Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Perc on Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let smryData of summaryDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.bookingItem }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.lrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.art }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.bookingPercOnActWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.bookingPercOnChgWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.fov }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideshowCommodityDetailsRptTable\">\n\t\t\t\t\t\t\t<table datatable id=\"commodityDetailsRptTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\" [dtOptions]=\"dtOptionDetail\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDetail\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Item</th>\n\t\t\t\t\t\t\t\t\t\t<th>Lrs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Perc on Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Perc on Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let detailData of detailDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.bookingItem }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.lrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.art }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.bookingPercOnActWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.bookingPercOnChgWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.fov }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/stocks-report/commodity-report/commodity-report.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/report/stocks-report/commodity-report/commodity-report.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CommodityReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommodityReportComponent", function() { return CommodityReportComponent; });
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
/* harmony import */ var src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/RateMaster-dto */ "./src/app/dto/RateMaster-dto.ts");
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











var CommodityReportComponent = /** @class */ (function () {
    function CommodityReportComponent(memoLessRpt, router, masterReadService, memoReport, modalService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.viewTypeSummary = true;
        this.viewTypeDetail = false;
        this.dtTriggerSummary = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerDetail = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
        this.lrDtoSourceStationAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.lrDtoSourceStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.sourceSubStationNameTA = [];
        this.focusSourceTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchSource = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.sourceSubStationNameTA
                : _this.sourceSubStationNameTA.filter(function (v) { return v.subStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSource = function (x) { return x.subStations; };
        this.rateMasterDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_13__["RateMasterDto"]();
        this.rateMasterDtoCommodityListAllOption = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_13__["RateMasterDto"]();
        this.commodityListTA = [];
        this.focusCommodityListTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchCommodityList = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusCommodityListTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return (term === '' ? _this.commodityListTA
                : _this.commodityListTA.filter(function (v) { return v.commodityName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterCommodityList = function (x) { return x.commodityName; };
        this.showSpinnerForAction = false;
        this.hideshowCommoditySummaryRptTable = false;
        this.hideshowCommodityDetailsRptTable = false;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.hideshowDropDownSourceField = false;
        this.hideshowDropDownDestinationField = false;
        //hideshowDropDownCommodityListField = false;
        this.sourceAll = false;
        this.sourceSpecific = false;
        this.destination = false;
        this.city = false;
        this.superAdminView = false;
        this.mode = null;
        this.toDatesModal = null;
        this.fromDatesModal = null;
        this.validateSourceSubStationValue = null;
        this.validateDestinationValue = null;
        this.validateCommodityListValue = null;
        this.validateFromDateValue = null;
        this.valiateToDateValue = null;
        this.rightsForRole = "rights for Booking Administrator";
        this.getCommodityMasterDetailsList = function () {
            _this.getCommodityListRead();
            _this.masterReadService.getCommodityDetails(_this.rateMasterDto).subscribe(function (response) {
                if (response) {
                    //console.log(response);
                    if (response.length == 0) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: "Warning",
                            text: "No commodity details records found!",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        _this.rateMasterDtoOptions = [];
                        _this.commodityListTA = [];
                    }
                    else {
                        _this.rateMasterDtoOptions = [];
                        _this.commodityListTA = [];
                        _this.rateMasterDtoOptions = response;
                        _this.rateMasterDtoCommodityListAllOption.commodityName = 'All';
                        _this.commodityListTA.push(_this.rateMasterDtoCommodityListAllOption);
                        for (var i = 0; i < _this.rateMasterDtoOptions.length; i++) {
                            _this.commodityListTA.push(_this.rateMasterDtoOptions[i]);
                        }
                        $("#commodityListId").val('All');
                    }
                }
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Error",
                text: "Server Error While Getting Commodity Master Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
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
            this.hideshowCommoditySummaryRptTable = true;
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == "cbSourceAll-CommRpt") {
                        this.hideshowDropDownSourceField = true;
                        this.sourceAll = true;
                        this.mode = "All";
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == "cbSourceSpecific-CommRpt") {
                        this.hideshowDropDownSourceField = true;
                        this.sourceAll = true;
                        this.mode = "specific";
                        this.lrDto.mainstation = this.userDataDtoReturnSession.mainStation;
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == "cbDest-CommRpt") {
                        this.hideshowDropDownDestinationField = true;
                        this.destination = true;
                    }
                    /* else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == "ItemWiseCommRpt CommRpt") {
                        //old software used this condition but in new s/w not required said bhaiya
                        //radSummary.setVisible(true);
                        //radSummary.setValue(true);
                    }else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == "ItemDetailsCommRpt CommRpt") {
                        //old software used this condition but in new s/w not required said bhaiya
                        //radDetails.setVisible(true);
                    }
                    */
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == "City CommRpt") {
                        this.city = true;
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == "CommodityRpt ShowAll") {
                        this.superAdminView = true; // superadmin only 
                    }
                    console.log(this.userDataDtoReturnSession.sortedMapFeatures.Rights[i]);
                }
            }
            this.getDestinationDetails();
            this.getSourceStationDetails();
            this.getCommodityMasterDetailsList();
        }
    }
    CommodityReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    CommodityReportComponent.prototype.ngOnInit = function () {
        this.dtOptionsSummary = {
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
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 330,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        }, this.dtOptionDetail = {
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
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
    };
    CommodityReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerSummary.next();
        //this.dtTriggerDetail.next();
    };
    CommodityReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    CommodityReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerSummary.unsubscribe();
        this.dtTriggerDetail.unsubscribe();
        // this.onDestroyUnsubscribtionSmry.unsubscribe();
        //this.onDestroyUnsubscribtionDetail.unsubscribe();
    };
    CommodityReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    CommodityReportComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'summary') {
            this.hideshowCommoditySummaryRptTable = true;
            this.hideshowCommodityDetailsRptTable = false;
            $("#commoditySummaryRptTableId").DataTable().destroy();
            this.summaryDataList = [];
            this.dtTriggerSummary.next();
            this.lrDto.reportMode = "item";
            this.modelDestination = null;
            $("#destinationId").val('All');
            this.modelSource = null;
            $("#sourceId").val('All');
            this.modelCommodityList = null;
            $("#commodityListId").val('All');
            this.toDatesModal = null;
            this.fromDatesModal = null;
            this.hideshowDropDownSourceField = true;
            if (this.destination == true) {
                this.hideshowDropDownDestinationField = true;
            }
            else {
                this.hideshowDropDownDestinationField = false;
            }
        }
        else if (viewType === 'detail') {
            this.hideshowCommoditySummaryRptTable = false;
            this.hideshowCommodityDetailsRptTable = true;
            $("#commodityDetailsRptTableId").DataTable().destroy();
            this.detailDataList = [];
            this.dtTriggerDetail.next();
            this.lrDto.reportMode = "detail";
            this.modelDestination = null;
            $("#destinationId").val('All');
            this.modelSource = null;
            $("#sourceId").val('All');
            this.modelCommodityList = null;
            $("#commodityListId").val('All');
            this.toDatesModal = null;
            this.fromDatesModal = null;
            this.hideshowDropDownSourceField = true;
            if (this.destination == true) {
                this.hideshowDropDownDestinationField = true;
            }
            else {
                this.hideshowDropDownDestinationField = false;
            }
        }
    };
    CommodityReportComponent.prototype.validateClearBtn = function () {
        $("#viewType").val('summary');
        this.clearField();
    };
    CommodityReportComponent.prototype.validateSearchBtn = function () {
    };
    CommodityReportComponent.prototype.clearField = function () {
        this.hideshowCommoditySummaryRptTable = true;
        this.hideshowCommodityDetailsRptTable = false;
        this.detailDataList = [];
        $("#commoditySummaryRptTableId").DataTable().destroy();
        this.summaryDataList = [];
        this.dtTriggerSummary.next();
        this.toDatesModal = null;
        this.fromDatesModal = null;
        this.validateSourceSubStationValue = null;
        this.validateDestinationValue = null;
        this.validateCommodityListValue = null;
        this.validateFromDateValue = null;
        this.valiateToDateValue = null;
    };
    CommodityReportComponent.prototype.sourceListener = function (e, fubi) {
        this.modelSource = e.item;
        $("#sourceId").val(this.modelSource.subStations);
        //this.validateSourceSubStationValue = this.modelSource.subStations;
    };
    CommodityReportComponent.prototype.clickListnerForDestination = function (e, fubi) {
        this.modelDestination = e.item;
        $("#destinationId").val(this.modelDestination.destination);
        // this.validateDestinationIdValue = this.modelDestination.destination;
    };
    CommodityReportComponent.prototype.clickListnerForCommodityList = function (e, fubi) {
        this.modelCommodityList = e.item;
        $("#commodityListId").val(this.modelCommodityList.commodityName);
        //this.validateCommodityListValue = this.modelCommodityList.commodityName
    };
    CommodityReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    CommodityReportComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            if (response.length > 0) {
                _this.destinationTA = [];
                _this.destinationOptions = [];
                _this.destinationOptions = response;
                _this.lrDtoDestinationAllOption.destination = "All";
                _this.destinationTA.push(_this.lrDtoDestinationAllOption);
                for (var i = 0; i < _this.destinationOptions.length; i++) {
                    _this.destinationTA.push(_this.destinationOptions[i]);
                }
                $("#destinationId").val('All');
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
    CommodityReportComponent.prototype.getSourceStationMethod = function () {
        this.lrDtoSourceStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_12__["LRDto"]();
        this.lrDtoSourceStation.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoSourceStation.reportMode = "InclMainStation";
        console.log(this.superAdminView);
        if (this.superAdminView == true) {
            this.lrDtoSourceStation.mode = "Booking";
        }
        else {
            //if(this.rightsForRole !=null && this.rightsForRole == "rights for Booking Administrator"){
            if (this.userDataDtoReturnSession.role != null &&
                this.userDataDtoReturnSession.role == "Booking Administrator") {
                this.lrDtoSourceStation.city = this.userDataDtoReturnSession.mainStation;
            }
            else {
                this.lrDtoSourceStation.city = this.userDataDtoReturnSession.mainAdminStation;
            }
        }
    };
    CommodityReportComponent.prototype.getSourceStationDetails = function () {
        var _this = this;
        this.getSourceStationMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getSubBookingStationDetailsService(this.lrDtoSourceStation).subscribe(function (response) {
            if (response.length > 0) {
                _this.sourceSubStationNameTA = [];
                _this.sourceStationOptions = [];
                _this.sourceStationOptions = response;
                _this.lrDtoSourceStationAllOption.subStations = "All";
                _this.sourceSubStationNameTA.push(_this.lrDtoSourceStationAllOption);
                for (var i = 0; i < _this.sourceStationOptions.length; i++) {
                    _this.sourceSubStationNameTA.push(_this.sourceStationOptions[i]);
                }
                $("#sourceId").val('All');
                _this.showSpinnerForAction = false;
            }
            else {
                _this.sourceSubStationNameTA = [];
                _this.lrDtoSourceStationAllOption.subStations = "All";
                _this.sourceSubStationNameTA.push(_this.lrDtoSourceStationAllOption);
                $("#sourceId").val('All');
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Error", "Server Problem Occurred While getting the Source Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    CommodityReportComponent.prototype.getCommodityListRead = function () {
        this.rateMasterDto.companyId = this.userDataDtoReturnSession.companyId;
        this.rateMasterDto.destination = null;
        this.rateMasterDto.mode = "mainConsigneeMaster";
        this.rateMasterDto.status = "Working";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CommodityReportComponent.prototype, "dtElements", void 0);
    CommodityReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commodity-report',
            template: __webpack_require__(/*! ./commodity-report.component.html */ "./src/app/report/stocks-report/commodity-report/commodity-report.component.html"),
            styles: [__webpack_require__(/*! ./commodity-report.component.css */ "./src/app/report/stocks-report/commodity-report/commodity-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_10__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], CommodityReportComponent);
    return CommodityReportComponent;
}());



/***/ }),

/***/ "./src/app/report/stocks-report/delivery-unloaded-lr-detained/delivery-unloaded-lr-detained.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/delivery-unloaded-lr-detained/delivery-unloaded-lr-detained.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/* the below code we add to view the option in popup modal starts  for truck master*/\n\n::ng-deep .cdk-overlay-container {\n\t/* Do you changes here */\n\tposition: fixed;\n\tz-index: 9999;\n}\n\n::ng-deep .cdk-overlay-pane {\n\tz-index: 9999;\n}\n\n::ng-deep .myCustomModalClass\t.modal-dialog {\n\tmax-width: auto;\n}\n\n/* the below code we add to view the option in popup modal ends truck master*/\n\n/* the below code we add to view the option in popup modal starts  for truck master*/\n\n::ng-deep .modalClassForPopUp\t.modal-dialog {\n\tmax-width: 80%;\n}\n\n/* the below code we add to view the option in popup modal ends truck master*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0b2Nrcy1yZXBvcnQvZGVsaXZlcnktdW5sb2FkZWQtbHItZGV0YWluZWQvZGVsaXZlcnktdW5sb2FkZWQtbHItZGV0YWluZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7O0FBRUQscUZBQXFGOztBQUNyRjtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkOztBQUVEO0NBQ0MsY0FBYztDQUNkOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUNELDhFQUE4RTs7QUFFOUUscUZBQXFGOztBQUVyRjtDQUNDLGVBQWU7Q0FDZjs7QUFDRCw4RUFBOEUiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvc3RvY2tzLXJlcG9ydC9kZWxpdmVyeS11bmxvYWRlZC1sci1kZXRhaW5lZC9kZWxpdmVyeS11bmxvYWRlZC1sci1kZXRhaW5lZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuXG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIHN0YXJ0cyAgZm9yIHRydWNrIG1hc3RlciovXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG5cdC8qIERvIHlvdSBjaGFuZ2VzIGhlcmUgKi9cblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiA5OTk5O1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xuXHR6LWluZGV4OiA5OTk5O1xufVxuXG46Om5nLWRlZXAgLm15Q3VzdG9tTW9kYWxDbGFzc1x0Lm1vZGFsLWRpYWxvZyB7XG5cdG1heC13aWR0aDogYXV0bztcbn1cbi8qIHRoZSBiZWxvdyBjb2RlIHdlIGFkZCB0byB2aWV3IHRoZSBvcHRpb24gaW4gcG9wdXAgbW9kYWwgZW5kcyB0cnVjayBtYXN0ZXIqL1xuXG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIHN0YXJ0cyAgZm9yIHRydWNrIG1hc3RlciovXG5cbjo6bmctZGVlcCAubW9kYWxDbGFzc0ZvclBvcFVwXHQubW9kYWwtZGlhbG9nIHtcblx0bWF4LXdpZHRoOiA4MCU7XG59XG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIGVuZHMgdHJ1Y2sgbWFzdGVyKi8iXX0= */"

/***/ }),

/***/ "./src/app/report/stocks-report/delivery-unloaded-lr-detained/delivery-unloaded-lr-detained.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/delivery-unloaded-lr-detained/delivery-unloaded-lr-detained.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">LR Details</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div [hidden]=\"!showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable id=\"stockUnloadingDetainedTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsUnloadingReportDetained\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerUnloadingReportDetained\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR Status</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Pack Nature</th>\n\t\t\t\t\t\t\t\t\t\t<th>Delivery Point</th>\n\t\t\t\t\t\t\t\t\t\t<th>Notice No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Check Post Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t<th>Check Post Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Pvt Marker</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!notshowcolumn\">Case</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!notshowcolumn\">GCase</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!notshowcolumn\">Cart</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!notshowcolumn\">GCart</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!notshowcolumn\">Bundle</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!notshowcolumn\">Roll</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let unloadingReportDetainedData of unloadingReportDetainedDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportDetainedData.lrNumber}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportDetainedData.lrStatus}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportDetainedData.consigneeName}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportDetainedData.totalArticles}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportDetainedData.packNature}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportDetainedData.deliveryPoints}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportDetainedData.noticeNumber}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportDetainedData.checkPostName}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportDetainedData.status}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportDetainedData.date}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportDetainedData.privateMarker}}</td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/stocks-report/delivery-unloaded-lr-detained/delivery-unloaded-lr-detained.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/delivery-unloaded-lr-detained/delivery-unloaded-lr-detained.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DeliveryUnloadedLrDetainedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryUnloadedLrDetainedComponent", function() { return DeliveryUnloadedLrDetainedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_dataService_stock_report__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/stock-report */ "./src/app/dataService/stock-report.ts");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
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
//import { Subject, Subscription } from 'rxjs';








var DeliveryUnloadedLrDetainedComponent = /** @class */ (function () {
    function DeliveryUnloadedLrDetainedComponent(stocksUnloadingRpt, modalService, router, stockReport) {
        var _this = this;
        this.stocksUnloadingRpt = stocksUnloadingRpt;
        this.modalService = modalService;
        this.router = router;
        this.stockReport = stockReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerUnloadingReportDetained = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.invoiceDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_10__["InvoiceDto"]();
        this.rightsForOffice = "Rights For Office";
        this.showSpinnerForAction = false;
        //invoice_Dto: InvoiceDto = new InvoiceDto();
        this.lr_Dto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.invoice_DtoLocalStorage = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_10__["InvoiceDto"]();
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
            this.invoice_DtoLocalStorage = JSON.parse(localStorage.getItem('popupDeliveryUnloadedDetained'));
            localStorage.clear();
            if (this.invoice_DtoLocalStorage != null && this.invoice_DtoLocalStorage != undefined) {
                this.unloadingReportLrDetained(this.invoice_DtoLocalStorage);
            }
        }
    }
    DeliveryUnloadedLrDetainedComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    DeliveryUnloadedLrDetainedComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsUnloadingReportDetained = {
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
                    exportOptions: {
                        columns: [0, 3, 10, 2, 11, 12, 13, 14, 15, 16]
                    },
                    messageTop: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                            "<u>Unloading Report</u><br><br>" +
                            "Printed On : " + moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('DD-MM-YYYY') +
                            "<br><br>" +
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
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return "Unloading Report - " +
                            "Printed On : " + moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('DD-MM-YYYY') + "";
                        //"From : " + companyFrom + " -  " +
                        //"To  : " + companyTo + "" + "";
                    },
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
                // computing column Total of the complete result 
                var totalLrs = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(3).footer()).html(totalLrs);
            },
        };
    };
    DeliveryUnloadedLrDetainedComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
            });
        });
    };
    DeliveryUnloadedLrDetainedComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerUnloadingReportDetained.next();
    };
    DeliveryUnloadedLrDetainedComponent.prototype.ngAfterViewInit = function () {
        //this.dtTriggerUnloadingReportDetained.next();
    };
    DeliveryUnloadedLrDetainedComponent.prototype.unloadingReportLrDetained = function (invoice_DtoLocalStorage) {
        var _this = this;
        this.lr_Dto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.lr_Dto.mode = invoice_DtoLocalStorage.mode;
        this.lr_Dto.invoiceNumber = invoice_DtoLocalStorage.invoiceNumber;
        this.lr_Dto.description = invoice_DtoLocalStorage.address;
        this.lr_Dto.commodityCode = invoice_DtoLocalStorage.commodityCode;
        this.lr_Dto.branch = this.userDataDtoReturnSession.mainStation;
        this.lr_Dto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.lr_Dto);
        this.showSpinnerForAction = true;
        this.stockReport.getUnloadingReportLrDetailsDetainReport(this.lr_Dto).subscribe(function (response) {
            _this.unloadingReportDetainedDataList = [];
            $("#stockUnloadingDetainedTableId").DataTable().destroy();
            console.log(response);
            if (response.length > 0) {
                _this.unloadingReportDetainedDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Alert", "No Datas Found For This Information", "info");
            }
            _this.dtTriggerUnloadingReportDetained.next();
            _this.showSpinnerForAction = false;
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting  unloading report lr Details", "error");
            },
            function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DeliveryUnloadedLrDetainedComponent.prototype, "dtElements", void 0);
    DeliveryUnloadedLrDetainedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delivery-unloaded-lr-detained',
            template: __webpack_require__(/*! ./delivery-unloaded-lr-detained.component.html */ "./src/app/report/stocks-report/delivery-unloaded-lr-detained/delivery-unloaded-lr-detained.component.html"),
            styles: [__webpack_require__(/*! ./delivery-unloaded-lr-detained.component.css */ "./src/app/report/stocks-report/delivery-unloaded-lr-detained/delivery-unloaded-lr-detained.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_dataService_stock_report__WEBPACK_IMPORTED_MODULE_9__["StockReport"]])
    ], DeliveryUnloadedLrDetainedComponent);
    return DeliveryUnloadedLrDetainedComponent;
}());



/***/ }),

/***/ "./src/app/report/stocks-report/delivery-unloaded-lr-notdetained/delivery-unloaded-lr-notdetained.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/delivery-unloaded-lr-notdetained/delivery-unloaded-lr-notdetained.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/* the below code we add to view the option in popup modal starts  for truck master*/\n\n::ng-deep .cdk-overlay-container {\n\t/* Do you changes here */\n\tposition: fixed;\n\tz-index: 9999;\n}\n\n::ng-deep .cdk-overlay-pane {\n\tz-index: 9999;\n}\n\n::ng-deep .myCustomModalClass\t.modal-dialog {\n\tmax-width: auto;\n}\n\n/* the below code we add to view the option in popup modal ends truck master*/\n\n/* the below code we add to view the option in popup modal starts  for truck master*/\n\n::ng-deep .modalClassForPopUp\t.modal-dialog {\n\tmax-width: 80%;\n}\n\n/* the below code we add to view the option in popup modal ends truck master*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0b2Nrcy1yZXBvcnQvZGVsaXZlcnktdW5sb2FkZWQtbHItbm90ZGV0YWluZWQvZGVsaXZlcnktdW5sb2FkZWQtbHItbm90ZGV0YWluZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7O0FBRUQscUZBQXFGOztBQUNyRjtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkOztBQUVEO0NBQ0MsY0FBYztDQUNkOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUNELDhFQUE4RTs7QUFFOUUscUZBQXFGOztBQUVyRjtDQUNDLGVBQWU7Q0FDZjs7QUFDRCw4RUFBOEUiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvc3RvY2tzLXJlcG9ydC9kZWxpdmVyeS11bmxvYWRlZC1sci1ub3RkZXRhaW5lZC9kZWxpdmVyeS11bmxvYWRlZC1sci1ub3RkZXRhaW5lZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuXG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIHN0YXJ0cyAgZm9yIHRydWNrIG1hc3RlciovXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG5cdC8qIERvIHlvdSBjaGFuZ2VzIGhlcmUgKi9cblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiA5OTk5O1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xuXHR6LWluZGV4OiA5OTk5O1xufVxuXG46Om5nLWRlZXAgLm15Q3VzdG9tTW9kYWxDbGFzc1x0Lm1vZGFsLWRpYWxvZyB7XG5cdG1heC13aWR0aDogYXV0bztcbn1cbi8qIHRoZSBiZWxvdyBjb2RlIHdlIGFkZCB0byB2aWV3IHRoZSBvcHRpb24gaW4gcG9wdXAgbW9kYWwgZW5kcyB0cnVjayBtYXN0ZXIqL1xuXG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIHN0YXJ0cyAgZm9yIHRydWNrIG1hc3RlciovXG5cbjo6bmctZGVlcCAubW9kYWxDbGFzc0ZvclBvcFVwXHQubW9kYWwtZGlhbG9nIHtcblx0bWF4LXdpZHRoOiA4MCU7XG59XG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIGVuZHMgdHJ1Y2sgbWFzdGVyKi8iXX0= */"

/***/ }),

/***/ "./src/app/report/stocks-report/delivery-unloaded-lr-notdetained/delivery-unloaded-lr-notdetained.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/delivery-unloaded-lr-notdetained/delivery-unloaded-lr-notdetained.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">LR Details</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div [hidden]=\"!showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable id=\"stockUnloadingNotDetainedTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsUnloadingReportNotDetained\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerUnloadingReportNotDetained\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR Status</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Pack Nature</th>\n\t\t\t\t\t\t\t\t\t\t<th>Delivery Point</th>\n\t\t\t\t\t\t\t\t\t\t<th>Pvt Marker</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!notshowcolumn\">Case</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!notshowcolumn\">GCase</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!notshowcolumn\">Cart</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!notshowcolumn\">GCart</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!notshowcolumn\">Bundle</th>\n\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!notshowcolumn\">Roll</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let unloadingReportNotDetainedData of unloadingReportNotDetainedDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportNotDetainedData.lrNumber}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportNotDetainedData.lrStatus}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportNotDetainedData.consigneeName}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportNotDetainedData.totalArticles}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportNotDetainedData.packNature}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportNotDetainedData.deliveryPoints}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{unloadingReportNotDetainedData.privateMarker}}</td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!notshowcolumn\"></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/stocks-report/delivery-unloaded-lr-notdetained/delivery-unloaded-lr-notdetained.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/delivery-unloaded-lr-notdetained/delivery-unloaded-lr-notdetained.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: DeliveryUnloadedLrNotDetainedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryUnloadedLrNotDetainedComponent", function() { return DeliveryUnloadedLrNotDetainedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_dataService_stock_report__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/stock-report */ "./src/app/dataService/stock-report.ts");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
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
//import { Subject, Subscription } from 'rxjs';








var DeliveryUnloadedLrNotDetainedComponent = /** @class */ (function () {
    function DeliveryUnloadedLrNotDetainedComponent(stocksUnloadingRpt, modalService, router, stockReport) {
        var _this = this;
        this.stocksUnloadingRpt = stocksUnloadingRpt;
        this.modalService = modalService;
        this.router = router;
        this.stockReport = stockReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerUnloadingReportNotDetained = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.invoiceDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_10__["InvoiceDto"]();
        this.rightsForOffice = "Rights For Office";
        this.hideAndShowDetainedTable = false;
        this.hideAndShowNotDetainedTable = false;
        this.showSpinnerForAction = false;
        //invoice_Dto: InvoiceDto = new InvoiceDto();
        this.lr_Dto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.invoice_DtoLocalStorage = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_10__["InvoiceDto"]();
        this.fromStation = null;
        this.toStation = null;
        this.lrDtoPrint = [];
        this.lrDtoPrint1 = [];
        this.lr_DtoPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
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
            this.invoice_DtoLocalStorage = JSON.parse(localStorage.getItem('popupDeliveryUnloadedNotDetained'));
            localStorage.clear();
            if (this.invoice_DtoLocalStorage != null && this.invoice_DtoLocalStorage != undefined) {
                this.unloadingReportLrNotDetained(this.invoice_DtoLocalStorage);
            }
        }
    }
    DeliveryUnloadedLrNotDetainedComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    DeliveryUnloadedLrNotDetainedComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        // this.showSpinnerForAction = true;
        //  this.lrDtoPrint1 = this.lrDtoPrint;
        //var companyFrom = this.lrDtoPrint1[0].source;
        // this.showSpinnerForAction = false;
        //  var companyTo = null;
        this.dtOptionsUnloadingReportNotDetained = {
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
                    exportOptions: {
                        columns: [0, 3, 6, 2, 7, 8, 9, 10, 11, 12]
                    },
                    messageTop: function () {
                        return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                            "<u>Unloading Report</u><br><br>" +
                            "Printed On : " + moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('DD-MM-YYYY') +
                            "<br><br>" +
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
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return "Unloading Report - " +
                            "Printed On : " + moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('DD-MM-YYYY') + "";
                        //"From : " + companyFrom + " -  " +
                        //"To  : " + companyTo + "" + "";
                    },
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
                // computing column Total of the complete result 
                var totalLrs = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(3).footer()).html(totalLrs);
            },
        };
    };
    DeliveryUnloadedLrNotDetainedComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
            });
        });
    };
    DeliveryUnloadedLrNotDetainedComponent.prototype.ngOnDestroy = function () {
        // this.dtTriggerUnloadingReportDetained.next();
        this.dtTriggerUnloadingReportNotDetained.next();
    };
    DeliveryUnloadedLrNotDetainedComponent.prototype.ngAfterViewInit = function () {
        //this.dtTriggerUnloadingReportDetained.next();
    };
    DeliveryUnloadedLrNotDetainedComponent.prototype.unloadingReportLrNotDetained = function (invoice_DtoLocalStorage) {
        var _this = this;
        this.lr_Dto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.lr_Dto.mode = invoice_DtoLocalStorage.mode;
        this.lr_Dto.invoiceNumber = invoice_DtoLocalStorage.invoiceNumber;
        this.lr_Dto.description = invoice_DtoLocalStorage.address;
        this.lr_Dto.commodityCode = invoice_DtoLocalStorage.commodityCode;
        this.lr_Dto.branch = this.userDataDtoReturnSession.mainStation;
        this.lr_Dto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.lr_Dto);
        this.showSpinnerForAction = true;
        this.stockReport.getUnloadingReportLrDetailsNotDetainReport(this.lr_Dto).subscribe(function (response) {
            _this.unloadingReportNotDetainedDataList = [];
            $("#stockUnloadingNotDetainedTableId").DataTable().destroy();
            console.log(response);
            if (response.length > 0) {
                _this.unloadingReportNotDetainedDataList = response;
                /// this.print(response);
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Alert", "No Datas Found For This Information", "info");
            }
            _this.dtTriggerUnloadingReportNotDetained.next();
            _this.showSpinnerForAction = false;
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting  unloading report lr Details", "error");
            },
            function () { return console.log('done'); };
    };
    DeliveryUnloadedLrNotDetainedComponent.prototype.print = function (response) {
        for (var i = 0; i < response.length; i++) {
            this.lr_DtoPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
            this.lrDtoPrint.push(response[i]);
        }
        return this.lrDtoPrint;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DeliveryUnloadedLrNotDetainedComponent.prototype, "dtElements", void 0);
    DeliveryUnloadedLrNotDetainedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delivery-unloaded-lr-notdetained',
            template: __webpack_require__(/*! ./delivery-unloaded-lr-notdetained.component.html */ "./src/app/report/stocks-report/delivery-unloaded-lr-notdetained/delivery-unloaded-lr-notdetained.component.html"),
            styles: [__webpack_require__(/*! ./delivery-unloaded-lr-notdetained.component.css */ "./src/app/report/stocks-report/delivery-unloaded-lr-notdetained/delivery-unloaded-lr-notdetained.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_dataService_stock_report__WEBPACK_IMPORTED_MODULE_9__["StockReport"]])
    ], DeliveryUnloadedLrNotDetainedComponent);
    return DeliveryUnloadedLrNotDetainedComponent;
}());



/***/ }),

/***/ "./src/app/report/stocks-report/godown-stocks-booking-report/godown-stocks-booking-report.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/godown-stocks-booking-report/godown-stocks-booking-report.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n    top:26px;\r\n      left:25px;\r\n      max-height: 150px;\r\n      overflow-y: auto;\r\n      position: absolute;\r\n  }\r\n  .pointer {cursor: pointer;}\r\n  \r\n  \r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0b2Nrcy1yZXBvcnQvZ29kb3duLXN0b2Nrcy1ib29raW5nLXJlcG9ydC9nb2Rvd24tc3RvY2tzLWJvb2tpbmctcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO01BQ1AsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsbUJBQW1CO0dBQ3RCO0VBQ0QsVUFBVSxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9zdG9ja3MtcmVwb3J0L2dvZG93bi1zdG9ja3MtYm9va2luZy1yZXBvcnQvZ29kb3duLXN0b2Nrcy1ib29raW5nLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93IHtcclxuICAgIHRvcDoyNnB4O1xyXG4gICAgICBsZWZ0OjI1cHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIC5wb2ludGVyIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/report/stocks-report/godown-stocks-booking-report/godown-stocks-booking-report.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/godown-stocks-booking-report/godown-stocks-booking-report.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Godown Stocks Booking Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxAgentWise\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"agentWiseCheckBoxEvent($event)\"><label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxAgentWise\">Agent Wise</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"summary\">Summary</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"detail\">Detail</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!hideshowSourceDropDown\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sourceId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSource\" [ngbTypeahead]=\"searchSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"sourceListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destinationId\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"destinationListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateSearchBtn();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t(click)=\"clearBtn();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideshowSummaryTable\">\n\t\t\t\t\t\t\t<!-- the first datatble starts -->\n\t\t\t\t\t\t\t<!---<p>Summary</p>-->\n\t\t\t\t\t\t\t<table datatable id=\"summaryTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSummary\" [dtTrigger]=\"dtTriggerSummary\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Entry Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Book Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Lrs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Entry - Booking)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Current - Entry)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Current - Booking) </th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let smryData of summaryDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.enteredDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.dispatchedwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.arrivalwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.diffDays }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- the first datatble ends -->\n\t\t\t\t\t\t<!-- <the second datatable starts  -->\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideshowDetailTable\">\n\t\t\t\t\t\t\t<!--<p>Detaildd</p>-->\n\t\t\t\t\t\t\t<table datatable id=\"detailsTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\" [dtOptions]=\"dtOptionDetail\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDetail\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Entry Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Book Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Entry - Booking)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Current - Entry)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Current - Booking) </th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let detailData of detailDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.enteredDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.commodityName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.dispatchedwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.arrivalwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.diffDays }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--the second datatable ends  -->\n\t\t\t\t\t\t<!-- the third datatable starts  -->\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideshowSummaryChbxTable\">\n\t\t\t\t\t\t\t<!--<p>Summary Check</p>-->\n\t\t\t\t\t\t\t<table datatable id=\"summaryCheckBoxTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSummaryChkbx\" [dtTrigger]=\"dtTriggerSummaryChkbx\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Entry Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Lrs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Book Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Entry - Booking)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Current - Entry)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Current - Booking) </th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let smryDataChkbx of summaryChkbxDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryDataChkbx.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryDataChkbx.enteredDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryDataChkbx.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryDataChkbx.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryDataChkbx.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryDataChkbx.dispatchedwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryDataChkbx.arrivalwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryDataChkbx.diffDays }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryDataChkbx.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ smryDataChkbx.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- the third datatable ends  -->\n\t\t\t\t\t\t<!-- the fourth datatable starts  -->\n\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!hideshowDetailChbxTable\">\n\t\t\t\t\t\t\t<!--<p>Details Check</p>-->\n\t\t\t\t\t\t\t<table datatable id=\"detailsCheckBoxTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionDetailChkbx\" [dtTrigger]=\"dtTriggerDetailChkbx\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Entry Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Book Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Entry - Booking)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Current - Entry)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff(Current - Booking) </th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let detailDataChkbx of detailChkbxDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailDataChkbx.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailDataChkbx.enteredDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailDataChkbx.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailDataChkbx.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailDataChkbx.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailDataChkbx.commodityName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailDataChkbx.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailDataChkbx.dispatchedwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailDataChkbx.arrivalwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailDataChkbx.diffDays }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailDataChkbx.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ detailDataChkbx.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/stocks-report/godown-stocks-booking-report/godown-stocks-booking-report.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/godown-stocks-booking-report/godown-stocks-booking-report.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: GodownStocksBookingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownStocksBookingReportComponent", function() { return GodownStocksBookingReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var GodownStocksBookingReportComponent = /** @class */ (function () {
    function GodownStocksBookingReportComponent(godownStocksBookingRpt, router, memoReport, masterReadService, modalService, lrReport) {
        var _this = this;
        this.godownStocksBookingRpt = godownStocksBookingRpt;
        this.router = router;
        this.memoReport = memoReport;
        this.masterReadService = masterReadService;
        this.modalService = modalService;
        this.lrReport = lrReport;
        //summaryTable:any;
        this.loadingIndicator = true;
        this.viewTypeSummary = true;
        this.ViewDate = true;
        this.viewTypeDetail = false;
        //supList: SupplierModel[] = [];
        //
        this.dtTriggerSummary = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtTriggerDetail = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtTriggerSummaryChkbx = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtTriggerDetailChkbx = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        //firstDtOptions: DataTables.Settings = {};
        //secondDtOptions: DataTables.Settings = {};
        this.isLoggedIn = true;
        this.lrDtoSourceStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.sourceTA = [];
        this.focusSourceTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchSource = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.sourceTA
                : _this.sourceTA.filter(function (v) { return v.destination; })).slice(0, 200); }));
        };
        this.formatterSource = function (x) { return x.destination; };
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.destinationLrDtoAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.cbSourceView = false;
        this.hideshowSourceDropDown = false;
        this.validateAgentWiseCheckBoxValue = false;
        //datatable hideshow
        this.hideshowSummaryTable = false;
        this.hideshowDetailTable = false;
        this.hideshowSummaryChbxTable = false;
        this.hideshowDetailChbxTable = false;
        this.validateSourceIdValue = null;
        this.validateDestinationIdValue = null;
        this.validateViewTypeId = null;
        this.lrDtoSummary = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoAgentSummary = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoAgentDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.showSpinnerForAction = false;
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
            for (var key in this.userDataDtoReturnSession.sortedMapFeatures) {
                //Whatever you want to do with key or obj[key]
                if (key == 'Rights') {
                    for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                        //Whatever you want to do with key or obj[key]
                        if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == 'Source BkgGodStks') {
                            this.cbSourceView = true;
                            this.hideshowSourceDropDown = true;
                            if (this.cbSourceView == true) {
                                if (this.hideshowSourceDropDown == true) {
                                    this.getSourceStationDetails();
                                }
                            }
                        }
                    }
                }
            }
            this.getDestinationDetails();
            this.hideshowSummaryTable = true;
        }
    }
    GodownStocksBookingReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    GodownStocksBookingReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        // if (this.cbSourceView == true) {
        var booleanCheckSource = this.cbSourceView;
        var companyOffice = this.userDataDtoReturnSession.office;
        //}
        //first datatable starts 
        this.dtOptionsSummary = {
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
                        if (booleanCheckSource == true) {
                            return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                "<u>Godown Stocks Report-Booking(Summary)</u><br><br>" +
                                "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                "<br><br>" +
                                "From : " + $("#sourceId").val() + " -  " +
                                "To  : " + $("#destinationId").val() + "" +
                                "</td>" +
                                "</tr></table><br>";
                        }
                        else {
                            return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                "<u>Godown Stocks Report-Booking(Summary)</u><br><br>" +
                                "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                "<br><br>" +
                                "From : " + companyOffice + " -  " +
                                "To  : " + $("#destinationId").val() + "" +
                                "</td>" +
                                "</tr></table><br>";
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
                        if (booleanCheckSource == true) {
                            return "Godown Stocks Report-Booking(Summary) - " +
                                "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                "From : " + $("#sourceId").val() + " -  " +
                                "To  : " + $("#destinationId").val() + "" + "";
                        }
                        else {
                            return "Godown Stocks Report-Booking(Summary) - " +
                                "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                " From : " + companyOffice + " -  " +
                                "To  : " + $("#destinationId").val() + "" + "";
                        }
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
            "scrollY": 380,
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
                // computing column Total of the complete result 
                var totalLrs = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var article = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var cgdWgt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(2).footer()).html(totalLrs);
                $(api.column(3).footer()).html(article);
                $(api.column(7).footer()).html(actWgt);
                $(api.column(8).footer()).html(cgdWgt);
            },
        },
            //first datatable ends
            //second datatable starts 
            this.dtOptionDetail = {
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
                        exportOptions: {
                            columns: [0, 1, 2, 5, 3, 4, 6, 7, 8, 9, 10]
                        },
                        messageTop: function () {
                            if (booleanCheckSource == true) {
                                return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                    "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                    "<u>Godown Stocks Report-Booking(Details)</u><br><br>" +
                                    "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                    "<br><br>" +
                                    "From : " + $("#sourceId").val() + " -  " +
                                    "To  : " + $("#destinationId").val() + "" +
                                    "</td>" +
                                    "</tr></table><br>";
                            }
                            else {
                                return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                    "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                    "<u>Godown Stocks Report-Booking(Summary)</u><br><br>" +
                                    "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                    "<br><br>" +
                                    "From : " + companyOffice + " -  " +
                                    "To  : " + $("#destinationId").val() + "" +
                                    "</td>" +
                                    "</tr></table><br>";
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
                            if (booleanCheckSource == true) {
                                return "Godown Stocks Report-Booking(Summary) - " +
                                    "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                    "From : " + $("#sourceId").val() + " -  " +
                                    "To  : " + $("#destinationId").val() + "" + "";
                            }
                            else {
                                return "Godown Stocks Report-Booking(Details) - " +
                                    "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                    " From : " + companyOffice + " -  " +
                                    "To  : " + $("#destinationId").val() + "" + "";
                            }
                        },
                        exportOptions: {
                            columns: [0, 1, 2, 5, 3, 4, 6, 7, 8, 9, 10]
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
                    var actWgt = api.column(9).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var cgdWgt = api.column(10).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    // Update footer by showing the total with the reference of the column index 
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(3).footer()).html(article);
                    $(api.column(9).footer()).html(actWgt);
                    $(api.column(10).footer()).html(cgdWgt);
                },
            },
            //second datatable ends
            //third datatable starts 
            this.dtOptionsSummaryChkbx = {
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
                        exportOptions: {
                            columns: [0, 1, 3, 2, 4, 5, 6, 7, 8, 9]
                        },
                        messageTop: function () {
                            if (booleanCheckSource == true) {
                                return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                    "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                    "<u>Godown Stocks Report-Booking(Summary)</u><br><br>" +
                                    "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                    "<br><br>" +
                                    "From : " + $("#sourceId").val() + " -  " +
                                    "To  : " + $("#destinationId").val() + "" +
                                    "</td>" +
                                    "</tr></table><br>";
                            }
                            else {
                                return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                    "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                    "<u>Godown Stocks Report-Booking(Summary)</u><br><br>" +
                                    "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                    "<br><br>" +
                                    "From : " + companyOffice + " -  " +
                                    "To  : " + $("#destinationId").val() + "" +
                                    "</td>" +
                                    "</tr></table><br>";
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
                            if (booleanCheckSource == true) {
                                return "Godown Stocks Report-Booking(Summary) - " +
                                    "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                    "From : " + $("#sourceId").val() + " -  " +
                                    "To  : " + $("#destinationId").val() + "" + "";
                            }
                            else {
                                return "Godown Stocks Report-Booking(Summary) - " +
                                    "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                    " From : " + companyOffice + " -  " +
                                    "To  : " + $("#destinationId").val() + "" + "";
                            }
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
                    var article = api.column(4).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actWgt = api.column(7).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var cgdWgt = api.column(8).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    // Update footer by showing the total with the reference of the column index 
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(4).footer()).html(article);
                    $(api.column(8).footer()).html(actWgt);
                    $(api.column(9).footer()).html(cgdWgt);
                },
            },
            //third datatable ends
            //fourth datatable starts
            this.dtOptionDetailChkbx = {
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
                        exportOptions: {
                            columns: [0, 1, 2, 3, 6, 4, 5, 7, 8, 9, 10, 11]
                        },
                        messageTop: function () {
                            if (booleanCheckSource == true) {
                                return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                    "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                    "<u>Godown Stocks Report-Booking(Details)</u><br><br>" +
                                    "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                    "<br><br>" +
                                    "From : " + $("#sourceId").val() + " -  " +
                                    "To  : " + $("#destinationId").val() + "" +
                                    "</td>" +
                                    "</tr></table><br>";
                            }
                            else {
                                return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                    "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                    "<u>Godown Stocks Report-Booking(Summary)</u><br><br>" +
                                    "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                    "<br><br>" +
                                    "From : " + companyOffice + " -  " +
                                    "To  : " + $("#destinationId").val() + "" +
                                    "</td>" +
                                    "</tr></table><br>";
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
                            if (booleanCheckSource == true) {
                                return "Godown Stocks Report-Booking(Details) - " +
                                    "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                    " From : " + $("#sourceId").val() + " -  " +
                                    "To  : " + $("#destinationId").val() + "" + "";
                            }
                            else {
                                return "Godown Stocks Report-Booking(Summary) - " +
                                    "Date : " + moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('DD-MM-YYYY') +
                                    "From : " + companyOffice + " -  " +
                                    "To  : " + $("#destinationId").val() + "" + "";
                            }
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
                    var article = api.column(4).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actWgt = api.column(10).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var cgdWgt = api.column(11).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    // Update footer by showing the total with the reference of the column index 
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(4).footer()).html(article);
                    $(api.column(10).footer()).html(actWgt);
                    $(api.column(11).footer()).html(cgdWgt);
                },
            };
        //fourth datatable ends
    };
    GodownStocksBookingReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    GodownStocksBookingReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerSummary.next();
        //this.dtTriggerUnloadingReportDetained.next();
    };
    GodownStocksBookingReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerSummary.unsubscribe();
        this.dtTriggerDetail.unsubscribe();
        this.dtTriggerSummaryChkbx.unsubscribe();
        this.dtTriggerDetailChkbx.unsubscribe();
        // this.onDestroyUnsubscribtionSmry.unsubscribe();
        // this.onDestroyUnsubscribtionDetail.unsubscribe();
        // this.onDestroyUnsubscribtionSmryChkbx.unsubscribe();
        // this.onDestroyUnsubscribtionDetailChkbx.unsubscribe();
    };
    GodownStocksBookingReportComponent.prototype.clearBtn = function () {
        this.clearFeild();
    };
    GodownStocksBookingReportComponent.prototype.clearFeild = function () {
        this.validateAgentWiseCheckBoxValue = false;
        this.destinationLrDtoAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        $("#viewType").val('summary');
        $("#checkboxAgentWise").prop('checked', false);
        this.validateSourceIdValue = null;
        this.validateDestinationIdValue = null;
        this.validateViewTypeId = null;
        this.modelSource = null;
        this.modelDestination = null;
        //
        this.hideshowSummaryTable = true;
        this.hideshowDetailTable = false;
        this.hideshowSummaryChbxTable = false;
        this.hideshowDetailChbxTable = false;
        $("#summaryTableId").DataTable().destroy();
        this.summaryDataList = [];
        this.dtTriggerSummary.next();
    };
    GodownStocksBookingReportComponent.prototype.agentWiseCheckBoxEvent = function (values) {
        if (values.currentTarget.checked == true) {
            this.validateAgentWiseCheckBoxValue = true;
            $("#viewType").val('summary');
            this.validateSourceIdValue = null;
            this.validateDestinationIdValue = null;
            // this.validateViewTypeId = null;
            this.modelSource = null;
            this.modelDestination = null;
            //
            this.hideshowSummaryTable = false;
            this.hideshowDetailTable = false;
            this.hideshowSummaryChbxTable = true;
            this.hideshowDetailChbxTable = false;
            $("#summaryCheckBoxTableId").DataTable().destroy();
            this.summaryChkbxDataList = [];
            this.dtTriggerSummaryChkbx.next();
        }
        else if (values.currentTarget.checked == false) {
            this.validateAgentWiseCheckBoxValue = false;
            $("#viewType").val('summary');
            this.validateSourceIdValue = null;
            this.validateDestinationIdValue = null;
            //this.validateViewTypeId = null;
            this.modelSource = null;
            this.modelDestination = null;
            this.destinationTA = [];
            this.destinationLrDtoAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
            for (var i = 0; i < this.destinationOptions.length; i++) {
                this.destinationTA.push(this.destinationOptions[i]);
            }
            //
            this.hideshowSummaryTable = true;
            this.hideshowDetailTable = false;
            this.hideshowSummaryChbxTable = false;
            this.hideshowDetailChbxTable = false;
            $("#summaryTableId").DataTable().destroy();
            this.summaryDataList = [];
            this.dtTriggerSummary.next();
        }
    };
    GodownStocksBookingReportComponent.prototype.viewTypeMode = function (viewType) {
        console.log(viewType);
        if (viewType === 'summary') {
            if (this.validateAgentWiseCheckBoxValue == true) {
                this.destinationTA = [];
                this.destinationLrDtoAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
                for (var i = 0; i < this.destinationOptions.length; i++) {
                    this.destinationTA.push(this.destinationOptions[i]);
                }
                //
                this.hideshowSummaryTable = false;
                this.hideshowDetailTable = false;
                this.hideshowSummaryChbxTable = true;
                this.hideshowDetailChbxTable = false;
                this.validateSourceIdValue = null;
                this.validateDestinationIdValue = null;
                //this.validateViewTypeId = null;
                this.modelSource = null;
                this.modelDestination = null;
                $("#summaryCheckBoxTableId").DataTable().destroy();
                this.summaryChkbxDataList = [];
                this.dtTriggerSummaryChkbx.next();
            }
            else if (this.validateAgentWiseCheckBoxValue == false) {
                this.destinationTA = [];
                this.destinationLrDtoAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
                for (var i = 0; i < this.destinationOptions.length; i++) {
                    this.destinationTA.push(this.destinationOptions[i]);
                }
                //
                this.hideshowSummaryTable = true;
                this.hideshowDetailTable = false;
                this.hideshowSummaryChbxTable = false;
                this.hideshowDetailChbxTable = false;
                this.validateSourceIdValue = null;
                this.validateDestinationIdValue = null;
                //this.validateViewTypeId = null;
                this.modelSource = null;
                this.modelDestination = null;
                $("#summaryTableId").DataTable().destroy();
                this.summaryDataList = [];
                this.dtTriggerSummary.next();
            }
        }
        else if (viewType === 'detail') {
            if (this.validateAgentWiseCheckBoxValue == true) {
                this.destinationTA = [];
                this.destinationLrDtoAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
                this.destinationLrDtoAllOption.destination = "All";
                this.destinationTA.push(this.destinationLrDtoAllOption);
                for (var i = 0; i < this.destinationOptions.length; i++) {
                    this.destinationTA.push(this.destinationOptions[i]);
                }
                //
                this.hideshowSummaryTable = false;
                this.hideshowDetailTable = false;
                this.hideshowSummaryChbxTable = false;
                this.hideshowDetailChbxTable = true;
                this.validateSourceIdValue = null;
                this.validateDestinationIdValue = null;
                //this.validateViewTypeId = null;
                this.modelSource = null;
                this.modelDestination = null;
                $("#detailsCheckBoxTableId").DataTable().destroy();
                this.detailChkbxDataList = [];
                this.dtTriggerDetailChkbx.next();
            }
            else if (this.validateAgentWiseCheckBoxValue == false) {
                this.destinationTA = [];
                this.destinationLrDtoAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
                for (var i = 0; i < this.destinationOptions.length; i++) {
                    this.destinationTA.push(this.destinationOptions[i]);
                }
                //
                this.hideshowSummaryTable = false;
                this.hideshowDetailTable = true;
                this.hideshowSummaryChbxTable = false;
                this.hideshowDetailChbxTable = false;
                this.validateSourceIdValue = null;
                this.validateDestinationIdValue = null;
                //this.validateViewTypeId = null;
                this.modelSource = null;
                this.modelDestination = null;
                $("#detailsTableId").DataTable().destroy();
                this.detailDataList = [];
                this.dtTriggerDetail.next();
            }
        }
    };
    GodownStocksBookingReportComponent.prototype.sourceListener = function (e, fubi) {
        this.modelSource = e.item;
        $("#sourceId").val(this.modelSource.destination);
        this.validateSourceIdValue = this.modelSource.destination;
    };
    GodownStocksBookingReportComponent.prototype.destinationListener = function (e, fubi) {
        this.modelDestination = e.item;
        $("#destinationId").val(this.modelDestination.destination);
        this.validateDestinationIdValue = this.modelDestination.destination;
    };
    GodownStocksBookingReportComponent.prototype.getSourceStationMethod = function () {
        this.lrDtoSourceStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoSourceStation.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoSourceStation.branch = this.userDataDtoReturnSession.office;
        this.lrDtoSourceStation.mode = "logininfo";
    };
    GodownStocksBookingReportComponent.prototype.getSourceStationDetails = function () {
        var _this = this;
        this.getSourceStationMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoSourceStation).subscribe(function (response) {
            //console.log(response);
            if (response.length > 0) {
                _this.sourceStationOptions = response;
                _this.sourceTA = [];
                for (var i = 0; i < _this.sourceStationOptions.length; i++) {
                    _this.sourceTA.push(_this.sourceStationOptions[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.sourceStationOptions = [];
                _this.sourceTA = [];
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While getting the Source Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    GodownStocksBookingReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    GodownStocksBookingReportComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.getDestinationMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            if (response.length > 0) {
                _this.destinationOptions = response;
                _this.destinationTA = [];
                for (var i = 0; i < _this.destinationOptions.length; i++) {
                    _this.destinationTA.push(_this.destinationOptions[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.destinationOptions = [];
                _this.destinationTA = [];
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While getting the Source Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    GodownStocksBookingReportComponent.prototype.validateSearchBtn = function () {
        this.validateViewTypeId = $("#viewType").val();
        if (this.cbSourceView == true) {
            this.sourceModeMtd();
        }
        else {
            this.destinyModeMtd();
        }
    };
    GodownStocksBookingReportComponent.prototype.sourceModeMtd = function () {
        if (this.hideshowSourceDropDown == true) {
            if (($("#sourceId").val() == null) || ($("#sourceId").val() == undefined) ||
                ($("#sourceId").val() == "") || ($("#destinationId").val() == null) ||
                ($("#destinationId").val() == undefined) || ($("#destinationId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Field", "Source & Destination is Mandatory Field", "warning");
                return false;
            }
            else {
                this.searchMtd();
            }
        }
        else {
            if (($("#destinationId").val() == null) || ($("#destinationId").val() == undefined) ||
                ($("#destinationId").val() == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Field", "Destination is Mandatory Field", "warning");
                return false;
            }
            else {
                this.searchMtd();
            }
        }
    };
    GodownStocksBookingReportComponent.prototype.destinyModeMtd = function () {
        if (($("#destinationId").val() == null) || ($("#destinationId").val() == undefined) ||
            ($("#destinationId").val() == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Field", "Destination is Mandatory Field", "warning");
            return false;
        }
        else {
            this.searchMtd();
        }
    };
    GodownStocksBookingReportComponent.prototype.searchMtd = function () {
        if ($("#viewType").val() == "detail") {
            if (this.validateAgentWiseCheckBoxValue == true) {
                this.setGodownStockBookingAgentDetailsDatatable();
            }
            else {
                this.setGodownStockBookingDetailsDatatable();
            }
        }
        else if ($("#viewType").val() == "summary") {
            if (this.validateAgentWiseCheckBoxValue == true) {
                this.setGodownStockBookingAgentSummaryDatatable();
            }
            else {
                this.setGodownStockBookingSummaryDatatable();
            }
        }
    };
    GodownStocksBookingReportComponent.prototype.getGodownStockBookingSummaryData = function () {
        this.lrDtoSummary = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoSummary.mode = "summary";
        if ((this.cbSourceView == true) && ((this.validateSourceIdValue != null) ||
            (this.validateSourceIdValue != undefined) || (this.validateSourceIdValue != ""))) {
            this.lrDtoSummary.stocksAt = this.validateSourceIdValue;
        }
        else {
            this.lrDtoSummary.stocksAt = this.userDataDtoReturnSession.office;
        }
        this.lrDtoSummary.toStation = this.validateDestinationIdValue;
    };
    GodownStocksBookingReportComponent.prototype.setGodownStockBookingSummaryDatatable = function () {
        var _this = this;
        this.getGodownStockBookingSummaryData();
        this.showSpinnerForAction = true;
        console.log(this.lrDtoSummary);
        this.lrReport.getGodownStocksRptBookingSummary(this.lrDtoSummary).subscribe(function (response) {
            console.log(response);
            _this.summaryDataList = [];
            $("#summaryTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.summaryDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("No Data", "No Records found for this search", "info");
            }
            _this.dtTriggerSummary.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While getting the Godown Stock Summary Details", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    GodownStocksBookingReportComponent.prototype.getGodownStockBookingDetailsData = function () {
        this.lrDtoDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoDetails.mode = "Details";
        if ((this.cbSourceView == true) && ((this.validateSourceIdValue != null) ||
            (this.validateSourceIdValue != undefined) || (this.validateSourceIdValue != ""))) {
            this.lrDtoDetails.stocksAt = this.validateSourceIdValue;
        }
        else {
            this.lrDtoDetails.stocksAt = this.userDataDtoReturnSession.office;
        }
        this.lrDtoDetails.toStation = this.validateDestinationIdValue;
    };
    GodownStocksBookingReportComponent.prototype.setGodownStockBookingDetailsDatatable = function () {
        var _this = this;
        this.getGodownStockBookingDetailsData();
        this.showSpinnerForAction = true;
        console.log(this.lrDtoDetails);
        this.lrReport.getGodownStocksRptBookingDetails(this.lrDtoDetails).subscribe(function (response) {
            //console.log("Detail");
            _this.detailDataList = [];
            $("#detailsTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.detailDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("No Data", "No Records found for this search", "info");
            }
            _this.dtTriggerDetail.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While getting the Godown Stock Details", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    GodownStocksBookingReportComponent.prototype.getGodownStockBookingAgentSummaryData = function () {
        this.lrDtoAgentSummary = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoAgentSummary.mode = "AgtSummary";
        if ((this.cbSourceView == true) && ((this.validateSourceIdValue != null) ||
            (this.validateSourceIdValue != undefined) || (this.validateSourceIdValue != ""))) {
            this.lrDtoAgentSummary.stocksAt = this.validateSourceIdValue;
        }
        else {
            this.lrDtoAgentSummary.stocksAt = this.userDataDtoReturnSession.office;
        }
        this.lrDtoAgentSummary.toStation = this.validateDestinationIdValue;
    };
    GodownStocksBookingReportComponent.prototype.setGodownStockBookingAgentSummaryDatatable = function () {
        var _this = this;
        this.getGodownStockBookingAgentSummaryData();
        this.showSpinnerForAction = true;
        console.log(this.lrDtoAgentSummary);
        this.lrReport.getGodownStocksRptBookingSummary(this.lrDtoAgentSummary).subscribe(function (response) {
            // console.log("Summary Agent");
            console.log(response);
            _this.summaryChkbxDataList = [];
            $("#summaryCheckBoxTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.summaryChkbxDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("No Data", "No Records found for this search", "info");
            }
            _this.dtTriggerSummaryChkbx.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While getting the Godown Stock Agent Summary Details", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    GodownStocksBookingReportComponent.prototype.getGodownStockBookingAgentDetailsData = function () {
        this.lrDtoAgentDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoAgentDetails.mode = "AgtDetails";
        if ((this.cbSourceView == true) && ((this.validateSourceIdValue != null) ||
            (this.validateSourceIdValue != undefined) || (this.validateSourceIdValue != ""))) {
            this.lrDtoAgentDetails.stocksAt = this.validateSourceIdValue;
        }
        else {
            this.lrDtoAgentDetails.stocksAt = this.userDataDtoReturnSession.office;
        }
        if ((this.validateDestinationIdValue == null) || (this.validateDestinationIdValue == "") ||
            (this.validateDestinationIdValue == undefined) || (this.validateDestinationIdValue == "All")) {
            this.lrDtoAgentDetails.toStation = "All";
            this.lrDtoAgentDetails.reportMode = "";
        }
        else {
            this.lrDtoAgentDetails.toStation = this.validateDestinationIdValue;
            this.lrDtoAgentDetails.reportMode = "destSpec";
        }
    };
    GodownStocksBookingReportComponent.prototype.setGodownStockBookingAgentDetailsDatatable = function () {
        var _this = this;
        this.getGodownStockBookingAgentDetailsData();
        this.showSpinnerForAction = true;
        console.log(this.lrDtoAgentDetails);
        this.lrReport.getGodownStocksRptBookingDetails(this.lrDtoAgentDetails).subscribe(function (response) {
            // console.log("Details Agent");
            _this.detailChkbxDataList = [];
            $("#detailsCheckBoxTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.detailChkbxDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("No Data", "No Records found for this search", "info");
            }
            _this.dtTriggerDetailChkbx.next();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While getting the Godown Stock Agent Details", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], GodownStocksBookingReportComponent.prototype, "dtElements", void 0);
    GodownStocksBookingReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-godown-stocks-booking-report',
            template: __webpack_require__(/*! ./godown-stocks-booking-report.component.html */ "./src/app/report/stocks-report/godown-stocks-booking-report/godown-stocks-booking-report.component.html"),
            styles: [__webpack_require__(/*! ./godown-stocks-booking-report.component.css */ "./src/app/report/stocks-report/godown-stocks-booking-report/godown-stocks-booking-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_10__["MemoReport"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__["MasterReadService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_13__["LrReportService"]])
    ], GodownStocksBookingReportComponent);
    return GodownStocksBookingReportComponent;
}());



/***/ }),

/***/ "./src/app/report/stocks-report/godown-stocks-report/godown-stocks-report.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/report/stocks-report/godown-stocks-report/godown-stocks-report.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\t top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n}\r\n.pointer {cursor: pointer;}\r\n@media print {\r\n\tbody, html * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#showGodwnStckRpt, #showGodwnStckRpt * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#viewCustomPrintV1 {\r\n\t\tposition: static;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t\tmargin-top: -530px!important;\r\n\t}\r\n}\r\n::ng-deep .mat-horizontal-stepper-header {\r\n\tpointer-events: none !important;\r\n}\r\n::ng-deep .mat-progress-bar-fill::after {\r\n    background-color: green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0b2Nrcy1yZXBvcnQvZ29kb3duLXN0b2Nrcy1yZXBvcnQvZ29kb3duLXN0b2Nrcy1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7SUFDUCxVQUFVO0NBQ2Isa0JBQWtCO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0QjtBQUNELFVBQVUsZ0JBQWdCLENBQUM7QUFFM0I7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLE9BQU87RUFDUCw2QkFBNkI7RUFDN0I7Q0FDRDtBQUVEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvc3RvY2tzLXJlcG9ydC9nb2Rvd24tc3RvY2tzLXJlcG9ydC9nb2Rvd24tc3RvY2tzLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xyXG5cdCB0b3A6MjZweDtcclxuICAgIGxlZnQ6MjVweDtcclxuXHRtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnBvaW50ZXIge2N1cnNvcjogcG9pbnRlcjt9XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG5cdGJvZHksIGh0bWwgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cdCNzaG93R29kd25TdGNrUnB0LCAjc2hvd0dvZHduU3Rja1JwdCAqIHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0I3ZpZXdDdXN0b21QcmludFYxIHtcclxuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bWFyZ2luLXRvcDogLTUzMHB4IWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/stocks-report/godown-stocks-report/godown-stocks-report.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/report/stocks-report/godown-stocks-report/godown-stocks-report.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\" id=\"showGodwnStckRpt\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Godown Stocks Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"summary\">Summary</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"detail\">Detail</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"detailWithDestination\">Detail With\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDestination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngIf=\"partyViewType\" value=\"partyViewTypeSummary\">Party\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWise Summary</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngIf=\"partyViewType\" value=\"partyViewTypeDetail\">Party\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWise Detailed</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewGodownName\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Godown Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"godownName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelLocalGodown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchLocalGodown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterLocalGodown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterLocalGodown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusLocalGodownTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Godown Name\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"partyViewTypeStockAt\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Stock At</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"stockAt\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelStockAt\" [ngbTypeahead]=\"searchStockAt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterStockAt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterStockAt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusStockAtTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Stock At\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"partyViewTypeMainSource\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Main Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #mainSrc id=\"mainSrc\" name=\"mainSrc\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Select Main Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelForMainSrc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchMainSrcAt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterMainSrc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterMainSrc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusMainSrcTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewPartyName\" class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Party Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsignee($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewSource\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select multiple name=\"source\" id='source'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control select2-multiple\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let srcList of srcLists\">{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrcList }}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestination\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destination\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"consigneeDestListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- Date Is Hided Because We have Research Work On CheckBox Hide And Show -->\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" id=\"destDate\" name=\"destDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"destDateModel\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#dates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"dates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"ViewDays\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Days</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"days\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"searchMethod();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t(click)=\"clearMethod();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStocksSummaryReportTable\">Godown\n\t\t\t\t\t\t\t\t\t\t\t\t\tStocks Summary Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStocksDetailsReportTable\">Godown\n\t\t\t\t\t\t\t\t\t\t\t\t\tStocks Details Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStockReportDestinationWiseTable\">Godown\n\t\t\t\t\t\t\t\t\t\t\t\t\tStock Report Destination Wise</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStocksReportPartyWiseSummaryTable\">Godown\n\t\t\t\t\t\t\t\t\t\t\t\t\tStocks Report Party Summary Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStocksReportPartyWiseDetailsTable\">Godown\n\t\t\t\t\t\t\t\t\t\t\t\t\tStocks Party Details Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"dt-button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-left: 74%;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"customPrintStocksSummary()\" id=\"printAllBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStocksSummaryReportTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><i class=\"fas fa-print\">Print</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"dt-button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-left: 74%;\" (click)=\"customPrintStocksDetails()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"printAllBtn\" [hidden]=\"!godownStocksDetailsReportTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><i class=\"fas fa-print\">Print</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"dt-button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-left: 74%;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"customPrintDestinationWise()\" id=\"printAllBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStockReportDestinationWiseTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><i class=\"fas fa-print\">Print</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"dt-button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-left: 74%;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"customPrintPartyWiseSummary()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"printAllBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStocksReportPartyWiseSummaryTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><i class=\"fas fa-print\">Print</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"dt-button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-left: 74%;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"customPrintPartyWiseDetails()\" id=\"printAllBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStocksReportPartyWiseDetailsTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span><i class=\"fas fa-print\">Print</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStocksSummaryReportTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"godownStocksSummaryReportTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsGodownStocksSummaryReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerGodownStocksSummaryReport\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total LRs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>No Of Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Godown</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let godownStocksSummaryReportData of godownStocksSummaryReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksSummaryReportData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksSummaryReportData.totalArticles\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksSummaryReportData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksSummaryReportData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksSummaryReportData.actualWeight\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksSummaryReportData.chargedWeight\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksSummaryReportData.godownName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStocksDetailsReportTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"godownStocksDetailsReportTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionGodownStocksDetailsReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerGodownStocksDetailsReport\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Agent</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Desc</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ToPay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ActWt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ChgWt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Area</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Sub Station</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Del Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DiffInDate(Bkg-Arr)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DiffInDate(Cur-Arr)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Godown</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let godownStocksDetailsReportData of godownStocksDetailsReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.bookingDateStr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.totalArticles\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.actualWeight\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.chargedWeight\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.consignorName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.consigneeName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.areaOfDelivery\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.subStations }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.deliveryType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStocksDetailsReportData.dispatchedwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.arrivalwithin\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksDetailsReportData.godownName }}</td>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStockReportDestinationWiseTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"godownStockReportDestinationWiseTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionGodownStockReportDestinationWise\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerGodownStockReportDestinationWise\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Bkg Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Agent</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ToPay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Area</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Sub Station</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Godown</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Deliv Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DiffInDate(Arr-Bkg)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DiffInDate(Cur-Arr)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DiffInDate(Cur-Bkg)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let godownStockReportDestinationWiseData of godownStockReportDestinationWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStockReportDestinationWiseData.source\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStockReportDestinationWiseData.toPay\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStockReportDestinationWiseData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.areaOfDelivery }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.subStations }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.godownName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.deliveryType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.dispatchedwithin\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.arrivalwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{godownStockReportDestinationWiseData.actualDays}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStockReportDestinationWiseData.destination }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStocksReportPartyWiseSummaryTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"godownStocksReportPartyWiseSummaryTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionGodownStocksReportPartyWise\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerGodownStocksReportPartyWise\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lr Status</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total LRs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Mobile No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Office No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Contact Person</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Del.Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let godownStocksReportPartyWiseData of godownStocksReportPartyWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksReportPartyWiseData.lrStatus }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksReportPartyWiseData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStocksReportPartyWiseData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksReportPartyWiseData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksReportPartyWiseData.mobileNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksReportPartyWiseData.officeNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStocksReportPartyWiseData.contactPerson }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksReportPartyWiseData.deliveryType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStocksReportPartyWiseData.consigneeName }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!godownStocksReportPartyWiseDetailsTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"godownStocksReportPartyWiseDetailsTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionGodownStocksPartyDetailsReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerGodownStocksPartyDetailsReport\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR NO</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To-Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Stocks Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Date Diff</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let godownStocksPartyDetailsReportData of godownStocksPartyDetailsReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStocksPartyDetailsReportData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksPartyDetailsReportData.lrNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStocksPartyDetailsReportData.fromStation }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStocksPartyDetailsReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksPartyDetailsReportData.topay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksPartyDetailsReportData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksPartyDetailsReportData.actWeight\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksPartyDetailsReportData.chargedwt\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStocksPartyDetailsReportData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgodownStocksPartyDetailsReportData.arrivalDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ godownStocksPartyDetailsReportData.daysDiff\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"viewCustomPrintV1\" onafterprint=\"afterPrint()\"\n\t\tid=\"viewCustomPrintV1\">\n\t\t<app-custom-dynamic-printV1></app-custom-dynamic-printV1>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/stocks-report/godown-stocks-report/godown-stocks-report.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/report/stocks-report/godown-stocks-report/godown-stocks-report.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: GodownStocksReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownStocksReportComponent", function() { return GodownStocksReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
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


















var GodownStocksReportComponent = /** @class */ (function () {
    //
    function GodownStocksReportComponent(router, masterReadService, datePipe, lrReportService, masterService) {
        var _this = this;
        this.router = router;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        this.lrReportService = lrReportService;
        this.masterService = masterService;
        //for datepicker ends
        this.loadingIndicator = true;
        //hide and show starts 
        this.viewGodownName = false;
        this.viewPartyName = true;
        this.viewSource = false;
        this.viewDestination = false;
        this.viewTypeDetail = false;
        this.viewDate = false;
        this.partyViewType = false;
        this.partyViewTypeStockAt = false;
        this.partyViewTypeMainSource = false;
        this.ViewDays = false;
        this.controlSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        //supList: SupplierModel[] = [];
        //
        this.dtTriggerGodownStocksSummaryReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerGodownStocksDetailsReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerGodownStockReportDestinationWise = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerGodownStocksReportPartyWise = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerGodownStocksPartyDetailsReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.stockView = false;
        this.destView = false;
        this.srcSpec = false;
        this.partyView = false;
        this.viewSourceForBkg = false;
        this.showBkgSource = 'bkgSrc GodwonStockRpt';
        this.godownStocksSummaryReportTable = true;
        this.godownStocksDetailsReportTable = false;
        this.godownStockReportDestinationWiseTable = false;
        this.godownStocksReportPartyWiseSummaryTable = false;
        this.godownStocksReportPartyWiseDetailsTable = false;
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        //for ConsigneeName
        this.consigneeNamePartyDtoAllOption = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.consigneeNameTA = [];
        this.consigneeNameTATemp = [];
        this.focusConsigneeNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.consigneeNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.consigneeNameTA
                : _this.consigneeNameTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeName = function (x) { return x.consigneeName; };
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
        this.lrDtoStockAt = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.stockAtTA = [];
        this.focusStockAtTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchStockAt = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusStockAtTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.stockAtTA
                : _this.stockAtTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterStockAt = function (x) { return x.destination; };
        /////
        this.lrDtoStockAtAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        //// Main Src
        this.agentDtoForMainSrc = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__["AgentDetailsDto"]();
        this.agentDtoForMainSrcAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__["AgentDetailsDto"]();
        this.mainSrcTA = [];
        this.focusMainSrcTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchMainSrcAt = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusMainSrcTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.mainSrcTA
                : _this.mainSrcTA.filter(function (v) { return v.mainBookStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterMainSrc = function (x) { return x.mainBookStations; };
        this.lrDtoLocalGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoLocalGodownAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.localGodownTA = [];
        this.focusLocalGodownTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchLocalGodown = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusLocalGodownTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.localGodownTA
                : _this.localGodownTA.filter(function (v) { return v.godownName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterLocalGodown = function (x) { return x.godownName; };
        this.searchBySummaryWiseDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.setDestination = [];
        this.searchByDetailedWiseDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchByDetailedDestWiseDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchByPartyDetailsWiseDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_18__["InvoiceDto"]();
        this.setStocksAt = [];
        this.searchPartyWiseTotalStatusDtoPopup = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchByDetailedWiseDtoPopup = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        //for custom print
        this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
        this.cashMemoDtoForCustomPrintListColumnNames = [];
        this.cashMemoDtoForCustomPrintListColumnWidths = [];
        this.cashMemoDtoForCustomPrintData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
        this.cashMemoDtoForCustomPrintListColumnValues = [];
        this.viewCustomPrintV1 = false;
        this.cashMemoDtoForCustomPrintListHeadingNamesV1 = [];
        this.cashMemoDtoForCustomPrintListHeadingValuesV1 = [];
        this.getConsigneeDetails = function (destShow) {
            _this.getConsigneeDetailsList(destShow);
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No Consignee Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.consigneeNameOptions = [];
                    _this.consigneeNameTA = [];
                    _this.consigneeNamePartyDtoAllOption.consigneeName = "All";
                    _this.consigneeNameTA.push(_this.consigneeNamePartyDtoAllOption);
                    $("#consigneeName").val('All');
                }
                else {
                    _this.consigneeNameOptions = response;
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                    _this.consigneeNamePartyDtoAllOption.consigneeName = "All";
                    _this.consigneeNameTA.push(_this.consigneeNamePartyDtoAllOption);
                    for (var i = 0; i < _this.consigneeNameOptions.length; i++) {
                        _this.consigneeNameTA.push(_this.consigneeNameOptions[i]);
                    }
                    _this.consigneeNameTATemp = _this.consigneeNameTA;
                    $("#consigneeName").val('All');
                    console.log(_this.consigneeNameTA);
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the consignee details", "info");
            }, function () { return console.log('done'); };
        };
        this.searchBySummaryWiseMethod = function () {
            _this.showSpinnerForAction = true;
            _this.lrReportService.getOSStocksSummary(_this.searchBySummaryWiseDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#godownStocksSummaryReportTableId").DataTable().destroy();
                _this.godownStocksSummaryReportDataList = [];
                //this.callServForTableDestroy();
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
                    _this.godownStocksSummaryReportDataList = response;
                    console.log(_this.godownStocksSummaryReportDataList);
                }
                _this.dtTriggerGodownStocksSummaryReport.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Summary View", "info");
            }, function () { return console.log('done'); };
        };
        this.searchByDetailedWiseMethod = function () {
            _this.showSpinnerForAction = true;
            _this.lrReportService.getOSStocksDetails(_this.searchByDetailedWiseDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#godownStocksDetailsReportTableId").DataTable().destroy();
                _this.godownStocksDetailsReportDataList = [];
                //this.callServForTableDestroy();
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
                    _this.godownStocksDetailsReportDataList = response;
                    console.log(_this.godownStocksDetailsReportDataList);
                }
                _this.dtTriggerGodownStocksDetailsReport.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Details View", "info");
            }, function () { return console.log('done'); };
        };
        this.searchByDetailedDestinationWiseMethod = function () {
            _this.showSpinnerForAction = true;
            _this.lrReportService.getOSStocksDetails(_this.searchByDetailedDestWiseDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#godownStockReportDestinationWiseTableId").DataTable().destroy();
                _this.godownStockReportDestinationWiseDataList = [];
                //this.callServForTableDestroy();
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
                    _this.godownStockReportDestinationWiseDataList = response;
                    console.log(_this.godownStockReportDestinationWiseDataList);
                }
                _this.dtTriggerGodownStockReportDestinationWise.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the  Destination View", "info");
            }, function () { return console.log('done'); };
        };
        this.searchByPartyDetailsWiseMethod = function () {
            _this.showSpinnerForAction = true;
            _this.lrReportService.getOsStocksPartyDetailsReport(_this.searchByPartyDetailsWiseDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#godownStocksReportPartyWiseDetailsTableId").DataTable().destroy();
                _this.godownStocksPartyDetailsReportDataList = [];
                //this.callServForTableDestroy();
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
                    _this.godownStocksPartyDetailsReportDataList = response;
                    console.log(_this.godownStocksPartyDetailsReportDataList);
                }
                _this.dtTriggerGodownStocksPartyDetailsReport.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the  Party Details View", "info");
            }, function () { return console.log('done'); };
        };
        this.searchByDetailedWiseMethodPopup = function () {
            _this.showSpinnerForAction = true;
            _this.lrReportService.getOSStocksDetails(_this.searchByDetailedWiseDtoPopup).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (_this.destView == true) {
                    _this.viewGodownName = false;
                    _this.viewDestination = true;
                }
                else {
                    _this.viewDestination = false;
                    _this.viewGodownName = true;
                }
                _this.viewPartyName = true;
                if (_this.viewSourceForBkg == true) {
                    _this.viewSource = true;
                }
                else {
                    _this.viewSource = false;
                }
                _this.viewTypeDetail = true;
                if (_this.partyView == true) {
                    _this.partyViewType = true;
                }
                else {
                    _this.partyViewType = false;
                }
                _this.partyViewTypeStockAt = false;
                _this.partyViewTypeMainSource = false;
                _this.ViewDays = false;
                _this.viewDate = false;
                _this.godownStocksSummaryReportTable = false;
                _this.godownStocksDetailsReportTable = true;
                _this.godownStockReportDestinationWiseTable = false;
                _this.godownStocksReportPartyWiseSummaryTable = false;
                _this.godownStocksReportPartyWiseDetailsTable = false;
                //this.callServForTableDestroy();
                $("#viewType").val('detail');
                _this.selectedGodownName = 'All';
                $("#godownName").val('All');
                _this.selectedConsigneeName = _this.searchPartyWiseTotalStatusDtoPopup.consigneeName;
                setTimeout(function () {
                    _this.setConsignee();
                }, 5000);
                _this.selectedDestination = _this.searchPartyWiseTotalStatusDtoPopup.destination;
                $("#destination").val(_this.selectedDestination);
                $("#godownStocksDetailsReportTableId").DataTable().destroy();
                _this.godownStocksDetailsReportDataList = [];
                //this.callServForTableDestroy();
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
                    _this.godownStocksDetailsReportDataList = response;
                    console.log(_this.godownStocksDetailsReportDataList);
                }
                _this.dtTriggerGodownStocksDetailsReport.next();
                $("#consigneeName").val(_this.searchPartyWiseTotalStatusDtoPopup.consigneeName);
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Details View", "info");
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
            this.getConsigneeDetails(false);
            this.getMainSrcDetails();
            this.getLocalGodownDetails();
            this.curtime = this.datePipe.transform(new Date(), "h:mm a");
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                //    console.log(this.userDataDtoReturnSession.sortedMapFeatures.Rights);
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Party Wise") {
                        this.partyView = true;
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "GodownsStksRpt StocksView") {
                        this.stockView = true;
                        this.getStockAtDetails();
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "GodownsStksRpt DestView") {
                        this.destView = true;
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "GodownsStksRpt SrcSpec") {
                        this.srcSpec = true;
                    }
                    /*if (this.showBkgSource=='bkgSrc GodwonStockRpt') {
                    this.viewSourceForBkg = true;
                    }*/
                }
            }
            if (this.destView == true) {
                this.viewGodownName = false;
                this.viewDestination = true;
                this.getDestinationDetails();
            }
            else {
                this.viewDestination = false;
                this.viewGodownName = true;
            }
            if (this.partyView == true) {
                this.partyViewType = true;
            }
            else {
                this.partyViewType = false;
            }
            if (this.userDataDtoReturnSession.role == 'Booking Administrator') {
                this.viewSourceForBkg = true;
            }
            if (this.viewSourceForBkg == true) {
                this.viewSource = true;
                this.getSourceList();
            }
            else {
                this.viewSource = false;
            }
            this.dataForPopup = JSON.parse(localStorage.getItem('godownStockOsReportPopup'));
            localStorage.clear();
            if (this.dataForPopup != null) {
                this.searchPartyWiseTotalStatusDtoPopup = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
                this.searchPartyWiseTotalStatusDtoPopup = this.dataForPopup;
                if (this.searchPartyWiseTotalStatusDtoPopup != null) {
                    this.searchByDetailedWiseMethodDetailsPopup();
                }
            }
            this.dataForPopup = '';
        }
    }
    GodownStocksReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    GodownStocksReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    GodownStocksReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var showDestView = this.destView;
        var showSrcView = this.viewSourceForBkg;
        var todayDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
        var dateformate = moment__WEBPACK_IMPORTED_MODULE_16__(todayDate).format('DD-MM-YYYY');
        var officePrt = this.office;
        var cuurentTimePrt = this.curtime;
        console.log(cuurentTimePrt);
        this.dtOptionsGodownStocksSummaryReport = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        var returnSummaryExcel = null;
                        if (showDestView) {
                            returnSummaryExcel = "OutStanding Details Report As On Date : " + dateformate + " Destination : " + $("#destination").val() + " Party Name : " + $("#consigneeName").val();
                        }
                        else if (showSrcView) {
                            returnSummaryExcel = "OutStanding Details Report  As On Date : " + dateformate + " Godown : " + $("#godownName").val() + " Party Name : " + $("#consigneeName").val() + " Source : " + $("#source").val();
                        }
                        else {
                            returnSummaryExcel = "OutStanding Details Report  As On Date : " + dateformate + " Godown : " + $("#godownName").val() + " Party Name : " + $("#consigneeName").val();
                        }
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
                var totalLrs = api.column(0).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var articles = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWgt = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chargedWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + totalLrs);
                $(api.column(1).footer()).html(articles);
                $(api.column(2).footer()).html(toPay);
                $(api.column(3).footer()).html(paid);
                $(api.column(4).footer()).html(actualWgt);
                $(api.column(5).footer()).html(chargedWgt);
                $(api.column(6).footer()).html();
            }
        },
            //first datatable ends
            //second datatable starts 
            this.dtOptionGodownStocksDetailsReport = {
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'excel',
                        text: '<i class="fas fa-file-excel"> Excel</i>',
                        titleAttr: 'Excel',
                        footer: true,
                        exportOptions: {
                            columns: [0, 1, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 2, 18]
                        },
                        title: function () {
                            var returnSummaryExceDet = null;
                            returnSummaryExceDet = "Stock Report-Godown Wise" + " Date : " + dateformate;
                            return returnSummaryExceDet;
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
                    var toPay = api.column(6).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var paid = api.column(7).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actualWgt = api.column(8).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var chargedWgt = api.column(9).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html();
                    $(api.column(2).footer()).html();
                    $(api.column(3).footer()).html();
                    $(api.column(4).footer()).html(articles);
                    $(api.column(5).footer()).html();
                    $(api.column(6).footer()).html(toPay);
                    $(api.column(7).footer()).html(paid);
                    $(api.column(8).footer()).html(actualWgt);
                    $(api.column(9).footer()).html(chargedWgt);
                    $(api.column(10).footer()).html();
                    $(api.column(11).footer()).html();
                    $(api.column(12).footer()).html();
                    $(api.column(13).footer()).html();
                    $(api.column(14).footer()).html();
                    $(api.column(15).footer()).html();
                    $(api.column(16).footer()).html();
                    $(api.column(17).footer()).html();
                    $(api.column(18).footer()).html();
                }
            },
            //second datatable ends
            //third datatable starts 
            this.dtOptionGodownStockReportDestinationWise = {
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
                        exportOptions: {
                            columns: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19]
                        },
                        messageTop: function () {
                            var returnValDest = null;
                            var today = new Date();
                            cuurentTimePrt = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            returnValDest = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 30%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Date As On &nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + dateformate + " " + cuurentTimePrt + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'></strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'></strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'></span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:50%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:19px;'><u>" + officePrt + " Godown Stock Report</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:20%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'></strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'></strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'></span><br>" +
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
                            return returnValDest;
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
                        exportOptions: {
                            columns: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19]
                        },
                        title: function () {
                            var returnSummaryExcelDest = null;
                            var today = new Date();
                            cuurentTimePrt = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            returnSummaryExcelDest = "" + officePrt + " Godown Stock Report" + " Date As On : " + dateformate + " " + cuurentTimePrt;
                            return returnSummaryExcelDest;
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
                    var toPay = api.column(6).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var paid = api.column(7).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actualWgt = api.column(8).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var chargedWgt = api.column(9).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html();
                    $(api.column(2).footer()).html();
                    $(api.column(3).footer()).html();
                    $(api.column(4).footer()).html(articles);
                    $(api.column(5).footer()).html();
                    $(api.column(6).footer()).html(toPay);
                    $(api.column(7).footer()).html(paid);
                    $(api.column(8).footer()).html(actualWgt);
                    $(api.column(9).footer()).html(chargedWgt);
                    $(api.column(10).footer()).html();
                    $(api.column(11).footer()).html();
                    $(api.column(12).footer()).html();
                    $(api.column(13).footer()).html();
                    $(api.column(14).footer()).html();
                    $(api.column(15).footer()).html();
                    $(api.column(16).footer()).html();
                    $(api.column(17).footer()).html();
                    $(api.column(18).footer()).html();
                    $(api.column(19).footer()).html();
                }
            },
            //third datatable ends
            //fourth datatable starts 
            this.dtOptionGodownStocksReportPartyWise = {
                // the below code is for button export starts
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
                            returnVal = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 30%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>As On Date&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + dateformate + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'></strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'></strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'></span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:50%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:19px;'><u>Godown Stocks Report For - " + officePrt + "</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:20%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'></strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'></strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'></span><br>" +
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
                            returnSummaryExcel = "Godown Stocks Report  For - " + officePrt;
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
                    var totalLrs = api.column(1).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var totalArt = api.column(2).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var toPay = api.column(3).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html(totalLrs);
                    $(api.column(2).footer()).html(totalArt);
                    $(api.column(3).footer()).html(toPay);
                    $(api.column(4).footer()).html();
                    $(api.column(5).footer()).html();
                    $(api.column(6).footer()).html();
                    $(api.column(7).footer()).html();
                    $(api.column(8).footer()).html();
                }
            },
            //fourth datatable ends
            //fifth datatable starts 
            this.dtOptionGodownStocksPartyDetailsReport = {
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
                        exportOptions: {
                            columns: [0, 1, 2, 8, 3, 6, 7, 4, 5, 9, 10]
                        },
                        messageTop: function () {
                            var returnVal = null;
                            returnVal = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 30%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>As On Date&nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + dateformate + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'></strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'></strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'></span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:50%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:19px;'><u>Godown Stocks Report Party Details For  - " + officePrt + "</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:20%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'></strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'></strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'></span><br>" +
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
                        exportOptions: {
                            columns: [0, 1, 2, 8, 3, 6, 7, 4, 5, 9, 10]
                        },
                        title: function () {
                            var returnSummaryExcel = null;
                            returnSummaryExcel = "Godown Stocks Report Party Details For - " + officePrt;
                            return returnSummaryExcel;
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
                    var toPay = api.column(4).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var paid = api.column(5).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actualWgt = api.column(6).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var chargedWgt = api.column(7).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html();
                    $(api.column(2).footer()).html();
                    $(api.column(3).footer()).html(articles);
                    $(api.column(4).footer()).html(toPay);
                    $(api.column(5).footer()).html(paid);
                    $(api.column(6).footer()).html(actualWgt);
                    $(api.column(7).footer()).html(chargedWgt);
                    $(api.column(8).footer()).html();
                    $(api.column(9).footer()).html();
                    $(api.column(10).footer()).html();
                }
            };
    };
    GodownStocksReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerGodownStocksSummaryReport.unsubscribe();
        this.dtTriggerGodownStocksDetailsReport.unsubscribe();
        this.dtTriggerGodownStockReportDestinationWise.unsubscribe();
        this.dtTriggerGodownStocksReportPartyWise.unsubscribe();
        this.dtTriggerGodownStocksPartyDetailsReport.unsubscribe();
    };
    GodownStocksReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerGodownStocksSummaryReport.next();
        this.dtTriggerGodownStocksDetailsReport.next();
        this.dtTriggerGodownStockReportDestinationWise.next();
        this.dtTriggerGodownStocksReportPartyWise.next();
        this.dtTriggerGodownStocksPartyDetailsReport.next();
    };
    GodownStocksReportComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'summary') {
            if (this.destView == true) {
                this.viewGodownName = false;
                this.viewDestination = true;
            }
            else {
                this.viewDestination = false;
                this.viewGodownName = true;
            }
            this.viewPartyName = true;
            if (this.viewSourceForBkg == true) {
                this.viewSource = true;
            }
            else {
                this.viewSource = false;
            }
            this.viewTypeDetail = false;
            //         commented becaue the date and datatable(godown stock report destination wise) has to show when click on checkbox   this.ViewDate = false;
            if (this.partyView == true) {
                this.partyViewType = true;
            }
            else {
                this.partyViewType = false;
            }
            this.partyViewTypeStockAt = false;
            this.partyViewTypeMainSource = false;
            this.ViewDays = false;
            this.viewDate = false;
            this.godownStocksSummaryReportTable = true;
            this.godownStocksDetailsReportTable = false;
            this.godownStockReportDestinationWiseTable = false;
            this.godownStocksReportPartyWiseSummaryTable = false;
            this.godownStocksReportPartyWiseDetailsTable = false;
            this.callServForTableDestroy();
        }
        else if (viewType === 'detail') {
            if (this.destView == true) {
                this.viewGodownName = false;
                this.viewDestination = true;
            }
            else {
                this.viewDestination = false;
                this.viewGodownName = true;
            }
            this.viewPartyName = true;
            if (this.viewSourceForBkg == true) {
                this.viewSource = true;
            }
            else {
                this.viewSource = false;
            }
            this.viewTypeDetail = true;
            //         commented becaue the date and datatable(godown stock report destination wise) has to show when click on checkbox   this.ViewDate = true;
            if (this.partyView == true) {
                this.partyViewType = true;
            }
            else {
                this.partyViewType = false;
            }
            this.partyViewTypeStockAt = false;
            this.partyViewTypeMainSource = false;
            this.ViewDays = false;
            this.viewDate = false;
            this.godownStocksSummaryReportTable = false;
            this.godownStocksDetailsReportTable = true;
            this.godownStockReportDestinationWiseTable = false;
            this.godownStocksReportPartyWiseSummaryTable = false;
            this.godownStocksReportPartyWiseDetailsTable = false;
            this.callServForTableDestroy();
        }
        else if (viewType === 'detailWithDestination') {
            if (this.destView == true) {
                this.viewGodownName = false;
                this.viewDestination = true;
            }
            else {
                this.viewDestination = false;
                this.viewGodownName = true;
            }
            this.viewPartyName = true;
            if (this.viewSourceForBkg == true) {
                this.viewSource = true;
            }
            else {
                this.viewSource = false;
            }
            this.viewTypeDetail = true;
            //         commented becaue the date and datatable(godown stock report destination wise) has to show when click on checkbox   this.ViewDate = true;
            if (this.partyView == true) {
                this.partyViewType = true;
            }
            else {
                this.partyViewType = false;
            }
            this.partyViewTypeStockAt = false;
            this.partyViewTypeMainSource = false;
            this.ViewDays = false;
            this.viewDate = true;
            this.godownStocksSummaryReportTable = false;
            this.godownStocksDetailsReportTable = false;
            this.godownStockReportDestinationWiseTable = true;
            this.godownStocksReportPartyWiseSummaryTable = false;
            this.godownStocksReportPartyWiseDetailsTable = false;
            this.callServForTableDestroy();
        }
        else if (viewType === 'partyViewTypeSummary') {
            this.viewGodownName = false;
            this.viewPartyName = true;
            if (this.viewSourceForBkg == true) {
                this.viewSource = true;
            }
            else {
                this.viewSource = false;
            }
            this.viewDestination = false;
            this.viewTypeDetail = false;
            //         commented becaue the date and datatable(godown stock report destination wise) has to show when click on checkbox   this.ViewDate = false;
            this.partyViewType = true;
            if (this.stockView == true) {
                this.partyViewTypeStockAt = true;
            }
            else {
                this.partyViewTypeStockAt = false;
            }
            this.partyViewTypeMainSource = true;
            this.ViewDays = false;
            this.viewDate = false;
            this.godownStocksSummaryReportTable = false;
            this.godownStocksDetailsReportTable = false;
            this.godownStockReportDestinationWiseTable = false;
            this.godownStocksReportPartyWiseSummaryTable = true;
            this.godownStocksReportPartyWiseDetailsTable = false;
            this.callServForTableDestroy();
        }
        else if (viewType === 'partyViewTypeDetail') {
            this.viewGodownName = false;
            this.viewPartyName = true;
            if (this.viewSourceForBkg == true) {
                this.viewSource = true;
            }
            else {
                this.viewSource = false;
            }
            this.viewDestination = false;
            this.viewTypeDetail = false;
            //         commented becaue the date and datatable(godown stock report destination wise) has to show when click on checkbox   this.ViewDate = false;
            this.partyViewType = true;
            if (this.stockView == true) {
                this.partyViewTypeStockAt = true;
            }
            else {
                this.partyViewTypeStockAt = false;
            }
            this.partyViewTypeMainSource = true;
            this.ViewDays = true;
            this.viewDate = false;
            this.godownStocksSummaryReportTable = false;
            this.godownStocksDetailsReportTable = false;
            this.godownStockReportDestinationWiseTable = false;
            this.godownStocksReportPartyWiseSummaryTable = false;
            this.godownStocksReportPartyWiseDetailsTable = true;
            this.callServForTableDestroy();
        }
        else {
            this.viewGodownName = false;
            this.viewPartyName = false;
            this.viewSource = false;
            this.viewDestination = false;
            this.viewTypeDetail = false;
            //         commented becaue the date and datatable(godown stock report destination wise) has to show when click on checkbox   this.ViewDate = false;
            this.partyViewType = false;
            this.partyViewTypeStockAt = false;
            this.partyViewTypeMainSource = false;
            this.ViewDays = false;
            this.viewDate = false;
            this.godownStocksSummaryReportTable = false;
            this.godownStocksDetailsReportTable = false;
            this.godownStockReportDestinationWiseTable = false;
            this.godownStocksReportPartyWiseSummaryTable = false;
            this.godownStocksReportPartyWiseDetailsTable = false;
            this.callServForTableDestroy();
        }
    };
    GodownStocksReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    GodownStocksReportComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                //console.log(`The DataTable ${index} instance ID is: ${dtInstance.table().node().id}`);
                if (dtInstance.table().node().id == "godownStocksSummaryReportTableId") {
                    console.log("a");
                    _this.godownStocksSummaryReportDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerGodownStocksSummaryReport.next();
                }
                else if (dtInstance.table().node().id == "godownStocksDetailsReportTableId") {
                    console.log("b");
                    _this.godownStocksDetailsReportDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerGodownStocksDetailsReport.next();
                }
                else if (dtInstance.table().node().id == "godownStockReportDestinationWiseTableId") {
                    console.log("c");
                    _this.godownStockReportDestinationWiseDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerGodownStockReportDestinationWise.next();
                }
                else if (dtInstance.table().node().id == "godownStocksReportPartyWiseSummaryTableId") {
                    console.log("c");
                    _this.godownStocksReportPartyWiseDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerGodownStocksReportPartyWise.next();
                }
                else if (dtInstance.table().node().id == "godownStocksReportPartyWiseDetailsTableId") {
                    console.log("c");
                    _this.godownStocksPartyDetailsReportDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerGodownStocksPartyDetailsReport.next();
                }
            });
        });
    };
    GodownStocksReportComponent.prototype.callServForTableDestroy = function () {
        $("#godownStocksSummaryReportTableId").DataTable().destroy();
        $("#godownStocksDetailsReportTableId").DataTable().destroy();
        $("#godownStockReportDestinationWiseTableId").DataTable().destroy();
        $("#godownStocksReportPartyWiseSummaryTableId").DataTable().destroy();
        $("#godownStocksReportPartyWiseDetailsTableId").DataTable().destroy();
        this.godownStocksSummaryReportDataList = [];
        this.godownStocksDetailsReportDataList = [];
        this.godownStockReportDestinationWiseDataList = [];
        this.godownStocksReportPartyWiseDataList = [];
        this.godownStocksPartyDetailsReportDataList = [];
        this.dtTriggerGodownStocksSummaryReport.next();
        this.dtTriggerGodownStocksDetailsReport.next();
        this.dtTriggerGodownStockReportDestinationWise.next();
        this.dtTriggerGodownStocksReportPartyWise.next();
        this.dtTriggerGodownStocksPartyDetailsReport.next();
        if (this.destView) {
            this.viewDestination = true;
            $("#destination").val('');
            window.setTimeout(function () {
                $("#consigneeName").val('');
            }, 200);
            this.modelConsigneeName = '';
            this.consigneeNameTA = [];
        }
        else {
            this.consigneeNameTA = this.consigneeNameTATemp;
            $("#consigneeName").val('All');
        }
    };
    ///
    GodownStocksReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    GodownStocksReportComponent.prototype.getDestinationDetails = function () {
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
    GodownStocksReportComponent.prototype.getConsigneeDetailsList = function (destShow) {
        this.consigneeNameOptions = [];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_11__["PartyMasterDto"]();
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
    GodownStocksReportComponent.prototype.consigneeDestListener = function (e) {
        this.modelDestinationFotGet = e.item;
        this.getConsigneeDetails(true);
    };
    GodownStocksReportComponent.prototype.rowSelectedConsignee = function (e) {
        this.modelConsigneeNameId = e.item;
        this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
    };
    GodownStocksReportComponent.prototype.getStockAtMethod = function () {
        this.lrDtoStockAt = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoStockAt.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoStockAt.branch = this.userDataDtoReturnSession.office;
        // need to discuss 
        this.lrDtoStockAt.mainstation = this.userDataDtoReturnSession.mainStation;
        this.lrDtoStockAt.mode = "All";
    };
    GodownStocksReportComponent.prototype.getStockAtDetails = function () {
        var _this = this;
        this.getStockAtMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoStockAt).subscribe(function (response) {
            _this.showSpinnerForAction = false;
            if (response) {
                _this.stockAtOptions = [];
                _this.stockAtTA = [];
                if (response.length > 0) {
                    _this.stockAtOptions = response;
                    console.log(_this.stockAtOptions);
                    _this.stockAtTA = [];
                    _this.lrDtoStockAtAll.destination = 'All';
                    _this.stockAtTA.push(_this.lrDtoStockAtAll);
                    for (var i = 0; i < _this.stockAtOptions.length; i++) {
                        _this.stockAtTA.push(_this.stockAtOptions[i]);
                    }
                    window.setTimeout(function () {
                        $("#stockAt").val('All');
                    }, 200);
                }
                else {
                    _this.lrDtoStockAtAll.destination = 'All';
                    _this.stockAtTA.push(_this.lrDtoStockAtAll);
                    window.setTimeout(function () {
                        $("#stockAt").val('All');
                    }, 200);
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Stock At Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    GodownStocksReportComponent.prototype.getMainSrcMethod = function () {
        this.agentDtoForMainSrc = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_14__["AgentDetailsDto"]();
        this.agentDtoForMainSrc.companyId = this.userDataDtoReturnSession.companyId;
    };
    GodownStocksReportComponent.prototype.getMainSrcDetails = function () {
        var _this = this;
        this.getMainSrcMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getMainBookingStationsDetails(this.agentDtoForMainSrc).subscribe(function (response) {
            _this.showSpinnerForAction = false;
            if (response) {
                _this.agentDtoOptionsForMainSrc = [];
                _this.mainSrcTA = [];
                if (response.length > 0) {
                    _this.agentDtoOptionsForMainSrc = response;
                    console.log(_this.agentDtoOptionsForMainSrc);
                    _this.mainSrcTA = [];
                    _this.agentDtoForMainSrcAll.mainBookStations = 'All';
                    _this.mainSrcTA.push(_this.agentDtoForMainSrcAll);
                    for (var i = 0; i < _this.agentDtoOptionsForMainSrc.length; i++) {
                        _this.mainSrcTA.push(_this.agentDtoOptionsForMainSrc[i]);
                    }
                    window.setTimeout(function () {
                        $("#mainSrc").val('All');
                    }, 200);
                }
                else {
                    _this.agentDtoForMainSrcAll.mainBookStations = 'All';
                    _this.mainSrcTA.push(_this.agentDtoForMainSrcAll);
                    window.setTimeout(function () {
                        $("#mainSrc").val('All');
                    }, 200);
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Stock At Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    GodownStocksReportComponent.prototype.getLocalGodownMethod = function () {
        this.lrDtoLocalGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoLocalGodown.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoLocalGodown.branch = this.userDataDtoReturnSession.office;
        this.lrDtoLocalGodown.mode = 'active';
    };
    GodownStocksReportComponent.prototype.getLocalGodownDetails = function () {
        var _this = this;
        this.getLocalGodownMethod();
        this.showSpinnerForAction = true;
        this.masterService.getLocalGodowns(this.lrDtoLocalGodown).subscribe(function (response) {
            _this.localGodownOptions = [];
            _this.localGodownTA = [];
            _this.showSpinnerForAction = false;
            if (response) {
                if (response.length > 0) {
                    _this.localGodownOptions = response;
                    _this.localGodownTA = [];
                    _this.lrDtoLocalGodownAll.godownName = 'All';
                    _this.localGodownTA.push(_this.lrDtoLocalGodownAll);
                    for (var i = 0; i < _this.localGodownOptions.length; i++) {
                        _this.localGodownTA.push(_this.localGodownOptions[i]);
                    }
                    window.setTimeout(function () {
                        $("#godownName").val('All');
                    }, 200);
                }
                else {
                    _this.lrDtoLocalGodownAll.godownName = 'All';
                    _this.localGodownTA.push(_this.lrDtoLocalGodownAll);
                    window.setTimeout(function () {
                        $("#godownName").val('All');
                    }, 200);
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Local Godowns Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    GodownStocksReportComponent.prototype.getSourceList = function () {
        this.srcLists = this.userDataDtoReturnSession.stationList;
    };
    GodownStocksReportComponent.prototype.searchMethod = function () {
        this.selectedSearchBy = $("#viewType").val();
        if (this.selectedSearchBy == 'summary') {
            this.searchBySummaryWiseMethodDetails();
        }
        else if (this.selectedSearchBy == 'detail') {
            this.searchByDetailedWiseMethodDetails();
        }
        else if (this.selectedSearchBy == 'detailWithDestination') {
            this.searchByDetailedDestinationWiseMethodDetails();
        }
        else if (this.selectedSearchBy == 'partyViewTypeDetail') {
            this.searchByPartyDetailsWiseMethodDetails();
        }
    };
    GodownStocksReportComponent.prototype.searchBySummaryWiseMethodDetails = function () {
        this.selectedSource = $("#source").val();
        this.selectedSearchBy = $("#viewType").val();
        this.selectedDestination = $("#destination").val();
        this.selectedGodownName = $("#godownName").val();
        this.selectedConsigneeName = $("#consigneeName").val();
        this.searchBySummaryWiseDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchBySummaryWiseDto.consigneeName = this.selectedConsigneeName;
        this.searchBySummaryWiseDto.companyId = this.userDataDtoReturnSession.companyId;
        //this.searchBySummaryWiseDto.consigneeId= 0;
        if (this.selectedConsigneeName != null && this.selectedConsigneeName != '' && this.selectedConsigneeName != 'All') {
            this.searchBySummaryWiseDto.consigneeId = this.selectedConsigneeId;
        }
        if (this.viewSourceForBkg == true) {
            if (this.selectedSource == null || this.selectedSource == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Mandatory Field",
                    text: "Please Select Source",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
            else {
                this.searchBySummaryWiseDto.list = this.selectedSource;
            }
        }
        else if (this.destView == true) {
            if (this.selectedDestination == null || this.selectedDestination == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Mandatory Field",
                    text: "Please Select Destination",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
            else {
                this.setDestination = [];
                this.setDestination.push(this.selectedDestination);
                this.searchBySummaryWiseDto.list = this.setDestination;
            }
        }
        else {
            this.setDestination = [];
            this.setDestination.push(this.userDataDtoReturnSession.office);
            this.searchBySummaryWiseDto.list = this.setDestination;
        }
        if (this.destView == false) {
            this.searchBySummaryWiseDto.godownName = this.selectedGodownName;
        }
        this.searchBySummaryWiseMethod();
        console.log(this.searchBySummaryWiseDto);
    };
    GodownStocksReportComponent.prototype.searchByDetailedWiseMethodDetails = function () {
        this.selectedSource = $("#source").val();
        this.selectedSearchBy = $("#viewType").val();
        this.selectedDestination = $("#destination").val();
        this.selectedGodownName = $("#godownName").val();
        this.selectedConsigneeName = $("#consigneeName").val();
        this.searchByDetailedWiseDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchByDetailedWiseDto.consigneeName = this.selectedConsigneeName;
        this.searchByDetailedWiseDto.companyId = this.userDataDtoReturnSession.companyId;
        //this.searchByDetailedWiseDto.consigneeId= 0;
        if (this.selectedConsigneeName != null && this.selectedConsigneeName != '' && this.selectedConsigneeName != 'All') {
            this.searchByDetailedWiseDto.consigneeId = this.selectedConsigneeId;
        }
        if (this.viewSourceForBkg == true) {
            if (this.selectedSource == null || this.selectedSource == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Mandatory Field",
                    text: "Please Select Source",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
            else {
                this.searchByDetailedWiseDto.list = this.selectedSource;
            }
        }
        else if (this.destView == true) {
            if (this.selectedDestination == null || this.selectedDestination == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Mandatory Field",
                    text: "Please Select Destination",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
            else {
                this.setDestination = [];
                this.setDestination.push(this.selectedDestination);
                this.searchByDetailedWiseDto.list = this.setDestination;
            }
        }
        else {
            this.setDestination = [];
            this.setDestination.push(this.userDataDtoReturnSession.office);
            this.searchByDetailedWiseDto.list = this.setDestination;
        }
        if (this.destView == false) {
            this.searchByDetailedWiseDto.godownName = this.selectedGodownName;
        }
        this.searchByDetailedWiseMethod();
        console.log(this.searchByDetailedWiseDto);
    };
    GodownStocksReportComponent.prototype.searchByDetailedDestinationWiseMethodDetails = function () {
        this.selectedSource = $("#source").val();
        this.selectedSearchBy = $("#viewType").val();
        this.selectedDestination = $("#destination").val();
        this.selectedGodownName = $("#godownName").val();
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedDestDate = $("#destDate").val();
        this.searchByDetailedDestWiseDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchByDetailedDestWiseDto.consigneeName = this.selectedConsigneeName;
        this.searchByDetailedDestWiseDto.companyId = this.userDataDtoReturnSession.companyId;
        //this.searchByDetailedDestWiseDto.consigneeId= 0;
        if (this.selectedConsigneeName != null && this.selectedConsigneeName != '' && this.selectedConsigneeName != 'All') {
            this.searchByDetailedDestWiseDto.consigneeId = this.selectedConsigneeId;
        }
        if (this.viewSourceForBkg == true) {
            if (this.selectedSource == null || this.selectedSource == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Mandatory Field",
                    text: "Please Select Source",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
            else {
                this.searchByDetailedDestWiseDto.list = this.selectedSource;
            }
        }
        else if (this.partyView == true) {
            if (this.selectedDestination == null || this.selectedDestination == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Mandatory Field",
                    text: "Please Select Destination",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
            else {
                this.setDestination = [];
                this.setDestination.push(this.selectedDestination);
                this.searchByDetailedDestWiseDto.list = this.setDestination;
            }
        }
        else {
            this.setDestination = [];
            this.setDestination.push(this.userDataDtoReturnSession.office);
            this.searchByDetailedDestWiseDto.list = this.setDestination;
        }
        if (this.destView == false) {
            this.searchByDetailedDestWiseDto.godownName = this.selectedGodownName;
        }
        this.searchByDetailedDestinationWiseMethod();
        console.log(this.searchByDetailedDestWiseDto);
    };
    GodownStocksReportComponent.prototype.clearMethod = function () {
        this.callServForTableDestroy();
        this.selectedSource = '';
        $("#source").val('');
        this.selectedSearchBy = '';
        $("#viewType").val('summary');
        this.selectedDestination = '';
        $("#destination").val('');
        this.selectedGodownName = '';
        $("#godownName").val('All');
        this.selectedConsigneeName = '';
        $("#consigneeName").val('All');
        this.selectedDestDate = '';
        $("#destDate").val('');
        this.setDestination = [];
        this.searchByDetailedDestWiseDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchByDetailedWiseDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchBySummaryWiseDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.showSpinnerForAction = false;
        this.selectedConsigneeName = '';
        this.selectedConsigneeId = 0;
        this.modelDestinationFotGet = '';
        this.modelConsigneeNameId = '';
        this.destDateModel = null;
        //
        if (this.destView == true) {
            this.viewGodownName = false;
            this.viewDestination = true;
        }
        else {
            this.viewDestination = false;
            this.viewGodownName = true;
        }
        this.viewPartyName = true;
        if (this.viewSourceForBkg == true) {
            this.viewSource = true;
        }
        else {
            this.viewSource = false;
        }
        this.viewTypeDetail = false;
        if (this.partyView == true) {
            this.partyViewType = true;
        }
        else {
            this.partyViewType = false;
        }
        this.partyViewTypeStockAt = false;
        this.partyViewTypeMainSource = false;
        this.ViewDays = false;
        this.viewDate = false;
        this.godownStocksSummaryReportTable = true;
        this.godownStocksDetailsReportTable = false;
        this.godownStockReportDestinationWiseTable = false;
        this.godownStocksReportPartyWiseSummaryTable = false;
        this.godownStocksReportPartyWiseDetailsTable = false;
        this.showSpinnerForAction = false;
        this.searchByPartyDetailsWiseDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_18__["InvoiceDto"]();
        this.selectedDays = '';
        this.selectedMainSrc = '';
        $("#mainSrc").val('All');
        this.selectedStocksAt = '';
        if (this.stockView == true) {
            $("#stockAt").val('All');
        }
        $("#days").val('');
        this.setStocksAt = [];
        this.searchByDetailedWiseDtoPopup = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        localStorage.clear();
        this.searchPartyWiseTotalStatusDtoPopup = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.dataForPopup = '';
    };
    GodownStocksReportComponent.prototype.searchByPartyDetailsWiseMethodDetails = function () {
        this.selectedSource = $("#source").val();
        this.selectedSearchBy = $("#viewType").val();
        this.selectedDestination = $("#destination").val();
        this.selectedMainSrc = $("#mainSrc").val();
        this.selectedStocksAt = $("#stockAt").val();
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedDays = $("#days").val();
        this.searchByPartyDetailsWiseDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_18__["InvoiceDto"]();
        this.searchByPartyDetailsWiseDto.consigneeName = this.selectedConsigneeName;
        this.searchByPartyDetailsWiseDto.companyId = this.userDataDtoReturnSession.companyId;
        if (this.selectedConsigneeName != null && this.selectedConsigneeName != '' && this.selectedConsigneeName != 'All') {
            this.searchByPartyDetailsWiseDto.consigneeId = this.selectedConsigneeId;
        }
        if (this.stockView == true) {
            if (this.selectedStocksAt == null || this.selectedStocksAt == '' || this.selectedStocksAt == 'All') {
                this.setStocksAt = [];
                for (var i = 0; i < this.stockAtOptions.length; i++) {
                    this.setStocksAt.push(this.stockAtOptions[i].destination);
                }
                this.searchByPartyDetailsWiseDto.list = this.setStocksAt;
                console.log(this.setStocksAt);
            }
            else {
                this.setStocksAt = [];
                this.setStocksAt.push(this.selectedStocksAt);
                this.searchByPartyDetailsWiseDto.list = this.setStocksAt;
            }
        }
        else {
            this.setStocksAt = [];
            this.setStocksAt.push(this.userDataDtoReturnSession.office);
            this.searchByPartyDetailsWiseDto.list = this.setStocksAt;
        }
        this.searchByPartyDetailsWiseDto.fromStation = this.selectedMainSrc;
        this.searchByPartyDetailsWiseDto.daysDiff = this.selectedDays;
        this.searchByPartyDetailsWiseMethod();
        console.log(this.searchByPartyDetailsWiseDto);
    };
    GodownStocksReportComponent.prototype.searchByDetailedWiseMethodDetailsPopup = function () {
        this.selectedConsigneeName = this.searchPartyWiseTotalStatusDtoPopup.consigneeName;
        this.selectedGodownName = 'All';
        this.searchByDetailedWiseDtoPopup = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.searchByDetailedWiseDtoPopup.consigneeName = this.selectedConsigneeName;
        this.searchByDetailedWiseDtoPopup.companyId = this.userDataDtoReturnSession.companyId;
        this.searchByDetailedWiseDtoPopup.consigneeId = this.searchPartyWiseTotalStatusDtoPopup.consigneeId;
        this.searchByDetailedWiseDtoPopup.list = this.searchPartyWiseTotalStatusDtoPopup.list;
        if (this.destView == false) {
            this.searchByDetailedWiseDtoPopup.godownName = this.selectedGodownName;
        }
        this.searchByDetailedWiseMethodPopup();
        console.log(this.searchByDetailedWiseDtoPopup);
    };
    GodownStocksReportComponent.prototype.setConsignee = function () {
        $("#consigneeName").val(this.searchPartyWiseTotalStatusDtoPopup.consigneeName);
    };
    GodownStocksReportComponent.prototype.customPrintStocksSummary = function () {
        var _this = this;
        if (this.godownStocksSummaryReportDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                title: "No records found to print",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            localStorage.clear();
            this.cashMemoDtoForCustomPrintList = [];
            this.cashMemoDtoForCustomPrintListColumnNames = ["Godown Name", "Total Lrs", "Articles", "To Pay", "Paid", "Actual Weight", "Charged Weight"];
            this.cashMemoDtoForCustomPrintListColumnWidths = [15, 10, 10, 10, 15, 10, 15, 15];
            for (var i = 0; i < this.cashMemoDtoForCustomPrintListColumnNames.length; i++) {
                this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrint.columnName = this.cashMemoDtoForCustomPrintListColumnNames[i];
                this.cashMemoDtoForCustomPrint.columnWidth = this.cashMemoDtoForCustomPrintListColumnWidths[i];
                this.cashMemoDtoForCustomPrintList.push(this.cashMemoDtoForCustomPrint);
            }
            this.cashMemoDtoForCustomPrintDataList = [];
            this.cashMemoDtoForCustomPrintDataSummaryList = [];
            this.summary1 = this.summary2 = this.summary3 = this.summary4 = this.summary5 = this.summary6 = 0;
            for (var i = 0; i < this.godownStocksSummaryReportDataList.length; i++) {
                this.cashMemoDtoForCustomPrintData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrintListColumnValues = [this.godownStocksSummaryReportDataList[i].godownName, this.godownStocksSummaryReportDataList[i].totalLrs, this.godownStocksSummaryReportDataList[i].totalArticles, this.godownStocksSummaryReportDataList[i].toPay, this.godownStocksSummaryReportDataList[i].paid, this.godownStocksSummaryReportDataList[i].actualWeight, this.godownStocksSummaryReportDataList[i].chargedWeight];
                this.cashMemoDtoForCustomPrintData.cashMemoDtoForCustomPrintListColumnValues = this.cashMemoDtoForCustomPrintListColumnValues;
                this.cashMemoDtoForCustomPrintDataList.push(this.cashMemoDtoForCustomPrintData);
                this.summary1 = this.summary1 + this.godownStocksSummaryReportDataList[i].totalLrs;
                this.summary2 = this.summary2 + this.godownStocksSummaryReportDataList[i].totalArticles;
                this.summary3 = this.summary3 + this.godownStocksSummaryReportDataList[i].toPay;
                this.summary4 = this.summary4 + this.godownStocksSummaryReportDataList[i].paid;
                this.summary5 = this.summary5 + this.godownStocksSummaryReportDataList[i].actualWeight;
                this.summary6 = this.summary6 + this.godownStocksSummaryReportDataList[i].chargedWeight;
            }
            this.cashMemoDtoForCustomPrintDataSummaryList = ["Total : " + this.godownStocksSummaryReportDataList.length, this.summary1, this.summary2, this.summary3, this.summary4, this.summary5, this.summary6];
            //heading logics For Date
            this.cashMemoDtoForCustomPrintListHeadingV1 = [];
            this.curDate = this.datePipe.transform(new Date(), "dd-MM-yyyy");
            this.cashMemoDtoForCustomPrintListHeadingNamesV1 = ["As On"];
            this.cashMemoDtoForCustomPrintListHeadingValuesV1 = [this.curDate];
            for (var i = 0; i < this.cashMemoDtoForCustomPrintListHeadingNamesV1.length; i++) {
                this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrint.printHeadingName = this.cashMemoDtoForCustomPrintListHeadingNamesV1[i];
                this.cashMemoDtoForCustomPrint.printHeadingValue = this.cashMemoDtoForCustomPrintListHeadingValuesV1[i];
                this.cashMemoDtoForCustomPrintListHeadingV1.push(this.cashMemoDtoForCustomPrint);
            }
            localStorage.setItem('printCashMemoDtoForCustomPrintList', JSON.stringify(this.cashMemoDtoForCustomPrintList));
            localStorage.setItem('printCashMemoDtoForCustomPrintDataList', JSON.stringify(this.cashMemoDtoForCustomPrintDataList));
            localStorage.setItem('printcashMemoDtoForCustomPrintDataSummaryList', JSON.stringify(this.cashMemoDtoForCustomPrintDataSummaryList));
            localStorage.setItem('printcashMemoDtoForCustomPrintListHeadingV1', JSON.stringify(this.cashMemoDtoForCustomPrintListHeadingV1));
            localStorage.setItem('printTitle', "Godown Stock Summary Report");
            this.viewCustomPrintV1 = true;
            window.addEventListener('afterprint', function (onclick) {
                if (_this.viewCustomPrintV1) {
                    _this.viewCustomPrintV1 = false;
                    localStorage.clear();
                }
            });
        }
    };
    GodownStocksReportComponent.prototype.customPrintStocksDetails = function () {
        var _this = this;
        if (this.godownStocksDetailsReportDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                title: "No records found to print",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            localStorage.clear();
            this.cashMemoDtoForCustomPrintList = [];
            this.cashMemoDtoForCustomPrintListColumnNames = ["Godown Name", "LR No", "Booking Date", "Agent", "Destination", "Art", "Desc", "ToPay", "Paid", "Act Wt", "Chg Wt", "Consignor", "Consignee", "Area", "Sub Station", "Del Type", "Bkg-Arr", "Cur-Arr"];
            this.cashMemoDtoForCustomPrintListColumnWidths = [8, 5, 6, 6, 9, 3, 5, 5, 4, 4, 4, 8, 8, 5, 8, 4, 4, 4];
            for (var i = 0; i < this.cashMemoDtoForCustomPrintListColumnNames.length; i++) {
                this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrint.columnName = this.cashMemoDtoForCustomPrintListColumnNames[i];
                this.cashMemoDtoForCustomPrint.columnWidth = this.cashMemoDtoForCustomPrintListColumnWidths[i];
                this.cashMemoDtoForCustomPrintList.push(this.cashMemoDtoForCustomPrint);
            }
            this.cashMemoDtoForCustomPrintDataList = [];
            this.cashMemoDtoForCustomPrintDataSummaryList = [];
            this.summary1 = this.summary2 = this.summary3 = this.summary4 = this.summary5 = this.summary6 = 0;
            for (var i = 0; i < this.godownStocksDetailsReportDataList.length; i++) {
                this.cashMemoDtoForCustomPrintData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrintListColumnValues = [this.godownStocksDetailsReportDataList[i].godownName, this.godownStocksDetailsReportDataList[i].lrNumber, this.godownStocksDetailsReportDataList[i].bookingDateStr, this.godownStocksDetailsReportDataList[i].agentName, this.godownStocksDetailsReportDataList[i].destination, this.godownStocksDetailsReportDataList[i].totalArticles, this.godownStocksDetailsReportDataList[i].description, this.godownStocksDetailsReportDataList[i].toPay, this.godownStocksDetailsReportDataList[i].paid, this.godownStocksDetailsReportDataList[i].actualWeight, this.godownStocksDetailsReportDataList[i].chargedWeight, this.godownStocksDetailsReportDataList[i].consignorName, this.godownStocksDetailsReportDataList[i].consigneeName, this.godownStocksDetailsReportDataList[i].areaOfDelivery, this.godownStocksDetailsReportDataList[i].subStations, this.godownStocksDetailsReportDataList[i].deliveryType, this.godownStocksDetailsReportDataList[i].dispatchedwithin, this.godownStocksDetailsReportDataList[i].arrivalwithin];
                this.cashMemoDtoForCustomPrintData.cashMemoDtoForCustomPrintListColumnValues = this.cashMemoDtoForCustomPrintListColumnValues;
                this.cashMemoDtoForCustomPrintDataList.push(this.cashMemoDtoForCustomPrintData);
                this.summary1 = this.summary1 + this.godownStocksDetailsReportDataList[i].totalArticles;
                this.summary2 = this.summary2 + this.godownStocksDetailsReportDataList[i].toPay;
                this.summary3 = this.summary3 + this.godownStocksDetailsReportDataList[i].paid;
                this.summary4 = this.summary4 + this.godownStocksDetailsReportDataList[i].actualWeight;
                this.summary5 = this.summary5 + this.godownStocksDetailsReportDataList[i].chargedWeight;
            }
            this.cashMemoDtoForCustomPrintDataSummaryList = ["Total", this.godownStocksDetailsReportDataList.length, "", "", "", this.summary1, "", this.summary2, this.summary3, this.summary4, this.summary5, "", "", "", "", "", "", ""];
            //heading logics For Date
            this.cashMemoDtoForCustomPrintListHeadingV1 = [];
            this.curDate = this.datePipe.transform(new Date(), "dd-MM-yyyy");
            this.cashMemoDtoForCustomPrintListHeadingNamesV1 = ["As On"];
            this.cashMemoDtoForCustomPrintListHeadingValuesV1 = [this.curDate];
            for (var i = 0; i < this.cashMemoDtoForCustomPrintListHeadingNamesV1.length; i++) {
                this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrint.printHeadingName = this.cashMemoDtoForCustomPrintListHeadingNamesV1[i];
                this.cashMemoDtoForCustomPrint.printHeadingValue = this.cashMemoDtoForCustomPrintListHeadingValuesV1[i];
                this.cashMemoDtoForCustomPrintListHeadingV1.push(this.cashMemoDtoForCustomPrint);
            }
            localStorage.setItem('printCashMemoDtoForCustomPrintList', JSON.stringify(this.cashMemoDtoForCustomPrintList));
            localStorage.setItem('printCashMemoDtoForCustomPrintDataList', JSON.stringify(this.cashMemoDtoForCustomPrintDataList));
            localStorage.setItem('printcashMemoDtoForCustomPrintDataSummaryList', JSON.stringify(this.cashMemoDtoForCustomPrintDataSummaryList));
            localStorage.setItem('printcashMemoDtoForCustomPrintListHeadingV1', JSON.stringify(this.cashMemoDtoForCustomPrintListHeadingV1));
            localStorage.setItem('printTitle', "Godown Stock Detail Report");
            this.viewCustomPrintV1 = true;
            window.addEventListener('afterprint', function (onclick) {
                if (_this.viewCustomPrintV1) {
                    _this.viewCustomPrintV1 = false;
                    localStorage.clear();
                }
            });
        }
    };
    GodownStocksReportComponent.prototype.customPrintPartyWiseDetails = function () {
        var _this = this;
        if (this.godownStocksDetailsReportDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                title: "No records found to print",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            localStorage.clear();
            this.cashMemoDtoForCustomPrintList = [];
            this.cashMemoDtoForCustomPrintListColumnNames = ["Godown Name", "LR No", "Booking Date", "Agent", "Destination", "Art", "Desc", "ToPay", "Paid", "Act Wt", "Chg Wt", "Consignor", "Consignee", "Area", "Sub Station", "Del Type", "Bkg-Arr", "Cur-Arr"];
            this.cashMemoDtoForCustomPrintListColumnWidths = [8, 5, 6, 6, 9, 3, 5, 5, 4, 4, 4, 8, 8, 5, 8, 4, 4, 4];
            for (var i = 0; i < this.cashMemoDtoForCustomPrintListColumnNames.length; i++) {
                this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrint.columnName = this.cashMemoDtoForCustomPrintListColumnNames[i];
                this.cashMemoDtoForCustomPrint.columnWidth = this.cashMemoDtoForCustomPrintListColumnWidths[i];
                this.cashMemoDtoForCustomPrintList.push(this.cashMemoDtoForCustomPrint);
            }
            this.cashMemoDtoForCustomPrintDataList = [];
            this.cashMemoDtoForCustomPrintDataSummaryList = [];
            this.summary1 = this.summary2 = this.summary3 = this.summary4 = this.summary5 = this.summary6 = 0;
            for (var i = 0; i < this.godownStocksDetailsReportDataList.length; i++) {
                this.cashMemoDtoForCustomPrintData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrintListColumnValues = [this.godownStocksDetailsReportDataList[i].godownName, this.godownStocksDetailsReportDataList[i].lrNumber, this.godownStocksDetailsReportDataList[i].bookingDateStr, this.godownStocksDetailsReportDataList[i].agentName, this.godownStocksDetailsReportDataList[i].destination, this.godownStocksDetailsReportDataList[i].totalArticles, this.godownStocksDetailsReportDataList[i].description, this.godownStocksDetailsReportDataList[i].toPay, this.godownStocksDetailsReportDataList[i].paid, this.godownStocksDetailsReportDataList[i].actualWeight, this.godownStocksDetailsReportDataList[i].chargedWeight, this.godownStocksDetailsReportDataList[i].consignorName, this.godownStocksDetailsReportDataList[i].consigneeName, this.godownStocksDetailsReportDataList[i].areaOfDelivery, this.godownStocksDetailsReportDataList[i].subStations, this.godownStocksDetailsReportDataList[i].deliveryType, this.godownStocksDetailsReportDataList[i].dispatchedwithin, this.godownStocksDetailsReportDataList[i].arrivalwithin];
                this.cashMemoDtoForCustomPrintData.cashMemoDtoForCustomPrintListColumnValues = this.cashMemoDtoForCustomPrintListColumnValues;
                this.cashMemoDtoForCustomPrintDataList.push(this.cashMemoDtoForCustomPrintData);
                this.summary1 = this.summary1 + this.godownStocksDetailsReportDataList[i].totalArticles;
                this.summary2 = this.summary2 + this.godownStocksDetailsReportDataList[i].toPay;
                this.summary3 = this.summary3 + this.godownStocksDetailsReportDataList[i].paid;
                this.summary4 = this.summary4 + this.godownStocksDetailsReportDataList[i].actualWeight;
                this.summary5 = this.summary5 + this.godownStocksDetailsReportDataList[i].chargedWeight;
            }
            this.cashMemoDtoForCustomPrintDataSummaryList = ["Total", this.godownStocksDetailsReportDataList.length, "", "", "", this.summary1, "", this.summary2, this.summary3, this.summary4, this.summary5, "", "", "", "", "", "", ""];
            //heading logics For Date
            this.cashMemoDtoForCustomPrintListHeadingV1 = [];
            this.curDate = this.datePipe.transform(new Date(), "dd-MM-yyyy");
            this.cashMemoDtoForCustomPrintListHeadingNamesV1 = ["As On"];
            this.cashMemoDtoForCustomPrintListHeadingValuesV1 = [this.curDate];
            for (var i = 0; i < this.cashMemoDtoForCustomPrintListHeadingNamesV1.length; i++) {
                this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_9__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrint.printHeadingName = this.cashMemoDtoForCustomPrintListHeadingNamesV1[i];
                this.cashMemoDtoForCustomPrint.printHeadingValue = this.cashMemoDtoForCustomPrintListHeadingValuesV1[i];
                this.cashMemoDtoForCustomPrintListHeadingV1.push(this.cashMemoDtoForCustomPrint);
            }
            localStorage.setItem('printCashMemoDtoForCustomPrintList', JSON.stringify(this.cashMemoDtoForCustomPrintList));
            localStorage.setItem('printCashMemoDtoForCustomPrintDataList', JSON.stringify(this.cashMemoDtoForCustomPrintDataList));
            localStorage.setItem('printcashMemoDtoForCustomPrintDataSummaryList', JSON.stringify(this.cashMemoDtoForCustomPrintDataSummaryList));
            localStorage.setItem('printcashMemoDtoForCustomPrintListHeadingV1', JSON.stringify(this.cashMemoDtoForCustomPrintListHeadingV1));
            localStorage.setItem('printTitle', "Godown Stock Detail Report");
            this.viewCustomPrintV1 = true;
            window.addEventListener('afterprint', function (onclick) {
                if (_this.viewCustomPrintV1) {
                    _this.viewCustomPrintV1 = false;
                    localStorage.clear();
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], GodownStocksReportComponent.prototype, "dtElements", void 0);
    GodownStocksReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-godown-stocks-report',
            template: __webpack_require__(/*! ./godown-stocks-report.component.html */ "./src/app/report/stocks-report/godown-stocks-report/godown-stocks-report.component.html"),
            styles: [__webpack_require__(/*! ./godown-stocks-report.component.css */ "./src/app/report/stocks-report/godown-stocks-report/godown-stocks-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_15__["LrReportService"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_17__["MasterService"]])
    ], GodownStocksReportComponent);
    return GodownStocksReportComponent;
}());



/***/ }),

/***/ "./src/app/report/stocks-report/pending-stocks-details-report/pending-stocks-details-report.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/pending-stocks-details-report/pending-stocks-details-report.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n\tmargin-bottom: 10px;\n\tmargin-top: 10pX;\n}\n/* for custom css for autocomplete select option starts */\n.auto_selectOption {\n\tfont-size: 15px;\n\tpadding: 0px;\n\tborder: 2px solid #dadee2;\n\theight: 26px;\n\twidth: 100%;\n}\n/* for small mobile */\n@media ( max-width : 355px) {\n\t.auto_selectOption {\n\t\twidth: 48% !important;\n\t}\n}\n/* for medium mobile */\n@media ( max-width : 365px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n}\n/* for mobile */\n@media ( min-width : 370px) and (max-width: 766px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n}\n/* for ipad */\n@media ( min-width : 767px) and (max-width: 990px) {\n\t.auto_selectOption {\n\t\twidth: 80%;\n\t}\n}\n/* for ipad pro */\n@media ( min-width : 991px) and (max-width: 1200px) {\n\t.auto_selectOption {\n\t\twidth: 46%;\n\t}\n}\n/* for desktop */\n@media ( min-width : 1201px) and (max-width: 1500px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n}\n/* for custom css for autocomplete select option ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0b2Nrcy1yZXBvcnQvcGVuZGluZy1zdG9ja3MtZGV0YWlscy1yZXBvcnQvcGVuZGluZy1zdG9ja3MtZGV0YWlscy1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakI7QUFDRCwwREFBMEQ7QUFDMUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IsWUFBWTtDQUNaO0FBQ0Qsc0JBQXNCO0FBQ3RCO0NBQ0M7RUFDQyxzQkFBc0I7RUFDdEI7Q0FDRDtBQUNELHVCQUF1QjtBQUN2QjtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFDRCxnQkFBZ0I7QUFDaEI7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0QsY0FBYztBQUNkO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUNELGtCQUFrQjtBQUNsQjtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFDRCxpQkFBaUI7QUFDakI7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0Qsd0RBQXdEIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3N0b2Nrcy1yZXBvcnQvcGVuZGluZy1zdG9ja3MtZGV0YWlscy1yZXBvcnQvcGVuZGluZy1zdG9ja3MtZGV0YWlscy1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0bWFyZ2luLXRvcDogMTBwWDtcbn1cbi8qIGZvciBjdXN0b20gY3NzIGZvciBhdXRvY29tcGxldGUgc2VsZWN0IG9wdGlvbiBzdGFydHMgKi9cbi5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0cGFkZGluZzogMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjZGFkZWUyO1xuXHRoZWlnaHQ6IDI2cHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuLyogZm9yIHNtYWxsIG1vYmlsZSAqL1xuQG1lZGlhICggbWF4LXdpZHRoIDogMzU1cHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNDglICFpbXBvcnRhbnQ7XG5cdH1cbn1cbi8qIGZvciBtZWRpdW0gbW9iaWxlICovXG5AbWVkaWEgKCBtYXgtd2lkdGggOiAzNjVweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA1MCU7XG5cdH1cbn1cbi8qIGZvciBtb2JpbGUgKi9cbkBtZWRpYSAoIG1pbi13aWR0aCA6IDM3MHB4KSBhbmQgKG1heC13aWR0aDogNzY2cHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNTAlO1xuXHR9XG59XG4vKiBmb3IgaXBhZCAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA4MCU7XG5cdH1cbn1cbi8qIGZvciBpcGFkIHBybyAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogOTkxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNDYlO1xuXHR9XG59XG4vKiBmb3IgZGVza3RvcCAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogMTIwMXB4KSBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDUwJTtcblx0fVxufVxuLyogZm9yIGN1c3RvbSBjc3MgZm9yIGF1dG9jb21wbGV0ZSBzZWxlY3Qgb3B0aW9uIGVuZHMgKi8iXX0= */"

/***/ }),

/***/ "./src/app/report/stocks-report/pending-stocks-details-report/pending-stocks-details-report.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/pending-stocks-details-report/pending-stocks-details-report.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Pending Stocks Details\n\t\t\t\t\t\tReport</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div  class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" [(ngModel)]=\"fromDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div  class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"toDateModel\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Delivery Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"deliveryType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"All\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Godown Delivery</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Door Delivery</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\"(click)=\"searchMethod();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"(click)=\"clearMethod();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Pending Stocks Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"pendingStocksDetailsRptId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsPendingStocksDetailsReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerPendingStocksDetailsReport\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Arrival Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let pendingStocksDetailsReportData of pendingStocksDetailsReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pendingStocksDetailsReportData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pendingStocksDetailsReportData.bookingDateStr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pendingStocksDetailsReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pendingStocksDetailsReportData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pendingStocksDetailsReportData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pendingStocksDetailsReportData.consigneeName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ pendingStocksDetailsReportData.unLoadingDate\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/report/stocks-report/pending-stocks-details-report/pending-stocks-details-report.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/pending-stocks-details-report/pending-stocks-details-report.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PendingStocksDetailsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingStocksDetailsReportComponent", function() { return PendingStocksDetailsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
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









var PendingStocksDetailsReportComponent = /** @class */ (function () {
    function PendingStocksDetailsReportComponent(router, datePipe, lrReportService, modalService) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.lrReportService = lrReportService;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.dtTriggerPendingStocksDetailsReport = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.lrdtoFroSearch = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.searchPendingStockDetails = function () {
            _this.showSpinnerForAction = true;
            _this.lrReportService.getPendingStocksDetails(_this.lrdtoFroSearch).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#pendingStocksDetailsRptId").DataTable().destroy();
                _this.pendingStocksDetailsReportDataList = [];
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
                    _this.pendingStocksDetailsReportDataList = response;
                    console.log(_this.pendingStocksDetailsReportDataList);
                }
                _this.dtTriggerPendingStocksDetailsReport.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error", "Server Problem Occurred While getting the  Pending Stock  details", "info");
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
        }
    }
    PendingStocksDetailsReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    PendingStocksDetailsReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    PendingStocksDetailsReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    PendingStocksDetailsReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsPendingStocksDetailsReport = {
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
                        if ($("#deliveryType").val() == 'Godown Delivery' || $("#deliveryType").val() == 'Door Delivery') {
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_9__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_9__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:19px;'><u>Pending Stocks Details Report</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:40%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Delivery Type</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#deliveryType").val() + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_9__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_9__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:19px;'><u>Pending Stocks Details Report</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:40%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Delivery Type</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>ALL</span><br>" +
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
                        if ($("#deliveryType").val() == 'Godown Delivery' || $("#deliveryType").val() == 'Door Delivery') {
                            returnSummaryExcel = "Pending Stocks Details Report" +
                                " From Date : " + moment__WEBPACK_IMPORTED_MODULE_9__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_9__($("#toDate").val()).format('DD-MM-YYYY') + " Delivery Type : " + $("#deliveryType").val();
                        }
                        else {
                            returnSummaryExcel = "Pending Stocks Details Report" +
                                " From Date : " + moment__WEBPACK_IMPORTED_MODULE_9__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_9__($("#toDate").val()).format('DD-MM-YYYY') + " Delivery Type : ALL";
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
                var articles = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html(articles);
                $(api.column(3).footer()).html(toPay);
                $(api.column(4).footer()).html(paid);
                $(api.column(5).footer()).html();
                $(api.column(5).footer()).html();
            }
        };
    };
    PendingStocksDetailsReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerPendingStocksDetailsReport.unsubscribe();
    };
    PendingStocksDetailsReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerPendingStocksDetailsReport.next();
    };
    PendingStocksDetailsReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    PendingStocksDetailsReportComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    PendingStocksDetailsReportComponent.prototype.searchMethod = function () {
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedDeliveryType = $("#deliveryType").val();
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
            this.lrdtoFroSearch = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
            this.lrdtoFroSearch.fromDate = this.selectedFromDate;
            this.lrdtoFroSearch.toDate = this.selectedToDate;
            this.lrdtoFroSearch.deliveryType = this.selectedDeliveryType;
            this.lrdtoFroSearch.branch = this.userDataDtoReturnSession.office;
            this.lrdtoFroSearch.status = "Pending";
            this.lrdtoFroSearch.companyId = this.userDataDtoReturnSession.companyId;
            console.log(this.lrdtoFroSearch);
            this.searchPendingStockDetails();
        }
    };
    PendingStocksDetailsReportComponent.prototype.clearMethod = function () {
        this.showSpinnerForAction = false;
        this.lrdtoFroSearch = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.selectedFromDate = '';
        $("#fromDate").val('');
        this.selectedToDate = '';
        $("#toDate").val('');
        this.selectedDeliveryType = '';
        $("#deliveryType").val('All');
        $("#pendingStocksDetailsRptId").DataTable().destroy();
        this.pendingStocksDetailsReportDataList = [];
        this.dtTriggerPendingStocksDetailsReport.next();
        this.fromDateModel = null;
        this.toDateModel = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PendingStocksDetailsReportComponent.prototype, "dtElements", void 0);
    PendingStocksDetailsReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-stocks-details-report',
            template: __webpack_require__(/*! ./pending-stocks-details-report.component.html */ "./src/app/report/stocks-report/pending-stocks-details-report/pending-stocks-details-report.component.html"),
            styles: [__webpack_require__(/*! ./pending-stocks-details-report.component.css */ "./src/app/report/stocks-report/pending-stocks-details-report/pending-stocks-details-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_8__["LrReportService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], PendingStocksDetailsReportComponent);
    return PendingStocksDetailsReportComponent;
}());



/***/ }),

/***/ "./src/app/report/stocks-report/stocks-in-taken-report/stocks-in-taken-report.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/stocks-in-taken-report/stocks-in-taken-report.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n  top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0b2Nrcy1yZXBvcnQvc3RvY2tzLWluLXRha2VuLXJlcG9ydC9zdG9ja3MtaW4tdGFrZW4tcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0lBQ1AsVUFBVTtDQUNiLGtCQUFrQjtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvc3RvY2tzLXJlcG9ydC9zdG9ja3MtaW4tdGFrZW4tcmVwb3J0L3N0b2Nrcy1pbi10YWtlbi1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvdyB7XHJcbiAgdG9wOjI2cHg7XHJcbiAgICBsZWZ0OjI1cHg7XHJcblx0bWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/report/stocks-report/stocks-in-taken-report/stocks-in-taken-report.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/stocks-in-taken-report/stocks-in-taken-report.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row system_responsive\"*ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Stock In Taken Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row \" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSrcDest\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"source\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSource\" [ngbTypeahead]=\"searchSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSrcDest\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destination\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" [(ngModel)]=\"fromDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"toDateModel\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"searchMethod();\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"(click)=\"clearMethod();\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Stock In Taken Report</h6>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"stocksInTakenReportId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStocksInTakenReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStocksInTakenReport\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck No.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Supplier</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total LRs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gur. Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Kanta Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Departure Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Departure Time</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>St Arrival Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>St Arrival Time</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>St Days Taken</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>St Time Taken</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Scan Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Scan Time</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Scan Time Taken</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Rewarding-H-Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"showRewardHAmt\">Reward Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Stock Date</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let stocksInTakenReportData of stocksInTakenReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.supplierName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.fromStation }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.totalLRs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.actWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.chargedwt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.gurWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.kantaWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.topay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.invoiceDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.departureTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.arrivalDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.arrivalTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.daysDiff }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.todate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.scanDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.scanTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.timeTaken }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.driverRewardHAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"showRewardHAmt\">{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstocksInTakenReportData.driverRewardAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksInTakenReportData.stockDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"showRewardHAmt\"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/stocks-report/stocks-in-taken-report/stocks-in-taken-report.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/stocks-in-taken-report/stocks-in-taken-report.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: StocksInTakenReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksInTakenReportComponent", function() { return StocksInTakenReportComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
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















var StocksInTakenReportComponent = /** @class */ (function () {
    function StocksInTakenReportComponent(router, masterReadService, datePipe, lrReportService, masterService, hireslipService) {
        var _this = this;
        this.router = router;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        this.lrReportService = lrReportService;
        this.masterService = masterService;
        this.hireslipService = hireslipService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.controlSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.dtTriggerStocksInTakenReport = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.destSrcView = false;
        this.showSrcDest = false;
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoDestinationAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.lrDtoSource = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoSourceAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.sourceTA = [];
        this.focusSourceTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.searchSource = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.sourceTA
                : _this.sourceTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSource = function (x) { return x.destination; };
        this.invoiceDtoSearch = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.isRewardHAmtShow = false;
        this.showRewardHAmt = false;
        this.showHideSrcDest = 'Show SrcDest For StocksInTakenRpt';
        this.showHideRewardAmt = 'Show RewardAmt';
        this.searchMethodDetails = function () {
            _this.showSpinnerForAction = true;
            _this.hireslipService.getStocksInTakenReport(_this.invoiceDtoSearch).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#stocksInTakenReportId").DataTable().destroy();
                _this.stocksInTakenReportDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.stocksInTakenReportDataList = response;
                    console.log(_this.stocksInTakenReportDataList);
                }
                _this.dtTriggerStocksInTakenReport.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the  Stocks In Taken Report", "info");
            }, function () { return console.log('done'); };
        };
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
            this.office = this.userDataDtoReturnSession.office == null ? '' : this.userDataDtoReturnSession.office;
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                //    console.log(this.userDataDtoReturnSession.sortedMapFeatures.Rights);
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "dest stocks report dest view") {
                        this.destSrcView = true;
                    }
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "actRewardamtShow") {
                        this.isRewardHAmtShow = true;
                    }
                }
            }
            ///Rights for show or hide Src and Destination 
            //            if ( this.showHideSrcDest == "Show SrcDest For StocksInTakenRpt" ) {
            //               this.showSrcDest = true;
            //		this.getDestinationDetails();
            //		this.getSourceDetails();
            //            } else {
            //              this.showSrcDest = false;     	
            //            }
            ///Rights for show or hide Reward Amt
            //            if ( this.showHideRewardAmt == "Show RewardAmt" ) {
            //                 this.isRewardHAmtShow=true;
            //            } else {
            //                this.isRewardHAmtShow=false;
            //            }
            if (this.destSrcView == true) {
                this.showSrcDest = true;
                this.getDestinationDetails();
                this.getSourceDetails();
            }
            else {
                this.showSrcDest = false;
            }
            if (this.isRewardHAmtShow == true) {
                this.showRewardHAmt = true;
            }
            else {
                this.showRewardHAmt = false;
            }
        }
    }
    StocksInTakenReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StocksInTakenReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    StocksInTakenReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    StocksInTakenReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var showRewardAmt = this.isRewardHAmtShow;
        this.dtOptionsStocksInTakenReport = {
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
                    exportOptions: {
                        columns: [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
                    },
                    messageTop: function () {
                        var returnVal = null;
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
                            "<strong style='font-size:25px;'><u>Stocks In Taken Report</u></strong><br>" +
                            "</td>" +
                            "<td align='left' style='width:40%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'></strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'></strong>" +
                            "</td>" +
                            "<td width='32%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'></span><br>" +
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
                    exportOptions: {
                        columns: [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
                    },
                    title: function () {
                        var returnSummaryExcel = null;
                        returnSummaryExcel = "Stocks In Taken Report " +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_13__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_13__($("#toDate").val()).format('DD-MM-YYYY');
                        return returnSummaryExcel;
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
                var totalLrs = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var articles = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWgt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chargedWgt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var gurWgt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var kantaWgt = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(11).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var rewardHAmt = api.column(21).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                if (showRewardAmt == true) {
                    var rewarAmt = api.column(22).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                }
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html();
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html(totalLrs);
                $(api.column(5).footer()).html(articles);
                $(api.column(6).footer()).html(actualWgt);
                $(api.column(7).footer()).html(chargedWgt);
                $(api.column(8).footer()).html(gurWgt);
                $(api.column(9).footer()).html(kantaWgt);
                $(api.column(10).footer()).html(toPay);
                $(api.column(11).footer()).html(paid);
                $(api.column(12).footer()).html();
                $(api.column(13).footer()).html();
                $(api.column(14).footer()).html();
                $(api.column(15).footer()).html();
                $(api.column(16).footer()).html();
                $(api.column(17).footer()).html();
                $(api.column(18).footer()).html();
                $(api.column(19).footer()).html();
                $(api.column(20).footer()).html();
                $(api.column(21).footer()).html(rewardHAmt);
                if (showRewardAmt == true) {
                    $(api.column(22).footer()).html(rewarAmt);
                    $(api.column(23).footer()).html();
                }
                else {
                    $(api.column(22).footer()).html();
                }
            }
        };
    };
    StocksInTakenReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerStocksInTakenReport.unsubscribe();
    };
    StocksInTakenReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerStocksInTakenReport.next();
    };
    StocksInTakenReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    StocksInTakenReportComponent.prototype.getSourceMethod = function () {
        this.lrDtoSource = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoSource.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoSource.branch = this.userDataDtoReturnSession.office;
        this.lrDtoSource.mode = "logininfo";
    };
    StocksInTakenReportComponent.prototype.getSourceDetails = function () {
        var _this = this;
        this.getSourceMethod();
        this.showSpinnerForAction = true;
        this.masterReadService.getDestinationForLREntryService(this.lrDtoSource).subscribe(function (response) {
            _this.showSpinnerForAction = false;
            if (response) {
                if (response.length > 0) {
                    _this.sourceOptions = response;
                    _this.sourceTA = [];
                    _this.lrDtoSourceAll.destination = 'All';
                    _this.sourceTA.push(_this.lrDtoSourceAll);
                    for (var i = 0; i < _this.sourceOptions.length; i++) {
                        _this.sourceTA.push(_this.sourceOptions[i]);
                    }
                    $("#source").val('All');
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Source Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksInTakenReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "logininfo";
    };
    StocksInTakenReportComponent.prototype.getDestinationDetails = function () {
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
                    _this.lrDtoDestinationAll.destination = 'All';
                    _this.destinationTA.push(_this.lrDtoDestinationAll);
                    for (var i = 0; i < _this.destinationOptions.length; i++) {
                        _this.destinationTA.push(_this.destinationOptions[i]);
                    }
                    $("#destination").val('All');
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Destination Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksInTakenReportComponent.prototype.searchMethod = function () {
        this.selectedSource = $("#source").val();
        this.selectedDestination = $("#destination").val();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.invoiceDtoSearch = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        if (this.selectedFromDate == null || this.selectedFromDate == '' || this.selectedToDate == null || this.selectedToDate == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Mandatory Field",
                text: "Please select Date",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return false;
        }
        else {
            if (this.destSrcView == true) {
                this.invoiceDtoSearch.fromStation = this.selectedSource;
                this.invoiceDtoSearch.toStation = this.selectedDestination;
            }
            else {
                this.invoiceDtoSearch.toStation = this.userDataDtoReturnSession.mainStation;
            }
        }
        this.invoiceDtoSearch.fromdate = this.selectedFromDate;
        this.invoiceDtoSearch.todate = this.selectedToDate;
        this.invoiceDtoSearch.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.invoiceDtoSearch);
        this.searchMethodDetails();
    };
    StocksInTakenReportComponent.prototype.clearMethod = function () {
        this.showSpinnerForAction = false;
        $("#stocksInTakenReportId").DataTable().destroy();
        this.stocksInTakenReportDataList = [];
        this.dtTriggerStocksInTakenReport.next();
        this.invoiceDtoSearch = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.selectedSource = '';
        this.selectedDestination = '';
        this.selectedFromDate = '';
        this.selectedToDate = '';
        $("#source").val('All');
        $("#destination").val('All');
        $("#fromDate").val('');
        $("#toDate").val('');
        this.fromDateModel = null;
        this.toDateModel = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], StocksInTakenReportComponent.prototype, "dtElements", void 0);
    StocksInTakenReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stocks-in-taken-report',
            template: __webpack_require__(/*! ./stocks-in-taken-report.component.html */ "./src/app/report/stocks-report/stocks-in-taken-report/stocks-in-taken-report.component.html"),
            styles: [__webpack_require__(/*! ./stocks-in-taken-report.component.css */ "./src/app/report/stocks-report/stocks-in-taken-report/stocks-in-taken-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__["MasterReadService"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_12__["LrReportService"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_14__["MasterService"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_16__["HireslipService"]])
    ], StocksInTakenReportComponent);
    return StocksInTakenReportComponent;
}());



/***/ }),

/***/ "./src/app/report/stocks-report/stocks-report.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/report/stocks-report/stocks-report.module.ts ***!
  \**************************************************************/
/*! exports provided: StocksReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksReportModule", function() { return StocksReportModule; });
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
/* harmony import */ var src_app_report_stocks_report_stocks_report_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/stocks-report/stocks-report.routing */ "./src/app/report/stocks-report/stocks-report.routing.ts");
/* harmony import */ var src_app_report_stocks_report_stocks_in_taken_report_stocks_in_taken_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/stocks-report/stocks-in-taken-report/stocks-in-taken-report.component */ "./src/app/report/stocks-report/stocks-in-taken-report/stocks-in-taken-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_commodity_report_commodity_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/stocks-report/commodity-report/commodity-report.component */ "./src/app/report/stocks-report/commodity-report/commodity-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_godown_stocks_booking_report_godown_stocks_booking_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/stocks-report/godown-stocks-booking-report/godown-stocks-booking-report.component */ "./src/app/report/stocks-report/godown-stocks-booking-report/godown-stocks-booking-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_godown_stocks_report_godown_stocks_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/report/stocks-report/godown-stocks-report/godown-stocks-report.component */ "./src/app/report/stocks-report/godown-stocks-report/godown-stocks-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_pending_stocks_details_report_pending_stocks_details_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/report/stocks-report/pending-stocks-details-report/pending-stocks-details-report.component */ "./src/app/report/stocks-report/pending-stocks-details-report/pending-stocks-details-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_stocks_unloading_report_stocks_unloading_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/report/stocks-report/stocks-unloading-report/stocks-unloading-report.component */ "./src/app/report/stocks-report/stocks-unloading-report/stocks-unloading-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_storage_report_storage_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/report/stocks-report/storage-report/storage-report.component */ "./src/app/report/stocks-report/storage-report/storage-report.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_report_stocks_report_delivery_unloaded_lr_detained_delivery_unloaded_lr_detained_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/report/stocks-report/delivery-unloaded-lr-detained/delivery-unloaded-lr-detained.component */ "./src/app/report/stocks-report/delivery-unloaded-lr-detained/delivery-unloaded-lr-detained.component.ts");
/* harmony import */ var src_app_report_stocks_report_delivery_unloaded_lr_notdetained_delivery_unloaded_lr_notdetained_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/report/stocks-report/delivery-unloaded-lr-notdetained/delivery-unloaded-lr-notdetained.component */ "./src/app/report/stocks-report/delivery-unloaded-lr-notdetained/delivery-unloaded-lr-notdetained.component.ts");
/* harmony import */ var src_app_report_stocks_report_booking_agent_dispatch_performance_report_booking_agent_dispatch_performance_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/report/stocks-report/booking-agent-dispatch-performance-report/booking-agent-dispatch-performance-report.component */ "./src/app/report/stocks-report/booking-agent-dispatch-performance-report/booking-agent-dispatch-performance-report.component.ts");
/* harmony import */ var src_app_report_cashmemo_report_cashmemo_report_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/report/cashmemo-report/cashmemo-report.module */ "./src/app/report/cashmemo-report/cashmemo-report.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends













var StocksReportModule = /** @class */ (function () {
    function StocksReportModule() {
    }
    StocksReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_stocks_report_stocks_report_routing__WEBPACK_IMPORTED_MODULE_10__["StocksReportRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_18__["MaterialModule"], src_app_report_cashmemo_report_cashmemo_report_module__WEBPACK_IMPORTED_MODULE_22__["CashmemoReportModule"]],
            declarations: [
                src_app_report_stocks_report_stocks_in_taken_report_stocks_in_taken_report_component__WEBPACK_IMPORTED_MODULE_11__["StocksInTakenReportComponent"],
                src_app_report_stocks_report_commodity_report_commodity_report_component__WEBPACK_IMPORTED_MODULE_12__["CommodityReportComponent"],
                src_app_report_stocks_report_godown_stocks_booking_report_godown_stocks_booking_report_component__WEBPACK_IMPORTED_MODULE_13__["GodownStocksBookingReportComponent"],
                src_app_report_stocks_report_godown_stocks_report_godown_stocks_report_component__WEBPACK_IMPORTED_MODULE_14__["GodownStocksReportComponent"],
                src_app_report_stocks_report_pending_stocks_details_report_pending_stocks_details_report_component__WEBPACK_IMPORTED_MODULE_15__["PendingStocksDetailsReportComponent"],
                src_app_report_stocks_report_stocks_unloading_report_stocks_unloading_report_component__WEBPACK_IMPORTED_MODULE_16__["StocksUnloadingReportComponent"],
                src_app_report_stocks_report_storage_report_storage_report_component__WEBPACK_IMPORTED_MODULE_17__["StorageReportComponent"],
                src_app_report_stocks_report_delivery_unloaded_lr_detained_delivery_unloaded_lr_detained_component__WEBPACK_IMPORTED_MODULE_19__["DeliveryUnloadedLrDetainedComponent"],
                src_app_report_stocks_report_delivery_unloaded_lr_notdetained_delivery_unloaded_lr_notdetained_component__WEBPACK_IMPORTED_MODULE_20__["DeliveryUnloadedLrNotDetainedComponent"],
                src_app_report_stocks_report_booking_agent_dispatch_performance_report_booking_agent_dispatch_performance_report_component__WEBPACK_IMPORTED_MODULE_21__["BookingAgentDispatchPerformanceReportComponent"]
            ]
        })
    ], StocksReportModule);
    return StocksReportModule;
}());



/***/ }),

/***/ "./src/app/report/stocks-report/stocks-report.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/report/stocks-report/stocks-report.routing.ts ***!
  \***************************************************************/
/*! exports provided: StocksReportRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksReportRoutes", function() { return StocksReportRoutes; });
/* harmony import */ var src_app_report_stocks_report_stocks_in_taken_report_stocks_in_taken_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/report/stocks-report/stocks-in-taken-report/stocks-in-taken-report.component */ "./src/app/report/stocks-report/stocks-in-taken-report/stocks-in-taken-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_commodity_report_commodity_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report/stocks-report/commodity-report/commodity-report.component */ "./src/app/report/stocks-report/commodity-report/commodity-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_godown_stocks_booking_report_godown_stocks_booking_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/report/stocks-report/godown-stocks-booking-report/godown-stocks-booking-report.component */ "./src/app/report/stocks-report/godown-stocks-booking-report/godown-stocks-booking-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_godown_stocks_report_godown_stocks_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/report/stocks-report/godown-stocks-report/godown-stocks-report.component */ "./src/app/report/stocks-report/godown-stocks-report/godown-stocks-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_pending_stocks_details_report_pending_stocks_details_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/report/stocks-report/pending-stocks-details-report/pending-stocks-details-report.component */ "./src/app/report/stocks-report/pending-stocks-details-report/pending-stocks-details-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_stocks_unloading_report_stocks_unloading_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/report/stocks-report/stocks-unloading-report/stocks-unloading-report.component */ "./src/app/report/stocks-report/stocks-unloading-report/stocks-unloading-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_storage_report_storage_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/report/stocks-report/storage-report/storage-report.component */ "./src/app/report/stocks-report/storage-report/storage-report.component.ts");
/* harmony import */ var src_app_report_stocks_report_booking_agent_dispatch_performance_report_booking_agent_dispatch_performance_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/report/stocks-report/booking-agent-dispatch-performance-report/booking-agent-dispatch-performance-report.component */ "./src/app/report/stocks-report/booking-agent-dispatch-performance-report/booking-agent-dispatch-performance-report.component.ts");








var StocksReportRoutes = [
    {
        path: '',
        children: [
            {
                path: 'stocksInTakenReport',
                component: src_app_report_stocks_report_stocks_in_taken_report_stocks_in_taken_report_component__WEBPACK_IMPORTED_MODULE_0__["StocksInTakenReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'commodityReport',
                component: src_app_report_stocks_report_commodity_report_commodity_report_component__WEBPACK_IMPORTED_MODULE_1__["CommodityReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'godownStocksBookingReport',
                component: src_app_report_stocks_report_godown_stocks_booking_report_godown_stocks_booking_report_component__WEBPACK_IMPORTED_MODULE_2__["GodownStocksBookingReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'godownStocksReport',
                component: src_app_report_stocks_report_godown_stocks_report_godown_stocks_report_component__WEBPACK_IMPORTED_MODULE_3__["GodownStocksReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'pendingStocksDetailsReport',
                component: src_app_report_stocks_report_pending_stocks_details_report_pending_stocks_details_report_component__WEBPACK_IMPORTED_MODULE_4__["PendingStocksDetailsReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'stocksUnloadingReport',
                component: src_app_report_stocks_report_stocks_unloading_report_stocks_unloading_report_component__WEBPACK_IMPORTED_MODULE_5__["StocksUnloadingReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'storageReport',
                component: src_app_report_stocks_report_storage_report_storage_report_component__WEBPACK_IMPORTED_MODULE_6__["StorageReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'bookingAgentDispatchPerformanceReport',
                component: src_app_report_stocks_report_booking_agent_dispatch_performance_report_booking_agent_dispatch_performance_report_component__WEBPACK_IMPORTED_MODULE_7__["BookingAgentDispatchPerformanceReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/report/stocks-report/stocks-unloading-report/stocks-unloading-report.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/stocks-unloading-report/stocks-unloading-report.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/* the below code we add to view the option in popup modal starts  for truck master*/\n\n::ng-deep .cdk-overlay-container {\n\t/* Do you changes here */\n\tposition: fixed;\n\tz-index: 9999;\n}\n\n::ng-deep .cdk-overlay-pane {\n\tz-index: 9999;\n}\n\n::ng-deep .myCustomModalClass\t.modal-dialog {\n\tmax-width: auto;\n}\n\n/* the below code we add to view the option in popup modal ends truck master*/\n\n/* the below code we add to view the option in popup modal starts  for truck master*/\n\n::ng-deep .modalClassForPopUp\t.modal-dialog {\n\tmax-width: 80%;\n}\n\n/* the below code we add to view the option in popup modal ends truck master*/\n\n.pointer {cursor: pointer;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0b2Nrcy1yZXBvcnQvc3RvY2tzLXVubG9hZGluZy1yZXBvcnQvc3RvY2tzLXVubG9hZGluZy1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7O0FBRUQscUZBQXFGOztBQUNyRjtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkOztBQUVEO0NBQ0MsY0FBYztDQUNkOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUNELDhFQUE4RTs7QUFFOUUscUZBQXFGOztBQUVyRjtDQUNDLGVBQWU7Q0FDZjs7QUFDRCw4RUFBOEU7O0FBQzlFLFVBQVUsZ0JBQWdCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvc3RvY2tzLXJlcG9ydC9zdG9ja3MtdW5sb2FkaW5nLXJlcG9ydC9zdG9ja3MtdW5sb2FkaW5nLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuXG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIHN0YXJ0cyAgZm9yIHRydWNrIG1hc3RlciovXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG5cdC8qIERvIHlvdSBjaGFuZ2VzIGhlcmUgKi9cblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiA5OTk5O1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xuXHR6LWluZGV4OiA5OTk5O1xufVxuXG46Om5nLWRlZXAgLm15Q3VzdG9tTW9kYWxDbGFzc1x0Lm1vZGFsLWRpYWxvZyB7XG5cdG1heC13aWR0aDogYXV0bztcbn1cbi8qIHRoZSBiZWxvdyBjb2RlIHdlIGFkZCB0byB2aWV3IHRoZSBvcHRpb24gaW4gcG9wdXAgbW9kYWwgZW5kcyB0cnVjayBtYXN0ZXIqL1xuXG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIHN0YXJ0cyAgZm9yIHRydWNrIG1hc3RlciovXG5cbjo6bmctZGVlcCAubW9kYWxDbGFzc0ZvclBvcFVwXHQubW9kYWwtZGlhbG9nIHtcblx0bWF4LXdpZHRoOiA4MCU7XG59XG4vKiB0aGUgYmVsb3cgY29kZSB3ZSBhZGQgdG8gdmlldyB0aGUgb3B0aW9uIGluIHBvcHVwIG1vZGFsIGVuZHMgdHJ1Y2sgbWFzdGVyKi9cbi5wb2ludGVyIHtjdXJzb3I6IHBvaW50ZXI7fSJdfQ== */"

/***/ }),

/***/ "./src/app/report/stocks-report/stocks-unloading-report/stocks-unloading-report.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/stocks-unloading-report/stocks-unloading-report.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Stocks Unloading Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxEnable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"enableCheckBoxEvent($event)\"><label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxEnable\">Enable</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\" [hidden]=\"!hideAndShowEnableField\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" value=\"All\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxEnableAll\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"enableCheckBoxAllEvent($event)\"><label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxEnableAll\">All</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxEnableSpecific\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"enableCheckBoxSpecificEvent($event)\"><label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"Specific\" class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxEnableSpecific\">Specific</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cheatCodeId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"cheatCodeId\" aria-describedby=\" basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxCheckPostDetained\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"enableCheckPostDetainedEvent($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxCheckPostDetained\">Check Post\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetained</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"hideAndShowInvoiceNumberField\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"invoiceNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDates\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\" [(ngModel)]=\"fromDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\" [(ngModel)]=\"toDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" (click)=\"validateSearchBtn()\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" (click)=\"clearBtn();\"\n\t\t\t\t\t\t\t\tid=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable id=\"stockUnloadingTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsUnloadingReport\" [dtTrigger]=\"dtTriggerUnloadingReport\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Vehicle Number</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let unloadingReportData of unloadingReportDataList \">\n\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"stockUnloadingRptPopUpBtnLink\n\t\t\t\t\t\t\t\t\t\t\t\t(stockUnloadingPopupTemplate,unloadingReportData);\" class=\"pointer\">\n\t\t\t\t\t\t\t\t\t\t\t\t<u>{{ unloadingReportData.invoiceNumber }}</u></a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ unloadingReportData.invDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ unloadingReportData.totalLRs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ unloadingReportData.fromStation }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ unloadingReportData.toStation }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ unloadingReportData.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- popup modal starts -->\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<ng-template #stockUnloadingPopupTemplate let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<!--h6 class=\"modal-title\" id=\"modal-basic-title\">LR Details</h6>-->\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"viewDeliveryUnldDetainedPopUp\" onafterPopUp=\"afterPopUp()\"\n\t\t\t\t\t\t\t\t\tid=\"popupStockUnloadingDetained\">\n\t\t\t\t\t\t\t\t\t<delivery-unloaded-lr-detained></delivery-unloaded-lr-detained>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"viewDeliveryUnldNotDetainedPopUp\" onafterPopUp=\"afterPopUp()\"\n\t\t\t\t\t\t\t\t\tid=\"popupStockUnloadingNotDetained\">\n\t\t\t\t\t\t\t\t\t<delivery-unloaded-lr-notdetained></delivery-unloaded-lr-notdetained>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<div class=\"col-md-4\"></div>\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t\t(click)=\"c('cancle click')\">Cancel</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--End PopuP-->\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/stocks-report/stocks-unloading-report/stocks-unloading-report.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/report/stocks-report/stocks-unloading-report/stocks-unloading-report.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: StocksUnloadingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksUnloadingReportComponent", function() { return StocksUnloadingReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_dataService_stock_report__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/stock-report */ "./src/app/dataService/stock-report.ts");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
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
//import { Subject, Subscription } from 'rxjs';







var StocksUnloadingReportComponent = /** @class */ (function () {
    function StocksUnloadingReportComponent(stocksUnloadingRpt, modalService, router, stockReport) {
        var _this = this;
        this.stocksUnloadingRpt = stocksUnloadingRpt;
        this.modalService = modalService;
        this.router = router;
        this.stockReport = stockReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerUnloadingReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.hideAndShowEnableField = false;
        this.validateCheckboxEnable = false;
        this.hideAndShowInvoiceNumberField = false;
        this.validateInvoiceNumberCheckBox = false;
        this.validateFromDate = null;
        this.validatetoDate = null;
        this.validateInvoiceNumber = null;
        this.validateCheckBoxEnableAll = null;
        this.validateCheckBoxEnableSpecific = null;
        this.validateCheatCode = null;
        this.isLoggedIn = true;
        this.invoiceDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_9__["InvoiceDto"]();
        this.fromDatesModal = null;
        this.toDatesModal = null;
        this.rightsForOffice = "Rights For Office";
        this.hideAndShowDetainedTable = false;
        this.hideAndShowNotDetainedTable = false;
        this.showSpinnerForAction = false;
        this.invoice_Dto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_9__["InvoiceDto"]();
        this.viewDeliveryUnldDetainedPopUp = false;
        this.viewDeliveryUnldNotDetainedPopUp = false;
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
        }
    }
    StocksUnloadingReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StocksUnloadingReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        // var booleanInvoiceCheckBox = this.validateInvoiceNumberCheckBox;
        //var invoice_no = $("#invoiceNumber").val();
        this.dtOptionsUnloadingReport = {
            dom: 'Bfrtip',
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            }, buttons: [
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
                            "<u>Stock Unloading Report</u><br><br>" +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_7__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_7__($("#toDates").val()).format('DD-MM-YYYY') + "" +
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
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return "Stock Unloading Report - " +
                            "From Date : " + moment__WEBPACK_IMPORTED_MODULE_7__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                            "To Date : " + moment__WEBPACK_IMPORTED_MODULE_7__($("#toDates").val()).format('DD-MM-YYYY') + "";
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                }
            ],
            processing: true,
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
                // computing column Total of the complete result 
                var totalLrs = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(2).footer()).html(totalLrs);
            },
        };
    };
    StocksUnloadingReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                /*if (dtInstance.table().node().id == "consolidateMemoRptDetailsTableId") {
                }*/
            });
        });
    };
    StocksUnloadingReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerUnloadingReport.unsubscribe();
    };
    StocksUnloadingReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerUnloadingReport.next();
        //this.dtTriggerUnloadingReportDetained.next();
    };
    StocksUnloadingReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for popup modal starts 
    StocksUnloadingReportComponent.prototype.getDismissReason = function (reason) {
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
    StocksUnloadingReportComponent.prototype.stockUnloadingRptPopUpBtnLink = function (stockUnloadingPopupTemplate, unloadingReportData) {
        var _this = this;
        this.modalRefferenceStockUnloadingRptPopUp = this.modalService.open(stockUnloadingPopupTemplate, { centered: true, windowClass: "modalClassForPopUp" });
        this.modalRefferenceStockUnloadingRptPopUp.result.then(function (result) {
            _this.modalRefferenceStockUnloadingRptClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceStockUnloadingRptClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
        if (this.validateInvoiceNumberCheckBox == false) {
            this.setLocalStorageLRNotDetainedData(unloadingReportData);
        }
        else if (this.validateInvoiceNumberCheckBox == true) {
            this.setLocalStorageLRDetainedData(unloadingReportData);
        }
        /*  this.invoice_Dto = new InvoiceDto();
          this.validateFromDate = null;
          this.validatetoDate = null;
          this.validateCheatCode = null;
  
          if (this.validateInvoiceNumberCheckBox == false) {
              this.invoice_Dto.mode = "notDetain";
          } else if (this.validateInvoiceNumberCheckBox == true) {
              this.invoice_Dto.mode = "detain";
          }
          this.validateFromDate = $("#fromDates").val();
          this.validatetoDate = $("#toDates").val();
          this.validateCheatCode = $("#cheatCodeId").val();
  
          this.invoice_Dto.invoiceNumber = unloadingReportData.invoiceNumber;
          if (this.validateCheckboxEnable == true) {
              if (this.validateCheckBoxEnableAll == true) {
                  this.invoice_Dto.address = "All";
              } else {
                  this.invoice_Dto.address = "Specific";
              }
          } else {
              this.invoice_Dto.address = "Default";
          }
          this.invoice_Dto.commodityCode = this.validateCheatCode;
          this.invoice_Dto.companyId = this.userDataDtoReturnSession.companyId;
          console.log(this.invoice_Dto);
  
          localStorage.clear();
          localStorage.setItem('popupDeliveryUnloadedDetained', JSON.stringify(this.invoice_Dto));
  
          this.viewDeliveryUnldDetainedPopUp = true;
          window.addEventListener('afterPopUp', (event) => {
              this.viewDeliveryUnldDetainedPopUp = false;
          });
  
         */
    };
    StocksUnloadingReportComponent.prototype.setLocalStorageLRDetainedData = function (unloadingReportData) {
        var _this = this;
        this.invoice_Dto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_9__["InvoiceDto"]();
        this.validateFromDate = null;
        this.validatetoDate = null;
        this.validateCheatCode = null;
        this.validateFromDate = $("#fromDates").val();
        this.validatetoDate = $("#toDates").val();
        this.validateCheatCode = $("#cheatCodeId").val();
        if (this.validateCheckboxEnable == true) {
            if (this.validateCheckBoxEnableAll == true) {
                this.invoice_Dto.address = "All";
            }
            else {
                this.invoice_Dto.address = "Specific";
            }
        }
        else {
            this.invoice_Dto.address = "Default";
        }
        this.invoice_Dto.mode = "detain";
        this.invoice_Dto.invoiceNumber = unloadingReportData.invoiceNumber;
        this.invoice_Dto.commodityCode = this.validateCheatCode;
        this.invoice_Dto.companyId = this.userDataDtoReturnSession.companyId;
        localStorage.clear();
        localStorage.setItem('popupDeliveryUnloadedDetained', JSON.stringify(this.invoice_Dto));
        this.viewDeliveryUnldDetainedPopUp = true;
        window.addEventListener('afterPopUp', function (event) {
            _this.viewDeliveryUnldDetainedPopUp = false;
        });
    };
    StocksUnloadingReportComponent.prototype.setLocalStorageLRNotDetainedData = function (unloadingReportData) {
        var _this = this;
        this.invoice_Dto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_9__["InvoiceDto"]();
        this.validateFromDate = null;
        this.validatetoDate = null;
        this.validateCheatCode = null;
        this.validateFromDate = $("#fromDates").val();
        this.validatetoDate = $("#toDates").val();
        this.validateCheatCode = $("#cheatCodeId").val();
        if (this.validateCheckboxEnable == true) {
            if (this.validateCheckBoxEnableAll == true) {
                this.invoice_Dto.address = "All";
            }
            else {
                this.invoice_Dto.address = "Specific";
            }
        }
        else {
            this.invoice_Dto.address = "Default";
        }
        this.invoice_Dto.mode = "notDetain";
        this.invoice_Dto.invoiceNumber = unloadingReportData.invoiceNumber;
        this.invoice_Dto.commodityCode = this.validateCheatCode;
        this.invoice_Dto.companyId = this.userDataDtoReturnSession.companyId;
        localStorage.clear();
        localStorage.setItem('popupDeliveryUnloadedNotDetained', JSON.stringify(this.invoice_Dto));
        this.viewDeliveryUnldNotDetainedPopUp = true;
        window.addEventListener('afterPopUp', function (event) {
            _this.viewDeliveryUnldNotDetainedPopUp = false;
        });
    };
    //for popup modal ends 
    StocksUnloadingReportComponent.prototype.enableCheckBoxEvent = function (values) {
        if (values.currentTarget.checked == true) {
            this.hideAndShowEnableField = true;
            this.validateCheckboxEnable = true;
            $("#checkboxEnableAll").prop('checked', true);
            $("#checkboxEnableSpecific").prop('checked', false);
            this.validateCheckBoxEnableAll = true;
        }
        else {
            this.hideAndShowEnableField = false;
            this.validateCheckboxEnable = false;
            this.validateCheckBoxEnableAll = false;
        }
    };
    StocksUnloadingReportComponent.prototype.enableCheckPostDetainedEvent = function (values) {
        if (values.currentTarget.checked == true) {
            $("#invoiceNumber").val('');
            this.hideAndShowInvoiceNumberField = true;
            this.validateInvoiceNumberCheckBox = true;
            //
            this.viewDeliveryUnldNotDetainedPopUp = false;
            this.viewDeliveryUnldDetainedPopUp = false;
        }
        else {
            $("#invoiceNumber").val('');
            this.hideAndShowInvoiceNumberField = false;
            this.validateInvoiceNumberCheckBox = false;
            //
            this.viewDeliveryUnldNotDetainedPopUp = false;
            this.viewDeliveryUnldDetainedPopUp = false;
        }
    };
    StocksUnloadingReportComponent.prototype.clearBtn = function () {
        this.fromDatesModal = null;
        this.toDatesModal = null;
        this.validateFromDate = null;
        this.validatetoDate = null;
        this.validateInvoiceNumber = null;
        $("#fromDates").val('');
        $("#toDates").val('');
        $("#invoiceNumber").val('');
        $("#checkboxEnable").prop('checked', false);
        $("#checkboxEnableAll").prop('checked', false);
        $("#checkboxEnableSpecific").prop('checked', false);
        $("#checkboxCheckPostDetained").prop('checked', false);
        $("#stockUnloadingTableId").DataTable().destroy();
        this.unloadingReportDataList = [];
        this.dtTriggerUnloadingReport.next();
        this.hideAndShowEnableField = false;
        this.validateCheckboxEnable = false;
        this.hideAndShowInvoiceNumberField = false;
        this.validateInvoiceNumberCheckBox = false;
        this.viewDeliveryUnldNotDetainedPopUp = false;
        this.viewDeliveryUnldDetainedPopUp = false;
    };
    StocksUnloadingReportComponent.prototype.validateSearchBtn = function () {
        this.validateFromDate = $("#fromDates").val();
        this.validatetoDate = $("#toDates").val();
        this.validateInvoiceNumber = $("#invoiceNumber").val();
        if (this.validateInvoiceNumberCheckBox == false) {
            if ((this.validateInvoiceNumber == null || this.validateInvoiceNumber == undefined ||
                this.validateInvoiceNumber == "") && (this.validateFromDate == null ||
                this.validateFromDate == undefined || this.validateFromDate == "" ||
                this.validatetoDate == null || this.validatetoDate == undefined ||
                this.validatetoDate == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Mandatory Fields", "Either invoice number or from date and to date are mandatory fields", "warning");
                return false;
            }
            else {
                this.getStockUnloadingReportDataNotDetain();
            }
        }
        else if (this.validateInvoiceNumberCheckBox == true) {
            if ((this.validateFromDate == null || this.validateFromDate == undefined ||
                this.validateFromDate == "" || this.validatetoDate == null ||
                this.validatetoDate == undefined || this.validatetoDate == "")) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Mandatory Fields", "From date and To date are mandatory fields", "warning");
                return false;
            }
            else {
                this.getStockUnloadingReportDataDetain();
            }
        }
    };
    StocksUnloadingReportComponent.prototype.getStockUnloadingReportDataNotDetain = function () {
        var _this = this;
        this.invoiceDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_9__["InvoiceDto"]();
        this.validateFromDate = $("#fromDates").val();
        this.validatetoDate = $("#toDates").val();
        this.validateInvoiceNumber = $("#invoiceNumber").val();
        if (this.validateFromDate != null && this.validateFromDate != undefined &&
            this.validateFromDate != "" && this.validatetoDate != null &&
            this.validatetoDate != undefined && this.validatetoDate != "") {
            this.invoiceDto.fromdate = this.validateFromDate;
            this.invoiceDto.todate = this.validatetoDate;
        }
        else if ((this.validateFromDate == null || this.validateFromDate == undefined ||
            this.validateFromDate == "" || this.validatetoDate == null ||
            this.validatetoDate == undefined || this.validatetoDate == "") &&
            (this.validateInvoiceNumber != null && this.validateInvoiceNumber != undefined &&
                this.validateInvoiceNumber != "")) {
            this.invoiceDto.invoiceNumber = this.validateInvoiceNumber;
        }
        //if(this.rightsForOffice == "Rights For Office"){
        if (this.userDataDtoReturnSession.office == "binnymills") {
            this.invoiceDto.toStation = this.userDataDtoReturnSession.mainStation;
        }
        else {
            this.invoiceDto.toStation = this.userDataDtoReturnSession.office;
        }
        this.invoiceDto.mode = "notDetain";
        this.invoiceDto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.invoiceDto);
        this.showSpinnerForAction = true;
        this.stockReport.getUnloadingReportNotDetain(this.invoiceDto).subscribe(function (response) {
            _this.unloadingReportDataList = [];
            $("#stockUnloadingTableId").DataTable().destroy();
            if (response.length > 0) {
                //console.log(response);
                _this.unloadingReportDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Alert", "No Datas Found For This Information", "info");
            }
            _this.dtTriggerUnloadingReport.next();
            _this.showSpinnerForAction = false;
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting unloading report  Details", "error");
            };
        (function () { return console.log('done'); });
    };
    StocksUnloadingReportComponent.prototype.getStockUnloadingReportDataDetain = function () {
        var _this = this;
        this.invoiceDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_9__["InvoiceDto"]();
        this.validateFromDate = $("#fromDates").val();
        this.validatetoDate = $("#toDates").val();
        this.validateInvoiceNumber = $("#invoiceNumber").val();
        if (this.validateFromDate != null && this.validateFromDate != undefined &&
            this.validateFromDate != "" && this.validatetoDate != null &&
            this.validatetoDate != undefined && this.validatetoDate != "") {
            this.invoiceDto.fromdate = this.validateFromDate;
            this.invoiceDto.todate = this.validatetoDate;
        }
        //if(this.rightsForOffice == "Rights For Office"){
        if (this.userDataDtoReturnSession.office == "binnymills") {
            this.invoiceDto.toStation = this.userDataDtoReturnSession.mainStation;
        }
        else {
            this.invoiceDto.toStation = this.userDataDtoReturnSession.office;
        }
        this.invoiceDto.mode = "detain";
        this.invoiceDto.companyId = this.userDataDtoReturnSession.companyId;
        this.showSpinnerForAction = true;
        console.log(this.invoiceDto);
        this.stockReport.getUnloadingReportDetain(this.invoiceDto).subscribe(function (response) {
            _this.unloadingReportDataList = [];
            $("#stockUnloadingTableId").DataTable().destroy();
            if (response.length > 0) {
                // console.log(response);
                _this.unloadingReportDataList = response;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Alert", "No Datas Found For This Information", "info");
            }
            _this.dtTriggerUnloadingReport.next();
            _this.showSpinnerForAction = false;
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting  unloading report Details", "error");
            },
            function () { return console.log('done'); };
    };
    StocksUnloadingReportComponent.prototype.enableCheckBoxAllEvent = function (values) {
        if (values.currentTarget.checked == true) {
            this.validateCheckBoxEnableAll = true;
            this.validateCheckBoxEnableSpecific = false;
            $("#checkboxEnableAll").prop('checked', true);
            $("#checkboxEnableSpecific").prop('checked', false);
        }
        else {
            this.validateCheckBoxEnableAll = false;
            this.validateCheckBoxEnableSpecific = false;
            $("#checkboxEnableAll").prop('checked', false);
            $("#checkboxEnableSpecific").prop('checked', false);
        }
    };
    StocksUnloadingReportComponent.prototype.enableCheckBoxSpecificEvent = function (values) {
        if (values.currentTarget.checked == true) {
            this.validateCheckBoxEnableAll = false;
            this.validateCheckBoxEnableSpecific = true;
            $("#checkboxEnableAll").prop('checked', false);
            $("#checkboxEnableSpecific").prop('checked', true);
        }
        else {
            this.validateCheckBoxEnableAll = false;
            this.validateCheckBoxEnableSpecific = false;
            $("#checkboxEnableAll").prop('checked', false);
            $("#checkboxEnableSpecific").prop('checked', false);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StocksUnloadingReportComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stockUnloadingPopupTemplate'),
        __metadata("design:type", Object)
    ], StocksUnloadingReportComponent.prototype, "stockUnloadingPopupTemplate", void 0);
    StocksUnloadingReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks-unloading-report',
            template: __webpack_require__(/*! ./stocks-unloading-report.component.html */ "./src/app/report/stocks-report/stocks-unloading-report/stocks-unloading-report.component.html"),
            styles: [__webpack_require__(/*! ./stocks-unloading-report.component.css */ "./src/app/report/stocks-report/stocks-unloading-report/stocks-unloading-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_dataService_stock_report__WEBPACK_IMPORTED_MODULE_8__["StockReport"]])
    ], StocksUnloadingReportComponent);
    return StocksUnloadingReportComponent;
}());



/***/ }),

/***/ "./src/app/report/stocks-report/storage-report/storage-report.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/report/stocks-report/storage-report/storage-report.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n  top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3N0b2Nrcy1yZXBvcnQvc3RvcmFnZS1yZXBvcnQvc3RvcmFnZS1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7SUFDUCxVQUFVO0NBQ2Isa0JBQWtCO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9zdG9ja3MtcmVwb3J0L3N0b3JhZ2UtcmVwb3J0L3N0b3JhZ2UtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3cge1xyXG4gIHRvcDoyNnB4O1xyXG4gICAgbGVmdDoyNXB4O1xyXG5cdG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/report/stocks-report/storage-report/storage-report.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/report/stocks-report/storage-report/storage-report.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Storage Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsignee($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\"(click)=\"searchMethod();\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"(click)=\"clearMethod();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Storage Stocks Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"storageReportId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStorageReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStorageReport\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Party</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Tot LRs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Tot Art</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Stocks At</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let storageReportData of storageReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ storageReportData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ storageReportData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ storageReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ storageReportData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ storageReportData.stocksAt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- Row -->\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/stocks-report/storage-report/storage-report.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/report/stocks-report/storage-report/storage-report.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StorageReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageReportComponent", function() { return StorageReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
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















var StorageReportComponent = /** @class */ (function () {
    function StorageReportComponent(router, masterReadService, datePipe, lrReportService, masterService, consigneeService) {
        var _this = this;
        this.router = router;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        this.lrReportService = lrReportService;
        this.masterService = masterService;
        this.consigneeService = consigneeService;
        //summaryTable:any;
        this.loadingIndicator = true;
        //for the select option with filter starts
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.partyOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'K.G. Associates' },
            { id: 3, label: 'KK Enterprises' },
            { id: 4, label: 'KC Enterprises' }
        ];
        this.dtTriggerStorageReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        //for ConsigneeName
        this.consigneeNamePartyDtoAllOption = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.consigneeNameTA = [];
        this.consigneeNameTATemp = [];
        this.focusConsigneeNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.consigneeNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.consigneeNameTA
                : _this.consigneeNameTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeName = function (x) { return x.consigneeName; };
        ///
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.searchConsigneeDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.setConsigneeId = [];
        this.getConsigneeDetails = function (destShow) {
            _this.getConsigneeDetailsList(destShow);
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No Consignee Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.consigneeNameOptions = [];
                    _this.consigneeNameTA = [];
                    _this.consigneeNamePartyDtoAllOption.consigneeName = "All";
                    _this.consigneeNameTA.push(_this.consigneeNamePartyDtoAllOption);
                    $("#consigneeName").val('All');
                }
                else {
                    _this.consigneeNameOptions = response;
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                    _this.consigneeNamePartyDtoAllOption.consigneeName = "All";
                    _this.consigneeNameTA.push(_this.consigneeNamePartyDtoAllOption);
                    for (var i = 0; i < _this.consigneeNameOptions.length; i++) {
                        _this.consigneeNameTA.push(_this.consigneeNameOptions[i]);
                    }
                    $("#consigneeName").val('All');
                    console.log(_this.consigneeNameTA);
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the consignee details", "info");
            }, function () { return console.log('done'); };
        };
        this.searchStorageDetailsMethod = function () {
            _this.showSpinnerForAction = true;
            _this.lrReportService.getStorageStockRpt(_this.searchConsigneeDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#storageReportId").DataTable().destroy();
                _this.storageReportDataList = [];
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
                    _this.storageReportDataList = response;
                    console.log(_this.storageReportDataList);
                }
                _this.dtTriggerStorageReport.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Storage details", "info");
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
            this.getConsigneeDetails(false);
        }
    }
    StorageReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StorageReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    StorageReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    StorageReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var todayDate = this.datePipe.transform(new Date(), "dd-MM-yyyy");
        this.dtOptionsStorageReport = {
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
                        returnVal = "<table style='table-layout: fixed;width: 100%;'><tr>" +
                            "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                            "<u>Storage Stocks Report</u><br><br>" +
                            " Consignee Name : " + $("#consigneeName").val() + " Date :" + todayDate +
                            "</td>" +
                            "</tr></table><br>";
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
                        var returnSummaryExcel = "Storage Stocks Report  Consignee Name : " + $("#consigneeName").val() + " Date :" + todayDate;
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
                var totalLrs = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totalArt = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html(totalLrs);
                $(api.column(2).footer()).html(totalArt);
                $(api.column(3).footer()).html(toPay);
                $(api.column(4).footer()).html();
            }
        };
    };
    StorageReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerStorageReport.unsubscribe();
    };
    StorageReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerStorageReport.next();
    };
    StorageReportComponent.prototype.getConsigneeDetailsList = function (destShow) {
        this.consigneeNameOptions = [];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.partyMasterDtoForconsignee.office = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.branch = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoForconsignee.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignee.mode = "StockRptConsignee";
        console.log(this.partyMasterDtoForconsignee);
    };
    StorageReportComponent.prototype.rowSelectedConsignee = function (e) {
        this.modelConsigneeNameId = e.item;
        this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
    };
    StorageReportComponent.prototype.searchMethod = function () {
        this.selectedConsigneeName = $("#consigneeName").val();
        console.log(this.selectedConsigneeName);
        this.searchConsigneeDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        if (this.selectedConsigneeName != null && this.selectedConsigneeName != '' && this.selectedConsigneeName != 'All') {
            this.searchConsigneeDto.consigneeName = this.selectedConsigneeName;
            this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
            this.setConsigneeId = [];
            this.setConsigneeId.push(this.selectedConsigneeId);
            console.log(this.setConsigneeId);
            this.searchConsigneeDto.listOfConsigneId = this.setConsigneeId;
        }
        else {
            this.setConsigneeId = [];
            for (var i = 0; i < this.consigneeNameOptions.length; i++) {
                this.setConsigneeId.push(this.consigneeNameOptions[i].consigneeId);
            }
            console.log(this.setConsigneeId);
            this.searchConsigneeDto.listOfConsigneId = this.setConsigneeId;
        }
        this.searchConsigneeDto.destination = this.userDataDtoReturnSession.mainStation;
        this.searchConsigneeDto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.searchConsigneeDto);
        this.searchStorageDetailsMethod();
    };
    StorageReportComponent.prototype.clearMethod = function () {
        this.selectedConsigneeName = '';
        this.showSpinnerForAction = false;
        this.selectedConsigneeId = 0;
        this.modelConsigneeNameId = '';
        $("#consigneeName").val('All');
        $("#storageReportId").DataTable().destroy();
        this.storageReportDataList = [];
        this.dtTriggerStorageReport.next();
        this.searchConsigneeDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.setConsigneeId = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StorageReportComponent.prototype, "dtElements", void 0);
    StorageReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-storage-report',
            template: __webpack_require__(/*! ./storage-report.component.html */ "./src/app/report/stocks-report/storage-report/storage-report.component.html"),
            styles: [__webpack_require__(/*! ./storage-report.component.css */ "./src/app/report/stocks-report/storage-report/storage-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_13__["LrReportService"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_15__["MasterService"], src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_14__["ConsigneeService"]])
    ], StorageReportComponent);
    return StorageReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-report-stocks-report-stocks-report-module.js.map