(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-fortnightStatement-others-others-module"],{

/***/ "./src/app/fortnightStatement/others/balancing-difference-tally-report/balancing-difference-tally-report.component.css":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/others/balancing-difference-tally-report/balancing-difference-tally-report.component.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnRuaWdodFN0YXRlbWVudC9vdGhlcnMvYmFsYW5jaW5nLWRpZmZlcmVuY2UtdGFsbHktcmVwb3J0L2JhbGFuY2luZy1kaWZmZXJlbmNlLXRhbGx5LXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/fortnightStatement/others/balancing-difference-tally-report/balancing-difference-tally-report.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/others/balancing-difference-tally-report/balancing-difference-tally-report.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Balancing Difference Tally\n\t\t\t\t\t\tReport</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"transferType\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Region</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\t\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"manualCashMemo\">South</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"paymentCashMemo\">MH</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"getReportBtn\" disabled>Get Report</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Agent Statement Amount\n\t\t\t\t\t\t\tTransaction Details</h6>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAgentStmtAmount\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerAgentStmtAmount\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Station</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Statement Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Amount Received</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Debit Note Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Balance Amount</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let agentStmtAmountData of agentStmtAmountDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentStmtAmountData.stationName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentStmtAmountData.crntStmtFromDate}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentStmtAmountData.crntStmtToDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentStmtAmountData.crntStmtDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentStmtAmountData.crntStmtNo }}</td>\n\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/fortnightStatement/others/balancing-difference-tally-report/balancing-difference-tally-report.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/others/balancing-difference-tally-report/balancing-difference-tally-report.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: BalancingDifferenceTallyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancingDifferenceTallyReportComponent", function() { return BalancingDifferenceTallyReportComponent; });
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


var BalancingDifferenceTallyReportComponent = /** @class */ (function () {
    function BalancingDifferenceTallyReportComponent(agentStmtAmountRpt) {
        this.agentStmtAmountRpt = agentStmtAmountRpt;
        //summaryTable:any;
        this.loadingIndicator = true;
        this.dtTriggerAgentStmtAmount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    BalancingDifferenceTallyReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    BalancingDifferenceTallyReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsAgentStmtAmount = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
            //                {
            //                    extend: 'excel',
            //                    text: '<i class="fas fa-file-excel"> Excel</i>',
            //                    titleAttr: 'Excel',
            //                    exportOptions: {
            //                        columns: ':visible'
            //                    }
            //                },
            //                {
            //                    extend: 'print',
            //                    text: '<i class="fas fa-print"> Print</i>',
            //                    titleAttr: 'Print',
            //
            //                }
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
        this.getDataFrmServiceFrTable = this.agentStmtAmountRpt.getSummaryData();
        this.onDestroyUnsubscribtionAgentStmtAmount = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.agentStmtAmountDataList = data['data'];
            _this.dtTriggerAgentStmtAmount.next();
        });
        //the below code is for the getting data through json ends
    };
    BalancingDifferenceTallyReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerAgentStmtAmount.unsubscribe();
        this.onDestroyUnsubscribtionAgentStmtAmount.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], BalancingDifferenceTallyReportComponent.prototype, "dtElements", void 0);
    BalancingDifferenceTallyReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-balancing-difference-tally-report',
            template: __webpack_require__(/*! ./balancing-difference-tally-report.component.html */ "./src/app/fortnightStatement/others/balancing-difference-tally-report/balancing-difference-tally-report.component.html"),
            styles: [__webpack_require__(/*! ./balancing-difference-tally-report.component.css */ "./src/app/fortnightStatement/others/balancing-difference-tally-report/balancing-difference-tally-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], BalancingDifferenceTallyReportComponent);
    return BalancingDifferenceTallyReportComponent;
}());



/***/ }),

/***/ "./src/app/fortnightStatement/others/debit-note-stmt/debit-note-stmt.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/fortnightStatement/others/debit-note-stmt/debit-note-stmt.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auto_selectOption_FullWidth {\n\tfont-size: 15px;\n\tpadding: 0px;\n\tborder: 2px solid #dadee2;\n\theight: 26px;\n\twidth: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydG5pZ2h0U3RhdGVtZW50L290aGVycy9kZWJpdC1ub3RlLXN0bXQvZGViaXQtbm90ZS1zdG10LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IsWUFBWTtDQUNaIiwiZmlsZSI6InNyYy9hcHAvZm9ydG5pZ2h0U3RhdGVtZW50L290aGVycy9kZWJpdC1ub3RlLXN0bXQvZGViaXQtbm90ZS1zdG10LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0b19zZWxlY3RPcHRpb25fRnVsbFdpZHRoIHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRwYWRkaW5nOiAwcHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNkYWRlZTI7XG5cdGhlaWdodDogMjZweDtcblx0d2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/fortnightStatement/others/debit-note-stmt/debit-note-stmt.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/fortnightStatement/others/debit-note-stmt/debit-note-stmt.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Debit Note Stmt</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">FORTNIGHT DETAILS</h6>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"serviceCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Statement No :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"serviceCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label></label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success s-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"generateBtn\" disabled>Go</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"serviceCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Branch</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Period</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Period</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Received Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#receivedDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Debit Heads</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"debitHeads\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption_FullWidth input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(debitHeadsOptions | filter: control.value) as resultDebitHeads\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDebitHeads\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDebitHeads.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 col-md-5\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description </label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"serviceCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Value </label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"serviceCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDebitNoteStmt\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDebitNoteStmt\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t<th>Debit(INR)</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remove</th>\n\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let debitNoteStmtData of debitNoteStmtDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteStmtData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteStmtData.debit(INR)}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ debitNoteStmtData.remove}}</td>\n\n\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: left;\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\tid=\"generateBtn\" disabled>Finish</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/fortnightStatement/others/debit-note-stmt/debit-note-stmt.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/fortnightStatement/others/debit-note-stmt/debit-note-stmt.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DebitNoteStmtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitNoteStmtComponent", function() { return DebitNoteStmtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
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

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


//for the select option with filter starts

//for the select option with filter ends
var DebitNoteStmtComponent = /** @class */ (function () {
    function DebitNoteStmtComponent(debitNoteStmtRpt) {
        this.debitNoteStmtRpt = debitNoteStmtRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerDebitNoteStmt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.debitHeadsOptions = [
            { id: 1, label: 'Add Less' },
            { id: 2, label: 'CHECKPOST EXPENSES' },
            { id: 3, label: 'CLAIMS' },
            { id: 3, label: 'SHARING OF RENT' }
        ];
    }
    DebitNoteStmtComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    DebitNoteStmtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsDebitNoteStmt = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
            //                {
            //                    extend: 'excel',
            //                    text: '<i class="fas fa-file-excel"> Excel</i>',
            //                    titleAttr: 'Excel',
            //                    exportOptions: {
            //                        columns: ':visible'
            //                    }
            //                },
            //                {
            //                    extend: 'print',
            //                    text: '<i class="fas fa-print"> Print</i>',
            //                    titleAttr: 'Print',
            //
            //                }
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
            "scrollY": 260,
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
        this.getDataFrmServiceFrTable = this.debitNoteStmtRpt.getSummaryData();
        this.onDestroyUnsubscribtionDebitNoteStmt = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.debitNoteStmtDataList = data['data'];
            _this.dtTriggerDebitNoteStmt.next();
        });
        //the below code is for the getting data through json ends
    };
    DebitNoteStmtComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDebitNoteStmt.unsubscribe();
        this.onDestroyUnsubscribtionDebitNoteStmt.unsubscribe();
    };
    //for datepicker
    //the selectToday is the method for  selecting todays'z date
    DebitNoteStmtComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    DebitNoteStmtComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DebitNoteStmtComponent.prototype, "dtElements", void 0);
    DebitNoteStmtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-debit-note-stmt',
            template: __webpack_require__(/*! ./debit-note-stmt.component.html */ "./src/app/fortnightStatement/others/debit-note-stmt/debit-note-stmt.component.html"),
            styles: [__webpack_require__(/*! ./debit-note-stmt.component.css */ "./src/app/fortnightStatement/others/debit-note-stmt/debit-note-stmt.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], DebitNoteStmtComponent);
    return DebitNoteStmtComponent;
}());



/***/ }),

/***/ "./src/app/fortnightStatement/others/others.module.ts":
/*!************************************************************!*\
  !*** ./src/app/fortnightStatement/others/others.module.ts ***!
  \************************************************************/
/*! exports provided: OthersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersModule", function() { return OthersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/autocomplete/autocomplete.module */ "./src/app/autocomplete/autocomplete.module.ts");
/* harmony import */ var src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/report/daily-report/daily-report.module */ "./src/app/report/daily-report/daily-report.module.ts");
/* harmony import */ var src_app_fortnightStatement_others_others_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/fortnightStatement/others/others.routing */ "./src/app/fortnightStatement/others/others.routing.ts");
/* harmony import */ var src_app_fortnightStatement_others_party_less_check_upload_type_party_less_check_upload_type_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/fortnightStatement/others/party-less-check-upload-type/party-less-check-upload-type.component */ "./src/app/fortnightStatement/others/party-less-check-upload-type/party-less-check-upload-type.component.ts");
/* harmony import */ var src_app_fortnightStatement_others_balancing_difference_tally_report_balancing_difference_tally_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/fortnightStatement/others/balancing-difference-tally-report/balancing-difference-tally-report.component */ "./src/app/fortnightStatement/others/balancing-difference-tally-report/balancing-difference-tally-report.component.ts");
/* harmony import */ var src_app_fortnightStatement_others_debit_note_stmt_debit_note_stmt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/fortnightStatement/others/debit-note-stmt/debit-note-stmt.component */ "./src/app/fortnightStatement/others/debit-note-stmt/debit-note-stmt.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts








var OthersModule = /** @class */ (function () {
    function OthersModule() {
    }
    OthersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_fortnightStatement_others_others_routing__WEBPACK_IMPORTED_MODULE_10__["OthersRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"]],
            declarations: [
                src_app_fortnightStatement_others_party_less_check_upload_type_party_less_check_upload_type_component__WEBPACK_IMPORTED_MODULE_11__["PartyLessCheckUploadTypeComponent"], src_app_fortnightStatement_others_balancing_difference_tally_report_balancing_difference_tally_report_component__WEBPACK_IMPORTED_MODULE_12__["BalancingDifferenceTallyReportComponent"], src_app_fortnightStatement_others_debit_note_stmt_debit_note_stmt_component__WEBPACK_IMPORTED_MODULE_13__["DebitNoteStmtComponent"]
            ]
        })
    ], OthersModule);
    return OthersModule;
}());



/***/ }),

/***/ "./src/app/fortnightStatement/others/others.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/fortnightStatement/others/others.routing.ts ***!
  \*************************************************************/
/*! exports provided: OthersRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersRoutes", function() { return OthersRoutes; });
/* harmony import */ var src_app_fortnightStatement_others_party_less_check_upload_type_party_less_check_upload_type_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/fortnightStatement/others/party-less-check-upload-type/party-less-check-upload-type.component */ "./src/app/fortnightStatement/others/party-less-check-upload-type/party-less-check-upload-type.component.ts");
/* harmony import */ var src_app_fortnightStatement_others_balancing_difference_tally_report_balancing_difference_tally_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/fortnightStatement/others/balancing-difference-tally-report/balancing-difference-tally-report.component */ "./src/app/fortnightStatement/others/balancing-difference-tally-report/balancing-difference-tally-report.component.ts");
/* harmony import */ var src_app_fortnightStatement_others_debit_note_stmt_debit_note_stmt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/fortnightStatement/others/debit-note-stmt/debit-note-stmt.component */ "./src/app/fortnightStatement/others/debit-note-stmt/debit-note-stmt.component.ts");



var OthersRoutes = [
    {
        path: '',
        children: [
            {
                path: 'partyLessCheckUploadType',
                component: src_app_fortnightStatement_others_party_less_check_upload_type_party_less_check_upload_type_component__WEBPACK_IMPORTED_MODULE_0__["PartyLessCheckUploadTypeComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'invoicelredit',
                // component: InvoiceLrEditComponent,
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'balancingDifferenceTallyReport',
                component: src_app_fortnightStatement_others_balancing_difference_tally_report_balancing_difference_tally_report_component__WEBPACK_IMPORTED_MODULE_1__["BalancingDifferenceTallyReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'debitNoteStmt',
                component: src_app_fortnightStatement_others_debit_note_stmt_debit_note_stmt_component__WEBPACK_IMPORTED_MODULE_2__["DebitNoteStmtComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/fortnightStatement/others/party-less-check-upload-type/party-less-check-upload-type.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/others/party-less-check-upload-type/party-less-check-upload-type.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  padding: 0px 10px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydG5pZ2h0U3RhdGVtZW50L290aGVycy9wYXJ0eS1sZXNzLWNoZWNrLXVwbG9hZC10eXBlL3BhcnR5LWxlc3MtY2hlY2stdXBsb2FkLXR5cGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL2ZvcnRuaWdodFN0YXRlbWVudC9vdGhlcnMvcGFydHktbGVzcy1jaGVjay11cGxvYWQtdHlwZS9wYXJ0eS1sZXNzLWNoZWNrLXVwbG9hZC10eXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/fortnightStatement/others/party-less-check-upload-type/party-less-check-upload-type.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/others/party-less-check-upload-type/party-less-check-upload-type.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n<style>\n.imb_patch {\n\ttext-align: center;\n\tbackground-color: orange;\n\tpadding: 2px;\n}\n</style>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Party Less Check - Upload\n\t\t\t\t\t\tType</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\" style=\"border-bottom: 1px solid orange;\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Statement Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"statementNumber \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text \" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2 \">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"agentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text \" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Upload Rate File</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"uploadRateFile\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-upload\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"form-control-file\" id=\"browse\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</fieldset> -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">Upload</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-file\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"custom-file-input\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inputGroupFile01\"> <label -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-file-label\" for=\"inputGroupFile01\"></label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"uploadBtn\">Upload</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"saveLessDetailsBtn\">Save Less Details</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearDetailsBtn\">Clear Detail</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title\" style=\"padding: 0px 9px;\">Less LR\n\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLessLrDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLessLrDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>S.No</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Less</th>\n\t\t\t\t\t\t\t\t\t\t<th>Entered Less</th>\n\t\t\t\t\t\t\t\t\t\t<th>Difference Less</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let lessLrDetailsData of lessLrDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ lessLrDetailsData.sNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lessLrDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lessLrDetailsData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lessLrDetailsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lessLrDetailsData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lessLrDetailsData.actualWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lessLrDetailsData.chargedWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lessLrDetailsData.actualLess }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lessLrDetailsData.enteredLess }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lessLrDetailsData.differenceLess }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lessLrDetailsData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lessLrDetailsData.commodity }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\" style=\"padding-top: 20px;\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<h6 class=\"imb_patch card-title text-white\">LR Details</h6> -->\n\t\t\t\t\t\t\t<h6 class=\"card-title\" style=\"padding: 0px 9px;\">Blocked Lrs\n\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsBlockedLrsDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerBlockedLrsDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>S.No</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignee Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Less</th>\n\t\t\t\t\t\t\t\t\t\t<th>Entered Less</th>\n\t\t\t\t\t\t\t\t\t\t<th>Difference Less</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let blockedLrsDetailsData of blockedLrsDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ blockedLrsDetailsData.sNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ blockedLrsDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ blockedLrsDetailsData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ blockedLrsDetailsData.consigneeName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ blockedLrsDetailsData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ blockedLrsDetailsData.actualWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ blockedLrsDetailsData.chargedWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ blockedLrsDetailsData.actualLess }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ blockedLrsDetailsData.enteredLess }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ blockedLrsDetailsData.differenceLess }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ blockedLrsDetailsData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ blockedLrsDetailsData.commodity }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 vl p-t-10\">\n\t\t\t\t\t\t<h6 class=\"card-title\" style=\"padding: 0px 9px;\">Standard\n\t\t\t\t\t\t\tRate Master</h6>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"rate \">\n\t\t\t\t\t\t\t\t\t<label>Rate</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i\n\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign \"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"gcCharges \">\n\t\t\t\t\t\t\t\t\t<label>G.C. Charges</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i\n\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign \"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number \" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"lc\">\n\t\t\t\t\t\t\t\t\t<label>LC</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number \" placeholder=\"No\" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"hamaliSrc\">\n\t\t\t\t\t\t\t\t\t<label>Hamali Src</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number \" placeholder=\"No\" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"bc\">\n\t\t\t\t\t\t\t\t\t<label>BC</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number \" placeholder=\"No\" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"aoc\">\n\t\t\t\t\t\t\t\t\t<label>AOC</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number \" placeholder=\"No\" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fov\">\n\t\t\t\t\t\t\t\t\t<label>F O V</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number \" placeholder=\"Yes\" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"dd\">\n\t\t\t\t\t\t\t\t\t<label>DD</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number \" placeholder=\"No\" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"others\">\n\t\t\t\t\t\t\t\t\t<label>Others</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number \" placeholder=\"No\" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"sourceStation \">\n\t\t\t\t\t\t\t\t\t<label>Source Station</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i\n\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number \" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"perUnit \">\n\t\t\t\t\t\t\t\t\t<label>Per Unit</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i\n\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number \" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\n\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t<div class=\"input-group \" id=\"discount \">\n\t\t\t\t\t\t\t\t\t<label>Discount</label>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend \">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text \"> <i\n\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign \"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"number \" class=\"form-control \"\n\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11 \" readonly>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/fortnightStatement/others/party-less-check-upload-type/party-less-check-upload-type.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/others/party-less-check-upload-type/party-less-check-upload-type.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PartyLessCheckUploadTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyLessCheckUploadTypeComponent", function() { return PartyLessCheckUploadTypeComponent; });
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


var PartyLessCheckUploadTypeComponent = /** @class */ (function () {
    function PartyLessCheckUploadTypeComponent(lessLrDetailsRpt) {
        this.lessLrDetailsRpt = lessLrDetailsRpt;
        this.loadingIndicator = true;
        this.dtTriggerLessLrDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerBlockedLrsDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    PartyLessCheckUploadTypeComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    PartyLessCheckUploadTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsLessLrDetails = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'S.No',
                    data: 'sNo'
                },
                {
                    title: 'LR Number',
                    data: 'lrNumber'
                },
                {
                    title: 'Source',
                    data: 'source'
                },
                {
                    title: 'Consignee Name',
                    data: 'consigneeName'
                },
                {
                    title: 'Articles',
                    data: 'articles'
                },
                {
                    title: 'Actual Wt',
                    data: 'actualWt'
                },
                {
                    title: 'Charged Wt',
                    data: 'chargedWt'
                },
                {
                    title: 'Actual Less',
                    data: 'actualLess'
                },
                {
                    title: 'Entered Less',
                    data: 'enteredLess'
                },
                {
                    title: 'Difference Less',
                    data: 'differenceLess'
                },
                {
                    title: 'Remarks',
                    data: 'remarks'
                },
                {
                    title: 'Commodity',
                    data: 'commodity'
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
                    text: '<i class="fas fa-print"> Print All</i>',
                    titleAttr: 'Print All',
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel All</i>',
                    titleAttr: 'Excel All',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print Difference Lrs</i>',
                    titleAttr: 'Print Difference Lrs',
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel Difference Lrs</i>',
                    titleAttr: 'Excel Difference Lrs',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel Block Lrs</i>',
                    titleAttr: 'Excel Block Lrs',
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
            "scrollY": 200,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        };
        this.dtOptionsBlockedLrsDetails = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'S.No',
                    data: 'sNo'
                },
                {
                    title: 'LR Number',
                    data: 'lrNumber'
                },
                {
                    title: 'Source',
                    data: 'source'
                },
                {
                    title: 'Consignee Name',
                    data: 'consigneeName'
                },
                {
                    title: 'Articles',
                    data: 'articles'
                },
                {
                    title: 'Actual Wt',
                    data: 'actualWt'
                },
                {
                    title: 'Charged Wt',
                    data: 'chargedWt'
                },
                {
                    title: 'Actual Less',
                    data: 'actualLess'
                },
                {
                    title: 'Entered Less',
                    data: 'enteredLess'
                },
                {
                    title: 'Difference Less',
                    data: 'differenceLess'
                },
                {
                    title: 'Remarks',
                    data: 'remarks'
                },
                {
                    title: 'Commodity',
                    data: 'commodity'
                }
            ],
            //columns is used to for export and others endss
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
            //                }
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
            "scrollY": 180,
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
        this.getDataFrmServiceFrLessLrDetailsTable = this.lessLrDetailsRpt.getSummaryData();
        this.onDestroyUnsubscribtionLessLrDetails = this.getDataFrmServiceFrLessLrDetailsTable.subscribe(function (data) {
            _this.lessLrDetailsDataList = data['data'];
            _this.dtTriggerLessLrDetails.next();
        });
        this.getDataFrmServiceFrBlockedLrsDetails = this.lessLrDetailsRpt.getSummaryData();
        this.onDestroyUnsubscribtionBlockedLrsDetails = this.getDataFrmServiceFrBlockedLrsDetails.subscribe(function (data) {
            _this.blockedLrsDetailsDataList = data['data'];
            _this.dtTriggerBlockedLrsDetails.next();
        });
        //the below code is for the getting data through json ends
    };
    PartyLessCheckUploadTypeComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLessLrDetails.unsubscribe();
        this.dtTriggerBlockedLrsDetails.unsubscribe();
        this.onDestroyUnsubscribtionLessLrDetails.unsubscribe();
        this.onDestroyUnsubscribtionBlockedLrsDetails.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], PartyLessCheckUploadTypeComponent.prototype, "dtElements", void 0);
    PartyLessCheckUploadTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-party-less-check-upload-type',
            template: __webpack_require__(/*! ./party-less-check-upload-type.component.html */ "./src/app/fortnightStatement/others/party-less-check-upload-type/party-less-check-upload-type.component.html"),
            styles: [__webpack_require__(/*! ./party-less-check-upload-type.component.css */ "./src/app/fortnightStatement/others/party-less-check-upload-type/party-less-check-upload-type.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], PartyLessCheckUploadTypeComponent);
    return PartyLessCheckUploadTypeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-fortnightStatement-others-others-module.js.map