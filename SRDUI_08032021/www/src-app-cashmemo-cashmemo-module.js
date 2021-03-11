(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-cashmemo-cashmemo-module"],{

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



/***/ })

}]);
//# sourceMappingURL=src-app-cashmemo-cashmemo-module.js.map