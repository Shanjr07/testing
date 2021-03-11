(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-dashboards-dashboard-module~src-app-stock-driver-driver-module"],{

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

/***/ "./src/app/stock/driver/barcode-scanning/barcode-scanning.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/stock/driver/barcode-scanning/barcode-scanning.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p_custom {\n\tpadding: 1px 4px;\n}\n@media print {\n\tbody, html * {\n\t\tvisibility: hidden;\n\t}\n\t#showRewardingRpt, #showRewardingRpt * {\n\t\tvisibility: hidden;\n\t}\n\t#printRewardingVoucher {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2svZHJpdmVyL2JhcmNvZGUtc2Nhbm5pbmcvYmFyY29kZS1zY2FubmluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLE9BQU87RUFDUDtDQUNEIiwiZmlsZSI6InNyYy9hcHAvc3RvY2svZHJpdmVyL2JhcmNvZGUtc2Nhbm5pbmcvYmFyY29kZS1zY2FubmluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBfY3VzdG9tIHtcblx0cGFkZGluZzogMXB4IDRweDtcbn1cbkBtZWRpYSBwcmludCB7XG5cdGJvZHksIGh0bWwgKiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCNzaG93UmV3YXJkaW5nUnB0LCAjc2hvd1Jld2FyZGluZ1JwdCAqIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I3ByaW50UmV3YXJkaW5nVm91Y2hlciB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0dG9wOiAwO1xuXHR9XG59Il19 */"

/***/ }),

/***/ "./src/app/stock/driver/barcode-scanning/barcode-scanning.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/stock/driver/barcode-scanning/barcode-scanning.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Barcode Scanning</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!viewMessageOfBarcodeScanning\">\n\t\t\t\t\t\t\t\t\t\t<h6 id=\"barCodeScanMessage\"></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Scanning Code</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputFieldBarcodeScanning\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tonPaste=\"return true\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"getBarcodeScanningDetails($event);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!viewAlreadyReward\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"cstm_efftect\" id=\"isAlreadyRewardedHeadingId\">\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>-->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</body>"

/***/ }),

/***/ "./src/app/stock/driver/barcode-scanning/barcode-scanning.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/stock/driver/barcode-scanning/barcode-scanning.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BarcodeScanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScanningComponent", function() { return BarcodeScanningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/memo-service */ "./src/app/dataService/memo-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
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









var BarcodeScanningComponent = /** @class */ (function () {
    function BarcodeScanningComponent(masterReadService, http, router, datePipe, modalService, memoService, hireslipService) {
        var _this = this;
        this.masterReadService = masterReadService;
        this.http = http;
        this.router = router;
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.memoService = memoService;
        this.hireslipService = hireslipService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.isLoggedIn = true;
        this.enteredBarCodeScanningNo = null;
        this.enteredArrivatDate = null;
        this.enteredArrivatTime = null;
        this.hireslipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.viewMessageOfBarcodeScanning = false;
        this.showSpinnerForAction = false;
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
        }
    }
    BarcodeScanningComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    BarcodeScanningComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    BarcodeScanningComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    BarcodeScanningComponent.prototype.ngOnInit = function () {
    };
    BarcodeScanningComponent.prototype.getBarcodeScanningDetails = function (event) {
        var _this = this;
        this.viewMessageOfBarcodeScanning = false;
        $("#spanBarCodeScanMessage").text('');
        //console.log(event);
        this.enteredBarCodeScanningNo = $("#inputFieldBarcodeScanning").val();
        this.enteredArrivatDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format("YYYY-MM-DD");
        this.enteredArrivatTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format("HH:mm");
        //console.log(this.enteredBarCodeScanningNo);
        //console.log(this.enteredArrivatDate);
        //console.log(this.enteredArrivatTime);
        this.hireslipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_8__["HireSlipDto"]();
        this.hireslipDto.hireslipnumber = this.enteredBarCodeScanningNo;
        this.hireslipDto.branch = this.userDataDtoReturnSession.office;
        this.hireslipDto.arrivaldate = this.enteredArrivatDate;
        this.hireslipDto.arrivalTime = this.enteredArrivatTime;
        this.hireslipDto.status = "Scanned";
        this.hireslipDto.lastupdatedby = this.userDataDtoReturnSession.userId;
        this.hireslipDto.barcodeValue = this.enteredBarCodeScanningNo;
        this.hireslipDto.companyid = this.userDataDtoReturnSession.companyId;
        //console.log(this.hireslipDto);
        this.showSpinnerForAction = true;
        this.hireslipService.scanCodeApi(this.hireslipDto).subscribe(function (response) {
            //console.log(response);
            if (response.status == "alreadyScaned") {
                _this.viewMessageOfBarcodeScanning = true;
                $("#barCodeScanMessage").css({ "color": "black", "text-align": "center" });
                $("#barCodeScanMessage").text('Already Scanned This Invoice');
                setTimeout(function () {
                    $("#barCodeScanMessage").text('');
                    this.viewMessageOfBarcodeScanning = false;
                }, 5000);
            }
            else if (response.status == "Failed") {
                _this.viewMessageOfBarcodeScanning = true;
                $("#barCodeScanMessage").text('Fail To Scan');
                $("#barCodeScanMessage").css({ "color": "red", "text-align": "center" });
                setTimeout(function () {
                    $("#barCodeScanMessage").text('');
                    this.viewMessageOfBarcodeScanning = false;
                }, 5000);
            }
            else if (response.status == "Sucess") {
                _this.viewMessageOfBarcodeScanning = true;
                $("#barCodeScanMessage").text('SucessFully Scanned');
                $("#barCodeScanMessage").css({ "color": "green", "text-align": "center" });
                setTimeout(function () {
                    $("#barCodeScanMessage").text('');
                    this.viewMessageOfBarcodeScanning = false;
                }, 5000);
            }
            else if (response.status == "NotExist") {
                _this.viewMessageOfBarcodeScanning = true;
                $("#barCodeScanMessage").text('Not Exist this  Scanned');
                $("#barCodeScanMessage").css({ "color": "black", "text-align": "center" });
                setTimeout(function () {
                    $("#barCodeScanMessage").text('');
                    this.viewMessageOfBarcodeScanning = false;
                }, 5000);
            }
            $("#inputFieldBarcodeScanning").val('');
            $("#inputFieldBarcodeScanning").focus();
            _this.showSpinnerForAction = false;
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Server Error", "Problem occur while getting  Scan Code Api", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    BarcodeScanningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barcode-scanning',
            template: __webpack_require__(/*! ./barcode-scanning.component.html */ "./src/app/stock/driver/barcode-scanning/barcode-scanning.component.html"),
            styles: [__webpack_require__(/*! ./barcode-scanning.component.css */ "./src/app/stock/driver/barcode-scanning/barcode-scanning.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__["MasterReadService"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_2__["MemoService"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_9__["HireslipService"]])
    ], BarcodeScanningComponent);
    return BarcodeScanningComponent;
}());



/***/ }),

/***/ "./src/app/stock/driver/driver.module.ts":
/*!***********************************************!*\
  !*** ./src/app/stock/driver/driver.module.ts ***!
  \***********************************************/
/*! exports provided: DriverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverModule", function() { return DriverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/autocomplete/autocomplete.module */ "./src/app/autocomplete/autocomplete.module.ts");
/* harmony import */ var src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/report/daily-report/daily-report.module */ "./src/app/report/daily-report/daily-report.module.ts");
/* harmony import */ var src_app_stock_driver_driver_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/stock/driver/driver.routing */ "./src/app/stock/driver/driver.routing.ts");
/* harmony import */ var src_app_stock_driver_rewarding_rewarding_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/stock/driver/rewarding/rewarding.component */ "./src/app/stock/driver/rewarding/rewarding.component.ts");
/* harmony import */ var src_app_stock_driver_rewarding_voucher_rpt_print_rewarding_voucher_rpt_print_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/stock/driver/rewarding-voucher-rpt-print/rewarding-voucher-rpt-print.component */ "./src/app/stock/driver/rewarding-voucher-rpt-print/rewarding-voucher-rpt-print.component.ts");
/* harmony import */ var src_app_stock_driver_barcode_scanning_barcode_scanning_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/stock/driver/barcode-scanning/barcode-scanning.component */ "./src/app/stock/driver/barcode-scanning/barcode-scanning.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//for select option search starts




//for select option search ends






var DriverModule = /** @class */ (function () {
    function DriverModule() {
    }
    DriverModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_stock_driver_driver_routing__WEBPACK_IMPORTED_MODULE_9__["DriverRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_7__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_8__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"]],
            declarations: [
                src_app_stock_driver_rewarding_rewarding_component__WEBPACK_IMPORTED_MODULE_10__["RewardingComponent"],
                src_app_stock_driver_rewarding_voucher_rpt_print_rewarding_voucher_rpt_print_component__WEBPACK_IMPORTED_MODULE_11__["RewardingVoucherReportPrintComponent"], src_app_stock_driver_barcode_scanning_barcode_scanning_component__WEBPACK_IMPORTED_MODULE_12__["BarcodeScanningComponent"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
            ],
            exports: [src_app_stock_driver_barcode_scanning_barcode_scanning_component__WEBPACK_IMPORTED_MODULE_12__["BarcodeScanningComponent"]]
        })
    ], DriverModule);
    return DriverModule;
}());



/***/ }),

/***/ "./src/app/stock/driver/driver.routing.ts":
/*!************************************************!*\
  !*** ./src/app/stock/driver/driver.routing.ts ***!
  \************************************************/
/*! exports provided: DriverRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverRoutes", function() { return DriverRoutes; });
/* harmony import */ var src_app_stock_driver_rewarding_rewarding_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/stock/driver/rewarding/rewarding.component */ "./src/app/stock/driver/rewarding/rewarding.component.ts");

var DriverRoutes = [
    {
        path: '',
        children: [
            {
                path: 'rewarding',
                component: src_app_stock_driver_rewarding_rewarding_component__WEBPACK_IMPORTED_MODULE_0__["RewardingComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/stock/driver/rewarding-voucher-rpt-print/rewarding-voucher-rpt-print.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/stock/driver/rewarding-voucher-rpt-print/rewarding-voucher-rpt-print.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txt_ac {\n\ttext-align: center;\n}\n\n.dsply-ib {\n\tdisplay: inline-block;\n}\n\nh6, h5, h4, h3, h2, h1, p, .custome {\n\tfont-size: 13.3px;\n\tmargin: 1px;\n\tpadding: 1px;\n\tpadding-top: 3px;\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n\n.fontS_15 {\n\tfont-size: 16px;\n\tmargin: 0px;\n}\n\n.fontS_13 {\n\tfont-size: 14px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.fontS_12 {\n\tfont-size: 13px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.font_bold{\nfont-weight:900;\n}\n\n.border {\n\tborder: 1px solid #000 !important;\n\tborder-collapse: collapse;\n\tpadding: 0px;\n}\n\n.dsplyNone {\n\tdisplay: none;\n}\n\n.border_right {\n\tborder-right: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n.border_left {\n\tborder-left: 1px solid #000;\n\tborder-collapse: collapse;\n\tmargin-left: -1px;\n}\n\n.border_bottom {\n\tborder-bottom: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n.border_top {\n\tborder-top: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n@media print {\n\tbody * {\n\t\tvisibility: hidden;\n\t}\n\t#sidebarnav {\n\t\tvisibility: hidden;\n\t}\n\t#section_to_print, #section_to_print * {\n\t\tvisibility: visible;\n\t}\n\t\n\t .modal-basic-title{\n visibility: hidden;\n }\n #closePopupBtn{\n visibility: hidden;\n }\n}\n\n#left, #right, div:empty {\n\tmin-height: 19px;\n}\n\n#left, div:empty {\n\tmin-height: 22px;\n}\n\n/* #left, #right, div!:empty { */\n\n/* \tmargin-top: -15px; */\n\n/* } */\n\n.sidebar-nav ul .sidebar-item {\n\tdisplay: none;\n}\n\n/* print changes */\n\n.container {\n\tmax-width: 97%;\n}\n\n@media ( min-width : 768px) {\n\t#main-wrapper[data-layout=\"horizontal\"] .sidebar-nav #sidebarnav {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tdisplay: none;\n\t}\n}\n\n@media ( min-width : 768px) {\n\t.col-md-3, .col-md-9 {\n\t\tpadding-left: 7px !important;\n\t}\n}\n\nhr {\n\tborder: .5px solid black;\n\twidth: 100%;\n\tmargin-left: 7px !important;\n\tmargin: 0px;\n}\n\n@media print {\n\tbody * {\n\t\tvisibility: hidden;\n\t}\n\t#sidebarnav {\n\t\tvisibility: hidden;\n\t}\n\t#firstPrint, #firstPrint * {\n\t\tvisibility: visible;\n\t}\n/* \t.page-break { display:block; page-break-before:always; }  */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2svZHJpdmVyL3Jld2FyZGluZy12b3VjaGVyLXJwdC1wcmludC9yZXdhcmRpbmctdm91Y2hlci1ycHQtcHJpbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQiwwQ0FBMEM7Q0FDMUM7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1o7O0FBR0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7Q0FDWjs7QUFDRDtBQUNBLGdCQUFnQjtDQUNmOztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2I7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FDbEI7O0FBRUQ7Q0FDQyw4QkFBOEI7Q0FDOUIsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsMkJBQTJCO0NBQzNCLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG9CQUFvQjtFQUNwQjs7RUFFQTtDQUNELG1CQUFtQjtFQUNsQjtDQUNEO0NBQ0EsbUJBQW1CO0VBQ2xCO0NBQ0Q7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBRUQsaUNBQWlDOztBQUNqQyx5QkFBeUI7O0FBQ3pCLE9BQU87O0FBSVA7Q0FDQyxjQUFjO0NBQ2Q7O0FBQ0QsbUJBQW1COztBQUNuQjtDQUNDLGVBQWU7Q0FDZjs7QUFFRDtDQUNDO0VBQ0MsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2Q7Q0FDRDs7QUFFRDtDQUNDO0VBQ0MsNkJBQTZCO0VBQzdCO0NBQ0Q7O0FBRUQ7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLDRCQUE0QjtDQUM1QixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxvQkFBb0I7RUFDcEI7QUFDRixnRUFBZ0U7Q0FDL0QiLCJmaWxlIjoic3JjL2FwcC9zdG9jay9kcml2ZXIvcmV3YXJkaW5nLXZvdWNoZXItcnB0LXByaW50L3Jld2FyZGluZy12b3VjaGVyLXJwdC1wcmludC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR4dF9hYyB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRzcGx5LWliIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5oNiwgaDUsIGg0LCBoMywgaDIsIGgxLCBwLCAuY3VzdG9tZSB7XG5cdGZvbnQtc2l6ZTogMTMuM3B4O1xuXHRtYXJnaW46IDFweDtcblx0cGFkZGluZzogMXB4O1xuXHRwYWRkaW5nLXRvcDogM3B4O1xuXHRmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmZvbnRTXzE1IHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRtYXJnaW46IDBweDtcbn1cblxuLmZvbnRTXzEzIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4XG59XG5cblxuLmZvbnRTXzEyIHtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4XG59XG4uZm9udF9ib2xke1xuZm9udC13ZWlnaHQ6OTAwO1xufVxuLmJvcmRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0cGFkZGluZzogMHB4O1xufVxuXG4uZHNwbHlOb25lIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLmJvcmRlcl9yaWdodCB7XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5ib3JkZXJfbGVmdCB7XG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0bWFyZ2luLWxlZnQ6IC0xcHg7XG59XG5cbi5ib3JkZXJfYm90dG9tIHtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5ib3JkZXJfdG9wIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbkBtZWRpYSBwcmludCB7XG5cdGJvZHkgKiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCNzaWRlYmFybmF2IHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I3NlY3Rpb25fdG9fcHJpbnQsICNzZWN0aW9uX3RvX3ByaW50ICoge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdH1cblx0XG5cdCAubW9kYWwtYmFzaWMtdGl0bGV7XG4gdmlzaWJpbGl0eTogaGlkZGVuO1xuIH1cbiAjY2xvc2VQb3B1cEJ0bntcbiB2aXNpYmlsaXR5OiBoaWRkZW47XG4gfVxufVxuXG4jbGVmdCwgI3JpZ2h0LCBkaXY6ZW1wdHkge1xuXHRtaW4taGVpZ2h0OiAxOXB4O1xufVxuXG4jbGVmdCwgZGl2OmVtcHR5IHtcblx0bWluLWhlaWdodDogMjJweDtcbn1cblxuLyogI2xlZnQsICNyaWdodCwgZGl2ITplbXB0eSB7ICovXG4vKiBcdG1hcmdpbi10b3A6IC0xNXB4OyAqL1xuLyogfSAqL1xuXG5cblxuLnNpZGViYXItbmF2IHVsIC5zaWRlYmFyLWl0ZW0ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuLyogcHJpbnQgY2hhbmdlcyAqL1xuLmNvbnRhaW5lciB7XG5cdG1heC13aWR0aDogOTclO1xufVxuXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjhweCkge1xuXHQjbWFpbi13cmFwcGVyW2RhdGEtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXSAuc2lkZWJhci1uYXYgI3NpZGViYXJuYXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjhweCkge1xuXHQuY29sLW1kLTMsIC5jb2wtbWQtOSB7XG5cdFx0cGFkZGluZy1sZWZ0OiA3cHggIWltcG9ydGFudDtcblx0fVxufVxuXG5ociB7XG5cdGJvcmRlcjogLjVweCBzb2xpZCBibGFjaztcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi1sZWZ0OiA3cHggIWltcG9ydGFudDtcblx0bWFyZ2luOiAwcHg7XG59XG5cbkBtZWRpYSBwcmludCB7XG5cdGJvZHkgKiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCNzaWRlYmFybmF2IHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I2ZpcnN0UHJpbnQsICNmaXJzdFByaW50ICoge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdH1cbi8qIFx0LnBhZ2UtYnJlYWsgeyBkaXNwbGF5OmJsb2NrOyBwYWdlLWJyZWFrLWJlZm9yZTphbHdheXM7IH0gICovXG59Il19 */"

/***/ }),

/***/ "./src/app/stock/driver/rewarding-voucher-rpt-print/rewarding-voucher-rpt-print.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/stock/driver/rewarding-voucher-rpt-print/rewarding-voucher-rpt-print.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page row system_responsive\" id=\"firstPrint\">\n\t<div class=\"col-md-12\">\n\t\t<!--first row starts-->\n\t\t<div class=\"row\" style=\"padding-top: 5px;\" height='30px'>\n\t\t\t<div class=\"col-md-7\">\n\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t</div>\n\t\t\t<div class=\"col-md-5\">\n\t\t\t\t<h6>\n\t\t\t\t\t{{address}}<br>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--first row starts-->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6 style='margin-left: 20px; font-size: 20px;' align='center'>\n\t\t\t\t\t<u><strong>Payment Voucher</strong></u>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<h6 style='margin-left: 20px; font-size: 16px; padding-top: 30px;'>\n\t\t\t\t\t<strong>Reward To </strong> <span>{{rewardTo}}\n\t\t\t\t\t\t- </span><strong>Lorry A/c</strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-5\" align='right'>\n\t\t\t\t<h6 style='margin-right: 20px; font-size: 16px; padding-top: 30px;'>\n\t\t\t\t\t<strong>Date : </strong> <span>{{dateInDate}}</span>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<h6 style='margin-left: 20px; font-size: 16px; padding-top: 30px;'>\n\t\t\t\t\t<strong>Hireslip Number</strong> <span> :&nbsp;{{hireslipNumber}}</span>\n\t\t\t\t</h6>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-5\" align='right'>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Second  row starts-->\n\t\t<div class=\"container border\">\n\t\t\t<div>\n\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1' style='table-layout: fixed;'>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<h6 style='font-size: 17px; border-bottom: 1px solid #000;' align='center'>\n\t\t\t\t\t\t\t\t<strong>PARTICULARS </strong>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<table width='100%' border='0' cellspacing='0' cellpadding='1' style='table-layout: fixed;'\n\t\t\t\t\t\theight='180px;'>\n\t\t\t\t\t\t<div class=\"row\"\n\t\t\t\t\t\t\tstyle='border-bottom: 1px solid #000; flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<h6 style='font-size: 17px;' align='center'>\n\t\t\t\t\t\t\t\t\t<strong>Invoice Details</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<h6 style='font-size: 17px;' align='center'>\n\t\t\t\t\t\t\t\t\t<strong>Bank Details </strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 17px;' align='center'>\n\t\t\t\t\t\t\t\t\t<strong>Lorry Details </strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\" style='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Invoice No </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<span style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t:&nbsp;{{invoiceNumber}}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Supplier Name </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<span style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t:&nbsp;{{supplierName}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Departure Date</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t\t<span style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t:&nbsp;{{departureDate}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\" style='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Invoice Date</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<span style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t:&nbsp;{{invoicedate}}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Lorry Number</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<span style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t:&nbsp;{{lorryNo}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Departure Time</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t\t<span style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t:&nbsp;{{departureTime}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\" style='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Hire Amount</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<span style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t:&nbsp;{{hireAmt}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong> Arrival Date</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t\t<span style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t:&nbsp;{{arrivalDate}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\" style='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong> </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Arrival Time&nbsp;</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t\t<span style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t:&nbsp;{{arrivalTime}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\" style='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong> </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Time Taken To Reach\n\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t\t<span style='font-size: 15px; word-wrap: break-word;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t:&nbsp;{{timeTakenToReach}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\" style='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong> </strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;'>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\"\n\t\t\t\t\t\t\tstyle='border-top: 1px solid #000; flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-12\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\t<span>LORRY DRIVER&nbsp;<u><b>{{drivername}}</b></u>&nbsp; HAS BEEN REWARDED\n\t\t\t\t\t\t\t\t\t\t\t\tOF RS&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t<u><b>{{rewardAmt}}</b></u>&nbsp;</span>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\" style='flex-wrap: wrap; margin-right: -1px; margin-left: -1px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-12\" style='border-right: 1px solid #000;'>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 style='font-size: 15px;' align='left'>\n\t\t\t\t\t\t\t\t\t\t\tAMOUNT IN WORDS&nbsp;:&nbsp;{{printAmt}}\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</table>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6 style='font-size: 15px; margin-left: 20px;'>\n\t\t\t\t\t<strong></strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6>\n\t\t\t\t\t<strong></strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h6>\n\t\t\t\t\t<strong></strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<h6 style='font-size: 16px; padding-top: 22px;'>\n\t\t\t\t\t<strong>Approved By :</strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"col-md-6\" align='right'>\n\t\t\t\t<h6 style='font-size: 16px; padding-top: 22px;'>\n\t\t\t\t\t<strong> Receiver's Signature&nbsp;&nbsp;&nbsp;&nbsp;</strong>\n\t\t\t\t</h6>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/stock/driver/rewarding-voucher-rpt-print/rewarding-voucher-rpt-print.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/stock/driver/rewarding-voucher-rpt-print/rewarding-voucher-rpt-print.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: RewardingVoucherReportPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardingVoucherReportPrintComponent", function() { return RewardingVoucherReportPrintComponent; });
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





var RewardingVoucherReportPrintComponent = /** @class */ (function () {
    function RewardingVoucherReportPrintComponent(router, datePipe) {
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
            this.dataForhireSlipLocalStorageRpt = JSON.parse(localStorage.getItem('rewardingVoucherPrint'));
            console.log(this.dataForhireSlipLocalStorageRpt);
            if (this.dataForhireSlipLocalStorageRpt != null) {
                this.hireslipdataForPrint = this.dataForhireSlipLocalStorageRpt;
            }
            this.todayDate = this.datePipe.transform(new Date(), "dd-MM-yyyy");
            this.image = this.userDataDtoReturnSession.ip;
            console.log(this.hireslipdataForPrint);
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
    RewardingVoucherReportPrintComponent.prototype.ngOnInit = function () {
    };
    RewardingVoucherReportPrintComponent.prototype.validatBeforePrint = function () {
        this.address = this.userDataDtoReturnSession.addressId == null ? ' ' : this.userDataDtoReturnSession.addressId;
        this.hireslipNumber = this.hireslipdataForPrint.hireslipnumber == null ? ' ' : this.hireslipdataForPrint.hireslipnumber;
        this.invoiceNumber = this.hireslipdataForPrint.hireslipnumber == null ? ' ' : this.hireslipdataForPrint.hireslipnumber;
        this.supplierName = this.hireslipdataForPrint.vehiCompName == null ? ' ' : this.hireslipdataForPrint.vehiCompName;
        this.lorryNo = this.hireslipdataForPrint.vehicleNumber == null ? ' ' : this.hireslipdataForPrint.vehicleNumber;
        this.hireAmt = this.hireslipdataForPrint.totalhire == null ? ' ' : this.hireslipdataForPrint.totalhire;
        if (this.hireslipdataForPrint.hireslipdate != null) {
            this.invoicedate = this.datePipe.transform(this.hireslipdataForPrint.hireslipdate, "dd-MM-yyyy");
        }
        else {
            this.invoicedate = '';
        }
        if (this.hireslipdataForPrint.departuredate != null) {
            this.departureDate = this.datePipe.transform(this.hireslipdataForPrint.departuredate, "dd-MM-yyyy");
        }
        else {
            this.departureDate = '';
        }
        this.departureTime = this.hireslipdataForPrint.departureTime == null ? ' ' : this.hireslipdataForPrint.departureTime;
        if (this.hireslipdataForPrint.arrivaldate != null) {
            this.arrivalDate = this.datePipe.transform(this.hireslipdataForPrint.arrivaldate, "dd-MM-yyyy");
        }
        else {
            this.arrivalDate = '';
        }
        this.arrivalTime = this.hireslipdataForPrint.arrivalTime == null ? ' ' : this.hireslipdataForPrint.arrivalTime;
        this.timeTakenToReach = this.hireslipdataForPrint.column3 == null ? ' ' : this.hireslipdataForPrint.column3;
        this.rewardAmt = this.hireslipdataForPrint.driverrewardingAmt == null ? ' ' : this.hireslipdataForPrint.driverrewardingAmt;
        this.drivername = this.hireslipdataForPrint.drivername == null ? ' ' : this.hireslipdataForPrint.drivername;
        this.rewardTo = this.hireslipdataForPrint.fromstation == null ? ' ' : this.hireslipdataForPrint.fromstation;
        this.dateInDate = this.datePipe.transform(this.hireslipdataForPrint.fromDateInDate, "dd-MM-yyyy");
        if (this.rewardAmt == 0 || this.rewardAmt == 0.0) {
            this.printAmt = "ZERO";
        }
        else {
            this.printAmt = this.inWords();
        }
    };
    RewardingVoucherReportPrintComponent.prototype.inWords = function () {
        var a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ',
            'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ',
            'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ',
            'Seventeen ', 'Eighteen ', 'Nineteen '];
        var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty',
            'Seventy', 'Eighty', 'Ninety'];
        this.num = this.rewardAmt;
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
    RewardingVoucherReportPrintComponent.prototype.clearField = function () {
        this.address = '';
        this.invoiceNumber = '';
        this.hireslipNumber = '';
        this.supplierName = '';
        this.drivername = '';
        this.lorryNo = '';
        this.invoicedate = '';
        this.rewardAmt = 0.0;
        this.printAmt = '';
    };
    RewardingVoucherReportPrintComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    RewardingVoucherReportPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rewarding-voucher-rpt-print',
            template: __webpack_require__(/*! ./rewarding-voucher-rpt-print.component.html */ "./src/app/stock/driver/rewarding-voucher-rpt-print/rewarding-voucher-rpt-print.component.html"),
            styles: [__webpack_require__(/*! ./rewarding-voucher-rpt-print.component.css */ "./src/app/stock/driver/rewarding-voucher-rpt-print/rewarding-voucher-rpt-print.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], RewardingVoucherReportPrintComponent);
    return RewardingVoucherReportPrintComponent;
}());



/***/ }),

/***/ "./src/app/stock/driver/rewarding/rewarding.component.css":
/*!****************************************************************!*\
  !*** ./src/app/stock/driver/rewarding/rewarding.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p_custom {\n\tpadding: 1px 4px;\n}\n@media print {\n\tbody, html * {\n\t\tvisibility: hidden;\n\t}\n\t#showRewardingRpt, #showRewardingRpt * {\n\t\tvisibility: hidden;\n\t}\n\t#printRewardingVoucher {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2svZHJpdmVyL3Jld2FyZGluZy9yZXdhcmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtDQUNqQjtBQUNEO0NBQ0M7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixPQUFPO0VBQ1A7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL2RyaXZlci9yZXdhcmRpbmcvcmV3YXJkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucF9jdXN0b20ge1xuXHRwYWRkaW5nOiAxcHggNHB4O1xufVxuQG1lZGlhIHByaW50IHtcblx0Ym9keSwgaHRtbCAqIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I3Nob3dSZXdhcmRpbmdScHQsICNzaG93UmV3YXJkaW5nUnB0ICoge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0fVxuXHQjcHJpbnRSZXdhcmRpbmdWb3VjaGVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHR0b3A6IDA7XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/stock/driver/rewarding/rewarding.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/stock/driver/rewarding/rewarding.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\t<!-- Row -->\n\t<div class=\"row\" id=\"showRewardingRpt\" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Rewarding</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 15px;\">Please\n\t\t\t\t\t\t\t\t\tWait Loading....</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\" [hidden]=\"!viewScanCodeField\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Scan Code</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"scanCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tonPaste=\"return false\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"getScanCodeFieldsDetails($event,rewardingPopUpTemplate);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!--[hidden]=\"!viewScanCodeField\"-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"p_custom btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"getScanCodeBtn\" [hidden]=\"!viewScanCodeBtn\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"getScanDetailsClickBtn(rewardingPopUpTemplate);\">Scan</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" [hidden]=\"!viewAlreadyReward\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"cstm_efftect\" id=\"isAlreadyRewardedHeadingId\">\n\t\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- <i class=\"fas fa-clipboard-list\"></i><div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Scan Code</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"scanCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"getScanCodeFieldsDetails($event);\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"p_custom btn btn-success m-r-10\" id=\"getScanCodeBtn\"\n\t\t\t\t\t\t\t\t\t\t[hidden]=\"!viewScanCodeBtn\">Scan</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>-->\n\t\t\t\t<hr style=\"margin: 0px;\">\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Trip Details</h6>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Hireslip Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"hireslipNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyHireslipNo\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Date</label> <input id=\"invoiceDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"invoiceDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #invoiceDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"invoiceDatesModal\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyInvoiceDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"invoiceDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"source\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlySource\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyDestination\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Hire Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"hireAmount\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyHireAmount\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <hr> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Driver Details</h6>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"vehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyVehicleNumber\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Supplier Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"supplierName\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadonlySupplierName\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"driverName\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadonlyDriverName\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Mobile Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"mobileNumber\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" [readonly]=\"isReadonlyMobileNumber\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>License Number </label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"licenseNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyLicenseNumber\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Time Details</h6>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Date</label> <input id=\"departureDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"departureDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #departureDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"departureDatesModal\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyDepartureDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"departureDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"time\" class=\"form-control \" id=\"departureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyDepartureTime\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" id=\"departureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Departure Time\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" [readonly]=\"isReadonlyDepartureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(departureTimeOptions | filter: control.value) as resultDepartureTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDepartureTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\" *ngIf=\"!resultDepartureTime.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" id=\"scheduledDates\" name=\"scheduledDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #scheduledDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"scheduledDatesModal\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyScheduledDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"scheduledDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"time\" class=\"form-control \" id=\"scheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyScheduledTime\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\" id=\"scheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Scheduled Time\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(scheduledTimeOptions | filter: control.value) as resultScheduledTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultScheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option class=\"no-result\" *ngIf=\"!resultScheduledTime.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" id=\"arrivalDates\" name=\"arrivalDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #arrivalDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"arrivalDatesModal\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyArrivalDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"arrivalDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"time\" class=\"form-control \" id=\"arrivalTime\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyArrivalTime\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 vl\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<!-- </div>style=\"background-color:#f2f9fb;\"> -->\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Time Calculation</h6>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Preferred Duration(Hrs)</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"preferredDuration\" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyPreferredDuration\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Buffer Time(Hrs)</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control \" id=\"bufferTime\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" [readonly]=\"isReadonlyBufferTime\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Time Taken To Reached(Hrs)</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i class=\"fas fa-clock\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"timeTakenToReached\"\n\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyTimeTakenToReached\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \">\n\t\t\t\t\t\t\t\t\t\t\t<label>Reward Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i class=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"rewardAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\tautocomplete=\"off\" aria-describedby=\"basic-addon11 \"\n\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadonlyRewardAmount\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"confirmPaymentBtn\"\n\t\t\t\t\t\t\t[hidden]=\"!viewConfirmPaymentBtn\" (click)=\"confirmPaymentClickBtn();\">Confirm\n\t\t\t\t\t\t\tPayment</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"printBtn\" [hidden]=\"!viewPrintBtn\"\n\t\t\t\t\t\t\t(click)=\"printClickBtn();\">Print</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"viewRewardingVoucher \" onafterprint=\"afterPrint()\" id=\"printRewardingVoucher\">\n\t\t<app-rewarding-voucher-rpt-print></app-rewarding-voucher-rpt-print>\n\t</div>\n\n\t<!--POP UP START HERE-->\n\t<div class=\"col-md-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<ng-template #rewardingPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<h5>Option :</h5>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Exclude Sunday</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxWithExcludeSundayYes\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"excludeSundayYesCheckBoxEvent($event);\"><label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxWithExcludeSundayYes\">Yes</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxWithExcludeSundayNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"excludeSundayNoCheckBoxEvent($event);\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxWithExcludeSundayNo\">No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"excludeSundayYesId\"\n\t\t\t\t\t\t\t(click)=\"excludeSundayOkClickBtn();\">OK</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"cancelBtn\"\n\t\t\t\t\t\t\t(click)=\"excludeSundayCancelClickBtn();\">Cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--POP UP END HERE-->\n</body>"

/***/ }),

/***/ "./src/app/stock/driver/rewarding/rewarding.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/stock/driver/rewarding/rewarding.component.ts ***!
  \***************************************************************/
/*! exports provided: RewardingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardingComponent", function() { return RewardingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/memo-service */ "./src/app/dataService/memo-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
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










var RewardingComponent = /** @class */ (function () {
    //for the select option with filter ends
    function RewardingComponent(masterReadService, http, router, datePipe, modalService, memoService, hireslipService) {
        var _this = this;
        this.masterReadService = masterReadService;
        this.http = http;
        this.router = router;
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.memoService = memoService;
        this.hireslipService = hireslipService;
        //for datepicker ends
        this.loadingIndicator = true;
        this.departureTimeOptions = [
            { id: 1, label: '00:00' },
            { id: 2, label: '00:15' },
            { id: 3, label: '00:30' },
            { id: 4, label: '00:45' },
            { id: 5, label: '01:00' },
            { id: 6, label: '01:15' },
            { id: 7, label: '01:30' },
            { id: 8, label: '01:45' },
            { id: 9, label: '02:00' },
            { id: 10, label: '02:15' },
            { id: 11, label: '02:30' },
            { id: 12, label: '02:45' },
            { id: 13, label: '03:00' },
            { id: 14, label: '03:15' },
            { id: 15, label: '03:30' },
            { id: 16, label: '03:45' },
            { id: 17, label: '04:00' },
            { id: 18, label: '04:15' },
            { id: 19, label: '04:30' },
            { id: 20, label: '04:45' },
            { id: 21, label: '05:00' },
            { id: 22, label: '05:15' },
            { id: 23, label: '05:30' },
            { id: 24, label: '05:45' },
            { id: 25, label: '06:00' },
            { id: 26, label: '06:15' },
            { id: 27, label: '06:30' },
            { id: 28, label: '06:45' },
            { id: 29, label: '07:00' },
            { id: 30, label: '07:15' },
            { id: 31, label: '07:30' },
            { id: 32, label: '07:45' },
            { id: 33, label: '08:00' },
            { id: 34, label: '08:15' },
            { id: 35, label: '08:30' },
            { id: 36, label: '08:45' },
            { id: 37, label: '09:00' },
            { id: 38, label: '09:15' },
            { id: 39, label: '09:30' },
            { id: 40, label: '09:45' },
            { id: 41, label: '10:00' },
            { id: 42, label: '10:15' },
            { id: 43, label: '10:30' },
            { id: 44, label: '10:45' },
            { id: 45, label: '11:00' },
            { id: 46, label: '11:15' },
            { id: 47, label: '11:30' },
            { id: 48, label: '11:45' },
            { id: 49, label: '12:00' },
            { id: 50, label: '12:15' },
            { id: 51, label: '12:30' },
            { id: 52, label: '12:45' },
            { id: 53, label: '13:00' },
            { id: 54, label: '13:15' },
            { id: 55, label: '13:30' },
            { id: 56, label: '13:45' },
            { id: 57, label: '14:00' },
            { id: 58, label: '14:15' },
            { id: 59, label: '14:30' },
            { id: 60, label: '14:45' },
            { id: 61, label: '15:00' },
            { id: 62, label: '15:15' },
            { id: 63, label: '15:30' },
            { id: 64, label: '15:45' },
            { id: 65, label: '16:00' },
            { id: 66, label: '16:15' },
            { id: 67, label: '16:30' },
            { id: 68, label: '16:45' },
            { id: 69, label: '17:00' },
            { id: 70, label: '17:15' },
            { id: 71, label: '17:30' },
            { id: 72, label: '17:45' },
            { id: 73, label: '18:00' },
            { id: 74, label: '18:15' },
            { id: 75, label: '18:30' },
            { id: 76, label: '18:45' },
            { id: 77, label: '19:00' },
            { id: 78, label: '19:15' },
            { id: 79, label: '19:30' },
            { id: 80, label: '19:45' },
            { id: 81, label: '20:00' },
            { id: 82, label: '20:15' },
            { id: 83, label: '20:30' },
            { id: 84, label: '20:45' },
            { id: 85, label: '21:00' },
            { id: 86, label: '21:15' },
            { id: 87, label: '21:30' },
            { id: 88, label: '21:45' },
            { id: 89, label: '22:00' },
            { id: 90, label: '22:15' },
            { id: 91, label: '22:30' },
            { id: 92, label: '22:45' },
            { id: 93, label: '23:00' },
            { id: 94, label: '23:15' },
            { id: 95, label: '23:30' },
            { id: 96, label: '23:45' }
        ];
        this.scheduledTimeOptions = [
            { id: 1, label: '00:00' },
            { id: 2, label: '00:15' },
            { id: 3, label: '00:30' },
            { id: 4, label: '00:45' },
            { id: 5, label: '01:00' },
            { id: 6, label: '01:15' },
            { id: 7, label: '01:30' },
            { id: 8, label: '01:45' },
            { id: 9, label: '02:00' },
            { id: 10, label: '02:15' },
            { id: 11, label: '02:30' },
            { id: 12, label: '02:45' },
            { id: 13, label: '03:00' },
            { id: 14, label: '03:15' },
            { id: 15, label: '03:30' },
            { id: 16, label: '03:45' },
            { id: 17, label: '04:00' },
            { id: 18, label: '04:15' },
            { id: 19, label: '04:30' },
            { id: 20, label: '04:45' },
            { id: 21, label: '05:00' },
            { id: 22, label: '05:15' },
            { id: 23, label: '05:30' },
            { id: 24, label: '05:45' },
            { id: 25, label: '06:00' },
            { id: 26, label: '06:15' },
            { id: 27, label: '06:30' },
            { id: 28, label: '06:45' },
            { id: 29, label: '07:00' },
            { id: 30, label: '07:15' },
            { id: 31, label: '07:30' },
            { id: 32, label: '07:45' },
            { id: 33, label: '08:00' },
            { id: 34, label: '08:15' },
            { id: 35, label: '08:30' },
            { id: 36, label: '08:45' },
            { id: 37, label: '09:00' },
            { id: 38, label: '09:15' },
            { id: 39, label: '09:30' },
            { id: 40, label: '09:45' },
            { id: 41, label: '10:00' },
            { id: 42, label: '10:15' },
            { id: 43, label: '10:30' },
            { id: 44, label: '10:45' },
            { id: 45, label: '11:00' },
            { id: 46, label: '11:15' },
            { id: 47, label: '11:30' },
            { id: 48, label: '11:45' },
            { id: 49, label: '12:00' },
            { id: 50, label: '12:15' },
            { id: 51, label: '12:30' },
            { id: 52, label: '12:45' },
            { id: 53, label: '13:00' },
            { id: 54, label: '13:15' },
            { id: 55, label: '13:30' },
            { id: 56, label: '13:45' },
            { id: 57, label: '14:00' },
            { id: 58, label: '14:15' },
            { id: 59, label: '14:30' },
            { id: 60, label: '14:45' },
            { id: 61, label: '15:00' },
            { id: 62, label: '15:15' },
            { id: 63, label: '15:30' },
            { id: 64, label: '15:45' },
            { id: 65, label: '16:00' },
            { id: 66, label: '16:15' },
            { id: 67, label: '16:30' },
            { id: 68, label: '16:45' },
            { id: 69, label: '17:00' },
            { id: 70, label: '17:15' },
            { id: 71, label: '17:30' },
            { id: 72, label: '17:45' },
            { id: 73, label: '18:00' },
            { id: 74, label: '18:15' },
            { id: 75, label: '18:30' },
            { id: 76, label: '18:45' },
            { id: 77, label: '19:00' },
            { id: 78, label: '19:15' },
            { id: 79, label: '19:30' },
            { id: 80, label: '19:45' },
            { id: 81, label: '20:00' },
            { id: 82, label: '20:15' },
            { id: 83, label: '20:30' },
            { id: 84, label: '20:45' },
            { id: 85, label: '21:00' },
            { id: 86, label: '21:15' },
            { id: 87, label: '21:30' },
            { id: 88, label: '21:45' },
            { id: 89, label: '22:00' },
            { id: 90, label: '22:15' },
            { id: 91, label: '22:30' },
            { id: 92, label: '22:45' },
            { id: 93, label: '23:00' },
            { id: 94, label: '23:15' },
            { id: 95, label: '23:30' },
            { id: 96, label: '23:45' }
        ];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.isManualScanCode = false;
        this.viewScanCodeBtn = false;
        this.viewConfirmPaymentBtn = false;
        this.viewPrintBtn = false;
        this.viewAlreadyReward = false;
        this.viewScanCodeField = false;
        this.validateScanCodeHireslipNo = null;
        this.validateHireslipNo = null;
        this.invoiceDatesModal = null;
        this.departureDatesModal = null;
        this.scheduledDatesModal = null;
        this.arrivalDatesModal = null;
        this.isReadonlyHireslipNo = false;
        this.isReadonlyInvoiceDate = false;
        this.isReadonlySource = false;
        this.isReadonlyDestination = false;
        this.isReadonlyHireAmount = false;
        this.isReadonlyVehicleNumber = false;
        this.isReadonlySupplierName = false;
        this.isReadonlyDriverName = false;
        this.isReadonlyMobileNumber = false;
        this.isReadonlyLicenseNumber = false;
        this.isReadonlyDepartureDate = false;
        this.isReadonlyDepartureTime = false;
        this.isReadonlyScheduledDate = false;
        this.isReadonlyScheduledTime = false;
        this.isReadonlyArrivalDate = false;
        this.isReadonlyArrivalTime = false;
        this.isReadonlyPreferredDuration = false;
        this.isReadonlyBufferTime = false;
        this.isReadonlyTimeTakenToReached = false;
        this.isReadonlyRewardAmount = false;
        this.enteredHireSlipNumber = null;
        this.enteredDepartureDate = null;
        this.enteredDepartureTime = null;
        this.enteredArrivalDate = null;
        this.enteredArrivalTime = null;
        this.enteredForHireslipNumberPrint = null;
        this.enteredForInvoiceDatePrint = null;
        this.enteredForSourcePrint = null;
        this.enteredForDestinationPrint = null;
        this.enteredForHireAmountPrint = null;
        this.enteredForVehicleNumberPrint = null;
        this.enteredForSupplierNamePrint = null;
        this.enteredForDriverNamePrint = null;
        this.enteredForMobileNumberPrint = null;
        this.enteredForLicensePrint = null;
        this.enteredForDepartureDatePrint = null;
        this.enteredForDepartureTimePrint = null;
        this.enteredForScheduleDatePrint = null;
        this.enteredForScheduleTimePrint = null;
        this.enteredForArrivalDatePrint = null;
        this.enteredForArrivalTimePrint = null;
        this.enteredForPrefferedDurationPrint = null;
        this.enteredForBufferTimePrint = null;
        this.enteredForTimeTakenToReachedPrint = null;
        this.enteredForRewardAmountPrint = null;
        this.currentDate = null;
        this.hireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.hireSlipDtoForTimeDiff = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.hireSlipDtoForPrintAndConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.hireSlipDtoForPrint = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.hireSlipDtoForConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.hireSlipDtoReturn = null;
        this.viewRewardingVoucher = false;
        this.checkboxWithExcludeSundayYesNo = false;
        //rightsForRewardingPrintShow = "Rights To Show Only Rewarding Print For Selected Role";
        this.rightsForDeliveryManager = "Rights To Show Delivery Manager";
        this.rightsForBillingManager = "Rights To Show Billing Manager";
        this.rightsForTransshipmentManager = "Rights To Show Transshipment Manager";
        this.rightsForSuperAdministrator = "Rights To Show Super Administrator";
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
            this.viewScanCodeField = true;
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Barcode Scanning Manual") {
                        this.isManualScanCode = true;
                    }
                    else if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Barcode Scan Button") {
                        this.viewScanCodeBtn = true;
                    }
                }
            }
        }
    }
    RewardingComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    RewardingComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    RewardingComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    RewardingComponent.prototype.ngOnInit = function () {
        //this.isManualScanCode = true;
    };
    RewardingComponent.prototype.getScanDetailsClickBtn = function (rewardingPopUpTemplate) {
        this.scanningProcess(rewardingPopUpTemplate);
    };
    RewardingComponent.prototype.getScanCodeFieldsDetails = function (event, rewardingPopUpTemplate) {
        if (this.isManualScanCode == false) {
            window.setTimeout(function () {
                $("#scanCode").val('');
                $('#scanCode').focus();
            }, 1000);
        }
        console.log(event.charCode + "" + this.isManualScanCode);
        console.log($("#scanCode").val());
        if ((event.charCode == 10) &&
            (this.isManualScanCode == false)) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Alert", "Please Scan Code Using Scanner", "warning");
            return false;
        }
        else if (event.charCode == 13) {
            this.scanningProcess(rewardingPopUpTemplate);
        }
    };
    RewardingComponent.prototype.scanningProcess = function (rewardingPopUpTemplate) {
        this.hireSlipDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.validateScanCodeHireslipNo = $("#scanCode").val();
        this.validateHireslipNo = $("#hireslipNumber").val();
        this.hireSlipDto.hireslipnumber = this.validateHireslipNo;
        this.hireSlipDto.branch = this.userDataDtoReturnSession.office;
        this.hireSlipDto.barcodeValue = this.validateScanCodeHireslipNo;
        this.hireSlipDto.companyid = this.userDataDtoReturnSession.companyId;
        this.setScanningProcessDetails(rewardingPopUpTemplate);
    };
    RewardingComponent.prototype.setScanningProcessDetails = function (rewardingPopUpTemplate) {
        var _this = this;
        this.showSpinnerForAction = true;
        this.hireslipService.getHireSlipDetailsForRewarding(this.hireSlipDto).subscribe(function (response) {
            _this.showSpinnerForAction = false;
            _this.hireSlipDtoReturn = null;
            _this.hireSlipDtoReturn = response;
            //console.log(response);
            //console.log(this.hireSlipDtoReturn);
            if (response.size == 0 || response.status == "Pending") {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Not Allowed", "Please Scan Again", "warning");
                _this.clearAllFields();
                _this.commonClearFieldFalse();
            }
            else {
                if (response.status == "Scheduled") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Result Not Found", "" + $("#hireslipNumber").val() + " is Scheduled to Transit", "warning");
                    _this.clearAllFields();
                    _this.commonClearFieldFalse();
                }
                else if ((!(response.branch == response.tostation)) &&
                    (!(_this.userDataDtoReturnSession.office == response.tostation) &&
                        _this.isManualScanCode == false)) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Not Allowed", "You Are Not Allowed to see the " + response.tostation + " Informations", "warning");
                    _this.clearAllFields();
                    _this.commonClearFieldFalse();
                }
                else if (response.firstPntDelv != null &&
                    (!(response.tostation == _this.userDataDtoReturnSession.office))) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Not Allowed", "Reward Allowed Only at " + response.firstPntDelv + " Because" + response.firstPntDelv + " is 1st Point Delivery", "warning");
                    _this.clearAllFields();
                    _this.commonClearFieldFalse();
                }
                else if (response.deliveryPoints == 2 &&
                    ((response.tostation == _this.userDataDtoReturnSession.office))) {
                    _this.clearAllFields();
                    _this.setValues(response);
                    _this.showFieldForDeliveryPointsTwo(response, rewardingPopUpTemplate);
                    console.log("DeliveryPt");
                }
                else {
                    _this.clearAllFields();
                    _this.setValues(response);
                    _this.showFieldForDeliveryPointsTwo(response, rewardingPopUpTemplate);
                    console.log("No DeliveryPt");
                }
            }
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Server Error", "Problem occur while getting  HireSlipDetailsForRewarding", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    RewardingComponent.prototype.commonClearFieldFalse = function () {
        this.viewAlreadyReward = false;
        this.viewConfirmPaymentBtn = false;
        this.viewPrintBtn = false;
        $("#scanCode").val('');
        $("#scanCode").focus();
    };
    RewardingComponent.prototype.showFieldOfAlreadyRewardAndPrint = function () {
        this.viewAlreadyReward = true;
        this.viewConfirmPaymentBtn = false;
        this.viewPrintBtn = true;
        this.viewScanCodeField = false;
        this.viewScanCodeBtn = false;
    };
    RewardingComponent.prototype.showFieldOfAlreadyRewardAndConfirmPayBtn = function () {
        this.viewAlreadyReward = true;
        this.viewConfirmPaymentBtn = true;
        this.viewPrintBtn = false;
        this.viewScanCodeField = false;
        this.viewScanCodeBtn = false;
    };
    RewardingComponent.prototype.showFieldForDeliveryPointsTwo = function (response, rewardingPopUpTemplate) {
        if (response.isRewarded != null && response.isRewarded &&
            response.isLryBalancePaid != null &&
            (!(response.isLryBalancePaid))) {
            this.showFieldOfAlreadyRewardAndPrint();
            $("#isAlreadyRewardedHeadingId").text('Already Rewarded');
        }
        else if (response.isScanned != null && response.isScanned &&
            (response.isRewarded != null && (!response.isRewarded))) {
            this.showFieldOfAlreadyRewardAndConfirmPayBtn();
            $("#isAlreadyRewardedHeadingId").text('Already Rewarded');
            this.getReachedDuration();
        }
        else if (response.isLryBalancePaid != null &&
            response.isLryBalancePaid &&
            response.isRewarded != null &&
            (!(response.isRewarded))) {
            this.showFieldOfAlreadyRewardAndConfirmPayBtn();
            $("#isAlreadyRewardedHeadingId").text('HireSlip Balance Amount Already Paid');
            this.getReachedDuration();
        }
        else if (response.isRewarded != null &&
            response.isRewarded &&
            response.isLryBalancePaid != null &&
            response.isLryBalancePaid) {
            this.showFieldOfAlreadyRewardAndPrint();
            $("#isAlreadyRewardedHeadingId").text('HireSlip Balance And Reward Amount Already Paid');
        }
        else {
            if ((moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format("dddd") == "Monday") &&
                (response.sundayWorking != null) &&
                (response.sundayWorking == "No")) {
                //popup.show();
                this.rewardingPopupOpenLink(rewardingPopUpTemplate);
            }
            else {
                this.getReachedDuration();
            }
            //radNo.setValue(true);
            $("#checkboxWithExcludeSundayNo").prop('checked', true);
            this.viewAlreadyReward = false;
            this.viewConfirmPaymentBtn = true;
            this.viewPrintBtn = false;
            this.viewScanCodeField = false;
            this.viewScanCodeBtn = false;
        }
        /*if (!(this.rightsForDeliveryManager == "Rights To Show Delivery Manager") &&
            (!(this.rightsForBillingManager == "Rights To Show Billing Manager")) &&
            (!(this.rightsForTransshipmentManager == "Rights To Show Transshipment Manager") &&
                (!(this.rightsForSuperAdministrator == "Rights To Show Super Administrator")))) {
        */
        //rightsForRewardingPrintShow = "Rights To Show Only Rewarding Print For Selected Role";
        if (!(this.userDataDtoReturnSession.role == "Delivery Manager") &&
            (!(this.userDataDtoReturnSession.role == "Billing Manager")) &&
            (!(this.userDataDtoReturnSession.role == "Transshipment Manager") &&
                (!(this.userDataDtoReturnSession.role == "Super Administrator")))) {
            this.viewConfirmPaymentBtn = false;
            this.viewPrintBtn = true;
        }
    };
    RewardingComponent.prototype.clearAllFields = function () {
        $("#hireslipNumber").val('');
        $("#invoiceDates").val('');
        $("#source").val('');
        $("#destination").val('');
        $("#hireAmount").val('');
        $("#vehicleNumber").val('');
        $("#supplierName").val('');
        $("#driverName").val('');
        $("#mobileNumber").val('');
        $("#licenseNumber").val('');
        $("#departureDates").val('');
        $("#departureTime").val('');
        $("#scheduledDates").val('');
        $("#scheduledTime").val('');
        $("#arrivalDates").val('');
        $("#arrivalTime").val('');
        $("#preferredDuration").val('');
        $("#bufferTime").val('');
        $("#timeTakenToReached").val('');
        $("#rewardAmount").val('');
        this.invoiceDatesModal = null;
        this.departureDatesModal = null;
        this.scheduledDatesModal = null;
        this.arrivalDatesModal = null;
        //this.validateScanCodeHireslipNo = null;
        this.validateHireslipNo = null;
        this.viewScanCodeField = true;
        this.isReadonlyHireslipNo = false;
        this.isReadonlyInvoiceDate = false;
        this.isReadonlySource = false;
        this.isReadonlyDestination = false;
        this.isReadonlyHireAmount = false;
        this.isReadonlyVehicleNumber = false;
        this.isReadonlySupplierName = false;
        this.isReadonlyDriverName = false;
        this.isReadonlyMobileNumber = false;
        this.isReadonlyLicenseNumber = false;
        this.isReadonlyDepartureDate = false;
        this.isReadonlyDepartureTime = false;
        this.isReadonlyScheduledDate = false;
        this.isReadonlyScheduledTime = false;
        this.isReadonlyArrivalDate = false;
        this.isReadonlyArrivalTime = false;
        this.isReadonlyPreferredDuration = false;
        this.isReadonlyBufferTime = false;
        this.isReadonlyTimeTakenToReached = false;
        this.isReadonlyRewardAmount = false;
    };
    RewardingComponent.prototype.setValues = function (hireslipValueDtoReturn) {
        $("#hireslipNumber").val(hireslipValueDtoReturn.hireslipnumber);
        $("#invoiceDates").val(hireslipValueDtoReturn.invoicedate == null ? null : moment__WEBPACK_IMPORTED_MODULE_11__(hireslipValueDtoReturn.invoicedate).format("YYYY-MM-DD"));
        $("#source").val(hireslipValueDtoReturn.fromstation);
        $("#destination").val(hireslipValueDtoReturn.tostation);
        $("#hireAmount").val(hireslipValueDtoReturn.totalhire);
        $("#vehicleNumber").val(hireslipValueDtoReturn.vehicleNumber);
        $("#supplierName").val(hireslipValueDtoReturn.vehiCompName);
        $("#driverName").val(hireslipValueDtoReturn.drivername);
        $("#mobileNumber").val(hireslipValueDtoReturn.driverMobileNumber);
        $("#licenseNumber").val(hireslipValueDtoReturn.driverlicencenumber);
        $("#departureDates").val(hireslipValueDtoReturn.departuredate == null ? null : moment__WEBPACK_IMPORTED_MODULE_11__(hireslipValueDtoReturn.departuredate).format("YYYY-MM-DD"));
        //$("#departureTime").val(hireslipValueDtoReturn.departureTime == null ? null : moment(hireslipValueDtoReturn.departureTime, "HH:mm").format("hh:mm"));
        $("#departureTime").val(hireslipValueDtoReturn.departureTime);
        $("#scheduledDates").val(hireslipValueDtoReturn.scheduleddate == null ? null : moment__WEBPACK_IMPORTED_MODULE_11__(hireslipValueDtoReturn.scheduleddate).format("YYYY-MM-DD"));
        // $("#scheduledTime").val(hireslipValueDtoReturn.scheduledTime == null ? null : moment(hireslipValueDtoReturn.scheduledTime, "HH:mm").format("hh:mm"));
        $("#scheduledTime").val(hireslipValueDtoReturn.scheduledTime);
        $("#arrivalDates").val(hireslipValueDtoReturn.arrivaldate == null ? null : moment__WEBPACK_IMPORTED_MODULE_11__(hireslipValueDtoReturn.arrivaldate).format("YYYY-MM-DD"));
        $("#arrivalTime").val(hireslipValueDtoReturn.arrivalTime);
        //$("#arrivalTime").val(hireslipValueDtoReturn.arrivalTime == null ? null : moment(hireslipValueDtoReturn.arrivalTime, "HH:mm").format("hh:mm"));
        $("#preferredDuration").val(hireslipValueDtoReturn.durationInHours);
        if (hireslipValueDtoReturn.buffTimeInHr != null &&
            hireslipValueDtoReturn.buffTimeInMin != null) {
            $("#bufferTime").val(hireslipValueDtoReturn.buffTimeInHr + ":" + hireslipValueDtoReturn.buffTimeInMin);
        }
        if (hireslipValueDtoReturn.isRewarded != null && hireslipValueDtoReturn.isRewarded) {
            $("#preferredDuration").val(hireslipValueDtoReturn.preferredDuration);
            $("#bufferTime").val(hireslipValueDtoReturn.bufferTime);
        }
        if (hireslipValueDtoReturn.driverrewardingAmt != null) {
            $("#timeTakenToReached").val(hireslipValueDtoReturn.column3);
            $("#rewardAmount").val(hireslipValueDtoReturn.driverrewardingAmt);
        }
        console.log("AAAAA");
        console.log(hireslipValueDtoReturn);
        this.isReadonlyHireslipNo = true;
        this.isReadonlyInvoiceDate = true;
        this.isReadonlySource = true;
        this.isReadonlyDestination = true;
        this.isReadonlyHireAmount = true;
        this.isReadonlyVehicleNumber = true;
        this.isReadonlySupplierName = true;
        this.isReadonlyDriverName = true;
        this.isReadonlyMobileNumber = true;
        this.isReadonlyLicenseNumber = true;
        this.isReadonlyDepartureDate = true;
        this.isReadonlyDepartureTime = true;
        this.isReadonlyScheduledDate = true;
        this.isReadonlyScheduledTime = true;
        this.isReadonlyArrivalDate = true;
        this.isReadonlyArrivalTime = true;
        this.isReadonlyPreferredDuration = true;
        this.isReadonlyBufferTime = true;
        this.isReadonlyTimeTakenToReached = true;
        this.isReadonlyRewardAmount = true;
    };
    RewardingComponent.prototype.getReachedDuration = function () {
        var _this = this;
        //console.log("Check Time");
        this.hireSlipDtoForTimeDiff = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.enteredDepartureDate = $("#departureDates").val();
        this.enteredDepartureTime = $("#departureTime").val();
        this.enteredArrivalDate = $("#arrivalDates").val();
        this.enteredArrivalTime = $("#arrivalTime").val();
        this.enteredHireSlipNumber = $("#hireslipNumber").val();
        this.hireSlipDtoForTimeDiff.departuredate = this.enteredDepartureDate;
        this.hireSlipDtoForTimeDiff.departureTime = this.enteredDepartureTime;
        this.hireSlipDtoForTimeDiff.arrivaldate = this.enteredArrivalDate;
        this.hireSlipDtoForTimeDiff.arrivalTime = this.enteredArrivalTime;
        this.hireSlipDtoForTimeDiff.hireslipnumber = this.enteredHireSlipNumber;
        console.log($("#checkboxWithExcludeSundayYes").is(':checked'));
        if ($("#checkboxWithExcludeSundayYes").is(':checked') == true) {
            this.checkboxWithExcludeSundayYesNo = true;
        }
        else {
            this.checkboxWithExcludeSundayYesNo = false;
        }
        this.hireSlipDtoForTimeDiff.excludeSunday = this.checkboxWithExcludeSundayYesNo;
        this.hireSlipDtoForTimeDiff.bufferedTimeInHours = this.hireSlipDtoReturn.bufferedTimeInHours;
        this.hireSlipDtoForTimeDiff.column1 = this.hireSlipDtoReturn.column1;
        this.hireSlipDtoForTimeDiff.companyid = this.userDataDtoReturnSession.companyId;
        console.log(this.hireSlipDtoForTimeDiff);
        this.showSpinnerForAction = true;
        //console.log("Check Time 1");
        this.hireslipService.getTimeDifference(this.hireSlipDtoForTimeDiff).subscribe(function (response) {
            console.log("Time");
            console.log(response);
            $("#timeTakenToReached").val(response.reachedDuration);
            $("#rewardAmount").val(response.amount);
            _this.showSpinnerForAction = false;
        }),
            function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Server Error", "Problem occur while getting  TimeDifference", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    RewardingComponent.prototype.confirmPaymentClickBtn = function () {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
            title: "Confirm Payment",
            text: "Sure u  Want to Confirm the Payment  Details",
            icon: "info",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (yesConfirmPaymentBtn) {
            if (yesConfirmPaymentBtn) {
                _this.setConfirmPaymentDetails();
            }
        });
    };
    RewardingComponent.prototype.setConfirmPaymentDetails = function () {
        var _this = this;
        this.hireSlipDtoForConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.hireSlipDtoForConfirmPayment = this.getFieldValues("confirm");
        console.log(this.hireSlipDtoForConfirmPayment);
        this.hireslipService.updateDriverRewarding(this.hireSlipDtoForConfirmPayment).subscribe(function (response) {
            console.log(response);
            if (response.status != null && response.status == "Success") {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: "Print Rewarding Voucher",
                    text: "Do U Want to Print the Rewarding Voucher for",
                    // text: "Sure you want to Print ?",
                    icon: "info",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                    buttons: ["No", "Yes"],
                }).then(function (yesBtn) {
                    if (yesBtn) {
                        localStorage.clear();
                        localStorage.setItem('rewardingVoucherPrint', JSON.stringify(_this.hireSlipDtoForConfirmPayment));
                        _this.viewRewardingVoucher = true;
                        window.addEventListener('afterprint', function (onclick) {
                            if (_this.viewRewardingVoucher) {
                                _this.viewRewardingVoucher = false;
                                _this.hireSlipDtoForConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
                                localStorage.clear();
                                _this.viewPrintBtn = false;
                                _this.clearAllFields();
                                _this.commonClearFieldFalse();
                            }
                        });
                    }
                    else {
                        _this.clearAllFields();
                        _this.commonClearFieldFalse();
                    }
                });
            }
            else if (response.status != null && response.status == "Failed") {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Warning", "Driver Rewarded Details Not Saved", "warning");
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Warning", "Driver Rewarded Details Not Saved", "warning");
            }
        }),
            function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Server Error", "Problem occur while getting  updateDriverRewarding", "warning");
                console.log(error.json());
            },
            function () { return console.log('done'); };
    };
    RewardingComponent.prototype.printClickBtn = function () {
        var _this = this;
        if (this.hireSlipDtoReturn.isRewarded != null && !this.hireSlipDtoReturn.isRewarded) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Please Reward", "" + this.hireSlipDtoReturn.hireslipnumber + " Is Not Yet Rewarded", "warning");
            return false;
        }
        else {
            this.hireSlipDtoForPrint = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
            this.hireSlipDtoForPrint = this.getFieldValues("print");
            localStorage.clear();
            localStorage.setItem('rewardingVoucherPrint', JSON.stringify(this.hireSlipDtoForPrint));
            this.viewRewardingVoucher = true;
            window.addEventListener('afterprint', function (onclick) {
                if (_this.viewRewardingVoucher) {
                    _this.viewRewardingVoucher = false;
                    _this.hireSlipDtoForPrint = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
                    localStorage.clear();
                    _this.viewPrintBtn = false;
                    _this.clearAllFields();
                    _this.commonClearFieldFalse();
                }
            });
        }
    };
    RewardingComponent.prototype.getFieldValues = function (mode) {
        this.hireSlipDtoForPrintAndConfirmPayment = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_9__["HireSlipDto"]();
        this.enteredForHireslipNumberPrint = $("#hireslipNumber").val();
        this.enteredForInvoiceDatePrint = $("#invoiceDates").val();
        this.enteredForSourcePrint = $("#source").val();
        this.enteredForDestinationPrint = $("#destination").val();
        this.enteredForHireAmountPrint = $("#hireAmount").val();
        this.enteredForVehicleNumberPrint = $("#vehicleNumber").val();
        this.enteredForSupplierNamePrint = $("#supplierName").val();
        this.enteredForDriverNamePrint = $("#driverName").val();
        this.enteredForMobileNumberPrint = $("#mobileNumber").val();
        this.enteredForLicensePrint = $("#licenseNumber").val();
        this.enteredForDepartureDatePrint = $("#departureDates").val();
        this.enteredForDepartureTimePrint = $("#departureTime").val();
        this.enteredForScheduleDatePrint = $("#scheduledDates").val();
        this.enteredForScheduleTimePrint = $("#scheduledTime").val();
        this.enteredForArrivalDatePrint = $("#arrivalDates").val();
        this.enteredForArrivalTimePrint = $("#arrivalTime").val();
        this.enteredForPrefferedDurationPrint = $("#preferredDuration").val();
        this.enteredForBufferTimePrint = $("#bufferTime").val();
        this.enteredForTimeTakenToReachedPrint = $("#timeTakenToReached").val();
        this.enteredForRewardAmountPrint = $("#rewardAmount").val();
        this.hireSlipDtoForPrintAndConfirmPayment.hireslipnumber = this.enteredForHireslipNumberPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.hireslipdate = this.enteredForInvoiceDatePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.fromstation = this.enteredForSourcePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.tostation = this.enteredForDestinationPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.totalhire = this.enteredForHireAmountPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.vehicleNumber = this.enteredForVehicleNumberPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.vehiCompName = this.enteredForSupplierNamePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.drivername = this.enteredForDriverNamePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.driverMobileNumber = this.enteredForMobileNumberPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.driverlicencenumber = this.enteredForLicensePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.departuredate = this.enteredForDepartureDatePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.departureTime = this.enteredForDepartureTimePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.scheduleddate = this.enteredForScheduleDatePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.scheduledTime = this.enteredForScheduleTimePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.arrivaldate = this.enteredForArrivalDatePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.arrivalTime = this.enteredForArrivalTimePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.bufferedTimeInHours = this.enteredForBufferTimePrint;
        this.hireSlipDtoForPrintAndConfirmPayment.driverrewardingAmt = this.enteredForRewardAmountPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.status = "Rewarded";
        this.hireSlipDtoForPrintAndConfirmPayment.lastupdatedby = this.userDataDtoReturnSession.userId;
        this.hireSlipDtoForPrintAndConfirmPayment.column3 = this.enteredForTimeTakenToReachedPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.mode = "Reward";
        this.hireSlipDtoForPrintAndConfirmPayment.preferredDuration = this.enteredForPrefferedDurationPrint;
        this.hireSlipDtoForPrintAndConfirmPayment.bufferTime = this.enteredForBufferTimePrint;
        var arrTimeSplit = this.enteredForTimeTakenToReachedPrint.split(":");
        this.hireSlipDtoForPrintAndConfirmPayment.durationInHours = arrTimeSplit[0];
        var inMins = (arrTimeSplit[0] * 60);
        if (arrTimeSplit.length > 1) {
            inMins = inMins + +arrTimeSplit[1];
        }
        this.hireSlipDtoForPrintAndConfirmPayment.inMinutes = inMins;
        if (mode != null && mode == "confirm") {
            this.currentDate = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format("YYYY-MM-DD");
            this.hireSlipDtoForPrintAndConfirmPayment.fromDateInDate = this.currentDate;
        }
        else if (mode != null && mode == "print") {
            this.hireSlipDtoForPrintAndConfirmPayment.fromDateInDate = this.hireSlipDtoReturn.fromDateInDate;
        }
        return this.hireSlipDtoForPrintAndConfirmPayment;
    };
    RewardingComponent.prototype.getDismissReason = function (reason) {
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
    RewardingComponent.prototype.rewardingPopupOpenLink = function (rewardingPopUpTemplate) {
        var _this = this;
        this.modalRefferenceRewardingPopUp = this.modalService.open(rewardingPopUpTemplate, { centered: true, size: "sm" });
        this.modalRefferenceRewardingPopUp.result.then(function (result) {
            _this.modalRefferenceRewardingClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceRewardingClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    RewardingComponent.prototype.excludeSundayOkClickBtn = function () {
        this.getReachedDuration();
        this.modalRefferenceRewardingPopUp.close();
    };
    RewardingComponent.prototype.excludeSundayCancelClickBtn = function () {
        this.modalRefferenceRewardingPopUp.close();
    };
    RewardingComponent.prototype.excludeSundayYesCheckBoxEvent = function (values) {
        if (values.currentTarget.checked == true) {
            $("#checkboxWithExcludeSundayYes").prop('checked', true);
            $("#checkboxWithExcludeSundayNo").prop('checked', false);
        }
        else {
            $("#checkboxWithExcludeSundayYes").prop('checked', false);
            $("#checkboxWithExcludeSundayNo").prop('checked', true);
        }
    };
    RewardingComponent.prototype.excludeSundayNoCheckBoxEvent = function (values) {
        if (values.currentTarget.checked == true) {
            $("#checkboxWithExcludeSundayYes").prop('checked', false);
            $("#checkboxWithExcludeSundayNo").prop('checked', true);
        }
        else {
            $("#checkboxWithExcludeSundayYes").prop('checked', true);
            $("#checkboxWithExcludeSundayNo").prop('checked', false);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rewardingPopUpTemplate'),
        __metadata("design:type", Object)
    ], RewardingComponent.prototype, "rewardingPopUpTemplate", void 0);
    RewardingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rewarding',
            template: __webpack_require__(/*! ./rewarding.component.html */ "./src/app/stock/driver/rewarding/rewarding.component.html"),
            styles: [__webpack_require__(/*! ./rewarding.component.css */ "./src/app/stock/driver/rewarding/rewarding.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_6__["MasterReadService"], _angular_http__WEBPACK_IMPORTED_MODULE_8__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            src_app_dataService_memo_service__WEBPACK_IMPORTED_MODULE_3__["MemoService"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_10__["HireslipService"]])
    ], RewardingComponent);
    return RewardingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-dashboards-dashboard-module~src-app-stock-driver-driver-module.js.map