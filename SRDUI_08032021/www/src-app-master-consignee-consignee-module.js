(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-master-consignee-consignee-module"],{

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



/***/ })

}]);
//# sourceMappingURL=src-app-master-consignee-consignee-module.js.map