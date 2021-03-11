(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-report-bookings-bookings-module"],{

/***/ "./src/app/report/bookings/agent-expenses/agent-expenses.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/report/bookings/agent-expenses/agent-expenses.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9ib29raW5ncy9hZ2VudC1leHBlbnNlcy9hZ2VudC1leHBlbnNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/bookings/agent-expenses/agent-expenses.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/report/bookings/agent-expenses/agent-expenses.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Agent Expenses Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"agentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" [formControl]=\"controlMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteAgentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteAgentName=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(agentNameOptions | filter: controlMain.value) as resultAgentName\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultAgentName.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Booking Agent Expenses\n\t\t\t\t\t\t\t\tSummary</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAgentExpensesReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerAgentExpensesReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Total LR's</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>LC</th>\n\t\t\t\t\t\t\t\t\t\t<th>BC</th>\n\t\t\t\t\t\t\t\t\t\t<th>Incentive</th>\n\t\t\t\t\t\t\t\t\t\t<th>Penalty</th>\n\t\t\t\t\t\t\t\t\t\t<th>Commission</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tempo Freight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hamali</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let agentExpensesRptData of agentExpensesRptDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.lc }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.bc }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.incentive }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.penalty }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.commission }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.tempoFreight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentExpensesRptData.hamali }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/bookings/agent-expenses/agent-expenses.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/report/bookings/agent-expenses/agent-expenses.component.ts ***!
  \****************************************************************************/
/*! exports provided: AgentExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentExpensesComponent", function() { return AgentExpensesComponent; });
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
//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends

//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter starts

//for the select option with filter ends
var AgentExpensesComponent = /** @class */ (function () {
    function AgentExpensesComponent(agentExpensesReport) {
        this.agentExpensesReport = agentExpensesReport;
        this.loadingIndicator = true;
        this.controlMain = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.agentNameOptions = [
            { id: 1, label: 'ALL' },
            { id: 2, label: 'Alleppey' },
            { id: 3, label: 'Alwaye' },
            { id: 4, label: 'Aurangabad' }
        ];
        this.dtTriggerAgentExpensesReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AgentExpensesComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    AgentExpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsAgentExpensesReport = {
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
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.getDataFrmServiceFrTable = this.agentExpensesReport.getSummaryData();
        this.onDestroyUnsubscribtionAgentExpensesReport = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.agentExpensesRptDataList = data['data'];
            _this.dtTriggerAgentExpensesReport.next();
        });
    };
    AgentExpensesComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerAgentExpensesReport.unsubscribe();
        this.onDestroyUnsubscribtionAgentExpensesReport.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AgentExpensesComponent.prototype, "dtElements", void 0);
    AgentExpensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agent-expenses',
            template: __webpack_require__(/*! ./agent-expenses.component.html */ "./src/app/report/bookings/agent-expenses/agent-expenses.component.html"),
            styles: [__webpack_require__(/*! ./agent-expenses.component.css */ "./src/app/report/bookings/agent-expenses/agent-expenses.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], AgentExpensesComponent);
    return AgentExpensesComponent;
}());



/***/ }),

/***/ "./src/app/report/bookings/agent-local-trip/agent-local-trip.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/report/bookings/agent-local-trip/agent-local-trip.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* for popup modal final starts */\n.hyperLink_td {\n\tcolor: blue;\n\tcursor: pointer;\n}\n.hyperLink_td:hover {\n\tcolor: blue;\n\tfont-weight: bolder;\n\tcursor: pointer;\n}\n/* for popup modal final ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2Jvb2tpbmdzL2FnZW50LWxvY2FsLXRyaXAvYWdlbnQtbG9jYWwtdHJpcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQztDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEI7QUFFRDtDQUNDLFlBQVk7Q0FDWixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCO0FBQ0QsZ0NBQWdDIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L2Jvb2tpbmdzL2FnZW50LWxvY2FsLXRyaXAvYWdlbnQtbG9jYWwtdHJpcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9yIHBvcHVwIG1vZGFsIGZpbmFsIHN0YXJ0cyAqL1xuLmh5cGVyTGlua190ZCB7XG5cdGNvbG9yOiBibHVlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oeXBlckxpbmtfdGQ6aG92ZXIge1xuXHRjb2xvcjogYmx1ZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuLyogZm9yIHBvcHVwIG1vZGFsIGZpbmFsIGVuZHMgKi8iXX0= */"

/***/ }),

/***/ "./src/app/report/bookings/agent-local-trip/agent-local-trip.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/report/bookings/agent-local-trip/agent-local-trip.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Agent Local Trip Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"fromDate\" placeholder=\"dd-mm-yyyy\" name=\"fromDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"dd-mm-yyyy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showReportTypePerRights\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Report Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"reportType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"reportType\" #reportType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"reportTypeMode(reportType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"\">Select Report Type</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Received From\">Received From</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Sent To\">Sent To</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fromStations\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromStation id=\"fromStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select From Stations\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlFromStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteFromStation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteFromStation=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(fromStationDataListOptions | filterAgent: controlFromStation.value) as resultFromStation\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultFromStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.subStation\"> {{\n\t\t\t\t\t\t\t\t\t\t\t\toption.subStation }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultFromStation.length\">No result</app-option> </ng-container> </ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"toStations\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Station</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toStation\" #toStation\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select To Stations\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlToStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteToStation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteToStation=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(toStationDataListOptions | filterAgent: controlToStation.value) as resultToStation\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultToStation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.subStation\"> {{\n\t\t\t\t\t\t\t\t\t\t\t\toption.subStation }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultToStation.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Station</label> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Source</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">ALL</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"agra\">Agra</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bawana\">Bawana</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"dayaBasti\">Daya Basti</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</select> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"toStation\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Station</label> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-warehouse\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select To Station</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">All</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"budhpur\">Budhpur</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"nanglipoona\">Nanglipoona</option> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</select> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t</div> -->\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\" (click)=\"getAgentLocalTripDetails()\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"clearAll()\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\tid=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAgentLocalTrip\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerAgentLocalTrip\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Trip Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Vehicle No.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Trip No.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Trip From</th>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Center</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Chg Wt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let agentLocalTripData of agentLocalTripDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentLocalTripData.tripDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td (click)=\"rowSelected(agentLocalTripData)\"><u\n\t\t\t\t\t\t\t\t\t\t\tclass=\"hyperLink_td\">{{\n\t\t\t\t\t\t\t\t\t\t\t\tagentLocalTripData.vehicleNumber}}</u></td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentLocalTripData.tripNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentLocalTripData.tripFrom }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentLocalTripData.deliveryarea }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentLocalTripData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentLocalTripData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentLocalTripData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/bookings/agent-local-trip/agent-local-trip.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/report/bookings/agent-local-trip/agent-local-trip.component.ts ***!
  \********************************************************************************/
/*! exports provided: AgentLocalTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentLocalTripComponent", function() { return AgentLocalTripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_report_bookings_trip_lr_details_trip_lr_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/bookings/trip-lr-details/trip-lr-details.component */ "./src/app/report/bookings/trip-lr-details/trip-lr-details.component.ts");
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

var my = new Date();
//for datepicker ends
//for the select option with filter starts



//for the select option with filter ends






//for modal starts
//import { OnDestroy } from '@angular/core';



//import {Subscription} from 'rxjs';
//for modal ends
var AgentLocalTripComponent = /** @class */ (function () {
    //for modal ends
    function AgentLocalTripComponent(reportService, router, masterReadService, datePipe, dialog, route) {
        var _this = this;
        this.reportService = reportService;
        this.router = router;
        this.masterReadService = masterReadService;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.route = route;
        //    onDestroyUnsubscribtionAgentLocalTrip: Subscription;
        this.toAgentDto = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_9__["AgentDetailsDto"]();
        this.fromAgentDto = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_9__["AgentDetailsDto"]();
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_10__["LRDto"]();
        this.agentDtoFromStationAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_9__["AgentDetailsDto"]();
        this.agentDtoToStationAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_9__["AgentDetailsDto"]();
        //for datepicker ends
        this.loadingIndicator = true;
        this.isLoggedIn = true;
        this.stationsRights = "Agent Local Trip Stations Wise";
        this.pageTitle = "Local Booking Trip Report";
        this.controlFromStation = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlToStation = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.dtTriggerAgentLocalTrip = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
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
            this.dataTableAgentLocalTrip();
            if (this.stationsRights == "Agent Local Trip Stations Wise") {
                this.fromStations = true;
                this.toStations = true;
                this.showReportTypePerRights = false;
                //            this.getSourceList();
            }
            else if (this.stationsRights == "Agent Local Trip ReportType Wise") {
                this.showReportTypePerRights = true;
                //            this.getBookingStationsDetailsList();
            }
            if (this.userDataDtoReturnSession.isOpenTrip != null && this.userDataDtoReturnSession.isOpenTrip) {
                this.getFromStationsRead("Self");
            }
            else {
                this.getFromStationsRead("Agent");
            }
            this.getToStationsRead("Self");
            this.getAgentNamesFromStations();
            this.getAgentNamesToStations();
            //for modal starts
            this.routeQueryParams$ = route.queryParams.subscribe(function (params) {
                if (params['dialog']) {
                    _this.hireslipDialog();
                }
            });
            //for modal ends
        }
    }
    AgentLocalTripComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    AgentLocalTripComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    AgentLocalTripComponent.prototype.ngOnInit = function () {
    };
    AgentLocalTripComponent.prototype.dataTableAgentLocalTrip = function () {
        this.dtOptionsAgentLocalTrip = {
            //};
            //columns is used to for export and others starts
            //            columns: [
            //                {
            //                    title: 'Trip Date',
            //                    data: 'tripDate'
            //                },
            //                {
            //                    title: 'Vehicle No.',
            //                    data: 'vehicleNo'
            //                },
            //                {
            //                    title: 'Trip No.',
            //                    data: 'tripNo'
            //                },
            //                {
            //                    title: 'Trip From',
            //                    data: 'tripFrom'
            //                },
            //                {
            //                    title: 'Booking Cneter',
            //                    data: 'bookingCenter'
            //                },
            //                {
            //                    title: 'Total LRs',
            //                    data: 'totalLrs'
            //                }, {
            //                    title: 'Total Articles',
            //                    data: 'totalArticles'
            //                }, {
            //                    title: 'Total Chg Wt',
            //                    data: 'totalChgWt'
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
                    title: this.changeDataTableTitileForPrint(),
                    //                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
                }, {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: this.changeDataTableTitileForExcel(),
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
                // Total over all pages
                var total = api
                    .column(5)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Total over this page
                var pageTotal = api
                    .column(5, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                // Update footer
                $(api.column(5).footer()).html(pageTotal);
                var pageTotals = api
                    .column(6, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(6).footer()).html(pageTotals);
                var pageTotals = api
                    .column(7, { page: 'current' })
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(7).footer()).html(pageTotals);
                //                count starts
                var columnData = api
                    .column(1)
                    .data();
                //                var theColumnTotal = columnData
                //                    .reduce( function( a, b ) {
                //                        if ( isNaN( a ) ) {
                //                            return '';
                //                        } else {
                //                            a = parseFloat( a );
                //                        }
                //                        if ( isNaN( b ) ) {
                //                            return '';
                //                        } else {
                //                            b = parseFloat( b );
                //                        }
                //                        return ( a + b ).toFixed( 2 );
                //                    }, 0 );
                // Update footer
                $(api.column(1).footer()).html(columnData.count());
                //                counts ends
            }
            //end footerCallback      
        };
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //        this.getDataFrmServiceFrTable = this.reportService.getSummaryData()
        //        this.onDestroyUnsubscribtionAgentLocalTrip = this.getDataFrmServiceFrTable.subscribe( data => {
        //            this.agentLocalTripDataList = data['data'];
        //            this.dtTriggerAgentLocalTrip.next();
        //        } );
        //the below code is for the getting data through json ends
    };
    AgentLocalTripComponent.prototype.changeDataTableTitileForPrint = function () {
        return '<div class="row">'
            + '<div class="col-md-7">'
            + '<img src="assets/images/srdLogisticPrintLogo.png">'
            + '</div>'
            + '<div class="col-md-5">'
            + '<p style="font-size:16px;">' + this.userDataDtoReturnSession.addressId
            + '</p>'
            + '</div>'
            + '</div>'
            + '<div class="row"  style="text-align:right">'
            + '<div class="col-md-8">'
            + '<h5 style="border-bottom:1px solid;display:inline-block;"><span style="font-weight:bold">' + this.pageTitle + '</span></h5>'
            + '</div>'
            + '<div class="col-md-4">'
            + '<h6 style="font-weight:bold;">From Period: <span style="font-weight:400;">' + this.selectedFromDate + '</span></h6>'
            + '<h6 style="font-weight:bold;">To Period: <span style="font-weight:400;">' + this.selectedToDate + '</span></h6>'
            + '</div>'
            + '</div>';
    };
    //    chnageDataTableMessageTop() {
    //        return '<span>'
    //            + '<div style="text-align:center;">'
    //            + '<h5 style="border-bottom:1px solid;display:inline-block;"><span style="font-weight:bold">' + this.pageTitle + '</span></h5>'
    //            + '<h6 style="font-weight:bold;">'
    //            + "Date: " + '<span style="font-weight:400;">' + this.todayDate + '</span>'
    //            + '</h6>'
    //            + '</div>'
    //            + '</span>';
    //
    //    }
    AgentLocalTripComponent.prototype.changeDataTableTitileForExcel = function () {
        return "SRDlogo"
            + this.userDataDtoReturnSession.addressId;
    };
    AgentLocalTripComponent.prototype.chnageDataTableMessageTopExcel = function () {
        return +this.pageTitle
            + this.selectedFromDate
            + "                 "
            + this.selectedToDate;
    };
    AgentLocalTripComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerAgentLocalTrip.unsubscribe();
        //        this.onDestroyUnsubscribtionAgentLocalTrip.unsubscribe();
        //for modal starts
        this.routeQueryParams$.unsubscribe();
        //for modal ends
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    AgentLocalTripComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    AgentLocalTripComponent.prototype.reportTypeMode = function (reportType) {
        if (reportType === 'Received From') {
            this.fromStations = true;
            this.toStations = false;
        }
        else if (reportType === 'Sent To') {
            this.fromStations = false;
            this.toStations = true;
        }
        else {
            this.fromStations = false;
            this.toStations = false;
        }
    };
    AgentLocalTripComponent.prototype.getFromStationsRead = function (string) {
        this.fromAgentDto.mode = "toAgentLocalTrip";
        this.fromAgentDto.column2 = "working";
        this.fromAgentDto.companyId = this.userDataDtoReturnSession.companyId;
        this.fromAgentDto.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        if (string == "Self") {
            this.fromAgentDto.column3 = "Self";
        }
        else if (string == "Agent") {
            this.fromAgentDto.column3 = "Agent";
        }
        //        console.log( "From stations " + this.fromAgentDto.column3 );
        //        this.getAgentNamesToStations();
    };
    AgentLocalTripComponent.prototype.getAgentNamesFromStations = function () {
        var _this = this;
        //                console.log( this.lrDto.companyId );
        this.getFromStationsRead(String);
        this.masterReadService.getSourceListDetails(this.fromAgentDto).subscribe(function (response) {
            if (response) {
                //                    console.log( response );
                //                    console.log( this.fromStationDataListOptions[0] );
            }
            if (response.length == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Error",
                    text: "No Destination records found!",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                //                    alert( 'No Destination records found!' );
            }
            else {
                _this.fromStationDataListOptions = response;
                _this.fromStationAny = _this.fromStationDataListOptions;
                _this.agentDtoFromStationAll.subStation = "ALL";
                _this.fromStationDataListOptions.push(_this.agentDtoFromStationAll);
                _this.fromStationPassing = _this.fromStationAny.subStation;
                //                    this.fromStationPassing = this.fromStationAny;
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
            text: "Server Error While Getting From Stations Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    AgentLocalTripComponent.prototype.getToStationsRead = function (string) {
        this.toAgentDto.mode = "toAgentLocalTrip";
        this.toAgentDto.column2 = "working";
        this.toAgentDto.companyId = this.userDataDtoReturnSession.companyId;
        this.toAgentDto.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        if (string == "Self") {
            this.toAgentDto.column3 = "Self";
        }
        //        console.log( "To stations " + this.toAgentDto.column3 );
        //        this.getAgentNamesToStations();
    };
    AgentLocalTripComponent.prototype.getAgentNamesToStations = function () {
        var _this = this;
        //        console.log( this.lrDto.companyId );
        this.getToStationsRead(String);
        this.masterReadService.getSourceListDetails(this.toAgentDto).subscribe(function (response) {
            if (response.length == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: "Error",
                    text: "No Destination records found!",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                //                    alert( 'No Destination records found!' );
            }
            else {
                _this.toStationDataListOptions = response;
                _this.toStationAny = _this.toStationDataListOptions;
                _this.agentDtoToStationAll.subStation = "ALL";
                _this.toStationDataListOptions.push(_this.agentDtoToStationAll);
                _this.toStationPassing = _this.toStationAny.subStation;
                //                    console.log( "Set>>" + this.toStationPassing );
            }
            //                    console.log( this.natureOfPackDataList[0] );
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
            text: "Server Error While Getting To Stations Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    AgentLocalTripComponent.prototype.getDetailsForTableRead = function () {
        this.selectedFromStation = $("#fromStation").val();
        this.selectedToStation = $("#toStation").val();
        this.selectedRptType = $("#reportType").val();
        this.selectedFromDate = $("#fromDate").val();
        this.selectedToDate = $("#toDate").val();
        //        console.log( this.selectedFromDate );
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        this.lrDto.branch = this.userDataDtoReturnSession.office;
        this.lrDto.mainstation = this.userDataDtoReturnSession.mainStation;
        this.lrDto.status = "Pending";
        this.lrDto.listFromStations = this.fromStationPassing;
        this.lrDto.listToStations = this.toStationPassing;
        //        console.log( this.lrDto.listFromStations + this.lrDto.listToStations );
        this.lrDto.fromStation = this.selectedFromStation;
        this.lrDto.toStation = this.selectedToStation;
        //        this.lrDto.fromDate = this.datePipe.transform( this.selectedFromDate, 'yyyy-MM-dd' );
        //        this.lrDto.toDate = this.datePipe.transform( this.selectedToDate, 'yyyy-MM-dd' );
        //        this.lrDto.fromDate = this.selectedFromDate;
        //        this.lrDto.toDate = this.selectedToDate;
        if (this.selectedRptType == null || this.selectedRptType == "") {
            this.lrDto.reportMode = "";
        }
        else {
            this.lrDto.reportMode = this.selectedRptType;
        }
        //                this.lrDto.tripDate = this.lrDto.fromDate;
        this.dataTableAgentLocalTrip();
    };
    AgentLocalTripComponent.prototype.getAgentLocalTripDetails = function () {
        var _this = this;
        this.getDetailsForTableRead();
        //        console.log( this.lrDto );
        this.reportService.getLocalTripDetailsService(this.lrDto).subscribe(function (response) {
            if (response) {
                //                    console.log( response );
                _this.agentLocalTripDataList = response;
                //                    console.log( this.agentLocalTripDataList[0] );
                _this.agentLocalTripDataList.tripDate = _this.datePipe.transform(_this.agentLocalTripDataList.tripDate, "dd-MM-yyyy");
                //                    console.log( "Date Formatted >>>" + this.agentLocalTripDataList.tripDate );
                _this.dtTriggerAgentLocalTrip.next();
                //                    console.log( this.fromStationDataListOptions[0] );
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
            text: "Server Error While Getting From Stations Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    AgentLocalTripComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    AgentLocalTripComponent.prototype.clearAll = function () {
        this.controlFromStation.reset();
        this.controlToStation.reset();
        $("#fromDate").val('');
        $("#toDate").val('');
    };
    AgentLocalTripComponent.prototype.rowSelected = function (agentLocalTripData) {
        this.selectedRow = agentLocalTripData;
        //        console.log( "selected rows>>> " + this.selectedRow.id );
        this.hireslipDialog();
    };
    //for modal starts
    AgentLocalTripComponent.prototype.hireslipDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_report_bookings_trip_lr_details_trip_lr_details_component__WEBPACK_IMPORTED_MODULE_12__["TripLrDetailsComponent"], {
            data: { listOfDataToPass: this.selectedRow }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.router.navigate(['.'], { relativeTo: _this.route });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AgentLocalTripComponent.prototype, "dtElements", void 0);
    AgentLocalTripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agent-local-trip',
            template: __webpack_require__(/*! ./agent-local-trip.component.html */ "./src/app/report/bookings/agent-local-trip/agent-local-trip.component.html"),
            styles: [__webpack_require__(/*! ./agent-local-trip.component.css */ "./src/app/report/bookings/agent-local-trip/agent-local-trip.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_8__["MasterReadService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], AgentLocalTripComponent);
    return AgentLocalTripComponent;
}());



/***/ }),

/***/ "./src/app/report/bookings/agent-statement/agent-statement.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/report/bookings/agent-statement/agent-statement.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9ib29raW5ncy9hZ2VudC1zdGF0ZW1lbnQvYWdlbnQtc3RhdGVtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/report/bookings/agent-statement/agent-statement.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/report/bookings/agent-statement/agent-statement.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Booking Agent Statement\n\t\t\t\t\tReport</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"statementNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Statement Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"agentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" [formControl]=\"controlMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteAgentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteAgentName=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(agentNameOptions | filter: controlMain.value) as resultAgentName\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultAgentName.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<div class='row p-t-10'>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Booking Agent\n\t\t\t\t\t\t\t\t\t\tStatement Report</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t<button style=\"padding: 2px;\" type=\"submit\" class=\"btn m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"paymentBtn\">Payment</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsBkgAgentStmtReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerBkgAgentStmtReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Statement No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Stmt Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>From Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Payable Amt</th>\n\t\t\t\t\t\t\t\t\t\t<th>D.O.P</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cash</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cheque</th>\n\t\t\t\t\t\t\t\t\t\t<th>PDC</th>\n\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let bkgAgentStmtReportData of bkgAgentStmtReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.statementNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.stmtDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.fromPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.toPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.totalArt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.totalChgWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.payableAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.dob }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.cash }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.cheque }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ bkgAgentStmtReportData.pdc }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/report/bookings/agent-statement/agent-statement.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/report/bookings/agent-statement/agent-statement.component.ts ***!
  \******************************************************************************/
/*! exports provided: AgentStatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentStatementComponent", function() { return AgentStatementComponent; });
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
//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends

//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter starts

//for the select option with filter ends
var AgentStatementComponent = /** @class */ (function () {
    function AgentStatementComponent(bkgAgentStmtReport) {
        this.bkgAgentStmtReport = bkgAgentStmtReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.controlMain = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.agentNameOptions = [
            { id: 1, label: 'ANDHERI' },
            { id: 2, label: 'BHIWANDI' },
            { id: 3, label: 'CHINCH BANDER' },
            { id: 4, label: 'DAMAN' }
        ];
        this.dtTriggerBkgAgentStmtReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AgentStatementComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    AgentStatementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsBkgAgentStmtReport = {
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
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
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
        this.getDataFrmServiceFrTable = this.bkgAgentStmtReport.getSummaryData();
        this.onDestroyUnsubscribtionBkgAgentStmtReport = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.bkgAgentStmtReportDataList = data['data'];
            _this.dtTriggerBkgAgentStmtReport.next();
        });
    };
    AgentStatementComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerBkgAgentStmtReport.unsubscribe();
        this.onDestroyUnsubscribtionBkgAgentStmtReport.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    AgentStatementComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AgentStatementComponent.prototype, "dtElements", void 0);
    AgentStatementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agent-statement',
            template: __webpack_require__(/*! ./agent-statement.component.html */ "./src/app/report/bookings/agent-statement/agent-statement.component.html"),
            styles: [__webpack_require__(/*! ./agent-statement.component.css */ "./src/app/report/bookings/agent-statement/agent-statement.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], AgentStatementComponent);
    return AgentStatementComponent;
}());



/***/ }),

/***/ "./src/app/report/bookings/booking-agent-report/booking-agent-report.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/report/bookings/booking-agent-report/booking-agent-report.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9ib29raW5ncy9ib29raW5nLWFnZW50LXJlcG9ydC9ib29raW5nLWFnZW50LXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/bookings/booking-agent-report/booking-agent-report.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/report/bookings/booking-agent-report/booking-agent-report.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Booking Agent Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"agentType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"agentType\" #agentType\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"agentTypeMode(agentType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"subAgent\">Sub Agent</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mainAgent\">Main Agent</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"destinationWise\">Destination\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tWise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"summaryDetails\">Summary Details</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"toPayReport\">ToPay Report</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"paidReport\">Paid Report</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"agentWiseBookingReport\">AgentWise\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tBooking Report</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"agentWiseBookingReportItemWise\">AgentWise\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tBooking Report(ItemWise)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"agentTypeSubAgent\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"agentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent Name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteAgentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteAgentName=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(agentNameOptions | filter: controlAgentName.value) as resultAgentName\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultAgentName.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"agentTypeMainAgent\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"selectMainAgent\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Select Main Agent</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Main Agent\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlSelectMainAgent\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSelectMainAgent\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t#autocompleteSelectMainAgent=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(selectMainAgentOptions | filter: controlSelectMainAgent.value) as resultSelectMainAgent\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSelectMainAgent\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSelectMainAgent.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #toDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source (Collection Center)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Source (Collection Center)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlSource\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteSource\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteSource=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(sourceOptions | filter: controlSource.value) as resultSource\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSource\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSource.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteDestination=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationOptions | filter: controlDestination.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestination.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title\">Agent Report Destination Wise Details</h6>\n\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble starts -->\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAgentReportDestinationWiseDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerAgentReportDestinationWiseDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Lc Charge</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let agentReportDestinationWiseDetailsData of agentReportDestinationWiseDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportDestinationWiseDetailsData.lrNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportDestinationWiseDetailsData.actualWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportDestinationWiseDetailsData.chargeWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportDestinationWiseDetailsData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportDestinationWiseDetailsData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportDestinationWiseDetailsData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportDestinationWiseDetailsData.lcCharge }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble ends -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable starts  -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<div [hidden]=\"!agentReportSummaryDetaLilsTable\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Agent Report Summaary Details</h6>\n\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAgentReportSummaryDetails\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerAgentReportSummaryDetails\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Station</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Lc Charge</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let agentReportSummaryDetailsData of agentReportSummaryDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportSummaryDetailsData.station }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportSummaryDetailsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportSummaryDetailsData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportSummaryDetailsData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportSummaryDetailsData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportSummaryDetailsData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentReportSummaryDetailsData.lcCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe second datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe third datatable starts  -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<div [hidden]=\"!agentToPayReportDataListTable\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Agent To Pay Report</h6>\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAgentToPayReport\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerAgentToPayReport\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Invoice No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Consignor GST No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Lc Charge</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let agentToPayReportData of agentToPayReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentToPayReportData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentToPayReportData.lrNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentToPayReportData.bookingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentToPayReportData.invoiceNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentToPayReportData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentToPayReportData.consignorGstNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentToPayReportData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentToPayReportData.lcCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\tthe third datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fourth datatable starts  -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<div [hidden]=\"!agentPaidReportDataListTable\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Agent Paid Report</h6>\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAgentPaidReport\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerAgentPaidReport\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Invoice No</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Lc Charge</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let agentPaidReportData of agentPaidReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentPaidReportData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentPaidReportData.lrNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentPaidReportData.bookingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentPaidReportData.invoiceNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentPaidReportData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentPaidReportData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentPaidReportData.lcCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\tthe fourth datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fifth datatable starts  -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<div [hidden]=\"!agentWiseBooingReportDataListTable\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Agent Wise Booking Report</h6>\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAgentWiseBooingReport\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerAgentWiseBooingReport\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Booking Item</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>% Of Booking</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>% Of Booking</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Lc Charge</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let agentWiseBooingReportData of agentWiseBooingReportDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentWiseBooingReportData.bookingItem }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentWiseBooingReportData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\tagentWiseBooingReportData.actualPercentageOfBooking }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentWiseBooingReportData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\tagentWiseBooingReportData.chargedPercentageOfBooking }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentWiseBooingReportData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentWiseBooingReportData.lcCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe fifth datatable ends  -->\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe sixth datatable starts  -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<div [hidden]=\"!agentWiseBooingReportItemWiseDataListTable\">\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Agent Wise Booking Report(ItemWise)</h6>\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsAgentWiseBooingReportItemWise\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerAgentWiseBooingReportItemWise\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Booking Item</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>% Of Booking</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>% Of Booking</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Lc Charge</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let agentWiseBooingReportItemWiseData of agentWiseBooingReportItemWiseDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentWiseBooingReportItemWiseData.bookingItem }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentWiseBooingReportItemWiseData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\tagentWiseBooingReportItemWiseData.actualPercentageOfBooking\n\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentWiseBooingReportItemWiseData.chargedWeight\n\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\tagentWiseBooingReportItemWiseData.chargedPercentageOfBooking\n\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentWiseBooingReportItemWiseData.articles }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentWiseBooingReportItemWiseData.lcCharge }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe sixth datatable ends  -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-body\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/bookings/booking-agent-report/booking-agent-report.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/report/bookings/booking-agent-report/booking-agent-report.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BookingAgentReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingAgentReportComponent", function() { return BookingAgentReportComponent; });
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
var BookingAgentReportComponent = /** @class */ (function () {
    function BookingAgentReportComponent(bookingAgentRpt) {
        this.bookingAgentRpt = bookingAgentRpt;
        this.agentTypeSubAgent = true;
        this.agentTypeMainAgent = false;
        this.searchByDestinationWise = true;
        this.searchBySummaryDetails = false;
        this.searchByToPayReport = false;
        this.searchByPaidReport = false;
        this.searchByAgentWiseBookingReport = false;
        this.searchByAgentWiseBookingReportItemWise = false;
        this.loadingIndicator = true;
        this.reorderable = true;
        //for the select option with filter starts
        this.controlAgentName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlSelectMainAgent = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlSource = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.controlDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.agentNameOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Bawana' },
            { id: 3, label: 'Gandhi Nagar' },
            { id: 3, label: 'Jamuna Bazar' }
        ];
        this.selectMainAgentOptions = [
            { id: 1, label: 'Agra' },
            { id: 2, label: 'Baraut' },
            { id: 3, label: 'Bhavesh' },
            { id: 3, label: 'Daman' }
        ];
        this.sourceOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Andheri' },
            { id: 3, label: 'Bawana' },
            { id: 3, label: 'Daman' }
        ];
        this.destinationOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Bangalore' },
            { id: 3, label: 'Budhpur' },
            { id: 3, label: 'Delhi' }
        ];
        this.dtTriggerAgentReportDestinationWiseDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerAgentReportSummaryDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerAgentToPayReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerAgentPaidReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerAgentWiseBooingReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtTriggerAgentWiseBooingReportItemWise = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    BookingAgentReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    BookingAgentReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        //the first datatable starts
        this.dtOptionsAgentReportDestinationWiseDetails = {
            //};
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
        },
            //the first datatable ends
            //            the second datatable starts 
            this.dtOptionsAgentReportSummaryDetails = {
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
            },
            //the second datatable ends
            //the third datatable starts            
            this.dtOptionsAgentToPayReport = {
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
            },
            //the third datatable ends
            //the fourth datatable starts            
            this.dtOptionsAgentPaidReport = {
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
            },
            //the fourth datatable ends
            //the fifth datatable starts
            this.dtOptionsAgentWiseBooingReport = {
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
            },
            //the fifth datatable ends
            //the sixth datatable starts 
            this.dtOptionsAgentWiseBooingReportItemWise = {
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
        //the sixth datatable ends
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        //first service starts 
        this.getDataAgentReportDestinationWiseDetailsDataListTable = this.bookingAgentRpt.getSummaryData();
        this.onDestroyUnsubscribtionAgentReportDestinationWiseDetails = this.getDataAgentReportDestinationWiseDetailsDataListTable.subscribe(function (data) {
            _this.agentReportDestinationWiseDetailsDataList = data['data'];
            _this.dtTriggerAgentReportDestinationWiseDetails.next();
        });
        //first service ends
        //second service starts
        this.getDataAgentReportSummaryDetailsTable = this.bookingAgentRpt.getSummaryData();
        this.onDestroyUnsubscribtionAgentReportSummaryDetails = this.getDataAgentReportSummaryDetailsTable.subscribe(function (data) {
            _this.agentReportSummaryDetailsDataList = data['data'];
            _this.dtTriggerAgentReportSummaryDetails.next();
        });
        //second service ends
        //third service starts
        this.getDataAgentToPayReport = this.bookingAgentRpt.getSummaryData();
        this.onDestroyUnsubscribtionAgentToPayReport = this.getDataAgentToPayReport.subscribe(function (data) {
            _this.agentToPayReportDataList = data['data'];
            _this.dtTriggerAgentToPayReport.next();
        });
        //third service starts
        //fourth service starts
        this.getDataAgentPaidReport = this.bookingAgentRpt.getSummaryData();
        this.onDestroyUnsubscribtionAgentPaidReport = this.getDataAgentPaidReport.subscribe(function (data) {
            _this.agentPaidReportDataList = data['data'];
            _this.dtTriggerAgentPaidReport.next();
        });
        //fourth service ends
        //fifth service starts
        this.getDataAgentWiseBooingReport = this.bookingAgentRpt.getSummaryData();
        this.onDestroyUnsubscribtionAgentWiseBooingReport = this.getDataAgentWiseBooingReport.subscribe(function (data) {
            _this.agentWiseBooingReportDataList = data['data'];
            _this.dtTriggerAgentWiseBooingReport.next();
        });
        //fifth service ends
        //sixth service starts
        this.getDataAgentWiseBooingReportItemWise = this.bookingAgentRpt.getSummaryData();
        this.onDestroyUnsubscribtionAgentWiseBooingReportItemWise = this.getDataAgentWiseBooingReportItemWise.subscribe(function (data) {
            _this.agentWiseBooingReportItemWiseDataList = data['data'];
            _this.dtTriggerAgentWiseBooingReportItemWise.next();
        });
        //sixth service ends
    };
    BookingAgentReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerAgentReportDestinationWiseDetails.unsubscribe();
        this.dtTriggerAgentReportSummaryDetails.unsubscribe();
        this.dtTriggerAgentToPayReport.unsubscribe();
        this.dtTriggerAgentPaidReport.unsubscribe();
        this.dtTriggerAgentWiseBooingReport.unsubscribe();
        this.dtTriggerAgentWiseBooingReportItemWise.unsubscribe();
        this.onDestroyUnsubscribtionAgentReportDestinationWiseDetails.unsubscribe();
        this.onDestroyUnsubscribtionAgentReportSummaryDetails.unsubscribe();
        this.onDestroyUnsubscribtionAgentToPayReport.unsubscribe();
        this.onDestroyUnsubscribtionAgentPaidReport.unsubscribe();
        this.onDestroyUnsubscribtionAgentWiseBooingReport.unsubscribe();
        this.onDestroyUnsubscribtionAgentWiseBooingReportItemWise.unsubscribe();
    };
    BookingAgentReportComponent.prototype.agentTypeMode = function (agentType) {
        if (agentType === 'subAgent') {
            this.agentTypeSubAgent = true;
            this.agentTypeMainAgent = false;
        }
        else if (agentType === 'mainAgent') {
            this.agentTypeSubAgent = false;
            this.agentTypeMainAgent = true;
        }
        else {
            this.agentTypeSubAgent = false;
            this.agentTypeMainAgent = false;
        }
    };
    BookingAgentReportComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'destinationWise') {
            this.searchByDestinationWise = true;
            this.searchBySummaryDetails = false;
            this.searchByToPayReport = false;
            this.searchByPaidReport = false;
            this.searchByAgentWiseBookingReport = false;
            this.searchByAgentWiseBookingReportItemWise = false;
        }
        else if (searchBy === 'summaryDetails') {
            this.searchByDestinationWise = false;
            this.searchBySummaryDetails = true;
            this.searchByToPayReport = false;
            this.searchByPaidReport = false;
            this.searchByAgentWiseBookingReport = false;
            this.searchByAgentWiseBookingReportItemWise = false;
        }
        else if (searchBy === 'toPayReport') {
            this.searchByDestinationWise = false;
            this.searchBySummaryDetails = false;
            this.searchByToPayReport = true;
            this.searchByPaidReport = false;
            this.searchByAgentWiseBookingReport = false;
            this.searchByAgentWiseBookingReportItemWise = false;
        }
        else if (searchBy === 'paidReport') {
            this.searchByDestinationWise = false;
            this.searchBySummaryDetails = false;
            this.searchByToPayReport = false;
            this.searchByPaidReport = true;
            this.searchByAgentWiseBookingReport = false;
            this.searchByAgentWiseBookingReportItemWise = false;
        }
        else if (searchBy === 'agentWiseBookingReport') {
            this.searchByDestinationWise = false;
            this.searchBySummaryDetails = false;
            this.searchByToPayReport = false;
            this.searchByPaidReport = false;
            this.searchByAgentWiseBookingReport = true;
            this.searchByAgentWiseBookingReportItemWise = false;
        }
        else if (searchBy === 'agentWiseBookingReportItemWise') {
            this.searchByDestinationWise = false;
            this.searchBySummaryDetails = false;
            this.searchByToPayReport = false;
            this.searchByPaidReport = false;
            this.searchByAgentWiseBookingReport = false;
            this.searchByAgentWiseBookingReportItemWise = true;
        }
        else {
            this.searchByDestinationWise = false;
            this.searchBySummaryDetails = false;
            this.searchByToPayReport = false;
            this.searchByPaidReport = false;
            this.searchByAgentWiseBookingReport = false;
            this.searchByAgentWiseBookingReportItemWise = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    BookingAgentReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    BookingAgentReportComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    ], BookingAgentReportComponent.prototype, "dtElements", void 0);
    BookingAgentReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-agent-report',
            template: __webpack_require__(/*! ./booking-agent-report.component.html */ "./src/app/report/bookings/booking-agent-report/booking-agent-report.component.html"),
            styles: [__webpack_require__(/*! ./booking-agent-report.component.css */ "./src/app/report/bookings/booking-agent-report/booking-agent-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], BookingAgentReportComponent);
    return BookingAgentReportComponent;
}());



/***/ }),

/***/ "./src/app/report/bookings/bookings.module.ts":
/*!****************************************************!*\
  !*** ./src/app/report/bookings/bookings.module.ts ***!
  \****************************************************/
/*! exports provided: BookingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsModule", function() { return BookingsModule; });
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
/* harmony import */ var src_app_report_bookings_bookings_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/bookings/bookings.routing */ "./src/app/report/bookings/bookings.routing.ts");
/* harmony import */ var src_app_report_bookings_booking_agent_report_booking_agent_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/bookings/booking-agent-report/booking-agent-report.component */ "./src/app/report/bookings/booking-agent-report/booking-agent-report.component.ts");
/* harmony import */ var src_app_report_bookings_agent_expenses_agent_expenses_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/bookings/agent-expenses/agent-expenses.component */ "./src/app/report/bookings/agent-expenses/agent-expenses.component.ts");
/* harmony import */ var src_app_report_bookings_memo_memo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/bookings/memo/memo.component */ "./src/app/report/bookings/memo/memo.component.ts");
/* harmony import */ var src_app_report_bookings_office_hireslip_office_hireslip_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/report/bookings/office-hireslip/office-hireslip.component */ "./src/app/report/bookings/office-hireslip/office-hireslip.component.ts");
/* harmony import */ var src_app_report_bookings_memo_invoice_memo_invoice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/report/bookings/memo-invoice/memo-invoice.component */ "./src/app/report/bookings/memo-invoice/memo-invoice.component.ts");
/* harmony import */ var src_app_report_bookings_agent_statement_agent_statement_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/report/bookings/agent-statement/agent-statement.component */ "./src/app/report/bookings/agent-statement/agent-statement.component.ts");
/* harmony import */ var src_app_report_bookings_agent_local_trip_agent_local_trip_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/report/bookings/agent-local-trip/agent-local-trip.component */ "./src/app/report/bookings/agent-local-trip/agent-local-trip.component.ts");
/* harmony import */ var src_app_report_bookings_trip_lr_details_trip_lr_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/report/bookings/trip-lr-details/trip-lr-details.component */ "./src/app/report/bookings/trip-lr-details/trip-lr-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends









var BookingsModule = /** @class */ (function () {
    function BookingsModule() {
    }
    BookingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_bookings_bookings_routing__WEBPACK_IMPORTED_MODULE_10__["BookingRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"]],
            declarations: [
                src_app_report_bookings_booking_agent_report_booking_agent_report_component__WEBPACK_IMPORTED_MODULE_11__["BookingAgentReportComponent"],
                src_app_report_bookings_agent_expenses_agent_expenses_component__WEBPACK_IMPORTED_MODULE_12__["AgentExpensesComponent"],
                src_app_report_bookings_memo_memo_component__WEBPACK_IMPORTED_MODULE_13__["MemoComponent"],
                src_app_report_bookings_office_hireslip_office_hireslip_component__WEBPACK_IMPORTED_MODULE_14__["OfficeHireslipComponent"],
                src_app_report_bookings_memo_invoice_memo_invoice_component__WEBPACK_IMPORTED_MODULE_15__["MemoInvoiceComponent"],
                src_app_report_bookings_agent_statement_agent_statement_component__WEBPACK_IMPORTED_MODULE_16__["AgentStatementComponent"],
                src_app_report_bookings_agent_local_trip_agent_local_trip_component__WEBPACK_IMPORTED_MODULE_17__["AgentLocalTripComponent"],
                src_app_report_bookings_trip_lr_details_trip_lr_details_component__WEBPACK_IMPORTED_MODULE_18__["TripLrDetailsComponent"]
            ],
            entryComponents: [src_app_report_bookings_trip_lr_details_trip_lr_details_component__WEBPACK_IMPORTED_MODULE_18__["TripLrDetailsComponent"]]
        })
    ], BookingsModule);
    return BookingsModule;
}());



/***/ }),

/***/ "./src/app/report/bookings/bookings.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/report/bookings/bookings.routing.ts ***!
  \*****************************************************/
/*! exports provided: BookingRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingRoutes", function() { return BookingRoutes; });
/* harmony import */ var src_app_report_bookings_booking_agent_report_booking_agent_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/report/bookings/booking-agent-report/booking-agent-report.component */ "./src/app/report/bookings/booking-agent-report/booking-agent-report.component.ts");
/* harmony import */ var src_app_report_bookings_agent_expenses_agent_expenses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report/bookings/agent-expenses/agent-expenses.component */ "./src/app/report/bookings/agent-expenses/agent-expenses.component.ts");
/* harmony import */ var src_app_report_bookings_memo_memo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/report/bookings/memo/memo.component */ "./src/app/report/bookings/memo/memo.component.ts");
/* harmony import */ var src_app_report_bookings_office_hireslip_office_hireslip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/report/bookings/office-hireslip/office-hireslip.component */ "./src/app/report/bookings/office-hireslip/office-hireslip.component.ts");
/* harmony import */ var src_app_report_bookings_memo_invoice_memo_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/report/bookings/memo-invoice/memo-invoice.component */ "./src/app/report/bookings/memo-invoice/memo-invoice.component.ts");
/* harmony import */ var src_app_report_bookings_agent_statement_agent_statement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/report/bookings/agent-statement/agent-statement.component */ "./src/app/report/bookings/agent-statement/agent-statement.component.ts");
/* harmony import */ var src_app_report_bookings_agent_local_trip_agent_local_trip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/report/bookings/agent-local-trip/agent-local-trip.component */ "./src/app/report/bookings/agent-local-trip/agent-local-trip.component.ts");







var BookingRoutes = [
    {
        path: '',
        children: [
            {
                path: 'bookingAgentReport',
                component: src_app_report_bookings_booking_agent_report_booking_agent_report_component__WEBPACK_IMPORTED_MODULE_0__["BookingAgentReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'agentExpenses',
                component: src_app_report_bookings_agent_expenses_agent_expenses_component__WEBPACK_IMPORTED_MODULE_1__["AgentExpensesComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'memo',
                component: src_app_report_bookings_memo_memo_component__WEBPACK_IMPORTED_MODULE_2__["MemoComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'officeHireslip',
                component: src_app_report_bookings_office_hireslip_office_hireslip_component__WEBPACK_IMPORTED_MODULE_3__["OfficeHireslipComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'memoInvoice',
                component: src_app_report_bookings_memo_invoice_memo_invoice_component__WEBPACK_IMPORTED_MODULE_4__["MemoInvoiceComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'agentStatement',
                component: src_app_report_bookings_agent_statement_agent_statement_component__WEBPACK_IMPORTED_MODULE_5__["AgentStatementComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'agentLocalTrip',
                component: src_app_report_bookings_agent_local_trip_agent_local_trip_component__WEBPACK_IMPORTED_MODULE_6__["AgentLocalTripComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/report/bookings/memo-invoice/memo-invoice.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/report/bookings/memo-invoice/memo-invoice.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9ib29raW5ncy9tZW1vLWludm9pY2UvbWVtby1pbnZvaWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/report/bookings/memo-invoice/memo-invoice.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/report/bookings/memo-invoice/memo-invoice.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Memo Invoice</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>View Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"viewType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"viewType\" #viewType\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"viewTypeMode(viewType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"invoiceNoWise\">Invoice\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNumber</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"dateWise\">Date Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"partyWise\">Party Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewTypePartyWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"gstNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>GST No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewTypePartyWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consignorName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignor Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignor\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConsignorName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteConsignorName=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(consignorNameOptions | filter: controlMain.value) as resultConsignorName\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultConsignorName\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultConsignorName.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewTypeDateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewTypeDateWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!--  <div class=\"col-sm-12 col-md-12\">\n                            <div class=\"form-group\">\n                              <div class=\"input-group\" id=\"toDate\">\n                                <label>To Date</label>\n                                <input ng-change=\"vm.dateString = (dateObj | date: 'dd/dd/yyyy')\" class=\"form-control\" (click)=\"d.toggle()\" placeholder=\"yyyy-mm-dd\"\n                                  name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n                                <div class=\"input-group-append\" (click)=\"d.toggle()\">\n                                  <span class=\"input-group-text\">\n                                    <i class=\"fa fa-calendar\"></i>\n                                  </span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>-->\n\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"source\">\n                          <label>Source</label>\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-box\"></i>\n                            </span>\n                          </div>\n                           <select class=\"custom-select col-12\">\n                            <option selected>Select.....</option>\n                            <option value=\"delhi\">Delhi</option>\n<option value=\"mumbai\">Mumbai</option>\n<option value=\"agra\">Agra</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                    \n                    <div *ngIf=\"viewTypePartyWise\" class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"destination\">\n                          <label>Consignor Index</label>\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\" fas fa-road\"></i>\n                            </span>\n                          </div>\n                           <select class=\"custom-select col-12\">\n                            <option selected>Select.....</option>\n                            <option value=\"1\">A</option>\n                            <option value=\"2\">B</option>\n                            <option value=\"3\">C</option>\n                            <option value=\"4\">D</option>\n                            <option value=\"5\">E</option>\n                            <option value=\"6\">F</option>\n                            <option value=\"7\">G</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>-->\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewTypeInvoiceNoWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"invoiceNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Booking Memo Invoice\n\t\t\t\t\t\t\t\tReport</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsMemoInvoiceReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerMemoInvoiceReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Consignor Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Invoice Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>From Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Ser.Tax</th>\n\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let memoInvoiceReportData of memoInvoiceReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ memoInvoiceReportData.invoiceNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ memoInvoiceReportData.consignorName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ memoInvoiceReportData.invoiceDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ memoInvoiceReportData.fromPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.toPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.totalArt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.totalChgWt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.totalPaid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ shortAndExtraReportData.serTax }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/bookings/memo-invoice/memo-invoice.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/report/bookings/memo-invoice/memo-invoice.component.ts ***!
  \************************************************************************/
/*! exports provided: MemoInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoInvoiceComponent", function() { return MemoInvoiceComponent; });
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
//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends

//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter starts

//for the select option with filter ends
var MemoInvoiceComponent = /** @class */ (function () {
    function MemoInvoiceComponent(memoInvoiceReport) {
        this.memoInvoiceReport = memoInvoiceReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.viewTypeInvoiceNoWise = true;
        this.viewTypeDateWise = false;
        this.viewTypePartyWise = false;
        this.controlMain = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.consignorNameOptions = [
            { id: 1, label: 'ALL' },
            { id: 2, label: 'A B C Company' },
            { id: 3, label: 'M K TEXTILE' },
            { id: 4, label: 'S D FOOTWEAR' }
        ];
        this.dtTriggerMemoInvoiceReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MemoInvoiceComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    MemoInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsMemoInvoiceReport = {
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
        //the below code is for the getting data through json starts
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.getDataFrmServiceFrTable = this.memoInvoiceReport.getSummaryData();
        this.onDestroyUnsubscribtionMemoInvoiceReport = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.memoInvoiceReportDataList = data['data'];
            _this.dtTriggerMemoInvoiceReport.next();
        });
    };
    MemoInvoiceComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerMemoInvoiceReport.unsubscribe();
        this.onDestroyUnsubscribtionMemoInvoiceReport.unsubscribe();
    };
    MemoInvoiceComponent.prototype.viewTypeMode = function (viewType) {
        if (viewType === 'invoiceNoWise') {
            this.viewTypeInvoiceNoWise = true;
            this.viewTypeDateWise = false;
            this.viewTypePartyWise = false;
        }
        else if (viewType === 'dateWise') {
            this.viewTypeInvoiceNoWise = false;
            this.viewTypeDateWise = true;
            this.viewTypePartyWise = false;
        }
        else if (viewType === 'partyWise') {
            this.viewTypeInvoiceNoWise = false;
            this.viewTypeDateWise = true;
            this.viewTypePartyWise = true;
        }
        else {
            this.viewTypeInvoiceNoWise = false;
            this.viewTypeDateWise = false;
            this.viewTypePartyWise = false;
        }
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    MemoInvoiceComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MemoInvoiceComponent.prototype, "dtElements", void 0);
    MemoInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-memo-invoice',
            template: __webpack_require__(/*! ./memo-invoice.component.html */ "./src/app/report/bookings/memo-invoice/memo-invoice.component.html"),
            styles: [__webpack_require__(/*! ./memo-invoice.component.css */ "./src/app/report/bookings/memo-invoice/memo-invoice.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], MemoInvoiceComponent);
    return MemoInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/report/bookings/memo/memo.component.css":
/*!*********************************************************!*\
  !*** ./src/app/report/bookings/memo/memo.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below css is done for the verticle form starts here*/\n\nhr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/* the below css is done for the verticle form ends here */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2Jvb2tpbmdzL21lbW8vbWVtby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDs7QUFFNUQ7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCOztBQUVELDJEQUEyRCIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9ib29raW5ncy9tZW1vL21lbW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRoZSBiZWxvdyBjc3MgaXMgZG9uZSBmb3IgdGhlIHZlcnRpY2xlIGZvcm0gc3RhcnRzIGhlcmUqL1xuXG5ociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbi8qIHRoZSBiZWxvdyBjc3MgaXMgZG9uZSBmb3IgdGhlIHZlcnRpY2xlIGZvcm0gZW5kcyBoZXJlICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/report/bookings/memo/memo.component.html":
/*!**********************************************************!*\
  !*** ./src/app/report/bookings/memo/memo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Booking Memo Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-question\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Default</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">After Rate Change</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select.....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"agra\">Agra</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select.....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consigneeGstNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee GST No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consigneeName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">A B C Company</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">M K TEXTILE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">S D FOOTWEAR</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consignorTinNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignor GST No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consignorIndex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignor Index</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">A</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">B</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">C</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"consignorName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Consignor Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select....</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">A B C Company</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">M K TEXTILE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">S D FOOTWEAR</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Paid Report 1</h6> -->\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsBookingMemoRpt\"\n\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerBookingMemoRpt\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LR No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Memo No</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Created Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Grand Total</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let bookingMemoRptData of bookingMemoRptDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ bookingMemoRptData.lrNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ bookingMemoRptData.memoNo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ bookingMemoRptData.createdDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ bookingMemoRptData.grandTotal }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/report/bookings/memo/memo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/report/bookings/memo/memo.component.ts ***!
  \********************************************************/
/*! exports provided: MemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoComponent", function() { return MemoComponent; });
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

//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter ends
var MemoComponent = /** @class */ (function () {
    function MemoComponent(bookingMemoRptScreen) {
        this.bookingMemoRptScreen = bookingMemoRptScreen;
        this.loadingIndicator = true;
        this.dtTriggerBookingMemoRpt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MemoComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    MemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsBookingMemoRpt = {
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
        this.getDataBookingMemoRptFrTable = this.bookingMemoRptScreen.getSummaryData();
        this.onDestroyUnsubscribtionBookingMemoRpt = this.getDataBookingMemoRptFrTable.subscribe(function (data) {
            _this.bookingMemoRptDataList = data['data'];
            _this.dtTriggerBookingMemoRpt.next();
        });
    };
    MemoComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerBookingMemoRpt.unsubscribe();
        this.onDestroyUnsubscribtionBookingMemoRpt.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MemoComponent.prototype, "dtElements", void 0);
    MemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-memo',
            template: __webpack_require__(/*! ./memo.component.html */ "./src/app/report/bookings/memo/memo.component.html"),
            styles: [__webpack_require__(/*! ./memo.component.css */ "./src/app/report/bookings/memo/memo.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], MemoComponent);
    return MemoComponent;
}());



/***/ }),

/***/ "./src/app/report/bookings/office-hireslip/office-hireslip.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/report/bookings/office-hireslip/office-hireslip.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9ib29raW5ncy9vZmZpY2UtaGlyZXNsaXAvb2ZmaWNlLWhpcmVzbGlwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/report/bookings/office-hireslip/office-hireslip.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/report/bookings/office-hireslip/office-hireslip.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Office Hireslip Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row \" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Search By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"searchBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"searchBy\" #searchBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"searchByMode(searchBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"destinationWise\">Destination\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"allDestination\">All Destination</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"monthlyWise\">Monthly Wise</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"summaryReport\">Summary Report</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"yearlyWise\">Yearly Wise</option>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByMonthlyWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mumbai\">Mumbai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"agra\">Agra</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByDestinationWise\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bangalore\">Bangalore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"chennai\">Chennai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"kerela\">Kerela</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"searchByYearlyWise\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Financial Year</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Financial Year..</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"one\">2017-2018</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"two\">2018-2019</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"three\">2019-2020</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t<!--            Booking Hireslip Report table 1 strats here -->\n\t\t\t\t\t\t<div *ngIf=\"searchByDestinationWiseTable\" class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title text-white\">Booking Hireslip Report\n\t\t\t\t\t\t\t\t\t\t\t- Destination Wise</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ngx-datatable #tables class='material striped'\n\t\t\t\t\t\t\t\t\t\t[columns]=\"destinationWiseColumns\" [columnMode]=\"'force'\"\n\t\t\t\t\t\t\t\t\t\t[headerHeight]=\"40\" [footerHeight]=\"25\" [rowHeight]=\"'auto'\"\n\t\t\t\t\t\t\t\t\t\t[limit]=\"7\" [rows]='destinationWiseRows'> </ngx-datatable>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--           Booking Hireslip Report table 1 ends here -->\n\n\t\t\t\t\t\t<!--             Booking Hireslip Report table 2 strats here -->\n\t\t\t\t\t\t<div *ngIf=\"searchByAllDestinationTable\" class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title text-white\">Booking Hireslip Report\n\t\t\t\t\t\t\t\t\t\t\t- All Destination Wise</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ngx-datatable #tables class='material striped'\n\t\t\t\t\t\t\t\t\t\t[columns]=\"allDestinationWiseColumns\" [columnMode]=\"'force'\"\n\t\t\t\t\t\t\t\t\t\t[headerHeight]=\"40\" [footerHeight]=\"25\" [rowHeight]=\"'auto'\"\n\t\t\t\t\t\t\t\t\t\t[limit]=\"7\" [rows]='allDestinationWiseRows'> </ngx-datatable>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--           Booking Hireslip Report table 2 ends here -->\n\t\t\t\t\t\t<!--             Booking Hireslip Report table 3 strats here -->\n\t\t\t\t\t\t<div *ngIf=\"searchByMonthlyWiseTable\" class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title text-white\">Booking Hireslip Report\n\t\t\t\t\t\t\t\t\t\t\t- Monthly Wise</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ngx-datatable #tables class='material striped'\n\t\t\t\t\t\t\t\t\t\t[columns]=\"monthlyWiseColumns\" [columnMode]=\"'force'\"\n\t\t\t\t\t\t\t\t\t\t[headerHeight]=\"40\" [footerHeight]=\"25\" [rowHeight]=\"'auto'\"\n\t\t\t\t\t\t\t\t\t\t[limit]=\"7\" [rows]='monthlyWiseRows'> </ngx-datatable>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--           Booking Hireslip Report table 3 ends here -->\n\t\t\t\t\t\t<!--             Booking Hireslip Report table 4 strats here -->\n\t\t\t\t\t\t<div *ngIf=\"searchBySummaryReportTable\" class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"card-header bg-info\" style=\"background-color:orange!important;padding:5px;\">\n                    <h6 class=\"card-title text-white\">Booking Hireslip Report - Summary Report</h6>\n                  </div>-->\n\t\t\t\t\t\t\t\t\t<ngx-datatable #tables class='material striped'\n\t\t\t\t\t\t\t\t\t\t[columns]=\"summaryReportToPayColumns\" [columnMode]=\"'force'\"\n\t\t\t\t\t\t\t\t\t\t[headerHeight]=\"40\" [footerHeight]=\"25\" [rowHeight]=\"'auto'\"\n\t\t\t\t\t\t\t\t\t\t[limit]=\"7\" [rows]='summaryReportToPayRows'> </ngx-datatable>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--           Booking Hireslip Report table 4 ends here -->\n\t\t\t\t\t\t<!--             Booking Hireslip Report table 5 strats here -->\n\t\t\t\t\t\t<div *ngIf=\"searchBySummaryReportTable\" class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"card-header bg-info\" style=\"background-color:orange!important;padding:5px;\">\n                    <h6 class=\"card-title text-white\">Booking Hireslip Report - Summary Report</h6>\n                  </div>-->\n\t\t\t\t\t\t\t\t\t<ngx-datatable #tables class='material striped'\n\t\t\t\t\t\t\t\t\t\t[columns]=\"summaryReportPaidColumns\" [columnMode]=\"'force'\"\n\t\t\t\t\t\t\t\t\t\t[headerHeight]=\"40\" [footerHeight]=\"25\" [rowHeight]=\"'auto'\"\n\t\t\t\t\t\t\t\t\t\t[limit]=\"7\" [rows]='summaryReportPaidRows'> </ngx-datatable>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--           Booking Hireslip Report table 5 ends here -->\n\t\t\t\t\t\t<!--             Booking Hireslip Report table 6 strats here -->\n\t\t\t\t\t\t<div *ngIf=\"searchByYearlyWiseTable\" class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title text-white\">Booking Hireslip Report\n\t\t\t\t\t\t\t\t\t\t\t- Yearly Wise</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ngx-datatable #tables class='material striped'\n\t\t\t\t\t\t\t\t\t\t[columns]=\"yearlyWiseColumns\" [columnMode]=\"'force'\"\n\t\t\t\t\t\t\t\t\t\t[headerHeight]=\"40\" [footerHeight]=\"25\" [rowHeight]=\"'auto'\"\n\t\t\t\t\t\t\t\t\t\t[limit]=\"7\" [rows]='yearlyWiseRows'> </ngx-datatable>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--           Booking Hireslip Report table 6 ends here -->\n\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/bookings/office-hireslip/office-hireslip.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/report/bookings/office-hireslip/office-hireslip.component.ts ***!
  \******************************************************************************/
/*! exports provided: OfficeHireslipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeHireslipComponent", function() { return OfficeHireslipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OfficeHireslipComponent = /** @class */ (function () {
    function OfficeHireslipComponent() {
        var _this = this;
        this.searchByDestinationWise = true;
        this.searchByMonthlyWise = false;
        this.searchByYearlyWise = false;
        this.searchByDestinationWiseTable = true;
        this.searchByAllDestinationTable = false;
        this.searchByMonthlyWiseTable = false;
        this.searchBySummaryReportTable = false;
        this.searchByYearlyWiseTable = false;
        this.loadingIndicator = true;
        this.reorderable = true;
        this.destinationWiseRows = [];
        this.destinationWiseColumns = [{ name: 'Invoice No' }, { name: 'Date' }, { name: 'Truck No' }, { name: 'Truck LGT' }, { name: 'To Pay' }, { name: 'Paid' }, { name: 'Freight' }, { name: 'Hire' }, { name: 'Advance' }, { name: 'GUR Wt' }, { name: 'Kanta Wt' }, { name: 'Actual Wt' }, { name: 'Charged Wt' }, { name: 'Broker' }, { name: 'Loaded By' }];
        this.allDestinationWiseRows = [];
        this.allDestinationWiseColumns = [{ name: 'Destination' }, { name: 'To Pay' }, { name: 'Paid' }, { name: 'Freight' }, { name: 'Hire' }, { name: 'Advance' }, { name: 'Gur Wt' }, { name: 'Kanta Wt' }, { name: 'Actual Wt' }, { name: 'Charged Wt' }];
        this.monthlyWiseRows = [];
        this.monthlyWiseColumns = [{ name: 'Month' }, { name: 'To Pay Freight' }, { name: 'Paid Freight' }, { name: 'Total Freight' }, { name: 'Total Hire' }, { name: 'Advance' }, { name: 'Gur Wt' }, { name: 'Kanta Wt' }, { name: 'Actual Wt' }, { name: 'Charged Wt' }, { name: 'Destination' }];
        this.summaryReportToPayRows = [];
        this.summaryReportToPayColumns = [{ name: 'Destination' }, { name: 'To Pay' }, { name: 'Actual Weight' }];
        this.summaryReportPaidRows = [];
        this.summaryReportPaidColumns = [{ name: 'Destination' }, { name: 'Hire' }, { name: 'Kanta Weight' }, { name: 'Paid' }];
        this.yearlyWiseRows = [];
        this.yearlyWiseColumns = [{ name: 'Booking Item' }, { name: 'Actual Weight' }, { name: 'Perc of Booking' }, { name: 'Charged Weight' }, { name: 'Perc of Bookings' }, { name: 'Articles' }, { name: 'LC Charge' }];
        this.destinationWiseRows = [{ invoiceNo: 'NP/ALW/1920/01', date: '27-06-2019', truckNo: 'TA 44 A 1234', truckLgt: '26.4', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '400', kantaWt: '400', actualWt: '395', chargedWt: '500', broker: 'MM Company', loadedBy: 'AAAAA' },
            { invoiceNo: 'NP/CLT/1920/02', date: '27-06-2019', truckNo: 'TB 44 A 1234', truckLgt: '32', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '500', kantaWt: '500', actualWt: '495', chargedWt: '550', broker: 'SS Company', loadedBy: 'BBBBB' },
            { invoiceNo: 'DLH/MDS/1920/01', date: '27-06-2019', truckNo: 'TC 44 A 1234', truckLgt: '32', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '430', kantaWt: '430', actualWt: '425', chargedWt: '450', broker: 'AR Company', loadedBy: 'CCCCC' },
            { invoiceNo: 'NP/ALW/1920/01', date: '27-06-2019', truckNo: 'TA 44 A 1234', truckLgt: '26.4', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '400', kantaWt: '400', actualWt: '395', chargedWt: '500', broker: 'MM Company', loadedBy: 'AAAAA' },
            { invoiceNo: 'NP/CLT/1920/02', date: '27-06-2019', truckNo: 'TB 44 A 1234', truckLgt: '32', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '500', kantaWt: '500', actualWt: '495', chargedWt: '550', broker: 'SS Company', loadedBy: 'BBBBB' },
            { invoiceNo: 'DLH/MDS/1920/01', date: '27-06-2019', truckNo: 'TC 44 A 1234', truckLgt: '32', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '430', kantaWt: '430', actualWt: '425', chargedWt: '450', broker: 'AR Company', loadedBy: 'CCCCC' },
            { invoiceNo: 'NP/ALW/1920/01', date: '27-06-2019', truckNo: 'TA 44 A 1234', truckLgt: '26.4', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '400', kantaWt: '400', actualWt: '395', chargedWt: '500', broker: 'MM Company', loadedBy: 'AAAAA' },
            { invoiceNo: 'NP/CLT/1920/02', date: '27-06-2019', truckNo: 'TB 44 A 1234', truckLgt: '32', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '500', kantaWt: '500', actualWt: '495', chargedWt: '550', broker: 'SS Company', loadedBy: 'BBBBB' },
            { invoiceNo: 'DLH/MDS/1920/01', date: '27-06-2019', truckNo: 'TC 44 A 1234', truckLgt: '32', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '430', kantaWt: '430', actualWt: '425', chargedWt: '450', broker: 'AR Company', loadedBy: 'CCCCC' },
            { invoiceNo: 'NP/ALW/1920/01', date: '27-06-2019', truckNo: 'TA 44 A 1234', truckLgt: '26.4', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '400', kantaWt: '400', actualWt: '395', chargedWt: '500', broker: 'MM Company', loadedBy: 'AAAAA' },
            { invoiceNo: 'NP/CLT/1920/02', date: '27-06-2019', truckNo: 'TB 44 A 1234', truckLgt: '32', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '500', kantaWt: '500', actualWt: '495', chargedWt: '550', broker: 'SS Company', loadedBy: 'BBBBB' },
            { invoiceNo: 'DLH/MDS/1920/01', date: '27-06-2019', truckNo: 'TC 44 A 1234', truckLgt: '32', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '430', kantaWt: '430', actualWt: '425', chargedWt: '450', broker: 'AR Company', loadedBy: 'CCCCC' },
            { invoiceNo: 'NP/ALW/1920/01', date: '27-06-2019', truckNo: 'TA 44 A 1234', truckLgt: '26.4', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '400', kantaWt: '400', actualWt: '395', chargedWt: '500', broker: 'MM Company', loadedBy: 'AAAAA' },
            { invoiceNo: 'NP/CLT/1920/02', date: '27-06-2019', truckNo: 'TB 44 A 1234', truckLgt: '32', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '500', kantaWt: '500', actualWt: '495', chargedWt: '550', broker: 'SS Company', loadedBy: 'BBBBB' },
            { invoiceNo: 'DLH/MDS/1920/01', date: '27-06-2019', truckNo: 'TC 44 A 1234', truckLgt: '32', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '430', kantaWt: '430', actualWt: '425', chargedWt: '450', broker: 'AR Company', loadedBy: 'CCCCC' },
            { invoiceNo: 'NP/ALW/1920/01', date: '27-06-2019', truckNo: 'TA 44 A 1234', truckLgt: '26.4', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '400', kantaWt: '400', actualWt: '395', chargedWt: '500', broker: 'MM Company', loadedBy: 'AAAAA' },
            { invoiceNo: 'NP/CLT/1920/02', date: '27-06-2019', truckNo: 'TB 44 A 1234', truckLgt: '32', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '500', kantaWt: '500', actualWt: '495', chargedWt: '550', broker: 'SS Company', loadedBy: 'BBBBB' },
            { invoiceNo: 'DLH/MDS/1920/01', date: '27-06-2019', truckNo: 'TC 44 A 1234', truckLgt: '32', toPay: '1740', paid: '0', freight: '100', hire: '50', advance: '500', gurWt: '430', kantaWt: '430', actualWt: '425', chargedWt: '450', broker: 'AR Company', loadedBy: 'CCCCC' }];
        this.allDestinationWiseRows = [{ destination: 'Alwaye', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Bangalore', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Calicut', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Alwaye', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Bangalore', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Calicut', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Alwaye', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Bangalore', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Calicut', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Alwaye', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Bangalore', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Calicut', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Alwaye', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' },
            { destination: 'Bangalore', toPay: '1000', paid: '0', freight: '1000', hire: '190', advance: '0', gurWt: '300', kantaWt: '305', actualWt: '359', chargedWt: '405' }];
        this.monthlyWiseRows = [{ month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' },
            { month: 'June', toPayFreight: '0', paidFreight: '0', totalFreight: '0', totalHire: '0', advance: '0', gurWt: '0', kantaWt: '0', actualWt: '0', chargedWt: '0', destination: 'Alleppey' }
        ];
        this.summaryReportToPayRows = [{ destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' },
            { destination: 'Alwaye', toPay: '300', actualWeight: '3' }
        ];
        this.summaryReportPaidRows = [{ destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' },
            { destination: 'Alleppey', hire: '0', kantaWeight: '0', paid: '0' }
        ];
        this.yearlyWiseRows = [{ bookingItem: 'A Footwear', actualWeight: '80', percOfBooking: '0.04', chargedWeight: '105', percOfBookings: '0.04', articles: '2', lcCharge: '0' },
            { bookingItem: 'B Footwear', actualWeight: '560', percOfBooking: '0.29', chargedWeight: '840', percOfBookings: '0.34', articles: '28', lcCharge: '0' },
            { bookingItem: 'C Footwear', actualWeight: '80', percOfBooking: '0.04', chargedWeight: '105', percOfBookings: '0.04', articles: '2', lcCharge: '0' },
            { bookingItem: 'A Footwear', actualWeight: '80', percOfBooking: '0.04', chargedWeight: '105', percOfBookings: '0.04', articles: '2', lcCharge: '0' },
            { bookingItem: 'B Footwear', actualWeight: '560', percOfBooking: '0.29', chargedWeight: '840', percOfBookings: '0.34', articles: '28', lcCharge: '0' },
            { bookingItem: 'C Footwear', actualWeight: '80', percOfBooking: '0.04', chargedWeight: '105', percOfBookings: '0.04', articles: '2', lcCharge: '0' },
            { bookingItem: 'A Footwear', actualWeight: '80', percOfBooking: '0.04', chargedWeight: '105', percOfBookings: '0.04', articles: '2', lcCharge: '0' },
            { bookingItem: 'B Footwear', actualWeight: '560', percOfBooking: '0.29', chargedWeight: '840', percOfBookings: '0.34', articles: '28', lcCharge: '0' },
            { bookingItem: 'C Footwear', actualWeight: '80', percOfBooking: '0.04', chargedWeight: '105', percOfBookings: '0.04', articles: '2', lcCharge: '0' },
            { bookingItem: 'A Footwear', actualWeight: '80', percOfBooking: '0.04', chargedWeight: '105', percOfBookings: '0.04', articles: '2', lcCharge: '0' },
            { bookingItem: 'B Footwear', actualWeight: '560', percOfBooking: '0.29', chargedWeight: '840', percOfBookings: '0.34', articles: '28', lcCharge: '0' },
            { bookingItem: 'C Footwear', actualWeight: '80', percOfBooking: '0.04', chargedWeight: '105', percOfBookings: '0.04', articles: '2', lcCharge: '0' },
            { bookingItem: 'A Footwear', actualWeight: '80', percOfBooking: '0.04', chargedWeight: '105', percOfBookings: '0.04', articles: '2', lcCharge: '0' },
            { bookingItem: 'B Footwear', actualWeight: '560', percOfBooking: '0.29', chargedWeight: '840', percOfBookings: '0.34', articles: '28', lcCharge: '0' },
            { bookingItem: 'C Footwear', actualWeight: '80', percOfBooking: '0.04', chargedWeight: '105', percOfBookings: '0.04', articles: '2', lcCharge: '0' }];
        setTimeout(function () {
            _this.loadingIndicator = false;
        }, 1500);
    }
    OfficeHireslipComponent.prototype.ngOnInit = function () {
    };
    OfficeHireslipComponent.prototype.searchByMode = function (searchBy) {
        if (searchBy === 'destinationWise') {
            this.searchByDestinationWise = true;
            this.searchByMonthlyWise = false;
            this.searchByYearlyWise = false;
            this.searchByDestinationWiseTable = true;
            this.searchByAllDestinationTable = false;
            this.searchByMonthlyWiseTable = false;
            this.searchBySummaryReportTable = false;
            this.searchByYearlyWiseTable = false;
        }
        else if (searchBy === 'allDestination') {
            this.searchByDestinationWise = true;
            this.searchByMonthlyWise = false;
            this.searchByYearlyWise = false;
            this.searchByDestinationWiseTable = false;
            this.searchByAllDestinationTable = true;
            this.searchByMonthlyWiseTable = false;
            this.searchBySummaryReportTable = false;
            this.searchByYearlyWiseTable = false;
        }
        else if (searchBy === 'monthlyWise') {
            this.searchByDestinationWise = true;
            this.searchByMonthlyWise = true;
            this.searchByYearlyWise = true;
            this.searchByDestinationWiseTable = false;
            this.searchByAllDestinationTable = false;
            this.searchByMonthlyWiseTable = true;
            this.searchBySummaryReportTable = false;
            this.searchByYearlyWiseTable = false;
        }
        else if (searchBy === 'summaryReport') {
            this.searchByDestinationWise = false;
            this.searchByMonthlyWise = false;
            this.searchByYearlyWise = false;
            this.searchByDestinationWiseTable = false;
            this.searchByAllDestinationTable = false;
            this.searchByMonthlyWiseTable = false;
            this.searchBySummaryReportTable = true;
            this.searchByYearlyWiseTable = false;
        }
        else if (searchBy === 'yearlyWise') {
            this.searchByDestinationWise = false;
            this.searchByMonthlyWise = false;
            this.searchByYearlyWise = true;
            this.searchByDestinationWiseTable = false;
            this.searchByAllDestinationTable = false;
            this.searchByMonthlyWiseTable = false;
            this.searchBySummaryReportTable = false;
            this.searchByYearlyWiseTable = true;
        }
        else {
            this.searchByDestinationWise = false;
            this.searchByMonthlyWise = false;
            this.searchByYearlyWise = false;
            this.searchByDestinationWiseTable = true;
            this.searchByAllDestinationTable = false;
            this.searchByMonthlyWiseTable = false;
            this.searchBySummaryReportTable = false;
            this.searchByYearlyWiseTable = false;
        }
    };
    OfficeHireslipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-office-hireslip',
            template: __webpack_require__(/*! ./office-hireslip.component.html */ "./src/app/report/bookings/office-hireslip/office-hireslip.component.html"),
            styles: [__webpack_require__(/*! ./office-hireslip.component.css */ "./src/app/report/bookings/office-hireslip/office-hireslip.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OfficeHireslipComponent);
    return OfficeHireslipComponent;
}());



/***/ }),

/***/ "./src/app/report/bookings/trip-lr-details/trip-lr-details.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/report/bookings/trip-lr-details/trip-lr-details.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title_custom {\n\tborder-bottom: 1px solid orange;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n@media ( max-width : 1022px) {\n\th6 {\n\t\tdisplay: grid;\n\t}\n}\n\n@media ( min-width : 1023px) and (max-width: 1500px) {\n\tb, strong {\n\t\tfont-weight: bolder;\n\t\tfont-size: 13px;\n\t\tdisplay: inline-block;\n\t}\n\tspan {\n\t\tfont-size: 13px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2Jvb2tpbmdzL3RyaXAtbHItZGV0YWlscy90cmlwLWxyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdDQUFnQztDQUNoQyxZQUFZO0NBQ1osYUFBYTtDQUNiOztBQUVEO0NBQ0M7RUFDQyxjQUFjO0VBQ2Q7Q0FDRDs7QUFFRDtDQUNDO0VBQ0Msb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEI7Q0FDRDtFQUNDLGdCQUFnQjtFQUNoQjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L2Jvb2tpbmdzL3RyaXAtbHItZGV0YWlscy90cmlwLWxyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZV9jdXN0b20ge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgb3JhbmdlO1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4O1xufVxuXG5AbWVkaWEgKCBtYXgtd2lkdGggOiAxMDIycHgpIHtcblx0aDYge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdH1cbn1cblxuQG1lZGlhICggbWluLXdpZHRoIDogMTAyM3B4KSBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG5cdGIsIHN0cm9uZyB7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcblx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR9XG5cdHNwYW4ge1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/bookings/trip-lr-details/trip-lr-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/report/bookings/trip-lr-details/trip-lr-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title_custom\" mat-dialog-title>\n\t<h6 style=\"margin-bottom: 0px;\">Trip Lr Details</h6>\n</h1>\n<div mat-dialog-content>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t<div class=\"col-md-3\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<label>Trip Date: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\tid=\"tripDate\">26-02-2020</label> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"tripDate\" -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\tplaceHolder\"26-02-2020\" -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\treadonly> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t<strong>Trip Date:</strong>&nbsp;&nbsp;&nbsp;<span id=\"tripDate\">{{listOfDataToGet.tripDate}}</span>\n\n\n\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t<strong>Vehicle No:</strong>&nbsp;&nbsp;&nbsp;<span\n\t\t\t\t\t\t\t\t\tid=\"vehicleNumber\">{{listOfDataToGet.vehicleNumber}}</span>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t<strong>Trip No:</strong>&nbsp;&nbsp;&nbsp;<span id=\"tripNumber\">{{listOfDataToGet.tripNo}}</span>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t<strong>Delivery Area:</strong>&nbsp;&nbsp;&nbsp;<span\n\t\t\t\t\t\t\t\t\tid=\"deliveryArea\">{{listOfDataToGet.deliveryarea}}</span>\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLrDetails\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLrDetails\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t<th>Source</th>\n\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Articles</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Wt</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let lrDetailsData of lrDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.bookingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.source }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.destination }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf=\"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t</tr>-->\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div mat-dialog-actions style=\"float: right;\">\n\t<button class=\"btn btn-outline-danger\" mat-button\n\t\t(click)=\"onCancelClick()\">Cancel</button>\n\t<button class=\"btn btn-outline-success\" mat-button\n\t\t[mat-dialog-close]=\"true\" cdkFocusInitial>Ok</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/report/bookings/trip-lr-details/trip-lr-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/report/bookings/trip-lr-details/trip-lr-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: TripLrDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripLrDetailsComponent", function() { return TripLrDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
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

//for datatable starts


//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts
//from the particular global folder ends
//for datatable ends
//for popup modal ends
//for modal starts




//for modal ends
var TripLrDetailsComponent = /** @class */ (function () {
    //for datatable ends
    function TripLrDetailsComponent(
    /* for datatable starts */ masterReadService, /* for datatable ends */ 
    //for modal starts
    dialogRef, data
    //for modal ends
    ) {
        this.masterReadService = masterReadService;
        this.dialogRef = dialogRef;
        this.data = data;
        //for datatable starts
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.pageTitle = "Local Booking LR Detail";
        //for datatable ends
        //summaryTable:any;
        this.loadingIndicator = true;
        this.dtTriggerLrDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
        this.listOfDataToGet = this.data.listOfDataToPass;
        //        console.log( "Finally >>> " + this.listOfDataToGet );
        this.getDetailsOfTripLrDetails();
    }
    /* for datatable starts */
    TripLrDetailsComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    /* for datatable ends */
    TripLrDetailsComponent.prototype.ngOnInit = function () {
        //for datatable starts
        this.dtOptionsLrDetails = {
            //};
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
                    footer: true,
                    title: this.changeDataTableTitileForExcel(),
                    messageTop: this.chnageDataTableMessageTopExcel(),
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'print',
                    text: '<i class="fas fa-print"> Print</i>',
                    titleAttr: 'Print',
                    title: this.changeDataTableTitileForPrint(),
                    //                    messageTop: this.chnageDataTableMessageTop(),
                    autoPrint: true,
                    footer: true,
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
            "scrollY": 280,
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
                // Total over this page
                var pageTotals = api
                    .column(2)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(2).footer()).html(pageTotals);
                var pageTotals = api
                    .column(6)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(6).footer()).html(pageTotals);
                var pageTotals = api
                    .column(7)
                    .data()
                    .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(7).footer()).html(pageTotals);
                //                count starts
                var columnData = api
                    .column(0)
                    .data();
                // Update footer
                $(api.column(0).footer()).html(columnData.count());
                //                counts ends
            }
            //end footerCallback      
        };
    };
    //the below code is for the getting data through json starts
    //            this.supplierList.getAllData().subscribe(data => {
    //                this.lrDispatchBknRptList = data['data'];
    //                this.dtTriggerSummary.next();
    //                } );
    //        this.gettingDataFrmServiceFrLrDetailsTable = this.lrDetailsScreen.getSupplierMasterData()
    //        this.onDestroyUnsubscribtionLrDetails = this.gettingDataFrmServiceFrLrDetailsTable.subscribe( data => {
    //            this.lrDetailsDataList = data['data'];
    //            this.dtTriggerLrDetails.next();
    //        } );
    //for datatable ends
    //the below code is for the getting data through json ends
    TripLrDetailsComponent.prototype.changeDataTableTitileForPrint = function () {
        return '<div class="row">'
            + '<div class="col-md-7">'
            + '<img src="assets/images/srdLogisticPrintLogo.png">'
            + '</div>'
            + '<div class="col-md-5">'
            + '<p style="font-size:16px;">' + this.userDataDtoReturnSession.addressId
            + '</p>'
            + '</div>'
            + '</div>'
            + '<div class="row"  style="text-align:center">'
            + '<div class="col-md-12">'
            + '<h5 style="border-bottom:1px solid;display:inline-block;"><span style="font-weight:bold">' + this.pageTitle + '</span></h5>'
            + '</div>'
            + '</div>'
            + '<div class="row">'
            + '<div class="col-md-4">'
            + '<h6 style="font-weight:bold;">Trip Date: <span style="font-weight:400;">' + this.listOfDataToGet.tripDate + '</span></h6>'
            + '</div>'
            + '<div class="col-md-4">'
            + '<h6 style="font-weight:bold;">Agent Name: <span style="font-weight:400;">' + this.listOfDataToGet.tripFrom + '</span></h6>'
            + '</div>'
            + '<div class="col-md-4">'
            + '<h6 style="font-weight:bold;">Delivery Area: <span style="font-weight:400;">' + this.listOfDataToGet.deliveryarea + '</span></h6>'
            + '</div>'
            + '</div>'
            + '<div class="row">'
            + '<div class="col-md-3">'
            + '<h6 style="font-weight:bold;">Vehicle No: <span style="font-weight:400;">' + this.listOfDataToGet.vehicleNumber + '</span></h6>'
            + '</div>'
            + '<div class="col-md-3">'
            + '<h6 style="font-weight:bold;">Trip No: <span style="font-weight:400;">' + this.listOfDataToGet.tripNo + '</span></h6>'
            + '</div>'
            //            + '<div class="col-md-3">'
            //            + '<h6 style="font-weight:bold;">Total Lrs: <span style="font-weight:400;">' + this.totalLrs + '</span></h6>'
            //            + '</div>'
            //            + '<div class="col-md-3">'
            //            + '<h6 style="font-weight:bold;">Total Articles: <span style="font-weight:400;">' + this.totalArticles + '</span></h6>'
            //            + '</div>'
            + '</div>';
    };
    //    chnageDataTableMessageTop() {
    //        return '<span>'
    //            + '<div style="text-align:center;">'
    //            + '<h5 style="border-bottom:1px solid;display:inline-block;"><span style="font-weight:bold">' + this.pageTitle + '</span></h5>'
    //            + '<h6 style="font-weight:bold;">'
    //            + "Date: " + '<span style="font-weight:400;">' + this.todayDate + '</span>'
    //            + '</h6>'
    //            + '</div>'
    //            + '</span>';
    //
    //    }
    TripLrDetailsComponent.prototype.changeDataTableTitileForExcel = function () {
        return "SRDlogo"
            + this.userDataDtoReturnSession.addressId;
    };
    TripLrDetailsComponent.prototype.chnageDataTableMessageTopExcel = function () {
        return +this.pageTitle;
        //            + this.selectedFromDate
        //            + "                 "
        //            + this.selectedToDate
    };
    TripLrDetailsComponent.prototype.ngOnDestroy = function () {
        //for datatable starts
        this.dtTriggerLrDetails.unsubscribe();
        //for datatable ends
    };
    //for modal starts
    TripLrDetailsComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    //for modal ends
    TripLrDetailsComponent.prototype.getDataForRead = function () {
        this.lrDto.id = this.listOfDataToGet.id;
        //        console.log( this.lrDto.id );
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        //        this.getAgentNamesToStations();
    };
    TripLrDetailsComponent.prototype.getDetailsOfTripLrDetails = function () {
        var _this = this;
        //        console.log( this.lrDto.companyId );
        this.getDataForRead();
        this.masterReadService.getTripLrService(this.lrDto).subscribe(function (response) {
            if (response.length == 0) {
                swal({
                    title: "Error",
                    text: "Np Records Founds!",
                    icon: "error",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                _this.lrDetailsDataList = response;
                //                    console.log( this.lrDetailsDataList );
                _this.dtTriggerLrDetails.next();
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
        }), function (error) { return swal({
            title: "Error",
            text: "Server Error While Getting Trip LR Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TripLrDetailsComponent.prototype, "dtElements", void 0);
    TripLrDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-lr-details',
            template: __webpack_require__(/*! ./trip-lr-details.component.html */ "./src/app/report/bookings/trip-lr-details/trip-lr-details.component.html"),
            styles: [__webpack_require__(/*! ./trip-lr-details.component.css */ "./src/app/report/bookings/trip-lr-details/trip-lr-details.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_5__["MasterReadService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], TripLrDetailsComponent);
    return TripLrDetailsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-report-bookings-bookings-module.js.map