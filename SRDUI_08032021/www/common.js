(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/dataService/dashboard-service.ts":
/*!**************************************************!*\
  !*** ./src/app/dataService/dashboard-service.ts ***!
  \**************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
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



var DashboardService = /** @class */ (function () {
    //private _url = "./assets/data/supplier-master.json";
    function DashboardService(http) {
        this.http = http;
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webDashboard;
    }
    DashboardService.prototype.getSupplierMasterData = function () {
        //return this.http.get<SupplierModel[]>(this._url);
        return this.http.get('./assets/data/supplier-master.json');
    };
    DashboardService.prototype.getSummaryData = function () {
        //return this.http.get<SupplierModel[]>(this._url);
        return this.http.get('./assets/data/lr-dispatch-booking-report.json');
    };
    DashboardService.prototype.getCashMamoBatch = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCashMamoBatchApi", cashMemoDto);
    };
    DashboardService.prototype.getRemMemosLrDetailsInCollectionDept = function (lrDto) {
        return this.http.post(this._baseUrl + "/getRemMemosLrDetailsInCollectionDeptApi", lrDto);
    };
    DashboardService.prototype.getCashMamoBatchTrnsToGdw = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCashMamoBatchTrnsToGdwApi", cashMemoDto);
    };
    DashboardService.prototype.getCollectionDetailsLeftToPartyPendAckStmtDashboard = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getCollectionDetailsLeftToPartyPendAckStmtDashboardApi", cashMemoDto);
    };
    DashboardService.prototype.getTPStmtDetails = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getTPStmtDetailsApi", cashMemoDto);
    };
    DashboardService.prototype.getBlockLrDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getBlockLrDetailsApi", lrDto);
    };
    DashboardService.prototype.getCODLrDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getCODLrDetailsApi", lrDto);
    };
    DashboardService.prototype.updateCODPaymentDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateCODPaymentDetailsApi", lrDto);
    };
    DashboardService.prototype.getPendingHireSlipFromOtherStations = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getPendingHireSlipFromOtherStationsApi", hireSlipDto);
    };
    DashboardService.prototype.getLRsShortage = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLRsShortageApi", lrDto);
    };
    DashboardService.prototype.deleteLRShortage = function (lrDto) {
        return this.http.post(this._baseUrl + "/deleteLRShortageApi", lrDto);
    };
    DashboardService.prototype.getAgentStockSummaryDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getAgentStockSummaryDetailsApi", lrDto);
    };
    DashboardService.prototype.getAgentStockReportDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getAgentStockReportDetailsApi", lrDto);
    };
    DashboardService.prototype.getAgentStockReportDetailsGrpMainSrc = function (lrDto) {
        return this.http.post(this._baseUrl + "/getAgentStockReportDetailsGrpMainSrcApi", lrDto);
    };
    DashboardService.prototype.markLrUrgentDelivery = function (lrDto) {
        return this.http.post(this._baseUrl + "/markLrUrgentDeliveryApi", lrDto);
    };
    DashboardService.prototype.getPendingHamaliMemos = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getPendingHamaliMemosApi", cashMemoDto);
    };
    DashboardService.prototype.updateCashmemoDetailsForHamali = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/updateCashmemoDetailsForHamaliApi", cashMemoDto);
    };
    DashboardService.prototype.getPendingLocalTrips = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getPendingLocalTripsApi", cashMemoDto);
    };
    //Local Trip Status Update
    DashboardService.prototype.updateLRStatusDeliveryAsDelivered = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateLRStatusDeliveryAsDeliveredApi", lrDto);
    };
    DashboardService.prototype.updateLRStatusDeliveryAsUnDelivered = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateLRStatusDeliveryAsUnDeliveredApi", lrDto);
    };
    DashboardService.prototype.updateLRStatusDeliveryAsTripCancelled = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateLRStatusDeliveryAsTripCancelledApi", lrDto);
    };
    DashboardService.prototype.updateLocalTrips = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateLocalTripsApi", lrDto);
    };
    DashboardService.prototype.getPendingCommodity = function (lrDto) {
        return this.http.post(this._baseUrl + "/getPendingCommodityApi", lrDto);
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map