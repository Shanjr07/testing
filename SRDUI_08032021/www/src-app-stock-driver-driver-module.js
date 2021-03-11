(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-stock-driver-driver-module"],{

/***/ "./src/app/dataService/memo-service.ts":
/*!*********************************************!*\
  !*** ./src/app/dataService/memo-service.ts ***!
  \*********************************************/
/*! exports provided: MemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoService", function() { return MemoService; });
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



var MemoService = /** @class */ (function () {
    function MemoService(http) {
        this.http = http;
        //for local
        //        private _baseUrl = "http://localhost:8080/srd/memo/v1";
        //For QA
        //    private _baseUrl = "http://54.210.51.40:8080/srd/memo/v1";
        //For Live
        //        private _baseUrl = "http://3.222.201.242:8080/srd/memo/v1";
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webMemo;
    }
    //        getBookingStationsService( lrDto: Object ): Observable<LRDto[]> {
    //            return this.http.post<LRDto[]>( `${this._baseUrl}/getBookingStationsDetails`, lrDto );
    //        }
    MemoService.prototype.getMemoDetailService = function (cashMemoDto) {
        //        console.log( cashMemoDto );
        return this.http.post(this._baseUrl + "/getMemoDetail", cashMemoDto);
    };
    MemoService.prototype.updateMemoDetailService = function (userDataDto) {
        //        console.log( userDataDto );
        return this.http.post(this._baseUrl + "/updateMemoDetail", userDataDto);
    };
    MemoService.prototype.chkRemCashMemoService = function (userDataDto) {
        return this.http.post(this._baseUrl + "/chkRemCashMemoServiceDetail", userDataDto);
    };
    MemoService.prototype.updateMemoAllService = function (userDataDto) {
        //        console.log( userDataDto );
        return this.http.post(this._baseUrl + "/updateMemoAllDetail", userDataDto);
    };
    MemoService.prototype.getCashMemoUnAssgDetailService = function (userDataDto) {
        //        console.log( userDataDto );
        return this.http.post(this._baseUrl + "/getCashMemoUnAssgDetail", userDataDto);
    };
    MemoService.prototype.transferToGodownLrsService = function (userDataDto) {
        return this.http.post(this._baseUrl + "/transferToGodownLrsDetail", userDataDto);
    };
    MemoService.prototype.getSingleMemoDetailService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getSingleMemoDetail", lrDto);
    };
    MemoService.prototype.createDummyCashMemoService = function (rateMasterDto) {
        return this.http.post(this._baseUrl + "/createDummyCashMemo", rateMasterDto);
    };
    MemoService.prototype.chkLrInCpService = function (lrDto) {
        return this.http.post(this._baseUrl + "/chkLrInCpDetail", lrDto);
    };
    MemoService.prototype.getLrDetailsForCashMemoService = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLrDetailsForCashMemo", lrDto);
    };
    MemoService.prototype.createNewPartyBankMasterService = function (userDataDto) {
        return this.http.post(this._baseUrl + "/createNewPartyBankMasterDetail", userDataDto);
    };
    MemoService.prototype.createDeliveryAreaService = function (lrDto) {
        return this.http.post(this._baseUrl + "/createDeliveryArea", lrDto);
    };
    MemoService.prototype.createCashMemoService = function (rateMasterDto) {
        //        console.log( rateMasterDto );
        return this.http.post(this._baseUrl + "/createCashMemo", rateMasterDto);
    };
    MemoService.prototype.createNewCollectionManService = function (userDataDto) {
        return this.http.post(this._baseUrl + "/createNewCollectionManDetails", userDataDto);
    };
    MemoService.prototype.updateCommodityDtlsService = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateCommodityDtls", lrDto);
    };
    MemoService.prototype.setCashMemoLaserPrintService = function (rateMasterDto) {
        // console.log(rateMasterDto);
        return this.http.post(this._baseUrl + "/setCashMemoLaserPrint", rateMasterDto);
    };
    MemoService.prototype.updateEnableBankLrDestMemoService = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateEnableBankLrDestMemo", lrDto);
    };
    MemoService.prototype.updateEnableSelfLrDestMemoService = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateEnableSelfLrDestMemo", lrDto);
    };
    MemoService.prototype.updateEnableBlockedLrDestMemoService = function (lrDto) {
        return this.http.post(this._baseUrl + "/updateEnableBlockedLrDestMemo", lrDto);
    };
    MemoService.prototype.getSRDToColManRptForPrintService = function (cashMemoDto) {
        //        console.log( cashMemoDto );
        return this.http.post(this._baseUrl + "/getSRDToColManRptForPrint", cashMemoDto);
    };
    MemoService.prototype.getCashMemoBkgDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getcashmemobkgdetails", lrDto);
    };
    MemoService.prototype.updatedBkgCashMemo = function (lrDto) {
        return this.http.post(this._baseUrl + "/updatedbkgcashmemo", lrDto);
    };
    MemoService.prototype.editCashmemoDetailsService = function (rateMasterDto) {
        //        console.log( rateMasterDto );
        return this.http.post(this._baseUrl + "/editCashmemoDetails", rateMasterDto);
    };
    MemoService.prototype.deleteCashMemoService = function (lrDto) {
        //        console.log( lrDto );
        return this.http.post(this._baseUrl + "/deleteCashMemo", lrDto);
    };
    MemoService.prototype.getCollectionManDetails = function (userDataDto) {
        return this.http.post(this._baseUrl + "/getcollectionmandetails", userDataDto);
    };
    MemoService.prototype.updateCloseCollectionService = function (userDataDto) {
        return this.http.post(this._baseUrl + "/updateclosecollection", userDataDto);
    };
    MemoService.prototype.getGroupStationOfLRNumber = function (lrDto) {
        return this.http.post(this._baseUrl + "/getgroupstationoflrnumber", lrDto);
    };
    MemoService.prototype.getTotalMemoLessAmount = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getTotalMemoLessAmount", cashMemoDto);
    };
    MemoService.prototype.getMemoLessDetails = function (userDataDto) {
        return this.http.post(this._baseUrl + "/getMemoLessDetails", userDataDto);
    };
    MemoService.prototype.addPartyBankMasterDetails = function (userDataDto) {
        return this.http.post(this._baseUrl + "/addPartyBankMasterDetails", userDataDto);
    };
    MemoService.prototype.updateCashMemoLessDetails = function (userDataDto) {
        return this.http.post(this._baseUrl + "/updateCashMemoLessDetails", userDataDto);
    };
    MemoService.prototype.updateCashMemoCompleteDetails = function (userDataDto) {
        return this.http.post(this._baseUrl + "/updateCashMemoCompleteDetails", userDataDto);
    };
    MemoService.prototype.getDifferentMemoLessDetailsBasedOnLessDesc = function (userDataDto) {
        return this.http.post(this._baseUrl + "/getDifferentMemoLessDetailsBasedOnLessDesc", userDataDto);
    };
    MemoService.prototype.validateChqNumberWithBank = function (lrDto) {
        return this.http.post(this._baseUrl + "/validateChqNumberWithBank", lrDto);
    };
    MemoService.prototype.getTPStmtPendingDetailsValidationCheck = function (cashMemoDto) {
        //        console.log( cashMemoDto );
        return this.http.post(this._baseUrl + "/getTPStmtPendingDetailsValidationCheck", cashMemoDto);
    };
    MemoService.prototype.getConsigneeWiseBalanceDet = function (cashMemoDto) {
        return this.http.post(this._baseUrl + "/getConsigneeWiseBalanceDet", cashMemoDto);
    };
    MemoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemoService);
    return MemoService;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-stock-driver-driver-module.js.map