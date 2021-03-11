(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-master-masters-module"],{

/***/ "./src/app/master/masters.module.ts":
/*!******************************************!*\
  !*** ./src/app/master/masters.module.ts ***!
  \******************************************/
/*! exports provided: MasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterModule", function() { return MasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_master_masters_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/master/masters.routing */ "./src/app/master/masters.routing.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_master_masters_routing__WEBPACK_IMPORTED_MODULE_4__["MasterRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
            declarations: []
        })
    ], MasterModule);
    return MasterModule;
}());



/***/ }),

/***/ "./src/app/master/masters.routing.ts":
/*!*******************************************!*\
  !*** ./src/app/master/masters.routing.ts ***!
  \*******************************************/
/*! exports provided: MasterRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterRoutes", function() { return MasterRoutes; });
var MasterRoutes = [
    {
        path: '',
        children: [
            { path: 'consignee', loadChildren: 'src/app/master/consignee/consignee.module#ConsigneeModule' },
            { path: 'consignor', loadChildren: 'src/app/master/consignor/consignor.module#ConsignorModule' },
            { path: 'supplier', loadChildren: 'src/app/master/supplier/supplier.module#SupplierModule' },
            { path: 'transhipment', loadChildren: 'src/app/master/transhipment/transhipment.module#TranshipmentModule' },
            { path: 'commodity', loadChildren: 'src/app/master/commodity/commodity.module#CommodityModule' },
            { path: 'company', loadChildren: 'src/app/master/company/company.module#CompanyModule' },
            { path: 'fixing', loadChildren: 'src/app/master/fixing/fixing.module#FixingModule' },
            { path: 'trip', loadChildren: 'src/app/master/trip/trip.module#TripModule' },
            { path: 'details', loadChildren: 'src/app/master/details/details.module#DetailsModule' },
            { path: 'communication', loadChildren: 'src/app/master/communication/communication.module#CommunicationModule' }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=src-app-master-masters-module.js.map