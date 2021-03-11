(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-stocks-for-tripsheet-page-stocks-for-tripsheet-page-module"],{

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

/***/ "./src/app/dto/Driverdetails-dto.ts":
/*!******************************************!*\
  !*** ./src/app/dto/Driverdetails-dto.ts ***!
  \******************************************/
/*! exports provided: DriverdetailsDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverdetailsDto", function() { return DriverdetailsDto; });
var DriverdetailsDto = /** @class */ (function () {
    function DriverdetailsDto() {
    }
    return DriverdetailsDto;
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

/***/ "./src/app/stocks-for-tripsheet-page/stock-for-tripsheet-driver-print/stock-for-tripsheet-driver-print.component.css":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stock-for-tripsheet-driver-print/stock-for-tripsheet-driver-print.component.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\nfieldset.scheduler-border {\r\n    border: 1px groove #ddd !important;\r\n    padding: 0 1.4em 1.4em 1.4em !important;\r\n    margin: 0 0 1.5em 0 !important;\r\n    box-shadow:  0px 0px 0px 0px #000;\r\n}\r\n\r\nlegend.scheduler-border {\r\n        font-size: 1.2em !important;\r\n        font-weight: bold !important;\r\n        text-align: left !important;\r\n        width:auto;\r\n        padding:0 10px;\r\n        border-bottom:none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS9zdG9jay1mb3ItdHJpcHNoZWV0LWRyaXZlci1wcmludC9zdG9jay1mb3ItdHJpcHNoZWV0LWRyaXZlci1wcmludC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksbUNBQW1DO0lBQ25DLHdDQUF3QztJQUN4QywrQkFBK0I7SUFFdkIsa0NBQWtDO0NBQzdDOztBQUVEO1FBQ1EsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsV0FBVztRQUNYLGVBQWU7UUFDZixtQkFBbUI7Q0FDMUIiLCJmaWxlIjoic3JjL2FwcC9zdG9ja3MtZm9yLXRyaXBzaGVldC1wYWdlL3N0b2NrLWZvci10cmlwc2hlZXQtZHJpdmVyLXByaW50L3N0b2NrLWZvci10cmlwc2hlZXQtZHJpdmVyLXByaW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3d7XHJcblx0dG9wOiAyNnB4O1xyXG4gICAgbGVmdDogMTg4cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbmZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlICNkZGQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgMS40ZW0gMS40ZW0gMS40ZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAwIDEuNWVtIDAgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogIDBweCAwcHggMHB4IDBweCAjMDAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAgMHB4IDBweCAwcHggMHB4ICMwMDA7XHJcbn1cclxuXHJcbmxlZ2VuZC5zY2hlZHVsZXItYm9yZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6YXV0bztcclxuICAgICAgICBwYWRkaW5nOjAgMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOm5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stock-for-tripsheet-driver-print/stock-for-tripsheet-driver-print.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stock-for-tripsheet-driver-print/stock-for-tripsheet-driver-print.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page row system_responsive\" id=\"stmtReptLrDetailsprintIds\">\n\t<div class=\"col-md-12\">\n\t\t<!--first row starts-->\n\t\t<div class=\"row\" style=\"padding-top: 5px;\" height='30px'>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<h6>\n\t\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<h6>\n\t\t\t\t\t{{address}}\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<table style='width: 100%;'>\n\t\t\t<tr>\n\t\t\t\t<td style='width: 30%;'>\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width='12%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<strong style='font-size:16px;'>Source</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='1%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<strong style='font-size:16px;'>:</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='17%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<span style='font-size:16px;'>{{sourcePrint}}</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width='12%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<strong style='font-size:16px;'>Destination</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='1%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<strong style='font-size:16px;'>:</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='17%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<span style='font-size:16px;'>{{destinationPrint}}</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width='12%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<strong style='font-size:16px;'>Vehicle Name</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='1%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<strong style='font-size:16px;'>:</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='17%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<span style='font-size:16px;'>{{vehicleNamePrint}}</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</td>\n\t\t\t\t<td rowspan='3' style='width:40%;word-wrap: break-word;text-align:center !important;'>\n\t\t\t\t\t<strong style='font-size:30px;'><u>Local Tripsheet</u></strong>\n\t\t\t\t</td>\n\t\t\t\t<td style='width: 30%;'>\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width='12%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<strong style='font-size:16px;'>Vehicle No</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='1%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<strong style='font-size:16px;'>:</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='17%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<span style='font-size:16px;'>{{vehicleNumberPrint}}</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width='12%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<strong style='font-size:16px;'>Trip No</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='1%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<strong style='font-size:16px;'>:</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='17%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<span style='font-size:16px;'>{{tripNoPrint}}</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td width='12%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<strong style='font-size:16px;'>Trip Date</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='1%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<strong style='font-size:16px;'>:</strong>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width='17%' style='text-align:left !important;'>\n\t\t\t\t\t\t\t\t<span style='font-size:16px;'>{{tripDatePrint}}</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\t\t<!--Second  table starts-->\n\n\t\t<!--<table width='100%' border='1' cellspacing='0' cellpadding='0'>\n\t\t\t<tr>\n\t\t\t\t<th width='5%' align='center' style='border:1px solid #000000; border-right:none;'>\n\t\t\t\t\tS.No</th>\n\t\t\t\t<th width='10%' align='center' style='border:1px solid #000000; border-right:none;'>\n\t\t\t\t\tLR No</th>\n\t\t\t\t<th width='20%' align='center' style='border:1px solid #000000; border-right:none;'>\n\t\t\t\t\tConsignee Name</th>\n\t\t\t\t<th width='15%' align='center' style='border:1px solid #000000; border-right:none;'>\n\t\t\t\t\tDestination</th>\n\t\t\t\t<th width='10%' align='center' style='border:1px solid #000000; border-right:none;'>\n\t\t\t\t\tBooking Date</th>\n\t\t\t\t<th width='7%' align='center' style='border:1px solid #000000; border-right:none;'>\n\t\t\t\t\tArticle</th>\n\t\t\t\t<th width='6%' align='center' style='border:1px solid #000000; border-right:none;'>\n\t\t\t\t\tDD</th>\n\t\t\t\t<th width='7%' align='center' style='border:1px solid #000000; border-right:none;'>\n\t\t\t\t\tPvt Mark</th>\n\t\t\t\t<th width='10%' align='center' style='border:1px solid #000000; border-right:none;'>\n\t\t\t\t\tActual Weight</th>\n\t\t\t\t<th width='10%' height='50' align='center' style='border:1px solid #000000;'>Charged\n\t\t\t\t\tWeight</th>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let tripSheetForDriverData of tripSheetForDriverDataList \">\n\t\t\t\t<td width='5%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ tripSheetForDriverData.size }}</td>\n\t\t\t\t<td width='10%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ tripSheetForDriverData.lrNumber }}</td>\n\t\t\t\t<td width='20%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ tripSheetForDriverData.consigneeName }}</td>\n\t\t\t\t<td width='15%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ tripSheetForDriverData.destination }}</td>\n\t\t\t\t<td width='10%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ tripSheetForDriverData.bookingDate }}</td>\n\t\t\t\t<td width='7%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ tripSheetForDriverData.totalArticles }}</td>\n\t\t\t\t<td width='6%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ tripSheetForDriverData.hamaliDD }}</td>\n\t\t\t\t<td width='7%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ tripSheetForDriverData.privateMarker }}</td>\n\t\t\t\t<td width='10%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ tripSheetForDriverData.actualWeight }}</td>\n\t\t\t\t<td width='10%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ tripSheetForDriverData.chargedWeight }}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td colspan='2' width='15%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{this.totSizePrint}}</td>\n\t\t\t\t<td width='20%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t</td>\n\t\t\t\t<td width='15%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t</td>\n\t\t\t\t<td width='10%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t</td>\n\t\t\t\t<td width='7%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{totArticlePrint}}</td>\n\t\t\t\t<td width='6%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ totHamaliDDPrint }}</td>\n\t\t\t\t<td width='7%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t</td>\n\t\t\t\t<td width='10%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ totActWgtPrint }}</td>\n\t\t\t\t<td width='10%' height='25' align='center' style='border:1px solid #000;'>\n\t\t\t\t\t{{ totChgWgtPrint }}</td>\n\t\t\t</tr>\n\t\t</table>-->\n\n\t\t<!--<div class=\"container border\">\n\t\t\t<div>-->\n\t\t<table width='100%' border='1' cellspacing='0' cellpadding='1' style='table-layout: fixed;'>\n\t\t\t<tr>\n\t\t\t\t<td width='5%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='text'><strong>S.No</strong></td>\n\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong> LR No</strong></td>\n\t\t\t\t<td width='20%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong> Consignee Name</strong></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong> Destination</strong></td>\n\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong>Booking Date</strong></td>\n\t\t\t\t<td width='7%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong>Article</strong></td>\n\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong>DD</strong></td>\n\t\t\t\t<td width='7%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong>Pvt Mark</strong></td>\n\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\tstyle='border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong>Act Wgt</strong></td>\n\t\t\t\t<td width='10%' align='center' style='border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='text'><strong> Chgd Wgt</strong></td>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let tripSheetForDriverData of tripSheetForDriverDataList\">\n\t\t\t\t<td width='5%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top'><span>\n\t\t\t\t\t\t{{tripSheetForDriverData.size}} </span></td>\n\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top'><span>\n\t\t\t\t\t\t{{tripSheetForDriverData.lrNumber}}\n\t\t\t\t\t</span></td>\n\t\t\t\t<td width='20%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top'><span>\n\t\t\t\t\t\t{{ tripSheetForDriverData.consigneeName}}\n\t\t\t\t\t</span></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top'><span>\n\t\t\t\t\t\t{{tripSheetForDriverData.destination}} </span></td>\n\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top'><span>\n\t\t\t\t\t\t{{tripSheetForDriverData.bookingDateStr}} </span></td>\n\t\t\t\t<td width='7%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top'><span>\n\t\t\t\t\t\t{{tripSheetForDriverData.totalArticles}} </span></td>\n\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top'><span>\n\t\t\t\t\t\t{{tripSheetForDriverData.hamaliDD}} </span></td>\n\t\t\t\t<td width='7%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top'><span>\n\t\t\t\t\t\t{{tripSheetForDriverData.privateMarker}} </span></td>\n\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top'><span>\n\t\t\t\t\t\t{{tripSheetForDriverData.actualWeight}} </span></td>\n\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-bottom: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top'><span>\n\t\t\t\t\t\t{{tripSheetForDriverData.chargedWeight}}</span></td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td width='15%' colspan='2' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='text'><strong> Total : </strong><strong>\n\t\t\t\t\t\t{{totSizePrint}} </strong></td>\n\t\t\t\t<!--<td width='10%' align='center'\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\t\t\tvalign='top' type='number'><strong> </strong></td>-->\n\t\t\t\t<td width='20%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong> </strong></td>\n\t\t\t\t<td width='15%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong> </strong></td>\n\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong> </strong></td>\n\t\t\t\t<td width='7%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong>{{totArticlePrint}} </strong></td>\n\t\t\t\t<td width='6%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong> {{totHamaliDDPrint}}</strong></td>\n\t\t\t\t<td width='7%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong> </strong></td>\n\t\t\t\t<td width='10%' align='center'\n\t\t\t\t\tstyle='border-top: 1px solid #000; border-right: 1px solid #000; word-wrap: break-word;'\n\t\t\t\t\tvalign='top' type='number'><strong> {{totActWgtPrint}}</strong></td>\n\t\t\t\t<td width='10%' align='center' style='border-top: 1px solid #000; word-wrap: break-word;' valign='top'\n\t\t\t\t\ttype='text'><strong>{{totChgWgtPrint}} </strong></td>\n\t\t\t</tr>\n\t\t</table>\n\t\t<!--</div>\n\t\t</div>-->\n\t\t<!--Second  table end-->\n\t\t<!--Third table start-->\n\t\t<table width='100%' border='0' cellspacing='0' cellpadding='0'>\n\t\t\t<tr>\n\t\t\t\t<td width='50%'>&nbsp;</td>\n\t\t\t\t<td>&nbsp;</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t<tr>\n\t\t\t\t<td align='right'>\n\t\t\t\t\t<table width='98%' border='0' cellpadding='0' cellspacing='0'>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><strong>Labour Names:</strong><span\n\t\t\t\t\t\t\t\t\tstyle='font-size:16px;'>&nbsp;{{labourHamaliStmtPrint}}</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>&nbsp;</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>&nbsp;</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>&nbsp;</td>\n\t\t\t</tr>\n\t\t\t<td align='right'>\n\t\t\t\t<table width='98%' border='0' cellpadding='0' cellspacing='0'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><strong>CHECKED BY</strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><strong>SIGNATURE</strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td align='right'>\n\t\t\t\t<table width='50%' border='0' cellpadding='0' cellspacing='0'>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><strong>DRIVER </strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>{{driverNamePrint}}<br>{{driverMobileNoPrint}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>&nbsp;</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><strong>SIGNATURE</strong></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t</table>\n\t\t<!--Third table end-->\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stock-for-tripsheet-driver-print/stock-for-tripsheet-driver-print.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stock-for-tripsheet-driver-print/stock-for-tripsheet-driver-print.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: StockForTripsheetDriverPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockForTripsheetDriverPrintComponent", function() { return StockForTripsheetDriverPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/dest-stmt-report */ "./src/app/dataService/dest-stmt-report.ts");
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








var StockForTripsheetDriverPrintComponent = /** @class */ (function () {
    function StockForTripsheetDriverPrintComponent(memoLessRpt, router, masterReadService, memoReport, modalService, destStmtReport) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        this.destStmtReport = destStmtReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.isLoggedIn = true;
        this.address = null;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoList = [];
        this.memoHamaliDD = null;
        this.totActWgtPrint = null;
        this.totChgWgtPrint = null;
        this.totHamaliDDPrint = null;
        this.totSizePrint = null;
        this.totArticlePrint = null;
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
            this.lrDtoForTripsheepPrintLocalStorage = JSON.parse(localStorage.getItem('stockTripsheetDriverPrint'));
            console.log("Driver Print");
            console.log(this.lrDtoForTripsheepPrintLocalStorage);
            if (this.lrDtoForTripsheepPrintLocalStorage != null &&
                this.lrDtoForTripsheepPrintLocalStorage != undefined &&
                this.lrDtoForTripsheepPrintLocalStorage != "") {
                this.setFieldsValue(this.lrDtoForTripsheepPrintLocalStorage);
            }
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
    StockForTripsheetDriverPrintComponent.prototype.setFieldsValue = function (lrDtoForTripsheepPrintLocalStorage) {
        this.sourcePrint = lrDtoForTripsheepPrintLocalStorage.branch;
        this.destinationPrint = lrDtoForTripsheepPrintLocalStorage.areaOfDelivery;
        this.vehicleNamePrint = lrDtoForTripsheepPrintLocalStorage.transportName;
        this.vehicleNumberPrint = lrDtoForTripsheepPrintLocalStorage.vehicleNumber;
        this.tripNoPrint = lrDtoForTripsheepPrintLocalStorage.localTripNumber == null ? lrDtoForTripsheepPrintLocalStorage.tripNo : lrDtoForTripsheepPrintLocalStorage.localTripNumber;
        this.tripDatePrint = lrDtoForTripsheepPrintLocalStorage.tripDate == null ? null : moment__WEBPACK_IMPORTED_MODULE_8__(lrDtoForTripsheepPrintLocalStorage.tripDate).format("DD-MM-YYYY");
        this.memoHamaliDD = 0.0;
        this.totActWgtPrint = 0;
        this.totChgWgtPrint = 0;
        this.totHamaliDDPrint = 0;
        this.totSizePrint = 0;
        this.totArticlePrint = 0;
        this.lrDtoList = [];
        //console.log(lrDtoForTripsheepPrintLocalStorage.lrDtoEligible);
        for (var i = 0; i < lrDtoForTripsheepPrintLocalStorage.lrDtoEligible.length; i++) {
            this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
            this.memoHamaliDD = 0.0;
            /*this.memoHamaliDD = +lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].memoHamaliDD == null ? 0 : +lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].memoHamaliDD +
                +lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].tripsheetHamali == null ? 0 : +lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].tripsheetHamali;
           */
            this.memoHamaliDD = +(lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].memoHamaliDD == null ? 0 : lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].memoHamaliDD)
                + +(lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].tripsheetHamali == null ? 0 : +lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].tripsheetHamali);
            //console.log(this.memoHamaliDD);
            this.lrDto.size = i + +1;
            this.lrDto.lrNumber = lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].lrNumber;
            this.lrDto.consigneeName = lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].consigneeName;
            this.lrDto.destination = lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].destination;
            this.lrDto.bookingDateStr = lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].bookingDateStr;
            this.lrDto.totalArticles = lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].totalArticles;
            this.lrDto.actualWeight = lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].actualWeight;
            this.lrDto.chargedWeight = lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].chargedWeight;
            this.lrDto.hamaliDD = this.memoHamaliDD;
            this.lrDto.privateMarker = lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].privateMarker == null ? "NA" : lrDtoForTripsheepPrintLocalStorage.lrDtoEligible[i].privateMarker;
            this.lrDtoList.push(this.lrDto);
            this.totActWgtPrint = +this.totActWgtPrint + +this.lrDto.actualWeight;
            this.totChgWgtPrint = +this.totChgWgtPrint + +this.lrDto.chargedWeight;
            this.totHamaliDDPrint = +this.totHamaliDDPrint + +this.lrDto.hamaliDD;
            this.totArticlePrint = +this.totArticlePrint + +this.lrDto.totalArticles;
        }
        if (this.lrDtoList.length > 0) {
            this.tripSheetForDriverDataList = this.lrDtoList;
        }
        this.totSizePrint = lrDtoForTripsheepPrintLocalStorage.totalLrs;
        this.labourHamaliStmtPrint = lrDtoForTripsheepPrintLocalStorage.labourHamaliStmt == null ? "" : lrDtoForTripsheepPrintLocalStorage.labourHamaliStmt;
        this.driverNamePrint = lrDtoForTripsheepPrintLocalStorage.driverName;
        this.driverMobileNoPrint = lrDtoForTripsheepPrintLocalStorage.mobileNum == null ? "NA" : lrDtoForTripsheepPrintLocalStorage.mobileNum;
    };
    StockForTripsheetDriverPrintComponent.prototype.clearField = function () {
        this.sourcePrint = null;
        this.destinationPrint = null;
        this.vehicleNamePrint = null;
        this.vehicleNumberPrint = null;
        this.tripNoPrint = null;
        this.tripDatePrint = null;
        this.labourHamaliStmtPrint = null;
        this.driverNamePrint = null;
        this.driverMobileNoPrint = null;
        this.memoHamaliDD = null;
        this.totActWgtPrint = null;
        this.totChgWgtPrint = null;
        this.totHamaliDDPrint = null;
        this.totSizePrint = null;
        this.totArticlePrint = null;
        this.lrDtoForTripsheepPrintLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
    };
    StockForTripsheetDriverPrintComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StockForTripsheetDriverPrintComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StockForTripsheetDriverPrintComponent.prototype, "dtElements", void 0);
    StockForTripsheetDriverPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-for-tripsheet-driver-print',
            template: __webpack_require__(/*! ./stock-for-tripsheet-driver-print.component.html */ "./src/app/stocks-for-tripsheet-page/stock-for-tripsheet-driver-print/stock-for-tripsheet-driver-print.component.html"),
            styles: [__webpack_require__(/*! ./stock-for-tripsheet-driver-print.component.css */ "./src/app/stocks-for-tripsheet-page/stock-for-tripsheet-driver-print/stock-for-tripsheet-driver-print.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_7__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_10__["DestStmtReport"]])
    ], StockForTripsheetDriverPrintComponent);
    return StockForTripsheetDriverPrintComponent;
}());



/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-local-details/stocks-for-tripsheet-page-local-details.component.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-local-details/stocks-for-tripsheet-page-local-details.component.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::ng-deep table.dataTable { */\n/* \theight: 220px; */\n/* } */\n/* ::ng-deep .mat-horizontal-content-container { */\n/* \toverflow: hidden; */\n/* \tpadding: 0 24px 0px 24px; */\n/* } */\n/* for redirect to other page starts */\n.hyperLink_td {\n\tcolor: blue;\n\tcursor: pointer;\n}\n.hyperLink_td:hover {\n\tcolor: blue;\n\tfont-weight: bolder;\n\tcursor: pointer;\n}\n/* for redirect to other page ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS9zdG9ja3MtZm9yLXRyaXBzaGVldC1wYWdlLWxvY2FsLWRldGFpbHMvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS1sb2NhbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLHFCQUFxQjtBQUNyQixPQUFPO0FBRVAsbURBQW1EO0FBQ25ELHdCQUF3QjtBQUN4QixnQ0FBZ0M7QUFDaEMsT0FBTztBQUVQLHVDQUF1QztBQUN2QztDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLFlBQVk7Q0FDWixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCO0FBQ0QscUNBQXFDIiwiZmlsZSI6InNyYy9hcHAvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS9zdG9ja3MtZm9yLXRyaXBzaGVldC1wYWdlLWxvY2FsLWRldGFpbHMvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS1sb2NhbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA6Om5nLWRlZXAgdGFibGUuZGF0YVRhYmxlIHsgKi9cbi8qIFx0aGVpZ2h0OiAyMjBweDsgKi9cbi8qIH0gKi9cblxuLyogOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7ICovXG4vKiBcdG92ZXJmbG93OiBoaWRkZW47ICovXG4vKiBcdHBhZGRpbmc6IDAgMjRweCAwcHggMjRweDsgKi9cbi8qIH0gKi9cblxuLyogZm9yIHJlZGlyZWN0IHRvIG90aGVyIHBhZ2Ugc3RhcnRzICovXG4uaHlwZXJMaW5rX3RkIHtcblx0Y29sb3I6IGJsdWU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmh5cGVyTGlua190ZDpob3ZlciB7XG5cdGNvbG9yOiBibHVlO1xuXHRmb250LXdlaWdodDogYm9sZGVyO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBmb3IgcmVkaXJlY3QgdG8gb3RoZXIgcGFnZSBlbmRzICovIl19 */"

/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-local-details/stocks-for-tripsheet-page-local-details.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-local-details/stocks-for-tripsheet-page-local-details.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">\n\t\t\t\t\t\t\t\tLocal</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStockDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStockDetails\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charge Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let stockDetailsData of stockDetailsDataList \">\n\n\t\t\t\t\t\t\t\t\t\t<td (click)=\"goToLrEnquiryPage()\"><u class=\"hyperLink_td\">{{\n\t\t\t\t\t\t\t\t\t\t\t\tstockDetailsData.contactNo }}</u></td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.position }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.name }}</td>\n\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-local-details/stocks-for-tripsheet-page-local-details.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-local-details/stocks-for-tripsheet-page-local-details.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: StocksForTripsheetPageLocalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksForTripsheetPageLocalDetailsComponent", function() { return StocksForTripsheetPageLocalDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/stock-service */ "./src/app/dataService/stock-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for datatable starts


//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends
//for datatable ends
//for redirect to other page starts

//for redirect to other page ends
var StocksForTripsheetPageLocalDetailsComponent = /** @class */ (function () {
    //for datatable ends
    function StocksForTripsheetPageLocalDetailsComponent(/* for datatable starts */ stockDetailsScreen, /* for datatable endss */ 
    //for redirect to other page starts
    router
    //for redirect to other page ends        
    ) {
        this.stockDetailsScreen = stockDetailsScreen;
        this.router = router;
        this.dtTriggerStockDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /* for datatable starts */
    StocksForTripsheetPageLocalDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    StocksForTripsheetPageLocalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for datatable starts
        this.dtOptionsStockDetails = {
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
            //                {
            //                    extend: 'print',
            //                    text: '<i class="fas fa-print"> Print</i>',
            //                    titleAttr: 'Print',
            //
            //                },
            //                {
            //                    extend: 'excel',
            //                    text: '<i class="fas fa-file-excel"> Excel</i>',
            //                    titleAttr: 'Excel',
            //                    exportOptions: {
            //                        columns: ':visible'
            //                    }
            //                },
            //                
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
            pagingType: 'full_numbers',
            pageLength: 8,
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.gettingDataFrmServiceFrStockDetailsTable = this.stockDetailsScreen.getSupplierMasterData();
        this.onDestroyUnsubscribtionStockDetails = this.gettingDataFrmServiceFrStockDetailsTable.subscribe(function (data) {
            _this.stockDetailsDataList = data['data'];
            _this.dtTriggerStockDetails.next();
        });
        //for datatable ends
        //the below code is for the getting data through json ends
    };
    StocksForTripsheetPageLocalDetailsComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerStockDetails.unsubscribe();
        this.onDestroyUnsubscribtionStockDetails.unsubscribe();
        //for datatable ends
    };
    //for redirect to other page starts
    StocksForTripsheetPageLocalDetailsComponent.prototype.goToLrEnquiryPage = function () {
        this.router.navigate(['/lr/enquiry/lrEnquiry']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StocksForTripsheetPageLocalDetailsComponent.prototype, "dtElements", void 0);
    StocksForTripsheetPageLocalDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks-for-tripsheet-page-local-details',
            template: __webpack_require__(/*! ./stocks-for-tripsheet-page-local-details.component.html */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-local-details/stocks-for-tripsheet-page-local-details.component.html"),
            styles: [__webpack_require__(/*! ./stocks-for-tripsheet-page-local-details.component.css */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-local-details/stocks-for-tripsheet-page-local-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
            //for redirect to other page ends        
        ])
    ], StocksForTripsheetPageLocalDetailsComponent);
    return StocksForTripsheetPageLocalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-stock-summary/stocks-for-tripsheet-page-stock-summary.component.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-stock-summary/stocks-for-tripsheet-page-stock-summary.component.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::ng-deep table.dataTable { */\n/* \theight: 220px; */\n/* } */\n/* ::ng-deep .mat-horizontal-content-container { */\n/* \toverflow: hidden; */\n/* \tpadding: 0 24px 0px 24px; */\n/* } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS9zdG9ja3MtZm9yLXRyaXBzaGVldC1wYWdlLXN0b2NrLXN1bW1hcnkvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS1zdG9jay1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLHFCQUFxQjtBQUNyQixPQUFPO0FBRVAsbURBQW1EO0FBQ25ELHdCQUF3QjtBQUN4QixnQ0FBZ0M7QUFDaEMsT0FBTyIsImZpbGUiOiJzcmMvYXBwL3N0b2Nrcy1mb3ItdHJpcHNoZWV0LXBhZ2Uvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS1zdG9jay1zdW1tYXJ5L3N0b2Nrcy1mb3ItdHJpcHNoZWV0LXBhZ2Utc3RvY2stc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogOjpuZy1kZWVwIHRhYmxlLmRhdGFUYWJsZSB7ICovXG4vKiBcdGhlaWdodDogMjIwcHg7ICovXG4vKiB9ICovXG5cbi8qIDo6bmctZGVlcCAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIgeyAqL1xuLyogXHRvdmVyZmxvdzogaGlkZGVuOyAqL1xuLyogXHRwYWRkaW5nOiAwIDI0cHggMHB4IDI0cHg7ICovXG4vKiB9ICovIl19 */"

/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-stock-summary/stocks-for-tripsheet-page-stock-summary.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-stock-summary/stocks-for-tripsheet-page-stock-summary.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<!-- spinner start-->\n\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center' style=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- spinner end-->\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">Stocks\n\t\t\t\t\t\t\t\tSummary</h6>\n\t\t\t\t\t\t\t<table datatable id=\"tripSheetForStockSummaryTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStockSummary\" [dtTrigger]=\"dtTriggerStockSummary\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Tot LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let stockSummaryData of stockSummaryDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.endDest }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td><button type=\"button\" style=\"padding: 1px 4px; background-color: lightgrey;\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableLRDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedGetTripLRDeatils(stockSummaryData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Get Total LR Details\" class=\"fas fa-eye\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 id=\"viewBinsStockMsgId\" style=\"border-bottom: 1px solid orange;\" class=\"card-title\">\n\t\t\t\t\t\t\t\t{{viewBinsStockMsg}}</h6>\n\t\t\t\t\t\t\t<table datatable id=\"tripSheetForStockDetailsTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStockDetails\" [dtTrigger]=\"dtTriggerStockDetails\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let stockDetailsData of stockDetailsDataList \">\n\n\t\t\t\t\t\t\t\t\t\t<td>{{stockDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.totalAmount }}</td>\n\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<!---->\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t<button class=\"btn btn-info m-r-10\" id=\"resetInStocksForTripsheetBtn\" mat-button\n\t\t\t\t\t\tmatStepperPrevious>Reset</button>\n\t\t\t\t\t<button class=\"btn btn-success m-r-10\" id=\"makeATripBtnId\" mat-button matStepperNext\n\t\t\t\t\t\t*ngIf=\"makeAtripBtnHideShow\">Make a Trip\n\t\t\t\t\t\tsheet</button>\n\t\t\t\t\t<button class=\"btn btn-success m-r-10\" id=\"tripSheetBtnId\" *ngIf=\"tripSheetBtnHideShow\" mat-button\n\t\t\t\t\t\tmatStepperNext (click)=\"tripSheetBtnClickListner();\">\n\t\t\t\t\t\tTrip Sheet\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-stock-summary/stocks-for-tripsheet-page-stock-summary.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-stock-summary/stocks-for-tripsheet-page-stock-summary.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: StocksForTripsheetPageStockSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksForTripsheetPageStockSummaryComponent", function() { return StocksForTripsheetPageStockSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/stock-service */ "./src/app/dataService/stock-service.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//for datatable starts


//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts






//from the particular global folder ends
//for datatable ends
var StocksForTripsheetPageStockSummaryComponent = /** @class */ (function () {
    function StocksForTripsheetPageStockSummaryComponent(modalService, stockSummaryScreen, stockDetailsScreen, router, masterReadService, hireslipService) {
        var _this = this;
        this.modalService = modalService;
        this.stockSummaryScreen = stockSummaryScreen;
        this.stockDetailsScreen = stockDetailsScreen;
        this.router = router;
        this.masterReadService = masterReadService;
        this.hireslipService = hireslipService;
        this.dtTriggerStockSummary = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerStockDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.rightsToShowDeliveryMan = "StockForTripsheet ShowDelvryMan";
        this.showDeliveryMan = false;
        this.lrDtoArticleSummary = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.lrDtoStocksDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.lrDtoPassLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.makeAtripBtnHideShow = false;
        this.tripSheetBtnHideShow = false;
        this.viewBinsStockMsg = null;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Session Expired",
                text: "Please relogin to access the application!",
                icon: "error",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.logInPage();
            });
            //sweet alert ends
        }
        if (this.isLoggedIn) {
            // userdata get through from login starts
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.viewBinsStockMsg = "Bins Stock";
            /*if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                //    console.log(this.userDataDtoReturnSession.sortedMapFeatures.Rights);
                for (let i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                        "StockForTripsheet ShowDelvryMan") {
                        this.showDeliveryMan = true;
                    }
                }
            }*/
            this.setTripCrationForArticlesStocksSummaryDetailsList();
        }
    }
    StocksForTripsheetPageStockSummaryComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StocksForTripsheetPageStockSummaryComponent.prototype.ngOnInit = function () {
        //for datatable starts
        this.dtOptionsStockSummary = {
            dom: 'Bfrtip',
            buttons: [],
            order: [[1, 'asc']],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            //place holder in search/filter in datatable ends
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 230,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            pagingType: 'full_numbers',
        };
        this.dtOptionsStockDetails = {
            dom: 'Bfrtip',
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            //place holder in search/filter in datatable ends
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 230,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            pagingType: 'full_numbers',
        };
    };
    StocksForTripsheetPageStockSummaryComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerStockSummary.next();
        this.dtTriggerStockDetails.next();
    };
    StocksForTripsheetPageStockSummaryComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    StocksForTripsheetPageStockSummaryComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerStockSummary.unsubscribe();
        this.dtTriggerStockDetails.unsubscribe();
        //this.onDestroyUnsubscribtionStockSummary.unsubscribe();
    };
    StocksForTripsheetPageStockSummaryComponent.prototype.getTripCrationForArticlesStocksSummaryDetails = function () {
        this.lrDtoArticleSummary = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.lrDtoArticleSummary.branch = this.userDataDtoReturnSession.office;
        this.lrDtoArticleSummary.branchType = this.userDataDtoReturnSession.stationType;
        this.lrDtoArticleSummary.companyId = this.userDataDtoReturnSession.companyId;
    };
    StocksForTripsheetPageStockSummaryComponent.prototype.setTripCrationForArticlesStocksSummaryDetailsList = function () {
        var _this = this;
        this.getTripCrationForArticlesStocksSummaryDetails();
        this.showSpinnerForAction = true;
        this.hireslipService.getArticlesStocksSummForDestination(this.lrDtoArticleSummary).subscribe(function (response) {
            console.log(response);
            _this.stockSummaryDataList = [];
            $("#tripSheetForStockSummaryTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.stockSummaryDataList = response;
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
            }
            _this.dtTriggerStockSummary.next();
            //store.groupBy("endDest");
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting  Stock Summary Details", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    StocksForTripsheetPageStockSummaryComponent.prototype.rowSelectedGetTripLRDeatils = function (stockSummaryTableData) {
        this.lrDtoStocksDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.viewBinsStockMsg = stockSummaryTableData.endDest;
        this.stockDetailsDataList = [];
        $("#tripSheetForStockDetailsTableId").DataTable().destroy();
        this.dtTriggerStockDetails.next();
        this.lrDtoStocksDetails.branch = this.userDataDtoReturnSession.office;
        if (stockSummaryTableData.totalLrs > 0) {
            this.makeATripBtnId = stockSummaryTableData.endDest;
            this.tripSheetBtnId = stockSummaryTableData.endDest;
            this.lrDtoStocksDetails.destination = stockSummaryTableData.endDest;
            this.lrDtoStocksDetails.stationType = stockSummaryTableData.stationType;
            this.lrDtoStocksDetails.subStations = stockSummaryTableData.endDest;
            this.lrDtoStocksDetails.branchType = this.userDataDtoReturnSession.stationType;
            this.lrDtoStocksDetails.companyId = this.userDataDtoReturnSession.companyId;
            this.getTripCreationForArticlesStocksDetailsList(this.lrDtoStocksDetails);
        }
    };
    StocksForTripsheetPageStockSummaryComponent.prototype.getTripCreationForArticlesStocksDetailsList = function (lrDtoStocksDetails) {
        var _this = this;
        this.showSpinnerForAction = true;
        this.hireslipService.getArticlesStocksForDestination(lrDtoStocksDetails).subscribe(function (response) {
            console.log(response);
            _this.stockDetailsDataList = [];
            $("#tripSheetForStockDetailsTableId").DataTable().destroy();
            _this.stockDetailsDataList = response;
            setTimeout(function () {
                _this.dtTriggerStockDetails.next();
            }, 3000);
            if (response.length == 0) {
                _this.makeAtripBtnHideShow = true;
                _this.tripSheetBtnHideShow = true;
            }
            else if (_this.lrDtoStocksDetails.stationType != null &&
                (!(_this.lrDtoStocksDetails.stationType == "")) &&
                (_this.lrDtoStocksDetails.stationType == "local")) {
                _this.makeAtripBtnHideShow = false;
                _this.tripSheetBtnHideShow = true;
            }
            else if (_this.lrDtoStocksDetails.stationType != null &&
                (!(_this.lrDtoStocksDetails.stationType == "")) &&
                (_this.lrDtoStocksDetails.stationType == "Others")) {
                _this.makeAtripBtnHideShow = false;
                _this.tripSheetBtnHideShow = false;
            }
            else if (_this.lrDtoStocksDetails.stationType != null &&
                (!(_this.lrDtoStocksDetails.stationType == "")) &&
                (_this.lrDtoStocksDetails.stationType == "UnDelivered")) {
                _this.makeAtripBtnHideShow = false;
                _this.tripSheetBtnHideShow = false;
            }
            else {
                _this.makeAtripBtnHideShow = true;
                _this.tripSheetBtnHideShow = false;
            }
            _this.showSpinnerForAction = false;
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting  Stock Details Details", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetPageStockSummaryComponent.prototype.tripSheetBtnClickListner = function () {
        console.log(this.tripSheetBtnId);
        if (this.tripSheetBtnId != null && this.tripSheetBtnId == "Others") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Trips For Other", "Can't generate Trips for UnAssigned Lrs", "warning");
            return false;
        }
        else {
            /* if (this.showDeliveryMan != null &&
                 this.showDeliveryMan == true) {
             */
            if (this.userDataDtoReturnSession.office != null &&
                this.userDataDtoReturnSession.office == "Binnymills") {
                this.lrDtoPassLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
                this.lrDtoPassLocalStorage.destination = this.tripSheetBtnId;
                this.lrDtoPassLocalStorage.mode = "localgrouping";
                this.lrDtoPassLocalStorage.invoiceNumber = null;
                this.lrDtoPassLocalStorage.tripId = 0;
                localStorage.clear();
                localStorage.setItem('stockTripSheetScheduleForLocalStorage', JSON.stringify(this.lrDtoPassLocalStorage));
            }
            else {
                this.lrDtoPassLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
                this.lrDtoPassLocalStorage.destination = this.tripSheetBtnId;
                this.lrDtoPassLocalStorage.mode = "localgrouping";
                this.lrDtoPassLocalStorage.invoiceNumber = null;
                this.lrDtoPassLocalStorage.module = "destination";
                this.lrDtoPassLocalStorage.selectedTripTo = this.tripSheetBtnId;
                this.lrDtoPassLocalStorage.tripId = 0;
                localStorage.clear();
                localStorage.setItem('stockTripSheetScheduleForLocalStorage', JSON.stringify(this.lrDtoPassLocalStorage));
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StocksForTripsheetPageStockSummaryComponent.prototype, "dtElements", void 0);
    StocksForTripsheetPageStockSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks-for-tripsheet-page-stock-summary',
            template: __webpack_require__(/*! ./stocks-for-tripsheet-page-stock-summary.component.html */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-stock-summary/stocks-for-tripsheet-page-stock-summary.component.html"),
            styles: [__webpack_require__(/*! ./stocks-for-tripsheet-page-stock-summary.component.css */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-stock-summary/stocks-for-tripsheet-page-stock-summary.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_4__["StockService"],
            src_app_dataService_stock_service__WEBPACK_IMPORTED_MODULE_4__["StockService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__["MasterReadService"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_9__["HireslipService"]])
    ], StocksForTripsheetPageStockSummaryComponent);
    return StocksForTripsheetPageStockSummaryComponent;
}());



/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-details/stocks-for-tripsheet-page-trip-details.component.css":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-details/stocks-for-tripsheet-page-trip-details.component.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media ( max-width : 767px) {\n\t.bbtitle {\n\t\tpadding-top: 10px;\n\t\tborder-bottom: none;\n\t}\n}\n\n@media ( min-width : 768px) {\n\t.bbtitle {\n\t\tborder-bottom: 1px solid orange;\n\t\tpadding-bottom: 10px;\n\t}\n\t\n}\n\n/* the below is add for labour name field with add icon starts */\n\n.auto_selectOption_labourName {\n\tfont-size: 15px;\n\tpadding: 5px;\n\tborder: 2px solid #dadee2;\n\theight: 26px;\n\tflex: 1 1 auto;\n\twidth: calc(100% - 65%) !important;\n}\n\n/* the below is add for labour name field with add icon ends */\n\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS9zdG9ja3MtZm9yLXRyaXBzaGVldC1wYWdlLXRyaXAtZGV0YWlscy9zdG9ja3MtZm9yLXRyaXBzaGVldC1wYWdlLXRyaXAtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0M7RUFDQyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCO0NBQ0Q7O0FBRUQ7Q0FDQztFQUNDLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckI7O0NBRUQ7O0FBQ0QsaUVBQWlFOztBQUNqRTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixlQUFlO0NBQ2YsbUNBQW1DO0NBQ25DOztBQUNELCtEQUErRDs7QUFFL0Q7Q0FDQyxVQUFVO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9zdG9ja3MtZm9yLXRyaXBzaGVldC1wYWdlL3N0b2Nrcy1mb3ItdHJpcHNoZWV0LXBhZ2UtdHJpcC1kZXRhaWxzL3N0b2Nrcy1mb3ItdHJpcHNoZWV0LXBhZ2UtdHJpcC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKCBtYXgtd2lkdGggOiA3NjdweCkge1xuXHQuYmJ0aXRsZSB7XG5cdFx0cGFkZGluZy10b3A6IDEwcHg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0fVxufVxuXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjhweCkge1xuXHQuYmJ0aXRsZSB7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZTtcblx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0fVxuXHRcbn1cbi8qIHRoZSBiZWxvdyBpcyBhZGQgZm9yIGxhYm91ciBuYW1lIGZpZWxkIHdpdGggYWRkIGljb24gc3RhcnRzICovXG4uYXV0b19zZWxlY3RPcHRpb25fbGFib3VyTmFtZSB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0cGFkZGluZzogNXB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjZGFkZWUyO1xuXHRoZWlnaHQ6IDI2cHg7XG5cdGZsZXg6IDEgMSBhdXRvO1xuXHR3aWR0aDogY2FsYygxMDAlIC0gNjUlKSAhaW1wb3J0YW50O1xufVxuLyogdGhlIGJlbG93IGlzIGFkZCBmb3IgbGFib3VyIG5hbWUgZmllbGQgd2l0aCBhZGQgaWNvbiBlbmRzICovXG5cbjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcblx0dG9wOiAyNnB4O1xuICAgIGxlZnQ6IDE4OHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-details/stocks-for-tripsheet-page-trip-details.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-details/stocks-for-tripsheet-page-trip-details.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12 lineBottom_custom\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\" *ngIf=\"showSpinnerForAction\">\n\t\t\t\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title bbtitle\">Vehicle Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #vehicleNumberDropDown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dropDownInputFieldVehicleNumber\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDropDownInputFieldVehicleNumber($event,vehicleNumberPopUpTemplate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDropDownVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDropDownInputFieldVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDropDownVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDropDownVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Please Select The Vehicle Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDropDownVehicleNumberTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"addNewVehicleNumber\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"addVehicleNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Add Vehicle Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"addNewVehicleNumber\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"vehicleName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title bbtitle\">Driver Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #driverNameDropDown id=\"dropDownInputFieldDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDropDownInputFieldDriverName($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDropDownDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDropDownInputFieldDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDropDownDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDropDownDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Please Select The Driver Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDropDownDriverNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"inputFieldDriverConatctNumber\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Contact Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title bbtitle\">Labour Details</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!viewToShowDeliveryManField\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Delivery Man</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #labourHeadNameDropDown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dropDownInputFieldLabourHeadName\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDropDownInputFieldLabourHeadName($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDropDownLabourHeadName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDropDownInputFieldLabourHeadName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDropDownLabourHeadName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDropDownLabourHeadName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Please Select Labour Head Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDropDownLabourHeadNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Labour Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #labourNameDropDown id=\"dropDownInputFieldLabourName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDropDownInputFieldLabourName($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDropDownLabourName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDropDownInputFieldLabourName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDropDownLabourName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDropDownLabourName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Please Select The Labour Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressListnerForDropDownLabourName($event);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDropDownLabourNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hamalis</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-notes-medical\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"4\" id=\"hamalis\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\treadonly></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t<!--<button class=\"button_custome btn btn-primary m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"startFromStocksGroupingBtn\" mat-button>Start\n\t\t\t\t\t\t\t\t\t\t\t\tOver</button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10 button_custome\" id=\"backToInvoiceDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\tmat-button matStepperPrevious>Back</button>-->\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10 button_custome\"\n\t\t\t\t\t\t\t\t\t\t[hidden]=\"!viewScheduleTripBtn\" id=\"scheduleTripBtn\">Schedule\n\t\t\t\t\t\t\t\t\t\tTrip</button>\n\t\t\t\t\t\t\t\t\t<!--[hidden]=\"!viewCreateTripSheetBtn\"-->\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10 button_custome\"\n\t\t\t\t\t\t\t\t\t\tid=\"createTripSheetBtn \">Create Trip\n\t\t\t\t\t\t\t\t\t\tSheet</button>\n\t\t\t\t\t\t\t\t\t<button class=\"button_custome btn btn-info m-r-10\" id=\"resetTripBtn\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"clickResetBtn();\">Reset</button>\n\t\t\t\t\t\t\t\t\t<button class=\"button_custome btn btn-info m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"cancelTripBtn\">Cancel</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!--POP UP START HERE-->\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<ng-template #vehicleNumberPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<h4 class=\"modal-title\">Add New Vehicle!</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Add Vehicle Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"addNewVehicleNumberId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"addNewVehicleNameId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t(click)=\"saveBtnVehicleNumberPopup();\">Save</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t(click)=\"resetBtnVehicleNumberPopup();\">Reset</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t(click)=\"closePopUpVehiclePopup();\">Cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"viewStockTripsheetPrint\" onafterPopUp=\"afterPopUp()\" id=\"stockTripsheetPrintId\">\n\t\t<app-stock-for-tripsheet-driver-print>\n\t\t</app-stock-for-tripsheet-driver-print>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-details/stocks-for-tripsheet-page-trip-details.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-details/stocks-for-tripsheet-page-trip-details.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: StocksForTripsheetPageTripDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksForTripsheetPageTripDetailsComponent", function() { return StocksForTripsheetPageTripDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/TruckData-dto */ "./src/app/dto/TruckData-dto.ts");
/* harmony import */ var src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dto/Driverdetails-dto */ "./src/app/dto/Driverdetails-dto.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
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










var StocksForTripsheetPageTripDetailsComponent = /** @class */ (function () {
    function StocksForTripsheetPageTripDetailsComponent(expensesDetailsEntrys, router, masterReadService, modalService, masterService) {
        var _this = this;
        this.expensesDetailsEntrys = expensesDetailsEntrys;
        this.router = router;
        this.masterReadService = masterReadService;
        this.modalService = modalService;
        this.masterService = masterService;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        //for the select option with filter starts
        this.addNewDriverName = false;
        this.addNewVehicleNumber = false;
        this.addNewLabourName = false;
        this.dtTriggerExpensesDetailsEntry = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.truckDataDtoNewVehicleNumberSave = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_10__["TruckDataDto"]();
        this.truckDataDtoNewVehicleNumberSaveReturn = null;
        this.vehicleNumberOption = [];
        this.truckDataDtoVehicleNumber = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_10__["TruckDataDto"]();
        this.truckDataDtoAddNewVehicleNumber = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_10__["TruckDataDto"]();
        this.vehicleNumberTA = [];
        this.focusDropDownVehicleNumberTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDropDownInputFieldVehicleNumber = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDropDownVehicleNumberTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return (term === '' ? _this.vehicleNumberTA
                : _this.vehicleNumberTA.filter(function (v) { return v.truckNumber.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDropDownVehicleNumber = function (x) { return x.truckNumber; };
        this.driverNameOption = [];
        this.driverDataDtoDriverName = new src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_11__["DriverdetailsDto"]();
        this.driverNameTA = [];
        this.focusDropDownDriverNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDropDownInputFieldDriverName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDropDownDriverNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return (term === '' ? _this.driverNameTA
                : _this.driverNameTA.filter(function (v) { return v.driverName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDropDownDriverName = function (x) { return x.driverName; };
        this.labourNameOption = [];
        this.lrDtoLabourName = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.labourNameTA = [];
        this.focusDropDownLabourNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDropDownInputFieldLabourName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDropDownLabourNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return (term === '' ? _this.labourNameTA
                : _this.labourNameTA.filter(function (v) { return v.loaderName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDropDownLabourName = function (x) { return x.loaderName; };
        this.labourHeadNameOption = [];
        this.lrDtoLabourHeadName = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.labourHeadNameTA = [];
        this.focusDropDownLabourHeadNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDropDownInputFieldLabourHeadName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDropDownLabourHeadNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return (term === '' ? _this.labourHeadNameTA
                : _this.labourHeadNameTA.filter(function (v) { return v.loaderHead.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDropDownLabourHeadName = function (x) { return x.loaderHead; };
        this.enteredPopUpNewVehicleNumber = null;
        this.eneterdPopUpNewVehicleName = null;
        this.enteredlabourNameListOfHamaliAdd = null;
        this.viewToShowDeliveryManField = false;
        this.viewScheduleTripBtn = false;
        this.viewCreateTripSheetBtn = false;
        this.viewStockTripsheetPrint = false;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Session Expired",
                text: "Please relogin to access the application!",
                icon: "error",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.logInPage();
            });
            //sweet alert ends
        }
        if (this.isLoggedIn) {
            // userdata get through from login starts
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            if (this.userDataDtoReturnSession.office != null &&
                this.userDataDtoReturnSession.office == "Binnymills") {
                this.viewToShowDeliveryManField = true;
                this.setLabourHeadNameDetailsList();
            }
            else {
                this.viewToShowDeliveryManField = false;
            }
            this.setVehicleDetailsList();
            this.setDriverNameDetailsList();
            this.setLabourNameDetailsList();
            if (this.userDataDtoReturnSession.mainStation == "Chennai") {
                this.viewScheduleTripBtn = true;
            }
            else {
                this.viewScheduleTripBtn = false;
            }
        }
    }
    StocksForTripsheetPageTripDetailsComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.ngOnInit = function () {
        this.dtOptionsExpensesDetailsEntry = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Particulars',
                    data: 'particulars'
                },
                {
                    title: 'Quantity',
                    data: 'quantity'
                },
                {
                    title: 'Unit',
                    data: 'unit'
                },
                {
                    title: 'Rate',
                    data: 'rate'
                },
                {
                    title: 'Amount',
                    data: 'amount'
                }
            ],
            dom: 'Bfrtip',
            buttons: [],
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
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerExpensesDetailsEntry.unsubscribe();
        //this.onDestroyUnsubscribtionExpensesDetailsEntry.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    StocksForTripsheetPageTripDetailsComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    StocksForTripsheetPageTripDetailsComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.getDismissReason = function (reason) {
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
    //for the select option with filter ends
    StocksForTripsheetPageTripDetailsComponent.prototype.clickListnerForDropDownInputFieldVehicleNumber = function (event, vehicleNumberPopUpTemplate) {
        this.modelDropDownVehicleNumber = event.item;
        $("#dropDownInputFieldVehicleNumber").val(this.modelDropDownVehicleNumber.truckNumber);
        if ($("#dropDownInputFieldVehicleNumber").val() == "Add New") {
            this.vehicleNumberPopUpBtnLink(vehicleNumberPopUpTemplate);
        }
        else {
            this.modalRefferenceVehicleNumberPopUp.close();
        }
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.vehicleNumberPopUpBtnLink = function (vehicleNumberPopUpTemplate) {
        var _this = this;
        this.modalRefferenceVehicleNumberPopUp = this.modalService.open(vehicleNumberPopUpTemplate, { centered: true, size: "sm" });
        this.modalRefferenceVehicleNumberPopUp.result.then(function (result) {
            _this.modalRefferenceVehicleNumberClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceVehicleNumberClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.closePopUpVehiclePopup = function () {
        $("#addNewVehicleNumberId").val('');
        $("#addNewVehicleNameId").val('');
        $("#dropDownInputFieldVehicleNumber").val('');
        this.modelDropDownVehicleNumber = null;
        this.modalRefferenceVehicleNumberPopUp.close();
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.resetBtnVehicleNumberPopup = function () {
        $("#addNewVehicleNumberId").val('');
        $("#addNewVehicleNameId").val('');
        $("#dropDownInputFieldVehicleNumber").val('');
        this.modelDropDownVehicleNumber = null;
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.saveBtnVehicleNumberPopup = function () {
        var _this = this;
        if ($("#addNewVehicleNumberId").val() == null || $("#addNewVehicleNumberId").val() == undefined ||
            $("#addNewVehicleNumberId").val() == "" || $("#addNewVehicleNameId").val() == null ||
            $("#addNewVehicleNameId").val() == undefined || $("#addNewVehicleNameId").val() == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Mandatory Fields", "Please enter the mandatory mields", "warning");
            return false;
        }
        else {
            this.truckDataDtoNewVehicleNumberSave = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_10__["TruckDataDto"]();
            this.enteredPopUpNewVehicleNumber = $("#addNewVehicleNumberId").val();
            this.eneterdPopUpNewVehicleName = $("#addNewVehicleNameId").val();
            this.truckDataDtoNewVehicleNumberSave.truckNumber = this.enteredPopUpNewVehicleNumber;
            this.truckDataDtoNewVehicleNumberSave.vehicleName = this.eneterdPopUpNewVehicleName;
            this.truckDataDtoNewVehicleNumberSave.office = this.userDataDtoReturnSession.office;
            this.truckDataDtoNewVehicleNumberSave.mainStation = this.userDataDtoReturnSession.mainStation;
            this.truckDataDtoNewVehicleNumberSave.companyId = this.userDataDtoReturnSession.companyId;
            this.masterService.createVehicle(this.truckDataDtoNewVehicleNumberSave).subscribe(function (response) {
                console.log(response);
                _this.truckDataDtoNewVehicleNumberSaveReturn = null;
                _this.truckDataDtoNewVehicleNumberSaveReturn = response;
                if (_this.truckDataDtoNewVehicleNumberSaveReturn.status == "persisted") {
                    $("#addNewVehicleNumberId").val('');
                    $("#addNewVehicleNameId").val('');
                    $("#dropDownInputFieldVehicleNumber").val('');
                    _this.modelDropDownVehicleNumber = null;
                    _this.modalRefferenceVehicleNumberPopUp.close();
                    _this.setVehicleDetailsList();
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Sucessfully Added", "Vehicle Details Added Sucessfully", "success");
                    //this.showSpinnerForAction = false;
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Failure", "Failed to Create Vehicle Details", "error");
                    //this.showSpinnerForAction = false;
                }
            }), function (error) {
                //this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "Problem occur while create Vehicle Setup ", "error");
            },
                function () { return console.log('done'); };
        }
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.getVehicleNumberDetails = function () {
        this.truckDataDtoVehicleNumber = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_10__["TruckDataDto"]();
        this.truckDataDtoVehicleNumber.office = this.userDataDtoReturnSession.mainStation;
        this.truckDataDtoVehicleNumber.isActive = true;
        this.truckDataDtoVehicleNumber.companyId = this.userDataDtoReturnSession.companyId;
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.setVehicleDetailsList = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getVehicleNumberDetails();
        this.masterReadService.getVehicleSetupMaster(this.truckDataDtoVehicleNumber).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.vehicleNumberOption = [];
                _this.vehicleNumberTA = [];
                _this.vehicleNumberOption = response;
                _this.truckDataDtoAddNewVehicleNumber = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_10__["TruckDataDto"]();
                _this.truckDataDtoAddNewVehicleNumber.truckNumber = 'Add New';
                _this.vehicleNumberTA.push(_this.truckDataDtoAddNewVehicleNumber);
                for (var i = 0; i < _this.vehicleNumberOption.length; i++) {
                    _this.vehicleNumberTA.push(_this.vehicleNumberOption[i]);
                }
                //hashmap concept pending here
                _this.showSpinnerForAction = false;
            }
            else {
                _this.vehicleNumberOption = [];
                _this.vehicleNumberTA = [];
                _this.truckDataDtoAddNewVehicleNumber = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_10__["TruckDataDto"]();
                _this.truckDataDtoAddNewVehicleNumber.truckNumber = 'Add New';
                _this.vehicleNumberTA.push(_this.truckDataDtoAddNewVehicleNumber);
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "Problem occur while getting Vehicle Setup Master", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetPageTripDetailsComponent.prototype.clickListnerForDropDownInputFieldDriverName = function (event) {
        this.modelDropDownDriverName = event.item;
        $("#dropDownInputFieldDriverName").val(this.modelDropDownDriverName.driverName);
        console.log(this.modelDropDownDriverName);
        $("#inputFieldDriverConatctNumber").val(this.modelDropDownDriverName.mobileNo == null ? null :
            this.modelDropDownDriverName.mobileNo == undefined ? null :
                this.modelDropDownDriverName.mobileNo);
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.getDriverNameDetails = function () {
        this.driverDataDtoDriverName = new src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_11__["DriverdetailsDto"]();
        this.driverDataDtoDriverName.companyId = this.userDataDtoReturnSession.companyId;
        this.driverDataDtoDriverName.status = "Working";
        if (this.userDataDtoReturnSession.mainAdminStation != null) {
            this.driverDataDtoDriverName.mode = "MainStation";
            this.driverDataDtoDriverName.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        }
        else {
            this.driverDataDtoDriverName.mode = "Station";
            this.driverDataDtoDriverName.mainStation = this.userDataDtoReturnSession.office;
        }
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.setDriverNameDetailsList = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getDriverNameDetails();
        this.masterReadService.getDriver(this.driverDataDtoDriverName).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.driverNameOption = [];
                _this.driverNameTA = [];
                _this.driverNameOption = response;
                for (var i = 0; i < _this.driverNameOption.length; i++) {
                    _this.driverNameTA.push(_this.driverNameOption[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.driverNameOption = [];
                _this.driverNameTA = [];
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "Problem occur while getting Vehicle Setup Master", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetPageTripDetailsComponent.prototype.onKeyPressListnerForDropDownLabourName = function (event) {
        console.log(event);
        if (event.charCode == 13) {
            this.enteredlabourNameListOfHamaliAdd = $("#dropDownInputFieldLabourName").val();
            $("#hamalis").focus();
            if ($("#hamalis").val() != null &&
                $("#hamalis").val() != undefined &&
                $("#hamalis").val() != "") {
                this.enteredlabourNameListOfHamaliAdd = $("#hamalis").val() + "," +
                    this.enteredlabourNameListOfHamaliAdd;
            }
            $("#hamalis").val(this.enteredlabourNameListOfHamaliAdd == null ? null :
                this.enteredlabourNameListOfHamaliAdd == undefined ? null :
                    this.enteredlabourNameListOfHamaliAdd);
        }
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.clickListnerForDropDownInputFieldLabourName = function (event) {
        this.modelDropDownLabourName = event.item;
        $("#dropDownInputFieldLabourName").val(this.modelDropDownLabourName.loaderName);
        this.enteredlabourNameListOfHamaliAdd = $("#dropDownInputFieldLabourName").val();
        $("#hamalis").focus();
        if ($("#hamalis").val() != null &&
            $("#hamalis").val() != undefined &&
            $("#hamalis").val() != "") {
            this.enteredlabourNameListOfHamaliAdd = $("#hamalis").val() + "," +
                this.enteredlabourNameListOfHamaliAdd;
        }
        $("#hamalis").val(this.enteredlabourNameListOfHamaliAdd == null ? null :
            this.enteredlabourNameListOfHamaliAdd == undefined ? null :
                this.enteredlabourNameListOfHamaliAdd);
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.getLabourNameDetails = function () {
        this.lrDtoLabourName = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoLabourName.branch = this.userDataDtoReturnSession.mainStation;
        this.lrDtoLabourName.companyId = this.userDataDtoReturnSession.companyId;
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.setLabourNameDetailsList = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getLabourNameDetails();
        this.masterReadService.getLabourDetails(this.lrDtoLabourName).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.labourNameOption = [];
                _this.labourNameTA = [];
                _this.labourNameOption = response;
                for (var i = 0; i < _this.labourNameOption.length; i++) {
                    _this.labourNameTA.push(_this.labourNameOption[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.labourNameOption = [];
                _this.labourNameTA = [];
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "Problem occur while getting Vehicle Setup Master", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetPageTripDetailsComponent.prototype.clickListnerForDropDownInputFieldLabourHeadName = function (event) {
        this.modelDropDownLabourHeadName = event.item;
        $("#dropDownInputFieldLabourHeadName").val(this.modelDropDownLabourHeadName.loaderHead);
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.getLabourHeadNameDetails = function () {
        this.lrDtoLabourHeadName = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_13__["HireSlipDto"]();
        this.lrDtoLabourHeadName.branch = this.userDataDtoReturnSession.mainStation;
        this.lrDtoLabourHeadName.companyid = this.userDataDtoReturnSession.companyId;
    };
    StocksForTripsheetPageTripDetailsComponent.prototype.setLabourHeadNameDetailsList = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getLabourHeadNameDetails();
        this.masterReadService.getLoaderHeadsDetails(this.lrDtoLabourHeadName).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.labourHeadNameOption = [];
                _this.labourHeadNameTA = [];
                _this.labourHeadNameOption = response;
                for (var i = 0; i < _this.labourHeadNameOption.length; i++) {
                    _this.labourHeadNameTA.push(_this.labourHeadNameOption[i]);
                }
                _this.showSpinnerForAction = false;
            }
            else {
                _this.labourHeadNameOption = [];
                _this.labourHeadNameTA = [];
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "Problem occur while getting Loader Heads details", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetPageTripDetailsComponent.prototype.clickResetBtn = function () {
        var _this = this;
        localStorage.clear();
        localStorage.setItem('stockTripsheetDriverPrint', JSON.stringify(""));
        this.viewStockTripsheetPrint = true;
        window.addEventListener('afterPopUp', function (event) {
            _this.viewStockTripsheetPrint = false;
            localStorage.clear();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StocksForTripsheetPageTripDetailsComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vehicleNumberPopUpTemplate'),
        __metadata("design:type", Object)
    ], StocksForTripsheetPageTripDetailsComponent.prototype, "vehicleNumberPopUpTemplate", void 0);
    StocksForTripsheetPageTripDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks-for-tripsheet-page-trip-details',
            template: __webpack_require__(/*! ./stocks-for-tripsheet-page-trip-details.component.html */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-details/stocks-for-tripsheet-page-trip-details.component.html"),
            styles: [__webpack_require__(/*! ./stocks-for-tripsheet-page-trip-details.component.css */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-details/stocks-for-tripsheet-page-trip-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__["MasterReadService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_12__["MasterService"]])
    ], StocksForTripsheetPageTripDetailsComponent);
    return StocksForTripsheetPageTripDetailsComponent;
}());



/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-schedule/stocks-for-tripsheet-page-trip-schedule.component.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-schedule/stocks-for-tripsheet-page-trip-schedule.component.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep table.dataTable {\n\theight: 180px!important;\n}\n/* truck mvoing animtion starts */\n@-webkit-keyframes movingTopToBottom {\n  0% {\n    top: -15px;\n  }\n  95% {\n    top: 150px;\n  }\n  100% {\n    top: 165px;\n  }\n}\n@keyframes movingTopToBottom {\n  0% {\n    top: -15px;\n  }\n  95% {\n    top: 150px;\n  }\n  100% {\n    top: 165px;\n  }\n}\n.container {\n  height: 150px;\n  overflow: hidden;\n}\n#divTAReviews {\n  -webkit-animation: movingTopToBottom 5s linear infinite;\n          animation: movingTopToBottom 5s linear infinite;\n  position: relative;\n  background: lightblue;\n  display: inline-block;\n  padding: 10px;\n}\n/* truck mvoing animtion stops */\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS9zdG9ja3MtZm9yLXRyaXBzaGVldC1wYWdlLXRyaXAtc2NoZWR1bGUvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS10cmlwLXNjaGVkdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx3QkFBd0I7Q0FDeEI7QUFDRCxrQ0FBa0M7QUFDbEM7RUFDRTtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7Q0FDRjtBQVZEO0VBQ0U7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0UsV0FBVztHQUNaO0NBQ0Y7QUFDRDtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHdEQUFnRDtVQUFoRCxnREFBZ0Q7RUFDaEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsY0FBYztDQUNmO0FBQ0QsaUNBQWlDO0FBRWpDO0NBQ0MsVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS9zdG9ja3MtZm9yLXRyaXBzaGVldC1wYWdlLXRyaXAtc2NoZWR1bGUvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS10cmlwLXNjaGVkdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgdGFibGUuZGF0YVRhYmxlIHtcblx0aGVpZ2h0OiAxODBweCFpbXBvcnRhbnQ7XG59XG4vKiB0cnVjayBtdm9pbmcgYW5pbXRpb24gc3RhcnRzICovXG5Aa2V5ZnJhbWVzIG1vdmluZ1RvcFRvQm90dG9tIHtcbiAgMCUge1xuICAgIHRvcDogLTE1cHg7XG4gIH1cbiAgOTUlIHtcbiAgICB0b3A6IDE1MHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMTY1cHg7XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2RpdlRBUmV2aWV3cyB7XG4gIGFuaW1hdGlvbjogbW92aW5nVG9wVG9Cb3R0b20gNXMgbGluZWFyIGluZmluaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLyogdHJ1Y2sgbXZvaW5nIGFuaW10aW9uIHN0b3BzICovXG5cbjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcblx0dG9wOiAyNnB4O1xuICAgIGxlZnQ6IDE4OHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-schedule/stocks-for-tripsheet-page-trip-schedule.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-schedule/stocks-for-tripsheet-page-trip-schedule.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"card \">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-2 \">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" Placeholder=\"LR Number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"lrNumber\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressListnerForLRNumber($event);\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input #binsDropDown id=\"dropDownInputFieldBins\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDropDownInputFieldBins($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDropDownBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDropDownInputFieldBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDropDownBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDropDownBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Please Select The Bins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressListnerForBinsDestination($event);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDropDownBinsTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\n\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"col-md-10 vl\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Eligible LRs</h6>\n\t\t\t\t\t\t\t\t\t\t<table datatable id=\"eligibleLrsTableId\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsEligibleLrs\" [dtTrigger]=\"dtTriggerEligibleLrs\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let eligibleLrsData of eligibleLrsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.bookingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Remaining LRs</h6>\n\t\t\t\t\t\t\t\t\t\t<table datatable id=\"remainingLrsTableId\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionRemainingLrs\" [dtTrigger]=\"dtTriggerRemainingLrs\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let remainingLrsData of remainingLrsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.bookingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!--  to open  popup use this << (click)=\"openPopup(content)\" >>  -->\n\t\t\t\t\t<!-- Row -->\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetailsTwo\">\n\t\t\t\t\t\t\t\t<ng-template #content let-save=\"close\" let-cancel=\"close\" let-d=\"dismiss\">\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t<h5>Add New Truck Capacity</h5>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5>Add Truck Capacity</h5>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"truckCapacityPopup\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truc Capacity (Tons)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"save('Save click')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"cancle('Cancel click')\">Cancel</button>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--pop up end row-->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" id=\"backToStockForTripsheetBtn\" mat-button\n\t\t\t\t\t\t\tmatStepperPrevious>Back</button>\n\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" id=\"backToStockForTripsheetBtn\" (click)=\"check(matStepperNext);\">Back</button>\n\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\" (click)=\"stockTripNextBtn();\" id=\"nextToTripDetailsBtn\"\n\t\t\t\t\t\t\tmat-button matStepperNext>Next</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-schedule/stocks-for-tripsheet-page-trip-schedule.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-schedule/stocks-for-tripsheet-page-trip-schedule.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: StocksForTripsheetPageTripScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksForTripsheetPageTripScheduleComponent", function() { return StocksForTripsheetPageTripScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_consignor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/consignor-service */ "./src/app/dataService/consignor-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
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



//for the select option with filter ends


//for drag and drop ends
//for popup modal starts 






//for popup modal ends
var StocksForTripsheetPageTripScheduleComponent = /** @class */ (function () {
    function StocksForTripsheetPageTripScheduleComponent(tripCreationMakeATripScreen, modalService, router, masterReadService, hireslipService) {
        var _this = this;
        this.tripCreationMakeATripScreen = tripCreationMakeATripScreen;
        this.modalService = modalService;
        this.router = router;
        this.masterReadService = masterReadService;
        this.hireslipService = hireslipService;
        //
        this.dtTriggerEligibleLrs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerRemainingLrs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loadingIndicator = true;
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.branchBinsOption = [];
        this.lrDtoBranchBins = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.branchBinsTA = [];
        this.focusDropDownBinsTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchDropDownInputFieldBins = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDropDownBinsTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.branchBinsTA
                : _this.branchBinsTA.filter(function (v) { return v.godownName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDropDownBins = function (x) { return x.godownName; };
        this.stockTripSheetReturnLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoControlBinService = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoCreateATripDetailLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.enteredStockBinsDestination = null;
        this.enteredLrNumber = null;
        this.selectedControBinsDataOfAllLrsList = [];
        this.resultList = null;
        this.viewNextTripSheetBtn = false;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //sweet alert starts
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Session Expired",
                text: "Please relogin to access the application!",
                icon: "error",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.logInPage();
            });
            //sweet alert ends
        }
        if (this.isLoggedIn) {
            // userdata get through from login starts
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            //this.stockTripSheetReturnLocalStorage = JSON.parse(localStorage.getItem('stockTripSheetScheduleForLocalStorage'));
            //console.log( this.stockTripSheetReturnLocalStorage);
            this.setBranchAreaDetailsList();
            /*  this.lrDtoBranchBins = new LRDto();
              this.lrDtoBranchBins.mode = this.userDataDtoReturnSession.office;
              this.lrDtoBranchBins.companyId = this.userDataDtoReturnSession.companyId;
              if (this.userDataDtoReturnSession.isOpenTrip != null &&
                  this.userDataDtoReturnSession.isOpenTrip) {
                      this.setBranchAreaDetailsList();
              }else if(){
  
              }*/
        }
    }
    StocksForTripsheetPageTripScheduleComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.ngOnInit = function () {
        this.dtOptionsEligibleLrs = {
            dom: 'Bfrtip',
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 220,
            "scrollCollapse": true,
            pagingType: 'full_numbers',
        }, this.dtOptionRemainingLrs = {
            dom: 'Bfrtip',
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 220,
            "scrollCollapse": true,
            pagingType: 'full_numbers',
        };
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerEligibleLrs.next();
        this.dtTriggerRemainingLrs.next();
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerEligibleLrs.unsubscribe();
        this.dtTriggerRemainingLrs.unsubscribe();
    };
    //for the select option with filter starts
    StocksForTripsheetPageTripScheduleComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    //to insert value of selected row in table to input field starts
    StocksForTripsheetPageTripScheduleComponent.prototype.RowSelected = function (confirmedConsignorListData) {
        this.selectedUser = confirmedConsignorListData;
        this.consignorName = this.selectedUser.name;
        console.log(this.selectedUser.name);
    };
    //to insert value of selected row in table to input field ends
    //for popup modal starts 
    StocksForTripsheetPageTripScheduleComponent.prototype.openPopup = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (resultContent) {
            _this.closeResultContent = "Closed with: " + resultContent;
        }, function (reason) {
            _this.closeResultContent = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    //for popup modal ends
    StocksForTripsheetPageTripScheduleComponent.prototype.clickListnerForDropDownInputFieldBins = function (event) {
        this.modelDropDownBins = event.item;
        $("#dropDownInputFieldBins").val(this.modelDropDownBins.godownName);
        console.log(this.modelDropDownBins);
        this.setControlBinsDestinationDetails();
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.getMethodForBranchArea = function () {
        this.lrDtoBranchBins = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoBranchBins.mode = this.userDataDtoReturnSession.office;
        this.lrDtoBranchBins.companyId = this.userDataDtoReturnSession.companyId;
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.setBranchAreaDetailsList = function () {
        var _this = this;
        this.showSpinnerForAction = true;
        this.getMethodForBranchArea();
        this.masterReadService.getBranchAreaDetailsService(this.lrDtoBranchBins).subscribe(function (response) {
            if (response.length > 0) {
                _this.branchBinsOption = [];
                _this.branchBinsTA = [];
                _this.branchBinsOption = response;
                for (var i = 0; i < _this.branchBinsOption.length; i++) {
                    _this.branchBinsTA.push(_this.branchBinsOption[i]);
                }
                //hashmap concept pending here
                _this.showSpinnerForAction = false;
            }
            else {
                _this.branchBinsOption = [];
                _this.branchBinsTA = [];
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "Problem occur while getting Area Details", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetPageTripScheduleComponent.prototype.onKeyPressListnerForBinsDestination = function ($event) {
        if ($event.charCode == 13) {
            this.setControlBinsDestinationDetails();
        }
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.onKeyPressListnerForLRNumber = function ($event) {
        if ($event.charCode == 13) {
            console.log($event.charCode);
            this.setLRNumberDetailsValueInDatatTable();
        }
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.setControlBinsDestinationDetails = function () {
        var _this = this;
        this.lrDtoControlBinService = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.stockTripSheetReturnLocalStorage = JSON.parse(localStorage.getItem('stockTripSheetScheduleForLocalStorage'));
        localStorage.clear();
        console.log(this.stockTripSheetReturnLocalStorage);
        this.enteredStockBinsDestination = $("#dropDownInputFieldBins").val();
        this.lrDtoControlBinService.destination = this.enteredStockBinsDestination;
        this.lrDtoControlBinService.branch = this.userDataDtoReturnSession.office;
        this.lrDtoControlBinService.branchType = this.userDataDtoReturnSession.role;
        this.lrDtoControlBinService.stationType = "local";
        this.lrDtoControlBinService.companyId = this.userDataDtoReturnSession.companyId;
        this.showSpinnerForAction = true;
        this.hireslipService.getArticlesStocksForDestination(this.lrDtoControlBinService).subscribe(function (response) {
            console.log(response);
            /*this.remainingLrsDataList = [];
            $("#remainingLrsTableId").DataTable().destroy();
            this.remainingLrsDataList = response;
            setTimeout(() => {
                this.dtTriggerRemainingLrs.next();
            }, 3000);
            this.showSpinnerForAction = false;*/
            _this.remainingLrsDataList = [];
            _this.selectedControBinsDataOfAllLrsList = [];
            _this.selectedControBinsDataOfAllLrsList = response;
            if (_this.selectedControBinsDataOfAllLrsList != null &&
                _this.selectedControBinsDataOfAllLrsList.length > 0) {
                _this.remainingLrsDataList = _this.selectedControBinsDataOfAllLrsList;
            }
            console.log(_this.remainingLrsDataList);
            console.log(_this.eligibleLrsDataList);
            if (_this.eligibleLrsDataList == null || _this.eligibleLrsDataList == undefined ||
                _this.eligibleLrsDataList == "" || _this.eligibleLrsDataList.length == 0) {
                _this.eligibleLrsDataList = [];
            }
            _this.remainingLrsDataList = _this.remainingLrsDataList.filter(function (remainingLrsData) {
                return !_this.eligibleLrsDataList.find(function (eligibleLrsData) {
                    return (eligibleLrsData.lrNumber === remainingLrsData.lrNumber);
                });
            });
            console.log(_this.remainingLrsDataList);
            $("#remainingLrsTableId").DataTable().destroy();
            setTimeout(function () {
                _this.dtTriggerRemainingLrs.next();
            }, 3000);
            _this.showSpinnerForAction = false;
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Server Error", "Problem occur while getting  Stock Details Details", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.setLRNumberDetailsValueInDatatTable = function () {
        this.enteredLrNumber = null;
        this.enteredLrNumber = $("#lrNumber").val();
        this.enteredLrNumber = this.enteredLrNumber == null ? null : this.enteredLrNumber.toUpperCase();
        // finding eligible & remaing lrs method
        this.showSpinnerForAction = true;
        var validateRemaingLrNumber = this.findRemainingLrsDup(this.remainingLrsDataList, this.enteredLrNumber);
        var validateEligibleLrNumber = this.findEligibleLrs(this.eligibleLrsDataList, this.enteredLrNumber);
        this.showSpinnerForAction = false;
        console.log("EligibleFind: " + validateEligibleLrNumber);
        console.log("RemaingFind: " + validateRemaingLrNumber);
        if (validateRemaingLrNumber == null && validateEligibleLrNumber == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Alert", "LR number does not exist", "warning");
            $("#lrNumber").focus();
        }
        else if (validateEligibleLrNumber != null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Make Invoice", "LRNumber '" + $("#lrNumber").val() + "'Already Transfered", "warning");
            $("#lrNumber").focus();
        }
        else {
            this.setLrNumberEligibleAndRemaingLrs();
            $("#lrNumber").val('');
            $("#lrNumber").focus();
        }
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.findRemainingLrsDup = function (findRemaingLrs, lrNumber) {
        var checkingRemLrNumber = null;
        var remainLrNumberReturn = null;
        for (var i = 0; i < findRemaingLrs.length; i++) {
            checkingRemLrNumber = findRemaingLrs[i].lrNumber;
            if (checkingRemLrNumber == lrNumber) {
                remainLrNumberReturn = checkingRemLrNumber;
                break;
            }
            else {
                remainLrNumberReturn = null;
            }
        }
        return remainLrNumberReturn;
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.findEligibleLrs = function (findEligibleLrs, lrNumber) {
        var checkingEligLrNumber = null;
        var eligibleLrNumberReturn = null;
        for (var i = 0; i < findEligibleLrs.length; i++) {
            checkingEligLrNumber = findEligibleLrs[i].lrNumber;
            if (checkingEligLrNumber == lrNumber) {
                eligibleLrNumberReturn = checkingEligLrNumber;
                break;
            }
            else {
                eligibleLrNumberReturn = null;
            }
        }
        return eligibleLrNumberReturn;
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.setLrNumberEligibleAndRemaingLrs = function () {
        var _this = this;
        this.resultList = null;
        this.showSpinnerForAction = true;
        this.resultList = this.remainingLrsDataList.filter(function (remainingLrsData) {
            return remainingLrsData.lrNumber == $("#lrNumber").val();
        });
        if (this.resultList.length > 0) {
            for (var i = 0; i < this.resultList.length; i++) {
                this.eligibleLrsDataList.push(this.resultList[i]);
            }
            $("#eligibleLrsTableId").DataTable().destroy();
            setTimeout(function () {
                _this.dtTriggerEligibleLrs.next();
            }, 3000);
            /* this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
                 dtElement.dtInstance.then((dtInstance: any) => {
                     if (dtInstance.table().node().id == "eligiblelrsTableId") {
                         dtInstance.destroy();
                         for (let i = 0; i < this.resultList.length; i++) {
                             this.eligibleLrsDataList.push(this.resultList[i]);
                         }
                         this.dtTriggerEligibleLrs.next();
                     }
                 });
             });*/
            var deletedContrat = this.remainingLrsDataList.find(function (x) { return x.lrNumber === $("#lrNumber").val(); });
            this.remainingLrsDataList.splice(this.remainingLrsDataList.indexOf(deletedContrat), 1);
            $("#remainingLrsTableId").DataTable().destroy();
            setTimeout(function () {
                _this.dtTriggerRemainingLrs.next();
            }, 3000);
            this.showSpinnerForAction = false;
            // console.log(deletedContrat);
            //console.log(this.remainingLrsDataList.splice(this.remainingLrsDataList.indexOf(deletedContrat), 1));
            /* this.dtElements.forEach((dtElement: DataTableDirective, index: number) => {
                 dtElement.dtInstance.then((dtInstance: any) => {
                     if (dtInstance.table().node().id == "DataTables_Table_2") {
                         dtInstance.destroy();
                         this.dtTriggerRemainingLrs.next();
                     }
                 });
             });*/
        }
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.check = function (matStepperNext) {
    };
    StocksForTripsheetPageTripScheduleComponent.prototype.stockTripNextBtn = function () {
        this.lrDtoCreateATripDetailLocalStorage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_6__["LRDto"]();
        this.lrDtoCreateATripDetailLocalStorage.lrDtoEligible = this.eligibleLrsDataList;
        localStorage.clear();
        localStorage.setItem('createTripsheetForDriverLocalStorage', JSON.stringify(this.lrDtoCreateATripDetailLocalStorage));
        console.log(this.lrDtoCreateATripDetailLocalStorage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StocksForTripsheetPageTripScheduleComponent.prototype, "dtElements", void 0);
    StocksForTripsheetPageTripScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks-for-tripsheet-page-trip-schedule',
            template: __webpack_require__(/*! ./stocks-for-tripsheet-page-trip-schedule.component.html */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-schedule/stocks-for-tripsheet-page-trip-schedule.component.html"),
            styles: [__webpack_require__(/*! ./stocks-for-tripsheet-page-trip-schedule.component.css */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-schedule/stocks-for-tripsheet-page-trip-schedule.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_consignor_service__WEBPACK_IMPORTED_MODULE_1__["ConsignorService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__["MasterReadService"],
            src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_10__["HireslipService"]])
    ], StocksForTripsheetPageTripScheduleComponent);
    return StocksForTripsheetPageTripScheduleComponent;
}());



/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page.module.ts ***!
  \*******************************************************************************/
/*! exports provided: StocksForTripSheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksForTripSheetPageModule", function() { return StocksForTripSheetPageModule; });
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
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_page_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page.routing */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page.routing.ts");
/* harmony import */ var src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_stocks_for_tripsheet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/stocks-for-tripsheet-page/stocks-for-tripsheet/stocks-for-tripsheet.component */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet/stocks-for-tripsheet.component.ts");
/* harmony import */ var src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_page_local_details_stocks_for_tripsheet_page_local_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-local-details/stocks-for-tripsheet-page-local-details.component */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-local-details/stocks-for-tripsheet-page-local-details.component.ts");
/* harmony import */ var src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_page_stock_summary_stocks_for_tripsheet_page_stock_summary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-stock-summary/stocks-for-tripsheet-page-stock-summary.component */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-stock-summary/stocks-for-tripsheet-page-stock-summary.component.ts");
/* harmony import */ var src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_page_trip_details_stocks_for_tripsheet_page_trip_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-details/stocks-for-tripsheet-page-trip-details.component */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-details/stocks-for-tripsheet-page-trip-details.component.ts");
/* harmony import */ var src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_page_trip_schedule_stocks_for_tripsheet_page_trip_schedule_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-schedule/stocks-for-tripsheet-page-trip-schedule.component */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page-trip-schedule/stocks-for-tripsheet-page-trip-schedule.component.ts");
/* harmony import */ var src_app_stocks_for_tripsheet_page_stock_for_tripsheet_driver_print_stock_for_tripsheet_driver_print_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/stocks-for-tripsheet-page/stock-for-tripsheet-driver-print/stock-for-tripsheet-driver-print.component */ "./src/app/stocks-for-tripsheet-page/stock-for-tripsheet-driver-print/stock-for-tripsheet-driver-print.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*old datatable*/ 


//for select option search starts




//for select option search ends
//for drag and drop starts

//for drag and drop ends








var StocksForTripSheetPageModule = /** @class */ (function () {
    function StocksForTripSheetPageModule() {
    }
    StocksForTripSheetPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_page_routing__WEBPACK_IMPORTED_MODULE_12__["StocksForTripSheetPageRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_10__["DragulaModule"]
            ],
            declarations: [src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_stocks_for_tripsheet_component__WEBPACK_IMPORTED_MODULE_13__["StocksForTripsheetComponent"],
                src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_page_local_details_stocks_for_tripsheet_page_local_details_component__WEBPACK_IMPORTED_MODULE_14__["StocksForTripsheetPageLocalDetailsComponent"],
                src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_page_stock_summary_stocks_for_tripsheet_page_stock_summary_component__WEBPACK_IMPORTED_MODULE_15__["StocksForTripsheetPageStockSummaryComponent"],
                src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_page_trip_details_stocks_for_tripsheet_page_trip_details_component__WEBPACK_IMPORTED_MODULE_16__["StocksForTripsheetPageTripDetailsComponent"],
                src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_page_trip_schedule_stocks_for_tripsheet_page_trip_schedule_component__WEBPACK_IMPORTED_MODULE_17__["StocksForTripsheetPageTripScheduleComponent"],
                src_app_stocks_for_tripsheet_page_stock_for_tripsheet_driver_print_stock_for_tripsheet_driver_print_component__WEBPACK_IMPORTED_MODULE_18__["StockForTripsheetDriverPrintComponent"]]
        })
    ], StocksForTripSheetPageModule);
    return StocksForTripSheetPageModule;
}());



/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page.routing.ts":
/*!********************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet-page.routing.ts ***!
  \********************************************************************************/
/*! exports provided: StocksForTripSheetPageRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksForTripSheetPageRoutes", function() { return StocksForTripSheetPageRoutes; });
/* harmony import */ var src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_stocks_for_tripsheet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/stocks-for-tripsheet-page/stocks-for-tripsheet/stocks-for-tripsheet.component */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet/stocks-for-tripsheet.component.ts");

var StocksForTripSheetPageRoutes = [
    {
        path: '',
        children: [
            {
                path: 'stocksForTripsheet',
                component: src_app_stocks_for_tripsheet_page_stocks_for_tripsheet_stocks_for_tripsheet_component__WEBPACK_IMPORTED_MODULE_0__["StocksForTripsheetComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet/stocks-for-tripsheet.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet/stocks-for-tripsheet.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-horizontal-stepper-header {\n\theight: auto !important;\n}\n\n::ng-deep table.dataTable {\n\theight: 220px;\n}\n\n::ng-deep .mat-horizontal-content-container {\n\toverflow: hidden;\n\tpadding: 0px 0px 0px 0px !important;\n}\n\n/* ::ng-deep basic-container .mat-step-header .mat-step-icon-selected { */\n\n/* \tbackground-color: ; */\n\n/* \tcolor: #fff; */\n\n/* } */\n\n::ng-deep .mat-step-header .mat-step-icon-selected, .mat-step-header .mat-step-icon-state-done,\n\t.mat-step-header .mat-step-icon-state-edit .mat-step-header .mat-step-icon\n\t{\n\tbackground-color: blue;\n\tcolor: #fff;\n}\n\n/* ::ng-deep .mat-step-header.cdk-program-focused, .mat-step-header:hover { */\n\n/* \tbackground-color: #ffcd72; */\n\n/* } */\n\n/* for label starts */\n\n::ng-deep.mat-step-label {\n\tfont-size: 16px;\n\tfont-weight: 700;\n}\n\n/* icon fonts */\n\n::ng-deep .mat-horizontal-stepper-header .mat-step-icon {\n\tfont-size: 18px;\n}\n\n/* previous icon */\n\n.mat-step-header .mat-step-icon-selected, .mat-step-header .mat-step-icon-state-done,\n\t.mat-step-header .mat-step-icon-state-edit {\n\tbackground-color: #673ab7;\n\tcolor: #fff;\n}\n\n/* icons */\n\n::ng-deep .mat-step-icon {\n\theight: 30px;\n\twidth: 30px;\n}\n\n::ng-deep .mat-step-icon .mat-icon {\n\tfont-size: 20px;\n\theight: 22px;\n\twidth: 20px;\n}\n\n/* for row of stepper */\n\n::ng-deep .mat-horizontal-stepper-header-container {\n\theight: 32px;\n\tbackground-color: lightcyan;\n}\n\n/* on hover */\n\n::ng-deep .mat-step-header:hover, .mat-step-label:hover {\n\tbackground-color: white;\n\tcolor: #fff;\n}\n\n::ng-deep .mat-stepper-horizontal-line {\n\tborder-top-width: 2px !important;\n}\n\n/* btn css */\n\n@media ( max-width : 768px) {\n\t.button_custome {\n\t\tpadding-top: 10px;\n\t}\n}\n\n::ng-deep .mat-horizontal-stepper-header {\n\tpointer-events: none !important;\n}\n\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n\n@media print {\n\tbody, html * {\n\t\tvisibility: hidden;\n\t}\n\t#showStockTripSheetMain, #showStockTripSheetMain * {\n\t\tvisibility: hidden;\n\t}\n\t#stockTripsheetPrintId {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS9zdG9ja3MtZm9yLXRyaXBzaGVldC9zdG9ja3MtZm9yLXRyaXBzaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msd0JBQXdCO0NBQ3hCOztBQUVEO0NBQ0MsY0FBYztDQUNkOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCLG9DQUFvQztDQUNwQzs7QUFFRCwwRUFBMEU7O0FBQzFFLDBCQUEwQjs7QUFDMUIsbUJBQW1COztBQUNuQixPQUFPOztBQUNQOzs7Q0FHQyx1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaOztBQUVELDhFQUE4RTs7QUFDOUUsaUNBQWlDOztBQUNqQyxPQUFPOztBQUVQLHNCQUFzQjs7QUFDdEI7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCOztBQUNELGdCQUFnQjs7QUFDaEI7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBRUQsbUJBQW1COztBQUNuQjs7Q0FFQywwQkFBMEI7Q0FDMUIsWUFBWTtDQUNaOztBQUNELFdBQVc7O0FBQ1g7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixZQUFZO0NBQ1o7O0FBQ0Qsd0JBQXdCOztBQUN4QjtDQUNDLGFBQWE7Q0FDYiw0QkFBNEI7Q0FDNUI7O0FBQ0QsY0FBYzs7QUFDZDtDQUNDLHdCQUF3QjtDQUN4QixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxpQ0FBaUM7Q0FDakM7O0FBRUQsYUFBYTs7QUFDYjtDQUNDO0VBQ0Msa0JBQWtCO0VBQ2xCO0NBQ0Q7O0FBRUQ7Q0FDQyxnQ0FBZ0M7Q0FDaEM7O0FBQ0Q7Q0FDQyxVQUFVO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLE9BQU87RUFDUDtDQUNEIiwiZmlsZSI6InNyYy9hcHAvc3RvY2tzLWZvci10cmlwc2hlZXQtcGFnZS9zdG9ja3MtZm9yLXRyaXBzaGVldC9zdG9ja3MtZm9yLXRyaXBzaGVldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG5cdGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgdGFibGUuZGF0YVRhYmxlIHtcblx0aGVpZ2h0OiAyMjBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHBhZGRpbmc6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4vKiA6Om5nLWRlZXAgYmFzaWMtY29udGFpbmVyIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQgeyAqL1xuLyogXHRiYWNrZ3JvdW5kLWNvbG9yOiA7ICovXG4vKiBcdGNvbG9yOiAjZmZmOyAqL1xuLyogfSAqL1xuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcblx0Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb25cblx0e1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuXHRjb2xvcjogI2ZmZjtcbn1cblxuLyogOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCwgLm1hdC1zdGVwLWhlYWRlcjpob3ZlciB7ICovXG4vKiBcdGJhY2tncm91bmQtY29sb3I6ICNmZmNkNzI7ICovXG4vKiB9ICovXG5cbi8qIGZvciBsYWJlbCBzdGFydHMgKi9cbjo6bmctZGVlcC5tYXQtc3RlcC1sYWJlbCB7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cbi8qIGljb24gZm9udHMgKi9cbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIHByZXZpb3VzIGljb24gKi9cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcblx0Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcblx0Y29sb3I6ICNmZmY7XG59XG4vKiBpY29ucyAqL1xuOjpuZy1kZWVwIC5tYXQtc3RlcC1pY29uIHtcblx0aGVpZ2h0OiAzMHB4O1xuXHR3aWR0aDogMzBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1pY29uIC5tYXQtaWNvbiB7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0aGVpZ2h0OiAyMnB4O1xuXHR3aWR0aDogMjBweDtcbn1cbi8qIGZvciByb3cgb2Ygc3RlcHBlciAqL1xuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuXHRoZWlnaHQ6IDMycHg7XG5cdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcbn1cbi8qIG9uIGhvdmVyICovXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlcjpob3ZlciwgLm1hdC1zdGVwLWxhYmVsOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGNvbG9yOiAjZmZmO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG5cdGJvcmRlci10b3Atd2lkdGg6IDJweCAhaW1wb3J0YW50O1xufVxuXG4vKiBidG4gY3NzICovXG5AbWVkaWEgKCBtYXgtd2lkdGggOiA3NjhweCkge1xuXHQuYnV0dG9uX2N1c3RvbWUge1xuXHRcdHBhZGRpbmctdG9wOiAxMHB4O1xuXHR9XG59XG5cbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuXHRwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xuXHR0b3A6IDI2cHg7XG4gICAgbGVmdDogMTg4cHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuQG1lZGlhIHByaW50IHtcblx0Ym9keSwgaHRtbCAqIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I3Nob3dTdG9ja1RyaXBTaGVldE1haW4sICNzaG93U3RvY2tUcmlwU2hlZXRNYWluICoge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0fVxuXHQjc3RvY2tUcmlwc2hlZXRQcmludElkIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHR0b3A6IDA7XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet/stocks-for-tripsheet.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet/stocks-for-tripsheet.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n</head>\n\n<!--<body>-->\n<div class=\"row\" *ngIf=\"isLoggedIn\" id=\"showStockTripSheetMain\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<h6 class=\"card-title text-white\">Stocks For Tripsheet</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 5px;\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<mat-horizontal-stepper [linear]=\"false\" #stepper>\n\t\t\t\t\t\t\t\t\t<!-- one starts -->\n\t\t\t\t\t\t\t\t\t<mat-step [stepControl]=\"firstFormGroup\">\n\t\t\t\t\t\t\t\t\t\t<!--<form [formGroup]=\"firstFormGroup\">-->\n\t\t\t\t\t\t\t\t\t\t<ng-template matStepLabel>Stocks For Tripsheet</ng-template>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStocks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSummary</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"tripSheetForStockSummaryTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStockSummary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStockSummary\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Tot LRs</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let stockSummaryData of stockSummaryDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.endDest }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockSummaryData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: lightgrey;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableLRDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedGetTripLRDeatils(stockSummaryData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Get Total LR Details\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-eye\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 id=\"viewBinsStockMsgId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid orange;\" class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{viewBinsStockMsg}}</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"tripSheetForStockDetailsTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStockDetails\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStockDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Act Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Chg Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let stockDetailsData of stockDetailsDataList \">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{stockDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stockDetailsData.totalAmount }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!---->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\" id=\"makeATripBtnId\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\tmatStepperNext *ngIf=\"makeAtripBtnHideShow\">Make A\n\t\t\t\t\t\t\t\t\t\t\t\t\tTrip\n\t\t\t\t\t\t\t\t\t\t\t\t\tSheet</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" id=\"tripSheetBtnId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"tripSheetBlackBtnHideShow\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"tripSheetBlackBtnClickListner();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tTrip Sheet\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\" id=\"tripSheetBtnId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"tripSheetBtnHideShow\" mat-button matStepperNext\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"tripSheetBtnClickListner();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tTrip Sheet\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!--</form>-->\n\t\t\t\t\t\t\t\t\t</mat-step>\n\t\t\t\t\t\t\t\t\t<!-- one flow is ends -->\n\t\t\t\t\t\t\t\t\t<!-- two flow is starts  -->\n\t\t\t\t\t\t\t\t\t<mat-step [stepControl]=\"secondFormGroup\">\n\t\t\t\t\t\t\t\t\t\t<!--<form [formGroup]=\"secondFormGroup\">-->\n\t\t\t\t\t\t\t\t\t\t<ng-template matStepLabel>Trip Schedule For <span\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: blue;\">{{viewLocalTripsheetMsg}}\n\t\t\t\t\t\t\t\t\t\t\t</span></ng-template>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForTripScheduleAction\" class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 \">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" Placeholder=\"LR Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"lrNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressListnerForLRNumber($event);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #binsDropDown id=\"dropDownInputFieldBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDropDownInputFieldBins($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDropDownBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDropDownInputFieldBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDropDownBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDropDownBins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Please Select The Bins\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressListnerForBinsDestination($event);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDropDownBinsTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Eligible LRs</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"eligibleLrsTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsEligibleLrs\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerEligibleLrs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let eligibleLrsData of eligibleLrsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.totalArticles }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.consignorName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.consigneeName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.bookingDateStr }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.actualWeight }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.chargedWeight }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ eligibleLrsData.totalAmount }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: lightgrey;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedEligibleLrDelete(eligibleLrsData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove From Eligible Lrs\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style='float:right;' class=\"btn btn-dark m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateMoveAllBtnForScheduleTrip();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Move All To Eligible Lrs\" id=\"moveAllBtn\">Move\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAll</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Remaining LRs</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"remainingLrsTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionRemainingLrs\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerRemainingLrs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let remainingLrsData of remainingLrsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.totalArticles }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.consignorName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.consigneeName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.bookingDateStr }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.actualWeight }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.chargedWeight }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ remainingLrsData.totalAmount }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"viewNextDarkBtnForScheduleTrip\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateNextBtnForScheduleTrip();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearToTripDetailsBtn\">Next</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"viewNextGreenBtnForScheduleTrip\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"scheduleForNextTripBtn();\" id=\"nextToTripDetailsBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tmat-button matStepperNext>Next</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"resetBtnTripSheduleFrom();\">Reset</button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\" (click)=\"stockTripClearBtn();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearToTripDetailsBtn\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!--</form>-->\n\t\t\t\t\t\t\t\t\t</mat-step>\n\t\t\t\t\t\t\t\t\t<!-- two flow is end -->\n\t\t\t\t\t\t\t\t\t<!-- three flow is starts -->\n\t\t\t\t\t\t\t\t\t<mat-step [stepControl]=\"thirdFormGroup\">\n\t\t\t\t\t\t\t\t\t\t<!--<form [formGroup]=\"thirdFormGroup\">-->\n\t\t\t\t\t\t\t\t\t\t<ng-template matStepLabel>Trip Details</ng-template>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForTripDetailsAction\" class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title bbtitle\">Vehicle Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #vehicleNumberDropDown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dropDownInputFieldVehicleNumber\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDropDownInputFieldVehicleNumber($event,vehicleNumberPopUpTemplate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDropDownVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDropDownInputFieldVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDropDownVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDropDownVehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Please Select The Vehicle Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDropDownVehicleNumberTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe second autocomplete starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title bbtitle\">Driver Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #driverNameDropDown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dropDownInputFieldDriverName\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDropDownInputFieldDriverName($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDropDownDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDropDownInputFieldDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDropDownDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDropDownDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Please Select The Driver Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDropDownDriverNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"inputFieldDriverConatctNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Contact Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title bbtitle\">Labour Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"!viewToShowDeliveryManField\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Delivery Man</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #labourHeadNameDropDown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dropDownInputFieldLabourHeadName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDropDownInputFieldLabourHeadName($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDropDownLabourHeadName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDropDownInputFieldLabourHeadName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDropDownLabourHeadName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDropDownLabourHeadName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Please Select Labour Head Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressListnerForDropDownLabourHead($event);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDropDownLabourHeadNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Labour Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #labourNameDropDown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"dropDownInputFieldLabourName\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForDropDownInputFieldLabourName($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelDropDownLabourName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchDropDownInputFieldLabourName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterDropDownLabourName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterDropDownLabourName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Please Select The Labour Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressListnerForDropDownLabourName($event);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDropDownLabourNameTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hamalis</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-notes-medical\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"4\" id=\"hamalis\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\treadonly></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-dark m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"backBtnForStockTripSheetDetails();\" mat-button\n\t\t\t\t\t\t\t\t\t\t\t\t\tmatStepperPrevious>Back</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"button_custome btn btn-info m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"startOverBtnTripDetailsFrom()\">Start Over</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"button_custome btn btn-info m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"resetBtnTripDetailsFrom()\">Reset</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10 button_custome\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"viewScheduleTripBtn\" id=\"scheduleTripBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateScheduleTripSheet();\">Schedule\n\t\t\t\t\t\t\t\t\t\t\t\t\tTrip</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success m-r-10 button_custome\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"createTripSheetBtn\" (click)=\"validateCreateTripSheet();\">Create\n\t\t\t\t\t\t\t\t\t\t\t\t\tTrip\n\t\t\t\t\t\t\t\t\t\t\t\t\tSheet</button>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!--</form>-->\n\t\t\t\t\t\t\t\t\t</mat-step>\n\t\t\t\t\t\t\t\t\t<!-- three flow is ends -->\n\t\t\t\t\t\t\t\t</mat-horizontal-stepper>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!--Print Start-->\n<div *ngIf=\"viewStockTripsheetPrint\" onafterPopUp=\"afterPopUp()\" id=\"stockTripsheetPrintId\">\n\t<app-stock-for-tripsheet-driver-print>\n\t</app-stock-for-tripsheet-driver-print>\n</div>\n<!--Print End -->\n\n<!--POP UP START HERE-->\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<ng-template #vehicleNumberPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<h4 class=\"modal-title\">Add New Vehicle</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Add Vehicle Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"addNewVehicleNumberId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"addNewVehicleNameId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t(click)=\"saveBtnVehicleNumberPopup();\">Save</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t(click)=\"resetBtnVehicleNumberPopup();\">Reset</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t(click)=\"closePopUpVehiclePopup();\">Cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!--POP Up END HERE-->\n<!--</body>-->"

/***/ }),

/***/ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet/stocks-for-tripsheet.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet/stocks-for-tripsheet.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: StocksForTripsheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksForTripsheetComponent", function() { return StocksForTripsheetComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
/* harmony import */ var src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dto/TruckData-dto */ "./src/app/dto/TruckData-dto.ts");
/* harmony import */ var src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dto/Driverdetails-dto */ "./src/app/dto/Driverdetails-dto.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//for datatable starts















var StocksForTripsheetComponent = /** @class */ (function () {
    /* 3 rd stock for trip sheet level - end */
    function StocksForTripsheetComponent(_formBuilder, modalService, router, masterReadService, hireslipService, masterService) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.modalService = modalService;
        this.router = router;
        this.masterReadService = masterReadService;
        this.hireslipService = hireslipService;
        this.masterService = masterService;
        this.linear = false;
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.showSpinnerForTripScheduleAction = false;
        this.showSpinnerForTripDetailsAction = false;
        this.dtTriggerStockSummary = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerStockDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerEligibleLrs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerRemainingLrs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        //Stock eligible & remaining lr Table end
        //for datatable end
        this.rightsToShowDeliveryMan = "StockForTripsheet ShowDelvryMan";
        this.showDeliveryMan = false;
        this.viewBinsStockMsg = null;
        this.viewLocalTripsheetMsg = null;
        this.lrDtoArticleSummary = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoStocksDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        //lrDtoPassLocalStorage: LRDto = new LRDto();
        this.lrDtoPassTripSchedulePage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.makeAtripBtnHideShow = false;
        this.tripSheetBlackBtnHideShow = false;
        this.tripSheetBtnHideShow = false;
        //1 st stock for trip sheet level - end
        // 2 nd stock for trip sheet level - start 
        // Drop Down Field Start
        this.branchBinsOption = [];
        this.lrDtoBranchBins = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.branchBinsTA = [];
        this.focusDropDownBinsTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDropDownInputFieldBins = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDropDownBinsTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (term) { return (term === '' ? _this.branchBinsTA
                : _this.branchBinsTA.filter(function (v) { return v.godownName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDropDownBins = function (x) { return x.godownName; };
        // Drop Down Field End
        //stockTripSheetReturnLocalStorage: LRDto = new LRDto();
        this.lrDtoForScheduleTripsheetReturn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoControlBinService = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        //lrDtoCreateATripDetailLocalStorage: LRDto = new LRDto();
        this.lrDtoCreateATripDetail = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        //Dashboard
        this.lrDtoFromDashboardScheduleLocalTrip = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoForScduleLrDashboardLocalTrip = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.enteredStockBinsDestination = null;
        this.enteredLrNumber = null;
        this.selectedControBinsDataOfAllLrsList = [];
        this.resultList = null;
        this.viewNextDarkBtnForScheduleTrip = false;
        this.viewNextGreenBtnForScheduleTrip = false;
        /* 2 nd stock for trip sheet level - end*/
        /* 3 rd stock for trip sheet level - start */
        this.truckDataDtoNewVehicleNumberSave = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_15__["TruckDataDto"]();
        this.truckDataDtoNewVehicleNumberSaveReturn = null;
        this.vehicleNumberOption = [];
        this.truckDataDtoVehicleNumber = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_15__["TruckDataDto"]();
        this.truckDataDtoAddNewVehicleNumber = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_15__["TruckDataDto"]();
        this.vehicleNumberTA = [];
        this.focusDropDownVehicleNumberTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDropDownInputFieldVehicleNumber = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDropDownVehicleNumberTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (term) { return (term === '' ? _this.vehicleNumberTA
                : _this.vehicleNumberTA.filter(function (v) { return v.truckNumber.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDropDownVehicleNumber = function (x) { return x.truckNumber; };
        this.driverNameOption = [];
        this.driverDataDtoDriverName = new src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_16__["DriverdetailsDto"]();
        this.driverNameTA = [];
        this.focusDropDownDriverNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDropDownInputFieldDriverName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDropDownDriverNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (term) { return (term === '' ? _this.driverNameTA
                : _this.driverNameTA.filter(function (v) { return v.driverName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDropDownDriverName = function (x) { return x.driverName; };
        this.labourNameOption = [];
        this.lrDtoLabourName = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.labourNameTA = [];
        this.focusDropDownLabourNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDropDownInputFieldLabourName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDropDownLabourNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (term) { return (term === '' ? _this.labourNameTA
                : _this.labourNameTA.filter(function (v) { return v.loaderName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDropDownLabourName = function (x) { return x.loaderName; };
        this.labourHeadNameOption = [];
        this.hireSlipDtoLabourHeadName = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.labourHeadNameTA = [];
        this.focusDropDownLabourHeadNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDropDownInputFieldLabourHeadName = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDropDownLabourHeadNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (term) { return (term === '' ? _this.labourHeadNameTA
                : _this.labourHeadNameTA.filter(function (v) { return v.loaderHead.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterDropDownLabourHeadName = function (x) { return x.loaderHead; };
        this.enteredPopUpNewVehicleNumber = null;
        this.eneterdPopUpNewVehicleName = null;
        this.enteredlabourNameListOfHamaliAdd = null;
        this.enteredlabourHeadNameListOfHamaliAdd = null;
        this.viewToShowDeliveryManField = false;
        this.viewScheduleTripBtn = false;
        this.lrDtoSetTripDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoSetTripDetailsReturn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrdtoNewTripCreateAndPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrdtoUpdateTripCreateAndPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrdtoForAddNewScheduleTrip = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrdtoForUpdateScheduleTrip = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.hashmapVehicle = new Map();
        this.viewStockTripsheetPrint = false;
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
            // userdata get through from login starts
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            /*1 st stock for trip sheet level - start*/
            this.viewBinsStockMsg = "Bins Stock";
            this.viewLocalTripsheetMsg = "";
            /*if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (let i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                        "StockForTripsheet ShowDelvryMan") {
                        this.showDeliveryMan = true;
                    }
                }
            }*/
            this.setTripCrationForArticlesStocksSummaryDetailsList();
            /*1 st stock for trip sheet level - end*/
            /*2 nd stock for trip sheet level - start*/
            this.setBranchAreaDetailsList();
            /*2 nd stock for trip sheet level - end*/
            /*3 rd stock for trip sheet level - start*/
            /*
            if (this.showDeliveryMan != null && this.showDeliveryMan == true) {
             */
            if (this.userDataDtoReturnSession.office != null &&
                this.userDataDtoReturnSession.office == "Binnymills") {
                this.viewToShowDeliveryManField = true;
                this.setLabourHeadNameDetailsList();
            }
            else {
                this.viewToShowDeliveryManField = false;
            }
            this.setVehicleDetailsList();
            this.setDriverNameDetailsList();
            this.setLabourNameDetailsList();
            /*3 rd stock for trip sheet level - end*/
            /*2 nd stock for trip sheet level - start*/
            this.lrDtoFromDashboardScheduleLocalTrip = JSON.parse(localStorage.getItem('stockForTripsheetDashboardLocalStorage'));
            localStorage.clear();
            console.log(this.lrDtoFromDashboardScheduleLocalTrip);
            /*2 nd stock for trip sheet level - end*/
        }
    }
    StocksForTripsheetComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StocksForTripsheetComponent.prototype.ngOnInit = function () {
        /*1 st stock for trip sheet level - start*/
        this.dtOptionsStockSummary = {
            dom: 'Bfrtip',
            buttons: [],
            order: [[1, 'asc']],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 220,
            "scrollCollapse": true,
            pagingType: 'full_numbers',
            // pageLength: 6,
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
                var totLrs = api.column(1).data().reduce(function (a, b) {
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
                var totAmt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html(totLrs);
                $(api.column(2).footer()).html(articles);
                $(api.column(3).footer()).html(actWgt);
                $(api.column(4).footer()).html(chgWgt);
                $(api.column(5).footer()).html(totAmt);
            }
        };
        this.dtOptionsStockDetails = {
            dom: 'Bfrtip',
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 220,
            "scrollCollapse": true,
            pagingType: 'full_numbers',
            //pageLength: 5,
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
                var articles = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totAmt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(3).footer()).html(articles);
                $(api.column(4).footer()).html(actWgt);
                $(api.column(5).footer()).html(chgWgt);
                $(api.column(6).footer()).html(totAmt);
            }
        };
        /*1 st stock for trip sheet level - end*/
        /*2 nd stock for trip sheet level - start*/
        this.dtOptionsEligibleLrs = {
            dom: 'Bfrtip',
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 220,
            "scrollCollapse": true,
            pagingType: 'full_numbers',
            pageLength: 5,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                var articles = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totAmt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html(articles);
                $(api.column(5).footer()).html(actWgt);
                $(api.column(6).footer()).html(chgWgt);
                $(api.column(7).footer()).html(totAmt);
            }
        }, this.dtOptionRemainingLrs = {
            dom: 'Bfrtip',
            buttons: [],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            responsive: true,
            "scrollX": true,
            "scrollY": 220,
            "scrollCollapse": true,
            pagingType: 'full_numbers',
            pageLength: 5,
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;
                // converting to interger to find total
                var intVal = function (i) {
                    return typeof i === 'string' ?
                        +i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                            i : 0;
                };
                var articles = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var totAmt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html(articles);
                $(api.column(5).footer()).html(actWgt);
                $(api.column(6).footer()).html(chgWgt);
                $(api.column(7).footer()).html(totAmt);
            }
        };
        /*2 nd stock for trip sheet level - end*/
    };
    StocksForTripsheetComponent.prototype.ngAfterViewInit = function () {
        /*1 st stock for trip sheet level - start*/
        this.dtTriggerStockSummary.next();
        this.dtTriggerStockDetails.next();
        /*1 st stock for trip sheet level - end*/
        /*2 nd stock for trip sheet level - start*/
        //this.dtTriggerEligibleLrs.next();
        //this.dtTriggerRemainingLrs.next();
        /*2 nd stock for trip sheet level - end*/
        if (this.lrDtoFromDashboardScheduleLocalTrip != null &&
            this.lrDtoFromDashboardScheduleLocalTrip != undefined) {
            this.setDashboardFroScheduleLocalTripSheet();
        }
    };
    StocksForTripsheetComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
            });
        });
    };
    StocksForTripsheetComponent.prototype.ngOnDestroy = function () {
        /*1 st stock for trip sheet level - start*/
        this.dtTriggerStockSummary.unsubscribe();
        this.dtTriggerStockDetails.unsubscribe();
        /*1 st stock for trip sheet level - end*/
        /*2 nd stock for trip sheet level - start*/
        this.dtTriggerEligibleLrs.unsubscribe();
        this.dtTriggerRemainingLrs.unsubscribe();
        /*2 nd stock for trip sheet level - end*/
    };
    /*  Main 1 st stock for trip sheet level - start*/
    StocksForTripsheetComponent.prototype.getTripCrationForArticlesStocksSummaryDetails = function () {
        this.lrDtoArticleSummary = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoArticleSummary.branch = this.userDataDtoReturnSession.office;
        this.lrDtoArticleSummary.branchType = this.userDataDtoReturnSession.stationType;
        this.lrDtoArticleSummary.companyId = this.userDataDtoReturnSession.companyId;
    };
    StocksForTripsheetComponent.prototype.setTripCrationForArticlesStocksSummaryDetailsList = function () {
        var _this = this;
        this.getTripCrationForArticlesStocksSummaryDetails();
        this.showSpinnerForAction = true;
        this.hireslipService.getArticlesStocksSummForDestination(this.lrDtoArticleSummary).subscribe(function (response) {
            console.log(response);
            _this.stockSummaryDataList = [];
            $("#tripSheetForStockSummaryTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.stockSummaryDataList = response;
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
            }
            _this.dtTriggerStockSummary.next();
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting  Stock Summary Details", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetComponent.prototype.rowSelectedGetTripLRDeatils = function (stockSummaryTableData) {
        this.lrDtoStocksDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.viewBinsStockMsg = stockSummaryTableData.endDest;
        this.viewLocalTripsheetMsg = stockSummaryTableData.endDest;
        this.stockDetailsDataList = [];
        $("#tripSheetForStockDetailsTableId").DataTable().destroy();
        this.dtTriggerStockDetails.next();
        this.lrDtoStocksDetails.branch = this.userDataDtoReturnSession.office;
        if (stockSummaryTableData.totalLrs > 0) {
            this.makeATripBtnId = stockSummaryTableData.endDest;
            this.tripSheetBtnId = stockSummaryTableData.endDest;
            this.lrDtoStocksDetails.destination = stockSummaryTableData.endDest;
            this.lrDtoStocksDetails.stationType = stockSummaryTableData.stationType;
            this.lrDtoStocksDetails.subStations = stockSummaryTableData.endDest;
            this.lrDtoStocksDetails.branchType = this.userDataDtoReturnSession.stationType;
            this.lrDtoStocksDetails.companyId = this.userDataDtoReturnSession.companyId;
            this.getTripCreationForArticlesStocksDetailsList(this.lrDtoStocksDetails);
        }
    };
    StocksForTripsheetComponent.prototype.getTripCreationForArticlesStocksDetailsList = function (lrDtoStocksDetails) {
        var _this = this;
        this.showSpinnerForAction = true;
        this.hireslipService.getArticlesStocksForDestination(lrDtoStocksDetails).subscribe(function (response) {
            console.log(response);
            _this.stockDetailsDataList = [];
            $("#tripSheetForStockDetailsTableId").DataTable().destroy();
            _this.stockDetailsDataList = response;
            setTimeout(function () {
                _this.dtTriggerStockDetails.next();
            }, 1000);
            if (response.length == 0) {
                _this.makeAtripBtnHideShow = true;
                //this.tripSheetBtnHideShow = true;
                _this.tripSheetBlackBtnHideShow = true;
            }
            else if (_this.lrDtoStocksDetails.stationType != null &&
                (!(_this.lrDtoStocksDetails.stationType == "")) &&
                (_this.lrDtoStocksDetails.stationType == "local")) {
                _this.makeAtripBtnHideShow = false;
                //this.tripSheetBtnHideShow = true;
                _this.tripSheetBlackBtnHideShow = true;
            }
            else if (_this.lrDtoStocksDetails.stationType != null &&
                (!(_this.lrDtoStocksDetails.stationType == "")) &&
                (_this.lrDtoStocksDetails.stationType == "Others")) {
                _this.makeAtripBtnHideShow = false;
                //this.tripSheetBtnHideShow = false;
                _this.tripSheetBlackBtnHideShow = false;
            }
            else if (_this.lrDtoStocksDetails.stationType != null &&
                (!(_this.lrDtoStocksDetails.stationType == "")) &&
                (_this.lrDtoStocksDetails.stationType == "UnDelivered")) {
                _this.makeAtripBtnHideShow = false;
                //this.tripSheetBtnHideShow = false;
                _this.tripSheetBlackBtnHideShow = false;
            }
            else {
                _this.makeAtripBtnHideShow = true;
                //this.tripSheetBtnHideShow = false;
                _this.tripSheetBlackBtnHideShow = false;
            }
            _this.showSpinnerForAction = false;
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting  Stock Details Details", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetComponent.prototype.tripSheetBlackBtnClickListner = function () {
        console.log(this.tripSheetBtnId);
        if (this.tripSheetBtnId != null && this.tripSheetBtnId == "Others") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Trips For Other", "Can't generate Trips for UnAssigned Lrs", "warning");
            return false;
        }
        else {
            this.tripSheetBtnHideShow = true;
            this.tripSheetBlackBtnHideShow = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("OK", "Please Click The Trip Sheet button again to continue", "info");
        }
    };
    StocksForTripsheetComponent.prototype.tripSheetBtnClickListner = function () {
        var _this = this;
        console.log(this.tripSheetBtnId);
        /*
        if (this.showDeliveryMan != null && this.showDeliveryMan == true) {
        */
        if (this.userDataDtoReturnSession.office != null &&
            this.userDataDtoReturnSession.office == "Binnymills") {
            this.lrDtoPassTripSchedulePage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
            this.lrDtoPassTripSchedulePage.destination = this.tripSheetBtnId;
            this.lrDtoPassTripSchedulePage.mode = "localgrouping";
            this.lrDtoPassTripSchedulePage.invoiceNumber = null;
            this.lrDtoPassTripSchedulePage.tripId = 0;
        }
        else {
            this.lrDtoPassTripSchedulePage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
            this.lrDtoPassTripSchedulePage.destination = this.tripSheetBtnId;
            this.lrDtoPassTripSchedulePage.mode = "localgrouping";
            this.lrDtoPassTripSchedulePage.invoiceNumber = null;
            this.lrDtoPassTripSchedulePage.module = "destination";
            this.lrDtoPassTripSchedulePage.selectedTripTo = this.tripSheetBtnId;
            this.lrDtoPassTripSchedulePage.tripId = 0;
        }
        this.showSpinnerForTripScheduleAction = true;
        this.clearFieldForStockTripSheetSchedule();
        this.showSpinnerForTripScheduleAction = false;
        $("#dropDownInputFieldBins").val(this.tripSheetBtnId);
        setTimeout(function () {
            _this.setControlBinsDestinationDetails();
        }, 2000);
    };
    StocksForTripsheetComponent.prototype.clearFieldForStockTripSheetSchedule = function () {
        /* 2 nd stock for trip sheet level - start */
        this.viewNextDarkBtnForScheduleTrip = true;
        this.viewNextGreenBtnForScheduleTrip = false;
        this.remainingLrsDataList = [];
        this.eligibleLrsDataList = [];
        $("#eligibleLrsTableId").DataTable().destroy();
        $("#remainingLrsTableId").DataTable().destroy();
        this.dtTriggerEligibleLrs.next();
        this.dtTriggerRemainingLrs.next();
        this.modelDropDownBins = "";
        $("#lrNumber").val('');
        /* 2 nd stock for trip sheet level - end */
    };
    /* Main 1 st stock for trip sheet level - end*/
    /* Main 2 nd stock for trip sheet level - start*/
    StocksForTripsheetComponent.prototype.onKeyPressListnerForLRNumber = function ($event) {
        if ($event.charCode == 13) {
            console.log($event.charCode);
            if ($("#lrNumber").val() == null || $("#lrNumber").val() == undefined ||
                $("#lrNumber").val() == "") {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("LR Number", "Please Enter The LR Number Field", "warning");
                return false;
            }
            else {
                this.setLRNumberDetailsValueInDatatTable();
            }
        }
    };
    StocksForTripsheetComponent.prototype.onKeyPressListnerForBinsDestination = function ($event) {
        if ($event.charCode == 13) {
            this.setControlBinsDestinationDetails();
        }
    };
    StocksForTripsheetComponent.prototype.clickListnerForDropDownInputFieldBins = function (event) {
        this.modelDropDownBins = event.item;
        $("#dropDownInputFieldBins").val(this.modelDropDownBins.godownName);
        console.log(this.modelDropDownBins);
        this.setControlBinsDestinationDetails();
    };
    StocksForTripsheetComponent.prototype.getMethodForBranchArea = function () {
        this.lrDtoBranchBins = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoBranchBins.mode = this.userDataDtoReturnSession.office;
        this.lrDtoBranchBins.companyId = this.userDataDtoReturnSession.companyId;
    };
    StocksForTripsheetComponent.prototype.setBranchAreaDetailsList = function () {
        var _this = this;
        this.getMethodForBranchArea();
        this.showSpinnerForTripScheduleAction = true;
        this.masterReadService.getBranchAreaDetailsService(this.lrDtoBranchBins).subscribe(function (response) {
            if (response.length > 0) {
                _this.branchBinsOption = [];
                _this.branchBinsTA = [];
                _this.branchBinsOption = response;
                for (var i = 0; i < _this.branchBinsOption.length; i++) {
                    _this.branchBinsTA.push(_this.branchBinsOption[i]);
                }
                //hashmap concept pending here
                _this.showSpinnerForTripScheduleAction = false;
            }
            else {
                _this.branchBinsOption = [];
                _this.branchBinsTA = [];
                _this.showSpinnerForTripScheduleAction = false;
            }
        }), function (error) {
            _this.showSpinnerForTripScheduleAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting Area Details", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetComponent.prototype.setControlBinsDestinationDetails = function () {
        var _this = this;
        this.lrDtoControlBinService = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoForScheduleTripsheetReturn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoForScheduleTripsheetReturn = this.lrDtoPassTripSchedulePage;
        console.log(this.lrDtoForScheduleTripsheetReturn);
        this.enteredStockBinsDestination = $("#dropDownInputFieldBins").val();
        this.lrDtoControlBinService.destination = this.enteredStockBinsDestination;
        this.lrDtoControlBinService.branch = this.userDataDtoReturnSession.office;
        this.lrDtoControlBinService.branchType = this.userDataDtoReturnSession.role;
        this.lrDtoControlBinService.stationType = "local";
        this.lrDtoControlBinService.companyId = this.userDataDtoReturnSession.companyId;
        this.showSpinnerForTripScheduleAction = true;
        this.hireslipService.getArticlesStocksForDestination(this.lrDtoControlBinService).subscribe(function (response) {
            console.log(response);
            _this.remainingLrsDataList = [];
            _this.selectedControBinsDataOfAllLrsList = [];
            _this.selectedControBinsDataOfAllLrsList = response;
            if (_this.selectedControBinsDataOfAllLrsList != null &&
                _this.selectedControBinsDataOfAllLrsList.length > 0) {
                _this.remainingLrsDataList = _this.selectedControBinsDataOfAllLrsList;
            }
            console.log(_this.remainingLrsDataList);
            console.log(_this.eligibleLrsDataList);
            if (_this.eligibleLrsDataList == null || _this.eligibleLrsDataList == undefined ||
                _this.eligibleLrsDataList == "" || _this.eligibleLrsDataList.length == 0) {
                _this.eligibleLrsDataList = [];
            }
            _this.remainingLrsDataList = _this.remainingLrsDataList.filter(function (remainingLrsData) {
                return !_this.eligibleLrsDataList.find(function (eligibleLrsData) {
                    return (eligibleLrsData.lrNumber === remainingLrsData.lrNumber);
                });
            });
            console.log(_this.remainingLrsDataList);
            $("#remainingLrsTableId").DataTable().destroy();
            setTimeout(function () {
                _this.dtTriggerRemainingLrs.next();
            }, 3000);
            _this.showSpinnerForTripScheduleAction = false;
        }),
            function (error) {
                _this.showSpinnerForTripScheduleAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting  Stock Details Details", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetComponent.prototype.setLRNumberDetailsValueInDatatTable = function () {
        this.enteredLrNumber = null;
        this.enteredLrNumber = $("#lrNumber").val();
        this.enteredLrNumber = this.enteredLrNumber == null ? null : this.enteredLrNumber.toUpperCase();
        // finding eligible & remaing lrs method
        this.showSpinnerForTripScheduleAction = true;
        var validateRemaingLrNumber = this.findRemainingLrsDup(this.remainingLrsDataList, this.enteredLrNumber);
        var validateEligibleLrNumber = this.findEligibleLrs(this.eligibleLrsDataList, this.enteredLrNumber);
        this.showSpinnerForTripScheduleAction = false;
        console.log("EligibleFind: " + validateEligibleLrNumber);
        console.log("RemaingFind: " + validateRemaingLrNumber);
        if (validateRemaingLrNumber == null && validateEligibleLrNumber == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Alert", "LR number does not exist", "warning");
            $("#lrNumber").focus();
        }
        else if (validateEligibleLrNumber != null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Make Invoice", "LR Number '" + $("#lrNumber").val() + "'Already Transfered", "warning");
            $("#lrNumber").focus();
        }
        else {
            this.setLrNumberEligibleAndRemaingLrs();
            $("#lrNumber").val('');
            $("#lrNumber").focus();
        }
    };
    StocksForTripsheetComponent.prototype.findRemainingLrsDup = function (findRemaingLrs, lrNumber) {
        var checkingRemLrNumber = null;
        var remainLrNumberReturn = null;
        for (var i = 0; i < findRemaingLrs.length; i++) {
            checkingRemLrNumber = findRemaingLrs[i].lrNumber;
            if (checkingRemLrNumber == lrNumber) {
                remainLrNumberReturn = checkingRemLrNumber;
                break;
            }
            else {
                remainLrNumberReturn = null;
            }
        }
        return remainLrNumberReturn;
    };
    StocksForTripsheetComponent.prototype.findEligibleLrs = function (findEligibleLrs, lrNumber) {
        var checkingEligLrNumber = null;
        var eligibleLrNumberReturn = null;
        for (var i = 0; i < findEligibleLrs.length; i++) {
            checkingEligLrNumber = findEligibleLrs[i].lrNumber;
            if (checkingEligLrNumber == lrNumber) {
                eligibleLrNumberReturn = checkingEligLrNumber;
                break;
            }
            else {
                eligibleLrNumberReturn = null;
            }
        }
        return eligibleLrNumberReturn;
    };
    StocksForTripsheetComponent.prototype.setLrNumberEligibleAndRemaingLrs = function () {
        var _this = this;
        this.resultList = null;
        this.showSpinnerForTripScheduleAction = true;
        this.resultList = this.remainingLrsDataList.filter(function (remainingLrsData) {
            return remainingLrsData.lrNumber == $("#lrNumber").val();
        });
        if (this.resultList.length > 0) {
            for (var i = 0; i < this.resultList.length; i++) {
                this.eligibleLrsDataList.push(this.resultList[i]);
            }
            $("#eligibleLrsTableId").DataTable().destroy();
            setTimeout(function () {
                _this.dtTriggerEligibleLrs.next();
            }, 1000);
            var deletedContrat = this.remainingLrsDataList.find(function (x) { return x.lrNumber === $("#lrNumber").val(); });
            this.remainingLrsDataList.splice(this.remainingLrsDataList.indexOf(deletedContrat), 1);
            $("#remainingLrsTableId").DataTable().destroy();
            setTimeout(function () {
                _this.dtTriggerRemainingLrs.next();
            }, 1000);
            // console.log(deletedContrat);
        }
        this.showSpinnerForTripScheduleAction = false;
    };
    StocksForTripsheetComponent.prototype.validateMoveAllBtnForScheduleTrip = function () {
        var _this = this;
        console.log(this.remainingLrsDataList);
        console.log(this.remainingLrsDataList.length);
        this.showSpinnerForTripScheduleAction = true;
        for (var i = 0; i < this.remainingLrsDataList.length; i++) {
            this.eligibleLrsDataList.push(this.remainingLrsDataList[i]);
        }
        $("#eligibleLrsTableId").DataTable().destroy();
        setTimeout(function () {
            _this.dtTriggerEligibleLrs.next();
        }, 1000);
        this.remainingLrsDataList = [];
        $("#remainingLrsTableId").DataTable().destroy();
        setTimeout(function () {
            _this.dtTriggerRemainingLrs.next();
        }, 1000);
        this.showSpinnerForTripScheduleAction = false;
    };
    StocksForTripsheetComponent.prototype.rowSelectedEligibleLrDelete = function (selectedEligibleLrsRowData) {
        var _this = this;
        this.enteredLrNumber = null;
        this.enteredLrNumber = selectedEligibleLrsRowData.lrNumber;
        this.enteredLrNumber = this.enteredLrNumber == null ? null : this.enteredLrNumber.toUpperCase();
        // finding eligible & remaing lrs method
        this.showSpinnerForTripScheduleAction = true;
        var validateRemaingLrNumber = this.findRemainingLrsDup(this.remainingLrsDataList, this.enteredLrNumber);
        var validateEligibleLrNumber = this.findEligibleLrs(this.eligibleLrsDataList, this.enteredLrNumber);
        this.showSpinnerForTripScheduleAction = false;
        console.log("EligibleFind: " + validateEligibleLrNumber);
        console.log("RemaingFind: " + validateRemaingLrNumber);
        if (validateRemaingLrNumber == null && validateEligibleLrNumber == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Alert", "LR number does not exist", "warning");
        }
        else if (validateRemaingLrNumber != null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Make Invoice", "LR Number '" + selectedEligibleLrsRowData.lrNumber + "'Already Transfered", "warning");
        }
        else {
            this.resultList = null;
            this.showSpinnerForTripScheduleAction = true;
            this.resultList = this.eligibleLrsDataList.filter(function (eligibleLrsData) {
                return eligibleLrsData.lrNumber == selectedEligibleLrsRowData.lrNumber;
            });
            if (this.resultList.length > 0) {
                for (var i = 0; i < this.resultList.length; i++) {
                    this.remainingLrsDataList.push(this.resultList[i]);
                }
                $("#remainingLrsTableId").DataTable().destroy();
                setTimeout(function () {
                    _this.dtTriggerRemainingLrs.next();
                }, 1000);
                var deletedContrat = this.eligibleLrsDataList.find(function (x) { return x.lrNumber === selectedEligibleLrsRowData.lrNumber; });
                this.eligibleLrsDataList.splice(this.eligibleLrsDataList.indexOf(deletedContrat), 1);
                $("#eligibleLrsTableId").DataTable().destroy();
                setTimeout(function () {
                    _this.dtTriggerEligibleLrs.next();
                }, 1000);
            }
            this.showSpinnerForTripScheduleAction = false;
        }
    };
    StocksForTripsheetComponent.prototype.stockTripClearBtn = function () {
        this.remainingLrsDataList = [];
        this.eligibleLrsDataList = [];
        $("#eligibleLrsTableId").DataTable().destroy();
        $("#remainingLrsTableId").DataTable().destroy();
        this.dtTriggerEligibleLrs.next();
        this.dtTriggerRemainingLrs.next();
        this.modelDropDownBins = null;
        $("#lrNumber").val('');
        this.lrDtoForScheduleTripsheetReturn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
    };
    StocksForTripsheetComponent.prototype.backBtnForStockTripSheet = function () {
        /*1nd stock for trip sheet level - end */
        this.stockDetailsDataList = [];
        $("#tripSheetForStockDetailsTableId").DataTable().destroy();
        this.dtTriggerStockDetails.next();
        this.viewBinsStockMsg = "Bins Stock";
        this.viewLocalTripsheetMsg = "";
        this.makeAtripBtnHideShow = false;
        this.tripSheetBlackBtnHideShow = false;
        this.tripSheetBtnHideShow = false;
        this.makeATripBtnId = null;
        this.tripSheetBtnId = null;
        /*1nd stock for trip sheet level - end */
    };
    StocksForTripsheetComponent.prototype.resetBtnTripSheduleFrom = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Reset Confirm",
            text: "Sure U want to reset this Trip details",
            icon: "info",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (sureYesBtn) {
            if (sureYesBtn) {
                _this.stepper.reset();
                _this.clearAllField();
                _this.setTripCrationForArticlesStocksSummaryDetailsList();
            }
        });
    };
    StocksForTripsheetComponent.prototype.validateNextBtnForScheduleTrip = function () {
        if (this.eligibleLrsDataList == null || this.eligibleLrsDataList == undefined ||
            this.eligibleLrsDataList == "" || this.eligibleLrsDataList.length == 0) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Not Allowed", "No Lrs Found", "warning");
            return false;
        }
        else {
            this.viewNextDarkBtnForScheduleTrip = false;
            this.viewNextGreenBtnForScheduleTrip = true;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("OK", "Please Click The Next button again to continue", "info");
        }
    };
    StocksForTripsheetComponent.prototype.scheduleForNextTripBtn = function () {
        this.lrDtoCreateATripDetail = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoCreateATripDetail.lrDtoEligible = this.eligibleLrsDataList;
        /*3 rd stock for trip sheet level - start */
        this.viewScheduleTripBtn = true;
        /*3 rd stock for trip sheet level - end */
    };
    /* Main 2 nd stock for trip sheet level - end */
    /* Main 3 rd stock for trip sheet level - start */
    StocksForTripsheetComponent.prototype.clickListnerForDropDownInputFieldVehicleNumber = function (event, vehicleNumberPopUpTemplate) {
        this.modelDropDownVehicleNumber = event.item;
        $("#dropDownInputFieldVehicleNumber").val(this.modelDropDownVehicleNumber.truckNumber);
        if ($("#dropDownInputFieldVehicleNumber").val() == "Add New") {
            this.vehicleNumberPopUpBtnLink(vehicleNumberPopUpTemplate);
        }
        console.log(this.modelDropDownVehicleNumber);
    };
    StocksForTripsheetComponent.prototype.getVehicleNumberDetails = function () {
        this.truckDataDtoVehicleNumber = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_15__["TruckDataDto"]();
        this.truckDataDtoVehicleNumber.office = this.userDataDtoReturnSession.mainStation;
        this.truckDataDtoVehicleNumber.isActive = true;
        this.truckDataDtoVehicleNumber.companyId = this.userDataDtoReturnSession.companyId;
    };
    StocksForTripsheetComponent.prototype.setVehicleDetailsList = function () {
        var _this = this;
        this.getVehicleNumberDetails();
        this.showSpinnerForTripDetailsAction = true;
        this.masterReadService.getVehicleSetupMaster(this.truckDataDtoVehicleNumber).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.vehicleNumberOption = [];
                _this.vehicleNumberTA = [];
                _this.vehicleNumberOption = response;
                _this.truckDataDtoAddNewVehicleNumber = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_15__["TruckDataDto"]();
                _this.truckDataDtoAddNewVehicleNumber.truckNumber = 'Add New';
                _this.vehicleNumberTA.push(_this.truckDataDtoAddNewVehicleNumber);
                for (var i = 0; i < _this.vehicleNumberOption.length; i++) {
                    _this.vehicleNumberTA.push(_this.vehicleNumberOption[i]);
                    _this.hashmapVehicle.set(_this.vehicleNumberOption[i].truckNumber, _this.vehicleNumberOption[i].vehicleName);
                }
                //hashmap concept pending here
                _this.showSpinnerForTripDetailsAction = false;
            }
            else {
                _this.vehicleNumberOption = [];
                _this.vehicleNumberTA = [];
                _this.truckDataDtoAddNewVehicleNumber = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_15__["TruckDataDto"]();
                _this.truckDataDtoAddNewVehicleNumber.truckNumber = 'Add New';
                _this.vehicleNumberTA.push(_this.truckDataDtoAddNewVehicleNumber);
                _this.showSpinnerForTripDetailsAction = false;
            }
        }), function (error) {
            _this.showSpinnerForTripDetailsAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting Vehicle Setup Master", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetComponent.prototype.clickListnerForDropDownInputFieldDriverName = function (event) {
        this.modelDropDownDriverName = event.item;
        $("#dropDownInputFieldDriverName").val(this.modelDropDownDriverName.driverName);
        console.log(this.modelDropDownDriverName);
        $("#inputFieldDriverConatctNumber").val(this.modelDropDownDriverName.mobileNo == null ? null :
            this.modelDropDownDriverName.mobileNo == undefined ? null :
                this.modelDropDownDriverName.mobileNo);
    };
    StocksForTripsheetComponent.prototype.getDriverNameDetails = function () {
        this.driverDataDtoDriverName = new src_app_dto_Driverdetails_dto__WEBPACK_IMPORTED_MODULE_16__["DriverdetailsDto"]();
        this.driverDataDtoDriverName.companyId = this.userDataDtoReturnSession.companyId;
        this.driverDataDtoDriverName.status = "Working";
        if (this.userDataDtoReturnSession.mainAdminStation != null) {
            this.driverDataDtoDriverName.mode = "MainStation";
            this.driverDataDtoDriverName.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        }
        else {
            this.driverDataDtoDriverName.mode = "Station";
            this.driverDataDtoDriverName.mainStation = this.userDataDtoReturnSession.office;
        }
    };
    StocksForTripsheetComponent.prototype.setDriverNameDetailsList = function () {
        var _this = this;
        this.getDriverNameDetails();
        this.showSpinnerForTripDetailsAction = true;
        this.masterReadService.getDriver(this.driverDataDtoDriverName).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.driverNameOption = [];
                _this.driverNameTA = [];
                _this.driverNameOption = response;
                for (var i = 0; i < _this.driverNameOption.length; i++) {
                    _this.driverNameTA.push(_this.driverNameOption[i]);
                }
                _this.showSpinnerForTripDetailsAction = false;
            }
            else {
                _this.driverNameOption = [];
                _this.driverNameTA = [];
                _this.showSpinnerForTripDetailsAction = false;
            }
        }), function (error) {
            _this.showSpinnerForTripDetailsAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting Vehicle Setup Master", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetComponent.prototype.onKeyPressListnerForDropDownLabourName = function (event) {
        if (event.charCode == 13) {
            this.enteredlabourNameListOfHamaliAdd = $("#dropDownInputFieldLabourName").val();
            //$("#hamalis").focus();
            if ($("#hamalis").val() != null &&
                $("#hamalis").val() != undefined &&
                $("#hamalis").val() != "") {
                this.enteredlabourNameListOfHamaliAdd = $("#hamalis").val() + "," +
                    this.enteredlabourNameListOfHamaliAdd;
            }
            $("#hamalis").val(this.enteredlabourNameListOfHamaliAdd == null ? null :
                this.enteredlabourNameListOfHamaliAdd == undefined ? null :
                    this.enteredlabourNameListOfHamaliAdd);
            this.modelDropDownLabourName = null;
            $("#dropDownInputFieldLabourName").val('');
        }
    };
    StocksForTripsheetComponent.prototype.clickListnerForDropDownInputFieldLabourName = function (event) {
        this.modelDropDownLabourName = event.item;
        $("#dropDownInputFieldLabourName").val(this.modelDropDownLabourName.loaderName);
        this.enteredlabourNameListOfHamaliAdd = $("#dropDownInputFieldLabourName").val();
        //$("#hamalis").focus();
        if ($("#hamalis").val() != null &&
            $("#hamalis").val() != undefined &&
            $("#hamalis").val() != "") {
            this.enteredlabourNameListOfHamaliAdd = $("#hamalis").val() + "," +
                this.enteredlabourNameListOfHamaliAdd;
        }
        $("#hamalis").val(this.enteredlabourNameListOfHamaliAdd == null ? null :
            this.enteredlabourNameListOfHamaliAdd == undefined ? null :
                this.enteredlabourNameListOfHamaliAdd);
        this.modelDropDownLabourName = null;
        $("#dropDownInputFieldLabourName").val('');
    };
    StocksForTripsheetComponent.prototype.getLabourNameDetails = function () {
        this.lrDtoLabourName = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoLabourName.branch = this.userDataDtoReturnSession.mainStation;
        this.lrDtoLabourName.companyId = this.userDataDtoReturnSession.companyId;
    };
    StocksForTripsheetComponent.prototype.setLabourNameDetailsList = function () {
        var _this = this;
        this.getLabourNameDetails();
        this.showSpinnerForTripDetailsAction = true;
        this.masterReadService.getLabourDetails(this.lrDtoLabourName).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.labourNameOption = [];
                _this.labourNameTA = [];
                _this.labourNameOption = response;
                for (var i = 0; i < _this.labourNameOption.length; i++) {
                    _this.labourNameTA.push(_this.labourNameOption[i]);
                }
                _this.showSpinnerForTripDetailsAction = false;
            }
            else {
                _this.labourNameOption = [];
                _this.labourNameTA = [];
                _this.showSpinnerForTripDetailsAction = false;
            }
        }), function (error) {
            _this.showSpinnerForTripDetailsAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting Vehicle Setup Master", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetComponent.prototype.onKeyPressListnerForDropDownLabourHead = function (event) {
        if (event.charCode == 13) {
            this.enteredlabourHeadNameListOfHamaliAdd = $("#dropDownInputFieldLabourHeadName").val();
            //$("#hamalis").focus();
            if ($("#hamalis").val() != null &&
                $("#hamalis").val() != undefined &&
                $("#hamalis").val() != "") {
                this.enteredlabourHeadNameListOfHamaliAdd = $("#hamalis").val() + "," +
                    this.enteredlabourHeadNameListOfHamaliAdd;
            }
            $("#hamalis").val(this.enteredlabourHeadNameListOfHamaliAdd == null ? null :
                this.enteredlabourHeadNameListOfHamaliAdd == undefined ? null :
                    this.enteredlabourHeadNameListOfHamaliAdd);
            this.modelDropDownLabourHeadName = null;
            $("#dropDownInputFieldLabourHeadName").val('');
        }
    };
    StocksForTripsheetComponent.prototype.clickListnerForDropDownInputFieldLabourHeadName = function (event) {
        this.modelDropDownLabourHeadName = event.item;
        $("#dropDownInputFieldLabourHeadName").val(this.modelDropDownLabourHeadName.loaderHead);
        this.enteredlabourHeadNameListOfHamaliAdd = $("#dropDownInputFieldLabourHeadName").val();
        //$("#hamalis").focus();
        if ($("#hamalis").val() != null &&
            $("#hamalis").val() != undefined &&
            $("#hamalis").val() != "") {
            this.enteredlabourHeadNameListOfHamaliAdd = $("#hamalis").val() + "," +
                this.enteredlabourHeadNameListOfHamaliAdd;
        }
        $("#hamalis").val(this.enteredlabourHeadNameListOfHamaliAdd == null ? null :
            this.enteredlabourHeadNameListOfHamaliAdd == undefined ? null :
                this.enteredlabourHeadNameListOfHamaliAdd);
        this.modelDropDownLabourHeadName = null;
        $("#dropDownInputFieldLabourHeadName").val('');
    };
    StocksForTripsheetComponent.prototype.getLabourHeadNameDetails = function () {
        this.hireSlipDtoLabourHeadName = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireSlipDtoLabourHeadName.branch = this.userDataDtoReturnSession.mainStation;
        this.hireSlipDtoLabourHeadName.companyid = this.userDataDtoReturnSession.companyId;
    };
    StocksForTripsheetComponent.prototype.setLabourHeadNameDetailsList = function () {
        var _this = this;
        this.getLabourHeadNameDetails();
        this.showSpinnerForTripDetailsAction = true;
        this.masterReadService.getLoaderHeadsDetails(this.hireSlipDtoLabourHeadName).subscribe(function (response) {
            console.log(response);
            if (response.length > 0) {
                _this.labourHeadNameOption = [];
                _this.labourHeadNameTA = [];
                _this.labourHeadNameOption = response;
                for (var i = 0; i < _this.labourHeadNameOption.length; i++) {
                    _this.labourHeadNameTA.push(_this.labourHeadNameOption[i]);
                }
                _this.showSpinnerForTripDetailsAction = false;
            }
            else {
                _this.labourHeadNameOption = [];
                _this.labourHeadNameTA = [];
                _this.showSpinnerForTripDetailsAction = false;
            }
        }), function (error) {
            _this.showSpinnerForTripDetailsAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting Loader Heads details", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksForTripsheetComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    StocksForTripsheetComponent.prototype.vehicleNumberPopUpBtnLink = function (vehicleNumberPopUpTemplate) {
        var _this = this;
        this.modalRefferenceVehicleNumberPopUp = this.modalService.open(vehicleNumberPopUpTemplate, { centered: true, size: "sm" });
        this.modalRefferenceVehicleNumberPopUp.result.then(function (result) {
            _this.modalRefferenceVehicleNumberClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceVehicleNumberClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    StocksForTripsheetComponent.prototype.closePopUpVehiclePopup = function () {
        $("#addNewVehicleNumberId").val('');
        $("#addNewVehicleNameId").val('');
        $("#dropDownInputFieldVehicleNumber").val('');
        this.modelDropDownVehicleNumber = null;
        this.modalRefferenceVehicleNumberPopUp.close();
    };
    StocksForTripsheetComponent.prototype.resetBtnVehicleNumberPopup = function () {
        $("#addNewVehicleNumberId").val('');
        $("#addNewVehicleNameId").val('');
        $("#dropDownInputFieldVehicleNumber").val('');
        this.modelDropDownVehicleNumber = null;
    };
    StocksForTripsheetComponent.prototype.saveBtnVehicleNumberPopup = function () {
        var _this = this;
        if ($("#addNewVehicleNumberId").val() == null || $("#addNewVehicleNumberId").val() == undefined ||
            $("#addNewVehicleNumberId").val() == "" || $("#addNewVehicleNameId").val() == null ||
            $("#addNewVehicleNameId").val() == undefined || $("#addNewVehicleNameId").val() == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory Fields", "Please enter the mandatory mields", "warning");
            return false;
        }
        else {
            this.truckDataDtoNewVehicleNumberSave = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_15__["TruckDataDto"]();
            this.enteredPopUpNewVehicleNumber = $("#addNewVehicleNumberId").val();
            this.eneterdPopUpNewVehicleName = $("#addNewVehicleNameId").val();
            this.truckDataDtoNewVehicleNumberSave.truckNumber = this.enteredPopUpNewVehicleNumber;
            this.truckDataDtoNewVehicleNumberSave.vehicleName = this.eneterdPopUpNewVehicleName;
            this.truckDataDtoNewVehicleNumberSave.office = this.userDataDtoReturnSession.office;
            this.truckDataDtoNewVehicleNumberSave.mainStation = this.userDataDtoReturnSession.mainStation;
            this.truckDataDtoNewVehicleNumberSave.companyId = this.userDataDtoReturnSession.companyId;
            this.masterService.createVehicle(this.truckDataDtoNewVehicleNumberSave).subscribe(function (response) {
                console.log(response);
                _this.truckDataDtoNewVehicleNumberSaveReturn = null;
                _this.truckDataDtoNewVehicleNumberSaveReturn = response;
                if (_this.truckDataDtoNewVehicleNumberSaveReturn.status == "persisted") {
                    $("#addNewVehicleNumberId").val('');
                    $("#addNewVehicleNameId").val('');
                    $("#dropDownInputFieldVehicleNumber").val('');
                    _this.modelDropDownVehicleNumber = null;
                    _this.modalRefferenceVehicleNumberPopUp.close();
                    _this.setVehicleDetailsList();
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Sucessfully Added", "Vehicle Details Added Sucessfully", "success");
                    //this.showSpinnerForAction = false;
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Failure", "Failed to Create Vehicle Details", "error");
                    //this.showSpinnerForAction = false;
                }
            }), function (error) {
                //this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while create Vehicle Setup ", "error");
            },
                function () { return console.log('done'); };
        }
    };
    StocksForTripsheetComponent.prototype.validateCreateTripSheet = function () {
        var _this = this;
        if (($("#dropDownInputFieldVehicleNumber").val() == null) ||
            ($("#dropDownInputFieldVehicleNumber").val() == undefined) ||
            ($("#dropDownInputFieldVehicleNumber").val() == "") ||
            ($("#dropDownInputFieldDriverName").val() == null) ||
            ($("#dropDownInputFieldDriverName").val() == undefined) ||
            ($("#dropDownInputFieldDriverName").val() == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory Field", "Vehicle Number & Driver Name is Mandatory Field", "warning");
            return false;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Trip Sheet",
                text: "Sure U want to Create this Trip",
                icon: "info",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (sureYesBtn) {
                if (sureYesBtn) {
                    _this.lrDtoSetTripDetailsReturn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
                    _this.lrDtoSetTripDetailsReturn = _this.getTripDetails("Pending");
                    console.log(_this.lrDtoPassTripSchedulePage.tripId);
                    // its value cmg from 1 page when trip create  1 st level
                    if (_this.lrDtoPassTripSchedulePage.tripId != null &&
                        _this.lrDtoPassTripSchedulePage.tripId > 0) {
                        _this.lrDtoSetTripDetailsReturn.tripId = _this.lrDtoPassTripSchedulePage.tripId;
                        _this.departUpdatedTrip(_this.lrDtoSetTripDetailsReturn);
                    }
                    else {
                        _this.departNewTrip(_this.lrDtoSetTripDetailsReturn);
                    }
                }
            });
        }
    };
    StocksForTripsheetComponent.prototype.getTripDetails = function (status) {
        console.log(this.lrDtoCreateATripDetail);
        this.lrDtoSetTripDetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.listOfLrs = [];
        this.validateTotArticles = 0;
        this.validateTotAmt = 0.0;
        this.validateActWgt = 0.0;
        this.validateChgWgt = 0.0;
        this.validateDdAmt = 0.0;
        this.enteredVehicleNumber = null;
        this.enteredDriverName = null;
        this.enteredDriverMobileNo = null;
        this.enteredLabourHamaliName = null;
        this.enteredLoaderHeadName = null;
        for (var i = 0; i < this.lrDtoCreateATripDetail.lrDtoEligible.length; i++) {
            this.listOfLrs.push(this.lrDtoCreateATripDetail.lrDtoEligible[i].lrNumber);
            this.validateTotArticles = +this.validateTotArticles + +this.lrDtoCreateATripDetail.lrDtoEligible[i].totalArticles;
            this.validateTotAmt = +this.validateTotAmt + +this.lrDtoCreateATripDetail.lrDtoEligible[i].totalAmount;
            this.validateActWgt = +this.validateActWgt + +this.lrDtoCreateATripDetail.lrDtoEligible[i].actualWeight;
            this.validateChgWgt = +this.validateChgWgt + +this.lrDtoCreateATripDetail.lrDtoEligible[i].chargedWeight;
            this.validateDdAmt = +this.validateDdAmt + +this.lrDtoCreateATripDetail.lrDtoEligible[i].memoHamaliDD;
        }
        this.enteredVehicleNumber = $("#dropDownInputFieldVehicleNumber").val();
        this.enteredDriverName = $("#dropDownInputFieldDriverName").val();
        this.enteredDriverMobileNo = $("#inputFieldDriverConatctNumber").val();
        this.enteredLabourHamaliName = $("#hamalis").val();
        this.lrDtoSetTripDetails.list = this.listOfLrs;
        this.lrDtoSetTripDetails.totalArticles = this.validateTotArticles;
        this.lrDtoSetTripDetails.totalAmount = this.validateTotAmt;
        this.lrDtoSetTripDetails.actualWeight = this.validateActWgt;
        this.lrDtoSetTripDetails.chargedWeight = this.validateChgWgt;
        this.lrDtoSetTripDetails.hamaliDD = this.validateDdAmt;
        this.lrDtoSetTripDetails.vehicleNumber = this.enteredVehicleNumber;
        this.enteredTransportName = this.hashmapVehicle.get(this.enteredVehicleNumber);
        console.log(this.enteredTransportName);
        this.lrDtoSetTripDetails.transportName = this.enteredTransportName;
        // its value cmg from 1 page when trip create  1 st level
        /*  if (this.showDeliveryMan != null && this.showDeliveryMan == true) {
           */
        if (this.userDataDtoReturnSession.office != null &&
            this.userDataDtoReturnSession.office == "Binnymills") {
            this.lrDtoSetTripDetails.areaOfDelivery = this.lrDtoPassTripSchedulePage.destination;
        }
        else {
            this.lrDtoSetTripDetails.areaOfDelivery = this.lrDtoPassTripSchedulePage.selectedTripTo;
        }
        this.lrDtoSetTripDetails.branch = this.userDataDtoReturnSession.office;
        this.lrDtoSetTripDetails.totalLrs = this.lrDtoCreateATripDetail.lrDtoEligible.length;
        this.lrDtoSetTripDetails.entryBy = this.userDataDtoReturnSession.userId;
        this.lrDtoSetTripDetails.driverName = this.enteredDriverName;
        this.lrDtoSetTripDetails.status = status;
        this.lrDtoSetTripDetails.mainstation = this.userDataDtoReturnSession.mainStation;
        this.lrDtoSetTripDetails.labourHamaliStmt = this.enteredLabourHamaliName;
        this.lrDtoSetTripDetails.mobileNum = this.enteredDriverMobileNo;
        this.lrDtoSetTripDetails.isOpenTrip = this.userDataDtoReturnSession.isOpenTrip;
        if (this.userDataDtoReturnSession.mainStation == "Chennai") {
            this.lrDtoSetTripDetails.timeLogin = true;
        }
        else {
            this.lrDtoSetTripDetails.timeLogin = false;
        }
        // its value cmg from 1 page when trip create  1 st level
        this.lrDtoSetTripDetails.mode = this.lrDtoPassTripSchedulePage.module;
        this.lrDtoSetTripDetails.companyId = this.userDataDtoReturnSession.companyId;
        if (this.viewToShowDeliveryManField == true) {
            this.enteredLoaderHeadName = $("#dropDownInputFieldLabourHeadName").val();
            this.lrDtoSetTripDetails.loaderName = this.enteredLoaderHeadName;
        }
        console.log(this.lrDtoSetTripDetails);
        return this.lrDtoSetTripDetails;
    };
    StocksForTripsheetComponent.prototype.departNewTrip = function (lrdtoNewTripCreate) {
        var _this = this;
        console.log(lrdtoNewTripCreate);
        this.lrdtoNewTripCreateAndPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrdtoNewTripCreateAndPrint = lrdtoNewTripCreate;
        this.showSpinnerForTripDetailsAction = true;
        this.hireslipService.addTripSheetDetails(this.lrdtoNewTripCreateAndPrint).subscribe(function (response) {
            console.log(response);
            console.log("ADDRES");
            if (response.status != null && response.status == "Success") {
                _this.lrdtoNewTripCreateAndPrint.tripNo = response.tripNo;
                _this.lrdtoNewTripCreateAndPrint.tripDate = response.tripDate;
                _this.lrdtoNewTripCreateAndPrint.localTripNumber = response.localTripNumber;
                _this.lrdtoNewTripCreateAndPrint.lrDtoEligible = _this.eligibleLrsDataList;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Print Trip Sheet",
                    text: "Sure U want to print this Trip Sheet",
                    icon: "info",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                    buttons: ["No", "Yes"],
                }).then(function (sureTripPrintYesBtn) {
                    if (sureTripPrintYesBtn) {
                        localStorage.clear();
                        localStorage.setItem('stockTripsheetDriverPrint', JSON.stringify(_this.lrdtoNewTripCreateAndPrint));
                        _this.viewStockTripsheetPrint = true;
                        /* window.addEventListener('afterPopUp', (event) => {
                             console.log("Checking Befor");
                             this.viewStockTripsheetPrint = false;
                             localStorage.clear();
                             this.clearAllField();
                         });*/
                        setTimeout(function () {
                            _this.viewStockTripsheetPrint = false;
                            localStorage.clear();
                            _this.clearAllField();
                        }, 2000);
                    }
                    else {
                        _this.clearAllField();
                    }
                });
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Failed to  Create A TripSheet Details ", "error");
            }
            _this.showSpinnerForTripDetailsAction = false;
        }), function (error) {
            _this.showSpinnerForTripDetailsAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while adding a  TripSheet Details ", "error");
        },
            function () { return console.log('done'); };
    };
    StocksForTripsheetComponent.prototype.init = function () {
    };
    StocksForTripsheetComponent.prototype.departUpdatedTrip = function (lrdtoUpdateTrip) {
        var _this = this;
        console.log(lrdtoUpdateTrip);
        this.lrdtoUpdateTripCreateAndPrint = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrdtoUpdateTripCreateAndPrint = lrdtoUpdateTrip;
        this.showSpinnerForTripDetailsAction = true;
        this.hireslipService.updateDestLocalTripSheetDetails(this.lrdtoUpdateTripCreateAndPrint).subscribe(function (response) {
            console.log(response);
            if (response.status != null && response.status == "Success") {
                _this.lrdtoUpdateTripCreateAndPrint.tripNo = response.tripNo;
                _this.lrdtoUpdateTripCreateAndPrint.tripDate = response.tripDate;
                //this.lrdtoUpdateTripCreateAndPrint.localTripNumber = response.localTripNumber;
                _this.lrdtoUpdateTripCreateAndPrint.lrDtoEligible = _this.eligibleLrsDataList;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: "Print Trip Sheet",
                    text: "Sure U want to print this Trip Sheet",
                    icon: "info",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                    buttons: ["No", "Yes"],
                }).then(function (sureTripPrintYesBtn) {
                    if (sureTripPrintYesBtn) {
                        localStorage.clear();
                        localStorage.setItem('stockTripsheetDriverPrint', JSON.stringify(_this.lrdtoUpdateTripCreateAndPrint));
                        _this.viewStockTripsheetPrint = true;
                        setTimeout(function () {
                            _this.viewStockTripsheetPrint = false;
                            localStorage.clear();
                            _this.clearAllField();
                        }, 2000);
                        /* window.addEventListener('afterPopUp', (event) => {
                             this.viewStockTripsheetPrint = false;
                             localStorage.clear();
                             this.clearAllField();
                         });*/
                    }
                    else {
                        _this.clearAllField();
                    }
                });
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Failed to  Update A TripSheet Details ", "error");
            }
            _this.showSpinnerForTripDetailsAction = false;
        }), function (error) {
            _this.showSpinnerForTripDetailsAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while Update a  TripSheet Details ", "error");
        },
            function () { return console.log('done'); };
    };
    StocksForTripsheetComponent.prototype.validateScheduleTripSheet = function () {
        var _this = this;
        if (($("#dropDownInputFieldVehicleNumber").val() == null) ||
            ($("#dropDownInputFieldVehicleNumber").val() == undefined) ||
            ($("#dropDownInputFieldVehicleNumber").val() == "") ||
            ($("#dropDownInputFieldDriverName").val() == null) ||
            ($("#dropDownInputFieldDriverName").val() == undefined) ||
            ($("#dropDownInputFieldDriverName").val() == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory Field", "Vehicle Number & Driver Name is Mandatory Field", "warning");
            return false;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Trip Sheet",
                text: "Sure U want to Schedule this Trip",
                icon: "info",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (sureYesBtn) {
                if (sureYesBtn) {
                    _this.lrDtoSetTripDetailsReturn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
                    _this.lrDtoSetTripDetailsReturn = _this.getTripDetails("Scheduled");
                    console.log(_this.lrDtoPassTripSchedulePage.tripId);
                    // its value cmg from 1 page when trip create  1 st level
                    if (_this.lrDtoPassTripSchedulePage.tripId != null &&
                        _this.lrDtoPassTripSchedulePage.tripId > 0) {
                        _this.lrDtoSetTripDetailsReturn.tripId = _this.lrDtoPassTripSchedulePage.tripId;
                        _this.scheduleUpdateTrip(_this.lrDtoSetTripDetailsReturn);
                    }
                    else {
                        _this.scheduleAddTrip(_this.lrDtoSetTripDetailsReturn);
                    }
                }
            });
        }
    };
    StocksForTripsheetComponent.prototype.scheduleAddTrip = function (lrdtoAddScheduleTrip) {
        var _this = this;
        this.lrdtoForAddNewScheduleTrip = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrdtoForAddNewScheduleTrip = lrdtoAddScheduleTrip;
        this.showSpinnerForTripDetailsAction = true;
        this.hireslipService.addTripSheetDetails(this.lrdtoForAddNewScheduleTrip).subscribe(function (response) {
            console.log(response);
            if (response.status != null && response.status == "Success") {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Trip Scheduled", "Trip Scheduled successfully", "success");
                _this.clearAllField();
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Failed to  Create Schedule TripSheet Details ", "error");
            }
            _this.showSpinnerForTripDetailsAction = false;
        }), function (error) {
            _this.showSpinnerForTripDetailsAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while adding a  Schedule TripSheet Details ", "error");
        },
            function () { return console.log('done'); };
    };
    StocksForTripsheetComponent.prototype.scheduleUpdateTrip = function (lrdtoUpdateScheduleTrip) {
        var _this = this;
        this.lrdtoForUpdateScheduleTrip = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrdtoForUpdateScheduleTrip = lrdtoUpdateScheduleTrip;
        this.showSpinnerForTripDetailsAction = true;
        this.hireslipService.updateDestLocalTripSheetDetails(this.lrdtoForUpdateScheduleTrip).subscribe(function (response) {
            console.log(response);
            if (response.status != null && response.status == "Success") {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Trip Scheduled", "Trip Scheduled successfully", "success");
                _this.clearAllField();
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Failed to  Update A Schedule Trip Details ", "error");
            }
            _this.showSpinnerForTripDetailsAction = false;
        }), function (error) {
            _this.showSpinnerForTripDetailsAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while Update A Trip Details ", "error");
        },
            function () { return console.log('done'); };
    };
    StocksForTripsheetComponent.prototype.resetBtnTripDetailsFrom = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Reset Confirm",
            text: "Sure U want to reset this Trip details",
            icon: "info",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (sureYesBtn) {
            if (sureYesBtn) {
                _this.stepper.reset();
                _this.clearAllField();
                _this.setTripCrationForArticlesStocksSummaryDetailsList();
            }
        });
    };
    StocksForTripsheetComponent.prototype.startOverBtnTripDetailsFrom = function () {
        this.stepper.reset();
        this.clearAllField();
        this.setTripCrationForArticlesStocksSummaryDetailsList();
    };
    StocksForTripsheetComponent.prototype.backBtnForStockTripSheetDetails = function () {
        /*2nd stock for trip sheet level - end */
        /*  if (this.eligibleLrsDataList.length == null ||
              this.eligibleLrsDataList.length == undefined ||
              this.eligibleLrsDataList.length == 0) {*/
        if (this.eligibleLrsDataList == null ||
            this.eligibleLrsDataList == undefined ||
            this.eligibleLrsDataList.length == 0) {
            this.remainingLrsDataList = [];
            this.eligibleLrsDataList = [];
            $("#eligibleLrsTableId").DataTable().destroy();
            $("#remainingLrsTableId").DataTable().destroy();
            this.dtTriggerEligibleLrs.next();
            this.dtTriggerRemainingLrs.next();
            this.modelDropDownBins = null;
        }
        $("#lrNumber").val('');
        this.viewNextDarkBtnForScheduleTrip = true;
        this.viewNextGreenBtnForScheduleTrip = false;
        this.lrDtoForScheduleTripsheetReturn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoFromDashboardScheduleLocalTrip = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        /*2nd stock for trip sheet level - end */
    };
    StocksForTripsheetComponent.prototype.clearAllField = function () {
        /*1nd stock for trip sheet level - end */
        this.stockDetailsDataList = [];
        $("#tripSheetForStockDetailsTableId").DataTable().destroy();
        this.dtTriggerStockDetails.next();
        this.viewBinsStockMsg = "Bins Stock";
        this.viewLocalTripsheetMsg = "";
        this.makeAtripBtnHideShow = false;
        this.tripSheetBlackBtnHideShow = false;
        this.tripSheetBtnHideShow = false;
        this.makeATripBtnId = null;
        this.tripSheetBtnId = null;
        /*1nd stock for trip sheet level - end */
        /*2nd stock for trip sheet level - end */
        this.remainingLrsDataList = [];
        this.eligibleLrsDataList = [];
        $("#eligibleLrsTableId").DataTable().destroy();
        $("#remainingLrsTableId").DataTable().destroy();
        //this.dtTriggerEligibleLrs.next();
        //this.dtTriggerRemainingLrs.next();
        this.modelDropDownBins = null;
        this.viewNextDarkBtnForScheduleTrip = false;
        this.viewNextGreenBtnForScheduleTrip = false;
        this.lrDtoForScheduleTripsheetReturn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoFromDashboardScheduleLocalTrip = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        /*2nd stock for trip sheet level - end */
        /* 3 rd stock for trip sheet level - start*/
        this.viewScheduleTripBtn = false;
        this.modelDropDownVehicleNumber = null;
        this.modelDropDownDriverName = null;
        $("#inputFieldDriverConatctNumber").val('');
        this.modelDropDownLabourHeadName = null;
        this.modelDropDownLabourName = null;
        $("#hamalis").val('');
        /* 3 rd stock for trip sheet level - end */
        localStorage.clear();
    };
    /* Main 3 rd stock for trip sheet level - start */
    /*2nd level dashboard start */
    StocksForTripsheetComponent.prototype.setDashboardFroScheduleLocalTripSheet = function () {
        var _this = this;
        this.stepper.selectedIndex = 1;
        /*
        if (this.showDeliveryMan != null && this.showDeliveryMan == true) {
        */
        if (this.userDataDtoReturnSession.office != null &&
            this.userDataDtoReturnSession.office == "Binnymills") {
            this.lrDtoPassTripSchedulePage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
            this.lrDtoPassTripSchedulePage = this.lrDtoFromDashboardScheduleLocalTrip;
        }
        else {
            this.lrDtoPassTripSchedulePage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
            this.lrDtoPassTripSchedulePage = this.lrDtoFromDashboardScheduleLocalTrip;
        }
        this.viewLocalTripsheetMsg = this.lrDtoFromDashboardScheduleLocalTrip.destination;
        this.showSpinnerForTripScheduleAction = true;
        this.clearFieldForStockTripSheetSchedule();
        this.showSpinnerForTripScheduleAction = false;
        setTimeout(function () {
            _this.getScheduledLRDetailsFromDashboard();
        }, 2000);
    };
    StocksForTripsheetComponent.prototype.getScheduledLRDetailsFromDashboard = function () {
        var _this = this;
        //console.log("checking");
        //console.log(this.lrDtoPassTripSchedulePage);
        this.lrDtoForScduleLrDashboardLocalTrip = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_13__["LRDto"]();
        this.lrDtoForScduleLrDashboardLocalTrip.tripId = this.lrDtoPassTripSchedulePage.tripId;
        this.lrDtoForScduleLrDashboardLocalTrip.status = "Scheduled";
        this.lrDtoForScduleLrDashboardLocalTrip.godownName = this.userDataDtoReturnSession.office;
        this.lrDtoForScduleLrDashboardLocalTrip.companyId = this.userDataDtoReturnSession.companyId;
        this.showSpinnerForTripDetailsAction = true;
        this.hireslipService.getLocalTripsLrsDetails(this.lrDtoForScduleLrDashboardLocalTrip).subscribe(function (response) {
            //console.log(response);
            _this.eligibleLrsDataList = [];
            $("#eligibleLrsTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.eligibleLrsDataList = response;
                _this.showSpinnerForTripDetailsAction = false;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Alert", "No Record Found", "warning");
                _this.showSpinnerForTripDetailsAction = false;
            }
            _this.dtTriggerEligibleLrs.next();
        }), function (error) {
            _this.showSpinnerForTripDetailsAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting local trip lrs Details ", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatStepper"])
    ], StocksForTripsheetComponent.prototype, "stepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], StocksForTripsheetComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vehicleNumberPopUpTemplate'),
        __metadata("design:type", Object)
    ], StocksForTripsheetComponent.prototype, "vehicleNumberPopUpTemplate", void 0);
    StocksForTripsheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stocks-for-tripsheet',
            template: __webpack_require__(/*! ./stocks-for-tripsheet.component.html */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet/stocks-for-tripsheet.component.html"),
            styles: [__webpack_require__(/*! ./stocks-for-tripsheet.component.css */ "./src/app/stocks-for-tripsheet-page/stocks-for-tripsheet/stocks-for-tripsheet.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__["MasterReadService"],
            src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_14__["HireslipService"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_17__["MasterService"]])
    ], StocksForTripsheetComponent);
    return StocksForTripsheetComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-stocks-for-tripsheet-page-stocks-for-tripsheet-page-module.js.map