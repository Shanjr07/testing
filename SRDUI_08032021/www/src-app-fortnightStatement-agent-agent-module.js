(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-fortnightStatement-agent-agent-module"],{

/***/ "./src/app/fortnightStatement/agent/agent.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/fortnightStatement/agent/agent.module.ts ***!
  \**********************************************************/
/*! exports provided: AgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentModule", function() { return AgentModule; });
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
/* harmony import */ var src_app_fortnightStatement_agent_agent_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/fortnightStatement/agent/agent.routing */ "./src/app/fortnightStatement/agent/agent.routing.ts");
/* harmony import */ var src_app_fortnightStatement_agent_commission_master_commission_master_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/fortnightStatement/agent/commission-master/commission-master.component */ "./src/app/fortnightStatement/agent/commission-master/commission-master.component.ts");
/* harmony import */ var src_app_fortnightStatement_agent_commodity_rate_master_commodity_rate_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/fortnightStatement/agent/commodity-rate-master/commodity-rate-master.component */ "./src/app/fortnightStatement/agent/commodity-rate-master/commodity-rate-master.component.ts");
/* harmony import */ var src_app_fortnightStatement_agent_destination_agent_statement_generation_destination_agent_statement_generation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/fortnightStatement/agent/destination-agent-statement-generation/destination-agent-statement-generation.component */ "./src/app/fortnightStatement/agent/destination-agent-statement-generation/destination-agent-statement-generation.component.ts");
/* harmony import */ var src_app_fortnightStatement_agent_amount_receivable_from_agent_amount_receivable_from_agent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/fortnightStatement/agent/amount-receivable-from-agent/amount-receivable-from-agent.component */ "./src/app/fortnightStatement/agent/amount-receivable-from-agent/amount-receivable-from-agent.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//for select option search starts









var AgentModule = /** @class */ (function () {
    function AgentModule() {
    }
    AgentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_fortnightStatement_agent_agent_routing__WEBPACK_IMPORTED_MODULE_10__["AgentRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"]],
            declarations: [
                src_app_fortnightStatement_agent_commission_master_commission_master_component__WEBPACK_IMPORTED_MODULE_11__["CommissionMasterComponent"], src_app_fortnightStatement_agent_commodity_rate_master_commodity_rate_master_component__WEBPACK_IMPORTED_MODULE_12__["CommodityRateMasterComponent"], src_app_fortnightStatement_agent_destination_agent_statement_generation_destination_agent_statement_generation_component__WEBPACK_IMPORTED_MODULE_13__["DestinationAgentStatementGenerationComponent"], src_app_fortnightStatement_agent_amount_receivable_from_agent_amount_receivable_from_agent_component__WEBPACK_IMPORTED_MODULE_14__["AmountReceivableFromAgentComponent"]
            ]
        })
    ], AgentModule);
    return AgentModule;
}());



/***/ }),

/***/ "./src/app/fortnightStatement/agent/agent.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/fortnightStatement/agent/agent.routing.ts ***!
  \***********************************************************/
/*! exports provided: AgentRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentRoutes", function() { return AgentRoutes; });
/* harmony import */ var src_app_fortnightStatement_agent_commission_master_commission_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/fortnightStatement/agent/commission-master/commission-master.component */ "./src/app/fortnightStatement/agent/commission-master/commission-master.component.ts");
/* harmony import */ var src_app_fortnightStatement_agent_commodity_rate_master_commodity_rate_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/fortnightStatement/agent/commodity-rate-master/commodity-rate-master.component */ "./src/app/fortnightStatement/agent/commodity-rate-master/commodity-rate-master.component.ts");
/* harmony import */ var src_app_fortnightStatement_agent_destination_agent_statement_generation_destination_agent_statement_generation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/fortnightStatement/agent/destination-agent-statement-generation/destination-agent-statement-generation.component */ "./src/app/fortnightStatement/agent/destination-agent-statement-generation/destination-agent-statement-generation.component.ts");
/* harmony import */ var src_app_fortnightStatement_agent_amount_receivable_from_agent_amount_receivable_from_agent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fortnightStatement/agent/amount-receivable-from-agent/amount-receivable-from-agent.component */ "./src/app/fortnightStatement/agent/amount-receivable-from-agent/amount-receivable-from-agent.component.ts");




var AgentRoutes = [
    {
        path: '',
        children: [
            {
                path: 'commissionmaster',
                component: src_app_fortnightStatement_agent_commission_master_commission_master_component__WEBPACK_IMPORTED_MODULE_0__["CommissionMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'commodityratemaster',
                component: src_app_fortnightStatement_agent_commodity_rate_master_commodity_rate_master_component__WEBPACK_IMPORTED_MODULE_1__["CommodityRateMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'destinationAgentStatementGeneration',
                component: src_app_fortnightStatement_agent_destination_agent_statement_generation_destination_agent_statement_generation_component__WEBPACK_IMPORTED_MODULE_2__["DestinationAgentStatementGenerationComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'amountReceivableFromAgent',
                component: src_app_fortnightStatement_agent_amount_receivable_from_agent_amount_receivable_from_agent_component__WEBPACK_IMPORTED_MODULE_3__["AmountReceivableFromAgentComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/fortnightStatement/agent/amount-receivable-from-agent/amount-receivable-from-agent.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/agent/amount-receivable-from-agent/amount-receivable-from-agent.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* for custom css for autocomplete select option starts */\n.auto_selectOption {\n\tfont-size: 15px;\n\tpadding: 0px;\n\tborder: 2px solid #dadee2;\n\theight: 26px;\n\twidth: 100%;\n}\n/* for small mobile */\n@media ( max-width : 355px) {\n\t.auto_selectOption {\n\t\twidth: 49% !important;\n\t}\n}\n/* for medium mobile */\n@media ( max-width : 365px) {\n\t.auto_selectOption {\n\t\twidth: 51%;\n\t}\n}\n/* for mobile */\n@media ( min-width : 370px) and (max-width: 766px) {\n\t.auto_selectOption {\n\t\twidth: 51%;\n\t}\n}\n/* for ipad */\n@media ( min-width : 767px) and (max-width: 990px) {\n\t.auto_selectOption {\n\t\twidth: 81%;\n\t}\n}\n/* for ipad pro */\n@media ( min-width : 991px) and (max-width: 1200px) {\n\t.auto_selectOption {\n\t\twidth: 47%;\n\t}\n}\n/* for desktop */\n@media ( min-width : 1201px) and (max-width: 1500px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n}\n/* for custom css for autocomplete select option ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydG5pZ2h0U3RhdGVtZW50L2FnZW50L2Ftb3VudC1yZWNlaXZhYmxlLWZyb20tYWdlbnQvYW1vdW50LXJlY2VpdmFibGUtZnJvbS1hZ2VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBEQUEwRDtBQUMxRDtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixZQUFZO0NBQ1o7QUFDRCxzQkFBc0I7QUFDdEI7Q0FDQztFQUNDLHNCQUFzQjtFQUN0QjtDQUNEO0FBQ0QsdUJBQXVCO0FBQ3ZCO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUNELGdCQUFnQjtBQUNoQjtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFDRCxjQUFjO0FBQ2Q7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0Qsa0JBQWtCO0FBQ2xCO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUNELGlCQUFpQjtBQUNqQjtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFFRCx3REFBd0QiLCJmaWxlIjoic3JjL2FwcC9mb3J0bmlnaHRTdGF0ZW1lbnQvYWdlbnQvYW1vdW50LXJlY2VpdmFibGUtZnJvbS1hZ2VudC9hbW91bnQtcmVjZWl2YWJsZS1mcm9tLWFnZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmb3IgY3VzdG9tIGNzcyBmb3IgYXV0b2NvbXBsZXRlIHNlbGVjdCBvcHRpb24gc3RhcnRzICovXG4uYXV0b19zZWxlY3RPcHRpb24ge1xuXHRmb250LXNpemU6IDE1cHg7XG5cdHBhZGRpbmc6IDBweDtcblx0Ym9yZGVyOiAycHggc29saWQgI2RhZGVlMjtcblx0aGVpZ2h0OiAyNnB4O1xuXHR3aWR0aDogMTAwJTtcbn1cbi8qIGZvciBzbWFsbCBtb2JpbGUgKi9cbkBtZWRpYSAoIG1heC13aWR0aCA6IDM1NXB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDQ5JSAhaW1wb3J0YW50O1xuXHR9XG59XG4vKiBmb3IgbWVkaXVtIG1vYmlsZSAqL1xuQG1lZGlhICggbWF4LXdpZHRoIDogMzY1cHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNTElO1xuXHR9XG59XG4vKiBmb3IgbW9iaWxlICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiAzNzBweCkgYW5kIChtYXgtd2lkdGg6IDc2NnB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDUxJTtcblx0fVxufVxuLyogZm9yIGlwYWQgKi9cbkBtZWRpYSAoIG1pbi13aWR0aCA6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogODElO1xuXHR9XG59XG4vKiBmb3IgaXBhZCBwcm8gKi9cbkBtZWRpYSAoIG1pbi13aWR0aCA6IDk5MXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDQ3JTtcblx0fVxufVxuLyogZm9yIGRlc2t0b3AgKi9cbkBtZWRpYSAoIG1pbi13aWR0aCA6IDEyMDFweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA1MCU7XG5cdH1cbn1cblxuLyogZm9yIGN1c3RvbSBjc3MgZm9yIGF1dG9jb21wbGV0ZSBzZWxlY3Qgb3B0aW9uIGVuZHMgKi8iXX0= */"

/***/ }),

/***/ "./src/app/fortnightStatement/agent/amount-receivable-from-agent/amount-receivable-from-agent.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/agent/amount-receivable-from-agent/amount-receivable-from-agent.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\n\t<div class=\"col-lg-12\">\n\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Amount Receivable From Agent</h6>\n\t\t\t</div>\n\t\t\t<hr style=\"margin: 0px;\">\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationOptions | filter: control.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestination.length\">No\n\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"amount\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Amount</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"receivingDate\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Receiving Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <hr> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body vl vr\">\n\t\t\t\t\t\t\t<h6 class=\"card-title\">Payment Details</h6>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<label>PaymentType :</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"paymentType\"\n\t\t\t\t\t\t\t\t\t\t\tname=\"paymentType\" #paymentType\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"paymentTypeMode(paymentType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"cash\">Cash</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"cheque\">Cheque</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"pdc\">PDC</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"cashView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Amount Recieved:</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id='amountReceived'\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div *ngIf=\"chequeView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"chequeNumber\">\n\t\t\t\t\t\t\t\t\t\t<label> Cheque No:</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"chequeView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"chequeAmount\">\n\t\t\t\t\t\t\t\t\t\t<label> Cheque Amount:</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"pdcView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"chequeNumber2\">\n\t\t\t\t\t\t\t\t\t\t<label> Cheque No:</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div *ngIf=\"pdcView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"chequeDate\">\n\t\t\t\t\t\t\t\t\t\t<label>Cheque Due Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"pdcView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"bankName\">\n\t\t\t\t\t\t\t\t\t\t<label> Bank Name:</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"pdcView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"chequeAmount\">\n\t\t\t\t\t\t\t\t\t\t<label> Cheque Amount:</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\tid=\"doneBtn\">Done</button>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\" style='border-top: 1px solid #cebd9f;'>\n\t\t\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Cheque Entry</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCheque\" [dtTrigger]=\"dtTriggerCheque\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cheque Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let agentStmtGenerationData of agentStmtGenerationDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentStmtGenerationData.chequeNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentStmtGenerationData.amount }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 vl\"\n\t\t\t\t\t\t\t\t\tstyle='border-right: 1px solid #cebd9f;'>\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">PDC Entry</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsPdc\" [dtTrigger]=\"dtTriggerPdc\">\n\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Cheque Number</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Due Date</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Bank Name</th>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let agentStmtGenerationData of agentStmtGenerationDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentStmtGenerationData.chequeNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentStmtGenerationData.amount }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentStmtGenerationData.dueDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ agentStmtGenerationData.bankName }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Summary</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"totalAmt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Total Amount To be Recieved :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"cash\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Cash :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"chequeAmt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Cheuque Amount:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"pdcAmt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>PDC Amount :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"balance\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Balance To Be Received:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"savenBtn\">Save\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- \t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\"> -->\n\t\t\t\t<!-- \t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\"> -->\n\t\t\t\t<!-- \t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"editBtn\">Edit</button> -->\n\t\t\t\t<!-- \t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"savenprintBtn\">Save -->\n\t\t\t\t<!-- \t\t\t\t\t\t& Print</button> -->\n\t\t\t\t<!-- \t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"clearBtn\">Clear</button> -->\n\t\t\t\t<!-- \t\t\t\t</div> -->\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/fortnightStatement/agent/amount-receivable-from-agent/amount-receivable-from-agent.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/agent/amount-receivable-from-agent/amount-receivable-from-agent.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AmountReceivableFromAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountReceivableFromAgentComponent", function() { return AmountReceivableFromAgentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for the select option with filter starts

//for the select option with filter ends
//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


var AmountReceivableFromAgentComponent = /** @class */ (function () {
    function AmountReceivableFromAgentComponent(agentStmtGenerationRpt) {
        this.agentStmtGenerationRpt = agentStmtGenerationRpt;
        this.cashView = true;
        this.chequeView = false;
        this.pdcView = false;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerCheque = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerPdc = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.destinationOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Chennai' },
            { id: 3, label: 'Madurai' },
            { id: 3, label: 'Coimbatore' }
        ];
    }
    AmountReceivableFromAgentComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    AmountReceivableFromAgentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsCheque = {
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
            "scrollY": 240,
            "scrollCollapse": true,
            //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
            "paging": false,
            "info": false,
        },
            this.dtOptionsPdc = {
                //};
                //columns is used to for export and others starts
                //columns is used to for export and others endss
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //                    {
                //                        extend: 'excel',
                //                        text: '<i class="fas fa-file-excel"> Excel</i>',
                //                        titleAttr: 'Excel',
                //                        exportOptions: {
                //                            columns: ':visible'
                //                        }
                //                    },
                //                    {
                //                        extend: 'print',
                //                        text: '<i class="fas fa-print"> Print</i>',
                //                        titleAttr: 'Print',
                //
                //                    }
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
                "scrollY": 240,
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
        this.getDataFrmServiceFrChqTable = this.agentStmtGenerationRpt.getSummaryData();
        this.onDestroyUnsubscribtionCheque = this.getDataFrmServiceFrChqTable.subscribe(function (data) {
            _this.chqDataList = data['data'];
            _this.dtTriggerCheque.next();
        });
        this.getDataFrmServiceFrPdcTable = this.agentStmtGenerationRpt.getSummaryData();
        this.onDestroyUnsubscribtionPdc = this.getDataFrmServiceFrPdcTable.subscribe(function (data) {
            _this.pdcDataList = data['data'];
            _this.dtTriggerPdc.next();
        });
        //the below code is for the getting data through json ends
    };
    AmountReceivableFromAgentComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerCheque.unsubscribe();
        this.onDestroyUnsubscribtionCheque.unsubscribe();
        this.dtTriggerPdc.unsubscribe();
        this.onDestroyUnsubscribtionPdc.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    AmountReceivableFromAgentComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    AmountReceivableFromAgentComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    AmountReceivableFromAgentComponent.prototype.paymentTypeMode = function (paymentType) {
        if (paymentType === 'cash') {
            this.cashView = true;
            this.chequeView = false;
            this.pdcView = false;
        }
        else if (paymentType === 'cheque') {
            this.cashView = false;
            this.chequeView = true;
            this.pdcView = false;
        }
        else if (paymentType === 'pdc') {
            this.cashView = false;
            this.chequeView = false;
            this.pdcView = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AmountReceivableFromAgentComponent.prototype, "dtElements", void 0);
    AmountReceivableFromAgentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-amount-receivable-from-agent',
            template: __webpack_require__(/*! ./amount-receivable-from-agent.component.html */ "./src/app/fortnightStatement/agent/amount-receivable-from-agent/amount-receivable-from-agent.component.html"),
            styles: [__webpack_require__(/*! ./amount-receivable-from-agent.component.css */ "./src/app/fortnightStatement/agent/amount-receivable-from-agent/amount-receivable-from-agent.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"]])
    ], AmountReceivableFromAgentComponent);
    return AmountReceivableFromAgentComponent;
}());



/***/ }),

/***/ "./src/app/fortnightStatement/agent/commission-master/commission-master.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/fortnightStatement/agent/commission-master/commission-master.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* for custom css for autocomplete select option starts */\n.auto_selectOption {\n\tfont-size: 15px;\n\tpadding: 0px;\n\tborder: 2px solid #dadee2;\n\theight: 26px;\n\twidth: 100%;\n}\n/* for small mobile */\n@media ( max-width : 355px) {\n\t.auto_selectOption {\n\t\twidth: 49% !important;\n\t}\n}\n/* for medium mobile */\n@media ( max-width : 365px) {\n\t.auto_selectOption {\n\t\twidth: 51%;\n\t}\n}\n/* for mobile */\n@media ( min-width : 370px) and (max-width: 766px) {\n\t.auto_selectOption {\n\t\twidth: 51%;\n\t}\n}\n/* for ipad */\n@media ( min-width : 767px) and (max-width: 990px) {\n\t.auto_selectOption {\n\t\twidth: 81%;\n\t}\n}\n/* for ipad pro */\n@media ( min-width : 991px) and (max-width: 1200px) {\n\t.auto_selectOption {\n\t\twidth: 47%;\n\t}\n}\n/* for desktop */\n@media ( min-width : 1201px) and (max-width: 1500px) {\n\t.auto_selectOption {\n\t\twidth: 50%;\n\t}\n}\n/* for custom css for autocomplete select option ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydG5pZ2h0U3RhdGVtZW50L2FnZW50L2NvbW1pc3Npb24tbWFzdGVyL2NvbW1pc3Npb24tbWFzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQTBEO0FBQzFEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLFlBQVk7Q0FDWjtBQUNELHNCQUFzQjtBQUN0QjtDQUNDO0VBQ0Msc0JBQXNCO0VBQ3RCO0NBQ0Q7QUFDRCx1QkFBdUI7QUFDdkI7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0QsZ0JBQWdCO0FBQ2hCO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUNELGNBQWM7QUFDZDtDQUNDO0VBQ0MsV0FBVztFQUNYO0NBQ0Q7QUFDRCxrQkFBa0I7QUFDbEI7Q0FDQztFQUNDLFdBQVc7RUFDWDtDQUNEO0FBQ0QsaUJBQWlCO0FBQ2pCO0NBQ0M7RUFDQyxXQUFXO0VBQ1g7Q0FDRDtBQUVELHdEQUF3RCIsImZpbGUiOiJzcmMvYXBwL2ZvcnRuaWdodFN0YXRlbWVudC9hZ2VudC9jb21taXNzaW9uLW1hc3Rlci9jb21taXNzaW9uLW1hc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9yIGN1c3RvbSBjc3MgZm9yIGF1dG9jb21wbGV0ZSBzZWxlY3Qgb3B0aW9uIHN0YXJ0cyAqL1xuLmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRwYWRkaW5nOiAwcHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNkYWRlZTI7XG5cdGhlaWdodDogMjZweDtcblx0d2lkdGg6IDEwMCU7XG59XG4vKiBmb3Igc21hbGwgbW9iaWxlICovXG5AbWVkaWEgKCBtYXgtd2lkdGggOiAzNTVweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA0OSUgIWltcG9ydGFudDtcblx0fVxufVxuLyogZm9yIG1lZGl1bSBtb2JpbGUgKi9cbkBtZWRpYSAoIG1heC13aWR0aCA6IDM2NXB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDUxJTtcblx0fVxufVxuLyogZm9yIG1vYmlsZSAqL1xuQG1lZGlhICggbWluLXdpZHRoIDogMzcwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA1MSU7XG5cdH1cbn1cbi8qIGZvciBpcGFkICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG5cdC5hdXRvX3NlbGVjdE9wdGlvbiB7XG5cdFx0d2lkdGg6IDgxJTtcblx0fVxufVxuLyogZm9yIGlwYWQgcHJvICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXHQuYXV0b19zZWxlY3RPcHRpb24ge1xuXHRcdHdpZHRoOiA0NyU7XG5cdH1cbn1cbi8qIGZvciBkZXNrdG9wICovXG5AbWVkaWEgKCBtaW4td2lkdGggOiAxMjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcblx0LmF1dG9fc2VsZWN0T3B0aW9uIHtcblx0XHR3aWR0aDogNTAlO1xuXHR9XG59XG5cbi8qIGZvciBjdXN0b20gY3NzIGZvciBhdXRvY29tcGxldGUgc2VsZWN0IG9wdGlvbiBlbmRzICovIl19 */"

/***/ }),

/***/ "./src/app/fortnightStatement/agent/commission-master/commission-master.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/fortnightStatement/agent/commission-master/commission-master.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Commission Master</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationOptions | filter: control.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestination.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"initialCommission\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Intial Commission(%)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"unit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>unit</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Unit...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Freight Amount</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Actual Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Charged Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"serviceCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Service Charge(Rs)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Slabs (Days)</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"from\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">From</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"to\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">To</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commission\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">Commission (%)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 95%;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"applyBtn\">Apply</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t<h6 class=\"card-title border_bottom\">Agent Commission Master</h6>\n\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCommissionMaster\"\n\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCommissionMaster\">\n\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>Agent Destination</th>\n\t\t\t\t\t\t\t\t\t<th>Initial Commission</th>\n\t\t\t\t\t\t\t\t\t<th>Effective From</th>\n\t\t\t\t\t\t\t\t\t<th>Fixed By</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t*ngFor=\"let commissionMasterData of commissionMasterDataList \">\n\t\t\t\t\t\t\t\t\t<td>{{ commissionMasterData.agentDestination }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ commissionMasterData.initialCommission}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ commissionMasterData.effectiveFrom }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ commissionMasterData.fixedBy }}</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/fortnightStatement/agent/commission-master/commission-master.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/fortnightStatement/agent/commission-master/commission-master.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CommissionMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommissionMasterComponent", function() { return CommissionMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
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
//for datepicker starts
var my = new Date();
//for datepicker ends
//for the select option with filter starts

//for the select option with filter ends


var CommissionMasterComponent = /** @class */ (function () {
    function CommissionMasterComponent(commissionMasterRpt) {
        this.commissionMasterRpt = commissionMasterRpt;
        this.loadingIndicator = true;
        this.dtTriggerCommissionMaster = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.destinationOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Chennai' },
            { id: 3, label: 'Madurai' },
            { id: 3, label: 'Bangalore' }
        ];
    }
    CommissionMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    CommissionMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsCommissionMaster = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
            //              {
            //                  extend: 'excel',
            //                  text: '<i class="fas fa-file-excel"> Excel</i>',
            //                  titleAttr: 'Excel',
            //                  exportOptions: {
            //                      columns: ':visible'
            //                  }
            //              },
            //              {
            //                  extend: 'print',
            //                  text: '<i class="fas fa-print"> Print</i>',
            //                  titleAttr: 'Print',
            //
            //              }
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
        this.getDataFrmServiceFrTable = this.commissionMasterRpt.getSummaryData();
        this.onDestroyUnsubscribtionCommissionMaster = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.commissionMasterDataList = data['data'];
            _this.dtTriggerCommissionMaster.next();
        });
        //the below code is for the getting data through json ends
    };
    CommissionMasterComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerCommissionMaster.unsubscribe();
        this.onDestroyUnsubscribtionCommissionMaster.unsubscribe();
    };
    //for the select option with filter starts
    CommissionMasterComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CommissionMasterComponent.prototype, "dtElements", void 0);
    CommissionMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commission-master',
            template: __webpack_require__(/*! ./commission-master.component.html */ "./src/app/fortnightStatement/agent/commission-master/commission-master.component.html"),
            styles: [__webpack_require__(/*! ./commission-master.component.css */ "./src/app/fortnightStatement/agent/commission-master/commission-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], CommissionMasterComponent);
    return CommissionMasterComponent;
}());



/***/ }),

/***/ "./src/app/fortnightStatement/agent/commodity-rate-master/commodity-rate-master.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/agent/commodity-rate-master/commodity-rate-master.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnRuaWdodFN0YXRlbWVudC9hZ2VudC9jb21tb2RpdHktcmF0ZS1tYXN0ZXIvY29tbW9kaXR5LXJhdGUtbWFzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/fortnightStatement/agent/commodity-rate-master/commodity-rate-master.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/agent/commodity-rate-master/commodity-rate-master.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Commodity Rate Master</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-4 vl\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(destinationOptions | filter: control.value) as resultDestination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDestination\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDestination.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"commodity\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Commodity\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(commodityOptions | filter: control.value) as resultCommodity\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultCommodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultCommodity.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"initialCommission\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<label>Intial Commin(%)</label>\n                               <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">\n                                  <i class=\"fas fa-clock\"></i>\n                                </span>\n                              </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"GD Hamali\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"initialCommission\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<label>Intial Commin(%)</label>\n                               <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">\n                                  <i class=\"fas fa-clock\"></i>\n                                </span>\n                              </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"DD Hamali\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCommodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCommodity\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Commodity</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Hamali GD</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Hamali DD</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let commodityData of commodityDataList \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityData.commodityName }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityData.hamaliGD}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ commodityData.hamaliDD }}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" style='padding-top: 5px;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"unit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Unit</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Unit...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Article</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Actual Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Charged Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"reciptCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Recipt Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"serviceCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Service Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\tid=\"applyBtn\">Apply</button>\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark m-r-10\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-8 vl\">\n\t\t\t\t\t<h6 class=\"card-title border_bottom\">Destination -Commodity\n\t\t\t\t\t\tWise Rate</h6>\n\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsCommissionRateMaster\"\n\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerCommissionRateMaster\">\n\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>Commodity Name</th>\n\t\t\t\t\t\t\t\t\t<th>Hamali GD</th>\n\t\t\t\t\t\t\t\t\t<th>Hamali DD</th>\n\t\t\t\t\t\t\t\t\t<th>Receipt Charge</th>\n\t\t\t\t\t\t\t\t\t<th>Service Charge</th>\n\t\t\t\t\t\t\t\t\t<th>Hamali Unit</th>\n\t\t\t\t\t\t\t\t\t<th>Effective From</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t*ngFor=\"let commissionRateMasterData of commissionRateMasterDataList \">\n\t\t\t\t\t\t\t\t\t<td>{{ commissionRateMasterData.commodityName }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ commissionRateMasterData.hamaliGD}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ commissionRateMasterData.hamaliDD }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ commissionRateMasterData.receiptCharge }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ commissionRateMasterData.serviceCharge }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ commissionRateMasterData.effectiveFrom }}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/fortnightStatement/agent/commodity-rate-master/commodity-rate-master.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/agent/commodity-rate-master/commodity-rate-master.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CommodityRateMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommodityRateMasterComponent", function() { return CommodityRateMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/report-service */ "./src/app/dataService/report-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
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
//for datepicker starts
var my = new Date();
//for datepicker ends
//for the select option with filter starts

//for the select option with filter ends


var CommodityRateMasterComponent = /** @class */ (function () {
    function CommodityRateMasterComponent(commissionRateMasterRpt) {
        this.commissionRateMasterRpt = commissionRateMasterRpt;
        this.loadingIndicator = true;
        this.dtTriggerCommissionRateMaster = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dtTriggerCommodity = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.destinationOptions = [
            { id: 1, label: 'All' },
            { id: 2, label: 'Chennai' },
            { id: 3, label: 'Madurai' },
            { id: 3, label: 'Bangalore' }
        ];
        this.commodityOptions = [
            { id: 1, label: 'BICYCLE' },
            { id: 2, label: 'HANDLE' },
            { id: 3, label: 'COOPER  SHEET' },
            { id: 3, label: 'PLYWOOD' }
        ];
    }
    CommodityRateMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    CommodityRateMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsCommissionRateMaster = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
            //              {
            //                  extend: 'excel',
            //                  text: '<i class="fas fa-file-excel"> Excel</i>',
            //                  titleAttr: 'Excel',
            //                  exportOptions: {
            //                      columns: ':visible'
            //                  }
            //              },
            //              {
            //                  extend: 'print',
            //                  text: '<i class="fas fa-print"> Print</i>',
            //                  titleAttr: 'Print',
            //
            //              }
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
            this.dtOptionsCommodity = {
                //};
                //columns is used to for export and others starts
                //columns is used to for export and others endss
                // the below code is for button export starts
                dom: 'Bfrtip',
                /*buttons: [
                          'excel', 'print'
                      ],*/
                buttons: [
                //              {
                //                  extend: 'excel',
                //                  text: '<i class="fas fa-file-excel"> Excel</i>',
                //                  titleAttr: 'Excel',
                //                  exportOptions: {
                //                      columns: ':visible'
                //                  }
                //              },
                //              {
                //                  extend: 'print',
                //                  text: '<i class="fas fa-print"> Print</i>',
                //                  titleAttr: 'Print',
                //
                //              }
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
                "scrollY": 160,
                "scrollCollapse": true,
                //this used to hide paggination and content like showing 1 to 3 of 20 entries Starts
                "paging": false,
                "info": false,
                "searching": false,
            };
        this.getDataFrmServiceFrTable = this.commissionRateMasterRpt.getSummaryData();
        this.onDestroyUnsubscribtionCommissionRateMaster = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.commissionRateMasterDataList = data['data'];
            _this.dtTriggerCommissionRateMaster.next();
        });
        this.getDataFrmServiceFrCommodityTable = this.commissionRateMasterRpt.getSummaryData();
        this.onDestroyUnsubscribtionCommodity = this.getDataFrmServiceFrCommodityTable.subscribe(function (data) {
            _this.commodityDataList = data['data'];
            _this.dtTriggerCommodity.next();
        });
        //the below code is for the getting data through json ends
    };
    CommodityRateMasterComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerCommissionRateMaster.unsubscribe();
        this.dtTriggerCommodity.unsubscribe();
        this.onDestroyUnsubscribtionCommissionRateMaster.unsubscribe();
        this.onDestroyUnsubscribtionCommodity.unsubscribe();
    };
    //for the select option with filter starts
    CommodityRateMasterComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CommodityRateMasterComponent.prototype, "dtElements", void 0);
    CommodityRateMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commodity-rate-master',
            template: __webpack_require__(/*! ./commodity-rate-master.component.html */ "./src/app/fortnightStatement/agent/commodity-rate-master/commodity-rate-master.component.html"),
            styles: [__webpack_require__(/*! ./commodity-rate-master.component.css */ "./src/app/fortnightStatement/agent/commodity-rate-master/commodity-rate-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], CommodityRateMasterComponent);
    return CommodityRateMasterComponent;
}());



/***/ }),

/***/ "./src/app/fortnightStatement/agent/destination-agent-statement-generation/destination-agent-statement-generation.component.css":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/agent/destination-agent-statement-generation/destination-agent-statement-generation.component.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border_bottom {\n\tborder-bottom: 1px solid orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydG5pZ2h0U3RhdGVtZW50L2FnZW50L2Rlc3RpbmF0aW9uLWFnZW50LXN0YXRlbWVudC1nZW5lcmF0aW9uL2Rlc3RpbmF0aW9uLWFnZW50LXN0YXRlbWVudC1nZW5lcmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMiLCJmaWxlIjoic3JjL2FwcC9mb3J0bmlnaHRTdGF0ZW1lbnQvYWdlbnQvZGVzdGluYXRpb24tYWdlbnQtc3RhdGVtZW50LWdlbmVyYXRpb24vZGVzdGluYXRpb24tYWdlbnQtc3RhdGVtZW50LWdlbmVyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXJfYm90dG9tIHtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/fortnightStatement/agent/destination-agent-statement-generation/destination-agent-statement-generation.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/agent/destination-agent-statement-generation/destination-agent-statement-generation.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">Destination Agent Statement Generation</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Statement Period</h6>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Period</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Period</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"generateBtn\" disabled>Generate</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<h6 class=\"card-title border_bottom\">List of Destination Agents</h6>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsDestinationAgentStatementGeneration\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerDestinationAgentStatementGeneration\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th><input type=\"checkbox\" class=\"editor-active\"></th>\n\t\t\t\t\t\t\t\t\t\t<th>Station Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Current Stmt From Date.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Current Stmt To Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Current Stmt Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Current Stmt No</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let destinationAgentStatementGenerationData of destinationAgentStatementGenerationDataList \">\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"checkbox\"></td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationAgentStatementGenerationData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationAgentStatementGenerationData.name}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationAgentStatementGenerationData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationAgentStatementGenerationData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ destinationAgentStatementGenerationData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/fortnightStatement/agent/destination-agent-statement-generation/destination-agent-statement-generation.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/agent/destination-agent-statement-generation/destination-agent-statement-generation.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: DestinationAgentStatementGenerationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationAgentStatementGenerationComponent", function() { return DestinationAgentStatementGenerationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
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

var my = new Date();
//for datepicker ends


var DestinationAgentStatementGenerationComponent = /** @class */ (function () {
    function DestinationAgentStatementGenerationComponent(destinationAgentStatementGenerationRpt) {
        this.destinationAgentStatementGenerationRpt = destinationAgentStatementGenerationRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerDestinationAgentStatementGeneration = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DestinationAgentStatementGenerationComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    DestinationAgentStatementGenerationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsDestinationAgentStatementGeneration = {
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
        this.getDataFrmServiceFrTable = this.destinationAgentStatementGenerationRpt.getSummaryData();
        this.onDestroyUnsubscribtionDestinationAgentStatementGeneration = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.destinationAgentStatementGenerationDataList = data['data'];
            _this.dtTriggerDestinationAgentStatementGeneration.next();
        });
        //the below code is for the getting data through json ends
    };
    DestinationAgentStatementGenerationComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerDestinationAgentStatementGeneration.unsubscribe();
        this.onDestroyUnsubscribtionDestinationAgentStatementGeneration.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    DestinationAgentStatementGenerationComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DestinationAgentStatementGenerationComponent.prototype, "dtElements", void 0);
    DestinationAgentStatementGenerationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-destination-agent-statement-generation',
            template: __webpack_require__(/*! ./destination-agent-statement-generation.component.html */ "./src/app/fortnightStatement/agent/destination-agent-statement-generation/destination-agent-statement-generation.component.html"),
            styles: [__webpack_require__(/*! ./destination-agent-statement-generation.component.css */ "./src/app/fortnightStatement/agent/destination-agent-statement-generation/destination-agent-statement-generation.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], DestinationAgentStatementGenerationComponent);
    return DestinationAgentStatementGenerationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-fortnightStatement-agent-agent-module.js.map