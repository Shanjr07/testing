(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-report-lr-report-lr-report-module~src-app-report-party-report-party-report-module~sr~22c075ec"],{

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

/***/ "./src/app/report/lr-report/automated-search/automated-search.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/report/lr-report/automated-search/automated-search.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2xyLXJlcG9ydC9hdXRvbWF0ZWQtc2VhcmNoL2F1dG9tYXRlZC1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvbHItcmVwb3J0L2F1dG9tYXRlZC1zZWFyY2gvYXV0b21hdGVkLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/report/lr-report/automated-search/automated-search.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/report/lr-report/automated-search/automated-search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Automated Search</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"date\">Date</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"user\">User</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"date\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"dates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#dates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"dates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewUser\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"userName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>User Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select User Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Abc</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Mnop</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Pqrs</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n<!-- \t\t\t\t\t\tPadding and m-r-5 is added for the UI view Starts -->\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;padding:5px!important;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-5\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-5\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-secondary\" id=\"enableRePrintBtn\">Enable Re-Print</button>\n\t\t\t\t\t\t</div>\n<!-- \t\t\t\t\t\tPadding and m-r-5 is added for the UI view Ends -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAutomatedSearch\" [dtTrigger]=\"dtTriggerAutomatedSearch\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Entry Time</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t<th>User Name</th>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let automatedSearchData of automatedSearchDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ automatedSearchData.lrNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ automatedSearchData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ automatedSearchData.entryTime }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ automatedSearchData.consignor }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ automatedSearchData.consignee }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ automatedSearchData.userName }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/lr-report/automated-search/automated-search.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/report/lr-report/automated-search/automated-search.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AutomatedSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomatedSearchComponent", function() { return AutomatedSearchComponent; });
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


var AutomatedSearchComponent = /** @class */ (function () {
    function AutomatedSearchComponent(automatedSearchRpt) {
        this.automatedSearchRpt = automatedSearchRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.viewUser = false;
        this.dtTriggerAutomatedSearch = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AutomatedSearchComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    AutomatedSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsAutomatedSearch = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'LR No',
                    data: 'lrNo'
                },
                {
                    title: 'Destination',
                    data: 'destination'
                },
                {
                    title: 'Entry Time',
                    data: 'entryTime'
                },
                {
                    title: 'Consignor',
                    data: 'consignor'
                },
                {
                    title: 'Consignee',
                    data: 'consignee'
                },
                {
                    title: 'User Name',
                    data: 'userName'
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
                    text: '<i class="fas fa-print"> LR Print</i>',
                    titleAttr: 'LR Print',
                },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print  Report</i>',
                    titleAttr: 'Print Report',
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
        this.getDataFrmServiceFrAutomatedSearchTable = this.automatedSearchRpt.getSummaryData();
        this.onDestroyUnsubscribtionAutomatedSearch = this.getDataFrmServiceFrAutomatedSearchTable.subscribe(function (data) {
            _this.automatedSearchDataList = data['data'];
            _this.dtTriggerAutomatedSearch.next();
        });
        //the below code is for the getting data through json ends
    };
    AutomatedSearchComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerAutomatedSearch.unsubscribe();
        this.onDestroyUnsubscribtionAutomatedSearch.unsubscribe();
    };
    AutomatedSearchComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'date') {
            this.viewUser = false;
        }
        else if (searchBy === 'user') {
            this.viewUser = true;
        }
        else {
            this.viewUser = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    AutomatedSearchComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AutomatedSearchComponent.prototype, "dtElements", void 0);
    AutomatedSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-automated-search',
            template: __webpack_require__(/*! ./automated-search.component.html */ "./src/app/report/lr-report/automated-search/automated-search.component.html"),
            styles: [__webpack_require__(/*! ./automated-search.component.css */ "./src/app/report/lr-report/automated-search/automated-search.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], AutomatedSearchComponent);
    return AutomatedSearchComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/challan-issue/challan-issue.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/report/lr-report/challan-issue/challan-issue.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9sci1yZXBvcnQvY2hhbGxhbi1pc3N1ZS9jaGFsbGFuLWlzc3VlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/report/lr-report/challan-issue/challan-issue.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/report/lr-report/challan-issue/challan-issue.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Challan Issue Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"agentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" [formControl]=\"controlMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteAgent\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteAgent=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(agentNameOptions | filter: controlMain.value) as resultAgentName\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultAgentName.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Challan Issue Report</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsChallanIssueReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerChallanIssueReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Issue Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Challan From</th>\n\t\t\t\t\t\t\t\t\t\t<th>Challan To</th>\n\t\t\t\t\t\t\t\t\t\t<th>No Of Challans</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let challanIssueReportData of ChallanIssueReportReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ challanIssueReportData.issueDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ challanIssueReportData.challanFrom}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ challanIssueReportData.challanTo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ challanIssueReportData.noOfChallans }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/lr-report/challan-issue/challan-issue.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/report/lr-report/challan-issue/challan-issue.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChallanIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallanIssueComponent", function() { return ChallanIssueComponent; });
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

//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter starts

//for datepicker ends
var my = new Date();
//for datepicker ends
var ChallanIssueComponent = /** @class */ (function () {
    function ChallanIssueComponent(challanIssueReport) {
        this.challanIssueReport = challanIssueReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.controlMain = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.agentNameOptions = [
            { id: 1, label: 'ALL' },
            { id: 2, label: 'ANDHERI' },
            { id: 3, label: 'BHIWANDI' },
            { id: 4, label: 'DAMAN' }
        ];
        this.dtTriggerChallanIssueReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ChallanIssueComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ChallanIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsChallanIssueReport = {
            //};
            //columns is used to for export and others starts
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
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.getDataFrmServiceFrTable = this.challanIssueReport.getSupplierMasterData();
        this.onDestroyUnsubscribtionChallanIssueReport = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.challanIssueReportDataList = data['data'];
            _this.dtTriggerChallanIssueReport.next();
        });
    };
    ChallanIssueComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerChallanIssueReport.unsubscribe();
        this.onDestroyUnsubscribtionChallanIssueReport.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    ChallanIssueComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ChallanIssueComponent.prototype, "dtElements", void 0);
    ChallanIssueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-challan-issue',
            template: __webpack_require__(/*! ./challan-issue.component.html */ "./src/app/report/lr-report/challan-issue/challan-issue.component.html"),
            styles: [__webpack_require__(/*! ./challan-issue.component.css */ "./src/app/report/lr-report/challan-issue/challan-issue.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], ChallanIssueComponent);
    return ChallanIssueComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/delayed-e-sugam/delayed-e-sugam.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/report/lr-report/delayed-e-sugam/delayed-e-sugam.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9sci1yZXBvcnQvZGVsYXllZC1lLXN1Z2FtL2RlbGF5ZWQtZS1zdWdhbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/lr-report/delayed-e-sugam/delayed-e-sugam.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/report/lr-report/delayed-e-sugam/delayed-e-sugam.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Delayed E-Sugam</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">ALL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"nagpur\">Nagpur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consigneeName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Consignee Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"aaIndustries\">AA Industries</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ayTradeLinks\">AY Trade Links</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"asMarketing\">AS Marketing</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"diffDays\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Diff Days</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDelayedESugam\" [dtTrigger]=\"dtTriggerDelayedESugam\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Area</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Diff Days</th>\n\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let delayedESugamData of delayedESugamDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ delayedESugamData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ delayedESugamData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ delayedESugamData.area }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ delayedESugamData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ delayedESugamData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ delayedESugamData.diffDays }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ delayedESugamData.status }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/lr-report/delayed-e-sugam/delayed-e-sugam.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/report/lr-report/delayed-e-sugam/delayed-e-sugam.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DelayedESugamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayedESugamComponent", function() { return DelayedESugamComponent; });
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

//from the particular global folder ends


var DelayedESugamComponent = /** @class */ (function () {
    function DelayedESugamComponent(delayedESugam) {
        this.delayedESugam = delayedESugam;
        this.loadingIndicator = true;
        this.dtTriggerDelayedESugam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DelayedESugamComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    DelayedESugamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsDelayedESugam = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'LR Number',
                    data: 'lrNumber'
                },
                {
                    title: 'Consignee Name',
                    data: 'consigneeName'
                },
                {
                    title: 'Area',
                    data: 'area'
                }, {
                    title: 'Actual Weight',
                    data: 'actualWeight'
                },
                {
                    title: 'Charged Weight',
                    data: 'chargedWeight'
                },
                {
                    title: 'Diff Days',
                    data: 'diffDays'
                },
                {
                    title: 'Status',
                    data: 'status'
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
        //                this.dtTriggerDelayedESugam.next();
        //                } );
        this.getDataFrmServiceFrDelayedESugamTable = this.delayedESugam.getSummaryData();
        this.onDestroyUnsubscribtionDelayedESugam = this.getDataFrmServiceFrDelayedESugamTable.subscribe(function (data) {
            _this.delayedESugamDataList = data['data'];
            _this.dtTriggerDelayedESugam.next();
        });
        //the below code is for the getting data through json ends
    };
    DelayedESugamComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDelayedESugam.unsubscribe();
        this.onDestroyUnsubscribtionDelayedESugam.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DelayedESugamComponent.prototype, "dtElements", void 0);
    DelayedESugamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delayed-e-sugam',
            template: __webpack_require__(/*! ./delayed-e-sugam.component.html */ "./src/app/report/lr-report/delayed-e-sugam/delayed-e-sugam.component.html"),
            styles: [__webpack_require__(/*! ./delayed-e-sugam.component.css */ "./src/app/report/lr-report/delayed-e-sugam/delayed-e-sugam.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], DelayedESugamComponent);
    return DelayedESugamComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/gc-not-received-report/gc-not-received-report.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/report/lr-report/gc-not-received-report/gc-not-received-report.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\t top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n}\r\n.pointer {cursor: pointer;}\r\n@media print {\r\n\tbody, html * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#showGcNotRecRpt, #showGcNotRecRpt * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#viewCustomPrintV1 {\r\n\t\tposition: static;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t\tmargin-top: -530px!important;\r\n\t}\r\n}\r\n::ng-deep .mat-horizontal-stepper-header {\r\n\tpointer-events: none !important;\r\n}\r\n::ng-deep .mat-progress-bar-fill::after {\r\n    background-color: green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2xyLXJlcG9ydC9nYy1ub3QtcmVjZWl2ZWQtcmVwb3J0L2djLW5vdC1yZWNlaXZlZC1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7SUFDUCxVQUFVO0NBQ2Isa0JBQWtCO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0QjtBQUNELFVBQVUsZ0JBQWdCLENBQUM7QUFFM0I7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLE9BQU87RUFDUCw2QkFBNkI7RUFDN0I7Q0FDRDtBQUVEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvbHItcmVwb3J0L2djLW5vdC1yZWNlaXZlZC1yZXBvcnQvZ2Mtbm90LXJlY2VpdmVkLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xyXG5cdCB0b3A6MjZweDtcclxuICAgIGxlZnQ6MjVweDtcclxuXHRtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnBvaW50ZXIge2N1cnNvcjogcG9pbnRlcjt9XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG5cdGJvZHksIGh0bWwgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cdCNzaG93R2NOb3RSZWNScHQsICNzaG93R2NOb3RSZWNScHQgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cdCN2aWV3Q3VzdG9tUHJpbnRWMSB7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRvcDogMDtcclxuXHRcdG1hcmdpbi10b3A6IC01MzBweCFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/report/lr-report/gc-not-received-report/gc-not-received-report.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/report/lr-report/gc-not-received-report/gc-not-received-report.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\" id=\"showGcNotRecRpt\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">GC Not Received Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Godown</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Godown\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #destinationStation id=\"destinationStationId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestinationStation($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestinationStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestinationStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestinationStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestinationStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationStationTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Till Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" id=\"tillDates\" name=\"tillDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #tillDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"tillDatesModal\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"tillDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" (click)=\"validateGCNotRecSearchBtn()\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" (click)=\"clearBtn()\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForActionForPopup\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button type=\"submit\" class=\"dt-button\" style=\"margin-left: 74%;\"\n\t\t\t\t\t\t\t\t(click)=\"customPrintGCNotRec()\" id=\"printAllBtn\">\n\t\t\t\t\t\t\t\t<span><i class=\"fas fa-print\">Print</i></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<table datatable id=\"gcNotReceivedReportTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsGcNotReceivedReport\" [dtTrigger]=\"dtTriggerGcNotReceivedReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Memo No</th>\n\t\t\t\t\t\t\t\t\t\t<th>No.of.Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Memo Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Memo Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hamali DD</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let gcNotReceivedReportData of gcNotReceivedReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ gcNotReceivedReportData.memoDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ gcNotReceivedReportData.memoNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ gcNotReceivedReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ gcNotReceivedReportData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ gcNotReceivedReportData.consignee }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ gcNotReceivedReportData.cashMemoName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ gcNotReceivedReportData.amount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ gcNotReceivedReportData.hamaliDD }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ gcNotReceivedReportData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"viewCustomPrintV1\" onafterprint=\"afterPrint()\" id=\"viewCustomPrintV1\">\n\t\t<app-custom-dynamic-printV1></app-custom-dynamic-printV1>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/lr-report/gc-not-received-report/gc-not-received-report.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/report/lr-report/gc-not-received-report/gc-not-received-report.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: GcNotReceivedReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcNotReceivedReportComponent", function() { return GcNotReceivedReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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










var GcNotReceivedReportComponent = /** @class */ (function () {
    //
    function GcNotReceivedReportComponent(gcNotReceivedRpt, masterReadService, router, datePipe, memoReport, modalService) {
        var _this = this;
        this.gcNotReceivedRpt = gcNotReceivedRpt;
        this.masterReadService = masterReadService;
        this.router = router;
        this.datePipe = datePipe;
        this.memoReport = memoReport;
        this.modalService = modalService;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.loadingIndicator = true;
        this.dtTriggerGcNotReceivedReport = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.isLoggedIn = true;
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.validateDestination = null;
        this.validateTillDate = null;
        this.showSpinnerForAction = false;
        this.showSpinnerForActionForPopup = false;
        this.lrDtoForDestinationStationAllOption = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.destinationStationTA = [];
        this.focusDestinationStationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.searchDestinationStation = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationStationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.destinationStationTA
                : _this.destinationStationTA.filter(function (v) { return v.destination; }).slice(0, 200)); }));
            // : this.destinationStationTA.filter(v => v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 200))
        };
        this.formatterDestinationStation = function (x) { return x.destination; };
        this.memoData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
        this.tillDatesModal = null;
        this.memoDataForPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
        this.memoDataFromPartyWiseRptPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
        //for custom print
        this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
        this.cashMemoDtoForCustomPrintListColumnNames = [];
        this.cashMemoDtoForCustomPrintListColumnWidths = [];
        this.cashMemoDtoForCustomPrintData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
        this.cashMemoDtoForCustomPrintListColumnValues = [];
        this.viewCustomPrintV1 = false;
        this.cashMemoDtoForCustomPrintListHeadingNamesV1 = [];
        this.cashMemoDtoForCustomPrintListHeadingValuesV1 = [];
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
            this.getDestinationDataList();
            this.dataForPopup = JSON.parse(localStorage.getItem('gcNotRecReportPopUp'));
            localStorage.clear();
            if (this.dataForPopup != null) {
                this.memoDataFromPartyWiseRptPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
                this.memoDataFromPartyWiseRptPopup = this.dataForPopup;
                if (this.memoDataFromPartyWiseRptPopup != null) {
                    this.gcNotReceivedDetailsListPopup();
                }
            }
            this.dataForPopup = '';
        }
    }
    GcNotReceivedReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    GcNotReceivedReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsGcNotReceivedReport = {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return "G.C. Not Recieved From Billing - " +
                            "Godown : " + $("#destinationStationId").val() + " -  " +
                            "Till Date : " + moment__WEBPACK_IMPORTED_MODULE_8__($("#tillDates").val()).format('DD-MM-YYYY') + "";
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
                var totalArticle = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var memoAmt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var hamalidd = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                //$(api.column(1).footer()).html(data.length);
                $(api.column(2).footer()).html(totalArticle);
                $(api.column(6).footer()).html(memoAmt);
                $(api.column(7).footer()).html(hamalidd);
            },
        };
    };
    GcNotReceivedReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    GcNotReceivedReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerGcNotReceivedReport.unsubscribe();
        //this.onDestroyUnsubscribtionGcNotReceivedReport.unsubscribe();
    };
    GcNotReceivedReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerGcNotReceivedReport.next();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    GcNotReceivedReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    GcNotReceivedReportComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    GcNotReceivedReportComponent.prototype.clickListnerForDestinationStation = function (event) {
        this.modelDestinationStation = event.item;
        $("#destinationStationId").val(this.modelDestinationStation.destination);
        this.validateDestination = $("#destinationStationId").val();
        //console.log(this.validateDestination);
    };
    GcNotReceivedReportComponent.prototype.getDestinationData = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.mainstation = this.userDataDtoReturnSession.mainStation;
        this.lrDtoDestination.mode = 'All';
    };
    GcNotReceivedReportComponent.prototype.getDestinationDataList = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getDestinationData();
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            if (response.length == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                    title: "Warning",
                    text: "No Destination Details found !",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                _this.destinationStationOptions = [];
                _this.destinationStationTA = [];
                _this.showSpinnerForAction = false;
            }
            else {
                //console.log(response);
                _this.destinationStationOptions = response;
                _this.destinationStationTA = [];
                $("#destinationStationId").val('');
                _this.lrDtoForDestinationStationAllOption.destination = "All";
                _this.destinationStationTA.push(_this.lrDtoForDestinationStationAllOption);
                for (var i = 0; i < _this.destinationStationOptions.length; i++) {
                    _this.destinationStationTA.push(_this.destinationStationOptions[i]);
                }
                _this.showSpinnerForAction = false;
            }
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Error While Getting destination Details", "warning");
            },
            function () { return console.log('done'); };
    };
    ;
    GcNotReceivedReportComponent.prototype.clearBtn = function () {
        this.modelDestinationStation = null;
        this.tillDatesModal = null;
        $("#tillDates").val('');
        this.validateTillDate = null;
        this.validateDestination = null;
        $("#gcNotReceivedReportTableId").DataTable().destroy();
        this.gcNotReceivedReportDataList = [];
        this.dtTriggerGcNotReceivedReport.next();
        this.memoDataForPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
        this.memoDataFromPartyWiseRptPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
        this.dataForPopup = '';
        this.showSpinnerForActionForPopup = true;
    };
    GcNotReceivedReportComponent.prototype.validateGCNotRecSearchBtn = function () {
        this.validateDestination = $("#destinationStationId").val();
        this.validateTillDate = $("#tillDates").val();
        if ((this.validateDestination == null) || (this.validateDestination == undefined) ||
            (this.validateDestination == "") || (this.validateTillDate == null) ||
            (this.validateTillDate == undefined) || (this.validateTillDate == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Fields", "Please select the mandatory field", "warning");
            return false;
        }
        else {
            this.gcNotReceivedDetailsList();
        }
    };
    GcNotReceivedReportComponent.prototype.gcNotReceivedData = function () {
        this.memoData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
        this.validateDestination = $("#destinationStationId").val();
        this.validateTillDate = $("#tillDates").val();
        if (this.validateDestination != null && this.validateDestination == "All") {
            this.memoData.mode = "All";
        }
        else {
            this.memoData.mode = "Specific";
        }
        this.memoData.mainStation = this.userDataDtoReturnSession.mainStation;
        this.memoData.godown = this.validateDestination;
        this.memoData.tillDate = this.validateTillDate;
    };
    GcNotReceivedReportComponent.prototype.gcNotReceivedDetailsList = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.gcNotReceivedData();
        this.memoReport.getGCNotRecievedDetails(this.memoData).subscribe(function (response) {
            $("#gcNotReceivedReportTableId").DataTable().destroy();
            _this.gcNotReceivedReportDataList = [];
            if (response.length > 0) {
                //console.log(response);
                _this.gcNotReceivedReportDataList = response;
                _this.showSpinnerForAction = false;
            }
            else {
                _this.gcNotReceivedReportDataList = [];
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("No Records", "No Records found for this search", "info");
            }
            _this.dtTriggerGcNotReceivedReport.next();
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While getting the GC Not Received details", "info");
        }, function () { return console.log('done'); };
    };
    GcNotReceivedReportComponent.prototype.gcNotReceivedDataPopup = function () {
        this.memoDataForPopup = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
        this.memoDataForPopup.mode = this.memoDataFromPartyWiseRptPopup.mode;
        this.memoDataForPopup.mainStation = this.userDataDtoReturnSession.mainStation;
        this.memoDataForPopup.tillDate = this.memoDataFromPartyWiseRptPopup.tillDate;
        // console.log(this.showSpinnerForActionForPopup);
        console.log(this.memoDataForPopup);
    };
    GcNotReceivedReportComponent.prototype.gcNotReceivedDetailsListPopup = function () {
        var _this = this;
        this.showSpinnerForActionForPopup = true;
        this.gcNotReceivedDataPopup();
        // this.showSpinnerForActionForPopup = true;
        this.memoReport.getGCNotRecievedDetails(this.memoDataForPopup).subscribe(function (response) {
            //	  this.showSpinnerForActionForPopup = true;
            $("#gcNotReceivedReportTableId").DataTable().destroy();
            _this.gcNotReceivedReportDataList = [];
            // this.showSpinnerForActionForPopup = true;
            _this.validateTillDate = _this.memoDataForPopup.tillDate;
            $("#tillDates").val(_this.validateTillDate);
            if (response.length > 0) {
                _this.gcNotReceivedReportDataList = response;
                _this.showSpinnerForActionForPopup = false;
            }
            else {
                _this.gcNotReceivedReportDataList = [];
                _this.showSpinnerForActionForPopup = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("No Records", "No Records found for this search", "info");
            }
            console.log(_this.showSpinnerForActionForPopup);
            _this.dtTriggerGcNotReceivedReport.next();
        }), function (error) {
            console.log(_this.showSpinnerForActionForPopup);
            _this.showSpinnerForActionForPopup = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While getting the GC Not Received details", "info");
        }, function () { return console.log('done'); };
    };
    GcNotReceivedReportComponent.prototype.customPrintGCNotRec = function () {
        var _this = this;
        if (this.gcNotReceivedReportDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                title: "No records found to print",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            localStorage.clear();
            this.cashMemoDtoForCustomPrintList = [];
            this.cashMemoDtoForCustomPrintListColumnNames = ["Memo Number", "LR Number", "Memo Date", "Art", "Consignee Name", "Memo Name", "Memo Amount", "Remarks"];
            this.cashMemoDtoForCustomPrintListColumnWidths = [15, 10, 10, 5, 20, 20, 10, 10];
            for (var i = 0; i < this.cashMemoDtoForCustomPrintListColumnNames.length; i++) {
                this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrint.columnName = this.cashMemoDtoForCustomPrintListColumnNames[i];
                this.cashMemoDtoForCustomPrint.columnWidth = this.cashMemoDtoForCustomPrintListColumnWidths[i];
                this.cashMemoDtoForCustomPrintList.push(this.cashMemoDtoForCustomPrint);
            }
            this.cashMemoDtoForCustomPrintDataList = [];
            this.cashMemoDtoForCustomPrintDataSummaryList = [];
            this.summary1 = this.summary2 = 0;
            for (var i = 0; i < this.gcNotReceivedReportDataList.length; i++) {
                this.cashMemoDtoForCustomPrintData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrintListColumnValues = [this.gcNotReceivedReportDataList[i].memoNumber, this.gcNotReceivedReportDataList[i].lrNumber, this.gcNotReceivedReportDataList[i].memoDateStr, this.gcNotReceivedReportDataList[i].totalArticles, this.gcNotReceivedReportDataList[i].consignee, this.gcNotReceivedReportDataList[i].cashMemoName, this.gcNotReceivedReportDataList[i].amount, this.gcNotReceivedReportDataList[i].remarks];
                this.cashMemoDtoForCustomPrintData.cashMemoDtoForCustomPrintListColumnValues = this.cashMemoDtoForCustomPrintListColumnValues;
                this.cashMemoDtoForCustomPrintDataList.push(this.cashMemoDtoForCustomPrintData);
                this.summary1 = this.summary1 + this.gcNotReceivedReportDataList[i].totalArticles;
                this.summary2 = this.summary2 + this.gcNotReceivedReportDataList[i].amount;
                this.cashMemoDtoForCustomPrintDataSummaryList = ["Total : " + this.gcNotReceivedReportDataList.length, "", "", this.summary1, "", "", this.summary2, ""];
            }
            //heading logics For Date
            this.fromDatePrint = this.datePipe.transform(this.memoData.tillDate, "dd-MM-yyyy");
            this.cashMemoDtoForCustomPrintListHeadingV1 = [];
            this.cashMemoDtoForCustomPrintListHeadingNamesV1 = ["As On"];
            this.cashMemoDtoForCustomPrintListHeadingValuesV1 = [this.fromDatePrint];
            for (var i = 0; i < this.cashMemoDtoForCustomPrintListHeadingNamesV1.length; i++) {
                this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_13__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrint.printHeadingName = this.cashMemoDtoForCustomPrintListHeadingNamesV1[i];
                this.cashMemoDtoForCustomPrint.printHeadingValue = this.cashMemoDtoForCustomPrintListHeadingValuesV1[i];
                this.cashMemoDtoForCustomPrintListHeadingV1.push(this.cashMemoDtoForCustomPrint);
            }
            localStorage.setItem('printCashMemoDtoForCustomPrintList', JSON.stringify(this.cashMemoDtoForCustomPrintList));
            localStorage.setItem('printCashMemoDtoForCustomPrintDataList', JSON.stringify(this.cashMemoDtoForCustomPrintDataList));
            localStorage.setItem('printcashMemoDtoForCustomPrintDataSummaryList', JSON.stringify(this.cashMemoDtoForCustomPrintDataSummaryList));
            localStorage.setItem('printcashMemoDtoForCustomPrintListHeadingV1', JSON.stringify(this.cashMemoDtoForCustomPrintListHeadingV1));
            //localStorage.setItem('printcashMemoDtoForCustomPrintListHeadingV2', JSON.stringify(this.cashMemoDtoForCustomPrintListHeadingV2));
            localStorage.setItem('printTitle', "G.C. Not Recieved From Billing");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], GcNotReceivedReportComponent.prototype, "dtElements", void 0);
    GcNotReceivedReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gc-not-received-report',
            template: __webpack_require__(/*! ./gc-not-received-report.component.html */ "./src/app/report/lr-report/gc-not-received-report/gc-not-received-report.component.html"),
            styles: [__webpack_require__(/*! ./gc-not-received-report.component.css */ "./src/app/report/lr-report/gc-not-received-report/gc-not-received-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_12__["MasterReadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_11__["MemoReport"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], GcNotReceivedReportComponent);
    return GcNotReceivedReportComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/issue-balance/issue-balance.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/report/lr-report/issue-balance/issue-balance.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9sci1yZXBvcnQvaXNzdWUtYmFsYW5jZS9pc3N1ZS1iYWxhbmNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/report/lr-report/issue-balance/issue-balance.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/report/lr-report/issue-balance/issue-balance.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Lr Issue Balance Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"agentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" [formControl]=\"controlMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteAgent\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteAgent=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(agentNameOptions | filter: controlMain.value) as resultAgentName\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultAgentName.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Lr Issue Balance Report</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsIssueBalanceReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerIssueBalanceReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Agent Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total LR Issued</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total LR Entered</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remaining LRs</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let issueBalanceData of IssueBalanceReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ issueBalanceData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ issueBalanceData.totalLrIssued }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ issueBalanceData.totalLrEntered }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ issueBalanceData.remainingLrs }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/lr-report/issue-balance/issue-balance.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/report/lr-report/issue-balance/issue-balance.component.ts ***!
  \***************************************************************************/
/*! exports provided: IssueBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueBalanceComponent", function() { return IssueBalanceComponent; });
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

//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter starts

//for the select option with filter ends
var IssueBalanceComponent = /** @class */ (function () {
    function IssueBalanceComponent(issueBalanceReport) {
        this.issueBalanceReport = issueBalanceReport;
        this.loadingIndicator = true;
        this.controlMain = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.agentNameOptions = [
            { id: 1, label: 'ALL' },
            { id: 2, label: 'ANDHERI' },
            { id: 3, label: 'BHIWANDI' },
            { id: 4, label: 'DAMAN' }
        ];
        this.dtTriggerIssueBalanceReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    IssueBalanceComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    IssueBalanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsIssueBalanceReport = {
            //};
            //columns is used to for export and others starts
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
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.getDataFrmServiceFrTable = this.issueBalanceReport.getSupplierMasterData();
        this.onDestroyUnsubscribtionIssueBalanceReport = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.issueBalanceReportDataList = data['data'];
            _this.dtTriggerIssueBalanceReport.next();
        });
    };
    IssueBalanceComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerIssueBalanceReport.unsubscribe();
        this.onDestroyUnsubscribtionIssueBalanceReport.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], IssueBalanceComponent.prototype, "dtElements", void 0);
    IssueBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issue-balance',
            template: __webpack_require__(/*! ./issue-balance.component.html */ "./src/app/report/lr-report/issue-balance/issue-balance.component.html"),
            styles: [__webpack_require__(/*! ./issue-balance.component.css */ "./src/app/report/lr-report/issue-balance/issue-balance.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], IssueBalanceComponent);
    return IssueBalanceComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/lorry-hire-balance-rpt-print/lorry-hire-balance-rpt-print.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/report/lr-report/lorry-hire-balance-rpt-print/lorry-hire-balance-rpt-print.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txt_ac {\n\ttext-align: center;\n}\n\n.dsply-ib {\n\tdisplay: inline-block;\n}\n\nh6, h5, h4, h3, h2, h1, p, .custome {\n\tfont-size: 13.3px;\n\tmargin: 1px;\n\tpadding: 1px;\n\tpadding-top: 3px;\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n\n.fontS_15 {\n\tfont-size: 16px;\n\tmargin: 0px;\n}\n\n.fontS_13 {\n\tfont-size: 14px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.fontS_12 {\n\tfont-size: 13px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.font_bold{\nfont-weight:900;\n}\n\n.border {\n\tborder: 1px solid #000 !important;\n\tborder-collapse: collapse;\n\tpadding: 0px;\n}\n\n.dsplyNone {\n\tdisplay: none;\n}\n\n.border_right {\n\tborder-right: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n.border_left {\n\tborder-left: 1px solid #000;\n\tborder-collapse: collapse;\n\tmargin-left: -1px;\n}\n\n.border_bottom {\n\tborder-bottom: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n.border_top {\n\tborder-top: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n@media print {\n\tbody * {\n\t\tvisibility: hidden;\n\t}\n\t#sidebarnav {\n\t\tvisibility: hidden;\n\t}\n\t#section_to_print, #section_to_print * {\n\t\tvisibility: visible;\n\t}\n\t\n\t .modal-basic-title{\n visibility: hidden;\n }\n #closePopupBtn{\n visibility: hidden;\n }\n}\n\n#left, #right, div:empty {\n\tmin-height: 19px;\n}\n\n#left, div:empty {\n\tmin-height: 22px;\n}\n\n/* #left, #right, div!:empty { */\n\n/* \tmargin-top: -15px; */\n\n/* } */\n\n.sidebar-nav ul .sidebar-item {\n\tdisplay: none;\n}\n\n/* print changes */\n\n.container {\n\tmax-width: 97%;\n}\n\n@media ( min-width : 768px) {\n\t#main-wrapper[data-layout=\"horizontal\"] .sidebar-nav #sidebarnav {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tdisplay: none;\n\t}\n}\n\n@media ( min-width : 768px) {\n\t.col-md-3, .col-md-9 {\n\t\tpadding-left: 7px !important;\n\t}\n}\n\nhr {\n\tborder: .5px solid black;\n\twidth: 100%;\n\tmargin-left: 7px !important;\n\tmargin: 0px;\n}\n\n@media print {\n\tbody * {\n\t\tvisibility: hidden;\n\t}\n\t#sidebarnav {\n\t\tvisibility: hidden;\n\t}\n\t#firstPrint, #firstPrint * {\n\t\tvisibility: visible;\n\t}\n/* \t.page-break { display:block; page-break-before:always; }  */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2xyLXJlcG9ydC9sb3JyeS1oaXJlLWJhbGFuY2UtcnB0LXByaW50L2xvcnJ5LWhpcmUtYmFsYW5jZS1ycHQtcHJpbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQiwwQ0FBMEM7Q0FDMUM7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1o7O0FBR0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7Q0FDWjs7QUFDRDtBQUNBLGdCQUFnQjtDQUNmOztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2I7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FDbEI7O0FBRUQ7Q0FDQyw4QkFBOEI7Q0FDOUIsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsMkJBQTJCO0NBQzNCLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG9CQUFvQjtFQUNwQjs7RUFFQTtDQUNELG1CQUFtQjtFQUNsQjtDQUNEO0NBQ0EsbUJBQW1CO0VBQ2xCO0NBQ0Q7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBRUQsaUNBQWlDOztBQUNqQyx5QkFBeUI7O0FBQ3pCLE9BQU87O0FBSVA7Q0FDQyxjQUFjO0NBQ2Q7O0FBQ0QsbUJBQW1COztBQUNuQjtDQUNDLGVBQWU7Q0FDZjs7QUFFRDtDQUNDO0VBQ0MsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2Q7Q0FDRDs7QUFFRDtDQUNDO0VBQ0MsNkJBQTZCO0VBQzdCO0NBQ0Q7O0FBRUQ7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLDRCQUE0QjtDQUM1QixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxvQkFBb0I7RUFDcEI7QUFDRixnRUFBZ0U7Q0FDL0QiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvbHItcmVwb3J0L2xvcnJ5LWhpcmUtYmFsYW5jZS1ycHQtcHJpbnQvbG9ycnktaGlyZS1iYWxhbmNlLXJwdC1wcmludC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR4dF9hYyB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRzcGx5LWliIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5oNiwgaDUsIGg0LCBoMywgaDIsIGgxLCBwLCAuY3VzdG9tZSB7XG5cdGZvbnQtc2l6ZTogMTMuM3B4O1xuXHRtYXJnaW46IDFweDtcblx0cGFkZGluZzogMXB4O1xuXHRwYWRkaW5nLXRvcDogM3B4O1xuXHRmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmZvbnRTXzE1IHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRtYXJnaW46IDBweDtcbn1cblxuLmZvbnRTXzEzIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4XG59XG5cblxuLmZvbnRTXzEyIHtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4XG59XG4uZm9udF9ib2xke1xuZm9udC13ZWlnaHQ6OTAwO1xufVxuLmJvcmRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0cGFkZGluZzogMHB4O1xufVxuXG4uZHNwbHlOb25lIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLmJvcmRlcl9yaWdodCB7XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5ib3JkZXJfbGVmdCB7XG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0bWFyZ2luLWxlZnQ6IC0xcHg7XG59XG5cbi5ib3JkZXJfYm90dG9tIHtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5ib3JkZXJfdG9wIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbkBtZWRpYSBwcmludCB7XG5cdGJvZHkgKiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCNzaWRlYmFybmF2IHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I3NlY3Rpb25fdG9fcHJpbnQsICNzZWN0aW9uX3RvX3ByaW50ICoge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdH1cblx0XG5cdCAubW9kYWwtYmFzaWMtdGl0bGV7XG4gdmlzaWJpbGl0eTogaGlkZGVuO1xuIH1cbiAjY2xvc2VQb3B1cEJ0bntcbiB2aXNpYmlsaXR5OiBoaWRkZW47XG4gfVxufVxuXG4jbGVmdCwgI3JpZ2h0LCBkaXY6ZW1wdHkge1xuXHRtaW4taGVpZ2h0OiAxOXB4O1xufVxuXG4jbGVmdCwgZGl2OmVtcHR5IHtcblx0bWluLWhlaWdodDogMjJweDtcbn1cblxuLyogI2xlZnQsICNyaWdodCwgZGl2ITplbXB0eSB7ICovXG4vKiBcdG1hcmdpbi10b3A6IC0xNXB4OyAqL1xuLyogfSAqL1xuXG5cblxuLnNpZGViYXItbmF2IHVsIC5zaWRlYmFyLWl0ZW0ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuLyogcHJpbnQgY2hhbmdlcyAqL1xuLmNvbnRhaW5lciB7XG5cdG1heC13aWR0aDogOTclO1xufVxuXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjhweCkge1xuXHQjbWFpbi13cmFwcGVyW2RhdGEtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXSAuc2lkZWJhci1uYXYgI3NpZGViYXJuYXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjhweCkge1xuXHQuY29sLW1kLTMsIC5jb2wtbWQtOSB7XG5cdFx0cGFkZGluZy1sZWZ0OiA3cHggIWltcG9ydGFudDtcblx0fVxufVxuXG5ociB7XG5cdGJvcmRlcjogLjVweCBzb2xpZCBibGFjaztcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi1sZWZ0OiA3cHggIWltcG9ydGFudDtcblx0bWFyZ2luOiAwcHg7XG59XG5cbkBtZWRpYSBwcmludCB7XG5cdGJvZHkgKiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCNzaWRlYmFybmF2IHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I2ZpcnN0UHJpbnQsICNmaXJzdFByaW50ICoge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdH1cbi8qIFx0LnBhZ2UtYnJlYWsgeyBkaXNwbGF5OmJsb2NrOyBwYWdlLWJyZWFrLWJlZm9yZTphbHdheXM7IH0gICovXG59Il19 */"

/***/ }),

/***/ "./src/app/report/lr-report/lorry-hire-balance-rpt-print/lorry-hire-balance-rpt-print.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/report/lr-report/lorry-hire-balance-rpt-print/lorry-hire-balance-rpt-print.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page row system_responsive\" id=\"firstPrint\">\n\t<div class=\"col-md-12\">\n\t\t<!--first row starts-->\n\t\t<div class=\"row\" style=\"padding-top: 5px;\" height='30px'>\n\t\t\t<div class=\"col-md-7\">\n\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t</div>\n\t\t\t<div class=\"col-md-5\">\n\t\t\t\t<h6>\n\t\t\t\t\t{{address}}<br>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--first row starts-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6 style='margin-left: 20px; font-size: 20px;' align='center'>\n\t\t\t\t\t<u><strong>Payment Voucher</strong></u>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-7\">\n\t\t\t\t<h6 style='margin-left: 20px; font-size: 16px; padding-top: 30px;'>\n\t\t\t\t\t<strong>Debit To : </strong> <strong>{{mainBookingStation}}\n\t\t\t\t\t\t- </strong><strong>{{toStation}}</strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-5\" align='right'>\n\t\t\t\t<h6 style='margin-right: 20px; font-size: 16px; padding-top: 30px;'>\n\t\t\t\t\t<strong>Date : </strong> <strong>{{todayDate}}</strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Second  row starts-->\n\t\t<div class=\"container border\">\n\t\t\t<div>\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1'\n\t\t\t\t\tstyle='table-layout: fixed;'>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<h6 style='font-size: 17px; border-bottom: 1px solid #000;'\n\t\t\t\t\t\t\t\talign='center'>\n\t\t\t\t\t\t\t\t<strong>PARTICULARS </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1'\n\t\t\t\t\t\tstyle='table-layout: fixed;' height='180px;'>\n\t\t\t\t\t\t<div class=\"row\"\n\t\t\t\t\t\t\tstyle='border-bottom: 1px solid #000; flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<h6 style='font-size: 17px;' align='center'>\n\t\t\t\t\t\t\t\t\t<strong>Amount Details</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<h6 style='font-size: 17px;' align='center'>\n\t\t\t\t\t\t\t\t\t<strong>Bank Details </strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 17px;' align='center'>\n\t\t\t\t\t\t\t\t\t<strong>Invoice/Lorry Details </strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\"\n\t\t\t\t\t\t\tstyle='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Invoice No </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>: {{invoiceNumber}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Bank Name </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>: {{bankName}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Lorry Hire Amount&nbsp;&nbsp;&nbsp;&nbsp;:</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'>\n\t\t\t\t\t\t\t\t\t\t{{lorryHireAmt}}</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\"\n\t\t\t\t\t\t\tstyle='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Invoice Date </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>: {{invoicedate}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Cheque No </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>: {{chqNo}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Less Advance\n\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='right'>{{lessAdvance}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\"\n\t\t\t\t\t\t\tstyle='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Hire Slip No </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>: {{hireslipNumber}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Cheque Date</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>: {{chqDate}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Less Late Arrival\n\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='right'>{{lessLateArrival}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\"\n\t\t\t\t\t\t\tstyle='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Supplier </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>: {{supplierName}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong> </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Less Unload Hamali :</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='right'>{{lessUnloadHamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\"\n\t\t\t\t\t\t\tstyle='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Lorry No </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>: {{lorryNo}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong> </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Less Munishiana &nbsp; &nbsp; &nbsp;:</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='right'>\n\t\t\t\t\t\t\t\t\t\t\t{{lessMunshi}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\"\n\t\t\t\t\t\t\tstyle='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Driver Name </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>: {{drivername}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong> </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\"\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-8\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>In Words : </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>{{printAmt}} </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;'\n\t\t\t\t\t\t\t\t\t\t\talign='right'>{{totalAmount}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</table>\n\n\n\n\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6 style='font-size: 15px; margin-left: 20px;'>\n\t\t\t\t\t<strong></strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6>\n\t\t\t\t\t<strong></strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6>\n\t\t\t\t\t<strong></strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<h6 style='font-size: 16px; padding-top: 22px;'>\n\t\t\t\t\t<strong>Approved By :</strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"col-md-6\" align='right'>\n\t\t\t\t<h6 style='font-size: 16px; padding-top: 22px;'>\n\t\t\t\t\t<strong> Receiver's Signature&nbsp;&nbsp;&nbsp;&nbsp;</strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/lr-report/lorry-hire-balance-rpt-print/lorry-hire-balance-rpt-print.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/report/lr-report/lorry-hire-balance-rpt-print/lorry-hire-balance-rpt-print.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LorryHireBalanceReportPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LorryHireBalanceReportPrintComponent", function() { return LorryHireBalanceReportPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LorryHireBalanceReportPrintComponent = /** @class */ (function () {
    function LorryHireBalanceReportPrintComponent(router, datePipe) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.isLoggedIn = true;
        this.hireslipdataForPrint = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_3__["HireSlipDto"]();
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
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
            this.dataForLorryHireBalanceRpt = JSON.parse(localStorage.getItem('lorryHireBalanceVoucherPrint'));
            console.log(this.dataForLorryHireBalanceRpt);
            if (this.dataForLorryHireBalanceRpt != null) {
                this.hireslipdataForPrint = this.dataForLorryHireBalanceRpt;
            }
            this.todayDate = this.datePipe.transform(new Date(), "dd-MM-yyyy");
            this.image = this.userDataDtoReturnSession.ip;
            this.validatBeforePrint();
            window.setTimeout(function () {
                window.print();
            }, 1000);
            window.onafterprint = function () {
                window.close();
            };
            localStorage.clear();
            window.addEventListener('afterprint', function (event) {
                _this.clearField();
            });
        }
    }
    LorryHireBalanceReportPrintComponent.prototype.ngOnInit = function () {
    };
    LorryHireBalanceReportPrintComponent.prototype.validatBeforePrint = function () {
        this.address = this.userDataDtoReturnSession.addressId == null ? ' ' : this.userDataDtoReturnSession.addressId;
        this.mainBookingStation = this.hireslipdataForPrint.mainBookingStation == null ? ' ' : this.hireslipdataForPrint.mainBookingStation;
        this.toStation = this.hireslipdataForPrint.toStation == null ? ' ' : this.hireslipdataForPrint.toStation;
        this.invoiceNumber = this.hireslipdataForPrint.hireslipnumber == null ? ' ' : this.hireslipdataForPrint.hireslipnumber;
        this.hireslipNumber = this.hireslipdataForPrint.hireslipnumber == null ? ' ' : this.hireslipdataForPrint.hireslipnumber;
        this.supplierName = this.hireslipdataForPrint.suppliername == null ? ' ' : this.hireslipdataForPrint.suppliername;
        this.drivername = this.hireslipdataForPrint.drivername == null ? ' ' : this.hireslipdataForPrint.drivername;
        this.lorryNo = this.hireslipdataForPrint.vehicleNumber == null ? ' ' : this.hireslipdataForPrint.vehicleNumber;
        if (this.hireslipdataForPrint.invoicedate != null) {
            this.invoicedate = this.datePipe.transform(this.hireslipdataForPrint.invoicedate, "dd-MM-yyyy");
        }
        else {
            this.invoicedate = '';
        }
        this.bankName = this.hireslipdataForPrint.bankname == null ? ' ' : this.hireslipdataForPrint.bankname;
        this.chqNo = this.hireslipdataForPrint.chequeno == null ? ' ' : this.hireslipdataForPrint.chequeno;
        if (this.hireslipdataForPrint.chequedate != null) {
            this.chqDate = this.datePipe.transform(this.hireslipdataForPrint.chequedate, "dd-MM-yyyy");
        }
        else {
            this.chqDate = '';
        }
        this.lorryHireAmt = this.hireslipdataForPrint.totalhire == null ? 0.0 : this.hireslipdataForPrint.totalhire;
        this.lessAdvance = this.hireslipdataForPrint.advance == null ? 0.0 : this.hireslipdataForPrint.advance;
        this.lessLateArrival = this.hireslipdataForPrint.lesslatearrival == null ? 0.0 : this.hireslipdataForPrint.lesslatearrival;
        this.lessUnloadHamali = this.hireslipdataForPrint.lessunloadhamali == null ? 0.0 : this.hireslipdataForPrint.lessunloadhamali;
        this.lessMunshi = this.hireslipdataForPrint.lessmunishiana == null ? 0.0 : this.hireslipdataForPrint.lessmunishiana;
        this.calculateTotalAmt();
        if (this.totalAmount == 0 || this.totalAmount == 0.0) {
            this.printAmt = "ZERO";
        }
        else {
            this.printAmt = this.inWords();
        }
        console.log(this.hireslipdataForPrint);
        console.log(this.mainBookingStation);
    };
    LorryHireBalanceReportPrintComponent.prototype.calculateTotalAmt = function () {
        this.totalAmount = +this.lorryHireAmt + -this.lessAdvance + -this.lessLateArrival + -this.lessUnloadHamali + -this.lessMunshi;
        console.log(this.totalAmount);
    };
    LorryHireBalanceReportPrintComponent.prototype.inWords = function () {
        var a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ',
            'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ',
            'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ',
            'Seventeen ', 'Eighteen ', 'Nineteen '];
        var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty',
            'Seventy', 'Eighty', 'Ninety'];
        this.num = this.totalAmount;
        //        console.log( this.num );
        if ((this.num = this.num.toString()).length > 9)
            return 'overflow';
        this.n = ('000000000' + this.num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!this.n)
            return;
        var str = '';
        str += (this.n[1] != 0) ? (a[Number(this.n[1])] || b[this.n[1][0]] + ' '
            + a[this.n[1][1]])
            + 'Crore ' : '';
        str += (this.n[2] != 0) ? (a[Number(this.n[2])] || b[this.n[2][0]] + ' '
            + a[this.n[2][1]])
            + 'Lakh ' : '';
        str += (this.n[3] != 0) ? (a[Number(this.n[3])] || b[this.n[3][0]] + ' '
            + a[this.n[3][1]])
            + 'Thousand ' : '';
        str += (this.n[4] != 0) ? (a[Number(this.n[4])] || b[this.n[4][0]] + ' '
            + a[this.n[4][1]])
            + 'Hundred ' : '';
        str += (this.n[5] != 0) ? ((str != '') ? 'and ' : '')
            + (a[Number(this.n[5])] || b[this.n[5][0]] + ' ' + a[this.n[5][1]])
            + '' : '';
        str += ' Only ';
        return str;
    };
    LorryHireBalanceReportPrintComponent.prototype.clearField = function () {
        this.address = '';
        this.dataForLorryHireBalanceRpt = '';
        this.mainBookingStation = '';
        this.toStation = '';
        this.invoiceNumber = '';
        this.hireslipNumber = '';
        this.supplierName = '';
        this.drivername = '';
        this.lorryNo = '';
        this.invoicedate = '';
        this.bankName = '';
        this.chqNo == '';
        this.chqDate = '';
        this.lorryHireAmt = 0.0;
        this.lessAdvance = 0.0;
        this.lessLateArrival = 0.0;
        this.lessUnloadHamali = 0.0;
        this.lessMunshi = 0.0;
        this.totalAmount = 0.0;
        this.printAmt = '';
    };
    LorryHireBalanceReportPrintComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    LorryHireBalanceReportPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lorry-hire-balance-rpt-print',
            template: __webpack_require__(/*! ./lorry-hire-balance-rpt-print.component.html */ "./src/app/report/lr-report/lorry-hire-balance-rpt-print/lorry-hire-balance-rpt-print.component.html"),
            styles: [__webpack_require__(/*! ./lorry-hire-balance-rpt-print.component.css */ "./src/app/report/lr-report/lorry-hire-balance-rpt-print/lorry-hire-balance-rpt-print.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], LorryHireBalanceReportPrintComponent);
    return LorryHireBalanceReportPrintComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/lorry-hire-balance/lorry-hire-balance.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/report/lr-report/lorry-hire-balance/lorry-hire-balance.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n  top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n}\r\n\r\n.btn1 {\r\n  background-color: DodgerBlue; /* Blue background */\r\n  border: none; /* Remove borders */\r\n  color: white; /* White text */\r\n  padding: 2px 4px; /* Some padding */\r\n  font-size: 13px; /* Set a font size */\r\n  cursor: pointer; /* Mouse pointer on hover */\r\n}\r\n\r\n/* Darker background on mouse-over */\r\n\r\n.btn1:hover {\r\n  background-color: RoyalBlue;\r\n}\r\n\r\n@media print {\r\n\tbody, html * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#showLorryHireBlnRpt, #showLorryHireBlnRpt * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#printVoucher {\r\n\t\tposition: absolute;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t}\r\n\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2xyLXJlcG9ydC9sb3JyeS1oaXJlLWJhbGFuY2UvbG9ycnktaGlyZS1iYWxhbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0lBQ1AsVUFBVTtDQUNiLGtCQUFrQjtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7O0FBRUQ7RUFDRSw2QkFBNkIsQ0FBQyxxQkFBcUI7RUFDbkQsYUFBYSxDQUFDLG9CQUFvQjtFQUNsQyxhQUFhLENBQUMsZ0JBQWdCO0VBQzlCLGlCQUFpQixDQUFDLGtCQUFrQjtFQUNwQyxnQkFBZ0IsQ0FBQyxxQkFBcUI7RUFDdEMsZ0JBQWdCLENBQUMsNEJBQTRCO0NBQzlDOztBQUVELHFDQUFxQzs7QUFDckM7RUFDRSw0QkFBNEI7Q0FDN0I7O0FBRUQ7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLE9BQU87RUFDUDs7Q0FFRCIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9sci1yZXBvcnQvbG9ycnktaGlyZS1iYWxhbmNlL2xvcnJ5LWhpcmUtYmFsYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93IHtcclxuICB0b3A6MjZweDtcclxuICAgIGxlZnQ6MjVweDtcclxuXHRtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5idG4xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBEb2RnZXJCbHVlOyAvKiBCbHVlIGJhY2tncm91bmQgKi9cclxuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBib3JkZXJzICovXHJcbiAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0ICovXHJcbiAgcGFkZGluZzogMnB4IDRweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgZm9udC1zaXplOiAxM3B4OyAvKiBTZXQgYSBmb250IHNpemUgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIE1vdXNlIHBvaW50ZXIgb24gaG92ZXIgKi9cclxufVxyXG5cclxuLyogRGFya2VyIGJhY2tncm91bmQgb24gbW91c2Utb3ZlciAqL1xyXG4uYnRuMTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogUm95YWxCbHVlO1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG5cdGJvZHksIGh0bWwgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cdCNzaG93TG9ycnlIaXJlQmxuUnB0LCAjc2hvd0xvcnJ5SGlyZUJsblJwdCAqIHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0I3ByaW50Vm91Y2hlciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdH1cclxuXHRcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/lr-report/lorry-hire-balance/lorry-hire-balance.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/report/lr-report/lorry-hire-balance/lorry-hire-balance.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\" id=\"showLorryHireBlnRpt\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Lorry Hire Balance Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"hireslipWise\">Search By\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHireslip</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"dateWise\">Search By Date</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"hireslipWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hireslip Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"hireslipNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"dateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Payment Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"paymentType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"paymentType\" #paymentType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByPaymentType(paymentType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"all\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"paid\">Paid</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"unpaid\">Unpaid</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"dateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" placeholder=\"yyyy-mm-dd\" name=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"dateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"dateWise\" class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #source id=\"source\" name=\"source\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Select Source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelForMainSrc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchMainSrcAt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterMainSrc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterMainSrc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusMainSrcTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDestination\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destination\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"searchMethod();\">Search</button>\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearMethod();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Lorry Hire Balance Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!showOthersLorryHireBalanceRpt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"lorryHireBalanceRptId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLorryHireBalance\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLorryHireBalance\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Hire No.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck No.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Supplier</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Driver</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>TotHire</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Advance</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Balance</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DepDat</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DepTime</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ArrDt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ArrTime</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>PaymentDt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let lorryHireBalanceData of lorryHireBalanceDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalanceData.hireslipnumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalanceData.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalanceData.supplierName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalanceData.drivername }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalanceData.totalhire }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalanceData.advance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalanceData.balance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalanceData.depatureDtStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalanceData.departureTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalanceData.arrivalDtStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalanceData.arrivalTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalanceData.paymentDtStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><button *ngIf=\"lorryHireBalanceData.hireSlipBalance == false\" class=\"btn1\" title=\"Confirm Payment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getConfirmPaymnent(confirmPaymentPopUpTemplate,lorryHireBalanceData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn1\" title=\"LorryHire Voucher\" (click)=\"getVoucherPrint(lorryHireBalanceData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-print\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!showPaidLorryHireBalanceRpt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"lorryHireBalancePaidRptId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLorryHireBalancePaid\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLorryHireBalancePaid\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Hire No.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck No.</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Supplier</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Driver</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>TotHire</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Advance</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Balance</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DepDat</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DepTime</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ArrDt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ArrTime</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>PaymentDt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let lorryHireBalancePaidData of lorryHireBalancePaidDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalancePaidData.hireslipnumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalancePaidData.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalancePaidData.supplierName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalancePaidData.drivername }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalancePaidData.totalhire }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalancePaidData.advance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalancePaidData.balance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalancePaidData.depatureDtStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalancePaidData.departureTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalancePaidData.arrivalDtStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalancePaidData.arrivalTime }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireBalancePaidData.invoiceDtStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><button class=\"btn1\" title=\"LorryHire Voucher\" (click)=\"getVoucherPrint(lorryHireBalancePaidData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-print\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!--POP UP START HERE-->\n\n\n\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\" id=\"popupDetailsConfirmPayment\">\n\t\t\t\t<ng-template #confirmPaymentPopUpTemplate let-ok=\"close\"\n\t\t\t\t\tlet-d=\"dismiss\">\n\n\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h5>Set Payment Date :</h5>\n\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"row\" style=\"\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<label>Payment Date : </label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\tid=\"paymentDate\" placeholder=\"yyyy-mm-dd\" name=\"paymentDate\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"enteredPaymentDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t#paymentDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-secondary calendar\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"paymentDate.toggle()\" type=\"button\"></button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t<button style=\"float: right;\" type=\"button\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\tid=\"confirmBtnId\"\n\t\t\t\t\t\t\t\t(click)=\"confirmBtnPopUp(confirmPaymentPopUpTemplate)\">Confirm\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t(click)=\"ok('Cancel click');closeBtnPopup();\">Close</button>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div  *ngIf=\"viewVoucher \" onafterprint=\"afterPrint()\"\n\t\tid=\"printVoucher\">\n\t\t<app-lorry-hire-balance-rpt-print></app-lorry-hire-balance-rpt-print>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/lr-report/lorry-hire-balance/lorry-hire-balance.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/report/lr-report/lorry-hire-balance/lorry-hire-balance.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LorryHireBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LorryHireBalanceComponent", function() { return LorryHireBalanceComponent; });
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
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
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

















var LorryHireBalanceComponent = /** @class */ (function () {
    function LorryHireBalanceComponent(router, masterReadService, datePipe, lrReportService, masterService, hireslipService, modalService) {
        var _this = this;
        this.router = router;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        this.lrReportService = lrReportService;
        this.masterService = masterService;
        this.hireslipService = hireslipService;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dateWise = false;
        this.hireslipWise = true;
        this.viewDestination = false;
        this.destView = false;
        //for datepicker ends
        //for datepicker ends
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
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
        this.dtTriggerLorryHireBalance = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerLorryHireBalancePaid = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showPaidLorryHireBalanceRpt = false;
        this.showOthersLorryHireBalanceRpt = true;
        this.showDest = 'LorryHireBalRpt DestView';
        this.showLorryHireBlnRpt = true;
        //// Main Src
        this.agentDtoForMainSrc = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_12__["AgentDetailsDto"]();
        this.agentDtoForMainSrcAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_12__["AgentDetailsDto"]();
        this.mainSrcTA = [];
        this.focusMainSrcTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchMainSrcAt = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusMainSrcTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.mainSrcTA
                : _this.mainSrcTA.filter(function (v) { return v.mainBookStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterMainSrc = function (x) { return x.mainBookStations; };
        this.hireslipDtoSearchHireslipWise = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoSearchDateWise = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.searchByNumber = false;
        this.hireslipDtoSelectedRow = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoConfirmPrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoUpdatePrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoUpdatePrintVoucherFrmPrintBtn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoPaymentPrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.setPrintForVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.isBalancePrint = false;
        this.viewVoucher = false;
        this.updateforVoucher = false;
        this.updateAfterPrintForPaymentBtn = false;
        this.searchMethodForHireslipNumberWsieDetails = function () {
            _this.showSpinnerForAction = true;
            _this.hireslipService.getLorryHireBalanceReport(_this.hireslipDtoSearchHireslipWise).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#lorryHireBalanceRptId").DataTable().destroy();
                _this.lorryHireBalanceDataList = [];
                $("#lorryHireBalancePaidRptId").DataTable().destroy();
                _this.lorryHireBalancePaidDataList = [];
                _this.dtTriggerLorryHireBalancePaid.next();
                _this.searchByNumber = false;
                if (response.length == 1) {
                    _this.searchByNumber = true;
                    _this.lorryHireBalanceDataList = response;
                }
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No report available for this datas !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    //    } else if((this.searchByNumber)  && (this.destView == false) &&( (this.lorryHireBalanceDataList[0].toStation != this.userDataDtoReturnSession.office)|| (this.lorryHireBalanceDataList[0].toStation != this.userDataDtoReturnSession.mainStation))){
                }
                else if ((_this.searchByNumber) && (_this.destView == false) && (_this.lorryHireBalanceDataList[0].toStation != _this.userDataDtoReturnSession.mainStation)) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Alert",
                        text: "Not allowed to view !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.lorryHireBalanceDataList = [];
                }
                else {
                    _this.lorryHireBalanceDataList = response;
                    console.log(_this.lorryHireBalanceDataList);
                }
                _this.dtTriggerLorryHireBalance.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the lorry hireslip balance  Hire slip number View", "info");
            }, function () { return console.log('done'); };
        };
        this.searchMethodForDateWiseDetails = function () {
            _this.showSpinnerForAction = true;
            _this.hireslipService.getLorryHireBalanceReport(_this.hireslipDtoSearchDateWise).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#lorryHireBalanceRptId").DataTable().destroy();
                _this.lorryHireBalanceDataList = [];
                $("#lorryHireBalancePaidRptId").DataTable().destroy();
                _this.lorryHireBalancePaidDataList = [];
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
                    _this.selectedPaymentType = $("#paymentType").val();
                    if (_this.selectedPaymentType == 'all' || _this.selectedPaymentType == 'unpaid') {
                        _this.lorryHireBalanceDataList = response;
                        console.log(_this.lorryHireBalanceDataList);
                    }
                    else {
                        _this.lorryHireBalancePaidDataList = response;
                        console.log(_this.lorryHireBalancePaidDataList);
                    }
                }
                _this.dtTriggerLorryHireBalance.next();
                _this.dtTriggerLorryHireBalancePaid.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the lorry hireslip balance date View", "info");
            }, function () { return console.log('done'); };
        };
        this.setConfirmPaymentDetails = function () {
            _this.hireslipService.updateHireBalance(_this.hireslipDtoConfirmPayment).subscribe(function (response) {
                if (response.status == 'not found') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (response.status == 'success') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Print Voucher",
                        text: "Do You Want to Print the HireSilpBalance Payment Voucher for : " + _this.selectedRowHireslipNumber,
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                        buttons: ["No", "Yes"],
                    }).then(function (print) {
                        if (print) {
                            _this.confirmPrintVoucher();
                        }
                        else {
                        }
                    });
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While updating the confirm Payment", "info");
            }, function () { return console.log('done'); };
        };
        this.setConfirmPrintVoucherDetails = function () {
            _this.hireslipService.getHireSlipDetailsForVoucher(_this.hireslipDtoConfirmPrintVoucher).subscribe(function (response) {
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
                    _this.getDetailsForPrint = response;
                    _this.setPrintForVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
                    _this.setPrintForVoucher = _this.getDetailsForPrint[0];
                    _this.setPringForVoucherDetails();
                    console.log(_this.getDetailsForPrint[0]);
                    _this.updateAfterPrintForPaymentBtn = true;
                    if (_this.updateAfterPrintForPaymentBtn == true) {
                        _this.updateHireslipDetailAfterPrint();
                    }
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While Getting the hireslip details for print voucher", "info");
            }, function () { return console.log('done'); };
        };
        this.setUpdateHireslipDetailAfterPrint = function () {
            _this.hireslipService.setHireSlipBalPrtVoucher(_this.hireslipDtoUpdatePrintVoucher).subscribe(function (response) {
                if (response.status == 'not found') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (response.status == 'success') {
                    _this.closeBtnPopup();
                    _this.searchMethod();
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While updating the hireslip details After print voucher", "info");
            }, function () { return console.log('done'); };
        };
        this.getInfoForPrintVoucherDetails = function () {
            _this.hireslipService.getHireSlipDetailsForVoucher(_this.hireslipDtoPaymentPrintVoucher).subscribe(function (response) {
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
                    _this.getDetailsForPrint = response;
                    _this.setPrintForVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
                    _this.setPrintForVoucher = _this.getDetailsForPrint[0];
                    _this.setPringForVoucherDetails();
                    console.log(_this.getDetailsForPrint[0]);
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While Getting the hireslip details for print voucher", "info");
            }, function () { return console.log('done'); };
        };
        this.setupdateHireslipDetailAfterPrintForPrintBtn = function () {
            _this.hireslipService.setHireSlipBalPrtVoucher(_this.hireslipDtoUpdatePrintVoucherFrmPrintBtn).subscribe(function (response) {
                if (response.status == 'not found') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (response.status == 'success') {
                }
            }), function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While updating the hireslip details After print voucher", "info");
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
            this.getMainSrcDetails();
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "LorryHireBalRpt DestView") {
                        this.destView = true;
                    }
                    /*if (this.showDest=='LorryHireBalRpt DestView') {
                  this.destView=true;
                  }*/
                }
            }
            if (this.destView == true) {
                this.getDestinationDetails();
            }
            else {
                this.viewDestination = false;
            }
        }
    }
    LorryHireBalanceComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    LorryHireBalanceComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    LorryHireBalanceComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsLorryHireBalance = {
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
                            .css('font-size', '16px');
                    },
                    footer: true,
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                    },
                    messageTop: function () {
                        var returnVal = null;
                        if ($("#searchBy").val() == 'hireslipWise') {
                            returnVal = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 30%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Hireslip Number &nbsp;&nbsp;</strong>" +
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
                                "<td rowspan='2'style='width:40%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:25px;'><u>Lorry Hire Balance Report</u></strong><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:25px;'><u>Lorry Hire Balance Report</u></strong><br>" +
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
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                    },
                    title: function () {
                        var returnSummaryExcel = null;
                        if ($("#searchBy").val() == 'hireslipWise') {
                            returnSummaryExcel = "Lorry Hire Balance Report" +
                                " Hireslip Number : " + $("#hireslipNumber").val();
                        }
                        else {
                            returnSummaryExcel = "Lorry Hire Balance Report" +
                                " From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY');
                        }
                        return returnSummaryExcel;
                    },
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
                var totHire = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totAdvance = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totBalance = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html();
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html(totHire);
                $(api.column(5).footer()).html(totAdvance);
                $(api.column(6).footer()).html(totBalance);
                $(api.column(7).footer()).html();
                $(api.column(8).footer()).html();
                $(api.column(9).footer()).html();
                $(api.column(10).footer()).html();
                $(api.column(11).footer()).html();
                $(api.column(12).footer()).html();
            }
        },
            this.dtOptionsLorryHireBalancePaid = {
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
                                .css('font-size', '16px');
                        },
                        footer: true,
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                        },
                        messageTop: function () {
                            var returnVal = null;
                            if ($("#searchBy").val() == 'hireslipWise') {
                                returnVal = "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 30%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Hireslip Number &nbsp;&nbsp;</strong>" +
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
                                    "<td rowspan='2'style='width:40%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:25px;'><u>Lorry Hire Balance Report</u></strong><br>" +
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
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:25px;'><u>Lorry Hire Balance Report</u></strong><br>" +
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
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                        },
                        title: function () {
                            var returnSummaryExcel = null;
                            if ($("#searchBy").val() == 'hireslipWise') {
                                returnSummaryExcel = "Lorry Hire Balance Report" +
                                    " Hireslip Number : " + $("#hireslipNumber").val();
                            }
                            else {
                                returnSummaryExcel = "Lorry Hire Balance Report" +
                                    " From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY');
                            }
                            return returnSummaryExcel;
                        },
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
                    var totHire = api.column(4).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var totAdvance = api.column(5).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var totBalance = api.column(6).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html();
                    $(api.column(2).footer()).html();
                    $(api.column(3).footer()).html();
                    $(api.column(4).footer()).html(totHire);
                    $(api.column(5).footer()).html(totAdvance);
                    $(api.column(6).footer()).html(totBalance);
                    $(api.column(7).footer()).html();
                    $(api.column(8).footer()).html();
                    $(api.column(9).footer()).html();
                    $(api.column(10).footer()).html();
                    $(api.column(11).footer()).html();
                    $(api.column(12).footer()).html();
                }
            };
    };
    LorryHireBalanceComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                if (dtInstance.table().node().id == "lorryHireBalanceRptId") {
                    console.log("a");
                    _this.lorryHireBalanceDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerLorryHireBalance.next();
                }
                else if (dtInstance.table().node().id == "lorryHireBalancePaidRptId") {
                    console.log("b");
                    _this.lorryHireBalancePaidDataList = [];
                    dtInstance.destroy();
                    _this.lorryHireBalancePaidDataList.next();
                }
            });
        });
    };
    LorryHireBalanceComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLorryHireBalance.unsubscribe();
        this.dtTriggerLorryHireBalancePaid.unsubscribe();
    };
    LorryHireBalanceComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerLorryHireBalance.next();
        this.dtTriggerLorryHireBalancePaid.next();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    LorryHireBalanceComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    LorryHireBalanceComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'hireslipWise') {
            this.dateWise = false;
            this.hireslipWise = true;
            $("#fromDate").val('');
            $("#toDate").val('');
            $("#paymentType").val('All');
            $("#hireslipNumber").val('');
            this.viewDestination = false;
            this.modelDestination = '';
            this.fromDateModel = null;
            this.toDateModel = null;
            this.clearTable();
        }
        else if (searchBy === 'dateWise') {
            this.dateWise = true;
            this.hireslipWise = false;
            $("#fromDate").val('');
            $("#toDate").val('');
            $("#paymentType").val('All');
            $("#hireslipNumber").val('');
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
            this.clearTable();
        }
        else {
            this.dateWise = false;
            this.hireslipWise = false;
            $("#fromDate").val('');
            $("#toDate").val('');
            $("#paymentType").val('All');
            $("#hireslipNumber").val('');
            this.viewDestination = false;
            this.modelDestination = '';
            this.fromDateModel = null;
            this.toDateModel = null;
            this.clearTable();
        }
    };
    LorryHireBalanceComponent.prototype.searchByPaymentType = function (paymentType) {
        if (paymentType === 'all') {
            this.showOthersLorryHireBalanceRpt = true;
            this.showPaidLorryHireBalanceRpt = false;
            this.clearTable();
        }
        else if (paymentType === 'paid') {
            this.showOthersLorryHireBalanceRpt = false;
            this.showPaidLorryHireBalanceRpt = true;
            this.clearTable();
        }
        else if (paymentType === 'unpaid') {
            this.showOthersLorryHireBalanceRpt = true;
            this.showPaidLorryHireBalanceRpt = false;
            this.clearTable();
        }
    };
    LorryHireBalanceComponent.prototype.clearTable = function () {
        $("#lorryHireBalanceRptId").DataTable().destroy();
        $("#lorryHireBalancePaidRptId").DataTable().destroy();
        this.lorryHireBalanceDataList = [];
        this.lorryHireBalancePaidDataList = [];
        this.dtTriggerLorryHireBalance.next();
        this.dtTriggerLorryHireBalancePaid.next();
    };
    LorryHireBalanceComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "desttrsp";
    };
    LorryHireBalanceComponent.prototype.getDestinationDetails = function () {
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
    LorryHireBalanceComponent.prototype.getMainSrcMethod = function () {
        this.agentDtoForMainSrc = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_12__["AgentDetailsDto"]();
        this.agentDtoForMainSrc.companyId = this.userDataDtoReturnSession.companyId;
    };
    LorryHireBalanceComponent.prototype.getMainSrcDetails = function () {
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
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the Stock At Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    LorryHireBalanceComponent.prototype.searchMethod = function () {
        this.selectedSearchBy = $("#searchBy").val();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedDestination = $("#destination").val();
        if (this.selectedSearchBy == 'hireslipWise') {
            this.enteredHireslipNumber = $("#hireslipNumber").val();
            if (this.enteredHireslipNumber == null || this.enteredHireslipNumber == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Warning",
                    text: "Please Enter Hireslip Number",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                this.searchMethodForHireslipNumberWsie();
            }
        }
        else if (this.selectedSearchBy == 'dateWise') {
            if (this.destView == true) {
                if (this.selectedFromDate == null || this.selectedFromDate == '' || this.selectedFromDate == undefined || this.selectedToDate == null || this.selectedToDate == undefined || this.selectedToDate == '' || this.selectedDestination == null || this.selectedDestination == '' || this.selectedDestination == undefined) {
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
                    this.searchMethodForDateWise();
                }
            }
            else {
                if (this.selectedFromDate == null || this.selectedFromDate == '' || this.selectedFromDate == undefined || this.selectedToDate == null || this.selectedToDate == '' || this.selectedToDate == undefined) {
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
                    this.searchMethodForDateWise();
                }
            }
        }
    };
    LorryHireBalanceComponent.prototype.searchMethodForHireslipNumberWsie = function () {
        this.enteredHireslipNumber = $("#hireslipNumber").val();
        this.hireslipDtoSearchHireslipWise = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoSearchHireslipWise.mode = 'Hireslipno';
        this.hireslipDtoSearchHireslipWise.hireslipnumber = this.enteredHireslipNumber;
        console.log(this.hireslipDtoSearchHireslipWise);
        this.searchMethodForHireslipNumberWsieDetails();
    };
    LorryHireBalanceComponent.prototype.searchMethodForDateWise = function () {
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedDestination = $("#destination").val();
        this.selectedSource = $("#source").val();
        this.selectedPaymentType = $("#paymentType").val();
        this.hireslipDtoSearchDateWise = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoSearchDateWise.companyid = this.userDataDtoReturnSession.companyId;
        this.hireslipDtoSearchDateWise.fromDate = this.selectedFromDate;
        this.hireslipDtoSearchDateWise.toDate = this.selectedToDate;
        // for mode
        if (this.selectedPaymentType == 'all') {
            this.hireslipDtoSearchDateWise.mode = 'ALL';
        }
        else if (this.selectedPaymentType == 'paid' || this.selectedPaymentType == 'unpaid') {
            this.hireslipDtoSearchDateWise.mode = 'Specific';
        }
        //For source
        if (this.selectedSource != null && this.selectedSource != '') {
            this.hireslipDtoSearchDateWise.mainStation = this.selectedSource;
        }
        else {
            this.hireslipDtoSearchDateWise.mainStation = null;
        }
        //To set Paid or Unpaid
        if (this.selectedPaymentType == 'paid') {
            this.hireslipDtoSearchDateWise.isLryAdvPaid = true;
        }
        else if (this.selectedPaymentType == 'unpaid') {
            this.hireslipDtoSearchDateWise.isLryAdvPaid = false;
        }
        //For Destination
        if (this.destView == true) {
            this.hireslipDtoSearchDateWise.toStation = this.selectedDestination;
        }
        else {
            this.hireslipDtoSearchDateWise.toStation = this.userDataDtoReturnSession.mainStation;
        }
        console.log(this.hireslipDtoSearchDateWise);
        this.searchMethodForDateWiseDetails();
    };
    //Confirm Btn Part Starts From here
    LorryHireBalanceComponent.prototype.getDismissReason = function (reason) {
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
    LorryHireBalanceComponent.prototype.getConfirmPaymnent = function (confirmPaymentPopUpTemplate, lorryHireBalanceData) {
        var _this = this;
        this.selectedRowHireslipNumber = '';
        this.selectedRowHireslipNumber = lorryHireBalanceData.hireslipnumber;
        this.hireslipDtoSelectedRow = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoSelectedRow = lorryHireBalanceData;
        console.log(this.hireslipDtoSelectedRow);
        console.log(this.selectedRowHireslipNumber);
        if (this.selectedRowHireslipNumber != null && this.selectedRowHireslipNumber != '') {
            if (this.hireslipDtoSelectedRow.hireSlipBalance == true) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Warning",
                    text: "This Hireslip is Already Confirmed",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                this.modalRefferenceConfirmPaymentPopUp = this.modalService.open(confirmPaymentPopUpTemplate, { centered: true });
                this.modalRefferenceConfirmPaymentPopUp.result.then(function (result) {
                    _this.modalRefferenceConfirmPaymentClosePopUp = "Closed with: " + result;
                }, function (reason) {
                    _this.modalRefferenceConfirmPaymentClosePopUp = "Dismissed " + _this.getDismissReason(reason);
                });
            }
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                title: "Warning",
                text: "No Hireslip number!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    LorryHireBalanceComponent.prototype.confirmBtnPopUp = function (confirmPaymentPopUpTemplate) {
        var _this = this;
        this.selectedPaymentDate = $("#paymentDate").val();
        if (this.selectedPaymentDate != null && this.selectedPaymentDate != '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                title: "Confirm!",
                text: "Sure you want to confirm payment?",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (confirm) {
                if (confirm) {
                    _this.confirmPaymentDetails();
                }
                else {
                }
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                title: "Warning",
                text: "Please Select Payment Date",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    LorryHireBalanceComponent.prototype.closeBtnPopup = function () {
        this.modalRefferenceConfirmPaymentPopUp.close();
        this.selectedPaymentDate = '';
        $("#paymentDate").val('');
        this.hireslipDtoConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoConfirmPrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoUpdatePrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
    };
    LorryHireBalanceComponent.prototype.confirmPaymentDetails = function () {
        this.hireslipDtoConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.selectedPaymentDate = $("#paymentDate").val();
        this.hireslipDtoConfirmPayment.hireslipnumber = this.selectedRowHireslipNumber;
        this.hireslipDtoConfirmPayment.paymentDate = this.selectedPaymentDate;
        this.hireslipDtoConfirmPayment.lastupdatedby = this.userDataDtoReturnSession.userId;
        console.log(this.hireslipDtoConfirmPayment);
        this.setConfirmPaymentDetails();
    };
    LorryHireBalanceComponent.prototype.confirmPrintVoucher = function () {
        this.updateAfterPrintForPaymentBtn = false;
        this.hireslipDtoConfirmPrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoConfirmPrintVoucher.hireslipnumber = this.selectedRowHireslipNumber;
        console.log(this.hireslipDtoConfirmPrintVoucher);
        this.setConfirmPrintVoucherDetails();
    };
    LorryHireBalanceComponent.prototype.updateHireslipDetailAfterPrint = function () {
        this.hireslipDtoUpdatePrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoUpdatePrintVoucher.hireslipnumber = this.selectedRowHireslipNumber;
        console.log(this.hireslipDtoUpdatePrintVoucher);
        this.setUpdateHireslipDetailAfterPrint();
    };
    /// From here Voucher click starts 			 
    LorryHireBalanceComponent.prototype.getVoucherPrint = function (lorryHireBalanceData) {
        var _this = this;
        this.updateforVoucher = false;
        this.selectedRowHireslipNumberForVoucher = '';
        this.selectedRowHireslipNumberForVoucher = lorryHireBalanceData.hireslipnumber;
        this.isBalancePrint = lorryHireBalanceData.balanceHsPrint;
        if (this.selectedRowHireslipNumberForVoucher != null && this.selectedRowHireslipNumberForVoucher != '') {
            if (this.isBalancePrint == true) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Warning!",
                    text: "The Voucher For This Hire Slip Has Already Been Printed.Do You Want To Print It Again ",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                    buttons: ["No", "Yes"],
                }).then(function (print) {
                    if (print) {
                        /// hireslip voucher Print  
                        _this.getInfoForPrintVoucher();
                        _this.updateforVoucher = false;
                    }
                    else {
                    }
                });
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Confirm!",
                    text: "Sure you want to print lorry hire voucher",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                    buttons: ["No", "Yes"],
                }).then(function (print) {
                    if (print) {
                        /// hireslip voucher Print 
                        _this.getInfoForPrintVoucher();
                        _this.updateforVoucher = true;
                    }
                    else {
                    }
                });
            }
        }
    };
    LorryHireBalanceComponent.prototype.getInfoForPrintVoucher = function () {
        this.hireslipDtoPaymentPrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoPaymentPrintVoucher.hireslipnumber = this.selectedRowHireslipNumberForVoucher;
        console.log(this.hireslipDtoPaymentPrintVoucher);
        this.getInfoForPrintVoucherDetails();
    };
    LorryHireBalanceComponent.prototype.updateHireslipDetailAfterPrintForPrintBtn = function () {
        this.hireslipDtoUpdatePrintVoucherFrmPrintBtn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoUpdatePrintVoucherFrmPrintBtn.hireslipnumber = this.selectedRowHireslipNumberForVoucher;
        console.log(this.hireslipDtoUpdatePrintVoucherFrmPrintBtn);
        this.setupdateHireslipDetailAfterPrintForPrintBtn();
    };
    LorryHireBalanceComponent.prototype.setPringForVoucherDetails = function () {
        var _this = this;
        localStorage.clear();
        localStorage.setItem('lorryHireBalanceVoucherPrint', JSON.stringify(this.setPrintForVoucher));
        this.viewVoucher = true;
        window.addEventListener('afterprint', function (onclick) {
            if (_this.viewVoucher) {
                _this.viewVoucher = false;
                _this.setPrintForVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
                localStorage.clear();
                if (_this.updateforVoucher == true) {
                    _this.updateHireslipDetailAfterPrintForPrintBtn();
                    _this.updateforVoucher = false;
                }
                if (_this.updateAfterPrintForPaymentBtn == true) {
                    _this.updateHireslipDetailAfterPrint();
                    _this.updateAfterPrintForPaymentBtn = false;
                }
            }
        });
    };
    LorryHireBalanceComponent.prototype.clearMethod = function () {
        this.showSpinnerForAction = false;
        this.dateWise = false;
        this.modelForMainSrc = '';
        this.hireslipWise = true;
        $("#searchBy").val('hireslipWise');
        $("#source").val('');
        $("#fromDate").val('');
        $("#toDate").val('');
        $("#paymentType").val('All');
        $("#hireslipNumber").val('');
        this.viewDestination = false;
        this.modelDestination = '';
        this.fromDateModel = null;
        this.toDateModel = null;
        this.clearTable();
        this.selectedSource = '';
        this.selectedSearchBy = '';
        this.selectedFromDate = '';
        this.selectedToDate = '';
        this.enteredHireslipNumber = '';
        this.hireslipDtoSearchHireslipWise = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoSearchDateWise = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.searchByNumber = false;
        this.selectedPaymentType = '';
        this.selectedPaymentDate = '';
        this.enteredPaymentDate = '';
        this.selectedRowHireslipNumber = '';
        this.hireslipDtoSelectedRow = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoConfirmPrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoUpdatePrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoUpdatePrintVoucherFrmPrintBtn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipDtoPaymentPrintVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.getDetailsForPrint = '';
        this.setPrintForVoucher = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.selectedRowHireslipNumberForVoucher = '';
        this.isBalancePrint = false;
        this.viewVoucher = false;
        this.updateforVoucher = false;
        this.updateAfterPrintForPaymentBtn = false;
        if (this.destView == true) {
            this.viewDestination = true;
            $("#destination").val('');
        }
        else {
            this.viewDestination = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LorryHireBalanceComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmPaymentPopUpTemplate'),
        __metadata("design:type", Object)
    ], LorryHireBalanceComponent.prototype, "confirmPaymentPopUpTemplate", void 0);
    LorryHireBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lorry-hire-balance',
            template: __webpack_require__(/*! ./lorry-hire-balance.component.html */ "./src/app/report/lr-report/lorry-hire-balance/lorry-hire-balance.component.html"),
            styles: [__webpack_require__(/*! ./lorry-hire-balance.component.css */ "./src/app/report/lr-report/lorry-hire-balance/lorry-hire-balance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_13__["LrReportService"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_15__["MasterService"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_17__["HireslipService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], LorryHireBalanceComponent);
    return LorryHireBalanceComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/lorry-hire-statement/lorry-hire-statement.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/report/lr-report/lorry-hire-statement/lorry-hire-statement.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9sci1yZXBvcnQvbG9ycnktaGlyZS1zdGF0ZW1lbnQvbG9ycnktaGlyZS1zdGF0ZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/report/lr-report/lorry-hire-statement/lorry-hire-statement.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/report/lr-report/lorry-hire-statement/lorry-hire-statement.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row \" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Lorry Hire Statement</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Supplier Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"supplierName\" placeholder=\"Select Supplier Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#supplierName [formControl]=\"controlSupplierName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSupplierName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteSupplierName=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(supplierNameOptions | filterSupplierName: controlSupplierName.value) as resultSupplierName\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSupplierName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.supplierName\"> {{\n\t\t\t\t\t\t\t\t\t\t\t\toption.supplierName }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultSupplierName.length\">No result</app-option> </ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Supplier Name</label> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption\" type=\"text\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#supplierName id=\"supplierName\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Supplier Name\" matInput -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlSupplierName\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[matAutocomplete]=\"autocompleteSupplierName\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<mat-autocomplete -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteSupplierName=\"matAutocomplete\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t[displayWith]=displayFn(option)> <mat-option -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of supplierNameOptions | filterSupplierName: controlSupplierName.value\" -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option\"> {{ option.supplierName }} </mat-option> </mat-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" placeholder=\"dd-mm-yyyy\" name=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"dd-mm-yyyy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"getLorryHireStmtDetailsList()\">Search</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"clearAll()\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLorryHireStmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLorryHireStmt\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Truck No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Hireslip No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Route</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Hire</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let lorryHireStmtData of lorryHireStmtDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireStmtData.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireStmtData.hireslipdate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireStmtData.hireslipnumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireStmtData.route }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lorryHireStmtData.totalhire }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/lr-report/lorry-hire-statement/lorry-hire-statement.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/report/lr-report/lorry-hire-statement/lorry-hire-statement.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: LorryHireStatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LorryHireStatementComponent", function() { return LorryHireStatementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_SupplierDetails_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/SupplierDetails-dto */ "./src/app/dto/SupplierDetails-dto.ts");
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


//for service starts




//for service ends
//for the select option with filter starts

//for the select option with filter ends


var LorryHireStatementComponent = /** @class */ (function () {
    function LorryHireStatementComponent(reportService, router, masterReadService) {
        var _this = this;
        this.reportService = reportService;
        this.router = router;
        this.masterReadService = masterReadService;
        //    onDestroyUnsubscribtionLorryHireStmt: Subscription;
        //for service starts
        this.hireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_6__["HireSlipDto"]();
        this.isLoggedIn = true;
        this.supplierDetailsDto = new src_app_dto_SupplierDetails_dto__WEBPACK_IMPORTED_MODULE_9__["SupplierDetailsDto"]();
        this.loadingIndicator = true;
        //for datepicker ends
        //for the select option with filter starts
        this.controlSupplierName = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.dtTriggerLorryHireStmt = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //    getValuesForNatureOfPackList() {
        //        var masterDto = {
        //            'mainStation': 'Delhi',
        //            'mainAdminStation': 'Budhpur'
        //        }
        //        return masterDto;
        //    }
        this.getLorryHireStmtDetailsList = function () {
            //        console.log( this.hireSlipDto.companyId );
            _this.gettingDetailsForLorryHireStmt();
            _this.reportService.getLorryHireStmtService(_this.hireSlipDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.lorryHireStmtDataList = response;
                    _this.dtTriggerLorryHireStmt.next();
                    //                    console.log( this.natureOfPackDataList[0] );
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Error",
                text: "Server Error While Getting Lorry Hire Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getSupplierDetailsList = function () {
            _this.getSupplierDetails();
            _this.masterReadService.getSuplierMaster(_this.supplierDetailsDto).subscribe(function (response) {
                if (response) {
                    _this.supplierDetailsList = response;
                    _this.supplierNameOptions = _this.supplierDetailsList;
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
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "Error",
                text: "Server Error While Getting Supplier Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
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
            this.lorryHireStmtTable();
        }
    }
    LorryHireStatementComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    LorryHireStatementComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    LorryHireStatementComponent.prototype.lorryHireStmtTable = function () {
        this.dtOptionsLorryHireStmt = {
            //};
            //columns is used to for export and others starts
            //            columns: [
            //                {
            //                    title: 'Truck No',
            //                    data: 'truckNo'
            //                },
            //                {
            //                    title: 'Date',
            //                    data: 'date'
            //                },
            //                {
            //                    title: 'Hireslip No',
            //                    data: 'hireslipNo'
            //                },
            //                {
            //                    title: 'Route',
            //                    data: 'route'
            //                },
            //                {
            //                    title: 'Total Hire',
            //                    data: 'totalHire'
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
                    title: '<h5 style=\'text-align: center;\'> ' + "Lorry Hire Statement" + '</h5>',
                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
                    customize: function (win) {
                        $(win.document.body)
                            .css('font-size', '10pt');
                        $(win.document.body).find('table')
                            .addClass('compact')
                            .css('font-size', 'inherit');
                    }
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: "Lorry Hire Statement",
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
                //                counts ends
                var total = api
                    .column(4)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Total over this page
                var pageTotal = api
                    .column(4, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(4).footer()).html(pageTotal);
            }
        };
    };
    LorryHireStatementComponent.prototype.ngOnInit = function () {
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //        this.getDataFrmServiceFrTable = this.lorryHireStmt.getSummaryData()
        //        this.onDestroyUnsubscribtionLorryHireStmt = this.getDataFrmServiceFrTable.subscribe( data => {
        //            this.lorryHireStmtDataList = data['data'];
        //            this.dtTriggerLorryHireStmt.next();
        //        } );
        //the below code is for the getting data through json ends
    };
    //    this.supplierPanNumber = this.selectedValue;
    //    console.log( this.supplierPanNumber );
    LorryHireStatementComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLorryHireStmt.unsubscribe();
        //        this.onDestroyUnsubscribtionLorryHireStmt.unsubscribe();
    };
    //    selectedSupplierName() {
    //        alert( "hello Inside of supplierName" );
    //        this.supplierPanNumber = this.hireSlipDto.suppliername = this.supplierDetailsList.tinNumber;
    //        console.log( this.supplierPanNumber + "," + this.hireSlipDto.suppliername + "," + this.supplierDetailsList.tinNumber );
    //    }
    //    if (this.hireSlipDto.suppliername = this.supplierSelected){
    //        
    //    }
    LorryHireStatementComponent.prototype.chnageDataTableMessageTop = function () {
        return '<span>'
            + '<div style=\'float: left\'>'
            + '<h6 style=\'font-weight:bold;\'>'
            + "From: " + '<span  style=\'font-weight:400;\'>' + this.selectedFromDate + '</span>'
            + "&nbsp;&nbsp;&nbsp;&nbsp;"
            + "To: " + '<span  style=\'font-weight:400;\'>' + this.selectedToDate + '</span>'
            + '</h6>'
            + '</div>'
            + '<div style=\'float: right;\'>'
            + '<h6 style=\'font-weight:bold;\'>'
            + "Pan No: "
            + '<span  style=\'font-weight:400;\'>'
            + this.selectedSupplierPanNumber + '</span>'
            + '</h6>'
            + '</div>'
            + '</span>';
    };
    LorryHireStatementComponent.prototype.chnageDataTableMessageTopExcel = function () {
        return "From: "
            + this.selectedFromDate
            + "           "
            + "To: "
            + this.selectedToDate
            + "           "
            + "Pan No: "
            + this.selectedSupplierPanNumber;
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    LorryHireStatementComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for service starts
    LorryHireStatementComponent.prototype.gettingDetailsForLorryHireStmt = function () {
        this.selectedValue = $("#supplierName").val();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedSupplierPanNumber = "AAVPH9179A";
        //        console.log( "supplier Tin No " + this.selectedValue );
        this.hireSlipDto.companyid = this.userDataDtoReturnSession.companyId;
        //        this.hireSlipDto.fromDateInDate;
        //        this.hireSlipDto.toDateInDate;
        //        this.hireSlipDto.fromDate = "2019-10-24 00:00:00";
        //        this.hireSlipDto.toDate = "2019-10-26 23:59:59";
        this.hireSlipDto.suppliername = this.selectedValue;
        this.lorryHireStmtTable();
        //        this.hireSlipDto.supplierpanno = this.userDataDtoReturnSession.supplierpanno;
    };
    LorryHireStatementComponent.prototype.getSupplierDetails = function () {
        this.supplierDetailsDto.companyId = this.userDataDtoReturnSession.companyId;
        this.supplierDetailsDto.mode = "Working";
    };
    //for service ends
    LorryHireStatementComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    //    onShopSelectionChanged( option ) {
    //        this.selectedName = option.supplierName;
    //        console.log( this.selectedName );
    //        this.selectedValue = option.tinNumber;
    //        console.log( this.selectedValue );
    //
    //    }
    //    get getOptionText( option ) {
    //        return option.supplierName;
    //
    //    }
    //    displayFn( option ) {
    //        return ( option ) => option.supplierName;
    //    }
    LorryHireStatementComponent.prototype.clearAll = function () {
        this.controlSupplierName.reset();
        $("#fromDate").val('');
        $("#toDate").val('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LorryHireStatementComponent.prototype, "dtElements", void 0);
    LorryHireStatementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lorry-hire-statement',
            template: __webpack_require__(/*! ./lorry-hire-statement.component.html */ "./src/app/report/lr-report/lorry-hire-statement/lorry-hire-statement.component.html"),
            styles: [__webpack_require__(/*! ./lorry-hire-statement.component.css */ "./src/app/report/lr-report/lorry-hire-statement/lorry-hire-statement.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__["MasterReadService"]])
    ], LorryHireStatementComponent);
    return LorryHireStatementComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/lr-dispatch-booking-report/lr-dispatch-booking-report.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/report/lr-report/lr-dispatch-booking-report/lr-dispatch-booking-report.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n::ng-deep ngb-typeahead-window {\n  top:26px;\n    left:25px;\n\tmax-height: 150px;\n    overflow-y: auto;\n    position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2xyLXJlcG9ydC9sci1kaXNwYXRjaC1ib29raW5nLXJlcG9ydC9sci1kaXNwYXRjaC1ib29raW5nLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsU0FBUztJQUNQLFVBQVU7Q0FDYixrQkFBa0I7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L2xyLXJlcG9ydC9sci1kaXNwYXRjaC1ib29raW5nLXJlcG9ydC9sci1kaXNwYXRjaC1ib29raW5nLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHBYO1xufVxuOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93IHtcbiAgdG9wOjI2cHg7XG4gICAgbGVmdDoyNXB4O1xuXHRtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/report/lr-report/lr-dispatch-booking-report/lr-dispatch-booking-report.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/report/lr-report/lr-dispatch-booking-report/lr-dispatch-booking-report.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">LR Dispatched Booking Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"summary\">Summary</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"detail\">Detail</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"destination\">Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"ViewDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" [(ngModel)]=\"fromDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"ViewDate\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"toDateModel\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewTypeDestination\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Date</label> <input id=\"destDate\"[(ngModel)]=\"destDateModel\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"dates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#dates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"dates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSource\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"source\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSource\" [ngbTypeahead]=\"searchSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" />\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destination\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"searchMethod()\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearMethod()\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!summaryTable\">Booking\n\t\t\t\t\t\t\t\t\t\t\t\t\tLR Dispatched Report - Summary</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!detailTable\">Booking\n\t\t\t\t\t\t\t\t\t\t\t\t\tLR Dispatched Report - Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" [hidden]=\"!destinationTable\">Booking\n\t\t\t\t\t\t\t\t\t\t\t\t\tLR Dispatched Report - Destination</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!summaryTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable  id=\"summaryTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSummary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerSummary\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Entry Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Hireslip Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Lrs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Diff(Hire-Entry)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let smryData of summaryDataList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.enteredDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.hireslipDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.dispatchedwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ smryData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!detailTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable  id=\"detailsTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionDetail\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDetail\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Book Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Entry Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Hirelsip Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lr No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Diff(Entry-Booking)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Diff(Hire-Entry)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Diff(Hire-Booking)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ActWt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ChgWt</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let detailData of detailDataList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.enteredDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.hireslipDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.deliveredwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.dispatchedwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.diffDays }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ detailData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\" [hidden]=\"!destinationTable\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"destinationTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDest\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Entry Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Tot Lrs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Tot Art</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Diff(Hire-Entry)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Diff(Hire-Book)</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ActWt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>ChgWt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let destData of destDataList\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ destData.enteredDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ destData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ destData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ destData.dispatchedwithin }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ destData.dispatchedwithin1 }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ destData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ destData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ destData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/lr-report/lr-dispatch-booking-report/lr-dispatch-booking-report.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/report/lr-report/lr-dispatch-booking-report/lr-dispatch-booking-report.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LrDispatchBookingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrDispatchBookingReportComponent", function() { return LrDispatchBookingReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
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


var my = new Date();













var LrDispatchBookingReportComponent = /** @class */ (function () {
    ////
    function LrDispatchBookingReportComponent(memoLessRpt, router, memoReport, masterReadService, modalService, lrReportService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.memoReport = memoReport;
        this.masterReadService = masterReadService;
        this.modalService = modalService;
        this.lrReportService = lrReportService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.viewTypeSummary = true;
        this.ViewDate = true;
        this.viewTypeDetail = false;
        this.viewTypeDestination = false;
        //supList: SupplierModel[] = [];
        //
        this.dtTriggerSummary = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerDetail = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerDest = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        //firstDtOptions: DataTables.Settings = {};
        this.isLoggedIn = true;
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.destinationTA = [];
        ///Destination
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.sourceTA = [];
        this.focusSourceTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchSource = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.sourceTA
                : _this.sourceTA.filter(function (v) { return v.subStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSource = function (x) { return x.subStations; };
        this.lrDtoSource = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.summaryTable = true;
        this.detailTable = false;
        this.destinationTable = false;
        this.cbSourceViewSupAdmin = false;
        this.cbSourceViewBkgAdmin = false;
        this.showSource = false;
        this.showSourceListForBkgDis = 'Show Source List For Bkg Dispatch';
        this.lrDtoDestinationAllOpt = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.searchLrDispatchRptDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.searchMethodGetDetails = function () {
            _this.showSpinnerForAction = true;
            console.log(_this.searchLrDispatchRptDto);
            _this.lrReportService.getBkgLrDisPatchRptService(_this.searchLrDispatchRptDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#summaryTableId").DataTable().destroy();
                _this.summaryDataList = [];
                $("#detailsTableId").DataTable().destroy();
                _this.detailDataList = [];
                $("#destinationTableId").DataTable().destroy();
                _this.destDataList = [];
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
                    _this.selectedView = $("#viewType").val();
                    if (_this.selectedView == 'summary') {
                        _this.summaryDataList = response;
                    }
                    else if (_this.selectedView == 'detail') {
                        _this.detailDataList = response;
                    }
                    else if (_this.selectedView == 'destination') {
                        _this.destDataList = response;
                    }
                }
                _this.dtTriggerSummary.next();
                _this.dtTriggerDetail.next();
                _this.dtTriggerDest.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the  details", "info");
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
            this.getDestinationDetails();
            ///Rights for show Show Source List
            //            if ( this.showSourceListForBkgDis == "Show Source List For Bkg Dispatch" ) {
            //                this.showSource = true;
            //this.getSourceDetails();
            //} 
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                //    console.log(this.userDataDtoReturnSession.sortedMapFeatures.Rights);
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Source BkgLrDispSupAdmin") {
                        this.showSource = true;
                        this.cbSourceViewSupAdmin = true;
                        this.cbSourceViewBkgAdmin = false;
                        this.getSourceDetails();
                    }
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Source BkgLrDispBkgAdmin") {
                        this.showSource = true;
                        this.cbSourceViewBkgAdmin = true;
                        this.cbSourceViewSupAdmin = false;
                        this.getSourceDetails();
                    }
                }
            }
        }
    }
    LrDispatchBookingReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    LrDispatchBookingReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var subSource = null;
        if (this.cbSourceViewSupAdmin == true || this.cbSourceViewBkgAdmin == true) {
            subSource = null;
        }
        else {
            subSource = this.userDataDtoReturnSession.office;
        }
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
                        var returnVal = null;
                        if (subSource != null) {
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:18px;'><u>Booking LR Dispatched Report(Summary)</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:40%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + subSource + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>To &nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                "<span style='font-size:15px;'>" + $("#destination").val() + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:18px;'><u>Booking LR Dispatched Report(Summary)</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:40%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>From</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#source").val() + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>To &nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                "<span style='font-size:15px;'>" + $("#destination").val() + "</span><br>" +
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
                        if (subSource != null) {
                            returnSummaryExcel = "Booking LR Dispatched Report(Summary)" +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + " From : " + subSource + " To : " + $("#destination").val();
                        }
                        else {
                            returnSummaryExcel = "Booking LR Dispatched Report(Summary)" +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "  From : " + $("#source").val() + " To : " + $("#destination").val();
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
                var totalLrs = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var articles = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chargedWgt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html(totalLrs);
                $(api.column(3).footer()).html(articles);
                $(api.column(4).footer()).html();
                $(api.column(5).footer()).html(actualWgt);
                $(api.column(6).footer()).html(chargedWgt);
            }
        },
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
                        messageTop: function () {
                            var returnDetailsPrint = null;
                            if (subSource != null) {
                                returnDetailsPrint = "<br><table style='width: 100%;'>" +
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
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:18px;'><u>Booking LR Dispatched Report(Details)</u></strong><br>" +
                                    "</td>" +
                                    "<td align='left' style='width:40%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>From</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + subSource + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>To &nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                    "<span style='font-size:15px;'>" + $("#destination").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                            else {
                                returnDetailsPrint = "<br><table style='width: 100%;'>" +
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
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:18px;'><u>Booking LR Dispatched Report(Details)</u></strong><br>" +
                                    "</td>" +
                                    "<td align='left' style='width:40%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>From</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + $("#source").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>To &nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                    "<span style='font-size:15px;'>" + $("#destination").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                            return returnDetailsPrint;
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
                            var returnDetailsExcel = null;
                            if (subSource != null) {
                                returnDetailsExcel = "Booking LR Dispatched Report(Details)" +
                                    "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + " From : " + subSource + " To : " + $("#destination").val();
                            }
                            else {
                                returnDetailsExcel = "Booking LR Dispatched Report(Details)" +
                                    "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                    "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "  From : " + $("#source").val() + " To : " + $("#destination").val();
                            }
                            return returnDetailsExcel;
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
                    var articles = api.column(4).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actualWgt = api.column(9).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var chargedWgt = api.column(10).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html();
                    $(api.column(2).footer()).html();
                    $(api.column(3).footer()).html();
                    $(api.column(4).footer()).html(articles);
                    $(api.column(5).footer()).html();
                    $(api.column(6).footer()).html();
                    $(api.column(7).footer()).html();
                    $(api.column(8).footer()).html();
                    $(api.column(9).footer()).html(actualWgt);
                    $(api.column(10).footer()).html(chargedWgt);
                }
            },
            this.dtOptionsDestination = {
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
                            columns: [0, 1, 2, 3, 5, 6, 7]
                        },
                        messageTop: function () {
                            var returnDestWisePrint = null;
                            if (subSource != null) {
                                returnDestWisePrint = "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 30%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Date&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#destDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                    "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:18px;'><u>Booking LR Dispatched Report(Destination Wise)</u></strong><br>" +
                                    "</td>" +
                                    "<td align='left' style='width:40%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>From</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + subSource + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>To &nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                    "<span style='font-size:15px;'>" + $("#destination").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                            else {
                                returnDestWisePrint = "<br><table style='width: 100%;'>" +
                                    "<tr>" +
                                    "<td style='width: 30%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>Date&nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='10%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#destDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                    "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:18px;'><u>Booking LR Dispatched Report(Destination Wise)</u></strong><br>" +
                                    "</td>" +
                                    "<td align='left' style='width:40%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>From</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'>" + $("#source").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>To &nbsp;&nbsp;</strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important; word-wrap:break-word;'>" +
                                    "<span style='font-size:15px;'>" + $("#destination").val() + "</span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table><br>";
                            }
                            return returnDestWisePrint;
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
                            columns: [0, 1, 2, 3, 5, 6, 7]
                        },
                        title: function () {
                            var returnDestWiseExcel = null;
                            if (subSource != null) {
                                returnDestWiseExcel = "Booking LR Dispatched Report(Destination Wise)" +
                                    " Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#destDate").val()).format('DD-MM-YYYY') + " From : " + subSource + " To : " + $("#destination").val();
                            }
                            else {
                                returnDestWiseExcel = "Booking LR Dispatched Report(Destination Wise)" +
                                    " Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#destDate").val()).format('DD-MM-YYYY') + "  From : " + $("#source").val() + " To : " + $("#destination").val();
                            }
                            return returnDestWiseExcel;
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
                    var articles = api.column(2).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var actualWgt = api.column(5).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    var chargedWgt = api.column(6).data().reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html(totalLrs);
                    $(api.column(2).footer()).html(articles);
                    $(api.column(3).footer()).html();
                    $(api.column(4).footer()).html();
                    $(api.column(5).footer()).html(actualWgt);
                    $(api.column(6).footer()).html(chargedWgt);
                    $(api.column(7).footer()).html();
                }
            };
    };
    LrDispatchBookingReportComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                //console.log(`The DataTable ${index} instance ID is: ${dtInstance.table().node().id}`);
                if (dtInstance.table().node().id == "summaryTableId") {
                    console.log("a");
                    _this.summaryDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerSummary.next();
                }
                else if (dtInstance.table().node().id == "detailsTableId") {
                    console.log("b");
                    _this.detailDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerDetail.next();
                }
                else if (dtInstance.table().node().id == "destinationTableId") {
                    console.log("c");
                    _this.destDataList = [];
                    dtInstance.destroy();
                    _this.dtTriggerDest.next();
                }
            });
        });
    };
    LrDispatchBookingReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerSummary.unsubscribe();
        this.dtTriggerDetail.unsubscribe();
        this.dtTriggerDest.unsubscribe();
    };
    LrDispatchBookingReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerSummary.next();
        this.dtTriggerDetail.next();
        this.dtTriggerDest.next();
    };
    LrDispatchBookingReportComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'summary') {
            this.viewTypeSummary = true;
            this.ViewDate = true;
            this.viewTypeDetail = false;
            this.viewTypeDestination = false;
            this.summaryTable = true;
            this.detailTable = false;
            this.destinationTable = false;
            this.destinationTA = [];
            for (var i = 0; i < this.destinationOptions.length; i++) {
                this.destinationTA.push(this.destinationOptions[i]);
            }
            $("#summaryTableId").DataTable().destroy();
            this.summaryDataList = [];
            $("#detailsTableId").DataTable().destroy();
            this.detailDataList = [];
            $("#destinationTableId").DataTable().destroy();
            this.destDataList = [];
            this.dtTriggerSummary.next();
            this.dtTriggerDetail.next();
            this.dtTriggerDest.next();
        }
        else if (viewType === 'detail') {
            this.viewTypeSummary = false;
            this.ViewDate = true;
            this.viewTypeDetail = true;
            this.viewTypeDestination = false;
            this.summaryTable = false;
            this.detailTable = true;
            this.destinationTable = false;
            this.destinationTA = [];
            for (var i = 0; i < this.destinationOptions.length; i++) {
                this.destinationTA.push(this.destinationOptions[i]);
            }
            $("#summaryTableId").DataTable().destroy();
            this.summaryDataList = [];
            $("#detailsTableId").DataTable().destroy();
            this.detailDataList = [];
            $("#destinationTableId").DataTable().destroy();
            this.destDataList = [];
            this.dtTriggerSummary.next();
            this.dtTriggerDetail.next();
            this.dtTriggerDest.next();
        }
        else if (viewType === 'destination') {
            this.viewTypeSummary = false;
            this.ViewDate = false;
            this.viewTypeDetail = false;
            this.viewTypeDestination = true;
            this.summaryTable = false;
            this.detailTable = false;
            this.destinationTable = true;
            this.destinationTA = [];
            this.lrDtoDestinationAllOpt.destination = 'All';
            this.destinationTA.push(this.lrDtoDestinationAllOpt);
            for (var i = 0; i < this.destinationOptions.length; i++) {
                this.destinationTA.push(this.destinationOptions[i]);
            }
            $("#summaryTableId").DataTable().destroy();
            this.summaryDataList = [];
            $("#detailsTableId").DataTable().destroy();
            this.detailDataList = [];
            $("#destinationTableId").DataTable().destroy();
            this.destDataList = [];
            this.dtTriggerSummary.next();
            this.dtTriggerDetail.next();
            this.dtTriggerDest.next();
        }
        else {
            this.viewTypeSummary = false;
            this.ViewDate = false;
            this.viewTypeDetail = false;
            this.viewTypeDestination = false;
            this.summaryTable = true;
            this.detailTable = false;
            this.destinationTable = false;
            this.destinationTA = [];
            for (var i = 0; i < this.destinationOptions.length; i++) {
                this.destinationTA.push(this.destinationOptions[i]);
            }
            $("#summaryTableId").DataTable().destroy();
            this.summaryDataList = [];
            $("#detailsTableId").DataTable().destroy();
            this.detailDataList = [];
            $("#destinationTableId").DataTable().destroy();
            this.destDataList = [];
            this.dtTriggerSummary.next();
            this.dtTriggerDetail.next();
            this.dtTriggerDest.next();
        }
    };
    LrDispatchBookingReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    LrDispatchBookingReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    LrDispatchBookingReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    LrDispatchBookingReportComponent.prototype.getDestinationDetails = function () {
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
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Destination Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    LrDispatchBookingReportComponent.prototype.getSourceList = function () {
        if (this.cbSourceViewSupAdmin == true) {
            this.lrDtoSource.mode = 'Booking';
        }
        else if (this.cbSourceViewBkgAdmin == true) {
            this.lrDtoSource.city = this.userDataDtoReturnSession.mainStation;
        }
        this.lrDtoSource.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.lrDtoSource);
    };
    LrDispatchBookingReportComponent.prototype.getSourceDetails = function () {
        var _this = this;
        this.getSourceList();
        this.masterReadService.getSubBookingStationDetailsService(this.lrDtoSource).subscribe(function (response) {
            _this.lrDtoSourceOptions = response;
            console.log(_this.lrDtoSourceOptions);
            if (response) {
                if (response.length > 0) {
                    _this.lrDtoSourceOptions = response;
                    _this.sourceTA = [];
                    for (var i = 0; i < _this.lrDtoSourceOptions.length; i++) {
                        _this.sourceTA.push(_this.lrDtoSourceOptions[i]);
                    }
                }
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Source Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    LrDispatchBookingReportComponent.prototype.searchMethod = function () {
        this.searchLrDispatchRptDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedDestDate = $("#destDate").val();
        this.selectedDestination = $("#destination").val();
        this.selectedSource = $("#source").val();
        this.selectedView = $("#viewType").val();
        console.log(this.selectedFromDate, this.selectedToDate, this.selectedDestDate);
        this.searchLrDispatchRptDto.companyId = this.userDataDtoReturnSession.companyId;
        if (this.selectedDestination == null || this.selectedDestination == '') {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Mandatory Field",
                text: "Please select Destination",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return false;
        }
        if (this.cbSourceViewSupAdmin == true || this.cbSourceViewBkgAdmin == true) {
            if (this.selectedSource == null || this.selectedSource == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Mandatory Field",
                    text: "Please Select Source",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
            else {
                // selected destination as source
                this.searchLrDispatchRptDto.source = this.selectedSource;
            }
        }
        else {
            // office as source
            this.searchLrDispatchRptDto.source = this.userDataDtoReturnSession.office;
        }
        if (this.selectedView == 'summary' || this.selectedView == 'detail') {
            if (this.selectedFromDate == null || this.selectedFromDate == '' || this.selectedToDate == null || this.selectedToDate == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Mandatory Field",
                    text: "From Date , To Date  Is Mandatory Fields",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
            else {
                this.searchLrDispatchRptDto.fromDate = this.selectedFromDate;
                this.searchLrDispatchRptDto.toDate = this.selectedToDate;
            }
            this.searchLrDispatchRptDto.destination = this.selectedDestination;
        }
        if (this.selectedView == 'destination') {
            if (this.selectedDestDate == null || this.selectedDestDate == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Mandatory Field",
                    text: "Date Is Mandatory Fields",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
            else {
                this.searchLrDispatchRptDto.fromDate = this.selectedDestDate;
            }
            if (this.selectedDestination != null && this.selectedDestination != '' && this.selectedDestination != 'All') {
                this.searchLrDispatchRptDto.reportMode = 'selected';
                this.searchLrDispatchRptDto.destination = this.selectedDestination;
            }
            else {
                this.searchLrDispatchRptDto.reportMode = 'ALL';
            }
        }
        if (this.selectedView == 'summary') {
            this.searchLrDispatchRptDto.mode = 'summary';
        }
        else if (this.selectedView == 'detail') {
            this.searchLrDispatchRptDto.mode = 'details';
        }
        else if (this.selectedView == 'destination') {
            this.searchLrDispatchRptDto.mode = 'destWise';
        }
        this.searchMethodGetDetails();
    };
    LrDispatchBookingReportComponent.prototype.clearMethod = function () {
        $("#destination").val('');
        $("#source").val('');
        this.searchLrDispatchRptDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.viewTypeSummary = true;
        this.ViewDate = true;
        this.viewTypeDetail = false;
        this.viewTypeDestination = false;
        this.summaryTable = true;
        this.detailTable = false;
        this.destinationTable = false;
        this.destinationTA = [];
        for (var i = 0; i < this.destinationOptions.length; i++) {
            this.destinationTA.push(this.destinationOptions[i]);
        }
        $("#summaryTableId").DataTable().destroy();
        this.summaryDataList = [];
        $("#detailsTableId").DataTable().destroy();
        this.detailDataList = [];
        $("#destinationTableId").DataTable().destroy();
        this.destDataList = [];
        this.dtTriggerSummary.next();
        this.dtTriggerDetail.next();
        this.dtTriggerDest.next();
        $("#destDate").val('');
        $("#fromDate").val('');
        $("#toDate").val('');
        this.fromDateModel = null;
        this.toDateModel = null;
        this.destDateModel = null;
        this.selectedView = '';
        $("#viewType").val('summary');
        this.selectedFromDate = '';
        this.selectedToDate = '';
        this.selectedDestDate = '';
        this.selectedDestination = '';
        this.selectedSource = '';
        this.showSource = false;
        if (this.cbSourceViewSupAdmin == true || this.cbSourceViewBkgAdmin == true) {
            this.showSource = true;
        }
        this.showSpinnerForAction = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LrDispatchBookingReportComponent.prototype, "dtElements", void 0);
    LrDispatchBookingReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lr-dispatch-booking-report',
            template: __webpack_require__(/*! ./lr-dispatch-booking-report.component.html */ "./src/app/report/lr-report/lr-dispatch-booking-report/lr-dispatch-booking-report.component.html"),
            styles: [__webpack_require__(/*! ./lr-dispatch-booking-report.component.css */ "./src/app/report/lr-report/lr-dispatch-booking-report/lr-dispatch-booking-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_12__["MemoReport"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__["MasterReadService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_13__["LrReportService"]])
    ], LrDispatchBookingReportComponent);
    return LrDispatchBookingReportComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/lr-history-report/lr-history-report.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/report/lr-report/lr-history-report/lr-history-report.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n  top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2xyLXJlcG9ydC9sci1oaXN0b3J5LXJlcG9ydC9sci1oaXN0b3J5LXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztJQUNQLFVBQVU7Q0FDYixrQkFBa0I7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L2xyLXJlcG9ydC9sci1oaXN0b3J5LXJlcG9ydC9sci1oaXN0b3J5LXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93IHtcclxuICB0b3A6MjZweDtcclxuICAgIGxlZnQ6MjVweDtcclxuXHRtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/report/lr-report/lr-history-report/lr-history-report.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/report/lr-report/lr-history-report/lr-history-report.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Lr History Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"lrNo\">LR Number</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"dateWise\">Date Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"userName\">User Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByLrNo\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>LR No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"lrNumber\"class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByDateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"id=\"fromDate\" [(ngModel)]=\"fromDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByDateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\" \t[(ngModel)]=\"toDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByUserName\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destination\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"destinationChange($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByUserName\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>User Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"userName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelUserName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchUserName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterUserName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterUserName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusUserNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select User\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"mode\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=''>Select Type</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"All\">ALL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"edit\">Edit</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delete\">Delete</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"searchMethod()\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearMethod()\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n<!-- \t\t\t\t\t<div class=\"col-md-9 vl p-t-10\"> -->\n<!-- \t\t\t\t\t\t<div class=\"box-body\"> -->\n<!-- \t\t\t\t\t\t\t<table datatable -->\n<!-- \t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\" -->\n<!-- \t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLrHistoryRpt\" -->\n<!-- \t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLrHistoryRpt\"> -->\n\n<!-- \t\t\t\t\t\t\t\t<thead> -->\n<!-- \t\t\t\t\t\t\t\t\t<tr> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>LR Number</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>Type</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>Art</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>Booking Date</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>Source</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>Destination</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>Agent</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>Entered By</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>Act Wt</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>To Pay</th> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<th>Paid</th> -->\n<!-- \t\t\t\t\t\t\t\t\t</tr> -->\n<!-- \t\t\t\t\t\t\t\t</thead> -->\n<!-- \t\t\t\t\t\t\t\t<tbody> -->\n<!-- \t\t\t\t\t\t\t\t\t<tr *ngFor=\"let lrHistoryRptData of lrHistoryRptDataList \"> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.lrNumber }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.type }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.art }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.bookingDate }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.source }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.destination }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.agent }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.consigneeName }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.consignorName }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.enteredBy }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.actWt }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.chgWt }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.toPay }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.paid }}</td> -->\n<!-- \t\t\t\t\t\t\t\t\t</tr> -->\n\n\n<!-- \t\t\t\t\t\t\t\t\t<tr *ngIf = \"supList.length==0\">\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td> -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n<!-- \t\t\t\t\t\t\t\t</tbody> -->\n<!-- \t\t\t\t\t\t\t</table> -->\n\n\n<!-- \t\t\t\t\t\t</div> -->\n<!-- \t\t\t\t\t</div> -->\n\n\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">LR History Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"lrHistoryRpt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLrHistoryRpt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLrHistoryRpt\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Type</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Book Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Src</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Dest</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Agt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Entered By</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let lrHistoryRptData of lrHistoryRptDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.invoiceType }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.bookDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.userName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.chargeWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrHistoryRptData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/lr-report/lr-history-report/lr-history-report.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/report/lr-report/lr-history-report/lr-history-report.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LrHistoryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrHistoryReportComponent", function() { return LrHistoryReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
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


var my = new Date();













var LrHistoryReportComponent = /** @class */ (function () {
    function LrHistoryReportComponent(memoLessRpt, router, memoReport, masterReadService, modalService, lrReportService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.memoReport = memoReport;
        this.masterReadService = masterReadService;
        this.modalService = modalService;
        this.lrReportService = lrReportService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.searchByLrNo = true;
        this.searchByDateWise = false;
        this.searchByUserName = false;
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.lrDtoUserName = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.userNameTA = [];
        this.focusUserNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchUserName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusUserNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.userNameTA
                : _this.userNameTA.filter(function (v) { return v.userName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterUserName = function (x) { return x.userName; };
        this.searchLrHistoryRptDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.dtTriggerLrHistoryRpt = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getSelectDestinationUser = function () {
            _this.getUserDetailsForRead();
            _this.showSpinnerForAction = true;
            _this.masterReadService.getUserDetails(_this.lrDtoUserName).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                _this.userNameOptions = [];
                _this.userNameTA = [];
                console.log(response);
                if (response.length > 0) {
                    _this.userNameOptions = response;
                    _this.userNameTA = [];
                    for (var i = 0; i < _this.userNameOptions.length; i++) {
                        _this.userNameTA.push(_this.userNameOptions[i]);
                    }
                    $("#userName").focus();
                }
                else {
                    _this.userNameOptions = [];
                    _this.userNameTA = [];
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the User Details", "info");
            },
                function () { return console.log('done'); };
        };
        this.searchMethodGetDetails = function () {
            _this.showSpinnerForAction = true;
            console.log(_this.searchLrHistoryRptDto);
            _this.lrReportService.getLrHistoryRptDetails(_this.searchLrHistoryRptDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#lrHistoryRpt").DataTable().destroy();
                _this.lrHistoryRptDataList = [];
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
                    _this.lrHistoryRptDataList = response;
                    console.log(_this.lrHistoryRptDataList);
                }
                _this.dtTriggerLrHistoryRpt.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the  details", "info");
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
            this.getDestinationDetails();
        }
    }
    LrHistoryReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    LrHistoryReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    LrHistoryReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        /*var userName=$("#userName").val();
        var searchBy=$("#searchBy").val();
        var lrNumber=$("#lrNumber").val();
        var toShow=null;
         this.showLRNumberInPrint='';
         this.showFromDateInPrint='';
         this.showToDateInPrint='';
         this.showUserNameInPrint='';
        // document.getElementById('entLr').innerHTML = "Lr Number" +$("#lrNumber").val();
        if(searchBy=='lrNo'){
            console.log('1');
        toShow="Lr Number :"+ $("#lrNumber").val();
        }else if(searchBy=='dateWise'){
            console.log('2');
            toShow="From Date : "+ moment($("#fromDate").val()).format('DD-MM-YYYY') + " -  "+"To Date : " +  moment($("#toDate").val()).format('DD-MM-YYYY') + "";
        }else if(searchBy=='userName'){
            console.log('3');
            toShow="User Name :"+ $("#userName").val() +"From Date : "+ moment($("#fromDate").val()).format('DD-MM-YYYY') + " -  "+"To Date : " +  moment($("#toDate").val()).format('DD-MM-YYYY') + "";
        }*/
        this.dtOptionsLrHistoryRpt = {
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
                            .css('font-size', '16px').css('text-align', 'center');
                    },
                    footer: true,
                    messageTop: function () {
                        var returnVal = null;
                        var searchType = $("#searchBy").val();
                        if (searchType == 'lrNo') {
                            returnVal = "<br><table style='width: 100%;'>" +
                                "<tr>" +
                                "<td style='width: 30%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Lr Number &nbsp;&nbsp;</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='10%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>" + $("#lrNumber").val() + "</strong>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:40%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:25px;'><u>LR History Report</u></strong><br>" +
                                "</td>" +
                                "<td  align='left' style='width:30%;'>" +
                                "</td>" +
                                "</tr>" +
                                "</table><br>";
                        }
                        else if (searchType == 'dateWise') {
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:25px;'><u>LR History Report</u></strong><br>" +
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
                        }
                        else if (searchType == 'userName') {
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:25px;'><u>LR History Report</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:40%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>UserName</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#userName").val() + "</span><br>" +
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
                        var returnValExl = null;
                        var searchTypeExl = $("#searchBy").val();
                        if (searchTypeExl == 'lrNo') {
                            returnValExl = "LR History Report -" +
                                "Lr Number : " + $("#lrNumber").val();
                        }
                        else if (searchTypeExl == 'dateWise') {
                            returnValExl = "LR History Report " +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY');
                        }
                        else if (searchTypeExl == 'userName') {
                            returnValExl = "LR History Report " +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_14__($("#toDate").val()).format('DD-MM-YYYY') + "  UserName : " + $("#userName").val();
                        }
                        return returnValExl;
                    },
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
                var articles = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWeight = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chargedWeight = api.column(11).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(12).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(13).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html(articles);
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html();
                $(api.column(5).footer()).html();
                $(api.column(6).footer()).html();
                $(api.column(7).footer()).html();
                $(api.column(8).footer()).html();
                $(api.column(9).footer()).html();
                $(api.column(10).footer()).html(actualWeight);
                $(api.column(11).footer()).html(chargedWeight);
                $(api.column(12).footer()).html(toPay);
                $(api.column(13).footer()).html(paid);
            }
        };
    };
    LrHistoryReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLrHistoryRpt.unsubscribe();
    };
    LrHistoryReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerLrHistoryRpt.next();
    };
    LrHistoryReportComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    LrHistoryReportComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'lrNo') {
            this.searchByLrNo = true;
            this.searchByDateWise = false;
            this.searchByUserName = false;
        }
        else if (searchBy === 'dateWise') {
            this.searchByLrNo = false;
            this.searchByDateWise = true;
            this.searchByUserName = false;
        }
        else if (searchBy === 'userName') {
            this.searchByLrNo = false;
            this.searchByDateWise = true;
            this.searchByUserName = true;
        }
        else {
            this.searchByLrNo = false;
            this.searchByDateWise = false;
            this.searchByUserName = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    LrHistoryReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    LrHistoryReportComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "logininfo";
    };
    LrHistoryReportComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        console.log('a');
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
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Destination Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    LrHistoryReportComponent.prototype.destinationChange = function (e) {
        this.modelDestinationFotGet = e.item;
        this.selectedDestination = this.modelDestinationFotGet.destination;
        console.log(this.selectedDestination);
        if (this.selectedDestination != null && this.selectedDestination != '') {
            this.getSelectDestinationUser();
        }
    };
    LrHistoryReportComponent.prototype.getUserDetailsForRead = function () {
        this.selectedDestination = this.modelDestinationFotGet.destination;
        this.lrDtoUserName = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoUserName.destination = this.selectedDestination;
        this.lrDtoUserName.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.lrDtoUserName.destination);
    };
    LrHistoryReportComponent.prototype.searchMethod = function () {
        this.searchLrHistoryRptDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedDestination = $("#destination").val();
        this.selectedUserName = $("#userName").val();
        this.enteredLrNumber = $("#lrNumber").val();
        this.selectedSearchBy = $("#searchBy").val();
        this.selectedMode = $("#mode").val();
        /* this.showLRNumberInPrint='';
        this.showFromDateInPrint='';
        this.showToDateInPrint='';
        this.showUserNameInPrint='';*/
        console.log(this.selectedFromDate, this.selectedToDate);
        if (this.selectedSearchBy == 'dateWise' || this.selectedSearchBy == 'userName') {
            if (this.selectedFromDate == null || this.selectedFromDate == '' || this.selectedToDate == null || this.selectedToDate == '') {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Mandatory Field",
                    text: "From Date & To Date Is Mandatory Fields",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
        }
        this.searchLrHistoryRptDto.fromDate = this.selectedFromDate;
        this.searchLrHistoryRptDto.toDate = this.selectedToDate;
        if (this.selectedSearchBy == 'lrNo') {
            if (this.enteredLrNumber != null && this.enteredLrNumber != '') {
                this.searchLrHistoryRptDto.lrNumber = this.enteredLrNumber;
                // this.showLRNumberInPrint="Lr Number"+ this.enteredLrNumber;
                this.searchLrHistoryRptDto.reportMode = 'LR';
                if (this.selectedMode != null && this.selectedMode != '' && this.selectedMode != 'All') {
                    this.searchLrHistoryRptDto.mode = this.selectedMode;
                }
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "Please Enter Lr Number",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
        }
        else if (this.selectedSearchBy == 'dateWise') {
            this.searchLrHistoryRptDto.reportMode = 'Date';
            // this.showFromDateInPrint="From Date : "+ moment($("#fromDate").val()).format('DD-MM-YYYY');
            //this.showToDateInPrint=" - To Date : " +  moment($("#toDate").val()).format('DD-MM-YYYY');
            if (this.selectedMode != null && this.selectedMode != '' && this.selectedMode != 'All') {
                this.searchLrHistoryRptDto.mode = this.selectedMode;
            }
        }
        else if (this.selectedSearchBy == 'userName') {
            if (this.selectedDestination != null && this.selectedDestination != '' && this.selectedUserName != 'null' && this.selectedUserName != '') {
                this.searchLrHistoryRptDto.reportMode = 'User';
                this.searchLrHistoryRptDto.userName = this.selectedUserName;
                //this.showUserNameInPrint="User Name" +  this.selectedUserName;
                if (this.selectedMode != null && this.selectedMode != '' && this.selectedMode != 'All') {
                    this.searchLrHistoryRptDto.mode = this.selectedMode;
                }
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "Please Select the User",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                return false;
            }
        }
        this.searchMethodGetDetails();
    };
    LrHistoryReportComponent.prototype.clearMethod = function () {
        $("#lrHistoryRpt").DataTable().destroy();
        this.lrHistoryRptDataList = [];
        this.fromDateModel = null;
        this.toDateModel = null;
        this.dtTriggerLrHistoryRpt.next();
        this.searchLrHistoryRptDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        $("#fromDate").val('');
        $("#toDate").val('');
        $("#destination").val('');
        $("#userName").val('');
        $("#searchBy").val('lrNo');
        $("#lrNumber").val('');
        $("#mode").val('');
        this.selectedFromDate = '';
        this.selectedToDate = '';
        this.selectedDestination = '';
        this.selectedSearchBy = '';
        this.selectedMode = '';
        this.showSpinnerForAction = false;
        this.searchByDateWise = false;
        this.searchByUserName = false;
        this.searchByLrNo = true;
        this.enteredLrNumber = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LrHistoryReportComponent.prototype, "dtElements", void 0);
    LrHistoryReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lr-history-report',
            template: __webpack_require__(/*! ./lr-history-report.component.html */ "./src/app/report/lr-report/lr-history-report/lr-history-report.component.html"),
            styles: [__webpack_require__(/*! ./lr-history-report.component.css */ "./src/app/report/lr-report/lr-history-report/lr-history-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_12__["MemoReport"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__["MasterReadService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_13__["LrReportService"]])
    ], LrHistoryReportComponent);
    return LrHistoryReportComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/lr-issue-report/lr-issue-report.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/report/lr-report/lr-issue-report/lr-issue-report.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9sci1yZXBvcnQvbHItaXNzdWUtcmVwb3J0L2xyLWlzc3VlLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/lr-report/lr-issue-report/lr-issue-report.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/report/lr-report/lr-issue-report/lr-issue-report.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">LR Issue Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"agent\" #agent placeholder=\"Select Agent\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" [formControl]=\"controlMainSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSource=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(agentDetailsSourceOptions | filterAgentSorce: controlMainSource.value) as resultSource\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.subStation\"> {{\n\t\t\t\t\t\t\t\t\t\t\toption.subStation }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultSource.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" placeholder=\"dd-mm-yyyy\" name=\"fromDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"dd-mm-yyyy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDate\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"validateBtnSearch()\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t(click)=\"clearAll()\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Lr Issue Report</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsIssueReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerIssueReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Agent Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Issue Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR From</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR To</th>\n\t\t\t\t\t\t\t\t\t\t<th>No.Of LRs</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let issueReportData of issueReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ issueReportData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ issueReportData.dateInDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ issueReportData.fromLrNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ issueReportData.toLrNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ issueReportData.noOfLrs }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\">Total</td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/lr-report/lr-issue-report/lr-issue-report.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/report/lr-report/lr-issue-report/lr-issue-report.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LrIssueReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrIssueReportComponent", function() { return LrIssueReportComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*for popup*/ 
//for datepicker ends
//for datepicker starts

//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter starts

//for the select option with filter ends
var my = new Date();
//for datepicker ends

//for the select option with filter ends





var LrIssueReportComponent = /** @class */ (function () {
    function LrIssueReportComponent(masterService, http, modalService, masterReadService, reportService, router) {
        var _this = this;
        this.masterService = masterService;
        this.http = http;
        this.modalService = modalService;
        this.masterReadService = masterReadService;
        this.reportService = reportService;
        this.router = router;
        //for datepicker ends
        this.loadingIndicator = true;
        this.isLoggedIn = true;
        //for datepicker ends
        this.srcForRpt = "Lr Issue Rpt Show Src All";
        //    onDestroyUnsubscribtionIssueReport: Subscription;
        this.controlMainSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.agentDto = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_11__["AgentDetailsDto"]();
        this.agentDtoAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_11__["AgentDetailsDto"]();
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.dtTriggerIssueReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.pageTitle = "LR Issue Report";
        this.getAgentList = function () {
            //        this.getAgentListDetails();
            _this.masterReadService.getSourceListDetails(_this.agentDto).subscribe(function (response) {
                if (response.length == 0) {
                    alert('No records found!');
                }
                else {
                    _this.agentDetailsSourceOptions = response;
                    _this.agentDtoAll.subStation = "ALL";
                    _this.agentDetailsSourceOptions.push(_this.agentDtoAll);
                    //                    if ( this.srcForRpt == 'Lr Issue Rpt Show Src All' ) {
                    //                        this.agentDetailsSourceOptions = response;
                    //                        this.agentDtoAll.subStation = "ALL";
                    //                        this.agentDetailsSourceOptions.push( this.agentDtoAll );
                    //                    } else if ( this.srcForRpt == 'Lr Issue Rpt Show Src Specific' ) {
                    //                        this.agentDetailsSourceOptions = response;
                    //                        this.agentDtoAll.subStation = "ALL";
                    //                        this.agentDetailsSourceOptions.push( this.agentDtoAll );
                    //                    } else {
                    //                        this.agentDetailsSourceOptions = response;
                    //                        this.agentDtoAll.subStation = "ALL";
                    //                        this.agentDetailsSourceOptions.push( this.agentDtoAll );
                    //                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.gridReconfigure = function () {
            _this.getSearchMethod();
            //        box.show();
            //        store.removeAll();
            _this.reportService.getLRIssueReport(_this.lrDto).subscribe(function (response) {
                if (response) {
                    //                    console.log( response );
                    _this.issueReportDataList = response;
                    _this.dtTriggerIssueReport.next();
                    //                    console.log( this.issueReportDataList );
                }
            }), function (error) { return swal({
                title: "Error",
                text: "Server Error While Getting Lr Issue Report Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            swal({
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
            this.lrissueDataMethod();
            if (this.srcForRpt == "Lr Issue Rpt Show Src All") {
                this.getAgentListDetails('SrcAll');
            }
            else {
                this.getAgentListDetails('specific');
            }
        }
    }
    LrIssueReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    LrIssueReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    LrIssueReportComponent.prototype.ngOnInit = function () {
    };
    LrIssueReportComponent.prototype.lrissueDataMethod = function () {
        this.dtOptionsIssueReport = {
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
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    title: this.changeDataTableTitile(),
                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: this.changeDataTableTitile(),
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
                    .column(4)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(4).footer()).html(total);
            }
        };
    };
    LrIssueReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerIssueReport.unsubscribe();
        //        this.onDestroyUnsubscribtionIssueReport.unsubscribe();
    };
    LrIssueReportComponent.prototype.changeDataTableTitile = function () {
        return '<table><tr style="width:100%"><td style="width:60%"><img src="assets/images/srdLogisticPrintLogo.png"></td>'
            + '<td style="width:40%"><p>' + this.userDataDtoReturnSession.addressId
            + '</p></td></tr></table>';
    };
    LrIssueReportComponent.prototype.chnageDataTableMessageTop = function () {
        this.selectedFromDatePrint = $("#fromDate").val();
        this.selectedToDatePrint = $("#toDate").val();
        return '<span>'
            + '<div style="text-align:center;">'
            + '<h5 style="border-bottom:1px solid;display:inline-block;"><span style="font-weight:bold">' + this.pageTitle + '</span></h5>'
            + '<h6 style="font-weight:bold;">'
            + "From : " + '<span style="font-weight:400;">' + this.selectedFromDatePrint + '</span>'
            + "To : " + '<span style="font-weight:400;">' + this.selectedToDatePrint + '</span>'
            + '</h6>'
            + '</div>'
            + '</span>';
    };
    LrIssueReportComponent.prototype.chnageDataTableMessageTopExcel = function () {
        this.selectedFromDatePrint = $("#fromDate").val();
        this.selectedToDatePrint = $("#toDate").val();
        return "From: "
            + this.selectedFromDatePrint
            + "           "
            + "To: "
            + this.selectedToDatePrint;
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    LrIssueReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    LrIssueReportComponent.prototype.getAgentListDetails = function (string) {
        this.agentDto.companyId = this.userDataDtoReturnSession.companyId;
        this.agentDto.column2 = "Working";
        if (string == "SrcAll") {
            this.agentDto.mode = "Sub";
            this.agentDto.status = "All";
        }
        else {
            this.agentDto.mode = "mainBranch";
            if (this.srcForRpt == 'Lr Issue Rpt Show Src Specific') {
                this.agentDto.mainStation = this.userDataDtoReturnSession.mainStation;
            }
            else {
                this.agentDto.mainStation = this.userDataDtoReturnSession.mainAdminStation;
            }
        }
        this.getAgentList();
    };
    LrIssueReportComponent.prototype.validateBtnSearch = function () {
        this.gridReconfigure();
    };
    LrIssueReportComponent.prototype.getSearchMethod = function () {
        this.selectedAgent = $("#agent").val();
        this.lrissueDataMethod();
        //        this.selectedFromDatePrint = '01-01-2020';
        //        this.selectedToDatePrint = '01-20-2020';
        this.selectedFromDatePrint = $("#fromDate").val();
        this.selectedToDatePrint = $("#toDate").val();
        this.lrissueDataMethod();
        if (this.selectedAgent != null
            && this.selectedAgent == "ALL") {
            this.lrDto.mode = "ALL";
        }
        else {
            this.lrDto.mode = "SPECIFIC";
        }
        if (this.srcForRpt != 'Lr Issue Rpt Show Src All') {
            if (this.srcForRpt == 'Lr Issue Rpt Show Src Specific') {
                this.lrDto.mainstation = this.userDataDtoReturnSession.mainStation;
                //                console.log( this.agentDto.mainStation );
            }
            else {
                this.lrDto.mainstation = this.userDataDtoReturnSession.mainAdminStation;
            }
        }
        this.lrDto.agentName = this.selectedAgent;
        this.lrDto.fromDate = '2019-01-01';
        this.lrDto.toDate = '2019-06-01';
        //        this.selectedFromDate = $( "#fromDate" ).val();
        //        this.selectedToDate = $( "#toDate" ).val();
        //        this.lrDto.fromDate =   this.datePipe .transfrom(this.selectedFromDate,"yyyy-mm-dd");
        //        this.lrDto.toDate = this.datePipe .transfrom(this.selectedToDate,"yyyy-mm-dd");
        //        this.lrDto.fromDate = this.selectedFromDate;
        //        this.lrDto.toDate = this.selectedToDate;
        //        console.log( 'from ' + this.lrDto.fromDate );
        //        console.log( 'to' + this.lrDto.toDate );
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        //        listDto.clear();
    };
    LrIssueReportComponent.prototype.clearAll = function () {
        $('input[type="text"],[type="number"]').val('');
        this.issueReportDataList = null;
        this.controlMainSource.reset();
        $("#fromDate").val('');
        $("#toDate").val('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], LrIssueReportComponent.prototype, "dtElements", void 0);
    LrIssueReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lr-issue-report',
            template: __webpack_require__(/*! ./lr-issue-report.component.html */ "./src/app/report/lr-report/lr-issue-report/lr-issue-report.component.html"),
            styles: [__webpack_require__(/*! ./lr-issue-report.component.css */ "./src/app/report/lr-report/lr-issue-report/lr-issue-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"], _angular_http__WEBPACK_IMPORTED_MODULE_9__["Http"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModal"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_7__["MasterReadService"], src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_8__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], LrIssueReportComponent);
    return LrIssueReportComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/lr-performance-report/lr-performance-report.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/report/lr-report/lr-performance-report/lr-performance-report.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9sci1yZXBvcnQvbHItcGVyZm9ybWFuY2UtcmVwb3J0L2xyLXBlcmZvcm1hbmNlLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/lr-report/lr-performance-report/lr-performance-report.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/report/lr-report/lr-performance-report/lr-performance-report.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Lr Performance Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"partyName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Party Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Party Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"one\">A A Traders</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"two\">A 1 Motor</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"three\">A B Logistics</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLrPerformanceReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLrPerformanceReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>L.R.NO</th>\n\t\t\t\t\t\t\t\t\t\t<th>Memo NO</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>CNSGNE NAME</th>\n\t\t\t\t\t\t\t\t\t\t<th>CNSGNR NAME</th>\n\t\t\t\t\t\t\t\t\t\t<th>ART</th>\n\t\t\t\t\t\t\t\t\t\t<th>HAMALI GD</th>\n\t\t\t\t\t\t\t\t\t\t<th>HAMALI DD</th>\n\t\t\t\t\t\t\t\t\t\t<th>AC. WT</th>\n\t\t\t\t\t\t\t\t\t\t<th>CH. WT</th>\n\t\t\t\t\t\t\t\t\t\t<th>BKNG DT</th>\n\t\t\t\t\t\t\t\t\t\t<th>LDNG DT</th>\n\t\t\t\t\t\t\t\t\t\t<th>UNLDNG DT</th>\n\t\t\t\t\t\t\t\t\t\t<th>DISP W.IN</th>\n\t\t\t\t\t\t\t\t\t\t<th>ARR W.IN</th>\n\t\t\t\t\t\t\t\t\t\t<th>DELV W.IN</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let lrPerformanceReportData of lrPerformanceReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.lrNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.memoNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.art }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.hamaliGd }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.hamaliDd }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.acWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.chWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.bkngDt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.ldngDt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.unldngDt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.dispWIn }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.arrWIn }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrPerformanceReportData.delvWIn }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/lr-report/lr-performance-report/lr-performance-report.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/report/lr-report/lr-performance-report/lr-performance-report.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LrPerformanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrPerformanceReportComponent", function() { return LrPerformanceReportComponent; });
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


var LrPerformanceReportComponent = /** @class */ (function () {
    function LrPerformanceReportComponent(lrPerformanceReport) {
        this.lrPerformanceReport = lrPerformanceReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerLrPerformanceReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LrPerformanceReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    LrPerformanceReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsLrPerformanceReport = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'L.R.NO',
                    data: 'lrNo'
                },
                {
                    title: 'Memo NO',
                    data: 'memoNo'
                },
                {
                    title: 'Source',
                    data: 'source'
                }, {
                    title: 'CNSGNE NAME',
                    data: 'consigneeName'
                },
                {
                    title: 'CNSGNR NAME',
                    data: 'consignorName'
                },
                {
                    title: 'ART',
                    data: 'art'
                }, {
                    title: 'HAMALI GD',
                    data: 'hamaliGd'
                },
                {
                    title: 'HAMALI DD',
                    data: 'hamaliDd'
                },
                {
                    title: 'AC. WT',
                    data: 'acWt'
                }, {
                    title: 'CH. WT',
                    data: 'chWt'
                },
                {
                    title: 'BKNG DT',
                    data: 'bkngDt'
                },
                {
                    title: 'LDNG DT',
                    data: 'ldngDt'
                },
                {
                    title: 'UNLDNG DT',
                    data: 'unldngDt'
                }, {
                    title: 'DISP W.IN',
                    data: 'dispWIn'
                },
                {
                    title: 'ARR W.IN',
                    data: 'arrWIn'
                },
                {
                    title: 'DELV W.IN',
                    data: 'delvWIn'
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
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerLorryHireBalance.next();
        //                } );
        this.getDataFrmServiceFrLrPerformanceReportTable = this.lrPerformanceReport.getSummaryData();
        this.onDestroyUnsubscribtionLrPerformanceReport = this.getDataFrmServiceFrLrPerformanceReportTable.subscribe(function (data) {
            _this.lrPerformanceReportDataList = data['data'];
            _this.dtTriggerLrPerformanceReport.next();
        });
        //the below code is for the getting data through json ends
    };
    LrPerformanceReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLrPerformanceReport.unsubscribe();
        this.onDestroyUnsubscribtionLrPerformanceReport.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    LrPerformanceReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LrPerformanceReportComponent.prototype, "dtElements", void 0);
    LrPerformanceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lr-performance-report',
            template: __webpack_require__(/*! ./lr-performance-report.component.html */ "./src/app/report/lr-report/lr-performance-report/lr-performance-report.component.html"),
            styles: [__webpack_require__(/*! ./lr-performance-report.component.css */ "./src/app/report/lr-report/lr-performance-report/lr-performance-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], LrPerformanceReportComponent);
    return LrPerformanceReportComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/lr-report.module.ts":
/*!******************************************************!*\
  !*** ./src/app/report/lr-report/lr-report.module.ts ***!
  \******************************************************/
/*! exports provided: LrReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrReportModule", function() { return LrReportModule; });
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
/* harmony import */ var src_app_report_lr_report_lr_report_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/lr-report/lr-report.routing */ "./src/app/report/lr-report/lr-report.routing.ts");
/* harmony import */ var src_app_report_lr_report_issue_balance_issue_balance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/lr-report/issue-balance/issue-balance.component */ "./src/app/report/lr-report/issue-balance/issue-balance.component.ts");
/* harmony import */ var src_app_report_lr_report_lr_issue_report_lr_issue_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/lr-report/lr-issue-report/lr-issue-report.component */ "./src/app/report/lr-report/lr-issue-report/lr-issue-report.component.ts");
/* harmony import */ var src_app_report_lr_report_challan_issue_challan_issue_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/lr-report/challan-issue/challan-issue.component */ "./src/app/report/lr-report/challan-issue/challan-issue.component.ts");
/* harmony import */ var src_app_report_lr_report_short_and_extra_short_and_extra_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/report/lr-report/short-and-extra/short-and-extra.component */ "./src/app/report/lr-report/short-and-extra/short-and-extra.component.ts");
/* harmony import */ var src_app_report_lr_report_lr_dispatch_booking_report_lr_dispatch_booking_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/report/lr-report/lr-dispatch-booking-report/lr-dispatch-booking-report.component */ "./src/app/report/lr-report/lr-dispatch-booking-report/lr-dispatch-booking-report.component.ts");
/* harmony import */ var src_app_report_lr_report_automated_search_automated_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/report/lr-report/automated-search/automated-search.component */ "./src/app/report/lr-report/automated-search/automated-search.component.ts");
/* harmony import */ var src_app_report_lr_report_short_and_extra_conflict_short_and_extra_conflict_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/report/lr-report/short-and-extra-conflict/short-and-extra-conflict.component */ "./src/app/report/lr-report/short-and-extra-conflict/short-and-extra-conflict.component.ts");
/* harmony import */ var src_app_report_lr_report_lr_history_report_lr_history_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/report/lr-report/lr-history-report/lr-history-report.component */ "./src/app/report/lr-report/lr-history-report/lr-history-report.component.ts");
/* harmony import */ var src_app_report_lr_report_lorry_hire_statement_lorry_hire_statement_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/report/lr-report/lorry-hire-statement/lorry-hire-statement.component */ "./src/app/report/lr-report/lorry-hire-statement/lorry-hire-statement.component.ts");
/* harmony import */ var src_app_report_lr_report_delayed_e_sugam_delayed_e_sugam_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/report/lr-report/delayed-e-sugam/delayed-e-sugam.component */ "./src/app/report/lr-report/delayed-e-sugam/delayed-e-sugam.component.ts");
/* harmony import */ var src_app_report_lr_report_lorry_hire_balance_lorry_hire_balance_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/report/lr-report/lorry-hire-balance/lorry-hire-balance.component */ "./src/app/report/lr-report/lorry-hire-balance/lorry-hire-balance.component.ts");
/* harmony import */ var src_app_report_lr_report_lr_performance_report_lr_performance_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/report/lr-report/lr-performance-report/lr-performance-report.component */ "./src/app/report/lr-report/lr-performance-report/lr-performance-report.component.ts");
/* harmony import */ var src_app_report_lr_report_lr_rpt_lr_rpt_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/report/lr-report/lr-rpt/lr-rpt.component */ "./src/app/report/lr-report/lr-rpt/lr-rpt.component.ts");
/* harmony import */ var src_app_report_lr_report_gc_not_received_report_gc_not_received_report_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/report/lr-report/gc-not-received-report/gc-not-received-report.component */ "./src/app/report/lr-report/gc-not-received-report/gc-not-received-report.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_report_lr_report_lorry_hire_balance_rpt_print_lorry_hire_balance_rpt_print_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/report/lr-report/lorry-hire-balance-rpt-print/lorry-hire-balance-rpt-print.component */ "./src/app/report/lr-report/lorry-hire-balance-rpt-print/lorry-hire-balance-rpt-print.component.ts");
/* harmony import */ var src_app_report_cashmemo_report_cashmemo_report_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/report/cashmemo-report/cashmemo-report.module */ "./src/app/report/cashmemo-report/cashmemo-report.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends



















var LrReportModule = /** @class */ (function () {
    function LrReportModule() {
    }
    LrReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_lr_report_lr_report_routing__WEBPACK_IMPORTED_MODULE_10__["LrReportRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_25__["MaterialModule"], src_app_report_cashmemo_report_cashmemo_report_module__WEBPACK_IMPORTED_MODULE_27__["CashmemoReportModule"]],
            declarations: [
                src_app_report_lr_report_issue_balance_issue_balance_component__WEBPACK_IMPORTED_MODULE_11__["IssueBalanceComponent"],
                src_app_report_lr_report_lr_issue_report_lr_issue_report_component__WEBPACK_IMPORTED_MODULE_12__["LrIssueReportComponent"],
                src_app_report_lr_report_challan_issue_challan_issue_component__WEBPACK_IMPORTED_MODULE_13__["ChallanIssueComponent"],
                src_app_report_lr_report_short_and_extra_short_and_extra_component__WEBPACK_IMPORTED_MODULE_14__["ShortAndExtraComponent"],
                src_app_report_lr_report_lr_dispatch_booking_report_lr_dispatch_booking_report_component__WEBPACK_IMPORTED_MODULE_15__["LrDispatchBookingReportComponent"],
                src_app_report_lr_report_automated_search_automated_search_component__WEBPACK_IMPORTED_MODULE_16__["AutomatedSearchComponent"],
                src_app_report_lr_report_short_and_extra_conflict_short_and_extra_conflict_component__WEBPACK_IMPORTED_MODULE_17__["ShortAndExtraConflictComponent"],
                src_app_report_lr_report_lr_history_report_lr_history_report_component__WEBPACK_IMPORTED_MODULE_18__["LrHistoryReportComponent"],
                src_app_report_lr_report_lorry_hire_statement_lorry_hire_statement_component__WEBPACK_IMPORTED_MODULE_19__["LorryHireStatementComponent"],
                src_app_report_lr_report_delayed_e_sugam_delayed_e_sugam_component__WEBPACK_IMPORTED_MODULE_20__["DelayedESugamComponent"],
                src_app_report_lr_report_lorry_hire_balance_lorry_hire_balance_component__WEBPACK_IMPORTED_MODULE_21__["LorryHireBalanceComponent"],
                src_app_report_lr_report_lr_performance_report_lr_performance_report_component__WEBPACK_IMPORTED_MODULE_22__["LrPerformanceReportComponent"],
                src_app_report_lr_report_lr_rpt_lr_rpt_component__WEBPACK_IMPORTED_MODULE_23__["LrRptComponent"],
                src_app_report_lr_report_gc_not_received_report_gc_not_received_report_component__WEBPACK_IMPORTED_MODULE_24__["GcNotReceivedReportComponent"],
                src_app_report_lr_report_lorry_hire_balance_rpt_print_lorry_hire_balance_rpt_print_component__WEBPACK_IMPORTED_MODULE_26__["LorryHireBalanceReportPrintComponent"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
            ],
            exports: [src_app_report_lr_report_gc_not_received_report_gc_not_received_report_component__WEBPACK_IMPORTED_MODULE_24__["GcNotReceivedReportComponent"], src_app_report_lr_report_lorry_hire_balance_rpt_print_lorry_hire_balance_rpt_print_component__WEBPACK_IMPORTED_MODULE_26__["LorryHireBalanceReportPrintComponent"]]
        })
    ], LrReportModule);
    return LrReportModule;
}());



/***/ }),

/***/ "./src/app/report/lr-report/lr-report.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/report/lr-report/lr-report.routing.ts ***!
  \*******************************************************/
/*! exports provided: LrReportRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrReportRoutes", function() { return LrReportRoutes; });
/* harmony import */ var src_app_report_lr_report_issue_balance_issue_balance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/report/lr-report/issue-balance/issue-balance.component */ "./src/app/report/lr-report/issue-balance/issue-balance.component.ts");
/* harmony import */ var src_app_report_lr_report_lr_issue_report_lr_issue_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report/lr-report/lr-issue-report/lr-issue-report.component */ "./src/app/report/lr-report/lr-issue-report/lr-issue-report.component.ts");
/* harmony import */ var src_app_report_lr_report_challan_issue_challan_issue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/report/lr-report/challan-issue/challan-issue.component */ "./src/app/report/lr-report/challan-issue/challan-issue.component.ts");
/* harmony import */ var src_app_report_lr_report_short_and_extra_short_and_extra_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/report/lr-report/short-and-extra/short-and-extra.component */ "./src/app/report/lr-report/short-and-extra/short-and-extra.component.ts");
/* harmony import */ var src_app_report_lr_report_lr_dispatch_booking_report_lr_dispatch_booking_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/report/lr-report/lr-dispatch-booking-report/lr-dispatch-booking-report.component */ "./src/app/report/lr-report/lr-dispatch-booking-report/lr-dispatch-booking-report.component.ts");
/* harmony import */ var src_app_report_lr_report_automated_search_automated_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/report/lr-report/automated-search/automated-search.component */ "./src/app/report/lr-report/automated-search/automated-search.component.ts");
/* harmony import */ var src_app_report_lr_report_short_and_extra_conflict_short_and_extra_conflict_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/report/lr-report/short-and-extra-conflict/short-and-extra-conflict.component */ "./src/app/report/lr-report/short-and-extra-conflict/short-and-extra-conflict.component.ts");
/* harmony import */ var src_app_report_lr_report_lr_history_report_lr_history_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/report/lr-report/lr-history-report/lr-history-report.component */ "./src/app/report/lr-report/lr-history-report/lr-history-report.component.ts");
/* harmony import */ var src_app_report_lr_report_lorry_hire_statement_lorry_hire_statement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/report/lr-report/lorry-hire-statement/lorry-hire-statement.component */ "./src/app/report/lr-report/lorry-hire-statement/lorry-hire-statement.component.ts");
/* harmony import */ var src_app_report_lr_report_delayed_e_sugam_delayed_e_sugam_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/report/lr-report/delayed-e-sugam/delayed-e-sugam.component */ "./src/app/report/lr-report/delayed-e-sugam/delayed-e-sugam.component.ts");
/* harmony import */ var src_app_report_lr_report_lorry_hire_balance_lorry_hire_balance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/lr-report/lorry-hire-balance/lorry-hire-balance.component */ "./src/app/report/lr-report/lorry-hire-balance/lorry-hire-balance.component.ts");
/* harmony import */ var src_app_report_lr_report_lr_performance_report_lr_performance_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/lr-report/lr-performance-report/lr-performance-report.component */ "./src/app/report/lr-report/lr-performance-report/lr-performance-report.component.ts");
/* harmony import */ var src_app_report_lr_report_lr_rpt_lr_rpt_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/lr-report/lr-rpt/lr-rpt.component */ "./src/app/report/lr-report/lr-rpt/lr-rpt.component.ts");
/* harmony import */ var src_app_report_lr_report_gc_not_received_report_gc_not_received_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/lr-report/gc-not-received-report/gc-not-received-report.component */ "./src/app/report/lr-report/gc-not-received-report/gc-not-received-report.component.ts");
/* harmony import */ var src_app_report_lr_report_lorry_hire_balance_rpt_print_lorry_hire_balance_rpt_print_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/report/lr-report/lorry-hire-balance-rpt-print/lorry-hire-balance-rpt-print.component */ "./src/app/report/lr-report/lorry-hire-balance-rpt-print/lorry-hire-balance-rpt-print.component.ts");















var LrReportRoutes = [
    {
        path: '',
        children: [
            {
                path: 'issueBalance',
                component: src_app_report_lr_report_issue_balance_issue_balance_component__WEBPACK_IMPORTED_MODULE_0__["IssueBalanceComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'lrIssueReport',
                component: src_app_report_lr_report_lr_issue_report_lr_issue_report_component__WEBPACK_IMPORTED_MODULE_1__["LrIssueReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'challanIssueReport',
                component: src_app_report_lr_report_challan_issue_challan_issue_component__WEBPACK_IMPORTED_MODULE_2__["ChallanIssueComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'shortAndExtraReport',
                component: src_app_report_lr_report_short_and_extra_short_and_extra_component__WEBPACK_IMPORTED_MODULE_3__["ShortAndExtraComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'lrDispatchBookingReport',
                component: src_app_report_lr_report_lr_dispatch_booking_report_lr_dispatch_booking_report_component__WEBPACK_IMPORTED_MODULE_4__["LrDispatchBookingReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'automatedSearch',
                component: src_app_report_lr_report_automated_search_automated_search_component__WEBPACK_IMPORTED_MODULE_5__["AutomatedSearchComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'shortAndExtraConflict',
                component: src_app_report_lr_report_short_and_extra_conflict_short_and_extra_conflict_component__WEBPACK_IMPORTED_MODULE_6__["ShortAndExtraConflictComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'lrHistoryReport',
                component: src_app_report_lr_report_lr_history_report_lr_history_report_component__WEBPACK_IMPORTED_MODULE_7__["LrHistoryReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'lorryHireStatement',
                component: src_app_report_lr_report_lorry_hire_statement_lorry_hire_statement_component__WEBPACK_IMPORTED_MODULE_8__["LorryHireStatementComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'delayedESugam',
                component: src_app_report_lr_report_delayed_e_sugam_delayed_e_sugam_component__WEBPACK_IMPORTED_MODULE_9__["DelayedESugamComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'lorryHireBalance',
                component: src_app_report_lr_report_lorry_hire_balance_lorry_hire_balance_component__WEBPACK_IMPORTED_MODULE_10__["LorryHireBalanceComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'lrPerformanceReport',
                component: src_app_report_lr_report_lr_performance_report_lr_performance_report_component__WEBPACK_IMPORTED_MODULE_11__["LrPerformanceReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'lrRpt',
                component: src_app_report_lr_report_lr_rpt_lr_rpt_component__WEBPACK_IMPORTED_MODULE_12__["LrRptComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'gcNotReceivedReport',
                component: src_app_report_lr_report_gc_not_received_report_gc_not_received_report_component__WEBPACK_IMPORTED_MODULE_13__["GcNotReceivedReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'LorryHireBalanceReportPrint',
                component: src_app_report_lr_report_lorry_hire_balance_rpt_print_lorry_hire_balance_rpt_print_component__WEBPACK_IMPORTED_MODULE_14__["LorryHireBalanceReportPrintComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/report/lr-report/lr-rpt/lr-rpt.component.css":
/*!**************************************************************!*\
  !*** ./src/app/report/lr-report/lr-rpt/lr-rpt.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n  top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2xyLXJlcG9ydC9sci1ycHQvbHItcnB0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0lBQ1AsVUFBVTtDQUNiLGtCQUFrQjtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvbHItcmVwb3J0L2xyLXJwdC9sci1ycHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvdyB7XHJcbiAgdG9wOjI2cHg7XHJcbiAgICBsZWZ0OjI1cHg7XHJcblx0bWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/report/lr-report/lr-rpt/lr-rpt.component.html":
/*!***************************************************************!*\
  !*** ./src/app/report/lr-report/lr-rpt/lr-rpt.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">LR Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewBy\" #viewBy (change)=\"viewByMode(viewBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"sourceView\">Source View</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"consigneeView\">Consignee View</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"consignorView\">Consignor View</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input id=\"fromDate\"[(ngModel)]=\"fromDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"fromDates\" ngbDatepicker #fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewDateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"[(ngModel)]=\"toDateModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSource\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"source\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSource\" [ngbTypeahead]=\"searchSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source\" />\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showDest\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"destination\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"consigneeDestListener($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewConsigneeWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consigneeGstNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee GST No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeGSTNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getConsigneeGstNumber($event)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consigneeGSTNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter Consignee GST Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewConsigneeWise\" class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consigneeName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsignee($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewConsignorWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consignorGstNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignor GST No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consignorGSTNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter Consignor GST Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getConsignorGstNumber($event)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"consignorGSTNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewConsignorWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignor Index</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consignorIndex id=\"consignorIndex\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consignorIndex\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignor Index\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"consignorDropDownListner($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consignorIndexSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsignorIndexTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceConsignorIndex)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceConsignorIndex=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewConsignorWise\" class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignor Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consignorName id=\"consignorName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consignorName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignor Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsignorName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consignorNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsignor($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsignorName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsignorName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsignorNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"searchMethod()\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearMethod()\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">LR Report</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"lrRptTable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLrReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLrReport\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Agent Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Base Freight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Hamali</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>AOC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lc Charge</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Bc Charge</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Insurance</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Gc Charges</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Others</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DD Amt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>F O V</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Book Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let lrReportData of lrReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.baseFreight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.hamali }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.aoc }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.lcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.bcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.insurance }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.gcCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.others }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.ddAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.riskCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.goodsValue }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrReportData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/lr-report/lr-rpt/lr-rpt.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/report/lr-report/lr-rpt/lr-rpt.component.ts ***!
  \*************************************************************/
/*! exports provided: LrRptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrRptComponent", function() { return LrRptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dto/RateMaster-dto */ "./src/app/dto/RateMaster-dto.ts");
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
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

















var LrRptComponent = /** @class */ (function () {
    function LrRptComponent(memoLessRpt, router, memoReport, masterReadService, modalService, lrReportService) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.memoReport = memoReport;
        this.masterReadService = masterReadService;
        this.modalService = modalService;
        this.lrReportService = lrReportService;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        ////
        this.showSpinnerForAction = false;
        this.viewDateWise = true;
        this.showSource = false;
        this.showDest = false;
        this.viewConsigneeWise = false;
        this.viewConsignorWise = false;
        this.isDestView = false;
        this.isSourceView = false;
        this.isSourceBkgView = false;
        this.isLoggedIn = true;
        this.consignorIndexOptions = [
            { id: 2, label: 'A' },
            { id: 2, label: 'B' },
            { id: 3, label: 'C' },
            { id: 4, label: 'D' },
            { id: 5, label: 'E' },
            { id: 6, label: 'F' },
            { id: 7, label: 'G' },
            { id: 8, label: 'H' },
            { id: 9, label: 'I' },
            { id: 10, label: 'J' },
            { id: 11, label: 'K' },
            { id: 12, label: 'L' },
            { id: 13, label: 'M' },
            { id: 14, label: 'M' },
            { id: 15, label: 'O' },
            { id: 16, label: 'P' },
            { id: 17, label: 'Q' },
            { id: 18, label: 'R' },
            { id: 19, label: 'S' },
            { id: 20, label: 'T' },
            { id: 21, label: 'U' },
            { id: 22, label: 'V' },
            { id: 23, label: 'W' },
            { id: 24, label: 'X' },
            { id: 25, label: 'Y' },
            { id: 26, label: 'Z' }
        ];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.partyMasterDtoForconsignor = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.sourceBkgOfficeAndAgent = 'List of Source Booking and Agent';
        this.showSourceList = 'Show Source List';
        this.showDestinationList = 'Show Destination List';
        this.searchLetterHeadRateDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_14__["RateMasterDto"]();
        this.returnLrSetRateDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_14__["RateMasterDto"]();
        this.consignorIndexTA = [];
        this.focusConsignorIndexTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.consignorIndexSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsignorIndexTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.consignorIndexTA
                : _this.consignorIndexTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        //for ConsignorName
        this.consignorNamePartyDtoAllOption = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.consignorNameTA = [];
        this.focusConsignorNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.consignorNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsignorNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.consignorNameTA
                : _this.consignorNameTA.filter(function (v) { return v.consignorName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsignorName = function (x) { return x.consignorName; };
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
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
        this.lrDtoSource = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_15__["AgentDetailsDto"]();
        this.lrDtoSourceAllOption = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_15__["AgentDetailsDto"]();
        this.sourceTA = [];
        this.focusSourceTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchSource = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) { return (term === '' ? _this.sourceTA
                : _this.sourceTA.filter(function (v) { return v.subStation.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSource = function (x) { return x.subStation; };
        this.srcList = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_15__["AgentDetailsDto"]();
        ///
        this.sourceAgentDto = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_15__["AgentDetailsDto"]();
        this.sourceAgentDtoAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_15__["AgentDetailsDto"]();
        this.searchLrRptDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.agentDtoSourceAllOption = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_15__["AgentDetailsDto"]();
        this.agentDtoSourceAddOption = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_15__["AgentDetailsDto"]();
        this.setSource = [];
        this.dtTriggerLrReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getConsigneeDetails = function (destShow) {
            _this.getConsigneeDetailsList(destShow);
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
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
                    if (_this.selectedViewBy == 'consigneeView') {
                        $("#consigneeGSTNumber").focus();
                    }
                    if (_this.selectedViewBy == 'consignorView') {
                        $("#consignorGSTNumber").focus();
                    }
                    console.log(_this.consigneeNameTA);
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the consignee details", "info");
            }, function () { return console.log('done'); };
        };
        this.getConsignorDetails = function () {
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsignorMaster(_this.partyMasterDtoForconsignor).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "No Consignor Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.consignorNameOptions = [];
                    _this.consignorNameTA = [];
                }
                else {
                    _this.consignorNameOptions = response;
                    _this.consignorNameTA = [];
                    $("#consignorName").val('');
                    _this.consignorNamePartyDtoAllOption.consignorName = "All";
                    _this.consignorNameTA.push(_this.consignorNamePartyDtoAllOption);
                    for (var i = 0; i < _this.consignorNameOptions.length; i++) {
                        _this.consignorNameTA.push(_this.consignorNameOptions[i]);
                    }
                    window.setTimeout(function () {
                        $("#consignorName").focus();
                    }, 100);
                    console.log(_this.consignorNameTA);
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the consignor details", "info");
            }, function () { return console.log('done'); };
        };
        this.getConsigneeDetailsWithGst = function () {
            _this.getConsigneeDetailsWithGstList();
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "No Consignee Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.consigneeNameOptions = [];
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                    _this.selectedConsigneeId = '';
                }
                else {
                    _this.consigneeNameOptions = response;
                    _this.consigneeNameTA = [];
                    $("#consigneeName").val('');
                    for (var i = 0; i < _this.consigneeNameOptions.length; i++) {
                        _this.consigneeNameTA.push(_this.consigneeNameOptions[i]);
                    }
                    $("#consigneeName").val(_this.consigneeNameOptions[0].consigneeName);
                    _this.selectedConsigneeId = _this.consigneeNameOptions[0].consigneeId;
                    console.log(_this.consigneeNameTA);
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the consignee details", "info");
            }, function () { return console.log('done'); };
        };
        this.getConsignorDetailsForGSTList = function () {
            _this.showSpinnerForAction = true;
            _this.masterReadService.getConsignorMaster(_this.partyMasterDtoForconsignor).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "No Consignor Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.consignorNameOptions = [];
                    _this.consignorNameTA = [];
                    $("#consignorName").val('');
                    _this.selectedConsignorId = '';
                }
                else {
                    _this.consignorNameOptions = response;
                    _this.consignorNameTA = [];
                    $("#consignorName").val('');
                    for (var i = 0; i < _this.consignorNameOptions.length; i++) {
                        _this.consignorNameTA.push(_this.consignorNameOptions[i]);
                    }
                    $("#consignorName").val(_this.consignorNameOptions[0].consignorName);
                    _this.selectedConsignorId = _this.consignorNameOptions[0].consignorId;
                    console.log(_this.consignorNameTA);
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the consignor details", "info");
            }, function () { return console.log('done'); };
        };
        this.getSourceMethod = function () {
            _this.masterReadService.getSourceListDetails(_this.sourceAgentDto).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Warning",
                        text: "No records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.sourceDetailsOptionsGet = response;
                    console.log(_this.sourceDetailsOptionsGet);
                    _this.sourceTA = [];
                    _this.sourceAgentDtoAll.subStation = "All";
                    _this.sourceTA.push(_this.sourceAgentDtoAll);
                    for (var i = 0; i < _this.sourceDetailsOptionsGet.length; i++) {
                        _this.sourceTA.push(_this.sourceDetailsOptionsGet[i]);
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.searchMethodGetDetails = function () {
            _this.showSpinnerForAction = true;
            console.log(_this.searchLrRptDto);
            _this.lrReportService.getLrDetailsForMultiplePrt(_this.searchLrRptDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#lrRptTable").DataTable().destroy();
                _this.lrReportDataList = [];
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
                    _this.lrReportDataList = response;
                    console.log(_this.lrReportDataList);
                }
                _this.dtTriggerLrReport.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the  details", "info");
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
            this.setConsginorIndex();
            this.getConsigneeDetails(false);
            //  console.log( this.userDataDtoReturnSession.stationList);
            // this.getSourceList();
            ///Rights for show List of Source Booking and Agent 
            //            if ( this.sourceBkgOfficeAndAgent == "List of Source Booking and Agent" ) {
            //                this.showDest = true;
            //   this.getSourceList();
            //            } 
            ///Rights for show Show Source List
            //            if ( this.showSourceList == "Show Source List" ) {
            //                this.showDest = true;
            //this.getSourceDetails();
            //} 
            ///Rights for show Show Dest List
            //            if ( this.showDestinationList == "Show Dest List" ) {
            //                this.showDest = true;
            //} 
            // console.log(this.userDataDtoReturnSession.sortedMapFeatures.Rights);
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                //    console.log(this.userDataDtoReturnSession.sortedMapFeatures.Rights);
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Source LrRptSupAdmin") {
                        this.isSourceView = true;
                        this.showSource = true;
                        this.getSourceDetails();
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Source LrRptBookAdmin") {
                        this.isSourceBkgView = true;
                        this.showSource = true;
                        this.getSourceList();
                    }
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Dest LrRptSupAdmin") {
                        this.isDestView = true;
                    }
                }
            }
            if (this.isDestView) {
                this.showDest = true;
                this.getDestinationDetails();
            }
            //Below code need to be commented
            /* this.showDest = true;
             this.isDestView = true;
             this.getDestinationDetails();
             this.isSourceBkgView = false;
             this.showSource = true;
            this.getSourceDetails();*/
            //this.isSourceBkgView = true;
            //this.showSource = true;
        }
    }
    LrRptComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    LrRptComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    LrRptComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsLrReport = {
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
                    //messageTop : "Memo Less Report : ",
                    messageTop: function () {
                        var returnVal = null;
                        if ($("#viewBy").val() == 'sourceView') {
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_17__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_17__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:25px;'><u>LR Report</u></strong><br>" +
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
                        }
                        else if ($("#viewBy").val() == 'consigneeView') {
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_17__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_17__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:25px;'><u>LR Report</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:40%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Consignee Name</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#consigneeName").val() + "</span><br>" +
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
                        else if ($("#viewBy").val() == 'consignorView') {
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_17__($("#fromDate").val()).format('DD-MM-YYYY') + "</span><br>" +
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
                                "<span style='font-size:15px;'>" + moment__WEBPACK_IMPORTED_MODULE_17__($("#toDate").val()).format('DD-MM-YYYY') + "</span><br>" +
                                "</td>" +
                                "</tr>" +
                                "</table>" +
                                "</td>" +
                                "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                "<strong style='font-size:25px;'><u>LR Report</u></strong><br>" +
                                "</td>" +
                                "<td align='left' style='width:40%;'>" +
                                "<table>" +
                                "<tr>" +
                                "<td width='8%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>Consignor Name</strong>" +
                                "</td>" +
                                "<td width='2%' style='text-align:left !important;'>" +
                                "<strong style='font-size:15px;'>:</strong>" +
                                "</td>" +
                                "<td width='32%' style='text-align:left !important;'>" +
                                "<span style='font-size:15px;'>" + $("#consignorName").val() + "</span><br>" +
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
                        if ($("#viewBy").val() == 'sourceView') {
                            return "Lr Report - " +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_17__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_17__($("#toDate").val()).format('DD-MM-YYYY') + "";
                        }
                        else if ($("#viewBy").val() == 'consigneeView') {
                            return "Lr Report - " +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_17__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_17__($("#toDate").val()).format('DD-MM-YYYY') + " Consignee Name : " + $("#consigneeName").val();
                        }
                        else if ($("#viewBy").val() == 'consignorView') {
                            return "Lr Report - " +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_17__($("#fromDate").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_17__($("#toDate").val()).format('DD-MM-YYYY') + " Consignor Name : " + $("#consignorName").val();
                        }
                    },
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
                var articles = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chargeWgt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var baseFreight = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var hamali = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var aoc = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var lcChg = api.column(10).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var bcChg = api.column(11).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var insurence = api.column(12).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var gcChg = api.column(13).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var others = api.column(14).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var ddAmt = api.column(15).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(16).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(17).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var fov = api.column(18).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var goodsVal = api.column(19).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html();
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html(articles);
                $(api.column(5).footer()).html(actualWgt);
                $(api.column(6).footer()).html(chargeWgt);
                $(api.column(7).footer()).html(baseFreight);
                $(api.column(8).footer()).html(hamali);
                $(api.column(9).footer()).html(aoc);
                $(api.column(10).footer()).html(lcChg);
                $(api.column(11).footer()).html(bcChg);
                $(api.column(12).footer()).html(insurence);
                $(api.column(13).footer()).html(gcChg);
                $(api.column(14).footer()).html(others);
                $(api.column(15).footer()).html(ddAmt);
                $(api.column(16).footer()).html(toPay);
                $(api.column(17).footer()).html(paid);
                $(api.column(18).footer()).html(fov);
                $(api.column(19).footer()).html(goodsVal);
                $(api.column(20).footer()).html();
                $(api.column(21).footer()).html();
            }
        };
    };
    LrRptComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLrReport.unsubscribe();
    };
    LrRptComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerLrReport.next();
    };
    LrRptComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    LrRptComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    LrRptComponent.prototype.viewByMode = function (viewBy) {
        if (viewBy === 'sourceView') {
            this.viewDateWise = true;
            this.showSource = false;
            this.viewConsigneeWise = false;
            this.viewConsignorWise = false;
            this.showDest = false;
            if (this.isDestView) {
                this.showDest = true;
            }
            if (this.isSourceView) {
                this.showSource = true;
            }
            if (this.isSourceBkgView) {
                this.showSource = true;
            }
        }
        else if (viewBy === 'consigneeView') {
            this.viewDateWise = true;
            this.showSource = false;
            this.viewConsigneeWise = true;
            this.viewConsignorWise = false;
            this.showDest = false;
            if (this.isDestView) {
                this.showDest = true;
                $("#destination").val('');
                $("#consigneeName").val('');
                this.modelConsigneeName = '';
                this.consigneeNameTA = [];
            }
            else {
                this.consigneeNameTA = this.consigneeNameTATemp;
                $("#consigneeName").val('All');
            }
        }
        else if (viewBy === 'consignorView') {
            this.viewDateWise = true;
            this.showSource = false;
            this.viewConsigneeWise = false;
            this.viewConsignorWise = true;
            this.showDest = false;
            if (this.isDestView) {
                this.showDest = true;
            }
            $("#consignorName").val('');
            this.modelConsignorName = '';
            this.consignorNameTA = [];
        }
        else {
            this.viewDateWise = false;
            this.showSource = false;
            this.showDest = false;
            this.viewConsigneeWise = false;
            this.viewConsignorWise = false;
        }
    };
    LrRptComponent.prototype.setConsginorIndex = function () {
        for (var i = 0; i < this.consignorIndexOptions.length; i++) {
            this.consignorIndexTA.push(this.consignorIndexOptions[i].label);
        }
    };
    LrRptComponent.prototype.setSourceListFromSession = function () {
        for (var i = 0; i < this.consignorIndexOptions.length; i++) {
            this.consignorIndexTA.push(this.consignorIndexOptions[i].label);
        }
    };
    LrRptComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    LrRptComponent.prototype.getDestinationDetails = function () {
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
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred While getting the Destination Details", "info");
        },
            function () { return console.log('done'); };
    };
    ;
    LrRptComponent.prototype.getConsigneeDetailsList = function (destShow) {
        this.consigneeNameOptions = [];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
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
    LrRptComponent.prototype.consignorDropDownListner = function (e) {
        this.modelConsignorIndex = e.item;
        this.getConsignorDetailsList();
    };
    LrRptComponent.prototype.getConsignorDetailsList = function () {
        this.consignorNameOptions = [];
        this.partyMasterDtoForconsignor = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.selectedIndex = this.modelConsignorIndex;
        console.log(this.selectedIndex);
        this.partyMasterDtoForconsignor.indexValue = this.selectedIndex;
        if (this.selectedIndex != null && this.selectedIndex != '') {
            if (this.selectedIndex == 'All') {
                this.partyMasterDtoForconsignor.indexValue = "";
            }
            this.partyMasterDtoForconsignor.companyId = this.userDataDtoReturnSession.companyId;
            this.partyMasterDtoForconsignor.mode = "Index";
            this.getConsignorDetails();
        }
        console.log(this.partyMasterDtoForconsignor);
    };
    LrRptComponent.prototype.getConsigneeGstNumber = function (e) {
        if (e.keyCode == 13) {
            this.selectedConsigneeGSTNumber = $("#consigneeGSTNumber").val();
            console.log(this.selectedConsigneeGSTNumber);
            if (this.selectedConsigneeGSTNumber != null && this.selectedConsigneeGSTNumber != '') {
                this.getConsigneeDetailsWithGst();
                //                 
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "Please Enter the Consignee GST number",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    $("#consigneeGSTNumber").focus();
                });
                this.consigneeNameOptions = [];
                this.consigneeNameTA = [];
            }
        }
    };
    LrRptComponent.prototype.getConsigneeDetailsWithGstList = function () {
        this.consigneeNameOptions = [];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.selectedConsigneeGSTNumber = $("#consigneeGSTNumber").val();
        if (this.showDest) {
            this.selectedDestination = this.modelDestinationFotGet;
            this.partyMasterDtoForconsignee.office = this.selectedDestination.destination;
            console.log(this.selectedDestination);
        }
        else {
            this.partyMasterDtoForconsignee.office = this.userDataDtoReturnSession.mainStation;
        }
        this.partyMasterDtoForconsignee.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignee.isGST = true;
        this.partyMasterDtoForconsignee.mode = "Tinnumber";
        this.partyMasterDtoForconsignee.gstNoConsignee = this.selectedConsigneeGSTNumber;
        console.log(this.partyMasterDtoForconsignee);
    };
    LrRptComponent.prototype.consigneeDestListener = function (e) {
        this.modelDestinationFotGet = e.item;
        this.selectedViewBy = $("#viewBy").val();
        if (this.selectedViewBy == 'consigneeView') {
            this.getConsigneeDetails(true);
        }
        if (this.selectedViewBy == 'consignorView') {
            $("#consignorGSTNumber").focus();
        }
    };
    //For Getting Consignor Details
    LrRptComponent.prototype.getConsignorGstNumber = function (e) {
        if (e.keyCode == 13) {
            this.selectedConsignorGSTNumber = $("#consignorGSTNumber").val();
            //            console.log( this.selectedConsignorGSTNumber );
            if (this.selectedConsignorGSTNumber != null && this.selectedConsignorGSTNumber != '') {
                this.getConsignorDetailsForGst();
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: "Warning",
                    text: "Please Enter the Consignor GST number",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    $("#consignorGSTNumber").focus();
                });
                this.consignorNameOptions = [];
                this.consignorNameTA = [];
            }
        }
    };
    LrRptComponent.prototype.getConsignorDetailsForGst = function () {
        this.consignorNameOptions = [];
        this.partyMasterDtoForconsignor = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.selectedConsignorGSTNumber = $("#consignorGSTNumber").val();
        this.partyMasterDtoForconsignor = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        //this.partyMasterDtoForconsignor.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        this.partyMasterDtoForconsignor.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignor.isGST = true;
        this.partyMasterDtoForconsignor.mode = "LREntry";
        this.partyMasterDtoForconsignor.gstNoConsignor = this.selectedConsignorGSTNumber;
        this.getConsignorDetailsForGSTList();
    };
    LrRptComponent.prototype.rowSelectedConsignee = function (e) {
        this.modelConsigneeNameId = e.item;
        this.selectedConsigneeId = this.modelConsigneeNameId.consigneeId;
    };
    LrRptComponent.prototype.rowSelectedConsignor = function (e) {
        this.modelConsignorNameId = e.item;
        this.selectedConsignorId = this.modelConsignorNameId.consignorId;
    };
    /// Get Agent Names
    /*   getAgentListDetails() {
           this.agentDto.companyId = this.userDataDtoReturnSession.companyId;
           this.agentDto.column2 = "Working";
           this.agentDto.mode = "Sub";
           this.agentDto.status = "All";
        /*   if ( this.isAgentAll == "AgentAll" ) {
               this.agentDto.mode = "Sub";
               this.agentDto.status = "All";
           } else {
               this.agentDto.mode = "mainBranch";
                   this.agentDto.mainStation = this.userDataDtoReturnSession.mainStation;
             
           }*/
    /*    this.getAgentList();
    }

    getAgentList = () => {
        this.masterReadService.getSourceListDetails( this.agentDto ).subscribe(
            ( response ) => {
                if ( response.length == 0 ) {
                    swal( {
                        title: "Warning",
                        text: "No records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    } );

                } else {
                    this.agentDetailsOptionsGet = response;
                    console.log(this.agentDetailsOptionsGet);
                    this.agentDtoAll.subStation = "ALL";
                    this.agentDetailsOptionsGet.push( this.agentDtoAll );

                }
            } ),
            ( error ) => console.log( error.json() ),
            () => console.log( 'done' );
    };*/
    /// Get Agent Names
    LrRptComponent.prototype.getSourceDetails = function () {
        this.sourceAgentDto.companyId = this.userDataDtoReturnSession.companyId;
        this.sourceAgentDto.column2 = "Working";
        this.sourceAgentDto.mode = "Sub";
        this.sourceAgentDto.status = "Working";
        this.getSourceMethod();
    };
    LrRptComponent.prototype.getSourceList = function () {
        //   this.srcList="";
        this.srcLists = this.userDataDtoReturnSession.stationList;
        this.srcList.subStation = this.srcLists;
        // this.sourceDetailsListGet.subStation = this.srcLists;
        console.log(this.srcLists);
        console.log(this.srcList.subStation);
        this.sourceTA = [];
        this.agentDtoSourceAllOption.subStation = "All";
        this.sourceTA.push(this.agentDtoSourceAllOption);
        for (var i = 0; i < this.srcList.subStation.length; i++) {
            this.agentDtoSourceAddOption = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_15__["AgentDetailsDto"]();
            this.agentDtoSourceAddOption.subStation = this.srcList.subStation[i];
            this.sourceTA.push(this.agentDtoSourceAddOption);
        }
    };
    LrRptComponent.prototype.searchMethod = function () {
        this.searchLrRptDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedConsignorName = $("#consignorName").val();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        this.selectedDestination = $("#destination").val();
        this.selectedSource = $("#source").val();
        this.enteredLrNumber = $("#lrNumber").val();
        console.log(this.selectedFromDate, this.selectedToDate);
        this.selectedConsignorGSTNumber = $("#consignorGSTNumber").val();
        this.selectedConsigneeGSTNumber = $("#consigneeGSTNumber").val();
        this.selectedViewBy = $("#viewBy").val();
        if (this.selectedFromDate != null && this.selectedFromDate != '' && this.selectedToDate != null && this.selectedToDate != '') {
            this.searchLrRptDto.consigneeName = this.selectedConsigneeName;
            this.searchLrRptDto.companyId = this.userDataDtoReturnSession.companyId;
            this.searchLrRptDto.consigneeId = 0;
            if (this.selectedConsigneeName != null && this.selectedConsigneeName != '' && this.selectedConsigneeName != 'All') {
                this.searchLrRptDto.consigneeId = this.selectedConsigneeId;
            }
            this.searchLrRptDto.consignorId = 0;
            this.searchLrRptDto.gstNoConsignor = this.selectedConsignorGSTNumber;
            console.log(this.selectedConsignorId);
            if (this.selectedConsignorName != null && this.selectedConsignorName != '' && this.selectedConsignorName != 'All') {
                this.searchLrRptDto.consignorId = this.selectedConsignorId;
                console.log(this.selectedConsignorId);
            }
            if (this.selectedConsignorGSTNumber != null && this.selectedConsignorGSTNumber != '') {
                this.searchLrRptDto.consignorName = this.selectedConsignorName;
                if (this.selectedConsignorName != null && this.selectedConsignorName != '' && this.selectedConsignorName != 'All') {
                    this.searchLrRptDto.consignorId = this.selectedConsignorId;
                    console.log(this.selectedConsignorId);
                }
            }
            this.searchLrRptDto.fromDate = this.selectedFromDate;
            this.searchLrRptDto.toDate = this.selectedToDate;
            if (this.selectedViewBy == 'sourceView') {
                this.searchLrRptDto.destination = this.userDataDtoReturnSession.mainStation;
                if (this.isDestView) {
                    if ((this.selectedDestination != null) && (this.selectedDestination != '')) {
                        this.searchLrRptDto.destination = this.selectedDestination;
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                            title: "Mandatory Field",
                            text: "Please select Destination",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        return false;
                    }
                }
                console.log(this.selectedSource);
                if ((this.selectedSource != null) && (this.selectedSource != '')) {
                    // console.log('1');
                    if (this.selectedSource == 'All') {
                        //	  console.log('2');
                        if (this.isSourceBkgView) {
                            //  console.log('3');
                            this.searchLrRptDto.list = this.srcLists; //session
                            this.searchLrRptDto.mode = 'DateWiseSrcSpecific';
                        }
                        else {
                            this.searchLrRptDto.mode = 'DateWiseSrcAll';
                        }
                    }
                    else {
                        // console.log('4');c
                        this.setSource = [];
                        this.setSource.push(this.selectedSource);
                        //  console.log( this.setSource);
                        this.searchLrRptDto.list = this.setSource;
                        this.searchLrRptDto.mode = 'DateWiseSrcSpecific';
                    }
                }
                else {
                    if (this.isSourceBkgView) {
                        //  console.log('5');
                        this.searchLrRptDto.list = this.srcLists; //session
                        this.searchLrRptDto.mode = 'DateWiseSrcSpecific';
                    }
                    else {
                        this.searchLrRptDto.mode = 'DateWiseSrcAll';
                    }
                }
                this.searchMethodGetDetails();
            }
            //ConsigneeView
            else if (this.selectedViewBy == 'consigneeView') {
                this.searchLrRptDto.destination = this.userDataDtoReturnSession.mainStation;
                if (this.searchLrRptDto.consigneeId == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Mandatory Field",
                        text: "Please Select Consignee",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    if (this.isDestView) {
                        if ((this.selectedDestination != null) && (this.selectedDestination != '')) {
                            this.searchLrRptDto.destination = this.selectedDestination;
                            this.searchLrRptDto.mode = 'ConsigneeSpecific';
                            this.searchMethodGetDetails();
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                                title: "Mandatory Field",
                                text: "Please select Destination",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            });
                        }
                    }
                    else {
                        this.searchLrRptDto.mode = 'ConsigneeSpecific';
                        this.searchMethodGetDetails();
                    }
                }
            }
            //Consignorview
            else if (this.selectedViewBy == 'consignorView') {
                console.log(this.isDestView, this.selectedDestination);
                this.searchLrRptDto.destination = this.userDataDtoReturnSession.mainStation;
                if (this.searchLrRptDto.consignorId == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "Mandatory Field",
                        text: "Please select Consignor",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    if (this.isDestView) {
                        if ((this.selectedDestination != null) && (this.selectedDestination != '')) {
                            this.searchLrRptDto.destination = this.selectedDestination;
                            this.searchLrRptDto.mode = 'ConsignorSpecific';
                            this.searchMethodGetDetails();
                        }
                        else {
                            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                                title: "Mandatory Field",
                                text: "Please select Destination",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            });
                        }
                    }
                    else {
                        this.searchLrRptDto.mode = 'ConsignorSpecific';
                        this.searchMethodGetDetails();
                    }
                }
            }
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "Mandatory Field",
                text: "From Date & To Date Is Mandatory Fields",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    LrRptComponent.prototype.clearMethod = function () {
        $("#lrRptTable").DataTable().destroy();
        this.lrReportDataList = [];
        this.dtTriggerLrReport.next();
        this.searchLrRptDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
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
        this.setSource = [];
        this.selectedConsigneeName = '';
        this.selectedConsignorName = '';
        this.selectedFromDate = '';
        this.selectedToDate = '';
        this.selectedConsignorGSTNumber = '';
        this.selectedConsigneeGSTNumber = '';
        this.selectedViewBy = '';
        this.selectedDestination = '';
        this.selectedSource = '';
        this.selectedConsigneeId = '';
        this.selectedConsignorId = '';
        this.viewDateWise = true;
        this.viewConsigneeWise = false;
        this.viewConsignorWise = false;
        this.showDest = false;
        this.showSource = false;
        this.modelConsigneeName = '';
        this.modelConsignorName = '';
        this.consignorNameTA = [];
        this.modelConsigneeNameId = '';
        this.modelConsignorNameId = '';
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentLetterHead'),
        __metadata("design:type", Object)
    ], LrRptComponent.prototype, "contentLetterHead", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceConsignorIndex'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"])
    ], LrRptComponent.prototype, "instanceConsignorIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LrRptComponent.prototype, "dtElements", void 0);
    LrRptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lr-rpt',
            template: __webpack_require__(/*! ./lr-rpt.component.html */ "./src/app/report/lr-report/lr-rpt/lr-rpt.component.html"),
            styles: [__webpack_require__(/*! ./lr-rpt.component.css */ "./src/app/report/lr-report/lr-rpt/lr-rpt.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_13__["MemoReport"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__["MasterReadService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_16__["LrReportService"]])
    ], LrRptComponent);
    return LrRptComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/short-and-extra-conflict/short-and-extra-conflict.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/report/lr-report/short-and-extra-conflict/short-and-extra-conflict.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9sci1yZXBvcnQvc2hvcnQtYW5kLWV4dHJhLWNvbmZsaWN0L3Nob3J0LWFuZC1leHRyYS1jb25mbGljdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/lr-report/short-and-extra-conflict/short-and-extra-conflict.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/report/lr-report/short-and-extra-conflict/short-and-extra-conflict.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">LR Short And Extra Conflict</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"mainSrc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Source</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">ALL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"nagpur\">Nagpur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsShortAndExtraConflict\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerShortAndExtraConflict\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice No.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t<th>Src Article</th>\n\t\t\t\t\t\t\t\t\t\t<th>Src User</th>\n\t\t\t\t\t\t\t\t\t\t<th>Src Office</th>\n\t\t\t\t\t\t\t\t\t\t<th>Dest Article</th>\n\t\t\t\t\t\t\t\t\t\t<th>Dest User</th>\n\t\t\t\t\t\t\t\t\t\t<th>Dest Office</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let shortAndExtraConflictData of shortAndExtraConflictDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraConflictData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraConflictData.invoiceNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraConflictData.status }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraConflictData.srcArticle }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraConflictData.srcUser }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraConflictData.srcOffice }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraConflictData.destArticle }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraConflictData.destUser }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraConflictData.destOffice }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/lr-report/short-and-extra-conflict/short-and-extra-conflict.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/report/lr-report/short-and-extra-conflict/short-and-extra-conflict.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ShortAndExtraConflictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortAndExtraConflictComponent", function() { return ShortAndExtraConflictComponent; });
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

//from the particular global folder ends


var ShortAndExtraConflictComponent = /** @class */ (function () {
    function ShortAndExtraConflictComponent(shortAndExtraConflictRpt) {
        this.shortAndExtraConflictRpt = shortAndExtraConflictRpt;
        //summaryTable:any;
        this.loadingIndicator = true;
        this.dtTriggerShortAndExtraConflict = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ShortAndExtraConflictComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    ShortAndExtraConflictComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsShortAndExtraConflict = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'LR Number',
                    data: 'lrNumber'
                },
                {
                    title: 'invoice No.',
                    data: 'invoiceNo'
                },
                {
                    title: 'Status',
                    data: 'status'
                },
                {
                    title: 'Src Article',
                    data: 'srcArticle'
                },
                {
                    title: 'Src User',
                    data: 'srcuser'
                },
                {
                    title: 'Src Office',
                    data: 'srcOffice'
                }, {
                    title: 'Dest Article',
                    data: 'destArticle'
                }, {
                    title: 'Dest User',
                    data: 'destUser'
                }, {
                    title: 'Dest Office',
                    data: 'destOffice'
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
        this.getDataFrmServiceFrTable = this.shortAndExtraConflictRpt.getSummaryData();
        this.onDestroyUnsubscribtionShortAndExtraConflict = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.shortAndExtraConflictDataList = data['data'];
            _this.dtTriggerShortAndExtraConflict.next();
        });
        //the below code is for the getting data through json ends
    };
    ShortAndExtraConflictComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerShortAndExtraConflict.unsubscribe();
        this.onDestroyUnsubscribtionShortAndExtraConflict.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ShortAndExtraConflictComponent.prototype, "dtElements", void 0);
    ShortAndExtraConflictComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-short-and-extra-conflict',
            template: __webpack_require__(/*! ./short-and-extra-conflict.component.html */ "./src/app/report/lr-report/short-and-extra-conflict/short-and-extra-conflict.component.html"),
            styles: [__webpack_require__(/*! ./short-and-extra-conflict.component.css */ "./src/app/report/lr-report/short-and-extra-conflict/short-and-extra-conflict.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], ShortAndExtraConflictComponent);
    return ShortAndExtraConflictComponent;
}());



/***/ }),

/***/ "./src/app/report/lr-report/short-and-extra/short-and-extra.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/report/lr-report/short-and-extra/short-and-extra.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2xyLXJlcG9ydC9zaG9ydC1hbmQtZXh0cmEvc2hvcnQtYW5kLWV4dHJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvbHItcmVwb3J0L3Nob3J0LWFuZC1leHRyYS9zaG9ydC1hbmQtZXh0cmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcclxuXHR0b3A6IDI2cHg7XHJcbiAgICBsZWZ0OiAxODhweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/lr-report/short-and-extra/short-and-extra.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/report/lr-report/short-and-extra/short-and-extra.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Short And Extra Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\" name=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#viewType (change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"dateWise\">Date Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"allWise\">All</option>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t<!--<div *ngIf=\"viewTypeDateWise\" class=\"col-sm-12 col-md-12\">-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" id=\"fromDates\" name=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fromDatesModal\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<!--<div *ngIf=\"viewTypeDateWise\" class=\"col-sm-12 col-md-12\">-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"toDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#toDates=\"ngbDatepicker\" [(ngModel)]=\"toDatesModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!--<div *ngIf=\"viewTypeAllWise\" class=\"col-sm-12 col-md-12\">-->\n\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!hideShowSourceSubStation\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #sourceSubStationName id=\"sourceSubStationNameId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"sourceSubStationNameId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Select Source Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"sourceSubStationDropDownListner($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelSourceSubStationName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"sourceSubStationNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterSourceSubStationName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterSourceSubStationName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusSourceSubStationNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #destination id=\"destinationId\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDestination($event,input)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestinationTA$.next($any($event).target.value);focus($event.target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination..\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" (click)=\"validateSearchBtn();\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" (click)=\"clearBtn();\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">LRs Short And Extra\n\t\t\t\t\t\t\t\tReport</h6>\n\t\t\t\t\t\t\t<table datatable id=\"lrShortAndExtraRptTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsShortAndExtraReport\" [dtTrigger]=\"dtTriggerShortAndExtraReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Article</th>\n\t\t\t\t\t\t\t\t\t\t<th>Enter Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice No.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Vehicle No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let shortAndExtraReportData of shortAndExtraReportReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.lrsShortage }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.status }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/report/lr-report/short-and-extra/short-and-extra.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/report/lr-report/short-and-extra/short-and-extra.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ShortAndExtraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortAndExtraComponent", function() { return ShortAndExtraComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__);
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















var ShortAndExtraComponent = /** @class */ (function () {
    function ShortAndExtraComponent(shortAndExtraReport, router, masterReadService, lrReport, modalService) {
        var _this = this;
        this.shortAndExtraReport = shortAndExtraReport;
        this.router = router;
        this.masterReadService = masterReadService;
        this.lrReport = lrReport;
        this.modalService = modalService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.controlMainSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.controlMainDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.dtTriggerShortAndExtraReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.address = null;
        this.lrDtoSubStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.sourceSubStationNameTA = [];
        this.focusSourceSubStationNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.sourceSubStationNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusSourceSubStationNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (term) { return (term === '' ? _this.sourceSubStationNameTA
                : _this.sourceSubStationNameTA.filter(function (v) { return v.subStations.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterSourceSubStationName = function (x) { return x.subStations; };
        this.lrDtoParticularSubStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.lrDtoAllOptionForSubStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.destinationTA = [];
        this.focusDestinationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDestination = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestinationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.destination; })).slice(0, 200); }));
        };
        this.formatterDestination = function (x) { return x.destination; };
        this.showSpinnerForAction = false;
        this.isSourceView = false;
        this.hideShowSourceSubStation = false;
        this.rightsRoleForDestination = "Rights Role For Destination";
        this.validateFromDate = null;
        this.validateToDate = null;
        this.validateSourceSubStation = null;
        this.validateDestination = null;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.fromDatesModal = null;
        this.toDatesModal = null;
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
                //console.log(key);
                if (key == 'Rights') {
                    for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                        //Whatever you want to do with key or obj[key]
                        // console.log(this.userDataDtoReturnSession.sortedMapFeatures.Rights[i]);
                        if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] == 'Source ShortExtraLR') {
                            //console.log('Source ShortExtraLR');
                            this.isSourceView = true;
                            this.hideShowSourceSubStation = true;
                            this.getUserGodownList();
                        }
                    }
                }
            }
            //
            /*if (this.rightsRoleForDestination != null &&
                this.rightsRoleForDestination == "Rights Role For Destination" ||
                this.rightsRoleForDestination == "Rights Role For Destination" ||
                this.rightsRoleForDestination == "Rights Role For Destination" ||
                this.rightsRoleForDestination == "Rights Role For Destination") {
            */
            if (this.userDataDtoReturnSession.role != null &&
                this.userDataDtoReturnSession.role == "Super Administrator" ||
                this.userDataDtoReturnSession.role == "Transshipment Office" ||
                this.userDataDtoReturnSession.role == "Booking Manager" ||
                this.userDataDtoReturnSession.role == "Booking Administrator") {
                this.getDestinationDetails();
            }
            else {
                this.modelDestination = null;
                this.lrDtoParticularSubStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
                this.lrDtoParticularSubStation.destination = this.userDataDtoReturnSession.mainStation;
                this.destinationTA.push(this.lrDtoParticularSubStation);
            }
        }
    }
    ShortAndExtraComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    ShortAndExtraComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var booleanSourceViewPrint = this.isSourceView;
        this.dtOptionsShortAndExtraReport = {
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
                        if (booleanSourceViewPrint == true) {
                            return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                "<u>LRs Short And Extra Report</u><br><br>" +
                                "Source : " + $("#sourceSubStationNameId").val() + " - " + "Destination : " + $("#destinationId").val() + " - " +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_8__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_8__($("#toDates").val()).format('DD-MM-YYYY') + "" +
                                "</td>" +
                                "</tr></table><br>";
                        }
                        else {
                            return "<table style='table-layout: fixed;width: 100%;'><tr>" +
                                "<td style='word-wrap: break-word;text-align:center;font-size:25px;font-weight:bold;'>" +
                                "<u>LRs Short And Extra Report</u><br><br>" +
                                "Destination : " + $("#destinationId").val() + " - " +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_8__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_8__($("#toDates").val()).format('DD-MM-YYYY') + "" +
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
                        if (booleanSourceViewPrint == true) {
                            return "LRs Short And Extra Report - " +
                                "Source : " + $("#sourceSubStationNameId").val() + " - " + "Destination : " + $("#destinationId").val() + " - " +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_8__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_8__($("#toDates").val()).format('DD-MM-YYYY') + "";
                        }
                        else {
                            return "LRs Short And Extra Report - " +
                                "Destination : " + $("#destinationId").val() + " - " +
                                "From Date : " + moment__WEBPACK_IMPORTED_MODULE_8__($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                                "To Date : " + moment__WEBPACK_IMPORTED_MODULE_8__($("#toDates").val()).format('DD-MM-YYYY') + "";
                        }
                        /* return "LRs Short And Extra Report - " +
                             "From Date : " + moment($("#fromDates").val()).format('DD-MM-YYYY') + " -  " +
                             "To Date : " + moment($("#toDates").val()).format('DD-MM-YYYY') + "";
                             */
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
            "scrollY": 270,
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
                var totalArticle = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var enterArt = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(2).footer()).html(totalArticle);
                $(api.column(3).footer()).html(enterArt);
            },
        };
    };
    ShortAndExtraComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerShortAndExtraReport.next();
    };
    ShortAndExtraComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
            });
        });
    };
    ShortAndExtraComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerShortAndExtraReport.unsubscribe();
    };
    ShortAndExtraComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    /*viewTypeMode(viewType: string) {
        if (viewType === 'dateWise') {
            this.viewTypeDateWise = true;
            this.viewTypeAllWise = true;
        } else if (viewType === 'allWise') {
            this.viewTypeDateWise = false;
            this.viewTypeAllWise = true;
        } else {
            this.viewTypeDateWise = false;
            this.viewTypeAllWise = false;

        }
    }*/
    ShortAndExtraComponent.prototype.sourceSubStationDropDownListner = function (event) {
        this.modelSourceSubStationName = event.item;
        $("#sourceSubStationNameId").val(event.item.subStations);
    };
    ShortAndExtraComponent.prototype.focus = function ($event) {
        //this.modelDestination = '';
        /* console.log("ss");
         console.log($event);
         console.log($event == '');*/
        //$event).target.value
    };
    ShortAndExtraComponent.prototype.clickListnerForDestination = function (e, fubi) {
        this.modelDestination = e.item;
        $("#destinationId").val(this.modelDestination.destination);
    };
    ShortAndExtraComponent.prototype.getUserValuesForUserGodownList = function () {
        this.lrDtoSubStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.lrDtoSubStation.mode = "ALL";
        this.lrDtoSubStation.companyId = this.userDataDtoReturnSession.companyId;
    };
    ShortAndExtraComponent.prototype.getUserGodownList = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getUserValuesForUserGodownList();
        this.masterReadService.getSubBookingStationDetailsService(this.lrDtoSubStation).subscribe(function (response) {
            if (response.length > 0) {
                _this.lrDtosSubStationOptions = [];
                _this.sourceSubStationNameTA = [];
                _this.lrDtosSubStationOptions = response;
                for (var i = 0; i < _this.lrDtosSubStationOptions.length; i++) {
                    _this.sourceSubStationNameTA.push(_this.lrDtosSubStationOptions[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
            }
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While getting the SubStation Details", "error");
            },
            function () { return console.log('done'); };
    };
    ;
    ShortAndExtraComponent.prototype.getDestinationMethod = function () {
        this.lrDtoDestination = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.lrDtoDestination.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoDestination.mode = "destinationOnly";
    };
    ShortAndExtraComponent.prototype.getDestinationDetails = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getDestinationMethod();
        this.masterReadService.getDestinationForLREntryService(this.lrDtoDestination).subscribe(function (response) {
            if (response.length > 0) {
                _this.destinationOptions = response;
                _this.destinationTA = [];
                _this.lrDtoAllOptionForSubStation = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
                _this.lrDtoAllOptionForSubStation.destination = "ALL";
                _this.destinationTA.push(_this.lrDtoAllOptionForSubStation);
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
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Server Error", "While Getting destination details", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    ShortAndExtraComponent.prototype.clearBtn = function () {
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.validateFromDate = null;
        this.validateToDate = null;
        this.validateSourceSubStation = null;
        this.validateDestination = null;
        this.fromDatesModal = null;
        this.toDatesModal = null;
        if (this.isSourceView == true) {
            this.modelSourceSubStationName = null;
            $("#sourceSubStationNameId").val('');
        }
        $("#fromDates").val('');
        $("#toDates").val('');
        $("#destinationId").val('');
        this.modelDestination = null;
        this.shortAndExtraReportReportDataList = [];
        $("#lrShortAndExtraRptTableId").DataTable().destroy();
        this.dtTriggerShortAndExtraReport.next();
    };
    ShortAndExtraComponent.prototype.validateSearchBtn = function () {
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_7__["LRDto"]();
        this.validateFromDate = $("#fromDates").val();
        this.validateToDate = $("#toDates").val();
        this.validateSourceSubStation = $("#sourceSubStationNameId").val();
        this.validateDestination = $("#destinationId").val();
        this.lrDto.fromDate = this.validateFromDate;
        this.lrDto.toDate = this.validateToDate;
        this.lrDto.branch = this.userDataDtoReturnSession.office;
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        if ((this.validateFromDate == null) || (this.validateFromDate == undefined) ||
            (this.validateFromDate == "") || (this.validateToDate == null) ||
            (this.validateToDate == undefined) || (this.validateToDate == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory fields", "From date and to date are mandatory fields", "warning");
            return false;
        }
        else if (this.isSourceView == true) {
            this.getSourceView();
        }
        else {
            this.getDestinyView();
        }
    };
    ShortAndExtraComponent.prototype.getSourceView = function () {
        this.validateSourceSubStation = $("#sourceSubStationNameId").val();
        this.validateDestination = $("#destinationId").val();
        if (((this.validateDestination != null) && (this.validateDestination != undefined) &&
            (this.validateDestination != "") && (this.validateDestination != "ALL")) &&
            ((this.validateSourceSubStation != null) && (this.validateSourceSubStation != undefined) &&
                (this.validateSourceSubStation != ""))) {
            this.lrDto.mode = "DestSpec";
            this.lrDto.branch = this.validateSourceSubStation;
            this.lrDto.destination = this.validateDestination;
            this.getLRsShortExtraDetails();
        }
        else if (((this.validateDestination != null) && (this.validateDestination != undefined) &&
            (this.validateDestination != "") && (this.validateDestination == "ALL")) &&
            ((this.validateSourceSubStation != null) && (this.validateSourceSubStation != undefined) &&
                (this.validateSourceSubStation != ""))) {
            this.lrDto.mode = "dummy";
            this.lrDto.branch = this.validateSourceSubStation;
            this.lrDto.destination = this.validateDestination;
            this.getLRsShortExtraDetails();
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Fields", "Destination & Source is Mandatory", "warning");
            return false;
        }
    };
    ShortAndExtraComponent.prototype.getDestinyView = function () {
        this.validateDestination = $("#destinationId").val();
        if ((this.validateDestination != null) && (this.validateDestination != undefined) &&
            (this.validateDestination != "") && (this.validateDestination != "ALL")) {
            this.lrDto.mode = "DestSpec";
            this.lrDto.destination = this.validateDestination;
            this.getLRsShortExtraDetails();
        }
        else if ((this.validateDestination != null) && (this.validateDestination != undefined) &&
            (this.validateDestination != "") && (this.validateDestination == "ALL")) {
            this.lrDto.mode = "dummy";
            this.lrDto.destination = this.validateDestination;
            this.getLRsShortExtraDetails();
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Fields", "Destination is Mandatory", "warning");
            return false;
        }
    };
    ShortAndExtraComponent.prototype.getLRsShortExtraDetails = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        console.log(this.lrDto);
        this.lrReport.getLRsShortExtraDtlsReport(this.lrDto).subscribe(function (response) {
            //console.log(response);
            _this.shortAndExtraReportReportDataList = [];
            $("#lrShortAndExtraRptTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.showSpinnerForAction = false;
                _this.shortAndExtraReportReportDataList = response;
            }
            else {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("No Records", "No Records found for this search", "info");
            }
            _this.dtTriggerShortAndExtraReport.next();
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Problem Occurred While getting the Short & Extra Details", "error");
            },
            function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], ShortAndExtraComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('destination'),
        __metadata("design:type", Object)
    ], ShortAndExtraComponent.prototype, "inputEl", void 0);
    ShortAndExtraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-short-and-extra',
            template: __webpack_require__(/*! ./short-and-extra.component.html */ "./src/app/report/lr-report/short-and-extra/short-and-extra.component.html"),
            styles: [__webpack_require__(/*! ./short-and-extra.component.css */ "./src/app/report/lr-report/short-and-extra/short-and-extra.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_11__["MasterReadService"],
            src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_14__["LrReportService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModal"]])
    ], ShortAndExtraComponent);
    return ShortAndExtraComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-report-lr-report-lr-report-module~src-app-report-party-report-party-report-module~sr~22c075ec.js.map