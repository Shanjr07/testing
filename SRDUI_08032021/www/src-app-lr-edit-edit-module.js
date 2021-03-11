(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-lr-edit-edit-module"],{

/***/ "./src/app/lr/edit/edit.module.ts":
/*!****************************************!*\
  !*** ./src/app/lr/edit/edit.module.ts ***!
  \****************************************/
/*! exports provided: EditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModule", function() { return EditModule; });
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
/* harmony import */ var src_app_lr_edit_edit_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/lr/edit/edit.routing */ "./src/app/lr/edit/edit.routing.ts");
/* harmony import */ var src_app_lr_edit_lr_edit_lr_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/lr/edit/lr-edit/lr-edit.component */ "./src/app/lr/edit/lr-edit/lr-edit.component.ts");
/* harmony import */ var src_app_lr_edit_invoice_lr_edit_invoice_lr_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/lr/edit/invoice-lr-edit/invoice-lr-edit.component */ "./src/app/lr/edit/invoice-lr-edit/invoice-lr-edit.component.ts");
/* harmony import */ var src_app_lr_edit_lrs_short_and_extra_lrs_short_and_extra_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/lr/edit/lrs-short-and-extra/lrs-short-and-extra.component */ "./src/app/lr/edit/lrs-short-and-extra/lrs-short-and-extra.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//for select option search starts








var EditModule = /** @class */ (function () {
    function EditModule() {
    }
    EditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(src_app_lr_edit_edit_routing__WEBPACK_IMPORTED_MODULE_10__["EditRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_8__["AutocompleteModule"], src_app_report_daily_report_daily_report_module__WEBPACK_IMPORTED_MODULE_9__["DailyReportModule"]],
            declarations: [
                src_app_lr_edit_lr_edit_lr_edit_component__WEBPACK_IMPORTED_MODULE_11__["LrEditComponent"],
                src_app_lr_edit_invoice_lr_edit_invoice_lr_edit_component__WEBPACK_IMPORTED_MODULE_12__["InvoiceLrEditComponent"],
                src_app_lr_edit_lrs_short_and_extra_lrs_short_and_extra_component__WEBPACK_IMPORTED_MODULE_13__["LrsShortAndExtraComponent"],
            ]
        })
    ], EditModule);
    return EditModule;
}());



/***/ }),

/***/ "./src/app/lr/edit/edit.routing.ts":
/*!*****************************************!*\
  !*** ./src/app/lr/edit/edit.routing.ts ***!
  \*****************************************/
/*! exports provided: EditRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoutes", function() { return EditRoutes; });
/* harmony import */ var src_app_lr_edit_lr_edit_lr_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lr/edit/lr-edit/lr-edit.component */ "./src/app/lr/edit/lr-edit/lr-edit.component.ts");
/* harmony import */ var src_app_lr_edit_invoice_lr_edit_invoice_lr_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lr/edit/invoice-lr-edit/invoice-lr-edit.component */ "./src/app/lr/edit/invoice-lr-edit/invoice-lr-edit.component.ts");
/* harmony import */ var src_app_lr_edit_lrs_short_and_extra_lrs_short_and_extra_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lr/edit/lrs-short-and-extra/lrs-short-and-extra.component */ "./src/app/lr/edit/lrs-short-and-extra/lrs-short-and-extra.component.ts");



var EditRoutes = [
    {
        path: '',
        children: [
            {
                path: 'lredit',
                component: src_app_lr_edit_lr_edit_lr_edit_component__WEBPACK_IMPORTED_MODULE_0__["LrEditComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'invoicelredit',
                component: src_app_lr_edit_invoice_lr_edit_invoice_lr_edit_component__WEBPACK_IMPORTED_MODULE_1__["InvoiceLrEditComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }, {
                path: 'lrsShortAndExtra',
                component: src_app_lr_edit_lrs_short_and_extra_lrs_short_and_extra_component__WEBPACK_IMPORTED_MODULE_2__["LrsShortAndExtraComponent"],
                data: {
                    title: 'SRD Surface Application'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/lr/edit/invoice-lr-edit/invoice-lr-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/lr/edit/invoice-lr-edit/invoice-lr-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xyL2VkaXQvaW52b2ljZS1sci1lZGl0L2ludm9pY2UtbHItZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/lr/edit/invoice-lr-edit/invoice-lr-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/lr/edit/invoice-lr-edit/invoice-lr-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\n\t\t<div class=\"card \" style=\"border: 1px solid darkcyan !important;\">\n\t\t\t<div class=\"card-header bg-info\"\n\t\t\t\tstyle=\"background-color: orange !important; padding: 5px;\">\n\t\t\t\t<h6 class=\"card-title text-white\">Edit Cretaria</h6>\n\t\t\t</div>\n\t\t\t<div class=\"row system_responsive\" style=\"margin-bottom: 10px;\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<!-- <h6 class=\"card-title\">Tempo Details</h6> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Edit By</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"editBy\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"editBy\" #editBy\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"editByMethod(editBy.value)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected value=\"lrEdit\">LR</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"invoiceEdit\">Invoice</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"invoiceNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Invoice Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"editView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"enterAdditionLrNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Enter Addition LR No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <div *ngIf=\"invoiceView\" class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"invoiceDate\">\n                          <label>Invoice Date</label>\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\" fas fa-hashtag\"></i>\n                            </span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                        </div>\n                      </div>\n                    </div> -->\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoiceView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"source\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Source</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"invoiceView\" class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Destination</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-hashtag\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\tid=\"searchBtn\">Search</button>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-dark\" id=\"clearBtn\">Clear</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-9 vl\">\n\t\t\t\t\t<div *ngIf=\"editView\" class=\"row\">\n\t\t\t\t\t\t<!-- column -->\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<h6 class=\"card-title border_bottom\">Invoice LR Edit</h6>\n\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t<table datatable\n\t\t\t\t\t\t\t\t\tclass=\"table table-striped table-bordered row-border hover\"\n\t\t\t\t\t\t\t\t\t[dtOptions]=\"dtOptionsLrDetails\"\n\t\t\t\t\t\t\t\t\t[dtTrigger]=\"dtTriggerLrDetails\">\n\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>LR Number</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Articles</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Act.Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Chg.Wgt</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>To Pay</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Paid</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Goods Value</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Booking Date</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Consignee</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Destination</th>\n\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let lrDetailsData of lrDetailsDataList \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.lrNumber }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.articles}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.actualWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.chargedWeight }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.toPay }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.paid }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.goodsValue }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.bookingDate }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.consignee }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ lrDetailsData.destination }}</td>\n\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngIf = \"supList.length==0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"9\">No Data To Display</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>-->\n\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t\t\t\t<hr style=\"width: 80%; border-top: none; margin: 3px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: left;\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"updateBtn\">Update</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"invoiceView\" class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h6>Trip Details</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"gurWt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Gur Wt</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"kantaWt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Kanta Wt</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-weight\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4 vl\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h6>Vehicle Details</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"loaderName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Loader Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Loader\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(loaderNameOptions | filter: control.value) as resultLoaderName\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultLoaderName\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultLoaderName.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"truckNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Truck Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Truck\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(truckNumberOptions | filter: control.value) as resultTruckNumber\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultTruckNumber\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultTruckNumber.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"supplier\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Supplier</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Supplier\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(supplierOptions | filter: control.value) as resultSupplier\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultSupplier\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultSupplier.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"driverName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Driver Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Driver\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(driverNameOptions | filter: control.value) as resultDriverName\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDriverName\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDriverName.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"LicenceNo\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Licence No</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-id-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-4 vl\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h6>Hire & Date Details</h6>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"totalHire\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Total Hire</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"advance\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Advance</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"balance\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Balance</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\" fas fa-rupee-sign\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"departureDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Depature Date</label> <input class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"yyyy-mm-dd\" name=\"depatureDates\" ngbDatepicker\n\t\t\t\t\t\t\t\t\t\t\t\t\t#depatureDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"depatureDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"departureTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Departure Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Time\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(departureTimeOptions | filter: control.value) as resultDepartureTime\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultDepartureTime\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultDepartureTime.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Date</label> <input id=\"scheduledDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"scheduledDates\" ngbDatepicker #scheduledDates=\"ngbDatepicker\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" (click)=\"scheduledDates.toggle()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"scheduledTime\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Scheduled Time</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"auto_selectOption input is-medium\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Time\" [formControl]=\"control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[appAutocomplete]=\"autocomplete\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<app-autocomplete #autocomplete=\"appAutocomplete\">\n\t\t\t\t\t\t\t\t\t\t<ng-template appAutocompleteContent> <ng-container\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(scheduledTimeOptions | filter: control.value) as resultScheduledTime\">\n\t\t\t\t\t\t\t\t\t\t<app-option *ngFor=\"let option of resultScheduledTime\"\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option.label\"> {{ option.label }} </app-option> <app-option\n\t\t\t\t\t\t\t\t\t\t\tclass=\"no-result\" *ngIf=\"!resultScheduledTime.length\">No\n\t\t\t\t\t\t\t\t\t\tresult</app-option> </ng-container> </ng-template> </app-autocomplete>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr style=\"width: 95%;\">\n\t\t\t\t\t\t<div class=\"col-md-12\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success m-r-10\"\n\t\t\t\t\t\t\t\tid=\"updateBtn\">Update</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"col-md-6\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h3 class=\"card-title\">Datepicker in a popup</h3>\n                <h6 class=\"card-subtitle\">This is datepicker with popup</h6>\n                <form class=\"form-inline\">\n                  <div class=\"form-group\">\n                    <div class=\"input-group\">\n                      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d>\n                      <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-secondary no-shadow\" (click)=\"d.toggle()\" type=\"button\">\n                          <i class=\"fa fa-calendar\"></i>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n\n                <!-- <hr/>\n                <pre>Model: {{ model2 | json }}</pre> \n              </div>\n            </div>\n          </div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row -->\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/lr/edit/invoice-lr-edit/invoice-lr-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/lr/edit/invoice-lr-edit/invoice-lr-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: InvoiceLrEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceLrEditComponent", function() { return InvoiceLrEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataService/master-service */ "./src/app/dataService/master-service.ts");
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

//from the particular global folder starts

//for datepicker ends
//for datepicker starts
var my = new Date();
//for datepicker ends
//for the select option with filter starts

//for the select option with filter ends


var InvoiceLrEditComponent = /** @class */ (function () {
    function InvoiceLrEditComponent(lrDetailsRpt) {
        this.lrDetailsRpt = lrDetailsRpt;
        this.editView = true;
        this.invoiceView = false;
        //for datepicker ends
        this.loadingIndicator = true;
        //for datepicker ends
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.truckNumberOptions = [
            { id: 1, label: 'TN2215222' },
            { id: 2, label: 'TN2215223' },
            { id: 3, label: 'TN2215224' },
            { id: 3, label: 'TN2215225' }
        ];
        this.loaderNameOptions = [
            { id: 1, label: 'ADHARSH' },
            { id: 2, label: 'ADHIK' },
            { id: 3, label: 'AFZAL' },
            { id: 3, label: 'A.QADAR' }
        ];
        this.supplierOptions = [
            { id: 1, label: 'A R C LOGISTICS' },
            { id: 2, label: 'ANIL MOTORS' },
            { id: 3, label: 'ARL ROADLINES' },
            { id: 3, label: 'B D SHARMA' }
        ];
        this.driverNameOptions = [
            { id: 1, label: 'PONDY' },
            { id: 2, label: 'RAWANAN' },
            { id: 3, label: 'GOPI' },
            { id: 3, label: 'KRISHNAN' }
        ];
        this.departureTimeOptions = [
            { id: 1, label: '12:10Am' },
            { id: 2, label: 'RAWANAN' },
            { id: 3, label: 'GOPI' },
            { id: 3, label: 'KRISHNAN' }
        ];
        this.scheduledTimeOptions = [
            { id: 1, label: 'PONDY' },
            { id: 2, label: 'RAWANAN' },
            { id: 3, label: 'GOPI' },
            { id: 3, label: 'KRISHNAN' }
        ];
        this.dtTriggerLrDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    InvoiceLrEditComponent.prototype.rerender = function () {
        this.dtElements.forEach(function (dtElement) {
            dtElement.dtInstance.then(function (dtInstance) {
                // Do your stuff
                dtInstance.destroy();
            });
        });
    };
    InvoiceLrEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionsLrDetails = {
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
        this.getDataFrmServiceFrTable = this.lrDetailsRpt.getSummaryData();
        this.onDestroyUnsubscribtionLrDetails = this.getDataFrmServiceFrTable.subscribe(function (data) {
            _this.lrDetailsDataList = data['data'];
            _this.dtTriggerLrDetails.next();
        });
        //the below code is for the getting data through json ends
    };
    InvoiceLrEditComponent.prototype.ngOnDestroy = function () {
        this.dtTriggerLrDetails.unsubscribe();
        this.onDestroyUnsubscribtionLrDetails.unsubscribe();
    };
    //for datepicker
    // the selectToday is the method for  selecting todays'z date
    InvoiceLrEditComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    //for datePicker
    //for the select option with filter starts
    InvoiceLrEditComponent.prototype.transform = function (items, searchTerm, labelKey) {
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
    // the below is for show and hide
    InvoiceLrEditComponent.prototype.editByMethod = function (editBy) {
        if (editBy === 'lrEdit') {
            this.editView = true;
            this.invoiceView = false;
        }
        else if (editBy === 'invoiceEdit') {
            this.editView = false;
            this.invoiceView = true;
        }
        else {
            this.editView = false;
            this.invoiceView = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], InvoiceLrEditComponent.prototype, "dtElements", void 0);
    InvoiceLrEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-lr-edit',
            template: __webpack_require__(/*! ./invoice-lr-edit.component.html */ "./src/app/lr/edit/invoice-lr-edit/invoice-lr-edit.component.html"),
            styles: [__webpack_require__(/*! ./invoice-lr-edit.component.css */ "./src/app/lr/edit/invoice-lr-edit/invoice-lr-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_dataService_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], InvoiceLrEditComponent);
    return InvoiceLrEditComponent;
}());



/***/ }),

/***/ "./src/app/lr/edit/lr-edit/lr-edit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lr/edit/lr-edit/lr-edit.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the below css is done for the verticle form starts here*/\n\nhr {\n  margin-bottom: 5px;\n  margin-top: 0pX;\n}\n\n.btn {\n  padding: 0px 10px 0px 10px;\n}\n\n.card-body {\n  padding: 10px 0px 0px 10px;\n}\n\n/* the below css is done for the verticle form ends here */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHIvZWRpdC9sci1lZGl0L2xyLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7O0FBRTVEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLDJCQUEyQjtDQUM1Qjs7QUFFRCwyREFBMkQiLCJmaWxlIjoic3JjL2FwcC9sci9lZGl0L2xyLWVkaXQvbHItZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGhlIGJlbG93IGNzcyBpcyBkb25lIGZvciB0aGUgdmVydGljbGUgZm9ybSBzdGFydHMgaGVyZSovXG5cbmhyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiAwcFg7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDBweCAxMHB4O1xufVxuXG4vKiB0aGUgYmVsb3cgY3NzIGlzIGRvbmUgZm9yIHRoZSB2ZXJ0aWNsZSBmb3JtIGVuZHMgaGVyZSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/lr/edit/lr-edit/lr-edit.component.html":
/*!********************************************************!*\
  !*** ./src/app/lr/edit/lr-edit/lr-edit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\n<div class=\"row\">\n\n  <div class=\"col-lg-12\">\n\n    <div class=\"card \" style=\"border: 1px solid darkcyan!important;\">\n      <div class=\"card-header bg-info\" style=\"background-color: orange!important;padding:5px;\">\n        <h6 class=\"card-title text-white\">LR Edit </h6>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-md-4\">\n                  <div class=\"form-group\">\n                    <!-- <label>Lr Number</label> -->\n                    <div class=\"input-group\" id=\"editWithLrNumber\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                          <i class=\"fas fa-clipboard\"></i>\n                        </span>\n                      </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter LR number here.....\" aria-describedby=\"basic-addon11\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 col-md-8\">\n                  <button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"getBtn\">Get Details</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-md-4\">\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n      <hr style=\"margin:0px;\">\n      <div class=\"row system_responsive\" style=\"margin-bottom:10px;\">\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"card\" style=\"margin:0px;\">\n                <div class=\"card-body\">\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"destination\">\n                        <label>Destination</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\" fas fa-road\"></i>\n                          </span>\n                        </div>\n                        <select class=\"custom-select col-12\">\n                          <option selected></option>\n                          <option value=\"1\"></option>\n                          <option value=\"2\"></option>\n                          <option value=\"3\"></option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"agentName\">\n                        <label>Agent Name</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"ti-user\"></i>\n                          </span>\n                        </div>\n                        <select class=\"custom-select col-12\">\n                          <option selected></option>\n                          <option value=\"1\"></option>\n                          <option value=\"2\"></option>\n                          <option value=\"3\"></option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"partyGoodsType\">\n                        <label>Party Goods Type</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fas fa-box-open\"></i>\n                          </span>\n                        </div>\n                        <select class=\"custom-select col-12\">\n                          <option selected></option>\n                          <option value=\"1\"></option>\n                          <option value=\"2\"></option>\n                          <option value=\"3\"></option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"article\">\n                        <label>Article</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\" fas fa-clone\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"commodityDescription\">\n                        <label>Commodity Desc.</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fas fa-clipboard-list\"></i>\n                          </span>\n                        </div>\n                        <select class=\"custom-select col-12\">\n                          <option selected>NA</option>\n                          <option value=\"1\"></option>\n                          <option value=\"2\"></option>\n                          <option value=\"3\"></option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"actualWeight\">\n                        <label>Actual Weight </label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fas fa-weight\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"chargedWeight\">\n                        <label>Charged Weight</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fas fa-weight\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"packNature\">\n                        <label>Pack Nature</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\" fas fa-truck-loading\"></i>\n                          </span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"goodsValue\">\n                        <label>Goods Value</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fas fa-rupee-sign\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"pvtMark\">\n                        <label>PVT Mark</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\" fas fa-paint-brush\"></i>\n                          </span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group \" id=\"articleSize\">\n                        <label>Article Size</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\" fas fa-file-alt\"></i>\n                          </span>\n                        </div>\n                        <a class=\"form-control\"></a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 vl\">\n              <div class=\"card\" style=\"margin:0px;\">\n                <div class=\"card-body\">\n                  <h6 class=\"card-title\">Party Details</h6>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"consignorGstNumber\">\n                        <label>Conr GST Number </label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"ti-user\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"consignorName\">\n                        <label>Consignor Name</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\" fas fa-user\"></i>\n                          </span>\n                        </div>\n                        <select class=\"custom-select col-12\">\n                          <option selected></option>\n                          <option value=\"1\"></option>\n                          <option value=\"2\"></option>\n                          <option value=\"3\"></option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"consigneeGstNumber\">\n                        <label>Cone GST Number </label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"ti-user\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"consigneeName\">\n                        <label>Consignee Name</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\" fas fa-user\"></i>\n                          </span>\n                        </div>\n                        <select class=\"custom-select col-12\">\n                          <option selected></option>\n                          <option value=\"1\"></option>\n                          <option value=\"2\"></option>\n                          <option value=\"3\"></option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <hr>\n                  <h6 class=\"card-title\">Freight Details</h6>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"baseFreight\">\n                        <label>Base Freight</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fas fa-rupee-sign\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"hamali\">\n                        <label>Hamali</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fas fa-rupee-sign\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"gcCharges\">\n                        <label>GC.Charges</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fas fa-rupee-sign\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"lc\">\n                        <label>LC</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fas fa-rupee-sign\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"bc\">\n                        <label>BC</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fas fa-rupee-sign\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"fov\">\n                        <label>F.O.V</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fas fa-rupee-sign\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\" readonly>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr>\n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <div class=\"col-md-6 vl\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"aoc\">\n                          <label>A.O.C</label>\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div>\n                          <input type=\"number\" class=\"form-control\" aria-describedby=\" basic-addon11 \">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-12 \">\n                      <div class=\"form-group \">\n                        <div class=\"input-group \" id=\"others \">\n                          <label>Others</label>\n                          <div class=\"input-group-prepend \">\n                            <span class=\"input-group-text \">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div>\n                          <input type=\"number\" class=\"form-control \" aria-describedby=\"basic-addon11 \">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-12 \">\n                      <div class=\"form-group \">\n                        <div class=\"input-group \">\n                          <label>Door Delivery</label>\n                          <div class=\"input-group-prepend \">\n                            <span class=\"input-group-text \">\n                              <i class=\" fas fa-truck \"></i>\n                            </span>\n                          </div>\n                          <select class=\"custom-select col-12\" id=\"doorDeliveryMode\" name=\"doorDeliveryMode\" #doorDeliveryMode (change)=\"doorDeliMode(doorDeliveryMode.value)\">\n                            <option selected>No</option>\n                            <option value=\"yes\">Yes</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                    <div *ngIf=\"doorDeliveryYes\" class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group \">\n                        <div class=\"input-group \" id=\"ddAddress \">\n                          <label>DD Address</label>\n                          <div class=\"input-group-prepend \">\n                            <span class=\"input-group-text \">\n                              <i class=\" fas fa-hashtag \"></i>\n                            </span>\n                          </div>\n                          <textarea class=\"form-control \" rows=\"1 \"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                    <div *ngIf=\"doorDeliveryYes\" class=\"col-sm-12 col-md-12 \">\n                      <div class=\"form-group \">\n                        <div class=\"input-group \" id=\"dd \">\n                          <label>DD</label>\n                          <div class=\"input-group-prepend \">\n                            <span class=\"input-group-text \">\n                              <i class=\"fas fa-hashtag \"></i>\n                            </span>\n                          </div>\n                          <input type=\"number \" class=\"form-control \" aria-describedby=\"basic-addon11 \">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-12 \">\n                      <div class=\"form-group \">\n                        <div class=\"input-group \" id=\"totalAmount \">\n                          <label>Total Amount</label>\n                          <div class=\"input-group-prepend \">\n                            <span class=\"input-group-text \">\n                              <i class=\"fas fa-rupee-sign \"></i>\n                            </span>\n                          </div>\n                          <input type=\"number \" class=\"form-control \" aria-describedby=\"basic-addon11 \" readonly>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-12 \">\n                      <div class=\"form-group \">\n                        <div class=\"input-group \" id=\"billNo \">\n                          <label>Bill No.</label>\n                          <div class=\"input-group-prepend \">\n                            <span class=\"input-group-text \">\n                              <i class=\"fas fa-hashtag \"></i>\n                            </span>\n                          </div>\n                          <input type=\"text \" class=\"form-control \" aria-describedby=\"basic-addon11 \">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <label>Payment Type</label>\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-rupee-sign\"></i>\n                            </span>\n                          </div>\n                          <select class=\"custom-select col-12\" id=\"paymentType\" name=\"paymentType\" #paymentType (change)=\"paymentTypeMode(paymentType.value)\">\n                            <option selected>To Pay</option>\n                            <option value=\"paid\">Paid</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                    <div *ngIf=\"paymentTypePaid\" class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"serTaxPayingBy\">\n                          <label>\n                            Ser Tax Paying By\n                          </label>\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\" fas fa-user\"></i>\n                            </span>\n                          </div>\n                          <select class=\"custom-select col-12\">\n                            <option selected>Consignor</option>\n                            <option value=\"1\">GTA</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"bankLr\">\n                          <label>Bank LR</label>\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fas fa-university\"></i>\n                            </span>\n                          </div>\n                          <select class=\"custom-select col-12\">\n                            <option selected>No</option>\n                            <option value=\"1\">Yes</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"eSugamNo\">\n                          <label>E-Sugam No</label>\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\" fas fa-file-alt\"></i>\n                            </span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\" id=\"eWayBillNo\">\n                          <label>E-Way Bill No</label>\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\" fas fa-hashtag\"></i>\n                            </span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 vl\">\n              <div class=\"card\" style=\"margin:0px;\">\n                <div class=\"card-body\">\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"articleChargedWeightExtra\">\n                        <label>Article Charged Weight Extra</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\" fas fa-hashtag\"></i>\n                          </span>\n                        </div>\n                        <input type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"packNature\">\n                        <label>Pack Nature</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\" fas fa-file-alt\"></i>\n                          </span>\n                        </div>\n                        <a class=\"form-control\"></a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"remarks\">\n                        <label>Remarks</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\" fas fa-hashtag\"></i>\n                          </span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" aria-describedby=\"basic-addon11\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxAoc\">\n                        <label class=\"custom-control-label wtfull\" for=\"checkboxAoc\">AOC</label>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngIf=\"paymentTypePaid\" class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxToBeBilled\">\n                        <label class=\"custom-control-label wtfull\" for=\"checkboxToBeBilled\">To Be Billed</label>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxPickupLr\">\n                        <label class=\"custom-control-label wtfull\" for=\"checkboxPickupLr\">Pickup LR </label>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxunloadedByConsignee\">\n                        <label class=\"custom-control-label wtfull\" for=\"checkboxunloadedByConsignee\">Unloaded By Consignee</label>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxHandleWithCare\">\n                        <label class=\"custom-control-label wtfull\" for=\"checkboxHandleWithCaree\">Handle With Care</label>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxGatePass\">\n                        <label class=\"custom-control-label wtfull\" for=\"checkboxGatePass\">Gate Pass</label>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxCcAttach\">\n                        <label class=\"custom-control-label wtfull\" for=\"checkboxCcAttach\">C.C.Attach</label>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxSelfLr\">\n                        <label class=\"custom-control-label wtfull\" for=\"checkboxSelfLr\">Self LR</label>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"custom-control custom-checkbox\">\n\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxCOD\">\n                        <label class=\"custom-control-label wtfull\" for=\"checkboxCOD\">COD</label>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"custom-control custom-checkbox\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxOrderGoods\">\n                        <label class=\"custom-control-label wtfull\" for=\"checkboxOrderGoods\">Order Goods</label>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" id=\"reasonForDelete\">\n                        <label>Reason For Delete</label>\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\" fas fa-hashtag\"></i>\n                          </span>\n                        </div>\n                        <textarea class=\"form-control\" rows=\"1\"></textarea>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr style=\"width:80%;border-top: none;margin:3px;\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\" style=\"text-align:center;\">\n          <button type=\"submit\" class=\"btn btn-dark\" id=\"updateBtn\">Update</button>\n          <button type=\"submit\" class=\"btn btn-dark\" id=\"deleteBtn\">Delete</button>\n          <button type=\"submit\" class=\"btn btn-success m-r-10\" id=\"clearBtn\">Clear</button>\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n      <!-- Row -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/lr/edit/lr-edit/lr-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lr/edit/lr-edit/lr-edit.component.ts ***!
  \******************************************************/
/*! exports provided: LrEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrEditComponent", function() { return LrEditComponent; });
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

var LrEditComponent = /** @class */ (function () {
    function LrEditComponent() {
        this.doorDeliveryYes = false;
        this.paymentTypePaid = false;
    }
    LrEditComponent.prototype.doorDeliMode = function (doorDelivery) {
        if (doorDelivery === 'yes') {
            this.doorDeliveryYes = true;
        }
        else {
            this.doorDeliveryYes = false;
        }
    };
    LrEditComponent.prototype.paymentTypeMode = function (paymentType) {
        if (paymentType === 'paid') {
            this.paymentTypePaid = true;
        }
        else {
            this.paymentTypePaid = false;
        }
    };
    LrEditComponent.prototype.ngOnInit = function () {
    };
    LrEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lr-edit',
            template: __webpack_require__(/*! ./lr-edit.component.html */ "./src/app/lr/edit/lr-edit/lr-edit.component.html"),
            styles: [__webpack_require__(/*! ./lr-edit.component.css */ "./src/app/lr/edit/lr-edit/lr-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LrEditComponent);
    return LrEditComponent;
}());



/***/ }),

/***/ "./src/app/lr/edit/lrs-short-and-extra/lrs-short-and-extra.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/lr/edit/lrs-short-and-extra/lrs-short-and-extra.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xyL2VkaXQvbHJzLXNob3J0LWFuZC1leHRyYS9scnMtc2hvcnQtYW5kLWV4dHJhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/lr/edit/lrs-short-and-extra/lrs-short-and-extra.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/lr/edit/lrs-short-and-extra/lrs-short-and-extra.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group\" id=\"popupDetails\">\n\t\t\t<ng-template #content let-a=\"close\" let-b=\"close\" let-d=\"dismiss\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h6 class=\"modal-title\" id=\"modal-basic-title\">Report Short</h6>\n\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"\n\t\t\t\t\t(click)=\"d('Cross click')\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Marks As</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-search\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select col-12\" id=\"marksAs\"\n\t\t\t\t\t\t\t\t\t\t\tname=\"markAs\" #markAs (change)=\"markAsMode(markAs.value)\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"short\">Short</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"extra\">Extra</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"openCondition\">Open Condition</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"wetCondition\">Wet Condition</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"invoiceClear\">Invoice Clear</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"otherView\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"lrNumber\">\n\t\t\t\t\t\t\t\t\t\t\t<label>LR Number :</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"destination\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Destination :</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-road\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"noOfArticles\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Number of Articles :</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-clone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"remarks\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Remarks :</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"invoiceNumber\">\n\t\t\t\t\t\t\t\t\t\t<label>Invoice Number :</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-file-alt\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\" id=\"truckNumber\">\n\t\t\t\t\t\t\t\t\t\t<label>Truck Number :</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"> <i\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-truck\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"basic-addon11\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"a('Save click')\" disabled>Confirm</button>\n\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\"\n\t\t\t\t\t(click)=\"b('Save click')\">Cancel</button>\n\t\t\t</div>\n\t\t\t</ng-template>\n\n\t\t\t<a style=\"cursor: pointer; color: blue; font-weight: bolder;\"\n\t\t\t\t(click)=\"open2(content)\">Click Here</a>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/lr/edit/lrs-short-and-extra/lrs-short-and-extra.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/lr/edit/lrs-short-and-extra/lrs-short-and-extra.component.ts ***!
  \******************************************************************************/
/*! exports provided: LrsShortAndExtraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrsShortAndExtraComponent", function() { return LrsShortAndExtraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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
var LrsShortAndExtraComponent = /** @class */ (function () {
    function LrsShortAndExtraComponent(modalService) {
        this.modalService = modalService;
        this.otherView = true;
    }
    //for popup modal starts 
    LrsShortAndExtraComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LrsShortAndExtraComponent.prototype.getDismissReason = function (reason) {
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
    LrsShortAndExtraComponent.prototype.markAsMode = function (markAs) {
        if (markAs === 'short') {
            this.otherView = true;
        }
        else if (markAs === 'extra') {
            this.otherView = true;
        }
        else if (markAs === 'openCondition') {
            this.otherView = true;
        }
        else if (markAs === 'wetCondition') {
            this.otherView = true;
        }
        else if (markAs === 'invoiceClear') {
            this.otherView = false;
        }
    };
    LrsShortAndExtraComponent.prototype.ngOnInit = function () {
    };
    LrsShortAndExtraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lrs-short-and-extra',
            template: __webpack_require__(/*! ./lrs-short-and-extra.component.html */ "./src/app/lr/edit/lrs-short-and-extra/lrs-short-and-extra.component.html"),
            styles: [__webpack_require__(/*! ./lrs-short-and-extra.component.css */ "./src/app/lr/edit/lrs-short-and-extra/lrs-short-and-extra.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], LrsShortAndExtraComponent);
    return LrsShortAndExtraComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-lr-edit-edit-module.js.map