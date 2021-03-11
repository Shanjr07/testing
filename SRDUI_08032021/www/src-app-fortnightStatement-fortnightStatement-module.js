(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-fortnightStatement-fortnightStatement-module"],{

/***/ "./src/app/fortnightStatement/fortnightStatement.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/fortnightStatement/fortnightStatement.module.ts ***!
  \*****************************************************************/
/*! exports provided: FortnightStatementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FortnightStatementModule", function() { return FortnightStatementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_fortnightStatement_fortnightStatement_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/fortnightStatement/fortnightStatement.routing */ "./src/app/fortnightStatement/fortnightStatement.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FortnightStatementModule = /** @class */ (function () {
    function FortnightStatementModule() {
    }
    FortnightStatementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_fortnightStatement_fortnightStatement_routing__WEBPACK_IMPORTED_MODULE_4__["FortnightStatementRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: []
        })
    ], FortnightStatementModule);
    return FortnightStatementModule;
}());



/***/ }),

/***/ "./src/app/fortnightStatement/fortnightStatement.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/fortnightStatement/fortnightStatement.routing.ts ***!
  \******************************************************************/
/*! exports provided: FortnightStatementRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FortnightStatementRoutes", function() { return FortnightStatementRoutes; });
var FortnightStatementRoutes = [
    {
        path: '',
        children: [
            { path: 'agent', loadChildren: 'src/app/fortnightStatement/agent/agent.module#AgentModule' },
            { path: 'booking', loadChildren: 'src/app/fortnightStatement/booking/booking.module#BookingModule' },
            { path: 'hamali-fortnightStatement', loadChildren: 'src/app/fortnightStatement/hamali-fortnightStatement/hamali-fortnightStatement.module#HamaliFortnightStatementModule' },
            { path: 'others', loadChildren: 'src/app/fortnightStatement/others/others.module#OthersModule' }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=src-app-fortnightStatement-fortnightStatement-module.js.map