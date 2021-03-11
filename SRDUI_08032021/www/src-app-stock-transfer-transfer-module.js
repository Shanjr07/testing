(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-stock-transfer-transfer-module"],{

/***/ "./src/app/dataService/lr-service.ts":
/*!*******************************************!*\
  !*** ./src/app/dataService/lr-service.ts ***!
  \*******************************************/
/*! exports provided: LrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrService", function() { return LrService; });
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



var LrService = /** @class */ (function () {
    function LrService(http) {
        this.http = http;
        //for Local
        //        private _baseUrl = "http://localhost:8080/srd/report/v1";
        //for QA
        //    private _baseUrl = "http://54.210.51.40:8080/srd/report/v1";
        //for Live
        //        private _baseUrl = "http://3.222.201.242:8080/srd/report/v1";
        this._baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["serverUrl"].webLr;
    }
    LrService.prototype.getLRList = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLRListApi", lrDto);
    };
    LrService.prototype.getLRShortageDtls = function (hireSlipDto) {
        return this.http.post(this._baseUrl + "/getLRShortageDtlsApi", hireSlipDto);
    };
    LrService.prototype.getLrArticlesDetails = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLrArticlesDetailsApi", lrDto);
    };
    LrService.prototype.getLrShortageForSingleLr = function (lrDto) {
        return this.http.post(this._baseUrl + "/getLrShortageForSingleLrApi", lrDto);
    };
    LrService.prototype.getETAForTrip = function (lrDto) {
        return this.http.post(this._baseUrl + "/getETAForTripApi", lrDto);
    };
    LrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LrService);
    return LrService;
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

/***/ "./src/app/stock/transfer/shipment-status/shipment-status.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/stock/transfer/shipment-status/shipment-status.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window {\r\n  top:26px;\r\n    left:25px;\r\n\tmax-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n    width:280px;\r\n}\r\n.customCss{\r\n\tpadding :1px 5px;\r\n}\r\n::ng-deep .myClass .modal-dailog {\r\n\tmax-width:90%;\r\n\twidth:90%;\r\n}\r\n::ng-deep .myCustomModalClass .modal-dialog {\r\n\tmax-width: 98%;\r\n\twidth:98%;\r\n}\r\n@media print {\r\n\tbody, html * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#viewShipmentStatus, #hideUnloadingSheet * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t\r\n\t#viewCustomPrintV1 {\r\n\t\tposition: static;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t\t\tmargin-top: -580px !important;\r\n\t}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2svdHJhbnNmZXIvc2hpcG1lbnQtc3RhdHVzL3NoaXBtZW50LXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztJQUNQLFVBQVU7Q0FDYixrQkFBa0I7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBRUQ7Q0FDQyxjQUFjO0NBQ2QsVUFBVTtDQUNWO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YsVUFBVTtDQUNWO0FBRUQ7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25COztDQUVEO0VBQ0MsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixPQUFPO0dBQ04sOEJBQThCO0VBQy9CO0NBQ0QiLCJmaWxlIjoic3JjL2FwcC9zdG9jay90cmFuc2Zlci9zaGlwbWVudC1zdGF0dXMvc2hpcG1lbnQtc3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgbmdiLXR5cGVhaGVhZC13aW5kb3cge1xyXG4gIHRvcDoyNnB4O1xyXG4gICAgbGVmdDoyNXB4O1xyXG5cdG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOjI4MHB4O1xyXG59XHJcbi5jdXN0b21Dc3N7XHJcblx0cGFkZGluZyA6MXB4IDVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5teUNsYXNzIC5tb2RhbC1kYWlsb2cge1xyXG5cdG1heC13aWR0aDo5MCU7XHJcblx0d2lkdGg6OTAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm15Q3VzdG9tTW9kYWxDbGFzcyAubW9kYWwtZGlhbG9nIHtcclxuXHRtYXgtd2lkdGg6IDk4JTtcclxuXHR3aWR0aDo5OCU7XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcblx0Ym9keSwgaHRtbCAqIHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0I3ZpZXdTaGlwbWVudFN0YXR1cywgI2hpZGVVbmxvYWRpbmdTaGVldCAqIHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0XHJcblx0I3ZpZXdDdXN0b21QcmludFYxIHtcclxuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAtNTgwcHggIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/stock/transfer/shipment-status/shipment-status.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/stock/transfer/shipment-status/shipment-status.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\" id=\"viewShipmentStatus\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<h6 class=\"card-title text-white\">Shipment Status</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-8 btn_bootstrap\" style='text-align: right;'>\n\t\t\t\t\t\t<button type=\"submit\" class=\"customCss btn btn-secondary\"\n\t\t\t\t\t\t\tid=\"btnUnLoadRpt\" (click)=\"unLoadMethod(unloadingSheetDetailsPopUpTemplate)\" disabled>Get UnLoading Report</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"invoiceNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"invoiceNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getInvoiceDetails($event,unloadingSheetDetailsPopUpTemplate,consigneeMergePopUpTemplate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"source\" name=\"source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"invoiceDestination\" name=\"invoiceDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hire Slip Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"hireSlipNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"hireSlipNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Lorry Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"lorryNumber\" name=\"lorryNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"departureDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"departureDate\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"departureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"departureTime\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"driverName\" name=\"driverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Status</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"status\" name=\"status\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=''>Select Status...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"compound\">Compound</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"stock\">Stock</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"updateBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"updateMethod(confirmGodownPopUpTemplate)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled>Update</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearBtn\"(click)=\"clearAll();\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<hr style=\"width: 95%;\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\n\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">Goods\n\t\t\t\t\t\t\t\t\t\tShort & Extra Details</h6>\n\t\t\t\t\t\t\t\t\t<table datatable id=\"goodsShortAndExtraDetailsId\"\n\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsGoodsShortAndExtraDetails\"\n\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerGoodsShortAndExtraDetails\">\n\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Art</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Extra</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Open</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Short</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Wet</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let goodsShortAndExtraDetailsData of goodsShortAndExtraDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.excessGoods }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.openConditionGoods\n\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.shortGoods }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.wetConditionGoods\n\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ goodsShortAndExtraDetailsData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\n\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tfoot>\n\n\n\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-8 vl\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- column-->\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">{{contentPanel}}</h6>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"dt-button\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-left: 210px;\"id=\"btnUnLoadRpt\" disabled> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<span><i class=\"fas fa-print\">Get UnLoading Report</i></span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"updateBtn\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t(click)=\"godownPopup(confirmGodownPopUpTemplate)\" disabled>Get UnLoading Report</button> -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<table datatable id=\"invoiceDetailsId\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsInvoiceDetails\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerInvoiceDetails\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let invoiceDetailsData of invoiceDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.agentId }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.bookingDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ invoiceDetailsData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\n\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\" id=\"popupDetailsConfirmGodown\">\n\t\t\t<ng-template #confirmGodownPopUpTemplate let-ok=\"close\"\n\t\t\t\tlet-d=\"dismiss\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5>New Godown</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<!-- \t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Please Select -->\n\t\t\t\t<!-- \t\t\t\t\tGodown</h6> -->\n\t\t\t\t<br>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div *ngIf=\"spinnerForGodown\" class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\tPlease Wait While Saving Godown.....</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\" style=\"\">\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<label>Godown Name</label>\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<input id=\"godownName\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelLocalGodown\"\n\t\t\t\t\t\t\t\t\t(selectItem)=\"godownNameMethod($event)\"\n\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchLocalGodown\"\n\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterLocalGodown\"\n\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterLocalGodown\"\n\t\t\t\t\t\t\t\t\t(focus)=\"focusLocalGodownTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Select Godown Name\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"viewNewGodown\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<label>New Godown Name :</label>\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<input #newGodownName type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\tid=\"newGodownName\" name=\"newGodownName\"\n\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12 p-t-10\" style=\"text-align: right;\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t(click)=\"updateBtn()\">Save</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t(click)=\"closeBtnPopup();\">Close</button>\n\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"col-md-12\" id=\"hideUnloadingSheet\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\">\n\t\t\t<ng-template #unloadingSheetDetailsPopUpTemplate let-ok=\"close\"\n\t\t\t\tlet-d=\"dismiss\"> <!--<div class=\"modal-header\">\n\t\t\t\t\t\t<h5>Memo Less Description :</h5>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>-->\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewUnloadingSheetDetailsPopUp\"\n\t\t\t\t\t\t\t\t\t\tonafterPopUp=\"afterPopUp()\" id=\"popupUnloadingSheetDetails\">\n\t\t\t\t\t\t\t\t\t\t<app-unloading-sheet-details></app-unloading-sheet-details>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t<button style=\"float: right;\" type=\"button\"\n\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"cancelBtnId\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"closeUnloadingSheetDetailsPopUp()\">Cancel1</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\" id=\"\">\n\t\t\t<ng-template #consigneeMergePopUpTemplate let-ok=\"close\"\n\t\t\t\tlet-d=\"dismiss\"> <!--<div class=\"modal-header\">\n\t\t\t\t\t\t<h5>Memo Less Description :</h5>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>-->\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewConsigneeMergePopUp\"\n\t\t\t\t\t\t\t\t\t\tonafterPopUp=\"afterPopUp()\" id=\"popupConsigneeMerge\">\n\t\t\t\t\t\t\t\t\t\t<app-consignee-merge></app-consignee-merge>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t<button style=\"float: right;\" type=\"button\"\n\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-dark\" id=\"cancelBtnIdForMerge\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"closeConsigneeMergeDetailsPopUp()\">Cancel</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/stock/transfer/shipment-status/shipment-status.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/stock/transfer/shipment-status/shipment-status.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ShipmentStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentStatusComponent", function() { return ShipmentStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/dto/Invoice-dto */ "./src/app/dto/Invoice-dto.ts");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
/* harmony import */ var src_app_dataService_lr_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/dataService/lr-service */ "./src/app/dataService/lr-service.ts");
/* harmony import */ var src_app_stock_transfer_unloading_sheet_details_unloading_sheet_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/stock/transfer/unloading-sheet-details/unloading-sheet-details.component */ "./src/app/stock/transfer/unloading-sheet-details/unloading-sheet-details.component.ts");
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




















var ShipmentStatusComponent = /** @class */ (function () {
    function ShipmentStatusComponent(router, route, dialog, datePipe, masterService, hireslipService, modalService, lrService, consigneeService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.datePipe = datePipe;
        this.masterService = masterService;
        this.hireslipService = hireslipService;
        this.modalService = modalService;
        this.lrService = lrService;
        this.consigneeService = consigneeService;
        this.dtTriggerGoodsShortAndExtraDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerInvoiceDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.lrDtoLocalGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoLocalGodownAll = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.localGodownTA = [];
        this.focusLocalGodownTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchLocalGodown = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_12__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusLocalGodownTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return (term === '' ? _this.localGodownTA
                : _this.localGodownTA.filter(function (v) { return v.godownName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterLocalGodown = function (x) { return x.godownName; };
        this.viewNewGodown = false;
        this.invoicedtoForSearchOtherDetails = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.invoicedtoForSearchOtherDetailsRet = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.invoiceGoodsDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.unloadAt = null;
        //showBtnUnload='';
        this.showBtnUnload = 'ShowBtnUnload ShipmentStatus';
        this.unblockUnldgEdit = false;
        this.unblockUnldg = false;
        this.contentPanel = '';
        this.lrDtoToGetLrdetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtosDup = [];
        this.hireSlipDtoToGetShortExtra = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.partyMasterDtoConsigneeMerge = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.hireSlipsBlkForUnLoadRpt = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireSlipsBlkForUnLoadRptReturn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.isMergedEnable = false;
        this.showMergedEnable = 'ShowMergeEnable ShipmentStatus';
        this.viewUnloadingSheetDetailsPopUp = false;
        this.updateService = false;
        this.lrDtoNewGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.invoiceDtoUpdateShipment = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.listOfLRNumber = [];
        this.spinnerForGodown = false;
        this.returnMessageFinish = null;
        this.hireslipdtoForUnload = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipdtoForPopUp = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.viewConsigneeMergePopUp = false;
        this.invoiceDtoForConsigneeMergePopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.sendSmsLrdto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.sendSmsLrdtoForOthers = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrdtoForSpecificStn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrdtoForSpecificStnRet = [];
        this.lrdtoGetPrepareSMSRevisedList = [];
        this.lrdtoGetPrepareSMSRevised = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrdtoGetPrepareSMSRevisedRet = [];
        this.lrdtoSendMultipltSMSMethod = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrdtoSendMultipltSMSMethodList = [];
        this.lrdtoSendMultipltSMSMethodSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.getInvoiceDetailsService = function (unloadingSheetDetailsPopUpTemplate, consigneeMergePopUpTemplate) {
            _this.showSpinnerForAction = true;
            _this.hireslipService.getInvoiceDetails(_this.invoicedtoForSearchOtherDetails).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log('getInvoiceDetailsService');
                console.log(response);
                _this.invoicedtoForSearchOtherDetailsReturn = '';
                _this.invoicedtoForSearchOtherDetailsReturn = response;
                _this.invoicedtoForSearchOtherDetailsRet = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
                console.log(_this.invoicedtoForSearchOtherDetailsReturn);
                _this.invoicedtoForSearchOtherDetailsRet = _this.invoicedtoForSearchOtherDetailsReturn;
                _this.invoiceGoodsDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
                _this.invoiceGoodsDto = _this.invoicedtoForSearchOtherDetailsReturn;
                _this.unloadAt = _this.invoicedtoForSearchOtherDetailsRet.toStation;
                if ((_this.invoicedtoForSearchOtherDetailsRet.size == 0) || (_this.invoicedtoForSearchOtherDetailsRet.status == 'Loading')) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "LR Shipment",
                        text: "Invoice Number" + _this.enteredInvoiceNumber + " not found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    //updateButton.setEnabled(false);
                    $("#updateBtn").prop("disabled", true);
                }
                else if ((_this.invoicedtoForSearchOtherDetailsRet.toStation != null) && (_this.invoicedtoForSearchOtherDetailsRet.toStation != _this.userDataDtoReturnSession.mainStation) && (_this.invoicedtoForSearchOtherDetailsRet.toStation != _this.userDataDtoReturnSession.office)) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "LR Shipment",
                        text: "Not Allowed",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    // updateButton.setEnabled(false);
                    $("#updateBtn").prop("disabled", true);
                    /*if (SRDWeb.role
                                    .equalsIgnoreCase(loginConstants
                                            .Super_Administrator())) {
                                btnUnLoadRpt
                                        .setEnabled(true);
                            } else if (unblockUnldgEdit
                                    && (SRDWeb.belongsToRegion
                                            .equalsIgnoreCase(invoiceDto
                                                    .getBelongsTo()))) {
                                btnUnLoadRpt
                                        .setEnabled(true);
                            }*/
                    //For superadmin new right is added as  unblockUnldg
                    if (_this.unblockUnldg == true) {
                        //btnUnLoadRpt.setEnabled(true);
                        console.log('for superadmin');
                        $("#btnUnLoadRpt").prop("disabled", false);
                    }
                    else if ((_this.unblockUnldgEdit == true) && (_this.userDataDtoReturnSession.belongsToRegion == _this.invoicedtoForSearchOtherDetailsRet.belongsTo)) {
                        //btnUnLoadRpt.setEnabled(true);
                        $("#btnUnLoadRpt").prop("disabled", false);
                    }
                }
                else {
                    _this.contentPanel = 'Invoice Details -' + _this.invoicedtoForSearchOtherDetailsRet.status;
                    if ((_this.invoicedtoForSearchOtherDetailsRet.status) != null
                        && (_this.invoicedtoForSearchOtherDetailsRet.status != 'Transit')) {
                        console.log('it is not transit');
                        $("#updateBtn").prop("disabled", true);
                        //updateButton.setEnabled(false);
                        _this.getInvoiceLrsDetails(_this.invoicedtoForSearchOtherDetailsRet);
                    }
                    else {
                        _this.chkPendingMergeCgnee(_this.invoicedtoForSearchOtherDetailsRet, unloadingSheetDetailsPopUpTemplate, consigneeMergePopUpTemplate);
                        console.log('it is  transit');
                    }
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Failed To Load the Invoice Details....Please Try Again", "info");
            }, function () { return console.log('done'); };
        };
        this.getLrDetailsOfInvoice = function () {
            _this.showSpinnerForAction = true;
            _this.lrService.getLRList(_this.lrDtoToGetLrdetails).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#invoiceDetailsId").DataTable().destroy();
                _this.invoiceDetailsDataList = [];
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Warning",
                        text: "No LR  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.invoiceDetailsDataList = response;
                    console.log('getLrDetailsOfInvoice');
                    console.log(_this.invoiceDetailsDataList);
                    _this.lrDtosDup = [];
                    _this.lrdtoInvoiceRet = [];
                    _this.lrdtoInvoiceRet = response;
                    _this.lrDtosDup = response;
                    console.log('getting the lrDtosDup value');
                    console.log(_this.lrDtosDup);
                    _this.getShortExtraDetails();
                }
                _this.dtTriggerInvoiceDetails.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the  Invoice LR details", "info");
            }, function () { return console.log('done'); };
        };
        this.getShortExtraInfo = function () {
            _this.showSpinnerForAction = true;
            _this.lrService.getLRShortageDtls(_this.hireSlipDtoToGetShortExtra).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#goodsShortAndExtraDetailsId").DataTable().destroy();
                _this.goodsShortAndExtraDetailsDataList = [];
                console.log('getShortExtraInfo');
                console.log(response);
                if (response.length == 0) {
                    /*swal({
                        title: "Warning",
                        text: "No  Short or Extra LR Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });*/
                }
                else {
                    _this.goodsShortAndExtraDetailsDataList = response;
                    console.log(_this.goodsShortAndExtraDetailsDataList);
                }
                _this.dtTriggerGoodsShortAndExtraDetails.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the  Short and Extra  details", "info");
            }, function () { return console.log('done'); };
        };
        this.chkPendingMergeCgneeInfo = function (invoiceDto, unloadingSheetDetailsPopUpTemplate, consigneeMergePopUpTemplate) {
            _this.showSpinnerForAction = true;
            _this.consigneeService.getConsigneeRepeatDetails(_this.partyMasterDtoConsigneeMerge).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log('chkPendingMergeCgneeInfo');
                console.log(response);
                if (response.length > 0 && _this.isMergedEnable == true) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Consignee Merge",
                        text: "Invoice Consignee's Required to be Merge First",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default.a.close();
                        _this.modalRefferenceConsigneeMergeDetailsPopUp = _this.modalService.open(consigneeMergePopUpTemplate, { centered: true, windowClass: "myCustomModalClass" });
                        _this.modalRefferenceConsigneeMergeDetailsPopUp.result.then(function (result) {
                            _this.modalRefferenceConsigneeMergeDetailsClosePopUp = "Closed with: " + result;
                        }, function (reason) {
                            _this.modalRefferenceConsigneeMergeDetailsClosePopUp = "Dismissed " + _this.getDismissReason(reason);
                        });
                        _this.enteredInvoiceNumber = $("#invoiceNumber").val();
                        _this.invoiceDtoForConsigneeMergePopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
                        _this.invoiceDtoForConsigneeMergePopup.invoiceNumber = _this.enteredInvoiceNumber;
                        _this.invoiceDtoForConsigneeMergePopup.mode = "shipmentstatus";
                        localStorage.clear();
                        localStorage.setItem('popupShipmentStatusForMerge', JSON.stringify(_this.invoiceDtoForConsigneeMergePopup));
                        _this.viewConsigneeMergePopUp = true;
                        window.addEventListener('afterPopUp', function (event) {
                            _this.viewConsigneeMergePopUp = false;
                        });
                    });
                }
                else {
                    _this.getHireSlipsBlkForUnLoadRpt(invoiceDto, unloadingSheetDetailsPopUpTemplate);
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the  Invoice Consignee's merge  details", "info");
            }, function () { return console.log('done'); };
        };
        this.getHireSlipsBlkForUnLoadRptInfo = function (invoiceDto, unloadingSheetDetailsPopUpTemplate) {
            _this.showSpinnerForAction = true;
            _this.hireslipService.getHireSlipsBlkForUnLoadRpt(_this.hireSlipsBlkForUnLoadRpt).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log('getHireSlipsBlkForUnLoadRptInfo');
                console.log(response);
                _this.hireSlipsBlkForUnLoadRptRet = '';
                _this.hireSlipsBlkForUnLoadRptRet = response;
                _this.hireSlipsBlkForUnLoadRptReturn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
                _this.hireSlipsBlkForUnLoadRptReturn = _this.hireSlipsBlkForUnLoadRptRet;
                if (_this.hireSlipsBlkForUnLoadRptReturn.status != null && (_this.hireSlipsBlkForUnLoadRptReturn.status == 'Block')) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Shipment Status is Blocked",
                        text: "Due to Unloading Report is Incomplete For HireSlip No-" + _this.hireSlipsBlkForUnLoadRptReturn.invoiceNumber + ", You Have To Update",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Shipment Status is Blocked",
                        text: "Due to Unloading Report is Incomplete For HireSlip No-" + _this.hireSlipsBlkForUnLoadRptReturn.invoiceNumber + ", You Have To Update",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        sweetalert__WEBPACK_IMPORTED_MODULE_5___default.a.close();
                        $("#invoiceNumber").val(_this.hireSlipsBlkForUnLoadRptReturn.invoiceNumber);
                        //Pending-done
                        /*this.hireslipdtoForUnload=new HireSlipDto();
                        this.hireslipdtoForUnload.hireslipnumber=this.enteredInvoiceNumber;
                        this.hireslipdtoForUnload.companyid=this.userDataDtoReturnSession.companyId;
                        this.showSpinnerForAction = true;
                        this.hireslipService.getHireSlipUnLoadRptDtls(this.hireslipdtoForUnload).subscribe(
                            (response) => {
                                this.showSpinnerForAction = false;
                                this.hireSlipUnLoadRptDtlsRet=[];
                                this.hireSlipUnLoadRptDtlsRet=response;
                                console.log(this.hireSlipUnLoadRptDtlsRet);
                                
                                
                            }), (error) => {
                                this.showSpinnerForAction = false;
                                swal("Error", "Server Problem Occurred While getting HireSlip UnLoad Rpt Dtls Info", "info");
                            }, () => console.log('done');*/
                        //Popup part start
                        /*this.modalRefferenceUnloadingSheetDetailsPopUp = this.modalService.open(unloadingSheetDetailsPopUpTemplate,
                            { centered: true, windowClass: "myCustomModalClass" });
                        this.modalRefferenceUnloadingSheetDetailsPopUp.result.then((result) => {
                            this.modalRefferenceUnloadingSheetDetailsClosePopUp = `Closed with: ${result}`;
                        }, reason => {
                            this.modalRefferenceUnloadingSheetDetailsClosePopUp = `Dismissed ${this.getDismissReason(reason)}`;
                        });*/
                        _this.enteredInvoiceNumber = $("#invoiceNumber").val();
                        _this.hireslipdtoForPopUp = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
                        _this.hireslipdtoForPopUp.hireslipnumber = _this.enteredInvoiceNumber;
                        localStorage.clear();
                        localStorage.setItem('popupShipmentStatus', JSON.stringify(_this.hireslipdtoForPopUp));
                        var dialogRef = _this.dialog.open(src_app_stock_transfer_unloading_sheet_details_unloading_sheet_details_component__WEBPACK_IMPORTED_MODULE_19__["UnloadingSheetDetailsComponent"], {});
                        dialogRef.afterClosed().subscribe(function (result) {
                            console.log('The dialog was closed');
                            $("#btnUnLoadRpt").prop("disabled", true);
                            _this.router.navigate(['.'], { relativeTo: _this.route });
                        });
                        /*if(this.hireSlipUnLoadRptDtlsRet !=null){
                                localStorage.setItem('popupShipmentStatusDataList', JSON.stringify(this.hireSlipUnLoadRptDtlsRet));
                            }*/
                        /*this.viewUnloadingSheetDetailsPopUp = true;
                        window.addEventListener('afterPopUp', (event) => {
                            this.viewUnloadingSheetDetailsPopUp = false;
                        });*/
                    });
                }
                else if (_this.hireSlipsBlkForUnLoadRptReturn.status != null && (_this.hireSlipsBlkForUnLoadRptReturn.status == 'unBlock')) {
                    _this.getInvoiceLrsDetails(invoiceDto);
                    $("#updateBtn").prop("disabled", false);
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting the  Short and Extra  details", "info");
            }, function () { return console.log('done'); };
        };
        this.setUpdateShipmentInfo = function (status) {
            _this.showSpinnerForAction = true;
            console.log(_this.invoiceDtoUpdateShipment);
            _this.hireslipService.updateShipmentStatus(_this.invoiceDtoUpdateShipment).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log(response);
                if (response.status == 'Success') {
                    _this.clearFields();
                    $("#status").val('');
                    $("#invoiceNumber").val('');
                    $("#invoiceNumber").focus();
                    $("#updateBtn").prop("disabled", true);
                    _this.contentPanel = 'Invoice Details';
                    //Pending
                    //LRShortage.gridReconfigure();		
                    //TransitTrips.gridReconfigure();
                    _this.getTableClear();
                    _this.invoiceDetailsDataList = [];
                    _this.selectedGodownName = '';
                    $("#godownName").val('');
                    _this.validateNewGodownFieldValue = '';
                    $("#newGodownName").val('');
                    _this.viewNewGodown = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Success",
                        text: "Lrs Successfully Moved to  " + status,
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.sentSmsFlow();
                }
                else if (response.status == 'NotExist') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Not Exist ",
                        text: "Invoice not Exist",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: "Server Error ",
                        text: "Problem Occured While Updating Records",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While Updating Shipment Status", "info");
            }, function () { return console.log('done'); };
        };
        this.getSmsStatusMethodForBinny = function () {
            _this.showSpinnerForAction = true;
            _this.hireslipService.getSmsStatus(_this.sendSmsLrdto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log('Inside getSmsStatusMethodForBinny');
                console.log(response);
                var smsFlowForBinny = response;
                if (smsFlowForBinny.sendMsg == true) {
                    console.log('binnySMS True');
                    _this.specificStationSMS();
                }
                else {
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting Sms Status ", "info");
            }, function () { return console.log('done'); };
        };
        this.getSmsStatusMethodForOthers = function () {
            _this.showSpinnerForAction = true;
            _this.hireslipService.getSmsStatus(_this.sendSmsLrdtoForOthers).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log('Inside getSmsStatusMethodForOthers');
                console.log(response);
                var smsFlowForOthers = response;
                if (smsFlowForOthers.sendMsg == true) {
                    _this.getPrepareSMSRevised(_this.lrDtosDup);
                }
                else {
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting Sms Status ", "info");
            }, function () { return console.log('done'); };
        };
        this.specificStationSMSInfo = function () {
            _this.showSpinnerForAction = true;
            _this.hireslipService.getPartiesForSMS(_this.lrdtoForSpecificStn).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log('Inside specificStationSMSInfo');
                console.log(response);
                _this.lrdtoForSpecificStnRet = [];
                _this.lrdtoForSpecificStnRet = response;
                if (_this.lrdtoForSpecificStnRet.length > 0) {
                    _this.getPrepareSMSRevised(_this.lrdtoForSpecificStnRet);
                }
                else {
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting specific Station SMS Info ", "info");
            }, function () { return console.log('done'); };
        };
        this.getPrepareSMSRevised = function (lrdtoForPrepareSmsRevised) {
            console.log('Inside of getPrepareSMSRevised');
            _this.showSpinnerForAction = true;
            _this.lrdtoGetPrepareSMSRevisedList = [];
            for (var i = 0; i < lrdtoForPrepareSmsRevised.length; i++) {
                _this.lrdtoGetPrepareSMSRevised = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
                _this.lrdtoGetPrepareSMSRevised.agentId = lrdtoForPrepareSmsRevised[i].agentId;
                _this.lrdtoGetPrepareSMSRevised.source = lrdtoForPrepareSmsRevised[i].source;
                _this.lrdtoGetPrepareSMSRevised.destination = lrdtoForPrepareSmsRevised[i].destination;
                _this.lrdtoGetPrepareSMSRevised.lrNumber = lrdtoForPrepareSmsRevised[i].lrNumber;
                _this.lrdtoGetPrepareSMSRevised.totalArticles = lrdtoForPrepareSmsRevised[i].totalArticles;
                _this.lrdtoGetPrepareSMSRevised.consignorName = lrdtoForPrepareSmsRevised[i].consignorName;
                _this.lrdtoGetPrepareSMSRevised.mobileNum = lrdtoForPrepareSmsRevised[i].mobileNum;
                _this.lrdtoGetPrepareSMSRevised.bookingDate = lrdtoForPrepareSmsRevised[i].bookingDate;
                _this.lrdtoGetPrepareSMSRevised.companyId = _this.userDataDtoReturnSession.companyId;
                _this.lrdtoGetPrepareSMSRevisedList.push(_this.lrdtoGetPrepareSMSRevised);
            }
            console.log(_this.lrdtoGetPrepareSMSRevisedList);
            _this.lrService.getETAForTrip(_this.lrdtoGetPrepareSMSRevisedList).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log('Inside getPrepareSMSRevised');
                console.log(response);
                _this.lrdtoGetPrepareSMSRevisedRet = [];
                _this.lrdtoGetPrepareSMSRevisedRet = response;
                _this.sendMultipltSMSMethod(_this.lrdtoGetPrepareSMSRevisedRet);
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting Sms Status ", "info");
            }, function () { return console.log('done'); };
        };
        this.sendMultipltSMSMethod = function (lrdtoFromGetPrepareSMSRevisedRet) {
            _this.lrdtoSendMultipltSMSMethodList = [];
            console.log('Inside of sendMultipltSMSMethod');
            console.log(lrdtoFromGetPrepareSMSRevisedRet);
            for (var i = 0; i < lrdtoFromGetPrepareSMSRevisedRet.length; i++) {
                _this.lrdtoSendMultipltSMSMethod = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
                _this.lrdtoSendMultipltSMSMethod.message = lrdtoFromGetPrepareSMSRevisedRet[i].message;
                _this.lrdtoSendMultipltSMSMethod.mobileNum = lrdtoFromGetPrepareSMSRevisedRet[i].mobileNum;
                _this.lrdtoSendMultipltSMSMethodList.push(_this.lrdtoSendMultipltSMSMethod);
            }
            _this.lrdtoSendMultipltSMSMethodSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
            _this.lrdtoSendMultipltSMSMethodSet.lrDtos = _this.lrdtoSendMultipltSMSMethodList;
            _this.lrdtoSendMultipltSMSMethodSet.companyId = _this.userDataDtoReturnSession.companyId;
            _this.lrdtoSendMultipltSMSMethodSet.credentials = _this.userDataDtoReturnSession.credentials;
            console.log(_this.lrdtoSendMultipltSMSMethodSet);
            _this.showSpinnerForAction = true;
            _this.hireslipService.sendMultipltSMS(_this.lrdtoSendMultipltSMSMethodSet).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log('Inside getPrepareSMSRevised');
                console.log(response);
                var sendMultipltSMSMethodRet = response;
                console.log(sendMultipltSMSMethodRet.status);
                if (sendMultipltSMSMethodRet.status == 'send') {
                    _this.lrDtosDup = [];
                    _this.unloadAt = '';
                    _this.smsStatus = '';
                }
                else {
                    _this.lrDtosDup = [];
                    _this.unloadAt = '';
                    _this.smsStatus = '';
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Server Problem Occurred While getting Send Multiple sms Status ", "info");
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
            this.mainStn = this.userDataDtoReturnSession.mainStation == null ? '' : this.userDataDtoReturnSession.mainStation;
            this.getLocalGodownDetails();
            this.disableMthod();
            console.log(this.userDataDtoReturnSession.delivDateOnArrival);
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Unblock Edit Unloading Details") {
                        this.unblockUnldgEdit = true;
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "ShowBtnUnload ShipmentStatus") {
                        this.unblockUnldg = true;
                    }
                    /*if (this.showBtnUnload=='ShowBtnUnload ShipmentStatus') {
                      this.unblockUnldg=true;
                      }*/
                    /*if (this.showMergedEnable=='ShowMergeEnable ShipmentStatus') {
                       this.isMergedEnable=true;
                       }*/
                    // As of now isMergedEnable is default set as true as per Asrar bhai 
                    this.isMergedEnable = true;
                    //
                    if (this.userDataDtoReturnSession.office == 'KVH') {
                        this.updateService = true;
                    }
                }
            }
        }
    }
    ShipmentStatusComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    /* for datatable starts */
    ShipmentStatusComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    ShipmentStatusComponent.prototype.ngOnInit = function () {
        this.dtOptionsGoodsShortAndExtraDetails = {
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
            "scrollY": 300,
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
                var art = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var exta = api.column(2).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var open = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var short = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var wet = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html(art);
                $(api.column(2).footer()).html(exta);
                $(api.column(3).footer()).html(open);
                $(api.column(4).footer()).html(short);
                $(api.column(5).footer()).html(wet);
                $(api.column(6).footer()).html();
            }
        };
        this.dtOptionsInvoiceDetails = {
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
            "scrollY": 300,
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
                var art = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actWgt = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chgWgt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var toPay = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html();
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html();
                $(api.column(5).footer()).html(art);
                $(api.column(6).footer()).html(actWgt);
                $(api.column(7).footer()).html(chgWgt);
                $(api.column(8).footer()).html(toPay);
                $(api.column(9).footer()).html(paid);
            }
        };
    };
    ShipmentStatusComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerGoodsShortAndExtraDetails.unsubscribe();
        this.dtTriggerInvoiceDetails.unsubscribe();
    };
    ShipmentStatusComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerGoodsShortAndExtraDetails.next();
        this.dtTriggerInvoiceDetails.next();
    };
    ShipmentStatusComponent.prototype.getLocalGodownMethod = function () {
        this.lrDtoLocalGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrDtoLocalGodown.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoLocalGodown.branch = this.userDataDtoReturnSession.office;
        this.lrDtoLocalGodown.mode = 'active';
    };
    ShipmentStatusComponent.prototype.getLocalGodownDetails = function () {
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
                    _this.lrDtoLocalGodownAll.godownName = 'ADD NEW';
                    _this.localGodownTA.push(_this.lrDtoLocalGodownAll);
                    for (var i = 0; i < _this.localGodownOptions.length; i++) {
                        _this.localGodownTA.push(_this.localGodownOptions[i]);
                    }
                    window.setTimeout(function () {
                        $("#godownName").val('ADD NEW');
                    }, 200);
                }
                else {
                    _this.lrDtoLocalGodownAll.godownName = '';
                    _this.localGodownTA.push(_this.lrDtoLocalGodownAll);
                    window.setTimeout(function () {
                        $("#godownName").val('');
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
    ShipmentStatusComponent.prototype.getDismissReason = function (reason) {
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
    //For Pop up
    ShipmentStatusComponent.prototype.godownNameMethod = function (e) {
        this.modelLocalGodown = e.item;
        console.log(this.modelLocalGodown);
        this.selectedGodownName = this.modelLocalGodown.godownName;
        if (this.selectedGodownName == 'ADD NEW') {
            this.viewNewGodown = true;
            window.setTimeout(function () {
                $("#newGodownName").focus();
            }, 100);
        }
        else {
            this.viewNewGodown = false;
        }
    };
    ShipmentStatusComponent.prototype.closeBtnPopup = function () {
        this.modalRefferenceGodownPopUp.close();
    };
    //Get Hireslip details 
    ShipmentStatusComponent.prototype.getInvoiceDetails = function (e, unloadingSheetDetailsPopUpTemplate, consigneeMergePopUpTemplate) {
        this.enteredInvoiceNumber = $("#invoiceNumber").val();
        if (e.keyCode == 13) {
            if (this.enteredInvoiceNumber != null && this.enteredInvoiceNumber != '') {
                this.getInvoiceDetailsInfo(unloadingSheetDetailsPopUpTemplate, consigneeMergePopUpTemplate);
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Warning",
                    text: "Please Enter Invoice Number",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default.a.close();
                    window.setTimeout(function () {
                        $("#invoiceNumber").focus();
                    }, 100);
                    return false;
                });
            }
        }
    };
    ShipmentStatusComponent.prototype.disableMthod = function () {
        console.log('hh');
        $("#source").prop("disabled", false);
        $("#invoiceDestination").prop("disabled", false);
        $("#hireSlipNumber").prop("disabled", false);
        $("#lorryNumber").prop("disabled", false);
        $("#departureDate").prop("disabled", false);
        $("#departureTime").prop("disabled", false);
        $("#driverName").prop("disabled", false);
    };
    ShipmentStatusComponent.prototype.getInvoiceDetailsInfo = function (unloadingSheetDetailsPopUpTemplate, consigneeMergePopUpTemplate) {
        this.onInvoiceEnteredFields();
        $("#btnUnLoadRpt").prop("disabled", true);
        this.invoicedtoForSearchOtherDetails = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.invoicedtoForSearchOtherDetails.invoiceNumber = this.enteredInvoiceNumber;
        this.invoicedtoForSearchOtherDetails.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.invoicedtoForSearchOtherDetails);
        this.getInvoiceDetailsService(unloadingSheetDetailsPopUpTemplate, consigneeMergePopUpTemplate);
        this.getTableClear();
    };
    ShipmentStatusComponent.prototype.onInvoiceEnteredFields = function () {
        $("#status").val('');
        this.clearFields();
        //lrDtosDup.clear();
        this.unloadAt = null;
        this.lrDtosDup = [];
        //storeLrs.removeAll();
        //gridInvoiceList.reconfigure(storeLrs, ShipmentStatus);
        $("#updateBtn").prop("disabled", false);
        this.contentPanel = 'Invoice Details -';
    };
    ShipmentStatusComponent.prototype.clearFields = function () {
        $("#source").val('');
        $("#invoiceDestination").val('');
        $("#hireSlipNumber").val('');
        $("#lorryNumber").val('');
        $("#departureDate").val('');
        $("#departureTime").val('');
        $("#driverName").val('');
    };
    ShipmentStatusComponent.prototype.getTableClear = function () {
        $("#invoiceDetailsId").DataTable().destroy();
        this.invoiceDetailsDataList = [];
        this.dtTriggerInvoiceDetails.next();
        $("#goodsShortAndExtraDetailsId").DataTable().destroy();
        this.goodsShortAndExtraDetailsDataList = [];
        this.dtTriggerGoodsShortAndExtraDetails.next();
    };
    //For getting the getInvoiceLrsDetails
    ShipmentStatusComponent.prototype.getInvoiceLrsDetails = function (invoicedtoForSearchOtherDetailsRet) {
        $("#source").val(invoicedtoForSearchOtherDetailsRet.fromStation);
        $("#invoiceDestination").val(invoicedtoForSearchOtherDetailsRet.toStation);
        $("#hireSlipNumber").val(invoicedtoForSearchOtherDetailsRet.hireSlipNumber);
        $("#lorryNumber").val(invoicedtoForSearchOtherDetailsRet.vehicleNumber);
        $("#departureDate").val(invoicedtoForSearchOtherDetailsRet.departuredate == null ? null : invoicedtoForSearchOtherDetailsRet.departuredate);
        $("#departureTime").val(invoicedtoForSearchOtherDetailsRet.departureTime);
        $("#driverName").val(invoicedtoForSearchOtherDetailsRet.driverName);
        $("#source").prop("disabled", true);
        $("#invoiceDestination").prop("disabled", true);
        $("#hireSlipNumber").prop("disabled", true);
        $("#lorryNumber").prop("disabled", true);
        $("#departureDate").prop("disabled", true);
        $("#departureTime").prop("disabled", true);
        $("#driverName").prop("disabled", true);
        var retStatus = invoicedtoForSearchOtherDetailsRet.status.toLowerCase();
        if (retStatus == 'transit') {
            // nothing
        }
        if (retStatus == 'compound') {
            $("#status").val('compound');
            $("#updateBtn").prop("disabled", false);
        }
        else if (retStatus == 'stock') {
            $("#status").val('stock');
            if (invoicedtoForSearchOtherDetailsRet.isUnldgDetailsFilled == true) {
                $("#btnUnLoadRpt").prop("disabled", true);
            }
            else {
                $("#btnUnLoadRpt").prop("disabled", false);
            }
        }
        this.lrDtoToGetLrdetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.enteredInvoiceNumber = $("#invoiceNumber").val();
        this.lrDtoToGetLrdetails.mode = "shipmentstatus";
        this.lrDtoToGetLrdetails.additional = "shipment";
        this.lrDtoToGetLrdetails.invoiceNumber = this.enteredInvoiceNumber;
        this.lrDtoToGetLrdetails.branch = this.userDataDtoReturnSession.office;
        this.lrDtoToGetLrdetails.branchType = this.userDataDtoReturnSession.stationType;
        this.lrDtoToGetLrdetails.destination = invoicedtoForSearchOtherDetailsRet.toStation;
        this.lrDtoToGetLrdetails.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.lrDtoToGetLrdetails);
        this.getLrDetailsOfInvoice();
    };
    //For getting the getShortExtraDetails
    ShipmentStatusComponent.prototype.getShortExtraDetails = function () {
        this.enteredInvoiceNumber = $("#invoiceNumber").val();
        this.hireSlipDtoToGetShortExtra = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireSlipDtoToGetShortExtra.hireslipnumber = this.enteredInvoiceNumber;
        this.hireSlipDtoToGetShortExtra.companyid = this.userDataDtoReturnSession.companyId;
        console.log(this.hireSlipDtoToGetShortExtra);
        this.getShortExtraInfo();
    };
    //For getting the chkPendingMergeCgnee
    ShipmentStatusComponent.prototype.chkPendingMergeCgnee = function (invoiceDto, unloadingSheetDetailsPopUpTemplate, consigneeMergePopUpTemplate) {
        this.partyMasterDtoConsigneeMerge = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.partyMasterDtoConsigneeMerge.invoiceNumber = this.enteredInvoiceNumber;
        this.partyMasterDtoConsigneeMerge.mode = 'specificInvoice';
        this.partyMasterDtoConsigneeMerge.office = this.userDataDtoReturnSession.mainStation;
        this.partyMasterDtoConsigneeMerge.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.partyMasterDtoConsigneeMerge);
        this.chkPendingMergeCgneeInfo(invoiceDto, unloadingSheetDetailsPopUpTemplate, consigneeMergePopUpTemplate);
    };
    ShipmentStatusComponent.prototype.closeConsigneeMergeDetailsPopUp = function () {
        this.modalRefferenceConsigneeMergeDetailsPopUp.close();
    };
    //For getting the getHireSlipsBlkForUnLoadRpt
    ShipmentStatusComponent.prototype.getHireSlipsBlkForUnLoadRpt = function (invoiceDto, unloadingSheetDetailsPopUpTemplate) {
        this.hireSlipsBlkForUnLoadRpt = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireSlipsBlkForUnLoadRpt.toStation = invoiceDto.toStation;
        this.hireSlipsBlkForUnLoadRpt.companyid = this.userDataDtoReturnSession.companyId;
        console.log(this.hireSlipsBlkForUnLoadRpt);
        this.getHireSlipsBlkForUnLoadRptInfo(invoiceDto, unloadingSheetDetailsPopUpTemplate);
    };
    ShipmentStatusComponent.prototype.setUnloadingPopup = function (unloadingSheetDetailsPopUpTemplate, hireSlipsBlkForUnLoadRptReturn) {
        /*const dialogRef = this.dialog.open(unloadingSheetDetailsPopUpTemplate, {
        
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            if (result != null && result != undefined &&
                result == "No Trip") {
                //  this.gridReconifgureOnReloadBtn();
            }
            this.router.navigate(['.'], { relativeTo: this.route });
        });*/
        var _this = this;
        this.modalRefferenceUnloadingSheetDetailsPopUp = this.modalService.open(unloadingSheetDetailsPopUpTemplate, { centered: true, windowClass: "myCustomModalClass" });
        this.modalRefferenceUnloadingSheetDetailsPopUp.result.then(function (result) {
            _this.modalRefferenceUnloadingSheetDetailsClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceUnloadingSheetDetailsClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
        localStorage.clear();
        localStorage.setItem('popupShipmentStatus', JSON.stringify(hireSlipsBlkForUnLoadRptReturn));
        this.viewUnloadingSheetDetailsPopUp = true;
        window.addEventListener('afterPopUp', function (event) {
            _this.viewUnloadingSheetDetailsPopUp = false;
        });
    };
    ShipmentStatusComponent.prototype.closeUnloadingSheetDetailsPopUp = function () {
        this.modalRefferenceUnloadingSheetDetailsPopUp.close();
        $("#btnUnLoadRpt").prop("disabled", true);
    };
    //On Update Button Click
    // popup for godown is shown only if it is stock and for kvh even it is stock it wont show the godwon popup
    ShipmentStatusComponent.prototype.updateMethod = function (confirmGodownPopUpTemplate) {
        var _this = this;
        this.selectedStatus = $("#status").val();
        if (this.invoiceDetailsDataList == 0) {
            //No lrs in lr details table
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                title: "No LRs",
                text: "No LRs Found, Can not take into Stocks.Please ReEnter it ",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            if (this.selectedStatus == 'stock') {
                if (this.updateService == true) {
                    this.updateStatus();
                }
                else {
                    this.modalRefferenceGodownPopUp = this.modalService.open(confirmGodownPopUpTemplate, { centered: true });
                    this.modalRefferenceGodownPopUp.result.then(function (result) {
                        _this.modalRefferenceGodownClosePopUp = "Closed with: " + result;
                    }, function (reason) {
                        _this.modalRefferenceGodownClosePopUp = "Dismissed " + _this.getDismissReason(reason);
                    });
                }
            }
            else {
                console.log('compound');
                this.updateStatus();
            }
        }
    };
    ShipmentStatusComponent.prototype.updateStatus = function () {
        console.log();
        this.selectedGodownName = $("#godownName").val();
        if (this.selectedGodownName == 'ADD NEW') {
            this.setNewGodownNameDetails();
        }
        else {
            console.log('compound or other godwnName is selected');
            this.updateShipmentStatus(this.selectedGodownName);
        }
    };
    // Saving new Godown Name
    ShipmentStatusComponent.prototype.setNewGodownNameDetails = function () {
        var _this = this;
        this.lrDtoNewGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.validateNewGodownFieldValue = $("#newGodownName").val();
        this.lrDtoNewGodown.godownName = this.validateNewGodownFieldValue;
        this.lrDtoNewGodown.subStations = this.userDataDtoReturnSession.office;
        this.lrDtoNewGodown.userName = this.userDataDtoReturnSession.userId;
        this.lrDtoNewGodown.companyId = this.userDataDtoReturnSession.companyId;
        this.spinnerForGodown = true;
        this.masterService.addLocalGodowns(this.lrDtoNewGodown).subscribe(function (response) {
            console.log(response);
            _this.spinnerForGodown = false;
            if (response.status == "Suceess") {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Success",
                    text: "New Godown Name Save Successfully",
                    icon: "success",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    _this.updateShipmentStatus(_this.validateNewGodownFieldValue);
                    $("#newGodownName").val('');
                    _this.validateNewGodownFieldValue = null;
                });
            }
            else if (response.status == "Duplicate") {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Duplicate Entry", "Godown " + $("#newGodownName").val() + "  Name Already Exist", "warning");
                return false;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Failed", "Failed to save new godown name", "error");
                return false;
            }
        }), function (error) {
            _this.spinnerForGodown = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Server Error", "Problem occur while getting  addLocalGodowns", "warning");
            console.log(error.json());
        },
            function () { return console.log('done'); };
    };
    ;
    ShipmentStatusComponent.prototype.updateShipmentStatus = function (godownName) {
        var _this = this;
        this.selectedStatus = $("#status").val();
        var status = '';
        this.smsStatus = '';
        if (this.selectedStatus == 'compound') {
            status = 'Compound';
            this.smsStatus = 'Compound';
        }
        else if (this.selectedStatus == 'stock') {
            this.modalRefferenceGodownPopUp.close();
            status = 'Stock';
            this.smsStatus = 'Stock';
        }
        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
            title: "Shipment Status",
            text: "Sure U want to move this invoice to " + status,
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (update) {
            if (update) {
                _this.updateShipmentStatusMethod(godownName, status);
            }
            else {
                //do nothing
            }
        });
    };
    ShipmentStatusComponent.prototype.updateShipmentStatusMethod = function (godownName, status) {
        this.enteredInvoiceNumber = $("#invoiceNumber").val();
        this.listOfLRNumber = [];
        for (var i = 0; i < this.invoiceDetailsDataList.length; i++) {
            this.listOfLRNumber.push(this.invoiceDetailsDataList[i].lrNumber);
        }
        this.selectedStatus = $("#status").val();
        var lrStatus = '';
        if (this.selectedStatus == 'compound') {
            lrStatus = 'Compound';
        }
        else if (this.selectedStatus == 'stock') {
            lrStatus = 'Pending';
        }
        if (this.selectedStatus == '' || this.selectedStatus == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                title: "Mandatory Field",
                text: "Please Select the Status ",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return false;
        }
        else {
            this.invoiceDtoUpdateShipment = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
            this.invoiceDtoUpdateShipment.hireSlipNumber = this.enteredInvoiceNumber;
            this.invoiceDtoUpdateShipment.invoiceNumber = this.enteredInvoiceNumber;
            this.invoiceDtoUpdateShipment.list = this.listOfLRNumber;
            this.invoiceDtoUpdateShipment.status = lrStatus;
            this.invoiceDtoUpdateShipment.stocksAt = this.userDataDtoReturnSession.office;
            this.invoiceDtoUpdateShipment.branch = godownName;
            this.invoiceDtoUpdateShipment.stationType = this.userDataDtoReturnSession.stationType;
            this.invoiceDtoUpdateShipment.mainStation = this.userDataDtoReturnSession.mainStation;
            this.invoiceDtoUpdateShipment.lastupdatedby = this.userDataDtoReturnSession.office;
            this.invoiceDtoUpdateShipment.delivDateOnArrival = this.userDataDtoReturnSession.delivDateOnArrival;
            this.invoiceDtoUpdateShipment.companyId = this.userDataDtoReturnSession.companyId;
            console.log(this.invoiceDtoUpdateShipment);
            this.setUpdateShipmentInfo(status);
        }
    };
    ShipmentStatusComponent.prototype.updateBtn = function () {
        this.selectedGodownName = $("#godownName").val();
        this.validateNewGodownFieldValue = $("#newGodownName").val();
        if (this.selectedGodownName == '' || this.selectedGodownName == null) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                title: "Mandatory Field",
                text: "Please Select the Godown ",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return false;
        }
        else if (this.selectedGodownName == 'ADD NEW' && (this.validateNewGodownFieldValue == null || this.validateNewGodownFieldValue == '')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                title: "Mandatory Field",
                text: "Please Enter  the Godown ",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            return false;
        }
        else {
            this.updateStatus();
        }
    };
    //To get Hireslip Unloading lr Details
    ShipmentStatusComponent.prototype.unLoadMethod = function (unloadingSheetDetailsPopUpTemplate) {
        var _this = this;
        //Popup part start
        /*	this.modalRefferenceUnloadingSheetDetailsPopUp = this.modalService.open(unloadingSheetDetailsPopUpTemplate,
                { centered: true, windowClass: "myCustomModalClass" });
            this.modalRefferenceUnloadingSheetDetailsPopUp.result.then((result) => {
                this.modalRefferenceUnloadingSheetDetailsClosePopUp = `Closed with: ${result}`;
            }, reason => {
                this.modalRefferenceUnloadingSheetDetailsClosePopUp = `Dismissed ${this.getDismissReason(reason)}`;
            });
            this.enteredInvoiceNumber = $("#invoiceNumber").val();
            this.hireslipdtoForPopUp=new HireSlipDto();
            this.hireslipdtoForPopUp.hireslipnumber=this.enteredInvoiceNumber;
            localStorage.clear();
            localStorage.setItem('popupShipmentStatus', JSON.stringify(this.hireslipdtoForPopUp));
        /*	if(this.hireSlipUnLoadRptDtlsRet !=null){
                localStorage.setItem('popupShipmentStatusDataList', JSON.stringify(this.hireSlipUnLoadRptDtlsRet));
            }
            this.viewUnloadingSheetDetailsPopUp = true;
            window.addEventListener('afterPopUp', (event) => {
                this.viewUnloadingSheetDetailsPopUp = false;
            });*/
        this.enteredInvoiceNumber = $("#invoiceNumber").val();
        this.hireslipdtoForPopUp = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireslipdtoForPopUp.hireslipnumber = this.enteredInvoiceNumber;
        localStorage.clear();
        localStorage.setItem('popupShipmentStatus', JSON.stringify(this.hireslipdtoForPopUp));
        var dialogRef = this.dialog.open(src_app_stock_transfer_unloading_sheet_details_unloading_sheet_details_component__WEBPACK_IMPORTED_MODULE_19__["UnloadingSheetDetailsComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            $("#btnUnLoadRpt").prop("disabled", true);
            _this.router.navigate(['.'], { relativeTo: _this.route });
        });
        console.log(this.hireSlipUnLoadRptDtlsRet);
    };
    ShipmentStatusComponent.prototype.clearAll = function () {
        this.lrDtosDup = [];
        this.lrdtoInvoiceRet = [];
        this.enteredInvoiceNumber = '';
        this.selectedGodownName = '';
        $("#invoiceNumber").val('');
        this.disableMthod();
        $("#status").val('');
        $("#invoiceNumber").val('');
        $("#invoiceNumber").focus();
        $("#updateBtn").prop("disabled", true);
        this.contentPanel = 'Invoice Details';
        this.getTableClear();
        this.invoiceDetailsDataList = [];
        this.selectedGodownName = '';
        $("#godownName").val('');
        this.validateNewGodownFieldValue = '';
        $("#newGodownName").val('');
        this.viewNewGodown = false;
        this.listOfLRNumber = [];
        this.showSpinnerForAction = false;
        this.hireslipdtoForPopUp = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        localStorage.clear();
        $("#btnUnLoadRpt").prop("disabled", true);
        this.invoiceGoodsDto = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.invoicedtoForSearchOtherDetailsReturn = '';
        this.invoicedtoForSearchOtherDetailsRet = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.unloadAt = null;
        this.lrDtoToGetLrdetails = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.clearFields();
        this.hireSlipDtoToGetShortExtra = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.partyMasterDtoConsigneeMerge = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_10__["PartyMasterDto"]();
        this.invoiceDtoForConsigneeMergePopup = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.hireSlipsBlkForUnLoadRpt = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.hireSlipsBlkForUnLoadRptRet = '';
        this.hireSlipsBlkForUnLoadRptReturn = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_16__["HireSlipDto"]();
        this.selectedStatus = '';
        this.lrDtoNewGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.invoiceDtoUpdateShipment = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_15__["InvoiceDto"]();
        this.sendSmsLrdto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.sendSmsLrdtoForOthers = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrdtoForSpecificStnRet = [];
        this.lrdtoForSpecificStn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrdtoGetPrepareSMSRevised = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrdtoGetPrepareSMSRevisedRet = [];
        this.lrdtoSendMultipltSMSMethodList = [];
        this.lrdtoGetPrepareSMSRevisedList = [];
        this.lrdtoSendMultipltSMSMethodSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
    };
    //For SMS Flow
    ShipmentStatusComponent.prototype.sentSmsFlow = function () {
        if (this.smsStatus != null && this.smsStatus != '' && this.smsStatus == 'Stock') {
            if (this.office != null && this.office == 'Binnymills') {
                this.smsFlowForBinny();
            }
            else {
                this.smsFlowForOtherStn();
            }
        }
    };
    //Sms Flow For Binny
    ShipmentStatusComponent.prototype.smsFlowForBinny = function () {
        console.log('Inside smsFlowForBinny');
        this.sendSmsLrdto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.sendSmsLrdto.city = 'Chennai';
        this.sendSmsLrdto.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.sendSmsLrdto);
        this.getSmsStatusMethodForBinny();
    };
    ShipmentStatusComponent.prototype.smsFlowForOtherStn = function () {
        console.log('Inside smsFlowForOtherStn');
        this.sendSmsLrdtoForOthers = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        if (this.mainStn != null && this.mainStn == 'Chennai') {
            this.sendSmsLrdtoForOthers.city = 'Chennai';
        }
        else {
            this.sendSmsLrdtoForOthers.city = this.userDataDtoReturnSession.mainStation;
        }
        this.sendSmsLrdtoForOthers.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.sendSmsLrdtoForOthers);
        this.getSmsStatusMethodForOthers();
    };
    ShipmentStatusComponent.prototype.specificStationSMS = function () {
        console.log('Inside specificStationSMS');
        this.enteredInvoiceNumber = $("#invoiceNumber").val();
        this.lrdtoForSpecificStn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_9__["LRDto"]();
        this.lrdtoForSpecificStn.mode = 'ForGD';
        this.lrdtoForSpecificStn.areaOfDelivery = 'BINNY GODOWN DELIVERY';
        this.lrdtoForSpecificStn.invoiceNumber = this.enteredInvoiceNumber;
        this.lrdtoForSpecificStn.companyId = this.userDataDtoReturnSession.companyId;
        this.specificStationSMSInfo();
        console.log(this.lrdtoForSpecificStn);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ShipmentStatusComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmGodownPopUpTemplate'),
        __metadata("design:type", Object)
    ], ShipmentStatusComponent.prototype, "confirmGodownPopUpTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('unloadingSheetDetailsPopUpTemplate'),
        __metadata("design:type", Object)
    ], ShipmentStatusComponent.prototype, "unloadingSheetDetailsPopUpTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('consigneeMergePopUpTemplate'),
        __metadata("design:type", Object)
    ], ShipmentStatusComponent.prototype, "consigneeMergePopUpTemplate", void 0);
    ShipmentStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipment-status',
            template: __webpack_require__(/*! ./shipment-status.component.html */ "./src/app/stock/transfer/shipment-status/shipment-status.component.html"),
            styles: [__webpack_require__(/*! ./shipment-status.component.css */ "./src/app/stock/transfer/shipment-status/shipment-status.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_14__["MasterService"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_17__["HireslipService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], src_app_dataService_lr_service__WEBPACK_IMPORTED_MODULE_18__["LrService"], src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_13__["ConsigneeService"]])
    ], ShipmentStatusComponent);
    return ShipmentStatusComponent;
}());



/***/ }),

/***/ "./src/app/stock/transfer/stocks-between-godown/stocks-between-godown.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/stock/transfer/stocks-between-godown/stocks-between-godown.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media ( max-width :767px) {\n\t.margin_bt {\n\t\tmargin-top: 10px;\n\t}\n}\n\n@media ( min-width :768px) {\n\t.margin_bt {\n\t\tmargin-top: 170px;\n\t}\n}\n\n/* for custom css for autocomplete select option starts */\n\n.auto_selectOption {\n\tfont-size: 15px;\n\tpadding: 0px;\n\tborder: 2px solid #dadee2;\n\theight: 26px;\n\twidth: 100%;\n}\n\n/* for small mobile */\n\n@media ( max-width : 355px) {\n\t.auto_selectOption {\n\t\twidth: 50% !important;\n\t}\n}\n\n/* for medium mobile */\n\n@media ( max-width : 365px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n}\n\n/* for mobile */\n\n@media ( min-width : 370px) and (max-width: 766px) {\n\t.auto_selectOption {\n\t\twidth: 51%;\n\t}\n}\n\n/* for ipad */\n\n@media ( min-width : 767px) and (max-width: 990px) {\n\t.auto_selectOption {\n\t\twidth: 81%;\n\t}\n}\n\n/* for ipad pro */\n\n@media ( min-width : 991px) and (max-width: 1200px) {\n\t.auto_selectOption {\n\t\twidth: 46%;\n\t}\n}\n\n/* for desktop */\n\n@media ( min-width : 1201px) and (max-width: 1500px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n}\n\n/* for custom css for autocomplete select option ends */\n\n::ng-deep ngb-typeahead-window{\n\ttop: 26px;\n    left: 188px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2svdHJhbnNmZXIvc3RvY2tzLWJldHdlZW4tZ29kb3duL3N0b2Nrcy1iZXR3ZWVuLWdvZG93bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0M7RUFDQyxpQkFBaUI7RUFDakI7Q0FDRDs7QUFFRDtDQUNDO0VBQ0Msa0JBQWtCO0VBQ2xCO0NBQ0Q7O0FBRUQsMERBQTBEOztBQUMxRDtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixZQUFZO0NBQ1o7O0FBQ0Qsc0JBQXNCOztBQUN0QjtDQUNDO0VBQ0Msc0JBQXNCO0VBQ3RCO0NBQ0Q7O0FBQ0QsdUJBQXVCOztBQUN2QjtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7O0FBQ0QsZ0JBQWdCOztBQUNoQjtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7O0FBQ0QsY0FBYzs7QUFDZDtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7O0FBQ0Qsa0JBQWtCOztBQUNsQjtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7O0FBQ0QsaUJBQWlCOztBQUNqQjtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7O0FBQ0Qsd0RBQXdEOztBQUV4RDtDQUNDLFVBQVU7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL3RyYW5zZmVyL3N0b2Nrcy1iZXR3ZWVuLWdvZG93bi9zdG9ja3MtYmV0d2Vlbi1nb2Rvd24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAoIG1heC13aWR0aCA6NzY3cHgpIHtcblx0Lm1hcmdpbl9idCB7XG5cdFx0bWFyZ2luLXRvcDogMTBweDtcblx0fVxufVxuXG5AbWVkaWEgKCBtaW4td2lkdGggOjc2OHB4KSB7XG5cdC5tYXJnaW5fYnQge1xuXHRcdG1hcmdpbi10b3A6IDE3MHB4O1xuXHR9XG59XG5cbi8qIGZvciBjdXN0b20gY3NzIGZvciBhdXRvY29tcGxldGUgc2VsZWN0IG9wdGlvbiBzdGFydHMgKi9cbi5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0cGFkZGluZzogMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjZGFkZWUyO1xuXHRoZWlnaHQ6IDI2cHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuLyogZm9yIHNtYWxsIG1vYmlsZSAqL1xuQG1lZGlhICggbWF4LXdpZHRoIDogMzU1cHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG5cdH1cbn1cbi8qIGZvciBtZWRpdW0gbW9iaWxlICovXG5AbWVkaWEgKCBtYXgtd2lkdGggOiAzNjVweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA1MCU7XG5cdH1cbn1cbi8qIGZvciBtb2JpbGUgKi9cbkBtZWRpYSAoIG1pbi13aWR0aCA6IDM3MHB4KSBhbmQgKG1heC13aWR0aDogNzY2cHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNTElO1xuXHR9XG59XG4vKiBmb3IgaXBhZCAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA4MSU7XG5cdH1cbn1cbi8qIGZvciBpcGFkIHBybyAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogOTkxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNDYlO1xuXHR9XG59XG4vKiBmb3IgZGVza3RvcCAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogMTIwMXB4KSBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDUwJTtcblx0fVxufVxuLyogZm9yIGN1c3RvbSBjc3MgZm9yIGF1dG9jb21wbGV0ZSBzZWxlY3Qgb3B0aW9uIGVuZHMgKi9cblxuOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xuXHR0b3A6IDI2cHg7XG4gICAgbGVmdDogMTg4cHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stock/transfer/stocks-between-godown/stocks-between-godown.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/stock/transfer/stocks-between-godown/stocks-between-godown.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Stocks Between Godowns</h6>\n\t\t\t</div>\n\t\t\t<hr style=\"margin: 0px;\">\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title\">LR Info</h6>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>From Godown</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" #fromGodown class=\"form-control\" id=\"fromGodown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select From Godown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"fromGodownDropDownListner($event,popModelNewGodownContent)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelFromGodown\" [ngbTypeahead]=\"fromGodownSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterFromGodown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterFromGodown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusFromGodownTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>To Godown</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" #toGodown class=\"form-control\" id=\"toGodown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select To Godown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"toGodownDropDownListner($event,popModelNewGodownContent)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelToGodown\" [ngbTypeahead]=\"toGodownSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterToGodown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterToGodown\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusToGodownTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>LR Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"lrNumber\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"okBtn\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"validateLRNumberOKClickListnerBtn();\">Ok</button>\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"validateClearClickListnerBtn();\">Clear</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr style=\"width: 98%; margin: 0px 15px;\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row p-t-5\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<table id=\"stockBetweenGodownTableId\" datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStocksBetweenGodown\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStocksBetweenGodown\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Total Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let stocksBetweenGodownData of stocksBetweenGodownDataList;let i = index  \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksBetweenGodownData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksBetweenGodownData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksBetweenGodownData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksBetweenGodownData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksBetweenGodownData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksBetweenGodownData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksBetweenGodownData.totalAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDeleteForTable(stocksBetweenGodownData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{countOfLr}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfTotArticle}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfTotActWgt}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{sumOfTotAmt}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 margin_bt\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"transferClickListnerBtn();\" id=\"transferBtnId\">Transfer</button>\n\t\t\t\t\t\t\t\t\t<!--<button type=\"submit\" class=\"btn btn-dark\" (click)=\"remove();\"\n\t\t\t\t\t\t\t\t\t\tid=\"removeBtn\">Remove</button>-->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n\n<!-- to open popup add this @(click)=\" open( content )\"@ -->\n\n<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\">\n\t\t\t<ng-template #popModelNewGodownContent let-save=\"close\" let-cancel=\"close\" let-d=\"dismiss\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h6>New Godown</h6>\n\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"row\" style=\"text-align: center;\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Godown Name</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"newGodownName\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"saveNewGodownBtn();\">Save</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger\"\n\t\t\t\t\t\t(click)=\"cancel('Cancel click')\">Cancel</button>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/stock/transfer/stocks-between-godown/stocks-between-godown.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/stock/transfer/stocks-between-godown/stocks-between-godown.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StocksBetweenGodownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksBetweenGodownComponent", function() { return StocksBetweenGodownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
/* harmony import */ var src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/dataService/memo-service */ "./src/app/dataService/memo-service.ts");
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













var StocksBetweenGodownComponent = /** @class */ (function () {
    function StocksBetweenGodownComponent(masterService, masterReadService, router, modalService, memoService, hireslipService, lrReport) {
        var _this = this;
        this.masterService = masterService;
        this.masterReadService = masterReadService;
        this.router = router;
        this.modalService = modalService;
        this.memoService = memoService;
        this.hireslipService = hireslipService;
        this.lrReport = lrReport;
        //for datatable ends
        //summaryTable:any;
        this.loadingIndicator = true;
        this.dtTriggerStocksBetweenGodown = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.lrDtoFromGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoAddNewFromGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.fromGodownTA = [];
        this.focusFromGodownTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.fromGodownSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusFromGodownTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return (term === '' ? _this.fromGodownTA
                : _this.fromGodownTA.filter(function (v) { return v.godownName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterFromGodown = function (x) { return x.godownName; };
        this.lrDtoAddNewToGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.toGodownTA = [];
        this.focusToGodownTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.toGodownSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusToGodownTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return (term === '' ? _this.toGodownTA
                : _this.toGodownTA.filter(function (v) { return v.godownName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterToGodown = function (x) { return x.godownName; };
        this.lrDtoNewGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.validateNewGodownFieldValue = null;
        this.lrDtoForValidateLRNumber = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoReturn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoForTransferBtnForLRNumber = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.validateLRNumberFieldValue = null;
        this.validateFromGodownName = null;
        this.validateToGodownName = null;
        this.newAttribute = {};
        this.countOfLr = null;
        this.sumOfTotArticle = null;
        this.sumOfTotActWgt = null;
        this.sumOfTotAmt = null;
        this.setFromGowdownDetailsList = function () {
            _this.getFromGowdownDetailsData();
            _this.showSpinnerForAction = true;
            _this.masterService.getLocalGodowns(_this.lrDtoFromGodown).subscribe(function (response) {
                console.log(response);
                if (response.length > 0) {
                    _this.fromGodownOptions = [];
                    _this.fromGodownTA = [];
                    _this.fromGodownOptions = response;
                    _this.lrDtoAddNewFromGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
                    _this.lrDtoAddNewFromGodown.godownName = "Add New";
                    _this.fromGodownTA.push(_this.lrDtoAddNewFromGodown);
                    for (var i = 0; i < _this.fromGodownOptions.length; i++) {
                        _this.fromGodownTA.push(_this.fromGodownOptions[i]);
                    }
                    _this.toGodownOptions = [];
                    _this.toGodownTA = [];
                    _this.toGodownOptions = response;
                    _this.lrDtoAddNewToGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
                    _this.lrDtoAddNewToGodown.godownName = "Add New";
                    _this.toGodownTA.push(_this.lrDtoAddNewToGodown);
                    for (var i = 0; i < _this.toGodownOptions.length; i++) {
                        _this.toGodownTA.push(_this.toGodownOptions[i]);
                    }
                }
                else {
                    _this.fromGodownOptions = [];
                    _this.fromGodownTA = [];
                    _this.toGodownOptions = [];
                    _this.toGodownTA = [];
                }
                _this.showSpinnerForAction = false;
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Error", "Server Error While Getting Bank Name Details", "warning");
            },
                function () { return console.log('done'); };
        };
        if (this.isLoggedIn) {
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.setFromGowdownDetailsList();
        }
    }
    /* for datatable starts */
    StocksBetweenGodownComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    StocksBetweenGodownComponent.prototype.ngOnInit = function () {
        //for datatable starts
        this.dtOptionsStocksBetweenGodown = {
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
            "paging": true,
            "info": true,
        };
        //this.dtTriggerStocksToCp.next();
    };
    StocksBetweenGodownComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerStocksBetweenGodown.next();
    };
    StocksBetweenGodownComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerStocksBetweenGodown.unsubscribe();
    };
    //for the select option with filter starts
    StocksBetweenGodownComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    //for popup modal starts 
    StocksBetweenGodownComponent.prototype.fromGodownDropDownListner = function (event, popModelNewGodownContent) {
        this.modelFromGodown = event.item.godownName;
        $("#fromGodown").val(event.item.godownName);
        if ($("#fromGodown").val() == "Add New") {
            this.addNewFromToGodowmPopup(popModelNewGodownContent);
        }
    };
    StocksBetweenGodownComponent.prototype.toGodownDropDownListner = function (event, popModelNewGodownContent) {
        this.modelToGodown = event.item.godownName;
        $("#toGodown").val(event.item.godownName);
        if ($("#toGodown").val() == "Add New") {
            this.addNewFromToGodowmPopup(popModelNewGodownContent);
        }
    };
    StocksBetweenGodownComponent.prototype.getFromGowdownDetailsData = function () {
        this.lrDtoFromGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrDtoFromGodown.branch = this.userDataDtoReturnSession.office;
        this.lrDtoFromGodown.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDtoFromGodown.mode = "active";
    };
    StocksBetweenGodownComponent.prototype.getDismissReason = function (reason) {
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
    StocksBetweenGodownComponent.prototype.addNewFromToGodowmPopup = function (popModelNewGodownContent) {
        var _this = this;
        this.modalRefferencecStockBetweenGodownPopUp = this.modalService.open(popModelNewGodownContent, { centered: true, size: "sm" });
        this.modalRefferencecStockBetweenGodownPopUp.result.then(function (result) {
            _this.modalRefferenceStockBetweenGodownClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceStockBetweenGodownClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    StocksBetweenGodownComponent.prototype.saveNewGodownBtn = function () {
        if ($("#newGodownName").val() == null || $("#newGodownName").val() == undefined ||
            $("#newGodownName").val() == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory Field", "Please enter the Godown Name Field", "warning");
            return false;
        }
        else {
            this.setNewGodownNameDetails();
        }
    };
    StocksBetweenGodownComponent.prototype.setNewGodownNameDetails = function () {
        var _this = this;
        this.lrDtoNewGodown = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.validateNewGodownFieldValue = $("#newGodownName").val();
        this.lrDtoNewGodown.godownName = this.validateNewGodownFieldValue;
        this.lrDtoNewGodown.subStations = this.userDataDtoReturnSession.office;
        this.lrDtoNewGodown.userName = this.userDataDtoReturnSession.userId;
        this.lrDtoNewGodown.companyId = this.userDataDtoReturnSession.companyId;
        this.masterService.addLocalGodowns(this.lrDtoNewGodown).subscribe(function (response) {
            //console.log(response);
            if (response.status == "Suceess") {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Suceess", "New Godown Name Save Successfully", "success");
                _this.modalRefferencecStockBetweenGodownPopUp.close();
                _this.setFromGowdownDetailsList();
                $("#newGodownName").val('');
                _this.validateNewGodownFieldValue = null;
            }
            else if (response.status == "Duplicate") {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Duplicate Entry", "" + $("#newGodownName").val() + "  Name Already Exist", "warning");
                return false;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Failed", "Failed to save new godown name", "error");
                return false;
            }
        }), function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting  addLocalGodowns", "warning");
            console.log(error.json());
        },
            function () { return console.log('done'); };
    };
    ;
    StocksBetweenGodownComponent.prototype.validateClearClickListnerBtn = function () {
        this.stocksBetweenGodownDataList = [];
        $("#stockBetweenGodownTableId").DataTable().destroy();
        this.dtTriggerStocksBetweenGodown.next();
        this.clearField();
    };
    StocksBetweenGodownComponent.prototype.clearField = function () {
        $("#lrNumber").val('');
        $("#fromGodown").val('');
        $("#toGodown").val('');
        this.validateLRNumberFieldValue = null;
        this.validateToGodownName = null;
        this.validateFromGodownName = null;
        this.modelFromGodown = null;
        this.modelToGodown = null;
        this.sumOfTotArticle = 0;
        this.sumOfTotActWgt = 0;
        this.sumOfTotAmt = 0;
        this.countOfLr = 0;
    };
    StocksBetweenGodownComponent.prototype.validateLRNumberOKClickListnerBtn = function () {
        if ($("#lrNumber").val() == null || $("#lrNumber").val() == undefined ||
            $("#lrNumber").val() == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory Field", "Please enter the LR Number Field", "warning");
            return false;
        }
        else {
            this.validateLRNumberDataDetails();
        }
    };
    StocksBetweenGodownComponent.prototype.validateLRNumberDataDetails = function () {
        var _this = this;
        this.lrDtoForValidateLRNumber = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.validateLRNumberFieldValue = $("#lrNumber").val();
        this.lrDtoForValidateLRNumber.lrNumber = this.validateLRNumberFieldValue;
        this.lrDtoForValidateLRNumber.branch = this.userDataDtoReturnSession.office;
        this.lrDtoForValidateLRNumber.stocksAt = this.userDataDtoReturnSession.office;
        this.lrDtoForValidateLRNumber.companyId = this.userDataDtoReturnSession.companyId;
        this.showSpinnerForAction = true;
        this.lrReport.getLROfSpecificStation(this.lrDtoForValidateLRNumber).subscribe(function (response) {
            console.log(response);
            if (response.size == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("LR Not Found", "LR Number " + $("#lrNumber").val() + " not found!", "warning");
            }
            else if (response.status == "InCP") {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("LR In Checkpost", "LR Number " + $("#lrNumber").val() + " is in " + response.checkPostName + "", "warning");
            }
            else if (response.status == "Delivered") {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("LR Delivered", "LR Number " + $("#lrNumber").val() + " Delivered ", "warning");
            }
            else {
                _this.lrDtoReturn = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
                _this.lrDtoReturn = response;
                _this.gridReconfigure(_this.lrDtoReturn);
            }
            $("#lrNumber").val('');
            $("#lrNumber").focus();
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting  getLROfSpecificStation", "warning");
            console.log(error.json());
        },
            function () { return console.log('done'); };
    };
    StocksBetweenGodownComponent.prototype.gridReconfigure = function (lrDtoReturn) {
        console.log(this.stocksBetweenGodownDataList);
        //if (this.stocksBetweenGodownDataList.length > 0) {
        if (this.stocksBetweenGodownDataList != undefined) {
            var checkLrNumberInTable = this.stocksBetweenGodownDataList.find(function (manualLRNumberCheckData) { return manualLRNumberCheckData.lrNumber === $("#lrNumber").val(); });
            console.log(checkLrNumberInTable);
            if (checkLrNumberInTable == undefined) {
                this.addInTable(lrDtoReturn);
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Warning", "Duplicate LR Number", "warning");
                return false;
            }
        }
        else {
            this.addInTable(lrDtoReturn);
        }
    };
    StocksBetweenGodownComponent.prototype.addInTable = function (lrDtoReturn) {
        this.newAttribute.lrNumber = lrDtoReturn.lrNumber;
        this.newAttribute.totalArticles = lrDtoReturn.totalArticles;
        this.newAttribute.consigneeName = lrDtoReturn.consigneeName;
        this.newAttribute.consignorName = lrDtoReturn.consignorName;
        this.newAttribute.description = lrDtoReturn.description;
        this.newAttribute.actualWeight = lrDtoReturn.actualWeight;
        this.newAttribute.totalAmount = lrDtoReturn.totalAmount;
        console.log(this.newAttribute.lrNumber);
        $("#stockBetweenGodownTableId").DataTable().destroy();
        if (this.stocksBetweenGodownDataList == null) {
            this.stocksBetweenGodownDataList = [];
        }
        if (this.stocksBetweenGodownDataList.length == 0) {
            this.stocksBetweenGodownDataList.push(this.newAttribute);
        }
        else {
            this.stocksBetweenGodownDataList.push(this.newAttribute);
        }
        this.dtTriggerStocksBetweenGodown.next();
        this.countOfLr = +this.countOfLr + 1;
        this.sumOfTotArticle = +this.sumOfTotArticle + +this.newAttribute.totalArticles;
        this.sumOfTotActWgt = +this.sumOfTotActWgt + +this.newAttribute.actualWeight;
        this.sumOfTotAmt = +this.sumOfTotAmt + +this.newAttribute.totalAmount;
        this.newAttribute = {};
    };
    StocksBetweenGodownComponent.prototype.rowSelectedDeleteForTable = function (stocksBetweenGodownData, index) {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
            title: "Confirm Remove",
            text: "Sure you want to remove the selected Row",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (remove) {
            if (remove) {
                _this.stocksBetweenGodownDataList.splice(index, 1);
                $("#stockBetweenGodownTableId").DataTable().destroy();
                _this.dtTriggerStocksBetweenGodown.next();
                console.log(_this.stocksBetweenGodownDataList);
                _this.sumOfTotArticle = 0;
                _this.sumOfTotActWgt = 0;
                _this.sumOfTotAmt = 0;
                _this.countOfLr = 0;
                for (var i = 0; i < _this.stocksBetweenGodownDataList.length; i++) {
                    _this.countOfLr = +_this.countOfLr + 1;
                    _this.sumOfTotArticle = +_this.sumOfTotArticle + +_this.stocksBetweenGodownDataList[i].totalArticles;
                    _this.sumOfTotActWgt = +_this.sumOfTotActWgt + +_this.stocksBetweenGodownDataList[i].actualWeight;
                    _this.sumOfTotAmt = +_this.sumOfTotAmt + +_this.stocksBetweenGodownDataList[i].totalAmount;
                }
                _this.newAttribute = {};
            }
        });
    };
    StocksBetweenGodownComponent.prototype.transferClickListnerBtn = function () {
        var _this = this;
        if ($("#toGodown").val() == null || $("#toGodown").val() == undefined ||
            $("#toGodown").val() == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Mandatory Field", "Please enter the to godown field", "warning");
            return false;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                title: "Confirm Transfer",
                text: "Are U sure want to transfer selected Lrs From Godown  " + $("#fromGodown").val() + " To Godown  " + $("#toGodown").val() + "",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (yesTransferBtn) {
                if (yesTransferBtn) {
                    _this.setTransferLrDetailData();
                }
            });
        }
    };
    ;
    StocksBetweenGodownComponent.prototype.setTransferLrDetailData = function () {
        var _this = this;
        this.lrDtoForTransferBtnForLRNumber = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.validateToGodownName = $("#toGodown").val();
        this.listOfLrs = [];
        for (var i = 0; i < this.stocksBetweenGodownDataList.length; i++) {
            this.listOfLrs.push(this.stocksBetweenGodownDataList[i].lrNumber);
        }
        this.lrDtoForTransferBtnForLRNumber.list = this.listOfLrs;
        this.lrDtoForTransferBtnForLRNumber.userName = this.userDataDtoReturnSession.userId;
        this.lrDtoForTransferBtnForLRNumber.godownName = this.validateToGodownName;
        this.lrDtoForTransferBtnForLRNumber.stocksAt = this.userDataDtoReturnSession.office;
        this.lrDtoForTransferBtnForLRNumber.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.lrDtoForTransferBtnForLRNumber);
        this.showSpinnerForAction = true;
        this.lrReport.godownTransfer(this.lrDtoForTransferBtnForLRNumber).subscribe(function (response) {
            console.log(response);
            if (response.status == "Success") {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Success", "Selected Lrs Godown Transfer Save Successfully", "success");
                _this.stocksBetweenGodownDataList = [];
                $("#stockBetweenGodownTableId").DataTable().destroy();
                _this.dtTriggerStocksBetweenGodown.next();
                _this.clearField();
                _this.showSpinnerForAction = false;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Success", "Failed to save  godown Transfer", "success");
                _this.showSpinnerForAction = false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_7___default()("Server Error", "Problem occur while getting  godownTransfer", "warning");
            console.log(error.json());
        },
            function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StocksBetweenGodownComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popModelNewGodownContent'),
        __metadata("design:type", Object)
    ], StocksBetweenGodownComponent.prototype, "popModelNewGodownContent", void 0);
    StocksBetweenGodownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks-between-godown',
            template: __webpack_require__(/*! ./stocks-between-godown.component.html */ "./src/app/stock/transfer/stocks-between-godown/stocks-between-godown.component.html"),
            styles: [__webpack_require__(/*! ./stocks-between-godown.component.css */ "./src/app/stock/transfer/stocks-between-godown/stocks-between-godown.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_11__["MasterService"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_9__["MasterReadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_13__["MemoService"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_12__["HireslipService"],
            src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_14__["LrReportService"]])
    ], StocksBetweenGodownComponent);
    return StocksBetweenGodownComponent;
}());



/***/ }),

/***/ "./src/app/stock/transfer/stocks-to-cp/stocks-to-cp.component.css":
/*!************************************************************************!*\
  !*** ./src/app/stock/transfer/stocks-to-cp/stocks-to-cp.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL3RyYW5zZmVyL3N0b2Nrcy10by1jcC9zdG9ja3MtdG8tY3AuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/stock/transfer/stocks-to-cp/stocks-to-cp.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/stock/transfer/stocks-to-cp/stocks-to-cp.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\" *ngIf=\"isLoggedIn\">\n\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Stocks To CP</h6>\n\t\t\t</div>\n\t\t\t<hr style=\"margin: 0px;\">\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<!--Spinner used-->\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!viewAlreadyReward\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"cstm_efftect\" id=\"isAlreadyRewardedHeadingId\">\n\t\t\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--Spinner End-->\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">LR Info</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>LR No<span style=\"color: red;\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"lrNumberKeyPressEventListner($event);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"lrNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Booking Date</label> <input id=\"bookingDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"bookingDates\" ngbDatepicker #bookingDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" [(ngModel)]=\"bookingDateModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyBookingDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"bookingDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"invoiceNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyInvoiceNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"consigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" [readonly]=\"isReadonlyConsigneeName\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Total Article</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-clone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"totalArticle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" [readonly]=\"isReadonlyArticle\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"vehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" [readonly]=\"isReadonlyVehicleNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"driverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" [readonly]=\"isReadonlyDriverName\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <hr> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">CP Info</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Check Post\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color: red;\">*</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" #checkPost class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkPost\" placeholder=\"Select Check Post\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"checkPostDropDownListner($event,popModelNewCheckPostContent)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelcheckPost\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"checkPostSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterCheckPost\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterCheckPost\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusCheckPostTA$.next($any($event).target.value)\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Notice No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color: red;\">*</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"noticeNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Date\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color: red;\">*</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label> <input id=\"dates\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"dates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#dates=\"ngbDatepicker\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"dateModal\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"dates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"toCpBtn\"\n\t\t\t\t\t\t\t\t(click)=\"validateToCheckPostBtn();\">To\n\t\t\t\t\t\t\t\tCP</button>\n\t\t\t\t\t\t\t<!--<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"toStockBtn\">\n\t\t\t\t\t\t\t\tTo Stock</button>-->\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\"\n\t\t\t\t\t\t\t\t(click)=\"overAllClearBtnListner();\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t<h6 style=\"border-bottom: 1px solid orange;\" class=\"card-title\">LRs\n\t\t\t\t\t\t\t\t\tIn Check Post</h6>\n\t\t\t\t\t\t\t\t<table datatable id=\"stocksToCPTableId\"\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStocksToCp\" [dtTrigger]=\"dtTriggerStocksToCp\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Notice No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Check Post Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Invoice No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Date</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Vehicle</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!showOnlyForPrint\">Article</th>\n\t\t\t\t\t\t\t\t\t\t\t<th [hidden]=\"!showOnlyForPrint\">Consignee</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let stocksToCpData of stocksToCpDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksToCpData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksToCpData.noticeNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksToCpData.checkPostName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksToCpData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksToCpData.catchDateStr }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ stocksToCpData.vehicleNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableStockToCpBtnId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"selectedRowForStockToCp(stocksToCpData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"To Stock\" class=\"fas fa-redo\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableStockToCpEditBtnId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"editSelectedRowForStockToCp(stocksToCpData);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Edit\" class=\"fas fa-edit\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>-->\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!showOnlyForPrint\">{{ stocksToCpData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!showOnlyForPrint\">{{ stocksToCpData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!showOnlyForPrint\"></td>\n\t\t\t\t\t\t\t\t\t\t\t<td [hidden]=\"!showOnlyForPrint\"></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\">\n\t\t\t<ng-template #popModelNewCheckPostContent let-save=\"close\" let-cancel=\"close\" let-d=\"dismiss\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h4>Add Check Post</h4>\n\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"row\" style=\"text-align: center;\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Check Post Name</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"newCheckPostName\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t(click)=\"saveNewCheckPostNameBtn();\">Save</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-danger\"\n\t\t\t\t\t\t(click)=\"cancel('Cancel click')\">Cancel</button>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/stock/transfer/stocks-to-cp/stocks-to-cp.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/stock/transfer/stocks-to-cp/stocks-to-cp.component.ts ***!
  \***********************************************************************/
/*! exports provided: StocksToCpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksToCpComponent", function() { return StocksToCpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
/* harmony import */ var src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dataService/memo-service */ "./src/app/dataService/memo-service.ts");
/* harmony import */ var src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/lr-report-service */ "./src/app/dataService/lr-report-service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
















//for popup modal ends
var StocksToCpComponent = /** @class */ (function () {
    function StocksToCpComponent(masterService, masterReadService, router, modalService, memoService, hireslipService, lrReport, datePipe) {
        var _this = this;
        this.masterService = masterService;
        this.masterReadService = masterReadService;
        this.router = router;
        this.modalService = modalService;
        this.memoService = memoService;
        this.hireslipService = hireslipService;
        this.lrReport = lrReport;
        this.datePipe = datePipe;
        this.loadingIndicator = true;
        this.dtTriggerStocksToCp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.lrDtoCheckPost = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
        this.lrDtoAddNewCheckPost = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
        this.checkPostTA = [];
        this.focusCheckPostTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.checkPostSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusCheckPostTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (term) { return (term === '' ? _this.checkPostTA
                : _this.checkPostTA.filter(function (v) { return v.checkPostName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterCheckPost = function (x) { return x.checkPostName; };
        this.lrDtoLRCheckPost = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
        this.lrDtoForSetLrDetailsValue = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
        this.lrDtoAddNewCheckPostName = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
        this.lrDtoToStock = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
        this.lrDtoToCp = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
        this.bookingDateModal = null;
        this.dateModal = null;
        this.isReadonlyBookingDate = false;
        this.isReadonlyInvoiceNo = false;
        this.isReadonlyDestination = false;
        this.isReadonlyConsigneeName = false;
        this.isReadonlyArticle = false;
        this.isReadonlyVehicleNo = false;
        this.isReadonlyDriverName = false;
        this.validateLRNumber = null;
        this.validateNewCheckPostName = null;
        this.validateNoticeNumber = null;
        this.validateCatchDate = null;
        this.validateCheckPostName = null;
        this.editSelectedRowBookingDate = null;
        this.showOnlyForPrint = false;
        this.setCheckPostDetailsList = function () {
            _this.getCheckPostDetailsData();
            _this.showSpinnerForAction = true;
            _this.masterReadService.getCheckPostList(_this.lrDtoCheckPost).subscribe(function (response) {
                console.log(response);
                if (response.length > 0) {
                    _this.checkPostOptions = [];
                    _this.checkPostTA = [];
                    _this.checkPostOptions = response;
                    _this.lrDtoAddNewCheckPost = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
                    _this.lrDtoAddNewCheckPost.checkPostName = "Add New";
                    _this.checkPostTA.push(_this.lrDtoAddNewCheckPost);
                    for (var i = 0; i < _this.checkPostOptions.length; i++) {
                        _this.checkPostTA.push(_this.checkPostOptions[i]);
                    }
                }
                else {
                    _this.checkPostOptions = [];
                    _this.checkPostTA = [];
                }
                _this.showSpinnerForAction = false;
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Error While Getting Check Post Drop Down Details", "warning");
            },
                function () { return console.log('done'); };
        };
        if (this.isLoggedIn) {
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            this.setCheckPostDetailsList();
            this.setLRCheckPostDetailsData();
            this.isReadonlyBookingDate = true;
            this.isReadonlyInvoiceNo = true;
            this.isReadonlyDestination = true;
            this.isReadonlyConsigneeName = true;
            this.isReadonlyArticle = true;
            this.isReadonlyVehicleNo = true;
            this.isReadonlyDriverName = true;
        }
    }
    StocksToCpComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsStocksToCp = {
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
                            "<td rowspan='3' style='width: 20%;'>" +
                            "<table>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='3'style='width:60%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:25px;'><u>Check Post Detained LR's Detail</u></strong><br>" +
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
                        columns: [0, 1, 2, 7, 8, 3, 4, 5]
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return " Check Post Detained LR's Detail -" + "";
                    },
                    exportOptions: {
                        columns: [0, 1, 2, 7, 8, 3, 4, 5]
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
            "scrollY": 280,
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
                var totalArticle = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer by showing the total with the reference of the column index 
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(7).footer()).html(totalArticle);
            }
        };
    };
    StocksToCpComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerStocksToCp.next();
    };
    StocksToCpComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    StocksToCpComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerStocksToCp.unsubscribe();
        //this.onDestroyUnsubscribtionStocksToCp.unsubscribe();
        //for datatable ends
    };
    //for datepicker starts
    // the selectToday is the method for  selecting todays'z date
    StocksToCpComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker ends
    //for the select option with filter starts
    StocksToCpComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    //for popup modal starts 
    StocksToCpComponent.prototype.addNewCheckPostPopup = function (popModelNewCheckPostContent) {
        var _this = this;
        this.modalRefferenceCheckPostPopUp = this.modalService.open(popModelNewCheckPostContent, { centered: true, size: "sm" });
        this.modalRefferenceCheckPostPopUp.result.then(function (result) {
            _this.modalRefferenceCheckPostClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceCheckPostClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    StocksToCpComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    //for popup modal ends
    StocksToCpComponent.prototype.checkPostDropDownListner = function (event, popModelNewCheckPostContent) {
        this.modelcheckPost = event.item.checkPostName;
        $("#checkPost").val(event.item.checkPostName);
        if ($("#checkPost").val() == "Add New") {
            this.addNewCheckPostPopup(popModelNewCheckPostContent);
        }
    };
    StocksToCpComponent.prototype.getCheckPostDetailsData = function () {
        this.lrDtoCheckPost = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
        this.lrDtoCheckPost.companyId = this.userDataDtoReturnSession.companyId;
    };
    StocksToCpComponent.prototype.getLRCheckPostDetailsData = function () {
        this.lrDtoLRCheckPost = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
        this.lrDtoLRCheckPost.branch = this.userDataDtoReturnSession.mainStation;
        this.lrDtoLRCheckPost.companyId = this.userDataDtoReturnSession.companyId;
    };
    StocksToCpComponent.prototype.setLRCheckPostDetailsData = function () {
        var _this = this;
        this.getLRCheckPostDetailsData();
        this.showSpinnerForAction = true;
        this.lrReport.getCPStockReport(this.lrDtoLRCheckPost).subscribe(function (response) {
            console.log(response);
            _this.stocksToCpDataList = [];
            $("#stocksToCPTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.stocksToCpDataList = response;
                _this.showSpinnerForAction = false;
            }
            else {
                _this.showSpinnerForAction = false;
            }
            _this.dtTriggerStocksToCp.next();
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Error While Getting CP Stock Report Details", "warning");
        },
            function () { return console.log('done'); };
    };
    StocksToCpComponent.prototype.lrNumberKeyPressEventListner = function (event) {
        console.log(event);
        if (event.charCode == 13) {
            this.getLRDetailsData();
        }
    };
    StocksToCpComponent.prototype.getLRDetailsData = function () {
        var _this = this;
        this.lrDtoForSetLrDetailsValue = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
        this.validateLRNumber = $("#lrNumber").val();
        this.lrDtoForSetLrDetailsValue.lrNumber = this.validateLRNumber;
        this.lrDtoForSetLrDetailsValue.stocksAt = this.userDataDtoReturnSession.office;
        this.lrDtoForSetLrDetailsValue.companyId = this.userDataDtoReturnSession.companyId;
        this.showSpinnerForAction = true;
        this.lrReport.getLROfSpecificStation(this.lrDtoForSetLrDetailsValue).subscribe(function (response) {
            console.log(response);
            if (response.size == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Not Found", "LR Number " + $("#lrNumber").val() + " not found!", "warning");
                _this.clearFields();
            }
            else if ((response.status == "Pending") &&
                (!(response.stocksAt == _this.userDataDtoReturnSession.office))) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Not Found", "LR Number " + $("#lrNumber").val() + " not found!", "warning");
                _this.clearFields();
            }
            else if (response.status == "Delivered") {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Not Found", "LR Number " + $("#lrNumber").val() + " Already Delivered", "warning");
                _this.clearFields();
            }
            else if (response.paid == 0.0 && response.cashMemoNumber != null) {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Not Allowed", "LR Number " + $("#lrNumber").val() + " not found!", "warning");
                _this.clearFields();
            }
            else {
                _this.setLRDetailsValues(response);
            }
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Error While Getting CP Stock Report Details", "warning");
        },
            function () { return console.log('done'); };
    };
    StocksToCpComponent.prototype.setLRDetailsValues = function (lrdtoReturnResponse) {
        $("#bookingDates").val(lrdtoReturnResponse.bookingDate == null ? null : moment__WEBPACK_IMPORTED_MODULE_15__(lrdtoReturnResponse.bookingDate).format("YYYY-MM-DD"));
        $("#invoiceNumber").val(lrdtoReturnResponse.invoiceNumber);
        $("#destination").val(lrdtoReturnResponse.destination);
        $("#consigneeName").val(lrdtoReturnResponse.consigneeName);
        $("#totalArticle").val(lrdtoReturnResponse.totalArticles);
        $("#vehicleNumber").val(lrdtoReturnResponse.vehicleNumber);
        $("#driverName").val(lrdtoReturnResponse.driverName);
        $("#checkPost").val(lrdtoReturnResponse.checkPostName);
        $("#noticeNo").val(lrdtoReturnResponse.noticeNumber);
        $("#dates").val(lrdtoReturnResponse.catchDate == null ? null : moment__WEBPACK_IMPORTED_MODULE_15__(lrdtoReturnResponse.catchDate).format("YYYY-MM-DD"));
    };
    StocksToCpComponent.prototype.clearFields = function () {
        $("#lrNumber").val('');
        $("#bookingDates").val('');
        $("#invoiceNumber").val('');
        $("#destination").val('');
        $("#consigneeName").val('');
        $("#totalArticle").val('');
        $("#vehicleNumber").val('');
        $("#driverName").val('');
        $("#checkPost").val('');
        $("#noticeNo").val('');
        $("#dates").val('');
        this.bookingDateModal = null;
        this.dateModal = null;
        this.modelcheckPost = null;
    };
    StocksToCpComponent.prototype.overAllClearBtnListner = function () {
        var _this = this;
        $("#lrNumber").val('');
        this.clearFields();
        this.stocksToCpDataList = [];
        $("#stocksToCPTableId").DataTable().destroy();
        this.dtTriggerStocksToCp.next();
        this.isReadonlyBookingDate = true;
        this.isReadonlyInvoiceNo = true;
        this.isReadonlyDestination = true;
        this.isReadonlyConsigneeName = true;
        this.isReadonlyArticle = true;
        this.isReadonlyVehicleNo = true;
        this.isReadonlyDriverName = true;
        setTimeout(function () {
            _this.setLRCheckPostDetailsData();
        }, 3000);
    };
    StocksToCpComponent.prototype.saveNewCheckPostNameBtn = function () {
        if ($("#newCheckPostName").val() == null || $("#newCheckPostName").val() == undefined ||
            $("#newCheckPostName").val() == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Field", "Please enter the Check Post Name", "warning");
        }
        else {
            this.setNewCheckPostNameDetails();
        }
    };
    StocksToCpComponent.prototype.setNewCheckPostNameDetails = function () {
        var _this = this;
        this.lrDtoAddNewCheckPostName = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
        this.validateNewCheckPostName = $("#newCheckPostName").val();
        this.lrDtoAddNewCheckPostName.checkPostName = this.validateNewCheckPostName;
        this.lrDtoAddNewCheckPostName.userName = this.userDataDtoReturnSession.userId;
        this.masterReadService.addCheckPost(this.lrDtoAddNewCheckPostName).subscribe(function (response) {
            console.log(response);
            if (response.status == "Success") {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Alert", "Check Post Name Save Successfully", "success");
                _this.modalRefferenceCheckPostPopUp.close();
                _this.setCheckPostDetailsList();
                $("#newCheckPostName").val('');
            }
            else if (response.status == "Exist") {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("CheckPost Already Exist", "" + $("#newCheckPostName").val() + " CheckPost already exist!", "warning");
                return false;
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Alert", "Failed to save New Check Post Name", "error");
                return false;
            }
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Error While Getting Add Check Post Details", "error");
        },
            function () { return console.log('done'); };
    };
    ;
    StocksToCpComponent.prototype.selectedRowForStockToCp = function (stocksToCpData) {
        var _this = this;
        //console.log(stocksToCpData);
        sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
            title: "To Stock",
            text: "Sure U want to move the LR:" + stocksToCpData.lrNumber + " into stock?",
            icon: "info",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (yesToStockBtn) {
            if (yesToStockBtn) {
                _this.lrDtoToStock = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
                _this.lrDtoToStock.lrNumber = stocksToCpData.lrNumber;
                _this.lrDtoToStock.noticeNumber = stocksToCpData.noticeNumber;
                _this.lrDtoToStock.userName = _this.userDataDtoReturnSession.userId;
                _this.lrDtoToStock.companyId = _this.userDataDtoReturnSession.companyId;
                _this.showSpinnerForAction = true;
                //console.log(this.lrDtoToStock);
                _this.lrReport.updateCPStocks(_this.lrDtoToStock).subscribe(function (response) {
                    console.log(response);
                    if (response.status == "Success") {
                        sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Stocks To Cp", "Stock To CP Details Save/Update Successfully", "success");
                        _this.setLRCheckPostDetailsData();
                        _this.clearFields();
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Stocks To Cp", "Failed to save/update the Stock To CP details", "warning");
                    }
                    _this.showSpinnerForAction = false;
                }), function (error) {
                    _this.showSpinnerForAction = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Error While Getting update CP Stocks  Details", "error");
                },
                    function () { return console.log('done'); };
            }
        });
    };
    StocksToCpComponent.prototype.editSelectedRowForStockToCp = function (stocksToCpData) {
        console.log(stocksToCpData);
        $("#lrNumber").val(stocksToCpData.lrNumber);
        //stocksToCpData.bookingDateStr == null ? null : moment(stocksToCpData.bookingDateStr).format("YYYY-MM-DD")
        if (stocksToCpData.bookingDate != null && stocksToCpData.bookingDate != undefined) {
            this.editSelectedRowBookingDate = moment__WEBPACK_IMPORTED_MODULE_15__(stocksToCpData.bookingDate).format("YYYY-MM-DD");
            $("#bookingDates").val(moment__WEBPACK_IMPORTED_MODULE_15__(stocksToCpData.bookingDate).format("YYYY-MM-DD"));
        }
        $("#invoiceNumber").val(stocksToCpData.invoiceNumber);
        $("#destination").val(stocksToCpData.destination);
        $("#consigneeName").val(stocksToCpData.consigneeName);
        $("#totalArticle").val(stocksToCpData.totalArticles);
        $("#vehicleNumber").val(stocksToCpData.vehicleNumber);
        $("#driverName").val(stocksToCpData.driverName);
        $("#checkPost").val(stocksToCpData.checkPostName);
        $("#noticeNo").val(stocksToCpData.noticeNumber);
        $("#dates").val(stocksToCpData.catchDate == null ? null : moment__WEBPACK_IMPORTED_MODULE_15__(stocksToCpData.catchDate).format("YYYY-MM-DD"));
    };
    StocksToCpComponent.prototype.validateToCheckPostBtn = function () {
        var _this = this;
        if (($("#lrNumber").val() == null) || ($("#lrNumber").val() == undefined) ||
            ($("#lrNumber").val() == "") || ($("#checkPost").val() == null) ||
            ($("#checkPost").val() == undefined) || ($("#checkPost").val() == '') ||
            ($("#noticeNo").val() == null) || ($("#noticeNo").val() == undefined) ||
            ($("#noticeNo").val() == "") || ($("#dates").val() == null) ||
            ($("#dates").val() == undefined) || ($("#dates").val() == "")) {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Mandatory Fields", "Please enter the Mandatory Fields", "warning");
            return false;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()({
                title: "To Checkpost",
                text: "Sure U want to marks the LR: " + $("#lrNumber").val() + " as captured in checkpost?",
                icon: "info",
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: ["No", "Yes"],
            }).then(function (yesToCpBtn) {
                if (yesToCpBtn) {
                    _this.setToCheckPostDataDetails();
                }
            });
        }
    };
    StocksToCpComponent.prototype.setToCheckPostDataDetails = function () {
        var _this = this;
        this.lrDtoToCp = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_14__["LRDto"]();
        this.validateLRNumber = $("#lrNumber").val();
        this.validateNoticeNumber = $("#noticeNo").val();
        this.validateCatchDate = $("#dates").val();
        this.validateCheckPostName = $("#checkPost").val();
        this.lrDtoToCp.lrNumber = this.validateLRNumber;
        this.lrDtoToCp.noticeNumber = this.validateNoticeNumber;
        this.lrDtoToCp.catchDate = this.validateCatchDate;
        this.lrDtoToCp.checkPostName = this.validateCheckPostName;
        this.showSpinnerForAction = true;
        this.lrReport.addStocksToCp(this.lrDtoToCp).subscribe(function (response) {
            console.log(response);
            if (response.status == "alreadyexist") {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Duplicate Entry", "LR No: " + $("#lrNumber").val() + " Already in Check Post", "warning");
            }
            else if (response.status == "NotInStock") {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Alert", "LR No: " + $("#lrNumber").val() + " Not In Stock", "warning");
            }
            else if (response.status == "Success") {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Alert", "LR No: " + $("#lrNumber").val() + " Added Stocks To CP ", "success");
                _this.setLRCheckPostDetailsData();
                _this.clearFields();
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Stocks To Cp", "Failed to save/update the Stock To CP details", "warning");
            }
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_9___default()("Error", "Server Error While Getting add Stocks To Cp  Details", "error");
        },
            function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StocksToCpComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popModelNewCheckPostContent'),
        __metadata("design:type", Object)
    ], StocksToCpComponent.prototype, "popModelNewCheckPostContent", void 0);
    StocksToCpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks-to-cp',
            template: __webpack_require__(/*! ./stocks-to-cp.component.html */ "./src/app/stock/transfer/stocks-to-cp/stocks-to-cp.component.html"),
            styles: [__webpack_require__(/*! ./stocks-to-cp.component.css */ "./src/app/stock/transfer/stocks-to-cp/stocks-to-cp.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__["MasterReadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_7__["MemoService"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_6__["HireslipService"],
            src_app_dataService_lr_report_service__WEBPACK_IMPORTED_MODULE_8__["LrReportService"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]])
    ], StocksToCpComponent);
    return StocksToCpComponent;
}());



/***/ }),

/***/ "./src/app/stock/transfer/transfer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/stock/transfer/transfer.module.ts ***!
  \***************************************************/
/*! exports provided: TransferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferModule", function() { return TransferModule; });
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
/* harmony import */ var src_app_stock_transfer_transfer_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/stock/transfer/transfer.routing */ "./src/app/stock/transfer/transfer.routing.ts");
/* harmony import */ var src_app_stock_transfer_shipment_status_shipment_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/stock/transfer/shipment-status/shipment-status.component */ "./src/app/stock/transfer/shipment-status/shipment-status.component.ts");
/* harmony import */ var src_app_stock_transfer_stocks_to_cp_stocks_to_cp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/stock/transfer/stocks-to-cp/stocks-to-cp.component */ "./src/app/stock/transfer/stocks-to-cp/stocks-to-cp.component.ts");
/* harmony import */ var src_app_stock_transfer_stocks_between_godown_stocks_between_godown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/stock/transfer/stocks-between-godown/stocks-between-godown.component */ "./src/app/stock/transfer/stocks-between-godown/stocks-between-godown.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_cashmemo_transfer_cashmemo_manual_cashmemo_check_and_collectionman_stock_check_print_manual_cashmemo_check_and_collectionman_stock_check_print_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check-and-collectionman-stock-check-print/manual-cashmemo-check-and-collectionman-stock-check-print.component */ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check-and-collectionman-stock-check-print/manual-cashmemo-check-and-collectionman-stock-check-print.component.ts");
/* harmony import */ var src_app_stock_transfer_unloading_sheet_details_unloading_sheet_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/stock/transfer/unloading-sheet-details/unloading-sheet-details.component */ "./src/app/stock/transfer/unloading-sheet-details/unloading-sheet-details.component.ts");
/* harmony import */ var src_app_master_consignee_consignee_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/master/consignee/consignee.module */ "./src/app/master/consignee/consignee.module.ts");
/* harmony import */ var src_app_report_cashmemo_report_cashmemo_report_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/report/cashmemo-report/cashmemo-report.module */ "./src/app/report/cashmemo-report/cashmemo-report.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*old datatable*/ 


//for select option search starts













var TransferModule = /** @class */ (function () {
    function TransferModule() {
    }
    TransferModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_stock_transfer_transfer_routing__WEBPACK_IMPORTED_MODULE_10__["TransferRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
                src_app_master_consignee_consignee_module__WEBPACK_IMPORTED_MODULE_17__["ConsigneeModule"], src_app_report_cashmemo_report_cashmemo_report_module__WEBPACK_IMPORTED_MODULE_18__["CashmemoReportModule"]],
            declarations: [
                src_app_stock_transfer_shipment_status_shipment_status_component__WEBPACK_IMPORTED_MODULE_11__["ShipmentStatusComponent"],
                src_app_stock_transfer_stocks_to_cp_stocks_to_cp_component__WEBPACK_IMPORTED_MODULE_12__["StocksToCpComponent"],
                src_app_stock_transfer_stocks_between_godown_stocks_between_godown_component__WEBPACK_IMPORTED_MODULE_13__["StocksBetweenGodownComponent"],
                src_app_cashmemo_transfer_cashmemo_manual_cashmemo_check_and_collectionman_stock_check_print_manual_cashmemo_check_and_collectionman_stock_check_print_component__WEBPACK_IMPORTED_MODULE_15__["ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent"],
                src_app_stock_transfer_unloading_sheet_details_unloading_sheet_details_component__WEBPACK_IMPORTED_MODULE_16__["UnloadingSheetDetailsComponent"]
            ],
            entryComponents: [src_app_stock_transfer_unloading_sheet_details_unloading_sheet_details_component__WEBPACK_IMPORTED_MODULE_16__["UnloadingSheetDetailsComponent"]]
        })
    ], TransferModule);
    return TransferModule;
}());



/***/ }),

/***/ "./src/app/stock/transfer/transfer.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/stock/transfer/transfer.routing.ts ***!
  \****************************************************/
/*! exports provided: TransferRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferRoutes", function() { return TransferRoutes; });
/* harmony import */ var src_app_stock_transfer_shipment_status_shipment_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/stock/transfer/shipment-status/shipment-status.component */ "./src/app/stock/transfer/shipment-status/shipment-status.component.ts");
/* harmony import */ var src_app_stock_transfer_stocks_to_cp_stocks_to_cp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/stock/transfer/stocks-to-cp/stocks-to-cp.component */ "./src/app/stock/transfer/stocks-to-cp/stocks-to-cp.component.ts");
/* harmony import */ var src_app_stock_transfer_stocks_between_godown_stocks_between_godown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/stock/transfer/stocks-between-godown/stocks-between-godown.component */ "./src/app/stock/transfer/stocks-between-godown/stocks-between-godown.component.ts");



var TransferRoutes = [
    {
        path: '',
        children: [
            {
                path: 'shipmentstatus',
                component: src_app_stock_transfer_shipment_status_shipment_status_component__WEBPACK_IMPORTED_MODULE_0__["ShipmentStatusComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'stocksToCp',
                component: src_app_stock_transfer_stocks_to_cp_stocks_to_cp_component__WEBPACK_IMPORTED_MODULE_1__["StocksToCpComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'stocksBetweenGodown',
                component: src_app_stock_transfer_stocks_between_godown_stocks_between_godown_component__WEBPACK_IMPORTED_MODULE_2__["StocksBetweenGodownComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/stock/transfer/unloading-sheet-details/unloading-sheet-details.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/stock/transfer/unloading-sheet-details/unloading-sheet-details.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.title_custom {\r\n\tborder-bottom: 1px solid orange;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n\r\n::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\n/*tbody.tr:hover{background:red;} */\r\n\r\n@media print {\r\n\tbody, html * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t#unlaodingPageView, #hideContent * {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t\r\n\t#viewCustomPrintV1 {\r\n\t\tposition: static;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t\tmargin-top: -580px !important;\r\n\t}\r\n\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2svdHJhbnNmZXIvdW5sb2FkaW5nLXNoZWV0LWRldGFpbHMvdW5sb2FkaW5nLXNoZWV0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyxnQ0FBZ0M7Q0FDaEMsWUFBWTtDQUNaLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLFVBQVU7SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFDRCxvQ0FBb0M7O0FBRXBDO0NBQ0M7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG1CQUFtQjtFQUNuQjs7Q0FFRDtFQUNDLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsT0FBTztFQUNQLDhCQUE4QjtFQUM5Qjs7Q0FFRCIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL3RyYW5zZmVyL3VubG9hZGluZy1zaGVldC1kZXRhaWxzL3VubG9hZGluZy1zaGVldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRpdGxlX2N1c3RvbSB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZTtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBuZ2ItdHlwZWFoZWFkLXdpbmRvd3tcclxuXHR0b3A6IDI2cHg7XHJcbiAgICBsZWZ0OiAxODhweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4vKnRib2R5LnRyOmhvdmVye2JhY2tncm91bmQ6cmVkO30gKi9cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcblx0Ym9keSwgaHRtbCAqIHtcclxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblx0I3VubGFvZGluZ1BhZ2VWaWV3LCAjaGlkZUNvbnRlbnQgKiB7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cdFxyXG5cdCN2aWV3Q3VzdG9tUHJpbnRWMSB7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRvcDogMDtcclxuXHRcdG1hcmdpbi10b3A6IC01ODBweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/stock/transfer/unloading-sheet-details/unloading-sheet-details.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/stock/transfer/unloading-sheet-details/unloading-sheet-details.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content id=\"unlaodingPageView\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<h6 id=\"showHeader\" style=\"margin-bottom: 0px;\">Unloading Sheet\r\n\t\t\t\tDetails Of {{getInvoiceNumber}}</h6>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12 p-t-10\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<h6 class=\"card-title\" align='center'\r\n\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 15px;\">Please\r\n\t\t\t\t\t\tWait Loading....</h6>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"label_custome\">Status</label>\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\r\n\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<select #unloadingStatus id=\"unloadingStatus\"\r\n\t\t\t\t\t\t\t\t\tname=\"unloadingStatus\" class=\"custom-select col-12\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"searchByStatus(unloadingStatus.value)\">\r\n\t\t\t\t\t\t\t\t\t<option selected value='Select Status'>Select\r\n\t\t\t\t\t\t\t\t\t\tStatus...</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Extra\">Extra</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Open Condition\">Open Condition</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Short\">Short</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Wet Condition\">Wet Condition</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"OK\">OK</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"showForStatusNotOk\" class=\"col-sm-12 col-md-2\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"label_custome\">Code</label>\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\r\n\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" Placeholder=\"Code\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tid=\"lrCode\" (keyup)=\"codeFocus($event)\" autocomplete=\"off\"\r\n\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"showForStatusNotOk\" class=\"col-sm-12 col-md-2\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"label_custome\">LR No.</label>\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\r\n\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" Placeholder=\"LR Number\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tid=\"unloadinglrNumber\" (keyup)=\"lrNumberFocus($event)\"\r\n\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"showForStatusNotOk\" class=\"col-sm-12 col-md-2\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"label_custome\">Mention</label>\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\r\n\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<select id=\"mention\" name=\"mention\" class=\"custom-select col-12\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\" selected>Select Mention</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"YES\">YES</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NO\">NO</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"showForStatusNotOk\" class=\"col-sm-12 col-md-2\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"label_custome\">Short.Art.</label>\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\r\n\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" Placeholder=\"Shortage Article\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"shortageArticle\"\r\n\t\t\t\t\t\t\t\t\t(keyup)=\"articleFocus($event)\" autocomplete=\"off\"\r\n\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"showForStatusNotOk\" class=\"col-sm-12 col-md-2\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"label_custome\">Remark</label>\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\r\n\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<textarea #remark class=\"form-control\" rows=\"2\" id=\"remark\"\r\n\t\t\t\t\t\t\t\t\t(keyup)=\"remarksFocus($event)\" name=\"remark\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"remarkValue\"></textarea>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"box-body\">\r\n\t\t\t\t\t\t<table datatable style=\"width: 100%;\" id=\"unloadingTripDetailsId\"\r\n\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\r\n\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsUnloadingTripDetails\"\r\n\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerUnloadingTripDetails\">\r\n\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t\t\t<th>LR Number</th>\r\n\t\t\t\t\t\t\t\t\t<th>Actual Article</th>\r\n\t\t\t\t\t\t\t\t\t<th>Enter Article</th>\r\n\t\t\t\t\t\t\t\t\t<th>Remark</th>\r\n\t\t\t\t\t\t\t\t\t<th>Mention</th>\r\n\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr style='cursor: pointer;'\r\n\t\t\t\t\t\t\t\t\t*ngFor=\"let unloadingTripDetailsData of unloadingTripDetailsDataList;let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{ unloadingTripDetailsData.status }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{ unloadingTripDetailsData.lrNumber }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{ unloadingTripDetailsData.totalArticles }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{ unloadingTripDetailsData.type }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{ unloadingTripDetailsData.remarks }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{ unloadingTripDetailsData.mode }}</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px;background-color: #ffffff00;\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableEditBtn\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedEditForUnlaoding(unloadingTripDetailsData,i);\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i title=\"Edit\" class=\"fas fa-pencil-alt\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDeleteForUnlaoding(unloadingTripDetailsData,i);\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\"></div>\r\n\t\t\t\t\t\t\t<button type=\"button\" style='background: green; color: white;'\r\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-dark\" id=\"okPopupBtnId\" (click)=\"btnPopSave();\">Save</button>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\"></div>\r\n\t\t\t\t\t\t\t<button type=\"button\" style='background: black; color: white;'\r\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-dark\"(click)=\"clearAll();\">Cancel</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\r\n\t</div>\r\n</div>\r\n<!--POP UP START HERE-->\r\n<div class=\"col-md-12\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<ng-template #tripDeliveryLrsDetailsPopUpTemplate let-ok=\"close\"\r\n\t\t\t\tlet-d=\"dismiss\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForActionReasonPopup\"\r\n\t\t\t\t\t\t\t\t\tclass=\"col-md-12 p-t-10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\r\n\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\r\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 15px;\">Please\r\n\t\t\t\t\t\t\t\t\t\t\t\tWait Loading....</h6>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Reason</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-comments\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input #reasonName id=\"reasonNameId\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"clickListnerForReasonName($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelReasonName\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"searchReasonName\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterReasonName\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterReasonName\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"onKeyPressReasonNameDropDown($event);\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusReasonNameTA$.next($any($event).target.value)\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div [hidden]=\"!viewNewReasonField\" class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>New Reason</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-comments\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"newReasonNameId\" type=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" style='background: green; color: white;'\r\n\t\t\t\t\tclass=\"btn btn-outline-dark\" [hidden]=\"!viewOkPopUpBtn\"\r\n\t\t\t\t\tid=\"okPopupBtnId\" (click)=\"okBtnClickReasonPopUp()\">Ok</button>\r\n\t\t\t\t<button type=\"button\" style='background: green; color: white;'\r\n\t\t\t\t\tclass=\"btn btn-outline-dark\" [hidden]=\"!viewconfirmCancelPopUpBtn\"\r\n\t\t\t\t\tid=\"confirmCancelPopupBtnId\"\r\n\t\t\t\t\t(click)=\"confirmCancelBtnClickReasonPopUp()\">Confirm\r\n\t\t\t\t\tCancel</button>\r\n\t\t\t\t<button type=\"button\" style='background: black; color: white;'\r\n\t\t\t\t\tclass=\"btn btn-outline-dark\" (click)=\"closePopUp()\">Cancel</button>\r\n\t\t\t</div>\r\n\t\t\t</ng-template>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div mat-dialog-actions style=\"float: right;\" id=\"hideContent\">\r\n\t<button class=\"btn btn-outline-danger\" mat-button\r\n\t\t(click)=\"onCancelClick()\">Cancel</button>\r\n</div>\r\n\r\n<div *ngIf=\"viewCustomPrintV1\" onafterprint=\"afterPrint()\" id=\"viewCustomPrintV1\">\r\n\t\t<app-custom-dynamic-printV1></app-custom-dynamic-printV1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/stock/transfer/unloading-sheet-details/unloading-sheet-details.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/stock/transfer/unloading-sheet-details/unloading-sheet-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UnloadingSheetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnloadingSheetDetailsComponent", function() { return UnloadingSheetDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
/* harmony import */ var src_app_dataService_lr_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/dataService/lr-service */ "./src/app/dataService/lr-service.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var my = new Date();











var UnloadingSheetDetailsComponent = /** @class */ (function () {
    ////
    function UnloadingSheetDetailsComponent(router, datePipe, modalService, hireslipService, lrService, dialogRef, data) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.hireslipService = hireslipService;
        this.lrService = lrService;
        this.dialogRef = dialogRef;
        this.data = data;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        //for the select option with filter starts
        this.isLoggedIn = true;
        this.cashMemoDto = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
        this.showSpinnerForAction = false;
        this.dtTriggerUnloadingTripDetails = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.showForStatusNotOk = true;
        this.hireslipDtoForGetLrMthd = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.lrDtoForGerLrMthd = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.hireslipDtoForLRdtsUnloadRptRet = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.lrDtoForGetLrshortage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.lrShortageForSingleLrRet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.alreadyExiMaint = false;
        this.rowSelected = false;
        this.actArticles = 0;
        this.newAttribute = {};
        this.countOfLr = 0;
        this.unloadingTripDetailsDataList = [];
        this.hireSlipDtoForPopSave = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.hireslipDtoForSave = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.hireslipDtoForSaveDetailsOfLrs = [];
        this.hireslipDtoForEdit = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.hireslipdtoForOnload = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.invoicedtoForInvoiceOnLoadDetails = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_13__["InvoiceDto"]();
        this.invoicedtoForSearchOnLoadDetailsRet = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_13__["InvoiceDto"]();
        this.viewCustomPrintV1 = false;
        this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
        this.cashMemoDtoForCustomPrintListColumnNames = [];
        this.cashMemoDtoForCustomPrintListColumnWidths = [];
        this.cashMemoDtoForCustomPrintData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
        this.cashMemoDtoForCustomPrintListColumnValues = [];
        this.lrCountSummary = 0;
        this.cashMemoDtoForCustomPrintListHeadingNamesV1 = [];
        this.cashMemoDtoForCustomPrintListHeadingNamesV2 = [];
        this.cashMemoDtoForCustomPrintListHeadingValuesV1 = [];
        this.cashMemoDtoForCustomPrintListHeadingValuesV2 = [];
        this.cashMemoDtoForCustomPrintListHeadingNamesV3 = [];
        this.cashMemoDtoForCustomPrintListHeadingNamesV4 = [];
        this.getInvoiceDetailsOnLoadService = function () {
            _this.showSpinnerForAction = true;
            _this.hireslipService.getInvoiceDetails(_this.invoicedtoForInvoiceOnLoadDetails).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                _this.invoicedtoForSearchOnLoadDetailsReturn = '';
                _this.invoicedtoForSearchOnLoadDetailsReturn = response;
                _this.invoicedtoForSearchOnLoadDetailsRet = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_13__["InvoiceDto"]();
                console.log('getting invoice details');
                console.log(_this.invoicedtoForSearchOnLoadDetailsReturn);
                _this.invoicedtoForSearchOnLoadDetailsRet = _this.invoicedtoForSearchOnLoadDetailsReturn;
                if ((_this.invoicedtoForSearchOnLoadDetailsRet.size == 0) || (_this.invoicedtoForSearchOnLoadDetailsRet.status == 'Loading')) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                        title: "LR Shipment",
                        text: "Invoice Number" + _this.getInvoiceNumber + " not found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    //updateButton.setEnabled(false);
                    $("#updateBtn").prop("disabled", true);
                }
                else {
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", "Failed To Load the Invoice Details....Please Try Again", "info");
            }, function () { return console.log('done'); };
        };
        this.getHireSlipUnLoadRptDtlsInfo = function () {
            _this.showSpinnerForAction = true;
            _this.hireslipService.getHireSlipUnLoadRptDtls(_this.hireslipdtoForOnload).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                $("#unloadingTripDetailsId").DataTable().destroy();
                _this.unloadingTripDetailsDataList = [];
                console.log(response);
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                        title: "Warning",
                        text: "No Unloading  Details found !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.unloadingTripDetailsDataList = response;
                    //this.customPrintForUnloading();
                    // this.router.navigate(['/report/cashmemo-report/customDynamicPrintV1']);
                    // window.open('/report/cashmemo-report/customDynamicPrintV1', '_blank');
                    console.log('getHireSlipUnLoadRptDtlsInfo');
                }
                _this.dtTriggerUnloadingTripDetails.next();
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", "Server Problem Occurred While getting the  Invoice Unloading details", "info");
            }, function () { return console.log('done'); };
        };
        //getLrArticleDetails
        this.getLrArticleDetails = function (lrDtoForGerLrMthd) {
            _this.showSpinnerForAction = true;
            _this.lrService.getLrArticlesDetails(lrDtoForGerLrMthd).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log(response);
                var getLrArticleDetailsRet = response;
                if (getLrArticleDetailsRet.lrNumber != null) {
                    _this.actArticles = getLrArticleDetailsRet.totalArticles;
                    console.log(_this.articles);
                }
                else {
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", "Server Problem Occurred While getting the  Lr Articles  details", "info");
            }, function () { return console.log('done'); };
        };
        //getLRShortageDetails
        this.getLRShortageDetails = function (hireslipDtoForGetLrMthd) {
            _this.lrDtoForGetLrshortage = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
            _this.lrDtoForGetLrshortage.invoiceNumber = hireslipDtoForGetLrMthd.hireslipnumber;
            _this.lrDtoForGetLrshortage.lrNumber = hireslipDtoForGetLrMthd.lrNumber;
            _this.lrDtoForGetLrshortage.status = hireslipDtoForGetLrMthd.status;
            _this.showSpinnerForAction = true;
            _this.lrService.getLrShortageForSingleLr(_this.lrDtoForGetLrshortage).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                console.log(response);
                _this.getLrShortageForSingleLrRet = response;
                _this.lrShortageForSingleLrRet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
                _this.lrShortageForSingleLrRet = _this.getLrShortageForSingleLrRet;
                if (_this.lrShortageForSingleLrRet.size == 1) {
                    console.log('1');
                    _this.gridReconfig(_this.lrShortageForSingleLrRet);
                }
                else {
                    $("#shortageArticle").focus();
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", "Server Problem Occurred While getting the  Lr Shortage  details", "info");
            }, function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                title: "Session Expired",
                text: "Please relogin to access the application!",
                icon: "error",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                //this.logInPage();
            });
        }
        if (this.isLoggedIn) {
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.address = this.userDataDtoReturnSession.addressId == null ? '' : this.userDataDtoReturnSession.addressId;
            this.dataForPopupFromShipmentStatusOtherDetails = JSON.parse(localStorage.getItem('popupShipmentStatus'));
            this.dataForPopupFromShipmentStatusDataList = JSON.parse(localStorage.getItem('popupShipmentStatusDataList'));
            //console.log(this.address);
            if (this.dataForPopupFromShipmentStatusOtherDetails != null) {
                this.getInvoiceNumber = this.dataForPopupFromShipmentStatusOtherDetails.hireslipnumber;
                this.OnLoadServiceCall();
                console.log('am in unloading');
                this.OnLoadServiceCallToGetInvoiceDetails();
                //this.customPrintGcAmtCollected();
            }
            if (this.dataForPopupFromShipmentStatusDataList != null) {
                /*$("#unloadingTripDetailsId").DataTable().destroy();
                this.unloadingTripDetailsDataList = [];
                this.unloadingTripDetailsDataList = this.dataForPopupFromShipmentStatusDataList;
                this.dtTriggerUnloadingTripDetails.next();
                console.log(this.dataForPopupFromShipmentStatusDataList);*/
            }
            this.dataForPopupFromShipmentStatusDataList = [];
            this.dataForPopupFromShipmentStatusOtherDetails = '';
        }
    }
    UnloadingSheetDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                //this.dtTriggerMemoLessDescriptionDetails.next();
            });
        });
    };
    UnloadingSheetDetailsComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsUnloadingTripDetails = {
            dom: 'Bfrtip',
            buttons: [
            /*{
                extend: 'print',
                text: '<i class="fas fa-print"> Print</i>',
                titleAttr: 'Print',
                customize : function(win) {
                    $(win.document.body).css('font-size','10pt');
                    $(win.document.body).find('th, td').
                    css('font-family','Arial, Helvetica, sans-serif')
                    .css('font-size','13px').css('text-align','center');
                },
                footer : true,
                exportOptions:{
                    columns :[0,1,2,3,4,5]
                    },
                messageTop : function() {
                    var returnVal=null;
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
                                    "<span style='font-size:15px;'></span><br>" +
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
                                    "<span style='font-size:15px;'></span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "</table>" +
                                    "</td>" +
                                    "<td rowspan='2'style='width:30%;word-wrap: break-word;text-align:left !important;'>" +
                                    "<strong style='font-size:19px;'><u>Unloading Report</u></strong><br>" +
                                    "</td>" +
                                    "<td align='left' style='width:40%;'>" +
                                    "<table>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'></strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
                                    "</td>" +
                                    "<td width='32%' style='text-align:left !important;'>" +
                                    "<span style='font-size:15px;'> </span><br>" +
                                    "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td width='8%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'></strong>" +
                                    "</td>" +
                                    "<td width='2%' style='text-align:left !important;'>" +
                                    "<strong style='font-size:15px;'>:</strong>" +
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
                footer : true,
                title : function() {
                
                var returnSummaryExcel=null;
                    
                        returnSummaryExcel = "Unloading Report";
                    
                    return returnSummaryExcel;
                },
                exportOptions: {
                    columns: ':visible'
                }
            }*/
            ],
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search..."
            },
            processing: true,
            //scroll in datatable starts
            responsive: true,
            "scrollX": true,
            "scrollY": 200,
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
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html();
                $(api.column(2).footer()).html();
                $(api.column(3).footer()).html();
                $(api.column(4).footer()).html();
                $(api.column(5).footer()).html();
                $(api.column(6).footer()).html();
            }
        };
    };
    UnloadingSheetDetailsComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerUnloadingTripDetails.unsubscribe();
    };
    UnloadingSheetDetailsComponent.prototype.ngAfterViewInit = function () {
        //this.dtTriggerUnloadingTripDetails.next();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    UnloadingSheetDetailsComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    UnloadingSheetDetailsComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    UnloadingSheetDetailsComponent.prototype.OnLoadServiceCallToGetInvoiceDetails = function () {
        this.invoicedtoForInvoiceOnLoadDetails = new src_app_dto_Invoice_dto__WEBPACK_IMPORTED_MODULE_13__["InvoiceDto"]();
        this.invoicedtoForInvoiceOnLoadDetails.invoiceNumber = this.getInvoiceNumber;
        this.invoicedtoForInvoiceOnLoadDetails.companyId = this.userDataDtoReturnSession.companyId;
        console.log(this.invoicedtoForInvoiceOnLoadDetails);
        this.getInvoiceDetailsOnLoadService();
    };
    UnloadingSheetDetailsComponent.prototype.searchByStatus = function (searchBy) {
        if (searchBy != 'Select Status') {
            if (searchBy === 'OK') {
                this.showForStatusNotOk = false;
                $("#lrCode").val('');
                $("#unloadinglrNumber").val('');
                $("#mention").val('No');
                $("#shortageArticle").val('');
                $("#remark").val('');
            }
            else {
                this.showForStatusNotOk = true;
                $("#lrCode").val('');
                $("#unloadinglrNumber").val('');
                $("#mention").val('No');
                $("#shortageArticle").val('');
                $("#remark").val('');
                $("#lrCode").focus();
            }
        }
    };
    UnloadingSheetDetailsComponent.prototype.OnLoadServiceCall = function () {
        this.hireslipdtoForOnload = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.hireslipdtoForOnload.hireslipnumber = this.getInvoiceNumber;
        this.hireslipdtoForOnload.companyid = this.userDataDtoReturnSession.companyId;
        this.getHireSlipUnLoadRptDtlsInfo();
    };
    UnloadingSheetDetailsComponent.prototype.clearFields = function () {
        $("#lrCode").val('');
        $("#unloadinglrNumber").val('');
        $("#mention").val('');
        $("#shortageArticle").val('');
        $("#remark").val('');
        this.selectedStatusType = '';
        $("#unloadingStatus").val('Select Status');
        $("#unloadingStatus").focus();
    };
    UnloadingSheetDetailsComponent.prototype.codeFocus = function (e) {
        if (e.keyCode == 13) {
            $("#unloadinglrNumber").focus();
        }
    };
    UnloadingSheetDetailsComponent.prototype.lrNumberFocus = function (e) {
        this.enteredLRNumber = $("#unloadinglrNumber").val();
        this.selectedStatusType = $("#unloadingStatus").val();
        console.log(this.enteredLRNumber, this.selectedStatusType);
        if (e.keyCode == 13) {
            if ((this.selectedStatusType == '' || this.selectedStatusType == null || this.selectedStatusType == 'Select Status') || (this.enteredLRNumber == null || this.enteredLRNumber == '')) {
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                    title: "Warning",
                    text: "Status & LR No is Mandatory Field",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                console.log('1');
                this.getLrMtd("Lr");
            }
        }
    };
    UnloadingSheetDetailsComponent.prototype.articleFocus = function (e) {
        if (e.keyCode == 13) {
            console.log('1');
            this.getLrMtd("Art");
        }
    };
    UnloadingSheetDetailsComponent.prototype.remarksFocus = function (e) {
        this.enteredLRNumber = $("#unloadinglrNumber").val();
        this.selectedStatusType = $("#unloadingStatus").val();
        this.enteredShortageArticle = $("#shortageArticle").val();
        if (e.keyCode == 13) {
            if ((this.selectedStatusType == '' || this.selectedStatusType == null || this.selectedStatusType == 'Select Status') || (this.enteredLRNumber == null || this.enteredLRNumber == '') || (this.enteredShortageArticle == null || this.enteredShortageArticle == '')) {
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                    title: "Warning",
                    text: "Status & LR No is Mandatory Field",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else if ((this.selectedStatusType == '' || this.selectedStatusType == null || this.selectedStatusType == '') || (this.enteredLRNumber == null || this.enteredLRNumber == '') || (this.enteredShortageArticle == null || this.enteredShortageArticle == '')) {
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                    title: "Warning",
                    text: "Select Status Field ",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                console.log('1');
                this.getLrMtd("Remark");
            }
        }
    };
    UnloadingSheetDetailsComponent.prototype.getLrMtd = function (mode) {
        var _this = this;
        this.enteredLRNumber = $("#unloadinglrNumber").val();
        this.enteredLrCode = $("#lrCode").val();
        this.selectedStatusType = $("#unloadingStatus").val();
        if (this.enteredLRNumber != null && this.enteredLRNumber != '') {
            this.enteredLRNumber = this.enteredLRNumber.trim().split(' ').filter(function (item) { return item.length > 0; }).join(' ');
            this.articles = 0;
            this.hireslipDtoForGetLrMthd = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
            this.hireslipDtoForGetLrMthd.hireslipnumber = this.getInvoiceNumber;
            if (this.enteredLrCode != null && this.enteredLrCode != '') {
                this.hireslipDtoForGetLrMthd.lrNumber = this.enteredLrCode + "" + this.enteredLRNumber;
            }
            else {
                this.hireslipDtoForGetLrMthd.lrNumber = this.enteredLRNumber;
            }
            this.hireslipDtoForGetLrMthd.lrNumber = this.hireslipDtoForGetLrMthd.lrNumber.trim().split(' ').filter(function (item) { return item.length > 0; }).join(' ');
            this.hireslipDtoForGetLrMthd.status = this.selectedStatusType;
            this.hireslipDtoForGetLrMthd.companyid = this.userDataDtoReturnSession.companyId;
            //For Getting the getLrArticleDetails
            this.lrDtoForGerLrMthd = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
            this.lrDtoForGerLrMthd.lrNumber = this.hireslipDtoForGetLrMthd.lrNumber;
            this.getLrArticleDetails(this.lrDtoForGerLrMthd);
            console.log(this.hireslipDtoForGetLrMthd);
            if (this.hireslipDtoForGetLrMthd.status != 'Extra') {
                this.hireslipService.getLRdtsUnloadRpt(this.hireslipDtoForGetLrMthd).subscribe(function (response) {
                    _this.showSpinnerForAction = false;
                    _this.lrdtsUnloadRptRet = response;
                    console.log(_this.lrdtsUnloadRptRet);
                    _this.hireslipDtoForLRdtsUnloadRptRet = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
                    _this.hireslipDtoForLRdtsUnloadRptRet = _this.lrdtsUnloadRptRet;
                    if (_this.hireslipDtoForLRdtsUnloadRptRet.status != null && _this.hireslipDtoForLRdtsUnloadRptRet.status == 'Allow') {
                        _this.articles = _this.hireslipDtoForLRdtsUnloadRptRet.totalArticles;
                        if ((mode == 'Art') || (mode == 'Remark')) {
                            _this.getArtMtd(mode);
                        }
                        else {
                            _this.getLRShortageDetails(_this.hireslipDtoForGetLrMthd);
                        }
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                            title: "Warning",
                            text: "LR Number : " + _this.enteredLRNumber + " is Not Found In This Invoice",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            $("#lrCode").val('');
                            $("#unloadinglrNumber").val('');
                        });
                    }
                }), function (error) {
                    _this.showSpinnerForAction = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", "Server Problem Occurred While getting HireSlip UnLoad Rpt Dtls Info", "info");
                }, function () { return console.log('done'); };
            }
            else {
                if (mode == 'Lr') {
                    $("#shortageArticle").focus();
                }
                else if (mode == 'Art') {
                    $("#remark").focus();
                }
                else if (mode == 'Remark') {
                    this.getValuesMtd();
                }
            }
        }
    };
    //getArtMtd
    UnloadingSheetDetailsComponent.prototype.getArtMtd = function (mode) {
        this.enteredShortageArticle = $("#shortageArticle").val();
        if (this.enteredShortageArticle != null) {
            if (this.enteredShortageArticle > this.articles) {
                this.enteredShortageArticle = '';
                $("#shortageArticle").val('');
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                    title: "Warning",
                    text: "Entered Article is Exceeds the Total Articles ",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                $("#remark").focus();
                if (mode == 'Remark') {
                    this.getValuesMtd();
                }
            }
        }
    };
    UnloadingSheetDetailsComponent.prototype.getValuesMtd = function () {
        console.log(this.rowSelected);
        this.mainLR = null;
        this.alreadyExiMaint = false;
        this.enteredLRNumber = $("#unloadinglrNumber").val();
        this.enteredLrCode = $("#lrCode").val();
        if (this.enteredLRNumber != null && this.enteredLRNumber != '') {
            this.enteredLRNumber = this.enteredLRNumber.trim().split(' ').filter(function (item) { return item.length > 0; }).join(' ');
            if (this.enteredLrCode != null && this.enteredLrCode != '') {
                this.mainLR = this.enteredLrCode + "" + this.enteredLRNumber;
            }
            else {
                this.mainLR = this.enteredLRNumber;
            }
            this.mainLR = this.mainLR.trim().split(' ').filter(function (item) { return item.length > 0; }).join(' ');
            console.log(this.mainLR);
        }
        if (this.rowSelected == true) {
            this.enterKeyGridReconfigure(this.modelDup);
            this.rowSelected = false;
        }
        else {
            this.selectedStatusType = $("#unloadingStatus").val();
            for (var i = 0; i < this.unloadingTripDetailsDataList.length; i++) {
                var lrNoInGrid = this.unloadingTripDetailsDataList[i].lrNumber;
                var lrStsInGrid = this.unloadingTripDetailsDataList[i].status;
                if (this.mainLR == lrNoInGrid) {
                    this.alreadyExiMaint = false;
                    if (this.selectedStatusType == lrStsInGrid) {
                        this.alreadyExiMaint = true;
                        break;
                    }
                    else if ((this.selectedStatusType == "Short")
                        && (lrStsInGrid == "Extra")) {
                        this.alreadyExiMaint = true;
                        break;
                    }
                    else if ((this.selectedStatusType == "Extra")
                        && (lrStsInGrid == "Short")) {
                        this.alreadyExiMaint = true;
                        break;
                    }
                }
                else {
                    this.alreadyExiMaint = false;
                }
            }
            if (this.alreadyExiMaint == true) {
                sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                    title: "Warning",
                    text: "Duplicate Entry " + this.mainLR + " Already Exist",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                $("#unloadingStatus").focus();
            }
            else {
                this.enterKeyGridReconfigure(this.modelDup);
                this.rowSelected = false;
            }
        }
        $("#lrCode").val('');
        $("#unloadinglrNumber").val('');
        $("#mention").val('');
        $("#shortageArticle").val('');
        $("#remark").val('');
        this.selectedStatusType = '';
        $("#unloadingStatus").val('Select Status');
        $("#unloadingStatus").focus();
    };
    UnloadingSheetDetailsComponent.prototype.enterKeyGridReconfigure = function (model) {
        console.log('inside enterKeyGridReconfigure');
        var remarks = "NA";
        this.enteredRemarks = '';
        this.enteredRemarks = $("#remark").val();
        this.selectedMention = $("#mention").val();
        this.enteredShortageArticle = $("#shortageArticle").val();
        this.selectedStatusType = $("#unloadingStatus").val();
        if (this.enteredRemarks != null && this.enteredRemarks != '' && this.enteredRemarks != undefined) {
            this.enteredRemarks = this.enteredRemarks.trim().split(' ').filter(function (item) { return item.length > 0; }).join(' ');
            console.log(this.enteredRemarks);
            remarks = this.enteredRemarks;
            this.mainLR = this.mainLR;
            if (remarks == '' || remarks == null || remarks == undefined) {
                remarks = "NA";
            }
        }
        var art = this.enteredShortageArticle;
        //art = art.replace(".0", "");
        var mode = null;
        if (this.selectedMention == 'YES') {
            mode = "YES";
        }
        else if (this.selectedMention == 'NO') {
            mode = "NO";
        }
        else {
            mode = "NA";
        }
        console.log(this.hireslipDtoForEdit.lrNumber);
        //if (model == null) {
        if (this.hireslipDtoForEdit.lrNumber == null || this.hireslipDtoForEdit.lrNumber == '') {
            console.log('inside enterKeyGridReconfigure if model null');
            //addInTable;
            this.addInTable(this.actArticles, this.mainLR, art, remarks, this.selectedStatusType, mode);
            /*storeUnloadRpt.add(new Maintenance(actArticles, mainLR, art,
                    remarks,
                    lbxStatus.getItemText(lbxStatus.getSelectedIndex()), mode));
            gridUnloadRpt.reconfigure(storeUnloadRpt, cmUnloadRpt);
            storeUnloadRpt.groupBy("status");*/
        }
        else {
            console.log('inside enterKeyGridReconfigure if model not null');
            //addInTable;
            console.log('SELECTED ROW INDEX : ' + this.selectedRowIndex);
            this.unloadingTripDetailsDataList.splice(this.selectedRowIndex, 1);
            this.addInTable(this.actArticles, this.mainLR, art, remarks, this.selectedStatusType, mode);
            this.hireslipDtoForEdit = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
            this.selectedRowIndex = '';
            /*gridUnloadRpt.getStore().remove(model);
            storeUnloadRpt.add(new Maintenance(actArticles, mainLR, art,
                    remarks,
                    lbxStatus.getItemText(lbxStatus.getSelectedIndex()), mode));
            gridUnloadRpt.reconfigure(storeUnloadRpt, cmUnloadRpt);
            storeUnloadRpt.groupBy("status");*/
        }
    };
    // Grid Reconfigure
    UnloadingSheetDetailsComponent.prototype.gridReconfig = function (lrShortageForSingleLrRet) {
        console.log('inside gridReconfig');
        var lrNo = lrShortageForSingleLrRet.lrNumber;
        var lrStatus = lrShortageForSingleLrRet.status;
        this.alreadyExiMaint = false;
        this.selectedStatusType = $("#unloadingStatus").val();
        for (var i = 0; i < this.unloadingTripDetailsDataList.length; i++) {
            var lrNoInGrid = this.unloadingTripDetailsDataList[i].lrNumber;
            var lrStsInGrid = this.unloadingTripDetailsDataList[i].status;
            if (lrNo == lrNoInGrid) {
                this.alreadyExiMaint = false;
                if (lrStatus == lrStsInGrid) {
                    this.alreadyExiMaint = true;
                    break;
                }
                else if ((lrStatus == "Short")
                    && (lrStsInGrid == "Extra")) {
                    this.alreadyExiMaint = true;
                    break;
                }
                else if ((lrStatus == "Extra")
                    && (lrStsInGrid == "Short")) {
                    this.alreadyExiMaint = true;
                    break;
                }
            }
            else {
                this.alreadyExiMaint = false;
            }
        }
        if (this.alreadyExiMaint == true) {
            sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                title: "Warning",
                text: "Duplicate Entry" + this.mainLR + " Already Exist",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            $("#unloadingStatus").focus();
        }
        else {
            console.log('inside gridReconfig in  else part');
            var remarks = "NA";
            if (lrShortageForSingleLrRet == null
                || lrShortageForSingleLrRet == '') {
                remarks = "NA";
                console.log('inside gridReconfig2');
            }
            else {
                console.log('inside gridReconfig3');
                remarks = lrShortageForSingleLrRet.remarks;
            }
            this.addInTable(this.actArticles, lrShortageForSingleLrRet.lrNumber, lrShortageForSingleLrRet.totalArticles, remarks, lrShortageForSingleLrRet.status, "YES");
            $("#lrCode").val('');
            $("#unloadinglrNumber").val('');
            this.selectedStatusType = '';
            $("#unloadingStatus").val('Select Status');
            $("#unloadingStatus").focus();
        }
    };
    //Adding In Table
    UnloadingSheetDetailsComponent.prototype.addInTable = function (actArticles, mainLR, art, remarks, status, mode) {
        console.log('inside of addInTable');
        this.newAttribute.status = status;
        this.newAttribute.lrNumber = mainLR;
        this.newAttribute.totalArticles = actArticles;
        this.newAttribute.type = art;
        this.newAttribute.remarks = remarks;
        this.newAttribute.mode = mode;
        $("#unloadingTripDetailsId").DataTable().destroy();
        if (this.unloadingTripDetailsDataList == null) {
            this.unloadingTripDetailsDataList = [];
        }
        if (this.unloadingTripDetailsDataList.length == 0) {
            this.unloadingTripDetailsDataList.push(this.newAttribute);
        }
        else {
            this.unloadingTripDetailsDataList.push(this.newAttribute);
        }
        this.dtTriggerUnloadingTripDetails.next();
        console.log(this.unloadingTripDetailsDataList);
        this.countOfLr = +this.countOfLr + 1;
        this.newAttribute = {};
    };
    // For Edit 
    UnloadingSheetDetailsComponent.prototype.rowSelectedEditForUnlaoding = function (unloadingTripDetailsData, index) {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
            title: "Confirm Edit",
            text: "Sure you want to Edit the selected Row",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (remove) {
            if (remove) {
                _this.rowSelected = true;
                _this.modelDup = '';
                _this.modelDup = unloadingTripDetailsData;
                _this.hireslipDtoForEdit = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
                _this.hireslipDtoForEdit = _this.modelDup;
                _this.selectedRowIndex = index;
                var SelecedRowLrNumber = unloadingTripDetailsData.lrNumber;
                var mode = unloadingTripDetailsData.mode;
                $("#lrCode").val('');
                $("#unloadinglrNumber").val(SelecedRowLrNumber);
                $("#unloadingStatus").val(unloadingTripDetailsData.status);
                $("#remark").val(unloadingTripDetailsData.remarks);
                $("#shortageArticle").val(unloadingTripDetailsData.type);
                if (mode != null && mode == 'YES') {
                    $("#mention").val('YES');
                }
                else if (mode != null
                    && mode == 'NO') {
                    $("#mention").val('NO');
                }
            }
        });
        console.log(unloadingTripDetailsData);
    };
    // For Delete 
    UnloadingSheetDetailsComponent.prototype.rowSelectedDeleteForUnlaoding = function (unloadingTripDetailsData, index) {
        var _this = this;
        console.log(unloadingTripDetailsData);
        sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
            title: "Confirm Remove",
            text: "Sure you want to remove the selected Row",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (remove) {
            if (remove) {
                _this.unloadingTripDetailsDataList.splice(index, 1);
                $("#unloadingTripDetailsId").DataTable().destroy();
                _this.dtTriggerUnloadingTripDetails.next();
                _this.countOfLr = +_this.countOfLr - 1;
                console.log(_this.unloadingTripDetailsDataList);
            }
        });
    };
    UnloadingSheetDetailsComponent.prototype.btnPopSave = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
            title: "Confirm Save",
            text: "Please check the entered details again, once saved cannot be update.Sure U Want to Save the Unloading Report Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (save) {
            if (save) {
                _this.hireSlipDtoForPopSave = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
                _this.selectedStatusType = $("#unloadingStatus").val();
                if (_this.selectedStatusType != '' && _this.selectedStatusType != null && _this.selectedStatusType == 'OK') {
                    _this.hireSlipDtoForPopSave.hireslipnumber = _this.getInvoiceNumber;
                    _this.hireSlipDtoForPopSave.mode = "OK";
                }
                else {
                    _this.hireSlipDtoForPopSave.hireslipnumber = _this.getInvoiceNumber;
                    _this.hireSlipDtoForPopSave.mode = "Others";
                    _this.hireslipDtoForSaveDetailsOfLrs = [];
                    for (var i = 0; i < _this.unloadingTripDetailsDataList.length; i++) {
                        _this.hireslipDtoForSave = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
                        _this.hireslipDtoForSave.type = _this.unloadingTripDetailsDataList[i].status;
                        _this.hireslipDtoForSave.lrNumber = _this.unloadingTripDetailsDataList[i].lrNumber;
                        _this.hireslipDtoForSave.totalArticles = _this.unloadingTripDetailsDataList[i].type;
                        _this.hireslipDtoForSave.remarks = _this.unloadingTripDetailsDataList[i].remarks;
                        _this.hireslipDtoForSave.messageText = _this.unloadingTripDetailsDataList[i].mode;
                        _this.hireslipDtoForSaveDetailsOfLrs.push(_this.hireslipDtoForSave);
                    }
                    _this.hireSlipDtoForPopSave.hireSlipDtoList = _this.hireslipDtoForSaveDetailsOfLrs;
                    _this.hireSlipDtoForPopSave.lastupdatedby = _this.userDataDtoReturnSession.userId;
                    _this.hireSlipDtoForPopSave.companyid = _this.userDataDtoReturnSession.userId;
                }
                console.log(_this.hireSlipDtoForPopSave);
                _this.showSpinnerForAction = true;
                _this.hireslipService.addHireSlipsUnLoadRptDetails(_this.hireSlipDtoForPopSave).subscribe(function (response) {
                    _this.showSpinnerForAction = false;
                    console.log(response);
                    if (response.status == 'Success') {
                        $("#shortageArticle").val('');
                        sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                            title: "Success",
                            text: "Saved Successfully",
                            icon: "success",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                                title: "Print",
                                text: "Sure U Want to Print the Unloading Report ",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                                buttons: ["No", "Yes"],
                            }).then(function (print) {
                                if (print) {
                                    _this.customPrintForUnloading();
                                    window.open('/report/cashmemo-report/customDynamicPrintV1', '_blank');
                                }
                                else {
                                    _this.clearAllMethod();
                                }
                            });
                        });
                    }
                    else if (response.status == 'Cleared') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                            title: "Success",
                            text: "Successfully Cleared",
                            icon: "success",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        _this.clearAllMethod();
                    }
                    else if (response.status == 'NotExist') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                            title: "Error",
                            text: "Not Saved ",
                            icon: "error",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        //this.clearAllMethod();
                    }
                    else if (response.status == 'Failed') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
                            title: "Error",
                            text: "Failed To Save Or Clear ",
                            icon: "error",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                }), function (error) {
                    _this.showSpinnerForAction = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Error", "Server Problem Occurred While addHireSlipsUnLoadRptDetails  details", "info");
                }, function () { return console.log('done'); };
            }
        });
    };
    UnloadingSheetDetailsComponent.prototype.clearAll = function () {
        $("#lrCode").val('');
        $("#unloadinglrNumber").val('');
        $("#mention").val('');
        $("#shortageArticle").val('');
        $("#remark").val('');
        $("#unloadingStatus").val('Select Status');
        this.enteredLRNumber = '';
        this.selectedStatusType = '';
        this.enteredShortageArticle = '';
        this.enteredLrCode = '';
        this.hireslipDtoForGetLrMthd = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.lrDtoForGerLrMthd = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.showSpinnerForAction = false;
        this.lrdtsUnloadRptRet = '';
        this.hireslipDtoForLRdtsUnloadRptRet = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.actArticles = 0;
        this.getLrShortageForSingleLrRet = '';
        this.lrShortageForSingleLrRet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.mainLR = null;
        this.alreadyExiMaint = false;
        this.rowSelected = false;
        this.enteredRemarks = '';
        this.hireslipDtoForEdit = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.selectedRowIndex = '';
        this.countOfLr = 0;
        this.newAttribute = {};
        $("#unloadingTripDetailsId").DataTable().destroy();
        this.unloadingTripDetailsDataList = [];
        this.dtTriggerUnloadingTripDetails.next();
        this.modelDup = '';
        this.hireSlipDtoForPopSave = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.hireslipDtoForSave = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.articles = 0;
    };
    UnloadingSheetDetailsComponent.prototype.clearAllMethod = function () {
        $("#lrCode").val('');
        $("#unloadinglrNumber").val('');
        $("#mention").val('');
        $("#shortageArticle").val('');
        $("#remark").val('');
        $("#unloadingStatus").val('Select Status');
        this.enteredLRNumber = '';
        this.selectedStatusType = '';
        this.enteredShortageArticle = '';
        this.enteredLrCode = '';
        this.hireslipDtoForGetLrMthd = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.lrDtoForGerLrMthd = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.showSpinnerForAction = false;
        this.lrdtsUnloadRptRet = '';
        this.hireslipDtoForLRdtsUnloadRptRet = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.actArticles = 0;
        this.getLrShortageForSingleLrRet = '';
        this.lrShortageForSingleLrRet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.mainLR = null;
        this.alreadyExiMaint = false;
        this.rowSelected = false;
        this.enteredRemarks = '';
        this.hireslipDtoForEdit = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.selectedRowIndex = '';
        this.countOfLr = 0;
        this.newAttribute = {};
        $("#unloadingTripDetailsId").DataTable().destroy();
        this.unloadingTripDetailsDataList = [];
        this.dtTriggerUnloadingTripDetails.next();
        this.modelDup = '';
        this.hireSlipDtoForPopSave = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.hireslipDtoForSave = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.articles = 0;
        this.hireslipdtoForOnload = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.cashMemoDtoForCustomPrintDataList = [];
        this.cashMemoDtoForCustomPrintDataSummaryList = [];
    };
    UnloadingSheetDetailsComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    UnloadingSheetDetailsComponent.prototype.customPrintForUnloading = function () {
        var _this = this;
        localStorage.clear();
        this.cashMemoDtoForCustomPrintList = [];
        this.cashMemoDtoForCustomPrintListColumnNames = ["Status", "LR Number", "Actual Article", "Enter Article", "Remark", "Mention"];
        this.cashMemoDtoForCustomPrintListColumnWidths = [20, 20, 10, 10, 30, 10];
        for (var i = 0; i < this.cashMemoDtoForCustomPrintListColumnNames.length; i++) {
            this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
            this.cashMemoDtoForCustomPrint.columnName = this.cashMemoDtoForCustomPrintListColumnNames[i];
            this.cashMemoDtoForCustomPrint.columnWidth = this.cashMemoDtoForCustomPrintListColumnWidths[i];
            this.cashMemoDtoForCustomPrintList.push(this.cashMemoDtoForCustomPrint);
            console.log(this.cashMemoDtoForCustomPrintList);
        }
        this.cashMemoDtoForCustomPrintDataList = [];
        this.cashMemoDtoForCustomPrintDataSummaryList = [];
        this.selectedStatusType = $("#unloadingStatus").val();
        if (this.selectedStatusType != '' && this.selectedStatusType != null && this.selectedStatusType != 'OK') {
            for (var i = 0; i < this.unloadingTripDetailsDataList.length; i++) {
                console.log(this.unloadingTripDetailsDataList[i].lrNumber);
                this.cashMemoDtoForCustomPrintListColumnValues = [this.unloadingTripDetailsDataList[i].status, this.unloadingTripDetailsDataList[i].lrNumber,
                    this.unloadingTripDetailsDataList[i].totalArticles, this.unloadingTripDetailsDataList[i].type, this.unloadingTripDetailsDataList[i].remarks, this.unloadingTripDetailsDataList[i].mode];
                //////
                this.cashMemoDtoForCustomPrintData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
                this.cashMemoDtoForCustomPrintData.cashMemoDtoForCustomPrintListColumnValues = this.cashMemoDtoForCustomPrintListColumnValues;
                this.cashMemoDtoForCustomPrintDataList.push(this.cashMemoDtoForCustomPrintData);
            }
            this.cashMemoDtoForCustomPrintDataSummaryList = ["Total : " + this.unloadingTripDetailsDataList.length, "", "", "", "", ""];
        }
        else {
            this.cashMemoDtoForCustomPrintListColumnValues = ["OK", "NA", "NA", "NA", "NA", "NA"];
            //////
            this.cashMemoDtoForCustomPrintData = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
            this.cashMemoDtoForCustomPrintData.cashMemoDtoForCustomPrintListColumnValues = this.cashMemoDtoForCustomPrintListColumnValues;
            this.cashMemoDtoForCustomPrintDataList.push(this.cashMemoDtoForCustomPrintData);
            this.cashMemoDtoForCustomPrintDataSummaryList = ["Total : 1 ", "", "", "", "", ""];
        }
        ///Added for heading 
        //heading logics For Date
        this.todayDate = this.datePipe.transform(new Date(), "dd-MM-yyyy");
        this.cashMemoDtoForCustomPrintListHeadingV1 = [];
        this.cashMemoDtoForCustomPrintListHeadingNamesV1 = ["Truck Number ", "Invoice Number", "Driver", "Date"];
        this.cashMemoDtoForCustomPrintListHeadingValuesV1 = [this.invoicedtoForSearchOnLoadDetailsRet.vehicleNumber, this.invoicedtoForSearchOnLoadDetailsRet.hireSlipNumber, this.invoicedtoForSearchOnLoadDetailsRet.driverName, this.todayDate];
        for (var i = 0; i < this.cashMemoDtoForCustomPrintListHeadingNamesV1.length; i++) {
            this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
            this.cashMemoDtoForCustomPrint.printHeadingName = this.cashMemoDtoForCustomPrintListHeadingNamesV1[i];
            this.cashMemoDtoForCustomPrint.printHeadingValue = this.cashMemoDtoForCustomPrintListHeadingValuesV1[i];
            this.cashMemoDtoForCustomPrintListHeadingV1.push(this.cashMemoDtoForCustomPrint);
        }
        //Heading Logics For Heading
        this.cashMemoDtoForCustomPrintListHeadingV2 = [];
        this.cashMemoDtoForCustomPrintListHeadingNamesV2 = ["Supplier ", "Invoice Date", "Mobile Number"];
        this.cashMemoDtoForCustomPrintListHeadingValuesV2 = [this.invoicedtoForSearchOnLoadDetailsRet.supplierName, this.datePipe.transform(this.invoicedtoForSearchOnLoadDetailsRet.invoiceDate, "dd-MM-yyyy"), this.invoicedtoForSearchOnLoadDetailsRet.mobileNum];
        for (var i = 0; i < this.cashMemoDtoForCustomPrintListHeadingNamesV2.length; i++) {
            this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
            this.cashMemoDtoForCustomPrint.printHeadingName = this.cashMemoDtoForCustomPrintListHeadingNamesV2[i];
            this.cashMemoDtoForCustomPrint.printHeadingValue = this.cashMemoDtoForCustomPrintListHeadingValuesV2[i];
            this.cashMemoDtoForCustomPrintListHeadingV2.push(this.cashMemoDtoForCustomPrint);
        }
        localStorage.setItem('printTitle', "Unloadding Report");
        localStorage.setItem('printcashMemoDtoForCustomPrintListHeadingV1', JSON.stringify(this.cashMemoDtoForCustomPrintListHeadingV1));
        localStorage.setItem('printcashMemoDtoForCustomPrintListHeadingV2', JSON.stringify(this.cashMemoDtoForCustomPrintListHeadingV2));
        ///
        this.cashMemoDtoForCustomPrintListHeadingV3 = [];
        this.cashMemoDtoForCustomPrintListHeadingV4 = [];
        this.cashMemoDtoForCustomPrintListHeadingNamesV3 = ["Signature of Driver"];
        for (var i = 0; i < this.cashMemoDtoForCustomPrintListHeadingNamesV3.length; i++) {
            this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
            this.cashMemoDtoForCustomPrint.printHeadingName = this.cashMemoDtoForCustomPrintListHeadingNamesV3[i];
            this.cashMemoDtoForCustomPrintListHeadingV3.push(this.cashMemoDtoForCustomPrint);
        }
        this.cashMemoDtoForCustomPrintListHeadingNamesV4 = ["For SRD Logistics PVT.LTD."];
        for (var i = 0; i < this.cashMemoDtoForCustomPrintListHeadingNamesV4.length; i++) {
            this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
            this.cashMemoDtoForCustomPrint.printHeadingName = this.cashMemoDtoForCustomPrintListHeadingNamesV4[i];
            this.cashMemoDtoForCustomPrintListHeadingV4.push(this.cashMemoDtoForCustomPrint);
        }
        localStorage.setItem('printCashMemoDtoForCustomPrintList', JSON.stringify(this.cashMemoDtoForCustomPrintList));
        localStorage.setItem('printCashMemoDtoForCustomPrintDataList', JSON.stringify(this.cashMemoDtoForCustomPrintDataList));
        localStorage.setItem('printcashMemoDtoForCustomPrintDataSummaryList', JSON.stringify(this.cashMemoDtoForCustomPrintDataSummaryList));
        localStorage.setItem('printcashMemoDtoForCustomPrintListHeadingV3', JSON.stringify(this.cashMemoDtoForCustomPrintListHeadingV3));
        localStorage.setItem('printcashMemoDtoForCustomPrintListHeadingV4', JSON.stringify(this.cashMemoDtoForCustomPrintListHeadingV4));
        this.clearAllMethod();
        //this.viewCustomPrintV1 = true;
        window.addEventListener('afterprint', function (onclick) {
            if (_this.viewCustomPrintV1) {
                _this.viewCustomPrintV1 = false;
                localStorage.clear();
                _this.cashMemoDtoForCustomPrintListHeadingV2 = [];
                _this.cashMemoDtoForCustomPrint = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_6__["CashMemoDto"]();
                _this.cashMemoDtoForCustomPrintListHeadingV1 = [];
                _this.cashMemoDtoForCustomPrintList = [];
                _this.cashMemoDtoForCustomPrintDataList = [];
                _this.cashMemoDtoForCustomPrintDataSummaryList = [];
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], UnloadingSheetDetailsComponent.prototype, "dtElements", void 0);
    UnloadingSheetDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unloading-sheet-details',
            template: __webpack_require__(/*! ./unloading-sheet-details.component.html */ "./src/app/stock/transfer/unloading-sheet-details/unloading-sheet-details.component.html"),
            styles: [__webpack_require__(/*! ./unloading-sheet-details.component.css */ "./src/app/stock/transfer/unloading-sheet-details/unloading-sheet-details.component.css")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_11__["HireslipService"], src_app_dataService_lr_service__WEBPACK_IMPORTED_MODULE_12__["LrService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object])
    ], UnloadingSheetDetailsComponent);
    return UnloadingSheetDetailsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-stock-transfer-transfer-module.js.map