(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-stock-stock-module"],{

/***/ "./src/app/stock/stock.module.ts":
/*!***************************************!*\
  !*** ./src/app/stock/stock.module.ts ***!
  \***************************************/
/*! exports provided: StockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockModule", function() { return StockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_stock_stock_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/stock/stock.routing */ "./src/app/stock/stock.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StockModule = /** @class */ (function () {
    function StockModule() {
    }
    StockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_stock_stock_routing__WEBPACK_IMPORTED_MODULE_4__["StockRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: []
        })
    ], StockModule);
    return StockModule;
}());



/***/ }),

/***/ "./src/app/stock/stock.routing.ts":
/*!****************************************!*\
  !*** ./src/app/stock/stock.routing.ts ***!
  \****************************************/
/*! exports provided: StockRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockRoutes", function() { return StockRoutes; });
var StockRoutes = [
    {
        path: '',
        children: [
            { path: 'customization', loadChildren: 'src/app/stock/customization/customization.module#CustomizationModule' },
            { path: 'driver', loadChildren: 'src/app/stock/driver/driver.module#DriverModule' },
            { path: 'payment', loadChildren: 'src/app/stock/payment/payment.module#PaymentModule' },
            { path: 'transfer', loadChildren: 'src/app/stock/transfer/transfer.module#TransferModule' }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=src-app-stock-stock-module.js.map