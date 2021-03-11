(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-report-hamali-report-hamali-report-module"],{

/***/ "./src/app/report/hamali-report/broker-report/broker-report.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/report/hamali-report/broker-report/broker-report.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9oYW1hbGktcmVwb3J0L2Jyb2tlci1yZXBvcnQvYnJva2VyLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/report/hamali-report/broker-report/broker-report.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/report/hamali-report/broker-report/broker-report.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n\n    <div class=\"card \" style=\"border: 1px solid darkcyan!important;\">\n      <div class=\"card-header bg-info\" style=\"background-color: orange!important;padding:5px;\">\n        <h6 class=\"card-title text-white\">Broker Report</h6>\n      </div>\n      <div class=\"row system_responsive\" style=\"margin-bottom:10px;\">\n        <div class=\"col-md-3\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"source\">\n                          <label>Source</label>\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-box\"></i>\n                            </span>\n                          </div>\n                           <select class=\"custom-select col-12\">\n                            <option selected>Select.....</option>\n                            <option value=\"delhi\">Delhi</option>\n<option value=\"mumbai\">Mumbai</option>\n<option value=\"agra\">Agra</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"destination\">\n                          <label>Destination</label>\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\" fas fa-road\"></i>\n                            </span>\n                          </div>\n                           <select class=\"custom-select col-12\">\n                            <option selected>Select.....</option>\n                            <option value=\"bangalore\">Bangalore</option>\n<option value=\"chennai\">Chennai</option>\n<option value=\"kerela\">Kerela</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                    \n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr style=\"width:80%;border-top: none;margin:3px;\">\n          <div class=\"col-md-12\" style=\"text-align:center;\">\n            <button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"searchBtn\">Search</button>\n            <button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n          </div>\n        </div>\n        <div class=\"col-md-9 vl\">\n<div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"card-header bg-info\" style=\"background-color:orange!important;padding:5px;\">\n                        <h6 class=\"card-title text-white\">Group By HireslipDate</h6>\n                      </div>\n                <ngx-datatable #tables class='material striped' [columns]=\"groupByHireslipDateColumns\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"25\"\n                  [rowHeight]=\"'auto'\" [limit]=\"4\" [rows]='groupByHireslipDateRows'>\n                </ngx-datatable>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"card-header bg-info\" style=\"background-color:orange!important;padding:5px;\">\n                        <h6 class=\"card-title text-white\">Group By Destination</h6>\n                      </div>\n                <ngx-datatable #tables class='material striped' [columns]=\"groupByDestinationColumns\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"25\"\n                  [rowHeight]=\"'auto'\" [limit]=\"4\" [rows]='groupByDestinationRows'>\n                </ngx-datatable>\n\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <!-- Row -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/hamali-report/broker-report/broker-report.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/report/hamali-report/broker-report/broker-report.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BrokerReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerReportComponent", function() { return BrokerReportComponent; });
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

var BrokerReportComponent = /** @class */ (function () {
    function BrokerReportComponent() {
        var _this = this;
        this.loadingIndicator = true;
        this.groupByHireslipDateRows = [];
        this.groupByHireslipDateColumns = [{ name: 'Broker Name' }, { name: 'Destination' }, { name: 'Number Of Trucks' }, { name: 'Truck Hire Average' }];
        this.groupByDestinationRows = [];
        this.groupByDestinationColumns = [{ name: 'Broker Name' }, { name: 'Number Of Trucks' }, { name: 'Truck Hire Average' }];
        this.groupByHireslipDateRows = [{ brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', destination: 'abcd123', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' }
        ];
        this.groupByDestinationRows = [{ brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
            { brokerName: '5637627', numberOfTrucks: '14-06-2019', truckHireAverage: ' 1680' },
        ];
        setTimeout(function () {
            _this.loadingIndicator = false;
        }, 1500);
    }
    BrokerReportComponent.prototype.ngOnInit = function () {
    };
    BrokerReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-broker-report',
            template: __webpack_require__(/*! ./broker-report.component.html */ "./src/app/report/hamali-report/broker-report/broker-report.component.html"),
            styles: [__webpack_require__(/*! ./broker-report.component.css */ "./src/app/report/hamali-report/broker-report/broker-report.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrokerReportComponent);
    return BrokerReportComponent;
}());



/***/ }),

/***/ "./src/app/report/hamali-report/hamali-report.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/report/hamali-report/hamali-report.module.ts ***!
  \**************************************************************/
/*! exports provided: HamaliReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamaliReportModule", function() { return HamaliReportModule; });
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
/* harmony import */ var src_app_report_hamali_report_hamali_report_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/hamali-report/hamali-report.routing */ "./src/app/report/hamali-report/hamali-report.routing.ts");
/* harmony import */ var src_app_report_hamali_report_broker_report_broker_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/report/hamali-report/broker-report/broker-report.component */ "./src/app/report/hamali-report/broker-report/broker-report.component.ts");
/* harmony import */ var src_app_report_hamali_report_labour_statement_report_labour_statement_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/hamali-report/labour-statement-report/labour-statement-report.component */ "./src/app/report/hamali-report/labour-statement-report/labour-statement-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//for select option search starts




//for select option search ends



var HamaliReportModule = /** @class */ (function () {
    function HamaliReportModule() {
    }
    HamaliReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_hamali_report_hamali_report_routing__WEBPACK_IMPORTED_MODULE_10__["HamaliRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"]],
            declarations: [
                src_app_report_hamali_report_broker_report_broker_report_component__WEBPACK_IMPORTED_MODULE_11__["BrokerReportComponent"], src_app_report_hamali_report_labour_statement_report_labour_statement_report_component__WEBPACK_IMPORTED_MODULE_12__["LabourStatementReportComponent"]
            ]
        })
    ], HamaliReportModule);
    return HamaliReportModule;
}());



/***/ }),

/***/ "./src/app/report/hamali-report/hamali-report.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/report/hamali-report/hamali-report.routing.ts ***!
  \***************************************************************/
/*! exports provided: HamaliRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamaliRoutes", function() { return HamaliRoutes; });
/* harmony import */ var src_app_report_hamali_report_broker_report_broker_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/report/hamali-report/broker-report/broker-report.component */ "./src/app/report/hamali-report/broker-report/broker-report.component.ts");
/* harmony import */ var src_app_report_hamali_report_labour_statement_report_labour_statement_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/report/hamali-report/labour-statement-report/labour-statement-report.component */ "./src/app/report/hamali-report/labour-statement-report/labour-statement-report.component.ts");


var HamaliRoutes = [
    {
        path: '',
        children: [
            {
                path: 'brokerreport',
                component: src_app_report_hamali_report_broker_report_broker_report_component__WEBPACK_IMPORTED_MODULE_0__["BrokerReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'labourStatementReport',
                component: src_app_report_hamali_report_labour_statement_report_labour_statement_report_component__WEBPACK_IMPORTED_MODULE_1__["LabourStatementReportComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/report/hamali-report/labour-statement-report/labour-statement-report.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/report/hamali-report/labour-statement-report/labour-statement-report.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9oYW1hbGktcmVwb3J0L2xhYm91ci1zdGF0ZW1lbnQtcmVwb3J0L2xhYm91ci1zdGF0ZW1lbnQtcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/report/hamali-report/labour-statement-report/labour-statement-report.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/report/hamali-report/labour-statement-report/labour-statement-report.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Labour Statement Report</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"statementNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Statement Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"loaderHead\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loader Head</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Looder\" [formControl]=\"controlMain\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteLoaderHead\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteLoaderHead=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(loaderHeadOptions | filter: controlMain.value) as resultLoaderHead\">\n\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultLoaderHead\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultLoaderHead.length\">No\n\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"fromDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"fromDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fromDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"fromDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To Date</label> <input id=\"toDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"toDates\" ngbDatepicker #toDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"toDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<!--  <div class=\"col-sm-12 col-md-12\">\n                            <div class=\"form-group\">\n                              <div class=\"input-group\" id=\"toDate\">\n                                <label>To Date</label>\n                                <input ng-change=\"vm.dateString = (dateObj | date: 'dd/dd/yyyy')\" class=\"form-control\" (click)=\"d.toggle()\" placeholder=\"yyyy-mm-dd\"\n                                  name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n                                <div class=\"input-group-append\" (click)=\"d.toggle()\">\n                                  <span class=\"input-group-text\">\n                                    <i class=\"fa fa-calendar\"></i>\n                                  </span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>-->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-9 vl p-t-10\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t<div class='row p-t-10'>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Labour Hamali\n\t\t\t\t\t\t\t\t\t\tStatement Report</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t<button style=\"padding: 2px;\" type=\"submit\" class=\"btn m-r-10\"\n\t\t\t\t\t\t\t\t\t\tid=\"bankMasterRemoveBtn\">Payment</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLabourStmtReport\"\n\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLabourStmtReport\">\n\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Statement No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Stmt Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>From Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Period</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot LRs</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Art</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Act Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Chg Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tot Kanta Wt</th>\n\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t<th>Payable Amt</th>\n\t\t\t\t\t\t\t\t\t\t<th>D.O.P</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cash</th>\n\t\t\t\t\t\t\t\t\t\t<th>Cheque</th>\n\t\t\t\t\t\t\t\t\t\t<th>PDC</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let labourStmtReportData of LabourStmtReportReportDataList \">\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.stmtNo }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.stmtDate }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.fromPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.toPeriod }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.totalLrs }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.totalArticles }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.totalActualWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.totalChargeWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.totalKantaWgt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.payableAmt }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.dop }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.cash }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.cheque }}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{ labourStmtReportData.pdc }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/hamali-report/labour-statement-report/labour-statement-report.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/report/hamali-report/labour-statement-report/labour-statement-report.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: LabourStatementReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabourStatementReportComponent", function() { return LabourStatementReportComponent; });
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
//from the particular local folder starts
//import { LrDispatchBookingReportService } from './lr-dispatch-booking-report-service';
//from the particular local folder ends
//from the particular global folder starts

//from the particular global folder ends


//for the select option with filter starts

//for the select option with filter ends
var LabourStatementReportComponent = /** @class */ (function () {
    function LabourStatementReportComponent(labourStmtReport) {
        this.labourStmtReport = labourStmtReport;
        //for datepicker ends
        this.loadingIndicator = true;
        this.controlMain = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.loaderHeadOptions = [
            { id: 1, label: 'ALL' },
            { id: 2, label: 'Group 1' },
            { id: 3, label: 'Group 2' },
            { id: 4, label: 'Mumbai Choudhary' }
        ];
        this.dtTriggerLabourStmtReport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LabourStatementReportComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    LabourStatementReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsLabourStmtReport = {
            //};
            //columns is used to for export and others starts
            //columns is used to for export and others endss
            // the below code is for button export starts
            dom: 'Bfrtip',
            /*buttons: [
                      'excel', 'print'
                  ],*/
            buttons: [
            //            {
            //                extend: 'excel',
            //                text: '<i class="fas fa-file-excel"> Excel</i>',
            //                titleAttr: 'Excel',
            //                exportOptions: {
            //                    columns: ':visible'
            //                }
            //            },
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
        this.getDataFrmServiceFrTable = this.labourStmtReport.getSupplierMasterData();
        this.onDestroyUnsubscribtionLabourStmtReport = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.labourStmtReportDataList = data['data'];
            _this.dtTriggerLabourStmtReport.next();
        });
    };
    LabourStatementReportComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLabourStmtReport.unsubscribe();
        this.onDestroyUnsubscribtionLabourStmtReport.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    LabourStatementReportComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], LabourStatementReportComponent.prototype, "dtElements", void 0);
    LabourStatementReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-labour-statement-report.component',
            template: __webpack_require__(/*! ./labour-statement-report.component.html */ "./src/app/report/hamali-report/labour-statement-report/labour-statement-report.component.html"),
            styles: [__webpack_require__(/*! ./labour-statement-report.component.css */ "./src/app/report/hamali-report/labour-statement-report/labour-statement-report.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], LabourStatementReportComponent);
    return LabourStatementReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-report-hamali-report-hamali-report-module.js.map