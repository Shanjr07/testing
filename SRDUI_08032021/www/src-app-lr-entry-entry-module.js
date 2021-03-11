(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-lr-entry-entry-module"],{

/***/ "./node_modules/rxjs/internal/operators/filter.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/filter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./src/app/dto/HireSlip-dto.ts":
/*!*************************************!*\
  !*** ./src/app/dto/HireSlip-dto.ts ***!
  \*************************************/
/*! exports provided: HireSlipDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireSlipDto", function() { return HireSlipDto; });
var HireSlipDto = /** @class */ (function () {
    function HireSlipDto() {
        this.hashMap = new Map();
    }
    return HireSlipDto;
}());



/***/ }),

/***/ "./src/app/lr/entry/entry.module.ts":
/*!******************************************!*\
  !*** ./src/app/lr/entry/entry.module.ts ***!
  \******************************************/
/*! exports provided: EntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryModule", function() { return EntryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_lr_entry_entry_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/lr/entry/entry.routing */ "./src/app/lr/entry/entry.routing.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lr_entry_form_lrentryform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lr-entry-form/lrentryform.component */ "./src/app/lr/entry/lr-entry-form/lrentryform.component.ts");
/* harmony import */ var _miss_agents_miss_agents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./miss-agents/miss-agents.component */ "./src/app/lr/entry/miss-agents/miss-agents.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/autocomplete/autocomplete.module */ "./src/app/autocomplete/autocomplete.module.ts");
/* harmony import */ var src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/report/daily-report/daily-report.module */ "./src/app/report/daily-report/daily-report.module.ts");
/* harmony import */ var src_app_lr_entry_lrentry_print_lrentry_print_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/lr/entry/lrentry-print/lrentry-print.component */ "./src/app/lr/entry/lrentry-print/lrentry-print.component.ts");
/* harmony import */ var src_app_cashmemo_generation_generation_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/cashmemo/generation/generation.module */ "./src/app/cashmemo/generation/generation.module.ts");
/* harmony import */ var src_app_lr_entry_lrentryform_print2_lrentryform_print2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/lr/entry/lrentryform-print2/lrentryform-print2.component */ "./src/app/lr/entry/lrentryform-print2/lrentryform-print2.component.ts");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//for select option search starts





//import { CashmemoBkgPrintAutoGSTComponent } from './cashmemo-bkg-print-autogst/cashmemo-bkg-print-autogst.component';
//import { BookingCashmemoComponent } from 'src/app/cashmemo/generation/booking-cashmemo/booking-cashmemo.component';




var EntryModule = /** @class */ (function () {
    function EntryModule() {
    }
    EntryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_lr_entry_entry_routing__WEBPACK_IMPORTED_MODULE_5__["EntryRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_11__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_12__["DailyReportModule"], ngx_barcode__WEBPACK_IMPORTED_MODULE_16__["NgxBarcodeModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"], src_app_cashmemo_generation_generation_module__WEBPACK_IMPORTED_MODULE_14__["GenerationModule"]],
            declarations: [
                _lr_entry_form_lrentryform_component__WEBPACK_IMPORTED_MODULE_7__["LrEntryFormComponent"],
                _miss_agents_miss_agents_component__WEBPACK_IMPORTED_MODULE_8__["MissAgentsComponent"],
                src_app_lr_entry_lrentry_print_lrentry_print_component__WEBPACK_IMPORTED_MODULE_13__["LrEntryPrintComponent"],
                src_app_lr_entry_lrentryform_print2_lrentryform_print2_component__WEBPACK_IMPORTED_MODULE_15__["LrEntryFormPrint2Component"]
            ]
        })
    ], EntryModule);
    return EntryModule;
}());



/***/ }),

/***/ "./src/app/lr/entry/entry.routing.ts":
/*!*******************************************!*\
  !*** ./src/app/lr/entry/entry.routing.ts ***!
  \*******************************************/
/*! exports provided: EntryRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryRoutes", function() { return EntryRoutes; });
/* harmony import */ var src_app_lr_entry_lr_entry_form_lrentryform_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lr/entry/lr-entry-form/lrentryform.component */ "./src/app/lr/entry/lr-entry-form/lrentryform.component.ts");
/* harmony import */ var src_app_lr_entry_miss_agents_miss_agents_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lr/entry/miss-agents/miss-agents.component */ "./src/app/lr/entry/miss-agents/miss-agents.component.ts");
/* harmony import */ var src_app_lr_entry_lrentry_print_lrentry_print_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lr/entry/lrentry-print/lrentry-print.component */ "./src/app/lr/entry/lrentry-print/lrentry-print.component.ts");
/* harmony import */ var src_app_lr_entry_cashmemo_bkg_print_autogst_cashmemo_bkg_print_autogst_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lr/entry/cashmemo-bkg-print-autogst/cashmemo-bkg-print-autogst.component */ "./src/app/lr/entry/cashmemo-bkg-print-autogst/cashmemo-bkg-print-autogst.component.ts");
/* harmony import */ var src_app_lr_entry_lrentryform_print2_lrentryform_print2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/lr/entry/lrentryform-print2/lrentryform-print2.component */ "./src/app/lr/entry/lrentryform-print2/lrentryform-print2.component.ts");





var EntryRoutes = [
    {
        path: '',
        children: [
            {
                path: 'lrentry',
                component: src_app_lr_entry_lr_entry_form_lrentryform_component__WEBPACK_IMPORTED_MODULE_0__["LrEntryFormComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'missAgent',
                component: src_app_lr_entry_miss_agents_miss_agents_component__WEBPACK_IMPORTED_MODULE_1__["MissAgentsComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'lrEntryPrint',
                component: src_app_lr_entry_lrentry_print_lrentry_print_component__WEBPACK_IMPORTED_MODULE_2__["LrEntryPrintComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'lrEntryFormPrint2',
                component: src_app_lr_entry_lrentryform_print2_lrentryform_print2_component__WEBPACK_IMPORTED_MODULE_4__["LrEntryFormPrint2Component"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
            {
                path: 'cashmemoBkgPrintAutoGSTComponent',
                component: src_app_lr_entry_cashmemo_bkg_print_autogst_cashmemo_bkg_print_autogst_component__WEBPACK_IMPORTED_MODULE_3__["CashmemoBkgPrintAutoGSTComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/lr/entry/lr-entry-form/lrentryform.component.css":
/*!******************************************************************!*\
  !*** ./src/app/lr/entry/lr-entry-form/lrentryform.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below css is done for the verticle form starts here*/\nhr {\n\tmargin-bottom: 0px;\n\tmargin-top: 0pX;\n}\n/* the below css is done for the verticle form ends here */\n/* \n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: #0275d8;\n  color: white;\n}\n\n.faded {\n  opacity: 0.5;\n} */\n.dark-modal .modal-content {\n\tbackground-color: #009efb;\n\tcolor: white;\n}\n.dark-modal .close {\n\tcolor: white;\n}\n.light-blue-backdrop {\n\tbackground-color: #5cb3fd;\n}\n::ng-deep ngb-typeahead-window {\n  top:26px;\n    left:25px;\n\tmax-height: 150px;\n    overflow-y: auto;\n    position: absolute;\n}\n@media print {\n\tbody, html * {\n\t\tvisibility: hidden;\n\t}\n\t#printLrEntryForm, #printLrEntryForm * {\n\t\tvisibility: visible;\n\t}\n\t#printLrEntryForm {\n\t\tposition: -webkit-sticky;\n\t\tposition: sticky;\n\t\tleft: 0;\n\t\ttop: 0;\n\t}\n\t::ng-deep #firstPrint {\n\t\tpage-break-after: always;\n\t\tpage-break-inside: avoid;\n\t\tpage-break-before: avoid;\n\t}\n\t::ng-deep #secondPrint {\n\t\tpage-break-before: always;\n\t\tpage-break-inside: avoid;\n\t}\n\t::ng-deep #thirdPrint {\n\t\tpage-break-before: always;\n\t\tpage-break-inside: avoid;\n\t\t/* \t\tpage-break-after:auto; */\n\t}\n\t#bkgMemoPrintId, #bkgMemoPrintId * {\n\t\tvisibility: hidden;\n\t}\n\t#bkgMemoPrintId {\n\t\tposition: -webkit-sticky;\n\t\tposition: sticky;\n\t\tleft: 0;\n\t\ttop: 0;\n\t}\n\n\t/* \t.page-break { */\n\t/* \t\tdisplay: block; */\n\t/* \t\tpage-break-before: always; */\n\t/* \t} */\n}\n/* .pageBreak { */\n/* \tpage-break-after: always; */\n/* } */\n/* the below code we add to view the option in popup modal starts  */\n::ng-deep .cdk-overlay-container {\n\t/* Do you changes here */\n\tposition: fixed;\n\tz-index: 9999;\n}\n::ng-deep .cdk-overlay-pane {\n\tz-index: 9999;\n}\n::ng-deep .myCustomModalClass\t.modal-dialog {\n\tmax-width: 90%;\n}\n/* the below code we add to view the option in popup modal ends */\n@media print {\n\tbody * {\n\t\tvisibility: hidden;\n\t}\n\t#sidebarnav {\n\t\tvisibility: hidden;\n\t}\n\t#section_to_print, #section_to_print * {\n\t\tvisibility: visible;\n\t}\n\t#modal-basic-title {\n\t\tvisibility: hidden;\n\t}\n\t#closePopupBtn {\n\t\tvisibility: hidden;\n\t}\n}\n/* ::ng-deep #scrollable-dropdown-menu { */\n/*    max-height: 150px; */\n/*    overflow-y: auto; */\n/*  } */\n.swal-button--danger:not([disabled]):hover {\n\tcolor: #555;\n    background-color: #efefef;\n}\n.swal-button--cancel {\n    background-color: #df4740;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHIvZW50cnkvbHItZW50cnktZm9ybS9scmVudHJ5Zm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RDtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEI7QUFFRCwyREFBMkQ7QUFFM0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFCSTtBQUNKO0NBQ0MsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYjtBQUVEO0NBQ0MsYUFBYTtDQUNiO0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUI7QUFDRDtFQUNFLFNBQVM7SUFDUCxVQUFVO0NBQ2Isa0JBQWtCO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0QjtBQUNEO0NBQ0M7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG9CQUFvQjtFQUNwQjtDQUNEO0VBQ0MseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsT0FBTztFQUNQO0NBQ0Q7RUFDQyx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QjtDQUNEO0VBQ0MsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QjtDQUNEO0VBQ0MsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUI7Q0FDRDtFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsT0FBTztFQUNQOztDQUVELG9CQUFvQjtDQUNwQix1QkFBdUI7Q0FDdkIsa0NBQWtDO0NBQ2xDLFFBQVE7Q0FDUjtBQUVELGtCQUFrQjtBQUNsQixnQ0FBZ0M7QUFDaEMsT0FBTztBQUVQLHFFQUFxRTtBQUNyRTtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkO0FBRUQ7Q0FDQyxjQUFjO0NBQ2Q7QUFFRDtDQUNDLGVBQWU7Q0FDZjtBQUNELGtFQUFrRTtBQUNsRTtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG9CQUFvQjtFQUNwQjtDQUNEO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtBQUVELDJDQUEyQztBQUMzQywyQkFBMkI7QUFDM0IsMEJBQTBCO0FBQzFCLFFBQVE7QUFDUjtDQUNDLFlBQVk7SUFDVCwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL2xyL2VudHJ5L2xyLWVudHJ5LWZvcm0vbHJlbnRyeWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRoZSBiZWxvdyBjc3MgaXMgZG9uZSBmb3IgdGhlIHZlcnRpY2xlIGZvcm0gc3RhcnRzIGhlcmUqL1xuaHIge1xuXHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdG1hcmdpbi10b3A6IDBwWDtcbn1cblxuLyogdGhlIGJlbG93IGNzcyBpcyBkb25lIGZvciB0aGUgdmVydGljbGUgZm9ybSBlbmRzIGhlcmUgKi9cblxuLyogXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjc1ZDg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhZGVkIHtcbiAgb3BhY2l0eTogMC41O1xufSAqL1xuLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5kYXJrLW1vZGFsIC5jbG9zZSB7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpZ2h0LWJsdWUtYmFja2Ryb3Age1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiM2ZkO1xufVxuOjpuZy1kZWVwIG5nYi10eXBlYWhlYWQtd2luZG93IHtcbiAgdG9wOjI2cHg7XG4gICAgbGVmdDoyNXB4O1xuXHRtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbkBtZWRpYSBwcmludCB7XG5cdGJvZHksIGh0bWwgKiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCNwcmludExyRW50cnlGb3JtLCAjcHJpbnRMckVudHJ5Rm9ybSAqIHtcblx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHR9XG5cdCNwcmludExyRW50cnlGb3JtIHtcblx0XHRwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG5cdFx0cG9zaXRpb246IHN0aWNreTtcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0fVxuXHQ6Om5nLWRlZXAgI2ZpcnN0UHJpbnQge1xuXHRcdHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cztcblx0XHRwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG5cdFx0cGFnZS1icmVhay1iZWZvcmU6IGF2b2lkO1xuXHR9XG5cdDo6bmctZGVlcCAjc2Vjb25kUHJpbnQge1xuXHRcdHBhZ2UtYnJlYWstYmVmb3JlOiBhbHdheXM7XG5cdFx0cGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuXHR9XG5cdDo6bmctZGVlcCAjdGhpcmRQcmludCB7XG5cdFx0cGFnZS1icmVhay1iZWZvcmU6IGFsd2F5cztcblx0XHRwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG5cdFx0LyogXHRcdHBhZ2UtYnJlYWstYWZ0ZXI6YXV0bzsgKi9cblx0fVxuXHQjYmtnTWVtb1ByaW50SWQsICNia2dNZW1vUHJpbnRJZCAqIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I2JrZ01lbW9QcmludElkIHtcblx0XHRwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG5cdFx0cG9zaXRpb246IHN0aWNreTtcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0fVxuXG5cdC8qIFx0LnBhZ2UtYnJlYWsgeyAqL1xuXHQvKiBcdFx0ZGlzcGxheTogYmxvY2s7ICovXG5cdC8qIFx0XHRwYWdlLWJyZWFrLWJlZm9yZTogYWx3YXlzOyAqL1xuXHQvKiBcdH0gKi9cbn1cblxuLyogLnBhZ2VCcmVhayB7ICovXG4vKiBcdHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5czsgKi9cbi8qIH0gKi9cblxuLyogdGhlIGJlbG93IGNvZGUgd2UgYWRkIHRvIHZpZXcgdGhlIG9wdGlvbiBpbiBwb3B1cCBtb2RhbCBzdGFydHMgICovXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG5cdC8qIERvIHlvdSBjaGFuZ2VzIGhlcmUgKi9cblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiA5OTk5O1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xuXHR6LWluZGV4OiA5OTk5O1xufVxuXG46Om5nLWRlZXAgLm15Q3VzdG9tTW9kYWxDbGFzc1x0Lm1vZGFsLWRpYWxvZyB7XG5cdG1heC13aWR0aDogOTAlO1xufVxuLyogdGhlIGJlbG93IGNvZGUgd2UgYWRkIHRvIHZpZXcgdGhlIG9wdGlvbiBpbiBwb3B1cCBtb2RhbCBlbmRzICovXG5AbWVkaWEgcHJpbnQge1xuXHRib2R5ICoge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0fVxuXHQjc2lkZWJhcm5hdiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCNzZWN0aW9uX3RvX3ByaW50LCAjc2VjdGlvbl90b19wcmludCAqIHtcblx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHR9XG5cdCNtb2RhbC1iYXNpYy10aXRsZSB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCNjbG9zZVBvcHVwQnRuIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cbn1cblxuLyogOjpuZy1kZWVwICNzY3JvbGxhYmxlLWRyb3Bkb3duLW1lbnUgeyAqL1xuLyogICAgbWF4LWhlaWdodDogMTUwcHg7ICovXG4vKiAgICBvdmVyZmxvdy15OiBhdXRvOyAqL1xuLyogIH0gKi9cbi5zd2FsLWJ1dHRvbi0tZGFuZ2VyOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7XG5cdGNvbG9yOiAjNTU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG59XG4uc3dhbC1idXR0b24tLWNhbmNlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmNDc0MDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/lr/entry/lr-entry-form/lrentryform.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/lr/entry/lr-entry-form/lrentryform.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n\n</head>\n\n<body>\n\t<!-- Row -->\n\t<div class=\"row\" *ngIf=\"isLoggedIn\">\n\t\t<div *ngIf=\"lrEntryForm\">\n\t\t\t<div class=\"col-lg-12\">\n\n\n\t\t\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t\t\t<h6 class=\"card-title text-white\">LR Entry Form</h6>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\" style=\"margin-bottom: 10px;\">\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 \">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 \">\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Tempo Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewAutoLr\" class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"automatedLR\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForAutoLr($event)\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \" for=\"automatedLR\">Auto\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLR</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"automatedLR\" [(ngModel)]=\"viewByAutoLr\" (change)=\"toggleEditableForAutoLr($event)\"> <label -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull \" for=\"automatedLR\">Auto -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLR</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewAutoLrHold\" class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"automatedLRHold\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForAutoLrHold($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"automatedLRHold\">Auto LR Hold</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>User Godown</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #userGodown id=\"userGodown\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" [(ngModel)]=\"defaultGodownName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"userGodownSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusUserGodownTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"viewGodwn($event);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceUserGodown)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceUserGodown=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showLoader\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Choudhary Name</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #loaderHead id=\"loaderHead\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Select Choudhary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"loaderHeadSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusLoaderHeadTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceLoaderHead)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"loaderHeadFocus($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceLoaderHead=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\" *ngIf=\"!viewByAutoLr\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12\">\n                            <div class=\"form-group\">\n                              <div class=\"input-group\" id=\"arrivalDate\">\n                                <label>Arrival Date</label>\n                                <input ng-change=\"vm.dateString = (dateObj | date: 'dd/dd/yyyy')\" class=\"form-control\" (click)=\"e.toggle()\" placeholder=\"yyyy-mm-dd\"\n                                  name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #e=\"ngbDatepicker\">\n                                <div class=\"input-group-append\" (click)=\"e.toggle()\">\n                                  <span class=\"input-group-text\">\n                                    <i class=\"fa fa-calendar\"></i>\n                                  </span>\n                                </div>\n                              </div>\n                            </div>\n                          </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Popup Details</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Profile\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tupdate</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Date of birth</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"dateOfBirth\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#dp=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"dp.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxToBeBilled1\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxToBeBilled1\">To Be Billed</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"clerkName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Clerk Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"c('Save click')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor: pointer; color: blue; font-weight: bolder;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open2(content)\">Click Here</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"arrivalDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"arrivalDate\" (keyup)=\"arrivalDateFocus($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker placeholder=\"dd-mm-yyyy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#arrivalDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"arrivalDates.toggle();focusCalendar();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"arrivalDates.toggle();focusCalendar();\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Arrival Date</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"arrivalDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\" style='cursor:pointer;tabindex=0;'></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"arrivalDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"arrivalDate\" [(ngModel)]=\"tdyArrivalDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"arrivalDateFocus($event)\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"dd-mm-yyyy\" #arrivalDate=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(ngModelChange)=\"focusArrivalCalendar()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keydown.arrowdown)=\"arrivalDate.toggle();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"arrivalDate.toggle();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"date\" id=\"arrivalDate\" name=\"arrivalDate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"dd-mm-yyyy\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"arrivalDateFocus($event)\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"arrivalDate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"arrivalDate\" [(ngModel)]=\"tdyArrivalDate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #arrivalDates=\"ngbDatepicker\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-secondary calendar\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"arrivalDates.toggle()\" type=\"button\"></button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Local Challan No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"icon-speech\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #challanNo id=\"challanNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"checkChallanNo($event)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Local Challan Total Lrs</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"icon-speech\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #challanTotLrs id=\"challanTotLrs\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, localChallanKanta)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Local Challan Kanta Wgt</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"icon-speech\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #localChallanKanta id=\"localChallanKanta\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, agentName)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"settlementDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Settlement Date</label> <input #date\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdateFormat=\"dd-MMM-yyyy\" name=\"settlementDates\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #settlementDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"settlementDates.open()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, agentName)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"settlementDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--(keyup.enter)=\"focusVehicleNumber($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select #agentName (click)=\"agentNames()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected>Agra</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Bawana</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Daman</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Karnal</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t-->\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete starts-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #agentName -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlAgentName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteAgentName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keydown)=\"onKeydown($event)\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteAgentName=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(agentDetailsOptionsGet | filterAgentSorce: controlAgentName.value) as agentDetailsOptionsGet\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option (click)=\"agentNames()\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of agentDetailsOptionsGet\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.subStation\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\toption.subStation }} </app-option> <app-option class=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!agentDetailsOptionsGet.length\">No result</app-option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #agentName id=\"agentName\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" [(ngModel)]=\"challanAgentName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"agentNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusAgentNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceAgentName)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getAgentName($event,content2)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceAgentName=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\tthe first autocomplete ends -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Number</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-truck\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #vehicleNumber id=\"vehicleNumber\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, companyName)\" type=\"text\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Vehicle Number</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #vehicleNumber id=\"vehicleNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"vehicleNumber\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"vehicleNumberFocusEvent($event,content12)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"vehicleNumberSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusVehicleNumberTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceVehicleNumber)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceVehicleNumber=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content12 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Tempo\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Number*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #truckNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, ownerName)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"truckNumber\" name=\"truckNumber\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"checkTempoNumber($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#numberTender=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.truckNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tminlength=\"9\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{9,}$\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired /> <small\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[hidden]=\"numberTender.valid\" class=\"errorLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Enter the alphanumeric value. </small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Owner Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #ownerName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event,panNumber)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" id=\"ownerName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"ownerName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.ownerName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>PAN(Enter PAN as AAAAA9999A, if\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tyou don't have PAN)</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #panNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, truckCapacityInTones)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" id=\"panNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"panNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.panNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Capacity (In Tones)*</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #truckCapacityInTones\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, newAgentTempoSaveBtn)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"truckCapacityInTones\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"truckCapacityInTones\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"truckDataDto.truckCapcityDouble\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"closePopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click');setTempoNext();\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearPopupBtn\" (click)=\"clearAllAgentTempo()\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button #newAgentTempoSaveBtn\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"newAgentTempoSaveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateAgentTempoDetails()\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Company Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #companyName id=\"companyName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, address)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #address (keyup)=\"fieldFocus($event, city)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #city (keyup)=\"fieldFocus($event, pincode)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pincode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #pincode\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, contactNumber)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #contactNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, driverName)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #driverName id=\"driverName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, destination)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #e=\"ngbDatepicker\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary no-shadow\" (click)=\"d.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </div>\n              </div> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Consigment Details</h6>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #destination id=\"destination\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"destnationSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusDestnationTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceDestnation)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"viewMainCommodity($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceDestnation=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByAutoLr\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" id=\"validateBookingDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForBookingDate($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"validateBookingDate\">Validate Booking Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByAutoLr\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Auto LR Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #autoLrNumber type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"autoLrNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"!viewByAutoLr\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>LR Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input *ngIf=\"showLrCode\" #lrCode type=\"text\" id=\"lrCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"showLrCodeInputFields\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"isReadOnly\"> <input #lrNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" id=\"lrNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"checkLrNo($event,lrNumber.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Booking Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"dd-mm-yyyy\" dateFormat=\"dd-MMM-yyyy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"bookingDate\" name=\"bookingDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#bookingDate=\"ngbDatepicker\" (click)=\"bookingDate.open()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocusBkgDate($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"bookingDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Booking Date</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"bookingDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"bookingDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"bookingDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"tdyBookingDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#bookingDates=\"ngbDatepicker\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"bookingDates.toggle()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keydown.arrowdown)=\"bookingDates.toggle();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(ngModelChange)=\"focusBookingCalendar()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocusBkgDate($event)\">\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"date\" id=\"bookingDate\" name=\"bookingDate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"dd-mm-yyyy\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocusBkgDate($event)\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"bookingDate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"bookingDate\" [(ngModel)]=\"tdyBookingDate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #bookingDates=\"ngbDatepicker\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-secondary calendar\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"bookingDates.toggle()\" type=\"button\"></button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>No.Of Articles</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #noOfArticles id=\"noOfArticles\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocusArticles($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>No.Of Articles</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-clone\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #noOfArticles id=\"noOfArticles\" name=\"noOfArticles\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, packNature)\" type=\"number\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pack Nature</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck-loading\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #packNature id=\"packNature\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Pack Nature\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlPackNature\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompletePackNature\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocusPackNature($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompletePackNature=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(packNatureOptions | filterPackName: controlPackNature.value) as resultPackNature\">\n\t\t\t\t\t\t\t\t\t\t\t\t<app-option (click)=\"packNatures()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultPackNature\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.packNature\"> {{\n\t\t\t\t\t\t\t\t\t\t\t\toption.packNature }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultPackNature.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pack Nature</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #packNature id=\"packNature\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"packNatureSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusPackNatureTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instancePackNature)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocusPackNature($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instancePackNature=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- *ngIf=\"showMultiPackNature\"-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<label>MultiPack</label>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content8 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Multiple\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPackNature Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">PackNature</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">Articles</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Pack Nature\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"multiPackNatureNew\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlPackNatureNew\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#multiPackNatureNew\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompletePackNatureNew\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--the below is commentted later need to add in after '[appAutocomplete]=\"autocompletePackNatureNew\"'-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--(keyup)=\"fieldFocusPackNatureNew($event)\"-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompletePackNatureNew=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(packNatureNewOptions | filterPackName:controlPackNatureNew.value) as resultPackNatureNew\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultPackNatureNew\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"packNaturesNew()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.packNature\"> {{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toption.packNature }} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultPackNatureNew.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"multiPackNatureArtilces\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"multiPackNatureArtilces\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#multiPackNatureArtilces\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, addBtn)\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\" style='display: none'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"hiddenIndexPackNature\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" type='button'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"addInTablePackNature()\" #addBtn\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-icon-only yellow\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addInTablePackNature();\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"timeTable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsMultiPackTable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerMultiPackTable\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>PackNature</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Artilces</th>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let multiplePackNatureTableData of multiPackNatureTableDataList let j = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmultiplePackNatureTableData.multiplePackNatureNew\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmultiplePackNatureTableData.multiplePackNatureArt\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableEditBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedEditPackNature(multiplePackNatureTableData,j);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Edit\" class=\"fas fa-pencil-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDeletePackNature(multiplePackNatureTableData,j)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"saveMultiPackNatureBtn\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"onCancelClickPack();d('Cross click')\">Save</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"onCancelClickPack()\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"closeMultiPackNatureBtn\">close</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"saveMultiPackNatureBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click');multiPackNatureFocus()\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click');multiPackNatureFocus()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"closeMultiPackNatureBtn\">close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<a style=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open8(content8)\"><u> View Details</u></a>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Commodity Desc.</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clipboard-list\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #commodityDescription -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Commodity Desc\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlCommodityDescription\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteCommodityDescription\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, partyGoodsType)\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteCommodityDescription=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(commodityDescriptionOptions | filterCommodityName: controlCommodityDescription.value) as resultCommodityDescription\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<app-option -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultCommodityDescription\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.commodityName\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\toption.commodityName }} </app-option> <app-option class=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultCommodityDescription.length\">No -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Party Goods Type</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box-open\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #partyGoodsType -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Party Goods Type\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlPartyGoodsType\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompletePartyGoodsType\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t#autocompletePartyGoodsType=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(partyGoodsTypeOptions | filter: controlPartyGoodsType.value) as resultPartyGoodsType\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<app-option (click)=\"partyGoodsTypes()\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultPartyGoodsType\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultPartyGoodsType.length\">No -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Sub Commodity</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-file-alt\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #subCommodity -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, actualWeight)\" type=\"text\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Consignor Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wt80\">GST No</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consignorGSTNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter Consignor GST Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getConsignorGstNumber($event)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"consignorGSTNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Name</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user-circle\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consignorName id=\"consignorName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignor\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlConsignor\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConsignor\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"consignorNameFocus($event)\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteConsignor=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(consignorOptionsRet | filterConsignorName: controlConsignor.value) as resultConsignor\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultConsignor\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedConsignor(option,content9)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.consignorName\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\toption.consignorName }} </app-option> <app-option class=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultConsignor.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consignorName id=\"consignorName\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsignor($event,content9)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsignorName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consignorSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsignorTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsignorName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsignorName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceConsignorName)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceConsignorName=\"ngbTypeahead\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wt80\">Address</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"consignorAddress\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter Address\" rows=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"setConsignorAddress\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"lblNewConsignor\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>New Consignor</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content9 id=\"content9\" let-c=\"close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlet-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Consignor\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Add New Consignor</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"newConsignor\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, gstNoConsignor)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>GST Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #gstNoConsignor type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"gstNoConsignor\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, newConsignorAddress)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #newConsignorAddress type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"newConsignorAddress\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, consignorState)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>State</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consignorState\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consignorState\" placeholder=\"Select State\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#consignorState\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlConsignorState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConsignorState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, consignorMobileNumber)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteConsignorState=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(consignorStateOptions | filterState: controlConsignorState.value) as resultConsignorState\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultConsignorState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"stateSelectedConsignor(option)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.state\"> {{ option.state\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultConsignorState.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Mobile Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consignorMobileNumber type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consignorMobileNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consignorMobileNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, consignorOfficeNumber)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Office Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consignorOfficeNumber type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consignorOfficeNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, newConsignorSaveBtn)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\" id=\"closePopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\" id=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"ValidateClearNewConsignorDetails()\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div #newConsignorSaveBtn class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"newConsignorSaveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateNewConsignor()\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"cursor: pointer; color: blue;\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open9(content9);setValueForConsignor();\"><u> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd Consignor</u></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>New Consignor</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content9 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Consignor\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Add New Consignor</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"newConsignor\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, gstNoConsignor)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>GST Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #gstNoConsignor type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"gstNoConsignor\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, newConsignorAddress)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #newConsignorAddress type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"newConsignorAddress\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, consignorState)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>State</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consignorState\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consignorState\" placeholder=\"Select State\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#consignorState\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlConsignorState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConsignorState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, consignorMobileNumber)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteConsignorState=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(consignorStateOptions | filterState: controlConsignorState.value) as resultConsignorState\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultConsignorState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"stateSelectedConsignor(option)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.state\"> {{ option.state\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultConsignorState.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Mobile Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consignorMobileNumber type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consignorMobileNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"consignorMobileNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, consignorOfficeNumber)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Office Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consignorOfficeNumber type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consignorOfficeNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, newConsignorSaveBtn)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"closePopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"closeNewConsignor();d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"ValidateClearNewConsignorDetails()\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div #newConsignorSaveBtn class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"newConsignorSaveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateNewConsignor()\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<a style=\"cursor: pointer; color: blue;\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open9(content9);setValueForConsignor();\"><u> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd Consignor</u></a>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Consignee Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wt80\">GST No</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeGSTNumber\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"getConsigneeGstNumber($event)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consigneeGSTNumber\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter Consignee GST Number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Name</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user-circle\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Consignee\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlConsignee\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConsignee\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"consigneeNameFocus($event)\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocompleteConsignee=\"appAutocomplete\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(consigneeOptionsRet | filterConsigneeName: controlConsignee.value) as resultConsignee\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultConsignee\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedConsignee(option,content10)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.consigneeName\"> {{ -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\toption.consigneeName }} </app-option> <app-option class=\"no-result\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultConsignee.length\">No result</app-option> </ng-container> </ng-template> </app-autocomplete> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeName id=\"consigneeName\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(selectItem)=\"rowSelectedConsignee($event,content10)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modelConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"consigneeNameSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusConsigneeNameTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceConsigneeName)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[resultFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[inputFormatter]=\"formatterConsigneeName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceConsigneeName=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wt80\">Address</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"consigneeAddress\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter Address\" rows=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"setConsigneeAddress\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px; font-size: 12px\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\" id=\"addressChange\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"changeAddress()\">Change</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #subCommodity -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, actualWeight)\" type=\"text\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<div *ngIf=\"lblNewConsignee\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>New Consignee</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content10 id=\"content10\" let-c=\"close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlet-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Consignee\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Add New Consignee</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #newConsignee type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"newConsignee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, gstNoConsignee)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>GST Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #gstNoConsignee type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"gstNoConsignee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, newConsigneeAddress)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #newConsigneeAddress type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"newConsigneeAddress\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, consigneeState)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>State</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeState\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consigneeState\" placeholder=\"Select State\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#consigneeState\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlConsigneeState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConsigneeState\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteConsigneeState=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(consigneeStateOptions | filterState: controlConsigneeState.value) as resultConsigneeState\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultConsigneeState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"stateSelectedConsignee(option)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.state\"> {{ option.state\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultConsigneeState.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\" id=\"closePopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\" id=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"ValidateClearNewConsigneeDetails()\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div #newConsigneeSaveBtn class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"newConsigneeSaveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateNewConsignee()\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open10(content10);setValueForConsignee()\"><u>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd Consignee</u></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>New Consignee</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content10 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Consignee\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Add New Consignee</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #newConsignee type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"newConsignee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, gstNoConsignee)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>GST Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #gstNoConsignee type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"gstNoConsignee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, newConsigneeAddress)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #newConsigneeAddress type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"newConsigneeAddress\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, consigneeState)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>State</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-map-marker-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #consigneeState\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consigneeState\" placeholder=\"Select State\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#consigneeState\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formControl]=\"controlConsigneeState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocompleteConsigneeState\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-autocomplete\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#autocompleteConsigneeState=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(consigneeStateOptions | filterState: controlConsigneeState.value) as resultConsigneeState\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let option of resultConsigneeState\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"stateSelectedConsignee(option)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.state\"> {{ option.state\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}} </app-option> <app-option class=\"no-result\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!resultConsigneeState.length\">No\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"closePopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"closeNewConsignee();d('Cross click')\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearPopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"ValidateClearNewConsigneeDetails()\">Clear</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div #newConsigneeSaveBtn class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"newConsigneeSaveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"validateNewConsignee()\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"cursor: pointer; color: blue;\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open10(content10);setValueForConsignee()\"><u> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd Consignee</u></a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf=\"!showMainCommodity\">Party Goods\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tType</label> <label *ngIf=\"showMainCommodity\">Main\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCommodity</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #partyGoodsType id=\"partyCommodity\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngbTypeahead]=\"partyCommoditySearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusPartyCommodityTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"partyCommodityFocus($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instancePartyCommodity)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instancePartyCommodity=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSubCommodity\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Sub Commodity</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #subCommodity id=\"subCommodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, actualWeight)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showGoodsType\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scrollable-dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Goods Type</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-home\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #goodsType id=\"goodsType\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" [ngbTypeahead]=\"goodsTypeSearchTA\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"focusGoodsTypeTA$.next($any($event).target.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"clickTA(instanceGoodsType)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"rowSelectedGooodsType($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#instanceGoodsType=\"ngbTypeahead\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showNewCommodity\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wt80\">New Commodity</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"newCommodity\" rows=\"1\"></textarea> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #newCommodity id=\"newCommodity\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"newCommodityEvent($event, actualWeight)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 \">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Actual Weight</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #actualWeight id=\"actualWeight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"actualWeightEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(onblur)=\"actualWeightBlur()\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Charged Weight</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #chargedWeight id=\"chargedWeight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"chargedWeightEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(onblur)=\"chargedWeightBlur()\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Charged Weight</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #chargedWeight id=\"chargedWeight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"chargedWeightEvent($event, content7)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(onblur)=\"chargedWeightBlur()\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--*ngIf=\"showMultiArt\"-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<label>Multiple Art</label>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content7 let-c=\"close\" let-d=\"dismiss\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Multiple\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tArticles Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"artLbl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">Article</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"lengthLbl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">Length</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"breadthLbl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">Breadth</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"heightLbl\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wtfull\">Height</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"multiArtarticle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"multiArtarticle\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#multiArtarticle\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, multiArtlength)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"multiArtlength\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"multiArtlength\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#multiArtlength\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, multiArtbreadth)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"multiArtbreadth\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"multiArtbreadth\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#multiArtbreadth\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, multiArtheight)\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"multiArtheight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"multiArtheight\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" #multiArtheight\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, addBtn)\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-5\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle='display: none'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"hiddenIndex\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" type='button'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"addInTable()\" #addBtn\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-icon-only yellow\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addInTable();\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-plus\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\tthe first datatble starts -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- timeTable-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table datatable id=\"multipleArticleTable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsMultiArtTable\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerMultiArtTable\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Article</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Length</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Breadth</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Height</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let multipleArtTableData of multiArtTableDataList let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmultipleArtTableData.articlesInMultiple }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ multipleArtTableData.length }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ multipleArtTableData.breadth }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ multipleArtTableData.height }}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableEditBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedEdit(multipleArtTableData,i);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Edit\" class=\"fas fa-pencil-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 1px 4px; background-color: #ffffff00;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn m-r-10\" id=\"tableRemoveBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"rowSelectedDelete(multipleArtTableData,i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i title=\"Remove\" class=\"fas fa-trash\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tfoot> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left\" id=\"totalMultiArticles\"></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tfoot> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"saveMultiArtBtn\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"onCancelClick();d('Cross click')\">Save</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"onCancelClick()\" id=\"closeMultiArtBtn\">close</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"saveMultiArtBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"multiArtFocus();d('Cross click')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"multiArtFocus();d('Cross click')\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"closeMultiArtBtn\">close</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<a style=\"cursor: pointer; color: blue;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"open7(content7)\"><u> View Details</u></a>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Goods Value</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #goodsValue id=\"goodsValue\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"goodsValueEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"goodsValueBlur($event)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-box\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #source id=\"source\" (keyup)=\"fieldFocus($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" readonly\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"getOffice\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>E-Way Bill No.</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #eWayBillNo id=\"eWayBillNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"eWayBillNoFocus($event)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showEDeclarationId\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>E-Declaration Commodity</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #edeclarationCommodity id=\"edeclarationCommodity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" (keyup)=\"fieldFocus($event, baseFreight)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"lblNewConsignor\" class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content4 id=\"content1\" let-c=\"close\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlet-d=\"dismiss\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Consignor -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Add New Consignor</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"newConsignor\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>GST Number</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"gstNoConsignor\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"consignorAddress\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>State</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"state\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Mobile Number</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"consignorMobileNumber\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Office Number</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"consignorOfficeNumber\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearPopupBtn\" (click)=\"d('Cross click')\">Save</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearPopupBtn\" (click)=\"d('Cross click')\">Cancel</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 vl\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"lblNewConsignee\" class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #content1 id=\"content1\" let-c=\"close\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlet-d=\"dismiss\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Consignee -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetails</h6> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click')\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Add New Consignee</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" id=\"newConsignee\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>GST Number</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"gstNoConsignee\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"consigneeAddress\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>State</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"state\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearPopupBtn\" (click)=\"d('Cross click')\">Save</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"clearPopupBtn\" (click)=\"d('Cross click')\">Cancel</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr style=\"width: 100%; margin-right: 10px;\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\">Freight Details</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>B.Freight</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #baseFreight id=\"baseFreight\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"baseFreightEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"baseFreightBlur( $event)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hamali</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #hamali id=\"hamali\" (keyup)=\"hamaliEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"hamaliBlur($event)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinner\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" style=\"margin-right: 160px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-spinner></mat-spinner>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showSpinner\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"card-title\" style=\"color: blue;\">Saving\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLr details......</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>GC.Chg</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #gcCharge id=\"gcCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"gcChargeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"gcChargeBlur($event)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"setGcCharge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>LC</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #lcCharge id=\"lcCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"lcChargeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"lcChargeBlur($event)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>BC</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #bcCharge id=\"bcCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"bcChargeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"bcChargeBlur($event)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>F.O.V</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #fov id=\"fov\" (keyup)=\"fovEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"fovBlur($event)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"readonlyFOV\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>A.O.C</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #aocCharge id=\"aocCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"aocChargeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"aocChargeBlur($event)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Others</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-donate\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #others id=\"others\" (keyup)=\"othersEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"othersBlur($event)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"setOthers\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>DD Mode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"  fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tneed to research for on change \t\t(click)=\"dd()\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!--\t<select class=\"custom-select col-12\" id=\"doorDeliveryMode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"doorDeliveryMode\" #doorDeliveryMode\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"doorDeliMode(doorDeliveryMode.value);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keydown.enter)=\"doorDeliModeFocus($event,doorDeliveryMode.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"No\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Yes\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>DD Mode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"  fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\tneed to research for on change \t\t(click)=\"dd()\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"doorDeliveryMode\" name=\"doorDeliveryMode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#doorDeliveryMode\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"doorDeliMode(doorDeliveryMode.value);\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keydown.enter)=\"doorDeliModeFocus($event,doorDeliveryMode.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"No\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Yes\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"doorDeliveryYesddAmt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>DD</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #ddAmt id=\"ddAmt\" (keyup)=\"ddAmtEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(blur)=\"ddAmtBlur($event)\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByAutoLr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"doorDeliveryYes\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wt80\">DD Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea #ddAddress id=\"ddAddress\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"ddAddressTexArea\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, checkboxCOD)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" rows=\"1\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>COD</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxCOD\" #checkboxCOD\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, paymentType)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForCOD($event)\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 15px;\" for=\"checkboxCOD\"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showCodChg\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>COD Charge</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #codCharge id=\"codCharge\" name=\"codCharge\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"setCodCharge\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\treadonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Total Amt</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #totalAmount id=\"totalAmount\" type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\treadonly>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>P.Type</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" name=\"paymentType\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#paymentType id=\"paymentType\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"paymentTypeMode(paymentType.value)\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"toPay\" selected>To Pay</option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"paid\">Paid</option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</select> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- By Kamil -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>P.Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" name=\"paymentType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#paymentType id=\"paymentType\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"paymentTypeMode(paymentType.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keydown.enter)=\"paymentTypeModeFocus($event,paymentType.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"toPay\" selected>To Pay</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"paid\">Paid</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bank LR</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-university\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"bankLr\" class=\"custom-select col-12\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"bankLr\" #bankLr (change)=\"bankLrMode(bankLr.value)\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"No\">No</option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Yes\">Yes</option> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</select> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- BY Kamil -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bank LR</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-university\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"bankLr\" class=\"custom-select col-12\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"bankLr\" #bankLr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"bankLrMode(bankLr.value)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keydown.enter)=\"bankLrModeFocus($event,bankLr.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"No\">No</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Yes\">Yes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"bankLrYes\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bank Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-university\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #bankName id=\"bankName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, privateMarker)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pvt. Mark</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-paint-brush\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #privateMarker id=\"privateMarker\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, billNo)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"ddAmtEvent($event)\" (onblur)=\"ddAmtBlur()\" -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bill No.</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #billNo id=\"billNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, clerkName)\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" aria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Clerk Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"ti-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #clerkName id=\"clerkName\" type=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"clerkEvent($event)\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bill Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"dd-mm-yyyy\" name=\"billDate\" id=\"billDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngbDatepicker #billDate=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"billDate.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bill Date</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"billDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"billDate\" id=\"billDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"tdyBillDate\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(ngModelChange)=\"focusBillCalendar();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"focusBillCalendarEnter($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keydown.arrowdown)=\"billDates.toggle();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"billDates.toggle()\" #billDates=\"ngbDatepicker\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"date\" id=\"billDate\" name=\"billDate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"dd-mm-yyyy\"> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"billDate\" name=\"billDate\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"tdyBillDate\" ngbDatepicker -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(ngModelChange)=\"focusBillCalendar()\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"billDates.toggle()\" #billDates=\"ngbDatepicker\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-secondary calendar\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"billDates.toggle()\" type=\"button\"></button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<div *ngIf=\"viewByAutoLr\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wt80\">Remarks</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea #remarks id=\"remarks\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trows=\"1\" [(ngModel)]=\"remarksTexArea\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByAutoLr\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"wt80\">Remarks</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea #remarks id=\"remarks\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"remarksFocus($event)\" rows=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"remarksTexArea\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Bank LR</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-university\"></i> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #bankLrInputField -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, actualChargedWeightExtra)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewByAutoLr\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Actual Charged Weight Extra</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input #actualChargedWeightExtra\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"actualChargedWeightExtra\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"actualChargedWeightExtraFocus($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<div *ngIf=\"paymentTypePaid\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> Ser Tax Paying By </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select #serTaxPayingBy id=\"serTaxPayingBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, checkboxAoc)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"Consignor\">Consignor</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"GTA\">GTA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"paymentTypePaid\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> Ser Tax Paying By </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select #serTaxPayingBy id=\"serTaxPayingBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"serTaxPayingByMethod();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keydown.enter)=\"serTaxPayingByFocusMethod($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"Consignor\">Consignor</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"GTA\">GTA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showEDeclarationId\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label> E Declaration ID Created By </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select #edeclarationId id=\"edeclarationId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keydown.enter)=\"edeclarationIdFocusMethod($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"edeclarationIdMethod();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-select col-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"Consignor\">Consignor</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"GTA\">GTA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 vl\">\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 0px !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#checkboxAoc id=\"checkboxAoc\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, checkboxToBeBilled)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForAOC($event)\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull\" for=\"checkboxAoc\">AOC</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 0px !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#checkboxToBeBilled id=\"checkboxToBeBilled\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, checkboxPickupLr)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForTobeBilled($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxToBeBilled\">To Be Billed</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 0px !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxPickupLr\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, checkboxUnloadedByConsignee)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForPickupLr($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#checkboxPickupLr> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxPickupLr\">Pickup LR </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 0px !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxUnloadedByConsignee\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#checkboxUnloadedByConsignee\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, checkboxHandleWithCare)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForUnloadByConsignee($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxUnloadedByConsignee\">Unloaded By\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tConsignee</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 0px !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxHandleWithCare\" #checkboxHandleWithCare\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, checkboxGatePass)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForHandleWithCare($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxHandleWithCare\">Handle With Care</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 0px !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxGatePass\" #checkboxGatePass\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, checkboxCcAttach)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForGatePass($event)\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxGatePass\">Gate Pass</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 0px !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxCcAttach\" #checkboxCcAttach\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, checkboxSelfLr)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForCCAttached($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxCcAttach\">C.C.Attach</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 0px !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxSelfLr\" #checkboxSelfLr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, checkboxCOD)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForSelfLr($event)\"> <label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxSelfLr\">Self LR</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 0px !important\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxCOD\" #checkboxCOD -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, checkboxOrderGoods)\" -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForCOD($event)\"> <label -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" custom-control-label wtfull\" for=\"checkboxCOD\">COD</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 0px !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxOrderGoods\" #checkboxOrderGoods\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, checkboxEwayBillExempted)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForOrderGoods($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxOrderGoods\">Order Goods</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 0px !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"checkboxEwayBillExempted\" #checkboxEwayBillExempted\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"fieldFocus($event, nextBtn)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleEditableForEWayBillExempted($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\" custom-control-label wtfull\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"checkboxEwayBillExempted\">E-Way Bill\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tExempted</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"form-group\">\n                  <div class=\"custom-control custom-checkbox mr-sm-2\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox10\" value=\"check\">\n                    <label class=\" custom-control-label wtfull\" for=\"checkbox10\">Remember Me</label>\n                  </div>\n                </div> -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t<div class=\"col-md-3\"></div>\n\t\t\t\t\t\t<div class=\"col-md-6\" style=\"text-align: center;\">\n<!-- \t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"nextBtn\" -->\n<!-- \t\t\t\t\t\t\t\t#nextBtn (click)=\"validateBtnNext(content11)\">Next</button> -->\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"nextBtn\"\n\t\t\t\t\t\t\t\t#nextBtn (click)=\"validateBtnNextAfterCheckingChallanTotalLrs(content11)\">Next</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" id=\"finishBtn\"\n\t\t\t\t\t\t\t\tdisabled (click)=\"validateBtnFinish()\">Finish</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"resetBtn\" (click)=\"validateReset()\">Reset</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t<h6 *ngIf=\"lblLRCount\">{{txtLrCount}}</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t<!-- \t<div *ngIf=\"viewBkgCashmemo\"> -->\n\t\t\t\t\t<!-- \t\t<app-booking-cashmemo></app-booking-cashmemo> -->\n\t\t\t\t\t<!-- \t</div> -->\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" id=\"bkgMemoPrintId\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t<label>Paid</label> -->\n\t\t\t\t\t\t\t\t<ng-template #content11 id=\"content11\" let-c=\"close\"\n\t\t\t\t\t\t\t\t\tlet-d=\"dismiss\">\n\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Booking Cashmemo -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\tDetails</h6> -->\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click');showBkgCashmemoPaidClear()\">\n\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<app-booking-cashmemo></app-booking-cashmemo>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button style=\"padding: 1px 4px; float: right;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"submit\" class=\"btn btn-dark\" id=\"closePopupBtn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"d('Cross click');showBkgCashmemoPaidClear()\">Close</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t<a style=\"cursor: pointer; color: blue;\" -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t(click)=\"open11(content11);showBkgCashmemoPaidClear()\"><u> -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\tpaid</u></a> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<!-- Row -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--  <script type=\"text/javascript\" src=\"assets/js/bootstrap-dynamic-tabs/bootstrap-dynamic-tabs.js\"></script>\n  <script type=\"text/javascript\" src=\"assets/js/jquery-ui-sortable.js\"></script>\n  <script type=\"text/javascript\" src=\"assets/js/jquery-ui-sortable.min.js\"></script>\n  <script>\n    $(function () {\n      var userId = \"${loginDetailsSession.loginId}\";\n      var itemId = 0;\n\n      $(\"#sessionRelogin\").click(function (e) {\n        e.preventDefault();\n        window.location.href = \"/BillingApp/login.do\";\n      });\n      $(document).ready(function () {\n        // \t\t\t\t\tfieldDetails();\n        // \t\t\t\t\titemDetails();\n        show1();\n      });\n\n      function show1() {\n        document.getElementById('tripInfo').style.display = 'block';\n\n      }\n\n      // \t\tfunction show3() {\n      // // \t\t\twindow.location.replace(\"/BillingApp/billPrint.do\");\n      // // \t\t\twindow.location.replace(\"/BillingApp/billPrintWithoutPartyName.do\");\n      // // \t\t\twindow.Print();\n\n      // \t\t}\n      // \t\tfor the menu\n      function myFunction() {\n        document.getElementById(\"myDropdown\").classList\n          .toggle(\"show\");\n      }\n\n      var tabs = $('#tabs');\n      tabs.bootstrapDynamicTabs().addTab({\n        title: 'Home',\n        ajaxUrl: '/BillingApp/billing.do',\n        closable: false\n      });\n\n      $('#inventoryStockIn').click(function () {\n        tabs.addTab({\n          title: 'Inventory StockIn',\n          id: 'ajax1',\n          ajaxUrl: '/masters/company/commoncharges',\n          // \t\t\t\tloadStyles : [ 'css/test.css', 'css/test2.css' ]\n        });\n      });\n      $('#messageScreen').click(function () {\n        tabs.addTab({\n          title: 'MessageScreen',\n          id: 'ajax',\n          ajaxUrl: '/BillingApp/message.do',\n          // \t\t\t\t\tloadScripts : 'js/load.js',\n          // \t\t\t\t\tloadStyles : [ 'css/test.css', 'css/test2.css' ]\n        });\n      });\n    });\n    // \t\t\t$('#btnIon').click(function() {\n    // \t\t\t\ttabs.addTab({\n    // \t\t\t\t\ttitle : 'Tested via Ajax',\n    // \t\t\t\t\tid : 'ajax2',\n    // \t\t\t\t\tajaxUrl : 'BillingApp/customer.do',\n    // \t\t\t\t// \t\t\t\t\tloadScripts : 'js/load.js',\n    // \t\t\t\t// \t\t\t\t\tloadStyles : [ 'css/test.css', 'css/test2.css' ]\n    // \t\t\t\t});\n    // \t\t\t});\n\n  </script>-->\n\t</div>\n\t<div *ngIf=\"viewLrEntryPrint\" onafterprint=\"afterPrint()\"\n\t\tid=\"printLrEntryForm\">\n\t\t<!-- \t\t\t\t\t\t\t<app-lrentry-print></app-lrentry-print> -->\n\t\t<app-lrentryform-print2></app-lrentryform-print2>\n\t</div>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/lr/entry/lr-entry-form/lrentryform.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/lr/entry/lr-entry-form/lrentryform.component.ts ***!
  \*****************************************************************/
/*! exports provided: LrEntryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrEntryFormComponent", function() { return LrEntryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/AgentDetails-dto */ "./src/app/dto/AgentDetails-dto.ts");
/* harmony import */ var src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/HireSlip-dto */ "./src/app/dto/HireSlip-dto.ts");
/* harmony import */ var src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/RateMaster-dto */ "./src/app/dto/RateMaster-dto.ts");
/* harmony import */ var src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/PartyMaster-dto */ "./src/app/dto/PartyMaster-dto.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_lr_entry_automatedlrhold_lr_entry_popup_automatedlrhold_lr_entry_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/lr/entry/automatedlrhold-lr-entry-popup/automatedlrhold-lr-entry-popup.component */ "./src/app/lr/entry/automatedlrhold-lr-entry-popup/automatedlrhold-lr-entry-popup.component.ts");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js");
/* harmony import */ var rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/dto/TruckData-dto */ "./src/app/dto/TruckData-dto.ts");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
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
//for popup modal starts 



//for popup modal endss 
var my = new Date();
//for the select option with filter starts












//for popup modal starts 







//import { BookingCashmemoComponent } from 'src/app/cashmemo/generation/booking-cashmemo/booking-cashmemo.component';


//for the select option with filter ends
// // This is for the range date picker
// const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
//   one &&
//   two &&
//   two.year === one.year &&
//   two.month === one.month &&
//   two.day === one.day;
// const before = (one: NgbDateStruct, two: NgbDateStruct) =>
//   !one || !two
//     ? false
//     : one.year === two.year
//       ? one.month === two.month
//         ? one.day === two.day
//           ? false
//           : one.day < two.day
//         : one.month < two.month
//       : one.year < two.year;
// const after = (one: NgbDateStruct, two: NgbDateStruct) =>
//   !one || !two
//     ? false
//     : one.year === two.year
//       ? one.month === two.month
//         ? one.day === two.day
//           ? false
//           : one.day > two.day
//         : one.month > two.month
//       : one.year > two.year;
// // End  range date picker
//const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
//    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
//    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
//    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
//    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
//    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
//    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
//    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
//type consignorOptionsRetTA = { consignorName: number };
var LrEntryFormComponent = /** @class */ (function () {
    function LrEntryFormComponent(modalService, masterReadService, masterService, router, datePipe, dialog, route) {
        var _this = this;
        this.modalService = modalService;
        this.masterReadService = masterReadService;
        this.masterService = masterService;
        this.router = router;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.route = route;
        this.hireDto = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_7__["HireSlipDto"]();
        this.hireDtopackNature = new src_app_dto_HireSlip_dto__WEBPACK_IMPORTED_MODULE_7__["HireSlipDto"]();
        this.packNatureOptionsAdd = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.agentDtoAll = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_6__["AgentDetailsDto"]();
        this.showMultiArt = false;
        //    commodityRateDto: RateMasterDto = new RateMasterDto();
        //    commodityRate: any;
        //    commodityRateRet: RateMasterDto[];
        //    commodityDescriptionOptions: RateMasterDto[];
        //    commodityRateDtoAdd: RateMasterDto = new RateMasterDto();
        this.lblAddAgent = false;
        this.partyMasterDtoForconsignor = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.consignorOptionsAdd = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.consigneeOptionsAdd = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.showGoodsType = false;
        this.isReadOnly = true;
        this.destinationOptions = [];
        this.lrDtoDest = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.commaSplitDest = [];
        this.showMainCommodity = false;
        this.consigneeComOptions = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyDtoForConsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyDtoForConsigneeAllCom = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.consigneeAddressPartyDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.goodsCommdityRateDto = new src_app_dto_RateMaster_dto__WEBPACK_IMPORTED_MODULE_8__["RateMasterDto"]();
        this.goodsCommdityRateDtoAdd = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.showNewCommodity = false;
        this.lrtDtoForAutoLr = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.viewAutoLr = true;
        this.viewAutoLrHold = true;
        this.viewByAutoLr = false;
        this.ddAmtRange = 0.0;
        this.ddAmountRange = 0.0;
        this.enterdChgWgt = 0.0;
        this.ddAmtSys = 0;
        this.lrtDtoForFovRate = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.resultDtos = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrCheck = false;
        this.isFOVRateSet = false;
        this.fovChg = 0.0;
        this.goodsValue = 0.0;
        this.riskPerc = 0.0;
        this.riskChg = 0.0;
        this.totalAmt = 0.0;
        this.lrtDtoForChallan = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.dtTriggerMultiArtTable = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.multiArtTableDataList = [];
        this.lrtDtoForMultiArt = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrtDtoForMultiArtRetSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.enterArticles = 0;
        this.getGCCharges = 0.0;
        this.getOthers = 0.0;
        this.lrtDtoForLrCheck = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrtDtoForLrCheckSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrtDtoForMissAgentSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.validateBkgDateClicked = true;
        this.enterdActWgt = 0.0;
        this.lrtDtoForValidateBkgDate = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrtDtoForValidateBkgDateSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.eWayBillExempted = false;
        this.minDDAmt = 0.0;
        this.minDDPerc = 0.0;
        this.partyGoodsType = null;
        this.goodsType = null;
        this.newCommodity = null;
        this.toBeBilledParty = false;
        this.cbAoc = false;
        this.cbPickUpLr = false;
        this.cbUnloadByConsignee = false;
        this.cbHandleWithCare = false;
        this.cbCOD = false;
        this.cbOrderGoods = false;
        this.cbGatePass = false;
        this.cbCCAttached = false;
        this.cbSelfLr = false;
        this.lrtDtoForSave = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.showSubCommodity = true;
        this.totalAmtNew = 0.0;
        this.isPaidLr = false;
        this.showEDeclarationId = false;
        this.lrDtoSaveSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrCount = 0;
        this.lblLRCount = false;
        this.viewLrEntryPrint = false;
        this.lrEntryForm = true;
        this.lblNewConsignor = false;
        this.lblNewConsignee = false;
        this.lrtDtoForChallanTotLr = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrtDtoForChallanTotLrRetDto = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.agentNameTA = [];
        this.userGodownTA = [];
        this.focusUserGodownTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.clickUserGodownTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.focusAgentNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.clickAgentNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.showLoader = true;
        this.userGodownSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17__["distinctUntilChanged"])());
            var clicksWithClosedPopup$ = _this.clickUserGodownTA$.pipe(Object(rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_18__["filter"])(function () { return !_this.instanceUserGodown.isPopupOpen(); }));
            var inputFocus$ = _this.focusUserGodownTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.userGodownTA
                : _this.userGodownTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 100); }));
        };
        this.agentNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17__["distinctUntilChanged"])());
            var clicksWithClosedPopup$ = _this.clickAgentNameTA$.pipe(Object(rxjs_internal_operators_filter__WEBPACK_IMPORTED_MODULE_18__["filter"])(function () { return !_this.instanceAgentName.isPopupOpen(); }));
            var inputFocus$ = _this.focusAgentNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.agentNameTA
                : _this.agentNameTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.vehicleNumberTA = [];
        this.focusVehicleNumberTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.vehicleNumberSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusVehicleNumberTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.vehicleNumberTA
                : _this.vehicleNumberTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.destinationTA = [];
        this.focusDestnationTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.destnationSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusDestnationTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.destinationTA
                : _this.destinationTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.loaderHeadTA = [];
        this.focusLoaderHeadTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.loaderHeadSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusLoaderHeadTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.loaderHeadTA
                : _this.loaderHeadTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.packNatureTA = [];
        this.focusPackNatureTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.packNatureSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusPackNatureTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.packNatureTA
                : _this.packNatureTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.consignorTA = [];
        this.focusConsignorTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.consignorSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsignorTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.consignorTA
                : _this.consignorTA.filter(function (v) { return v.consignorName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsignorName = function (x) { return x.consignorName; };
        this.consigneeTA = [];
        this.focusConsigneeNameTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.consigneeNameSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusConsigneeNameTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.consigneeTA
                : _this.consigneeTA.filter(function (v) { return v.consigneeName.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.formatterConsigneeName = function (x) { return x.consigneeName; };
        this.partyCommodityTA = [];
        this.focusPartyCommodityTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.partyCommoditySearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusPartyCommodityTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.partyCommodityTA
                : _this.partyCommodityTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        this.goodsTypeTA = [];
        this.focusGoodsTypeTA$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.goodsTypeSearchTA = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"])(200), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_17__["distinctUntilChanged"])());
            var inputFocus$ = _this.focusGoodsTypeTA$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(debouncedText$, inputFocus$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? _this.goodsTypeTA
                : _this.goodsTypeTA.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 200); }));
        };
        /* showMainComm() {
            if ( ( this.viewByAutoLr == true ) || ( this.lrCheck == true ) ) {
                this.autoLrNumberField.nativeElement.focus();
            } else {
                this.showMainCommodity = true;
                this.lrNumberField.nativeElement.focus();
            }
    
        } */
        /* viewMainCommodity( e ) {
            if ( e.keyCode == 13 ) {
                this.selectedDestination = $( "#destination" ).val();
                if ( this.selectedDestination != null && this.selectedDestination != '' ) {
                    this.showMainCommodity = true;
                    if ( ( this.viewByAutoLr == true ) || ( this.lrCheck == true ) ) {
                        this.autoLrNumberField.nativeElement.focus();
                    } else {
                        this.lrNumberField.nativeElement.focus();
                    }
    
                }
    
            }
    
        } */
        //    focusCompanyName(): void {
        //        this.companyNameField.nativeElement.focus();
        //    }
        //    focus ends
        //for the select option with filter starts
        this.controlAgentName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlLoaderHead = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlPackNature = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlCommodityDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlPartyGoodsType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlUserGodown = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlConsignor = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlConsignee = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlGoodsType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        // date: { year: number; month: number };
        this.doorDeliveryYes = false;
        this.paymentTypePaid = false;
        this.doorDeliveryYesddAmt = false;
        this.bankLrYes = false;
        this.lrDtoParam = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.agentDtoParam = new src_app_dto_AgentDetails_dto__WEBPACK_IMPORTED_MODULE_6__["AgentDetailsDto"]();
        this.isLoggedIn = true;
        this.newAttribute = {};
        this.editSelected = false;
        this.isLRCode = false;
        this.showLrCode = false;
        this.isNextLrAllow = true;
        this.restrictUserGodownList = false;
        ///For Seting the Auto Lr Value
        this.autoLrFieldValue = '';
        ////
        this.showMultiPackNature = false;
        this.controlPackNatureNew = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.editTableIdMultiPack = null;
        this.dtTriggerMultiPackTable = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.multiPackNatureTableDataList = [];
        this.newAttributeMultiPack = {};
        this.partyMasterDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.controlConsignorState = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.controlConsigneeState = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.newConsignorStateCode = '';
        this.newConsigneeStateCode = '';
        this.partyDtoForNewConsignor = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyDtoForNewConsignorSet = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyDtoForNewConsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyDtoForNewConsigneeSet = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.viewBkgCashmemo = false;
        this.lrDtoForBooking = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.checkAutoLr = false;
        this.checkAutoLrHold = false;
        this.showSpinner = false;
        this.showCodChg = false;
        this.isPaidLrOnly = false;
        this.showRiskCharge = false;
        this.hideRiskCharge = 'Hide Risk Charge';
        this.truckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_19__["TruckDataDto"]();
        this.vehicleNumberOptionsAddNew = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_19__["TruckDataDto"]();
        this.truckDataDtoSave = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_19__["TruckDataDto"]();
        this.truckDataCheckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_19__["TruckDataDto"]();
        this.isValid = false;
        this.isPaidLrForManual = false;
        this.readonlyFOV = false;
        this.getLoaderHeadListDetails = function () {
            _this.getLoaderHeadList();
            _this.masterReadService.getLoaderHeadDetails(_this.hireDto).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Warning",
                        text: "No Loader records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.controlLoaderHead.reset();
                    _this.loaderHeadOptions = [];
                    _this.loaderHeadTA = [];
                }
                else {
                    _this.controlLoaderHead.reset();
                    _this.loaderHeadOptions = response;
                    _this.loaderHeadTA = [];
                    for (var i = 0; i < _this.loaderHeadOptions.length; i++) {
                        _this.loaderHeadTA.push(_this.loaderHeadOptions[i].loaderHead);
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getPackNatureListDetails = function () {
            _this.getPackNatureList();
            _this.masterReadService.getNatureOfPack(_this.hireDtopackNature).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Warning",
                        text: "No Pack Nature records found!",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.controlPackNature.reset();
                    _this.packNatureOptions = [];
                    _this.packNatureTA = [];
                    _this.controlPackNatureNew.reset();
                    _this.packNatureNewOptions = [];
                }
                else {
                    // having issue due to different dto
                    _this.controlPackNature.reset();
                    _this.packNatureDetails = response;
                    _this.packNatureOptions = _this.packNatureDetails;
                    _this.packNatureOptionsAdd.packNature = "Multiple Pack";
                    _this.packNatureOptions.push(_this.packNatureOptionsAdd);
                    //For new packNature
                    _this.packNatureTA = _this.packNatureDetails;
                    _this.packNatureTA = [];
                    for (var i = 0; i < _this.packNatureOptions.length; i++) {
                        _this.packNatureTA.push(_this.packNatureOptions[i].packNature);
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getConsignorDetails = function () {
            _this.getConsignorDetailsList();
            _this.masterReadService.getConsignorMaster(_this.partyMasterDtoForconsignor).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Warning",
                        text: "No records found for this Consignor GST number !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        //                        this.consignorNameField.nativeElement.focus();
                        window.setTimeout(function () {
                            $("#consignorName").focus();
                        }, 100);
                    });
                    _this.controlConsignor.reset();
                    _this.consignorOptions = [];
                    _this.consignorTA = [];
                    _this.consignorOptionsRet = _this.consignorOptions;
                    _this.consignorOptionsAdd.consignorName = "Add New";
                    _this.consignorOptions.push(_this.consignorOptionsAdd);
                    _this.consignorOptionsAdd.consignorName = 'Add New';
                    _this.consignorTA.push(_this.consignorOptionsAdd);
                }
                else {
                    _this.controlConsignor.reset();
                    _this.consignorOptions = response;
                    _this.consignorOptionsRet = _this.consignorOptions;
                    _this.consignorTA = [];
                    //      console.log( this.consignorOptionsRet.length, this.consignorOptions );
                    for (var i = 0; i < _this.consignorOptions.length; i++) {
                        //  console.log( '1' );
                        _this.consignorTA.push(_this.consignorOptions[i]);
                    }
                    _this.consignorOptionsAdd.consignorName = 'Add New';
                    _this.consignorTA.push(_this.consignorOptionsAdd);
                    $("#consignorName").val(_this.consignorOptions[0].consignorName);
                    $("#consignorAddress").val(_this.consignorOptions[0].address);
                    _this.selectedConsignorId = _this.consignorOptions[0].consignorId;
                    //this.consignorNameField.nativeElement.focus();
                    $("#consigneeGSTNumber").focus();
                    //                    console.log(  this.selectedConsignorId );
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getConsigneeDetails = function () {
            _this.getConsigneeDetailsList();
            _this.masterReadService.getConsigneeMaster(_this.partyMasterDtoForconsignee).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Warning",
                        text: "No records found for this Consignee GST number !",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        //                      this.consignorNameField.nativeElement.focus();
                        window.setTimeout(function () {
                            $("#consigneeName").focus();
                        }, 100);
                    });
                    _this.controlConsignee.reset();
                    _this.consigneeOptions = [];
                    _this.consigneeOptionsRet = _this.consigneeOptions;
                    //                    this.consigneeOptionsAdd.consigneeName = "Add New"
                    //                    this.consigneeOptions.push( this.consigneeOptionsAdd );
                    _this.consigneeTA = [];
                    _this.consigneeOptionsAdd.consigneeName = "Add New";
                    _this.consigneeTA.push(_this.consigneeOptionsAdd);
                }
                else {
                    // having issue due to different dto Pending
                    _this.controlConsignee.reset();
                    _this.consigneeOptions = response;
                    _this.consigneeOptionsRet = _this.consigneeOptions;
                    _this.consigneeTA = [];
                    for (var i = 0; i < _this.consigneeOptionsRet.length; i++) {
                        _this.consigneeTA.push(_this.consigneeOptionsRet[i]);
                    }
                    _this.consigneeOptionsAdd.consigneeName = "Add New";
                    _this.consigneeTA.push(_this.consigneeOptionsAdd);
                    //                    this.consigneeNameField.nativeElement.focus();
                    _this.selectedConsignee = _this.consigneeOptions[0].consigneeName;
                    _this.selectedConsigneeId = _this.consigneeOptions[0].consigneeId;
                    $("#consigneeName").val(_this.consigneeOptions[0].consigneeName);
                    $("#consigneeAddress").val(_this.consigneeOptions[0].address);
                    _this.isPaidLrOnly = _this.consigneeOptions[0].isPaidOnly == null ? false : _this.consigneeOptions[0].isPaidOnly;
                    //     console.log( this.isPaidLrOnly );
                    //                    console.log(this.selectedConsigneeId);
                    if ((_this.selectedConsignee != null) && (_this.selectedConsignee != "") && (_this.selectedConsignee != "ALL")) {
                        _this.getBangaloreConsigneeCommodityConsignee();
                        //this.partyGoodsTypeField.nativeElement.focus();
                        window.setTimeout(function () {
                            $("#partyCommodity").focus();
                        }, 100);
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getLrEntrylistBoxCommodity = function () {
            //        this.showGoodsType=true;
            _this.getLrEntrylistBoxCommodityInfo();
            _this.masterReadService.getGoodsTypeCommdity(_this.goodsCommdityRateDto).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Warning",
                        text: "No Data Found for Goods Type",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.controlGoodsType.reset();
                    _this.goodsTypeCommdityOptions = [];
                    _this.goodsTypeTA = [];
                }
                else {
                    ///Pending
                    _this.controlGoodsType.reset();
                    _this.goodsTypeCommdityOptions = response;
                    //                    console.log(response.length);
                    //                    console.log('first '+response.length);
                    _this.goodsCommdityRateDtoAdd.multipleCommodity = "Add New";
                    _this.goodsTypeCommdityOptions.push(_this.goodsCommdityRateDtoAdd);
                    _this.goodsTypeTA = [];
                    for (var i = 0; i < _this.goodsTypeCommdityOptions.length; i++) {
                        _this.goodsTypeTA.push(_this.goodsTypeCommdityOptions[i].multipleCommodity);
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getDestinationDetails = function () {
            _this.getDestinationDetailsList();
            _this.masterReadService.getDestinationForLREntryForm(_this.lrDtoDest).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Warning",
                        text: "No Destination Records Found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.controlDestination.reset();
                    _this.destinationOptions = [];
                    _this.destinationTA = [];
                }
                else {
                    // having issue due to different dto
                    _this.controlDestination.reset();
                    _this.destinationOptions = response;
                    _this.destinationTA = [];
                    for (var i = 0; i < _this.destinationOptions.length; i++) {
                        _this.destinationTA.push(_this.destinationOptions[i].listOfDestination);
                    }
                    //                    this.destinationDetailsGet = this.destinationDetails;
                    //                    this.destinationOptionsAny = this.destinationDetailsGet[0].destList;
                    //                    this.controlDestination.reset();
                    //                    for ( let i = 0; i < this.destinationOptionsAny.length; i++ ) {
                    //                        this.destinationOptionsGet.destList = this.destinationOptionsAny[i];
                    //                        this.destinationOptions.push( this.destinationOptionsGet );
                    //                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getBangaloreConsigneeCommodityConsignee = function () {
            _this.getBangaloreConsigneeCommodityConsigneeInfo();
            _this.masterReadService.getCityMainCommodityDetails(_this.partyDtoForConsignee).subscribe(function (response) {
                _this.bangaloreConsigneeCommdityOptions = '';
                _this.partyCommodityTA = [];
                if (response.length > 0) {
                    _this.bangaloreConsigneeCommdityOptions = response;
                    _this.consigneeComOptions.multipleCommodity = "Add New";
                    _this.bangaloreConsigneeCommdityOptions.push(_this.consigneeComOptions);
                    for (var i = 0; i < _this.bangaloreConsigneeCommdityOptions.length; i++) {
                        _this.partyCommodityTA.push(_this.bangaloreConsigneeCommdityOptions[i].multipleCommodity);
                    }
                }
                else {
                    _this.statusOfCommodity = "forSpecificConsignee";
                    _this.getBangaloreAllCommodityConsignee();
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getBangaloreAllCommodityConsignee = function () {
            _this.getBangaloreAllCommodityConsigneeInfo();
            _this.masterReadService.getCityMainCommodityDetails(_this.partyDtoForConsigneeAllCom).subscribe(function (response) {
                if (response.length == 0) {
                    //                    alert( '' );
                    //                    swal( {
                    //                        title: "Warning",
                    //                        text: "No Commodity Records Found",
                    //                        icon: "warning",
                    //                        closeOnClickOutside: false,
                    //                        closeOnEsc: false,
                    //                    } );
                }
                else {
                    if (_this.statusOfCommodity == "forSpecificConsignee") {
                        ///here setting the values in Main Commodity
                        _this.bangaloreConsigneeCommdityOptions = '';
                        _this.partyCommodityTA = [];
                        _this.bangaloreConsigneeCommdityOptions = response;
                        for (var i = 0; i < _this.bangaloreConsigneeCommdityOptions.length; i++) {
                            _this.partyCommodityTA.push(_this.bangaloreConsigneeCommdityOptions[i].multipleCommodity);
                        }
                    }
                    else if (_this.statusOfCommodity == "forGlobalCommodityListBng") {
                        ///here setting the values in Goods Type
                        _this.goodsTypeCommdityOptions = response;
                        //                        console.log('secondi'+response.length);
                        _this.goodsTypeTA = [];
                        for (var i = 0; i < _this.goodsTypeCommdityOptions.length; i++) {
                            _this.goodsTypeTA.push(_this.goodsTypeCommdityOptions[i].multipleCommodity);
                        }
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getConsigneeAddress = function () {
            _this.getConsigneeAddressInfo();
            _this.masterReadService.getConsigneeAddress(_this.consigneeAddressPartyDto).subscribe(function (response) {
                if (response.length == 0) {
                    //                    alert( '' );
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Failure",
                        text: "Ooops..Problem occur while updating Consignee Address..",
                        icon: "error",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    ///Pending
                    _this.consigneeAddressRet = response;
                    //                   console.log(this.consigneeAddressRet);
                    if (_this.consigneeAddressRet.status == 'success') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Success",
                            text: "Address updated successfully",
                            icon: "success",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Error",
                            text: "Address updation failed",
                            icon: "error",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getAutoLrNo = function () {
            _this.getAutoLrNoInfo();
            _this.masterReadService.getAutomaticLrNo(_this.lrtDtoForAutoLr).subscribe(function (response) {
                if (response.length == 0) {
                    //                    alert( '' );
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Warning",
                        text: "No Lr Records Found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    $("#autoLrNumber").val('');
                }
                else {
                    _this.autoLrFieldValue = '';
                    _this.autoLrRet = response;
                    _this.autoLrFieldValue = _this.autoLrRet[0].lrNumber;
                    //                    console.log( 'Hereaa :' + this.autoLrFieldValue );
                    $("#autoLrNumber").val(_this.autoLrRet[0].lrNumber);
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.fovRateSetupValidation = function () {
            _this.fovRateSetupValidationInfo();
            _this.masterReadService.validateFOVRateWhileLREntry(_this.lrtDtoForFovRate).subscribe(function (response) {
                _this.fovRateValidateRet = response;
                if (response.length > 0) {
                    _this.isFOVRateSet = true;
                    _this.fovChg = _this.fovRateValidateRet[0].fovPerc;
                }
                else {
                    _this.isFOVRateSet = false;
                    _this.fovChg = 0.0;
                    //                    console.log( 'here is the data' );
                }
                _this.calculateRiskCharge();
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.ChallanNumberChk = function () {
            _this.ChallanNumberChkInfo();
            _this.masterReadService.getAgentNameForChallanNo(_this.lrtDtoForChallan).subscribe(function (response) {
                if (response.length == 0) {
                    //                    alert( '' );
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Warning",
                        text: "No  Records Found For this Challan Number",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.lrtDtoForChallanRet = response;
                    //                    console.log( this.lrtDtoForChallanRet );
                    //                    this.agentDtoAll.subStation =this.lrtDtoForChallanRet.agentName;
                    if (_this.lrtDtoForChallanRet.agentName != null) {
                        _this.challanAgentName = _this.lrtDtoForChallanRet.agentName;
                        _this.challanTotLrsField.nativeElement.focus();
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Alert",
                            text: "This Challan Number: " + _this.enteredChallanNo + " not exists in Challan Issue ",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            $("#challanNo").val('');
                            $("#agentName").val('');
                            _this.controlAgentName.reset();
                            _this.challanNoField.nativeElement.focus();
                        });
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.lrNumberChk = function () {
            _this.lrNumberChkInfo();
            //        console.log( this.lrtDtoForLrCheck );
            _this.masterReadService.addLRNumber(_this.lrtDtoForLrCheck).subscribe(function (response) {
                if (response.length == 0) {
                    //                    alert( '' );
                }
                else {
                    _this.lrtDtoForLrCheckRet = response;
                    _this.lrtDtoForLrCheckSet = _this.lrtDtoForLrCheckRet;
                    //                    console.log( 'this is the status : ' + this.lrtDtoForLrCheckSet.status );
                    if (_this.lrtDtoForLrCheckSet.status == 'exists') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Alert",
                            text: "This LR Number: " + _this.lrtDtoForLrCheck.lrNumber
                                + " already exists",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            $("#lrNumber").val('');
                            window.setTimeout(function () {
                                $('#lrNumber').focus();
                            }, 100);
                            //                            this.lrNumberField.nativeElement.focus();
                        });
                    }
                    else if ((_this.enteredlrNumber == null) || (_this.enteredlrNumber == '') || (_this.enteredlrNumber.length > 7)) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Alert",
                            text: "LR Number Should be not be greater than 7 digit",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            $("#lrNumber").val('');
                            window.setTimeout(function () {
                                $('#lrNumber').focus();
                            }, 100);
                            //                            this.lrNumberField.nativeElement.focus();
                        });
                    }
                    else if (_this.lrtDtoForLrCheckSet.status == 'RangeNotExist') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Alert",
                            text: "This LR Number: " + _this.lrtDtoForLrCheck.lrNumber
                                + " not exists in LRIssue",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            _this.chkLRinLrEntryMissAgt();
                        });
                    }
                    else if (_this.lrtDtoForLrCheckSet.status == "Other'sLr") {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Alert",
                            text: "This LR Number: " + _this.lrtDtoForLrCheck.lrNumber
                                + " is belongs to " + _this.lrtDtoForLrCheckSet.agentName,
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            $("#lrNumber").val('');
                            window.setTimeout(function () {
                                $('#lrNumber').focus();
                            }, 100);
                            //                            this.lrNumberField.nativeElement.focus();
                        });
                    }
                    else {
                        _this.chkLRinLrEntryMissAgt();
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.chkLRinLrEntryMissAgt = function () {
            _this.showGoodsType = false;
            _this.showNewCommodity = false;
            _this.lrNumberChkInfo();
            _this.masterReadService.chkLREntryMissAgent(_this.lrtDtoForLrCheck).subscribe(function (response) {
                if (response.length == 0) {
                    //                    alert( '' );
                    _this.noOfArticlesField.nativeElement.focus();
                }
                else {
                    _this.lrtDtoForMissAgentRet = response;
                    _this.lrtDtoForMissAgentSet = _this.lrtDtoForMissAgentRet;
                    if (_this.lrtDtoForMissAgentSet.status == 'notexists') {
                        //                        dateField.focus(); is pending
                        $("#bookingDate").focus();
                        //                        this.noOfArticlesField.nativeElement.focus();
                    }
                    else if ((_this.lrtDtoForMissAgentSet.status != null) && (_this.lrtDtoForMissAgentSet.status == 'blocked')) {
                        //                        alert( "This LR Number: " + this.lrtDtoForLrCheck.lrNumber
                        //                            + " is Blocked.Contact Booking Administrator" );
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Alert",
                            text: "This LR Number: " + _this.lrtDtoForLrCheck.lrNumber
                                + " is Blocked.Contact Booking Administrator",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            $("#lrNumber").val('');
                            _this.lrNumberField.nativeElement.focus();
                        });
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.validateLrBookingDateGet = function () {
            _this.validateLrBookingDateGetInfo();
            _this.masterReadService.validateLrBookingDate(_this.lrtDtoForValidateBkgDate).subscribe(function (response) {
                if (response.length == 0) {
                    //                    alert( '' );
                }
                else {
                    _this.lrtDtoForValidateBkgDateRet = response;
                    _this.lrtDtoForValidateBkgDateSet = _this.lrtDtoForValidateBkgDateRet;
                    //                    console.log( 'returned Bkg Date :' + this.lrtDtoForValidateBkgDateSet );
                    if (_this.lrtDtoForValidateBkgDateSet.toDayDate != null) {
                        /* this.bookingDateGet = this.lrtDtoForValidateBkgDateSet.toDayDate;
    //                        console.log( 'this si sthe BookingDate: ' + this.bookingDateGet );
                        $( "#bookingDates" ).val( this.bookingDateGet );
                        this.noOfArticlesField.nativeElement.focus();*/
                        //By Kamil
                        _this.bookingDateGet = _this.datePipe.transform(_this.lrtDtoForValidateBkgDateSet.toDayDate, "yyyy-MM-dd");
                        //                        console.log( 'this is the BookingDate Return: ' + this.bookingDateGet );
                        $("#bookingDate").val(_this.bookingDateGet);
                        //this.noOfArticlesField.nativeElement.focus();
                        window.setTimeout(function () {
                            $("#noOfArticles").focus();
                        }, 1000);
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.verifyChallanTotLrs = function (content11) {
            _this.enteredChallanNo = $("#challanNo").val();
            _this.validateLrBookingDateGetInfo();
            _this.masterReadService.verifyChallanTotalLrs(_this.lrtDtoForChallanTotLr).subscribe(function (response) {
                if (response.length == 0) {
                }
                else {
                    _this.lrtDtoForChallanTotLrRet = response;
                    _this.lrtDtoForChallanTotLrRetDto = _this.lrtDtoForChallanTotLrRet;
                    if ((_this.lrtDtoForChallanTotLrRetDto.challanTotLrs != null) && (_this.lrtDtoForChallanTotLrRetDto.challanTotLrs > 0)) {
                        var challanTotLrsGet = _this.lrtDtoForChallanTotLrRetDto.challanTotLrs;
                        var noOfLrsEnteredGet = (_this.lrtDtoForChallanTotLrRetDto.noOfLrs == null ? 0 : _this.lrtDtoForChallanTotLrRetDto.noOfLrs);
                        var balanceLrs = challanTotLrsGet - noOfLrsEnteredGet;
                        if (balanceLrs == 0
                            || balanceLrs < 0) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: "Not Allowed",
                                text: "All the Lrs of Challan Number '" + _this.enteredChallanNo + "' is already entered, please verify the Challan Number!",
                                icon: "warning",
                                closeOnClickOutside: true,
                                closeOnEsc: true,
                            });
                        }
                        else {
                            _this.validateBtnNext(content11);
                        }
                    }
                    else {
                        _this.validateBtnNext(content11);
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.addingLrDetails = function (content11) {
            //                alert( 'ddd' );
            var MainAdminStation = _this.userDataDtoReturnSession.mainAdminStation.toLowerCase();
            _this.showSpinner = true;
            _this.lrtDtoForSave.smsCredential = _this.userDataDtoReturnSession.credentials;
            _this.lrtDtoForSave.companyId = _this.userDataDtoReturnSession.companyId;
            _this.masterReadService.addLRDetails(_this.lrtDtoForSave).subscribe(function (response) {
                if (response.length == 0) {
                    _this.showSpinner = false;
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Alert",
                        text: "Error while Adding Lr details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.isNextLrAllow = true;
                }
                else {
                    _this.showSpinner = false;
                    _this.isNextLrAllow = true;
                    _this.lrDtoSaveRet = response;
                    _this.lrDtoSaveSet = _this.lrDtoSaveRet;
                    //                    console.log( this.lrDtoSaveSet );
                    if (_this.lrDtoSaveSet.status == null || _this.lrDtoSaveSet.status == '') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Alert",
                            text: "Error While Adding LRDetails",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                    else if (_this.lrDtoSaveSet.status != null
                        && (_this.lrDtoSaveSet.status ==
                            "failed")) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Alert",
                            text: "Error While Saving LRDetails",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                    else {
                        //   console.log( '1' );
                        //   console.log( this.isPaidLr );
                        if (((_this.viewByAutoLr == true) && (_this.lrDtoSaveSet.lrNumber != null)) || ((_this.lrCheck == true) && (_this.lrDtoSaveSet.lrNumber != null))) {
                            _this.getAutoLrDetailsInfo(content11);
                            //        console.log( '2' );
                        }
                        else if (_this.isPaidLr) {
                            // adding cashmemo for manual lrs also as per Manoj
                            // req @23/07/2020
                            //     console.log( '4' );
                            _this.isPaidLrForManual = false;
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: "Cash Memo Confirmation",
                                text: "Do you want to Save this LR :" + _this.lrDtoSaveSet.lrNumber + " as PAID LR",
                                icon: "warning",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                                buttons: ["No", "Yes"],
                            }).then(function (manualpaidLr) {
                                if (manualpaidLr) {
                                    _this.isPaidLrForManual = true;
                                    _this.lrDtoForBooking.lrNumber = _this.lrDtoSaveSet.lrNumber;
                                    _this.lrDtoForBooking.mode = 'lrEntry';
                                    localStorage.clear();
                                    //   console.log( this.lrDtoForBooking );
                                    localStorage.setItem('showBkgCashmemo', JSON.stringify(_this.lrDtoForBooking));
                                    _this.modalService.open(content11, { centered: true, windowClass: "myCustomModalClass" });
                                }
                                else {
                                    _this.showformanual();
                                }
                            });
                        }
                        if ((_this.checkAutoLr == false) && (_this.checkAutoLrHold == false) && (_this.isPaidLr) && (!_this.isPaidLrOnly)) {
                            _this.showformanual();
                        }
                        //                        setTimeout(() => 
                        //                        {
                        //                            this.showformanual();
                        //                        },
                        //                        5000);
                        //                        console.log( '111 ' + this.checkAutoLr );
                        //                        console.log( '222 ' + this.checkAutoLrHold );
                        if ((_this.checkAutoLr == false) && (_this.checkAutoLrHold == false) && (!_this.isPaidLr)) {
                            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                                title: "Success",
                                text: "LR Details Saved Successfully",
                                icon: "success",
                                closeOnClickOutside: false,
                                closeOnEsc: false,
                            }).then(function () {
                                _this.clearInputFields();
                                //                              this.destinationField.nativeElement.focus();
                                //                                window.setTimeout( function() {
                                //                                    $( "#destination" ).focus();
                                //                                }, 100 );
                                if (_this.restrictUserGodownList) {
                                    window.setTimeout(function () {
                                        $("#destination").focus();
                                    }, 100);
                                }
                                else if ((_this.userDataDtoReturnSession.mainAdminStation != null)
                                    && (MainAdminStation == 'delhi')
                                    && ((_this.checkAutoLr == true) || (_this.checkAutoLrHold == true))) {
                                    window.setTimeout(function () {
                                        $("#loaderHead").focus();
                                    }, 100);
                                }
                                else if ((_this.userDataDtoReturnSession.mainAdminStation != null)
                                    && (MainAdminStation == 'delhi')
                                    && ((_this.checkAutoLr == false) || (_this.checkAutoLrHold == false))) {
                                    window.setTimeout(function () {
                                        $("#noOfArticles").focus();
                                    }, 100);
                                }
                                else {
                                    window.setTimeout(function () {
                                        $("#destination").focus();
                                    }, 100);
                                }
                            });
                        }
                        _this.lrCount = +_this.lrCount + +1;
                        _this.lblLRCount = true;
                        _this.txtLrCount = "No.Of LRs : " + _this.lrCount;
                        //                        For testing below line is commented Pending
                        //                        this.clearInputFields();
                        $("#finishBtn").prop("disabled", false);
                        //                        this.destinationField.nativeElement.focus();
                        _this.paymentType = $("#paymentType").val();
                        if (_this.paymentType === 'paid') {
                            _this.paymentTypePaid = true;
                        }
                        else {
                            _this.paymentTypePaid = false;
                        }
                        //pending
                        //                        nfDDAmt.clear();
                        //                        if ( radDDNo.getValue() ) {
                        //                            nfDDAmt.setVisible( false );
                        //                            ddAddress.setVisible( false );
                        //                        } else {
                        //                            nfDDAmt.setVisible( true );
                        //                            if ( ( cbAutoLR.getValue() ) || ( lrCheck == true ) ) {
                        //                                ddAddress.setVisible( true );
                        //                            }
                        //                        }
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.getAutoLrDetailsInfo = function (content11) {
            _this.masterReadService.getAutoLrDetails(_this.lrDtoSaveSet).subscribe(function (response) {
                if (response.length == 0) {
                    //                    alert( '' );
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Warning",
                        text: "No Auto Lr Records Found",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.getAutoLrNo();
                }
                else {
                    //                    if ( this.viewAutoLrHold == true ) {
                    //                        console.log('aaa1212');
                    //                        this.getAutomatedLrHoldDetails();
                    //                    } else {
                    //                        this.getAutoLrNo();
                    //                    }
                    _this.resultDtosRet = response;
                    _this.resultDtos = _this.resultDtosRet;
                    if (_this.isPaidLr) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Cash Memo Confirmation",
                            text: "Do you want to Save this LR :" + _this.resultDtos.lrNumber + " as PAID LR",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                            buttons: ["No", "Yes"],
                        }).then(function (paidLr) {
                            if (paidLr) {
                                //                         Pending  Of Booking Cashmemo
                                _this.showBkgCashmemoPaid(content11);
                                //                                this.modalService.open( content11, { centered: true, windowClass : "myCustomModalClass" });
                            }
                            else {
                                _this.setPrintLrs(_this.resultDtos);
                            }
                        });
                    }
                    else {
                        //                        console.log( '???/' );
                        _this.setPrintLrs(_this.resultDtos);
                    }
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.saveNewConsignorDetails = function () {
            _this.saveNewConsignorInfo();
            _this.masterReadService.addConsignorInLrEntry(_this.partyDtoForNewConsignor).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Warning",
                        text: "Error while saving the new Consignor Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    _this.partyDtoForNewConsignorRet = response;
                    _this.partyDtoForNewConsignorSet = _this.partyDtoForNewConsignorRet;
                    if (_this.partyDtoForNewConsignorSet.status == 'exist') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Failure",
                            text: "Consignor Already Exist!",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                    else if (_this.partyDtoForNewConsignorSet.status == 'not persisted') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Failure",
                            text: "Ooops..Problem occur while saving Consignor Details..!",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Success",
                            text: "New Consignor Name added successfully",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        _this.getConsignor();
                    }
                }
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Error",
                text: "Ooops..Problem occur while saving Consignor Details..",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.saveNewConsigneeDetails = function () {
            _this.saveNewConsigneeInfo();
            _this.masterReadService.addConsigneeInLrEntry(_this.partyDtoForNewConsignee).subscribe(function (response) {
                if (response.length == 0) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Warning",
                        text: "Error while saving the new Consignee Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    _this.getAutoLrNo();
                }
                else {
                    _this.partyDtoForNewConsigneeRet = response;
                    _this.partyDtoForNewConsigneeSet = _this.partyDtoForNewConsigneeRet;
                    if (_this.partyDtoForNewConsignorSet.status == 'exist') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Failure",
                            text: "Consignee Already Exist!",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                    else if (_this.partyDtoForNewConsignorSet.status == 'not persisted') {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Failure",
                            text: "Ooops..Problem occur while saving Consignee Details..!",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                    }
                    else {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Success",
                            text: "New Consignee Name added successfully",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        });
                        _this.getConsignee();
                    }
                }
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Error",
                text: "Ooops..Problem occur while saving Consignor Details..",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.getAgentTempoMasterDetailsList = function () {
            _this.getAgentTempoDetailsForRead();
            _this.masterService.getAgentTempoDetails(_this.truckDataDto).subscribe(function (response) {
                if (response) {
                    _this.agentTempoMasterDataList = response;
                    _this.vehicleNumberOptions = _this.agentTempoMasterDataList;
                    _this.vehicleNumberTA = [];
                    for (var i = 0; i < _this.vehicleNumberOptions.length; i++) {
                        _this.vehicleNumberTA.push(_this.vehicleNumberOptions[i].truckNumber);
                    }
                    _this.vehicleNumberOptionsAddNew.truckNumber = 'ADD NEW';
                    _this.vehicleNumberTA.push(_this.vehicleNumberOptionsAddNew.truckNumber);
                    if (_this.selectedTruckNumber != null && _this.selectedTruckNumber != '') {
                        _this.setValuesInVehicle();
                    }
                }
            }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Error",
                text: "Server Error While Getting Truck Master Details",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }); },
                function () { return console.log('done'); };
        };
        this.tempoNumberChk = function () {
            _this.enteredTruckNumber = $("#truckNumber").val();
            _this.truckDataCheckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_19__["TruckDataDto"]();
            _this.truckDataCheckDto.truckNumber = _this.enteredTruckNumber;
            _this.masterService.checkAgentTempoNumber(_this.truckDataCheckDto).subscribe(function (response) {
                _this.truckDataDtoCheckRet = response;
                if (_this.truckDataDtoCheckRet.status == 'exist') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Alert",
                        text: "This Tempo Number: " + _this.truckDataCheckDto.truckNumber
                            + " already exists",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        $("#truckNumber").val('');
                        window.setTimeout(function () {
                            $('#truckNumber').focus();
                        }, 100);
                    });
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        this.saveUpdateAgentTempoDetails = function () {
            _this.getAgentTempoDetailsForSave();
            _this.masterService.createAgentTempo(_this.truckDataDtoSave).
                subscribe(function (data) {
                _this.truckDataDtoSaveRet = data;
                //                console.log( this.truckDataDtoSaveRet.status );
                if (_this.truckDataDtoSaveRet.status == "persisted") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Success",
                        text: "Agent Tempo Details Saved/Updated Successfully",
                        icon: "success",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        _this.selectedTruckNumber = _this.truckDataDtoSave.truckNumber;
                        _this.getAgentTempoMasterDetailsList();
                    });
                }
                else if (_this.truckDataDtoSaveRet.status == "exist") {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Alert",
                        text: "This Tempo Number: " + _this.truckDataDto.truckNumber
                            + " already exists",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        //                        $( "#truckNumber" ).val( '' );
                        window.setTimeout(function () {
                            $('#truckNumber').focus();
                        }, 100);
                    });
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Error",
                        text: "Error While Saving Truck Details",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
            }),
                function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Error",
                    text: "Server Error While Saving Truck Details",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
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
            this.getOffice = this.userDataDtoReturnSession.office;
            //            console.log(this.userDataDtoReturnSession.credentials);
            //for modal starts
            //            this.routeQueryParams$ = route.queryParams.subscribe( params => {
            //                if ( params['dialog'] ) {
            //                    this.showBkgCashmemoPaid();
            //                }
            //            } );
            //            console.log( 'soruce : ' + this.getOffice );
            //            console.log(this.userDataDtoReturnSession.office);
            this.getUserGodownList();
            this.getAgentDetailList();
            this.getLoaderHeadListDetails();
            this.getPackNatureListDetails();
            this.getStateDetails();
            //            this.getCommodityNamesDetails();
            this.getDestinationDetails();
            this.getLrEntrylistBoxCommodity();
            this.showAutoLr = $("#automatedLR").val();
            this.multiArtDetailsTable();
            this.multiPackDetailsTable();
            this.setDefaultCharges();
            this.getAgentTempoMasterDetailsList();
            this.showLrCode = this.userDataDtoReturnSession.isLrCode;
            this.showLrCodeInputFields = this.userDataDtoReturnSession.lrCode;
            this.isLRCode = this.userDataDtoReturnSession.isLrCode;
            //            console.log( 'aaadd ' + this.showLrCodeInputFields, this.isLRCode );
            //                        if ( this.userDataDtoReturnSession.mainAdminStation != null
            //                            && this.userDataDtoReturnSession.mainAdminStation == "MUMBAI" ) {
            //                            this.showLrCode = true;
            //                            this.showLrCodeInputFields = this.userDataDtoReturnSession.autoLRCode;
            //                            this.isLRCode = true;
            //                        } else if ( this.userDataDtoReturnSession.mainAdminStation != null
            //                            && this.userDataDtoReturnSession.mainAdminStation == "GUJARAT" ) {
            //                            this.showLrCode = true;
            //                            this.showLrCodeInputFields = this.userDataDtoReturnSession.autoLRCode;
            //                            this.isLRCode = true;
            //                        }
            ///Rights for show or hide risk charge
            //            if ( this.hideRiskCharge == "Hide Risk Charge" ) {
            //                this.showRiskCharge = false;
            //            } else {
            //                this.showRiskCharge = true;
            //            }
            //            console.log( this.userDataDtoReturnSession.mainAdminStation );
            if (this.userDataDtoReturnSession.mainAdminStation != null
                && this.userDataDtoReturnSession.mainAdminStation == "Bangalore Bkg") {
                this.showRiskCharge = false;
                this.readonlyFOV = false;
                //                console.log( '1' );
            }
            else {
                this.showRiskCharge = true;
                this.readonlyFOV = true;
                //           console.log( '2' );
            }
            //////////////
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "Restrict User Godown List For Agent") {
                        this.restrictUserGodownList = true;
                    }
                }
            }
            if (this.restrictUserGodownList == true) {
                this.defaultGodownName = this.userDataDtoReturnSession.office;
                //   console.log( 'true' );
            }
            else {
                //   console.log( 'false' );
                this.getUserGodownList();
            }
            this.selectTodayArrival();
            this.selectTodayBooking();
            this.selectTodayBill();
        }
    }
    LrEntryFormComponent.prototype.fieldFocus = function (e, el) {
        if (e.keyCode == 13) { // press A
            el.focus();
        }
    };
    LrEntryFormComponent.prototype.agentNames = function () {
        this.vehicleNumberField.nativeElement.focus();
    };
    LrEntryFormComponent.prototype.focusCalendar = function () {
        this.challanNoField.nativeElement.focus();
    };
    /* packNatures(): void {
        this.selectedPackNature = $( "#packNature" ).val();
        if ( ( this.selectedPackNature != null ) && ( this.selectedPackNature != '' ) && ( this.selectedPackNature == 'Multiple Pack' ) ) {
            this.showMultiPackNature = true;
        } else {
            this.showMultiPackNature = false;
            this.consignorGSTNumberField.nativeElement.focus();
        }

    } */
    //By Kamil
    LrEntryFormComponent.prototype.packNatures = function (data, content8) {
        //        this.selectedPackNature = $( "#packNature" ).val();
        this.selectedPackNature = data.packNature;
        if ((this.selectedPackNature != null) && (this.selectedPackNature != '') && (this.selectedPackNature == 'Multiple Pack')) {
            //            this.showMultiPackNature = true;
            this.modalService.open(content8);
            window.setTimeout(function () {
                $("#multiPackNatureNew").focus();
            }, 100);
        }
        else {
            //this.showMultiPackNature = false;
            this.consignorGSTNumberField.nativeElement.focus();
        }
    };
    /* fieldFocusPackNature( e ) {
        if ( e.keyCode == 13 ) {
            this.selectedPackNature = $( "#packNature" ).val();
            if ( ( this.selectedPackNature != null ) && ( this.selectedPackNature != '' ) && ( this.selectedPackNature == 'Multiple Pack' ) ) {
                this.showMultiPackNature = true;
            } else {
                this.showMultiPackNature = false;
                this.consignorGSTNumberField.nativeElement.focus();
            }
        }

    } */
    //By Kamil 
    LrEntryFormComponent.prototype.fieldFocusPackNature = function (e, content8) {
        if (e.keyCode == 13) {
            this.selectedPackNature = $("#packNature").val();
            if ((this.selectedPackNature != null) && (this.selectedPackNature != '') && (this.selectedPackNature == 'Multiple Pack')) {
                this.modalService.open(content8);
                window.setTimeout(function () {
                    $("#multiPackNatureNew").focus();
                }, 100);
            }
            else {
                this.consignorGSTNumberField.nativeElement.focus();
            }
        }
    };
    LrEntryFormComponent.prototype.dd = function () {
        this.ddAmtField.nativeElement.focus();
    };
    LrEntryFormComponent.prototype.loaderFocus = function () {
        this.destinationField.nativeElement.focus();
    };
    LrEntryFormComponent.prototype.logInPage = function () {
        this.router.navigate(['/authentication/login']);
    };
    /* doorDeliMode( doorDelivery: string ) {

        if ( doorDelivery == 'Yes' ) {
            this.doorDeliveryYes = true;
            this.sum();
            this.ddAmtField.nativeElement.focus();

        } else {
            this.doorDeliveryYes = false;
            this.sum();
            this.paymentTypeField.nativeElement.focus();

        }
    } */
    LrEntryFormComponent.prototype.doorDeliMode = function (doorDelivery) {
        if (doorDelivery == 'Yes') {
            this.doorDeliveryYes = true;
            this.doorDeliveryYesddAmt = true;
            this.sum();
            window.setTimeout(function () {
                $("#ddAmt").focus();
            }, 100);
        }
        else {
            this.doorDeliveryYes = false;
            this.doorDeliveryYesddAmt = false;
            this.sum();
            $("#paymentType").focus();
        }
    };
    LrEntryFormComponent.prototype.paymentTypeMode = function (paymentType) {
        if (paymentType === 'paid') {
            this.paymentTypePaid = true;
            this.bankLrField.nativeElement.focus();
        }
        else {
            this.paymentTypePaid = false;
            this.bankLrField.nativeElement.focus();
        }
    };
    //bankLrMode( bankLr: string ) {
    //  if ( bankLr === 'Yes' ) {
    //    this.bankLrYes = true;
    //  this.bankNameField.nativeElement.focus();
    //} else {
    //  this.bankLrYes = false;
    //            this.privateMarkerField.nativeElement.focus();
    //      }
    //    }
    LrEntryFormComponent.prototype.bankLrMode = function (bankLr) {
        if (bankLr === 'Yes') {
            this.bankLrYes = true;
            window.setTimeout(function () {
                $("#bankName").focus();
            }, 100);
        }
        else {
            this.bankLrYes = false;
            $("#privateMarker").focus();
        }
    };
    // the selectToday is the method for  selecting todays'z date
    LrEntryFormComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    LrEntryFormComponent.prototype.selectTodayArrival = function () {
        this.tdyArrivalDate = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
        //  var today = new Date();
        //alert( 'ok today arrivalDate :' + today.getFullYear() + '-' + ( '0' + ( today.getMonth() + 1 ) ).slice( -2 ) + '-' + ( '0' + today.getDate() ).slice( -2 ) );
        // $( '#arrivalDate' ).val(today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2));
        //alert( 'ok arrivalDate :' + this.datePipe.transform( new Date(), "dd-MM-yyyy" ) );
        //document.getElementById( 'bookingDate' ).valueAsDate = this.datePipe.transform( new Date(), "dd-MM-yyyy" );
        //$( '#arrivalDate' ).val( this.datePipe.transform( new Date(), "dd-MM-yyyy" ) );
        //        $('#arrivalDate').datepicker('setDate', this.datePipe.transform( new Date(), "dd-MM-yyyy" ));
        //        const element = document.getElementById( 'arrivalDate' ) as HTMLInputElement;
        //        element.valueAsDate = new Date();
        //document.getElementById( 'arrivalDate' ).innerHTML = Date();
    };
    LrEntryFormComponent.prototype.selectTodayBooking = function () {
        // alert( 'ok :' + this.datePipe.transform( new Date(), "dd-MM-yyyy" ) );
        //document.getElementById( 'bookingDate' ).valueAsDate = this.datePipe.transform( new Date(), "dd-MM-yyyy" );
        //$( '#bookingDate' ).val( this.datePipe.transform( new Date(), "dd-MM-yyyy" ) );
        this.tdyBookingDate = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    LrEntryFormComponent.prototype.selectTodayBill = function () {
        this.tdyBillDate = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for popup modal starts 
    LrEntryFormComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEntryFormComponent.prototype.open9 = function (content9) {
        var _this = this;
        this.modalService.open(content9, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEntryFormComponent.prototype.open10 = function (content10) {
        var _this = this;
        this.modalService.open(content10, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEntryFormComponent.prototype.open12 = function (content12) {
        var _this = this;
        this.modalService.open(content12, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEntryFormComponent.prototype.getDismissReason = function (reason) {
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
    //for popup modal ends 
    //don't now what is used for 
    LrEntryFormComponent.prototype.openBackDropCustomClass = function (content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    };
    LrEntryFormComponent.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    LrEntryFormComponent.prototype.openSm = function (content) {
        this.modalService.open(content, { size: 'sm' });
    };
    LrEntryFormComponent.prototype.openLg = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    LrEntryFormComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    LrEntryFormComponent.prototype.getUserValuesForUserGodownList = function () {
        this.lrDtoParam.city = this.userDataDtoReturnSession.mainAdminStation;
        this.lrDtoParam.companyId = this.userDataDtoReturnSession.companyId;
    };
    LrEntryFormComponent.prototype.getUserGodownList = function () {
        var _this = this;
        this.getUserValuesForUserGodownList();
        this.masterReadService.getSubBookingStationDetailsService(this.lrDtoParam).subscribe(function (response) {
            _this.lrDtosUserGodownOptions = response;
            //                console.log( 'user godown : ' + this.lrDtosUserGodownOptions );
            _this.userGodownTA = [];
            for (var i = 0; i < _this.lrDtosUserGodownOptions.length; i++) {
                //console.log( this.agentDetailsOptionsGet[i].subStation );
                _this.userGodownTA.push(_this.lrDtosUserGodownOptions[i].subStations);
            }
            _this.defaultGodownName = _this.userDataDtoReturnSession.mainStation.toUpperCase();
        }),
            function (error) { return console.log(error.json()); },
            function () { return console.log('done'); };
    };
    //for Getting Agent
    LrEntryFormComponent.prototype.getUserValuesForAgentDetailsList = function () {
        this.agentDtoParam.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        this.agentDtoParam.column2 = 'Working';
        this.agentDtoParam.companyId = this.userDataDtoReturnSession.companyId;
        this.agentDtoParam.mode = 'Sub';
    };
    LrEntryFormComponent.prototype.getAgentDetailList = function () {
        var _this = this;
        this.getUserValuesForAgentDetailsList();
        this.masterReadService.getSourceListDetails(this.agentDtoParam).subscribe(function (response) {
            if (response.length == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Warning",
                    text: "No Agents  records found!",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                _this.controlAgentName.reset();
                //                    this.agentDetailsOptionsGet = [];
                //                    this.agentDtoAll.subStation = "Add New";
                //                    this.agentDetailsOptionsGet.push( this.agentDtoAll );
            }
            else {
                _this.agentDetailsOptionsGet = response;
                _this.agentDetailsOptionsSet = response;
                //                    this.agentDtoAll = this.agentDetailsOptionsSet;
                //                    console.log( this.agentDtoAll );
                //                    if ( this.agentDtoAll.status == 'success' ) {
                //                        swal( {
                //                            title: "Warning",
                //                            text: "No Agents  records found!",
                //                            icon: "warning",
                //                            closeOnClickOutside: false,
                //                            closeOnEsc: false,
                //                        } );
                //                    }
                //                    this.agentDtoAll.subStation = "Add New";
                //                    this.agentDetailsOptionsGet.push( this.agentDtoAll );
                _this.agentNameTA = [];
                for (var i = 0; i < _this.agentDetailsOptionsGet.length; i++) {
                    //console.log( this.agentDetailsOptionsGet[i].subStation );
                    _this.agentNameTA.push(_this.agentDetailsOptionsGet[i].subStation);
                }
            }
        }),
            function (error) { return console.log(error.json()); },
            function () { return console.log('done'); };
    };
    //for loader Head 
    LrEntryFormComponent.prototype.getLoaderHeadList = function () {
        // this.hireDto.mainStation = this.userDataDtoReturnSession.mainStation;
        this.hireDto.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        this.hireDto.companyid = this.userDataDtoReturnSession.companyId;
        //        console.log( 'mainstation has :' + this.hireDto.mainStation )
    };
    //Fort Pack Natature
    LrEntryFormComponent.prototype.getPackNatureList = function () {
        this.hireDtopackNature.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        this.hireDtopackNature.companyid = this.userDataDtoReturnSession.companyId;
    };
    //    getCommodityNamesDetailsList() {
    //        this.commodityRateDto.mainStation = this.userDataDtoReturnSession.mainAdminStation;
    //        this.commodityRateDto.companyId = this.userDataDtoReturnSession.companyId;
    //
    //    }
    //
    //
    //    getCommodityNamesDetails = () => {
    //        this.getCommodityNamesDetailsList();
    //        this.masterReadService.getCommodityNamesDetails( this.commodityRateDto ).subscribe(
    //            ( response ) => {
    //                if ( response.length == 0 ) {
    //                    alert( 'No records found!' );
    //                } else {
    //                    // having issue due to different dto
    //
    //                    this.commodityDescriptionOptions = response;
    //                    this.commodityRateDtoAdd.commodityName = "NA";
    //                    this.commodityDescriptionOptions.push( this.commodityRateDtoAdd );
    //
    //                }
    //            } ),
    //            ( error ) => console.log( error.json() ),
    //            () => console.log( 'done' );
    //    };
    LrEntryFormComponent.prototype.open1 = function (content1) {
        var _this = this;
        this.modalService.open(content1, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    //
    LrEntryFormComponent.prototype.getAgentName = function (e) {
        this.showCont1 = $("#content1").val();
        if (e.keyCode == 13) {
            this.selectedAgentName = $("#agentName").val();
            if (this.selectedAgentName != null && this.selectedAgentName == 'Add New') {
                //                this.open1( this.showCont1 );
                //                this.lblAddAgent = true;
                //Pending Adding Agent has been removed 
            }
            else {
                this.vehicleNumberField.nativeElement.focus();
            }
        }
    };
    //For Getting Consignor Details
    LrEntryFormComponent.prototype.getConsignorGstNumber = function (e) {
        if (e.keyCode == 13) {
            this.selectedconsignorGSTNumber = $("#consignorGSTNumber").val();
            //            console.log( this.selectedconsignorGSTNumber );
            if (this.selectedconsignorGSTNumber != null && this.selectedconsignorGSTNumber != '') {
                this.getConsignorDetails();
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Warning",
                    text: "Please Enter the Consignor GST number",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    $("#consignorGSTNumber").focus();
                });
                this.consignorOptions = [];
                this.consignorOptionsRet = this.consignorOptions;
                this.consignorOptionsAdd.consignorName = "Add New";
                this.consignorOptions.push(this.consignorOptionsAdd);
                $("#consignorName").val('');
                $("#consignorAddress").val('');
            }
        }
    };
    LrEntryFormComponent.prototype.getConsignorDetailsList = function () {
        $("#consignorName").val('');
        $("#consignorAddress").val('');
        this.selectedconsignorGSTNumber = $("#consignorGSTNumber").val();
        this.partyMasterDtoForconsignor = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyMasterDtoForconsignor.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        this.partyMasterDtoForconsignor.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignor.isGST = true;
        this.partyMasterDtoForconsignor.mode = "LREntry";
        this.partyMasterDtoForconsignor.gstNoConsignor = this.selectedconsignorGSTNumber;
    };
    //  rowSelectedConsignor( consignorName ) {
    //        $( "#consignorAddress" ).val( consignorName.address );
    //        this.selectedConsignorId = consignorName.consignorId;
    //        //        this.consigneeGSTNumberField.nativeElement.focus();
    //        this.selectedconsigneeGSTNumber = $( "#consigneeGSTNumber" ).val();
    //        this.selectedConsignorName = consignorName.consignorName;
    //
    //        if ( this.selectedConsignorName != null && this.selectedConsignorName == "Add New" ) {
    //            this.lblNewConsignor = true;
    //        } else {
    //            if ( ( this.selectedConsignorName != null ) && ( this.selectedConsignorName != "" ) && ( this.selectedConsignorName != "ALL" ) ) {
    //                this.consigneeGSTNumberField.nativeElement.focus();
    //            }
    //        }
    //    }
    //    rowSelectedConsignor( consignorName, content9 ) {
    //
    //        $( "#consignorAddress" ).val( consignorName.address );
    //        this.selectedConsignorId = consignorName.consignorId;
    //        //        this.consigneeGSTNumberField.nativeElement.focus();
    //        this.selectedconsigneeGSTNumber = $( "#consigneeGSTNumber" ).val();
    //        this.selectedConsignorName = consignorName.consignorName;
    //
    //        if ( this.selectedConsignorName != null && this.selectedConsignorName == "Add New" ) {
    //
    //            this.modalService.open( content9, { centered: true } );
    //            this.setValueForConsignor();
    //            $( "#newConsignor" ).focus();
    //
    //            //            this.lblNewConsignor = true;
    //        } else {
    //            if ( ( this.selectedConsignorName != null ) && ( this.selectedConsignorName != "" ) && ( this.selectedConsignorName != "ALL" ) ) {
    //                this.consigneeGSTNumberField.nativeElement.focus();
    //            }
    //        }
    //    }
    LrEntryFormComponent.prototype.rowSelectedConsignor = function (e, content9) {
        this.modelConsignorName = e.item;
        this.selectedConsignorName = this.modelConsignorName.consignorName;
        $("#consignorAddress").val(this.modelConsignorName.address);
        this.selectedConsignorId = this.modelConsignorName.consignorId;
        //        this.consigneeGSTNumberField.nativeElement.focus();
        this.selectedconsigneeGSTNumber = $("#consigneeGSTNumber").val();
        //      console.log( this.selectedConsignorId, this.modelConsignorName.address );
        if (this.selectedConsignorName != null && this.selectedConsignorName == "Add New") {
            this.modalService.open(content9, { centered: true });
            this.setValueForConsignor();
            $("#newConsignor").focus();
            //            this.lblNewConsignor = true;
        }
        else {
            if ((this.selectedConsignorName != null) && (this.selectedConsignorName != "") && (this.selectedConsignorName != "ALL")) {
                //                this.consigneeGSTNumberField.nativeElement.focus();
                window.setTimeout(function () {
                    $("#consigneeGSTNumber").focus();
                }, 100);
            }
        }
    };
    //For Getting Consignee Details
    LrEntryFormComponent.prototype.getConsigneeGstNumber = function (e) {
        if (e.keyCode == 13) {
            this.selectedconsigneeGSTNumber = $("#consigneeGSTNumber").val();
            if (this.selectedconsigneeGSTNumber != null && this.selectedconsigneeGSTNumber != '') {
                this.getConsigneeDetails();
                //                 
            }
            else {
                if (this.selectedconsigneeGSTNumber == null && this.selectedconsigneeGSTNumber == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Warning",
                        text: "Please Enter the Consignee GST number",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        $("#consigneeGSTNumber").focus();
                    });
                    this.consigneeOptions = [];
                    this.consigneeOptionsRet = this.consigneeOptions;
                    this.consigneeTA = [];
                }
                //                for ( let i = 0; i < this.consigneeOptionsRet.length; i++ ) {
                //                    this.consigneeTA.push( this.consigneeOptionsRet[i] );
                //                }
                //                this.consigneeOptionsAdd.consigneeName = "Add New"
                //                this.consigneeTA.push( this.consigneeOptionsAdd );
                $("#consigneeAddress").val('');
                $("#consigneeName").val('');
            }
        }
    };
    LrEntryFormComponent.prototype.getConsigneeDetailsList = function () {
        $("#consigneeAddress").val('');
        $("#consigneeName").val('');
        this.selectedconsigneeGSTNumber = $("#consigneeGSTNumber").val();
        this.selectedDestination = $("#destination").val();
        this.commaSplitDest = this.selectedDestination.split("-");
        this.destSplit = this.commaSplitDest[0];
        this.stateByDest = this.commaSplitDest[1];
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyMasterDtoForconsignee.office = this.destSplit;
        this.partyMasterDtoForconsignee.companyId = this.userDataDtoReturnSession.companyId;
        this.partyMasterDtoForconsignee.isGST = true;
        this.partyMasterDtoForconsignee.mode = "Tinnumber";
        this.partyMasterDtoForconsignee.gstNoConsignee = this.selectedconsigneeGSTNumber;
        //        console.log( 'sss' + this.partyMasterDtoForconsignee );
    };
    ///For GoodsType On Loading Get the Data
    LrEntryFormComponent.prototype.getLrEntrylistBoxCommodityInfo = function () {
        this.goodsCommdityRateDto.companyId = this.userDataDtoReturnSession.companyId;
        this.goodsCommdityRateDto.mode = "lrEdit";
    };
    ////For getting Destinations List
    LrEntryFormComponent.prototype.getDestinationDetailsList = function () {
        this.lrDtoDest.branch = this.userDataDtoReturnSession.office;
        this.lrDtoDest.mode = "LrForm";
        this.lrDtoDest.companyId = this.userDataDtoReturnSession.companyId;
    };
    ///On Selection Of Consignee name
    //  rowSelectedConsignee( consigneeName ) {
    //
    //        this.selectedConsignee = consigneeName.consigneeName;
    //        this.selectedConsigneeId = consigneeName.consigneeId;
    //        $( "#consigneeAddress" ).val( consigneeName.address );
    //
    //        if ( this.selectedConsignee != null && this.selectedConsignee == "Add New" ) {
    //            this.lblNewConsignee = true;
    //
    //            //pending adding new Consignee is Pending
    //        } else {
    //            if ( ( this.selectedConsignee != null ) && ( this.selectedConsignee != "" ) && ( this.selectedConsignee != "ALL" ) ) {
    //                this.getBangaloreConsigneeCommodityConsignee();
    //                this.partyGoodsTypeField.nativeElement.focus();
    //            }
    //        }
    //    }
    //    rowSelectedConsignee( consigneeName, content10 ) {
    //
    //        this.selectedConsignee = consigneeName.consigneeName;
    //        this.selectedConsigneeId = consigneeName.consigneeId;
    //        $( "#consigneeAddress" ).val( consigneeName.address );
    //        // basha Pending ispaidLr
    //        this.isPaidLrOnly = consigneeName.isPaidOnly;
    //        console.log( this.isPaidLrOnly );
    //
    //        if ( this.selectedConsignee != null && this.selectedConsignee == "Add New" ) {
    //            //            this.lblNewConsignee = true;
    //            this.modalService.open( content10, { centered: true } );
    //            this.setValueForConsignee();
    //            $( "#newConsignee" ).focus();
    //
    //            //pending adding new Consignee is Pending
    //        } else {
    //            if ( ( this.selectedConsignee != null ) && ( this.selectedConsignee != "" ) && ( this.selectedConsignee != "ALL" ) ) {
    //                this.getBangaloreConsigneeCommodityConsignee();
    //                //this.partyGoodsTypeField.nativeElement.focus();
    //                window.setTimeout( function() {
    //                    $( "#partyCommodity" ).focus();
    //                }, 100 );
    //            }
    //        }
    //    }
    LrEntryFormComponent.prototype.rowSelectedConsignee = function (e, content10) {
        this.modelConsigneeName = e.item;
        //   console.log(this.modelConsigneeName);
        this.selectedConsignee = this.modelConsigneeName.consigneeName;
        this.selectedConsigneeId = this.modelConsigneeName.consigneeId;
        $("#consigneeAddress").val(this.modelConsigneeName.address);
        // basha Pending ispaidLr
        this.isPaidLrOnly = this.modelConsigneeName.isPaidOnly;
        //   console.log( this.isPaidLrOnly,this.modelConsigneeName.consigneeId,this.modelConsigneeName.consigneeName);
        if (this.selectedConsignee != null && this.selectedConsignee == "Add New") {
            //            this.lblNewConsignee = true;
            this.modalService.open(content10, { centered: true });
            this.setValueForConsignee();
            $("#newConsignee").focus();
            //pending adding new Consignee is Pending
        }
        else {
            if ((this.selectedConsignee != null) && (this.selectedConsignee != "") && (this.selectedConsignee != "ALL")) {
                this.getBangaloreConsigneeCommodityConsignee();
                //this.partyGoodsTypeField.nativeElement.focus();
                window.setTimeout(function () {
                    $("#partyCommodity").focus();
                }, 100);
            }
        }
    };
    //For getting the main Commodity of Consignee 
    LrEntryFormComponent.prototype.getBangaloreConsigneeCommodityConsigneeInfo = function () {
        this.selectedDestination = $("#destination").val();
        this.selectedconsigneeGSTNumber = $("#consigneeGSTNumber").val();
        this.commaSplitDest = this.selectedDestination.split("-");
        this.destSplit = this.commaSplitDest[0];
        this.stateByDest = this.commaSplitDest[1];
        this.selectedAgentName = $("#agentName").val();
        this.partyDtoForConsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyDtoForConsignee.consigneeName = this.selectedConsignee;
        this.partyDtoForConsignee.consigneeId = this.selectedConsigneeId;
        this.partyDtoForConsignee.mode = "bangaloreSpecificConsigneeCommdity";
        this.partyDtoForConsignee.city = this.destSplit;
        this.partyDtoForConsignee.state = this.stateByDest;
        this.partyDtoForConsignee.gstNoConsignee = this.selectedconsigneeGSTNumber;
        this.partyDtoForConsignee.subStation = this.selectedAgentName;
        this.partyDtoForConsignee.companyId = this.userDataDtoReturnSession.companyId;
    };
    LrEntryFormComponent.prototype.getBangaloreAllCommodityConsigneeInfo = function () {
        this.selectedDestination = $("#destination").val();
        this.commaSplitDest = this.selectedDestination.split("-");
        this.destSplit = this.commaSplitDest[0];
        this.stateByDest = this.commaSplitDest[1];
        this.selectedAgentName = $("#agentName").val();
        this.partyDtoForConsigneeAllCom = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyDtoForConsigneeAllCom.mode = "bangaloreAllCommodityLREntry";
        this.partyDtoForConsigneeAllCom.state = this.stateByDest;
        this.partyDtoForConsigneeAllCom.subStation = this.selectedAgentName;
        this.partyDtoForConsigneeAllCom.consigneeId = this.selectedConsigneeId;
        this.partyDtoForConsigneeAllCom.companyId = this.userDataDtoReturnSession.companyId;
    };
    /// for getting Consignee Address For btn change of Consignee Address
    LrEntryFormComponent.prototype.changeAddress = function () {
        this.getConsigneeAddress();
    };
    LrEntryFormComponent.prototype.getConsigneeAddressInfo = function () {
        this.selectedConsignee = $("#consigneeName").val();
        this.selectedDestination = $("#destination").val();
        this.selectedConsigneeAddress = $("#consigneeAddress").val();
        this.selectedconsigneeGSTNumber = $("#consigneeGSTNumber").val();
        this.commaSplitDest = this.selectedDestination.split("-");
        this.destSplit = this.commaSplitDest[0];
        this.stateByDest = this.commaSplitDest[1];
        this.selectedAgentName = $("#agentName").val();
        this.consigneeAddressPartyDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.consigneeAddressPartyDto.destination = this.destSplit;
        this.consigneeAddressPartyDto.gstNoConsignee = this.selectedconsigneeGSTNumber;
        this.consigneeAddressPartyDto.consigneeName = this.selectedConsignee;
        this.consigneeAddressPartyDto.address = this.selectedConsigneeAddress;
        this.consigneeAddressPartyDto.mode = "updateAddressGST";
        this.consigneeAddressPartyDto.consigneeId = this.selectedConsigneeId;
        this.consigneeAddressPartyDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    //    partyGoodsTypes(): void {
    //        this.subCommodityField.nativeElement.focus();
    //        this.showMainCommodity = true;
    //    }
    ///For Selecting the Main Commodity
    /* rowSelectedPartyCom( commodity ) {
        this.selectedPartyCommodity = commodity.multipleCommodity;
        //        console.log(this.selectedPartyCommodity);
        if ( this.selectedPartyCommodity != null && this.selectedPartyCommodity == "Add New" ) {
            this.showGoodsType = true;
            this.statusOfCommodity = "forGlobalCommodityListBng";
            this.getBangaloreAllCommodityConsignee();
            this.goodsTypeField.nativeElement.focus();

        } else {
            this.showGoodsType = false;
            this.subCommodityField.nativeElement.focus();
        }

    }*/
    //By Kamil
    //    rowSelectedPartyCom( commodity, e ) {
    //        if ( e.keyCode == 13 ) {
    //            this.selectedPartyCommodity = commodity;
    //            //        console.log(this.selectedPartyCommodity);
    //            if ( this.selectedPartyCommodity != null && this.selectedPartyCommodity == "Add New" ) {
    //                this.showGoodsType = true;
    //                this.goodsTypeCommdityOptions = '';
    //                this.goodsTypeTA = [];
    //                this.statusOfCommodity = "forGlobalCommodityListBng";
    //                this.getBangaloreAllCommodityConsignee();
    //                //this.goodsTypeField.nativeElement.focus();
    //                window.setTimeout( function() {
    //                    $( "#goodsType" ).focus();
    //                }, 100 );
    //            } else {
    //                this.showGoodsType = false;
    //                //this.subCommodityField.nativeElement.focus();
    //                window.setTimeout( function() {
    //                    $( "#subCommodity" ).focus();
    //                }, 100 );
    //            }
    //        }
    //    }
    ///for selecting the Goods Type
    /* rowSelectedGooodsType( commodity ) {
        this.selectedGoodsTypeCommodity = commodity.multipleCommodity;

        if ( this.selectedGoodsTypeCommodity != null && this.selectedGoodsTypeCommodity == "Add New" ) {
            this.showNewCommodity = true;
            this.newCommodityField.nativeElement.focus();
        } else {
            this.showNewCommodity = false;
            this.subCommodityField.nativeElement.focus();
        }

    }*/
    //By Kamil
    LrEntryFormComponent.prototype.rowSelectedGooodsType = function (e) {
        if (e.keyCode == 13) {
            this.selectedGoodsTypeCommodity = $("#goodsType").val();
            if (this.selectedGoodsTypeCommodity != null && this.selectedGoodsTypeCommodity == "Add New") {
                this.showNewCommodity = true;
                //this.newCommodityField.nativeElement.focus();
                window.setTimeout(function () {
                    $("#newCommodity").focus();
                }, 100);
            }
            else {
                this.showNewCommodity = false;
                window.setTimeout(function () {
                    $("#subCommodity").focus();
                }, 100);
                //window.setTimeout( function() {
                //  $( "#actualWeight" ).focus();
                //}, 100 );
                //this.subCommodityField.nativeElement.focus();
            }
        }
    };
    ///Checkbox of Auto Lr On Click
    LrEntryFormComponent.prototype.toggleEditableForAutoLr = function (event) {
        if (event.target.checked) {
            this.getAutoLrNo();
            this.viewAutoLr = true;
            this.viewByAutoLr = true;
            this.viewAutoLrHold = false;
            this.checkAutoLr = true;
            this.clearInputFields();
            $("#destination").val('');
            this.showEDeclarationId = false;
            $("#doorDeliveryMode").val('No');
            this.doorDeliveryYes = false;
            this.doorDeliveryYesddAmt = false;
            if (this.restrictUserGodownList) {
                this.showLoader = false;
            }
        }
        else {
            this.viewAutoLr = true;
            this.viewByAutoLr = false;
            this.viewAutoLrHold = true;
            this.checkAutoLr = false;
            this.clearInputFields();
            $("#destination").val('');
            this.showEDeclarationId = false;
            $("#doorDeliveryMode").val('No');
            this.doorDeliveryYes = false;
            this.doorDeliveryYesddAmt = false;
            if (!this.restrictUserGodownList) {
                this.showLoader = true;
            }
        }
    };
    LrEntryFormComponent.prototype.getAutoLrNoInfo = function () {
        this.lrtDtoForAutoLr = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrtDtoForAutoLr.mainstation = this.userDataDtoReturnSession.mainAdminStation;
        this.lrtDtoForAutoLr.companyId = this.userDataDtoReturnSession.companyId;
        $("#autoLrNumber").val('');
    };
    //check Box of Auto Lr Hold When Clicked
    LrEntryFormComponent.prototype.toggleEditableForAutoLrHold = function (event) {
        if (event.target.checked) {
            this.getAutomatedLrHoldDetails();
            this.userName = this.userDataDtoReturnSession.userId;
            this.viewAutoLr = false;
            this.viewByAutoLr = true;
            this.viewAutoLrHold = true;
            this.checkAutoLrHold = true;
            this.clearInputFields();
            $("#destination").val('');
            this.showEDeclarationId = false;
            $("#doorDeliveryMode").val('No');
            this.doorDeliveryYes = false;
            this.doorDeliveryYesddAmt = false;
            if (this.restrictUserGodownList) {
                this.showLoader = false;
            }
        }
        else {
            this.viewAutoLr = true;
            this.viewByAutoLr = false;
            this.viewAutoLrHold = true;
            this.checkAutoLrHold = false;
            this.clearInputFields();
            $("#destination").val('');
            this.showEDeclarationId = false;
            $("#doorDeliveryMode").val('No');
            this.doorDeliveryYes = false;
            this.doorDeliveryYesddAmt = false;
            if (!this.restrictUserGodownList) {
                this.showLoader = true;
            }
        }
    };
    //for modal starts For Lr Hold Details
    LrEntryFormComponent.prototype.getAutomatedLrHoldDetails = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_lr_entry_automatedlrhold_lr_entry_popup_automatedlrhold_lr_entry_popup_component__WEBPACK_IMPORTED_MODULE_15__["AutomatedLrHoldLrEntryPopupComponent"], {
            data: { listOfDataToPass: this.userName }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getLrHoldDatafromLocalStorage(); // Pending
            _this.router.navigate(['.'], { relativeTo: _this.route });
        });
    };
    LrEntryFormComponent.prototype.getLrHoldDatafromLocalStorage = function () {
        ///pending
        this.lrHold = localStorage.getItem('lrEntry');
        //        console.log( 'hold :' + this.lrHold );
        localStorage.clear();
        if (this.lrHold != null && this.lrHold != '') {
            $("#autoLrNumber").val(this.lrHold);
            this.lrCheck = true;
            this.noOfArticlesField.nativeElement.focus();
        }
    };
    ////calculation Starts From here
    ///CalculateDDAmountRange
    LrEntryFormComponent.prototype.calculateDDAmountRangeToValidate = function () {
        this.enteredChargeWeight = $("#chargedWeight").val();
        this.ddAmtRange = 0.0;
        this.enterdChgWgt = this.enteredChargeWeight;
        this.ddAmtSys = (this.userDataDtoReturnSession.ddMinPercOnLr * this.enterdChgWgt);
        //        console.log( '1 : ' + this.userDataDtoReturnSession.ddMinPercOnLr );
        //        console.log( '2 : ' + this.enterdChgWgt );
        //        console.log( '3 : ' + this.ddAmtSys );
        if (this.ddAmtSys < this.userDataDtoReturnSession.ddMinAmtOnLr) {
            //            console.log( '4' + this.ddAmtSys );
            this.ddAmtRange = this.userDataDtoReturnSession.ddMinAmtOnLr;
        }
        else {
            //            console.log( '5' + this.ddAmtSys );
            this.ddAmtRange = this.ddAmtSys;
        }
        //        console.log( 'ddRange' + this.ddAmtRange );
        return this.ddAmtRange;
    };
    LrEntryFormComponent.prototype.fovRateSetupValidationInfo = function () {
        this.selectedPartyCommodity = $("#partyCommodity").val();
        this.selectedAgentName = $("#agentName").val();
        this.selectedDestination = $("#destination").val();
        this.commaSplitDest = this.selectedDestination.split("-");
        this.destSplit = this.commaSplitDest[0];
        this.lrtDtoForFovRate = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrtDtoForFovRate.companyId = this.userDataDtoReturnSession.companyId;
        this.lrtDtoForFovRate.consigneeId = this.selectedConsigneeId;
        this.lrtDtoForFovRate.consignorId = this.selectedConsignorId;
        this.lrtDtoForFovRate.destination = this.destSplit;
        this.lrtDtoForFovRate.commodityName = this.selectedPartyCommodity;
        if (this.viewByAutoLr == true || this.lrCheck == true) {
            this.lrtDtoForFovRate.source = this.userDataDtoReturnSession.mainStation;
        }
        else {
            this.lrtDtoForFovRate.source = this.selectedAgentName;
        }
    };
    ///Calculating the risk charge
    LrEntryFormComponent.prototype.calculateRiskCharge = function () {
        ///Double value pending for    this.goodsValue
        this.enteredGoodsValue = $("#goodsValue").val();
        this.goodsValue = this.enteredGoodsValue == null ? 0.0 : this.enteredGoodsValue == '' ? 0.0
            : this.enteredGoodsValue;
        this.riskPerc = 0.0, this.riskChg = 0.0;
        $("#fov").val('');
        if (this.isFOVRateSet) {
            this.riskPerc = this.fovChg;
        }
        else {
            /// we are recevig the fovPerc form backend by basha 
            this.riskPerc = this.validateAndReturnPercV2();
            //            console.log( 'the Risk perc :' + this.riskPerc )
            // new logic based on date 24/10/2019
        }
        this.riskChg = (this.goodsValue * this.riskPerc) / 100;
        //                console.log( 'this is the risk chrg :' + this.riskChg );
        $("#fov").val(Math.round(this.riskChg));
        this.sum();
    };
    //    validateAndReturnPercV2() {
    //        this.riskPerc = 0.0;
    //        this.riskPerc = this.userDataDtoReturnSession.fovPerc;
    //        return this.riskPerc;
    //    }
    LrEntryFormComponent.prototype.validateAndReturnPercV2 = function () {
        this.riskPerc = 0.0;
        var MainAdminStation = this.userDataDtoReturnSession.mainAdminStation.toLowerCase();
        var office = this.userDataDtoReturnSession.office.toLowerCase();
        this.selectedDestination = $("#destination").val();
        if (this.selectedDestination != null && this.selectedDestination != '') {
            this.commaSplitDest = this.selectedDestination.split("-");
            this.destSplit = this.commaSplitDest[0];
            this.selectedDestination = this.destSplit.toLowerCase();
            this.selectedDestination = this.selectedDestination.trim();
        }
        else {
            this.selectedDestination = this.selectedDestination;
        }
        //      console.log( this.selectedDestination );
        if (MainAdminStation != null
            && (MainAdminStation == 'gujarat')) {
            // riskPerc = 0.1;
            // changed on 20/07/2019 w.e.f 21/07/2019
            // @09/09/2020
            // from Gujarat to chennai - no fov as per Manoj mail
            // also for Jamnagar (Dhared - JM,Udyog Nagar - JM) fov 0.1% except
            // chennai
            if (this.selectedDestination != null && this.selectedDestination != '' && this.selectedDestination == 'chennai') {
                this.riskPerc = 0.0;
            }
            else if (office != null
                && ((office == 'dhared - jm') || (office == 'udyog nagar - jm'))) {
                this.riskPerc = 0.1;
            }
            else {
                this.riskPerc = 0.2;
            }
        }
        else if (MainAdminStation != null
            && MainAdminStation == 'mumbai') {
            this.riskPerc = 0.25;
        }
        else if (MainAdminStation != null
            && MainAdminStation == 'delhi') {
            this.riskPerc = 0.3;
        }
        else if (MainAdminStation != null
            && MainAdminStation == 'nagpur') {
            this.riskPerc = 0.0;
        }
        else if (MainAdminStation != null
            && MainAdminStation == 'rajasthan') {
            // @09/09/2020
            // from RAJASTHAN to chennai - no fov as per Manoj mail
            if (this.selectedDestination != null && this.selectedDestination != '' && this.selectedDestination == 'chennai') {
                this.riskPerc = 0.0;
            }
            else {
                this.riskPerc = 0.2;
            }
        }
        else if (MainAdminStation != null
            && MainAdminStation == 'bangalore bkg') {
            this.riskPerc = 0.2;
        }
        //      console.log( this.riskPerc );
        return this.riskPerc;
    };
    LrEntryFormComponent.prototype.sum = function () {
        this.baseFreight = $("#baseFreight").val();
        this.hamali = $("#hamali").val();
        this.gcCharge = $("#gcCharge").val();
        this.lcCharge = $("#lcCharge").val();
        this.bcCharge = $("#bcCharge").val();
        this.aocCharge = $("#aocCharge").val();
        this.others = $("#others").val();
        this.ddAmt = $("#ddAmt").val();
        this.enteredRiskChg = $("#fov").val();
        this.entereCODCharge = this.setCodCharge;
        //        console.log( this.baseFreight );
        this.totalAmt = (+(this.baseFreight == null ? 0.0 : this.baseFreight == '' ? 0.0 : this.baseFreight)
            + +(this.hamali == null ? 0.0 : this.hamali == '' ? 0.0 : this.hamali)
            + +(this.gcCharge == null ? 0.0 : this.gcCharge == '' ? 0.0 : this.gcCharge)
            + +(this.lcCharge == null ? 0.0 : this.lcCharge == '' ? 0.0 : this.lcCharge)
            + +(this.bcCharge == null ? 0.0 : this.bcCharge == '' ? 0.0 : this.bcCharge)
            + +(this.aocCharge == null ? 0.0 : this.aocCharge == '' ? 0.0 : this.aocCharge)
            + +(this.others == null ? 0.0 : this.others == '' ? 0.0 : this.others)
            + +(this.ddAmt == null ? 0.0 : this.ddAmt == '' ? 0.0 : this.ddAmt)
            + +(this.enteredRiskChg == null ? 0.0 : this.enteredRiskChg == '' ? 0.0 : this.enteredRiskChg)
            + +(this.entereCODCharge == null ? 0.0 : this.entereCODCharge == '' ? 0.0 : this.entereCODCharge));
        $("#totalAmount").val(this.totalAmt);
        // @Removed AOC calculation as per Manoj req
        // @Dated : 10/08/2017
        // getAocCalculation();
    };
    LrEntryFormComponent.prototype.validAmtWitChgWt = function () {
        this.paymentType = $("#paymentType").val();
        this.enteredTotalAmt = $("#totalAmount").val();
        this.enteredChargedWeight = $("#chargedWeight").val();
        //pending of double value,message Alert pending 
        //Pending need to check the parsing 
        if (this.paymentType == 'toPay') {
            //            console.log( this.enteredTotalAmt,this.enteredChargedWeight);
            if (parseInt(this.enteredTotalAmt) < parseInt(this.enteredChargedWeight)) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Alert",
                    text: "To pay should not be less than charged weight",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    window.setTimeout(function () {
                        $("#privateMarker").focus();
                    }, 300);
                });
            }
        }
        else {
            if (parseInt(this.enteredTotalAmt) < parseInt(this.enteredChargedWeight)) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Alert",
                    text: "Paid should not be less than charged weight",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    window.setTimeout(function () {
                        $("#privateMarker").focus();
                    }, 300);
                });
            }
        }
        this.ratePerChgWgt = (this.enteredTotalAmt)
            / (this.enteredChargedWeight == null ? 0.0 : this.enteredChargedWeight == '' ? 0.0 : this.enteredChargedWeight);
        this.ratePerChgWgt = this.ratePerChgWgt.toFixed(1);
        //        console.log( 'thisi s1:' + this.ratePerChgWgt );
        //        console.log( 'thisi ss:' + this.userDataDtoReturnSession.ratePerChgWgt );
        if (this.ratePerChgWgt > this.userDataDtoReturnSession.ratePerChgWgt) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Alert",
                text: "Total Amount is More than the Default Set Value.Please check the Freight Info",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                //BY Kamil
                window.setTimeout(function () {
                    $("#privateMarker").focus();
                }, 300);
            });
        }
        else {
            //By Basha for focus error i used this code 
            if (this.paymentType == 'toPay') {
                if (this.enteredTotalAmt < this.enteredChargedWeight) {
                }
                else {
                    window.setTimeout(function () {
                        $("#privateMarker").focus();
                    }, 300);
                }
            }
            else {
                if (parseInt(this.enteredTotalAmt) < parseInt(this.enteredChargedWeight)) {
                }
                else {
                    window.setTimeout(function () {
                        $("#privateMarker").focus();
                    }, 300);
                }
            }
        }
    };
    //for Base Freight
    LrEntryFormComponent.prototype.baseFreightEvent = function (e) {
        if (e.keyCode == 13) {
            this.baseFreight = $("#baseFreight").val();
            if (this.baseFreight == 0.0 || this.baseFreight == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Alert",
                    text: "Freight Amount can not be zero",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
            }
            else {
                this.sum();
                this.hamaliField.nativeElement.focus();
            }
        }
    };
    LrEntryFormComponent.prototype.baseFreightBlur = function (e) {
        this.sum();
    };
    //for hamali
    LrEntryFormComponent.prototype.hamaliEvent = function (e) {
        if (e.keyCode == 13) {
            this.sum();
            this.gcChargeField.nativeElement.focus();
        }
    };
    LrEntryFormComponent.prototype.hamaliBlur = function (e) {
        this.sum();
    };
    //for gc charge
    LrEntryFormComponent.prototype.gcChargeEvent = function (e) {
        if (e.keyCode == 13) {
            this.sum();
            this.lcChargeField.nativeElement.focus();
        }
    };
    LrEntryFormComponent.prototype.gcChargeBlur = function (e) {
        this.sum();
    };
    //for lc charge
    LrEntryFormComponent.prototype.lcChargeEvent = function (e) {
        if (e.keyCode == 13) {
            this.sum();
            this.bcChargeField.nativeElement.focus();
        }
    };
    LrEntryFormComponent.prototype.lcChargeBlur = function (e) {
        this.sum();
    };
    //for bc charge
    LrEntryFormComponent.prototype.bcChargeEvent = function (e) {
        if (e.keyCode == 13) {
            this.sum();
            this.fovField.nativeElement.focus();
        }
    };
    LrEntryFormComponent.prototype.bcChargeBlur = function (e) {
        this.sum();
    };
    //for fov
    LrEntryFormComponent.prototype.fovEvent = function (e) {
        if (e.keyCode == 13) {
            this.sum();
            this.aocChargeField.nativeElement.focus();
        }
    };
    LrEntryFormComponent.prototype.fovBlur = function (e) {
        this.sum();
    };
    //for aoc charge
    LrEntryFormComponent.prototype.aocChargeEvent = function (e) {
        if (e.keyCode == 13) {
            this.sum();
            this.othersField.nativeElement.focus();
        }
    };
    LrEntryFormComponent.prototype.aocChargeBlur = function (e) {
        this.sum();
    };
    //for others
    LrEntryFormComponent.prototype.othersEvent = function (e) {
        if (e.keyCode == 13) {
            this.sum();
            this.validAmtWitChgWt();
            //            this.doorDeliveryModeField.nativeElement.focus();
        }
    };
    LrEntryFormComponent.prototype.othersBlur = function (e) {
        this.sum();
    };
    //For DD Amt
    LrEntryFormComponent.prototype.ddAmtEvent = function (e) {
        if (e.keyCode == 13) {
            this.sum();
            if ((this.viewByAutoLr == true) || (this.lrCheck == true)) {
                this.ddAddressField.nativeElement.focus();
            }
            else {
                if (this.showRiskCharge == true) {
                    window.setTimeout(function () {
                        $("#checkboxCOD").focus();
                    }, 1000);
                }
                else {
                    window.setTimeout(function () {
                        $("#paymentType").focus();
                    }, 1000);
                }
            }
        }
    };
    LrEntryFormComponent.prototype.ddAmtBlur = function (e) {
        this.sum();
    };
    //For Goods Value
    LrEntryFormComponent.prototype.goodsValueEvent = function (e) {
        if (e.keyCode == 13) {
            this.validateFOVRate();
            this.sum();
            this.eWayBillNoField.nativeElement.focus();
        }
    };
    LrEntryFormComponent.prototype.goodsValueBlur = function (e) {
        //        console.log( 'aaaa' );
        this.validateFOVRate();
        this.sum();
    };
    LrEntryFormComponent.prototype.validateFOVRate = function () {
        this.fovRateSetupValidation();
    };
    //For actual Weight
    LrEntryFormComponent.prototype.actualWeightEvent = function (e) {
        var _this = this;
        if (e.keyCode == 13) {
            this.actualWeight = $("#actualWeight").val();
            this.maxActWgt = this.userDataDtoReturnSession.maxActWgt;
            //            console.log( this.userDataDtoReturnSession.maxActWgt );
            if (this.actualWeight > this.maxActWgt) {
                //                message is Pending
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Alert",
                    text: "Actual Weight is Maximum...Please Check the Actual Weight",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    _this.chargedWeightField.nativeElement.focus();
                });
            }
            else {
                this.chargedWeightField.nativeElement.focus();
            }
        }
    };
    //For charged Weight
    /* chargedWeightEvent( e ) {
        ///Message Alert Pending allowMultiArtPopUp is Pending
        if ( e.keyCode == 13 ) {
            //            this.showMultiArt = true;
            this.dtTriggerMultiArtTable.next();
            this.actualWeight = $( "#actualWeight" ).val();
            this.chargedWeight = $( "#chargedWeight" ).val();
            this.maxChgWgt = this.userDataDtoReturnSession.maxChgWgt;
//            console.log( this.maxChgWgt );

            if ( parseInt( this.chargedWeight ) < parseInt( this.actualWeight ) ) {
                swal( {
                    title: "Alert",
                    text: "Charged Weight Should Be Equal Or Greater Than Actual Weight",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                } ).then(() => {
                    $( "#chargedWeight" ).val( '' );
                    this.chargedWeightField.nativeElement.focus();
                } );

            } else if ( parseInt( this.chargedWeight ) > parseInt( this.maxChgWgt ) ) {

                swal( {
                    title: "Alert",
                    text: "Charged Weight is Maximum...Please Check the Charged Weight",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                } ).then(() => {
                    this.allowMultiArtPopUp();
                } );
//                console.log( 'here1' );

            } else {
                //                console.log( 'here2' );
                if ( this.chargedWeight == this.actualWeight ) {
                    this.goodsValueField.nativeElement.focus();
                } else {
                    this.allowMultiArtPopUp();
                }
            }
        }
    } */
    LrEntryFormComponent.prototype.chargedWeightEvent = function (e, content7) {
        var _this = this;
        ///Message Alert Pending allowMultiArtPopUp is Pending
        if (e.keyCode == 13) {
            //            this.showMultiArt = true;
            //this.dtTriggerMultiArtTable.next();
            this.actualWeight = $("#actualWeight").val();
            this.chargedWeight = $("#chargedWeight").val();
            this.maxChgWgt = this.userDataDtoReturnSession.maxChgWgt;
            //            console.log( this.maxChgWgt );
            if (parseInt(this.chargedWeight) < parseInt(this.actualWeight)) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Alert",
                    text: "Charged Weight Should Be Equal Or Greater Than Actual Weight",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    $("#chargedWeight").val('');
                    _this.chargedWeightField.nativeElement.focus();
                });
            }
            else if (parseInt(this.chargedWeight) > parseInt(this.maxChgWgt)) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Alert",
                    text: "Charged Weight is Maximum...Please Check the Charged Weight",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    _this.allowMultiArtPopUp(content7);
                });
                //                console.log( 'here1' );
            }
            else {
                //                console.log( 'here2' );
                if (this.chargedWeight == this.actualWeight) {
                    this.goodsValueField.nativeElement.focus();
                }
                else {
                    this.allowMultiArtPopUp(content7);
                }
            }
        }
    };
    //    checkChallanNo( e ) {
    //        if ( e.keyCode == 13 ) {
    //            this.enteredChallanNo = $( "#challanNo" ).val();
    //            this.enteredChallanNoAt0 = this.enteredChallanNo.charAt( 0 );
    //            this.mainAdminStationGet = this.userDataDtoReturnSession.mainAdminStation;
    //            //            console.log( this.mainAdminStationGet );
    //
    //            if ( this.mainAdminStationGet != null && this.mainAdminStationGet == 'DELHI' ) {
    //
    //                if ( this.enteredChallanNo != null && this.enteredChallanNo != '' ) {
    //                    if ( this.enteredChallanNoAt0 == 0 ) {
    //                        swal( {
    //                            title: "Alert",
    //                            text: "Challan No Should Not Be Starts With 0 ",
    //                            icon: "warning",
    //                            closeOnClickOutside: false,
    //                            closeOnEsc: false,
    //                        } ).then(() => {
    //                            $( "#challanNo" ).val( '' );
    //                            this.challanNoField.nativeElement.focus();
    //                        } );
    //
    //                    } else {
    //                        this.ChallanNumberChk();
    //                    }
    //                } else {
    //                    this.ChallanNumberChk();
    //                }
    //            }
    //            else {
    //                this.agentNameField.nativeElement.focus();
    //            }
    //
    //        }
    //    }
    LrEntryFormComponent.prototype.checkChallanNo = function (e) {
        var _this = this;
        if (e.keyCode == 13) {
            this.enteredChallanNo = $("#challanNo").val();
            this.enteredChallanNoAt0 = this.enteredChallanNo.charAt(0);
            this.mainAdminStationGet = this.userDataDtoReturnSession.mainAdminStation;
            var MainAdminStation = this.userDataDtoReturnSession.mainAdminStation.toLowerCase();
            //            console.log( this.mainAdminStationGet );
            if (MainAdminStation != null && MainAdminStation == 'delhi') {
                if (this.enteredChallanNo != null && this.enteredChallanNo != '') {
                    if (this.enteredChallanNoAt0 == 0) {
                        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                            title: "Alert",
                            text: "Challan No Should Not Be Starts With 0 ",
                            icon: "warning",
                            closeOnClickOutside: false,
                            closeOnEsc: false,
                        }).then(function () {
                            $("#challanNo").val('');
                            _this.challanNoField.nativeElement.focus();
                        });
                    }
                    else {
                        this.ChallanNumberChk();
                    }
                }
            }
            else {
                this.ChallanNumberChk();
            }
        }
    };
    LrEntryFormComponent.prototype.ChallanNumberChkInfo = function () {
        this.enteredChallanNo = $("#challanNo").val();
        this.lrtDtoForChallan = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrtDtoForChallan.challanNo = this.enteredChallanNo;
        this.lrtDtoForChallan.companyId = this.userDataDtoReturnSession.companyId;
    };
    LrEntryFormComponent.prototype.checkLrNo = function (e, el) {
        if (e.keyCode == 13) {
            this.lrNumberChk();
        }
    };
    //For Multiple Articles pop 
    LrEntryFormComponent.prototype.open7 = function (content7) {
        var _this = this;
        this.modalService.open(content7, { centered: true, size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    //For Multiple PackNature pop 
    LrEntryFormComponent.prototype.open8 = function (content8) {
        var _this = this;
        this.modalService.open(content8, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEntryFormComponent.prototype.multiArtDetailsTable = function () {
        //the first datatable starts
        this.dtOptionsMultiArtTable = {
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
            "paging": true,
            "info": true,
            pagingType: 'full_numbers',
            pageLength: 9,
        };
    };
    ///For Multiple Article  Pop 
    LrEntryFormComponent.prototype.addInTable = function () {
        this.newAttribute.articlesInMultiple = $("#multiArtarticle").val();
        this.newAttribute.length = $("#multiArtlength").val();
        this.newAttribute.breadth = $("#multiArtbreadth").val();
        this.newAttribute.height = $("#multiArtheight").val();
        if (this.newAttribute.articlesInMultiple != '' && this.newAttribute.length != '' && this.newAttribute.breadth != '' && this.newAttribute.height != '' && this.newAttribute.articlesInMultiple != null && this.newAttribute.length != null && this.newAttribute.breadth != null && this.newAttribute.height != null) {
            if (this.editSelected == true) {
                this.enterArticles = +this.enterArticles + -this.getArticles;
                //                console.log( 'true : ' + this.enterArticles )
                this.editSelected = false;
            }
            else {
                this.editSelected = false;
            }
            this.isBlock = this.chkMulArtSize();
            if (this.isBlock == true) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Alert",
                    text: "Entered Articles Exceeds Actual Articles",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                this.clearMulArt();
            }
            else {
                if (this.editTableId != null) {
                    this.multiArtTableDataList.splice(this.editTableId, 1);
                }
                if (this.multiArtTableDataList == null) {
                    this.multiArtTableDataList = [];
                }
                if (this.multiArtTableDataList.length == 0) {
                    this.multiArtTableDataList.push(this.newAttribute);
                }
                else {
                    var array = this.multiArtTableDataList;
                    this.multiArtTableDataList.push(this.newAttribute);
                }
                this.newAttribute = {};
                $("#multiArtarticle").val('');
                $("#multiArtlength").val('');
                $("#multiArtbreadth").val('');
                $("#multiArtheight").val('');
                this.editTableId = null;
            }
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Warning",
                text: "All Fields Are Mandetory",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    LrEntryFormComponent.prototype.clearMulArt = function () {
        $("#multiArtarticle").val('');
        $("#multiArtlength").val('');
        $("#multiArtbreadth").val('');
        $("#multiArtheight").val('');
    };
    LrEntryFormComponent.prototype.chkMulArtSize = function () {
        //here pending we need to get the foooter value of articles of Pop Up
        this.isBlock = false;
        this.totArticles = $("#noOfArticles").val();
        //        console.log( this.totArticles );
        this.multiArtArticle = $("#multiArtarticle").val();
        this.enterArticles = +this.enterArticles + +this.multiArtArticle;
        //        console.log( 'the Entered Artcicles :' + this.enterArticles );
        //        enterArticles += nfMulArt.getValue().intValue();
        if (this.enterArticles > parseInt(this.totArticles)) {
            this.isBlock = true;
            //            console.log( 'hee' );
            this.enterArticles = +this.enterArticles + -this.multiArtArticle;
            if (this.editTableId != null) {
                this.multiArtTableDataList.splice(this.editTableId, 1);
            }
            //            console.log( 'if Block :' + this.enterArticles );
        }
        else {
            //            console.log( 'see' );
            this.isBlock = false;
        }
        return this.isBlock;
    };
    LrEntryFormComponent.prototype.rowSelectedEdit = function (multipleArtTableData, index) {
        this.editSelected = true;
        this.getArticles = multipleArtTableData.articlesInMultiple;
        //        console.log( 'got Multi Art :' + this.getArticles );
        //        console.log( 'Eee :' + this.enterArticles )
        //         this.enterArticles= this.enterArticles - this.getArticles;
        //        console.log( 'Eee1 :' + this.enterArticles )
        $("#multiArtarticle").val(multipleArtTableData.articlesInMultiple);
        $("#multiArtlength").val(multipleArtTableData.length);
        $("#multiArtbreadth").val(multipleArtTableData.breadth);
        $("#multiArtheight").val(multipleArtTableData.height);
        $("#hiddenIndex").val(index);
        this.editTableId = index;
        //        this.calculatedEditDelete(multipleArtTableData.article);
    };
    LrEntryFormComponent.prototype.rowSelectedDelete = function (multipleArtTableData, index) {
        this.multiArtTableDataList.splice(index, 1);
        this.getArticles = multipleArtTableData.articlesInMultiple;
        //        console.log( 'got Multi Art :' + this.getArticles );
        //        console.log( 'Eee :' + this.enterArticles )
        this.enterArticles = +this.enterArticles + -this.getArticles;
        //        console.log( 'Eee1 :' + this.enterArticles )
        $("#multiArtarticle").val('');
        $("#multiArtlength").val('');
        $("#multiArtbreadth").val('');
        $("#multiArtheight").val('');
        $("#hiddenIndex").val('');
        //        this.calculatedEditDelete(multipleArtTableData.article);
    };
    //    calculatedEditDelete(multipleArtTableData){
    //        this.getArticles=  multipleArtTableData.article;
    //        console.log('got Multi Art :'+ this.getArticles);
    //        console.log('Eee :'+this.enterArticles)
    //       
    //        console.log(this.enterArticles);
    //    }
    ////
    /* allowMultiArtPopUp() {
        this.subCommodityName = null;
        this.subCommodityName = $( "#partyCommodity" ).val();
    
        if ( this.subCommodityName == "Add New" ) {
            this.subCommodityName = $( "#goodsType" ).val();
            if ( this.subCommodityName == "Add New" ) {
                this.subCommodityName = $( "#newCommodity" ).val();
            }
    
        }
    
        if ( this.subCommodityName != null && this.subCommodityName != '' ) {
    //            console.log( 'here3' );
    //            console.log( this.subCommodityName );
            this.multiArtPop();
        } else {
            swal( {
                title: "Warning",
                text: "Commodity Name is Empty",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            } );
        }
    
    } */
    LrEntryFormComponent.prototype.allowMultiArtPopUp = function (content7) {
        this.subCommodityName = null;
        this.subCommodityName = $("#partyCommodity").val();
        if (this.subCommodityName == "Add New") {
            this.subCommodityName = $("#goodsType").val();
            if (this.subCommodityName == "Add New") {
                this.subCommodityName = $("#newCommodity").val();
            }
        }
        if (this.subCommodityName != null && this.subCommodityName != '') {
            //            console.log( 'here3' );
            //            console.log( this.subCommodityName );
            this.multiArtPop(content7);
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Warning",
                text: "Commodity Name is Empty",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    LrEntryFormComponent.prototype.multiArtPopInfo = function () {
        this.lrtDtoForMultiArt = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrtDtoForMultiArt.subCommodity = this.subCommodityName;
        this.lrtDtoForMultiArt.companyId = this.userDataDtoReturnSession.companyId;
    };
    /* multiArtPop = () => {
    
        this.multiArtPopInfo();
        this.masterReadService.isCommodityAllowArtSize( this.lrtDtoForMultiArt ).subscribe(
            ( response ) => {
                if ( response.length == 0 ) {
                    //                    alert( '' );
                } else {
                    this.lrtDtoForChallanRet = response;
                    this.lrtDtoForMultiArtRetSet = this.lrtDtoForChallanRet;
                    if ( this.lrtDtoForMultiArtRetSet.isAllow == false ) {
    
//                        swal( {
//                            title: "Validation",
//                            text: "Sure You Want To Add Multiple Article Sizes",
//                            icon: "warning",
//                            closeOnClickOutside: false,
//                            closeOnEsc: false,
//                            buttons: ["No", "Yes"],
//                        } ).then(( multiarticles ) => {
//                            if ( multiarticles ) {
//                    //            console.log( this.lrtDtoForMultiArtRetSet.isAllow );
//                                this.showMultiArt = true;
//                            } else {
//                                this.goodsValueField.nativeElement.focus();
//                            }
//                        } );
swal({
    title: "Show Two Buttons Inside the Alert",
    showCancelButton: true,
    confirmButtonText: "Confirm",
    confirmButtonColor: "#00ff99",
    cancelButtonColor: "#ff0099"
  });
    
                    } else {
                        this.goodsValueField.nativeElement.focus();
                    }
    
                }
            } ),
            ( error ) => console.log( error.json() ),
            () => console.log( 'done' );
    };*/
    LrEntryFormComponent.prototype.multiArtPop = function (content7) {
        var _this = this;
        this.multiArtPopInfo();
        this.masterReadService.isCommodityAllowArtSize(this.lrtDtoForMultiArt).subscribe(function (response) {
            if (response.length == 0) {
                //                    alert( '' );
            }
            else {
                _this.lrtDtoForChallanRet = response;
                _this.lrtDtoForMultiArtRetSet = _this.lrtDtoForChallanRet;
                if (_this.lrtDtoForMultiArtRetSet.isAllow == false) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Validation",
                        text: "Sure You Want To Add Multiple Article Sizes",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                        buttons: ["No", "Yes"],
                        dangerMode: true,
                    }).then(function (multiarticles) {
                        if (multiarticles) {
                            //                                console.log( this.lrtDtoForMultiArtRetSet.isAllow );
                            //this.showMultiArt = true;
                            _this.modalService.open(content7, { centered: true, size: 'lg' });
                            window.setTimeout(function () {
                                $("#multiArtarticle").focus();
                            }, 100);
                        }
                        else {
                            //                                this.goodsValueField.nativeElement.focus();
                            window.setTimeout(function () {
                                $("#goodsValue").focus();
                            }, 600);
                        }
                    });
                }
                else {
                    //                        this.goodsValueField.nativeElement.focus();
                    window.setTimeout(function () {
                        $("#goodsValue").focus();
                    }, 100);
                }
            }
        }),
            function (error) { return console.log(error.json()); },
            function () { return console.log('done'); };
    };
    ;
    LrEntryFormComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerMultiArtTable.unsubscribe();
        this.dtTriggerMultiPackTable.unsubscribe();
    };
    //    setDefaultCharges() {
    //        this.getGCCharges = this.userDataDtoReturnSession.gcCharge;
    //        this.getOthers = this.userDataDtoReturnSession.others;
    //        //        console.log( 'gc' + this.getGCCharges );
    //        //        console.log( 'others ' + this.getOthers );
    //
    //
    //        if ( ( this.getGCCharges != null ) && ( this.getGCCharges != 0 ) && ( this.getOthers != null ) && ( this.getOthers != 0 ) ) {
    //            //            $( "#gcCharge" ).val( this.getGCCharges );
    //            //            $( "#others" ).val( this.getOthers );
    //            //            console.log( 'here ' + this.getGCCharges );
    //            this.setGcCharge = this.getGCCharges;
    //            this.setOthers = this.getOthers;
    //            //            this is not setting inthe input fields is Pending 
    //        } else {
    //            $( "#gcCharge" ).val( '' );
    //            $( "#others" ).val( '' );
    //        }
    //    }
    LrEntryFormComponent.prototype.setDefaultCharges = function () {
        //    console.log( this.userDataDtoReturnSession.gcCharge );
        //   console.log( this.userDataDtoReturnSession.others );
        this.getOthers = this.userDataDtoReturnSession.others;
        var MainAdminStation = this.userDataDtoReturnSession.mainAdminStation.toLowerCase();
        var office = this.userDataDtoReturnSession.office.toLowerCase();
        this.selectedDestination = $("#destination").val();
        this.selectedDestination = $("#destination").val();
        if (this.selectedDestination != null && this.selectedDestination != '') {
            this.commaSplitDest = this.selectedDestination.split("-");
            this.destSplit = this.commaSplitDest[0];
            this.selectedDestination = this.destSplit.toLowerCase();
            this.selectedDestination = this.selectedDestination.trim();
        }
        else {
            this.selectedDestination = this.selectedDestination;
        }
        //    console.log( this.selectedDestination );
        // changed the logic as per Manoj mail @Dated : 09/09/2020
        // from Gujarat & RAJASTHAN to chennai - 70/- Per Bilty (45 + 25)
        // also for Jamnagar (Dhared - JM, Udyog Nagar - JM) 95/- Per Bilty
        // (statistical 50/-, Others 45/-) except
        // chennai
        //        console.log( 'gc' + this.getGCCharges );
        //        console.log( 'others ' + this.getOthers );
        if (MainAdminStation != null
            && MainAdminStation == 'mumbai') {
            this.getGCCharges = this.userDataDtoReturnSession.gcCharge;
            this.getOthers = this.userDataDtoReturnSession.others;
        }
        else if (MainAdminStation != null
            && MainAdminStation == 'gujarat') {
            if (this.selectedDestination != null && this.selectedDestination != '' && this.selectedDestination == 'chennai') {
                this.getGCCharges = 45;
                this.getOthers = 25;
            }
            else if (office != null
                && ((office == 'dhared - jm') || (office == 'udyog nagar - jm'))) {
                this.getGCCharges = 50;
                this.getOthers = 45;
            }
            else {
                this.getGCCharges = this.userDataDtoReturnSession.gcCharge;
                this.getOthers = this.userDataDtoReturnSession.others;
            }
        }
        else if (MainAdminStation != null
            && MainAdminStation == 'rajasthan') {
            if (this.selectedDestination != null && this.selectedDestination != '' && this.selectedDestination == 'chennai') {
                this.getGCCharges = 45;
                this.getOthers = 25;
            }
            else {
                this.getGCCharges = this.userDataDtoReturnSession.gcCharge;
                this.getOthers = this.userDataDtoReturnSession.others;
            }
        }
        if ((this.getGCCharges != null) && (this.getGCCharges != 0) && (this.getOthers != null) && (this.getOthers != 0)) {
            //            $( "#gcCharge" ).val( this.getGCCharges );
            //            $( "#others" ).val( this.getOthers );
            //            console.log( 'here ' + this.getGCCharges );
            this.setGcCharge = this.getGCCharges;
            this.setOthers = this.getOthers;
            //            this is not setting inthe input fields is Pending 
        }
        else {
            $("#gcCharge").val('');
            $("#others").val('');
        }
    };
    LrEntryFormComponent.prototype.lrNumberChkInfo = function () {
        this.enteredlrNumber = $("#lrNumber").val();
        this.selectedAgentName = $("#agentName").val();
        this.getIsLrCode = this.userDataDtoReturnSession.isLrCode;
        this.getLrCode = this.userDataDtoReturnSession.lrCode;
        //        console.log( 'this is islrCode :' + this.getIsLrCode )
        this.lrtDtoForLrCheck = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        if (this.isLRCode == true) {
            //            console.log( 'MUM1' );
            this.lrtDtoForLrCheck.lrNumber = this.showLrCodeInputFields + this.enteredlrNumber;
            //            console.log( 'this is Lr number :' + this.lrtDtoForLrCheck.lrNumber );
        }
        else {
            this.lrtDtoForLrCheck.lrNumber = this.enteredlrNumber;
        }
        this.lrtDtoForLrCheck.memoNumber = this.enteredlrNumber;
        //        console.log( 'this is Memo no1:' + this.lrtDtoForLrCheck.memoNumber );
        this.lrtDtoForLrCheck.agentName = this.selectedAgentName;
        this.lrtDtoForLrCheck.isLRCode = this.getIsLrCode;
        this.lrtDtoForLrCheck.lrCode = this.getLrCode;
        this.lrtDtoForLrCheck.companyId = this.userDataDtoReturnSession.companyId;
        //        console.log( 'thisss :' + this.userDataDtoReturnSession.isLRCode );
    };
    LrEntryFormComponent.prototype.toggleEditableForBookingDate = function (event) {
        if (event.target.checked) {
            this.validateBkgDateClicked = true;
        }
        else {
            this.validateBkgDateClicked = false;
        }
    };
    /*fieldFocusBkgDate( e ) {
        //        this.enteredBookingDate = $( "#bookingDate" ).val();
    //            console.log(this.enteredBookingDate);
        if ( e.keyCode == 13 ) {
            //            alert( '1' );
            if ( this.viewByAutoLr == true || this.lrCheck == true ) {
                //                alert( '2' );
                if ( this.validateBkgDateClicked == true && this.enteredBookingDate != null ) {
                    //                    alert( '3' );
                    this.validateLrBookingDateGet();
                } else {
                    //                    alert( '4' );
                    this.noOfArticlesField.nativeElement.focus();
                }
            } else {
                //                alert( '4' );
                this.noOfArticlesField.nativeElement.focus();
            }
    
        }
    }*/
    //By Kamil
    LrEntryFormComponent.prototype.fieldFocusBkgDate = function (e) {
        if (e.keyCode == 13) {
            this.focusBookingCalendar();
        }
    };
    LrEntryFormComponent.prototype.validateLrBookingDateGetInfo = function () {
        ///pending parse error
        //        this.enteredBookingDate = $( "#bookingDate" ).val();
        //By Kamil
        var enterBookingDate = null;
        enterBookingDate = $("#bookingDate").val();
        this.enteredBookingDate = this.datePipe.transform(enterBookingDate, "yyyy-MM-dd");
        this.lrtDtoForValidateBkgDate = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrtDtoForValidateBkgDate.companyId = this.userDataDtoReturnSession.companyId;
        this.lrtDtoForValidateBkgDate.mainstation = this.userDataDtoReturnSession.mainAdminStation;
        this.lrtDtoForValidateBkgDate.bookingDate = this.enteredBookingDate;
        //        console.log( this.lrtDtoForValidateBkgDate.bookingDate );
    };
    LrEntryFormComponent.prototype.validateBtnNextAfterCheckingChallanTotalLrs = function (content11) {
        if ((this.checkAutoLr == false) && (this.checkAutoLrHold == false)) {
            this.enteredChallanTotLrs = $("#challanTotLrs").val();
            if ((this.enteredChallanTotLrs == '') || (this.enteredChallanTotLrs == null)) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Mandatory Fields",
                    text: "Please enter Local Challan Total Lrs",
                    icon: "warning",
                    closeOnClickOutside: true,
                    closeOnEsc: true,
                });
            }
            else {
                this.lrtDtoForChallanTotLr = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
                this.enteredChallanNo = $("#challanNo").val();
                this.lrtDtoForChallanTotLr.challanNo = this.enteredChallanNo;
                this.verifyChallanTotLrs(content11);
            }
        }
        else {
            this.validateBtnNext(content11);
        }
    };
    LrEntryFormComponent.prototype.validateBtnNext = function (content11) {
        var _this = this;
        //        alert( 'btn' );
        this.enteredGoodsValue = $("#goodsValue").val();
        this.goodsValue = this.enteredGoodsValue == null ? 0.0 : this.enteredGoodsValue == '' ? 0.0
            : this.enteredGoodsValue;
        this.selectedDestination = $("#destination").val();
        this.selectedconsignorGSTNumber = $("#consignorGSTNumber").val();
        this.selectedConsignorName = $("#consignorName").val();
        this.selectedNewConsignorName = $("#newConsignor").val();
        this.selectedconsigneeGSTNumber = $("#consigneeGSTNumber").val();
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedNewConsigneeName = $("#newConsignee").val();
        this.totArticles = $("#noOfArticles").val();
        this.selectedPartyCommodity = $("#partyCommodity").val();
        this.enteredGoodsValue = $("#goodsValue").val();
        this.enteredEWayBillNo = $("#eWayBillNo").val();
        this.selectedAgentName = $("#agentName").val();
        this.enteredActualWeight = $("#actualWeight").val();
        this.enterdActWgt = this.enteredActualWeight;
        this.enteredChargeWeight = $("#chargedWeight").val();
        this.enterdChgWgt = this.enteredChargeWeight;
        //        alert( this.selectedAgentName + "-" + this.selectedUserGodown );
        this.gcCharge = $("#gcCharge").val();
        this.others = $("#others").val();
        this.paymentType = $("#paymentType").val();
        this.enteredChallanNo = $("#challanNo").val();
        this.selectedLoaderHead = $("#loaderHead").val();
        var MainAdminStation = this.userDataDtoReturnSession.mainAdminStation.toLowerCase();
        //     console.log( this.selectedLoaderHead, MainAdminStation, this.gcCharge, this.others, this.getGCCharges, this.getOthers, this.restrictUserGodownList );
        if ((this.userDataDtoReturnSession.mainAdminStation != null)
            && (MainAdminStation == 'delhi')
            && (this.gcCharge != null) && (this.gcCharge != 0)
            && (this.gcCharge != 0.0)
            && (this.gcCharge != this.userDataDtoReturnSession.gcCharge)) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Not Allowed",
                text: "GC charge must be " + this.getGCCharges + " please verify it!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if ((this.userDataDtoReturnSession.mainAdminStation != null)
            && (MainAdminStation == 'delhi')
            && (this.others != null) && (this.others != 0)
            && (this.others != 0.0)
            && (this.others != this.userDataDtoReturnSession.others)) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Not Allowed",
                text: "Other charge must be " + this.getOthers + " please verify it!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if (this.isPaidLrOnly && this.paymentType == 'toPay') {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Not Allowed",
                text: "The LR of this Consignee can be booked only on Paid basis, please contact System Admin for more details!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if (!this.restrictUserGodownList
            && (this.selectedLoaderHead == null || this.selectedLoaderHead == '')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Not Allowed",
                text: "Please select the Choudhary Name!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if (!this.validateVehicleNumber()) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "In-Valid Vehicle Number",
                text: "Please enter the correct Vehicle Number to proceed!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            if ((this.viewByAutoLr == true) || (this.lrCheck == true)) {
                if (this.selectedDestination == 'Select Destination' || this.selectedDestination == '' || this.selectedDestination == null) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please Select The Destination",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (this.enteredActualWeight == null || this.enteredActualWeight == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please enter Actual Weight",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (this.enteredChargeWeight == null || this.enteredChargeWeight == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please enter Charged Weight",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (this.selectedconsignorGSTNumber == null || this.selectedconsignorGSTNumber == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please enter Consignor GST number",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if ((this.selectedConsignorName == 'Add New') && ((this.selectedNewConsignorName == null) || (this.selectedNewConsignorName == ''))) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please enter Consignor Name",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (this.selectedconsigneeGSTNumber == null || this.selectedconsigneeGSTNumber == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please enter Consignee GST number",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if ((this.selectedConsigneeName == 'Add New') && ((this.selectedNewConsigneeName == null) || (this.selectedNewConsigneeName == ''))) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please enter Consignee Name",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (this.totArticles != null && (parseInt(this.totArticles) > 1000)) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Number of Articles is: " + this.totArticles + ". Is it correct???",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                        buttons: ["No", "Yes"],
                    }).then(function (articleNextCheck) {
                        if (articleNextCheck) {
                            _this.nextBtnField.nativeElement.focus();
                        }
                        else {
                            _this.noOfArticlesField.nativeElement.focus();
                        }
                    });
                    //pop Message pending
                }
                else if (this.selectedPartyCommodity != null && (this.selectedPartyCommodity == 'Add New')) {
                    this.commdityValidation(content11);
                }
                else if ((this.eWayBillExempted == false) && (parseInt(this.enteredGoodsValue) >= 50000) && ((this.enteredEWayBillNo == null) || (this.enteredEWayBillNo == ''))) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "E-Way Bill is complusory",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    this.setLrEntryFields(content11);
                    //                alert( 'd' );
                }
            }
            else {
                if ((this.userDataDtoReturnSession.mainAdminStation != null)
                    && (MainAdminStation == 'delhi')
                    && ((this.enteredChallanNo == null) || (this.enteredChallanNo == ''))) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Not Allowed",
                        text: "Please enter challan number",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                    return false;
                }
                if (this.selectedAgentName != null && this.selectedAgentName == 'Add New') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please Select The Agent Name",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (this.enteredActualWeight == null || this.enteredActualWeight == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please enter Actual Weight",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (this.enteredChargeWeight == null || this.enteredChargeWeight == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please enter Charged Weight",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (this.selectedDestination == 'Select Destination' || this.selectedDestination == '' || this.selectedDestination == null) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please Select The Destination",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (this.selectedconsignorGSTNumber == null || this.selectedconsignorGSTNumber == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please enter Consignor GST number",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if ((this.selectedConsignorName == 'Add New') && ((this.selectedNewConsignorName == null) || (this.selectedNewConsignorName == ''))) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please enter Consignor Name",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (this.selectedconsigneeGSTNumber == null || this.selectedconsigneeGSTNumber == '') {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please enter Consignee GST number",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if ((this.selectedConsigneeName == 'Add New') && ((this.selectedNewConsigneeName == null) || (this.selectedNewConsigneeName == ''))) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Please enter Consignee Name",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else if (this.totArticles != null && (parseInt(this.totArticles) > 1000)) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "Number of Articles is: " + this.totArticles + ". Is it correct???",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                        buttons: ["No", "Yes"],
                    }).then(function (articleNextCheck) {
                        if (articleNextCheck) {
                            _this.nextBtnField.nativeElement.focus();
                        }
                        else {
                            _this.noOfArticlesField.nativeElement.focus();
                        }
                    });
                }
                else if (this.selectedPartyCommodity != null && (this.selectedPartyCommodity == 'Add New')) {
                    this.commdityValidation(content11);
                }
                else if ((this.eWayBillExempted == false) && (parseInt(this.enteredGoodsValue) >= 50000) && (this.enteredEWayBillNo == null || this.enteredEWayBillNo == '')) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Mandatory Fields",
                        text: "E-Way Bill is complusory",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    });
                }
                else {
                    this.setLrEntryFields(content11);
                    //                alert( 'de' );
                }
            }
        }
    };
    LrEntryFormComponent.prototype.commdityValidation = function (content11) {
        this.selectedNewCommodity = $("#newCommodity").val();
        if ((this.showNewCommodity == false) && (this.showGoodsType == false)) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Mandatory Fields",
                text: "Please Select The Party Goods Type",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if ((this.showNewCommodity == true)
            && (this.selectedNewCommodity == null || this.selectedNewCommodity == '')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Mandatory Fields",
                text: "Please Enter New Commodity",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if (((this.showGoodsType == true))
            && (this.showNewCommodity == false)
            && ((this.selectedGoodsTypeCommodity != null && this.selectedGoodsTypeCommodity == "Add New"))) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Mandatory Fields",
                text: "Please Select Commodity",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.setLrEntryFields(content11);
            //            alert( 'ddc' );
        }
    };
    LrEntryFormComponent.prototype.setLrEntryFields = function (content11) {
        this.selectedDoorDelivery = $("#doorDeliveryMode").val();
        this.ddAmt = $("#ddAmt").val();
        this.ddAmountRange = this.calculateDDAmountRangeToValidate();
        //        console.log( 'tr :' + this.ddAmountRange );
        if (this.userDataDtoReturnSession.isDDAmtBlock && this.selectedDoorDelivery == 'Yes' && ((this.ddAmt == null) || (this.ddAmt == '') || (this.ddAmt == 0) || (this.ddAmountRange > this.ddAmt))) {
            this.minDDAmt = this.userDataDtoReturnSession.ddMinAmtOnLr;
            this.minDDPerc = this.userDataDtoReturnSession.ddMinPercOnLr;
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Mandatory Fields",
                text: "Mentioned DD Amount is must be at minimum range of " + this.minDDAmt + " or " + this.minDDPerc + " ps on Charge Weight, whichever is higher!",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
            this.ddAmtField.nativeElement.focus();
        }
        else {
            //            console.log( 'so ' );
            this.lrDetailsAddFlow(content11);
            //            alert( 'ddDDMode' );
        }
    };
    LrEntryFormComponent.prototype.fieldFocusArticles = function (e) {
        var _this = this;
        this.totArticles = $("#noOfArticles").val();
        if (e.keyCode == 13) {
            if ((this.totArticles != null) && (this.totArticles != '') && (parseInt(this.totArticles) > 1000)) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Validation",
                    text: "Number of Articles is: " + this.totArticles + ". Is it correct???",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                    //                    dangerMode: true,
                    //            buttons: ["Cancel", true],
                    buttons: ["No", "Yes"],
                }).then(function (articleNext) {
                    if (articleNext) {
                        _this.packNatureField.nativeElement.focus();
                    }
                    else {
                        _this.noOfArticlesField.nativeElement.focus();
                    }
                });
            }
            else {
                this.packNatureField.nativeElement.focus();
            }
        }
    };
    LrEntryFormComponent.prototype.toggleEditableForEWayBillExempted = function (event) {
        if (event.target.checked) {
            this.eWayBillExempted = true;
        }
        else {
            this.eWayBillExempted = false;
        }
    };
    LrEntryFormComponent.prototype.toggleEditableForTobeBilled = function (event) {
        if (event.target.checked) {
            this.toBeBilledParty = true;
        }
        else {
            this.toBeBilledParty = false;
        }
    };
    LrEntryFormComponent.prototype.toggleEditableForAOC = function (event) {
        if (event.target.checked) {
            this.cbAoc = true;
            //            console.log( this.cbAoc );
        }
        else {
            this.cbAoc = false;
        }
    };
    LrEntryFormComponent.prototype.toggleEditableForPickupLr = function (event) {
        if (event.target.checked) {
            this.cbPickUpLr = true;
        }
        else {
            this.cbPickUpLr = false;
        }
    };
    LrEntryFormComponent.prototype.toggleEditableForUnloadByConsignee = function (event) {
        if (event.target.checked) {
            this.cbUnloadByConsignee = true;
        }
        else {
            this.cbUnloadByConsignee = false;
        }
    };
    LrEntryFormComponent.prototype.toggleEditableForHandleWithCare = function (event) {
        if (event.target.checked) {
            this.cbHandleWithCare = true;
        }
        else {
            this.cbHandleWithCare = false;
        }
    };
    LrEntryFormComponent.prototype.toggleEditableForCOD = function (event) {
        if (event.target.checked) {
            this.cbCOD = true;
            this.showCodChg = true;
            this.setCodCharge = 200;
            this.sum();
        }
        else {
            this.cbCOD = false;
            this.showCodChg = false;
            this.setCodCharge = 0;
            this.sum();
        }
    };
    LrEntryFormComponent.prototype.toggleEditableForOrderGoods = function (event) {
        if (event.target.checked) {
            this.cbOrderGoods = true;
        }
        else {
            this.cbOrderGoods = false;
        }
    };
    LrEntryFormComponent.prototype.toggleEditableForGatePass = function (event) {
        if (event.target.checked) {
            this.cbGatePass = true;
            //            console.log( this.cbGatePass );
        }
        else {
            this.cbGatePass = false;
        }
    };
    LrEntryFormComponent.prototype.toggleEditableForCCAttached = function (event) {
        if (event.target.checked) {
            this.cbCCAttached = true;
        }
        else {
            this.cbCCAttached = false;
        }
    };
    LrEntryFormComponent.prototype.toggleEditableForSelfLr = function (event) {
        if (event.target.checked) {
            this.cbSelfLr = true;
        }
        else {
            this.cbSelfLr = false;
        }
    };
    LrEntryFormComponent.prototype.lrDetailsAddFlow = function (content11) {
        //        alert( 'dd3' );
        //pending booking date,arrival date, bill date 
        this.enteredAutoLrNumber = $("#autoLrNumber").val();
        this.enteredlrNumber = $("#lrNumber").val();
        //      this.enteredBookingDate = $( "#bookingDate" ).val();
        //By Kamil
        var enterBookingDate = null;
        enterBookingDate = $("#bookingDate").val();
        this.enteredBookingDate = this.datePipe.transform(enterBookingDate, "yyyy-MM-dd");
        //        this.enteredBookingDate = null;
        this.enteredSource = $("#source").val();
        this.enteredActualWeight = $("#actualWeight").val();
        this.enterdActWgt = this.enteredActualWeight;
        this.enteredChargeWeight = $("#chargedWeight").val();
        this.enterdChgWgt = this.enteredChargeWeight;
        this.baseFreight = $("#baseFreight").val();
        this.hamali = $("#hamali").val();
        this.gcCharge = $("#gcCharge").val();
        this.lcCharge = $("#lcCharge").val();
        this.bcCharge = $("#bcCharge").val();
        this.aocCharge = $("#aocCharge").val();
        this.others = $("#others").val();
        //        this.ddAmt = $( "#ddAmt" ).val();
        this.enteredRiskChg = $("#fov").val();
        this.totArticles = $("#noOfArticles").val();
        this.selectedConsigneeName = $("#consigneeName").val();
        this.selectedNewConsigneeName = $("#newConsignee").val();
        //Pending 
        this.selectedNewConsigneeName = this.partyDtoForNewConsigneeSet.consigneeName;
        this.selectedPartyCommodity = $("#partyCommodity").val();
        this.selectedNewCommodity = $("#newCommodity").val();
        this.selectedGoodsTypeCommodity = $("#goodsType").val();
        this.enteredSubCommodity = $("#subCommodity").val();
        this.selectedConsignorName = $("#consignorName").val();
        //Pending 
        this.selectedNewConsignorName = $("#newConsignor").val();
        this.selectedNewConsignorName = this.partyDtoForNewConsignorSet.consignorName;
        this.selectedDestination = $("#destination").val();
        this.commaSplitDest = this.selectedDestination.split("-");
        this.destSplit = this.commaSplitDest[0];
        this.stateByDest = this.commaSplitDest[1];
        this.enteredGoodsValue = $("#goodsValue").val();
        this.goodsValue = (this.enteredGoodsValue == null ? 0.0 : this.enteredGoodsValue == '' ? 0.0
            : this.enteredGoodsValue);
        this.enteredBillNumber = $("#billNo").val();
        this.enteredClerkName = $("#clerkName").val();
        //      this.enteredBillDate = $( "#billDate" ).val();
        //By Kamil
        var enterBillDate = null;
        enterBillDate = $("#billDate").val();
        this.enteredBillDate = this.datePipe.transform(enterBillDate, "yyyy-MM-dd");
        //        this.enteredBillDate = null;
        this.enteredPrivateMarker = $("#privateMarker").val();
        this.selectedconsignorGSTNumber = $("#consignorGSTNumber").val();
        this.selectedconsigneeGSTNumber = $("#consigneeGSTNumber").val();
        this.paymentType = $("#paymentType").val();
        this.selectedDoorDelivery = $("#doorDeliveryMode").val();
        this.ddAmt = $("#ddAmt").val();
        this.enteredDDAddress = this.ddAddressTexArea;
        this.selectedPackNature = $("#packNature").val();
        this.selectedSerTaxPayingBy = $("#serTaxPayingBy").val();
        this.selectedBankLr = $("#bankLr").val();
        this.enteredEWayBillNo = $("#eWayBillNo").val();
        this.enteredChargedWeightLR = $("#actualChargedWeightExtra").val();
        this.selectedEDeclarationId = $("#edeclarationId").val();
        this.enteredEDeclarationCommodity = $("#edeclarationCommodity").val();
        this.enteredBankName = $("#bankName").val();
        //        this.selectedUserGodown = $( "userGodown" ).val();
        this.selectedUserGodown = this.defaultGodownName;
        this.enteredRemarks = this.remarksTexArea;
        this.selectedAgentName = $("#agentName").val();
        this.enteredChallanNo = $("#challanNo").val();
        //      this.enteredArrivalDate = $( "#arrivalDate" ).val();
        //By Kamil
        var enterArrivalDate = $("#arrivalDate").val();
        //alert( 'before:' + enterArrivalDate );
        this.enteredArrivalDate = this.datePipe.transform(enterArrivalDate, "yyyy-MM-dd");
        //alert( 'after:' + this.enteredArrivalDate );
        //        this.enteredArrivalDate = null;
        this.enteredVehicleNumber = $("#vehicleNumber").val();
        this.enteredDriverName = $("#driverName").val();
        this.selectedLoaderHead = $("#loaderHead").val();
        this.autoLrLoaderHead = $("#loaderHead").val();
        this.entereCODCharge = this.setCodCharge;
        this.enteredLocalChallanKanta = $("#localChallanKanta").val();
        this.enteredChallanTotLrs = $("#challanTotLrs").val();
        this.lrtDtoForSave = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        if (this.isNextLrAllow == true) {
            //            alert( 'dd6' );
            this.isNextLrAllow = false;
            if ((this.viewByAutoLr == true) || (this.lrCheck == true)) {
                this.lrtDtoForSave.lrNumber = this.enteredAutoLrNumber;
                //                console.log( this.enteredAutoLrNumber );
            }
            else {
                if (this.isLRCode == true) {
                    this.lrtDtoForSave.lrNumber = this.showLrCodeInputFields + this.enteredlrNumber;
                }
                else {
                    this.lrtDtoForSave.lrNumber = this.enteredlrNumber;
                }
            }
            this.lrtDtoForSave.bookingDate = this.enteredBookingDate;
            this.lrtDtoForSave.source = this.enteredSource;
            //Pending Delivery godown
            this.lrtDtoForSave.deliverygodown = this.lrtDtoForSave.deliverygodown;
            this.lrtDtoForSave.actualWeight = this.enteredActualWeight;
            this.lrtDtoForSave.chargedWeight = this.enteredChargeWeight;
            this.lrtDtoForSave.goodsType = "";
            ///Need to check this code  while saving Pending
            if ((this.enterdChgWgt) >= (this.enterdActWgt * 2)) {
                this.lrtDtoForSave.goodsType = "Bulky";
            }
            else if ((this.enterdChgWgt) == (this.enterdActWgt)) {
                this.lrtDtoForSave.goodsType = "Actual";
            }
            else {
                this.lrtDtoForSave.goodsType = "Semi Bulky";
            }
            this.lrtDtoForSave.financialYear = this.userDataDtoReturnSession.financialYear;
            this.lrtDtoForSave.hamali = 0.0;
            this.lrtDtoForSave.serviceCharge = 0.0;
            this.lrtDtoForSave.baseFreight = (this.baseFreight == null ? 0.0 : this.baseFreight == '' ? 0.0 : this.baseFreight);
            this.lrtDtoForSave.hamaliLR = (this.hamali == null ? 0.0 : this.hamali == '' ? 0.0 : this.hamali);
            this.lrtDtoForSave.gcCharge = (this.gcCharge == null ? 0.0 : this.gcCharge == '' ? 0.0 : this.gcCharge);
            this.lrtDtoForSave.aoc = (this.aocCharge == null ? 0.0 : this.aocCharge == '' ? 0.0 : this.aocCharge);
            //            this.lrtDtoForSave.insurance= 0.0;
            this.lrtDtoForSave.others = (this.others == null ? 0.0 : this.others == '' ? 0.0 : this.others);
            this.lrtDtoForSave.lcChg = (this.lcCharge == null ? 0.0 : this.lcCharge == '' ? 0.0 : this.lcCharge);
            this.lrtDtoForSave.bcChg = (this.bcCharge == null ? 0.0 : this.bcCharge == '' ? 0.0 : this.bcCharge);
            this.lrtDtoForSave.riskCharge = (this.enteredRiskChg == null ? 0.0 : this.enteredRiskChg == '' ? 0.0 : this.enteredRiskChg);
            this.lrtDtoForSave.userName = this.userDataDtoReturnSession.userId;
            this.lrtDtoForSave.totalArticles = this.totArticles;
            if (this.selectedConsigneeName != null && this.selectedConsigneeName == "Add New") {
                this.lrtDtoForSave.consigneeName = this.selectedNewConsigneeName;
                //Consignee Id Is Pending;
                this.lrtDtoForSave.consigneeId = this.selectedConsigneeId;
            }
            else {
                this.lrtDtoForSave.consigneeName = this.selectedConsigneeName;
                this.lrtDtoForSave.consigneeId = this.selectedConsigneeId;
            }
            this.partyGoodsType = null, this.goodsType = null, this.newCommodity = null;
            this.partyGoodsType = this.selectedPartyCommodity;
            if (this.showGoodsType == true) {
                this.goodsType = this.selectedGoodsTypeCommodity;
            }
            if (this.showNewCommodity == true) {
                this.newCommodity = this.selectedNewCommodity;
            }
            if ((this.partyGoodsType == "Add New")
                && (this.partyGoodsType != null) && (this.goodsType != null)
                && (this.goodsType == "Add New")) {
                this.lrtDtoForSave.reportMode = "consignCommodityUpdate";
                this.lrtDtoForSave.column2 = this.newCommodity;
            }
            else if ((this.partyGoodsType == "Add New")
                && (this.partyGoodsType != null) && (this.goodsType != null)
                && (this.goodsType != "Add New")) {
                this.lrtDtoForSave.reportMode = "consigneeUpdate";
                this.lrtDtoForSave.column2 = this.goodsType;
            }
            else if ((this.partyGoodsType != "Add New")
                && (this.partyGoodsType != null)) {
                this.lrtDtoForSave.column2 = this.partyGoodsType;
            }
            if (this.showSubCommodity == true) {
                if (this.enteredSubCommodity == null || this.enteredSubCommodity == '') {
                    this.lrtDtoForSave.column1 = null;
                }
                else {
                    this.lrtDtoForSave.column1 = this.enteredSubCommodity;
                }
            }
            if (this.selectedConsignorName != null && this.selectedConsignorName == "Add New") {
                this.lrtDtoForSave.consignorName = this.selectedNewConsignorName;
                //Consignor Id Is Pending;
                this.lrtDtoForSave.consignorId = this.selectedConsignorId;
            }
            else {
                this.lrtDtoForSave.consignorName = this.selectedConsignorName;
                this.lrtDtoForSave.consignorId = this.selectedConsignorId;
            }
            //            console.log( 'localPending :' + this.userDataDtoReturnSession.isLocalPending );
            this.lrtDtoForSave.isLocalPending = this.userDataDtoReturnSession.isLocalPending;
            this.lrtDtoForSave.destination = this.destSplit;
            //check To bebilled Party pending 
            this.lrtDtoForSave.toBeBilledParty = this.toBeBilledParty;
            this.lrtDtoForSave.branch = this.userDataDtoReturnSession.office;
            this.lrtDtoForSave.goodsValue = this.goodsValue;
            this.lrtDtoForSave.billNumber = this.enteredBillNumber;
            this.lrtDtoForSave.clerkName = this.enteredClerkName;
            this.lrtDtoForSave.billDate = this.enteredBillDate;
            this.lrtDtoForSave.privateMarker = this.enteredPrivateMarker;
            this.lrtDtoForSave.gstNoConsignor = this.selectedconsignorGSTNumber;
            this.lrtDtoForSave.gstNoConsignee = this.selectedconsigneeGSTNumber;
            this.totalAmtNew = (+(this.baseFreight == null ? 0.0 : this.baseFreight == '' ? 0.0 : this.baseFreight)
                + +(this.hamali == null ? 0.0 : this.hamali == '' ? 0.0 : this.hamali)
                + +(this.gcCharge == null ? 0.0 : this.gcCharge == '' ? 0.0 : this.gcCharge)
                + +(this.lcCharge == null ? 0.0 : this.lcCharge == '' ? 0.0 : this.lcCharge)
                + +(this.bcCharge == null ? 0.0 : this.bcCharge == '' ? 0.0 : this.bcCharge)
                + +(this.aocCharge == null ? 0.0 : this.aocCharge == '' ? 0.0 : this.aocCharge)
                + +(this.others == null ? 0.0 : this.others == '' ? 0.0 : this.others)
                + +(this.ddAmt == null ? 0.0 : this.ddAmt == '' ? 0.0 : this.ddAmt)
                + +(this.enteredRiskChg == null ? 0.0 : this.enteredRiskChg == '' ? 0.0 : this.enteredRiskChg)
                + +(this.entereCODCharge == null ? 0.0 : this.entereCODCharge == '' ? 0.0 : this.entereCODCharge));
            this.lrtDtoForSave.frieghtAmt = this.totalAmtNew;
            ///For Paid or Topay
            if (this.paymentType == 'toPay') {
                this.lrtDtoForSave.toPay = this.totalAmtNew;
                this.lrtDtoForSave.paid = 0.0;
                this.isPaidLr = false;
            }
            else {
                this.isPaidLr = true;
                this.lrtDtoForSave.toPay = 0.0;
                this.lrtDtoForSave.paid = this.totalAmtNew;
            }
            ///For Door Delivery Mode
            this.lrtDtoForSave.ddAddress = null;
            if (this.selectedDoorDelivery == 'Yes') {
                //                console.log( 'a1 :' + this.selectedDoorDelivery );
                this.lrtDtoForSave.isDoorDeliv = true;
                //                this.lrtDtoForSave.DoorDelivAmt = ( this.ddAmt == null ? 0.0 : this.ddAmt == '' ? 0.0 : this.ddAmt );
                this.lrtDtoForSave.doorDeliveryAmount = (this.ddAmt == null ? 0.0 : this.ddAmt == '' ? 0.0 : this.ddAmt);
                //                console.log( 'a2 :' + this.lrtDtoForSave.doorDeliveryAmount );
                if ((this.viewByAutoLr == true) || (this.lrCheck == true)) {
                    this.lrtDtoForSave.ddAddress = (this.enteredDDAddress == null ? null : this.enteredDDAddress == '' ? null : this.enteredDDAddress);
                }
            }
            else {
                this.lrtDtoForSave.isDoorDeliv = false;
                //                this.lrtDtoForSave.DoorDelivAmt = 0.0;
                this.lrtDtoForSave.doorDeliveryAmount = 0.0;
            }
            this.lrtDtoForSave.totalAmount = this.totalAmtNew;
            this.lrtDtoForSave.doorDelivChg = 0.0;
            this.lrtDtoForSave.packNature = this.selectedPackNature;
            this.lrtDtoForSave.withOut = this.cbAoc;
            //Pending  of listboxtpcommodity
            $("#lrNumber").val('');
            this.lrtDtoForSave.serTaxPayBy = 0;
            if (this.cbPickUpLr == true) {
                this.lrtDtoForSave.isPickUpLR = true;
                this.lrtDtoForSave.pickLr = true;
            }
            else {
                this.lrtDtoForSave.isPickUpLR = false;
                this.lrtDtoForSave.pickLr = false;
            }
            this.lrtDtoForSave.isUnLoadByConsignee = this.cbUnloadByConsignee;
            this.lrtDtoForSave.isHandWithCare = this.cbHandleWithCare;
            //            console.log( this.cbPickUpLr, this.cbUnloadByConsignee, this.cbHandleWithCare, )
            if (this.paymentTypePaid == true) {
                if (this.selectedSerTaxPayingBy == 'Consignor') {
                    this.lrtDtoForSave.serTaxPayBy = 1;
                }
                else if (this.selectedSerTaxPayingBy == 'GTA') {
                    this.lrtDtoForSave.serTaxPayBy = 2;
                }
            }
            // Multiple Articles
            if (this.multiArtTableDataList == null) {
                this.lrtDtoForSave.listOfmultipleArt = null;
            }
            else {
                this.lrtDtoForSave.listOfmultipleArt = this.multiArtTableDataList;
            }
            //Pending Multiple pack nature 
            if (this.multiPackNatureTableDataList == null) {
                this.lrtDtoForSave.listOfmultiplePack = null;
            }
            else {
                this.lrtDtoForSave.listOfmultiplePack = this.multiPackNatureTableDataList;
            }
            this.lrtDtoForSave.validBookDate = false;
            if ((this.viewByAutoLr == true) && (this.validateBkgDateClicked == true)) {
                this.lrtDtoForSave.validBookDate = true;
            }
            this.lrtDtoForSave.gatePass = false;
            this.lrtDtoForSave.ccAttach = false;
            this.lrtDtoForSave.selfLr = false;
            this.lrtDtoForSave.bankLr = null;
            this.lrtDtoForSave.eSugamNo = null;
            this.lrtDtoForSave.chgWtLr = 0.0;
            this.lrtDtoForSave.isOrderGoods = false;
            if (this.selectedBankLr == 'Yes') {
                this.lrtDtoForSave.isBankLr = "1";
            }
            else {
                this.lrtDtoForSave.isBankLr = "0";
            }
            this.lrtDtoForSave.mainstation = this.userDataDtoReturnSession.mainAdminStation;
            this.lrtDtoForSave.isCod = this.cbCOD;
            this.lrtDtoForSave.codChg = this.entereCODCharge == null ? 0.0 : this.entereCODCharge == '' ? 0.0 : this.entereCODCharge;
            this.lrtDtoForSave.eWayBillNo = this.enteredEWayBillNo;
            this.lrtDtoForSave.isOrderGoods = this.cbOrderGoods;
            this.lrtDtoForSave.isAutoLR = false;
            if ((this.viewByAutoLr == true) || (this.lrCheck == true)) {
                this.lrtDtoForSave.arrivalDate = null;
                this.lrtDtoForSave.challanNo = null;
                this.lrtDtoForSave.agentName = this.userDataDtoReturnSession.mainStation;
                // dummy for Auto LR
                // Entry
                this.lrtDtoForSave.vehicleNumber = null;
                this.lrtDtoForSave.driverName = null;
                this.lrtDtoForSave.unloaderHead = null;
                this.lrtDtoForSave.isAutoLR = true;
                if (this.cbGatePass == true) {
                    //                    console.log( 'gatPass' + this.cbGatePass );
                    this.lrtDtoForSave.gatePass = true;
                }
                if (this.cbCCAttached == true) {
                    //                    console.log( 'cbCCAttached' + this.cbCCAttached );
                    this.lrtDtoForSave.ccAttach = true;
                }
                if (this.cbSelfLr == true) {
                    //                    console.log( 'cbSelfLr' + this.cbSelfLr );
                    this.lrtDtoForSave.selfLr = true;
                }
                /// Pending bank Lr,e declaration commodity and Esugam is not Added in dto due to removal Pending
                //                e declaration commodity pending 
                this.lrtDtoForSave.chgWtLr = (this.enteredChargedWeightLR == null ? null : this.enteredChargedWeightLR == '' ? null : this.enteredChargedWeightLR);
                if (this.enteredEDeclarationCommodity != null && this.enteredEDeclarationCommodity != '') {
                    this.lrtDtoForSave.eDeclarationCommodity = this.enteredEDeclarationCommodity;
                    //                    console.log( this.lrtDtoForSave.eDeclarationCommodity );
                }
                if (this.selectedEDeclarationId == 'Consignor') {
                    this.lrtDtoForSave.eDeclarationBy = "1";
                }
                else if (this.selectedEDeclarationId == 'GTA') {
                    this.lrtDtoForSave.eDeclarationBy = "0";
                }
                //                console.log( this.lrtDtoForSave.eDeclarationBy );
                this.lrtDtoForSave.bankName = (this.enteredBankName == null ? null : this.enteredBankName == '' ? null : this.enteredBankName);
                this.lrtDtoForSave.godownEntry = this.selectedUserGodown;
                this.lrtDtoForSave.remarks = this.enteredRemarks;
                //                alert( this.lrtDtoForSave.remarks );
                //                this.showSpinner=true;
                this.addingLrDetails(content11);
                //                alert( 'auto' );
            }
            else {
                //                alert( 'dd7' );
                this.lrtDtoForSave.isAutoLR = false;
                this.lrtDtoForSave.arrivalDate = this.enteredArrivalDate;
                if (this.enteredChallanNo == null || this.enteredChallanNo == '') {
                    this.lrtDtoForSave.challanNo = null;
                }
                else {
                    this.lrtDtoForSave.challanNo = this.enteredChallanNo;
                }
                this.lrtDtoForSave.challanKantaWgt = (this.enteredLocalChallanKanta == null ? 0.0 : this.enteredLocalChallanKanta == '' ? 0.0 : this.enteredLocalChallanKanta);
                this.lrtDtoForSave.challanTotLrs = (this.enteredChallanTotLrs == null ? 0 : this.enteredChallanTotLrs == '' ? 0 : this.enteredChallanTotLrs);
                this.lrtDtoForSave.agentName = this.selectedAgentName;
                if (this.enteredVehicleNumber == null || this.enteredVehicleNumber == '') {
                    this.lrtDtoForSave.vehicleNumber = null;
                }
                else {
                    this.lrtDtoForSave.vehicleNumber = this.enteredVehicleNumber;
                }
                if (this.enteredDriverName == null || this.enteredDriverName == '') {
                    this.lrtDtoForSave.driverName = null;
                }
                else {
                    this.lrtDtoForSave.driverName = this.enteredDriverName;
                }
                if (this.selectedLoaderHead == null || this.selectedLoaderHead == '') {
                    this.lrtDtoForSave.unloaderHead = null;
                }
                else {
                    this.lrtDtoForSave.unloaderHead = this.selectedLoaderHead;
                    this.autoLrLoaderHead = this.lrtDtoForSave.unloaderHead;
                }
                //                alert( 'dd8' );
                if (this.lrtDtoForSave.lrNumber != null) {
                    if (this.lrtDtoForSave.lrNumber != 'MUMnull') {
                        //                        alert( 'mul' );
                        //                        this.showSpinner=true;
                        this.addingLrDetails(content11);
                        this.lrtDtoForSave.lrNumber = null;
                    }
                }
            }
        }
    };
    LrEntryFormComponent.prototype.showformanual = function () {
        var _this = this;
        var MainAdminStation = this.userDataDtoReturnSession.mainAdminStation.toLowerCase();
        if ((this.checkAutoLr == false) && (this.checkAutoLrHold == false)) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Success",
                text: "LR Details Saved Successfully",
                icon: "success",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                _this.clearInputFields();
                //                              this.destinationField.nativeElement.focus();
                //                                window.setTimeout( function() {
                //                                    $( "#destination" ).focus();
                //                                }, 100 );
                if (_this.restrictUserGodownList) {
                    window.setTimeout(function () {
                        $("#destination").focus();
                    }, 100);
                }
                else if ((_this.userDataDtoReturnSession.mainAdminStation != null)
                    && (MainAdminStation == 'delhi')
                    && ((_this.checkAutoLr == true) || (_this.checkAutoLrHold == true))) {
                    window.setTimeout(function () {
                        $("#loaderHead").focus();
                    }, 100);
                }
                else if ((_this.userDataDtoReturnSession.mainAdminStation != null)
                    && (MainAdminStation == 'delhi')
                    && ((_this.checkAutoLr == false) || (_this.checkAutoLrHold == false))) {
                    window.setTimeout(function () {
                        $("#noOfArticles").focus();
                    }, 100);
                }
                else {
                    window.setTimeout(function () {
                        $("#destination").focus();
                    }, 100);
                }
            });
        }
    };
    LrEntryFormComponent.prototype.clearInputFields = function () {
        //                alert( 'a1' );
        //        $( 'input[type="text"],[type="number"]' ).val( '' );
        //        this.selectedDestination = null;
        //        //        $( "#destination" ).val( '' );
        //        //        $( "#gcCharge" ).val( '' );
        //        $( "#others" ).val( '' );
        //        this.commaSplitDest = null;
        //        this.destSplit = null;
        //        this.stateByDest = null;
        //        this.selectedAgentName = null;
        //        $( "#agentName" ).val( '' );
        //        this.enteredChallanNo = null;
        //        this.enteredChallanNoAt0 = null;
        //        $( "#challanNo" ).val( '' );
        //        this.enteredArrivalDate = null;
        //        this.selectedLoaderHead = null;
        //        $( "#loaderHead" ).val( '' );
        //        this.selectedUserGodown = null;
        //        $( "userGodown" ).val( '' );
        //        consignor
        this.selectedConsignorId = null;
        this.selectedConsigneeId = null;
        this.selectedconsignorGSTNumber = null;
        $("#consignorGSTNumber").val('');
        this.selectedConsignorName = null;
        $("#consignorName").val('');
        this.selectedNewConsignorName = null;
        $("#newConsignor").val('');
        $("#consignorAddress").val('');
        ///consignee 
        this.selectedconsigneeGSTNumber = null;
        $("#consigneeGSTNumber").val('');
        this.selectedConsigneeName = null;
        $("#consigneeName").val('');
        this.selectedNewConsigneeName = null;
        $("#newConsignee").val('');
        this.selectedConsigneeAddress = null;
        $("#consigneeAddress").val('');
        ///Commodity
        this.selectedPartyCommodity = null;
        $("#partyCommodity").val('');
        this.selectedNewCommodity = null;
        $("#newCommodity").val('');
        this.selectedGoodsTypeCommodity = null;
        $("#goodsType").val('');
        this.enteredSubCommodity = null;
        $("#subCommodity").val('');
        //        this.selectedPackNature = null;
        //        $( "#packNature" ).val( '' );
        //Door Delivery 
        //        $( "#doorDeliveryMode" ).val( 'No' );
        //        this.selectedDoorDelivery = null;
        this.ddAmt = '';
        $("#ddAddress").val('');
        $("#ddAmt").val('');
        this.enteredDDAddress = null;
        //        this.selectedDoorDelivery = $( "#doorDeliveryMode" ).val();
        //        if ( this.selectedDoorDelivery == 'Yes' ) {
        //            this.doorDeliveryYesddAmt= true;
        //            if ( ( this.viewByAutoLr == true ) || ( this.lrCheck == true ) ) {
        //                this.doorDeliveryYes = true;
        //            } else {
        //                this.doorDeliveryYes = false;
        //            }
        //        } else {
        //            $( "#doorDeliveryMode" ).val( 'No' );
        //            this.doorDeliveryYes = false;
        //            this.doorDeliveryYesddAmt=false;
        //        }
        //As per Manoj
        $("#doorDeliveryMode").val('No');
        this.doorDeliveryYes = false;
        this.doorDeliveryYesddAmt = false;
        this.selectedDoorDelivery = null;
        ///Payment Type
        $("#paymentType").val('toPay');
        this.paymentTypePaid = false;
        $("#remarks").val('');
        $("#bankLr").val('No');
        this.bankLrYes = false;
        ///For check box
        $("#checkboxAoc").prop("checked", false);
        $("#checkboxPickupLr").prop("checked", false);
        $("#checkboxToBeBilled").prop("checked", false);
        $("#checkboxUnloadedByConsignee").prop("checked", false);
        $("#checkboxHandleWithCare").prop("checked", false);
        $("#checkboxGatePass").prop("checked", false);
        $("#checkboxCcAttach").prop("checked", false);
        $("#checkboxSelfLr").prop("checked", false);
        $("#checkboxCOD").prop("checked", false);
        $("#checkboxOrderGoods").prop("checked", false);
        $("#checkboxEwayBillExempted").prop("checked", false);
        this.showGoodsType = false;
        this.cbAoc = false;
        this.cbPickUpLr = false;
        this.cbUnloadByConsignee = false;
        this.cbHandleWithCare = false;
        this.cbCOD = false;
        this.cbOrderGoods = false;
        this.cbGatePass = false;
        this.cbCCAttached = false;
        this.cbSelfLr = false;
        this.eWayBillExempted = false;
        $("#finishBtn").prop("disabled", false);
        //        this.controlAgentName.reset();
        //        this.controlLoaderHead.reset();
        this.controlPackNature.reset();
        this.controlPartyGoodsType.reset();
        this.controlConsignor.reset();
        this.controlConsignee.reset();
        //        this.controlDestination.reset();
        this.controlGoodsType.reset();
        this.consignorOptions = [];
        this.consigneeOptions = [];
        $("#gcCharge").val(this.setGcCharge);
        $("#others").val(this.setOthers);
        this.setDefaultCharges();
        this.getOffice = this.userDataDtoReturnSession.office;
        $("#source").val(this.getOffice);
        this.showMultiArt = false;
        this.showNewCommodity = false;
        //Mulit Art Table 
        this.multiArtTableDataList = [];
        this.newAttribute = {};
        $("#multiArtarticle").val('');
        $("#multiArtlength").val('');
        $("#multiArtbreadth").val('');
        $("#multiArtheight").val('');
        this.editTableId = null;
        this.partyMasterDtoForconsignor = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyMasterDtoForconsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyDtoForConsigneeAllCom = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.consigneeAddressPartyDto = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.lrtDtoForAutoLr = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.autoLrRet = '';
        this.lrHold = null;
        this.ddAmtRange = 0.0;
        this.ddAmountRange = 0.0;
        this.enterdChgWgt = 0.0;
        this.ddAmtSys = 0;
        this.enteredChargeWeight = null;
        this.lrtDtoForFovRate = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.isFOVRateSet = false;
        this.fovChg = 0.0;
        this.riskPerc = 0.0;
        this.riskChg = 0.0;
        this.enteredGoodsValue = null;
        this.goodsValue = 0.0;
        this.totalAmt = 0.0;
        this.lrtDtoForChallan = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrCheck = false;
        this.showMultiArt = false;
        this.lrtDtoForMultiArt = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.isBlock = false;
        this.enterArticles = 0;
        this.totArticles = '';
        this.editSelected = false;
        this.lrtDtoForLrCheck = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrtDtoForValidateBkgDate = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.minDDAmt = 0.0;
        this.minDDPerc = 0.0;
        this.lrtDtoForSave = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.partyGoodsType = null;
        this.goodsType = null;
        this.newCommodity = null;
        this.totalAmtNew = 0.0;
        //    this.isPaidLr = false;
        this.selectedBankLr = null;
        this.statusOfCommodity = '';
        this.validateBkgDateClicked = true;
        $("#validateBookingDate").prop("checked", true);
        this.enterdActWgt = 0.0;
        this.remarksTexArea = '';
        this.ddAddressTexArea = '';
        this.selectTodayArrival();
        this.selectTodayBooking();
        this.selectTodayBill();
        $("#noOfArticles").val('');
        $("#actualWeight").val('');
        $("#chargedWeight").val('');
        $("#goodsValue").val('');
        $("#eWayBillNo").val('');
        $("#edeclarationCommodity").val('');
        $("#baseFreight").val('');
        $("#hamali").val('');
        $("#lcCharge").val('');
        $("#bcCharge").val('');
        $("#fov").val('');
        $("#aocCharge").val('');
        $("#totalAmount").val('');
        $("#bankName").val('');
        $("#privateMarker").val('');
        $("#billNo").val('');
        $("#clerkName").val('');
        $("#codCharge").val('');
        this.isPaidLrOnly = false;
        this.clear();
        this.entereCODCharge = '';
        this.modelConsigneeName = '';
        this.modelConsignorName = '';
        this.selectTodayArrival();
        this.selectTodayBooking();
        this.selectTodayBill();
    };
    LrEntryFormComponent.prototype.onCancelClick = function () {
        this.dtTriggerMultiArtTable.unsubscribe();
    };
    LrEntryFormComponent.prototype.onCancelClickPack = function () {
        this.dtTriggerMultiPackTable.unsubscribe();
    };
    LrEntryFormComponent.prototype.validateReset = function () {
        this.selectedAgentName = null;
        $("#agentName").val('');
        this.controlAgentName.reset();
        //        this.viewBkgCashmemo = true;
        //        this.showBkgCashmemoPaid();
    };
    LrEntryFormComponent.prototype.validateBtnFinish = function () {
        this.clearInputFields();
        this.clearAll();
        this.isPaidLrOnly = false;
    };
    LrEntryFormComponent.prototype.clearAll = function () {
        this.lrCount = 0;
        this.lblLRCount = false;
        this.isPaidLr = false;
        $("#automatedLR").prop("checked", false);
        this.viewAutoLr = true;
        this.viewByAutoLr = false;
        this.viewAutoLrHold = true;
        this.lrDtoSaveSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        $("#finishBtn").prop("disabled", true);
        $("#destination").val('');
        this.controlDestination.reset();
        $('input[type="text"],[type="number"]').val('');
        this.selectedDestination = null;
        $("#others").val('');
        this.commaSplitDest = null;
        this.destSplit = null;
        this.stateByDest = null;
        this.selectedAgentName = null;
        $("#agentName").val('');
        this.enteredChallanNo = null;
        this.enteredChallanNoAt0 = null;
        $("#challanNo").val('');
        this.enteredArrivalDate = null;
        this.selectedLoaderHead = null;
        $("#loaderHead").val('');
        this.selectedUserGodown = null;
        $("userGodown").val('');
        this.challanAgentName = '';
        this.enteredVehicleNumber = '';
        this.enteredDriverName = '';
        this.controlAgentName.reset();
        this.controlLoaderHead.reset();
        this.getGCCharges = this.userDataDtoReturnSession.gcCharge;
        this.getOthers = this.userDataDtoReturnSession.others;
        if ((this.getGCCharges != null) && (this.getGCCharges != 0) && (this.getOthers != null) && (this.getOthers != 0)) {
            this.setGcCharge = this.getGCCharges;
            this.setOthers = this.getOthers;
            $("#gcCharge").val(this.setGcCharge);
            $("#others").val(this.setOthers);
        }
        else {
            $("#gcCharge").val('');
            $("#others").val('');
        }
        if (this.restrictUserGodownList) {
            this.defaultGodownName = this.userDataDtoReturnSession.office;
        }
        else {
            this.defaultGodownName = this.userDataDtoReturnSession.mainStation.toUpperCase();
        }
        $("#localChallanKanta").val('');
        this.enteredLocalChallanKanta = '';
        this.selectedTruckNumber = '';
        this.modelVehicleNumber = '';
    };
    /*arrivalDateFocus( e ) {
        if ( e.keyCode == 13 ) {
    //            console.log( 'a' );
            this.challanNoField.nativeElement.focus();
        }
    }*/
    LrEntryFormComponent.prototype.arrivalDateFocus = function (e) {
        if (e.keyCode == 13) {
            this.focusArrivalCalendar();
        }
    };
    LrEntryFormComponent.prototype.loaderHeadFocus = function (e) {
        if (e.keyCode == 13) {
            $("#arrivalDate").focus();
        }
    };
    LrEntryFormComponent.prototype.consignorNameFocus = function (e) {
        if (e.keyCode == 13) {
            this.selectedConsignorName = $("#consignorName").val();
            if (this.selectedConsignorName != null && this.selectedConsignorName == "Add New") {
                this.lblNewConsignor = true;
            }
            else {
                if ((this.selectedConsignorName != null) && (this.selectedConsignorName != "") && (this.selectedConsignorName != "ALL")) {
                    this.consigneeGSTNumberField.nativeElement.focus();
                }
            }
        }
    };
    LrEntryFormComponent.prototype.consigneeNameFocus = function (e, content10) {
        if (e.keyCode == 13) {
            this.selectedConsignee = $("#consigneeName").val();
            //Setting of consignee Id On enter key is Pending and same for consignor also becuase we cant get the option and withour option we cant get the id 
            //            consignee and consignor
            if (this.selectedConsignee != null && this.selectedConsignee == "Add New") {
                this.lblNewConsignee = true;
                //                this.modalService.open( content10, { centered: true } );
                //                this.setValueForConsignee();
                //                $( "#newConsignee" ).focus();
            }
            else {
                if ((this.selectedConsignee != null) && (this.selectedConsignee != "") && (this.selectedConsignee != "ALL")) {
                    this.getBangaloreConsigneeCommodityConsignee();
                    //                  this.partyGoodsTypeField.nativeElement.focus();
                    //By Kamil
                    window.setTimeout(function () {
                        $("#partyCommodity").focus();
                    }, 100);
                }
            }
        }
    };
    LrEntryFormComponent.prototype.partyCommodityFocus = function (e) {
        if (e.keyCode == 13) {
            //            console.log( 'a' );
            this.selectedPartyCommodity = $("#partyCommodity").val();
            //        console.log(this.selectedPartyCommodity);
            if (this.selectedPartyCommodity != null && this.selectedPartyCommodity == "Add New") {
                this.showGoodsType = true;
                this.goodsTypeCommdityOptions = '';
                this.goodsTypeTA = [];
                this.statusOfCommodity = "forGlobalCommodityListBng";
                this.getBangaloreAllCommodityConsignee();
                //this.goodsTypeField.nativeElement.focus();
                $("#goodsType").focus();
            }
            else {
                this.showGoodsType = false;
                this.subCommodityField.nativeElement.focus();
            }
        }
    };
    LrEntryFormComponent.prototype.goodsTypeFocus = function (e) {
        if (e.keyCode == 13) {
            this.selectedGoodsTypeCommodity = $("#goodsType").val();
            if (this.selectedGoodsTypeCommodity != null && this.selectedGoodsTypeCommodity == "Add New") {
                this.showNewCommodity = true;
                this.newCommodityField.nativeElement.focus();
            }
            else {
                this.showNewCommodity = false;
                this.actualWeightField.nativeElement.focus();
            }
        }
    };
    LrEntryFormComponent.prototype.eWayBillNoFocus = function (e) {
        if (e.keyCode == 13) {
            if (this.showEDeclarationId == true) {
                this.edeclarationCommodityField.nativeElement.focus();
            }
            else {
                this.baseFreightField.nativeElement.focus();
            }
        }
    };
    //BY Kamil
    LrEntryFormComponent.prototype.doorDeliModeFocus = function (e, doorDelivery) {
        if (e.keyCode == 13) {
            if (doorDelivery == 'Yes') {
                window.setTimeout(function () {
                    $("#ddAmt").focus();
                }, 1000);
                this.doorDeliveryYes = true;
                this.sum();
            }
            else {
                if (this.showRiskCharge == true) {
                    window.setTimeout(function () {
                        $("#checkboxCOD").focus();
                    }, 1000);
                }
                else {
                    window.setTimeout(function () {
                        $("#paymentType").focus();
                    }, 1000);
                }
                this.doorDeliveryYes = false;
                this.sum();
            }
        }
    };
    //doorDeliModeFocus( e, doorDelivery: string ) {
    //if ( doorDelivery == 'Yes' ) {
    //  this.doorDeliveryYes = true;
    //    this.sum();
    //      this.ddAmtField.nativeElement.focus();
    //    } else {
    //          this.doorDeliveryYes = false;
    //            this.sum();
    //           this.paymentTypeField.nativeElement.focus();
    //  }
    //}
    //    paymentTypeModeFocus( e, paymentType: string ) {
    //        if ( e.keyCode == 13 ) {
    //            if ( paymentType === 'paid' ) {
    //                this.paymentTypePaid = true;
    //                this.bankLrField.nativeElement.focus();
    //            } else {
    //                this.paymentTypePaid = false;
    //                this.bankLrField.nativeElement.focus();
    //            }
    //        }
    //    }
    //
    //    bankLrModeFocus( e, bankLr: string ) {
    //        if ( e.keyCode == 13 ) {
    //            if ( bankLr === 'Yes' ) {
    //                this.bankLrYes = true;
    //                this.bankNameField.nativeElement.focus();
    //            } else {
    //                this.bankLrYes = false;
    //                this.privateMarkerField.nativeElement.focus();
    //            }
    //        }
    //    }
    LrEntryFormComponent.prototype.setPrintLrs = function (resultDtos) {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
            title: "Validation",
            text: "Sure You Want To Take All 3 Copies Print Out Of LR No:" + resultDtos.lrNumber,
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
            buttons: ["No", "Yes"],
        }).then(function (printLr) {
            if (printLr) {
                //Pending 
                if (_this.stateByDest == 'Kerala') {
                    //Pending 
                    //                new LrAutoAllPrintOut(resultDtos1, "ALL", "KL",
                    //                        "original");
                    _this.resultDtos.lrEntryCopyType = 'ALL';
                    _this.resultDtos.lrEntryMode = 'KL';
                    _this.resultDtos.lrEntryPrintMode = 'original';
                    _this.lrAutoAllPrintOut(_this.resultDtos);
                }
                else {
                    //                    alert( 'JJJ' );
                    _this.resultDtos.lrEntryCopyType = 'ALL';
                    _this.resultDtos.lrEntryMode = 'Others';
                    _this.resultDtos.lrEntryPrintMode = 'original';
                    _this.lrAutoAllPrintOut(_this.resultDtos);
                    //Pending 
                    //                new LrAutoAllPrintOut(resultDtos1, "ALL",
                    //                        "Others", "original");
                }
            }
            else {
                _this.isPaidLr = false;
                _this.selectedDestination = null;
                //                $( "#destination" ).val( '' );
                window.setTimeout(function () {
                    $("#destination").focus();
                }, 100);
                _this.clearInputFields();
                if (_this.viewAutoLrHold == true) {
                    _this.getAutomatedLrHoldDetails();
                }
                else {
                    _this.getAutoLrNo();
                }
            }
        });
    };
    LrEntryFormComponent.prototype.lrAutoAllPrintOut = function (resultDtos) {
        var _this = this;
        //      this.getUserValues();
        localStorage.clear();
        //        console.log( this.resultDtos );
        localStorage.setItem('printAfterSaveForLrEntry', JSON.stringify(this.resultDtos));
        this.viewLrEntryPrint = true;
        this.lrEntryForm = false;
        window.addEventListener('afterprint', function (onclick) {
            if (_this.viewLrEntryPrint) {
                _this.viewLrEntryPrint = false;
                _this.lrEntryForm = true;
                window.setTimeout(function () {
                    $("#destination").focus();
                }, 100);
                _this.clearInputFields();
                if (_this.viewAutoLrHold == true) {
                    //   console.log( 'aaa1212' );
                    _this.getAutomatedLrHoldDetails();
                    window.setTimeout(function () {
                        $("#automatedLRHold").prop("checked", true);
                    }, 1000);
                    //    console.log( this.autoLrLoaderHead, this.viewByAutoLr );
                    setTimeout(function () {
                        _this.setLoaderHeadVal();
                    }, 5000);
                }
                else {
                    //   console.log( 'aaa12121' );
                    _this.getAutoLrNo();
                    window.setTimeout(function () {
                        $("#automatedLR").prop("checked", true);
                    }, 1000);
                    //    console.log( this.autoLrLoaderHead, this.viewByAutoLr );
                    setTimeout(function () {
                        _this.setLoaderHeadVal();
                    }, 5000);
                }
            }
        });
        //        console.log( localStorage.getItem( 'print' ) );
        //        $( "#lrNumber" ).focus();
    };
    LrEntryFormComponent.prototype.setLoaderHeadVal = function () {
        $("#loaderHead").val(this.autoLrLoaderHead);
        this.autoLrLoaderHead = '';
    };
    LrEntryFormComponent.prototype.afterPrint = function () {
        this.viewLrEntryPrint = false;
        this.lrEntryForm = true;
    };
    LrEntryFormComponent.prototype.clear = function () {
        this.consignorOptionsRet = [];
        this.consigneeOptionsRet = [];
        this.consignorTA = [];
        this.consigneeTA = [];
        this.partyCommodityTA = [];
        this.showMainCommodity = false;
        this.selectedConsignee = '';
        this.bangaloreConsigneeCommdityOptions = '';
        this.partyDtoForConsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        //  lblNewConsignor = true;
        //  lblNewConsignee = true;
        this.consigneeAddressRet = '';
        this.resultDtos = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.resultDtosRet = '';
        this.fovRateValidateRet = '';
        this.baseFreight = '';
        this.hamali = '';
        this.gcCharge = '';
        this.lcCharge = '';
        this.bcCharge = '';
        this.aocCharge = '';
        this.insuranceCharge = '';
        this.others = '';
        this.enteredRiskChg = '';
        this.paymentType = '';
        this.enteredTotalAmt = '';
        this.enteredChargedWeight = '';
        this.ratePerChgWgt = '';
        this.actualWeight = '';
        this.chargedWeight = '';
        this.lrtDtoForChallanRet = '';
        this.enteredlrNumber = '';
        this.lrtDtoForMultiArtRetSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.multiArtArticle = '';
        this.getArticles = '';
        this.getGCCharges = 0.0;
        this.getOthers = 0.0;
        this.lrtDtoForLrCheckRet = '';
        this.lrtDtoForLrCheckSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.lrtDtoForMissAgentRet = '';
        this.lrtDtoForMissAgentSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.enteredBookingDate = '';
        this.enteredSource = '';
        this.enteredActualWeight = '';
        this.lrtDtoForValidateBkgDateRet = '';
        this.lrtDtoForValidateBkgDateSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.bookingDateGet = '';
        this.enteredEWayBillNo = '';
        this.toBeBilledParty = false;
        this.enteredAutoLrNumber = '';
        this.showSubCommodity = true;
        this.enteredBillNumber = '';
        this.enteredClerkName = '';
        this.enteredBillDate = '';
        this.enteredPrivateMarker = '';
        this.selectedSerTaxPayingBy = '';
        this.enteredChargedWeightLR = '';
        //Pending
        //  showEDeclarationId = false;
        //  selectedEDeclarationId: any;
        //  enteredEDeclarationCommodity: any;
        this.enteredBankName = '';
        //Pending how to clear the textarea
        this.enteredRemarks = '';
        this.lrDtoSaveRet = '';
        this.lrDtoSaveSet = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_5__["LRDto"]();
        this.mainAdminStationGet = '';
        //        this.challanAgentName = '';
        this.maxActWgt = '';
        this.maxChgWgt = '';
        this.subCommodityName = '';
        //        this.enteredVehicleNumber = '';
        //        this.enteredDriverName = '';
        if (this.viewByAutoLr == true) {
            //    console.log( 'so  :' + this.autoLrFieldValue );
            $("#autoLrNumber").val(this.autoLrFieldValue);
            this.autoLrFieldValue = '';
        }
        else {
            this.autoLrFieldValue = '';
        }
        this.multiPackNatureTableDataList = [];
        this.newAttributeMultiPack = {};
        this.showMultiPackNature = false;
        this.controlPackNatureNew.reset();
        this.editTableIdMultiPack = null;
        $("#multiPackNatureNew").val('');
        $("#multiPackNatureArtilces").val('');
        $("#hiddenIndexPackNature").val('');
        ///popupconginor and consignee 
        this.controlConsignorState.reset();
        this.controlConsigneeState.reset();
        this.ValidateClearNewConsignorDetails();
        this.ValidateClearNewConsigneeDetails();
        this.newConsignorStateCode = '';
        this.newConsigneeStateCode = '';
        this.partyDtoForNewConsignor = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyDtoForNewConsignorRet = '';
        this.partyDtoForNewConsignorSet = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyDtoForNewConsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.partyDtoForNewConsigneeRet = '';
        this.partyDtoForNewConsigneeSet = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
        this.setConsignorAddress = '';
        this.setConsigneeAddress = '';
    };
    LrEntryFormComponent.prototype.addInTablePackNature = function () {
        this.newAttributeMultiPack.multiplePackNatureNew = $("#multiPackNatureNew").val();
        this.newAttributeMultiPack.multiplePackNatureArt = $("#multiPackNatureArtilces").val();
        if ((this.newAttributeMultiPack.multiplePackNatureNew != null) && (this.newAttributeMultiPack.multiplePackNatureNew != '') && (this.newAttributeMultiPack.multiplePackNatureArt != null) && (this.newAttributeMultiPack.multiplePackNatureArt != '')) {
            if (this.editTableIdMultiPack != null) {
                this.multiPackNatureTableDataList.splice(this.editTableIdMultiPack, 1);
            }
            if (this.multiPackNatureTableDataList == null) {
                this.multiPackNatureTableDataList = [];
            }
            if (this.multiPackNatureTableDataList.length == 0) {
                this.multiPackNatureTableDataList.push(this.newAttributeMultiPack);
            }
            else {
                var array = this.multiPackNatureTableDataList;
                this.multiPackNatureTableDataList.push(this.newAttributeMultiPack);
            }
            this.newAttributeMultiPack = {};
            $("#multiPackNatureNew").val('');
            $("#multiPackNatureArtilces").val('');
            $("#hiddenIndexPackNature").val('');
            this.editTableIdMultiPack = null;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Warning",
                text: "Please Enter the Mandetory Fields",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
    };
    LrEntryFormComponent.prototype.rowSelectedEditPackNature = function (multiplePackNatureTableData, index) {
        $("#multiPackNatureNew").val(multiplePackNatureTableData.multiplePackNatureNew);
        $("#multiPackNatureArtilces").val(multiplePackNatureTableData.multiplePackNatureArt);
        $("#hiddenIndexPackNature").val(index);
        this.editTableIdMultiPack = index;
    };
    LrEntryFormComponent.prototype.rowSelectedDeletePackNature = function (index) {
        this.multiPackNatureTableDataList.splice(index, 1);
        $("#multiPackNatureNew").val('');
        $("#multiPackNatureArtilces").val('');
        $("#hiddenIndexPackNature").val('');
    };
    LrEntryFormComponent.prototype.multiPackDetailsTable = function () {
        //the first datatable starts
        this.dtOptionsMultiPackTable = {
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
            "paging": true,
            "info": true,
            pagingType: 'full_numbers',
            pageLength: 9,
        };
    };
    LrEntryFormComponent.prototype.getMethodForgetStateDetails = function () {
        this.partyMasterDto.companyId = this.userDataDtoReturnSession.companyId;
    };
    LrEntryFormComponent.prototype.getStateDetails = function () {
        var _this = this;
        this.getMethodForgetStateDetails();
        this.masterReadService.getStateDetailsService(this.partyMasterDto).subscribe(function (response) {
            if (response) {
                _this.stateDetailsList = response;
                _this.consigneeStateOptions = _this.stateDetailsList;
                _this.consignorStateOptions = _this.stateDetailsList;
            }
        }), function (error) { return sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
            title: "Error",
            text: "Server Error While Getting Message In Print Details",
            icon: "warning",
            closeOnClickOutside: false,
            closeOnEsc: false,
        }); },
            function () { return console.log('done'); };
    };
    // Adding new consignor and Consignee 
    LrEntryFormComponent.prototype.stateSelectedConsignor = function (option) {
        this.newConsignorStateCode = option.stateCode;
        //        this.consignorMobileNumberField.nativeElement.focus();
    };
    LrEntryFormComponent.prototype.stateSelectedConsignee = function (option) {
        this.newConsigneeStateCode = option.stateCode;
        //        console.log( this.newConsigneeStateCode );
    };
    LrEntryFormComponent.prototype.validateNewConsignor = function () {
        this.enteredNewConsignorGSTNo = $("#gstNoConsignor").val();
        this.enteredNewConsignorState = $("#consignorState").val();
        //        console.log( this.enteredNewConsignorState );
        if ((this.enteredNewConsignorGSTNo == null) || (this.enteredNewConsignorGSTNo = '')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Mandatory Field",
                text: "Please add New Consignor GST number",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if ((this.enteredNewConsignorState == null) || (this.enteredNewConsignorState = '')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Mandatory Field",
                text: "Please Select the State",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.saveNewConsignorDetails();
        }
    };
    LrEntryFormComponent.prototype.saveNewConsignorInfo = function () {
        this.selectedNewConsignorName = $("#newConsignor").val();
        this.enteredNewConsignorGSTNo = $("#gstNoConsignor").val();
        this.enteredNewConsignorAddress = $("#newConsignorAddress").val();
        this.enteredNewConsignorState = $("#consignorState").val();
        this.enteredNewConsignorMobileNo = $("#consignorMobileNumber").val();
        this.enteredNewConsignorOfficeNo = $("#consignorOfficeNumber").val();
        this.partyDtoForNewConsignor.companyId = this.userDataDtoReturnSession.companyId;
        this.partyDtoForNewConsignor.consignorName = this.selectedNewConsignorName.toUpperCase();
        this.partyDtoForNewConsignor.address = this.enteredNewConsignorAddress;
        this.partyDtoForNewConsignor.officeNumber = this.enteredNewConsignorOfficeNo;
        this.partyDtoForNewConsignor.state = this.enteredNewConsignorState;
        this.partyDtoForNewConsignor.stateCode = this.newConsignorStateCode;
        this.partyDtoForNewConsignor.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        this.partyDtoForNewConsignor.consignorId = 0;
        this.partyDtoForNewConsignor.mobileNumber = this.enteredNewConsignorMobileNo;
        this.partyDtoForNewConsignor.gstNoConsignor = this.enteredNewConsignorGSTNo;
        this.partyDtoForNewConsignor.isConfirmed = false;
        this.partyDtoForNewConsignor.isLatest = true;
    };
    LrEntryFormComponent.prototype.getConsignor = function () {
        this.selectedConsignorId = this.partyDtoForNewConsignorSet.consignorId;
        this.selectedNewConsignorName = this.partyDtoForNewConsignorSet.consignorName;
        this.controlConsignor.reset();
        this.consignorOptionsRet = [];
        this.consignorOptionsAdd.consignorName = this.selectedNewConsignorName;
        this.consignorOptionsRet.push(this.consignorOptionsAdd);
        //        this.consignorOptionsAdd.consignorName = "Add New"
        //        this.consignorOptionsRet.push( this.consignorOptionsAdd );
        this.consignorTA = [];
        for (var i = 0; i < this.consignorOptionsRet.length; i++) {
            this.consignorTA.push(this.consignorOptionsRet[i]);
        }
        $("#consignorName").val(this.partyDtoForNewConsignorSet.consignorName);
        //        console.log( this.partyDtoFNewConsignorSet.address );
        this.setConsignorAddress = this.partyDtoForNewConsignorSet.address;
        this.consigneeGSTNumberField.nativeElement.focus();
        this.ValidateClearNewConsignorDetails();
    };
    LrEntryFormComponent.prototype.setValueForConsignor = function () {
        this.selectedconsignorGSTNumber = $("#consignorGSTNumber").val();
        $("#gstNoConsignor").val(this.selectedconsignorGSTNumber);
        //        this.newConsignorField.nativeElement.focus();
    };
    LrEntryFormComponent.prototype.ValidateClearNewConsignorDetails = function () {
        this.selectedNewConsignorName = '';
        $("#newConsignor").val('');
        this.enteredNewConsignorGSTNo = '';
        $("#gstNoConsignor").val('');
        this.enteredNewConsignorAddress = '';
        $("#newConsignorAddress").val('');
        this.enteredNewConsignorState = '';
        $("#consignorState").val('');
        this.enteredNewConsignorMobileNo = '';
        $("#consignorMobileNumber").val('');
        this.enteredNewConsignorOfficeNo = '';
        $("#consignorOfficeNumber").val('');
        this.partyDtoForNewConsignor = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
    };
    //For Consignee
    LrEntryFormComponent.prototype.validateNewConsignee = function () {
        this.enteredNewConsigneeGSTNo = $("#gstNoConsignee").val();
        this.enteredNewConsigneeState = $("#consigneeState").val();
        if ((this.enteredNewConsigneeGSTNo == null) || (this.enteredNewConsigneeGSTNo == '')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Mandatory Field",
                text: "Please add New Consignee GST number",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else if ((this.enteredNewConsigneeState == null) || (this.enteredNewConsigneeState == '')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Mandatory Field",
                text: "Please Select the State",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.saveNewConsigneeDetails();
        }
    };
    LrEntryFormComponent.prototype.saveNewConsigneeInfo = function () {
        this.selectedNewConsigneeName = $("#newConsignee").val();
        this.enteredNewConsigneeGSTNo = $("#gstNoConsignee").val();
        this.enteredNewConsigneeAddress = $("#newConsigneeAddress").val();
        this.enteredNewConsigneeState = $("#consigneeState").val();
        this.selectedDestination = $("#destination").val();
        this.commaSplitDest = this.selectedDestination.split("-");
        this.destSplit = this.commaSplitDest[0];
        this.partyDtoForNewConsignee.companyId = this.userDataDtoReturnSession.companyId;
        this.partyDtoForNewConsignee.consigneeName = this.selectedNewConsigneeName.toUpperCase();
        this.partyDtoForNewConsignee.address = this.enteredNewConsigneeAddress;
        this.partyDtoForNewConsignee.state = this.enteredNewConsigneeState;
        this.partyDtoForNewConsignee.stateCode = this.newConsigneeStateCode;
        this.partyDtoForNewConsignee.gstNoConsignee = this.enteredNewConsigneeGSTNo;
        this.partyDtoForNewConsignee.status = 'Partial';
        this.partyDtoForNewConsignee.city = this.destSplit;
    };
    LrEntryFormComponent.prototype.getConsignee = function () {
        this.selectedConsigneeId = this.partyDtoForNewConsigneeSet.consigneeId;
        this.selectedNewConsigneeName = this.partyDtoForNewConsigneeSet.consigneeName;
        this.controlConsignor.reset();
        this.consigneeOptionsRet = [];
        this.consigneeOptionsAdd.consigneeName = this.selectedNewConsigneeName;
        this.consigneeOptionsRet.push(this.consigneeOptionsAdd);
        this.consigneeTA = [];
        for (var i = 0; i < this.consigneeOptionsRet.length; i++) {
            this.consigneeTA.push(this.consigneeOptionsRet[i]);
        }
        $("#consigneeName").val(this.partyDtoForNewConsigneeSet.consigneeName);
        //        console.log( this.partyDtoFNewConsigneeSet.address );
        this.setConsigneeAddress = this.partyDtoForNewConsigneeSet.address;
        this.isPaidLrOnly = this.partyDtoForNewConsigneeSet.isPaidOnly == null ? false : this.partyDtoForNewConsigneeSet.isPaidOnly;
        this.consigneeGSTNumberField.nativeElement.focus();
        //    console.log( this.isPaidLrOnly );
        this.ValidateClearNewConsigneeDetails();
    };
    LrEntryFormComponent.prototype.ValidateClearNewConsigneeDetails = function () {
        this.selectedNewConsigneeName = '';
        $("#newConsignee").val('');
        this.enteredNewConsigneeGSTNo = '';
        $("#gstNoConsignee").val('');
        this.enteredNewConsigneeAddress = '';
        $("#newConsigneeAddress").val('');
        this.enteredNewConsigneeState = '';
        $("#consigneeState").val('');
        this.partyDtoForNewConsignee = new src_app_dto_PartyMaster_dto__WEBPACK_IMPORTED_MODULE_9__["PartyMasterDto"]();
    };
    LrEntryFormComponent.prototype.setValueForConsignee = function () {
        this.selectedconsigneeGSTNumber = $("#consigneeGSTNumber").val();
        $("#gstNoConsignee").val(this.selectedconsigneeGSTNumber);
        //        this.newConsigneeField.nativeElement.focus();
    };
    //   /for modal starts
    //    showBkgCashmemoPaid(): void {
    //        this.lrDtoForBooking.lrNumber = '11'
    //        this.lrDtoForBooking.mode = '2';
    //
    //        const dialogRef = this.dialog.open( BookingCashmemoComponent, {
    //
    //            data: { listOfDataToPass: this.lrDtoForBooking }
    //        } );
    //
    //        dialogRef.afterClosed().subscribe( result => {
    //
    //            this.router.navigate( ['.'], { relativeTo: this.route } );
    //        } );
    //    }
    //For Multiple Articles pop 
    LrEntryFormComponent.prototype.open11 = function (content11) {
        var _this = this;
        this.modalService.open(content11, { centered: true, windowClass: "myCustomModalClass" }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrEntryFormComponent.prototype.showBkgCashmemoPaid = function (content11) {
        this.lrDtoForBooking.lrNumber = this.resultDtos.lrNumber;
        this.lrDtoForBooking.mode = 'lrEntry';
        localStorage.clear();
        //    console.log( this.lrDtoForBooking );
        localStorage.setItem('showBkgCashmemo', JSON.stringify(this.lrDtoForBooking));
        this.modalService.open(content11, { centered: true, windowClass: "myCustomModalClass" });
    };
    LrEntryFormComponent.prototype.showBkgCashmemoPaidClear = function () {
        if (this.isPaidLrForManual) {
            this.setvalueafterManual();
            this.isPaidLrForManual = false;
        }
        else {
            window.setTimeout(function () {
                $("#destination").focus();
            }, 100);
            this.clearInputFields();
            if (this.viewAutoLrHold == true) {
                this.getAutomatedLrHoldDetails();
            }
            else {
                this.getAutoLrNo();
            }
        }
    };
    LrEntryFormComponent.prototype.setvalueafterManual = function () {
        $("#lrNumber").val('');
        var MainAdminStation = this.userDataDtoReturnSession.mainAdminStation.toLowerCase();
        this.clearInputFields();
        if (this.restrictUserGodownList) {
            window.setTimeout(function () {
                $("#destination").focus();
            }, 100);
        }
        else if ((this.userDataDtoReturnSession.mainAdminStation != null)
            && (MainAdminStation == 'delhi')
            && ((this.checkAutoLr == true) || (this.checkAutoLrHold == true))) {
            window.setTimeout(function () {
                $("#loaderHead").focus();
            }, 100);
        }
        else if ((this.userDataDtoReturnSession.mainAdminStation != null)
            && (MainAdminStation == 'delhi')
            && ((this.checkAutoLr == false) || (this.checkAutoLrHold == false))) {
            window.setTimeout(function () {
                $("#noOfArticles").focus();
            }, 100);
        }
        else {
            window.setTimeout(function () {
                $("#destination").focus();
            }, 100);
        }
    };
    //By Kamil
    LrEntryFormComponent.prototype.showMainComm = function (option, instance) {
        this.selectedDestination = option;
        this.commaSplitDest = this.selectedDestination.split("-");
        this.destSplit = this.commaSplitDest[0];
        this.stateByDest = this.commaSplitDest[1];
        if (this.stateByDest == ' Kerala') {
            this.showEDeclarationId = true;
        }
        else {
            this.showEDeclarationId = false;
        }
        if ((this.viewByAutoLr == true) || (this.lrCheck == true)) {
            $("#bookingDate").focus();
            //            this.autoLrNumberField.nativeElement.focus();
        }
        else {
            this.showMainCommodity = true;
            $("#lrNumber").focus();
            //            this.lrNumberField.nativeElement.focus();
        }
    };
    LrEntryFormComponent.prototype.viewMainCommodity = function (e) {
        if (e.keyCode == 13) {
            this.selectedDestination = $("#destination").val();
            this.commaSplitDest = this.selectedDestination.split("-");
            this.destSplit = this.commaSplitDest[0];
            this.stateByDest = this.commaSplitDest[1];
            if (this.selectedDestination != null && this.selectedDestination != '') {
                this.showMainCommodity = true;
                // calling this method again to revise the chg for
                // chennai @dated : 09/09/2020
                this.setDefaultCharges();
                //                if ( this.stateByDest=='Karnataka') {
                //                    listBoxTPCommodity.clear();
                //                    listBoxTPCommodity.addItem("NA");
                //
                //                } else {
                //                    getCommodityNames();
                //                }
                //
                //                listBoxTPCommodity.clear();
                //                txtSubCommodity.clear();
                //                listBoxTPCommodity.addItem("NA");
                //                lblPartyCommodity.setText("Main Commodity:");
                if ((this.viewByAutoLr == true) || (this.lrCheck == true)) {
                    //                    this.autoLrNumberField.nativeElement.focus();
                    $("#bookingDate").focus();
                }
                else {
                    //                    this.lrNumberField.nativeElement.focus();
                    $("#lrNumber").focus();
                }
            }
            if (this.stateByDest == 'Kerala') {
                this.showEDeclarationId = true;
            }
            else {
                this.showEDeclarationId = false;
            }
        }
    };
    LrEntryFormComponent.prototype.fieldFocusPackNatureNew = function (e) {
        if (e.keyCode == 13) {
            window.setTimeout(function () {
                $("#multiPackNatureArtilces").focus();
            }, 100);
        }
    };
    LrEntryFormComponent.prototype.packNaturesNew = function () {
        window.setTimeout(function () {
            $("#multiPackNatureArtilces").focus();
        }, 100);
    };
    LrEntryFormComponent.prototype.multiPackNatureFocus = function () {
        window.setTimeout(function () {
            $("#consignorGSTNumber").focus();
        }, 100);
    };
    LrEntryFormComponent.prototype.newCommodityEvent = function (e) {
        if (e.keyCode == 13) {
            window.setTimeout(function () {
                $("#actualWeight").focus();
            }, 100);
            //window.setTimeout( function() {
            //  $( "#subCommodity" ).focus();
            //}, 100 );
        }
    };
    LrEntryFormComponent.prototype.multiArtFocus = function () {
        window.setTimeout(function () {
            $("#goodsValue").focus();
        }, 100);
    };
    LrEntryFormComponent.prototype.focusArrivalCalendar = function () {
        window.setTimeout(function () {
            $("#challanNo").focus();
        }, 100);
        //        this.challanNoField.nativeElement.focus();
    };
    LrEntryFormComponent.prototype.clerkEvent = function (e) {
        if (e.keyCode == 13) {
            window.setTimeout(function () {
                $("#billDate").focus();
            }, 1000);
        }
    };
    LrEntryFormComponent.prototype.focusBookingCalendar = function () {
        var enterBookingDate = null;
        enterBookingDate = $("#bookingDate").val();
        this.enteredBookingDate = this.datePipe.transform(enterBookingDate, "yyyy-MM-dd");
        if (this.viewByAutoLr == true || this.lrCheck == true) {
            //                alert( '2' );
            if (this.validateBkgDateClicked == true && this.enteredBookingDate != null) {
                this.validateLrBookingDateGet();
            }
            else {
                //                    alert( '4' );
                window.setTimeout(function () {
                    $("#noOfArticles").focus();
                }, 100);
            }
        }
        else {
            //                alert( '4' );
            window.setTimeout(function () {
                $("#noOfArticles").focus();
            }, 100);
        }
        //        this.challanNoField.nativeElement.focus();
    };
    LrEntryFormComponent.prototype.focusBillCalendar = function () {
        this.paymentType = $("#paymentType").val();
        this.selectedDestination = $("#destination").val();
        this.commaSplitDest = this.selectedDestination.split("-");
        this.destSplit = this.commaSplitDest[0];
        this.stateByDest = this.commaSplitDest[1];
        if (this.viewByAutoLr != true && this.paymentType == 'paid') {
            window.setTimeout(function () {
                $("#serTaxPayingBy").focus();
            }, 100);
        }
        else if (this.viewByAutoLr != true && this.paymentType == 'toPay') {
            if (this.stateByDest == ' Kerala') {
                window.setTimeout(function () {
                    $("#edeclarationId").focus();
                }, 100);
            }
            else {
                window.setTimeout(function () {
                    //                    $( "#checkboxAoc" ).focus();
                    $("#nextBtn").focus();
                }, 100);
            }
        }
        else if (this.viewByAutoLr == true) {
            window.setTimeout(function () {
                $("#remarks").focus();
            }, 100);
        }
    };
    LrEntryFormComponent.prototype.focusBillCalendarEnter = function (e) {
        if (e.keyCode == 13) {
            this.paymentType = $("#paymentType").val();
            this.selectedDestination = $("#destination").val();
            this.commaSplitDest = this.selectedDestination.split("-");
            this.destSplit = this.commaSplitDest[0];
            this.stateByDest = this.commaSplitDest[1];
            if (this.viewByAutoLr != true && this.paymentType == 'paid') {
                window.setTimeout(function () {
                    $("#serTaxPayingBy").focus();
                }, 100);
            }
            else if (this.viewByAutoLr != true && this.paymentType == 'toPay') {
                if (this.stateByDest == ' Kerala') {
                    window.setTimeout(function () {
                        $("#edeclarationId").focus();
                    }, 100);
                }
                else {
                    window.setTimeout(function () {
                        //                        $( "#checkboxAoc" ).focus();
                        $("#nextBtn").focus();
                    }, 100);
                }
            }
            else if (this.viewByAutoLr == true) {
                window.setTimeout(function () {
                    $("#remarks").focus();
                }, 100);
            }
        }
    };
    //    serTaxPayingByMethod() {
    //        window.setTimeout( function() {
    //            $( "#checkboxAoc" ).focus();
    //        }, 100 );
    //    }
    LrEntryFormComponent.prototype.remarksFocus = function (e) {
        if (e.keyCode == 13) {
            $("#actualChargedWeightExtra").focus();
        }
    };
    //    actualChargedWeightExtraFocus( e ) {
    //        this.paymentType = $( "#paymentType" ).val();
    //        if ( e.keyCode == 13 ) {
    //            if ( this.paymentType == 'toPay' ) {
    //                $( "#checkboxAoc" ).focus();
    //            } else if ( this.paymentType == 'paid' ) {
    //                $( "#serTaxPayingBy" ).focus();
    //            }
    //        }
    //    }
    LrEntryFormComponent.prototype.paymentTypeModeFocus = function (e, paymentType) {
        if (e.keyCode == 13) {
            if (paymentType === 'paid') {
                this.paymentTypePaid = true;
                window.setTimeout(function () {
                    $("#bankLr").focus();
                }, 1000);
            }
            else {
                this.paymentTypePaid = false;
                window.setTimeout(function () {
                    $("#bankLr").focus();
                }, 1000);
            }
        }
    };
    LrEntryFormComponent.prototype.bankLrModeFocus = function (e, bankLr) {
        if (e.keyCode == 13) {
            if (bankLr === 'Yes') {
                this.bankLrYes = true;
                window.setTimeout(function () {
                    $("#bankName").focus();
                }, 1000);
            }
            else {
                this.bankLrYes = false;
                window.setTimeout(function () {
                    $("#privateMarker").focus();
                }, 1000);
            }
        }
    };
    LrEntryFormComponent.prototype.serTaxPayingByFocusMethod = function (e) {
        if (e.keyCode == 13) {
            this.selectedDestination = $("#destination").val();
            this.commaSplitDest = this.selectedDestination.split("-");
            this.destSplit = this.commaSplitDest[0];
            this.stateByDest = this.commaSplitDest[1];
            if (this.stateByDest == ' Kerala') {
                $("#edeclarationId").focus();
            }
            else {
                window.setTimeout(function () {
                    //                    $( "#checkboxAoc" ).focus();
                    $("#nextBtn").focus();
                }, 1000);
            }
        }
    };
    LrEntryFormComponent.prototype.serTaxPayingByMethod = function () {
        this.selectedDestination = $("#destination").val();
        this.commaSplitDest = this.selectedDestination.split("-");
        this.destSplit = this.commaSplitDest[0];
        this.stateByDest = this.commaSplitDest[1];
        if (this.stateByDest == ' Kerala') {
            $("#edeclarationId").focus();
        }
        else {
            window.setTimeout(function () {
                //                $( "#checkboxAoc" ).focus();
                $("#nextBtn").focus();
            }, 1000);
        }
    };
    LrEntryFormComponent.prototype.edeclarationIdFocusMethod = function (e) {
        if (e.keyCode == 13) {
            window.setTimeout(function () {
                //                $( "#checkboxAoc" ).focus();
                $("#nextBtn").focus();
            }, 1000);
        }
    };
    LrEntryFormComponent.prototype.edeclarationIdMethod = function () {
        window.setTimeout(function () {
            //            $( "#checkboxAoc" ).focus();
            $("#nextBtn").focus();
        }, 1000);
    };
    LrEntryFormComponent.prototype.actualChargedWeightExtraFocus = function (e) {
        this.paymentType = $("#paymentType").val();
        this.selectedDestination = $("#destination").val();
        this.commaSplitDest = this.selectedDestination.split("-");
        this.destSplit = this.commaSplitDest[0];
        this.stateByDest = this.commaSplitDest[1];
        if (e.keyCode == 13) {
            if (this.stateByDest == ' Kerala') {
                if (this.paymentType == 'toPay') {
                    $("#edeclarationId").focus();
                }
                else if (this.paymentType == 'paid') {
                    $("#serTaxPayingBy").focus();
                }
            }
            else {
                if (this.paymentType == 'toPay') {
                    //                    $( "#checkboxAoc" ).focus();
                    $("#nextBtn").focus();
                }
                else if (this.paymentType == 'paid') {
                    $("#serTaxPayingBy").focus();
                }
            }
        }
    };
    LrEntryFormComponent.prototype.clickTA = function (inp) {
        inp._elementRef.nativeElement.value = '';
        inp._elementRef.nativeElement.dispatchEvent(new Event('input'));
        inp._elementRef.nativeElement.focus();
    };
    LrEntryFormComponent.prototype.closeNewConsignor = function () {
        window.setTimeout(function () {
            $("#consigneeGSTNumber").focus();
        }, 100);
    };
    LrEntryFormComponent.prototype.closeNewConsignee = function () {
        if ((this.selectedConsignee != null) && (this.selectedConsignee != "") && (this.selectedConsignee != "ALL")) {
            this.getBangaloreConsigneeCommodityConsignee();
            //this.partyGoodsTypeField.nativeElement.focus();
            window.setTimeout(function () {
                $("#partyCommodity").focus();
            }, 100);
        }
    };
    LrEntryFormComponent.prototype.viewGodwn = function (e) {
        if (e.keyCode == 13) {
            window.setTimeout(function () {
                $("#arrivalDate").focus();
            }, 100);
        }
    };
    ///// started from here 
    LrEntryFormComponent.prototype.getAgentTempoDetailsForRead = function () {
        this.truckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_19__["TruckDataDto"]();
        this.truckDataDto.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDto.mainStation = this.userDataDtoReturnSession.mainAdminStation;
    };
    LrEntryFormComponent.prototype.vehicleNumberFocusEvent = function (e, content12) {
        this.modelVehicleNumber = e.item;
        this.enteredTruckNumber = this.modelVehicleNumber;
        if (this.enteredTruckNumber != null && this.enteredTruckNumber == 'ADD NEW') {
            this.modalService.open(content12, { centered: true });
            window.setTimeout(function () {
                $('#truckNumber').focus();
            }, 100);
        }
        else {
            window.setTimeout(function () {
                $('#companyName').focus();
            }, 100);
        }
    };
    LrEntryFormComponent.prototype.checkTempoNumber = function (e) {
        this.enteredTruckNumber = $("#truckNumber").val();
        if (e.keyCode == 13) {
            if ((this.enteredTruckNumber != '') || (this.enteredTruckNumber != null)) {
                this.tempoNumberChk();
            }
        }
    };
    LrEntryFormComponent.prototype.validateAgentTempoDetails = function () {
        this.enteredTruckNumber = $("#truckNumber").val();
        this.enteredTruckCapacity = $("#truckCapacityInTones").val();
        if ((this.enteredTruckNumber == '') || (this.enteredTruckNumber == null) || (this.enteredTruckCapacity == '') || (this.enteredTruckCapacity == null)) {
            sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                title: "Warning",
                text: "Please Enter the Mandetory Fields",
                icon: "warning",
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        }
        else {
            this.enteredTruckNumber = this.enteredTruckNumber.replace(/\s/g, "");
            if (this.enteredTruckNumber.length < 9) {
                sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                    title: "Alert",
                    text: "The Entered Truck Number has less then nine latters",
                    icon: "warning",
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                }).then(function () {
                    window.setTimeout(function () {
                        $('#truckNumber').focus();
                    }, 100);
                });
            }
            else {
                if (/\d/.test(this.enteredTruckNumber) && /[a-zA-Z]/.test(this.enteredTruckNumber)) {
                    this.saveUpdateAgentTempoDetails();
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_13___default()({
                        title: "Alert",
                        text: "The Entered Truck Number is not valid, it should be Alphanumeric",
                        icon: "warning",
                        closeOnClickOutside: false,
                        closeOnEsc: false,
                    }).then(function () {
                        window.setTimeout(function () {
                            $('#truckNumber').focus();
                        }, 100);
                    });
                }
            }
        }
    };
    LrEntryFormComponent.prototype.getAgentTempoDetailsForSave = function () {
        this.enteredTruckNumber = $("#truckNumber").val();
        this.enteredTruckNumber = this.enteredTruckNumber.replace(/\s/g, "");
        this.enteredTruckCapacity = $("#truckCapacityInTones").val();
        this.enteredOwnerName = $("#ownerName").val();
        this.enteredPanNO = $("#panNumber").val();
        this.truckDataDtoSave = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_19__["TruckDataDto"]();
        this.truckDataDtoSave.companyId = this.userDataDtoReturnSession.companyId;
        this.truckDataDtoSave.userId = this.userDataDtoReturnSession.userId;
        this.truckDataDtoSave.mainStation = this.userDataDtoReturnSession.mainAdminStation;
        this.truckDataDtoSave.suppAdd = 'save';
        this.truckDataDtoSave.truckNumber = this.enteredTruckNumber.toUpperCase();
        this.truckDataDtoSave.ownerName = this.enteredOwnerName;
        this.truckDataDtoSave.panNo = this.enteredPanNO;
        this.truckDataDtoSave.truckCapcityDouble = this.enteredTruckCapacity;
    };
    LrEntryFormComponent.prototype.setValuesInVehicle = function () {
        $('#vehicleNumber').val(this.selectedTruckNumber);
        this.clearAllAgentTempo();
        window.setTimeout(function () {
            $('#companyName').focus();
            this.selectedTruckNumber = '';
        }, 100);
    };
    LrEntryFormComponent.prototype.setTempoNext = function () {
        window.setTimeout(function () {
            $('#companyName').focus();
            this.selectedTruckNumber = '';
        }, 100);
    };
    LrEntryFormComponent.prototype.clearAllAgentTempo = function () {
        this.truckDataDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_19__["TruckDataDto"]();
        this.truckDataCheckDto = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_19__["TruckDataDto"]();
        this.truckDataDtoCheckRet = '';
        this.truckDataDtoSaveRet = '';
        this.enteredTruckNumber = '';
        this.enteredTruckCapacity = '';
        this.truckDataDtoSave = new src_app_dto_TruckData_dto__WEBPACK_IMPORTED_MODULE_19__["TruckDataDto"]();
        this.enteredOwnerName = '';
        this.enteredPanNO = '';
    };
    LrEntryFormComponent.prototype.validateVehicleNumber = function () {
        this.isValid = false;
        if ((this.checkAutoLr == false) && (this.checkAutoLrHold == false)) {
            this.enteredTruckNumberFroValidation = '';
            this.enteredTruckNumberFroValidation = $("#vehicleNumber").val();
            if ((this.enteredTruckNumberFroValidation == '') || (this.enteredTruckNumberFroValidation == null)) {
                this.isValid = false;
            }
            else {
                this.enteredTruckNumberFroValidation = this.enteredTruckNumberFroValidation.replace(/\s/g, "");
                if (this.enteredTruckNumberFroValidation.length < 9) {
                    this.isValid = false;
                }
                else {
                    if (/\d/.test(this.enteredTruckNumberFroValidation) && /[a-zA-Z]/.test(this.enteredTruckNumberFroValidation)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                }
            }
            this.enteredTruckNumberFroValidation = '';
        }
        else {
            this.isValid = true;
        }
        return this.isValid;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("vehicleNumber"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "vehicleNumberField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("challanNo"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "challanNoField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("challanTotLrs"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "challanTotLrsField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("agentName"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "agentNameField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("arrivalDate"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "arrivalDateField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("commodityDescription"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "commodityDescriptionField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("partyGoodsType"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "partyGoodsTypeField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("subCommodity"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "subCommodityField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("ddAmt"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "ddAmtField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("ddAddress"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "ddAddressField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("paymentType"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "paymentTypeField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("automatedLR"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "automatedLRField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("hamali"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "hamaliField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("lcCharge"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "lcChargeField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gcCharge"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "gcChargeField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("bcCharge"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "bcChargeField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("fov"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "fovField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("aocCharge"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "aocChargeField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("others"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "othersField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("privateMarker"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "privateMarkerField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("bankName"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "bankNameField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("bankLr"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "bankLrField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("doorDeliveryMode"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "doorDeliveryModeField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("baseFreight"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "baseFreightField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("actualWeight"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "actualWeightField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("chargedWeight"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "chargedWeightField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("goodsValue"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "goodsValueField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("lrNumber"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "lrNumberField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("multiArtarticle"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "multiArtarticleField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("noOfArticles"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "noOfArticlesField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("autoLrNumber"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "autoLrNumberField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("nextBtn"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "nextBtnField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("packNature"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "packNatureField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("destination"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "destinationField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("consignorGSTNumber"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "consignorGSTNumberField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("consignorName"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "consignorNameField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("consigneeGSTNumber"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "consigneeGSTNumberField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("consigneeName"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "consigneeNameField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("goodsType"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "goodsTypeField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("newCommodity"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "newCommodityField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("eWayBillNo"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "eWayBillNoField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("edeclarationCommodity"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "edeclarationCommodityField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("consignorMobileNumber"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "consignorMobileNumberField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("consigneeMobileNumber"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "consigneeMobileNumberField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("newConsignor"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "newConsignorField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("newConsignee"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "newConsigneeField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("localChallanKanta"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LrEntryFormComponent.prototype, "localChallanKantaField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceUserGodown'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], LrEntryFormComponent.prototype, "instanceUserGodown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceAgentName'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], LrEntryFormComponent.prototype, "instanceAgentName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceVehicleNumber'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], LrEntryFormComponent.prototype, "instanceVehicleNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceDestnation'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], LrEntryFormComponent.prototype, "instanceDestnation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceLoaderHead'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], LrEntryFormComponent.prototype, "instanceLoaderHead", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instancePackNature'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], LrEntryFormComponent.prototype, "instancePackNature", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceConsignor'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], LrEntryFormComponent.prototype, "instanceConsignor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceConsigneeName'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], LrEntryFormComponent.prototype, "instanceConsigneeName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instancePartyCommodity'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], LrEntryFormComponent.prototype, "instancePartyCommodity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instanceGoodsType'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], LrEntryFormComponent.prototype, "instanceGoodsType", void 0);
    LrEntryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lr-entry-form',
            template: __webpack_require__(/*! ./lrentryform.component.html */ "./src/app/lr/entry/lr-entry-form/lrentryform.component.html"),
            styles: [__webpack_require__(/*! ./lrentryform.component.css */ "./src/app/lr/entry/lr-entry-form/lrentryform.component.css")],
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_4__["MasterReadService"], src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_20__["MasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]])
    ], LrEntryFormComponent);
    return LrEntryFormComponent;
}());



/***/ }),

/***/ "./src/app/lr/entry/lrentry-print/lrentry-print.component.css":
/*!********************************************************************!*\
  !*** ./src/app/lr/entry/lrentry-print/lrentry-print.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txt_ac {\n\ttext-align: center;\n}\n\n.dsply-ib {\n\tdisplay: inline-block;\n}\n\nh6, h5, h4, h3, h2, h1, p, .custome {\n\tfont-size: 12.3px;\n\tmargin: 1px;\n\tpadding: 1px;\n\tpadding-top: 3px;\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n\n.fontS_11 {\n\tfont-size: 14px;\n\tmargin: 0px;\n}\n\n.fontS_10 {\n\tfont-size: 13px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.fontS_7 {\n\tfont-size: 12px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.border {\n\tborder: 1px solid #000 !important;\n\tborder-collapse: collapse;\n\tpadding: 0px;\n}\n\n.dsplyNone {\n\tdisplay: none;\n}\n\n.border_right {\n\tborder-right: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n.border_left {\n\tborder-left: 1px solid #000;\n\tborder-collapse: collapse;\n\tmargin-left: -1px;\n}\n\n.border_bottom {\n\tborder-bottom: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n.border_top {\n\tborder-top: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n@media print {\n\tbody * {\n\t\tvisibility: hidden;\n\t}\n\t#sidebarnav {\n\t\tvisibility: hidden;\n\t}\n\t#section_to_print, #section_to_print * {\n\t\tvisibility: visible;\n\t}\n/* \t.page-break { display:block; page-break-before:always; }  */\n}\n\n#left, #right, div:empty {\n\tmin-height: 19px;\n}\n\n#left, div:empty {\n\tmin-height: 22px;\n}\n\n/* #left, #right, div!:empty { */\n\n/* \tmargin-top: -15px; */\n\n/* } */\n\n.sidebar-nav ul .sidebar-item {\n\tdisplay: none;\n}\n\n/* print changes */\n\n.container {\n\tmax-width: 97%;\n}\n\n@media ( min-width : 768px) {\n\t#main-wrapper[data-layout=\"horizontal\"] .sidebar-nav #sidebarnav {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tdisplay: none;\n\t}\n}\n\n@media ( min-width : 768px) {\n\t.col-md-3, .col-md-9 {\n\t\tpadding-left: 7px !important;\n\t}\n}\n\nhr {\n\tborder: .5px solid black;\n\twidth: 100%;\n\tmargin-left: 7px !important;\n\tmargin: 0px;\n}\n\n.fontS_15 {\n\tfont-size: 15px;\n\tmargin: 0px;\n}\n\n.fontS_13 {\n\tfont-size: 13px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.fontS_12 {\n\tfont-size: 12px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.font_bold{\nfont-weight:900;\n}\n\n/* @media print { */\n\n/* \t::ng-deep #firstPrint { */\n\n/* \t\tpage-break-after: auto; */\n\n/* \t\tpage-break-inside:avoid; */\n\n/* \t} */\n\n/* \t::ng-deep #secondPrint { */\n\n/* \t\tpage-break-before: auto; */\n\n/* \t\tpage-break-inside:avoid; */\n\n/* \t} */\n\n/* \t::ng-deep #thirdPrint  { */\n\n/* \t\tpage-break-before: auto; */\n\n/* \t\tpage-break-inside:avoid;  */\n\n/* \t\tpage-break-after:auto; */\n\n/* \t} */\n\n/* } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHIvZW50cnkvbHJlbnRyeS1wcmludC9scmVudHJ5LXByaW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEI7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsMENBQTBDO0NBQzFDOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWjs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osWUFBWTtDQUNaOztBQUdEO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxrQ0FBa0M7Q0FDbEMsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQyw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLGtCQUFrQjtDQUNsQjs7QUFFRDtDQUNDLDhCQUE4QjtDQUM5QiwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQywyQkFBMkI7Q0FDM0IsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0M7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0Msb0JBQW9CO0VBQ3BCO0FBQ0YsZ0VBQWdFO0NBQy9EOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUVELGlDQUFpQzs7QUFDakMseUJBQXlCOztBQUN6QixPQUFPOztBQUlQO0NBQ0MsY0FBYztDQUNkOztBQUNELG1CQUFtQjs7QUFDbkI7Q0FDQyxlQUFlO0NBQ2Y7O0FBRUQ7Q0FDQztFQUNDLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkO0NBQ0Q7O0FBRUQ7Q0FDQztFQUNDLDZCQUE2QjtFQUM3QjtDQUNEOztBQUVEO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWiw0QkFBNEI7Q0FDNUIsWUFBWTtDQUNaOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWjs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osWUFBWTtDQUNaOztBQUdEO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1o7O0FBQ0Q7QUFDQSxnQkFBZ0I7Q0FDZjs7QUFFRCxvQkFBb0I7O0FBQ3BCLDhCQUE4Qjs7QUFDOUIsK0JBQStCOztBQUMvQixnQ0FBZ0M7O0FBQ2hDLFFBQVE7O0FBRVIsK0JBQStCOztBQUMvQixnQ0FBZ0M7O0FBQ2hDLGdDQUFnQzs7QUFDaEMsUUFBUTs7QUFFUiwrQkFBK0I7O0FBQy9CLGdDQUFnQzs7QUFDaEMsaUNBQWlDOztBQUNqQyw4QkFBOEI7O0FBQzlCLFFBQVE7O0FBRVIsT0FBTyIsImZpbGUiOiJzcmMvYXBwL2xyL2VudHJ5L2xyZW50cnktcHJpbnQvbHJlbnRyeS1wcmludC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR4dF9hYyB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRzcGx5LWliIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5oNiwgaDUsIGg0LCBoMywgaDIsIGgxLCBwLCAuY3VzdG9tZSB7XG5cdGZvbnQtc2l6ZTogMTIuM3B4O1xuXHRtYXJnaW46IDFweDtcblx0cGFkZGluZzogMXB4O1xuXHRwYWRkaW5nLXRvcDogM3B4O1xuXHRmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmZvbnRTXzExIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRtYXJnaW46IDBweDtcbn1cblxuLmZvbnRTXzEwIHtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4XG59XG5cblxuLmZvbnRTXzcge1xuXHRmb250LXNpemU6IDEycHg7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHhcbn1cblxuLmJvcmRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0cGFkZGluZzogMHB4O1xufVxuXG4uZHNwbHlOb25lIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLmJvcmRlcl9yaWdodCB7XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5ib3JkZXJfbGVmdCB7XG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0bWFyZ2luLWxlZnQ6IC0xcHg7XG59XG5cbi5ib3JkZXJfYm90dG9tIHtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5ib3JkZXJfdG9wIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbkBtZWRpYSBwcmludCB7XG5cdGJvZHkgKiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdCNzaWRlYmFybmF2IHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I3NlY3Rpb25fdG9fcHJpbnQsICNzZWN0aW9uX3RvX3ByaW50ICoge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdH1cbi8qIFx0LnBhZ2UtYnJlYWsgeyBkaXNwbGF5OmJsb2NrOyBwYWdlLWJyZWFrLWJlZm9yZTphbHdheXM7IH0gICovXG59XG5cbiNsZWZ0LCAjcmlnaHQsIGRpdjplbXB0eSB7XG5cdG1pbi1oZWlnaHQ6IDE5cHg7XG59XG5cbiNsZWZ0LCBkaXY6ZW1wdHkge1xuXHRtaW4taGVpZ2h0OiAyMnB4O1xufVxuXG4vKiAjbGVmdCwgI3JpZ2h0LCBkaXYhOmVtcHR5IHsgKi9cbi8qIFx0bWFyZ2luLXRvcDogLTE1cHg7ICovXG4vKiB9ICovXG5cblxuXG4uc2lkZWJhci1uYXYgdWwgLnNpZGViYXItaXRlbSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4vKiBwcmludCBjaGFuZ2VzICovXG4uY29udGFpbmVyIHtcblx0bWF4LXdpZHRoOiA5NyU7XG59XG5cbkBtZWRpYSAoIG1pbi13aWR0aCA6IDc2OHB4KSB7XG5cdCNtYWluLXdyYXBwZXJbZGF0YS1sYXlvdXQ9XCJob3Jpem9udGFsXCJdIC5zaWRlYmFyLW5hdiAjc2lkZWJhcm5hdiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbkBtZWRpYSAoIG1pbi13aWR0aCA6IDc2OHB4KSB7XG5cdC5jb2wtbWQtMywgLmNvbC1tZC05IHtcblx0XHRwYWRkaW5nLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xuXHR9XG59XG5cbmhyIHtcblx0Ym9yZGVyOiAuNXB4IHNvbGlkIGJsYWNrO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xuXHRtYXJnaW46IDBweDtcbn1cblxuLmZvbnRTXzE1IHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRtYXJnaW46IDBweDtcbn1cblxuLmZvbnRTXzEzIHtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4XG59XG5cblxuLmZvbnRTXzEyIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4XG59XG4uZm9udF9ib2xke1xuZm9udC13ZWlnaHQ6OTAwO1xufVxuXG4vKiBAbWVkaWEgcHJpbnQgeyAqL1xuLyogXHQ6Om5nLWRlZXAgI2ZpcnN0UHJpbnQgeyAqL1xuLyogXHRcdHBhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87ICovXG4vKiBcdFx0cGFnZS1icmVhay1pbnNpZGU6YXZvaWQ7ICovXG4vKiBcdH0gKi9cblx0XG4vKiBcdDo6bmctZGVlcCAjc2Vjb25kUHJpbnQgeyAqL1xuLyogXHRcdHBhZ2UtYnJlYWstYmVmb3JlOiBhdXRvOyAqL1xuLyogXHRcdHBhZ2UtYnJlYWstaW5zaWRlOmF2b2lkOyAqL1xuLyogXHR9ICovXG5cdFxuLyogXHQ6Om5nLWRlZXAgI3RoaXJkUHJpbnQgIHsgKi9cbi8qIFx0XHRwYWdlLWJyZWFrLWJlZm9yZTogYXV0bzsgKi9cbi8qIFx0XHRwYWdlLWJyZWFrLWluc2lkZTphdm9pZDsgICovXG4vKiBcdFx0cGFnZS1icmVhay1hZnRlcjphdXRvOyAqL1xuLyogXHR9ICovXG5cdFxuLyogfSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/lr/entry/lrentry-print/lrentry-print.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/lr/entry/lrentry-print/lrentry-print.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"showPrintForOtherBooking\">\n\t<div class=\"page row system_responsive\" id=\"firstPrint\">\n\t\t<div class=\"container border\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<!--first row starts-->\n\t\t\t\t<div class=\"row\" style=\"padding-top: 5px;\">\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<img [src]='src/lrEntryBarcode/' -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t+{{resultDtos.withOutSlash}}+'.jpg' style=\"height: 70px;\"> -->\n\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let PS of PrintBarcode\">\n\t\t\t\t\t\t\t\t\t<ngx-barcode [bc-width]=\"1.5\" [bc-height]=\"27\"\n\t\t\t\t\t\t\t\t\t\t[bc-font-size]=\"13\" [bc-value]=\"PS.barcode\"\n\t\t\t\t\t\t\t\t\t\t[bc-display-value]=\"true\"> </ngx-barcode>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t<h6 class=\"border_bottom dsply-ib\">GOODS CONSIGNMENT NOTE</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Head Office :</strong><br> <span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainAddress\"></span> <br>Tel.No&nbsp;:<span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainMobileNo\"></span> <br>Email&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t{{mainEmailId}}<br> <strong>CIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t\tU63090MH2009PTC189328</strong><br> <strong>ISO\n\t\t\t\t\t\t\t\t\t\t\t\t9001:2008</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t{{address1}}<br>{{address2}}<br>{{cityPin}} <br>Tel.No&nbsp;:\n\t\t\t\t\t\t\t\t\t{{phone}}<br>Email&nbsp;&nbsp;: {{emailId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!--first row ends -->\n\t\t\t\t<!--seconde row Starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px; margin-top: -10px;\">\n\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<strong>G.C.No. </strong> <strong>{{resultDtos.lrNumber}}</strong> -->\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>CONSIGNEE COPY</strong> <strong>{{printMode}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6 align='center' width='100%'\n\t\t\t\t\t\t\tstyle='font-size: 14px; height: 20px;'>\n\t\t\t\t\t\t\t<strong> {{handleWitCare}}{{slashInCode}}</strong><span\n\t\t\t\t\t\t\t\t*ngIf=\"showSelfLr\"><strong> SELF LR - DO NOT\n\t\t\t\t\t\t\t\t\tDELIVER WITHOUT CONSIGNEE COPY</strong></span>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t<div *ngIf=\"showSelfLr\" class=\"col-md-9\" style=\"margin-left: -7px;\"> -->\n\n\t\t\t\t\t<!-- \t\t\t\t\t\t<h6 align='center' width='100%' -->\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tstyle='font-size: 14px; height: 20px;'> -->\n\n\t\t\t\t\t<!-- \t\t\t\t\t\t</h6> -->\n\t\t\t\t\t<!-- \t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNOR</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>&nbsp;: {{ resultDtos.consignorName }}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>ADDRESS</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>&nbsp;: {{ resultDtos.addressConsignor }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>GSTIN No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>&nbsp;: {{ resultDtos.gstNoConsignor }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>MOBILE No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>&nbsp;: {{resultDtos.consignorMobileNo }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNEE</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>: {{ resultDtos.consigneeName}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>ADDRESS</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>: {{resultDtos.addressConsignee }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>GSTIN No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>: {{resultDtos.gstNoConsignee}}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>MOBILE No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>: {{resultDtos.consigneeMobileNo }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--seconde row ends-->\n\t\t\t\t<!--third row starts-->\n\t\t\t\t<div class=\"row border_top border_bottom\">\n\t\t\t\t\t<div class=\"col-md-6 txt_ac border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>BOOKING DETAILS</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 txt_ac\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>AMOUNT CHARGES</strong>\n\t\t\t\t\t\t</h6>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--third row ends-->\n\t\t\t\t<!--fourth row starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>G.C.No</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Booking Date</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.date}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Route</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{sourcePrint}}</strong> <strong> TO </strong><strong>{{destinationPrint}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>E-Way Bill No</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{gateCcESugam}}&nbsp;&nbsp;{{eDecCom}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>No.of Articles</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.totalArticles}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Nature of Packing</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 fontS_11\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>: {{resultDtos.packNature}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Said to Contain</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.commodityName}}{{subCommodity}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Value of Goods</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>: Rs {{resultDtos.goodsValue}}/-</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t<div class=\"row border_top\" style=\"padding: 1px;\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t<div class=\"col-md-12 fontS_10\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<h6> -->\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t</div> -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>WEIGHT(In Kgs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Actual</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Charged</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{resultDtos.actualWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.chargedWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<h6>{{artSize}}{{artChgWt}}</h6> -->\n\t\t\t\t\t\t\t\t\t\t<h6 [innerHTML]=\"artSize\"></h6>\n\t\t\t\t\t\t\t\t\t\t<h6>{{artChgWt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>FRIGHT(In Rs.)</strong> -->\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>FREIGHT(In Rs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>ToPay</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Paid</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Base Freight</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Hamali</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Statistical Charges</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Others</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>L.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>B.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>A.O.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>F O V</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>DD</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-md-12\" -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\tstyle=\"margin-top: 10px; border-top: 1px solid #000;\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<h6 class=\"fontS_11\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>Total</strong> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"left\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_left\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=ViewPaid>{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--fourth row ends-->\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-6  border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>Remark : &nbsp;&nbsp;&nbsp;{{gateCc}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 style='font-size: 13px;'>\n\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{unloadByCsn}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Bill.No / Pvt.Mark</strong><br>{{resultDtos.billNumber}}\n\t\t\t\t\t\t\t\t\t/ {{resultDtos.privateMarker}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\" style='min-height: 35px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>TOTAL</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-8 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNEE COPY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>G.C.No. </strong><strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Transport ID</strong><br> {{transportId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>FOR SRD Logistics Pvt.Ltd.</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>Prepared by</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" style='margin-top: -8px;'>\n\t\t\t\t\t<div class=\"col-md-8  border_top border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 10px;'>\n\t\t\t\t\t\t\t\t\t<strong>DELIVERY SHALL BE AGAINST CONSIGNEE COPY ONLY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t<h6 style='font-size: 9px;'>This G.C Note is subject to the\n\t\t\t\t\t\t\t\t\tTerms & Conditions printed overleaf</h6>\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Booked at Owner's Risk</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>{{message}}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 10px; padding-top: 5px;'>\n\t\t\t\t\t\t\t\t\t<strong>{{entryByPrint}}{{clerkName}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6\n\t\t\t\t\t\t\t\t\tstyle='font-size: 10px; text-align: right; font-style: Brush Script MT;'>\n\t\t\t\t\t\t\t\t\t<strong>Thank You</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t<!--  PRINT 1 ENDS HERE -->\n\t<!-- \t<div style='float: left'> -->\n\n\t<!-- \t\t<p style='overflow: hidden; page-break-before: always;'></p> -->\n\n\t<!-- \t</div> -->\n\t<div class=\"page row system_responsive\" id=\"secondPrint\">\n\t\t<div class=\"container border\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<!--first row starts-->\n\t\t\t\t<div class=\"row\" style=\"padding-top: 5px;\">\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<img [src]='src/cashMemoBarcode/' -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t+{{rateDtoForPrint.withOutSlash}}+'.jpg' style=\"height: 70px;\"> -->\n\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let PS of PrintBarcode\">\n\t\t\t\t\t\t\t\t\t<ngx-barcode [bc-width]=\"1.5\" [bc-height]=\"27\"\n\t\t\t\t\t\t\t\t\t\t[bc-font-size]=\"13\" [bc-value]=\"PS.barcode\"\n\t\t\t\t\t\t\t\t\t\t[bc-display-value]=\"true\"> </ngx-barcode>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t<h6 class=\"border_bottom dsply-ib\">GOODS CONSIGNMENT NOTE</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Head Office :</strong><br> <span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainAddress\"></span> <br>Tel.No&nbsp;:<span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainMobileNo\"></span> <br>Email&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t{{mainEmailId}}<br> <strong>CIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t\tU63090MH2009PTC189328</strong><br> <strong>ISO\n\t\t\t\t\t\t\t\t\t\t\t\t9001:2008</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t{{address1}}<br>{{address2}}<br>{{cityPin}} <br>Tel.No&nbsp;:\n\t\t\t\t\t\t\t\t\t{{phone}}<br>Email&nbsp;&nbsp;: {{emailId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!--first row ends -->\n\t\t\t\t<!--seconde row Starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px; margin-top: -10px;\">\n\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<strong>G.C.No. </strong> <strong>{{resultDtos.lrNumber}}</strong> -->\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>CONSIGNOR COPY</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6 align='center' width='100%'\n\t\t\t\t\t\t\tstyle='font-size: 14px; height: 20px;'>\n\t\t\t\t\t\t\t<strong> {{handleWitCare}}{{slashInCode}}</strong><span\n\t\t\t\t\t\t\t\t*ngIf=\"showSelfLr\"><strong> SELF LR - DO NOT\n\t\t\t\t\t\t\t\t\tDELIVER WITHOUT CONSIGNEE COPY</strong></span>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t<div *ngIf=\"showSelfLr\" class=\"col-md-9\" style=\"margin-left: -7px;\"> -->\n\n\t\t\t\t\t<!-- \t\t\t\t\t\t<h6 align='center' width='100%' -->\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tstyle='font-size: 14px; height: 20px;'> -->\n\n\t\t\t\t\t<!-- \t\t\t\t\t\t</h6> -->\n\t\t\t\t\t<!-- \t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNOR</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>&nbsp;: {{ resultDtos.consignorName }}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>ADDRESS</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>&nbsp;: {{ resultDtos.addressConsignor }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>GSTIN No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>&nbsp;: {{ resultDtos.gstNoConsignor }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>MOBILE No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>&nbsp;: {{resultDtos.consignorMobileNo }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNEE</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>: {{ resultDtos.consigneeName}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>ADDRESS</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>: {{resultDtos.addressConsignee }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>GSTIN No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>: {{resultDtos.gstNoConsignee}}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>MOBILE No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>: {{resultDtos.consigneeMobileNo }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--seconde row ends-->\n\t\t\t\t<!--third row starts-->\n\t\t\t\t<div class=\"row border_top border_bottom\">\n\t\t\t\t\t<div class=\"col-md-6 txt_ac border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>BOOKING DETAILS</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 txt_ac\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>AMOUNT CHARGES</strong>\n\t\t\t\t\t\t</h6>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--third row ends-->\n\t\t\t\t<!--fourth row starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>G.C.No</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Booking Date</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.date}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Route</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{sourcePrint}}</strong> <strong> TO </strong><strong>{{destinationPrint}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>E-Way Bill No</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{gateCcESugam}}&nbsp;&nbsp;{{eDecCom}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>No.of Articles</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.totalArticles}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Nature of Packing</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 fontS_11\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>: {{resultDtos.packNature}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Said to Contain</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.commodityName}}{{subCommodity}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Value of Goods</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>: Rs {{resultDtos.goodsValue}}/-</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t<div class=\"row border_top\" style=\"padding: 1px;\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t<div class=\"col-md-12 fontS_10\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<h6> -->\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t</div> -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>WEIGHT(In Kgs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Actual</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Charged</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{resultDtos.actualWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.chargedWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<h6>{{artSize}}{{artChgWt}}</h6> -->\n\t\t\t\t\t\t\t\t\t\t<h6 [innerHTML]=\"artSize\"></h6>\n\t\t\t\t\t\t\t\t\t\t<h6>{{artChgWt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>FRIGHT(In Rs.)</strong> -->\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>FREIGHT(In Rs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>ToPay</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Paid</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Base Freight</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Hamali</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Statistical Charges</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Others</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>L.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>B.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>A.O.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>F O V</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>DD</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-md-12\" -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\tstyle=\"margin-top: 10px; border-top: 1px solid #000;\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<h6 class=\"fontS_11\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>Total</strong> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"left\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_left\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=ViewPaid>{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--fourth row ends-->\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-6  border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>Remark : &nbsp;&nbsp;&nbsp;{{gateCc}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 style='font-size: 13px;'>\n\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{unloadByCsn}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Bill.No / Pvt.Mark</strong><br>{{resultDtos.billNumber}}\n\t\t\t\t\t\t\t\t\t/ {{resultDtos.privateMarker}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\" style='min-height: 35px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>TOTAL</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-8 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNOR COPY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>G.C.No. </strong><strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Transport ID</strong><br> {{transportId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>FOR SRD Logistics Pvt.Ltd.</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>Prepared by</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" style='margin-top: -8px;'>\n\t\t\t\t\t<div class=\"col-md-8  border_top border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 10px;'>\n\t\t\t\t\t\t\t\t\t<strong>DELIVERY SHALL BE AGAINST CONSIGNEE COPY ONLY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t<h6 style='font-size: 9px;'>This G.C Note is subject to the\n\t\t\t\t\t\t\t\t\tTerms & Conditions printed overleaf</h6>\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Booked at Owner's Risk</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>{{resultDtos.message}}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 10px; padding-top: 5px;'>\n\t\t\t\t\t\t\t\t\t<strong>{{entryByPrint}}{{clerkName}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6\n\t\t\t\t\t\t\t\t\tstyle='font-size: 10px; text-align: right; font-style: Brush Script MT;'>\n\t\t\t\t\t\t\t\t\t<strong>Thank You</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t<!--  PRINT 2 ENDS HERE -->\n\t<!-- \t<div> -->\n\t<!-- \t\t<p style='page-break-after: always;'></p> -->\n\t<!-- \t</div> -->\n\t<div class=\"page row system_responsive\" id=\"thirdPrint\">\n\t\t<div class=\"container border\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<!--first row starts-->\n\t\t\t\t<div class=\"row\" style=\"padding-top: 5px;\">\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<img [src]='src/cashMemoBarcode/' -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t+{{rateDtoForPrint.withOutSlash}}+'.jpg' style=\"height: 70px;\"> -->\n\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let PS of PrintBarcode\">\n\t\t\t\t\t\t\t\t\t<ngx-barcode [bc-width]=\"1.5\" [bc-height]=\"27\"\n\t\t\t\t\t\t\t\t\t\t[bc-font-size]=\"13\" [bc-value]=\"PS.barcode\"\n\t\t\t\t\t\t\t\t\t\t[bc-display-value]=\"true\"> </ngx-barcode>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t<h6 class=\"border_bottom dsply-ib\">GOODS CONSIGNMENT NOTE</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Head Office :</strong><br> <span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainAddress\"></span> <br>Tel.No&nbsp;:<span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainMobileNo\"></span> <br>Email&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t{{mainEmailId}}<br> <strong>CIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t\tU63090MH2009PTC189328</strong><br> <strong>ISO\n\t\t\t\t\t\t\t\t\t\t\t\t9001:2008</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t{{address1}}<br>{{address2}}<br>{{cityPin}} <br>Tel.No&nbsp;:\n\t\t\t\t\t\t\t\t\t{{phone}}<br>Email&nbsp;&nbsp;: {{emailId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!--first row ends -->\n\t\t\t\t<!--seconde row Starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px; margin-top: -10px;\">\n\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<strong>G.C.No. </strong> <strong>{{resultDtos.lrNumber}}</strong> -->\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>LORRY COPY</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6 align='center' width='100%'\n\t\t\t\t\t\t\tstyle='font-size: 14px; height: 20px;'>\n\t\t\t\t\t\t\t<strong> {{handleWitCare}}{{slashInCode}}</strong><span\n\t\t\t\t\t\t\t\t*ngIf=\"showSelfLr\"><strong> SELF LR - DO NOT\n\t\t\t\t\t\t\t\t\tDELIVER WITHOUT CONSIGNEE COPY</strong></span>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t<div *ngIf=\"showSelfLr\" class=\"col-md-9\" style=\"margin-left: -7px;\"> -->\n\n\t\t\t\t\t<!-- \t\t\t\t\t\t<h6 align='center' width='100%' -->\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tstyle='font-size: 14px; height: 20px;'> -->\n\n\t\t\t\t\t<!-- \t\t\t\t\t\t</h6> -->\n\t\t\t\t\t<!-- \t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNOR</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>&nbsp;: {{ resultDtos.consignorName }}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>ADDRESS</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>&nbsp;: {{ resultDtos.addressConsignor }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>GSTIN No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>&nbsp;: {{ resultDtos.gstNoConsignor }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>MOBILE No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>&nbsp;: {{resultDtos.consignorMobileNo }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNEE</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>: {{ resultDtos.consigneeName}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>ADDRESS</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>: {{resultDtos.addressConsignee }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>GSTIN No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>: {{resultDtos.gstNoConsignee}}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>MOBILE No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>: {{resultDtos.consigneeMobileNo }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--seconde row ends-->\n\t\t\t\t<!--third row starts-->\n\t\t\t\t<div class=\"row border_top border_bottom\">\n\t\t\t\t\t<div class=\"col-md-6 txt_ac border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>BOOKING DETAILS</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 txt_ac\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>AMOUNT CHARGES</strong>\n\t\t\t\t\t\t</h6>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--third row ends-->\n\t\t\t\t<!--fourth row starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>G.C.No</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Booking Date</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.date}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Route</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{sourcePrint}}</strong> <strong> TO </strong><strong>{{destinationPrint}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>E-Way Bill No</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{gateCcESugam}}&nbsp;&nbsp;{{eDecCom}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>No.of Articles</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.totalArticles}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Nature of Packing</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 fontS_11\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>: {{resultDtos.packNature}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Said to Contain</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.commodityName}}{{subCommodity}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Value of Goods</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>: Rs {{resultDtos.goodsValue}}/-</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t<div class=\"row border_top\" style=\"padding: 1px;\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t<div class=\"col-md-12 fontS_10\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<h6> -->\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t</div> -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>WEIGHT(In Kgs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Actual</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Charged</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{resultDtos.actualWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.chargedWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<h6>{{artSize}}{{artChgWt}}</h6> -->\n\t\t\t\t\t\t\t\t\t\t<h6 [innerHTML]=\"artSize\"></h6>\n\t\t\t\t\t\t\t\t\t\t<h6>{{artChgWt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>FRIGHT(In Rs.)</strong> -->\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>FREIGHT(In Rs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>ToPay</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Paid</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Base Freight</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Hamali</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Statistical Charges</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Others</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>L.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>B.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>A.O.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>F O V</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>DD</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-md-12\" -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\tstyle=\"margin-top: 10px; border-top: 1px solid #000;\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<h6 class=\"fontS_11\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>Total</strong> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"left\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_left\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=ViewPaid>{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--fourth row ends-->\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-6  border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>Remark : &nbsp;&nbsp;&nbsp;{{gateCc}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 style='font-size: 13px;'>\n\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{unloadByCsn}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Bill.No / Pvt.Mark</strong><br>{{resultDtos.billNumber}}\n\t\t\t\t\t\t\t\t\t/ {{resultDtos.privateMarker}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\" style='min-height: 35px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>TOTAL</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-8 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>LORRY COPY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>G.C.No. </strong><strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Transport ID</strong><br> {{transportId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>FOR SRD Logistics Pvt.Ltd.</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>Prepared by</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" style='margin-top: -8px;'>\n\t\t\t\t\t<div class=\"col-md-8  border_top border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 10px;'>\n\t\t\t\t\t\t\t\t\t<strong>DELIVERY SHALL BE AGAINST CONSIGNEE COPY ONLY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t<h6 style='font-size: 9px;'>This G.C Note is subject to the\n\t\t\t\t\t\t\t\t\tTerms & Conditions printed overleaf</h6>\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Booked at Owner's Risk</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>{{resultDtos.message}}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 10px; padding-top: 5px;'>\n\t\t\t\t\t\t\t\t\t<strong>{{entryByPrint}}{{clerkName}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6\n\t\t\t\t\t\t\t\t\tstyle='font-size: 10px; text-align: right; font-style: Brush Script MT;'>\n\t\t\t\t\t\t\t\t\t<strong>Thank You</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>\n<!--  PRINT 3 ENDS HERE -->\n<!-- Row -->\n<div *ngIf=\"showPrintForLocalBooking\">\n\t<div class=\"row system_responsive\">\n\t\t<div class=\"container border\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<!--first row starts-->\n\t\t\t\t<div class=\"row\" style=\"padding-top: 5px;\">\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<img [src]='src/cashMemoBarcode/' -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t+{{rateDtoForPrint.withOutSlash}}+'.jpg' style=\"height: 70px;\"> -->\n\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let PS of PrintBarcode\">\n\t\t\t\t\t\t\t\t\t<ngx-barcode [bc-width]=\"1.5\" [bc-height]=\"27\"\n\t\t\t\t\t\t\t\t\t\t[bc-font-size]=\"13\" [bc-value]=\"PS.barcode\"\n\t\t\t\t\t\t\t\t\t\t[bc-display-value]=\"true\"> </ngx-barcode>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t<h6 class=\"border_bottom dsply-ib\">GOODS CONSIGNMENT NOTE</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Head Office :</strong><br> <span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainAddress\"></span> <br>Tel.No&nbsp;:<span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainMobileNo\"></span> <br>Email&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t{{mainEmailId}}<br> <strong>CIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t\tU63090MH2009PTC189328</strong><br> <strong>ISO\n\t\t\t\t\t\t\t\t\t\t\t\t9001:2008</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t{{address1}}<br>{{address2}}<br>{{cityPin}} <br>Tel.No&nbsp;:\n\t\t\t\t\t\t\t\t\t{{phone}}<br>Email&nbsp;&nbsp;: {{emailId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!--first row ends -->\n\t\t\t\t<!--seconde row Starts-->\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6 align='center' width='100%'\n\t\t\t\t\t\t\tstyle='font-size: 14px; height: 20px;'>\n\t\t\t\t\t\t\t<span *ngIf=\"showSelfLr\"><strong> SELF LR - DO\n\t\t\t\t\t\t\t\t\tNOT DELIVER WITHOUT CONSIGNEE COPY</strong></span>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- \t\t\t\t\t<div *ngIf=\"showSelfLr\" class=\"col-md-9\" style=\"margin-left: -7px;\"> -->\n\n\t\t\t\t\t<!-- \t\t\t\t\t\t<h6 align='center' width='100%' -->\n\t\t\t\t\t<!-- \t\t\t\t\t\t\tstyle='font-size: 14px; height: 20px;'> -->\n\n\t\t\t\t\t<!-- \t\t\t\t\t\t</h6> -->\n\t\t\t\t\t<!-- \t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNOR</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>&nbsp;: {{ resultDtos.consignorName }}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>ADDRESS</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>&nbsp;: {{ resultDtos.addressConsignor }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>GSTIN No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>&nbsp;: {{ resultDtos.gstNoConsignor }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>MOBILE No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>&nbsp;: {{resultDtos.consignorMobileNo }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNEE</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t\t\t<strong>: {{ resultDtos.consigneeName}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>ADDRESS</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>: {{resultDtos.addressConsignee }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>GSTIN No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>: {{resultDtos.gstNoConsignee}}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>MOBILE No</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t<h6>: {{resultDtos.consigneeMobileNo }}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--seconde row ends-->\n\t\t\t\t<!--third row starts-->\n\t\t\t\t<div class=\"row border_top border_bottom\">\n\t\t\t\t\t<div class=\"col-md-6 txt_ac border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>BOOKING DETAILS</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 txt_ac\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>AMOUNT CHARGES</strong>\n\t\t\t\t\t\t</h6>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--third row ends-->\n\t\t\t\t<!--fourth row starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>G.C.No</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Booking Date</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.date}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Route</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{sourcePrint}}</strong> <strong> TO </strong><strong>{{destinationPrint}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>E-Way Bill No</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{gateCcESugam}}&nbsp;&nbsp;{{eDecCom}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>No.of Articles</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.totalArticles}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Nature of Packing</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 fontS_11\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>: {{resultDtos.packNature}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Said to Contain</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t: <strong>{{resultDtos.commodityName}}{{subCommodity}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Value of Goods</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>: Rs {{resultDtos.goodsValue}}/-</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t<div class=\"row border_top\" style=\"padding: 1px;\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t<div class=\"col-md-12 fontS_10\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<h6> -->\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t</div> -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>WEIGHT(In Kgs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Actual</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Charged</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{resultDtos.actualWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.chargedWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<h6>{{artSize}}{{artChgWt}}</h6> -->\n\t\t\t\t\t\t\t\t\t\t<h6 [innerHTML]=\"artSize\"></h6>\n\t\t\t\t\t\t\t\t\t\t<h6>{{artChgWt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>FRIGHT(In Rs.)</strong> -->\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>FREIGHT(In Rs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>ToPay</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Paid</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Base Freight</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Hamali</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Statistical Charges</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Others</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>L.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>B.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>A.O.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>F O V</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>DD</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-md-12\" -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\tstyle=\"margin-top: 10px; border-top: 1px solid #000;\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<h6 class=\"fontS_11\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>Total</strong> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"left\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_left\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=ViewPaid>{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--fourth row ends-->\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-6  border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>Remark : &nbsp;&nbsp;&nbsp;{{gateCc}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 style='font-size: 13px;'>\n\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{unloadByCsn}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Bill.No / Pvt.Mark</strong><br>{{resultDtos.billNumber}}\n\t\t\t\t\t\t\t\t\t/ {{resultDtos.privateMarker}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\" style='min-height: 35px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>TOTAL</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-8 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNEE COPY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>G.C.No. </strong><strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Transport ID</strong><br> {{transportId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>FOR SRD Logistics Pvt.Ltd.</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>Prepared by</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<!-- <div id=\"print\"> -->\n<!-- \t<app-cashmemo-genrate-print></app-cashmemo-genrate-print> -->\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/lr/entry/lrentry-print/lrentry-print.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/lr/entry/lrentry-print/lrentry-print.component.ts ***!
  \*******************************************************************/
/*! exports provided: LrEntryPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrEntryPrintComponent", function() { return LrEntryPrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Component, OnInit } from '@angular/core';
//import { Router } from "@angular/router";
//import { ParamMap } from "@angular/router";
//import { Route } from "@angular/router";
//import { switchMap } from "rxjs/internal/operators/switchMap";
//import { ActivatedRoute } from "@angular/router";
//import { RateMasterDto } from "src/app/dto/RateMaster-dto";
////for datepicker starts
//import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
//import { DatePipe } from "@angular/common";
////for datepicker ends


//for the select option with filter ends




var LrEntryPrintComponent = /** @class */ (function () {
    function LrEntryPrintComponent(router, datePipe, http, masterReadService) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.http = http;
        this.masterReadService = masterReadService;
        this.PrintBarcode = [];
        this.isLoggedIn = true;
        this.resultDtos = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.showPrintForOtherBooking = false;
        this.showPrintForLocalBooking = false;
        this.actualPrintMode = null;
        this.totPaid = '';
        this.totToPay = '';
        this.artSize = '';
        this.gatePass = '';
        this.ccAttach = '';
        this.eSugam = '';
        this.gateCcESugam = '';
        this.artChgWt = '';
        this.handleWitCare = '';
        this.toBeBilled = '';
        this.toBeBilled1 = '';
        this.unloadByCsn = '';
        this.eDecCom = '';
        this.gateCc = '';
        this.selfLr = '';
        this.showSelfLr = false;
        this.address = '';
        this.addressSplit = [];
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.pinCode = '';
        this.phone = '';
        this.cityPin = '';
        this.emailId = '';
        this.subCommodity = '';
        this.clerkName = '';
        this.message = '';
        this.printMode = '';
        //
        this.mainAddress = '';
        this.mainMobileNo = '';
        this.mainEmailId = '';
        this.transportId = '';
        this.sourcePrint = '';
        this.destinationPrint = '';
        this.entryByPrint = '';
        this.slash = '';
        this.ViewToPay = false;
        this.ViewPaid = false;
        this.mainStationForPrint = 'LrEntryPrintAll For Single Station';
        this.slashInCode = '';
        this.viewLrEntryPrintPage = true;
        // update in database
        this.updateLrCopyDetails = function () {
            _this.masterReadService.updateLrCopyTypeDetails(_this.resultDtos).subscribe(function (response) {
                if (response.length == 0) {
                    console.log('error');
                }
                else {
                    console.log('done');
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            swal({
                title: "Session Expired",
                text: "Please relogin to access the application!",
                icon: "error",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                //                this.logInPage();
            });
            //            sweet alert ends
        }
        if (this.isLoggedIn) {
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.dataForPrint = JSON.parse(localStorage.getItem('printAfterSaveForLrEntry'));
            this.resultDtos = this.dataForPrint;
            //            //Pending need to be commented
            //                        this.showPrintForOtherBooking = true;
            //                        this.showPrintForLocalBooking = true;
            //
            this.PrintBarcode = [{
                    barcode: this.resultDtos.lrNumber,
                    Name: 'A'
                }];
            this.validatBeforePrint();
            this.mainStationForPrint = '';
            console.log('a');
            console.log(this.resultDtos);
            window.setTimeout(function () {
                window.print();
            }, 5000);
            window.onafterprint = function () {
                window.close();
            };
            localStorage.clear();
            window.addEventListener('afterprint', function (event) {
                if (_this.viewLrEntryPrintPage) {
                    _this.viewLrEntryPrintPage = false;
                    _this.clearPrintFields();
                }
            });
            if (this.userDataDtoReturnSession.sortedMapFeatures.Rights != null) {
                for (var i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++) {
                    if (this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
                            "LrEntryPrintAll For Single Station") {
                        this.mainStationForPrint = 'LrEntryPrintAll For Single Station';
                    }
                }
            }
        }
    }
    LrEntryPrintComponent.prototype.ngOnInit = function () {
    };
    LrEntryPrintComponent.prototype.validatBeforePrint = function () {
        this.actualPrintMode = this.resultDtos.lrEntryPrintMode;
        //        this.printMode=this.actualPrintMode;
        if (this.resultDtos.isUnLoadByConsignee == true) {
            this.unloadByCsn = "Unloaded by consignee    ";
        }
        if (this.resultDtos.remarks != null
            && (this.resultDtos.remarks != "Select")) {
            //            this.unloadByCsn += "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>"
            //                + this.resultDtos.remarks + "</strong>";
            this.unloadByCsn += this.resultDtos.remarks;
        }
        if (this.resultDtos.consigneeMobileNo == null || this.resultDtos.consigneeMobileNo == '') {
            this.resultDtos.consigneeMobileNo = 'NA';
        }
        else {
            this.resultDtos.consigneeMobileNo = this.resultDtos.consigneeMobileNo;
        }
        if (this.resultDtos.consignorMobileNo == null || this.resultDtos.consignorMobileNo == '') {
            this.resultDtos.consignorMobileNo = 'NA';
        }
        else {
            this.resultDtos.consignorMobileNo = this.resultDtos.consignorMobileNo;
        }
        if (this.resultDtos.toBeBilled == true) {
            //Pending
            this.toBeBilled = "background='" + this.userDataDtoReturnSession.ip + "/img/to be.PNG'";
            this.toBeBilled1 = "background='" + this.userDataDtoReturnSession.ip + "/img/billed.PNG'";
        }
        if ((this.resultDtos.isHandWithCare == true) && (this.resultDtos.isCod == true)) {
            this.handleWitCare = "HANDLE WITH CARE - COD";
        }
        else if (this.resultDtos.isHandWithCare == true) {
            this.handleWitCare = "HANDLE WITH CARE";
        }
        else if (this.resultDtos.isCod == true) {
            this.handleWitCare = "COD";
        }
        if (this.resultDtos.gatePass == true) {
            this.gatePass = "EXCISE COPY ATTACHED ";
        }
        if (this.resultDtos.ccAttach) {
            this.ccAttach = " C.C.ATTACHED";
        }
        if ((this.resultDtos.gatePass == true) && (this.resultDtos.ccAttach == true)) {
            this.slash = '/';
        }
        else {
            this.slash = '';
        }
        //        getKeralaDestination();
        this.eSugam = this.resultDtos.eWayBillNo == null ? "NA" : this.resultDtos.eWayBillNo == '' ? "NA" : this.resultDtos.eWayBillNo;
        if (this.resultDtos.isDoorDeliv == true) {
            this.eDecCom = "DOOR DELIVERY";
        }
        if (this.resultDtos.selfLr != null && this.resultDtos.selfLr == true) {
            this.selfLr = "SELF LR - DO NOT DELIVER WITHOUT CONSIGNEE COPY";
            this.showSelfLr = true;
        }
        else {
            this.showSelfLr = false;
        }
        if (((this.handleWitCare != null) && (this.handleWitCare != '')) && ((this.resultDtos.selfLr != null) && (this.resultDtos.selfLr == true))) {
            this.slashInCode = ' / ';
        }
        else {
            this.slashInCode = '';
        }
        this.gateCcESugam = this.eSugam;
        this.gateCc = this.gatePass + this.slash + this.ccAttach;
        //        if ( this.gateCc.endsWith( "/" ) ) {
        //            //Pending
        ////                        this.gateCc = this.gateCc.substring( 0, ( this.gateCc.length() - 1 ) );
        //        }
        // destination address details
        // destination address details
        this.address = this.resultDtos.branchAddress == null ? "" : this.resultDtos.branchAddress;
        this.addressSplit = this.address.split(",");
        this.address1 = "";
        this.address2 = "";
        if (this.addressSplit.length > 0) {
            this.address2 = this.addressSplit[this.addressSplit.length - 1] + ",";
            for (var b = 0; b < this.addressSplit.length - 1; b++) {
                this.address1 += this.addressSplit[b] + ",";
            }
        }
        else {
            this.address1 = this.address;
        }
        this.city = this.resultDtos.branchCity == null ? "" : this.resultDtos.branchCity;
        this.pinCode = this.resultDtos.branchPincode == null ? "" : this.resultDtos.branchPincode.toString();
        this.phone = this.resultDtos.branchPhNo == null ? "NA" : this.resultDtos.branchPhNo
            .toString();
        this.cityPin = this.city + " - " + this.pinCode;
        this.emailId = this.resultDtos.branchEmailId == null ? "NA" : this.resultDtos.branchEmailId;
        if (this.resultDtos.multiArtSize != null) {
            //Pending
            this.artSize = this.resultDtos.multiArtSizeForPrint;
            //            document.getElementById("multiArtPrint").innerHTML= this.resultDtos.multiArtSizeForPrint;
            //            this.artSize = "</br>VOLUME</br>" + this.artSize.replaceAll( "#", "</br>" );
            //            this.artSize = this.artSize.replaceAll( "_", " X " );
        }
        if (this.resultDtos.chgWtLr != null && (this.resultDtos.chgWtLr != 0)) {
            if (this.artSize == "") {
                this.artChgWt = this.resultDtos.chgWtLr + " Kgs";
            }
            else {
                this.artChgWt = "+" + this.resultDtos.chgWtLr + " Kgs";
            }
        }
        this.subCommodity = null;
        if (this.resultDtos.subCommodity == "NA") {
            this.subCommodity = "";
        }
        else {
            this.subCommodity = " (" + this.resultDtos.subCommodity + ")";
            console.log(this.resultDtos.subCommodity);
        }
        this.clerkName = null;
        if (this.resultDtos.clerkName != null
            && this.resultDtos.clerkName == "") {
            this.clerkName = "";
        }
        else {
            this.clerkName = " / " + this.resultDtos.clerkName.toUpperCase();
        }
        this.message = null;
        if (this.actualPrintMode != null && this.actualPrintMode == "duplicate") {
            this.printMode = " - DUPLICATE";
            this.message = "This is a duplicate copy, seal & signature required for authentication";
        }
        else {
            this.printMode = "";
            this.message = this.resultDtos.message;
        }
        if (this.resultDtos.toPay > 0) {
            this.ViewToPay = true;
            this.ViewPaid = false;
        }
        else {
            this.ViewToPay = false;
            this.ViewPaid = true;
        }
        if ((this.resultDtos.lrEntryMode != null) && (this.resultDtos.lrEntryMode != 'localBookingTrip')) {
            this.mainAddress = this.resultDtos.address == null ? "NA" : this.resultDtos.address;
            console.log('Main address :' + this.mainAddress);
            this.mainMobileNo = (this.resultDtos.mobileNum == null ? "NA" : this.resultDtos.mobileNum);
            this.mainEmailId = (this.resultDtos.emailId == null ? "NA" : this.resultDtos.emailId);
            this.transportId = (this.resultDtos.transportId == null ? "NA" : this.resultDtos.transportId);
            this.sourcePrint = this.resultDtos.source.toUpperCase();
            this.destinationPrint = this.resultDtos.destination.toUpperCase();
            this.entryByPrint = this.resultDtos.entryBy.toUpperCase();
            console.log('entry Print :' + this.entryByPrint);
            if ((this.resultDtos.lrEntryCopyType != null) && (this.resultDtos.lrEntryCopyType == 'ALL')) {
                this.showPrintForOtherBooking = true;
            }
            // update in database
            if (((this.mainStationForPrint == 'LrEntryPrintAll For Single Station') && (this.actualPrintMode == 'original')) || ((this.mainStationForPrint == 'LrEntryPrintAll For Different Station') && (this.actualPrintMode == 'duplicate'))) {
                if (this.resultDtos.lrEntryCopyType = 'ALL') {
                    this.resultDtos.lrConsigneeCopy = true;
                    this.resultDtos.lrConsignorCopy = true;
                    this.resultDtos.lrLorryCopy = true;
                }
                this.updateLrCopyDetails();
            }
        }
        else {
            this.showPrintForLocalBooking = true;
        }
    };
    //For Clearing the Print Fields
    LrEntryPrintComponent.prototype.clearPrintFields = function () {
        this.dataForPrint = '';
        this.resultDtos = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.showPrintForOtherBooking = false;
        this.showPrintForLocalBooking = false;
        this.actualPrintMode = null;
        this.totPaid = '';
        this.totToPay = '';
        this.artSize = '';
        this.gatePass = '';
        this.ccAttach = '';
        this.eSugam = '';
        this.gateCcESugam = '';
        this.artChgWt = '';
        this.handleWitCare = '';
        this.toBeBilled = '';
        this.toBeBilled1 = '';
        this.unloadByCsn = '';
        this.eDecCom = '';
        this.gateCc = '';
        this.selfLr = '';
        this.showSelfLr = false;
        this.address = '';
        this.addressSplit = [];
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.pinCode = '';
        this.phone = '';
        this.cityPin = '';
        this.emailId = '';
        this.subCommodity = '';
        this.clerkName = '';
        this.message = '';
        this.printMode = '';
        //
        this.mainAddress = '';
        this.mainMobileNo = '';
        this.mainEmailId = '';
        this.transportId = '';
        this.sourcePrint = '';
        this.destinationPrint = '';
        this.entryByPrint = '';
        this.slash = '';
        this.slashInCode = '';
        this.ViewToPay = false;
        this.ViewPaid = false;
        console.log('Its Cleared');
    };
    LrEntryPrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lrentry-print',
            template: __webpack_require__(/*! ./lrentry-print.component.html */ "./src/app/lr/entry/lrentry-print/lrentry-print.component.html"),
            styles: [__webpack_require__(/*! ./lrentry-print.component.css */ "./src/app/lr/entry/lrentry-print/lrentry-print.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_3__["MasterReadService"]])
    ], LrEntryPrintComponent);
    return LrEntryPrintComponent;
}());



/***/ }),

/***/ "./src/app/lr/entry/lrentryform-print2/lrentryform-print2.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/lr/entry/lrentryform-print2/lrentryform-print2.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txt_ac {\n\ttext-align: center;\n}\n\n.dsply-ib {\n\tdisplay: inline-block;\n}\n\nh6, h5, h4, h3, h2, h1, p, .custome {\n\tfont-size: 13.3px;\n\tmargin: 1px;\n\tpadding: 1px;\n\tpadding-top: 3px;\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n\n.fontS_11 {\n\tfont-size: 14px;\n\tmargin: 0px;\n}\n\n.fontS_10 {\n\tfont-size: 13px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.fontS_7 {\n\tfont-size: 12px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.border {\n\tborder: 1px solid #000 !important;\n\tborder-collapse: collapse;\n\tpadding: 0px;\n}\n\n.dsplyNone {\n\tdisplay: none;\n}\n\n.border_right {\n\tborder-right: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n.border_left {\n\tborder-left: 1px solid #000;\n\tborder-collapse: collapse;\n\tmargin-left: -1px;\n}\n\n.border_bottom {\n\tborder-bottom: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n.border_top {\n\tborder-top: 1px solid #000;\n\tborder-collapse: collapse;\n}\n\n@media print {\n\tbody * {\n\t\tvisibility: hidden;\n\t}\n\t#sidebarnav {\n\t\tvisibility: hidden;\n\t}\n\t#section_to_print, #section_to_print * {\n\t\tvisibility: visible;\n\t}\n/* \t.page-break { display:block; page-break-before:always; }  */\n}\n\n#left, #right, div:empty {\n\tmin-height: 19px;\n}\n\n#left, div:empty {\n\tmin-height: 22px;\n}\n\n/* #left, #right, div!:empty { */\n\n/* \tmargin-top: -15px; */\n\n/* } */\n\n.sidebar-nav ul .sidebar-item {\n\tdisplay: none;\n}\n\n/* print changes */\n\n.container {\n\tmax-width: 97%;\n}\n\n@media ( min-width : 768px) {\n\t#main-wrapper[data-layout=\"horizontal\"] .sidebar-nav #sidebarnav {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tdisplay: none;\n\t}\n}\n\n@media ( min-width : 768px) {\n\t.col-md-3, .col-md-9 {\n\t\tpadding-left: 7px !important;\n\t}\n}\n\nhr {\n\tborder: .5px solid black;\n\twidth: 100%;\n\tmargin-left: 7px !important;\n\tmargin: 0px;\n}\n\n.fontS_15 {\n\tfont-size: 15px;\n\tmargin: 0px;\n}\n\n.fontS_13 {\n\tfont-size: 13px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.fontS_12 {\n\tfont-size: 12px;\n\tmargin: 0px;\n\tpadding: 0px\n}\n\n.font_bold{\nfont-weight:900;\n}\n\n/* @media print { */\n\n/* \t::ng-deep #firstPrint { */\n\n/* \t\tpage-break-after: auto; */\n\n/* \t\tpage-break-inside:avoid; */\n\n/* \t} */\n\n/* \t::ng-deep #secondPrint { */\n\n/* \t\tpage-break-before: auto; */\n\n/* \t\tpage-break-inside:avoid; */\n\n/* \t} */\n\n/* \t::ng-deep #thirdPrint  { */\n\n/* \t\tpage-break-before: auto; */\n\n/* \t\tpage-break-inside:avoid;  */\n\n/* \t\tpage-break-after:auto; */\n\n/* \t} */\n\n/* } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHIvZW50cnkvbHJlbnRyeWZvcm0tcHJpbnQyL2xyZW50cnlmb3JtLXByaW50Mi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0Msc0JBQXNCO0NBQ3RCOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLDBDQUEwQztDQUMxQzs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7Q0FDWjs7QUFHRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osWUFBWTtDQUNaOztBQUVEO0NBQ0Msa0NBQWtDO0NBQ2xDLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2I7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsNEJBQTRCO0NBQzVCLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FDbEI7O0FBRUQ7Q0FDQyw4QkFBOEI7Q0FDOUIsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsMkJBQTJCO0NBQzNCLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLG9CQUFvQjtFQUNwQjtBQUNGLGdFQUFnRTtDQUMvRDs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQjs7QUFFRCxpQ0FBaUM7O0FBQ2pDLHlCQUF5Qjs7QUFDekIsT0FBTzs7QUFJUDtDQUNDLGNBQWM7Q0FDZDs7QUFDRCxtQkFBbUI7O0FBQ25CO0NBQ0MsZUFBZTtDQUNmOztBQUVEO0NBQ0M7RUFDQyxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZDtDQUNEOztBQUVEO0NBQ0M7RUFDQyw2QkFBNkI7RUFDN0I7Q0FDRDs7QUFFRDtDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osNEJBQTRCO0NBQzVCLFlBQVk7Q0FDWjs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1o7O0FBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFlBQVk7Q0FDWjs7QUFHRDtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osWUFBWTtDQUNaOztBQUNEO0FBQ0EsZ0JBQWdCO0NBQ2Y7O0FBRUQsb0JBQW9COztBQUNwQiw4QkFBOEI7O0FBQzlCLCtCQUErQjs7QUFDL0IsZ0NBQWdDOztBQUNoQyxRQUFROztBQUVSLCtCQUErQjs7QUFDL0IsZ0NBQWdDOztBQUNoQyxnQ0FBZ0M7O0FBQ2hDLFFBQVE7O0FBRVIsK0JBQStCOztBQUMvQixnQ0FBZ0M7O0FBQ2hDLGlDQUFpQzs7QUFDakMsOEJBQThCOztBQUM5QixRQUFROztBQUVSLE9BQU8iLCJmaWxlIjoic3JjL2FwcC9sci9lbnRyeS9scmVudHJ5Zm9ybS1wcmludDIvbHJlbnRyeWZvcm0tcHJpbnQyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHh0X2FjIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHNwbHktaWIge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmg2LCBoNSwgaDQsIGgzLCBoMiwgaDEsIHAsIC5jdXN0b21lIHtcblx0Zm9udC1zaXplOiAxMy4zcHg7XG5cdG1hcmdpbjogMXB4O1xuXHRwYWRkaW5nOiAxcHg7XG5cdHBhZGRpbmctdG9wOiAzcHg7XG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9udFNfMTEge1xuXHRmb250LXNpemU6IDE0cHg7XG5cdG1hcmdpbjogMHB4O1xufVxuXG4uZm9udFNfMTAge1xuXHRmb250LXNpemU6IDEzcHg7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHhcbn1cblxuXG4uZm9udFNfNyB7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0bWFyZ2luOiAwcHg7XG5cdHBhZGRpbmc6IDBweFxufVxuXG4uYm9yZGVyIHtcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRwYWRkaW5nOiAwcHg7XG59XG5cbi5kc3BseU5vbmUge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4uYm9yZGVyX3JpZ2h0IHtcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmJvcmRlcl9sZWZ0IHtcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRtYXJnaW4tbGVmdDogLTFweDtcbn1cblxuLmJvcmRlcl9ib3R0b20ge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmJvcmRlcl90b3Age1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuQG1lZGlhIHByaW50IHtcblx0Ym9keSAqIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cblx0I3NpZGViYXJuYXYge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0fVxuXHQjc2VjdGlvbl90b19wcmludCwgI3NlY3Rpb25fdG9fcHJpbnQgKiB7XG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0fVxuLyogXHQucGFnZS1icmVhayB7IGRpc3BsYXk6YmxvY2s7IHBhZ2UtYnJlYWstYmVmb3JlOmFsd2F5czsgfSAgKi9cbn1cblxuI2xlZnQsICNyaWdodCwgZGl2OmVtcHR5IHtcblx0bWluLWhlaWdodDogMTlweDtcbn1cblxuI2xlZnQsIGRpdjplbXB0eSB7XG5cdG1pbi1oZWlnaHQ6IDIycHg7XG59XG5cbi8qICNsZWZ0LCAjcmlnaHQsIGRpdiE6ZW1wdHkgeyAqL1xuLyogXHRtYXJnaW4tdG9wOiAtMTVweDsgKi9cbi8qIH0gKi9cblxuXG5cbi5zaWRlYmFyLW5hdiB1bCAuc2lkZWJhci1pdGVtIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cbi8qIHByaW50IGNoYW5nZXMgKi9cbi5jb250YWluZXIge1xuXHRtYXgtd2lkdGg6IDk3JTtcbn1cblxuQG1lZGlhICggbWluLXdpZHRoIDogNzY4cHgpIHtcblx0I21haW4td3JhcHBlcltkYXRhLWxheW91dD1cImhvcml6b250YWxcIl0gLnNpZGViYXItbmF2ICNzaWRlYmFybmF2IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuQG1lZGlhICggbWluLXdpZHRoIDogNzY4cHgpIHtcblx0LmNvbC1tZC0zLCAuY29sLW1kLTkge1xuXHRcdHBhZGRpbmctbGVmdDogN3B4ICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuaHIge1xuXHRib3JkZXI6IC41cHggc29saWQgYmxhY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tbGVmdDogN3B4ICFpbXBvcnRhbnQ7XG5cdG1hcmdpbjogMHB4O1xufVxuXG4uZm9udFNfMTUge1xuXHRmb250LXNpemU6IDE1cHg7XG5cdG1hcmdpbjogMHB4O1xufVxuXG4uZm9udFNfMTMge1xuXHRmb250LXNpemU6IDEzcHg7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHhcbn1cblxuXG4uZm9udFNfMTIge1xuXHRmb250LXNpemU6IDEycHg7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHhcbn1cbi5mb250X2JvbGR7XG5mb250LXdlaWdodDo5MDA7XG59XG5cbi8qIEBtZWRpYSBwcmludCB7ICovXG4vKiBcdDo6bmctZGVlcCAjZmlyc3RQcmludCB7ICovXG4vKiBcdFx0cGFnZS1icmVhay1hZnRlcjogYXV0bzsgKi9cbi8qIFx0XHRwYWdlLWJyZWFrLWluc2lkZTphdm9pZDsgKi9cbi8qIFx0fSAqL1xuXHRcbi8qIFx0OjpuZy1kZWVwICNzZWNvbmRQcmludCB7ICovXG4vKiBcdFx0cGFnZS1icmVhay1iZWZvcmU6IGF1dG87ICovXG4vKiBcdFx0cGFnZS1icmVhay1pbnNpZGU6YXZvaWQ7ICovXG4vKiBcdH0gKi9cblx0XG4vKiBcdDo6bmctZGVlcCAjdGhpcmRQcmludCAgeyAqL1xuLyogXHRcdHBhZ2UtYnJlYWstYmVmb3JlOiBhdXRvOyAqL1xuLyogXHRcdHBhZ2UtYnJlYWstaW5zaWRlOmF2b2lkOyAgKi9cbi8qIFx0XHRwYWdlLWJyZWFrLWFmdGVyOmF1dG87ICovXG4vKiBcdH0gKi9cblx0XG4vKiB9ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/lr/entry/lrentryform-print2/lrentryform-print2.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/lr/entry/lrentryform-print2/lrentryform-print2.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"showPrintForOtherBooking\">\n\t<div class=\"page row system_responsive\" id=\"firstPrint\">\n\t\t<div class=\"container border\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<!--first row starts-->\n\t\t\t\t<div class=\"row\" style=\"padding-top: 5px;\">\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<img [src]='src/lrEntryBarcode/' -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t+{{resultDtos.withOutSlash}}+'.jpg' style=\"height: 70px;\"> -->\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t<h6 class=\"border_bottom dsply-ib\">\n\t\t\t\t\t\t\t\t\t<strong>GOODS CONSIGNMENT NOTE</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Head Office :</strong><br> <span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainAddress\"></span> <br>Tel.No&nbsp;:<span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainMobileNo\"></span> <br>Email&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t{{mainEmailId}}<br> <strong>CIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t\tU63090MH2009PTC189328</strong><br> <strong>ISO\n\t\t\t\t\t\t\t\t\t\t\t\t9001:2008</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t{{address1}}<br>{{address2}}<br>{{cityPin}} <br>Tel.No&nbsp;:\n\t\t\t\t\t\t\t\t\t{{phone}}<br>Email&nbsp;&nbsp;: {{emailId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<tr *ngFor=\"let PS of PrintBarcode\">\n\t\t\t\t\t\t\t<ngx-barcode [bc-width]=\"1.5\" [bc-height]=\"27\"\n\t\t\t\t\t\t\t\t[bc-font-size]=\"13\" [bc-value]=\"PS.barcode\"\n\t\t\t\t\t\t\t\t[bc-display-value]=\"true\"> </ngx-barcode>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!--first row ends -->\n\t\t\t\t<!--seconde row Starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px; margin-top: -10px;\">\n\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t<strong>G.C.No. </strong> <strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -7px;margin-top: -10px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>CONSIGNEE COPY</strong> <strong>{{printMode}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6 align='center' width='100%'\n\t\t\t\t\t\t\tstyle='font-size: 14px; height: 20px;'>\n\t\t\t\t\t\t\t<strong> {{handleWitCare}}{{slashInCode}}</strong><span\n\t\t\t\t\t\t\t\t*ngIf=\"showSelfLr\"><strong> SELF LR - DO NOT\n\t\t\t\t\t\t\t\t\tDELIVER WITHOUT CONSIGNEE COPY</strong></span>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t<strong>{{sourcePrint}}</strong> <strong> TO </strong><strong>{{destinationPrint}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>E-Way Bill No</strong>: <strong>{{gateCcESugam}}&nbsp;&nbsp;{{eDecCom}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>DATE</strong>: <strong>{{resultDtos.date}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--seconde row ends-->\n\t\t\t\t<!--third row starts-->\n\t\t\t\t<div class=\"row border_top border_bottom\">\n\t\t\t\t\t<div class=\"col-md-6 txt_ac border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>BOOKING DETAILS</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 txt_ac\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>AMOUNT CHARGES</strong>\n\t\t\t\t\t\t</h6>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--third row ends-->\n\t\t\t\t<!--fourth row starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>CONSIGNOR</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;: <strong>{{ resultDtos.consignorName }}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignor Address</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{resultDtos.addressConsignor}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignor GST No.</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{ resultDtos.gstNoConsignor }}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>CONSIGNEE</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;: <strong>{{ resultDtos.consigneeName }}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignee Address</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{resultDtos.addressConsignee}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignee GST No.</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{ resultDtos.gstNoConsignee }}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>No.of Articles</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;: <strong>{{resultDtos.totalArticles}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Nature of Packing</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 fontS_11\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{resultDtos.packNature}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Said to Contain</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;: <strong>{{resultDtos.commodityName}}{{subCommodity}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Value of Goods</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: Rs {{resultDtos.goodsValue}}/-</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>WEIGHT(In Kgs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 12.3px;\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Actual</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 12.3px;\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Charged</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{resultDtos.actualWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.chargedWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<h6>{{artSize}}{{artChgWt}}</h6> -->\n\t\t\t\t\t\t\t\t\t\t<h6 [innerHTML]=\"artSize\"></h6>\n\t\t\t\t\t\t\t\t\t\t<h6>{{artChgWt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>FRIGHT(In Rs.)</strong> -->\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>FREIGHT(In Rs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>ToPay</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Paid</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Base Freight</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Hamali</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Statistical Charges</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Others</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>L.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>B.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>A.O.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>F O V</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>DD</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-md-12\" -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\tstyle=\"margin-top: 10px; border-top: 1px solid #000;\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<h6 class=\"fontS_11\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>Total</strong> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"left\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_left\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=ViewPaid>{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--fourth row ends-->\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-6  border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>Remark : &nbsp;&nbsp;&nbsp;{{gateCc}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 style='font-size: 13px;'>\n\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{unloadByCsn}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Bill.No / Pvt.Mark</strong><br>{{resultDtos.billNumber}}\n\t\t\t\t\t\t\t\t\t/ {{resultDtos.privateMarker}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\" style='min-height: 35px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>TOTAL</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-8 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 17px;'>\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNEE COPY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>G.C.No. </strong><strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Transport ID</strong><br> {{transportId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>FOR SRD Logistics Pvt.Ltd.</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>Prepared by</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" style='margin-top: -8px;'>\n\t\t\t\t\t<div class=\"col-md-8  border_top border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 10px;'>\n\t\t\t\t\t\t\t\t\t<strong>DELIVERY SHALL BE AGAINST CONSIGNEE COPY ONLY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t<h6 style='font-size: 9px;'>This G.C Note is subject to the\n\t\t\t\t\t\t\t\t\tTerms & Conditions printed overleaf</h6>\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Booked at Owner's Risk</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>{{message}}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 10px; padding-top: 5px;'>\n\t\t\t\t\t\t\t\t\t<strong>{{entryByPrint}}{{clerkName}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6\n\t\t\t\t\t\t\t\t\tstyle='font-size: 10px; text-align: right; font-style: Brush Script MT;'>\n\t\t\t\t\t\t\t\t\t<strong>Thank You</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t<!--  PRINT 1 ENDS HERE -->\n\t<!-- \t<div style='float: left'> -->\n\n\t<!-- \t\t<p style='overflow: hidden; page-break-before: always;'></p> -->\n\n\t<!-- \t</div> -->\n\t<div class=\"page row system_responsive\" id=\"secondPrint\">\n\t\t<div class=\"container border\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<!--first row starts-->\n\t\t\t\t<div class=\"row\" style=\"padding-top: 5px;\">\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<img [src]='src/cashMemoBarcode/' -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t+{{rateDtoForPrint.withOutSlash}}+'.jpg' style=\"height: 70px;\"> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t<h6 class=\"border_bottom dsply-ib\">\n\t\t\t\t\t\t\t\t\t<strong>GOODS CONSIGNMENT NOTE</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Head Office :</strong><br> <span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainAddress\"></span> <br>Tel.No&nbsp;:<span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainMobileNo\"></span> <br>Email&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t{{mainEmailId}}<br> <strong>CIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t\tU63090MH2009PTC189328</strong><br> <strong>ISO\n\t\t\t\t\t\t\t\t\t\t\t\t9001:2008</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t{{address1}}<br>{{address2}}<br>{{cityPin}} <br>Tel.No&nbsp;:\n\t\t\t\t\t\t\t\t\t{{phone}}<br>Email&nbsp;&nbsp;: {{emailId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<tr *ngFor=\"let PS of PrintBarcode\">\n\t\t\t\t\t\t\t<ngx-barcode [bc-width]=\"1.5\" [bc-height]=\"27\"\n\t\t\t\t\t\t\t\t[bc-font-size]=\"13\" [bc-value]=\"PS.barcode\"\n\t\t\t\t\t\t\t\t[bc-display-value]=\"true\"> </ngx-barcode>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!--first row ends -->\n\t\t\t\t<!--seconde row Starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px; margin-top: -10px;\">\n\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t<strong>G.C.No. </strong> <strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -7px;margin-top: -10px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>CONSIGNOR COPY</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6 align='center' width='100%'\n\t\t\t\t\t\t\tstyle='font-size: 14px; height: 20px;'>\n\t\t\t\t\t\t\t<strong> {{handleWitCare}}{{slashInCode}}</strong><span\n\t\t\t\t\t\t\t\t*ngIf=\"showSelfLr\"><strong> SELF LR - DO NOT\n\t\t\t\t\t\t\t\t\tDELIVER WITHOUT CONSIGNEE COPY</strong></span>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t<strong>{{sourcePrint}}</strong> <strong> TO </strong><strong>{{destinationPrint}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>E-Way Bill No</strong>: <strong>{{gateCcESugam}}&nbsp;&nbsp;{{eDecCom}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>DATE</strong>: <strong>{{resultDtos.date}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<!--seconde row ends-->\n\t\t\t\t<!--third row starts-->\n\t\t\t\t<div class=\"row border_top border_bottom\">\n\t\t\t\t\t<div class=\"col-md-6 txt_ac border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>BOOKING DETAILS</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 txt_ac\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>AMOUNT CHARGES</strong>\n\t\t\t\t\t\t</h6>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--third row ends-->\n\t\t\t\t<!--fourth row starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>CONSIGNOR</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t &nbsp;: <strong>{{ resultDtos.consignorName }}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignor Address</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{resultDtos.addressConsignor}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignor GST No.</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{ resultDtos.gstNoConsignor }}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>CONSIGNEE</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t &nbsp;: <strong>{{ resultDtos.consigneeName }}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignee Address</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{resultDtos.addressConsignee}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignee GST No.</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{ resultDtos.gstNoConsignee }}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>No.of Articles</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t &nbsp;&nbsp;: <strong>{{resultDtos.totalArticles}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Nature of Packing</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 fontS_11\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{resultDtos.packNature}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Said to Contain</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t &nbsp;&nbsp;: <strong>{{resultDtos.commodityName}}{{subCommodity}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Value of Goods</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: Rs {{resultDtos.goodsValue}}/-</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t<div class=\"row border_top\" style=\"padding: 1px;\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t<div class=\"col-md-12 fontS_10\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<h6> -->\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t</div> -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>WEIGHT(In Kgs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 12.3px;\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Actual</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 12.3px;\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Charged</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{resultDtos.actualWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.chargedWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<h6>{{artSize}}{{artChgWt}}</h6> -->\n\t\t\t\t\t\t\t\t\t\t<h6 [innerHTML]=\"artSize\"></h6>\n\t\t\t\t\t\t\t\t\t\t<h6>{{artChgWt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>FRIGHT(In Rs.)</strong> -->\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>FREIGHT(In Rs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>ToPay</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Paid</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Base Freight</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Hamali</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Statistical Charges</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Others</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>L.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>B.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>A.O.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>F O V</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>DD</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-md-12\" -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\tstyle=\"margin-top: 10px; border-top: 1px solid #000;\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<h6 class=\"fontS_11\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>Total</strong> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"left\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_left\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=ViewPaid>{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--fourth row ends-->\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-6  border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>Remark : &nbsp;&nbsp;&nbsp;{{gateCc}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 style='font-size: 13px;'>\n\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{unloadByCsn}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Bill.No / Pvt.Mark</strong><br>{{resultDtos.billNumber}}\n\t\t\t\t\t\t\t\t\t/ {{resultDtos.privateMarker}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\" style='min-height: 35px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>TOTAL</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-8 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 17px;'>\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNOR COPY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>G.C.No. </strong><strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Transport ID</strong><br> {{transportId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>FOR SRD Logistics Pvt.Ltd.</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>Prepared by</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" style='margin-top: -8px;'>\n\t\t\t\t\t<div class=\"col-md-8  border_top border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 10px;'>\n\t\t\t\t\t\t\t\t\t<strong>DELIVERY SHALL BE AGAINST CONSIGNEE COPY ONLY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t<h6 style='font-size: 9px;'>This G.C Note is subject to the\n\t\t\t\t\t\t\t\t\tTerms & Conditions printed overleaf</h6>\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Booked at Owner's Risk</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>{{resultDtos.message}}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 10px; padding-top: 5px;'>\n\t\t\t\t\t\t\t\t\t<strong>{{entryByPrint}}{{clerkName}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6\n\t\t\t\t\t\t\t\t\tstyle='font-size: 10px; text-align: right; font-style: Brush Script MT;'>\n\t\t\t\t\t\t\t\t\t<strong>Thank You</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t<!--  PRINT 2 ENDS HERE -->\n\t<!-- \t<div> -->\n\t<!-- \t\t<p style='page-break-after: always;'></p> -->\n\t<!-- \t</div> -->\n\t<div class=\"page row system_responsive\" id=\"thirdPrint\">\n\t\t<div class=\"container border\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<!--first row starts-->\n\t\t\t\t<div class=\"row\" style=\"padding-top: 5px;\">\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<img [src]='src/cashMemoBarcode/' -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t+{{rateDtoForPrint.withOutSlash}}+'.jpg' style=\"height: 70px;\"> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t<h6 class=\"border_bottom dsply-ib\">\n\t\t\t\t\t\t\t\t\t<strong>GOODS CONSIGNMENT NOTE</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Head Office :</strong><br> <span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainAddress\"></span> <br>Tel.No&nbsp;:<span\n\t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainMobileNo\"></span> <br>Email&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t{{mainEmailId}}<br> <strong>CIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:\n\t\t\t\t\t\t\t\t\t\t\t\tU63090MH2009PTC189328</strong><br> <strong>ISO\n\t\t\t\t\t\t\t\t\t\t\t\t9001:2008</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t{{address1}}<br>{{address2}}<br>{{cityPin}} <br>Tel.No&nbsp;:\n\t\t\t\t\t\t\t\t\t{{phone}}<br>Email&nbsp;&nbsp;: {{emailId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<tr *ngFor=\"let PS of PrintBarcode\">\n\t\t\t\t\t\t\t<ngx-barcode [bc-width]=\"1.5\" [bc-height]=\"27\"\n\t\t\t\t\t\t\t\t[bc-font-size]=\"13\" [bc-value]=\"PS.barcode\"\n\t\t\t\t\t\t\t\t[bc-display-value]=\"true\"> </ngx-barcode>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!--first row ends -->\n\t\t\t\t<!--seconde row Starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px; margin-top: -10px;\">\n\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t<strong>G.C.No. </strong> <strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -7px;margin-top: -10px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>LORRY COPY</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6 align='center' width='100%'\n\t\t\t\t\t\t\tstyle='font-size: 14px; height: 20px;'>\n\t\t\t\t\t\t\t<strong> {{handleWitCare}}{{slashInCode}}</strong><span\n\t\t\t\t\t\t\t\t*ngIf=\"showSelfLr\"><strong> SELF LR - DO NOT\n\t\t\t\t\t\t\t\t\tDELIVER WITHOUT CONSIGNEE COPY</strong></span>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t<strong>{{sourcePrint}}</strong> <strong> TO </strong><strong>{{destinationPrint}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>E-Way Bill No</strong>: <strong>{{gateCcESugam}}&nbsp;&nbsp;{{eDecCom}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>DATE</strong>: <strong>{{resultDtos.date}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<!--seconde row ends-->\n\t\t\t\t<!--third row starts-->\n\t\t\t\t<div class=\"row border_top border_bottom\">\n\t\t\t\t\t<div class=\"col-md-6 txt_ac border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>BOOKING DETAILS</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 txt_ac\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>AMOUNT CHARGES</strong>\n\t\t\t\t\t\t</h6>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--third row ends-->\n\t\t\t\t<!--fourth row starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>CONSIGNOR</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t &nbsp;: <strong>{{ resultDtos.consignorName }}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignor Address</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{resultDtos.addressConsignor}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignor GST No.</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{ resultDtos.gstNoConsignor }}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>CONSIGNEE</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t &nbsp;: <strong>{{ resultDtos.consigneeName }}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignee Address</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{resultDtos.addressConsignee}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignee GST No.</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{ resultDtos.gstNoConsignee }}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>No.of Articles</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t &nbsp;&nbsp;: <strong>{{resultDtos.totalArticles}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Nature of Packing</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 fontS_11\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{resultDtos.packNature}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Said to Contain</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t &nbsp;&nbsp;: <strong>{{resultDtos.commodityName}}{{subCommodity}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Value of Goods</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: Rs {{resultDtos.goodsValue}}/-</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t<div class=\"row border_top\" style=\"padding: 1px;\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t<div class=\"col-md-12 fontS_10\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<h6> -->\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t</div> -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>WEIGHT(In Kgs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 12.3px;\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Actual</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 12.3px;\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Charged</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{resultDtos.actualWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.chargedWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<h6>{{artSize}}{{artChgWt}}</h6> -->\n\t\t\t\t\t\t\t\t\t\t<h6 [innerHTML]=\"artSize\"></h6>\n\t\t\t\t\t\t\t\t\t\t<h6>{{artChgWt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>FRIGHT(In Rs.)</strong> -->\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>FREIGHT(In Rs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>ToPay</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Paid</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Base Freight</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Hamali</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Statistical Charges</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Others</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>L.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>B.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>A.O.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>F O V</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>DD</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t<div class=\"col-md-12\" -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\tstyle=\"margin-top: 10px; border-top: 1px solid #000;\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t<h6 class=\"fontS_11\"> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>Total</strong> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"left\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_left\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=ViewPaid>{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--fourth row ends-->\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-6  border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>Remark : &nbsp;&nbsp;&nbsp;{{gateCc}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 style='font-size: 13px;'>\n\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{unloadByCsn}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Bill.No / Pvt.Mark</strong><br>{{resultDtos.billNumber}}\n\t\t\t\t\t\t\t\t\t/ {{resultDtos.privateMarker}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\" style='min-height: 35px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>TOTAL</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-8 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 17px;'>\n\t\t\t\t\t\t\t\t\t<strong>LORRY COPY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>G.C.No. </strong><strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Transport ID</strong><br> {{transportId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>FOR SRD Logistics Pvt.Ltd.</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>Prepared by</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" style='margin-top: -8px;'>\n\t\t\t\t\t<div class=\"col-md-8  border_top border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 10px;'>\n\t\t\t\t\t\t\t\t\t<strong>DELIVERY SHALL BE AGAINST CONSIGNEE COPY ONLY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t<h6 style='font-size: 9px;'>This G.C Note is subject to the\n\t\t\t\t\t\t\t\t\tTerms & Conditions printed overleaf</h6>\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Booked at Owner's Risk</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>{{resultDtos.message}}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 10px; padding-top: 5px;'>\n\t\t\t\t\t\t\t\t\t<strong>{{entryByPrint}}{{clerkName}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6\n\t\t\t\t\t\t\t\t\tstyle='font-size: 10px; text-align: right; font-style: Brush Script MT;'>\n\t\t\t\t\t\t\t\t\t<strong>Thank You</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>\n<!--  PRINT 3 ENDS HERE -->\n<!-- Row -->\n<div *ngIf=\"showPrintForLocalBooking\">\n\t<div class=\"row system_responsive\">\n\t\t<div class=\"container border\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<!--first row starts-->\n\t\t\t\t<div class=\"row\" style=\"padding-top: 5px;\">\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<img [src]='src/cashMemoBarcode/' -->\n\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t+{{rateDtoForPrint.withOutSlash}}+'.jpg' style=\"height: 70px;\"> -->\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t<h6 class=\"border_bottom dsply-ib\">\n<!-- \t\t\t\t\t\t\t\t\t<strong>GOODS CONSIGNMENT NOTE</strong> -->\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n<!-- \t\t\t\t\t\t\t\t\t\t\t<strong>Head Office :</strong><br> <span -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainAddress\"></span> <br>Tel.No&nbsp;:<span -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"mainMobileNo\"></span> <br>Email&nbsp;&nbsp;: -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t{{mainEmailId}}<br> <strong>CIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\tU63090MH2009PTC189328</strong><br> <strong>ISO -->\n<!-- \t\t\t\t\t\t\t\t\t\t\t\t9001:2008</strong> -->\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h6>\n<!-- \t\t\t\t\t\t\t\t\t{{address1}}<br>{{address2}}<br>{{cityPin}} <br>Tel.No&nbsp;: -->\n<!-- \t\t\t\t\t\t\t\t\t{{phone}}<br>Email&nbsp;&nbsp;: {{emailId}} -->\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t<img src=\"assets/images/srdLogisticPrintLogo.png\" alt=\"SRDLogo\"> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!--first row ends -->\n\t\t\t\t<!--seconde row Starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px; margin-top: -10px;\">\n\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t<strong>G.C.No. </strong> <strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -7px;margin-top: -10px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6 align='center' width='100%'\n\t\t\t\t\t\t\tstyle='font-size: 14px; height: 20px;'>\n\t\t\t\t\t\t\t<span *ngIf=\"showSelfLr\"><strong> SELF LR - DO\n\t\t\t\t\t\t\t\t\tNOT DELIVER WITHOUT CONSIGNEE COPY</strong></span>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6 style=\"font-size: 14px\">\n\t\t\t\t\t\t\t<strong>{{sourcePrint}}</strong> <strong> TO </strong><strong>{{destinationPrint}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>E-Way Bill No</strong>: <strong>{{gateCcESugam}}&nbsp;&nbsp;{{eDecCom}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -7px;\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>DATE</strong>: <strong>{{resultDtos.date}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<!--seconde row ends-->\n\t\t\t\t<!--third row starts-->\n\t\t\t\t<div class=\"row border_top border_bottom\">\n\t\t\t\t\t<div class=\"col-md-6 txt_ac border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>BOOKING DETAILS</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 txt_ac\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>AMOUNT CHARGES</strong>\n\t\t\t\t\t\t</h6>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--third row ends-->\n\t\t\t\t<!--fourth row starts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>CONSIGNOR</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t &nbsp;: <strong>{{ resultDtos.consignorName }}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignor Address</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{resultDtos.addressConsignor}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignor GST No.</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{ resultDtos.gstNoConsignor }}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>CONSIGNEE</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 17px\">\n\t\t\t\t\t\t\t\t\t\t\t &nbsp;: <strong>{{ resultDtos.consigneeName }}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignee Address</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{resultDtos.addressConsignee}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Consignee GST No.</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{ resultDtos.gstNoConsignee }}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>No.of Articles</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t &nbsp;&nbsp;: <strong>{{resultDtos.totalArticles}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Nature of Packing</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 fontS_11\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: {{resultDtos.packNature}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Said to Contain</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t &nbsp;&nbsp;: <strong>{{resultDtos.commodityName}}{{subCommodity}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-left: -10px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Value of Goods</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-left: -50px;\">\n\t\t\t\t\t\t\t\t\t\t<h6>&nbsp;&nbsp;: Rs {{resultDtos.goodsValue}}/-</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-9\" style=\"margin-left: -40px;\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t<div class=\"row border_top\" style=\"padding: 1px;\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t<div class=\"col-md-12 fontS_10\"> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t<h6> -->\n\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t</h6> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<!-- \t\t\t\t\t</div> -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>WEIGHT(In Kgs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 12.3px;\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Actual</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6 style=\"font-size: 12.3px;\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Charged</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{resultDtos.actualWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"border-bottom: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.chargedWeight}}</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\">\n\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<h6>{{artSize}}{{artChgWt}}</h6> -->\n\t\t\t\t\t\t\t\t\t\t<h6 [innerHTML]=\"artSize\"></h6>\n\t\t\t\t\t\t\t\t\t\t<h6>{{artChgWt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\t\t\t\t<strong>FRIGHT(In Rs.)</strong> -->\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_bottom\">\n\t\t\t\t\t\t\t\t<div class=\"row txt_ac\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>FREIGHT(In Rs.)</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>ToPay</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 txt_ac\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-top: 1px solid #000;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Paid</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<div class=\"row\" style=\"margin-left: -24px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Base Freight</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Hamali</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Statistical Charges</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Others</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>L.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>B.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>A.O.C</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>F O V</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong>DD</strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"left\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_left\" style=\"text-align: right;\"\n\t\t\t\t\t\t\t\tid=\"right\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=ViewPaid>{{resultDtos.frieghtAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.hamali}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.statisticalCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.others}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.lcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.bcChg}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.aoc}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.riskCharge}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">{{resultDtos.ddAmt}}</h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<h6></h6>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--fourth row ends-->\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-6  border_right\">\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<strong>Remark : &nbsp;&nbsp;&nbsp;{{gateCc}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t<h6 style='font-size: 13px;'>\n\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{unloadByCsn}}</strong>\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Bill.No / Pvt.Mark</strong><br>{{resultDtos.billNumber}}\n\t\t\t\t\t\t\t\t\t/ {{resultDtos.privateMarker}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\" style='min-height: 35px;'>\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>TOTAL</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewToPay\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t<h6 *ngIf=\"ViewPaid\">\n\t\t\t\t\t\t\t\t\t<strong>{{resultDtos.grandTotal}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row border_top\">\n\t\t\t\t\t<div class=\"col-md-8 border_right\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 border_right\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 17px;'>\n\t\t\t\t\t\t\t\t\t<strong>CONSIGNEE COPY</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 border_right txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>G.C.No. </strong><strong>{{resultDtos.lrNumber}}</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 txt_ac\">\n\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t<strong>Transport ID</strong><br> {{transportId}}\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>FOR SRD Logistics Pvt.Ltd.</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row txt_ac\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h6 style='font-size: 12px;'>\n\t\t\t\t\t\t\t\t\t<strong>Prepared by</strong>\n\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/lr/entry/lrentryform-print2/lrentryform-print2.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/lr/entry/lrentryform-print2/lrentryform-print2.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LrEntryFormPrint2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrEntryFormPrint2Component", function() { return LrEntryFormPrint2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataService/masterread-service */ "./src/app/dataService/masterread-service.ts");
/* harmony import */ var src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/LR-dto */ "./src/app/dto/LR-dto.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Component, OnInit } from '@angular/core';
//import { Router } from "@angular/router";
//import { ParamMap } from "@angular/router";
//import { Route } from "@angular/router";
//import { switchMap } from "rxjs/internal/operators/switchMap";
//import { ActivatedRoute } from "@angular/router";
//import { RateMasterDto } from "src/app/dto/RateMaster-dto";
////for datepicker starts
//import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
//import { DatePipe } from "@angular/common";
////for datepicker ends


//for the select option with filter ends




var LrEntryFormPrint2Component = /** @class */ (function () {
    function LrEntryFormPrint2Component(router, datePipe, http, masterReadService) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.http = http;
        this.masterReadService = masterReadService;
        this.PrintBarcode = [];
        this.isLoggedIn = true;
        this.resultDtos = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.showPrintForOtherBooking = false;
        this.showPrintForLocalBooking = false;
        this.actualPrintMode = null;
        this.totPaid = '';
        this.totToPay = '';
        this.artSize = '';
        this.gatePass = '';
        this.ccAttach = '';
        this.eSugam = '';
        this.gateCcESugam = '';
        this.artChgWt = '';
        this.handleWitCare = '';
        this.toBeBilled = '';
        this.toBeBilled1 = '';
        this.unloadByCsn = '';
        this.eDecCom = '';
        this.gateCc = '';
        this.selfLr = '';
        this.showSelfLr = false;
        this.address = '';
        this.addressSplit = [];
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.pinCode = '';
        this.phone = '';
        this.cityPin = '';
        this.emailId = '';
        this.subCommodity = '';
        this.clerkName = '';
        this.message = '';
        this.printMode = '';
        //
        this.mainAddress = '';
        this.mainMobileNo = '';
        this.mainEmailId = '';
        this.transportId = '';
        this.sourcePrint = '';
        this.destinationPrint = '';
        this.entryByPrint = '';
        this.slash = '';
        this.ViewToPay = false;
        this.ViewPaid = false;
        this.mainStationForPrint = 'LrEntryPrintAll For Single Station';
        this.slashInCode = '';
        this.viewLrEntryPrintPage = true;
        // update in database
        this.updateLrCopyDetails = function () {
            _this.masterReadService.updateLrCopyTypeDetails(_this.resultDtos).subscribe(function (response) {
                if (response.length == 0) {
                    console.log('error');
                }
                else {
                    console.log('done');
                }
            }),
                function (error) { return console.log(error.json()); },
                function () { return console.log('done'); };
        };
        if (sessionStorage.length == 0) {
            this.isLoggedIn = false;
            //          sweet alert starts
            swal({
                title: "Session Expired",
                text: "Please relogin to access the application!",
                icon: "error",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then(function () {
                //                this.logInPage();
            });
            //            sweet alert ends
        }
        if (this.isLoggedIn) {
            this.userDataDtoReturnSession = JSON.parse(sessionStorage.getItem('SRDWeb'));
            this.dataForPrint = JSON.parse(localStorage.getItem('printAfterSaveForLrEntry'));
            this.resultDtos = this.dataForPrint;
            //            //Pending need to be commented
            //                        this.showPrintForOtherBooking = true;
            //                        this.showPrintForLocalBooking = true;
            //
            this.PrintBarcode = [{
                    barcode: this.resultDtos.lrNumber,
                    Name: 'A'
                }];
            this.validatBeforePrint();
            this.mainStationForPrint = this.resultDtos.mainstation.toLowerCase();
            //            console.log( this.mainStationForPrint );
            //            console.log( this.resultDtos );
            window.setTimeout(function () {
                window.print();
            }, 1000);
            window.onafterprint = function () {
                window.close();
            };
            localStorage.clear();
            window.addEventListener('afterprint', function (event) {
                if (_this.viewLrEntryPrintPage) {
                    _this.viewLrEntryPrintPage = false;
                    _this.clearPrintFields();
                }
            });
            //            if ( this.userDataDtoReturnSession.sortedMapFeatures.Rights != null ) {
            //                for ( let i = 0; i < this.userDataDtoReturnSession.sortedMapFeatures.Rights.length; i++ ) {
            //                    if ( this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] != null
            //                        && this.userDataDtoReturnSession.sortedMapFeatures.Rights[i] ==
            //                        "LrEntryPrintAll For Single Station" ) {
            //                        this.mainStationForPrint = 'LrEntryPrintAll For Single Station';
            //
            //                    }
            //                }
            //            }
        }
    }
    LrEntryFormPrint2Component.prototype.ngOnInit = function () {
    };
    LrEntryFormPrint2Component.prototype.validatBeforePrint = function () {
        this.actualPrintMode = this.resultDtos.lrEntryPrintMode;
        //        console.log( this.actualPrintMode );
        //        this.printMode=this.actualPrintMode;
        if (this.resultDtos.isUnLoadByConsignee == true) {
            this.unloadByCsn = "Unloaded by consignee    ";
        }
        if (this.resultDtos.remarks != null
            && (this.resultDtos.remarks != "Select")) {
            //            this.unloadByCsn += "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>"
            //                + this.resultDtos.remarks + "</strong>";
            this.unloadByCsn += this.resultDtos.remarks;
        }
        if (this.resultDtos.consigneeMobileNo == null || this.resultDtos.consigneeMobileNo == '') {
            this.resultDtos.consigneeMobileNo = 'NA';
        }
        else {
            this.resultDtos.consigneeMobileNo = this.resultDtos.consigneeMobileNo;
        }
        if (this.resultDtos.consignorMobileNo == null || this.resultDtos.consignorMobileNo == '') {
            this.resultDtos.consignorMobileNo = 'NA';
        }
        else {
            this.resultDtos.consignorMobileNo = this.resultDtos.consignorMobileNo;
        }
        if (this.resultDtos.toBeBilled == true) {
            //Pending
            this.toBeBilled = "background='" + this.userDataDtoReturnSession.ip + "/img/to be.PNG'";
            this.toBeBilled1 = "background='" + this.userDataDtoReturnSession.ip + "/img/billed.PNG'";
        }
        if ((this.resultDtos.isHandWithCare == true) && (this.resultDtos.isCod == true)) {
            this.handleWitCare = "HANDLE WITH CARE - COD";
        }
        else if (this.resultDtos.isHandWithCare == true) {
            this.handleWitCare = "HANDLE WITH CARE";
        }
        else if (this.resultDtos.isCod == true) {
            this.handleWitCare = "COD";
        }
        if (this.resultDtos.gatePass == true) {
            this.gatePass = "EXCISE COPY ATTACHED ";
        }
        if (this.resultDtos.ccAttach) {
            this.ccAttach = " C.C.ATTACHED";
        }
        if ((this.resultDtos.gatePass == true) && (this.resultDtos.ccAttach == true)) {
            this.slash = '/';
        }
        else {
            this.slash = '';
        }
        //        getKeralaDestination();
        this.eSugam = this.resultDtos.eWayBillNo == null ? "NA" : this.resultDtos.eWayBillNo == '' ? "NA" : this.resultDtos.eWayBillNo;
        if (this.resultDtos.isDoorDeliv == true) {
            this.eDecCom = "DOOR DELIVERY";
        }
        if (this.resultDtos.selfLr != null && this.resultDtos.selfLr == true) {
            this.selfLr = "SELF LR - DO NOT DELIVER WITHOUT CONSIGNEE COPY";
            this.showSelfLr = true;
        }
        else {
            this.showSelfLr = false;
        }
        if (((this.handleWitCare != null) && (this.handleWitCare != '')) && ((this.resultDtos.selfLr != null) && (this.resultDtos.selfLr == true))) {
            this.slashInCode = ' / ';
        }
        else {
            this.slashInCode = '';
        }
        this.gateCcESugam = this.eSugam;
        this.gateCc = this.gatePass + this.slash + this.ccAttach;
        //        if ( this.gateCc.endsWith( "/" ) ) {
        //            //Pending
        ////                        this.gateCc = this.gateCc.substring( 0, ( this.gateCc.length() - 1 ) );
        //        }
        // destination address details
        // destination address details
        this.address = this.resultDtos.branchAddress == null ? "" : this.resultDtos.branchAddress;
        this.addressSplit = this.address.split(",");
        this.address1 = "";
        this.address2 = "";
        if (this.addressSplit.length > 0) {
            this.address2 = this.addressSplit[this.addressSplit.length - 1] + ",";
            for (var b = 0; b < this.addressSplit.length - 1; b++) {
                this.address1 += this.addressSplit[b] + ",";
            }
        }
        else {
            this.address1 = this.address;
        }
        this.city = this.resultDtos.branchCity == null ? "" : this.resultDtos.branchCity;
        this.pinCode = this.resultDtos.branchPincode == null ? "" : this.resultDtos.branchPincode.toString();
        this.phone = this.resultDtos.branchPhNo == null ? "NA" : this.resultDtos.branchPhNo
            .toString();
        this.cityPin = this.city + " - " + this.pinCode;
        this.emailId = this.resultDtos.branchEmailId == null ? "NA" : this.resultDtos.branchEmailId;
        if (this.resultDtos.multiArtSize != null) {
            //Pending
            this.artSize = this.resultDtos.multiArtSizeForPrint;
            //            document.getElementById("multiArtPrint").innerHTML= this.resultDtos.multiArtSizeForPrint;
            //            this.artSize = "</br>VOLUME</br>" + this.artSize.replaceAll( "#", "</br>" );
            //            this.artSize = this.artSize.replaceAll( "_", " X " );
        }
        if (this.resultDtos.chgWtLr != null && (this.resultDtos.chgWtLr != 0)) {
            if (this.artSize == "") {
                this.artChgWt = this.resultDtos.chgWtLr + " Kgs";
            }
            else {
                this.artChgWt = "+" + this.resultDtos.chgWtLr + " Kgs";
            }
        }
        this.subCommodity = null;
        if (this.resultDtos.subCommodity == "NA") {
            this.subCommodity = "";
        }
        else {
            this.subCommodity = " (" + this.resultDtos.subCommodity + ")";
            //            console.log( this.resultDtos.subCommodity );
        }
        this.clerkName = null;
        if (this.resultDtos.clerkName != null
            && this.resultDtos.clerkName == "") {
            this.clerkName = "";
        }
        else {
            this.clerkName = " / " + this.resultDtos.clerkName.toUpperCase();
        }
        this.message = null;
        if (this.actualPrintMode != null && this.actualPrintMode == "duplicate") {
            this.printMode = " - DUPLICATE";
            this.message = "This is a duplicate copy, seal & signature required for authentication";
        }
        else {
            this.printMode = "";
            this.message = this.resultDtos.message;
        }
        if (this.resultDtos.toPay > 0) {
            this.ViewToPay = true;
            this.ViewPaid = false;
        }
        else {
            this.ViewToPay = false;
            this.ViewPaid = true;
        }
        if ((this.resultDtos.lrEntryMode != null) && (this.resultDtos.lrEntryMode != 'localBookingTrip')) {
            this.mainAddress = this.resultDtos.address == null ? "NA" : this.resultDtos.address;
            //            console.log( 'Main address :' + this.mainAddress );
            this.mainMobileNo = (this.resultDtos.mobileNum == null ? "NA" : this.resultDtos.mobileNum);
            this.mainEmailId = (this.resultDtos.emailId == null ? "NA" : this.resultDtos.emailId);
            this.transportId = (this.resultDtos.transportId == null ? "NA" : this.resultDtos.transportId);
            this.sourcePrint = this.resultDtos.source.toUpperCase();
            this.destinationPrint = this.resultDtos.destination.toUpperCase();
            this.entryByPrint = this.resultDtos.entryBy.toUpperCase();
            //            console.log( 'entry Print :' + this.entryByPrint );
            if ((this.resultDtos.lrEntryCopyType != null) && (this.resultDtos.lrEntryCopyType == 'ALL')) {
                this.showPrintForOtherBooking = true;
                //                console.log( this.resultDtos.lrEntryCopyType );
            }
            // update in database
            //            if ( ( ( this.mainStationForPrint == 'LrEntryPrintAll For Single Station' ) && ( this.actualPrintMode == 'original' ) ) || ( ( this.mainStationForPrint == 'LrEntryPrintAll For Different Station' ) && ( this.actualPrintMode == 'duplicate' ) ) ) {
            //                if ( this.resultDtos.lrEntryCopyType = 'ALL' ) {
            //                    this.resultDtos.lrConsigneeCopy = true;
            //                    this.resultDtos.lrConsignorCopy = true;
            //                    this.resultDtos.lrLorryCopy = true;
            //                }
            //                this.updateLrCopyDetails();
            //            }
            if (this.resultDtos.mainstation.toLowerCase() != null
                && ((this.resultDtos.mainstation.toLowerCase() == 'mumbai' && this.actualPrintMode == 'original') || ((this.resultDtos.mainstation.toLowerCase() == 'delhi' || this.resultDtos.mainstation.toLowerCase() == 'mumbai') && this.actualPrintMode == 'duplicate'))) {
                if (this.resultDtos.lrEntryCopyType == 'ALL') {
                    this.resultDtos.lrConsigneeCopy = true;
                    this.resultDtos.lrConsignorCopy = true;
                    this.resultDtos.lrLorryCopy = true;
                }
                this.updateLrCopyDetails();
            }
        }
        else {
            this.showPrintForLocalBooking = true;
        }
    };
    //For Clearing the Print Fields
    LrEntryFormPrint2Component.prototype.clearPrintFields = function () {
        this.dataForPrint = '';
        this.resultDtos = new src_app_dto_LR_dto__WEBPACK_IMPORTED_MODULE_4__["LRDto"]();
        this.showPrintForOtherBooking = false;
        this.showPrintForLocalBooking = false;
        this.actualPrintMode = null;
        this.totPaid = '';
        this.totToPay = '';
        this.artSize = '';
        this.gatePass = '';
        this.ccAttach = '';
        this.eSugam = '';
        this.gateCcESugam = '';
        this.artChgWt = '';
        this.handleWitCare = '';
        this.toBeBilled = '';
        this.toBeBilled1 = '';
        this.unloadByCsn = '';
        this.eDecCom = '';
        this.gateCc = '';
        this.selfLr = '';
        this.showSelfLr = false;
        this.address = '';
        this.addressSplit = [];
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.pinCode = '';
        this.phone = '';
        this.cityPin = '';
        this.emailId = '';
        this.subCommodity = '';
        this.clerkName = '';
        this.message = '';
        this.printMode = '';
        //
        this.mainAddress = '';
        this.mainMobileNo = '';
        this.mainEmailId = '';
        this.transportId = '';
        this.sourcePrint = '';
        this.destinationPrint = '';
        this.entryByPrint = '';
        this.slash = '';
        this.slashInCode = '';
        this.ViewToPay = false;
        this.ViewPaid = false;
        //        console.log( 'Its Cleared' );
    };
    LrEntryFormPrint2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lrentryform-print2',
            template: __webpack_require__(/*! ./lrentryform-print2.component.html */ "./src/app/lr/entry/lrentryform-print2/lrentryform-print2.component.html"),
            styles: [__webpack_require__(/*! ./lrentryform-print2.component.css */ "./src/app/lr/entry/lrentryform-print2/lrentryform-print2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            src_app_dataService_masterread_service__WEBPACK_IMPORTED_MODULE_3__["MasterReadService"]])
    ], LrEntryFormPrint2Component);
    return LrEntryFormPrint2Component;
}());



/***/ }),

/***/ "./src/app/lr/entry/miss-agents/miss-agents.component.css":
/*!****************************************************************!*\
  !*** ./src/app/lr/entry/miss-agents/miss-agents.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below code we add to view the option in popup modal starts  */\n::ng-deep .cdk-overlay-container {\n\t/* Do you changes here */\n\tposition: fixed;\n\tz-index: 9999;\n}\n::ng-deep .cdk-overlay-pane {\n\tz-index: 9999;\n}\n/* the below code we add to view the option in popup modal ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHIvZW50cnkvbWlzcy1hZ2VudHMvbWlzcy1hZ2VudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRUFBcUU7QUFDckU7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZDtBQUVEO0NBQ0MsY0FBYztDQUNkO0FBQ0Qsa0VBQWtFIiwiZmlsZSI6InNyYy9hcHAvbHIvZW50cnkvbWlzcy1hZ2VudHMvbWlzcy1hZ2VudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRoZSBiZWxvdyBjb2RlIHdlIGFkZCB0byB2aWV3IHRoZSBvcHRpb24gaW4gcG9wdXAgbW9kYWwgc3RhcnRzICAqL1xuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuXHQvKiBEbyB5b3UgY2hhbmdlcyBoZXJlICovXG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogOTk5OTtcbn1cblxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcblx0ei1pbmRleDogOTk5OTtcbn1cbi8qIHRoZSBiZWxvdyBjb2RlIHdlIGFkZCB0byB2aWV3IHRoZSBvcHRpb24gaW4gcG9wdXAgbW9kYWwgZW5kcyAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/lr/entry/miss-agents/miss-agents.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/lr/entry/miss-agents/miss-agents.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t<ng-template #content let-a=\"close\" let-b=\"close\" let-c=\"close\"\n\t\t\t\tlet-d=\"dismiss\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">LR Entry Missed\n\t\t\t\t\tLRs Agent</h6>\n\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"agentName\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Agent Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Agent\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t*ngIf=\"(agentNameOptions | filter: control.value) as resultAgentName\">\n\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultAgentName\"\n\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultAgentName.length\">No\n\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"lrName\">\n\t\t\t\t\t\t\t\t\t\t<label>LR Number :</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"remarks\">\n\t\t\t\t\t\t\t\t\t\t<label>Remarks :</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"a('Next click')\" disabled>Next</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"b('Finish click')\">Finish</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"c('Reset click')\">Reset</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"d('Close click')\">Close</button>\n\t\t\t</div>\n\t\t\t</ng-template>\n\n\t\t\t<a style=\"cursor: pointer; color: blue; font-weight: bolder;\"\n\t\t\t\t(click)=\"open2(content)\">Click Here</a>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/lr/entry/miss-agents/miss-agents.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/lr/entry/miss-agents/miss-agents.component.ts ***!
  \***************************************************************/
/*! exports provided: MissAgentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissAgentsComponent", function() { return MissAgentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for popup modal starts 

//for popup modal endss 
//for the select option with filter starts

//for the select option with filter ends
var MissAgentsComponent = /** @class */ (function () {
    function MissAgentsComponent(modalService) {
        this.modalService = modalService;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.agentNameOptions = [
            { id: 1, label: 'AGRA' },
            { id: 2, label: 'ANDHERI' },
            { id: 3, label: 'BAWANA' },
            { id: 3, label: 'BUDHPUR' }
        ];
    }
    //for popup modal starts 
    MissAgentsComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    MissAgentsComponent.prototype.getDismissReason = function (reason) {
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
    //for popup modal ends 
    MissAgentsComponent.prototype.ngOnInit = function () {
    };
    //for the select option with filter starts
    MissAgentsComponent.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return items;
        }
        return items.filter(function (item) {
            return item[labelKey || 'label']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        });
    };
    MissAgentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-miss-agents',
            template: __webpack_require__(/*! ./miss-agents.component.html */ "./src/app/lr/entry/miss-agents/miss-agents.component.html"),
            styles: [__webpack_require__(/*! ./miss-agents.component.css */ "./src/app/lr/entry/miss-agents/miss-agents.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], MissAgentsComponent);
    return MissAgentsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-lr-entry-entry-module.js.map