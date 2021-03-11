(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-cashmemo-transfer-cashmemo-transfer-cashmemo-module~src-app-stock-transfer-transfer-~f901d59b"],{

/***/ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check-and-collectionman-stock-check-print/manual-cashmemo-check-and-collectionman-stock-check-print.component.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check-and-collectionman-stock-check-print/manual-cashmemo-check-and-collectionman-stock-check-print.component.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep ngb-typeahead-window{\r\n\ttop: 26px;\r\n    left: 188px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\n::ng-deep .mat-horizontal-stepper-header {\r\n\tpointer-events: none !important;\r\n}\r\n\r\n::ng-deep .mat-progress-bar-fill::after {\r\n    background-color: green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaG1lbW8vdHJhbnNmZXItY2FzaG1lbW8vbWFudWFsLWNhc2htZW1vLWNoZWNrLWFuZC1jb2xsZWN0aW9ubWFuLXN0b2NrLWNoZWNrLXByaW50L21hbnVhbC1jYXNobWVtby1jaGVjay1hbmQtY29sbGVjdGlvbm1hbi1zdG9jay1jaGVjay1wcmludC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCOztBQUVEO0NBQ0MsZ0NBQWdDO0NBQ2hDOztBQUVEO0lBQ0ksd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvY2FzaG1lbW8vdHJhbnNmZXItY2FzaG1lbW8vbWFudWFsLWNhc2htZW1vLWNoZWNrLWFuZC1jb2xsZWN0aW9ubWFuLXN0b2NrLWNoZWNrLXByaW50L21hbnVhbC1jYXNobWVtby1jaGVjay1hbmQtY29sbGVjdGlvbm1hbi1zdG9jay1jaGVjay1wcmludC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93e1xyXG5cdHRvcDogMjZweDtcclxuICAgIGxlZnQ6IDE4OHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check-and-collectionman-stock-check-print/manual-cashmemo-check-and-collectionman-stock-check-print.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check-and-collectionman-stock-check-print/manual-cashmemo-check-and-collectionman-stock-check-print.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n\r\n<head>\r\n<style>\r\n.imb_patch {\r\n\ttext-align: center;\r\n\tbackground-color: orange;\r\n\tpadding: 2px;\r\n}\r\n</style>\r\n</head>\r\n\r\n<body>\r\n\t<!-- Row -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\r\n\t\t\t\t<div class=\"card-header bg-info\"\r\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\r\n\t\t\t\t\t<h6 class=\"card-title text-white\">{{title}}</h6>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<!-- spinner start-->\r\n\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<br> <br>\r\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\r\n\t\t\t\t\t\t\t\t\t<br>\r\n\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\r\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin-bottom: 10px; font-size: 18px;\">\r\n\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- spinner end-->\r\n\t\t\t\t\t\t<div class=\"box-body\">\r\n\t\t\t\t\t\t\t<table datatable id=\"manualOrCollectiontDetailId\"\r\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\r\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsManualOrCollectiontDetails\"\r\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerManualOrCollectionDetails\">\r\n\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Memo No.</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Memo Date</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Total Amount</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Party Name</th>\r\n\t\t\t\t\t\t\t\t\t\t<th *ngIf=\"showDest\">Destination</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr\r\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let manualOrCollectionDetailsData of manualOrCollectionDetailsDataList let i = index \">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{manualOrCollectionDetailsData.gcNoteNumber }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{ manualOrCollectionDetailsData.memoNumber }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{ manualOrCollectionDetailsData.date }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{ manualOrCollectionDetailsData.grandTotal }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{ manualOrCollectionDetailsData.consigneeName }}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"showDest\">{{\r\n\t\t\t\t\t\t\t\t\t\t\tmanualOrCollectionDetailsData.destination }}</td>\r\n\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"showDest\"></td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check-and-collectionman-stock-check-print/manual-cashmemo-check-and-collectionman-stock-check-print.component.ts":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check-and-collectionman-stock-check-print/manual-cashmemo-check-and-collectionman-stock-check-print.component.ts ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent", function() { return ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/CashMemo-dto */ "./src/app/dto/CashMemo-dto.ts");
/* harmony import */ var src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/memo-report */ "./src/app/dataService/memo-report.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dataService/hireslip-service */ "./src/app/dataService/hireslip-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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







var ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent = /** @class */ (function () {
    function ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent(memoLessRpt, router, masterReadService, memoReport, modalService, hireslipService, datePipe) {
        var _this = this;
        this.memoLessRpt = memoLessRpt;
        this.router = router;
        this.masterReadService = masterReadService;
        this.memoReport = memoReport;
        this.modalService = modalService;
        this.hireslipService = hireslipService;
        this.datePipe = datePipe;
        this.dtTriggerManualOrCollectionDetails = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.loadingIndicator = true;
        this.cashMemoDtoLocalStorage = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__["CashMemoDto"]();
        this.cashMemoDtoFromManual = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__["CashMemoDto"]();
        this.cashMemoDtoFromCollection = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__["CashMemoDto"]();
        this.dtTriggerMemoLessDescriptionDetails = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.showDest = false;
        this.showCollectionMan = false;
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
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
            this.dataForPopupFromManual = JSON.parse(localStorage.getItem('popupManualCashmemoCheckDetails'));
            this.dataForPopupFromManualOtherDetails = JSON.parse(localStorage.getItem('popupManualCashmemoCheckPrintDetails'));
            this.dataForPopupFromCollection = JSON.parse(localStorage.getItem('popupCollectionManCashmemoStockCheckDetails'));
            this.dataForPopupFromCollectionOtherDetails = JSON.parse(localStorage.getItem('popupCollectionManCashmemoStockCheckPrintDetails'));
            localStorage.clear();
            ///For Manual
            if (this.dataForPopupFromManual != null) {
                this.cashMemoDtoFromManual = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__["CashMemoDto"]();
                this.cashMemoDtoFromManual = this.dataForPopupFromManual;
                if (this.cashMemoDtoFromManual != null) {
                    this.showCollectionMan = false;
                    if (this.cashMemoDtoFromManual.memoCheck == true) {
                        this.title = "Checked Cashmemos";
                    }
                    else {
                        this.title = "Unchecked Cashmemos";
                    }
                    if (this.cashMemoDtoFromManual.mode == 'All') {
                        this.showDest = true;
                    }
                    else {
                        this.showDest = false;
                    }
                }
            }
            if (this.dataForPopupFromManualOtherDetails != null) {
                $("#manualOrCollectiontDetailId").DataTable().destroy();
                this.manualOrCollectionDetailsDataList = [];
                this.manualOrCollectionDetailsDataList = this.dataForPopupFromManualOtherDetails;
                this.dtTriggerManualOrCollectionDetails.next();
            }
            //For Collection
            if (this.dataForPopupFromCollection != null) {
                this.cashMemoDtoFromCollection = new src_app_dto_CashMemo_dto__WEBPACK_IMPORTED_MODULE_8__["CashMemoDto"]();
                this.cashMemoDtoFromCollection = this.dataForPopupFromCollection;
                if (this.cashMemoDtoFromCollection != null) {
                    this.showCollectionMan = true;
                    this.collectionManName = this.cashMemoDtoFromCollection.collectionMan;
                    if (this.cashMemoDtoFromCollection.memoCheck == true) {
                        this.title = "Collection Man Stock - Checked Cashmemos";
                    }
                    else {
                        this.title = "Collection Man Stock - Unchecked Cashmemos";
                    }
                    if (this.cashMemoDtoFromCollection.mode == 'All') {
                        this.showDest = true;
                    }
                    else {
                        this.showDest = false;
                    }
                }
            }
            if (this.dataForPopupFromCollectionOtherDetails != null) {
                $("#manualOrCollectiontDetailId").DataTable().destroy();
                this.manualOrCollectionDetailsDataList = [];
                this.manualOrCollectionDetailsDataList = this.dataForPopupFromCollectionOtherDetails;
                this.dtTriggerManualOrCollectionDetails.next();
            }
            this.dataForPopupFromManual = '';
            this.dataForPopupFromManualOtherDetails = [];
            this.dataForPopupFromCollection = '';
            this.dataForPopupFromCollectionOtherDetails = [];
        }
    }
    ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement, index) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                //this.dtTriggerMemoLessDescriptionDetails.next();
            });
        });
    };
    ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var todayDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
        var dateformate = moment__WEBPACK_IMPORTED_MODULE_10__(todayDate).format('DD-MM-YYYY');
        var showTitle = this.title;
        var showDestination = this.showDest;
        var viewCollection = this.showCollectionMan;
        var namelbl = '';
        var col = '';
        var colman = '';
        if (viewCollection == true) {
            namelbl = 'Collection Man';
            col = ';';
            colman = this.collectionManName;
        }
        else {
            namelbl = '';
            col = '';
            colman = '';
        }
        this.dtOptionsManualOrCollectiontDetails = {
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
                            "<td style='width: 25%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Date&nbsp;&nbsp;</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + dateformate + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='1'style='width:40%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:17px;'><u>" + showTitle + "</u></strong><br>" +
                            "</td>" +
                            "<td align='left' style='width:35%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='8%' style='text-align:left !important;'>" +
                            "<strong style='font-size:13px;'>" + namelbl + "</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:13px;'>" + col + "</strong>" +
                            "</td>" +
                            "<td width='32%' style='text-align:left !important;'>" +
                            "<span style='font-size:13px;'>" + colman + "</span><br>" +
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
            "scrollY": 350,
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
                // computing column Total of the complete result 
                var totAmt = api.column(3).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                if (showDestination == true) {
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html();
                    $(api.column(2).footer()).html();
                    $(api.column(3).footer()).html(totAmt);
                    $(api.column(4).footer()).html();
                    $(api.column(5).footer()).html();
                }
                else {
                    $(api.column(0).footer()).html('Total : ' + data.length);
                    $(api.column(1).footer()).html();
                    $(api.column(2).footer()).html();
                    $(api.column(3).footer()).html(totAmt);
                    $(api.column(4).footer()).html();
                }
            }
        };
    };
    ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerManualOrCollectionDetails.unsubscribe();
    };
    ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerManualOrCollectionDetails.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent.prototype, "dtElements", void 0);
    ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manual-cashmemo-check-and-collectionman-stock-check-print',
            template: __webpack_require__(/*! ./manual-cashmemo-check-and-collectionman-stock-check-print.component.html */ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check-and-collectionman-stock-check-print/manual-cashmemo-check-and-collectionman-stock-check-print.component.html"),
            styles: [__webpack_require__(/*! ./manual-cashmemo-check-and-collectionman-stock-check-print.component.css */ "./src/app/cashmemo/transfer-cashmemo/manual-cashmemo-check-and-collectionman-stock-check-print/manual-cashmemo-check-and-collectionman-stock-check-print.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__["MasterReadService"], src_app_dataService_memo_report__WEBPACK_IMPORTED_MODULE_9__["MemoReport"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_hireslip_service__WEBPACK_IMPORTED_MODULE_11__["HireslipService"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]])
    ], ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent);
    return ManualCashmemoCheckAndCollectionmanStockCheckPrintComponent;
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



/***/ })

}]);
//# sourceMappingURL=default~src-app-cashmemo-transfer-cashmemo-transfer-cashmemo-module~src-app-stock-transfer-transfer-~f901d59b.js.map