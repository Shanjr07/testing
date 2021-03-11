(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-lr-lr-module"],{

/***/ "./src/app/lr/lr.module.ts":
/*!*********************************!*\
  !*** ./src/app/lr/lr.module.ts ***!
  \*********************************/
/*! exports provided: LrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrModule", function() { return LrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_lr_lr_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/lr/lr.routing */ "./src/app/lr/lr.routing.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/autocomplete/autocomplete.module */ "./src/app/autocomplete/autocomplete.module.ts");
/* harmony import */ var src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/report/daily-report/daily-report.module */ "./src/app/report/daily-report/daily-report.module.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_lr_enquiry_short_extra_lr_enquiry_popup_short_extra_lr_enquiry_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/lr/enquiry/short-extra-lr-enquiry-popup/short-extra-lr-enquiry-popup.component */ "./src/app/lr/enquiry/short-extra-lr-enquiry-popup/short-extra-lr-enquiry-popup.component.ts");
/* harmony import */ var src_app_lr_enquiry_multiple_article_size_popup_multiple_article_size_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/lr/enquiry/multiple-article-size-popup/multiple-article-size-popup.component */ "./src/app/lr/enquiry/multiple-article-size-popup/multiple-article-size-popup.component.ts");
/* harmony import */ var src_app_lr_entry_automatedlrhold_lr_entry_popup_automatedlrhold_lr_entry_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/lr/entry/automatedlrhold-lr-entry-popup/automatedlrhold-lr-entry-popup.component */ "./src/app/lr/entry/automatedlrhold-lr-entry-popup/automatedlrhold-lr-entry-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/*for old datatable*/ 


//for select option search starts




//for select option search ends
//for drag and drop starts




//for drag and drop ends
var LrModule = /** @class */ (function () {
    function LrModule() {
    }
    LrModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_lr_lr_routing__WEBPACK_IMPORTED_MODULE_4__["LrRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_9__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_10__["DailyReportModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_11__["DragulaModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"]],
            declarations: [
                src_app_lr_enquiry_short_extra_lr_enquiry_popup_short_extra_lr_enquiry_popup_component__WEBPACK_IMPORTED_MODULE_12__["ShortExtraLrEnquiryPopupComponent"], src_app_lr_enquiry_multiple_article_size_popup_multiple_article_size_popup_component__WEBPACK_IMPORTED_MODULE_13__["MultipleArticleSizePopupComponent"], src_app_lr_entry_automatedlrhold_lr_entry_popup_automatedlrhold_lr_entry_popup_component__WEBPACK_IMPORTED_MODULE_14__["AutomatedLrHoldLrEntryPopupComponent"]
            ],
            entryComponents: [src_app_lr_enquiry_short_extra_lr_enquiry_popup_short_extra_lr_enquiry_popup_component__WEBPACK_IMPORTED_MODULE_12__["ShortExtraLrEnquiryPopupComponent"], src_app_lr_enquiry_multiple_article_size_popup_multiple_article_size_popup_component__WEBPACK_IMPORTED_MODULE_13__["MultipleArticleSizePopupComponent"], src_app_lr_entry_automatedlrhold_lr_entry_popup_automatedlrhold_lr_entry_popup_component__WEBPACK_IMPORTED_MODULE_14__["AutomatedLrHoldLrEntryPopupComponent"]]
        })
    ], LrModule);
    return LrModule;
}());



/***/ }),

/***/ "./src/app/lr/lr.routing.ts":
/*!**********************************!*\
  !*** ./src/app/lr/lr.routing.ts ***!
  \**********************************/
/*! exports provided: LrRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrRoutes", function() { return LrRoutes; });
var LrRoutes = [
    {
        path: '',
        children: [
            { path: 'edit', loadChildren: 'src/app/lr/edit/edit.module#EditModule' },
            { path: 'enquiry', loadChildren: 'src/app/lr/enquiry/enquiry.module#EnquiryModule' },
            { path: 'entry', loadChildren: 'src/app/lr/entry/entry.module#EntryModule' },
            { path: 'issue', loadChildren: 'src/app/lr/issue/issue.module#IssueModule' }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=src-app-lr-lr-module.js.map