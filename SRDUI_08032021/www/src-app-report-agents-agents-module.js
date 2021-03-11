(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-report-agents-agents-module"],{

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

/***/ "./src/app/dto/FortNightStmt-dto.ts":
/*!******************************************!*\
  !*** ./src/app/dto/FortNightStmt-dto.ts ***!
  \******************************************/
/*! exports provided: FortNightStmtDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FortNightStmtDto", function() { return FortNightStmtDto; });
var FortNightStmtDto = /** @class */ (function () {
    function FortNightStmtDto() {
    }
    return FortNightStmtDto;
}());



/***/ }),

/***/ "./src/app/report/agents/agents.module.ts":
/*!************************************************!*\
  !*** ./src/app/report/agents/agents.module.ts ***!
  \************************************************/
/*! exports provided: AgentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentsModule", function() { return AgentsModule; });
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
/* harmony import */ var src_app_report_agents_agents_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/agents/agents.routing */ "./src/app/report/agents/agents.routing.ts");
/* harmony import */ var src_app_report_agents_destination_commission_destination_commission_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/agents/destination-commission/destination-commission.component */ "./src/app/report/agents/destination-commission/destination-commission.component.ts");
/* harmony import */ var src_app_report_agents_destination_income_destination_income_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/agents/destination-income/destination-income.component */ "./src/app/report/agents/destination-income/destination-income.component.ts");
/* harmony import */ var src_app_report_agents_statement_verification_statement_verification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/report/agents/statement-verification/statement-verification.component */ "./src/app/report/agents/statement-verification/statement-verification.component.ts");
/* harmony import */ var src_app_report_agents_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/report/agents/ranking/ranking.component */ "./src/app/report/agents/ranking/ranking.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_report_agents_stmt_verification_lrs_details_report_stmt_verification_lrs_details_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/report/agents/stmt-verification-lrs-details-report/stmt-verification-lrs-details-report.component */ "./src/app/report/agents/stmt-verification-lrs-details-report/stmt-verification-lrs-details-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts




//for select option search ends







var AgentsModule = /** @class */ (function () {
    function AgentsModule() {
    }
    AgentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_agents_agents_routing__WEBPACK_IMPORTED_MODULE_10__["AgentsRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"]],
            declarations: [
                src_app_report_agents_destination_commission_destination_commission_component__WEBPACK_IMPORTED_MODULE_11__["DestinationCommissionComponent"],
                src_app_report_agents_destination_income_destination_income_component__WEBPACK_IMPORTED_MODULE_12__["DestinationIncomeComponent"],
                src_app_report_agents_statement_verification_statement_verification_component__WEBPACK_IMPORTED_MODULE_13__["StatementVerificationComponent"],
                src_app_report_agents_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_14__["RankingComponent"],
                src_app_report_agents_stmt_verification_lrs_details_report_stmt_verification_lrs_details_report_component__WEBPACK_IMPORTED_MODULE_16__["StmtVerificationLrsDetailsReportComponent"]
            ]
        })
    ], AgentsModule);
    return AgentsModule;
}());



/***/ }),

/***/ "./src/app/report/agents/agents.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/report/agents/agents.routing.ts ***!
  \*************************************************/
/*! exports provided: AgentsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentsRoutes", function() { return AgentsRoutes; });
/* harmony import */ var src_app_report_agents_destination_commission_destination_commission_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/report/agents/destination-commission/destination-commission.component */ "./src/app/report/agents/destination-commission/destination-commission.component.ts");
/* harmony import */ var src_app_report_agents_destination_income_destination_income_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report/agents/destination-income/destination-income.component */ "./src/app/report/agents/destination-income/destination-income.component.ts");
/* harmony import */ var src_app_report_agents_statement_verification_statement_verification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/report/agents/statement-verification/statement-verification.component */ "./src/app/report/agents/statement-verification/statement-verification.component.ts");
/* harmony import */ var src_app_report_agents_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/report/agents/ranking/ranking.component */ "./src/app/report/agents/ranking/ranking.component.ts");




var AgentsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'destinationCommission',
                component: src_app_report_agents_destination_commission_destination_commission_component__WEBPACK_IMPORTED_MODULE_0__["DestinationCommissionComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'destinationIncome',
                component: src_app_report_agents_destination_income_destination_income_component__WEBPACK_IMPORTED_MODULE_1__["DestinationIncomeComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'statementVerification',
                component: src_app_report_agents_statement_verification_statement_verification_component__WEBPACK_IMPORTED_MODULE_2__["StatementVerificationComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'ranking',
                component: src_app_report_agents_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_3__["RankingComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/report/agents/destination-commission/destination-commission.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/report/agents/destination-commission/destination-commission.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9hZ2VudHMvZGVzdGluYXRpb24tY29tbWlzc2lvbi9kZXN0aW5hdGlvbi1jb21taXNzaW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/report/agents/destination-commission/destination-commission.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/report/agents/destination-commission/destination-commission.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Destination Commission</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteDestination=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationOptions | filter: controlMain.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestination.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"saveBtn\">Save</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Destination Agent\n\t\t\t\t\t\t\t\tCommission Details</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDestAgentCommissionDetailsReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDestAgentCommissionDetailsReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Agent</th>\n\t\t\t\t\t\t\t\t\t\t<th>From Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>Statement No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Per Day Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Freight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Receivable Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Commission</th>\n\t\t\t\t\t\t\t\t\t\t<th>Commission Reduced</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Commission Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Days In Clearance</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let destAgentCommissionDetailsData of destAgentCommissionDetailsReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentCommissionDetailsData.agent }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentCommissionDetailsData.fromPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentCommissionDetailsData.toPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentCommissionDetailsData.statementNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentCommissionDetailsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentCommissionDetailsData.perDayWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentCommissionDetailsData.freight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentCommissionDetailsData.receivableAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentCommissionDetailsData.commission }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentCommissionDetailsData.commissionReduced\n\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\tdestAgentCommissionDetailsData.actualCommissionPaid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentCommissionDetailsData.daysInClearance }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/agents/destination-commission/destination-commission.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/report/agents/destination-commission/destination-commission.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DestinationCommissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationCommissionComponent", function() { return DestinationCommissionComponent; });
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
var DestinationCommissionComponent = /** @class */ (function () {
    function DestinationCommissionComponent(destAgentCommissionDetailsReport) {
        this.destAgentCommissionDetailsReport = destAgentCommissionDetailsReport;
        this.loadingIndicator = true;
        this.reorderable = true;
        this.controlMain = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.destinationOptions = [
            { id: 1, label: 'ALL' },
            { id: 2, label: 'Alleppey' },
            { id: 3, label: 'Alwaye' },
            { id: 4, label: 'Aurangabad' }
        ];
        this.dtTriggerDestAgentCommissionDetailsReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DestinationCommissionComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    DestinationCommissionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsDestAgentCommissionDetailsReport = {
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
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.getDataFrmServiceFrTable = this.destAgentCommissionDetailsReport.getSummaryData();
        this.onDestroyUnsubscribtionDestAgentCommissionDetailsReport = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.destAgentCommissionDetailsReportDataList = data['data'];
            _this.dtTriggerDestAgentCommissionDetailsReport.next();
        });
    };
    DestinationCommissionComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDestAgentCommissionDetailsReport.unsubscribe();
        this.onDestroyUnsubscribtionDestAgentCommissionDetailsReport.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DestinationCommissionComponent.prototype, "dtElements", void 0);
    DestinationCommissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-destination-commission',
            template: __webpack_require__(/*! ./destination-commission.component.html */ "./src/app/report/agents/destination-commission/destination-commission.component.html"),
            styles: [__webpack_require__(/*! ./destination-commission.component.css */ "./src/app/report/agents/destination-commission/destination-commission.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], DestinationCommissionComponent);
    return DestinationCommissionComponent;
}());



/***/ }),

/***/ "./src/app/report/agents/destination-income/destination-income.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/report/agents/destination-income/destination-income.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9hZ2VudHMvZGVzdGluYXRpb24taW5jb21lL2Rlc3RpbmF0aW9uLWluY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/agents/destination-income/destination-income.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/report/agents/destination-income/destination-income.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Destination Income</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Destination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteDestination=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationOptions | filter: controlMain.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestination.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"saveBtn\">Save</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Destination Agent\n\t\t\t\t\t\t\t\tIncome Details</h6>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDestAgentIncomeDetailsReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDestAgentIncomeDetailsReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Statement No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Statement Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>From Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Commission</th>\n\t\t\t\t\t\t\t\t\t\t<th>Reduced Commission</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Commission Earned</th>\n\t\t\t\t\t\t\t\t\t\t<th>RC Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Hamali Chg</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let destAgentIncomeDetailsData of destAgentIncomeDetailsReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentIncomeDetailsData.statementNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentIncomeDetailsData.statementDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentIncomeDetailsData.fromPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentIncomeDetailsData.toPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentIncomeDetailsData.totalWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentIncomeDetailsData.commission }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentIncomeDetailsData.reducedCommission }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentIncomeDetailsData.actualCommissionEarned\n\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentIncomeDetailsData.rcChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentIncomeDetailsData.hamaliChg }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destAgentIncomeDetailsData.total }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/agents/destination-income/destination-income.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/report/agents/destination-income/destination-income.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DestinationIncomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationIncomeComponent", function() { return DestinationIncomeComponent; });
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
var DestinationIncomeComponent = /** @class */ (function () {
    function DestinationIncomeComponent(destAgentIncomeDetailsReport) {
        this.destAgentIncomeDetailsReport = destAgentIncomeDetailsReport;
        this.loadingIndicator = true;
        this.reorderable = true;
        this.controlMain = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.destinationOptions = [
            { id: 1, label: 'ALL' },
            { id: 2, label: 'Alleppey' },
            { id: 3, label: 'Alwaye' },
            { id: 4, label: 'Aurangabad' }
        ];
        this.dtTriggerDestAgentIncomeDetailsReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DestinationIncomeComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    DestinationIncomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsDestAgentIncomeDetailsReport = {
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
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.getDataFrmServiceFrTable = this.destAgentIncomeDetailsReport.getSummaryData();
        this.onDestroyUnsubscribtionDestAgentIncomeDetailsReport = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.destAgentIncomeDetailsReportDataList = data['data'];
            _this.dtTriggerDestAgentIncomeDetailsReport.next();
        });
    };
    DestinationIncomeComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDestAgentIncomeDetailsReport.unsubscribe();
        this.onDestroyUnsubscribtionDestAgentIncomeDetailsReport.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DestinationIncomeComponent.prototype, "dtElements", void 0);
    DestinationIncomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-destination-income',
            template: __webpack_require__(/*! ./destination-income.component.html */ "./src/app/report/agents/destination-income/destination-income.component.html"),
            styles: [__webpack_require__(/*! ./destination-income.component.css */ "./src/app/report/agents/destination-income/destination-income.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], DestinationIncomeComponent);
    return DestinationIncomeComponent;
}());



/***/ }),

/***/ "./src/app/report/agents/ranking/ranking.component.css":
/*!*************************************************************!*\
  !*** ./src/app/report/agents/ranking/ranking.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9hZ2VudHMvcmFua2luZy9yYW5raW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/report/agents/ranking/ranking.component.html":
/*!**************************************************************!*\
  !*** ./src/app/report/agents/ranking/ranking.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Agent Ranking Report</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"agentName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Agent Name</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">All</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"bawana\">Bawana</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"delhi\">Delhi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"previous\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Previous</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Previous</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"currentStatement\">Current Statement</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"one\">1</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"two\">2</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsRanking\" [dtTrigger]=\"dtTriggerRanking\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Agent Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Net Amount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Addition</th>\n\t\t\t\t\t\t\t\t\t\t<th>Deduction</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid ON</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cash</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cheque</th>\n\t\t\t\t\t\t\t\t\t\t<th>Pdc</th>\n\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let RankingData of RankingDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ RankingData.agentName }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ RankingData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ RankingData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ RankingData.netAmount }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ RankingData.addition }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ RankingData.deduction }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ RankingData.paidOn }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ RankingData.cash }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ RankingData.cheque }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ RankingData.pdc }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ RankingData.remarks }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/agents/ranking/ranking.component.ts":
/*!************************************************************!*\
  !*** ./src/app/report/agents/ranking/ranking.component.ts ***!
  \************************************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
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

//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends



var RankingComponent = /** @class */ (function () {
    function RankingComponent(rankingRpt, route) {
        this.rankingRpt = rankingRpt;
        this.route = route;
        this.loadingIndicator = true;
        this.dtTriggerRanking = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    RankingComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    RankingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsRanking = {
            //};
            //columns is used to for export and others starts
            columns: [
                {
                    title: 'Agent Name',
                    data: 'agentName'
                },
                {
                    title: 'Actual Weight',
                    data: 'actualWeight'
                },
                {
                    title: 'Charged Weight',
                    data: 'chargedWeight'
                },
                {
                    title: 'Net Amount',
                    data: 'netAmount'
                },
                {
                    title: 'Addition',
                    data: 'addition'
                },
                {
                    title: 'Deduction',
                    data: 'deduction'
                }, {
                    title: 'Paid ON',
                    data: 'paidOn'
                }, {
                    title: 'Cash',
                    data: 'cash'
                }, {
                    title: 'Cheque',
                    data: 'cheque'
                }, {
                    title: 'Pdc',
                    data: 'pdc'
                }, {
                    title: 'Remarks',
                    data: 'remarks'
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
        //            this.supplierList.getAllData().subscribe(data => {
        //                this.lrDispatchBknRptList = data['data'];
        //                this.dtTriggerSummary.next();
        //                } );
        this.gettingDataFrmServiceFrRankingTable = this.rankingRpt.getSummaryData();
        this.onDestroyUnsubscribtionRanking = this.gettingDataFrmServiceFrRankingTable.subscribe(function (data) {
            _this.RankingDataList = data['data'];
            _this.dtTriggerRanking.next();
        });
        //the below code is for the getting data through json ends
        //        let id = parseInt( this.route.snapshot.paramMap.get( 'id' ) );
        //        this.departmentsId = id;
    };
    RankingComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerRanking.unsubscribe();
        this.onDestroyUnsubscribtionRanking.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], RankingComponent.prototype, "dtElements", void 0);
    RankingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ranking',
            template: __webpack_require__(/*! ./ranking.component.html */ "./src/app/report/agents/ranking/ranking.component.html"),
            styles: [__webpack_require__(/*! ./ranking.component.css */ "./src/app/report/agents/ranking/ranking.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RankingComponent);
    return RankingComponent;
}());



/***/ }),

/***/ "./src/app/report/agents/statement-verification/statement-verification.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/report/agents/statement-verification/statement-verification.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below css is done for the verticle form starts here*/\n\nhr {\n  margin-bottom: 10px;\n  margin-top: 10pX;\n}\n\n/* the below css is done for the verticle form ends here */\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: #0275d8;\n  color: white;\n}\n\n.faded {\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L2FnZW50cy9zdGF0ZW1lbnQtdmVyaWZpY2F0aW9uL3N0YXRlbWVudC12ZXJpZmljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjs7QUFFRCwyREFBMkQ7O0FBRTNEO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDs7RUFFRSwwQkFBMEI7RUFDMUIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L2FnZW50cy9zdGF0ZW1lbnQtdmVyaWZpY2F0aW9uL3N0YXRlbWVudC12ZXJpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRoZSBiZWxvdyBjc3MgaXMgZG9uZSBmb3IgdGhlIHZlcnRpY2xlIGZvcm0gc3RhcnRzIGhlcmUqL1xuXG5ociB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcFg7XG59XG5cbi8qIHRoZSBiZWxvdyBjc3MgaXMgZG9uZSBmb3IgdGhlIHZlcnRpY2xlIGZvcm0gZW5kcyBoZXJlICovXG5cbi5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5LmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4uY3VzdG9tLWRheS5yYW5nZSxcbi5jdXN0b20tZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzVkODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmFkZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/report/agents/statement-verification/statement-verification.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/report/agents/statement-verification/statement-verification.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Statement Verification</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Statement No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i class=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"statementNo\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" autocomplete=\"off\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" (click)=\"validateSearchBtn();\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\" (click)=\"clearBtn();\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<!-- spinner start-->\n\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\">\n\t\t\t\t\t\t\t\t</mat-progress-bar>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- spinner end-->\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">LR Summary Details</h6>\n\t\t\t\t\t\t\t<table datatable id=\"statementVerificationTableId\"\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStatementReport\" [dtTrigger]=\"dtTriggerStatementReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Title</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Lr</th>\n\t\t\t\t\t\t\t\t\t\t<th>Total Article</th>\n\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Service Tax</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let statementReportData of statementReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.description }}</td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"color:blue;cursor: pointer;text-decoration: underline;\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"stmtVerificationPopUpBtnLink(stmtVerificationLrsDetailsPopUpTemplate,statementReportData)\">\n\t\t\t\t\t\t\t\t\t\t\t{{ statementReportData.totalLrs }}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<!--<td>{{ statementReportData.totalLrs }}</td>-->\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.totalActWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.totalChgWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.totalPaid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ statementReportData.serviceTax }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n\n<!--POP UP START HERE-->\n<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\">\n\t\t\t<ng-template #stmtVerificationLrsDetailsPopUpTemplate let-ok=\"close\" let-d=\"dismiss\">\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewStmtVerificationRptPopUp\" onafterPopUp=\"afterPopUp()\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"popupStmtVerifRpt\">\n\t\t\t\t\t\t\t\t\t\t\t<app-stmt-verification-lrs-details-report>\n\t\t\t\t\t\t\t\t\t\t\t</app-stmt-verification-lrs-details-report>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<button type=\"button\" \n\t\t\t\t\t\t\t\tstyle='background: green;width: auto;color: white;float: right;'\n\t\t\t\t\t\t\t\tclass=\"btn btn-outline-dark\" (click)=\"closeStmtVerificationRptPopUp()\">Close</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--<div class=\"modal-footer\">\n\t\t\t\t\t<div class=\"col-md-4\"></div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<button type=\"button\" style='background: green;width: 100%;color: white;'\n\t\t\t\t\t\t\tclass=\"btn btn-outline-dark\" (click)=\"closeStmtVerificationRptPopUp()\">Close</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\"></div>\n\t\t\t\t</div>-->\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/report/agents/statement-verification/statement-verification.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/report/agents/statement-verification/statement-verification.component.ts ***!
  \******************************************************************************************/
/*! exports provided: StatementVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementVerificationComponent", function() { return StatementVerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataService/dest-stmt-report */ "./src/app/dataService/dest-stmt-report.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/FortNightStmt-dto */ "./src/app/dto/FortNightStmt-dto.ts");
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






var StatementVerificationComponent = /** @class */ (function () {
    function StatementVerificationComponent(statementReport, destStmtReport, router, modalService) {
        var _this = this;
        this.statementReport = statementReport;
        this.destStmtReport = destStmtReport;
        this.router = router;
        this.modalService = modalService;
        this.loadingIndicator = true;
        this.dtTriggerStatementReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoggedIn = true;
        this.address = null;
        this.showSpinnerForAction = false;
        this.validateStatementNumber = null;
        this.searchByAuthorityFortNightDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_8__["FortNightStmtDto"]();
        this.fortNightStmtDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_8__["FortNightStmtDto"]();
        this.fortNightDtoLocalStorage = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_8__["FortNightStmtDto"]();
        this.viewStmtVerificationRptPopUp = false;
        this.validateLocalStorageStmtNo = null;
        this.rightsForStmtVerifRpt = "Right For Stmt Verification SuperAdmin";
        this.searchForAuthorization = function () {
            _this.showSpinnerForAction = true;
            //console.log(this.searchByAuthorityFortNightDto);
            _this.destStmtReport.chkAgentAutority(_this.searchByAuthorityFortNightDto).subscribe(function (response) {
                _this.showSpinnerForAction = false;
                if (response.status == 'notExist') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "No Result Found",
                        text: "No Result Found " + $("#statementNo").val(),
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.statementReportDataList = [];
                    $("#statementVerificationTableId").DataTable().destroy();
                    _this.dtTriggerStatementReport.next();
                }
                else if (response.status == 'unauthorized') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: "UnAuthorized",
                        text: "U are not authorized to view this informations",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.statementReportDataList = [];
                    $("#statementVerificationTableId").DataTable().destroy();
                    _this.dtTriggerStatementReport.next();
                }
                else {
                    _this.setStatementVerificationDetailsReport();
                }
            }), function (error) {
                _this.showSpinnerForAction = false;
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred  While Checking Authorization of Statement verfication Details", "info");
            }, function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
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
        }
    }
    StatementVerificationComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StatementVerificationComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        this.dtOptionsStatementReport = {
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
                            "<td style='width: 22%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Statement No</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + $("#statementNo").val() + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:24px;'><u>Statement Verification Report</u></strong><br>" +
                            "</td>" +
                            "<td rowspan='3' align='left' style='width:22%;'>" +
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
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return " Statement Verification Report- " +
                            "Statement No : " + $("#statementNo").val() + "";
                    },
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
                var totalLrs = api.column(1).data().reduce(function (a, b) {
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
                var topay = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var serviceTax = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html(totalLrs);
                $(api.column(2).footer()).html(articles);
                $(api.column(3).footer()).html(actWgt);
                $(api.column(4).footer()).html(chgWgt);
                $(api.column(5).footer()).html(topay);
                $(api.column(6).footer()).html(paid);
                $(api.column(7).footer()).html(serviceTax);
            }
        };
    };
    StatementVerificationComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerStatementReport.next();
    };
    StatementVerificationComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    StatementVerificationComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerStatementReport.unsubscribe();
        //this.onDestroyUnsubscribtionStatementReport.unsubscribe();
    };
    StatementVerificationComponent.prototype.clearBtn = function () {
        this.clearField();
    };
    StatementVerificationComponent.prototype.clearField = function () {
        $("#statementNo").val('');
        this.statementReportDataList = [];
        $("#statementVerificationTableId").DataTable().destroy();
        this.dtTriggerStatementReport.next();
    };
    StatementVerificationComponent.prototype.validateSearchBtn = function () {
        if ($("#statementNo").val() == null || $("#statementNo").val() == undefined ||
            $("#statementNo").val() == "") {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Mandatory Field", "Please enter the Statement Number", "warning");
            return false;
        }
        /*else if (this.rightsForStmtVerifRpt == "Right For Stmt Verification SuperAdmin") {
            this.setStatementVerificationDetailsReport();
        }*/
        else if (this.userDataDtoReturnSession.role != null
            && this.userDataDtoReturnSession.role == "Super Administrator") {
            this.setStatementVerificationDetailsReport();
        }
        else {
            this.checkForAuthority();
        }
    };
    StatementVerificationComponent.prototype.checkForAuthority = function () {
        this.validateStatementNumber = $("#statementNo").val();
        this.searchByAuthorityFortNightDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_8__["FortNightStmtDto"]();
        this.searchByAuthorityFortNightDto.stmtNo = this.validateStatementNumber;
        this.searchByAuthorityFortNightDto.branch = this.userDataDtoReturnSession.office;
        this.searchByAuthorityFortNightDto.status = 'StmtRpt';
        this.searchForAuthorization();
    };
    StatementVerificationComponent.prototype.getStatementVerificationData = function () {
        this.fortNightStmtDto = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_8__["FortNightStmtDto"]();
        this.validateStatementNumber = $("#statementNo").val();
        this.fortNightStmtDto.stmtNo = this.validateStatementNumber;
        this.fortNightStmtDto.status = "Transit";
        this.fortNightStmtDto.destination = this.userDataDtoReturnSession.mainStation;
        this.fortNightStmtDto.role = this.userDataDtoReturnSession.role;
        this.fortNightStmtDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    StatementVerificationComponent.prototype.setStatementVerificationDetailsReport = function () {
        var _this = this;
        this.getStatementVerificationData();
        this.showSpinnerForAction = true;
        this.destStmtReport.getStmtVerificationDetails(this.fortNightStmtDto).subscribe(function (response) {
            // console.log(response);
            _this.statementReportDataList = [];
            $("#statementVerificationTableId").DataTable().destroy();
            if (response.length > 0) {
                _this.statementReportDataList = response;
                _this.dtTriggerStatementReport.next();
            }
            else {
                _this.dtTriggerStatementReport.next();
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Alert", "NO DATAS FOUND FOR THIS INFORMATION", "info");
            }
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Error", "Server Problem Occurred  While getting of Statement verfication Details", "info");
        }, function () { return console.log('done'); };
    };
    StatementVerificationComponent.prototype.getDismissReason = function (reason) {
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
    StatementVerificationComponent.prototype.stmtVerificationPopUpBtnLink = function (stmtVerificationLrsDetailsPopUpTemplate, statementReportData) {
        var _this = this;
        this.modalRefferenceStmtVerifcationPopUp = this.modalService.open(stmtVerificationLrsDetailsPopUpTemplate, { centered: true, size: "lg" });
        //{ centered: true, windowClass: "modalClassForPopUpTruckOwner" });
        this.modalRefferenceStmtVerifcationPopUp.result.then(function (result) {
            _this.modalRefferenceStmtVerifcationClosePopUp = "Closed with: " + result;
        }, function (reason) {
            _this.modalRefferenceStmtVerifcationClosePopUp = "Dismissed " + _this.getDismissReason(reason);
        });
        this.fortNightDtoLocalStorage = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_8__["FortNightStmtDto"]();
        this.validateLocalStorageStmtNo = null;
        this.validateLocalStorageStmtNo = $("#statementNo").val();
        ;
        this.fortNightDtoLocalStorage.stmtNo = this.validateLocalStorageStmtNo;
        this.fortNightDtoLocalStorage.description = statementReportData.description;
        localStorage.clear();
        localStorage.setItem('stmtVerificationLrsDetailsPopUpTemplate', JSON.stringify(this.fortNightDtoLocalStorage));
        this.viewStmtVerificationRptPopUp = true;
        window.addEventListener('afterPopUp', function (event) {
            _this.viewStmtVerificationRptPopUp = false;
        });
    };
    StatementVerificationComponent.prototype.closeStmtVerificationRptPopUp = function () {
        this.modalRefferenceStmtVerifcationPopUp.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StatementVerificationComponent.prototype, "dtElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stmtVerificationLrsDetailsPopUpTemplate'),
        __metadata("design:type", Object)
    ], StatementVerificationComponent.prototype, "stmtVerificationLrsDetailsPopUpTemplate", void 0);
    StatementVerificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statement-verification',
            template: __webpack_require__(/*! ./statement-verification.component.html */ "./src/app/report/agents/statement-verification/statement-verification.component.html"),
            styles: [__webpack_require__(/*! ./statement-verification.component.css */ "./src/app/report/agents/statement-verification/statement-verification.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"], src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_5__["DestStmtReport"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], StatementVerificationComponent);
    return StatementVerificationComponent;
}());



/***/ }),

/***/ "./src/app/report/agents/stmt-verification-lrs-details-report/stmt-verification-lrs-details-report.component.css":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/report/agents/stmt-verification-lrs-details-report/stmt-verification-lrs-details-report.component.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9hZ2VudHMvc3RtdC12ZXJpZmljYXRpb24tbHJzLWRldGFpbHMtcmVwb3J0L3N0bXQtdmVyaWZpY2F0aW9uLWxycy1kZXRhaWxzLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/agents/stmt-verification-lrs-details-report/stmt-verification-lrs-details-report.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/report/agents/stmt-verification-lrs-details-report/stmt-verification-lrs-details-report.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\" style=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">LR Details</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\">\n\t\t\t\t\t<div class=\"col-md-12  p-t-10\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t\t<div *ngIf=\"showSpinnerForAction\" class=\"col-md-12 p-t-10\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\" style=\"color: green;\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" align='center'\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: green; margin: auto; font-size: 18px;\">\n\t\t\t\t\t\t\t\t\t\t\tPlease Wait Loading Details.....</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<!--<div class=\"card\">-->\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t<!--<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row p-t-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">{{consigneeNameInTable}}-\n\t\t\t\t\t\t\t\t\t\t\t\t\tTransit LR Details</h6>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t<!--<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"stmtVerificationLrsSummaryTableId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsStmtVerificationLrsSummaryReport\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerStmtVerificationLrsSummaryReport\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Lr Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Service Tax</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Actual Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Charged Weight</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let stmtVerificationLrsSummaryData of stmtVerificationLrsSummaryList  \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{stmtVerificationLrsSummaryData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stmtVerificationLrsSummaryData.totalArticles}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stmtVerificationLrsSummaryData.bookingDateStr }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{stmtVerificationLrsSummaryData.description }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stmtVerificationLrsSummaryData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stmtVerificationLrsSummaryData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{stmtVerificationLrsSummaryData.serviceTax }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stmtVerificationLrsSummaryData.actualWeight }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stmtVerificationLrsSummaryData.chargedWeight }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ stmtVerificationLrsSummaryData.goodsValue }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--<div>-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/report/agents/stmt-verification-lrs-details-report/stmt-verification-lrs-details-report.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/report/agents/stmt-verification-lrs-details-report/stmt-verification-lrs-details-report.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: StmtVerificationLrsDetailsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StmtVerificationLrsDetailsReportComponent", function() { return StmtVerificationLrsDetailsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataService/consignee-service */ "./src/app/dataService/consignee-service.ts");
/* harmony import */ var src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/FortNightStmt-dto */ "./src/app/dto/FortNightStmt-dto.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dataService/dest-stmt-report */ "./src/app/dataService/dest-stmt-report.ts");
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









var StmtVerificationLrsDetailsReportComponent = /** @class */ (function () {
    function StmtVerificationLrsDetailsReportComponent(router, datePipe, consigneeService, destStmtReport) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.consigneeService = consigneeService;
        this.destStmtReport = destStmtReport;
        this.loadingIndicator = true;
        this.dtTriggerStmtVerificationLrsSummaryReport = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoggedIn = true;
        this.showSpinnerForAction = false;
        this.fortNightStmtDtoLocalStorage = new src_app_dto_FortNightStmt_dto__WEBPACK_IMPORTED_MODULE_7__["FortNightStmtDto"]();
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.stmtNo = null;
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
            this.fortNightStmtDtoLocalStorage = JSON.parse(localStorage.getItem('stmtVerificationLrsDetailsPopUpTemplate'));
            localStorage.clear();
            if (this.fortNightStmtDtoLocalStorage != null) {
                this.stmtNo = this.fortNightStmtDtoLocalStorage.stmtNo;
                //console.log(this.fortNightStmtDtoLocalStorage);
                this.setStatementVerificationOfLrsSummary();
            }
        }
    }
    StmtVerificationLrsDetailsReportComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    StmtVerificationLrsDetailsReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
            });
        });
    };
    StmtVerificationLrsDetailsReportComponent.prototype.ngOnInit = function () {
        var companyAddressDetls = this.address;
        var printStmtNo = this.stmtNo;
        this.dtOptionsStmtVerificationLrsSummaryReport = {
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
                            "<td style='width: 22%;'>" +
                            "<table>" +
                            "<tr>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>Statement No</strong>" +
                            "</td>" +
                            "<td width='2%' style='text-align:left !important;'>" +
                            "<strong style='font-size:15px;'>:</strong>" +
                            "</td>" +
                            "<td width='10%' style='text-align:left !important;'>" +
                            "<span style='font-size:15px;'>" + printStmtNo + "</span><br>" +
                            "</td>" +
                            "</tr>" +
                            "</table>" +
                            "</td>" +
                            "<td rowspan='3'style='width:54%;word-wrap: break-word;text-align:left !important;'>" +
                            "<strong style='font-size:24px;'><u>Statement Verification LR Details Report</u></strong><br>" +
                            "</td>" +
                            "<td rowspan='3' align='left' style='width:22%;'>" +
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
                    }
                },
                {
                    extend: 'excel',
                    text: '<i class="fas fa-file-excel"> Excel</i>',
                    titleAttr: 'Excel',
                    footer: true,
                    title: function () {
                        return " Statement Verification LR Details Report- " +
                            "Statement No : " + printStmtNo + "";
                    },
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
            "scrollY": 250,
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
                var articles = api.column(1).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var topay = api.column(4).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var paid = api.column(5).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var serviceTax = api.column(6).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var actualWgt = api.column(7).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var chargedWgt = api.column(8).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                var goodsValue = api.column(9).data().reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
                $(api.column(0).footer()).html('Total : ' + data.length);
                $(api.column(1).footer()).html(articles);
                $(api.column(4).footer()).html(topay);
                $(api.column(5).footer()).html(paid);
                $(api.column(6).footer()).html(serviceTax);
                $(api.column(7).footer()).html(actualWgt);
                $(api.column(8).footer()).html(chargedWgt);
                $(api.column(9).footer()).html(goodsValue);
            }
        };
    };
    StmtVerificationLrsDetailsReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerStmtVerificationLrsSummaryReport.unsubscribe();
    };
    StmtVerificationLrsDetailsReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTriggerStmtVerificationLrsSummaryReport.next();
    };
    StmtVerificationLrsDetailsReportComponent.prototype.setStatementVerificationOfLrsSummary = function () {
        var _this = this;
        this.lrDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_8__["LRDto"]();
        this.lrDto.fortNightStmtNo = this.fortNightStmtDtoLocalStorage.stmtNo;
        if (this.fortNightStmtDtoLocalStorage.description != null &&
            this.fortNightStmtDtoLocalStorage.description == "Amount Ask From Agent") {
            this.lrDto.mode = "All";
        }
        else if (this.fortNightStmtDtoLocalStorage.description != null &&
            this.fortNightStmtDtoLocalStorage.description == "Total Lrs In Stock") {
            this.lrDto.mode = "Stock";
        }
        else if (this.fortNightStmtDtoLocalStorage.description != null &&
            this.fortNightStmtDtoLocalStorage.description == "Total Lrs In Transit") {
            this.lrDto.mode = "Transit";
        }
        this.lrDto.status = "Transit";
        this.lrDto.companyId = this.userDataDtoReturnSession.companyId;
        //console.log(this.lrDto);
        this.showSpinnerForAction = true;
        this.destStmtReport.getStmtVerificationDetailsLrs(this.lrDto).subscribe(function (response) {
            //console.log(response);
            $("#stmtVerificationLrsSummaryTableId").DataTable().destroy();
            _this.stmtVerificationLrsSummaryList = [];
            if (response.length > 0) {
                _this.stmtVerificationLrsSummaryList = response;
                //this.dtTriggerStmtVerificationLrsSummaryReport.next();
                setTimeout(function () {
                    _this.dtTriggerStmtVerificationLrsSummaryReport.next();
                }, 3000);
            }
            else {
                //this.dtTriggerStmtVerificationLrsSummaryReport.next();
                setTimeout(function () {
                    _this.dtTriggerStmtVerificationLrsSummaryReport.next();
                }, 3000);
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Warning", "No  Details found !", "warning");
            }
            _this.showSpinnerForAction = false;
        }), function (error) {
            _this.showSpinnerForAction = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Error", "Server Problem Occurred While getting the Statement Verification LR's Details", "info");
        }, function () { return console.log('done'); };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], StmtVerificationLrsDetailsReportComponent.prototype, "dtElements", void 0);
    StmtVerificationLrsDetailsReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stmt-verification-lrs-details-report',
            template: __webpack_require__(/*! ./stmt-verification-lrs-details-report.component.html */ "./src/app/report/agents/stmt-verification-lrs-details-report/stmt-verification-lrs-details-report.component.html"),
            styles: [__webpack_require__(/*! ./stmt-verification-lrs-details-report.component.css */ "./src/app/report/agents/stmt-verification-lrs-details-report/stmt-verification-lrs-details-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            src_app_dataService_consignee_service__WEBPACK_IMPORTED_MODULE_6__["ConsigneeService"], src_app_dataService_dest_stmt_report__WEBPACK_IMPORTED_MODULE_9__["DestStmtReport"]])
    ], StmtVerificationLrsDetailsReportComponent);
    return StmtVerificationLrsDetailsReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-report-agents-agents-module.js.map