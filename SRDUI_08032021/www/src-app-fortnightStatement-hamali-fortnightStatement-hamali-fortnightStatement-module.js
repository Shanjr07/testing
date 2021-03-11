(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-fortnightStatement-hamali-fortnightStatement-hamali-fortnightStatement-module"],{

/***/ "./src/app/fortnightStatement/hamali-fortnightStatement/hamali-fortnightStatement.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/hamali-fortnightStatement/hamali-fortnightStatement.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: HamaliFortnightStatementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamaliFortnightStatementModule", function() { return HamaliFortnightStatementModule; });
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
/* harmony import */ var src_app_fortnightStatement_hamali_fortnightStatement_hamali_fortnightStatement_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/fortnightStatement/hamali-fortnightStatement/hamali-fortnightStatement.routing */ "./src/app/fortnightStatement/hamali-fortnightStatement/hamali-fortnightStatement.routing.ts");
/* harmony import */ var src_app_fortnightStatement_hamali_fortnightStatement_srd_labour_master_srd_labour_master_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-master/srd-labour-master.component */ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-master/srd-labour-master.component.ts");
/* harmony import */ var src_app_fortnightStatement_hamali_fortnightStatement_labour_commission_setup_mumbai_labour_commission_setup_mumbai_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/fortnightStatement/hamali-fortnightStatement/labour-commission-setup-mumbai/labour-commission-setup-mumbai.component */ "./src/app/fortnightStatement/hamali-fortnightStatement/labour-commission-setup-mumbai/labour-commission-setup-mumbai.component.ts");
/* harmony import */ var src_app_fortnightStatement_hamali_fortnightStatement_srd_labour_statement_generation_srd_labour_statement_generation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-statement-generation/srd-labour-statement-generation.component */ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-statement-generation/srd-labour-statement-generation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*for old datatable*/ 


//for select option search starts








var HamaliFortnightStatementModule = /** @class */ (function () {
    function HamaliFortnightStatementModule() {
    }
    HamaliFortnightStatementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_fortnightStatement_hamali_fortnightStatement_hamali_fortnightStatement_routing__WEBPACK_IMPORTED_MODULE_10__["HamaliRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"]],
            declarations: [
                src_app_fortnightStatement_hamali_fortnightStatement_srd_labour_master_srd_labour_master_component__WEBPACK_IMPORTED_MODULE_11__["SrdLabourMasterComponent"],
                src_app_fortnightStatement_hamali_fortnightStatement_labour_commission_setup_mumbai_labour_commission_setup_mumbai_component__WEBPACK_IMPORTED_MODULE_12__["LabourCommissionSetupMumbaiComponent"],
                src_app_fortnightStatement_hamali_fortnightStatement_srd_labour_statement_generation_srd_labour_statement_generation_component__WEBPACK_IMPORTED_MODULE_13__["SrdLabourStatementGenerationComponent"]
            ]
        })
    ], HamaliFortnightStatementModule);
    return HamaliFortnightStatementModule;
}());



/***/ }),

/***/ "./src/app/fortnightStatement/hamali-fortnightStatement/hamali-fortnightStatement.routing.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/hamali-fortnightStatement/hamali-fortnightStatement.routing.ts ***!
  \***************************************************************************************************/
/*! exports provided: HamaliRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamaliRoutes", function() { return HamaliRoutes; });
/* harmony import */ var src_app_fortnightStatement_hamali_fortnightStatement_srd_labour_master_srd_labour_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-master/srd-labour-master.component */ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-master/srd-labour-master.component.ts");
/* harmony import */ var src_app_fortnightStatement_hamali_fortnightStatement_labour_commission_setup_mumbai_labour_commission_setup_mumbai_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/fortnightStatement/hamali-fortnightStatement/labour-commission-setup-mumbai/labour-commission-setup-mumbai.component */ "./src/app/fortnightStatement/hamali-fortnightStatement/labour-commission-setup-mumbai/labour-commission-setup-mumbai.component.ts");
/* harmony import */ var src_app_fortnightStatement_hamali_fortnightStatement_srd_labour_statement_generation_srd_labour_statement_generation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-statement-generation/srd-labour-statement-generation.component */ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-statement-generation/srd-labour-statement-generation.component.ts");



var HamaliRoutes = [
    {
        path: '',
        children: [
            {
                path: 'srdlabourmaster',
                component: src_app_fortnightStatement_hamali_fortnightStatement_srd_labour_master_srd_labour_master_component__WEBPACK_IMPORTED_MODULE_0__["SrdLabourMasterComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'labourcommissionsetupmumbai',
                component: src_app_fortnightStatement_hamali_fortnightStatement_labour_commission_setup_mumbai_labour_commission_setup_mumbai_component__WEBPACK_IMPORTED_MODULE_1__["LabourCommissionSetupMumbaiComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'srdLabourStatementGeneration',
                component: src_app_fortnightStatement_hamali_fortnightStatement_srd_labour_statement_generation_srd_labour_statement_generation_component__WEBPACK_IMPORTED_MODULE_2__["SrdLabourStatementGenerationComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/fortnightStatement/hamali-fortnightStatement/labour-commission-setup-mumbai/labour-commission-setup-mumbai.component.css":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/hamali-fortnightStatement/labour-commission-setup-mumbai/labour-commission-setup-mumbai.component.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width:768px) {\n  .col-sm-3 {\n    padding-left: 20px;\n    padding-right: 15PX;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydG5pZ2h0U3RhdGVtZW50L2hhbWFsaS1mb3J0bmlnaHRTdGF0ZW1lbnQvbGFib3VyLWNvbW1pc3Npb24tc2V0dXAtbXVtYmFpL2xhYm91ci1jb21taXNzaW9uLXNldHVwLW11bWJhaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0dBQ3JCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb3J0bmlnaHRTdGF0ZW1lbnQvaGFtYWxpLWZvcnRuaWdodFN0YXRlbWVudC9sYWJvdXItY29tbWlzc2lvbi1zZXR1cC1tdW1iYWkvbGFib3VyLWNvbW1pc3Npb24tc2V0dXAtbXVtYmFpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xuICAuY29sLXNtLTMge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNVBYO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/fortnightStatement/hamali-fortnightStatement/labour-commission-setup-mumbai/labour-commission-setup-mumbai.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/hamali-fortnightStatement/labour-commission-setup-mumbai/labour-commission-setup-mumbai.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Labour Commission Setup\n\t\t\t\t\tMumbai</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- <h4 class=\"card-title\">Tempo Details</h4> -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"loaderName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loader Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"padding: 10px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"card-header bg-info\" style=\"background-color:orange!important;padding:5px;\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>Select Source For Group</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"purna\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \" for=\"purna\">Purna</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"vapi\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \" for=\"vapi\">Vapi</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"vasai\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \" for=\"vasai\">Vasai</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"andheri\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \" for=\"andheri\">Andheri</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"operaHouse\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \" for=\"operaHouse\">Opera\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHouse</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"chinchBunder\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"chinchBunder\">Chinch Bunder</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<!-- loading hamali starts -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h6>Loading Hamali</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"defaultWeightForActualWeight\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Default Rate(for Act Wgt) Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"newLoader\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Weight In Tonn For Order LR</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- loading Hamali ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- slabs starts below -->\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>Slabs For Heavy LR</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"From Wgt\" aria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"To Wgt\" aria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Rate\" aria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"From Wgt\" aria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"To Wgt\" aria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Rate\" aria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"From Wgt\" aria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-clock\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"To Wgt\" aria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Rate\" aria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- slabs ends -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- thappi starts below -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h6>Thappi</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"thappiRateForTonn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Thappi(Rate For Tonn)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"thappiRateForSecondLoading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Thappi(Rate For 2nd Loading)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Unit...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Kanta Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Actual Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Charged Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"warfare\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Warfare(Rs)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"daysWork\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Days Work (In A Week)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>1</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">5</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"levi\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Levi(%)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"applyBtn\">Apply</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 vl\">\n\t\t\t\t\t<h6 class=\"card-title border_bottom\">Commission Details</h6>\n\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLabourCommission\" [dtTrigger]=\"dtTriggerLabourCommission\">\n\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>Loader Name</th>\n\t\t\t\t\t\t\t\t\t<th>Warfair</th>\n\t\t\t\t\t\t\t\t\t<th>Levi</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let labourCommissionData of labourCommissionDataList \">\n\t\t\t\t\t\t\t\t\t<td>{{ labourCommissionData.loaderName }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ labourCommissionData.warfair}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ labourCommissionData.levi }}</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/fortnightStatement/hamali-fortnightStatement/labour-commission-setup-mumbai/labour-commission-setup-mumbai.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/hamali-fortnightStatement/labour-commission-setup-mumbai/labour-commission-setup-mumbai.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: LabourCommissionSetupMumbaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabourCommissionSetupMumbaiComponent", function() { return LabourCommissionSetupMumbaiComponent; });
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
//for datepicker starts
var my = new Date();
//for datepicker ends


var LabourCommissionSetupMumbaiComponent = /** @class */ (function () {
    function LabourCommissionSetupMumbaiComponent(labourCommissionRpt) {
        this.labourCommissionRpt = labourCommissionRpt;
        this.loadingIndicator = true;
        this.reorderable = true;
        this.dtTriggerLabourCommission = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LabourCommissionSetupMumbaiComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    LabourCommissionSetupMumbaiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsLabourCommission = {
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
        this.getDataFrmServiceFrTable = this.labourCommissionRpt.getSummaryData();
        this.onDestroyUnsubscribtionLabourCommission = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.labourCommissionDataList = data['data'];
            _this.dtTriggerLabourCommission.next();
        });
        //the below code is for the getting data through json ends
    };
    LabourCommissionSetupMumbaiComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLabourCommission.unsubscribe();
        this.onDestroyUnsubscribtionLabourCommission.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LabourCommissionSetupMumbaiComponent.prototype, "dtElements", void 0);
    LabourCommissionSetupMumbaiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-labour-commission-setup-mumbai',
            template: __webpack_require__(/*! ./labour-commission-setup-mumbai.component.html */ "./src/app/fortnightStatement/hamali-fortnightStatement/labour-commission-setup-mumbai/labour-commission-setup-mumbai.component.html"),
            styles: [__webpack_require__(/*! ./labour-commission-setup-mumbai.component.css */ "./src/app/fortnightStatement/hamali-fortnightStatement/labour-commission-setup-mumbai/labour-commission-setup-mumbai.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], LabourCommissionSetupMumbaiComponent);
    return LabourCommissionSetupMumbaiComponent;
}());



/***/ }),

/***/ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-master/srd-labour-master.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-master/srd-labour-master.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcnRuaWdodFN0YXRlbWVudC9oYW1hbGktZm9ydG5pZ2h0U3RhdGVtZW50L3NyZC1sYWJvdXItbWFzdGVyL3NyZC1sYWJvdXItbWFzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-master/srd-labour-master.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-master/srd-labour-master.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">SRD Labour Master</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h4 class=\"card-title\">Tempo Details</h4> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loader Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"loaderName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"loaderName\" #loaderName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"loaderNameMethod(loaderName.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Loader...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"addNew\">Add New</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Monu Choudhary</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Gopal Choudhary</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"addNewLoaderName\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"newLoader\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>New Loader</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"loadingHamali\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loading Hamali</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"unit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Unit</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Unit...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Kanta Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Actual Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Charged Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"unloadingHamali\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Unoading Hamali</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"unit\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Unit</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Select Unit...</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Kanta Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Actual Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Charged Weight</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"applyBtn\">Apply</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t<h6 class=\"card-title border_bottom\">Commission Details</h6>\n\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsSrdLabour\" [dtTrigger]=\"dtTriggerSrdLabour\">\n\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>Loader Head</th>\n\t\t\t\t\t\t\t\t\t<th>Loading Hamali</th>\n\t\t\t\t\t\t\t\t\t<th>Loading Hamali Unit</th>\n\t\t\t\t\t\t\t\t\t<th>Unloading Hamali</th>\n\t\t\t\t\t\t\t\t\t<th>Unloading Hamali Unit</th>\n\t\t\t\t\t\t\t\t\t<th>Effective From</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let srdLabourData of srdLabourDataList \">\n\t\t\t\t\t\t\t\t\t<td>{{ srdLabourData.loaderHead }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ srdLabourData.loadingHamali}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ srdLabourData.loadingHamaliUnit }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ srdLabourData.unLoadingHamali }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ srdLabourData.unLoadingHamaliUnit }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{ srdLabourData.effectiveFrom }}</td>\n\n\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-master/srd-labour-master.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-master/srd-labour-master.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: SrdLabourMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrdLabourMasterComponent", function() { return SrdLabourMasterComponent; });
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
//for datepicker starts
var my = new Date();
//for datepicker ends


var SrdLabourMasterComponent = /** @class */ (function () {
    function SrdLabourMasterComponent(srdLabourRpt) {
        this.srdLabourRpt = srdLabourRpt;
        this.addNewLoaderName = false;
        this.loadingIndicator = true;
        this.dtTriggerSrdLabour = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SrdLabourMasterComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    SrdLabourMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsSrdLabour = {
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
        this.getDataFrmServiceFrTable = this.srdLabourRpt.getSummaryData();
        this.onDestroyUnsubscribtionSrdLabour = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.srdLabourDataList = data['data'];
            _this.dtTriggerSrdLabour.next();
        });
        //the below code is for the getting data through json ends
    };
    SrdLabourMasterComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerSrdLabour.unsubscribe();
        this.onDestroyUnsubscribtionSrdLabour.unsubscribe();
    };
    SrdLabourMasterComponent.prototype.loaderNameMethod = function (loaderValue) {
        if (loaderValue === 'addNew') {
            this.addNewLoaderName = true;
        }
        else {
            this.addNewLoaderName = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], SrdLabourMasterComponent.prototype, "dtElements", void 0);
    SrdLabourMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-srd-labour-master',
            template: __webpack_require__(/*! ./srd-labour-master.component.html */ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-master/srd-labour-master.component.html"),
            styles: [__webpack_require__(/*! ./srd-labour-master.component.css */ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-master/srd-labour-master.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], SrdLabourMasterComponent);
    return SrdLabourMasterComponent;
}());



/***/ }),

/***/ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-statement-generation/srd-labour-statement-generation.component.css":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-statement-generation/srd-labour-statement-generation.component.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border_bottom {\n\tborder-bottom: 1px solid orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ydG5pZ2h0U3RhdGVtZW50L2hhbWFsaS1mb3J0bmlnaHRTdGF0ZW1lbnQvc3JkLWxhYm91ci1zdGF0ZW1lbnQtZ2VuZXJhdGlvbi9zcmQtbGFib3VyLXN0YXRlbWVudC1nZW5lcmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMiLCJmaWxlIjoic3JjL2FwcC9mb3J0bmlnaHRTdGF0ZW1lbnQvaGFtYWxpLWZvcnRuaWdodFN0YXRlbWVudC9zcmQtbGFib3VyLXN0YXRlbWVudC1nZW5lcmF0aW9uL3NyZC1sYWJvdXItc3RhdGVtZW50LWdlbmVyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXJfYm90dG9tIHtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-statement-generation/srd-labour-statement-generation.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-statement-generation/srd-labour-statement-generation.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n</head>\n\n<body>\n\n\t<!-- Row -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\n\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t<h6 class=\"card-title text-white\">SRD Labour Statement Generation</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Statement Period</h6>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Period</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\" disabled>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Period</label> <input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"toDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"generateBtn\" disabled>Generate</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<h6 class=\"card-title border_bottom\">List of Loader Heads</h6>\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLabourStmtGeneration\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLabourStmtGeneration\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th><input type=\"checkbox\" class=\"editor-active\"></th>\n\t\t\t\t\t\t\t\t\t\t<th>Loader Head</th>\n\t\t\t\t\t\t\t\t\t\t<th>Current Stmt From Date.</th>\n\t\t\t\t\t\t\t\t\t\t<th>Current Stmt To Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Current Stmt Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Current Stmt No</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let labourStmtGenerationData of labourStmtGenerationDataList \">\n\t\t\t\t\t\t\t\t\t\t<td><input type=\"checkbox\"></td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtGenerationData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtGenerationData.name}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtGenerationData.grade }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtGenerationData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtGenerationData.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Row -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-statement-generation/srd-labour-statement-generation.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-statement-generation/srd-labour-statement-generation.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: SrdLabourStatementGenerationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrdLabourStatementGenerationComponent", function() { return SrdLabourStatementGenerationComponent; });
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

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends


var SrdLabourStatementGenerationComponent = /** @class */ (function () {
    function SrdLabourStatementGenerationComponent(labourStmtGenerationRpt) {
        this.labourStmtGenerationRpt = labourStmtGenerationRpt;
        //for datepicker ends
        this.loadingIndicator = true;
        this.dtTriggerLabourStmtGeneration = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SrdLabourStatementGenerationComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    SrdLabourStatementGenerationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsLabourStmtGeneration = {
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
        this.getDataFrmServiceFrTable = this.labourStmtGenerationRpt.getSummaryData();
        this.onDestroyUnsubscribtionLabourStmtGeneration = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.labourStmtGenerationDataList = data['data'];
            _this.dtTriggerLabourStmtGeneration.next();
        });
        //the below code is for the getting data through json ends
    };
    SrdLabourStatementGenerationComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLabourStmtGeneration.unsubscribe();
        this.onDestroyUnsubscribtionLabourStmtGeneration.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    SrdLabourStatementGenerationComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], SrdLabourStatementGenerationComponent.prototype, "dtElements", void 0);
    SrdLabourStatementGenerationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-srd-labour-statement-generation',
            template: __webpack_require__(/*! ./srd-labour-statement-generation.component.html */ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-statement-generation/srd-labour-statement-generation.component.html"),
            styles: [__webpack_require__(/*! ./srd-labour-statement-generation.component.css */ "./src/app/fortnightStatement/hamali-fortnightStatement/srd-labour-statement-generation/srd-labour-statement-generation.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], SrdLabourStatementGenerationComponent);
    return SrdLabourStatementGenerationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-fortnightStatement-hamali-fortnightStatement-hamali-fortnightStatement-module.js.map