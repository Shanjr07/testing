(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-report-report-module"],{

/***/ "./src/app/report/report.module.ts":
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_report_report_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/report/report.routing */ "./src/app/report/report.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_report_report_routing__WEBPACK_IMPORTED_MODULE_4__["ReportRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: []
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/report/report.routing.ts":
/*!******************************************!*\
  !*** ./src/app/report/report.routing.ts ***!
  \******************************************/
/*! exports provided: ReportRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutes", function() { return ReportRoutes; });
var ReportRoutes = [
    {
        path: '',
        children: [
            { path: 'agents', loadChildren: 'src/app/report/agents/agents.module#AgentsModule' },
            { path: 'bookings', loadChildren: 'src/app/report/bookings/bookings.module#BookingsModule' },
            { path: 'hamali-report', loadChildren: 'src/app/report/hamali-report/hamali-report.module#HamaliReportModule' },
            { path: 'cashmemo-report', loadChildren: 'src/app/report/cashmemo-report/cashmemo-report.module#CashmemoReportModule' },
            { path: 'daily-report', loadChildren: 'src/app/report/daily-report/daily-report.module#DailyReportModule' },
            { path: 'debit', loadChildren: 'src/app/report/debit/debit.module#DebitModule' },
            { path: 'lr-report', loadChildren: 'src/app/report/lr-report/lr-report.module#LrReportModule' },
            { path: 'others-report', loadChildren: 'src/app/report/others-report/others-report.module#OthersReportModule' },
            { path: 'stocks-report', loadChildren: 'src/app/report/stocks-report/stocks-report.module#StocksReportModule' },
            { path: 'truck-report', loadChildren: 'src/app/report/truck-report/truck-report.module#TruckReportModule' },
            { path: 'party-report', loadChildren: 'src/app/report/party-report/party-report.module#PartyReportModule' },
            { path: 'hireslip-and-invoice-report', loadChildren: 'src/app/report/hireslip-and-invoice-report/hireslip-and-invoice-report.module#HireslipAndInvoiceModule' },
            { path: 'statement-reports', loadChildren: 'src/app/report/statement-reports/statement-reports.module#StatementReportsModule' },
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=src-app-report-report-module.js.map